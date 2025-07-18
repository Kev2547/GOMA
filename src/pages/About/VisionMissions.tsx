
import { FaLeaf, FaLightbulb, FaDove, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const missions = [
  {
    icon: <FaLeaf size={32} className="text-green-600" />,
    label: "Écologie",
    description: "Promouvoir un environnement sain et durable.",
  },
  {
    icon: <FaLightbulb size={32} className="text-yellow-500" />,
    label: "Innovation",
    description: "Encourager les technologies modernes et l’innovation sociale.",
  },
  {
    icon: <FaDove size={32} className="text-blue-400" />,
    label: "Paix",
    description: "Favoriser la cohésion sociale et la paix durable.",
  },
  {
    icon: <FaUsers size={32} className="text-purple-600" />,
    label: "Jeunesse",
    description: "Investir dans les jeunes pour un avenir prometteur.",
  },
];

const VisionMissions = () => {
  return (
    <section
      id="vision-missions"
      className="max-w-6xl mx-auto px-6 py-16 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Vision & Missions de la ville
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Texte inspirant */}
        <div className="md:w-1/2 flex flex-col justify-center text-gray-700 text-lg leading-relaxed">
          <p>
            <em>
              "Goma s’engage à devenir une ville modèle d’Afrique centrale :
              moderne, verte, inclusive et innovante. À travers une gouvernance
              participative, elle place ses citoyens au cœur de son
              développement durable."
            </em>
          </p>
        </div>

        {/* Missions */}
        <div className="md:w-1/2 grid grid-cols-1 gap-8">
          {missions.map(({ icon, label, description }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0">{icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{label}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Boutons */}
      <div className="mt-12 flex justify-center gap-8">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold">
          Nos engagements
        </button>
        <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100 transition font-semibold">
          Nos projets
        </button>
      </div>
    </section>
  );
};

export default VisionMissions;
