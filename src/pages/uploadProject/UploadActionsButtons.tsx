import { twMerge } from "tailwind-merge";
import ShareWorkButton from "../../shared/button/ShareWorkBtn";

type ActionButtonsProps = {
  onSaveDraft?: () => void;
  onContinue?: () => void;
  isSaving?: boolean;
  isSubmitting?: boolean;
  saveLabel?: string;
  continueLabel?: string;
  className?: string;
};

export const UploadActionButtons = ({
  onSaveDraft,
  onContinue,
  isSaving = false,
  isSubmitting = false,
  saveLabel = "Save as draft",
  continueLabel = "Continue",
  className = "",
}: ActionButtonsProps) => {
  return (
    <div className={twMerge("flex flex-col w-full gap-2", className)}>
      <ShareWorkButton
        className="bg-white border rounded-100 text-sm border-primary text-primary w-full"
        onClick={onSaveDraft}
        disabled={isSaving || isSubmitting}
      >
        {isSaving ? "Saving..." : saveLabel}
      </ShareWorkButton>

      <ShareWorkButton
        className="w-full text-white"
        onClick={onContinue}
        disabled={isSubmitting || isSaving}
      >
        {isSubmitting ? "Submitting..." : continueLabel}
      </ShareWorkButton>
    </div>
  );
};
