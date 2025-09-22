// Zentrale Konfiguration für die fliegenden Logos
export const FLYING_LOGOS_CONFIG = {
  maxLogos: 20,
  intervalMs: 3000,
  initialCount: 10,
  batchPerTick: 2,
  startOffsetX: -150,
  endOffsetX: 150,
  sizeRange: [60, 100], // px
  durationRange: [12, 20], // s
  delayRange: [0, 5], // s
  curveRange: [-100, 100], // px
  verticalPadding: 100, // px vom oberen/unteren Rand
};
