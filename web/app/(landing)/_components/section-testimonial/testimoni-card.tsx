import Image from "next/image";

type Props = {
  userAvatar: string;
  userName: string;
  userCity: string;
  testimoni: string;
  icon: string;
};

export default function TestimoniCard({
  userAvatar,
  userName,
  userCity,
  testimoni,
  icon,
}: Props) {
  return (
    <div className="md:w-lg w-screen">
      <div className="relative p-6 border-gradient-primary border-g-1 rounded-4xl bg-brand-white-100 shadow w-[90%] md:w-full mx-auto md:mx-0">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="relative rounded-full overflow-hidden border border-primary size-16 shrink-0">
            <Image src={userAvatar} alt="" fill />
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="flex items-center gap-3 font-chillax font-semibold">
              <span className="text-primary text-lg md:text-2xl">
                @{userName}
              </span>
              <span>-</span>
              <span className="text-brand-dark-400/75 text-base md:text-lg">
                {userCity}
              </span>
            </h4>

            <p className="font-jakarta-sans font-normal italic text-brand-dark-400 text-pretty text-base md:text-base">
              {testimoni}
            </p>
          </div>
        </div>

        <div className="absolute -top-12 -right-4">
          <div className="relative size-32 rotate-9">
            <Image src={icon} alt="" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
