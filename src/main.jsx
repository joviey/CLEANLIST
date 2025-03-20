import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Navbar.jsx";
import Hero from "./HeroSection.jsx";
import Background from "./background.jsx";
import Design from "./Design.jsx";
import Integration from "./integration.jsx";
import Feature from "./feature.jsx";
import Footer from "./footer.jsx";
import Price from "./price.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Background>
      <App />
      <Hero />
      <Design />
      <Integration />
      <Feature />
      <Footer />
    </Background>
  </StrictMode>,
);
