import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "rounded-xl px-4 py-3 text-sm font-medium transition-all active:scale-95";

  const styles = {
    primary: "bg-black text-white hover:opacity-90",
    secondary: "border hover:bg-gray-100",
    ghost: "hover:bg-gray-100"
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
