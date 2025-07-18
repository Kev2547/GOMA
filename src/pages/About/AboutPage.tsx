import HeroSection from "./HeroSection";
import HistorySection from "./HistorySection";
import GeoDemographySection from "./GeoDemographySection";
import InstitutionsSection from "./InstitutionsLeadership";
import VisionSection from "./VisionMissions";
import GallerySection from "./GalerieMultimedia";

const AboutPage = () => {
  return (
    <main className="bg-white text-gray-800">
      <HeroSection />
      <HistorySection />
      <GeoDemographySection />
      <InstitutionsSection />
      <VisionSection />
      <GallerySection />
    </main>
  );
};

export default AboutPage;
