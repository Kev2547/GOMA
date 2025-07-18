import { useState } from "react";

type MediaItem = {
  id: number;
  type: "photo" | "video";
  src: string;
  alt?: string;
  title?: string;
  theme?: string;
};

const mediaItems: MediaItem[] = [
  // Photos triées par thème (exemples)
  { id: 1, type: "photo", src: "/images/image18.jpg", alt: "Lac Kivu", theme: "nature" },
  { id: 2, type: "photo", src: "/images/image24.jpg", alt: "Volcan Nyiragongo", theme: "nature" },
  { id: 3, type: "photo", src: "/images/image1.jpg", alt: "Centre-ville de Goma", theme: "ville" },

  // Vidéos courtes (liens ou fichiers locaux)
  { id: 4, type: "video", src: "/videos/goma-presentation.mp4", title: "Présentation de Goma" },
  { id: 5, type: "video", src: "/videos/temoignage-citoyen.mp4", title: "Témoignage d’un citoyen" },
];

const GalerieMultimedia = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const openModal = (media: MediaItem) => {
    setSelectedMedia(media);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedMedia(null);
  };

  return (
    <section className="py-16 px-6 bg-gray-50" id="galerie-multimedia">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Galerie multimédia</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediaItems.map((media) => (
            <div
              key={media.id}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              onClick={() => openModal(media)}
              aria-label={media.alt || media.title || "Media item"}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") openModal(media);
              }}
            >
              {media.type === "photo" ? (
                <img
                  src={media.src}
                  alt={media.alt}
                  className="object-cover w-full h-48 hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="relative w-full h-48 bg-black">
                  <video
                    src={media.src}
                    title={media.title}
                    className="w-full h-full object-cover pointer-events-none"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white opacity-80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.75A.75.75 0 007 8.937v6.126a.75.75 0 001.234.64l6.518-3.75a.75.75 0 000-1.296z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedMedia && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
            onClick={closeModal}
            onKeyDown={(e) => e.key === "Escape" && closeModal()}
          >
            <div
              className="relative bg-white rounded-lg max-w-3xl w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Fermer la modale"
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                &#10005;
              </button>
              <h3 id="modal-title" className="text-xl font-bold mb-4 text-center">
                {selectedMedia.title || selectedMedia.alt}
              </h3>
              {selectedMedia.type === "photo" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="w-full h-auto rounded-md"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-md"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalerieMultimedia;
