import React, { useState } from "react";

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulation : envoie email (à remplacer par requête API réelle)
    if (email.includes("@")) {
      console.log("Email enregistré :", email);
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow mt-10 max-w-lg mx-auto">
      <h3 className="text-xl font-semibold mb-3 text-blue-900 text-center">
        📬 Abonnez-vous à nos actualités
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-2 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          S’abonner
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 mt-3 text-sm text-center">
          ✅ Merci pour votre abonnement !
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-3 text-sm text-center">
          ⚠️ Adresse email invalide.
        </p>
      )}
    </div>
  );
};

export default SubscribeForm;
