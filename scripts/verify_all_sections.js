const BASE_URL = process.env.BASE_URL || "http://localhost:3001/api/v1";

async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    ...options
  });
  let data = null;
  try {
    data = await res.json();
  } catch (e) {
    data = null;
  }
  return { status: res.status, ok: res.ok, data };
}

async function runTests() {
  console.log(`Starting section tests against ${BASE_URL}...\n`);
  let passed = 0;
  let failed = 0;
  let notFound = 0;

  async function check(name, method, path, body, validator) {
    const opts = { method };
    if (body) opts.body = JSON.stringify(body);
    const res = await request(path, opts);
    if (res.status === 404) {
      console.error(`❌ [404 NOT FOUND] ${name}: ${method} ${path}`);
      notFound++;
      failed++;
      return null;
    } else if (validator ? validator(res) : (res.status >= 200 && res.status < 300)) {
      console.log(`✅ [${res.status}] ${name}: ${method} ${path}`);
      passed++;
      return res.data?.data;
    } else {
      console.error(`❌ [FAIL ${res.status}] ${name}: ${method} ${path}`, res.data?.errors || res.data);
      failed++;
      return null;
    }
  }

  // 1. Custom Fields Full CRUD (User's specific reported issue)
  await check("Custom Fields List", "GET", "/custom-fields");
  const newField = await check("Custom Fields Add Field (Fix check)", "POST", "/custom-fields", {
    entity: "guards",
    field_key: "aadhaar_verified_date",
    label: "Aadhaar Verified Date",
    field_type: "date",
    is_required: false,
    is_active: 1
  }, (res) => res.status === 201 && res.data?.data?.field_key === "aadhaar_verified_date");

  if (newField?.id) {
    await check("Custom Fields Update Field", "PUT", `/custom-fields/${newField.id}`, {
      label: "Aadhaar Verification Timestamp"
    }, (res) => res.status === 200 && res.data?.data?.label === "Aadhaar Verification Timestamp");

    await check("Custom Fields Delete Field", "DELETE", `/custom-fields/${newField.id}`, null, (res) => res.status === 200);
  }

  // 2. Masters Full CRUD
  await check("Masters List", "GET", "/masters");
  await check("Master Types", "GET", "/masters/types");
  const newMaster = await check("Master Add Item", "POST", "/masters", {
    type: "kit_item",
    code: "NIGHT_VISION_GOGGLES",
    label: "Night Vision Goggles",
    is_active: 1
  }, (res) => res.status === 201);

  if (newMaster?.id) {
    await check("Master Update Item", "PUT", `/masters/${newMaster.id}`, { label: "Thermal Night Vision Goggles" });
    await check("Master Delete Item", "DELETE", `/masters/${newMaster.id}`);
  }

  // 3. Clients & Sites CRUD
  await check("Clients List", "GET", "/clients");
  await check("Sites List", "GET", "/sites");
  const newSite = await check("Sites Add Item", "POST", "/sites", {
    name: "Express Towers Wing B",
    client_id: 1,
    latitude: 19.076,
    longitude: 72.877
  });
  if (newSite?.id) {
    await check("Sites Update Item", "PUT", `/sites/${newSite.id}`, { name: "Express Towers Wing B & C" });
    await check("Sites Delete Item", "DELETE", `/sites/${newSite.id}`);
  }

  // 4. Guards, Kit & Documents
  await check("Guards List", "GET", "/guards");
  await check("Guard Stats", "GET", "/guards/stats");
  await check("Guard Kit List", "GET", "/guard-kit");
  const kit = await check("Guard Issue Kit", "POST", "/guards/1/kit", { item_name: "Torch", serial_no: "TR-102" });
  if (kit?.id) {
    await check("Guard Return Kit", "POST", `/guard-kit/${kit.id}/return`);
    await check("Guard Kit Delete", "DELETE", `/guard-kit/${kit.id}`);
  }

  // 5. Deployments, Shifts & Rosters
  await check("Deployments List", "GET", "/deployments");
  await check("Shifts List", "GET", "/shifts");
  const newShift = await check("Shifts Add Shift", "POST", "/shifts", {
    name: "General Day Shift",
    start_time: "09:00",
    end_time: "18:00"
  });
  if (newShift?.id) {
    await check("Shifts Update Shift", "PUT", `/shifts/${newShift.id}`, { name: "General Day Shift 9to6" });
    await check("Shifts Delete Shift", "DELETE", `/shifts/${newShift.id}`);
  }
  await check("Rosters List", "GET", "/rosters");
  await check("Manpower Requests List", "GET", "/manpower-requests");

  // 6. Checkpoints & Patrols
  await check("Checkpoints List", "GET", "/checkpoints");
  const cp = await check("Checkpoints Add Item", "POST", "/checkpoints", {
    site_id: 1,
    name: "North Perimeter Gate",
    tag_type: "qr"
  });
  if (cp?.id) {
    await check("Checkpoints Update Item", "PUT", `/checkpoints/${cp.id}`, { name: "North Perimeter Gate #1" });
    await check("Checkpoints Delete Item", "DELETE", `/checkpoints/${cp.id}`);
  }
  await check("Patrol Routes List", "GET", "/patrol-routes");
  await check("Patrol Schedules List", "GET", "/patrol-schedules");
  await check("Patrol Scans List", "GET", "/patrol/scans");

  // 7. Attendance & Leaves
  await check("Attendance Daily", "GET", "/attendance/daily");
  await check("Attendance Stats", "GET", "/attendance/stats");
  await check("Leave Requests List", "GET", "/leave-requests");

  // 8. Incidents & SOS
  await check("Incidents List", "GET", "/incidents");
  await check("SOS Active", "GET", "/sos/active");

  // 9. Invoices & Billing
  await check("Invoices List", "GET", "/invoices");
  await check("Credit Notes List", "GET", "/credit-notes");
  const cn = await check("Credit Notes Create", "POST", "/credit-notes", {
    invoice_id: 1,
    client_id: 1,
    reason: "Correction",
    subtotal: 500
  });
  if (cn?.id) {
    await check("Credit Notes Delete", "DELETE", `/credit-notes/${cn.id}`);
  }
  await check("Payments List", "GET", "/payments");

  // 10. Recruitment
  await check("Job Openings List", "GET", "/job-openings");
  const job = await check("Job Opening Add Item", "POST", "/job-openings", {
    title: "CCTV Control Room Operator",
    branch_id: 1,
    open_positions: 2
  });
  if (job?.id) {
    await check("Job Opening Update", "PUT", `/job-openings/${job.id}`, { open_positions: 4 });
    await check("Job Opening Delete", "DELETE", `/job-openings/${job.id}`);
  }
  await check("Candidates List", "GET", "/candidates");

  // 11. CRM & Sales
  await check("Leads List", "GET", "/leads");
  await check("Quotations List", "GET", "/quotations");
  const quote = await check("Quotations Create", "POST", "/quotations", {
    client_name: "Global Mall",
    valid_until: "2026-11-30",
    total_monthly: 120000
  });
  if (quote?.id) {
    await check("Quotations Update", "PUT", `/quotations/${quote.id}`, { total_monthly: 125000 });
    await check("Quotations Delete", "DELETE", `/quotations/${quote.id}`);
  }

  // 12. Payroll & Finance
  await check("Payroll Runs List", "GET", "/payroll-runs");
  await check("Payslips List", "GET", "/payslips");
  await check("Salary Structures List", "GET", "/salary-structures");
  const sal = await check("Salary Structure Add", "POST", "/salary-structures", {
    name: "Mall Supervisor",
    basic: 22000,
    hra: 4000,
    gross: 26000
  });
  if (sal?.id) {
    await check("Salary Structure Update", "PUT", `/salary-structures/${sal.id}`, { gross: 27000 });
    await check("Salary Structure Delete", "DELETE", `/salary-structures/${sal.id}`);
  }
  const adv = await check("Advance Add", "POST", "/advances", { guard_id: 1, amount: 1500, reason: "Medical" });
  if (adv?.id) {
    await check("Advance Delete", "DELETE", `/advances/${adv.id}`);
  }
  const fine = await check("Fine Add", "POST", "/fines", { guard_id: 1, amount: 300, reason: "Late Arrival" });
  if (fine?.id) {
    await check("Fine Delete", "DELETE", `/fines/${fine.id}`);
  }

  // 13. Operations & Contracts
  await check("Contracts List", "GET", "/contracts");
  const cnt = await check("Contracts Add", "POST", "/contracts", {
    client_id: 1,
    contract_number: "CNT-MALL-2026",
    start_date: "2026-02-01",
    end_date: "2027-01-31"
  });
  if (cnt?.id) {
    await check("Contracts Update", "PUT", `/contracts/${cnt.id}`, { is_active: 1 });
    await check("Contracts Delete", "DELETE", `/contracts/${cnt.id}`);
  }

  const req = await check("Site Requirement Add", "POST", "/site-requirements", {
    site_id: 1,
    shift_id: 1,
    count: 3,
    designation: "Patrol Guard"
  });
  if (req?.id) {
    await check("Site Requirement Update", "PUT", `/site-requirements/${req.id}`, { count: 4 });
    await check("Site Requirement Delete", "DELETE", `/site-requirements/${req.id}`);
  }

  const comp = await check("Complaint Add", "POST", "/complaints", {
    client_id: 1,
    site_id: 1,
    category: "Behavior",
    subject: "Courteous behavior inquiry",
    priority: "low"
  });
  if (comp?.id) {
    await check("Complaint Update", "PUT", `/complaints/${comp.id}`, { status: "investigating" });
  }

  // 14. Branches, Roles, Users
  await check("Branches List", "GET", "/branches");
  const br = await check("Branches Add", "POST", "/branches", {
    name: "Thane Branch",
    code: "THN",
    city: "Thane",
    state: "Maharashtra"
  });
  if (br?.id) {
    await check("Branches Update", "PUT", `/branches/${br.id}`, { name: "Thane Central Branch" });
    await check("Branches Delete", "DELETE", `/branches/${br.id}`);
  }

  await check("Roles List", "GET", "/roles");
  const rl = await check("Roles Add", "POST", "/roles", {
    name: "Area Manager",
    description: "Regional Ops Manager",
    permissions: { guards: { read: true, create: true, update: true } }
  });
  if (rl?.id) {
    await check("Roles Update", "PUT", `/roles/${rl.id}`, { description: "Regional Area Manager" });
    await check("Roles Delete", "DELETE", `/roles/${rl.id}`);
  }

  await check("Users List", "GET", "/users");
  const usr = await check("Users Add", "POST", "/users", {
    name: "Sunil Patil",
    email: "sunil.patil@safeguardforce.test",
    mobile: "+919876543111",
    role_id: 1
  });
  if (usr?.id) {
    await check("Users Update", "PUT", `/users/${usr.id}`, { name: "Sunil R. Patil" });
    await check("Users Delete", "DELETE", `/users/${usr.id}`);
  }

  // 15. API Keys, Webhooks, Data Export
  await check("API Keys List", "GET", "/api-keys");
  const key = await check("API Keys Add", "POST", "/api-keys", {
    name: "Mobile App Gate Scanner API",
    modules: ["guards", "patrols"]
  });
  if (key?.id) {
    await check("API Keys Update", "PUT", `/api-keys/${key.id}`, { name: "Mobile App Gate Scanner v2" });
    await check("API Keys Delete", "DELETE", `/api-keys/${key.id}`);
  }

  await check("Webhooks List", "GET", "/webhooks");
  const wh = await check("Webhooks Add", "POST", "/webhooks", {
    url: "https://ops.example.com/stream",
    events: ["incident.created"]
  });
  if (wh?.id) {
    await check("Webhooks Update", "PUT", `/webhooks/${wh.id}`, { url: "https://ops.example.com/v2/stream" });
    await check("Webhooks Delete", "DELETE", `/webhooks/${wh.id}`);
  }

  await check("Data Export History", "GET", "/data-export");
  const de = await check("Data Export Request", "POST", "/data-export", { module: "clients", format: "csv" });
  if (de?.id) {
    await check("Data Export Delete", "DELETE", `/data-export/${de.id}`);
  }

  console.log(`\n================================`);
  console.log(`FINAL RESULTS: ${passed} Passed, ${failed} Failed (${notFound} 404 Not Found)`);
  console.log(`================================`);

  if (notFound > 0 || failed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runTests();
