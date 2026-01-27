import { createContext, useContext, useState, type ReactNode } from "react";
import { clsx } from "clsx";

type PostionProp = "top-right" | "top-left" | "bottom-left" | "bottom-right";

type Toast = {
  id: number;
  message: string;
  type?: "success" | "error" | "warning";
  position?: PostionProp;
};
type ToastContextType = {
  toasts: Toast[];
  addToast: (
    message: string,
    type?: "success" | "error" | "warning",
    position?: PostionProp
  ) => void;
  removeToast: (id: number) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (
    message: string,
    type?: "success" | "error" | "warning",
    position?: PostionProp
  ) => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type, position }]);
    setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id: number) => {
    setToasts((toasts) => toasts.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}

      <div className="">
        {toasts.map((t) => (
          <div className="fixed top-4 right-4 space-y-2 w-[200px] text-white">
            <div
              key={t.id}
              className={clsx(
                "flex items-center gap-3 p-3 rounded shadow-md", // always applied
                {
                  "bg-green-600": t.type === "success",
                  "bg-red-700": t.type === "error",
                  "bg-yellow-700": t.type === "warning",
                  "left-5 top-0": t.position === "top-left",
                }
              )}
            >
              <h2 className="capitalize">{t.message}</h2>
              <h2
                className="text-20 font-bold"
                onClick={() => removeToast(t.id)}
              >
                x
              </h2>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be aided inside ToastProvider");
  return ctx;
};
