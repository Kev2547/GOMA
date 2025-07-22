import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SubscribeForm from "../../components/SubscribeForm";


interface Event {
  id: string;
  title: string;
  date: string; // ISO string
  time: string;
  location: string;
  description: string;
  category: string;
  posterUrl: string;
  registrationLink?: string;
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Journée Culturelle",
    date: "2025-07-20",
    time: "10:00 - 18:00",
    location: "Centre Culturel de Goma",
    description: "Une journée riche en musiques, danses et traditions locales.",
    category: "Culture",
    posterUrl: "/images/image50.jpg",
    registrationLink: "https://example.com/inscription/journee-culturelle",
  },
  {
    id: "2",
    title: "Marathon de Goma",
    date: "2025-07-25",
    time: "07:00 - 13:00",
    location: "Stade de Goma",
    description: "Course populaire avec plus de 2000 participants attendus.",
    category: "Sport",
    posterUrl: "/images/image51jpg",
    registrationLink: "https://example.com/inscription/marathon-goma",
  },
  {
    id: "3",
    title: "Conférence Gouvernance Locale",
    date: "2025-07-28",
    time: "09:00 - 12:00",
    location: "Mairie de Goma",
    description: "Discussion ouverte sur la participation citoyenne.",
    category: "Politique",
    posterUrl: "/images/iamge41.jpg",
  },
];

const categoryColors: Record<string, string> = {
  Culture: "bg-purple-600",
  Sport: "bg-green-600",
  Politique: "bg-blue-600",
  Default: "bg-gray-600",
};

const EventCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const eventsOfDay = selectedDate
    ? mockEvents.filter(
        (ev) =>
          new Date(ev.date).toDateString() === selectedDate.toDateString()
      )
    : [];

  const tileContent = ({
    date,
    view,
  }: {
    date: Date;
    view: "month" | "year" | "decade" | "century";
  }) => {
    if (view === "month") {
      const hasEvent = mockEvents.some(
        (ev) => new Date(ev.date).toDateString() === date.toDateString()
      );
      return hasEvent ? (
        <div className="rounded-full w-2.5 h-2.5 bg-red-500 mx-auto mt-1" />
      ) : null;
    }
    return null;
  };

  return (
    <section
      className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg"
      aria-label="Calendrier des événements"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Calendrier des événements
      </h2>

      <Calendar
        onClickDay={(date) => {
          setSelectedDate(date);
          const firstEvent = mockEvents.find(
            (ev) => new Date(ev.date).toDateString() === date.toDateString()
          );
          setSelectedEvent(firstEvent || null);
        }}
        tileContent={tileContent}
        className="mx-auto max-w-md"
      />

      {selectedDate && (
        <div className="mt-6 bg-gray-50 rounded-md p-4 shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            Événements du {selectedDate.toLocaleDateString()}
          </h3>
          {eventsOfDay.length ? (
            eventsOfDay.map((ev) => (
              <div
                key={ev.id}
                className="mb-4 p-3 border rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedEvent(ev)}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedEvent(ev)}
                role="button"
                aria-label={`Voir détails de l'événement ${ev.title}`}
              >
                <p className="font-semibold">{ev.title}</p>
                <p className="text-sm text-gray-600">{ev.time}</p>
                <p className="text-sm text-gray-600">{ev.location}</p>
              </div>
            ))
          ) : (
            <p>Aucun événement ce jour.</p>
          )}
        </div>
      )}

      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
          onClick={() => setSelectedEvent(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
        >
          <div
            className="bg-white rounded-lg max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Fermer la fenêtre d'information"
            >
              ✕
            </button>
            <h2 id="modal-title" className="text-2xl font-bold mb-2">
              {selectedEvent.title}
            </h2>
            <span
              className={`inline-block mb-3 px-2 py-1 text-xs font-medium rounded-full text-white ${
                categoryColors[selectedEvent.category] || categoryColors.Default
              }`}
            >
              {selectedEvent.category}
            </span>
            <img
              src={selectedEvent.posterUrl}
              alt={`Affiche de ${selectedEvent.title}`}
              className="w-full h-48 object-cover rounded mb-4"
              loading="lazy"
            />
            <p className="mb-2">
              <strong>Date :</strong>{" "}
              {new Date(selectedEvent.date).toLocaleDateString()} –{" "}
              {selectedEvent.time}
            </p>
            <p className="mb-2">
              <strong>Lieu :</strong> {selectedEvent.location}
            </p>
            <p className="mb-4">{selectedEvent.description}</p>
            {selectedEvent.registrationLink && (
              <a
                href={selectedEvent.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                S’inscrire
              </a>
            )}
          </div>
        </div>
      )}

      <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 text-center">
        Événements phares
      </h3>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {mockEvents.map((event) => (
          <SwiperSlide key={event.id}>
            <div
              className="relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl"
              onClick={() => setSelectedEvent(event)}
              role="button"
              tabIndex={0}
              aria-label={`Voir détails de ${event.title}`}
            >
              <img
                src={event.posterUrl}
                alt={`Affiche de ${event.title}`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 text-white">
                <h4 className="font-semibold">{event.title}</h4>
                <p className="text-sm">
                  {new Date(event.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SubscribeForm />
    </section>
    
  );
};

export default EventCalendar;
