import React from "react";
import HeroSection from "../Tourism/HeroSection";
import SitesSection from "./SitesSection";
import ActivitiesSection from "../Tourism/RecommendedActivities";
import TestimonialAndCircuits from "./TestimonialAndCircuits";
import RecommendedActivities from "../Tourism/GastronomySection";

const Tourism: React.FC = () => {
  return (
    <main className="bg-white">
      {/* 1. Section d’introduction visuelle */}
      <HeroSection />

      {/* 2. Sites à visiter (volcan, lac, musée…) */}
      <SitesSection />

      {/* 3. Activités recommandées */}
      <ActivitiesSection />

      <RecommendedActivities />

      {/* 4. Témoignages & Circuits touristiques */}
      <TestimonialAndCircuits />
    </main>
  );
};

export default Tourism;
