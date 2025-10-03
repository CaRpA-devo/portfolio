import "./index.css";
import "./App.css";
import { lazy } from "react";
import { Navbar } from "./components/organisms/navbar.org";
import { Footer } from "./components/organisms/footer.org";
import { Skills } from "./components/organisms/skills.org";
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
      <Footer />
    </>
  );
}

export default App;
