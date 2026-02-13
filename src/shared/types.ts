export interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "tel"
    | "url"
    | "number"
    | "textarea"
    | "date";
  disabled?: boolean;
  className?: string;
  autoComplete?: string;
  maxLength?: number;
  showCharacterCount?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  required?: boolean;
  value?: string;
  borderless?: boolean;
  buttomBorder?: boolean;
  rows?: number;
  hintText?: boolean;
  logo?: string;
}

export type FieldConfig = {
  name: string;
  label?: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "date"
    | "checkbox"
    | "boolean"
    | "select"
    // | 'multiselect'
    | "textarea"
    | "tel";

  required?: boolean;
  row?: number;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  email?: boolean;
  regex?: {
    pattern: string;
    message?: string;
  };
  matchesField?: string;
  options?: { label: string; value: string }[];
  placeholder?: string;
  hintText?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  logo?: string;
  onChange?: (value: any, formValues?: any) => void;
};
