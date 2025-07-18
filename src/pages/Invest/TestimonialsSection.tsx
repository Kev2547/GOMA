import React from "react";

type Testimonial = {
  name: string;
  role: string;
  message: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Fatou",
    role: "Directrice de Kivu AgroTech",
    message:
      "Goma nous a offert un terrain fertile pour notre chaîne de production. Le soutien local a dépassé nos attentes.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Jean-Pierre",
    role: "CEO de Congo Construct",
    message:
      "L'environnement entrepreneurial de Goma est l'un des plus dynamiques de la région. Nous y avons trouvé des talents et des opportunités.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Linda",
    role: "Fondatrice de Goma Design Studio",
    message:
      "J'ai pu lancer mon entreprise créative ici grâce au réseau de soutien et à l'accueil chaleureux de la communauté.",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        💬 Témoignages d’entrepreneurs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <p className="text-gray-700 italic mb-4">“{t.message}”</p>
            <p className="text-gray-900 font-semibold">{t.name}</p>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
