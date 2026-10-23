-- ====================================================================
-- Safe Guard Force ERP - Full Database Schema
-- Compatible with PostgreSQL 15+ / Supabase
-- ====================================================================

-- 1. Branches & Offices
CREATE TABLE IF NOT EXISTS branches (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  address TEXT,
  city TEXT DEFAULT 'Mumbai',
  state TEXT DEFAULT 'Maharashtra',
  phone TEXT,
  email TEXT,
  is_active INT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Roles & Permissions
CREATE TABLE IF NOT EXISTS roles (
  id SERIAL PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  app_view TEXT DEFAULT 'web',
  permissions JSONB DEFAULT '{"*": true}'::jsonb,
  is_system INT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Users & Employees
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  mobile TEXT UNIQUE,
  password_hash TEXT,
  role_id INT REFERENCES roles(id) ON DELETE SET NULL,
  branch_id INT REFERENCES branches(id) ON DELETE SET NULL,
  language TEXT DEFAULT 'en',
  has_password BOOLEAN DEFAULT TRUE,
  is_active INT DEFAULT 1,
  last_login_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Clients / Customers
CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  company_name TEXT,
  contact_person TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  city TEXT DEFAULT 'Mumbai',
  state TEXT DEFAULT 'Maharashtra',
  gst_number TEXT,
  pan_number TEXT,
  billing_cycle TEXT DEFAULT 'monthly',
  is_active INT DEFAULT 1,
  branch_id INT REFERENCES branches(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Sites / Locations
CREATE TABLE IF NOT EXISTS sites (
  id SERIAL PRIMARY KEY,
  client_id INT REFERENCES clients(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  code TEXT,
  address TEXT,
  city TEXT DEFAULT 'Mumbai',
  latitude NUMERIC(10, 7),
  longitude NUMERIC(10, 7),
  geofence_radius_meters INT DEFAULT 150,
  supervisor_name TEXT,
  supervisor_phone TEXT,
  required_guards INT DEFAULT 1,
  is_active INT DEFAULT 1,
  branch_id INT REFERENCES branches(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Shifts
CREATE TABLE IF NOT EXISTS shifts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  duration_hours NUMERIC(4, 1) DEFAULT 8.0,
  shift_type TEXT DEFAULT 'Day',
  is_active INT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Security Guards / Personnel
CREATE TABLE IF NOT EXISTS guards (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  employee_id TEXT UNIQUE NOT NULL,
  mobile TEXT UNIQUE NOT NULL,
  alternate_mobile TEXT,
  email TEXT,
  gender TEXT DEFAULT 'Male',
  dob DATE,
  aadhaar_number TEXT,
  pan_number TEXT,
  address TEXT,
  city TEXT DEFAULT 'Mumbai',
  blood_group TEXT,
  designation TEXT DEFAULT 'Security Guard',
  qualification TEXT,
  experience_years INT DEFAULT 2,
  height_cm INT,
  weight_kg INT,
  verification_status TEXT DEFAULT 'Verified',
  bank_name TEXT,
  bank_account TEXT,
  ifsc_code TEXT,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  photo_url TEXT,
  status TEXT DEFAULT 'Active',
  branch_id INT REFERENCES branches(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Deployments
CREATE TABLE IF NOT EXISTS deployments (
  id SERIAL PRIMARY KEY,
  guard_id INT REFERENCES guards(id) ON DELETE CASCADE,
  site_id INT REFERENCES sites(id) ON DELETE CASCADE,
  shift_id INT REFERENCES shifts(id) ON DELETE SET NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  status TEXT DEFAULT 'Active',
  designation TEXT DEFAULT 'Security Guard',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Attendance Logs
CREATE TABLE IF NOT EXISTS attendance (
  id SERIAL PRIMARY KEY,
  guard_id INT REFERENCES guards(id) ON DELETE CASCADE,
  site_id INT REFERENCES sites(id) ON DELETE CASCADE,
  shift_id INT REFERENCES shifts(id) ON DELETE SET NULL,
  attendance_date DATE NOT NULL,
  check_in_time TIMESTAMPTZ,
  check_out_time TIMESTAMPTZ,
  status TEXT DEFAULT 'Present',
  check_in_lat NUMERIC(10, 7),
  check_in_lng NUMERIC(10, 7),
  is_verified BOOLEAN DEFAULT TRUE,
  selfie_url TEXT,
  remarks TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Patrol Logs
CREATE TABLE IF NOT EXISTS patrol_logs (
  id SERIAL PRIMARY KEY,
  site_id INT REFERENCES sites(id) ON DELETE CASCADE,
  guard_id INT REFERENCES guards(id) ON DELETE SET NULL,
  checkpoint_name TEXT NOT NULL,
  qr_code TEXT,
  scanned_at TIMESTAMPTZ DEFAULT NOW(),
  latitude NUMERIC(10, 7),
  longitude NUMERIC(10, 7),
  status TEXT DEFAULT 'Completed',
  notes TEXT
);

-- 11. Incidents
CREATE TABLE IF NOT EXISTS incidents (
  id SERIAL PRIMARY KEY,
  site_id INT REFERENCES sites(id) ON DELETE CASCADE,
  reported_by_guard_id INT REFERENCES guards(id) ON DELETE SET NULL,
  incident_type TEXT NOT NULL,
  severity TEXT DEFAULT 'Medium',
  description TEXT NOT NULL,
  reported_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'Open',
  resolution_notes TEXT,
  photo_urls TEXT[]
);

-- 12. SOS Alerts
CREATE TABLE IF NOT EXISTS sos_alerts (
  id SERIAL PRIMARY KEY,
  site_id INT REFERENCES sites(id) ON DELETE CASCADE,
  guard_id INT REFERENCES guards(id) ON DELETE SET NULL,
  alert_time TIMESTAMPTZ DEFAULT NOW(),
  latitude NUMERIC(10, 7),
  longitude NUMERIC(10, 7),
  status TEXT DEFAULT 'Resolved',
  message TEXT,
  resolved_at TIMESTAMPTZ
);

-- 13. Payroll Runs
CREATE TABLE IF NOT EXISTS payroll_runs (
  id SERIAL PRIMARY KEY,
  month_year TEXT NOT NULL,
  total_guards INT DEFAULT 0,
  total_gross_paise BIGINT DEFAULT 0,
  total_deductions_paise BIGINT DEFAULT 0,
  total_net_paise BIGINT DEFAULT 0,
  status TEXT DEFAULT 'Approved',
  processed_at TIMESTAMPTZ DEFAULT NOW(),
  branch_id INT REFERENCES branches(id) ON DELETE SET NULL
);

-- 14. Payslips
CREATE TABLE IF NOT EXISTS payslips (
  id SERIAL PRIMARY KEY,
  payroll_run_id INT REFERENCES payroll_runs(id) ON DELETE CASCADE,
  guard_id INT REFERENCES guards(id) ON DELETE CASCADE,
  month_year TEXT NOT NULL,
  basic_paise BIGINT DEFAULT 0,
  hra_paise BIGINT DEFAULT 0,
  allowances_paise BIGINT DEFAULT 0,
  overtime_paise BIGINT DEFAULT 0,
  gross_paise BIGINT DEFAULT 0,
  pf_paise BIGINT DEFAULT 0,
  esi_paise BIGINT DEFAULT 0,
  advances_deduction_paise BIGINT DEFAULT 0,
  net_paise BIGINT DEFAULT 0,
  status TEXT DEFAULT 'Paid',
  generated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 15. Invoices
CREATE TABLE IF NOT EXISTS invoices (
  id SERIAL PRIMARY KEY,
  invoice_number TEXT UNIQUE NOT NULL,
  client_id INT REFERENCES clients(id) ON DELETE CASCADE,
  site_id INT REFERENCES sites(id) ON DELETE SET NULL,
  billing_month TEXT NOT NULL,
  issue_date DATE NOT NULL,
  due_date DATE NOT NULL,
  subtotal_paise BIGINT NOT NULL,
  gst_paise BIGINT NOT NULL,
  total_paise BIGINT NOT NULL,
  status TEXT DEFAULT 'Issued',
  pdf_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 16. CRM Leads
CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  required_guards INT DEFAULT 5,
  property_type TEXT,
  stage TEXT DEFAULT 'Proposal',
  estimated_value_paise BIGINT,
  assigned_to_user_id INT REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 17. Quotations
CREATE TABLE IF NOT EXISTS quotations (
  id SERIAL PRIMARY KEY,
  quotation_number TEXT UNIQUE NOT NULL,
  lead_id INT REFERENCES leads(id) ON DELETE SET NULL,
  client_name TEXT NOT NULL,
  total_guards INT,
  monthly_amount_paise BIGINT,
  status TEXT DEFAULT 'Sent',
  valid_until DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 18. Recruitment Candidates
CREATE TABLE IF NOT EXISTS candidates (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  alternate_mobile TEXT,
  email TEXT,
  age INT,
  qualification TEXT,
  experience_years INT,
  height_cm INT,
  applied_for TEXT DEFAULT 'Security Guard',
  stage TEXT DEFAULT 'Interview',
  status TEXT DEFAULT 'Pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 19. Client Complaints
CREATE TABLE IF NOT EXISTS complaints (
  id SERIAL PRIMARY KEY,
  client_id INT REFERENCES clients(id) ON DELETE CASCADE,
  site_id INT REFERENCES sites(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  priority TEXT DEFAULT 'High',
  status TEXT DEFAULT 'In Progress',
  reported_at TIMESTAMPTZ DEFAULT NOW(),
  resolution TEXT
);

-- 20. Application Settings
CREATE TABLE IF NOT EXISTS app_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
