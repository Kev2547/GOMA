// src/components/shared/TourCircuitSlider.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const circuits = [
  {
    title: "Circuit Aventure : Lac Kivu + Nyiragongo",
    duration: "3 jours / 2 nuits",
    imageUrl: "/images/image25.jpg",
  },
  {
    title: "Immersion culturelle dans les villages Nande",
    duration: "2 jours",
    imageUrl: "/images/image59.webp",
  },
  {
    title: "Safari express au Parc Virunga",
    duration: "1 journée",
    imageUrl: "/images/image60.jpg",
  },
];

const TourCircuitSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mt-6"
    >
      {circuits.map((circuit, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={circuit.imageUrl}
              alt={circuit.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h4 className="font-bold text-gray-800">{circuit.title}</h4>
              <p className="text-sm text-gray-500">{circuit.duration}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TourCircuitSlider;
