import { lazy, Suspense, useRef } from "react";
const FlyingLogos = lazy(() => import("../animations/flyinglogos.comp"));
const SplashCursor = lazy(() => import("../animations/splashcursor.comp"));
import { useFlyingLogos } from "../../hooks/useFlyingLogos";

export default function Hero() {
  const heroRef = useRef(null);
  const { flyingLogos, animationStarted, toggleLogoAnimation } =
    useFlyingLogos();

  return (
    <>
      <div
        // TODO die id muss wieder raus nur zu test zwecken
        id="kontakt"
        ref={heroRef}
        className="hero min-h-screen bg-cover bg-center contrast-110 saturate-125 brightness-105"
        style={{
          backgroundImage: 'url("src/assets/img/bgnew.jpg")',
          position: "relative",
          overflow: "hidden",
          cursor: "default",
        }}
      >
        {/* Optional: leichtes Overlay für besseren Kontrast */}
        <div className="absolute inset-0 bg-black/20"></div>
        <Suspense fallback={null}>
          <SplashCursor targetRef={heroRef} />
        </Suspense>
        <Suspense fallback={null}>
          <FlyingLogos
            flyingLogos={flyingLogos}
            animationStarted={animationStarted}
            onToggle={toggleLogoAnimation}
          />
        </Suspense>
        <div className="hero-content  flex flex-col items-center justify-start h-full md:pt-15 pt-40">
          <div className="max-w-md w-full flex flex-col  items-center">
            <h1 className="mb-5 text-hero text-lime-100 font-bold text-center z-50">
              Webentwickler
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
