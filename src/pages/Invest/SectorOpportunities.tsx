import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaRoad,
  FaLeaf,
  FaHotel,
  FaIndustry,
  FaLaptopCode,
  FaBuilding,
} from "react-icons/fa";
import { BsX } from "react-icons/bs";
import clsx from "clsx";

interface Sector {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  stat: number;
}

const sectors: Sector[] = [
  {
    id: "infra",
    title: "Infrastructures",
    description: "Routes, énergie solaire, eau potable, bâtiments publics modernes.",
    icon: <FaRoad size={30} />,
    imageUrl: "/images/image44.jpg",
    stat: 120,
  },
  {
    id: "agri",
    title: "Agriculture",
    description: "Café, cacao, maraîchage, filières de transformation locale.",
    icon: <FaLeaf size={30} />,
    imageUrl: "/images/image45.jpg",
    stat: 95,
  },
  {
    id: "tourism",
    title: "Tourisme",
    description: "Écotourisme, hôtels, circuits, événements et festivals.",
    icon: <FaHotel size={30} />,
    imageUrl: "/images/image46.jpg",
    stat: 60,
  },
  {
    id: "industry",
    title: "Industrie",
    description: "Transformation du bois, verre, aluminium et recyclage.",
    icon: <FaIndustry size={30} />,
    imageUrl: "/images/image47.jpg",
    stat: 80,
  },
  {
    id: "tech",
    title: "Tech & Digital",
    description: "Startups, e-commerce, services numériques, cybersécurité.",
    icon: <FaLaptopCode size={30} />,
    imageUrl: "/images/image48.jpg",
    stat: 42,
  },
  {
    id: "realestate",
    title: "Immobilier",
    description: "Logements, résidences étudiantes, zones commerciales modernes.",
    icon: <FaBuilding size={30} />,
    imageUrl: "/images/image49.jpg",
    stat: 73,
  },
];

const SectorOpportunities = () => {
  const [activeSector, setActiveSector] = useState<Sector | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const filteredSectors = filter
    ? sectors.filter((s) => s.id === filter)
    : sectors;

  return (
    <section className="bg-white py-20 px-6 md:px-20" id="secteurs">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Opportunités par secteur
      </h2>

      {/* Filtres */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        <button
          onClick={() => setFilter(null)}
          className={clsx(
            "px-4 py-2 rounded-full border text-sm font-medium",
            filter === null
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          Tous
        </button>
        {sectors.map((sector) => (
          <button
            key={sector.id}
            onClick={() => setFilter(sector.id)}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium",
              filter === sector.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            {sector.icon}
            {sector.title}
          </button>
        ))}
      </div>

      {/* Grille de secteurs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredSectors.map((sector, index) => (
          <motion.div
            key={sector.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer bg-gray-100 rounded-xl overflow-hidden shadow-lg group"
            onClick={() => setActiveSector(sector)}
          >
            <div className="relative h-48">
              <img
                src={sector.imageUrl}
                alt={sector.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-full">
                {sector.icon}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{sector.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{sector.description}</p>
              <div className="text-blue-600 font-bold text-lg">
                <CountUp end={sector.stat} duration={2} />+ projets
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal d'informations */}
      {activeSector && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={() => setActiveSector(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveSector(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <BsX size={24} />
            </button>
            <div className="mb-4">
              <img
                src={activeSector.imageUrl}
                alt={activeSector.title}
                className="w-full h-40 object-cover rounded"
              />
            </div>
            <h4 className="text-2xl font-bold mb-2">{activeSector.title}</h4>
            <p className="text-gray-700">{activeSector.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectorOpportunities;
