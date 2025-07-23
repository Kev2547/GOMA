// src/components/shared/VilleCard.tsx
import { FaMapMarkerAlt } from "react-icons/fa";

interface VilleCardProps {
  name: string;
  image: string;
}

const VilleCard: React.FC<VilleCardProps> = ({ name, image }) => {
  return (
    <div className="flex-shrink-0 w-40 m-2 rounded-lg overflow-hidden shadow-lg relative cursor-pointer group hover:scale-105 transition-transform duration-300">
      <img src={image} alt={name} className="w-full h-28 object-cover" />
      <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
        <FaMapMarkerAlt className="text-yellow-400" />
        {name}
      </div>
    </div>
  );
};

export default VilleCard;
