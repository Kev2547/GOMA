import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-700">

        {/* 🌍 À propos */}
        <div>
          <h3 className="text-xl font-semibold mb-4">À propos de Goma</h3>
          <p className="text-sm leading-relaxed">
            Goma est une ville dynamique située à l’Est de la RDC, au cœur du développement régional, de la culture et de l’innovation.
          </p>
        </div>

        {/* 🔗 Liens utiles */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Liens utiles</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">À propos</a></li>
            <li><a href="/news" className="hover:underline">Actualités</a></li>
            <li><a href="/tourism" className="hover:underline">Tourisme</a></li>
            <li><a href="/invest" className="hover:underline">Investir à Goma</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* 📬 Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-2">Inscrivez-vous pour recevoir les dernières actualités.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="px-4 py-2 rounded bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded text-white"
            >
              S’abonner
            </button>
          </form>
        </div>

        {/* 📱 Contact & Réseaux */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Nous contacter</h3>
          <p className="text-sm">📍 Goma, RDC</p>
          <p className="text-sm">✉️ contact@villedegoma.cd</p>
          <p className="text-sm mb-3">📞 +243 990 145 567</p>

          <div className="flex gap-4 text-white text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* ⬇️ Bas de page */}
      <div className="text-center text-sm text-gray-400 py-6">
        © {new Date().getFullYear()} Ville de Goma. Tous droits réservés. <br />
        Propulsé par <a href="www.dmbgroup.com"><span className="text-blue-500 font-semibold">DMB Group</span></a>
      </div>
    </footer>
  );
};

export default Footer;
