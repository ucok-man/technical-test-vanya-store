"use client";

import AutoSwiper from "@/components/auto-swipper";
import Badge from "@/components/badge";
import GradientButton from "@/components/gradient-button";
import GradientText from "@/components/gradient-text";
import Icons from "@/components/icons";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import TestimoniCard from "./testimoni-card";

const TESTIMONI_ITEMS = Array.from({ length: 5 }, () => ({
  userAvatar: "/black-hair-boy.png",
  userName: "Windah",
  userCity: "Pekanbaru",
  testimoni:
    "Harga yang kompetitif, Testimoni dan bukti Transaksi, pilihan metode pembayaran bermacam dan memudahkan pembeli, proses transaksi yang mudah",
  icon: "/mayo-testimoni-icon.png",
}));

export default function SectionTestimonial() {
  const isMD = useMediaQuery("(max-width: 768px)");

  return (
    <section className="space-y-34 relative overflow-hidden">
      <div className="absolute inset-0 hidden xl:flex xl:items-center xl:justify-between">
        <Image
          src="/products/mayo-testimonial-left.png"
          alt=""
          width={417}
          height={513}
        />
        <Image
          src="/products/mayo-testimonial-right.png"
          alt=""
          width={516}
          height={595}
        />
      </div>

      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-6">
        <header className="flex flex-col items-center justify-center gap-3">
          <Badge>Tentang Mayoblox</Badge>
          <GradientText className="text-5xl md:text-6xl leading-[115%] text-center">
            Apa kata SobatMayo
          </GradientText>
        </header>

        <p className="font-jakarta-sans font-normal text-brand-dark-400 text-center text-sm md:text-base w-full max-w-md">
          Mayoblox pilihan nomor satu untuk jadi teman robloxmu! Kebutuhan
          roblox apapun pasti ada di Mayoblox!
        </p>

        <GradientButton
          variant="primary"
          className="w-full max-w-md text-xl md:text-2xl py-2.5 sm:py-4"
        >
          <div className="flex items-center justify-center gap-3">
            <Icons.video className="size-12" />

            <p className="text-nowrap">
              <span className="min-[360px]:inline-block hidden">
                Lihat Video
              </span>{" "}
              Testimoni
            </p>
          </div>
        </GradientButton>
      </MaxWidthWrapper>

      <AutoSwiper
        items={TESTIMONI_ITEMS}
        spaceBetween={isMD ? 0 : 32}
        className="overflow-visible!"
        renderItem={(item) => <TestimoniCard {...item} />}
      />
    </section>
  );
}
