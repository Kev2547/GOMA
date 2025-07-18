// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/AboutPage";
import News from "./pages/News/News";
import Tourism from "./pages/Tourism/Tourism";
import Invest from "./pages/Invest/Invest";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* 🔝 Barre de navigation */}
        <Navbar />

        {/* 🌐 Contenu principal */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/invest" element={<Invest />} />
            
          </Routes>
        </main>

        {/* 🔚 Pied de page */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
