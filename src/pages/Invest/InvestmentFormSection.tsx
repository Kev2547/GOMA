import React, { useState } from "react";

const InvestmentFormSection = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          ✍️ Formulaire d’intention d’investissement
        </h2>
        <form className="space-y-6">
          {/* NOM */}
          <div>
            <label className="block text-gray-700">Nom complet</label>
            <input
              type="text"
              required
              placeholder="Ex: Jean K."
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ENTREPRISE */}
          <div>
            <label className="block text-gray-700">Nom de l’entreprise</label>
            <input
              type="text"
              required
              placeholder="Ex: Kivu Energy Corp"
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* SECTEUR */}
          <div>
            <label className="block text-gray-700">Secteur d’intérêt</label>
            <select
              required
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choisir un secteur</option>
              <option value="agriculture">Agriculture</option>
              <option value="industrie">Industrie</option>
              <option value="immobilier">Immobilier</option>
              <option value="tourisme">Tourisme</option>
              <option value="énergie">Énergie</option>
              <option value="technologie">Technologie</option>
            </select>
          </div>

          {/* MONTANT */}
          <div>
            <label className="block text-gray-700">Montant prévu ($)</label>
            <input
              type="number"
              required
              placeholder="Ex: 100000"
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* PAYS */}
          <div>
            <label className="block text-gray-700">Pays d’origine</label>
            <input
              type="text"
              required
              placeholder="Ex: RDC, France, Rwanda..."
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-gray-700">Description du projet</label>
            <textarea
              required
              rows={4}
              placeholder="Décrivez brièvement votre projet ici..."
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* UPLOAD */}
          <div>
            <label className="block text-gray-700 mb-1">
              📎 Joindre une lettre d’intention ou business plan
            </label>
            <label className="cursor-pointer inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Choisir un fichier
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                hidden
              />
            </label>
            {fileName && (
              <p className="mt-2 text-sm text-gray-600">Fichier sélectionné : {fileName}</p>
            )}
          </div>

          {/* MÉTHODE DE PAIEMENT */}
          <div>
            <label className="block text-gray-700 mb-2">Méthode de paiement (si frais d’étude requis)</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input type="radio" name="paiement" value="mobile-money" className="accent-blue-600" />
                <span>Mobile Money</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="paiement" value="visa" className="accent-blue-600" />
                <span>Visa / Carte bancaire</span>
              </label>
            </div>
          </div>

          {/* BOUTON */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg transition-all duration-300"
            >
              🚀 Soumettre l’intention
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InvestmentFormSection;
