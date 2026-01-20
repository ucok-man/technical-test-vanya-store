import Badge from "@/components/badge";
import GradientText from "@/components/gradient-text";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import ContactForm from "./contact-form";

export default function SectionContact() {
  return (
    <section>
      <MaxWidthWrapper className="flex items-center justify-center xl:justify-between">
        <div className="w-full hidden xl:block">
          <Image
            src={"/mayo-contact.png"}
            alt=""
            width={572}
            height={687}
            className="object-center object-cover w-[572px] h-[687px]"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-9 w-full max-w-2xl">
          <header className="flex flex-col items-center justify-center gap-3">
            <Badge>Kontak Kami</Badge>
            <GradientText className="text-4xl md:text-5xl text-center leading-[115%]">
              Butuh bantuan cepat atau pertanyaan? kirimkan pesan kamu dibawah
            </GradientText>
          </header>

          <ContactForm />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
