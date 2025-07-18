import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EconomicStatsSection = () => {
  const stats = [
    { label: "Croissance Éco.", value: 6.5, suffix: "%", color: "#4CAF50" },
    { label: "Entreprises créées", value: 1200, suffix: "", color: "#2196F3" },
    { label: "Projets en cours", value: 78, suffix: "", color: "#FF9800" },
    { label: "Coût foncier", value: 45, suffix: "$/m²", color: "#9C27B0" },
    { label: "ROI moyen", value: 18, suffix: "%", color: "#FF5722" },
    { label: "Population jeune", value: 65, suffix: "%", color: "#3F51B5" },
  ];

  const chartData = {
    labels: stats.map((s) => s.label),
    datasets: [
      {
        label: "Statistiques 2024",
        data: stats.map((s) => s.value),
        backgroundColor: stats.map((s) => s.color),
        borderRadius: 6
      }
    ]
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "📊 Statistiques économiques locales de Goma"
      }
    },
    animation: {
      duration: 1500,
      easing: "easeOutBounce" as const // ✅ Astuce : typage explicite
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: any) {
            return typeof value === "number" && value > 100 ? value : value + "%";
          }
        }
      }
    }
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        📈 Statistiques économiques locales
      </h2>

      {/* 👉 Responsive Cards for Small Devices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:hidden">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-5 shadow-md">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl font-semibold text-gray-800 mt-1">
              {stat.value} {stat.suffix}
            </p>
          </div>
        ))}
      </div>

      {/* 👉 Chart for Medium+ Devices */}
      <div className="hidden md:block max-w-5xl mx-auto h-[400px] mt-8">
        <Bar data={chartData} options={options} />
      </div>
    </section>
  );
};

export default EconomicStatsSection;
