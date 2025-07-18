import { FaBullhorn, FaMapMarkerAlt, FaTools, FaUserTie } from "react-icons/fa";

const cards = [
  {
    icon: <FaBullhorn size={24} />,
    title: "Actualité du jour",
    description: "Le maire annonce une campagne de propreté ce samedi dans les quartiers Katindo et Himbi.",
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: <FaMapMarkerAlt size={24} />,
    title: "À visiter aujourd’hui",
    description: "Le parc national de Virunga vous ouvre ses portes : volcan, gorilles, aventure assurée !",
    color: "bg-green-100 text-green-800",
  },
  {
    icon: <FaTools size={24} />,
    title: "Travaux en cours",
    description: "Réhabilitation de l’avenue du lac Kivu en cours jusqu'au 20 août – circulation alternée.",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    icon: <FaUserTie size={24} />,
    title: "Profil du Maire",
    description: "Dieudonné Kazongo – 'Une ville propre, une ville prospère' – voir le plan Goma 2030.",
    color: "bg-gray-100 text-gray-800",
    button: true,
  },
];

const InfoCardsSection = () => {
  return (
    <section className="py-16 px-6 bg-white" id="infos">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Infos clés de Goma
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ${card.color} flex flex-col justify-between`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-xl">{card.icon}</div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
              <p className="text-sm mb-4 flex-grow">{card.description}</p>
              {card.button && (
                <a
                  href="#"
                  className="mt-auto inline-block px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700"
                >
                  Voir plus
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
