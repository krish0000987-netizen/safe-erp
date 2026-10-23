# Safe Guard Force — Enterprise Resource Planning (ERP)

A comprehensive, production-ready Enterprise Resource Planning (ERP) system tailored for security services, guard management, facility operations, automated payroll, billing, and real-time incident tracking.

---

## 🌟 Key Features & Modules

1. **Operations (Ops)**:
   - **Clients & Sites**: Multi-branch client directory, site geofencing with GPS coordinates, supervisor allocations.
   - **Security Guards**: Comprehensive guard profiles, employee IDs, verification statuses, blood groups, banking details.
   - **Deployments & Rostering**: Active guard-to-site duty allocations, shift definitions (Day, Night, General).
   - **Real-Time Attendance**: GPS-geofenced clock-in/out tracking with verification.
2. **Growth & CRM**:
   - **Candidate Recruitment**: Candidate onboarding pipeline (Interview, Screening, Verified, Converted).
   - **CRM Leads & Quotations**: Lead tracking, quotation generator with PDF exports.
   - **Customer Complaints**: Client escalation portal, SLA tracking, and resolution notes.
3. **Money & Finance**:
   - **Payroll Engine**: Automated payroll run generation, guard salary structures, allowances, PF/ESI calculations, payslips.
   - **Billing & Tax Invoices**: Monthly invoice generation, GST calculations (18%), status tracking (Paid, Issued, Overdue).
4. **Security & Platform**:
   - **Incident & SOS Alerts**: Real-time emergency escalation with severity logging.
   - **Multi-Branch & Role-Based Access Control (RBAC)**: Fine-grained permissions matrix (`super_admin`, `ops_manager`, `supervisor`, `accounts`).

---

## 🏗️ Architecture

- **Frontend**: React SPA with Tailwind CSS and Vite, fully code-split across 108 module chunks in `public/assets/`.
- **Backend API**: REST API implementing the official OpenAPI 3.0 specification at `/api/v1/*`.
- **Database**: PostgreSQL on Supabase (`lmtgvnqingcljhrrmmgs` / `ap-southeast-1`), with complete DDL migrations in `supabase/schema.sql` and seed data in `supabase/seed.sql`.
- **Authentication**: Dual-mode session handling — HttpOnly cookies (`sgf_access`, `sgf_refresh`) for web and Bearer tokens for mobile/API.

---

## 🌐 Live Production Deployment

- **Production URL**: [https://safe-gaurd-erp.vercel.app](https://safe-gaurd-erp.vercel.app)
- **OpenAPI Schema**: [https://safe-gaurd-erp.vercel.app/api/v1/openapi.json](https://safe-gaurd-erp.vercel.app/api/v1/openapi.json)


## 🚀 Quickstart

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env` (already pre-configured for your Supabase project):
```bash
PORT=3000
NEXT_PUBLIC_SUPABASE_URL=https://lmtgvnqingcljhrrmmgs.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

### 3. Run the ERP Application
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Demo Credentials

| Role | Username / Identifier | Password | Access Level |
| :--- | :--- | :--- | :--- |
| **Super Admin** | `admin@sgf.local` | `[REDACTED_PASSWORD]` | Full System Access (`*`) |
| **Ops Manager** | `ops.head@safeguardforce.in` | `[REDACTED_PASSWORD]` | Operations & Deployments |
| **Field Supervisor** | `supervisor.mumbai@safeguardforce.in` | `[REDACTED_PASSWORD]` | Attendance & Patrol Logs |
| **Accounts Manager** | `accounts@safeguardforce.in` | `[REDACTED_PASSWORD]` | Payroll & Invoicing |

---

## 📊 Seeded Demo Data

- **Branches**: Mumbai Head Office, Pune Regional Office, Thane Branch, Navi Mumbai Operations.
- **Enterprise Clients**: Lodha Group, HDFC Bank Ltd, Reliance Corporate Park, Godrej Properties, Phoenix Mills.
- **Sites**: Lodha Bellissimo, HDFC BKC Complex, Reliance Tech Park, Godrej One, Phoenix Palladium.
- **Security Personnel**: 10 verified guards with full profiles, bank records, and active deployments.
- **Financial Records**: Q3 & Q4 billing invoices, salary structures, active attendance check-ins.

---

## 📖 API Documentation

The complete OpenAPI specification containing all **239 endpoints** is available at:
- `http://localhost:3000/api/v1/openapi.json`
- Local file: [`public/openapi.json`](file:///Users/himanshu/Documents/SAFE%20GAURD/public/openapi.json)

---

## 🛠️ Database Migrations

To re-apply the schema or update seed data in Supabase:
```bash
npm run db:migrate
```
