import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full fixed top-0 z-50">
      <nav className="  text-white px-6 py-3 md:px-12 md:py-4 rounded-b-2xl  flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/LGO.png" className="h-8" alt="Goma" />
          <span className="text-xl font-bold tracking-wide">NORD KIVU</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
  <li>
    <a href="/" className="hover:underline">Accueil</a>
  </li>
  <li>
    <a href="/News" className="hover:underline">Actualités</a>
  </li>
  <li className="group relative">
    <a href="/Tourism" className="hover:underline">Tourisme</a>
    <ul className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 rounded shadow-lg z-50">
      <a href="/Tourism/Attractions" className="px-4 py-2 hover:bg-gray-100">Attractions</a>
      <a href="/Tourism/Hotels" className="px-4 py-2 hover:bg-gray-100">Hôtels</a>
    </ul>
  </li>
  <li className="group relative">
    <a href="/Invest" className="hover:underline">Investir</a>
    <ul className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 rounded shadow-lg z-50">
      <a href="/Invest/Opportunities" className="px-4 py-2 hover:bg-gray-100">Opportunités</a>
      <a href="/Invest/Statistics" className="px-4 py-2 hover:bg-gray-100">Statistiques</a>
      <a href="/Invest/Guide" className="px-4 py-2 hover:bg-gray-100">Guide</a>
      <a href="/Invest/FormIntent" className="px-4 py-2 hover:bg-gray-100">Formulaire</a>
    </ul>
  </li>
  <li>
    <a href="/About" className="hover:underline">Services</a>
  </li>
  <li>
    <a href="/AdminDirectory" className="hover:underline">Annuaire</a>
  </li>
  <li>
    <a href="/Contact" className="hover:underline">Contact</a>
  </li>
  <li>
            <a href="/Join" className="ml-2 px-4 py-1 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
              Join Us
            </a>
          </li>
</ul>


        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black w-full px-6 py-4 space-y-2 shadow-lg rounded-b-xl backdrop-blur-sm">
          <a href="/News" className="block">Actualités</a>
          <details>
            <summary className="cursor-pointer">Tourisme</summary>
            <div className="pl-4 space-y-1">
              <a href="/Tourism/Attractions">Attractions</a>
              <a href="/Tourism/Hotels">Hôtels</a>
            </div>
          </details>
          <details>
            <summary className="cursor-pointer">Investir</summary>
            <div className="pl-4 space-y-1">
              <a href="/Invest/Opportunities">Opportunités</a>
              <a href="/Invest/Statistics">Statistiques</a>
              <a href="/Invest/Guide">Guide</a>
            </div>
          </details>
          <a href="/About" className="block">Services</a>
          <a href="/AdminDirectory" className="block">Annuaire</a>
          <a href="/Contact" className="block">Contact</a>
            <a href="/Join" className="block bg-yellow-400 text-black font-semibold text-center py-2 rounded">Join Us</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
