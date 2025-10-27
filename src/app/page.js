import HeroSection from "@/components/Home/Hero";
import QuickActions from "@/components/Home/Quickaction";
import Cta from "@/components/Home/Cta";
import Trust from "@/components/Home/Trust";
import ContactSection from "@/components/shared/Contact";

export default function page() {
  return (
    <>
    <HeroSection />
    <QuickActions />
    <Cta/>
    <Trust/>
    <ContactSection/>
    </>
  )
}
