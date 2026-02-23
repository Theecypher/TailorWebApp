import { useState } from "react";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import DynamicForm, {
  type FieldConfig,
} from "../../shared/dynamicForm/DynamicForm";
import type { ForgotPassword, Login } from "../../types/Auth";
import { generateYupSchema } from "../../utils/YupSchema";

const ForgotPassword = () => {
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
  ];

  const inintialValues = {
    email: "",
  };

  const validationSchema = generateYupSchema(fields);

  const handleSubmit = async (values: ForgotPassword) => {
    console.log(values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-5 py-4 mt-auto w-full">
      <div>
        <div>
          <h5 className="font-bold text-[28px]">Reset Password</h5>
          <p>
            Enter your registered email to receive an OTP to securely reset your
            password.
          </p>
        </div>
        <DynamicForm
          fields={fields}
          validationSchema={validationSchema}
          initialValues={inintialValues}
          onSubmit={handleSubmit}
          layoutClassname="flex flex-col w-full"
          formLayoutClassname="w-full"
          submitText="Log in"
          topBorderClassName="mt-2"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
