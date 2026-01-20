import GradientButton from "@/components/gradient-button";
import GradientTextStroke from "@/components/gradient-text-stroke";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function SectionHero() {
  return (
    <section>
      <div className="relative h-screen min-h-[580px]">
        {/* Background image */}
        <Image
          src="/hero-bg.png"
          alt="Hero background"
          quality={95}
          fill
          className="absolute inset-0 size-full object-cover object-[center_62%]"
        />

        {/* bottom fade overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,1) 10%, rgba(0,0,0,0) 100%)",
            backdropFilter: "blur(1px)",
          }}
        />

        {/* Bubble Left */}
        <div className="absolute md:size-[120px] lg:size-[160px] xl:size-[200px] xl:left-[18%] xl:top-[16%] lg:top-[30%] lg:left-[16%] md:top-[38%] md:left-[17%] min-[420px]:top-[45%] top-[30%] min-[625px]:left-[15%] min-[490px]:left-[7%] left-[0%]">
          <Image
            src={"/hero/bubble-token.png"}
            alt=""
            width={130}
            height={135}
            className="size-full object-cover object-center shrink-0"
          />
        </div>

        {/* Bubble Right */}
        <div className="absolute size-[120px] sm:size-[140px] md:size-[180px] lg:size-[220px] xl:size-[260px] xl:right-[14%] xl:top-[15%] lg:right-[14%] lg:top-[24%] md:right-[14%] md:top-[32%] min-[420px]:top-[42%] top-[30%] min-[625px]:right-[14%] min-[490px]:right-[7%] right-0">
          <Image
            src={"/hero/bubble-money.png"}
            alt=""
            width={281}
            height={279}
            className="size-full object-cover object-center shrink-0"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full -mt-[92%] min-[360px]:-mt-[80%] min-[480px]:-mt-[52%] min-[860px]:-mt-[40%] min-[1145px]:-mt-[35%] min-[1280px]:-mt-[32%] min-[1375px]:-mt-[30%] min-[1500px]:-mt-[27%]">
        <MaxWidthWrapper className="flex flex-col items-center xl:items-start justify-center gap-6">
          <GradientTextStroke className="z-10 text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[100%] text-center xl:text-left">
            Mayoblox <br /> Sahabat Robloxmu
          </GradientTextStroke>

          <div className="flex items-center justify-center xl:justify-between w-full z-10">
            <FeatureGroup />
            <ButtonGroup className="hidden xl:block" />
          </div>

          <div className="flex flex-col items-center xl:items-start text-center xl:text-left gap-3 z-10">
            <h3 className="font-cherry-bomb text-primary text-2xl sm:text-3xl lg:text-4xl">
              Pilih layanan yang kamu butuhkan
            </h3>
            <p className="font-jakarta-sans tracking-wide text-brand-dark-500 font-normal text-sm md:text-base">
              Berbagai layanan terbaik untuk kebutuhan Robloxmu
            </p>
          </div>

          <div className="block xl:hidden">
            <ButtonGroup />
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}

function ButtonGroup({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-5", className)}>
      <GradientButton
        variant="primary"
        className="text-base sm:text-xl  xl:text-2xl xl:w-[406px] xl:py-6"
      >
        Top Up Robux{" "}
        <span className="hidden min-[320px]:inline-block">Sekarang</span>
      </GradientButton>

      <GradientButton
        variant="secondary"
        className="text-base sm:text-xl  xl:text-2xl xl:w-[406px] xl:py-6"
      >
        Cek Pesanan{" "}
        <span className="hidden min-[320px]:inline-block">Di Sini</span>
      </GradientButton>
    </div>
  );
}

function FeatureGroup({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8", className)}>
      {/* Card 1 */}
      <div className="border-gradient-primary border-g-1 bg-brand-primary-50 rounded-2xl sm:rounded-3xl p-2 sm:p-4 flex flex-col justify-center items-center gap-1 w-full aspect-[191/219] h-full">
        <Link href="#" className="flex items-center">
          <Image
            src="/hero/instagram.png"
            alt=""
            width={40}
            height={40}
            className="size-0 min-[380px]:size-6 sm:size-8 lg:size-10 shrink-0"
          />
          <Image
            src="/hero/mayo-akun.png"
            alt=""
            width={119}
            height={75}
            className="w-16 sm:w-20 lg:w-28 shrink-0"
          />
        </Link>

        <Link href="#" className="flex items-center">
          <Image
            src="/hero/instagram.png"
            alt=""
            width={40}
            height={40}
            className="size-0 min-[380px]:size-6 sm:size-8 lg:size-10 shrink-0"
          />
          <Image
            src="/hero/bocil-mayo.png"
            alt=""
            width={119}
            height={75}
            className="w-16 sm:w-20 lg:w-28 shrink-0"
          />
        </Link>
      </div>

      {/* Card 2 */}
      <div className="border-gradient-primary border-g-1 bg-brand-primary-50 rounded-2xl sm:rounded-3xl p-2 sm:p-4 flex flex-col items-center gap-1 w-full aspect-[191/219] h-full">
        <div className="relative w-full h-[60px] sm:h-[90px] lg:h-[135px]">
          <Image
            src="/hero/bocil-mayo-gray.png"
            alt=""
            width={172}
            height={95}
            className="absolute inset-0 m-auto w-[75%]"
          />
          <Image
            src="/hero/top-up-gray.png"
            alt=""
            width={159}
            height={107}
            className="absolute inset-0 m-auto w-[70%]"
          />
        </div>

        <Link
          href="#"
          className="font-chillax font-bold text-primary text-[10px] sm:text-sm lg:text-lg text-center tracking-tight"
        >
          Top Up Robux
        </Link>
      </div>

      {/* Card 3 */}
      <div className="border-gradient-primary border-g-1 bg-brand-primary-50 rounded-2xl sm:rounded-3xl p-2 sm:p-4 flex flex-col items-center gap-1 w-full aspect-[191/219] h-full">
        <div className="relative w-full h-[60px] sm:h-[90px] lg:h-[135px]">
          <Image
            src="/hero/bocil-mayo-gray.png"
            alt=""
            width={172}
            height={95}
            className="absolute inset-0 m-auto w-[75%]"
          />
          <Image
            src="/hero/top-up-gray.png"
            alt=""
            width={159}
            height={107}
            className="absolute inset-0 m-auto w-[70%]"
          />
        </div>

        <Link
          href="#"
          className="font-chillax font-bold text-primary text-[10px] sm:text-sm lg:text-lg text-center tracking-tight"
        >
          Top Up Robux
        </Link>
      </div>
    </div>
  );
}
