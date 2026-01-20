import Image from "next/image";

type Props = {
  icon: string;
  label: string;
  price: string;
};

export default function NewestSoldCard({ icon, label, price }: Props) {
  return (
    <div className="min-[320px]:w-[320px] w-screen px-3 min-[320px]:px-0">
      <div className="border-gradient-primary border-g-2 rounded-full bg-brand-primary-50 flex items-center gap-3 p-3 w-full">
        <div className="bg-[linear-gradient(141.23deg,#FFE1E8_-1.96%,#FF7797_95.64%)] rounded-full size-14 md:size-16 overflow-hidden shrink-0">
          <Image
            src={icon}
            alt=""
            width={1024}
            height={1024}
            className="object-cover object-center relative"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-chillax font-semibold text-xl md:text-2xl text-primary">
            {label}
          </p>

          <p className="font-chillax font-light text-base md:text-lg text-brand-dark-400 text-nowrap">
            Sold for{" "}
            <span className="font-semibold text-brand-dark-400/70">
              {price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
