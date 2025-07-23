// src/pages/Home/Home.tsx
import HeroSlider from "../../components/home/HeroSlider";
import SubNavbar from "../../components/home/SubNavbar";
import InfoCardsSection from "../../components/home/InfoCardsSection";
import RecommendedActivities from "../Tourism/RecommendedActivities";

const Home = () => {
  return (
    <div className=" relative w-full h-full overflow-x-hidden">
      <HeroSlider />
      <SubNavbar />
      <InfoCardsSection />
    <RecommendedActivities />
    </div>
    
  );
};

export default Home;
