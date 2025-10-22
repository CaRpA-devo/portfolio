import "./index.css";
import "./App.css";
import { lazy } from "react";
import { Navbar } from "./components/organisms/navbar.org";
import { Footer } from "./components/organisms/footer.org";
import { Skills } from "./components/organisms/skills.org";
import { Kontakt } from "./components/organisms/kontakt.org";

const Hero = lazy(() => import("./components/organisms/hero.org"));
const About = lazy(() => import("./components/organisms/about.org"));
// TODO lazyloading und Router?

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Kontakt />
      <Footer />
    </>
  );
}

export default App;
