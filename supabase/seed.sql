-- ====================================================================
-- Safe Guard Force ERP - Rich Demo Seed Data
-- ====================================================================

-- 1. Branches
INSERT INTO branches (id, name, code, address, city, state, phone, email, is_active)
VALUES
  (1, 'Mumbai Head Office', 'MUM-HO', 'Unit 402, Trade Center, BKC, Bandra East', 'Mumbai', 'Maharashtra', '+91 22 2650 1100', 'mumbai@safeguardforce.in', 1),
  (2, 'Pune Regional Office', 'PUN-RO', 'Floor 3, Cyber City, Magarpatta, Hadapsar', 'Pune', 'Maharashtra', '+91 20 6720 2200', 'pune@safeguardforce.in', 1),
  (3, 'Thane Branch', 'THN-BR', 'Gokhale Road, Naupada', 'Thane', 'Maharashtra', '+91 22 2540 3300', 'thane@safeguardforce.in', 1),
  (4, 'Navi Mumbai Operations', 'NVM-BR', 'Sector 17, Vashi', 'Navi Mumbai', 'Maharashtra', '+91 22 2780 4400', 'navimumbai@safeguardforce.in', 1)
ON CONFLICT (id) DO NOTHING;

-- 2. Roles
INSERT INTO roles (id, code, name, app_view, permissions, is_system)
VALUES
  (1, 'super_admin', 'Super Administrator', 'web', '{"*": true}'::jsonb, 1),
  (2, 'ops_manager', 'Operations Manager', 'web', '{"ops": {"create": true, "read": true, "update": true, "delete": true}, "guards": {"create": true, "read": true, "update": true, "delete": true}, "attendance": {"create": true, "read": true, "update": true, "delete": true}}'::jsonb, 1),
  (3, 'supervisor', 'Field Supervisor', 'supervisor', '{"ops": {"read": true}, "attendance": {"create": true, "read": true, "update": true}, "patrol": {"create": true, "read": true}}'::jsonb, 1),
  (4, 'accounts', 'Accounts & Payroll Manager', 'web', '{"money": {"create": true, "read": true, "update": true, "delete": true}, "billing": {"create": true, "read": true, "update": true, "delete": true}}'::jsonb, 1),
  (5, 'client_viewer', 'Client Portal Viewer', 'client', '{"portal": {"read": true}}'::jsonb, 1)
ON CONFLICT (id) DO NOTHING;

-- 3. Users
INSERT INTO users (id, name, email, mobile, password_hash, role_id, branch_id, language, has_password, is_active)
VALUES
  (1, 'System Administrator', 'admin@sgf.local', '9820011223', '$2b$10$wT0X8XqZ/89w9z8Y9Y8Y.O', 1, 1, 'en', TRUE, 1),
  (2, 'Rajesh Sharma', 'ops.head@safeguardforce.in', '9820011224', '$2b$10$wT0X8XqZ/89w9z8Y9Y8Y.O', 2, 1, 'en', TRUE, 1),
  (3, 'Vikram Deshmukh', 'supervisor.mumbai@safeguardforce.in', '9820011225', '$2b$10$wT0X8XqZ/89w9z8Y9Y8Y.O', 3, 1, 'hi', TRUE, 1),
  (4, 'Sunita Patil', 'accounts@safeguardforce.in', '9820011226', '$2b$10$wT0X8XqZ/89w9z8Y9Y8Y.O', 4, 1, 'en', TRUE, 1)
ON CONFLICT (id) DO NOTHING;

