import React from "react";
import { motion } from "framer-motion";

export interface Actualite {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string; // ISO string
  category: string;
  categoryColor: string; // couleur tailwind ou hex
}

interface ActualiteCardProps {
  actualite: Actualite;
  onReadMore: (id: string) => void;
}

const ActualiteCard: React.FC<ActualiteCardProps> = ({ actualite, onReadMore }) => {
  return (
    <motion.article
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      layout
      onClick={() => onReadMore(actualite.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onReadMore(actualite.id)}
      aria-label={`Lire la suite de l'actualité : ${actualite.title}`}
    >
      <img
        src={actualite.imageUrl}
        alt={actualite.title}
        className="h-48 w-full object-cover"
        loading="lazy"
      />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <time className="text-sm text-gray-500" dateTime={actualite.date}>
            {new Date(actualite.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded ${actualite.categoryColor} text-white select-none`}
          >
            {actualite.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{actualite.title}</h3>
        <p className="text-gray-600 flex-grow">{actualite.excerpt}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onReadMore(actualite.id);
          }}
          className="mt-4 self-start text-blue-600 hover:text-blue-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label={`Lire la suite de ${actualite.title}`}
        >
          Lire la suite →
        </button>
      </div>
    </motion.article>
  );
};

export default ActualiteCard;
