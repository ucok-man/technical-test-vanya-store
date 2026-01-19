// import SectionAbout from "./_components/section-about";
import SectionContact from "./_components/section-contact";
import SectionFAQ from "./_components/section-faq";
// import SectionHero from "./_components/section-hero";
// import SectionProductBestSeller from "./_components/section-product-best-seller";
// import SectionProductNewestSold from "./_components/section-product-newest-sold";
// import SectionProductThisDay from "./_components/section-product-this-day";
import SectionTestimonial from "./_components/section-testimonial";

export default function HomePage() {
  return (
    <div className="space-y-32">
      {/* <SectionHero /> */}
      {/* <SectionProductThisDay /> */}
      {/* <SectionAbout /> */}
      {/* <SectionProductNewestSold /> */}
      {/* <SectionProductBestSeller /> */}
      <SectionTestimonial />
      <SectionFAQ />
      <SectionContact />
    </div>
  );
}
