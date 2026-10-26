const { spawn } = require("child_process");

const routesToTest = [
  // Primary Sidebar Routes
  { name: "Dashboard", url: "http://localhost:3000/" },
  { name: "Clients & sites", url: "http://localhost:3000/clients" },
  { name: "Client Detail #1", url: "http://localhost:3000/clients/1" },
  { name: "Sites List", url: "http://localhost:3000/sites" },
  { name: "Site Detail #1", url: "http://localhost:3000/sites/1" },
  { name: "Shifts List", url: "http://localhost:3000/shifts" },
  { name: "Contracts", url: "http://localhost:3000/contracts" },
  { name: "Contract Detail #1", url: "http://localhost:3000/contracts/1" },
  { name: "Guards", url: "http://localhost:3000/guards" },
  { name: "Guard Detail #1", url: "http://localhost:3000/guards/1" },
  { name: "Deployments", url: "http://localhost:3000/deployments" },
  { name: "Shifts & roster", url: "http://localhost:3000/rosters" },
  { name: "Attendance Dashboard", url: "http://localhost:3000/attendance" },
  { name: "Attendance Daily Sheet", url: "http://localhost:3000/attendance?tab=daily" },
  { name: "Attendance Records", url: "http://localhost:3000/attendance?tab=records" },
  { name: "Attendance Register", url: "http://localhost:3000/attendance?tab=register" },
  { name: "Attendance Live GPS", url: "http://localhost:3000/attendance?tab=live" },
  { name: "Attendance Leaves", url: "http://localhost:3000/attendance?tab=leave" },
  { name: "Patrol Dashboard", url: "http://localhost:3000/patrol" },
  { name: "Patrol Report", url: "http://localhost:3000/patrol?tab=report" },
  { name: "Patrol Rounds", url: "http://localhost:3000/patrol?tab=rounds" },
  { name: "Patrol Checkpoints", url: "http://localhost:3000/patrol?tab=checkpoints" },
  { name: "Patrol Routes", url: "http://localhost:3000/patrol?tab=routes" },
  { name: "Patrol Schedules", url: "http://localhost:3000/patrol?tab=schedules" },
  { name: "Patrol Scans", url: "http://localhost:3000/patrol?tab=scans" },
  { name: "Patrol Visits", url: "http://localhost:3000/patrol?tab=visits" },
  { name: "Incidents List", url: "http://localhost:3000/incidents" },
  { name: "Incident Detail #1", url: "http://localhost:3000/incidents/1" },
  { name: "SOS Alerts", url: "http://localhost:3000/sos" },
  { name: "Payroll Management", url: "http://localhost:3000/payroll" },
  { name: "Payroll Run Detail #1", url: "http://localhost:3000/payroll/runs/1" },
  { name: "Billing & Invoices", url: "http://localhost:3000/billing" },
  { name: "Invoice Detail #1", url: "http://localhost:3000/billing/invoices/1" },
  { name: "Collections & Payments", url: "http://localhost:3000/collections" },
  { name: "Recruitment", url: "http://localhost:3000/recruitment" },
  { name: "Candidate Detail #1", url: "http://localhost:3000/recruitment/candidates/1" },
  { name: "CRM Leads", url: "http://localhost:3000/crm" },
  { name: "Lead Detail #1", url: "http://localhost:3000/crm/leads/1" },
  { name: "Quotation Editor #1", url: "http://localhost:3000/crm/quotations/1" },
  { name: "Client Complaints", url: "http://localhost:3000/complaints" },
  { name: "Reports", url: "http://localhost:3000/reports" },
  { name: "Notifications", url: "http://localhost:3000/notifications" },
  { name: "Branches", url: "http://localhost:3000/branches" },
  { name: "Users", url: "http://localhost:3000/users" },
  { name: "Roles & permissions", url: "http://localhost:3000/roles" },
  { name: "Role Editor #1", url: "http://localhost:3000/roles/1" },
  { name: "Masters", url: "http://localhost:3000/masters" },
  { name: "Custom fields", url: "http://localhost:3000/custom-fields" },
  { name: "Settings", url: "http://localhost:3000/settings" },
  { name: "Audit log", url: "http://localhost:3000/audit-log" },
  { name: "API keys & webhooks", url: "http://localhost:3000/api-keys" },
  { name: "Import & export", url: "http://localhost:3000/data-export" },
  { name: "System health", url: "http://localhost:3000/system" },
  { name: "How to use", url: "http://localhost:3000/help" },
];

