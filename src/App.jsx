import "./index.css";
import "./App.css";
import { Navbar } from "./components/organisms/navbar.org";
import { Footer } from "./components/organisms/footer.org";
import { Hero } from "./components/organisms/hero.org";
import { About } from "./components/organisms/about.org";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default App;
