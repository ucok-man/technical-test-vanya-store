"use client";

import AutoSwiper from "@/components/auto-swipper";
import Badge from "@/components/badge";
import GradientText from "@/components/gradient-text";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductThisDayCard from "./product-this-day-card";

const PRODUCT_THIS_DAY_ITEMS = Array.from({ length: 10 }, () => ({
  icon: "/products/sky-people.png",
  label: "Search & Rescue",
  price: "R$ 850",
}));

export default function SectionProductThisDay() {
  return (
    <section className="space-y-8">
      <MaxWidthWrapper>
        <header className="flex flex-col justify-center items-center gap-3">
          <Badge>Rekomendasi Produk</Badge>
          <GradientText className="text-4xl md:text-5xl leading-[115%] text-center">
            Product of the Day
          </GradientText>
        </header>
      </MaxWidthWrapper>

      <AutoSwiper
        items={PRODUCT_THIS_DAY_ITEMS}
        renderItem={(product) => (
          <ProductThisDayCard
            icon={product.icon}
            label={product.label}
            price={product.price}
          />
        )}
      />
    </section>
  );
}
