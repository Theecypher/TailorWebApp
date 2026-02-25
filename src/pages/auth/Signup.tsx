import { useState } from "react";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import DynamicForm, {
  type FieldConfig,
} from "../../shared/dynamicForm/DynamicForm";
import type { Login } from "../../types/Auth";
import { SignupValidationSchema } from "../../utils/YupSchema";

const Signup = () => {
  const [role, setRole] = useState("client");
  let email = "";

  if (role === "client") {
    email = "Email";
  } else {
    email = "Work Email";
  }

  const fields: FieldConfig[] = [
    {
      name: "email",
      label: email,
      type: "email",
      required: true,
      email: true,
    },
    {
      name: "CountryOfResidence",
      label: "Country of Residence",
      type: "select",
      placeholder: "e.g Nigeria",
      options: [
        {
          value: "Nigeria",
          label: "Nigeria",
        },
        {
          value: "Canada",
          label: "Canada",
        },
        {
          value: "Kenya",
          label: "Kenya",
        },
        {
          value: "France",
          label: "France",
        },
      ],
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "number",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      minLength: 6,
    },

    {
      name: "hearAboutUs",
      label: "How did you hear about this platform?",
      type: "select",
      options: [
        {
          value: "socialmedia",
          label: "Social Media",
        },
        {
          value: "news",
          label: "News",
        },
      ],
    },
  ];

  const inintialValues = {
    email: "",
    CountryOfResidence: "",
    hearAboutUs: "",
    phoneNumber: "",
    password: "",
  };

  const handleSubmit = async (values: Login) => {
    console.log(values);
  };

  return (
    <OnboardingLayout title="Create an Account" >
      <div className="w-full">
        <DynamicForm
          fields={fields}
          validationSchema={SignupValidationSchema}
          initialValues={inintialValues}
          onSubmit={handleSubmit}
          layoutClassname="flex flex-col w-full"
          formLayoutClassname="w-full"
          submitText="Create account"
          topBorderClassName="mt-5"
          buttonClassName="text-white py-3 font-bold text-16"
          bottomText="Already have an account?"
          bottomLink="Log in"
        />
      </div>
    </OnboardingLayout>
  );
};

export default Signup;
