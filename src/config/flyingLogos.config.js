// Zentrale Konfiguration für die fliegenden Logos
export const FLYING_LOGOS_CONFIG = {
  maxLogos: 8, // Weniger Logos für bessere Performance
  intervalMs: 2000, // Längere Intervalle
  initialCount: 3, // Weniger initiale Logos
  batchPerTick: 1, // Nur ein Logo pro Batch
  startOffsetX: -50,
  endOffsetX: 50,
  sizeRange: [80, 120], // Größere Logos
  durationRange: [5, 10], // Sehr lange Animation
  delayRange: [0, 2], // Weniger Delay
  curveRange: [-50, 50], // Weniger extreme Kurven
  verticalPadding: 100, // px vom oberen/unteren Rand
};
