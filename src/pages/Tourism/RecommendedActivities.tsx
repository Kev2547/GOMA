// src/pages/Tourism/RecommendedActivities.tsx
import React from "react";
import ActivityCard from "../../components/shared/ActivityCard";

const activities = [
  {
    title: "Croisière sur le lac Kivu",
    description: "Profitez d’une balade en bateau au coucher du soleil, avec vue sur les collines de Goma.",
    imageUrl: "/images/back4.jpg",
  },
  {
    title: "Randonnée au volcan Nyiragongo",
    description: "Partez à l'aventure sur les flancs du volcan pour une vue inoubliable du lac de lave.",
    imageUrl: "/images/image12.jpg",
  },
  {
    title: "Marché artisanal de Goma",
    description: "Explorez les objets artisanaux, peintures et tissus traditionnels locaux.",
    imageUrl: "/images/back3.jpg",
  },
  {
    title: "Dégustation de plats typiques",
    description: "Savourez la cuisine locale comme le sombé, le makayabu ou le poisson grillé au bord du lac.",
    imageUrl: "/images/image52.jpg",
  },
];

const RecommendedActivities = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Activités recommandées
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            title={activity.title}
            description={activity.description}
            imageUrl={activity.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedActivities;
