import { CustomerDetails } from "../Views";
import {
  BaseFieldSchema,
  BaseTableSchema,
  BaseViewSchema,
  FieldSchema,
  WrapInfo,
} from "./base";

/*
 * by creating a Base and then extending it to create other schemas,
 *  - easy pizzy
 *  - clean code
 *  - easy updation
 *  - programmer happy... :)
 *
 */

export interface DashboardViewSchema extends BaseViewSchema {}
export interface LeadInfoViewSchema extends BaseViewSchema {}
export interface BankingViewSchema extends BaseViewSchema {}
export interface BankAnalysisViewSchema extends BaseViewSchema {}

export interface LeadViewTableSchema extends BaseTableSchema {}

export interface FilterLeadsByInputViewSchema extends WrapInfo {
  fields: FieldSchema<true>[];
}

/**
 * match_id : id to map in lead object
 * value : used to match the value fol filtering
 */
interface CategoryFileds extends BaseFieldSchema {
  match_id: any;
  value: any;
}

export interface FilterLeadByCategoryViewSchema extends WrapInfo {
  fields: CategoryFileds[];
}

export interface CustomerDetailsViewSchema extends WrapInfo {
  fields: FieldSchema<true>[];
}

export interface PANAPIResponseSchema extends WrapInfo {
  fields: FieldSchema<false>[];
}
