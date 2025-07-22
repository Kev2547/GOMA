import { motion } from "framer-motion";
import { FaUsers, FaChartArea, FaChartLine, FaTemperatureHigh } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers className="text-blue-700" size={32} />,
    label: "Population",
    value: "670 000+",
    description: "Estimation en 2024 incluant la zone urbaine.",
  },
  {
    icon: <FaChartArea className="text-green-700" size={32} />,
    label: "Superficie",
    value: "75 km²",
    description: "Surface totale couverte par la commune urbaine.",
  },
  {
    icon: <FaChartLine className="text-purple-700" size={32} />,
    label: "Croissance annuelle",
    value: "4.2%",
    description: "Taux de croissance démographique moyen.",
  },
  {
    icon: <FaTemperatureHigh className="text-red-600" size={32} />,
    label: "Climat",
    value: "Tropical de montagne",
    description: "Température moyenne : 19°C - 27°C",
  },
];

const GeoDemographySection = () => {
  return (
    <section className="bg-white py-20 px-6" id="geo">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Géographie & Démographie
        </h2>

        {/* Carte de la ville */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-md">
          <img
            src="/images/image43.png"
            alt="Carte de Goma"
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                {stat.icon}
                <h3 className="text-lg font-semibold text-gray-800">{stat.label}</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeoDemographySection;
