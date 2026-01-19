import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import Badge from "@/components/badge";
import GradientTextStroke from "@/components/gradient-text-stroke";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";

const FAQ_ITEMS = Array.from({ length: 5 }, (_, idx) => ({
  question: "Berapa lama waktu pengiriman robux",
  answer: [
    {
      short: "Robux melalui link (Gamepass)",
      long: "Cara ini membutuhkan waktu sekitar 5 hari hingga Robux masuk ke akun kamu. Jadi, harap sabar menunggu, ya!",
    },
    {
      short: "Robux melalui login (menggunakan username dan password):",
      long: "Kalau pilih cara ini, Robux akan masuk ke akun kamu dalam waktu sekitar 3–5 jam. Prosesnya lebih cepat, tapi kamu perlu memberikan informasi login.",
    },
  ],
  displayOrder: idx,
}));

export default function SectionFAQ() {
  return (
    <section>
      <MaxWidthWrapper className="grid grid-cols-2 gap-16 transition-all duration-200">
        <div className="size-full space-y-4">
          <header className="flex flex-col gap-6">
            <Badge>Frequently Ask Question (FAQ)</Badge>

            <GradientTextStroke className="text-[40px] leading-[120%]">
              Kumpulan pertanyaan paling sering ditanyakan oleh pengguna kami.
            </GradientTextStroke>
          </header>

          <Accordion collapsible type="single" defaultValue="0">
            {FAQ_ITEMS.map((item, idx) => (
              <AccordionItem key={idx} value={`${idx}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-6">
                  {item.answer.map(({ short, long }, idx) => (
                    <div key={idx} className="flex gap-2">
                      <div className="font-chillax font-semibold text-brand-dark-500">
                        {idx + 1}.
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-chillax font-semibold text-brand-dark-500">
                          {short}
                        </p>
                        <p className="font-jakarta-sans text-brand-dark-400/90">
                          {long}
                        </p>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="relative size-full overflow-hidden rounded-4xl h-[660px]">
          <Image
            src="/mayo-faq.png"
            alt=""
            width={1600}
            height={1570}
            className="absolute inset-0 object-cover object-center size-full"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
