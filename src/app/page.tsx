import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import ValueProps from "@/components/home/ValueProps";
import RecentProjects from "@/components/home/RecentProjects";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Faq from "@/components/home/Faq";
import ContactCtaBanner from "@/components/shared/ContactCtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ValueProps />
      <RecentProjects />
      <AboutPreview />
      <WhyChooseUs />
      <Faq />
      <ContactCtaBanner />
    </>
  );
}
