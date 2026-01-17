"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import "swiper/css/bundle";
import { Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  spaceBetween?: number;
  className?: string;
};

export default function AutoSwiper<T>({
  items,
  renderItem,
  spaceBetween = 16,
  className,
}: Props<T>) {
  return (
    <Swiper
      className={cn("cursor-grab", className)}
      slidesPerView="auto"
      modules={[Mousewheel, Scrollbar]}
      mousewheel
      scrollbar={false}
      spaceBetween={spaceBetween}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={idx} style={{ width: "auto" }}>
          {renderItem(item, idx)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
