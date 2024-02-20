import mongoose from "mongoose";

// schema for Progress : OK
const progressSchema = new mongoose.Schema({
  statement_id: String,
  status: String,
  message: String,
  transaction_status: String,
  source: String,
});

// schema for Accounts : OK
const accountSchema = new mongoose.Schema({
  account_category: String,
  account_id: String,
  account_number: String,
  account_opening_date: Date,
  bank: String,
  credit_limit: Number,
  ifsc: String,
  micr: String,
  missing_data: [String],
  od_limit: Number,
  statements: [String],
  months: [String],
  country_code: String,
  currency_code: String,
  last_updated: Date,
});

// schema for Identity : ok
const identitySchema = new mongoose.Schema({
  // identity
  name: String,
  mobile: String,
  pan_number: String,
  date_of_birth: String,
  gender: String,
  email: String,
  city: String,
  pincode: String,
  // from dummy data
  account_number: String,
  address: String,
  account_category: String,
  account_id: String,
  raw_account_category: String,
  micr: String,
  credit_limit: Number,
  bank_name: String,
  ifsc: String,
});

const employmentSchema = new mongoose.Schema({
  occupation: String,
  employer_type: String,
  current_employer: String,
  desgination: String,
  cwe: String,
  official_mail_id: String,
  pincode: String,
  city: String,
});

// pan api res : ok
const panApiRespnseSchema = new mongoose.Schema({
  pan_status: String,
  adddhar_seeding: String,
  pan_issuse_date: String,
  last_update: String,
  aadhaar_as_per_pan: String,
  mobile_number: String,
  email: String,
  address_as_per_pan: String,
});
// schema for Fraud : Ok
const fraudSchema = new mongoose.Schema({
  fraudulent_statements: [String],
  fraud_type: [String],
});

// main schema for the lead identity data
const leadSchema = new mongoose.Schema({
  entity_id: String,
  progress: [progressSchema],
  accounts: [accountSchema],
  identity: identitySchema,
  employment: employmentSchema,
  pan_api_res: panApiRespnseSchema,
  fraud: fraudSchema,
});

// Create a model using the schema
export const Lead = mongoose.model("Lead", leadSchema);
