import { TextareaHTMLAttributes, forwardRef } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(function TextareaBase({ className = "", ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={`w-full rounded-2xl border border-z-silver/40 bg-white px-3 py-2 text-z-ink placeholder-z-ink/40 focus:outline-none focus:ring-2 focus:ring-z-gold/40 ${className}`}
      {...props}
    />
  );
});

export default Textarea;


