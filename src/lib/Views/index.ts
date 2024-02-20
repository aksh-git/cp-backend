import { ContentEditPolicy, FieldSchema, FieldTypes } from "../Schema/base";
import {
  FilterLeadByCategoryViewSchema,
  FilterLeadsByInputViewSchema,
  LeadViewTableSchema,
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
