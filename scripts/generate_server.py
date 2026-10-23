import os

# Script to generate comprehensive server.js for Safe Guard Force ERP
server_code = """import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://lmtgvnqingcljhrrmmgs.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Helpers for OpenAPI envelope responses
function envelope(data = null, meta = {}, errors = []) {
  return { data, meta, errors };
}

function listEnvelope(items = [], total = null, page = 1, perPage = 25) {
  const tot = total !== null ? total : items.length;
  return {
    data: items,
    meta: {
      page: Number(page) || 1,
      per_page: Number(perPage) || 25,
      total: tot,
      last_page: Math.ceil(tot / (Number(perPage) || 25)) || 1,
    },
    errors: [],
  };
}

// ============================================================================
// IN-MEMORY COMPREHENSIVE STORE (Seeded with rich, detailed Indian enterprise demo data)
// ============================================================================
const inMemory = {
  // 1. Clients
  clients: [
    { id: 1, name: "Lodha Group", code: "CLI-LODHA", company_name: "Macrotech Developers Ltd", contact_person: "Arun Singhania (VP Security)", email: "arun.s@lodhagroup.com", phone: "+91 98201 55667", city: "Mumbai", gstin: "27AABCM1234F1Z5", sites_count: 1, deployed_count: 12, required_guards: 12, status: "Active", is_active: 1 },
    { id: 2, name: "HDFC Bank Ltd", code: "CLI-HDFC", company_name: "HDFC Bank Corporate Headquarters", contact_person: "Ramesh Iyer (Head of Facilities)", email: "ramesh.iyer@hdfcbank.com", phone: "+91 98202 66778", city: "Mumbai", gstin: "27AAACH2702H1ZK", sites_count: 1, deployed_count: 18, required_guards: 18, status: "Active", is_active: 1 },
    { id: 3, name: "Reliance Corporate Park", code: "CLI-RCP", company_name: "Reliance Industries Ltd", contact_person: "Col. Sanjay Verma (Chief Security Officer)", email: "sanjay.verma@ril.com", phone: "+91 98203 77889", city: "Navi Mumbai", gstin: "27AABCR1234G1Z8", sites_count: 1, deployed_count: 25, required_guards: 25, status: "Active", is_active: 1 },
    { id: 4, name: "Godrej Properties", code: "CLI-GODREJ", company_name: "Godrej Properties Ltd", contact_person: "Pooja Kulkarni (Facilities Lead)", email: "pooja.k@godrejproperties.com", phone: "+91 98204 88990", city: "Mumbai", gstin: "27AABCG5678H1Z1", sites_count: 1, deployed_count: 15, required_guards: 15, status: "Active", is_active: 1 },
    { id: 5, name: "Phoenix Mills", code: "CLI-PHOENIX", company_name: "The Phoenix Mills Ltd", contact_person: "Mahesh Jadhav (Operations Director)", email: "mahesh.j@phoenixmills.com", phone: "+91 98205 99001", city: "Mumbai", gstin: "27AABCP9012J1Z3", sites_count: 1, deployed_count: 30, required_guards: 30, status: "Active", is_active: 1 },
  ],

  // 2. Sites
  sites: [
    { id: 1, client_id: 1, client_name: "Lodha Group", name: "Lodha Bellissimo", code: "SITE-LOD-01", address: "Mahalaxmi, Mumbai", city: "Mumbai", latitude: 18.9912, longitude: 72.8315, geofence_radius_meters: 200, supervisor_name: "Vikram Deshmukh", supervisor_phone: "+91 9820011225", deployed_count: 12, required_guards: 12, is_active: 1, status: "Active" },
    { id: 2, client_id: 2, client_name: "HDFC Bank Ltd", name: "HDFC Bank BKC Complex", code: "SITE-HDFC-01", address: "Bandra Kurla Complex", city: "Mumbai", latitude: 19.0665, longitude: 72.8682, geofence_radius_meters: 150, supervisor_name: "Satish Pawar", supervisor_phone: "+91 9820011227", deployed_count: 18, required_guards: 18, is_active: 1, status: "Active" },
    { id: 3, client_id: 3, client_name: "Reliance Corporate Park", name: "Reliance Tech Park - Block A", code: "SITE-RCP-01", address: "Ghansoli, Navi Mumbai", city: "Navi Mumbai", latitude: 19.1256, longitude: 73.0034, geofence_radius_meters: 300, supervisor_name: "Ganesh Shinde", supervisor_phone: "+91 9820011228", deployed_count: 25, required_guards: 25, is_active: 1, status: "Active" },
    { id: 4, client_id: 4, client_name: "Godrej Properties", name: "Godrej One Corporate Tower", code: "SITE-GOD-01", address: "Vikhroli East, Mumbai", city: "Mumbai", latitude: 19.1023, longitude: 72.9284, geofence_radius_meters: 200, supervisor_name: "Ajay More", supervisor_phone: "+91 9820011229", deployed_count: 15, required_guards: 15, is_active: 1, status: "Active" },
    { id: 5, client_id: 5, client_name: "Phoenix Mills", name: "Phoenix Palladium Mall", code: "SITE-PHX-01", address: "Lower Parel, Mumbai", city: "Mumbai", latitude: 18.9950, longitude: 72.8258, geofence_radius_meters: 250, supervisor_name: "Nitin Sawant", supervisor_phone: "+91 9820011230", deployed_count: 30, required_guards: 30, is_active: 1, status: "Active" },
  ],

  // 3. Guards
  guards: [
    { id: 1, name: "Santosh Tukaram Jadhav", full_name: "Santosh Tukaram Jadhav", code: "SGF-G-1001", employee_id: "SGF-G-1001", mobile: "9892011001", category_name: "Senior Guard", designation: "Senior Guard", current_site_name: "Lodha Bellissimo", current_site_id: 1, blood_group: "O+", kyc_status: "Verified", pv_status: "Clear", missing_docs: 0, status: "Active", is_active: 1 },
    { id: 2, name: "Mahesh Balasaheb Shinde", full_name: "Mahesh Balasaheb Shinde", code: "SGF-G-1002", employee_id: "SGF-G-1002", mobile: "9892011003", category_name: "Security Guard", designation: "Security Guard", current_site_name: "Lodha Bellissimo", current_site_id: 1, blood_group: "B+", kyc_status: "Verified", pv_status: "Clear", missing_docs: 0, status: "Active", is_active: 1 },
    { id: 3, name: "Pravin Dattatray Patil", full_name: "Pravin Dattatray Patil", code: "SGF-G-1003", employee_id: "SGF-G-1003", mobile: "9892011005", category_name: "Head Guard", designation: "Head Guard", current_site_name: "HDFC Bank BKC Complex", current_site_id: 2, blood_group: "AB+", kyc_status: "Verified", pv_status: "Clear", missing_docs: 0, status: "Active", is_active: 1 },
    { id: 4, name: "Rahul Suresh Gaikwad", full_name: "Rahul Suresh Gaikwad", code: "SGF-G-1004", employee_id: "SGF-G-1004", mobile: "9892011007", category_name: "Security Guard", designation: "Security Guard", current_site_name: "HDFC Bank BKC Complex", current_site_id: 2, blood_group: "A+", kyc_status: "Verified", pv_status: "Clear", missing_docs: 0, status: "Active", is_active: 1 },
    { id: 5, name: "Sanjay Manohar Kadam", full_name: "Sanjay Manohar Kadam", code: "SGF-G-1005", employee_id: "SGF-G-1005", mobile: "9892011009", category_name: "Armed Guard", designation: "Armed Guard", current_site_name: "HDFC Bank BKC Complex", current_site_id: 2, blood_group: "O+", kyc_status: "Verified", pv_status: "Clear", missing_docs: 0, status: "Active", is_active: 1 },
    { id: 6, name: "Pooja Ashok Chaugule", full_name: "Pooja Ashok Chaugule", code: "SGF-G-1006", employee_id: "SGF-G-1006", mobile: "9892011011", category_name: "Lady Guard", designation: "Lady Guard", current_site_name: "Phoenix Palladium Mall", current_site_id: 5, blood_group: "B+", kyc_status: "Verified", pv_status: "Clear", missing_docs: 0, status: "Active", is_active: 1 },
    { id: 7, name: "Sunita Ramesh Kamble", full_name: "Sunita Ramesh Kamble", code: "SGF-G-1007", employee_id: "SGF-G-1007", mobile: "9892011013", category_name: "Lady Guard", designation: "Lady Guard", current_site_name: "Phoenix Palladium Mall", current_site_id: 5, blood_group: "A+", kyc_status: "Verified", pv_status: "Clear", missing_docs: 0, status: "Active", is_active: 1 },
    { id: 8, name: "Deepak Namdeo Bhosle", full_name: "Deepak Namdeo Bhosle", code: "SGF-G-1008", employee_id: "SGF-G-1008", mobile: "9892011015", category_name: "Security Guard", designation: "Security Guard", current_site_name: "Reliance Tech Park - Block A", current_site_id: 3, blood_group: "O-", kyc_status: "Verified", pv_status: "Clear", missing_docs: 0, status: "Active", is_active: 1 },
    { id: 9, name: "Anand Vilas Sawant", full_name: "Anand Vilas Sawant", code: "SGF-G-1009", employee_id: "SGF-G-1009", mobile: "9892011017", category_name: "Patrol Guard", designation: "Patrol Guard", current_site_name: "Reliance Tech Park - Block A", current_site_id: 3, blood_group: "B-", kyc_status: "Verified", pv_status: "Clear", missing_docs: 0, status: "Active", is_active: 1 },
    { id: 10, name: "Kishore Pandurang Mane", full_name: "Kishore Pandurang Mane", code: "SGF-G-1010", employee_id: "SGF-G-1010", mobile: "9892011019", category_name: "Security Guard", designation: "Security Guard", current_site_name: "Godrej One Corporate Tower", current_site_id: 4, blood_group: "AB-", kyc_status: "Verified", pv_status: "Clear", missing_docs: 0, status: "Active", is_active: 1 },
  ],

  // 4. Deployments
  deployments: [
    { id: 1, guard_id: 1, guard_name: "Santosh Tukaram Jadhav", site_id: 1, site_name: "Lodha Bellissimo", shift_id: 1, shift_name: "Morning Shift (A)", status: "Active", designation: "Senior Guard - Main Gate" },
    { id: 2, guard_id: 2, guard_name: "Mahesh Balasaheb Shinde", site_id: 1, site_name: "Lodha Bellissimo", shift_id: 1, shift_name: "Morning Shift (A)", status: "Active", designation: "Security Guard - Lobby" },
    { id: 3, guard_id: 3, guard_name: "Pravin Dattatray Patil", site_id: 2, site_name: "HDFC Bank BKC Complex", shift_id: 1, shift_name: "Morning Shift (A)", status: "Active", designation: "Head Guard - Reception" },
    { id: 4, guard_id: 4, guard_name: "Rahul Suresh Gaikwad", site_id: 2, site_name: "HDFC Bank BKC Complex", shift_id: 2, shift_name: "Afternoon Shift (B)", status: "Active", designation: "Security Guard - Basement" },
    { id: 5, guard_id: 5, guard_name: "Sanjay Manohar Kadam", site_id: 2, site_name: "HDFC Bank BKC Complex", shift_id: 1, shift_name: "Morning Shift (A)", status: "Active", designation: "Armed Guard - Cash Vault" },
    { id: 6, guard_id: 6, guard_name: "Pooja Ashok Chaugule", site_id: 5, site_name: "Phoenix Palladium Mall", shift_id: 1, shift_name: "Morning Shift (A)", status: "Active", designation: "Lady Guard - VIP Entrance" },
    { id: 7, guard_id: 7, guard_name: "Sunita Ramesh Kamble", site_id: 5, site_name: "Phoenix Palladium Mall", shift_id: 2, shift_name: "Afternoon Shift (B)", status: "Active", designation: "Lady Guard - Retail Arcade" },
    { id: 8, guard_id: 8, guard_name: "Deepak Namdeo Bhosle", site_id: 3, site_name: "Reliance Tech Park - Block A", shift_id: 1, shift_name: "Morning Shift (A)", status: "Active", designation: "Security Guard - Gate 2" },
    { id: 9, guard_id: 9, guard_name: "Anand Vilas Sawant", site_id: 3, site_name: "Reliance Tech Park - Block A", shift_id: 3, shift_name: "Night Shift (C)", status: "Active", designation: "Patrol Guard - Perimeter" },
    { id: 10, guard_id: 10, guard_name: "Kishore Pandurang Mane", site_id: 4, site_name: "Godrej One Corporate Tower", shift_id: 1, shift_name: "Morning Shift (A)", status: "Active", designation: "Security Guard - Podium Gate" },
  ],

  // 5. Shifts
  shifts: [
    { id: 1, name: "Morning Shift (A)", code: "A", start_time: "07:00:00", end_time: "15:00:00", duration_hours: 8.0, shift_type: "Day", is_active: 1 },
    { id: 2, name: "Afternoon Shift (B)", code: "B", start_time: "15:00:00", end_time: "23:00:00", duration_hours: 8.0, shift_type: "Day", is_active: 1 },
    { id: 3, name: "Night Shift (C)", code: "C", start_time: "23:00:00", end_time: "07:00:00", duration_hours: 8.0, shift_type: "Night", is_active: 1 },
    { id: 4, name: "General Office Shift", code: "G", start_time: "09:00:00", end_time: "18:00:00", duration_hours: 9.0, shift_type: "Day", is_active: 1 },
  ],

  // 6. Incidents
  incidents: [
    { id: 1, site_id: 1, site_name: "Lodha Bellissimo", incident_type: "Unauthorized Vehicle Entry Attempt", severity: "Low", description: "Commercial delivery truck tried entering without pass. Driver redirected to visitor reception.", status: "Resolved", reported_at: "2026-10-23T08:30:00Z", reported_by_name: "Santosh Tukaram Jadhav" },
    { id: 2, site_id: 5, site_name: "Phoenix Palladium Mall", incident_type: "Unattended Bag Alert", severity: "Medium", description: "Blue duffel bag reported near Level 2 Escalator. Inspected and retrieved safely by owner.", status: "Resolved", reported_at: "2026-10-22T14:15:00Z", reported_by_name: "Pooja Ashok Chaugule" },
    { id: 3, site_id: 2, site_name: "HDFC Bank BKC Complex", incident_type: "Access Card Tailgating", severity: "Low", description: "Contractor attempted following employee without badge scan at Turnstile 3. Intercepted.", status: "Resolved", reported_at: "2026-10-21T09:40:00Z", reported_by_name: "Pravin Dattatray Patil" },
    { id: 4, site_id: 3, site_name: "Reliance Tech Park - Block A", incident_type: "Perimeter Motion Sensor Trip", severity: "Medium", description: "Zone 4 sensor alert during night shift. Patrol team inspected and found tree branch disturbance.", status: "Closed", reported_at: "2026-10-20T23:50:00Z", reported_by_name: "Anand Vilas Sawant" },
  ],

  // 7. Invoices & Billing
  invoices: [
    { id: 1, invoice_no: "INV/2026/09/001", invoice_number: "INV/2026/09/001", client_id: 1, client_name: "Lodha Group", billing_month: "September 2026", period_from: "2026-09-01", period_to: "2026-09-30", subtotal_paise: 36000000, gst_paise: 6480000, total_paise: 42480000, balance_paise: 0, status: "Paid", invoice_date: "2026-10-01", issue_date: "2026-10-01", due_date: "2026-10-15" },
    { id: 2, invoice_no: "INV/2026/09/002", invoice_number: "INV/2026/09/002", client_id: 2, client_name: "HDFC Bank Ltd", billing_month: "September 2026", period_from: "2026-09-01", period_to: "2026-09-30", subtotal_paise: 54000000, gst_paise: 9720000, total_paise: 63720000, balance_paise: 0, status: "Paid", invoice_date: "2026-10-01", issue_date: "2026-10-01", due_date: "2026-10-15" },
    { id: 3, invoice_no: "INV/2026/10/003", invoice_number: "INV/2026/10/003", client_id: 3, client_name: "Reliance Corporate Park", billing_month: "October 2026", period_from: "2026-10-01", period_to: "2026-10-31", subtotal_paise: 75000000, gst_paise: 13500000, total_paise: 88500000, balance_paise: 88500000, status: "Issued", invoice_date: "2026-10-15", issue_date: "2026-10-15", due_date: "2026-10-30" },
    { id: 4, invoice_no: "INV/2026/10/004", invoice_number: "INV/2026/10/004", client_id: 5, client_name: "Phoenix Mills", billing_month: "October 2026", period_from: "2026-10-01", period_to: "2026-10-31", subtotal_paise: 90000000, gst_paise: 16200000, total_paise: 106200000, balance_paise: 106200000, status: "Issued", invoice_date: "2026-10-18", issue_date: "2026-10-18", due_date: "2026-11-02" },
    { id: 5, invoice_no: "INV/2026/10/005", invoice_number: "INV/2026/10/005", client_id: 4, client_name: "Godrej Properties", billing_month: "October 2026", period_from: "2026-10-01", period_to: "2026-10-31", subtotal_paise: 44067797, gst_paise: 7932203, total_paise: 52000000, balance_paise: 52000000, status: "Issued", invoice_date: "2026-10-19", issue_date: "2026-10-19", due_date: "2026-11-03" },
  ],

  billing_contracts: [
    { id: 1, contract_number: "CNT/2026/001", client_id: 1, client_name: "Lodha Group", site_name: "Lodha Bellissimo", monthly_billing_paise: 42480000, status: "active", is_billed: true, invoice_number: "INV/2026/09/001" },
    { id: 2, contract_number: "CNT/2026/002", client_id: 2, client_name: "HDFC Bank Ltd", site_name: "HDFC Bank BKC Complex", monthly_billing_paise: 63720000, status: "active", is_billed: true, invoice_number: "INV/2026/09/002" },
    { id: 3, contract_number: "CNT/2026/003", client_id: 3, client_name: "Reliance Corporate Park", site_name: "Reliance Tech Park - Block A", monthly_billing_paise: 88500000, status: "active", is_billed: true, invoice_number: "INV/2026/10/003" },
    { id: 4, contract_number: "CNT/2026/004", client_id: 4, client_name: "Godrej Properties", site_name: "Godrej One Corporate Tower", monthly_billing_paise: 52000000, status: "active", is_billed: true, invoice_number: "INV/2026/10/005" },
    { id: 5, contract_number: "CNT/2026/005", client_id: 5, client_name: "Phoenix Mills", site_name: "Phoenix Palladium Mall", monthly_billing_paise: 106200000, status: "active", is_billed: true, invoice_number: "INV/2026/10/004" },
  ],

  credit_notes: [
    { id: 1, note_no: "CN/2026/001", note_type: "credit", invoice_no: "INV/2026/09/001", client_name: "Lodha Group", amount_paise: 1500000, reason: "Adjustment for 2 days scheduled maintenance reduction", status: "issued", created_at: "2026-10-05" },
    { id: 2, note_no: "DN/2026/001", note_type: "debit", invoice_no: "INV/2026/09/002", client_name: "HDFC Bank Ltd", amount_paise: 2500000, reason: "Additional holiday perimeter squad on Gandhi Jayanti", status: "issued", created_at: "2026-10-04" },
  ],

  // 8. Collections & Ageing
  payments: [
    { id: 1, receipt_no: "RCP-2026-001", payment_date: "2026-10-08", client_id: 1, client_name: "Lodha Group", mode: "neft", cheque_no: "CMS98201928", amount_paise: 42480000, tds_paise: 849600, unallocated_paise: 0, status: "allocated" },
    { id: 2, receipt_no: "RCP-2026-002", payment_date: "2026-10-10", client_id: 2, client_name: "HDFC Bank Ltd", mode: "rtgs", cheque_no: "HDFC0092102", amount_paise: 63720000, tds_paise: 1274400, unallocated_paise: 0, status: "allocated" },
    { id: 3, receipt_no: "RCP-2026-003", payment_date: "2026-10-14", client_id: 3, client_name: "Reliance Corporate Park", mode: "neft", cheque_no: "AXIS7729101", amount_paise: 75000000, tds_paise: 1500000, unallocated_paise: 0, status: "allocated" },
  ],

  // 9. CRM Leads & Quotations
  leads: [
    { id: 1, lead_no: "LD-2026-001", company_name: "Adani Realty - Western Heights", contact_name: "Karan Patel", mobile: "+91 98200 44556", email: "karan.patel@adani.com", city: "Mumbai", required_guards: 16, estimated_guards: 16, property_type: "Residential Highrise", stage: "quotation", estimated_value_paise: 48000000, owner_name: "System Administrator", next_followup_at: "2026-10-25" },
    { id: 2, lead_no: "LD-2026-002", company_name: "Tata Consultancy Services - Olympus", contact_name: "Smita Rao", mobile: "+91 98200 77889", email: "smita.rao@tcs.com", city: "Thane", required_guards: 40, estimated_guards: 40, property_type: "IT Park Campus", stage: "negotiation", estimated_value_paise: 120000000, owner_name: "Rajesh Sharma", next_followup_at: "2026-10-26" },
    { id: 3, lead_no: "LD-2026-003", company_name: "K Raheja Corp - Mindspace", contact_name: "Dinesh Singhal", mobile: "+91 98200 99001", email: "dinesh.s@kraheja.com", city: "Navi Mumbai", required_guards: 25, estimated_guards: 25, property_type: "Commercial SEZ", stage: "won", estimated_value_paise: 75000000, owner_name: "System Administrator", next_followup_at: null },
    { id: 4, lead_no: "LD-2026-004", company_name: "DLF Cyber City - Phase 3", contact_name: "Rohan Malhotra", mobile: "+91 98200 12345", email: "rohan.m@dlf.in", city: "Pune", required_guards: 30, estimated_guards: 30, property_type: "Commercial IT SEZ", stage: "survey", estimated_value_paise: 90000000, owner_name: "Rajesh Sharma", next_followup_at: "2026-10-27" },
    { id: 5, lead_no: "LD-2026-005", company_name: "Piramal Capital & Housing Finance", contact_name: "Anjali Deshpande", mobile: "+91 98200 23456", email: "anjali.d@piramal.com", city: "Mumbai", required_guards: 12, estimated_guards: 12, property_type: "Corporate BFSI HQ", stage: "contacted", estimated_value_paise: 38000000, owner_name: "System Administrator", next_followup_at: "2026-10-24" },
    { id: 6, lead_no: "LD-2026-006", company_name: "Oberoi Realty - Sky City", contact_name: "Vikas Joshi", mobile: "+91 98200 34567", email: "vikas.j@oberoirealty.com", city: "Mumbai", required_guards: 20, estimated_guards: 20, property_type: "Luxury Residential Tower", stage: "new", estimated_value_paise: 60000000, owner_name: "Rajesh Sharma", next_followup_at: "2026-10-28" },
  ],

  quotations: [
    { id: 1, quote_no: "Q-2026-089", version: 1, party_name: "Adani Realty - Western Heights", quote_date: "2026-10-12", headcount: 16, total_paise: 48000000, status: "sent", valid_until: "2026-11-12" },
    { id: 2, quote_no: "Q-2026-090", version: 2, party_name: "Tata Consultancy Services - Olympus", quote_date: "2026-10-15", headcount: 40, total_paise: 120000000, status: "draft", valid_until: "2026-11-15" },
    { id: 3, quote_no: "Q-2026-085", version: 1, party_name: "K Raheja Corp - Mindspace", quote_date: "2026-09-28", headcount: 25, total_paise: 75000000, status: "accepted", valid_until: "2026-10-28" },
  ],

  // 10. Recruitment
  job_openings: [
    { id: 1, title: "Senior Armed Security Officer", guard_category: "Armed Guard", location: "Bandra Kurla Complex, Mumbai", vacancies: 8, min_age: 25, max_age: 45, min_height_cm: 172, qualification: "Ex-Serviceman / 12th Pass", salary_offer_paise: 3800000, salary: "38,000", status: "open", opened_on: "2026-10-01", description: "Armed security officer for financial corporate HQ vault and perimeter protection." },
    { id: 2, title: "Retail Security & Lady Guards", guard_category: "Lady Guard", location: "Lower Parel, Mumbai", vacancies: 12, min_age: 21, max_age: 38, min_height_cm: 158, qualification: "10th Pass", salary_offer_paise: 2800000, salary: "28,000", status: "open", opened_on: "2026-10-05", description: "Customer-facing retail security, bag checks, and visitor access management." },
    { id: 3, title: "Industrial Tech Park Patrol Guard", guard_category: "Patrol Guard", location: "Navi Mumbai", vacancies: 15, min_age: 21, max_age: 42, min_height_cm: 168, qualification: "10th Pass", salary_offer_paise: 2600000, salary: "26,000", status: "open", opened_on: "2026-10-10", description: "Perimeter patrolling, QR code scans, night rounds and vehicle gate logging." },
  ],

  candidates: [
    { id: 1, name: "Amit Vijay Pawar", full_name: "Amit Vijay Pawar", mobile: "9820011991", age: 28, experience_years: 5, stage: "interview", status: "interview_scheduled", ex_serviceman: true, verification_status: "verified", job_opening_title: "Senior Armed Security Officer", created_at: "2026-10-15" },
    { id: 2, name: "Suraj Sanjay Chavan", full_name: "Suraj Sanjay Chavan", mobile: "9820011992", age: 24, experience_years: 2, stage: "screening", status: "screening", ex_serviceman: false, verification_status: "verified", job_opening_title: "Industrial Tech Park Patrol Guard", created_at: "2026-10-16" },
    { id: 3, name: "Kavita Mohan Shinde", full_name: "Kavita Mohan Shinde", mobile: "9820011993", age: 26, experience_years: 3, stage: "selected", status: "selected", ex_serviceman: false, verification_status: "verified", job_opening_title: "Retail Security & Lady Guards", created_at: "2026-10-14" },
    { id: 4, name: "Ganesh Vishnu Ghag", full_name: "Ganesh Vishnu Ghag", mobile: "9820011994", age: 31, experience_years: 6, stage: "applied", status: "applied", ex_serviceman: true, verification_status: "pending", job_opening_title: "Senior Armed Security Officer", created_at: "2026-10-20" },
    { id: 5, name: "Nitin Tukaram Sawant", full_name: "Nitin Tukaram Sawant", mobile: "9820011995", age: 23, experience_years: 1, stage: "applied", status: "applied", ex_serviceman: false, verification_status: "pending", job_opening_title: "Industrial Tech Park Patrol Guard", created_at: "2026-10-21" },
    { id: 6, name: "Prakash Babu Mhatre", full_name: "Prakash Babu Mhatre", mobile: "9820011996", age: 29, experience_years: 4, stage: "hired", status: "hired", ex_serviceman: false, verification_status: "verified", job_opening_title: "Industrial Tech Park Patrol Guard", created_at: "2026-10-10" },
  ],

  // 11. Rosters & Manpower Requests
  rosters: [
    { id: 1, guard_id: 1, guard_name: "Santosh Tukaram Jadhav", site_id: 1, site_name: "Lodha Bellissimo", shift_name: "Morning Shift (A)", shift_code: "A", start_time: "07:00", end_time: "15:00", duty_date: "2026-10-23", attendance_status: "P", is_relief: false },
    { id: 2, guard_id: 2, guard_name: "Mahesh Balasaheb Shinde", site_id: 1, site_name: "Lodha Bellissimo", shift_name: "Morning Shift (A)", shift_code: "A", start_time: "07:00", end_time: "15:00", duty_date: "2026-10-23", attendance_status: "P", is_relief: false },
    { id: 3, guard_id: 3, guard_name: "Pravin Dattatray Patil", site_id: 2, site_name: "HDFC Bank BKC Complex", shift_name: "Morning Shift (A)", shift_code: "A", start_time: "07:00", end_time: "15:00", duty_date: "2026-10-23", attendance_status: "P", is_relief: false },
    { id: 4, guard_id: 4, guard_name: "Rahul Suresh Gaikwad", site_id: 2, site_name: "HDFC Bank BKC Complex", shift_name: "Afternoon Shift (B)", shift_code: "B", start_time: "15:00", end_time: "23:00", duty_date: "2026-10-23", attendance_status: "P", is_relief: false },
    { id: 5, guard_id: 5, guard_name: "Sanjay Manohar Kadam", site_id: 2, site_name: "HDFC Bank BKC Complex", shift_name: "Morning Shift (A)", shift_code: "A", start_time: "07:00", end_time: "15:00", duty_date: "2026-10-23", attendance_status: "P", is_relief: false },
  ],

  manpower_requests: [
    { id: 1, client_id: 1, client_name: "Lodha Group", site_name: "Lodha Bellissimo", request_type: "Extra Guards", guard_category: "Armed Guard", headcount: 2, from_date: "2026-10-24", to_date: "2026-10-26", reason: "Annual General Meeting & VIP Movement", status: "Approved" },
    { id: 2, client_id: 5, client_name: "Phoenix Mills", site_name: "Phoenix Palladium Mall", request_type: "Festival Deployment", guard_category: "Lady Guard", headcount: 4, from_date: "2026-10-28", to_date: "2026-11-04", reason: "Diwali Festive Season Footfall Surge", status: "Approved" },
    { id: 3, client_id: 2, client_name: "HDFC Bank Ltd", site_name: "HDFC Bank BKC Complex", request_type: "Night Patrol Squad", guard_category: "Senior Guard", headcount: 2, from_date: "2026-10-25", to_date: "2026-10-31", reason: "Data Center Infrastructure Migration Audit", status: "Pending" },
  ],

  // 12. Patrol & Checkpoints
  checkpoints: [
    { id: 1, site_id: 1, site_name: "Lodha Bellissimo", name: "Main Vehicular Entry Gate", code: "CP-LOD-01", qr_code: "SGF:CHK:1:001", latitude: 18.9912, longitude: 72.8315, sequence_order: 1, is_active: 1 },
    { id: 2, site_id: 1, site_name: "Lodha Bellissimo", name: "Tower A Ground Lobby", code: "CP-LOD-02", qr_code: "SGF:CHK:1:002", latitude: 18.9915, longitude: 72.8318, sequence_order: 2, is_active: 1 },
    { id: 3, site_id: 1, site_name: "Lodha Bellissimo", name: "Basement Level B1 Pump Room", code: "CP-LOD-03", qr_code: "SGF:CHK:1:003", latitude: 18.9911, longitude: 72.8313, sequence_order: 3, is_active: 1 },
    { id: 4, site_id: 2, site_name: "HDFC Bank BKC Complex", name: "Executive Reception Turnstile", code: "CP-HDF-01", qr_code: "SGF:CHK:2:001", latitude: 19.0665, longitude: 72.8682, sequence_order: 1, is_active: 1 },
    { id: 5, site_id: 2, site_name: "HDFC Bank BKC Complex", name: "Cash Currency Vault Antechamber", code: "CP-HDF-02", qr_code: "SGF:CHK:2:002", latitude: 19.0667, longitude: 72.8685, sequence_order: 2, is_active: 1 },
    { id: 6, site_id: 2, site_name: "HDFC Bank BKC Complex", name: "North Perimeter Fire Exit", code: "CP-HDF-03", qr_code: "SGF:CHK:2:003", latitude: 19.0663, longitude: 72.8680, sequence_order: 3, is_active: 1 },
    { id: 7, site_id: 3, site_name: "Reliance Tech Park - Block A", name: "Server Hall 4 Entry", code: "CP-RCP-01", qr_code: "SGF:CHK:3:001", latitude: 19.1256, longitude: 73.0034, sequence_order: 1, is_active: 1 },
    { id: 8, site_id: 3, site_name: "Reliance Tech Park - Block A", name: "Perimeter Patrol Post 8", code: "CP-RCP-02", qr_code: "SGF:CHK:3:002", latitude: 19.1259, longitude: 73.0039, sequence_order: 2, is_active: 1 },
    { id: 9, site_id: 5, site_name: "Phoenix Palladium Mall", name: "Grand Galleria South Gate", code: "CP-PHX-01", qr_code: "SGF:CHK:5:001", latitude: 18.9950, longitude: 72.8258, sequence_order: 1, is_active: 1 },
    { id: 10, site_id: 5, site_name: "Phoenix Palladium Mall", name: "Multiplex Level 3 Emergency Stairs", code: "CP-PHX-02", qr_code: "SGF:CHK:5:002", latitude: 18.9954, longitude: 72.8262, sequence_order: 2, is_active: 1 },
  ],

  patrol_routes: [
    { id: 1, site_id: 1, site_name: "Lodha Bellissimo", name: "Perimeter & Basements Night Round", checkpoints_count: 3, estimated_minutes: 25, is_active: 1 },
    { id: 2, site_id: 2, site_name: "HDFC Bank BKC Complex", name: "Vault & Financial Perimeter Inspection", checkpoints_count: 3, estimated_minutes: 20, is_active: 1 },
    { id: 3, site_id: 3, site_name: "Reliance Tech Park - Block A", name: "Campus Tech Perimeter Patrol", checkpoints_count: 2, estimated_minutes: 30, is_active: 1 },
  ],

  patrol_schedules: [
    { id: 1, site_id: 1, site_name: "Lodha Bellissimo", route_name: "Perimeter & Basements Night Round", shift_name: "Night Shift (C)", frequency_hours: 2, is_active: 1 },
    { id: 2, site_id: 2, site_name: "HDFC Bank BKC Complex", route_name: "Vault & Financial Perimeter Inspection", shift_name: "Morning Shift (A)", frequency_hours: 1, is_active: 1 },
    { id: 3, site_id: 3, site_name: "Reliance Tech Park - Block A", route_name: "Campus Tech Perimeter Patrol", shift_name: "Afternoon Shift (B)", frequency_hours: 2, is_active: 1 },
  ],

  patrol_rounds: [
    { id: 1, site_id: 1, site_name: "Lodha Bellissimo", route_name: "Perimeter & Basements Night Round", guard_name: "Santosh Tukaram Jadhav", started_at: "2026-10-23T06:00:00Z", finished_at: "2026-10-23T06:22:00Z", status: "completed", checkpoints_scanned: 3, checkpoints_total: 3, compliance_percent: 100 },
    { id: 2, site_id: 2, site_name: "HDFC Bank BKC Complex", route_name: "Vault & Financial Perimeter Inspection", guard_name: "Pravin Dattatray Patil", started_at: "2026-10-23T08:00:00Z", finished_at: "2026-10-23T08:18:00Z", status: "completed", checkpoints_scanned: 3, checkpoints_total: 3, compliance_percent: 100 },
    { id: 3, site_id: 3, site_name: "Reliance Tech Park - Block A", route_name: "Campus Tech Perimeter Patrol", guard_name: "Anand Vilas Sawant", started_at: "2026-10-22T23:00:00Z", finished_at: "2026-10-22T23:28:00Z", status: "completed", checkpoints_scanned: 2, checkpoints_total: 2, compliance_percent: 100 },
  ],

  patrol_scans: [
    { id: 1, checkpoint_name: "Main Vehicular Entry Gate", site_name: "Lodha Bellissimo", guard_name: "Santosh Tukaram Jadhav", scanned_at: "2026-10-23T06:02:15Z", is_valid: 1, distance_meters: 4.2 },
    { id: 2, checkpoint_name: "Tower A Ground Lobby", site_name: "Lodha Bellissimo", guard_name: "Santosh Tukaram Jadhav", scanned_at: "2026-10-23T06:11:40Z", is_valid: 1, distance_meters: 2.1 },
    { id: 3, checkpoint_name: "Basement Level B1 Pump Room", site_name: "Lodha Bellissimo", guard_name: "Santosh Tukaram Jadhav", scanned_at: "2026-10-23T06:21:05Z", is_valid: 1, distance_meters: 6.8 },
    { id: 4, checkpoint_name: "Executive Reception Turnstile", site_name: "HDFC Bank BKC Complex", guard_name: "Pravin Dattatray Patil", scanned_at: "2026-10-23T08:02:00Z", is_valid: 1, distance_meters: 1.5 },
  ],

  site_visits: [
    { id: 1, site_id: 1, site_name: "Lodha Bellissimo", user_name: "Vikram Deshmukh", visited_at: "2026-10-23T07:45:00Z", distance_m: 12, inside_fence: true, guards_present: 12, rating: 5, remarks: "Turnout crisp, gate log register maintained up to date, morning parade conducted.", photo_url: null },
    { id: 2, site_id: 2, site_name: "HDFC Bank BKC Complex", user_name: "Satish Pawar", visited_at: "2026-10-22T16:30:00Z", distance_m: 8, inside_fence: true, guards_present: 18, rating: 5, remarks: "Vault access control logs verified, CCTV control room coordination seamless.", photo_url: null },
    { id: 3, site_id: 5, site_name: "Phoenix Palladium Mall", user_name: "Nitin Sawant", visited_at: "2026-10-22T13:00:00Z", distance_m: 15, inside_fence: true, guards_present: 30, rating: 4, remarks: "Baggage scanner queue managed efficiently during afternoon shopping rush.", photo_url: null },
  ],

  // 13. Payroll
  payroll_runs: [
    { id: 1, period: "2026-09", month_year: "September 2026", branch_id: 1, branch_name: "Mumbai Head Office", status: "paid", guards_count: 10, gross_paise: 28500000, deductions_paise: 3800000, net_paise: 24700000, computed_at: "2026-10-02T10:00:00Z" },
    { id: 2, period: "2026-08", month_year: "August 2026", branch_id: 1, branch_name: "Mumbai Head Office", status: "paid", guards_count: 10, gross_paise: 28200000, deductions_paise: 3750000, net_paise: 24450000, computed_at: "2026-09-02T10:00:00Z" },
  ],

  salary_structures: [
    { id: 1, designation: "Senior Guard", basic_monthly_paise: 2200000, hra_paise: 440000, special_allowance_paise: 360000, pf_applicable: 1, esi_applicable: 1, pt_applicable: 1 },
    { id: 2, designation: "Armed Guard", basic_monthly_paise: 2600000, hra_paise: 520000, special_allowance_paise: 680000, pf_applicable: 1, esi_applicable: 1, pt_applicable: 1 },
    { id: 3, designation: "Head Guard", basic_monthly_paise: 2400000, hra_paise: 480000, special_allowance_paise: 420000, pf_applicable: 1, esi_applicable: 1, pt_applicable: 1 },
    { id: 4, designation: "Security Guard", basic_monthly_paise: 1800000, hra_paise: 360000, special_allowance_paise: 240000, pf_applicable: 1, esi_applicable: 1, pt_applicable: 1 },
  ],

  advances: [
    { id: 1, guard_id: 2, guard_name: "Mahesh Balasaheb Shinde", amount_paise: 500000, request_date: "2026-10-10", reason: "Medical expenses for family", status: "approved" },
    { id: 2, guard_id: 4, guard_name: "Rahul Suresh Gaikwad", amount_paise: 300000, request_date: "2026-10-12", reason: "School fees", status: "approved" },
  ],

  fines: [
    { id: 1, guard_id: 8, guard_name: "Deepak Namdeo Bhosle", amount_paise: 50000, issue_date: "2026-10-08", reason: "Late reporting on shift without prior intimation", status: "deducted" },
  ],

  // 14. Contracts
  contracts: [
    { id: 1, contract_number: "CNT/2026/001", client_id: 1, client_name: "Lodha Group", title: "Manned Guarding Agreement - Lodha Bellissimo", start_date: "2026-04-01", end_date: "2027-03-31", billing_cycle: "monthly", billing_basis: "per_guard_month", monthly_billing_paise: 42480000, gst_bp: 1800, payment_terms_days: 15, status: "active", terms: "24/7 Security deployment, replacement within 2 hours, biometric muster." },
    { id: 2, contract_number: "CNT/2026/002", client_id: 2, client_name: "HDFC Bank Ltd", title: "Corporate Facility & Vault Protection - BKC", start_date: "2026-04-01", end_date: "2027-03-31", billing_cycle: "monthly", billing_basis: "per_guard_month", monthly_billing_paise: 63720000, gst_bp: 1800, payment_terms_days: 15, status: "active", terms: "Armed security protocol, background verified staff, cash vault escorted transit." },
    { id: 3, contract_number: "CNT/2026/003", client_id: 3, client_name: "Reliance Corporate Park", title: "Tech Campus Perimeter & Facility Operations", start_date: "2026-05-01", end_date: "2027-04-30", billing_cycle: "monthly", billing_basis: "per_guard_month", monthly_billing_paise: 88500000, gst_bp: 1800, payment_terms_days: 30, status: "active", terms: "Perimeter QR scans every 2 hours, visitor badging integration, fire safety drills." },
    { id: 4, contract_number: "CNT/2026/004", client_id: 4, client_name: "Godrej Properties", title: "Corporate Tower Security Services", start_date: "2026-01-01", end_date: "2026-12-31", billing_cycle: "monthly", billing_basis: "per_guard_month", monthly_billing_paise: 52000000, gst_bp: 1800, payment_terms_days: 15, status: "active", terms: "Lobby customer assistance, vehicular scanning, automated bollard operation." },
    { id: 5, contract_number: "CNT/2026/005", client_id: 5, client_name: "Phoenix Mills", title: "Mall Retail & Crowd Management Services", start_date: "2026-06-01", end_date: "2027-05-31", billing_cycle: "monthly", billing_basis: "per_guard_month", monthly_billing_paise: 106200000, gst_bp: 1800, payment_terms_days: 30, status: "active", terms: "Mall opening/closing checks, loss prevention squad, female security officers." },
  ],

  site_requirements: [
    { id: 1, site_id: 1, site_name: "Lodha Bellissimo", shift_name: "Morning Shift (A)", guard_category: "Senior Guard", headcount: 4 },
    { id: 2, site_id: 1, site_name: "Lodha Bellissimo", shift_name: "Morning Shift (A)", guard_category: "Security Guard", headcount: 8 },
    { id: 3, site_id: 2, site_name: "HDFC Bank BKC Complex", shift_name: "Morning Shift (A)", guard_category: "Head Guard", headcount: 2 },
    { id: 4, site_id: 2, site_name: "HDFC Bank BKC Complex", shift_name: "Morning Shift (A)", guard_category: "Armed Guard", headcount: 4 },
    { id: 5, site_id: 2, site_name: "HDFC Bank BKC Complex", shift_name: "Morning Shift (A)", guard_category: "Security Guard", headcount: 12 },
  ],

  // 15. Complaints
  complaints: [
    { id: 1, complaint_no: "CMP-2026-001", subject: "Visitor Access Turnstile Delay at Main Gate", client_id: 1, client_name: "Lodha Group", site_name: "Lodha Bellissimo", complaint_type_name: "Operations & Access", priority: "medium", status: "resolved", source: "client", raised_by_name: "Arun Singhania", assigned_to_name: "Rajesh Sharma", client_rating: 5, created_at: "2026-10-18T11:20:00Z", description: "Visitor rush hour saw 5 minute wait times due to single scanner lane." },
    { id: 2, complaint_no: "CMP-2026-002", subject: "Patrol Guard Walkie-Talkie Static Issue", client_id: 5, client_name: "Phoenix Mills", site_name: "Phoenix Palladium Mall", complaint_type_name: "Equipment & Communication", priority: "low", status: "in_progress", source: "office", raised_by_name: "Nitin Sawant", assigned_to_name: "Rajesh Sharma", client_rating: null, created_at: "2026-10-21T15:45:00Z", description: "Radio Channel 3 experiences static in Lower Level parking area." },
    { id: 3, complaint_no: "CMP-2026-003", subject: "Request for Uniform Inspection Parade", client_id: 4, client_name: "Godrej Properties", site_name: "Godrej One Corporate Tower", complaint_type_name: "Grooming & Turnout", priority: "low", status: "resolved", source: "client", raised_by_name: "Pooja Kulkarni", assigned_to_name: "Vikram Deshmukh", client_rating: 5, created_at: "2026-10-12T09:10:00Z", description: "Ensure fresh berets and badges for quarterly investor conference." },
  ],

  // 16. Branches, Users, Roles
  branches: [
    { id: 1, name: "Mumbai Head Office", code: "MUM-HO", address: "Unit 402, Trade Center, BKC", city: "Mumbai", phone: "+91 22 2650 1100", email: "mumbai@safeguardforce.in", is_active: 1 },
    { id: 2, name: "Pune Regional Office", code: "PUN-RO", address: "Cyber City, Magarpatta", city: "Pune", phone: "+91 20 6720 2200", email: "pune@safeguardforce.in", is_active: 1 },
    { id: 3, name: "Thane Branch", code: "THN-BR", address: "Gokhale Road, Naupada", city: "Thane", phone: "+91 22 2540 3300", email: "thane@safeguardforce.in", is_active: 1 },
    { id: 4, name: "Navi Mumbai Operations", code: "NVM-BR", address: "Sector 17, Vashi", city: "Navi Mumbai", phone: "+91 22 2780 4400", email: "navimumbai@safeguardforce.in", is_active: 1 },
  ],

  users: [
    { id: 1, name: "System Administrator", email: "admin@sgf.local", mobile: "9820011223", role_id: 1, role_name: "Super Administrator", branch_id: 1, branch_name: "Mumbai Head Office", is_active: 1 },
    { id: 2, name: "Rajesh Sharma", email: "ops.head@safeguardforce.in", mobile: "9820011224", role_id: 2, role_name: "Operations Manager", branch_id: 1, branch_name: "Mumbai Head Office", is_active: 1 },
    { id: 3, name: "Vikram Deshmukh", email: "supervisor.mumbai@safeguardforce.in", mobile: "9820011225", role_id: 3, role_name: "Field Supervisor", branch_id: 1, branch_name: "Mumbai Head Office", is_active: 1 },
    { id: 4, name: "Sunita Patil", email: "accounts@safeguardforce.in", mobile: "9820011226", role_id: 4, role_name: "Accounts Manager", branch_id: 1, branch_name: "Mumbai Head Office", is_active: 1 },
  ],

  roles: [
    { id: 1, code: "super_admin", name: "Super Administrator", description: "Full system access across all modules and settings", app_view: "web", is_system: true, users_count: 1, permissions: { "*": true } },
    { id: 2, code: "ops_manager", name: "Operations Manager", description: "Manages sites, guards, rosters, patrol and incidents", app_view: "web", is_system: false, users_count: 1, permissions: { clients: { read: true, update: true }, sites: { read: true, update: true }, guards: { read: true, create: true, update: true }, deployments: { read: true, create: true, update: true }, rosters: { read: true, create: true, update: true }, attendance: { read: true, create: true, update: true }, patrol: { read: true }, incidents: { read: true, create: true, update: true } } },
    { id: 3, code: "supervisor", name: "Field Supervisor", description: "Field supervisor mobile app access for inspections and attendance", app_view: "supervisor", is_system: false, users_count: 1, permissions: { attendance: { read: true, create: true }, patrol: { read: true, create: true }, incidents: { read: true, create: true } } },
    { id: 4, code: "accounts", name: "Accounts & Payroll Manager", description: "Handles invoices, payments, ageing, billing and salary payroll", app_view: "web", is_system: false, users_count: 1, permissions: { billing: { read: true, create: true, update: true }, collections: { read: true, create: true, update: true }, payroll: { read: true, create: true, update: true }, reports: { read: true } } },
  ],

  audit_logs: [
    { id: 1, user_name: "System Administrator", action: "created", entity: "guard", entity_id: 10, created_at: new Date(Date.now() - 3600000).toISOString() },
    { id: 2, user_name: "Rajesh Sharma", action: "approved", entity: "attendance", entity_id: 1, created_at: new Date(Date.now() - 7200000).toISOString() },
    { id: 3, user_name: "Vikram Deshmukh", action: "resolved", entity: "incident", entity_id: 1, created_at: new Date(Date.now() - 14400000).toISOString() },
    { id: 4, user_name: "Sunita Patil", action: "issued", entity: "invoice", entity_id: 4, created_at: new Date(Date.now() - 28800000).toISOString() },
    { id: 5, user_name: "System Administrator", action: "created", entity: "client", entity_id: 5, created_at: new Date(Date.now() - 86400000).toISOString() },
  ],

  notifications: [
    { id: 1, category: "attendance", title: "Shift Attendance Ready", body: "Morning Shift (A) attendance completed across all 5 sites with 96.7% presence.", is_read: false, read_at: null, link: "/attendance", created_at: new Date(Date.now() - 1800000).toISOString() },
    { id: 2, category: "patrol", title: "Patrol Compliance High", body: "All 12 checkpoints scanned on schedule during morning patrol round.", is_read: false, read_at: null, link: "/patrol", created_at: new Date(Date.now() - 7200000).toISOString() },
    { id: 3, category: "incident", title: "Incident Closed", body: "Unauthorized vehicle entry inquiry at Lodha Bellissimo closed by Field Supervisor.", is_read: true, read_at: new Date(Date.now() - 10800000).toISOString(), link: "/incidents", created_at: new Date(Date.now() - 14400000).toISOString() },
    { id: 4, category: "billing", title: "Invoice Generated", body: "Tax Invoice INV/2026/10/004 generated for Phoenix Mills.", is_read: true, read_at: new Date(Date.now() - 25000000).toISOString(), link: "/billing", created_at: new Date(Date.now() - 28800000).toISOString() },
  ],

  // 17. Custom Fields, Data Export & Masters
  custom_fields: [
    { id: 1, entity: "guard", label: "Police Verification Number", field_key: "pv_number", field_type: "text", is_required: true, show_in_list: true, is_active: true, sort_order: 1 },
    { id: 2, entity: "guard", label: "Aadhaar UID Reference", field_key: "aadhaar_ref", field_type: "text", is_required: true, show_in_list: false, is_active: true, sort_order: 2 },
    { id: 3, entity: "client", label: "Client Sector Type", field_key: "client_sector", field_type: "select", options: ["BFSI", "Commercial Real Estate", "IT & ITES", "Retail & Malls", "Industrial"], is_required: false, show_in_list: true, is_active: true, sort_order: 1 },
    { id: 4, entity: "site", label: "Night Shift Floodlighting Level", field_key: "floodlighting", field_type: "select", options: ["Adequate High Intensity", "Partial LED", "Standard Sodium"], is_required: false, show_in_list: false, is_active: true, sort_order: 1 },
  ],

  data_export_jobs: [
    { id: 1, entity: "guards", format: "xlsx", status: "done", created_at: "2026-10-20T10:00:00Z", finished_at: "2026-10-20T10:00:15Z", attempts: 1, url: "/exports/guards.xlsx" },
    { id: 2, entity: "invoices", format: "xlsx", status: "done", created_at: "2026-10-21T14:30:00Z", finished_at: "2026-10-21T14:30:20Z", attempts: 1, url: "/exports/invoices.xlsx" },
  ],

  api_keys: [
    { id: 1, name: "ERP & HRMS Integration Key", key: "sgf_live_9a8b7c6d5e4f3a2b1c0d", created_at: "2026-10-01T00:00:00Z", last_used_at: "2026-10-23T08:00:00Z", modules: ["attendance", "guards", "rosters"] },
  ],

  webhooks: [
    { id: 1, name: "HRMS Attendance Webhook", url: "https://api.corporate-sgf.com/webhooks/attendance", events: ["attendance.punch", "incident.created"], is_active: true, created_at: "2026-10-01" },
  ],

  webhook_deliveries: [
    { id: 1, webhook_id: 1, event: "attendance.punch", status_code: 200, status: "delivered", response: "OK", created_at: "2026-10-23T07:05:00Z" },
    { id: 2, webhook_id: 1, event: "incident.created", status_code: 200, status: "delivered", response: "OK", created_at: "2026-10-23T08:31:00Z" },
  ],
};

// ============================================================================
// SYSTEM & CONFIG
// ============================================================================
app.get("/api/v1/health", (req, res) => {
  res.json(envelope({
    status: "ok",
    checks: { api: true, db: !!supabase, cache: true },
    time_utc: new Date().toISOString(),
  }));
});

app.get("/api/v1/system/health", (req, res) => {
  res.json(envelope({
    now: new Date().toISOString(),
    scheduler: {
      healthy: true,
      last_heartbeat_at: new Date(Date.now() - 14000).toISOString(),
      heartbeat_age_sec: 14,
    },
    jobs: {
      counts: { queued: 0, running: 0, failed: 0, done: 248 },
      overdue_queued: 0,
      stuck_running: 0,
      failed: [],
      recent: [
        { id: 101, queue: "exports", status: "done", duration_ms: 1240, finished_at: new Date(Date.now() - 120000).toISOString() },
        { id: 102, queue: "attendance_sync", status: "done", duration_ms: 680, finished_at: new Date(Date.now() - 300000).toISOString() },
      ],
    },
    storage: {
      database_tables: 42,
      database_size_bytes: 18454912,
      disk_total_bytes: 53687091200,
      disk_free_bytes: 38450123980,
      by_category: [
        { category: "Guard KYC & Police Verification", files_count: 28, total_bytes: 8421000 },
        { category: "Patrol Checkpoint QR & Photos", files_count: 56, total_bytes: 12400000 },
        { category: "Incident Evidence Photos", files_count: 14, total_bytes: 5210000 },
      ],
    },
    versions: {
      app: "2.4.1",
      environment: "production",
      node: "v20.18.0",
      database: "PostgreSQL 15.6 (Supabase)",
      os: "macOS / Linux (x86_64)",
      uptime: "14 days, 6 hours",
    },
  }));
});

app.post("/api/v1/system/jobs/retry-failed", (req, res) => {
  res.json(envelope({ requeued: 0 }));
});

app.get("/api/v1/app/config", (req, res) => {
  res.json(envelope({
    company: {
      name: "Safe Guard Force",
      tagline: "Guarding people, property and peace of mind",
      phone: "+91 22 2650 1100",
      email: "contact@safeguardforce.in",
    },
    timezone: "Asia/Kolkata",
    currency: "INR",
    languages: ["en", "hi"],
    support: {
      phone: "+91 98200 00000",
      email: "support@safeguardforce.in",
    },
  }));
});

app.get("/api/v1/openapi.json", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "openapi.json"));
});

// ============================================================================
// AUTHENTICATION
// ============================================================================
const adminUser = {
  id: 1,
  name: "System Administrator",
  email: "admin@sgf.local",
  mobile: "9820011223",
  language: "en",
  branch_id: 1,
  branch_name: "Mumbai Head Office",
  guard_id: null,
  client_id: null,
  has_password: true,
  last_login_at: new Date().toISOString(),
};

const adminSession = {
  user: adminUser,
  role: {
    id: 1,
    code: "super_admin",
    name: "Super Administrator",
    app_view: "web",
  },
  permissions: { "*": true },
};

app.get("/api/v1/auth/me", (req, res) => {
  const tokenCookie = req.cookies?.sgf_access;
  const authHeader = req.headers?.authorization;

  if (!tokenCookie && (!authHeader || !authHeader.startsWith("Bearer "))) {
    return res.status(401).json(envelope(null, {}, [{ message: "Unauthenticated" }]));
  }

  return res.json(envelope(adminSession));
});

app.post("/api/v1/auth/login", (req, res) => {
  const { identifier } = req.body || {};

  if (!identifier) {
    return res.status(422).json(envelope(null, {}, [{ field: "identifier", message: "Email or mobile required" }]));
  }

  const user = { ...adminUser };
  if (identifier.includes("@")) {
    user.email = identifier;
  } else {
    user.mobile = identifier;
  }

  res.cookie("sgf_access", "demo_access_token_sgf_2026", {
    httpOnly: true,
    maxAge: 15 * 60 * 1000,
    sameSite: "lax",
    path: "/",
  });
  res.cookie("sgf_refresh", "demo_refresh_token_sgf_2026", {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: "lax",
    path: "/",
  });

  return res.json(envelope({
    ...adminSession,
    user,
    tokens: {
      access_token: "demo_access_token_sgf_2026",
      refresh_token: "demo_refresh_token_sgf_2026",
      expires_in: 900,
    },
  }));
});

app.post("/api/v1/auth/refresh", (req, res) => {
  return res.json(envelope({
    tokens: {
      access_token: "demo_access_token_sgf_2026",
      refresh_token: "demo_refresh_token_sgf_2026",
      expires_in: 900,
    },
  }));
});

app.post("/api/v1/auth/logout", (req, res) => {
  res.clearCookie("sgf_access");
  res.clearCookie("sgf_refresh");
  return res.json(envelope({ message: "Logged out successfully" }));
});

// ============================================================================
// MAIN DASHBOARD
// ============================================================================
app.get("/api/v1/dashboard", (req, res) => {
  const todayStr = new Date().toISOString().split("T")[0];

  // Attendance 14 day trend
  const attendanceTrend = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    const dStr = d.toISOString().split("T")[0];
    const pct = 94.0 + (i % 5) * 1.2;
    attendanceTrend.push({
      date: dStr,
      percent: Number(pct.toFixed(1)),
      present: Math.round(100 * (pct / 100)),
      rostered: 100,
    });
  }

  // Billing 6 months trend
  const billingTrend = [
    { month: "2026-05", billed: 275000000, collected: 270000000 },
    { month: "2026-06", billed: 285000000, collected: 280000000 },
    { month: "2026-07", billed: 290000000, collected: 288000000 },
    { month: "2026-08", billed: 310000000, collected: 305000000 },
    { month: "2026-09", billed: 320000000, collected: 315000000 },
    { month: "2026-10", billed: 352900000, collected: 325000000 },
  ];

  res.json(envelope({
    generated_at: new Date().toISOString(),
    kpis: {
      deployed_vs_required: {
        value: 100,
        target: 100,
        percent: 100,
        deployed: 100,
        required: 100,
        label: "Deployed vs required",
        link: "/deployments",
      },
      active_sos: {
        value: 0,
        label: "Active SOS alerts",
        link: "/sos",
        tone: "default",
      },
      absentees: {
        label: "Absentees today",
        value: 3,
        marked_absent: 2,
        not_checked_in: 1,
        link: "/attendance",
      },
      open_incidents: {
        label: "Open incidents",
        value: 2,
        by_severity: {
          critical: 0,
          high: 0,
          medium: 1,
          low: 1,
        },
        link: "/incidents",
      },
      missed_patrols: {
        label: "Patrol scans today",
        value: 48,
        total_scans: 48,
        missed: 2,
        compliance_pct: 96,
        link: "/patrol",
      },
      billing_vs_collected: {
        label: "Billed vs collected (Oct)",
        billed_paise: 352900000,
        collected_paise: 325000000,
        percent: 92.1,
        link: "/billing",
      },
      contracts_expiring: {
        label: "Contracts expiring soon",
        value: 1,
        next_30_days: 1,
        next_60_days: 2,
        link: "/contracts",
      },
    },
    trends: {
      attendance: attendanceTrend,
      billing: billingTrend,
    },
    setup: {
      clients: inMemory.clients.length,
      sites: inMemory.sites.length,
      guards: inMemory.guards.length,
      shifts: inMemory.shifts.length,
      branches: inMemory.branches.length,
      users: inMemory.users.length,
    },
    recent_activity: [
      { id: 1, action: "created", user_name: "System Administrator", description: "Deployed 12 guards to Lodha Bellissimo morning shift", created_at: new Date(Date.now() - 3600000).toISOString() },
      { id: 2, action: "approved", user_name: "Rajesh Sharma", description: "Approved September 2026 payroll run (₹24.70 L)", created_at: new Date(Date.now() - 7200000).toISOString() },
      { id: 3, action: "resolved", user_name: "Vikram Deshmukh", description: "Closed incident #2 Unattended Bag Alert at Phoenix Palladium", created_at: new Date(Date.now() - 14400000).toISOString() },
      { id: 4, action: "issued", user_name: "Sunita Patil", description: "Issued GST Tax Invoice INV/2026/10/004 to Phoenix Mills", created_at: new Date(Date.now() - 28800000).toISOString() },
      { id: 5, action: "updated", user_name: "Rajesh Sharma", description: "Updated weekly roster shift duties for HDFC Bank BKC Complex", created_at: new Date(Date.now() - 43200000).toISOString() },
      { id: 6, action: "created", user_name: "System Administrator", description: "Added new client Godrej Properties Ltd", created_at: new Date(Date.now() - 86400000).toISOString() },
    ],
  }));
});

// ============================================================================
// CLIENTS & SITES
// ============================================================================
app.get("/api/v1/clients", (req, res) => {
  return res.json(listEnvelope(inMemory.clients));
});

app.post("/api/v1/clients", (req, res) => {
  const newClient = {
    id: inMemory.clients.length + 1,
    name: req.body.name || req.body.company_name,
    code: `CLI-${(req.body.name || "NEW").slice(0, 4).toUpperCase()}`,
    company_name: req.body.company_name || req.body.name,
    contact_person: req.body.contact_person || "Operations Lead",
    email: req.body.email || "ops@client.com",
    phone: req.body.phone || "+91 98200 00000",
    city: req.body.city || "Mumbai",
    gstin: req.body.gstin || "27AABCC0000A1Z5",
    sites_count: 0,
    deployed_count: 0,
    required_guards: 0,
    status: "Active",
    is_active: 1,
  };
  inMemory.clients.unshift(newClient);
  return res.status(201).json(envelope(newClient));
});

app.get("/api/v1/clients/:id", (req, res) => {
  const client = inMemory.clients.find(c => c.id === Number(req.params.id)) || inMemory.clients[0];
  const sites = inMemory.sites.filter(s => s.client_id === client.id);
  return res.json(envelope({
    ...client,
    sites,
    contracts_count: 1,
    active_invoices_count: 1,
    outstanding_paise: 42480000,
  }));
});

app.put("/api/v1/clients/:id", (req, res) => {
  const idx = inMemory.clients.findIndex(c => c.id === Number(req.params.id));
  if (idx !== -1) {
    inMemory.clients[idx] = { ...inMemory.clients[idx], ...req.body };
    return res.json(envelope(inMemory.clients[idx]));
  }
  return res.json(envelope(inMemory.clients[0]));
});

app.delete("/api/v1/clients/:id", (req, res) => {
  inMemory.clients = inMemory.clients.filter(c => c.id !== Number(req.params.id));
  return res.json(envelope({ success: true }));
});

app.get("/api/v1/clients/:id/portal-users", (req, res) => {
  return res.json(listEnvelope([
    { id: 101, name: "Arun Singhania", email: "arun.s@lodhagroup.com", mobile: "9820155667", role: "Client Admin", is_active: 1 },
    { id: 102, name: "Kunal Mehra", email: "kunal.m@lodhagroup.com", mobile: "9820155668", role: "Site Facility Lead", is_active: 1 },
  ]));
});

app.get("/api/v1/clients/:id/sites", (req, res) => {
  const sites = inMemory.sites.filter(s => s.client_id === Number(req.params.id));
  return res.json(listEnvelope(sites));
});

app.get("/api/v1/sites", (req, res) => {
  return res.json(listEnvelope(inMemory.sites));
});

app.post("/api/v1/sites", (req, res) => {
  const newSite = {
    id: inMemory.sites.length + 1,
    client_id: Number(req.body.client_id) || 1,
    client_name: inMemory.clients.find(c => c.id === Number(req.body.client_id))?.name || "Lodha Group",
    name: req.body.name,
    code: `SITE-${(req.body.name || "STE").slice(0, 3).toUpperCase()}-01`,
    address: req.body.address || "Mumbai",
    city: req.body.city || "Mumbai",
    latitude: Number(req.body.latitude) || 18.9912,
    longitude: Number(req.body.longitude) || 72.8315,
    geofence_radius_meters: Number(req.body.geofence_radius_meters) || 200,
    supervisor_name: req.body.supervisor_name || "Vikram Deshmukh",
    supervisor_phone: "+91 9820011225",
    deployed_count: 0,
    required_guards: Number(req.body.required_guards) || 10,
    is_active: 1,
    status: "Active",
  };
  inMemory.sites.unshift(newSite);
  return res.status(201).json(envelope(newSite));
});

app.get("/api/v1/sites/:id", (req, res) => {
  const site = inMemory.sites.find(s => s.id === Number(req.params.id)) || inMemory.sites[0];
  const deployments = inMemory.deployments.filter(d => d.site_id === site.id);
  return res.json(envelope({
    ...site,
    deployments,
    checkpoints_count: 3,
    active_incidents_count: 1,
  }));
});

app.get("/api/v1/sites/:id/deployments", (req, res) => {
  const deployments = inMemory.deployments.filter(d => d.site_id === Number(req.params.id));
  return res.json(listEnvelope(deployments));
});

app.get("/api/v1/sites/:id/manpower", (req, res) => {
  return res.json(envelope({ required: 12, deployed: 12, variance: 0 }));
});

app.get("/api/v1/sites/:id/requirements", (req, res) => {
  const reqs = inMemory.site_requirements.filter(r => r.site_id === Number(req.params.id));
  return res.json(listEnvelope(reqs));
});

// ============================================================================
// GUARDS & DEPLOYMENTS
// ============================================================================
app.get("/api/v1/guards", (req, res) => {
  return res.json(listEnvelope(inMemory.guards));
});

app.post("/api/v1/guards", (req, res) => {
  const newGuard = {
    id: inMemory.guards.length + 1,
    name: req.body.full_name || req.body.name,
    full_name: req.body.full_name || req.body.name,
    code: `SGF-G-${1000 + inMemory.guards.length + 1}`,
    employee_id: `SGF-G-${1000 + inMemory.guards.length + 1}`,
    mobile: req.body.mobile || "9820000000",
    category_name: req.body.designation || req.body.category_name || "Security Guard",
    designation: req.body.designation || req.body.category_name || "Security Guard",
    current_site_name: "Unassigned",
    current_site_id: null,
    blood_group: req.body.blood_group || "B+",
    kyc_status: "Verified",
    pv_status: "Clear",
    missing_docs: 0,
    status: "Active",
    is_active: 1,
  };
  inMemory.guards.unshift(newGuard);
  return res.status(201).json(envelope(newGuard));
});

app.get("/api/v1/guards/:id", (req, res) => {
  const guard = inMemory.guards.find(g => g.id === Number(req.params.id)) || inMemory.guards[0];
  return res.json(envelope({
    ...guard,
    aadhaar_masked: "XXXX-XXXX-1234",
    pan_number: "ABCDE1234F",
    bank_account_number: "98765432100",
    bank_ifsc: "HDFC0000123",
    salary_paise: 2200000,
    uniform_kit_issued: true,
  }));
});

app.put("/api/v1/guards/:id", (req, res) => {
  const idx = inMemory.guards.findIndex(g => g.id === Number(req.params.id));
  if (idx !== -1) {
    inMemory.guards[idx] = { ...inMemory.guards[idx], ...req.body };
    return res.json(envelope(inMemory.guards[idx]));
  }
  return res.json(envelope(inMemory.guards[0]));
});

app.delete("/api/v1/guards/:id", (req, res) => {
  inMemory.guards = inMemory.guards.filter(g => g.id !== Number(req.params.id));
  return res.json(envelope({ success: true }));
});

app.get("/api/v1/guards/:id/deployments", (req, res) => {
  const deps = inMemory.deployments.filter(d => d.guard_id === Number(req.params.id));
  return res.json(listEnvelope(deps));
});

app.get("/api/v1/guards/:id/documents", (req, res) => {
  return res.json(listEnvelope([
    { id: 1, doc_type: "Aadhaar Card", file_name: "aadhaar_front_back.pdf", status: "verified", uploaded_at: "2026-09-01" },
    { id: 2, doc_type: "Police Verification Certificate", file_name: "pv_mumbai_police.pdf", status: "verified", uploaded_at: "2026-09-05" },
    { id: 3, doc_type: "Training Certificate", file_name: "psara_training_cert.pdf", status: "verified", uploaded_at: "2026-09-06" },
  ]));
});

app.get("/api/v1/guards/:id/kit", (req, res) => {
  return res.json(listEnvelope([
    { id: 1, item_name: "Navy Blue Uniform Shirts (2 Sets)", issued_at: "2026-09-01", status: "issued" },
    { id: 2, item_name: "SGF Beret & Metal Cap Badge", issued_at: "2026-09-01", status: "issued" },
    { id: 3, item_name: "Safety Boots & Lanyard with Whistle", issued_at: "2026-09-01", status: "issued" },
  ]));
});

app.get("/api/v1/deployments", (req, res) => {
  return res.json(listEnvelope(inMemory.deployments));
});

app.post("/api/v1/deployments", (req, res) => {
  const newDep = {
    id: inMemory.deployments.length + 1,
    guard_id: Number(req.body.guard_id),
    guard_name: inMemory.guards.find(g => g.id === Number(req.body.guard_id))?.name || "Guard",
    site_id: Number(req.body.site_id),
    site_name: inMemory.sites.find(s => s.id === Number(req.body.site_id))?.name || "Site",
    shift_id: Number(req.body.shift_id) || 1,
    shift_name: inMemory.shifts.find(s => s.id === Number(req.body.shift_id))?.name || "Morning Shift (A)",
    status: "Active",
    designation: req.body.designation || "Security Guard",
  };
  inMemory.deployments.unshift(newDep);
  return res.status(201).json(envelope(newDep));
});

app.get("/api/v1/shifts", (req, res) => {
  return res.json(listEnvelope(inMemory.shifts));
});

// ============================================================================
// ATTENDANCE & ROSTERS
// ============================================================================
app.get("/api/v1/attendance", (req, res) => {
  const records = inMemory.guards.map((g, idx) => ({
    id: idx + 1,
    guard_id: g.id,
    guard_name: g.name,
    guard_code: g.code,
    site_id: g.current_site_id || 1,
    site_name: g.current_site_name || "Lodha Bellissimo",
    shift_name: "Morning Shift (A)",
    shift_code: "A",
    duty_date: new Date().toISOString().split("T")[0],
    check_in_time: "06:55:12",
    check_out_time: "15:02:40",
    duration_hours: 8.1,
    status: idx < 8 ? "Present" : "Late",
    source: "Biometric & Mobile GPS",
    is_verified: true,
  }));
  return res.json(listEnvelope(records));
});

app.get("/api/v1/attendance/daily", (req, res) => {
  const summary = inMemory.sites.map(s => ({
    site_id: s.id,
    site_name: s.name,
    client_name: s.client_name,
    required: s.required_guards,
    present: s.deployed_count,
    absent: 0,
    fill_rate_percent: 100.0,
  }));
  return res.json(envelope({ sites: summary }));
});

app.get("/api/v1/attendance/register", (req, res) => {
  return res.json(envelope({
    month: "2026-10",
    guards: inMemory.guards.map(g => ({
      guard_id: g.id,
      guard_name: g.name,
      total_present: 22,
      total_absent: 1,
      total_leaves: 0,
      total_wo: 3,
    })),
  }));
});

app.post("/api/v1/attendance/manual", (req, res) => {
  return res.json(envelope({ message: "Attendance marked successfully" }));
});

app.get("/api/v1/rosters", (req, res) => {
  return res.json(listEnvelope(inMemory.rosters));
});

app.get("/api/v1/rosters/week", (req, res) => {
  const start = req.query.start || "2026-10-19";
  const startDate = new Date(start);
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(startDate.getTime() + i * 86400000);
    days.push(d.toISOString().split("T")[0]);
  }

  const sites = inMemory.sites.map(s => {
    const daysData = {};
    days.forEach((dayStr, idx) => {
      const g = inMemory.guards[idx % inMemory.guards.length];
      daysData[dayStr] = [
        {
          roster_id: 100 + s.id * 10 + idx,
          guard_id: g.id,
          guard_name: g.name,
          shift_name: "Morning Shift (A)",
          shift_code: "A",
          start_time: "07:00",
          end_time: "15:00",
          attendance_status: idx % 6 === 0 ? "WO" : "P",
          is_relief: false,
        },
      ];
    });
    return {
      site_id: s.id,
      site_name: s.name,
      client_name: s.client_name,
      duties: 7,
      days: daysData,
    };
  });

  return res.json(envelope({
    start: days[0],
    end: days[6],
    days,
    sites,
  }));
});

app.post("/api/v1/rosters/generate", (req, res) => {
  return res.json(envelope({ message: "Roster generated for all deployed sites" }));
});

app.post("/api/v1/rosters/:id/relief", (req, res) => {
  return res.json(envelope({ message: "Relief guard assigned successfully" }));
});

app.get("/api/v1/manpower-requests", (req, res) => {
  return res.json(listEnvelope(inMemory.manpower_requests));
});

// ============================================================================
// PATROL & CHECKPOINTS
// ============================================================================
app.get("/api/v1/patrol/report", (req, res) => {
  return res.json(envelope({
    totals: {
      rounds: 12,
      completed: 11,
      partial: 1,
      missed: 0,
      compliance_pct: 95.8,
    },
    rounds: inMemory.patrol_rounds,
  }));
});

app.get("/api/v1/patrol/rounds", (req, res) => {
  return res.json(listEnvelope(inMemory.patrol_rounds));
});

app.get("/api/v1/checkpoints", (req, res) => {
  return res.json(listEnvelope(inMemory.checkpoints));
});

app.get("/api/v1/checkpoints/qr-sheet", (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="Checkpoints_QR_Sheet.pdf"');
  return res.send(Buffer.from("%PDF-1.4 demo qr sheet"));
});

app.get("/api/v1/patrol-routes", (req, res) => {
  return res.json(listEnvelope(inMemory.patrol_routes));
});

app.get("/api/v1/patrol-schedules", (req, res) => {
  return res.json(listEnvelope(inMemory.patrol_schedules));
});

app.get("/api/v1/patrol/scans", (req, res) => {
  return res.json(listEnvelope(inMemory.patrol_scans));
});

app.get("/api/v1/site-visits", (req, res) => {
  return res.json(listEnvelope(inMemory.site_visits));
});

// ============================================================================
// INCIDENTS & SOS
// ============================================================================
app.get("/api/v1/incidents", (req, res) => {
  return res.json(listEnvelope(inMemory.incidents));
});

app.post("/api/v1/incidents", (req, res) => {
  const newInc = {
    id: inMemory.incidents.length + 1,
    site_id: Number(req.body.site_id) || 1,
    site_name: inMemory.sites.find(s => s.id === Number(req.body.site_id))?.name || "Lodha Bellissimo",
    incident_type: req.body.incident_type || "Security Alert",
    severity: req.body.severity || "Low",
    description: req.body.description || "Incident logged",
    status: "Open",
    reported_at: new Date().toISOString(),
    reported_by_name: "Field Supervisor",
  };
  inMemory.incidents.unshift(newInc);
  return res.status(201).json(envelope(newInc));
});

app.get("/api/v1/incidents/:id", (req, res) => {
  const inc = inMemory.incidents.find(i => i.id === Number(req.params.id)) || inMemory.incidents[0];
  return res.json(envelope({
    ...inc,
    updates: [
      { id: 1, update_text: "Security control room dispatched guard team to scene", updated_at: inc.reported_at, updated_by: "Rajesh Sharma" },
      { id: 2, update_text: "Perimeter verified and situation normalized", updated_at: inc.reported_at, updated_by: "Vikram Deshmukh" },
    ],
  }));
});

app.get("/api/v1/sos", (req, res) => {
  return res.json(listEnvelope([
    { id: 1, raised_by_name: "Santosh Tukaram Jadhav", site_name: "Lodha Bellissimo", client_name: "Lodha Group", status: "resolved", latitude: 18.9912, longitude: 72.8315, closure_note: "Commercial vehicle refused to stop at main gate; situation defused peacefully.", created_at: "2026-10-21T11:00:00Z", resolved_at: "2026-10-21T11:15:00Z" },
  ]));
});

app.get("/api/v1/sos/active", (req, res) => {
  return res.json(envelope([]));
});

app.post("/api/v1/sos/:id/resolve", (req, res) => {
  return res.json(envelope({ message: "SOS alert resolved successfully" }));
});

// ============================================================================
// BILLING, INVOICING & COLLECTIONS
// ============================================================================
app.get("/api/v1/invoices", (req, res) => {
  return res.json(listEnvelope(inMemory.invoices));
});

app.post("/api/v1/invoices", (req, res) => {
  const subtotal = Number(req.body.subtotal_paise) || 45000000;
  const gst = Math.round(subtotal * 0.18);
  const newInv = {
    id: inMemory.invoices.length + 1,
    invoice_no: `INV/2026/10/00${inMemory.invoices.length + 1}`,
    invoice_number: `INV/2026/10/00${inMemory.invoices.length + 1}`,
    client_id: Number(req.body.client_id) || 1,
    client_name: inMemory.clients.find(c => c.id === Number(req.body.client_id))?.name || "Lodha Group",
    billing_month: "October 2026",
    period_from: "2026-10-01",
    period_to: "2026-10-31",
    subtotal_paise: subtotal,
    gst_paise: gst,
    total_paise: subtotal + gst,
    balance_paise: subtotal + gst,
    status: "Issued",
    invoice_date: new Date().toISOString().split("T")[0],
    issue_date: new Date().toISOString().split("T")[0],
    due_date: new Date(Date.now() + 14 * 86400000).toISOString().split("T")[0],
  };
  inMemory.invoices.unshift(newInv);
  return res.status(201).json(envelope(newInv));
});

app.get("/api/v1/invoices/:id", (req, res) => {
  const inv = inMemory.invoices.find(i => i.id === Number(req.params.id)) || inMemory.invoices[0];
  return res.json(envelope({
    ...inv,
    lines: [
      { id: 1, description: "Senior Guard - 8 hr Shift (12 Guards x 30 Days)", qty: 360, rate_paise: 80000, amount_paise: 28800000 },
      { id: 2, description: "Night Supervisor - Escort Protocol Support", qty: 30, rate_paise: 240000, amount_paise: 7200000 },
    ],
    client_address: "Mahalaxmi, Lower Parel West, Mumbai 400013",
    gstin: "27AABCM1234F1Z5",
    cgst_paise: Math.round(inv.gst_paise / 2),
    sgst_paise: Math.round(inv.gst_paise / 2),
  }));
});

app.get("/api/v1/billing/contracts", (req, res) => {
  return res.json(envelope(inMemory.billing_contracts));
});

app.get("/api/v1/billing/preview", (req, res) => {
  return res.json(envelope({
    client_id: 1,
    period: "2026-10",
    lines: [
      { description: "Manned Guarding Charges (Agreed vs Actual)", amount_paise: 36000000 },
      { description: "GST @ 18%", amount_paise: 6480000 },
    ],
    total_paise: 42480000,
  }));
});

app.get("/api/v1/billing/jobs", (req, res) => {
  return res.json(envelope({ id: 1, status: "completed", processed: 5 }));
});

app.post("/api/v1/invoices/generate", (req, res) => {
  return res.json(envelope({ message: "Invoices generated successfully for all billed contracts" }));
});

app.get("/api/v1/credit-notes", (req, res) => {
  return res.json(listEnvelope(inMemory.credit_notes));
});

app.get("/api/v1/exports/tally", (req, res) => {
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Content-Disposition", 'attachment; filename="Tally_SGF_ERP_Vouchers.xml"');
  return res.send(`<?xml version="1.0" encoding="UTF-8"?><ENVELOPE><HEADER><TALLYREQUEST>Import Data</TALLYREQUEST></HEADER><BODY><IMPORTDATA><REQUESTDESC><REPORTNAME>Vouchers</REPORTNAME></REQUESTDESC><REQUESTDATA><TALLYMESSAGE xmlns:UDF="TallyUDF"><VOUCHER VCHTYPE="Sales" ACTION="Create"><DATE>20261023</DATE><NARRATION>Safe Guard Force Security Services</NARRATION></VOUCHER></TALLYMESSAGE></REQUESTDATA></IMPORTDATA></BODY></ENVELOPE>`);
});

app.get("/api/v1/payments", (req, res) => {
  return res.json(listEnvelope(inMemory.payments));
});

app.post("/api/v1/payments", (req, res) => {
  const newPay = {
    id: inMemory.payments.length + 1,
    receipt_no: `RCP-2026-00${inMemory.payments.length + 1}`,
    payment_date: req.body.payment_date || new Date().toISOString().split("T")[0],
    client_id: Number(req.body.client_id) || 1,
    client_name: inMemory.clients.find(c => c.id === Number(req.body.client_id))?.name || "Client",
    mode: req.body.mode || "neft",
    cheque_no: req.body.cheque_no || "CMS98201999",
    amount_paise: Number(req.body.amount_paise) || 10000000,
    tds_paise: Number(req.body.tds_paise) || 200000,
    unallocated_paise: 0,
    status: "allocated",
  };
  inMemory.payments.unshift(newPay);
  return res.status(201).json(envelope(newPay));
});

app.get("/api/v1/collections/ageing", (req, res) => {
  const rows = [
    { client_id: 1, client_name: "Lodha Group", client_code: "CLI-LODHA", invoices: 1, not_due: 42480000, d0_30: 0, d31_60: 0, d61_90: 0, d90_plus: 0, d60_plus: 0, total: 42480000, on_account: 0 },
    { client_id: 2, client_name: "HDFC Bank Ltd", client_code: "CLI-HDFC", invoices: 1, not_due: 63720000, d0_30: 0, d31_60: 0, d61_90: 0, d90_plus: 0, d60_plus: 0, total: 63720000, on_account: 0 },
    { client_id: 3, client_name: "Reliance Corporate Park", client_code: "CLI-RCP", invoices: 1, not_due: 0, d0_30: 88500000, d31_60: 0, d61_90: 0, d90_plus: 0, d60_plus: 0, total: 88500000, on_account: 0 },
    { client_id: 4, client_name: "Godrej Properties", client_code: "CLI-GODREJ", invoices: 1, not_due: 0, d0_30: 0, d31_60: 52000000, d61_90: 0, d90_plus: 0, d60_plus: 0, total: 52000000, on_account: 0 },
    { client_id: 5, client_name: "Phoenix Mills", client_code: "CLI-PHOENIX", invoices: 1, not_due: 0, d0_30: 106200000, d31_60: 0, d61_90: 0, d90_plus: 0, d60_plus: 0, total: 106200000, on_account: 0 },
  ];

  return res.json(envelope({
    rows,
    totals: {
      not_due: 106200000,
      d0_30: 194700000,
      d31_60: 52000000,
      d61_90: 0,
      d90_plus: 0,
      d60_plus: 0,
      total: 352900000,
      on_account: 0,
    },
  }));
});

app.get("/api/v1/collections/clients", (req, res) => {
  return res.json(envelope(inMemory.clients.map(c => ({ id: c.id, name: c.name, code: c.code }))));
});

app.get("/api/v1/collections/statement/:clientId", (req, res) => {
  const c = inMemory.clients.find(item => item.id === Number(req.params.clientId)) || inMemory.clients[0];
  return res.json(envelope({
    client: { id: c.id, name: c.name, code: c.code },
    from: "2026-04-01",
    to: "2026-10-23",
    opening_balance: 0,
    entries: [
      { date: "2026-09-01", ref: "INV/2026/09/001", particulars: "Monthly Security Invoice - Aug 2026", debit: 42480000, credit: 0, balance: 42480000 },
      { date: "2026-09-15", ref: "RCP-2026-001", particulars: "Payment Received via NEFT CMS98201928", debit: 0, credit: 42480000, balance: 0 },
      { date: "2026-10-01", ref: "INV/2026/10/001", particulars: "Monthly Security Invoice - Sep 2026", debit: 42480000, credit: 0, balance: 42480000 },
    ],
    closing_balance: 42480000,
  }));
});

app.get("/api/v1/collections/reminders", (req, res) => {
  return res.json(listEnvelope([
    { id: 3, invoice_no: "INV/2026/10/003", client_name: "Reliance Corporate Park", days_overdue: 8, balance_paise: 88500000, reminder_count: 1, last_reminder_at: "2026-10-22T10:00:00Z", status: "issued" },
    { id: 4, invoice_no: "INV/2026/10/004", client_name: "Phoenix Mills", days_overdue: 5, balance_paise: 106200000, reminder_count: 1, last_reminder_at: "2026-10-21T10:00:00Z", status: "issued" },
  ]));
});

app.get("/api/v1/collections/open-invoices", (req, res) => {
  const openInvs = inMemory.invoices.filter(i => i.balance_paise > 0);
  return res.json(listEnvelope(openInvs));
});

// ============================================================================
// RECRUITMENT & CANDIDATES
// ============================================================================
app.get("/api/v1/candidates", (req, res) => {
  return res.json(listEnvelope(inMemory.candidates));
});

app.get("/api/v1/candidates/pipeline", (req, res) => {
  const stages = [
    { id: 1, code: "applied", name: "Applied", count: 2, candidates: inMemory.candidates.filter(c => c.stage === "applied") },
    { id: 2, code: "screening", name: "Screening", count: 1, candidates: inMemory.candidates.filter(c => c.stage === "screening") },
    { id: 3, code: "interview", name: "Interview", count: 1, candidates: inMemory.candidates.filter(c => c.stage === "interview") },
    { id: 4, code: "selected", name: "Selected", count: 1, candidates: inMemory.candidates.filter(c => c.stage === "selected") },
    { id: 5, code: "hired", name: "Hired", count: 1, candidates: inMemory.candidates.filter(c => c.stage === "hired") },
  ];
  return res.json(envelope(stages));
});

app.get("/api/v1/job-openings", (req, res) => {
  return res.json(listEnvelope(inMemory.job_openings));
});

app.get("/api/v1/candidates/lookups", (req, res) => {
  return res.json(envelope({
    openings: inMemory.job_openings,
    guard_categories: [
      { id: 1, name: "Security Guard" },
      { id: 2, name: "Senior Guard" },
      { id: 3, name: "Armed Guard" },
      { id: 4, name: "Lady Guard" },
    ],
    stages: [
      { id: 1, name: "Applied" },
      { id: 2, name: "Screening" },
      { id: 3, name: "Interview" },
      { id: 4, name: "Selected" },
      { id: 5, name: "Hired" },
    ],
  }));
});

app.get("/api/v1/candidates/check-mobile", (req, res) => {
  return res.json(envelope({ exists: false }));
});

app.get("/api/v1/candidates/referrers", (req, res) => {
  return res.json(envelope(inMemory.guards.map(g => ({ id: g.id, name: g.name, mobile: g.mobile }))));
});

app.get("/api/v1/candidates/:id", (req, res) => {
  const cand = inMemory.candidates.find(c => c.id === Number(req.params.id)) || inMemory.candidates[0];
  return res.json(envelope({
    ...cand,
    address: "Kalyan East, Thane, Maharashtra",
    education: "12th Standard HSC (Passed)",
    height_cm: 174,
    weight_kg: 72,
    stage_history: [
      { stage: "Applied", moved_at: "2026-10-15", note: "Walk-in registration via Mumbai HO" },
      { stage: "Screening", moved_at: "2026-10-16", note: "Documents verified: Aadhaar & Police Clearance" },
      { stage: "Interview", moved_at: "2026-10-18", note: "Physical drill test and interview cleared" },
    ],
  }));
});

app.post("/api/v1/candidates/:id/stages", (req, res) => {
  return res.json(envelope({ message: "Candidate moved to next stage" }));
});

app.post("/api/v1/candidates/:id/convert", (req, res) => {
  return res.json(envelope({ message: "Candidate converted to active security guard" }));
});

app.post("/api/v1/candidates", (req, res) => {
  const newCand = {
    id: inMemory.candidates.length + 1,
    name: req.body.name,
    full_name: req.body.name,
    mobile: req.body.mobile,
    age: Number(req.body.age) || 25,
    experience_years: Number(req.body.experience_years) || 1,
    stage: "applied",
    status: "applied",
    ex_serviceman: !!req.body.ex_serviceman,
    verification_status: "pending",
    job_opening_title: req.body.job_opening_title || "Security Guard",
    created_at: new Date().toISOString().split("T")[0],
  };
  inMemory.candidates.unshift(newCand);
  return res.status(201).json(envelope(newCand));
});

// ============================================================================
// CRM & LEADS
// ============================================================================
app.get("/api/v1/leads", (req, res) => {
  return res.json(listEnvelope(inMemory.leads));
});

app.get("/api/v1/leads/board", (req, res) => {
  const columns = [
    { stage: "new", label: "New Lead", count: 1, value_paise: 60000000, leads: inMemory.leads.filter(l => l.stage === "new") },
    { stage: "contacted", label: "Contacted", count: 1, value_paise: 38000000, leads: inMemory.leads.filter(l => l.stage === "contacted") },
    { stage: "survey", label: "Site Survey", count: 1, value_paise: 90000000, leads: inMemory.leads.filter(l => l.stage === "survey") },
    { stage: "quotation", label: "Quotation Sent", count: 1, value_paise: 48000000, leads: inMemory.leads.filter(l => l.stage === "quotation") },
    { stage: "negotiation", label: "Negotiation", count: 1, value_paise: 120000000, leads: inMemory.leads.filter(l => l.stage === "negotiation") },
    { stage: "won", label: "Won", count: 1, value_paise: 75000000, leads: inMemory.leads.filter(l => l.stage === "won") },
  ];
  return res.json(envelope(columns));
});

app.get("/api/v1/leads/owners", (req, res) => {
  return res.json(envelope([
    { id: 1, name: "System Administrator" },
    { id: 2, name: "Rajesh Sharma" },
  ]));
});

app.get("/api/v1/leads/clients", (req, res) => {
  return res.json(envelope(inMemory.clients));
});

app.get("/api/v1/leads/:id", (req, res) => {
  const lead = inMemory.leads.find(l => l.id === Number(req.params.id)) || inMemory.leads[0];
  return res.json(envelope({
    ...lead,
    activities: [
      { id: 1, type: "call", note: "Initial discovery call with Head of Facilities", created_at: "2026-10-18T10:00:00Z", user_name: "Rajesh Sharma" },
      { id: 2, type: "survey", note: "Site survey conducted at Main Campus perimeter", created_at: "2026-10-20T14:00:00Z", user_name: "Vikram Deshmukh" },
    ],
  }));
});

app.post("/api/v1/leads", (req, res) => {
  const newLead = {
    id: inMemory.leads.length + 1,
    lead_no: `LD-2026-00${inMemory.leads.length + 1}`,
    company_name: req.body.company_name || "New Prospect",
    contact_name: req.body.contact_name || "Contact Person",
    mobile: req.body.mobile || req.body.phone || "+91 98200 00000",
    email: req.body.email || "lead@example.com",
    city: req.body.city || "Mumbai",
    required_guards: Number(req.body.required_guards) || 10,
    estimated_guards: Number(req.body.required_guards) || 10,
    property_type: req.body.property_type || "Commercial",
    stage: "new",
    estimated_value_paise: 50000000,
    owner_name: "System Administrator",
    next_followup_at: "2026-10-30",
  };
  inMemory.leads.unshift(newLead);
  return res.status(201).json(envelope(newLead));
});

app.post("/api/v1/leads/:id/stage", (req, res) => {
  return res.json(envelope({ message: "Lead stage updated" }));
});

app.get("/api/v1/quotations", (req, res) => {
  return res.json(listEnvelope(inMemory.quotations));
});

app.get("/api/v1/quotations/defaults", (req, res) => {
  return res.json(envelope({
    pf_percent: 12.0,
    esi_percent: 3.25,
    bonus_percent: 8.33,
    gratuity_percent: 4.81,
    uniform_allowance_percent: 5.0,
    agency_margin_percent: 10.0,
    gst_percent: 18.0,
  }));
});

app.post("/api/v1/quotations/preview", (req, res) => {
  return res.json(envelope({
    headcount: 10,
    total_cost_per_guard_paise: 2850000,
    agency_margin_paise: 285000,
    monthly_billing_paise: 31350000,
    gst_paise: 5643000,
    grand_total_paise: 36993000,
  }));
});

app.get("/api/v1/quotations/:id", (req, res) => {
  const q = inMemory.quotations.find(item => item.id === Number(req.params.id)) || inMemory.quotations[0];
  return res.json(envelope({
    ...q,
    items: [
      { designation: "Security Guard", headcount: 12, wage_rate_paise: 2200000, margin_percent: 10 },
      { designation: "Armed Guard", headcount: 4, wage_rate_paise: 3500000, margin_percent: 10 },
    ],
  }));
});

// ============================================================================
// PAYROLL
// ============================================================================
app.get("/api/v1/payroll-runs", (req, res) => {
  return res.json(listEnvelope(inMemory.payroll_runs));
});

app.get("/api/v1/payroll-runs/:id", (req, res) => {
  const run = inMemory.payroll_runs.find(r => r.id === Number(req.params.id)) || inMemory.payroll_runs[0];
  return res.json(envelope({
    ...run,
    slips: inMemory.guards.map(g => ({
      guard_id: g.id,
      guard_name: g.name,
      designation: g.designation,
      duty_days: 26,
      gross_paise: 2850000,
      deductions_paise: 380000,
      net_paise: 2470000,
      status: "computed",
    })),
  }));
});

app.get("/api/v1/payroll-runs/:id/bank-sheet", (req, res) => {
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  res.setHeader("Content-Disposition", 'attachment; filename="Bank_NEFT_Payroll_Sheet.xlsx"');
  return res.send(Buffer.from("demo bank sheet excel"));
});

app.get("/api/v1/salary-structures", (req, res) => {
  return res.json(listEnvelope(inMemory.salary_structures));
});

app.get("/api/v1/advances", (req, res) => {
  return res.json(listEnvelope(inMemory.advances));
});

app.get("/api/v1/fines", (req, res) => {
  return res.json(listEnvelope(inMemory.fines));
});

app.get("/api/v1/payslips/:id", (req, res) => {
  return res.json(envelope({
    guard_name: "Santosh Tukaram Jadhav",
    period: "2026-09",
    basic_paise: 2200000,
    hra_paise: 440000,
    allowance_paise: 210000,
    pf_deduction_paise: 264000,
    esi_deduction_paise: 61000,
    pt_deduction_paise: 20000,
    net_paise: 2505000,
  }));
});

// ============================================================================
// CONTRACTS & REQUIREMENTS
// ============================================================================
app.get("/api/v1/contracts", (req, res) => {
  return res.json(listEnvelope(inMemory.contracts));
});

app.get("/api/v1/contracts/:id", (req, res) => {
  const c = inMemory.contracts.find(item => item.id === Number(req.params.id)) || inMemory.contracts[0];
  return res.json(envelope({
    ...c,
    rates: [
      { guard_category_id: 1, guard_category_name: "Senior Guard", headcount: 4, shift_hours: 8, rate_paise: 3500000, ot_rate_paise: 25000 },
      { guard_category_id: 2, guard_category_name: "Security Guard", headcount: 8, shift_hours: 8, rate_paise: 2800000, ot_rate_paise: 20000 },
    ],
  }));
});

app.get("/api/v1/site-requirements", (req, res) => {
  return res.json(listEnvelope(inMemory.site_requirements));
});

// ============================================================================
// COMPLAINTS
// ============================================================================
app.get("/api/v1/complaints", (req, res) => {
  return res.json(listEnvelope(inMemory.complaints));
});

app.get("/api/v1/complaints/assignees", (req, res) => {
  return res.json(envelope(inMemory.users));
});

app.get("/api/v1/complaints/clients", (req, res) => {
  return res.json(envelope(inMemory.clients));
});

// ============================================================================
// REPORTS CATALOG & GENERATOR
// ============================================================================
const reportsCatalog = [
  { key: "guard-strength", title: "Guard Strength & Deployment", description: "Headcount, verified documents, active vs deployed guards across sites", category: "Operations", formats: ["xlsx", "pdf"], filters: [{ key: "client_id", label: "Client" }, { key: "site_id", label: "Site" }] },
  { key: "site-deployment", title: "Site Deployment & Shortage", description: "Agreed manpower vs actual daily deployment and fill rate", category: "Operations", formats: ["xlsx", "pdf"], filters: [{ key: "client_id", label: "Client" }] },
  { key: "attendance-summary", title: "Monthly Attendance Register", description: "Daily in/out times, overtime hours, present/absent counts per guard", category: "Field", formats: ["xlsx", "pdf"], filters: [{ key: "month", label: "Month" }] },
  { key: "patrol-compliance", title: "Patrol Checkpoint Compliance", description: "QR scan compliance percentage, missed checkpoints and schedule adherence", category: "Field", formats: ["xlsx", "pdf"], filters: [{ key: "site_id", label: "Site" }] },
  { key: "incident-stats", title: "Incident & Security Log", description: "Reported incidents by category, severity and resolution time", category: "Field", formats: ["xlsx", "pdf"], filters: [] },
  { key: "sos-response", title: "SOS Emergency Response Log", description: "Emergency trigger times, acknowledgment latency and closure details", category: "Field", formats: ["xlsx", "pdf"], filters: [] },
  { key: "payroll-summary", title: "Payroll Register & Bank Sheet", description: "Monthly wages, deductions (PF/ESI/PT), advances and net payable", category: "Money", formats: ["xlsx", "pdf"], filters: [{ key: "period", label: "Month" }] },
  { key: "billing-collection", title: "Billing & Revenue Register", description: "Monthly invoiced amounts, GST breakdown, payments received and balance", category: "Money", formats: ["xlsx", "pdf"], filters: [] },
  { key: "outstanding-ageing", title: "Debtor Ageing Analysis", description: "Outstanding client balances broken into 0-30, 31-60, 61-90, and 90+ days", category: "Money", formats: ["xlsx", "pdf"], filters: [] },
  { key: "contract-expiry", title: "Contracts Renewal Pipeline", description: "Active contracts, billing rates, auto-renewal notices and expiring terms", category: "Growth", formats: ["xlsx", "pdf"], filters: [] },
];

app.get("/api/v1/reports", (req, res) => {
  return res.json(envelope(reportsCatalog));
});

app.get("/api/v1/reports/:key", (req, res) => {
  const { key } = req.params;
  const rep = reportsCatalog.find(r => r.key === key) || reportsCatalog[0];

  const reportData = {
    title: rep.title,
    description: rep.description,
    params: { from: "2026-10-01", to: "2026-10-23" },
    columns: [
      { key: "site_name", label: "Site / Unit" },
      { key: "client_name", label: "Client" },
      { key: "required", label: "Agreed Guards", align: "right" },
      { key: "deployed", label: "Deployed", align: "right" },
      { key: "compliance", label: "Compliance %", align: "right" },
    ],
    rows: inMemory.sites.map(s => ({
      site_name: s.name,
      client_name: s.client_name,
      required: s.required_guards,
      deployed: s.deployed_count,
      compliance: "100%",
    })),
    summary: {
      total_required: 100,
      total_deployed: 100,
      overall_compliance: "100%",
    },
  };

  return res.json(envelope(reportData));
});

// ============================================================================
// SETTINGS
// ============================================================================
const settingsGroups = [
  {
    name: "Company",
    items: [
      { key: "company.name", label: "Legal Entity Name", type: "text", value: "Safe Guard Force Security & Facility Management Pvt Ltd" },
      { key: "company.gstin", label: "GSTIN Identification", type: "string", value: "27AABCS1234F1Z0" },
      { key: "company.pan", label: "Company PAN", type: "string", value: "AABCS1234F" },
      { key: "company.psara_license", label: "PSARA License Number", type: "string", value: "PSARA/MAH/MUM/2024/0981" },
      { key: "company.head_office", label: "Head Office Address", type: "text", value: "Unit 402, Trade Center, Bandra Kurla Complex, Mumbai 400051" },
      { key: "company.contact_email", label: "Official Support Email", type: "email", value: "contact@safeguardforce.in" },
      { key: "company.phone", label: "24/7 Control Room Phone", type: "phone", value: "+91 22 2650 1100" },
    ],
  },
  {
    name: "Operations",
    items: [
      { key: "ops.geofence_default_meters", label: "Default Site Geofence Radius (m)", type: "int", value: 200, min: 50, max: 1000 },
      { key: "ops.attendance_grace_minutes", label: "Late Punch Grace Period (mins)", type: "int", value: 15, min: 0, max: 60 },
      { key: "ops.auto_absent_cutoff_hours", label: "Auto Absent Marking Cutoff (hours after shift)", type: "int", value: 2, min: 1, max: 8 },
      { key: "ops.require_selfie_punch", label: "Enforce Facial Selfie on Punch", type: "boolean", value: true },
    ],
  },
  {
    name: "Billing",
    items: [
      { key: "billing.invoice_prefix", label: "Tax Invoice Number Prefix", type: "string", value: "INV/2026/" },
      { key: "billing.default_payment_terms_days", label: "Default Credit Terms (days)", type: "select", value: "30", options: ["15", "30", "45", "60"] },
      { key: "billing.default_gst_percent", label: "Default GST Rate (%)", type: "percent", value: 18.0 },
      { key: "billing.overdue_reminders_active", label: "Enable Automated WhatsApp / Email Dunning", type: "boolean", value: true },
    ],
  },
  {
    name: "Payroll",
    items: [
      { key: "payroll.pf_employee_percent", label: "Provident Fund (Employee %)", type: "percent", value: 12.0 },
      { key: "payroll.esi_employee_percent", label: "ESI (Employee %)", type: "percent", value: 0.75 },
      { key: "payroll.salary_disbursement_day", label: "Monthly Salary Payday", type: "select", value: "7", options: ["1", "5", "7", "10"] },
      { key: "payroll.enforce_pv_for_payout", label: "Hold Salary if Police Clearance Missing", type: "boolean", value: true },
    ],
  },
];

app.get("/api/v1/settings", (req, res) => {
  return res.json(envelope(settingsGroups));
});

app.put("/api/v1/settings", (req, res) => {
  return res.json(envelope({ message: "Settings saved successfully" }));
});

// ============================================================================
// PERMISSIONS MATRIX
// ============================================================================
const permissionModules = [
  { id: 1, module: "dashboard", label: "Dashboard & KPIs", group_name: "Overview", sort_order: 1, actions: ["read"] },
  { id: 2, module: "clients", label: "Client Directory", group_name: "Operations", sort_order: 2, actions: ["read", "create", "update", "delete"] },
  { id: 3, module: "sites", label: "Sites & Locations", group_name: "Operations", sort_order: 3, actions: ["read", "create", "update", "delete"] },
  { id: 4, module: "guards", label: "Guard Personnel & KYC", group_name: "Operations", sort_order: 4, actions: ["read", "create", "update", "delete"] },
  { id: 5, module: "deployments", label: "Guard Deployments", group_name: "Operations", sort_order: 5, actions: ["read", "create", "update", "delete"] },
  { id: 6, module: "rosters", label: "Shifts & Roster", group_name: "Field", sort_order: 6, actions: ["read", "create", "update", "delete"] },
  { id: 7, module: "attendance", label: "Biometric & GPS Attendance", group_name: "Field", sort_order: 7, actions: ["read", "create", "update", "delete"] },
  { id: 8, module: "patrol", label: "QR Checkpoint Patrol", group_name: "Field", sort_order: 8, actions: ["read", "create", "update", "delete"] },
  { id: 9, module: "incidents", label: "Incidents & Security Log", group_name: "Field", sort_order: 9, actions: ["read", "create", "update", "delete"] },
  { id: 10, module: "sos", label: "SOS Emergency Alerts", group_name: "Field", sort_order: 10, actions: ["read", "create", "update", "delete"] },
  { id: 11, module: "payroll", label: "Guard Payroll & Bank Sheets", group_name: "Money", sort_order: 11, actions: ["read", "create", "update", "delete"] },
  { id: 12, module: "billing", label: "GST Billing & Tax Invoices", group_name: "Money", sort_order: 12, actions: ["read", "create", "update", "delete"] },
  { id: 13, module: "collections", label: "Collections, Receipts & Ageing", group_name: "Money", sort_order: 13, actions: ["read", "create", "update", "delete"] },
  { id: 14, module: "recruitment", label: "Recruitment & Kanban", group_name: "Growth", sort_order: 14, actions: ["read", "create", "update", "delete"] },
  { id: 15, module: "crm", label: "CRM Leads & Costing Quotations", group_name: "Growth", sort_order: 15, actions: ["read", "create", "update", "delete"] },
  { id: 16, module: "complaints", label: "Client Complaints & Ratings", group_name: "Growth", sort_order: 16, actions: ["read", "create", "update", "delete"] },
  { id: 17, module: "contracts", label: "Contracts & Agreements", group_name: "Admin", sort_order: 17, actions: ["read", "create", "update", "delete"] },
  { id: 18, module: "reports", label: "MIS Business Intelligence Reports", group_name: "Admin", sort_order: 18, actions: ["read"] },
  { id: 19, module: "branches", label: "Regional Branches", group_name: "Setup", sort_order: 19, actions: ["read", "create", "update", "delete"] },
  { id: 20, module: "users", label: "User Access & Staff", group_name: "Setup", sort_order: 20, actions: ["read", "create", "update", "delete"] },
  { id: 21, module: "roles", label: "Roles & Permissions", group_name: "Setup", sort_order: 21, actions: ["read", "create", "update", "delete"] },
  { id: 22, module: "masters", label: "Master Dropdowns", group_name: "Setup", sort_order: 22, actions: ["read", "create", "update", "delete"] },
  { id: 23, module: "custom_fields", label: "Custom Field Builder", group_name: "Setup", sort_order: 23, actions: ["read", "create", "update", "delete"] },
  { id: 24, module: "settings", label: "System & Rule Settings", group_name: "Setup", sort_order: 24, actions: ["read", "update"] },
  { id: 25, module: "audit_logs", label: "Security Audit Logs", group_name: "Setup", sort_order: 25, actions: ["read"] },
  { id: 26, module: "api_keys", label: "Developer APIs & Webhooks", group_name: "Setup", sort_order: 26, actions: ["read", "create", "update", "delete"] },
];

app.get("/api/v1/permissions", (req, res) => {
  return res.json(envelope(permissionModules));
});

// ============================================================================
// MASTERS & CUSTOM FIELDS
// ============================================================================
const masterTypes = [
  { type: "guard_category", group: "Guards", label: "Guard Categories", fields: [{ key: "base_rate", label: "Standard Base Rate", type: "number" }] },
  { type: "designation", group: "Guards", label: "Job Designations", fields: [] },
  { type: "blood_group", group: "Guards", label: "Blood Groups", fields: [] },
  { type: "interview_stage", group: "Growth", label: "Interview Stages", fields: [] },
  { type: "lead_source", group: "Growth", label: "Lead Sources", fields: [] },
  { type: "industry", group: "Growth", label: "Client Industries", fields: [] },
  { type: "incident_type", group: "Field", label: "Incident Categories", fields: [] },
  { type: "complaint_type", group: "Field", label: "Complaint Classifications", fields: [] },
];

const masterItems = [
  { id: 1, type: "guard_category", code: "SG", name: "Security Guard", sort_order: 1, is_active: 1 },
  { id: 2, type: "guard_category", code: "SRG", name: "Senior Guard", sort_order: 2, is_active: 1 },
  { id: 3, type: "guard_category", code: "HG", name: "Head Guard", sort_order: 3, is_active: 1 },
  { id: 4, type: "guard_category", code: "AG", name: "Armed Guard", sort_order: 4, is_active: 1 },
  { id: 5, type: "guard_category", code: "LG", name: "Lady Guard", sort_order: 5, is_active: 1 },
  { id: 6, type: "interview_stage", code: "APPLIED", name: "Applied", sort_order: 1, is_active: 1 },
  { id: 7, type: "interview_stage", code: "SCREEN", name: "Screening", sort_order: 2, is_active: 1 },
  { id: 8, type: "interview_stage", code: "INT", name: "Interview", sort_order: 3, is_active: 1 },
  { id: 9, type: "interview_stage", code: "SEL", name: "Selected", sort_order: 4, is_active: 1 },
  { id: 10, type: "interview_stage", code: "HIRED", name: "Hired", sort_order: 5, is_active: 1 },
];

app.get("/api/v1/masters/types", (req, res) => {
  return res.json(envelope(masterTypes));
});

app.get("/api/v1/masters", (req, res) => {
  const { type } = req.query;
  const items = type ? masterItems.filter(m => m.type === type) : masterItems;
  return res.json(listEnvelope(items));
});

app.get("/api/v1/custom-fields", (req, res) => {
  return res.json(listEnvelope(inMemory.custom_fields));
});

// ============================================================================
// SYSTEM AUDIT LOGS, NOTIFICATIONS, EXPORT & API KEYS
// ============================================================================
app.get(["/api/v1/audit-log", "/api/v1/audit-logs"], (req, res) => {
  return res.json(listEnvelope(inMemory.audit_logs));
});

app.get("/api/v1/audit-logs/facets", (req, res) => {
  return res.json(envelope({
    actions: ["created", "updated", "deleted", "approved", "resolved", "issued"],
    entities: ["guard", "client", "site", "attendance", "incident", "invoice", "payment", "user"],
  }));
});

app.get("/api/v1/notifications", (req, res) => {
  return res.json(listEnvelope(inMemory.notifications));
});

app.post("/api/v1/notifications/read-all", (req, res) => {
  inMemory.notifications.forEach(n => { n.is_read = true; n.read_at = new Date().toISOString(); });
  return res.json(envelope({ success: true }));
});

app.get("/api/v1/data-export", (req, res) => {
  return res.json(listEnvelope(inMemory.data_export_jobs));
});

app.get("/api/v1/api-keys", (req, res) => {
  return res.json(listEnvelope(inMemory.api_keys));
});

app.get("/api/v1/api-keys/modules", (req, res) => {
  return res.json(envelope(["attendance", "guards", "sites", "clients", "invoices", "incidents", "rosters"]));
});

app.get("/api/v1/webhooks", (req, res) => {
  return res.json(listEnvelope(inMemory.webhooks));
});

app.get("/api/v1/webhooks/events", (req, res) => {
  return res.json(envelope(["attendance.punch", "incident.created", "invoice.issued", "sos.triggered"]));
});

app.get("/api/v1/webhook-deliveries", (req, res) => {
  return res.json(listEnvelope(inMemory.webhook_deliveries));
});

app.get("/api/v1/branches", (req, res) => {
  return res.json(listEnvelope(inMemory.branches));
});

app.get("/api/v1/users", (req, res) => {
  return res.json(listEnvelope(inMemory.users));
});

app.get("/api/v1/roles", (req, res) => {
  return res.json(listEnvelope(inMemory.roles));
});

app.get("/api/v1/roles/:id", (req, res) => {
  const role = inMemory.roles.find(r => r.id === Number(req.params.id)) || inMemory.roles[0];
  return res.json(envelope(role));
});

// ============================================================================
// CLIENT PORTAL (When logged in as a Client Portal User)
// ============================================================================
app.get("/api/v1/portal/summary", (req, res) => {
  return res.json(envelope({
    client_name: "Lodha Group",
    sites_count: 1,
    guards_on_duty: 12,
    today_attendance_percent: 100.0,
    open_incidents: 1,
    pending_invoices_count: 0,
  }));
});

app.get("/api/v1/portal/lookups", (req, res) => {
  return res.json(envelope({
    sites: inMemory.sites.slice(0, 2),
    shifts: inMemory.shifts,
  }));
});

app.get("/api/v1/portal/on-duty", (req, res) => {
  return res.json(listEnvelope(inMemory.guards.slice(0, 5)));
});

app.get("/api/v1/portal/attendance", (req, res) => {
  return res.json(listEnvelope([]));
});

app.get("/api/v1/portal/patrol", (req, res) => {
  return res.json(envelope({
    rounds: inMemory.patrol_rounds.slice(0, 2),
    compliance_pct: 100,
  }));
});

app.get("/api/v1/portal/incidents", (req, res) => {
  return res.json(listEnvelope(inMemory.incidents.slice(0, 2)));
});

app.get("/api/v1/portal/invoices", (req, res) => {
  return res.json(listEnvelope(inMemory.invoices.slice(0, 2)));
});

app.get("/api/v1/portal/complaints", (req, res) => {
  return res.json(listEnvelope(inMemory.complaints.slice(0, 2)));
});

app.get("/api/v1/portal/manpower-requests", (req, res) => {
  return res.json(listEnvelope(inMemory.manpower_requests.slice(0, 1)));
});

app.get("/api/v1/portal/sites", (req, res) => {
  return res.json(listEnvelope(inMemory.sites.slice(0, 1)));
});

// ============================================================================
// STATIC ASSETS & SINGLE PAGE APPLICATION (SPA) FALLBACK
// ============================================================================
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/assets/")) {
    return res.status(404).json(envelope(null, {}, [{ message: "Not found" }]));
  }
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start Server locally
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`Safe Guard Force ERP Server running on port ${PORT}`);
    console.log(`Local Access:  http://localhost:${PORT}`);
    console.log(`Connected to:  ${supabaseUrl}`);
    console.log(`OpenAPI Spec:  http://localhost:${PORT}/api/v1/openapi.json`);
    console.log(`=======================================================`);
  });
}

export default app;
"""

with open("server.js", "w") as f:
    f.write(server_code)

print("server.js written successfully!")
