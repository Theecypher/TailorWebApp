import type { FieldConfig } from "../../shared/types";
import { generateYupSchema } from "../../utils/YupSchema";
import { Dialog, DialogContent } from "@mui/material";
import DynamicForm from "../../shared/dynamicForm/DynamicForm";
import { useDispatch } from "react-redux";
import { addMedia } from "../../store/MediaSlice/MediaSlice";
import type { MediaItem } from "../../types/media";

const UploadModalFormField: FieldConfig[] = [
  {
    name: "projectDescription",
    placeholder: "Say something about your project",
    type: "textarea",
    row: 16,
  },
];

type UploadFormProps = {
  projectDescription: string;
};

const initialValues = {
  projectDescription: "",
};

const validationSchema = generateYupSchema(UploadModalFormField);

type UploadProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: UploadFormProps) => void;
};

const UploadProjectModal = ({
  isOpen,
  onClose,
}: // onSubmit,
UploadProjectModalProps) => {
  const dispatch = useDispatch();
  const handleSubmit = async (values: UploadFormProps) => {
    const mediaItem: MediaItem = {
      id: Date.now().toString(6),
      type: "text",
      content: values.projectDescription,
    };
    dispatch(addMedia({ status: "inProgress", item: mediaItem }));
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
