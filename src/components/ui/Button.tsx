import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export default function Button({ variant = "primary", size = "md", className = "", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-z-navy focus-visible:ring-offset-z-cream disabled:opacity-50 disabled:cursor-not-allowed";
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  } as const;
  const variants = {
    primary: "bg-z-gold text-z-ink hover:bg-z-cream",
    outline: "border border-z-ink/25 text-z-navy hover:border-z-navy bg-transparent",
    ghost: "text-z-navy hover:bg-z-ink/5",
  } as const;
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props} />
  );
}


