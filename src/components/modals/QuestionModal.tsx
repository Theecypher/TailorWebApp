import { Dialog, DialogTitle } from "@mui/material";
import ShareWorkButton from "../../shared/button/ShareWorkBtn";

type QUestionModalProp = {
  isOpen: boolean;
  onClose?: () => void;
};

const QuestionModal = ({ isOpen, onClose }: QUestionModalProp) => {
  return (
    <Dialog
      open={isOpen}
      maxWidth="xs"
      style={{
        borderRadius: "20px",
        marginTop: "50px"
      }}
      className="flex flex-col gap-2 rounded-12 py-10"
    >
      <DialogTitle className="text-20 text-black font-extrabold text-center">
        Are you sure you want to close
      </DialogTitle>

      <div className="flex px-16 flex-col gap-4 pb-2">
        <p className="text-center text-15 text-grey200">
          Your progress will not be saved if you close without saving
        </p>

        <div className="flex flex-col items-center justify-center gap-2">
          <ShareWorkButton className="text-white w-[200px]">
            Save to draft
          </ShareWorkButton>

          <p>
            <button className="text-red-600" onClick={onClose}>
              Close
            </button>
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default QuestionModal;
