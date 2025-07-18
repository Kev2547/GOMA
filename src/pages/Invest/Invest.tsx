import React from "react";
import InvestHeader from "./InvestHeader";
import SectorOpportunities from "./SectorOpportunities";
import TestimonialsSection from "./TestimonialsSection";
import EconomicStatsSection from "./EconomicStatsSection";
import InvestmentFormSection from "./InvestmentFormSection";


const Invest: React.FC = () => {
  return (
    <main className="bg-white">
     
      <InvestHeader />

    
      <SectorOpportunities />

   
      <EconomicStatsSection />

      <InvestmentFormSection />

    
      <TestimonialsSection />
    </main>
  );
};

export default Invest;
