// src/components/shared/TestimonialCard.tsx
import React from "react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ name, role, text, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
      <div className="w-24 h-24 mx-auto mb-4 relative">
        <div className="w-full h-full clip-hexagon overflow-hidden">
          <img src={imageUrl} alt={name} className="object-cover w-full h-full" />
        </div>
      </div>
      <p className="text-sm italic text-gray-600">“{text}”</p>
      <h4 className="mt-3 text-lg font-bold text-gray-800">{name}</h4>
      <span className="text-xs text-gray-500">{role}</span>
    </div>
  );
};

export default TestimonialCard;
