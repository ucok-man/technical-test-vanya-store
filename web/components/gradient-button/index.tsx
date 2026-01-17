import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Variant = "primary" | "secondary";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
};

const VARIANT_STYLES: Record<
  Variant,
  {
    base: string;
    hover: string;
    shadow: string;
  }
> = {
  primary: {
    base: "bg-brand-gradient-primary",
    hover: "bg-brand-gradient-primary-hover",
    shadow: "shadow-button-primary",
  },
  secondary: {
    base: "bg-brand-gradient-secondary",
    hover: "bg-brand-gradient-secondary-hover",
    shadow: "shadow-button-secondary",
  },
};

export default function GradientButton({
  children,
  variant = "primary",
  className,
  type = "button", // ✅ important default
  ...props
}: Props) {
  const styles = VARIANT_STYLES[variant];

  return (
    <button
      type={type}
      {...props}
      className={cn(
        "group relative overflow-hidden rounded-full",
        "py-7 px-8 flex items-center justify-center gap-3",
        "font-chillax text-brand-white-100 font-semibold text-[24px] leading-8 tracking-tight",
        "border-2 border-brand-white-100/15",
        className
      )}
    >
      {/* Base gradient */}
      <span
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          styles.base
        )}
      />

      {/* Hover gradient */}
      <span
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          styles.hover,
          styles.shadow
        )}
      />

      {/* Content */}
      <span className="relative">{children}</span>
    </button>
  );
}
