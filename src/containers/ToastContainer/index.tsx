import type { Toast } from "../../hooks/ToasterHook";

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: number) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  return (
    <div className="fixed top-[20px] bg-black right=[20px] z-50">
      {toasts.map((toast: any) => (
        <div
          key={toast.id}
          onClick={() => onRemove(toast.id)}
          className="px-[16px] py-[12px] rounded-sm text-white cursor-pointer min-[200px] shadow-sm"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};
