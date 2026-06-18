import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Rewards from "./pages/Rewards.jsx";
import Ofertas from "./pages/Ofertas.jsx";
import Locais from "./pages/Locais.jsx";
import DownloadApp from "./pages/DownloadApp.jsx";
import FooterInfo from "./pages/FooterInfo.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/locais" element={<Locais />} />
        <Route path="/download" element={<DownloadApp />} />
        <Route
          path="/politica-de-privacidade"
          element={<FooterInfo tipo="privacidade" />}
        />
        <Route path="/termos" element={<FooterInfo tipo="termos" />} />
        <Route path="/contato" element={<FooterInfo tipo="contato" />} />
        <Route
          path="/trabalhe-conosco"
          element={<FooterInfo tipo="trabalho" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
