// src/pages/Tourism/TestimonialAndCircuits.tsx
import React from "react";
import TestimonialCard from "../../components/shared/TestimonialCard";
import TourCircuitSlider from "../../components/shared/TourCircuitSlider";

const testimonials = [
  {
    name: "Aline K.",
    role: "Touriste de Kinshasa",
    text: "Goma m’a émerveillée. Le volcan, les gens, la culture… c’est inoubliable.",
    imageUrl: "/images/tourism/testimonials/aline.jpg",
  },
  {
    name: "Thomas M.",
    role: "Photographe belge",
    text: "Un paradis pour les amoureux de la nature. J’y retourne l’an prochain !",
    imageUrl: "/images/tourism/testimonials/thomas.jpg",
  },
  {
    name: "Céline M.",
    role: "Habitante de Goma",
    text: "Je suis fière de ma ville. Il y a tant à montrer au monde.",
    imageUrl: "/images/tourism/testimonials/celine.jpg",
  },
];

const TestimonialAndCircuits = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Témoignages & Circuits touristiques
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-gray-700 text-center mb-6">
        Explorez nos circuits touristiques
      </h3>
      <TourCircuitSlider />
    </section>
  );
};

export default TestimonialAndCircuits;
