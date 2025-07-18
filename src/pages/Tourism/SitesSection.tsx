import React from "react";
import { motion } from "framer-motion";

interface Site {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

const touristicSites: Site[] = [
  {
    id: "1",
    title: "Volcan Nyiragongo",
    category: "Volcan",
    description: "L'un des volcans les plus actifs au monde, avec un lac de lave spectaculaire.",
    imageUrl: "/images/volcan.jpg",
  },
  {
    id: "2",
    title: "Lac Kivu",
    category: "Lac",
    description: "Un lac majestueux aux eaux calmes, idéal pour les croisières et couchers de soleil.",
    imageUrl: "/images/bac4.jpg",
  },
  {
    id: "3",
    title: "Parc de Virunga",
    category: "Parc National",
    description: "Le plus ancien parc d’Afrique, refuge des gorilles de montagne.",
    imageUrl: "/images/tourism/parc-virunga.jpg",
  },
  {
    id: "4",
    title: "Musée de Goma",
    category: "Culture",
    description: "Un espace dédié à l’histoire, aux traditions et à l’art de la région.",
    imageUrl: "/images/tourism/musee-goma.jpg",
  },
];

const TourismSites = () => {
  return (
    <section id="sites" className="py-16 px-6 md:px-20 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Sites à visiter à Goma
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {touristicSites.map((site, index) => (
          <motion.div
            key={site.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={site.imageUrl}
                alt={site.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                {site.category}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{site.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{site.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TourismSites;
