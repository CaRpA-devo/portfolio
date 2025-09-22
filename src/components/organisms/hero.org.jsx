import { lazy, Suspense, useRef } from "react";
const FlyingLogos = lazy(() => import("../animations/flyinglogos.comp"));
const SplashCursor = lazy(() => import("../animations/splashcursor.comp"));
import { useFlyingLogos } from "../../hooks/useFlyingLogos";

export function Hero() {
  const heroRef = useRef(null);
  const { flyingLogos, animationStarted, toggleLogoAnimation } =
    useFlyingLogos();

  return (
    <>
      <div
        ref={heroRef}
        className="hero min-h-[750px]"
        style={{
          backgroundImage: 'url("src/assets/img/bgnew.jpg")',
          position: "relative",
          overflow: "hidden",
          cursor: "default",
        }}
      >
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
        <div className="hero-content text-neutral-content flex flex-col items-center justify-start h-full pt-16">
          <div className="max-w-md w-full flex flex-col items-center">
            <h1 className="mb-5 text-9xl font-bold text-center z-50">
              Web-Softwareentwickler
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
