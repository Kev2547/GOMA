
import { FaUsersCog, FaHandshake, FaLeaf, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const leader = {
  name: "Dieudonné Kazongo",
  role: "Maire de Goma",
  photoUrl: "/images/image42.webp", 
  bio: "Passionné par le développement durable et la gouvernance participative, il œuvre pour une ville plus verte et plus moderne.",
  message: "Une ville propre, une ville prospère.",
};

const institutions = [
  {
    name: "Conseil Communal",
    description: "Organe législatif local, responsable des décisions municipales.",
    icon: <FaUsersCog size={30} className="text-blue-600" />,
  },
  {
    name: "Mairie",
    description: "Administration centrale et gestion quotidienne de la ville.",
    icon: <FaHandshake size={30} className="text-green-600" />,
  },
];

const missions = [
  {
    icon: <FaLeaf size={28} className="text-green-500" />,
    text: "Promouvoir le développement durable et la protection de l’environnement.",
  },
  {
    icon: <FaChartLine size={28} className="text-blue-500" />,
    text: "Favoriser la croissance économique inclusive.",
  },
  {
    icon: <FaUsersCog size={28} className="text-gray-600" />,
    text: "Encourager la participation citoyenne et la transparence.",
  },
];

const InstitutionsLeadership = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12" id="institutions-leadership">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Institutions & Leadership
      </h2>

      {/* Maire */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <img
          src={leader.photoUrl}
          alt={`Photo de ${leader.name}`}
          className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-blue-500"
        />
        <div>
          <h3 className="text-2xl font-semibold text-blue-700">{leader.name}</h3>
          <p className="italic text-gray-600 mb-4">{leader.role}</p>
          <p className="text-gray-700">{leader.bio}</p>
          {leader.message && (
            <blockquote className="mt-4 pl-4 border-l-4 border-blue-500 italic text-blue-600">
              "{leader.message}"
            </blockquote>
          )}
        </div>
      </div>

      {/* Institutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {institutions.map((inst, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-6 border rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div>{inst.icon}</div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">{inst.name}</h4>
              <p className="text-gray-600">{inst.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Missions */}
      <div className="bg-blue-50 rounded-lg p-8 shadow-inner">
        <h3 className="text-2xl font-semibold mb-6 text-center text-blue-700">
          Missions & Objectifs
        </h3>
        <ul className="space-y-4 max-w-xl mx-auto">
          {missions.map((mission, idx) => (
            <motion.li
              key={idx}
              className="flex items-center gap-4"
              whileHover={{ x: 10, color: "#2563eb" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div>{mission.icon}</div>
              <p>{mission.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Lien charte */}
      <div className="mt-12 text-center">
        <a
          href="/charte-gouvernance.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Voir la Charte de Gouvernance
        </a>
      </div>
    </section>
  );
};

export default InstitutionsLeadership;
