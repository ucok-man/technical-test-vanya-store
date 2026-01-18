"use client";

import Badge from "@/components/badge";
import FeatureCard from "@/components/feature-card";
import GradientButton from "@/components/gradient-button";
import GradientText from "@/components/gradient-text";
import Icons from "@/components/icons";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";

const PRODUCT_BEST_SELLER_ITEMS = Array.from({ length: 5 }, () => ({
  icon: "/products/sky-people.png",
  label: "Search & Rescue",
  priceIDN: "Rp. 22,000",
  priceBRL: "R$ 1053",
  sold: 100,
}));

export default function SectionProductBestSeller() {
  return (
    <section className="space-y-10">
      <MaxWidthWrapper className="flex items-center justify-between">
        <div className="flex items-center gap-[24px]">
          <Image
            src="/products/mayo-best-seller.png"
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
              Produk Item Best Seller
            </GradientText>
            <p className="font-jakarta-sans font-normal text-[16px] tracking-[1%] leading-6.5 text-brand-dark-400">
              Produk favorit Sobat Mayo
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

      <MaxWidthWrapper className="grid grid-cols-5">
        {PRODUCT_BEST_SELLER_ITEMS.map((item, idx) => (
          <FeatureCard
            key={idx}
            radius={"xxxl"}
            className="flex flex-col items-center justify-center gap-3 py-6 px-6 w-[256px]"
          >
            <div className="p-2.25 bg-[linear-gradient(141.23deg,#FFE1E8_-1.96%,#FF7797_95.64%)] rounded-full size-41 overflow-hidden">
              <Image
                src={item.icon}
                alt=""
                width={962}
                height={954}
                className="shrink-0 size-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <h4 className="font-chillax font-semibold text-[20px] leading-[26px] tracking-[-2%] text-brand-dark-500">
                {item.label}
              </h4>

              <div className="w-full h-px bg-brand-primary-200" />

              <div className="flex flex-col items-start justify-center gap-[6px] w-full">
                <p className="text-primary font-chillax font-semibold text-[14px] leading-[20px] tracking-[1%]">
                  {item.priceBRL} .{" "}
                  <span className="text-brand-dark-500">
                    {item.sold}x Terjual
                  </span>
                </p>

                <p className="font-chillax font-semibold text-[28px] leading-[32px] tracking-[1%] text-primary">
                  {item.priceIDN}
                </p>
              </div>
            </div>

            <div className="flex justify-start items-center gap-1 w-full">
              <GradientButton
                variant="primary"
                className="py-[14px] px-[24px] text-[16px] leading-[24px] tracking-[0.5%] shrink-0 relative right-1"
              >
                Beli Sekarang
              </GradientButton>
              <GradientButton
                variant="secondary"
                className="py-3 px-3 w-[52px] h-[52px] shrink-0"
              >
                <Icons.cart className="fill-transparent stroke-brand-white-100 size-5" />
              </GradientButton>
            </div>
          </FeatureCard>
        ))}
      </MaxWidthWrapper>
    </section>
  );
}