-- 4. Clients
INSERT INTO clients (id, name, code, company_name, contact_person, email, phone, address, city, state, gst_number, pan_number, billing_cycle, is_active, branch_id)
VALUES
  (1, 'Lodha Group', 'CLI-LODHA', 'Macrotech Developers Ltd', 'Arun Singhania (VP Security)', 'arun.s@lodhagroup.com', '+91 98201 55667', 'Lodha Excelus, Apollo Mills Compound, Mahalaxmi', 'Mumbai', 'Maharashtra', '27AABCM1234F1Z5', 'AABCM1234F', 'monthly', 1, 1),
  (2, 'HDFC Bank Ltd', 'CLI-HDFC', 'HDFC Bank Corporate Headquarters', 'Ramesh Iyer (Head of Facilities)', 'ramesh.iyer@hdfcbank.com', '+91 98202 66778', 'HDFC Bank House, Senapati Bapat Marg, Lower Parel', 'Mumbai', 'Maharashtra', '27AAACH2702H1ZK', 'AAACH2702H', 'monthly', 1, 1),
  (3, 'Reliance Corporate Park', 'CLI-RCP', 'Reliance Industries Ltd', 'Col. Sanjay Verma (Chief Security Officer)', 'sanjay.verma@ril.com', '+91 98203 77889', 'Thane-Belapur Road, Ghansoli', 'Navi Mumbai', 'Maharashtra', '27AABCR1234G1Z8', 'AABCR1234G', 'monthly', 1, 4),
  (4, 'Godrej Properties', 'CLI-GODREJ', 'Godrej Properties Ltd', 'Pooja Kulkarni (Facilities Lead)', 'pooja.k@godrejproperties.com', '+91 98204 88990', 'Godrej One, Pirojshanagar, Eastern Express Highway, Vikhroli', 'Mumbai', 'Maharashtra', '27AABCG5678H1Z1', 'AABCG5678H', 'monthly', 1, 1),
  (5, 'Phoenix Mills', 'CLI-PHOENIX', 'The Phoenix Mills Ltd', 'Mahesh Jadhav (Operations Director)', 'mahesh.j@phoenixmills.com', '+91 98205 99001', 'High Street Phoenix, 462 Senapati Bapat Marg, Lower Parel', 'Mumbai', 'Maharashtra', '27AABCP9012J1Z3', 'AABCP9012J', 'monthly', 1, 1)
ON CONFLICT (id) DO NOTHING;

-- 5. Sites
INSERT INTO sites (id, client_id, name, code, address, city, latitude, longitude, geofence_radius_meters, supervisor_name, supervisor_phone, required_guards, is_active, branch_id)
VALUES
  (1, 1, 'Lodha Bellissimo', 'SITE-LOD-01', 'N.M. Joshi Marg, Mahalaxmi, Mumbai', 'Mumbai', 18.9912000, 72.8315000, 200, 'Vikram Deshmukh', '+91 9820011225', 12, 1, 1),
  (2, 2, 'HDFC Bank BKC Complex', 'SITE-HDFC-01', 'C-64, G Block, Bandra Kurla Complex', 'Mumbai', 19.0665000, 72.8682000, 150, 'Satish Pawar', '+91 9820011227', 18, 1, 1),
  (3, 3, 'Reliance Tech Park - Block A', 'SITE-RCP-01', 'Midc Industrial Area, Ghansoli', 'Navi Mumbai', 19.1256000, 73.0034000, 300, 'Ganesh Shinde', '+91 9820011228', 25, 1, 4),
  (4, 4, 'Godrej One Corporate Tower', 'SITE-GOD-01', 'Pirojshanagar, Vikhroli East', 'Mumbai', 19.1023000, 72.9284000, 200, 'Ajay More', '+91 9820011229', 15, 1, 1),
  (5, 5, 'Phoenix Palladium Mall', 'SITE-PHX-01', '462 Senapati Bapat Marg, Lower Parel', 'Mumbai', 18.9950000, 72.8258000, 250, 'Nitin Sawant', '+91 9820011230', 30, 1, 1)
ON CONFLICT (id) DO NOTHING;

-- 6. Shifts
INSERT INTO shifts (id, name, start_time, end_time, duration_hours, shift_type, is_active)
VALUES
  (1, 'Morning Shift (A)', '07:00:00', '15:00:00', 8.0, 'Day', 1),
  (2, 'Afternoon Shift (B)', '15:00:00', '23:00:00', 8.0, 'Day', 1),
  (3, 'Night Shift (C)', '23:00:00', '07:00:00', 8.0, 'Night', 1),
  (4, 'General Office Shift', '09:00:00', '18:00:00', 9.0, 'Day', 1)
ON CONFLICT (id) DO NOTHING;

