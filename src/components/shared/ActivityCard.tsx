// src/components/shared/ActivityCard.tsx
import React from "react";
import { motion } from "framer-motion";

interface ActivityProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ActivityCard: React.FC<ActivityProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-48 md:h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
