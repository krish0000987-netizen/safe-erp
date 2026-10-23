import app from "../server.js";
import http from "http";

const server = http.createServer(app);

const endpointsToTest = [
  // Auth & System
  { path: "/api/v1/health", method: "GET" },
  { path: "/api/v1/system/health", method: "GET" },
  { path: "/api/v1/app/config", method: "GET" },
  
  // Dashboard
  { path: "/api/v1/dashboard", method: "GET" },

  // Clients & Sites
  { path: "/api/v1/clients", method: "GET" },
  { path: "/api/v1/clients/1", method: "GET" },
  { path: "/api/v1/clients/1/portal-users", method: "GET" },
  { path: "/api/v1/clients/1/sites", method: "GET" },
  { path: "/api/v1/sites", method: "GET" },
  { path: "/api/v1/sites/1", method: "GET" },
  { path: "/api/v1/sites/1/deployments", method: "GET" },
  { path: "/api/v1/sites/1/requirements", method: "GET" },
  
  // Guards & Deployments
  { path: "/api/v1/guards", method: "GET" },
  { path: "/api/v1/guards/1", method: "GET" },
  { path: "/api/v1/guards/1/deployments", method: "GET" },
  { path: "/api/v1/guards/1/documents", method: "GET" },
  { path: "/api/v1/guards/1/kit", method: "GET" },
  { path: "/api/v1/deployments", method: "GET" },
  { path: "/api/v1/shifts", method: "GET" },

  // Attendance & Rosters
  { path: "/api/v1/attendance", method: "GET" },
  { path: "/api/v1/attendance/daily", method: "GET" },
  { path: "/api/v1/attendance/register", method: "GET" },
  { path: "/api/v1/rosters", method: "GET" },
  { path: "/api/v1/rosters/week", method: "GET" },
  { path: "/api/v1/manpower-requests", method: "GET" },

  // Patrol
  { path: "/api/v1/patrol/report", method: "GET" },
  { path: "/api/v1/patrol/rounds", method: "GET" },
  { path: "/api/v1/checkpoints", method: "GET" },
  { path: "/api/v1/patrol-routes", method: "GET" },
  { path: "/api/v1/patrol-schedules", method: "GET" },
  { path: "/api/v1/patrol/scans", method: "GET" },
  { path: "/api/v1/site-visits", method: "GET" },

  // Incidents & SOS
  { path: "/api/v1/incidents", method: "GET" },
  { path: "/api/v1/incidents/1", method: "GET" },
  { path: "/api/v1/sos", method: "GET" },
  { path: "/api/v1/sos/active", method: "GET" },

  // Billing & Invoices
  { path: "/api/v1/invoices", method: "GET" },
  { path: "/api/v1/invoices/1", method: "GET" },
  { path: "/api/v1/billing/contracts", method: "GET" },
  { path: "/api/v1/billing/preview", method: "GET" },
  { path: "/api/v1/credit-notes", method: "GET" },

  // Collections & Ageing
  { path: "/api/v1/payments", method: "GET" },
  { path: "/api/v1/collections/ageing", method: "GET" },
  { path: "/api/v1/collections/clients", method: "GET" },
  { path: "/api/v1/collections/statement/1", method: "GET" },
  { path: "/api/v1/collections/reminders", method: "GET" },
  { path: "/api/v1/collections/open-invoices", method: "GET" },

  // Recruitment
  { path: "/api/v1/candidates", method: "GET" },
  { path: "/api/v1/candidates/pipeline", method: "GET" },
  { path: "/api/v1/job-openings", method: "GET" },
  { path: "/api/v1/candidates/lookups", method: "GET" },
  { path: "/api/v1/candidates/check-mobile", method: "GET" },
  { path: "/api/v1/candidates/referrers", method: "GET" },
  { path: "/api/v1/candidates/1", method: "GET" },

  // CRM & Quotations
  { path: "/api/v1/leads", method: "GET" },
  { path: "/api/v1/leads/board", method: "GET" },
  { path: "/api/v1/leads/owners", method: "GET" },
  { path: "/api/v1/leads/clients", method: "GET" },
  { path: "/api/v1/leads/1", method: "GET" },
  { path: "/api/v1/quotations", method: "GET" },
  { path: "/api/v1/quotations/defaults", method: "GET" },
  { path: "/api/v1/quotations/1", method: "GET" },

  // Payroll
  { path: "/api/v1/payroll-runs", method: "GET" },
  { path: "/api/v1/payroll-runs/1", method: "GET" },
  { path: "/api/v1/salary-structures", method: "GET" },
  { path: "/api/v1/advances", method: "GET" },
  { path: "/api/v1/fines", method: "GET" },

  // Contracts
  { path: "/api/v1/contracts", method: "GET" },
  { path: "/api/v1/contracts/1", method: "GET" },
  { path: "/api/v1/site-requirements", method: "GET" },

  // Complaints
  { path: "/api/v1/complaints", method: "GET" },
  { path: "/api/v1/complaints/assignees", method: "GET" },
  { path: "/api/v1/complaints/clients", method: "GET" },

  // Reports
  { path: "/api/v1/reports", method: "GET" },
  { path: "/api/v1/reports/guard-strength", method: "GET" },
  { path: "/api/v1/reports/site-deployment", method: "GET" },
  { path: "/api/v1/reports/outstanding-ageing", method: "GET" },

  // Settings & Permissions
  { path: "/api/v1/settings", method: "GET" },
  { path: "/api/v1/permissions", method: "GET" },

  // Masters & Custom Fields
  { path: "/api/v1/masters/types", method: "GET" },
  { path: "/api/v1/masters", method: "GET" },
  { path: "/api/v1/custom-fields", method: "GET" },

  // Branches, Users & Roles
  { path: "/api/v1/branches", method: "GET" },
  { path: "/api/v1/users", method: "GET" },
  { path: "/api/v1/roles", method: "GET" },
  { path: "/api/v1/roles/1", method: "GET" },

  // Audit Logs, Notifications, API Keys
  { path: "/api/v1/audit-log", method: "GET" },
  { path: "/api/v1/audit-logs", method: "GET" },
  { path: "/api/v1/audit-logs/facets", method: "GET" },
  { path: "/api/v1/notifications", method: "GET" },
  { path: "/api/v1/data-export", method: "GET" },
  { path: "/api/v1/api-keys", method: "GET" },
  { path: "/api/v1/api-keys/modules", method: "GET" },
  { path: "/api/v1/webhooks", method: "GET" },
  { path: "/api/v1/webhooks/events", method: "GET" },
  { path: "/api/v1/webhook-deliveries", method: "GET" },

  // Portal
  { path: "/api/v1/portal/summary", method: "GET" },
  { path: "/api/v1/portal/lookups", method: "GET" },
  { path: "/api/v1/portal/on-duty", method: "GET" },
  { path: "/api/v1/portal/patrol", method: "GET" },
  { path: "/api/v1/portal/incidents", method: "GET" },
  { path: "/api/v1/portal/invoices", method: "GET" },
  { path: "/api/v1/portal/complaints", method: "GET" },
  { path: "/api/v1/portal/manpower-requests", method: "GET" },
  { path: "/api/v1/portal/sites", method: "GET" },
];

server.listen(3033, async () => {
  console.log("Testing endpoints on http://localhost:3033...");
  let passed = 0;
  let failed = 0;

  for (const ep of endpointsToTest) {
    try {
      const res = await fetch(`http://localhost:3033${ep.path}`, {
        method: ep.method,
        headers: { "Content-Type": "application/json" }
      });
      if (res.status === 200 || res.status === 201) {
        passed++;
      } else {
        console.error(`FAILED: ${ep.method} ${ep.path} -> Status ${res.status}`);
        failed++;
      }
    } catch (err) {
      console.error(`ERROR: ${ep.method} ${ep.path} -> ${err.message}`);
      failed++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Endpoint Test Results: ${passed} PASSED, ${failed} FAILED`);
  console.log(`========================================\n`);

  server.close(() => {
    process.exit(failed > 0 ? 1 : 0);
  });
});
