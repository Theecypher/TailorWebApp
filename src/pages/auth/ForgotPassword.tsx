import { useState } from "react";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import DynamicForm, {
  type FieldConfig,
} from "../../shared/dynamicForm/DynamicForm";
import type { ForgotPassword, Login } from "../../types/Auth";
import { generateYupSchema } from "../../utils/YupSchema";
import OtpInput from "./OTPVerification";

const ForgotPassword = () => {
  const [role, setRole] = useState("client");
  const [isOtp, setIsOtp] = useState(true)
  const [otp, setOtp] = useState("");
  const onChange = (value: string) => setOtp(value);
  let email = "";

  if (role === "client") {
    email = "Email";
  } else {
    email = "Work Email";
  }

  const fields: FieldConfig[] = [
    {
      name: "email",
      // label: email,
      type: "email",
      placeholder: "example@gmail.com",
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
    <div className="flex justify-center px-5 md:px-10 lg:px-0 lg:items-center min-h-screen flex-col gap-5 py-4 mt-auto w-full">
      {isOtp ? (
        <OtpInput value={otp} valueLength={6} onChange={onChange} />
      ) : (
        <div>
          <div className="text-center my-5">
            <h5 className="font-bold text-[28px]">Reset Password</h5>
            <p className="text-18">
              Enter your registered email to receive an OTP to securely reset
              your password.
            </p>
          </div>
          <h1 className="font-semibold text-18">Email</h1>
          <DynamicForm
            fields={fields}
            validationSchema={validationSchema}
            initialValues={inintialValues}
            onSubmit={handleSubmit}
            layoutClassname="flex flex-col w-full"
            formLayoutClassname="w-full"
            submitText="Continue"
            topBorderClassName="mt-2"
            buttonClassName="py-3"
          />
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
