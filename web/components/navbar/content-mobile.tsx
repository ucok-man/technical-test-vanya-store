import { cn } from "@/lib/utils";
import Image from "next/image";
import Icons from "../icons";

type Props = {
  className?: string;
};

export default function ContentMobile({ className }: Props) {
  return (
    <div className={cn("flex w-full gap-1.5 items-center", className)}>
      <Icons.burger className="fill-transparent stroke-primary size-5 hover:stroke-primary/85 cursor-pointer shrink-0" />
      <div className="min-[320px]:hidden shrink-0">
        <Image
          src={"/logo-small.png"}
          alt="Mayobox Logo"
          width={2160}
          height={1576}
          className="w-24 h-19 object-center object-fill"
        />
      </div>
    </div>
  );
}
