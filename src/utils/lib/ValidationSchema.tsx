import { useMemo } from "react";
import type { FieldConfig } from "../../shared/types";
import { generateYupSchema } from "../YupSchema";

type validationSchemaType = {
  value: FieldConfig[];
};

const useValidationSchema = ({ value }: validationSchemaType) => {
  const validationSchema = useMemo(() => generateYupSchema(value), [value]);

  return [validationSchema];
};

export default validSc;
