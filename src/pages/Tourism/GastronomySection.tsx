import React from "react";
import { motion } from "framer-motion";

const dishes = [
  {
    name: "Liboke de poisson",
    description: "Poisson frais mariné et cuit dans des feuilles, un délice traditionnel.",
    imageUrl: "/images/tourism/liboke.jpg",
  },
  {
    name: "Ugali (Fufu)",
    description: "Pâte à base de farine de maïs ou manioc, accompagnement essentiel de la cuisine locale.",
    imageUrl: "/images/tourism/ugali.jpg",
  },
  {
    name: "Sambaza grillés",
    description: "Petits poissons du lac Kivu, grillés et servis croustillants.",
    imageUrl: "/images/tourism/sambaza.jpg",
  },
  {
    name: "Matoke",
    description: "Banane plantain cuite à la vapeur ou mijotée avec des légumes ou du poisson.",
    imageUrl: "/images/tourism/matoke.jpg",
  },
];

const GastronomySection: React.FC = () => {
  return (
    <section id="gastronomie" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Gastronomie & Langues locales
      </h2>

      <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 mb-10">
        Goma vous invite à un voyage culinaire authentique, mêlant traditions, saveurs locales et diversité linguistique. Ici, le Swahili se mêle au Français dans une harmonie culturelle unique.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {dishes.map((dish, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-xl overflow-hidden bg-gray-50 shadow-md hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <img
              src={dish.imageUrl}
              alt={dish.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{dish.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{dish.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 font-medium">
          Langues parlées : <span className="text-blue-600 font-semibold">Swahili</span>, <span className="text-green-700 font-semibold">Français</span>, <span className="text-yellow-700 font-semibold">Lingala</span>
        </p>
      </div>
    </section>
  );
};

export default GastronomySection;
