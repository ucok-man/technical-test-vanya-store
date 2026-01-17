import Image from "next/image";

type Props = {
  icon: string;
  label: string;
  price: string;
};

export default function ProductCard({ icon, label, price }: Props) {
  return (
    <div className="p-3 rounded-full border-2 border-brand-white-300 w-[302px] h-[88px]">
      <div className="flex gap-6 items-center">
        <div className="p-0.5 bg-linear-to-br from-brand-primary-100 to-brand-primary-500 rounded-full size-16 overflow-hidden">
          <Image
            src={icon}
            alt=""
            width={64}
            height={64}
            className="size-full"
          />
        </div>

        <div>
          <p className="font-chillax font-semibold text-[16px] leading-[24px] tracking-[0.5%] text-brand-dark-400/68">
            {label}
          </p>
          <p className="text-primary font-chillax font-semibold text-[20px] leading-[26px] tracking-[-2%]">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}
