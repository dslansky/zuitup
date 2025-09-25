import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  variant?: "subtle" | "solid";
};

export default function Badge({ variant = "subtle", className = "", ...props }: Props) {
  const base = "inline-flex items-center rounded-full text-xs px-3 py-1";
  const variants = {
    subtle: "bg-z-ink/5 text-z-navy",
    solid: "bg-z-gold text-z-ink",
  } as const;
  return <span className={`${base} ${variants[variant]} ${className}`} {...props} />;
}


