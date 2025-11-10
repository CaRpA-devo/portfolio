// Komponenten Imports
import TiltedCard from "../animations/tiltedCard.comp.jsx";
import { Button } from "../atoms/button.comp.jsx";

/**
 * About - Über mich Sektion mit persönlicher Vorstellung
 * Features: TiltedCard-Animation, Kontakt-Button, Lebenslauf-Download, responsive Design
 */
export default function About() {
  return (
    <>
      <section className="flex bg-base-100 justify-between flex-wrap md:flex-nowrap p-16 ">
        {/* // Content links */}
        <div className="flex w-full flex-col ">
          <div className=" flex flex-col pb-8 md:pb-0 text-lime-100 text-2xl text-center items-center gap-4  ">
            <h2 className="text-6xl text-cyan-600 font-bold">ABOUT ME</h2>

            <p>
              Hallo, ich bin Carpa Webentwickler mit Leidenschaft für moderne
              und kreative Weblösungen.
              <br />
              <br />
              Ich gestalte und entwickle maßgeschneiderte digitale Erlebnisse,
              die Funktionalität und Ästhetik perfekt verbinden.Meine Vision ist
              es, innovative und funktionale Lösungen zu entwickeln, die nicht
              nur technisch überzeugen, sondern auch benutzerfreundlich sind.
              <br />
              <br />
              Gemeinsam realisieren wir deine Vision für das Web und setzten
              großartige Projekte um!
              <br />
            </p>
            <div className="flex gap-4">
              <Button scrollToId="kontakt">Kontakt</Button>
              <button
                onClick={() => {
                  // Immer mit window.open öffnen für bessere Kompatibilität
                  window.open("/cv.pdf", "_blank", "noopener,noreferrer");
                }}
                className="bg-primary text-lime-100 rounded-2xl md:text-3xl text-xl font-semibold md:px-8 px-6 py-2 cursor-pointer z-10 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-cyan-800"
              >
                Lebenslauf
              </button>
            </div>
          </div>
        </div>
        {/* // Content rechts */}
        <div className="w-full   ">
          <TiltedCard
            imageSrc="/img/me.jpg"
            altText="Bild von einem Cyborg mit Programmiersprachen"
          />
        </div>
      </section>
    </>
  );
}
