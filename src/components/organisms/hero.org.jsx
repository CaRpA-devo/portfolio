// React Imports
import { lazy, Suspense, useRef, useEffect } from "react";

// Lazy Imports für Performance-Optimierung
const FlyingLogos = lazy(() => import("../animations/flyinglogos.comp"));
const SplashCursor = lazy(() => import("../animations/splashcursor.comp"));

// Custom Hook für FlyingLogos-Logik
import { useFlyingLogos } from "../../hooks/useFlyingLogos";

/**
 * Hero-Sektion - Hauptsektion der Website mit Animationen
 * Features: FlyingLogos, SplashCursor, responsive Design
 */
export default function Hero() {
  // Ref für Hero-Container (für Scroll-Detection)
  const heroRef = useRef(null);

  // FlyingLogos-Hook für Animation-Steuerung
  const { flyingLogos, animationStarted, toggleLogoAnimation, stopAnimation } =
    useFlyingLogos();

  // Scroll-Event-Listener: Stoppe FlyingLogos wenn aus Hero gescrollt wird
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && animationStarted) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const isHeroVisible =
          heroRect.bottom > 0 && heroRect.top < window.innerHeight;

        // Wenn Hero nicht mehr sichtbar ist, stoppe die Animation
        if (!isHeroVisible) {
          stopAnimation();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationStarted, stopAnimation]);

  return (
    <>
      <div
        ref={heroRef}
        className="hero min-h-120 md:min-h-screen bg-cover bg-center contrast-110 saturate-125 brightness-105"
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
        <div className="flex flex-col items-center z-50 md:pt-32 justify-center md:justify-start h-full">
          <div className="max-w-md w-full flex flex-col items-center gap-0">
            <h1 className=" md:text-9xl text-6xl font-bold text-center">
              Junior Webentwickler
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
