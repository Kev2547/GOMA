import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('/images/image6.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        className="z-10 text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Goma, ville de résilience et de beauté
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Nichée entre le lac Kivu et le volcan Nyiragongo
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200">
          Découvrir Goma
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
