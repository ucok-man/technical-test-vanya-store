import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ElementType, ReactNode } from "react";

const textVariants = cva(
  "tracking-normal text-transparent font-normal font-cherry-bomb"
);

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  strokeWidth?: number;
  gradientClass?: string;
} & VariantProps<typeof textVariants>;

export default function GradientTextStroke<T extends ElementType = "h1">({
  as,
  children,
  className,
  strokeWidth = 10,
  gradientClass = "bg-brand-gradient-primary",
}: Props<T>) {
  const Component = as || "h1";

  const textClass = cn(textVariants(), className);

  return (
    <div className="relative inline-block">
      {/* Stroke layer (hidden from screen readers) */}
      <Component
        aria-hidden
        className={cn("absolute inset-0", textClass)}
        style={{
          WebkitTextStroke: `${strokeWidth}px white`,
        }}
      >
        {children}
      </Component>

      {/* Fill layer */}
      <Component
        className={cn("relative bg-clip-text", gradientClass, textClass)}
      >
        {children}
      </Component>
    </div>
  );
}
