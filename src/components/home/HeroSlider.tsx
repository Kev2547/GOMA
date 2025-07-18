// src/components/home/HeroSlider.tsx
import { useEffect, useState } from "react";
import WeatherWidget from "../../components/shared/WeatherWidget";
import UrgentInfoCard from "../../components/shared/UrgentInfoCard";
import Navbar from "../../components/layout/Navbar";

const images = [
  "/images/back2.jpg",
  "/images/image27.jpg",
  "/images/back1.jpg",
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

      {/* Navbar (centrée) */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30">
        <Navbar />
      </div>

      {/* Texte “GOMA” */}
      <h1 className="absolute z-30 text-white text-[7vw] font-bold left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-xl tracking-wide">
        GOMA
      </h1>

      {/* Météo */}
      <div className="absolute top-5 right-5 z-30">
        <WeatherWidget />
      </div>

      {/* Infos urgentes */}
      <div className="absolute bottom-6 left-6 z-30">
        <UrgentInfoCard />
      </div>
    </div>
  );
};

export default HeroSlider;
