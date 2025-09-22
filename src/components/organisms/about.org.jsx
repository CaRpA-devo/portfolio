import TiltedCard from "../animations/tiltedCard.comp.jsx";

export function About() {
  return (
    <>
      <section className="flex bg-base-100 justify-between  p-32">
        {/* // Content links */}
        <div className="flex w-full  ">
          <div className=" flex flex-col text-lime-100 text-2xl text-center gap-8  ">
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
          </div>
        </div>
        {/* // Content rechts */}
        <div
          className="flex w-full flex-col rounded-2xl pr-16 object-cover 
                 contrast-125 saturate-125 brightness-105 
                 shadow-lg place-items-end hover:shadow-[0_0_15px_rgba(128,0,255,0.8)]"
        >
          <TiltedCard
            imageSrc="src/assets/img/me.jpg"
            altText="Bild von einem Cyborg mit Programmiersprachen"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="400px"
            rotateAmplitude={18}
            scaleOnHover={1.4}
            className="rounded-2xl object-cover contrast-125 saturate-125 brightness-105 shadow-lg hover:shadow-[0_0_15px_rgba(128,0,255,0.8)]"
          />
        </div>
      </section>
    </>
  );
}
