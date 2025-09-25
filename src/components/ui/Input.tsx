import { InputHTMLAttributes, forwardRef } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(function InputBase({ className = "", ...props }, ref) {
  return (
    <input
      ref={ref}
      className={`w-full rounded-2xl border border-z-silver/40 bg-white px-3 py-2 text-z-ink placeholder-z-ink/40 focus:outline-none focus:ring-2 focus:ring-z-gold/40 ${className}`}
      {...props}
    />
  );
});

export default Input;


