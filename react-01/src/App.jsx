import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Grading from "./pages/grading/Grading";
import Live from "./pages/live/Live";
import AboutPage from "./pages/about/AboutPage";
import Vault from "./pages/vault/Vault";
import SaintsPreview from "./pages/saints-preview/SaintsPreview";
import CollegiatePreview from "./pages/collegiate-preview/CollegiatePreview";
import GoldPreview from "./pages/gold-preview/GoldPreview";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="grading" element={<Grading />} />
          <Route path="live" element={<Live />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vault" element={<Vault />} />
          <Route path="saints-preview" element={<SaintsPreview />} />
          <Route path="collegiate-preview" element={<CollegiatePreview />} />
          <Route path="gold-preview" element={<GoldPreview />} />
          <Route
            path="*"
            element={
              <div className="container page-content">
                <h1>Page not found</h1>
                <Link className="button" to="/">
                  Return home
                </Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
