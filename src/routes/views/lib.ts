import {
  LeadTableView,
  FilterLeadsByInputView,
  FilterLeadByCategoryView,
  CustomerDetails,
  Employmentdeatils,
  PANAPIResponse,
} from "../../lib/Views";

export const mapSlugToView: { [key: string]: any } = {
  leadViewtable: LeadTableView,
  filterLeadsByInput: FilterLeadsByInputView,
  filterLeadByCategory: FilterLeadByCategoryView,
  customerDetails: CustomerDetails,
  employmentdeatils: Employmentdeatils,
  PAN_APIResponse: PANAPIResponse,
};
