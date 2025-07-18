import { FaHotel, FaUtensils, FaMapMarkedAlt, FaInfoCircle } from "react-icons/fa";

const links = [
  { icon: <FaHotel size={20} />, label: "Hôtels", href: "#hotels" },
  { icon: <FaUtensils size={20} />, label: "Restaurants", href: "#restaurants" },
  { icon: <FaMapMarkedAlt size={20} />, label: "Sites", href: "#sites" },
  { icon: <FaInfoCircle size={20} />, label: "Infos utiles", href: "#infos" },
];

const SubNavbar = () => {
  return (
    <div className="w-full bg-white shadow-md py-3 px-4 flex justify-center z-40 sticky top-[100vh] md:top-[80vh]">
      <div className="flex gap-4 flex-wrap justify-center max-w-5xl">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all shadow-md text-sm md:text-base"
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SubNavbar;
