import { cn } from "@/lib/utils";
import { ElementType, ReactNode } from "react";

type Props<T extends ElementType> = {
  children: ReactNode;
  as?: T;
  className?: string;
};

export default function GradientText<T extends ElementType>({
  children,
  as,
  className,
}: Props<T>) {
  const Component = as || "h3";

  return (
    <Component
      className={cn(
        "font-cherry-bomb text-transparent bg-clip-text bg-brand-gradient-primary",
        className
      )}
    >
      {children}
    </Component>
  );
}
