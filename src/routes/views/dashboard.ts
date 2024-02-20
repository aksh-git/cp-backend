// dashboard.ts --feb 20, 2023
/**
 * x----- DROPPED ------x
 *
 *
 * THIS APPROACH HAS BEEN DROPPED AT THE MOMENT DUT TO LESS TIME
 *
 * THIS WILL SERVE AS INTUTION IF WE DECIDED TO CONTINUE IN FUTURE
 *
 * THATS WHY KEEP IT HERE...
 */

import {
  SectionSchema,
  ContentEditPolicy,
  FieldSchema,
  FieldTypes,
  SectionTypes,
} from "../../lib/Schema/base";
import { DashboardViewSchema } from "../../lib/Schema/views";

const filterning_Options = ["Leads", "Pan Rejects"];
const input_filter_options = [
  "Name",
  "Lead Id",
  "Mobile",
  "PAN Number",
  "Email id",
  "Lead date from",
  "Lead date to",
  "Lead Stage",
  "Program",
  "Funding Partner",
  "Disbursal from",
  "Disbursal to",
];
const table_schema = [
  "Lead Details",
  "Name & City",
  "Mobile & Email",
  "Lead Stage",
  "Ops Status",
  "ACtion",
];

const categoryFields: FieldSchema<false>[] = filterning_Options.map(
  (option, i) => {
    return {
      type: FieldTypes.DIV,
      value: option,
      id: option.toLocaleLowerCase().replaceAll(" ", ""),
    };
  }
);

const categoryFilter: SectionSchema<SectionTypes.DIV> = {
  type: SectionTypes.DIV,
  label: "Filter by category",
  fields: categoryFields,
};

const inputFilterFields: FieldSchema<true>[] = input_filter_options.map(
  (option, i) => {
    return {
      type: FieldTypes.INPUT,
      value: option,
      label: option,
      editPolicy: ContentEditPolicy.FREE,
      id: option.toLocaleLowerCase().replaceAll(" ", ""),
      message: "implement Filter",
    };
  }
);

const inputFilter: SectionSchema<SectionTypes.DIV> = {
  type: SectionTypes.DIV,
  label: "Filter by inputs",
  fields: [
    ...inputFilterFields,
    {
      id: "",
      type: FieldTypes.BUTTON,
      label: "",
      value: "Filter",
    },
    {
      id: "",
      type: FieldTypes.BUTTON,
      label: "",
      value: "CLear",
    },
  ],
};

const tableView: FieldSchema<false>[] = table_schema.map((option, i) => {
  return {
    id: option.toLocaleLowerCase().replaceAll(" ", ""),
    type: FieldTypes.TEXT,
    value: option,
  };
});

const mainDataTable: SectionSchema<SectionTypes.DIV> = {
  type: SectionTypes.DIV,
  label: "Table data",
  fields: tableView,
};

export const dashBoardView: DashboardViewSchema = {
  label: "DashBoard",
  section: [categoryFilter, inputFilter, mainDataTable],
};
