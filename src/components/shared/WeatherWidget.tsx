import { useEffect, useState } from "react";

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Goma&appid=1080e36323196eee21df767093fbff3f&units=metric&lang=fr`
        );
        const data = await res.json();

        setWeather({
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        });
      } catch (error) {
        console.error("Erreur de récupération météo :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-lg shadow-md text-sm animate-pulse">
        <p>Chargement météo...</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="bg-red-500/20 text-white p-3 rounded-lg shadow-md text-sm">
        <p>❌ Impossible de charger la météo</p>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-lg shadow-lg flex items-center gap-2 text-sm">
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
        className="w-8 h-8"
      />
      <div>
        <p className="font-semibold">Goma</p>
        <p>{weather.temp.toFixed(1)}°C · {weather.description}</p>
      </div>
    </div>
  );
};

export default WeatherWidget;