-- 7. Guards
INSERT INTO guards (id, full_name, employee_id, mobile, alternate_mobile, email, gender, dob, aadhaar_number, pan_number, designation, experience_years, blood_group, verification_status, bank_name, status, branch_id)
VALUES
  (1, 'Santosh Tukaram Jadhav', 'SGF-G-1001', '9892011001', '9892011002', 'santosh.jadhav@sgf.in', 'Male', '1988-04-12', '4589-1234-9012', 'BNKPJ4512A', 'Senior Guard', 6, 'O+', 'Verified', 'State Bank of India', 'Active', 1),
  (2, 'Mahesh Balasaheb Shinde', 'SGF-G-1002', '9892011003', '9892011004', 'mahesh.shinde@sgf.in', 'Male', '1992-08-25', '7812-4567-3456', 'CQWPS7823B', 'Security Guard', 4, 'B+', 'Verified', 'HDFC Bank', 'Active', 1),
  (3, 'Pravin Dattatray Patil', 'SGF-G-1003', '9892011005', '9892011006', 'pravin.patil@sgf.in', 'Male', '1990-11-15', '2345-6789-0123', 'DKLPP2345C', 'Head Guard', 7, 'AB+', 'Verified', 'Bank of Baroda', 'Active', 1),
  (4, 'Rahul Suresh Gaikwad', 'SGF-G-1004', '9892011007', '9892011008', 'rahul.gaikwad@sgf.in', 'Male', '1995-02-19', '8901-2345-6789', 'EMRPG8901D', 'Security Guard', 2, 'A+', 'Verified', 'ICICI Bank', 'Active', 1),
  (5, 'Sanjay Manohar Kadam', 'SGF-G-1005', '9892011009', '9892011010', 'sanjay.kadam@sgf.in', 'Male', '1987-06-30', '3456-7890-1234', 'FNSPK3456E', 'Armed Guard', 9, 'O+', 'Verified', 'State Bank of India', 'Active', 1),
  (6, 'Pooja Ashok Chaugule', 'SGF-G-1006', '9892011011', '9892011012', 'pooja.chaugule@sgf.in', 'Female', '1994-09-08', '9012-3456-7890', 'GHTPC9012F', 'Lady Guard', 3, 'B+', 'Verified', 'Axis Bank', 'Active', 1),
  (7, 'Sunita Ramesh Kamble', 'SGF-G-1007', '9892011013', '9892011014', 'sunita.kamble@sgf.in', 'Female', '1991-12-04', '4567-8901-2345', 'HJKPK4567G', 'Lady Guard', 5, 'A+', 'Verified', 'Union Bank of India', 'Active', 1),
  (8, 'Deepak Namdeo Bhosle', 'SGF-G-1008', '9892011015', '9892011016', 'deepak.bhosle@sgf.in', 'Male', '1993-07-22', '0123-4567-8901', 'IKLPB0123H', 'Security Guard', 3, 'O-', 'Verified', 'Punjab National Bank', 'Active', 4),
  (9, 'Anand Vilas Sawant', 'SGF-G-1009', '9892011017', '9892011018', 'anand.sawant@sgf.in', 'Male', '1989-03-14', '5678-9012-3456', 'JMNPA5678J', 'Patrol Guard', 6, 'B-', 'Verified', 'Canara Bank', 'Active', 4),
  (10, 'Kishore Pandurang Mane', 'SGF-G-1010', '9892011019', '9892011020', 'kishore.mane@sgf.in', 'Male', '1996-10-10', '1234-5678-9012', 'KLOPM1234K', 'Security Guard', 1, 'AB-', 'Verified', 'HDFC Bank', 'Active', 1)
ON CONFLICT (id) DO NOTHING;

-- 8. Deployments
INSERT INTO deployments (id, guard_id, site_id, shift_id, start_date, status, designation)
VALUES
  (1, 1, 1, 1, '2026-01-01', 'Active', 'Senior Guard - Main Gate'),
  (2, 2, 1, 1, '2026-01-01', 'Active', 'Security Guard - Tower A Lobby'),
  (3, 3, 2, 1, '2026-01-01', 'Active', 'Head Guard - Executive Reception'),
  (4, 4, 2, 2, '2026-01-01', 'Active', 'Security Guard - Basement Parking'),
  (5, 5, 2, 1, '2026-01-01', 'Active', 'Armed Guard - Cash Vault Escort'),
  (6, 6, 5, 1, '2026-01-01', 'Active', 'Lady Guard - Central Atrium'),
  (7, 7, 5, 2, '2026-01-01', 'Active', 'Lady Guard - West Wing Checkpoint'),
  (8, 8, 3, 1, '2026-01-01', 'Active', 'Security Guard - Perimeter Gate 3'),
  (9, 9, 3, 3, '2026-01-01', 'Active', 'Night Patrol Guard - Campus South'),
  (10, 10, 4, 1, '2026-01-01', 'Active', 'Security Guard - Visitor Desk')
ON CONFLICT (id) DO NOTHING;

