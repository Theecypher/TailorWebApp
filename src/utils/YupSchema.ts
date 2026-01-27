import * as Yup from "yup";
import { type FieldConfig } from "../shared/types";

export const generateYupSchema = (fields: FieldConfig[]) => {
  const shape: Record<string, Yup.AnySchema> = {};

  fields.forEach((field) => {
    let validator: Yup.AnySchema;

    switch (field.type) {
      case "number":
        validator = Yup.number();
        break;
      case "date":
        validator = Yup.date();
        break;
      case "checkbox":
      case "boolean":
        validator = Yup.boolean();
        break;
      default:
        validator = Yup.string();
        break;
    }

    if (field.email) {
      validator = (validator as Yup.StringSchema).email(
        "Invalid email address"
      );
    }

    if (field.minLength) {
      validator = (validator as Yup.StringSchema).min(
        field.minLength,
        `Minimum ${field.minLength} characters`
      );
    }

    if (field.maxLength) {
      validator = (validator as Yup.StringSchema).max(
        field.maxLength,
        `Maximum ${field.maxLength} characters`
      );
    }

    if (field.min != null) {
      validator = (validator as Yup.NumberSchema).min(
        field.min,
        `Minimum value is ${field.min}`
      );
    }

    if (field.max != null) {
      validator = (validator as Yup.NumberSchema).min(
        field.max,
        `Maximun value is ${field.min}`
      );
    }

    if (field.regex) {
      validator = (validator as Yup.StringSchema).matches(
        new RegExp(field.regex.pattern),
        field.regex.message || "Invalid Format"
      );
    }

    if (field.matchesField) {
      validator = (validator as Yup.StringSchema).oneOf(
        [Yup.ref(field.matchesField)],
        `${field.label} must match ${field.matchesField}`
      );
    }

    if (field.type === "number") {
      validator = (validator as Yup.NumberSchema).typeError(
        `${field.label} must be a number`
      );
    }

    if (field.type === "number" && field.min === 0) {
      validator = (validator as Yup.NumberSchema).moreThan(
        0,
        `${field.label} mut be greater than 0`
      );
    }

    if (field.required) {
      validator = validator.required(`${field.label}`);
    }

    shape[field.name] = validator;
  });

  return Yup.object().shape(shape);
};