async function runAudit() {
  console.log(`Starting comprehensive audit of ${routesToTest.length} routes...`);

  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--remote-debugging-port=9240",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check"
  ]);

  let wsUrl = null;
  await new Promise(r => {
    chrome.stderr.on("data", d => {
      const m = d.toString().match(/DevTools listening on (ws:\/\/127\.0\.0\.1:9240\/devtools\/browser\/[^\s]+)/);
      if (m) { wsUrl = m[1]; r(); }
    });
  });

  const listRes = await fetch("http://127.0.0.1:9240/json/list");
  const targets = await listRes.json();
  const pageWsUrl = (targets.find(t => t.type === "page") || targets[0]).webSocketDebuggerUrl;

  const ws = new WebSocket(pageWsUrl);
  let id = 1;
  const send = (method, params = {}) => {
    const msgId = id++;
    return new Promise(resolve => {
      const handler = event => {
        const data = JSON.parse(event.data);
        if (data.id === msgId) {
          ws.removeEventListener("message", handler);
          resolve(data.result);
        }
      };
      ws.addEventListener("message", handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  };

  await new Promise(r => ws.onopen = r);

  const routeErrors = {};
  let currentRoute = null;

  ws.addEventListener("message", event => {
    const msg = JSON.parse(event.data);
    if (msg.method === "Runtime.exceptionThrown") {
      const errText = msg.params.exceptionDetails.text + " " + JSON.stringify(msg.params.exceptionDetails.exception?.description || "");
      if (currentRoute) {
        if (!routeErrors[currentRoute]) routeErrors[currentRoute] = [];
        routeErrors[currentRoute].push(errText);
      }
    }
  });

  await send("Page.enable");
  await send("Runtime.enable");

  const results = [];

  for (const item of routesToTest) {
    currentRoute = item.name;
    try {
      await send("Page.navigate", { url: item.url });
      await new Promise(r => setTimeout(r, 1800));

      const evalRes = await send("Runtime.evaluate", {
        expression: `(() => {
          const root = document.getElementById('root');
          const innerLen = root ? root.innerHTML.length : 0;
          const text = document.body ? document.body.innerText.replace(/\\s+/g, ' ').trim() : '';
          const isBlank = innerLen < 50 || text.length < 20;
          return JSON.stringify({
            title: document.title,
            innerLen,
            textSnippet: text.slice(0, 100),
            isBlank
          });
        })()`
      });

      const parsed = JSON.parse(evalRes.result?.value || "{}");
      const errs = routeErrors[item.name] || [];

      results.push({
        name: item.name,
        url: item.url,
        isBlank: parsed.isBlank,
        innerLen: parsed.innerLen,
        textSnippet: parsed.textSnippet,
        errors: errs,
        passed: !parsed.isBlank && errs.length === 0,
      });

      const statusIcon = (!parsed.isBlank && errs.length === 0) ? "PASS" : "FAIL";
      console.log(`[${statusIcon}] ${item.name} (${item.url}) - Length: ${parsed.innerLen}, Errors: ${errs.length}`);
      if (errs.length > 0) {
        console.log(`   -> Errors:`, errs);
      }
      if (parsed.isBlank) {
        console.log(`   -> BLANK SCREEN DETECTED! Content snippet: "${parsed.textSnippet}"`);
      }
    } catch (e) {
      console.error(`Exception testing ${item.name}:`, e.message);
      results.push({
        name: item.name,
        url: item.url,
        isBlank: true,
        errors: [e.message],
        passed: false,
      });
    }
  }

  chrome.kill();

  const passed = results.filter(r => r.passed);
  const failed = results.filter(r => !r.passed);

  console.log("\n==========================================");
  console.log(`AUDIT COMPLETE: ${passed.length} PASSED, ${failed.length} FAILED`);
  console.log("==========================================");

  if (failed.length > 0) {
    console.log("\nFAILED ROUTES DETAILS:");
    failed.forEach(f => {
      console.log(`- ${f.name} (${f.url}): isBlank=${f.isBlank}, errors=${JSON.stringify(f.errors)}`);
    });
  }
}

runAudit().catch(console.error);
