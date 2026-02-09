import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
export type { FieldConfig } from "../types";
import ShareWorkButton from "../button/ShareWorkBtn";
import type { FieldConfig } from "../types";
import Input from "../input/inputs";
import { img } from "../../constant";
import type { ReactNode } from "react";
import SingleSelect from "../input/SIngleSelect";

interface FormGeneratorProps<T> {
  fields: FieldConfig[];
  initialValues: T;
  validationSchema?: Yup.ObjectSchema<any>;
  onSubmit: (values: T) => void | Promise<void>;
  forgotPasswordLink?: boolean;
  layoutClassname?: string;
  formLayoutClassname?: string;
  hideSubmit?: boolean;
  buttonClassName?: string;
  disabled?: boolean;
  submitText?: string;
  addIcon?: boolean;
  noInputBorder?: boolean;
  onAddClick?: () => void | Promise<void>;
  children?: ReactNode;

  buttonWrapperClassName?: string;
  topBorderClassName?: string;
}

const DynamicForm = <T extends Record<string, any>>({
  fields,
  initialValues,
  validationSchema,
  onSubmit,
  //   forgotPasswordLink = false,
  hideSubmit = false,
  submitText,
  layoutClassname,
  buttonClassName,
  buttonWrapperClassName,
  topBorderClassName,
  formLayoutClassname,
  noInputBorder,
  children,
}: FormGeneratorProps<T>) => {
  return (
    <Formik<T>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting }) => (
        <Form className={layoutClassname}>
          <div className={formLayoutClassname}>
            {fields.map((field) => (
              <div
                key={field.name}
                className={field.fullWidth ? "col-span-1 md:col-span-2" : ""}
              >
                {field.type === "select" && (
                  <SingleSelect
                    name={field.name}
                    label={field.label}
                    options={field.options || []}
                    disabled={field.disabled}
                  />
                )}

                {field.type === "checkbox" && (
                  <div style={{ marginTop: "10px", marginBottom: "4px" }}>
                    <Field name={field.name}>
                      {({ field: formikField }: any) => (
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name={formikField.name}
                            checked={formikField.value}
                            onChange={formikField.onChange}
                            onBlur={formikField.onBlur}
                            disabled={field.disabled}
                            className="h-[] w-4 border-gray-300 rounded"
                          />
                          <span className="text-sm">
                            {field.label} (
                            {formikField.value ? "Active" : "Disabled"})
                          </span>
                        </label>
                      )}
                    </Field>
                  </div>
                )}

                {field.type === "textarea" && (
                  <Input
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    rows={field.row}
                    type="textarea"
                    disabled={field.disabled}
                  />
                )}

                {[
                  "text",
                  "email",
                  "password",
                  "number",
                  "date",
                  "tel",
                ].includes(field.type) && (
                  <Input
                    name={field.name}
                    type={field.type as any}
                    label={field.label}
                    placeholder={field.placeholder}
                    disabled={field.disabled}
                    buttomBorder={noInputBorder}
                  />
                )}
              </div>
            ))}
          </div>

          {children}

          <div className={`${topBorderClassName}`}>
            {!hideSubmit && (
              <div
                className={`flex justify-center  self-end ${buttonWrapperClassName}`}
              >
                <ShareWorkButton
                  type="submit"
                  disabled={
                    isSubmitting ||
                    Object.values(values).every(
                      (value) => value === "" || value == null,
                    )
                  }
                  loading={isSubmitting}
                  className={`hover:bg-hoverBtn px-6 py-2 rounded-14 transition w-full ${buttonClassName}`}
                >
                  {submitText}
                </ShareWorkButton>
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
