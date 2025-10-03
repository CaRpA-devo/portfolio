import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LOGO_DATA } from "../data/flyingLogos";
import { FLYING_LOGOS_CONFIG } from "../config/flyingLogos.config";

//use Flyinglogos

export function useFlyingLogos(options = {}) {
  // Konfiguration zusammenführen (Defaults + Option-Overrides), memoisieren
  const cfg = useMemo(
    () => ({ ...FLYING_LOGOS_CONFIG, ...options }),
    [options]
  );
  const {
    sizeRange,
    durationRange,
    delayRange,
    curveRange,
    startOffsetX,
    endOffsetX,
    verticalPadding,
    intervalMs,
    maxLogos,
    initialCount,
    batchPerTick,
  } = cfg;
  // Statischer Katalog an Logos/Farben; useRef, damit keine Re-Renders entstehen
  const logoData = useRef(LOGO_DATA);

  // Render-Daten der Logos (wird in der UI iteriert)
  const [flyingLogos, setFlyingLogos] = useState([]);
  // Status, ob die Animation aktiv ist (für UI/Buttons)
  const [animationStarted, setAnimationStarted] = useState(false);
  // Intervall-Handle in Ref ablegen (kein Re-Render nötig)
  const intervalIdRef = useRef(null);

  /**
   * Erzeugt ein einzelnes Logo-Objekt mit zufälligen Eigenschaften.
   * Hinweis: nutzt window.innerWidth/innerHeight → nur im Browser verwenden.
   */
  const generateRandomLogo = useCallback(() => {
    const data = logoData.current;
    const randomLogo = data[Math.floor(Math.random() * data.length)];

    const [minSize, maxSize] = sizeRange;
    const [minDur, maxDur] = durationRange;
    const [minDelay, maxDelay] = delayRange;
    const [minCurve, maxCurve] = curveRange;
    const startX = startOffsetX;
    const startY =
      Math.random() * (window.innerHeight - 2 * verticalPadding) +
      verticalPadding;
    const endX = window.innerWidth + endOffsetX;
    const endY =
      Math.random() * (window.innerHeight - 2 * verticalPadding) +
      verticalPadding;
    const duration = Math.random() * (maxDur - minDur) + minDur; // s
    const delay = Math.random() * (maxDelay - minDelay) + minDelay; // s
    const size = Math.random() * (maxSize - minSize) + minSize; // px
    const rotation = Math.random() * 360;
    const curve = Math.random() * (maxCurve - minCurve) + minCurve; // px

    return {
      id: Math.random(),
      ...randomLogo,
      startX,
      startY,
      endX,
      endY,
      duration,
      delay,
      size,
      rotation,
      curve,
      createdAt: Date.now(),
    };
  }, [
    sizeRange,
    durationRange,
    delayRange,
    curveRange,
    startOffsetX,
    endOffsetX,
    verticalPadding,
  ]);

  /**
   * Startet die Animation: initiale Logos erstellen und anschließend periodisch
   * neue hinzufügen. Falls bereits aktiv, wird nichts erneut gestartet.
   * Lazy Loading: Animation startet erst beim ersten Klick.
   */
  const startAnimation = useCallback(() => {
    if (intervalIdRef.current) return;
    setAnimationStarted(true);

    // Nur wenige initiale Logos für bessere Performance
    const initialLogos = Array.from(
      { length: Math.min(initialCount ?? 10, maxLogos) },
      generateRandomLogo
    );
    setFlyingLogos(initialLogos);

    const interval = setInterval(() => {
      setFlyingLogos((current) => {
        const now = Date.now();
        // Alte Logos entfernen, wenn deren geplante Animationszeit abgelaufen ist
        const filtered = current.filter(
          (logo) =>
            now - logo.createdAt < (logo.duration + logo.delay + 2) * 1000 // +2s Puffer
        );

        // Nur neue Logos hinzufügen wenn unter der Maximalanzahl
        if (filtered.length < maxLogos) {
          const newLogos = Array.from(
            { length: Math.min(batchPerTick ?? 1, maxLogos - filtered.length) },
            generateRandomLogo
          );
          return [...filtered, ...newLogos];
        }

        return filtered;
      });
    }, intervalMs);

    intervalIdRef.current = interval;
  }, [intervalMs, maxLogos, generateRandomLogo, initialCount, batchPerTick]);

  /**
   * Stoppt die Animation, leert die Liste und räumt das Intervall auf.
   */
  const stopAnimation = useCallback(() => {
    setAnimationStarted(false);
    setFlyingLogos([]);
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  }, []);

  /**
   * Komfort-Handler zum Umschalten zwischen Start und Stop.
   */
  const toggleLogoAnimation = useCallback(() => {
    if (animationStarted) {
      stopAnimation();
    } else {
      startAnimation();
    }
  }, [animationStarted, startAnimation, stopAnimation]);

  // Cleanup bei Unmount: Intervall zuverlässig beenden
  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };
  }, []);

  // Öffentliche API des Hooks
  return {
    flyingLogos,
    animationStarted,
    toggleLogoAnimation,
    startAnimation,
    stopAnimation,
  };
}
