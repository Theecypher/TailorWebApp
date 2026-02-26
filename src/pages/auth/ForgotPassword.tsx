import { useEffect, useState } from "react";

import DynamicForm, {
  type FieldConfig,
} from "../../shared/dynamicForm/DynamicForm";
import type { ForgotPassword } from "../../types/Auth";
import { generateYupSchema } from "../../utils/YupSchema";
import OtpInput from "./OTPVerification";
import OnboardingHeader from "../../components/header/OnboardingHeader";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const [isOtp, setIsOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const valueLength = 6;
  const onChange = (value: string) => setOtp(value);
  const nagivate = useNavigate();

  useEffect(() => {
    if (otp.length === valueLength) {
      setIsOtp(false);
    }
  }, [otp, setIsOtp]);

  const fields: FieldConfig[] = [
    {
      name: "email",
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
    setIsOtp(true);
  };

  return (
    <div className="flex justify-center px-5 md:px-10 lg:px-0 lg:items-center min-h-screen flex-col gap-5 py-4 mt-auto w-full">
      {isOtp ? (
        <div className="flex flex-col items-center">
          <OnboardingHeader
            title="Verification code"
            description="Enter the one-time passcode (OTP) sent to your registered email to proceed with your password reset."
          />

          <OtpInput
            value={otp}
            valueLength={valueLength}
            onChange={onChange}
            bottomText="Didn’t receive code?"
            bottomLinkTo="/"
            bottomLink="Resend"
          />
        </div>
      ) : (
        <div>
          <OnboardingHeader
            description=" Enter your registered email to receive an OTP to securely reset your
        password."
            title="Reset Password"
          />
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
