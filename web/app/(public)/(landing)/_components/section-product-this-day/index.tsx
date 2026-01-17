"use client";

import AutoSwiper from "@/components/auto-swipper";
import Badge from "@/components/badge";
import GradientText from "@/components/gradient-text";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductCard from "./product-card";

const PRODUCT_THIS_DAY_ITEMS = Array.from({ length: 10 }, () => ({
  icon: "/products/sky-people.png",
  label: "Search & Rescue",
  price: "R$ 850",
}));

export default function SectionProductThisDay() {
  return (
    <section className="space-y-8">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-3">
        <Badge>Tentang Mayoblox</Badge>
        <GradientText as="h3" className="text-[40px] leading-13">
          Product of the Day
        </GradientText>
      </MaxWidthWrapper>

      <AutoSwiper
        items={PRODUCT_THIS_DAY_ITEMS}
        renderItem={(product) => (
          <ProductCard
            icon={product.icon}
            label={product.label}
            price={product.price}
          />
        )}
      />
    </section>
  );
}
