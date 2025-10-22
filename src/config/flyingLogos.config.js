// Zentrale Konfiguration für die fliegenden Logos
export const FLYING_LOGOS_CONFIG = {
  maxLogos: 6, // Noch weniger Logos für bessere Performance
  intervalMs: 2000, // Noch längere Intervalle
  initialCount: 4, // Noch weniger initiale Logos
  batchPerTick: 3, // Nur ein Logo pro Batch
  startOffsetX: -50,
  endOffsetX: 50,
  sizeRange: [60, 100], // Kleinere Logos für bessere Performance
  durationRange: [3, 6], // Kürzere Animation
  delayRange: [0, 1], // Weniger Delay
  curveRange: [-30, 30], // Weniger extreme Kurven
  verticalPadding: 100, // px vom oberen/unteren Rand
};
