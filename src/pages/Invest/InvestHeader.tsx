import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const InvestHeader: React.FC = () => {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/image3.jpg')", // 📸 place l’image dans public/images/
      }}
    >
      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Investir à Goma
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light">
          Un territoire d’opportunités au cœur de l’Afrique des Grands Lacs
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="#secteurs"
            className="bg-yellow-500 hover:bg-yellow-600 transition text-white font-semibold px-6 py-3 rounded-full shadow-md"
          >
            Voir les secteurs clés
          </Link>
          <Link
            to="/invest/project-form"
            className="bg-white text-gray-900 hover:bg-gray-100 transition font-semibold px-6 py-3 rounded-full shadow-md"
          >
            Soumettre un projet
          </Link>
          <a
            href="/docs/invest.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-6 py-3 rounded-full shadow-md"
          >
            Télécharger le guide (PDF)
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default InvestHeader;
