import HeroSection from "../atoms/flyinglogos.comp";
import SplashCursor from "../atoms/splashcursor.comp";
import { useRef } from "react";

export function Hero() {
  const heroRef = useRef(null);

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
        <SplashCursor targetRef={heroRef} />
        <HeroSection />
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
