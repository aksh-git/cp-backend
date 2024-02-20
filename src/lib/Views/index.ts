import { ContentEditPolicy, FieldSchema, FieldTypes } from "../Schema/base";
import {
  CustomerDetailsViewSchema,
  FilterLeadByCategoryViewSchema,
  FilterLeadsByInputViewSchema,
  LeadViewTableSchema,
  PANAPIResponseSchema,
} from "../Schema/views";

export const LeadTableView: LeadViewTableSchema = {
  label: "Lead view table",
  message: "Table schema for lead view on dashboard",
  fields: [
    {
      field_ids: ["_id", "date", "time"],
      type: FieldTypes.TEXT,
      label: "Lead details",
      message: "id, date and time",
    },
    {
      field_ids: ["identity.name", "identity.city"],
      type: FieldTypes.TEXT,
      label: "Name & city",
    },
    {
      field_ids: ["identity.mobile", "identity.email"],
      type: FieldTypes.TEXT,
      label: "Mobile & email",
    },
    {
      field_ids: ["progress.0.status"],
      type: FieldTypes.TEXT,
      label: "Lead stage",
    },
    {
      field_ids: ["ops_status"],
      type: FieldTypes.TEXT,
      label: "Ops Status",
    },
    {
      field_ids: ["id"],
      type: FieldTypes.LINK,
      value: "View",
      label: "Action",
    },
  ],
};

export const FilterLeadsByInputView: FilterLeadsByInputViewSchema = {
  label: "Filter leads by inputs",
  message: "Filter input fields leads on dashboard",
  fields: [
    {
      id: "name",
      name: "name",
      type: FieldTypes.INPUT,
      label: "Name",
      editPolicy: ContentEditPolicy.FREE,
    },
    {
      id: "id",
      name: "id",
      type: FieldTypes.INPUT,
      label: "Lead ID",
      editPolicy: ContentEditPolicy.FREE,
    },
    {
      id: "mobile",
      name: "mobile",
      type: FieldTypes.INPUT,
      label: "Mobile Number",
      editPolicy: ContentEditPolicy.FREE,
    },
    {
      id: "pan_number",
      name: "pan_number",
      type: FieldTypes.INPUT,
      label: "Pan Number",
      editPolicy: ContentEditPolicy.FREE,
    },
  ],
};

export const FilterLeadByCategoryView: FilterLeadByCategoryViewSchema = {
  label: "Categories leads",
  message: "Categories leads by these fields",
  fields: [
    {
      match_id: "all",
      value: "none",
      type: FieldTypes.DIV,
      label: "Leads",
      name: "all",
    },
    {
      match_id: "status",
      value: "rejects",
      type: FieldTypes.DIV,
      label: "Leads",
      name: "all",
    },
    {
      match_id: "status",
      value: "approved",
      type: FieldTypes.DIV,
      label: "Approved",
      name: "approved",
    },
  ],
};

export const CustomerDetails: CustomerDetailsViewSchema = {
  label: "Customer Details",
  fields: [
    {
      id: "identity.name",
      label: "Name",
      editPolicy: ContentEditPolicy.LOOSE,
      type: FieldTypes.INPUT,
    },
    {
      id: "identity.mobile",
      label: "Mobile number",
      editPolicy: ContentEditPolicy.LOOSE,
      type: FieldTypes.INPUT,
    },
    {
      id: "identity.pan_number",
      label: "PAN number",
      editPolicy: ContentEditPolicy.LOOSE,
      type: FieldTypes.INPUT,
    },
    {
      id: "identity.email",
      label: "Email",
      editPolicy: ContentEditPolicy.LOOSE,
      type: FieldTypes.INPUT,
    },
    {
      id: "",
      label: "Salary",
      editPolicy: ContentEditPolicy.LOOSE,
      type: FieldTypes.INPUT,
    },
    {
      id: "",
      label: "Applied loan",
      editPolicy: ContentEditPolicy.LOOSE,
      type: FieldTypes.INPUT,
    },
  ],
};

export const Employmentdeatils: CustomerDetailsViewSchema = {
  label: "Customer Employment deatils",
  fields: [
    {
      id: "employment.occupation",
      label: "Occupation",
      type: FieldTypes.INPUT,
      editPolicy: ContentEditPolicy.LOOSE,
    },
    {
      id: "employment.employer_type",
      label: "Employer Type",
      type: FieldTypes.INPUT,
      editPolicy: ContentEditPolicy.LOOSE,
    },
    {
      id: "employment.current_employer",
      label: "Current employer",
      type: FieldTypes.INPUT,
      editPolicy: ContentEditPolicy.LOOSE,
    },
    {
      id: "employment.desgination",
      label: "desgination",
      type: FieldTypes.INPUT,
      editPolicy: ContentEditPolicy.LOOSE,
    },
    {
      id: "employment.cwe",
      label: "cwe",
      type: FieldTypes.INPUT,
      editPolicy: ContentEditPolicy.LOOSE,
    },
    {
      id: "employment.official_mail_id",
      label: "official mail id",
      type: FieldTypes.INPUT,
      editPolicy: ContentEditPolicy.LOOSE,
    },
    {
      id: "employment.pincode",
      label: "pincode",
      type: FieldTypes.INPUT,
      editPolicy: ContentEditPolicy.LOOSE,
    },
    {
      id: "employment.city",
      label: "city",
      type: FieldTypes.INPUT,
      editPolicy: ContentEditPolicy.LOOSE,
    },
  ],
};

export const PANAPIResponse: PANAPIResponseSchema = {
  label: "PAN api response",
  fields: [
    {
      id: "pan_api_res.pan_status",
      label: "PAN Status",
      type: FieldTypes.TEXT,
    },
    {
      id: "pan_api_res.aadhaar_seeding",
      label: "aadhaar seeding",
      type: FieldTypes.TEXT,
    },
    {
      id: "pan_api_res.pan_issuse_date",
      label: "pan issuse date",
      type: FieldTypes.TEXT,
    },
    {
      id: "pan_api_res.last_update",
      label: "last update",
      type: FieldTypes.TEXT,
    },
    {
      id: "pan_api_res.aadhaar_as_per_pan",
      label: "aadhaar as per pan",
      type: FieldTypes.TEXT,
    },
    {
      id: "pan_api_res.mobile_number",
      label: "mobile number",
      type: FieldTypes.TEXT,
    },
    {
      id: "pan_api_res.email",
      label: "email",
      type: FieldTypes.TEXT,
    },
    {
      id: "pan_api_res.address_as_per_pan",
      label: "address as per PAN",
      type: FieldTypes.TEXT,
    },
  ],
};
