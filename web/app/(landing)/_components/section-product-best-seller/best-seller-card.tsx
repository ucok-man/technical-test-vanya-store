import GradientButton from "@/components/gradient-button";
import Icons from "@/components/icons";
import Image from "next/image";

type Props = {
  icon: string;
  label: string;
  priceBRL: string;
  sold: number | string;
  priceIDN: string;
};

export default function BestSellerCard({
  icon,
  label,
  priceBRL,
  sold,
  priceIDN,
}: Props) {
  return (
    <div
      className="
        border-gradient-primary border-g-2
        rounded-3xl
        bg-brand-primary-50
        flex flex-col items-center
        gap-3 sm:gap-4
        p-4 sm:p-6
        w-full
      "
    >
      {/* Icon */}
      <div
        className="
          p-1.5 sm:p-2
          bg-[linear-gradient(141.23deg,#FFE1E8_-1.96%,#FF7797_95.64%)]
          rounded-full
          size-24 sm:size-30 xl:size-42
          overflow-hidden
        "
      >
        <Image
          src={icon}
          alt={label}
          width={962}
          height={954}
          className="size-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col items-center gap-3 w-full">
        <h4 className="font-chillax font-semibold text-sm sm:text-lg xl:text-xl text-brand-dark-500 text-center">
          {label}
        </h4>

        <div className="w-full h-px bg-brand-primary-200" />

        <div className="flex flex-col items-center xl:items-start gap-1 w-full">
          <p className="text-xs sm:text-sm font-chillax font-semibold text-primary flex items-center gap-1">
            <span className="hidden min-[420px]:inline-block">{priceBRL}</span>
            <span className="hidden min-[420px]:inline-block">·</span>
            <span className="text-brand-dark-500">{sold}x Terjual</span>
          </p>

          <p className="font-chillax font-semibold text-sm min-[320px]:text-lg min-[360px]:text-xl sm:text-2xl xl:text-3xl text-primary">
            {priceIDN}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col xl:flex-row justify-start items-center gap-1 w-full">
        <GradientButton
          variant="primary"
          className="w-full xl:w-fit text-xs min-[420px]:text-base! py-3.5 text-nowrap"
        >
          Beli <span className="hidden min-[320px]:inline-block">Sekarang</span>
        </GradientButton>
        <GradientButton
          variant="secondary"
          className="w-full xl:w-fit text-xs! min-[420px]:text-base! shrink-0 p-3.5"
        >
          <Icons.cart className="fill-transparent stroke-brand-white-100 size-5 hidden xl:block" />
          <span className="block xl:hidden">Keranjang</span>
        </GradientButton>
      </div>
    </div>
  );
}
