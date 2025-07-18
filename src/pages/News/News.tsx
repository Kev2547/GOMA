import React from "react";
import HeaderSection from "./HeaderSection";
import NewsFeed from "./NewsFeed";
import EventCalendar from "./EventCalendar";



const News: React.FC = () => {
  return (
    <main className="bg-white">
     
      <HeaderSection />

    
      <NewsFeed />

   
      <EventCalendar />

    </main>
  );
};

export default News;
