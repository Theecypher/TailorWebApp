import { useState } from "react";

export type ToastType = "success" | "failed" | "info" | "warning" | "error";

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

export interface ToastOptions {
  message: string;
  type?: ToastType;
  duration?: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = (id: number): void => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const addToast = ({
    message,
    type = "info",
    duration = 3000,
  }: ToastOptions): void => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  return { toasts, addToast, removeToast };
};
