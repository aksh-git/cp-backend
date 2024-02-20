// Define the common interface for wrapInfo
export interface WrapInfo {
  message?: string;
  label?: string;
}

/**
 * FREE - i dont know (let others people handle i'm free :)
 *
 * LOOSE - allow edit after some action (e.g after reaching some goal state)
 *
 * STRICT - front handle with only allow edit when necessary full validation (e.g. implement regex n all..)
 *
 * NOT_ALLOWED - can user edit? NO they can't.
 */
export enum ContentEditPolicy {
  "FREE",
  "LOOSE",
  "STRICT",
  "NOT_ALLOWED",
}

export enum FieldTypes {
  "INPUT",
  "BUTTON",
  "DIV",
  "TEXT",
  "LINK",
}

export enum SectionTypes {
  "FORM",
  "TABLE",
  "DIV",
  "TEXT",
}

// Base Field Schema
export interface BaseFieldSchema extends WrapInfo {
  name?: string;
  type: FieldTypes;
  value?: any;
  tag?: string;
}

type EditConditional<CE extends boolean | undefined> = CE extends true
  ? { id: string; editPolicy: ContentEditPolicy }
  : { id: string };

export interface BaseSectionSchema extends WrapInfo {
  label: string;
  fields: FieldSchema<undefined>[];
}

type CreateDynamicSectionSchemaWithType<ST extends SectionTypes | undefined> =
  ST extends SectionTypes.FORM
    ? {
        type: ST;
      }
    : ST extends SectionTypes.TABLE
    ? {
        type: ST;
      }
    : ST extends SectionTypes.DIV
    ? {
        type: ST;
      }
    : ST extends SectionTypes.TEXT
    ? {
        type: ST;
      }
    : {};

// Define the final FieldSchema interface with conditional editPolicy
export type FieldSchema<CE extends boolean | undefined> = BaseFieldSchema &
  EditConditional<CE>;

export type SectionSchema<ST extends SectionTypes | undefined> =
  BaseSectionSchema & CreateDynamicSectionSchemaWithType<ST>;

export interface BaseViewSchema extends WrapInfo {
  label: string;
  section: SectionSchema<undefined>[];
}

interface TableFieldSchema extends BaseFieldSchema, WrapInfo {
  field_ids: string[];
}

export interface BaseTableSchema extends WrapInfo {
  fields: TableFieldSchema[];
}
