import { useState } from "react";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import DynamicForm, {
  type FieldConfig,
} from "../../shared/dynamicForm/DynamicForm";
import type { Login } from "../../types/Auth";
import { LoginValidationSchema } from "../../utils/YupSchema";

const Login = () => {
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
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      minLength: 6,
    },
  ];

  const inintialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: Login) => {
    console.log(values);
  };

  return (
    <OnboardingLayout>
      <div className="w-full">
        <DynamicForm
          fields={fields}
          validationSchema={LoginValidationSchema}
          initialValues={inintialValues}
          onSubmit={handleSubmit}
          layoutClassname="flex flex-col w-full"
          formLayoutClassname="w-full"
          forgotPasswordLink="Forgotten password?"
          submitText="Log in"
          topBorderClassName="mt-2"
          buttonClassName="text-white py-3 font-bold text-16"
          bottomText="Don’t have an account?"
          bottomLink="Create account"
        />
      </div>
    </OnboardingLayout>
  );
};

export default Login;
