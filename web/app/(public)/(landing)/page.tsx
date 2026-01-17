import SectionAbout from "./_components/section-about";
import SectionHero from "./_components/section-hero";
import SectionProductNewestSold from "./_components/section-product-newest-sold";
import SectionProductThisDay from "./_components/section-product-this-day";

export default function HomePage() {
  return (
    <div className="space-y-28">
      <SectionHero />
      <SectionProductThisDay />
      <SectionAbout />
      <SectionProductNewestSold />
    </div>
  );
}
