"use client";

import AutoSwiper from "@/components/auto-swipper";
import Badge from "@/components/badge";
import GradientButton from "@/components/gradient-button";
import GradientText from "@/components/gradient-text";
import Icons from "@/components/icons";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";

const TESTIMONI_ITEMS = Array.from({ length: 5 }, () => ({
  image: "/black-hair-boy.png",
  username: "Windah",
  city: "Pekanbaru",
  testimoni:
    "Harga yang kompetitif, Testimoni dan bukti Transaksi, pilihan metode pembayaran bermacam dan memudahkan pembeli, proses transaksi yang mudah",
  icon: "/mayo-testimoni-icon.png",
}));

export default function SectionTestimonial() {
  return (
    <section className="space-y-34 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between">
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

      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-[32px]">
        <div className="flex flex-col items-center justify-center gap-3">
          <Badge>Tentang Mayoblox</Badge>
          <GradientText
            as="h3"
            className="text-[56px] leading-[56px] tracking-[1%]"
          >
            Apa kata SobatMayo
          </GradientText>
        </div>
        <p className="font-jakarta-sans font-normal text-[16px] tracking-[1%] leading-6 text-brand-dark-400 w-[457px] text-center">
          Mayoblox pilihan nomor satu untuk jadi teman robloxmu! Kebutuhan
          roblox apapun pasti ada di Mayoblox!
        </p>

        <GradientButton
          variant="primary"
          className="w-100 py-4 px-8 text-2xl tracking-[-2%]"
        >
          <span className="flex items-center justify-center gap-3">
            <Icons.video className="size-12" />
            <span>Lihat Video Testimoni</span>
          </span>
        </GradientButton>
      </MaxWidthWrapper>

      <AutoSwiper
        items={TESTIMONI_ITEMS}
        spaceBetween={32}
        className="overflow-visible!"
        renderItem={(item) => (
          <div className="relative p-6 border-gradient-primary border-g-1 rounded-4xl bg-brand-white-100 shadow w-[514px]">
            <div className="flex items-start gap-6">
              <div className="relative rounded-full overflow-hidden border border-primary size-16 shrink-0">
                <Image src={item.image} alt="" fill />
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="flex items-center gap-3 font-chillax font-semibold">
                  <span className="text-primary text-2xl">
                    @{item.username}
                  </span>
                  <span>-</span>
                  <span className="text-brand-dark-400/75 text-lg">
                    {item.city}
                  </span>
                </h4>

                <p className="font-jakarta-sans font-normal italic text-brand-dark-400 text-pretty">
                  {item.testimoni}
                </p>
              </div>
            </div>

            <div className="absolute -top-12 -right-4">
              <div className="relative size-32 rotate-9">
                <Image src={item.icon} alt="" fill />
              </div>
            </div>
          </div>
        )}
      />
    </section>
  );
}
