import React, { useState } from "react";

interface HeaderSectionProps {
  onSearch: (keyword: string, date: string) => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword.trim(), date);
  };

  return (
    <header className="relative h-96 sm:h-[400px] md:h-[450px] lg:h-[500px] flex flex-col justify-center items-center text-center text-white">
      {/* Background image + overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-50"
        style={{
          backgroundImage:
            "url('/images/back5.jpg')",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
          Actualités & Événements
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-medium drop-shadow-md">
          Restez connecté à la vie de votre ville
        </p>

        {/* Search form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          role="search"
          aria-label="Recherche d'actualités et événements"
        >
          <label htmlFor="keyword" className="sr-only">
            Recherche par mot-clé
          </label>
          <input
            type="search"
            id="keyword"
            placeholder="Recherche par mot-clé"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="px-4 py-3 rounded-md text-gray-900 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
          />

          <label htmlFor="date" className="sr-only">
            Filtrer par date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-3 rounded-md text-gray-900 w-full sm:w-44 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-md px-6 py-3 font-semibold shadow-md"
          >
            Rechercher
          </button>
        </form>
      </div>
    </header>
  );
};

export default HeaderSection;
