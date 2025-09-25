"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type Toast = { id: number; title?: string; message: string; variant?: "success" | "error" };

type ToastContextValue = {
  showSuccess: (message: string, title?: string) => void;
  showError: (message: string, title?: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within Toaster");
  return ctx;
}

export function Toaster({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const remove = useCallback((id: number) => setToasts((t) => t.filter((x) => x.id !== id)), []);
  const push = useCallback((variant: Toast["variant"], message: string, title?: string) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setToasts((t) => [...t, { id, message, title, variant }]);
    setTimeout(() => remove(id), 3500);
  }, [remove]);

  const value = useMemo<ToastContextValue>(() => ({
    showSuccess: (message, title) => push("success", message, title),
    showError: (message, title) => push("error", message, title),
  }), [push]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] space-y-2">
        {toasts.map((t) => (
          <div key={t.id} className={`rounded-2xl shadow-md px-4 py-3 text-sm ${t.variant === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
            {t.title && <div className="font-medium mb-0.5">{t.title}</div>}
            <div>{t.message}</div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}


