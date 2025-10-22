import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import "../animations/tiltedCard.style.css";
import { Tilted_Card_Config } from "../../config/tiltedCard.config";

// Framer Motion Spring-Konfiguration für 3D-Effekte
const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

/**
 * TiltedCard - 3D-Tilted Card mit Framer Motion
 * Features: 3D-Rotation, Touch-optimiert, responsive Design, GPU-Beschleunigung
 */
export default function TiltedCard() {
  const entpacke_Tilted_config = () => ({ ...Tilted_Card_Config });
  const {
    imageSrc,
    altText,
    containerHeight,
    containerWidth,
    imageHeight,
    imageWidth,
    scaleOnHover,
    rotateAmplitude,
    showTooltip,
    overlayContent,
    displayOverlayContent,
  } = entpacke_Tilted_config();

  const ref = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const x = useMotionValue();
  const y = useMotionValue();
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  // Touch-Gerät erkennen
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.matchMedia("(max-width: 768px)").matches
      );
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  function handleMouse(e) {
    if (!ref.current || isTouchDevice) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    if (isTouchDevice) return;

    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    if (isTouchDevice) return;

    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="tilted-card-figure  rounded-2xl
                 contrast-125 saturate-125 brightness-105 "
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={!isTouchDevice ? handleMouse : undefined}
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
    >
      <motion.div
        className="tilted-card-inner  "
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img  hover:shadow-[0_0_15px_rgba(128,0,255,0.8)]"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />
        {displayOverlayContent && overlayContent && (
          <motion.div className="tilted-card-overlay">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="tilted-card-caption"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        ></motion.figcaption>
      )}
    </figure>
  );
}
