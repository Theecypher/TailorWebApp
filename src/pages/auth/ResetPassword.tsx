import OnboardingHeader from "../../components/header/OnboardingHeader";
import DynamicForm, {
  type FieldConfig,
} from "../../shared/dynamicForm/DynamicForm";
import type { ResetPassword } from "../../types/Auth";
import { generateYupSchema } from "../../utils/YupSchema";

const ResetPassWord = () => {
  const field: FieldConfig[] = [
    {
      name: "newPassword",
      label: "newPassword",
      placeholder: "newPassword",
      type: "password",
      required: true,
    },
    {
      name: "confirmNewPassword",
      label: "confirmNewPassword",
      placeholder: "confirmNewPassword",
      type: "password",
      required: true,
    },
  ];

  const initialValues: ResetPassword = {
    newPassword: "",
    confirmNewPassword: "",
  };

  const validationSchema = generateYupSchema(field);

  const handleSubmit = (values: ResetPassword) => {
    console.log(values);
  };
  return (
    <div>
      <OnboardingHeader
        title="Set New Password"
        description="Create a new password to secure your account. Once set, you can log in with your new password."
      />

      <DynamicForm
        fields={field}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ResetPassWord;
