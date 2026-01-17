"use client";

import AutoSwiper from "@/components/auto-swipper";
import Badge from "@/components/badge";
import FeatureCard from "@/components/feature-card";
import GradientButton from "@/components/gradient-button";
import GradientText from "@/components/gradient-text";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";

const PRODUCT_NEWEST_SOLD_ITEMS = Array.from({ length: 10 }, () => ({
  icon: "/products/mayo-with-glass.png",
  label: "1053 R$",
  price: "Rp.144.261",
}));

export default function SectionProductNewestSold() {
  return (
    <section className="space-y-6">
      <MaxWidthWrapper className="flex items-center justify-between">
        <div className="flex items-center gap-[24px]">
          <Image
            src="/products/mayo-newest-sold.png"
            alt=""
            width={249}
            height={269}
            className="shrink-0 w-[249px] h-[269px] relative bottom-9"
          />

          <div className="flex flex-col gap-[16px]">
            <Badge>Tentang Mayoblox</Badge>
            <GradientText
              as="h3"
              className="text-[40px] leading-13 tracking-[1%]"
            >
              Item baru saja terjual
            </GradientText>
            <p className="font-jakarta-sans font-normal text-[16px] tracking-[1%] leading-6.5 text-brand-dark-400">
              Produk yang baru saja terjual
            </p>
          </div>
        </div>

        <GradientButton
          variant="primary"
          className="h-[72px] text-[20px] py-[24px] tracking-[-2%] leading-[26px]"
        >
          Kirim Pesan Bantuan
        </GradientButton>
      </MaxWidthWrapper>

      <AutoSwiper
        items={PRODUCT_NEWEST_SOLD_ITEMS}
        renderItem={(product) => (
          <FeatureCard
            radius="full"
            className="p-[12px] flex items-center gap-6 w-[302px] h-[88px]"
          >
            <div className="bg-[linear-gradient(141.23deg,#FFE1E8_-1.96%,#FF7797_95.64%)] rounded-full size-16 overflow-hidden">
              <Image
                src={product.icon}
                alt=""
                width={64}
                height={64}
                className="shrink-0 size-22 object-cover object-center relative bottom-2.5"
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-chillax font-semibold text-[28px] leading-[32px] tracking-[1%] text-primary">
                {product.label}
              </p>

              <p className="font-chillax font-light text-[18px] leading-[24px] tracking-[-1%] text-brand-dark-400">
                Sold for{" "}
                <span className="font-semibold text-brand-dark-400/70">
                  {product.price}
                </span>
              </p>
            </div>
          </FeatureCard>
        )}
      />
    </section>
  );
}
