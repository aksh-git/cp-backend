import {
  LeadTableView,
  FilterLeadsByInputView,
  FilterLeadByCategoryView,
} from "../../lib/Views";

export const mapSlugToView: { [key: string]: any } = {
  leadViewtable: LeadTableView,
  filterLeadsByInput: FilterLeadsByInputView,
  filterLeadByCategory: FilterLeadByCategoryView,
};
