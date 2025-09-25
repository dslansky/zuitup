"use client";

import { ReactNode, useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export default function Drawer({ open, onClose, title, children }: Props) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  return (
    <div className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-full sm:w-[480px] bg-z-cream border-l border-z-silver/30 rounded-l-2xl shadow-xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 border-b border-z-silver/30 flex items-center justify-between">
          <h3 className="font-serif text-lg text-z-navy">{title}</h3>
          <button onClick={onClose} className="text-z-ink/60 hover:text-z-navy">Close</button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-56px)]">{children}</div>
      </div>
    </div>
  );
}


