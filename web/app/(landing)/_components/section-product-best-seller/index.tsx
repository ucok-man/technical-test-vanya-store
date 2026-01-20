"use client";

import Badge from "@/components/badge";
import GradientButton from "@/components/gradient-button";
import GradientText from "@/components/gradient-text";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import BestSellerCard from "./best-seller-card";

const PRODUCT_BEST_SELLER_ITEMS = Array.from({ length: 5 }, () => ({
  icon: "/products/sky-people.png",
  label: "Search & Rescue",
  priceIDN: "Rp. 22,000",
  priceBRL: "R$ 1053",
  sold: 100,
}));

const MOBILE_COUNT = 4;

export default function SectionProductBestSeller() {
  const isXL = useMediaQuery("(min-width: 1280px)");

  const products = isXL
    ? PRODUCT_BEST_SELLER_ITEMS
    : PRODUCT_BEST_SELLER_ITEMS.slice(0, MOBILE_COUNT);

  return (
    <section className="space-y-12">
      <MaxWidthWrapper className="flex items-center justify-between">
        <div className="flex items-center gap-6 w-full xl:w-fit">
          <Image
            src="/products/mayo-best-seller.png"
            alt=""
            width={249}
            height={269}
            className="shrink-0 w-[249px] h-[269px] relative bottom-9 hidden xl:block"
          />

          <div className="flex flex-col xl:items-start items-center gap-6 w-full">
            <header className="flex flex-col xl:items-start items-center gap-3">
              <Badge>Paling Banyak Dibeli Sobat Mayo</Badge>
              <GradientText className="text-4xl md:text-5xl text-left leading-[115%] text-center">
                Produk Item Best Seller
              </GradientText>
            </header>

            <p className="font-jakarta-sans font-normal text-brand-dark-400 text-sm md:text-base">
              Produk favorit Sobat Mayo
            </p>
          </div>
        </div>

        <GradientButton variant="primary" className="w-fit hidden xl:block">
          Kirim Pesan Bantuan
        </GradientButton>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="grid grid-cols-2 xl:grid-cols-5 gap-4">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="max-xl:justify-self-end max-xl:even:justify-self-start justify-self-center w-full max-w-[256px]"
          >
            <BestSellerCard {...item} />
          </div>
        ))}
      </MaxWidthWrapper>
      {!isXL && (
        <div className="flex w-full items-center justify-center">
          <GradientButton className="w-fit text-base md:text-lg xl:text-xl">
            Selengkapnya
          </GradientButton>
        </div>
      )}
    </section>
  );
}
