import React, { useState } from "react";
import { motion } from "framer-motion";

const departments = [
  "Éducation",
  "Sécurité",
  "Urbanisme",
  "Santé",
  "Économie",
  "Environnement",
];

const contacts = [
  {
    name: "Jean Moke",
    position: "Directeur de l'Éducation",
    department: "Éducation",
    phone: "+243 970 000 123",
    email: "education@gomaville.cd",
    address: "Bâtiment administratif, Avenue du savoir, Goma",
  },
  {
    name: "Col. Kazi Simba",
    position: "Commandant de la Police",
    department: "Sécurité",
    phone: "+243 991 456 789",
    email: "securite@gomaville.cd",
    address: "Poste central, Boulevard Kimbangu, Goma",
  },
  {
    name: "Marie Chantal",
    position: "Directrice de l’Urbanisme",
    department: "Urbanisme",
    phone: "+243 993 222 444",
    email: "urbanisme@gomaville.cd",
    address: "Ministère de l’urbanisme, Goma",
  },
  // ➕ Ajoute d'autres contacts ici…
];

const AdminDirectory = () => {
  const [selectedDept, setSelectedDept] = useState("Tous");

  const filteredContacts =
    selectedDept === "Tous"
      ? contacts
      : contacts.filter((c) => c.department === selectedDept);

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          🏛️ Annuaire administratif
        </h2>
        <p className="mt-2 text-gray-600">
          Accédez rapidement aux responsables des services locaux.
        </p>
      </div>

      {/* 🔍 Filtres par département */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setSelectedDept("Tous")}
          className={`px-4 py-2 rounded-full border ${
            selectedDept === "Tous"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          Tous
        </button>
        {departments.map((dept, i) => (
          <button
            key={i}
            onClick={() => setSelectedDept(dept)}
            className={`px-4 py-2 rounded-full border ${
              selectedDept === dept
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* 📇 Cartes de contacts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-lg p-5 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-blue-700">
              {contact.name}
            </h3>
            <p className="text-sm text-gray-600 mb-1">{contact.position}</p>
            <p className="text-sm text-gray-700">
              📍 <span className="italic">{contact.address}</span>
            </p>
            <p className="text-sm mt-2">📞 {contact.phone}</p>
            <p className="text-sm">📧 {contact.email}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AdminDirectory;
