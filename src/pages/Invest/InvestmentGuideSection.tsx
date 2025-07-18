import React, { useState } from "react";

const faqs = [
  {
    question: "Quels sont les avantages fiscaux offerts aux investisseurs ?",
    answer:
      "Les entreprises bénéficient d'exonérations fiscales les 3 premières années, ainsi que de facilités douanières pour l'importation d’équipements."
  },
  {
    question: "Quelles zones sont recommandées pour investir à Goma ?",
    answer:
      "Les zones industrielles au nord de la ville, ainsi que les périmètres urbains du lac Kivu, sont les plus stratégiques actuellement."
  },
  {
    question: "Quelles sont les étapes clés pour installer son entreprise ?",
    answer:
      "1. Enregistrement à la mairie. 2. Obtention du RCCM. 3. Recherche de site. 4. Validation juridique et foncière. 5. Lancement."
  }
];

const InvestmentGuideSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        📘 Guide d’investissement à Goma
      </h2>

      <div className="max-w-4xl mx-auto text-gray-700 space-y-6">
        <ul className="space-y-2 list-disc pl-5">
          <li>✅ Procédure d’installation : étapes simplifiées</li>
          <li>📍 Zones économiques d’intérêt stratégiques</li>
          <li>💸 Avantages fiscaux, douaniers et administratifs</li>
          <li>📞 Contacts utiles : chambre de commerce, notaires, mairie</li>
          <li>📋 Checklist juridique et foncière</li>
          <li>❓ FAQ pour investisseurs (voir ci-dessous)</li>
        </ul>

        <div className="mt-6 text-center">
          <a
            href="/docs/guide-investissement-goma.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            📩 Télécharger le guide (PDF)
          </a>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            ❓ Questions fréquentes des investisseurs
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-md p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium text-gray-800">{faq.question}</p>
                  <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentGuideSection;
