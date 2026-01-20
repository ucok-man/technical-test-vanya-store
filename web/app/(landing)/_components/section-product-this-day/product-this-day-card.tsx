import Image from "next/image";

type Props = {
  icon: string;
  label: string;
  price: string;
};

export default function ProductThisDayCard({ icon, label, price }: Props) {
  return (
    <div className="min-[320px]:w-[320px] w-screen px-3 min-[320px]:px-0">
      <div className="p-3 rounded-full border-2 border-brand-white-300 w-full">
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
            <p className="font-chillax font-semibold text-base md:text-base text-brand-dark-400/68">
              {label}
            </p>
            <p className="text-primary font-chillax font-semibold text-lg  md:text-xl">
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
