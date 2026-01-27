import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";

type ReusableModalProps = {
  isOpen?: boolean;
  onClose: () => void;
};

const ReusableModal = ({ isOpen, onClose }: ReusableModalProps) => {
  return (
    <Dialog open={isOpen ?? false} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle className="flex justify-end pb-0 border-8 border-red-700">
        <span className="sr-only">Delete Confirmation</span>

        <IconButton
          onClick={onClose}
          onKeyDown={(e) => e.key === "Enter" && onClose()}
          size="small"
        >
          <p className="w-14 h-14">X</p>
          {/* <img
            src={closeIcon}
            alt="Close"
            className="w-[24px] h-[24px] cursor-pointer "
          /> */}
        </IconButton>
      </DialogTitle>

      <DialogContent className="flex flex-col items-center text-center px-6 pb-0">
        <div className=" p-3 mb-4"></div>
        <h2 className="font-nonbureauex text-20 font-bold text-neutralBlack mb-2">
          title
        </h2>
        <p className="font-nonbureau text14 font medium  mb-2">description</p>

        <textarea
          className="border border-gray-300 rounded-md w-full p-2 text-sm mt-2 ouline-none"
          rows={3}
          placeholder="Enter reason..."
          //   value={reason}
          //   onChange={(e) => onReasonChange?.(e.target.value)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ReusableModal;
