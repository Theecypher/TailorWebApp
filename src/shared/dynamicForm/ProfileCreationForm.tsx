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
import { useProjectService } from "../../services/projectService";
import { useDispatch } from "react-redux";
import { setValue } from "../../store/profileSlice";

interface FormGeneratorProps<T> {
  fields: FieldConfig[];
  title: string;
  subTitle: string;
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
}: FormGeneratorProps<T>) => {
  const [isMobile] = IsMobile();
  const [selectedTab, setSelectedType] = useState("");
  const [activeTab, setActiveTab] = useState("personalInformation");
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedType?.(activeTab);
  }, [activeTab, setSelectedType]);

  const handleProfileStepClick = (value: any) => {
    const profileStep = value.trim();

    console.log(profileStep);

    dispatch(setValue(profileStep));

    setActiveTab(value);
  };

  return (
    <div className="lg:flex h-screen overflow-hidden">
      {!isMobile && (
        <div className="w-[20%] border-r flex justify-center py-6 mt-2">
          <div>
            <div className="flex flex-col gap-5">
              {ProfileCreationData.map((link) => {
                const isActive = activeTab === link.value;
                return (
                  <div
                    key={link.value}
                    onClick={() => handleProfileStepClick(link.value)}
                    className={`flex gap-2 items-center  transition-all duration-200 p-3 text-center ${isActive ? "bg-primary_active rounded-10 font-bold text-white" : "text-black"} `}
                  >
                    <img className="" src={link.img} alt="" />
                    <h2>{link.label}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-5 py-5 w-full relative md:my-10 lg:w-[80%] lg:mb-8 lg:mt-2">
        <div className="flex flex-col gap-3 px-5">
          <h2 className="text-24 font-bold">{title}</h2>

          <p className="text-16">{subTitle}</p>
        </div>

        <div className="w-full">
          <Formik<T>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, isSubmitting }) => (
              <Form
                className={`grid grid-row-6 gap-4 [&>*:last-child]:row-span-2 lg:w-[60%] ${layoutClassname}`}
              >
                <div className={formLayoutClassname}>
                  {fields.map((field) => (
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
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div
                  className={`border-t px-10 border-border w-full py-4 left-0 absolute bottom-[-32%] lg:bottom-[10px]`}
                >
                  {!hideSubmit && (
                    <div
                      className={`flex justify-center md:w-[20%] md:justify-self-end ${buttonWrapperClassName}`}
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
