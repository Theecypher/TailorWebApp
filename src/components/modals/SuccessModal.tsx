import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { img } from "../../constant";
import ShareWorkButton from "../../shared/button/ShareWorkBtn";

type SuccessModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  successImg?: boolean;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  //   p: 4,
};

export default function SuccessModal({
  onClose,
  isOpen,
  successImg,
}: SuccessModalProps) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          borderRadius: "20",
          outline: 0,
        }}
      >
        <Box sx={style}>
          {successImg && (
            <img className="w-full" src={img.hurray} alt="Congratulations" />
          )}

          <div className="px-4 text-center flex flex-col gap-2">
            <h2 className="font-bold text-22 ">Hurray!!!</h2>

            <p className="text-16 font-normal">
              You have uploaded your project successfully
            </p>
            <div className="flex w-full flex-col gap-2 mt-2">
              <ShareWorkButton className="w-full" onClick={onClose}>Dismiss</ShareWorkButton>
              <ShareWorkButton className="bg-transparent w-full">
                Share
              </ShareWorkButton>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
