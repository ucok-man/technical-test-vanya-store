"use client";

import Badge from "@/components/badge";
import GradientButton from "@/components/gradient-button";
import GradientText from "@/components/gradient-text";
import GradientTextStroke from "@/components/gradient-text-stroke";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";

export default function SectionAbout() {
  return (
    <section className="space-y-16">
      <MaxWidthWrapper className="flex flex-col xl:flex-row items-center justify-between gap-6">
        <header className="flex flex-col items-center xl:items-start justify-center gap-3">
          <Badge>Tentang Mayoblox</Badge>
          <GradientText className="text-4xl md:text-5xl text-center xl:text-left leading-[115%]">
            Butuh bantuan cepat atau pertanyaan? <br /> kirimkan pesan kamu
            dibawah
          </GradientText>
        </header>

        <div className="font-jakarta-sans text-center xl:text-right max-w-sm text-brand-dark-300 font-normal text-sm md:text-base">
          Nikmati pengalaman top up yang simpel dan super cepat. Kelola
          kebutuhan Robux kamu hanya dengan beberapa klik—praktis, aman, dan
          cocok untuk gaya hidup kamu yang serba ngebut.
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 lg:gap-6 relative">
          {/* First Bento */}
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl md:row-span-2 min-h-[360px] md:min-h-full">
            <Image
              src="/about/bento-bg.png"
              alt=""
              fill
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="relative z-10 flex flex-col items-center justify-center gap-8 md:gap-14 h-full p-6 md:p-10 text-center">
              <GradientTextStroke className="text-[clamp(40px,6vw,88px)] leading-[105%]">
                STATISTIK <br /> MAYOBLOX
              </GradientTextStroke>

              <GradientButton
                variant="primary"
                className="w-full max-w-85 h-18 md:h-20"
              >
                Top Up Robux{" "}
                <span className="hidden min-[320]:inline-block">Sekarang</span>
              </GradientButton>
            </div>
          </div>

          {/* Second Bento */}
          <div className="bg-brand-gradient-primary rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-center items-center gap-6 h-full text-center md:text-left">
            <Image
              src="/about/flower-token.png"
              alt=""
              width={120}
              height={120}
              className="shrink-0 w-[70px] h-[70px] md:w-[120px] md:h-[120px]"
            />

            <div className="flex flex-col gap-2 md:gap-3 items-center md:items-start">
              <p className="font-chillax font-semibold text-xl sm:text-2xl md:text-2xl leading-tight text-brand-white-100">
                Robux Terjual di Mayoblox
              </p>

              <GradientTextStroke
                className="text-[clamp(28px,4vw,56px)] leading-tight"
                gradientClass="bg-primary"
              >
                73.703.644 R$
              </GradientTextStroke>
            </div>
          </div>

          {/* Third Bento */}
          <div className="bg-tertiary rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col items-center justify-center gap-4 md:gap-6 h-full">
            <GradientTextStroke className="text-[clamp(40px,6vw,88px)] leading-tight">
              268.190
            </GradientTextStroke>

            <p className="font-chillax font-semibold text-xl sm:text-2xl md:text-2xl leading-tight text-primary text-center">
              Total Order Sobat Mayo
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
