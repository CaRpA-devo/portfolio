import TiltedCard from "../animations/tiltedCard.comp.jsx";
import { Button } from "../atoms/button.comp.jsx";

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
            {/* TODO ID anpasse für Hire ME */}
            <Button scrollToId="kontakt">Hire me !</Button>
          </div>
        </div>
        {/* // Content rechts */}
        <div className="w-full   ">
          <TiltedCard
            imageSrc="/src/assets/img"
            altText="Bild von einem Cyborg mit Programmiersprachen"
          />
        </div>
      </section>
    </>
  );
}
