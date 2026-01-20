"use client";

import AutoSwiper from "@/components/auto-swipper";
import Badge from "@/components/badge";
import GradientButton from "@/components/gradient-button";
import GradientText from "@/components/gradient-text";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import NewestSoldCard from "./newest-sold-card";

const PRODUCT_NEWEST_SOLD_ITEMS = Array.from({ length: 10 }, () => ({
  icon: "/products/mayo-with-glass.png",
  label: "1053 R$",
  price: "Rp.144.261",
}));

export default function SectionProductNewestSold() {
  return (
    <section className="space-y-12">
      <MaxWidthWrapper className="flex items-center justify-between">
        <div className="flex items-center gap-6 w-full xl:w-fit">
          <Image
            src="/products/mayo-newest-sold.png"
            alt=""
            width={249}
            height={269}
            className="shrink-0 w-[249px] h-[269px] relative bottom-9 hidden xl:block"
          />

          <div className="flex flex-col xl:items-start items-center gap-6 w-full">
            <header className="flex flex-col xl:items-start items-center gap-3">
              <Badge>Item Terjual</Badge>
              <GradientText className="text-4xl md:text-5xl leading-[115%] text-center">
                Item baru saja terjual
              </GradientText>
            </header>

            <p className="font-jakarta-sans font-normal text-brand-dark-400 text-sm md:text-base">
              Produk yang baru saja terjual
            </p>
          </div>
        </div>

        <GradientButton variant="primary" className="w-fit hidden xl:block">
          Kirim Pesan Bantuan
        </GradientButton>
      </MaxWidthWrapper>

      <AutoSwiper
        items={PRODUCT_NEWEST_SOLD_ITEMS}
        renderItem={(item, idx) => <NewestSoldCard key={idx} {...item} />}
      />
    </section>
  );
}
