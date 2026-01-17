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
      <MaxWidthWrapper className="flex items-center gap-16">
        <div className="flex flex-col items-start justify-center gap-3 w-full">
          <Badge>Tentang Mayoblox</Badge>
          <GradientText as="h3" className="text-[40px] leading-13">
            Butuh bantuan cepat atau pertanyaan? <br /> kirimkan pesan kamu
            dibawah
          </GradientText>
        </div>

        <div className="font-jakarta-sans text-right max-w-[400px] text-brand-dark-300 font-normal text-[16px]">
          Nikmati pengalaman top up yang simpel dan super cepat. Kelola
          kebutuhan Robux kamu hanya dengan beberapa klik—praktis, aman, dan
          cocok untuk gaya hidup kamu yang serba ngebut.
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div className="grid grid-rows-2 grid-cols-2 gap-6 relative">
          {/* First Bento */}
          <div className="row-span-2 relative overflow-hidden rounded-3xl">
            <Image
              src="/about/bento-bg.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              fill
            />

            <div className="flex flex-col items-center justify-center gap-14 leading-19 h-full p-10 ">
              <GradientTextStroke className="text-[88px] leading-19">
                STATISTIK <br /> MAYOBLOX
              </GradientTextStroke>

              <GradientButton variant="primary" className="w-[342px] h-[84px]">
                Top Up Robux Sekarang
              </GradientButton>
            </div>
          </div>

          {/* Second Bento */}
          <div className="bg-brand-gradient-primary rounded-3xl p-10 flex items-center gap-8 h-full">
            <Image
              src="/about/flower-token.png"
              alt=""
              width={120}
              height={120}
              className="shrink-0 w-[120px] h-[120px]"
            />

            <div className="flex flex-col gap-3 items-center justify-center">
              <p className="font-chillax font-semibold text-[28px] leading-8 text-brand-white-100 shrink-0">
                Robux Terjual di Mayoblox
              </p>
              <GradientTextStroke
                className="text-[56px] leading-[56px]"
                gradientClass="bg-primary"
              >
                73.703.644 R$
              </GradientTextStroke>
            </div>
          </div>

          {/* Third Bento */}
          <div className="bg-tertiary rounded-3xl h-[200px] p-10 flex flex-col items-center justify-center gap-6 h-full">
            <GradientTextStroke className="text-[88px] leading-19">
              268.190
            </GradientTextStroke>

            <p className="font-chillax font-semibold text-[28px] leading-8 text-primary">
              Total Order Sobat Mayo
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
