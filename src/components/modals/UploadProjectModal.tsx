import type { FieldConfig } from "../../shared/types";
import { generateYupSchema } from "../../utils/YupSchema";
import { Dialog, DialogContent } from "@mui/material";
import DynamicForm from "../../shared/dynamicForm/DynamicForm";

const UploadModalFormField: FieldConfig[] = [
  {
    name: "projectDescription",
    placeholder: "Say something about your project",
    type: "textarea",
    row: 16,
  },
];

type UploadForm = {
  projectDescription: string;
};

const initialValues = {
  projectDescription: "",
};

const validationSchema = generateYupSchema(UploadModalFormField);

type UploadProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddText?: (text: string) => void;
};

const UploadProjectModal = ({
  isOpen,
  onClose,
  onAddText,
}: UploadProjectModalProps) => {
  const handleSubmit = async (values: UploadForm) => {
    const text = values.projectDescription.trim();

    if (text && onAddText) {
      onAddText(text);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent>
        <DynamicForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          fields={UploadModalFormField}
          onSubmit={handleSubmit}
          submitText="Add Text"
          layoutClassname="flex flex-col justify-center p-7"
          buttonClassName=""
        />
      </DialogContent>
    </Dialog>
  );
};

export default UploadProjectModal;
