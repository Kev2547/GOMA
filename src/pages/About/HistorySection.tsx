import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = [
  {
    year: "1906",
    title: "Fondation de Goma",
    description: "Création de la ville sous l'administration coloniale belge.",
    image: "/assets/history/1906.jpg",
  },
  {
    year: "1977",
    title: "Première éruption majeure",
    description: "Le Nyiragongo entre en éruption, marquant l'histoire de la ville.",
    image: "/assets/history/1906.jpg",
  },
  {
    year: "1994",
    title: "Crise des réfugiés",
    description: "Arrivée massive de réfugiés suite au génocide rwandais.",
    image: "/assets/history/1906.jpg",
  },
  {
    year: "2002",
    title: "Éruption catastrophique",
    description:
      "Le volcan dévaste une partie de la ville, mais Goma se relève encore.",
      image: "/images/image24.jpg",
  },
  {
    year: "2010+",
    title: "Renaissance et développement",
    description: "Goma devient un centre culturel, touristique et entrepreneurial.",
    image: "/images/back3.jpg",
  },
];

const HistorySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-100 py-20 px-4" id="history">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Histoire de Goma
        </h2>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Timeline */}
          <div className="relative border-l-4 border-blue-600 pl-6 flex-1">
            {timelineData.map((event, index) => (
              <motion.div
                key={index}
                className="mb-10 cursor-pointer"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-[5px]"></div>
                <p className="text-sm text-gray-500">{event.year}</p>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-700">{event.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Image Preview */}
          <div className="hidden lg:block w-[300px]">
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div
                  key={timelineData[hoveredIndex].image}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={timelineData[hoveredIndex].image}
                    alt={timelineData[hoveredIndex].title}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;