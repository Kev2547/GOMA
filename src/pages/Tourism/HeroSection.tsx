import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Tourism = () => {
  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Fond image */}
      <img
        src="/images/goma-tourism-hero.jpg"
        alt="Vue panoramique de Goma"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
      />

      {/* Filtre sombre en dégradé */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

      {/* Texte animé */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-6 md:px-10"
      >
        <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-md tracking-wide">
          Découvrez Goma
        </h1>
        <p className="mt-4 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Entre volcans actifs, traditions millénaires et hospitalité légendaire —
          Goma vous invite à vivre l’Afrique autrement.
        </p>
        <Link
          to="#sites"
          className="mt-6 inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition"
        >
          Explorer les merveilles
        </Link>
      </motion.div>

      {/* Badge Elon Musk mode VIP 😎 */}
      <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-xl text-sm text-white shadow-lg hidden md:block">
         Pacifique bayongwa • Guest VIP 🇨🇩
      </div>
    </section>
  );
};

export default Tourism;
