import Image from "next/image";
import Link from "next/link";
import Icons from "../icons";
import MaxWidthWrapper from "../max-width-wrapper";

const LINK_ITEMS = ["Robux", "Gamepass PO", "Item Roblox", "Game Lainya"];

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Background Image */}
      <div className="w-full relative h-[250px] md:h-[500px]">
        <Image
          src={"/footer-background.png"}
          alt=""
          sizes="100vw"
          fill
          className="object-center object-cover"
        />
      </div>

      {/* Content */}
      <div className="bg-primary pt-24 pb-10 relative z-10 -mt-10 md:-mt-20">
        <MaxWidthWrapper className="px-4 sm:px-6 lg:px-8 font-jakarta-sans font-medium text-brand-white-100 space-y-16">
          {/* Top Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {/* About / Socials */}
            <div className="text-sm flex flex-col gap-6 text-left">
              <p className="leading-relaxed text-white/90">
                Mayoblox pilihan nomor satu untuk jadi teman robloxmu! Kebutuhan
                roblox apapun pasti ada di Mayoblox!
              </p>

              <div className="flex items-center justify-start gap-2">
                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className="p-3 border border-white/80 rounded-full hover:bg-white hover:text-primary transition"
                  >
                    <Icons.instagram className="size-3" />
                  </div>
                ))}
              </div>
            </div>

            {/* Produk */}
            <div className="flex flex-col gap-4">
              <h5 className="font-chillax font-semibold text-lg">Produk</h5>
              <div className="flex flex-col gap-3 text-sm">
                {LINK_ITEMS.map((item, idx) => (
                  <Link href={"#"} key={idx} className="cursor-pointer">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Item Roblox */}
            <div className="flex flex-col gap-4">
              <h5 className="font-chillax font-semibold text-lg">
                Item Roblox
              </h5>
              <div className="flex flex-col gap-3 text-sm">
                {LINK_ITEMS.map((item, idx) => (
                  <Link href={"#"} key={idx} className="cursor-pointer">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Informasi */}
            <div className="flex flex-col gap-4">
              <h5 className="font-chillax font-semibold text-lg">Informasi</h5>
              <div className="flex flex-col gap-3 text-sm">
                {LINK_ITEMS.map((item, idx) => (
                  <Link href={"#"} key={idx} className="cursor-pointer">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Kontak Kami */}
            <div className="flex flex-col gap-4">
              <h5 className="font-chillax font-semibold text-lg">
                Kontak Kami
              </h5>
              <div className="flex flex-col gap-3 text-sm">
                {LINK_ITEMS.map((item, idx) => (
                  <Link href={"#"} key={idx} className="cursor-pointer">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h5 className="font-chillax font-semibold text-base md:text-center">
              Hak Cipta © 2025 Mayoblox.
            </h5>

            <p className="text-left md:text-center text-sm  leading-relaxed text-white/90 text-pretty">
              Mayoblox.com merupakan platform independen yang ditujukan bagi
              komunitas pemain Roblox yang ingin melakukan jual beli item dengan
              cara yang aman, praktis, dan nyaman. Kami tidak memiliki afiliasi
              atau hubungan resmi dengan Roblox Corporation. Seluruh merek
              dagang dan hak cipta tetap menjadi milik masing-masing pemiliknya.
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </footer>
  );
}
