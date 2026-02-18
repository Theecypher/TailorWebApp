import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
export type { FieldConfig } from "../types";
import ShareWorkButton from "../button/ShareWorkBtn";
import type { FieldConfig } from "../types";
import Input from "../input/inputs";
import { useEffect, useState, type ReactNode } from "react";
import SingleSelect from "../input/SIngleSelect";
import { ProfileCreationData } from "../../Data/ProfileCreationData";
import IsMobile from "../../utils/lib/IsMobile";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../store/profileSlice";
import { img } from "../../constant";
import type { RootState } from "../../store";
import WorkExperienceForm from "./WorkExperienceForm";

interface FormGeneratorProps<T> {
  fields?: FieldConfig[];
  title?: string;
  subTitle?: string;
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
  logo?: string;
  handleAddClick?: () => void;
}

const ProfileCreationForm = <T extends Record<string, any>>({
  fields,
  initialValues,
  validationSchema,
  onSubmit,
  hideSubmit = false,
  submitText,
  layoutClassname,
  buttonClassName,
  buttonWrapperClassName,
  title = "Personal Information",
  subTitle = "Provide your personal details to help build a complete profile.",
  formLayoutClassname,
  handleAddClick,
  addIcon,
}: FormGeneratorProps<T>) => {
  return (
    <div className="w-full flex-1 overflow-hidden">
      <div className="flex flex-col gap-5 py-5 w-full">
        <div className="flex flex-col gap-3 px-5">
          <h2 className="text-24 font-bold">{title}</h2>

          <p className="text-16">{subTitle}</p>
        </div>

        <div className="w-full">
          <Formik<T>
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, isSubmitting, isValid }) => (
              <Form className={`flex flex-col gap-2 w-full ${layoutClassname}`}>
                <div className={`w-[60%] px-5 ${formLayoutClassname}`}>
                  {fields?.map((field) => (
                    <div
                      key={field.name}
                      className={
                        field.fullWidth ? "col-span-1 md:col-span-2" : ""
                      }
                    >
                      {field.type === "select" && (
                        <SingleSelect
                          name={field.name}
                          label={field.label}
                          options={field.options || []}
                          disabled={field.disabled}
                        />
                      )}

                      {field.type === "box" && (
                        <div className="border-border border-t">
                          <h1 className="mt-3">
                            No previous experiences added
                          </h1>
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
                        <div className="">
                          <Input
                            name={field.name}
                            type={field.type as any}
                            label={field.label}
                            logo={field.logo}
                            hasLogo={field.hasLogo}
                            placeholder={field.placeholder}
                            disabled={field.disabled}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {addIcon && (
                  <div className="justify-self-end w-10 h-10 fixed z-50 top-[70%] right-[5%] hidden lg:flex">
                    <img onClick={handleAddClick} src={img.addIcon} alt="" />
                  </div>
                )}

                <div
                  className={`

                border-t mt-auto fixed shadow-md bottom-0 left-0 border-border w-full py-4
                `}
                >
                  {!hideSubmit && (
                    <div
                      className={`flex justify-center md:w-[20%] md:justify-self-end px-10 ${buttonWrapperClassName}`}
                    >
                      <ShareWorkButton
                        type="submit"
                        disabled={isSubmitting || !isValid}
                        loading={isSubmitting}
                        className={`hover:bg-hoverBtn px-6 py-3 rounded-14 transition w-full ${buttonClassName}`}
                      >
                        {submitText}
                      </ShareWorkButton>
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreationForm;
