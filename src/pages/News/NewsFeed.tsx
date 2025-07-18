import React, { useState, useMemo } from "react";
import ActualiteCard, { Actualite } from "./ActualiteCard";
import { AnimatePresence } from "framer-motion";

const mockActualites: Actualite[] = [
  {
    id: "1",
    title: "Avis du Maire : campagne propreté",
    excerpt:
      "Le maire annonce une campagne de propreté ce samedi dans les quartiers Katindo et Himbi.",
    imageUrl: "/images/maire-campagne.jpg",
    date: "2025-07-20",
    category: "Politique",
    categoryColor: "bg-red-600",
  },
  {
    id: "2",
    title: "Marché public : travaux de voirie",
    excerpt: "La municipalité lance un marché pour la réhabilitation des routes principales.",
    imageUrl: "/images/voirie.jpg",
    date: "2025-07-18",
    category: "Travaux",
    categoryColor: "bg-yellow-600",
  },
  {
    id: "3",
    title: "Nouvelle loi sur la gestion des déchets",
    excerpt:
      "Le conseil communal adopte une nouvelle réglementation pour améliorer le tri des déchets.",
    imageUrl: "/images/gestion-dechets.jpg",
    date: "2025-07-19",
    category: "Environnement",
    categoryColor: "bg-green-600",
  },
  // Ajoute d'autres actualités ici...
];

const categories = ["Tous", "Politique", "Travaux", "Environnement"];

const NewsFeed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredActualites = useMemo(() => {
    return mockActualites.filter((act) => {
      const matchesCategory =
        selectedCategory === "Tous" || act.category === selectedCategory;
      const matchesSearch =
        act.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        act.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleReadMore = (id: string) => {
    alert(`Lire la suite de l'actualité avec id : ${id}`);
    // Ici tu peux rediriger vers une page détail ou ouvrir une modale
  };

  return (
    <section className="max-w-7xl mx-auto p-6" aria-label="Flux d'actualités">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        {/* Filtre catégorie */}
        <div role="radiogroup" aria-label="Filtrer par catégorie">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`mr-2 mb-2 px-4 py-2 rounded-full font-semibold ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Barre recherche */}
        <input
          type="search"
          aria-label="Rechercher dans les actualités"
          placeholder="Recherche..."
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Liste des actualités */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredActualites.length ? (
            filteredActualites.map((act) => (
              <ActualiteCard
                key={act.id}
                actualite={act}
                onReadMore={handleReadMore}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Aucune actualité ne correspond à votre recherche.
            </p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewsFeed;
