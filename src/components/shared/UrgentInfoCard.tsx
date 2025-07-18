// src/components/shared/UrgentInfoCard.tsx
const UrgentInfoCard = () => {
  return (
    <div className="bg-red-600/80 text-white p-4 rounded-lg shadow-lg max-w-sm w-[300px]">
      <h2 className="font-bold text-lg mb-1">🚨 Infos urgentes</h2>
      <p>Coupure d’eau prévue demain à Kyeshero à partir de 14h00.</p>
    </div>
  );
};

export default UrgentInfoCard;
