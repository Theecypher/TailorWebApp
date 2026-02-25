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
        "Invalid email address",
      );
    }

    if (field.minLength) {
      validator = (validator as Yup.StringSchema).min(
        field.minLength,
        `Minimum ${field.minLength} characters`,
      );
    }

    if (field.maxLength) {
      validator = (validator as Yup.StringSchema).max(
        field.maxLength,
        `Maximum ${field.maxLength} characters`,
      );
    }

    if (field.min != null) {
      validator = (validator as Yup.NumberSchema).min(
        field.min,
        `Minimum value is ${field.min}`,
      );
    }

    if (field.max != null) {
      validator = (validator as Yup.NumberSchema).min(
        field.max,
        `Maximun value is ${field.min}`,
      );
    }

    if (field.regex) {
      validator = (validator as Yup.StringSchema).matches(
        new RegExp(field.regex.pattern),
        field.regex.message || "Invalid Format",
      );
    }

    if (field.matchesField) {
      validator = (validator as Yup.StringSchema).oneOf(
        [Yup.ref(field.matchesField)],
        `${field.label} must match ${field.matchesField}`,
      );
    }

    if (field.type === "number") {
      validator = (validator as Yup.NumberSchema).typeError(
        `${field.label} must be a number`,
      );
    }

    if (field.type === "number" && field.min === 0) {
      validator = (validator as Yup.NumberSchema).moreThan(
        0,
        `${field.label} mut be greater than 0`,
      );
    }

    if (field.required) {
      validator = validator.required(`${field.label}`);
    }

    shape[field.name] = validator;
  });

  return Yup.object().shape(shape);
};
export const LoginValidationSchema = Yup.object({
  userName: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Password digit is too short")
    .required("Password is required"),
});
export const SignupValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email address")
    .required("Email is required"),
  CountryOfResidence: Yup.string().required("Country Of Residence is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters, include uppercase, lowercase, number and special character",
    ),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(?:\+234|234|0)[789][01]\d{8}$/,
      "Enter a valid Nigerian phone number",
    ),
});
export const profileValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  role: Yup.string().required("Role is required"),
  country: Yup.string().required("Country is required"),
});
