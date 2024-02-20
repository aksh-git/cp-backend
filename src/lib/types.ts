import { Document, Model } from "mongoose";

// Define interfaces for Mongoose documents
export interface Progress extends Document {
  statement_id: string;
  status: string;
  message: string;
  transaction_status: string;
  source: string;
}

export interface Account extends Document {
  account_category: string;
  account_id: string;
  account_number: string;
  account_opening_date: Date;
  bank: string;
  credit_limit: number;
  ifsc: string;
  micr: string;
  missing_data: string[];
  od_limit: number;
  statements: string[];
  months: string[];
  country_code: string;
  currency_code: string;
  last_updated: Date;
}

export interface Identity extends Document {
  name: string;
  mobile: string;
  pan_number: string;
  date_of_birth: string;
  gender: string;
  email: string;
  city: string;
  pincode: string;
  account_number: string;
  address: string;
  account_category: string;
  raw_account_category: string;
  micr: string;
  credit_limit: number;
  bank_name: string;
  ifsc: string;
}

export interface Employment extends Document {
  occupation: string;
  employer_type: string;
  current_employer: string;
  desgination: string;
  cwe: string;
  official_mail_id: string;
  pincode: string;
  city: string;
}

export interface PanApiResponse extends Document {
  pan_status: string;
  adddhar_seeding: string;
  pan_issuse_date: string;
  last_update: string;
  aadhaar_as_per_pan: string;
  mobile_number: string;
  email: string;
  address_as_per_pan: string;
}

export interface Fraud extends Document {
  fraudulent_statements: string[];
  fraud_type: string[];
}

export interface Lead extends Document {
  entity_id: string;
  progress: Progress[];
  accounts: Account[];
  identity: Identity;
  employment: Employment;
  pan_api_res: PanApiResponse;
  fraud: Fraud;
}

// Define interface for generic CRUD response
export interface CRUDResponse {
  success: boolean;
  status?: number;
  message?: string;
  data?: any;
}
