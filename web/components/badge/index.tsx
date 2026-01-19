import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ children, className }: Props) {
  return (
    <div
      className={cn(
        "py-2 px-4 uppercase rounded-4xl border border-primary flex flex-col items-center justify-center font-chillax text-xs tracking-widest font-bold bg-[#F59BB71A] text-primary w-fit text-center",
        className
      )}
    >
      {children}
    </div>
  );
}
