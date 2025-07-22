import React from "react";
import HeaderSection from "./HeaderSection";
import NewsFeed from "./NewsFeed";
import EventCalendar from "./EventCalendar";

const News: React.FC = () => {
  const handleSearch = (keyword: string, date: string) => {
    // Ici, tu peux ajouter la logique pour filtrer NewsFeed ou faire une requête
    console.log("Recherche :", keyword, "Date :", date);
  };

  return (
    <main className="bg-white">
      <HeaderSection onSearch={handleSearch} />

      <NewsFeed />

      <EventCalendar />
    </main>
  );
};

export default News;
