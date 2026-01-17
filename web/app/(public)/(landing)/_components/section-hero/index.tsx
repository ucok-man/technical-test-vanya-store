/* eslint-disable @next/next/no-img-element */
import FeatureCard from "@/components/feature-card";
import GradientButton from "@/components/gradient-button";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import StrokeGradientText from "@/components/stroke-gradient-text";
import Image from "next/image";
import Link from "next/link";

export default function SectionHero() {
  return (
    <section className="relative h-screen">
      {/* Background image */}
      <img
        src="/hero-bg.png"
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover object-[center_62%]"
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
      <div className="absolute size-[200px] left-[19%] top-[17%]">
        <Image
          src={"/hero/bubble-token.png"}
          alt=""
          width={130}
          height={135}
          className="size-full object-cover object-center shrink-0"
        />
      </div>

      {/* Bubble Right */}
      <div className="absolute size-[280px] right-[14%] top-[15%]">
        <Image
          src={"/hero/bubble-money.png"}
          alt=""
          width={281}
          height={279}
          className="size-full object-cover object-center shrink-0"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full py-8">
        <MaxWidthWrapper className="space-y-7.5">
          <StrokeGradientText className="text-[88px] leading-19 tracking-normal">
            Mayoblox <br /> Sahabat Robloxmu
          </StrokeGradientText>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <FeatureCard>
                <div className="p-4 flex flex-col justify-center items-center gap-1 w-[191px] h-[219px]">
                  <Link href="#" className="flex items-center">
                    <Image
                      src="/hero/instagram.png"
                      alt=""
                      width={40}
                      height={40}
                      className="size-10 shrink-0"
                    />
                    <Image
                      src="/hero/mayo-akun.png"
                      alt=""
                      width={119}
                      height={75}
                      className="w-29.75 h-18.75 shrink-0"
                    />
                  </Link>

                  <Link href="#" className="flex items-center">
                    <Image
                      src="/hero/instagram.png"
                      alt=""
                      width={40}
                      height={40}
                      className="size-10 shrink-0"
                    />
                    <Image
                      src="/hero/bocil-mayo.png"
                      alt=""
                      width={119}
                      height={75}
                      className="w-29.75 h-18.75 shrink-0"
                    />
                  </Link>
                </div>
              </FeatureCard>

              <FeatureCard>
                <div className="p-4 flex flex-col items-center gap-1 w-[191px] h-[219px]">
                  {/* image stack */}
                  <div className="relative w-full h-[135px]">
                    <Image
                      src="/hero/bocil-mayo-gray.png"
                      alt=""
                      width={172}
                      height={95}
                      className="absolute"
                    />
                    <Image
                      src="/hero/top-up-gray.png"
                      alt=""
                      width={159}
                      height={107}
                      className="absolute"
                    />
                  </div>

                  <Link
                    href="#"
                    className="flex items-center justify-center font-chillax font-bold text-primary text-center text-xl tracking-tight"
                  >
                    Top Up Robux
                  </Link>
                </div>
              </FeatureCard>

              <FeatureCard>
                <div className="p-4 flex flex-col items-center gap-1 w-[191px] h-[219px]">
                  {/* image stack */}
                  <div className="relative w-full h-[135px]">
                    <Image
                      src="/hero/bocil-mayo-gray.png"
                      alt=""
                      width={172}
                      height={95}
                      className="absolute"
                    />
                    <Image
                      src="/hero/top-up-gray.png"
                      alt=""
                      width={159}
                      height={107}
                      className="absolute"
                    />
                  </div>

                  <Link
                    href="#"
                    className="flex items-center justify-center font-chillax font-bold text-primary text-center text-xl tracking-tight"
                  >
                    Top Up Robux
                  </Link>
                </div>
              </FeatureCard>
            </div>

            <div className="space-y-5">
              <GradientButton variant="primary" className="w-[406px]">
                Top Up Robux Sekarang
              </GradientButton>

              <GradientButton variant="secondary" className="w-[406px]">
                Cek Pesanan Di Sini
              </GradientButton>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-cherry-bomb text-primary text-[32px] leading-8">
              Pilih layanan yang kamu butuhkan
            </h3>
            <p className="font-jakarta-sans leading-6 tracking-wide text-brand-dark-500 font-normal tracking-wide">
              Berbagai layanan terbaik untuk kebutuhan Robloxmu
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