-- 9. Attendance
INSERT INTO attendance (guard_id, site_id, shift_id, attendance_date, check_in_time, check_out_time, status, check_in_lat, check_in_lng, is_verified, remarks)
VALUES
  (1, 1, 1, CURRENT_DATE, CURRENT_DATE + TIME '06:55:00', NULL, 'Present', 18.9912100, 72.8315200, TRUE, 'GPS geofence verified'),
  (2, 1, 1, CURRENT_DATE, CURRENT_DATE + TIME '06:58:00', NULL, 'Present', 18.9911900, 72.8315100, TRUE, 'GPS geofence verified'),
  (3, 2, 1, CURRENT_DATE, CURRENT_DATE + TIME '06:50:00', NULL, 'Present', 19.0665100, 72.8682100, TRUE, 'GPS geofence verified'),
  (5, 2, 1, CURRENT_DATE, CURRENT_DATE + TIME '06:45:00', NULL, 'Present', 19.0664900, 72.8681900, TRUE, 'Armed post checked-in'),
  (6, 5, 1, CURRENT_DATE, CURRENT_DATE + TIME '06:59:00', NULL, 'Present', 18.9950100, 72.8258100, TRUE, 'Mall gate verified'),
  (8, 3, 1, CURRENT_DATE, CURRENT_DATE + TIME '06:52:00', NULL, 'Present', 19.1256100, 73.0034100, TRUE, 'Campus Gate 3'),
  (10, 4, 1, CURRENT_DATE, CURRENT_DATE + TIME '07:05:00', NULL, 'Present', 19.1023100, 72.9284200, TRUE, 'Corporate Lobby desk')
ON CONFLICT DO NOTHING;

-- 10. Incidents
INSERT INTO incidents (id, site_id, reported_by_guard_id, incident_type, severity, description, status, resolution_notes)
VALUES
  (1, 1, 1, 'Unauthorized Vehicle Entry Attempt', 'Low', 'Commercial delivery truck without pre-clearance gate pass tried entering Gate 2. Guard turned away vehicle until resident confirmation.', 'Resolved', 'Resident confirmed delivery at 09:30 AM; visitor entry pass issued.'),
  (2, 5, 6, 'Unattended Bag Alert', 'Medium', 'Suspicious blue duffel bag reported near Level 2 Escalator. Area cordoned off; security team contacted owner.', 'Resolved', 'Customer retrieved bag after ID verification; false alarm.')
ON CONFLICT (id) DO NOTHING;

-- 11. Invoices
INSERT INTO invoices (id, invoice_number, client_id, site_id, billing_month, issue_date, due_date, subtotal_paise, gst_paise, total_paise, status)
VALUES
  (1, 'INV/2026/09/001', 1, 1, 'September 2026', '2026-10-01', '2026-10-15', 36000000, 6480000, 42480000, 'Paid'),
  (2, 'INV/2026/09/002', 2, 2, 'September 2026', '2026-10-01', '2026-10-15', 54000000, 9720000, 63720000, 'Paid'),
  (3, 'INV/2026/10/003', 3, 3, 'October 2026', '2026-10-15', '2026-10-30', 75000000, 13500000, 88500000, 'Issued'),
  (4, 'INV/2026/10/004', 5, 5, 'October 2026', '2026-10-18', '2026-11-02', 90000000, 16200000, 106200000, 'Issued')
ON CONFLICT (id) DO NOTHING;

-- 12. CRM Leads
INSERT INTO leads (id, company_name, contact_name, phone, email, required_guards, property_type, stage, estimated_value_paise)
VALUES
  (1, 'Adani Realty - Western Heights', 'Karan Patel', '+91 98200 44556', 'karan.patel@adani.com', 16, 'Residential Highrise', 'Proposal', 48000000),
  (2, 'Tata Consultancy Services - Olympus', 'Smita Rao', '+91 98200 77889', 'smita.rao@tcs.com', 40, 'IT Park Campus', 'Negotiation', 120000000),
  (3, 'K Raheja Corp - Mindspace', 'Dinesh Singhal', '+91 98200 99001', 'dinesh.s@kraheja.com', 25, 'Commercial SEZ', 'Won', 75000000)
ON CONFLICT (id) DO NOTHING;

-- 13. App Settings
INSERT INTO app_settings (key, value)
VALUES
  ('company_profile', '{
    "name": "Safe Guard Force",
    "tagline": "Guarding people, property and peace of mind",
    "established_year": 1990,
    "phone": "+91 22 2650 1100",
    "email": "contact@safeguardforce.in",
    "support_phone": "+91 98200 00000",
    "support_email": "support@safeguardforce.in",
    "address": "Unit 402, Trade Center, Bandra Kurla Complex, Mumbai 400051",
    "currency": "INR",
    "timezone": "Asia/Kolkata"
  }'::jsonb)
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
