import { useEffect, useState } from "react";
import WeatherWidget from "../../components/shared/WeatherWidget";
import UrgentInfoCard from "../../components/shared/UrgentInfoCard";
import VilleCard from "../../components/shared/VilleCard"; // 👈 Import du composant

const images = [
  "/images/back1.jpg",
  "/images/back2.jpg",
  "/images/image27.jpg",
];

const villesNordKivu = [
  {
    name: "Goma",
    image: "/images/image1.jpg", // ajoute ces images dans /public/images
  },
  {
    name: "Beni",
    image: "/images/beni.jpg",
  },
  {
    name: "Butembo",
    image: "/images/butembo.webp",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
        </div>
      ))}

      {/* Texte principal */}
      <h1 className="absolute z-30 text-white text-[7vw] font-bold left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-xl tracking-wide">
        NORD-KIVU
      </h1>

      {/* Météo */}
      <div className="absolute top-10 mt-7 right-5 z-30">
        <WeatherWidget />
      </div>

      {/* Infos urgentes */}
      <div className="absolute bottom-70 mt-20 left-6 z-30">
        <UrgentInfoCard />
      </div>

      {/* Villes Nord-Kivu */}
      <div className="absolute bottom-5 right-1 z-30 flex rounded-xl px-4 py-2 backdrop-blur-md">
        {villesNordKivu.map((ville) => (
          <VilleCard key={ville.name} name={ville.name} image={ville.image} />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
