import Image from "next/image";
import Icons from "../icons";
import MaxWidthWrapper from "../max-width-wrapper";
import ContentDesktop from "./content-desktop";
import ContentMobile from "./content-mobile";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full font-chillax font-semibold tracking-tight px-6 z-50">
      <MaxWidthWrapper className="overflow-hidden rounded-b-5xl border border-brand-white-200 px-0 shadow-brand-glass">
        <div className="relative flex w-full items-center gap-6 py-3 px-6 md:px-12 lg:px-12 bg-brand-white-100 h-20 backdrop-blur-[100px]">
          <div className="absolute left-1/2 -translate-x-1/2 max-[320px]:hidden">
            <Image
              src={"/logo-small.png"}
              alt="Mayobox Logo"
              width={2160}
              height={1576}
              className="w-24 md:w-28 h-19 object-center object-fill"
            />
          </div>

          <ContentDesktop className="hidden lg:flex" />
          <ContentMobile className="flex lg:hidden" />

          <div className="flex items-center gap-6">
            <Icons.cart className="fill-transparent stroke-primary size-5 hover:stroke-primary/85 cursor-pointer" />
            <Icons.search className="fill-transparent stroke-primary size-5.5 hover:stroke-primary/85 cursor-pointer" />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
