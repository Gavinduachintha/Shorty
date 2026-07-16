"use client";
import React from "react";

interface BeamConfig {
  left: string;
  trackHeight: number; // px
  beamHeight: number; // px
  duration: number; // seconds
  delay: number; // seconds
  trackOpacity?: number;
}

const BEAMS: BeamConfig[] = [
  {
    left: "8%",
    trackHeight: 550,
    beamHeight: 140,
    duration: 3.8,
    delay: 0,
    trackOpacity: 0.07,
  },
  {
    left: "22%",
    trackHeight: 700,
    beamHeight: 180,
    duration: 4.6,
    delay: 1.2,
    trackOpacity: 0.06,
  },
  {
    left: "38%",
    trackHeight: 800,
    beamHeight: 120,
    duration: 3.4,
    delay: 2.5,
    trackOpacity: 0.07,
  },
  {
    left: "50%",
    trackHeight: 900,
    beamHeight: 200,
    duration: 5.2,
    delay: 0.4,
    trackOpacity: 0.06,
  },
  {
    left: "63%",
    trackHeight: 750,
    beamHeight: 160,
    duration: 4.2,
    delay: 1.9,
    trackOpacity: 0.07,
  },
  {
    left: "78%",
    trackHeight: 640,
    beamHeight: 140,
    duration: 3.7,
    delay: 3.1,
    trackOpacity: 0.06,
  },
  {
    left: "92%",
    trackHeight: 500,
    beamHeight: 110,
    duration: 4.9,
    delay: 0.9,
    trackOpacity: 0.07,
  },
];

const Beam = ({
  left,
  trackHeight,
  beamHeight,
  duration,
  delay,
  trackOpacity = 0.07,
}: BeamConfig) => {
  // Total travel: beam starts fully above the track, ends fully below
  const totalTravel = trackHeight + beamHeight;

  return (
    <div
      className="absolute top-0"
      style={{
        left,
        width: "1px",
        height: `${trackHeight}px`,
        overflow: "hidden",
      }}
    >
      {/* Static faint track */}
      <div
        className="absolute inset-0"
        style={{
          width: "1px",
          background: `rgba(139,92,246,${trackOpacity})`,
        }}
      />

      {/* Travelling beam particle — starts above, travels down, exits below */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "1px",
          height: `${beamHeight}px`,
          background:
            "linear-gradient(to bottom, transparent 0%, #8B5CF6 35%, #C4B5FD 55%, transparent 100%)",
          animation: `beam-fall-${Math.round(duration * 10)} ${duration}s linear ${delay}s infinite`,
          transform: `translateY(-${beamHeight}px)`,
        }}
      />
    </div>
  );
};

// Inject one @keyframes rule per unique duration to avoid CSS variable issues
const BeamStyles = () => {
  const rules = BEAMS.map((b) => {
    const name = `beam-fall-${Math.round(b.duration * 10)}`;
    const travel = b.trackHeight + b.beamHeight;
    return `@keyframes ${name} { from { transform: translateY(-${b.beamHeight}px); } to { transform: translateY(${travel}px); } }`;
  });
  // deduplicate
  const unique = [...new Set(rules)].join("\n");
  return <style>{unique}</style>;
};

const AnimatedBeams = () => (
  <>
    <BeamStyles />
    <div className="pointer-events-none absolute inset-x-0 top-0">
      {BEAMS.map((beam, i) => (
        <Beam key={i} {...beam} />
      ))}
    </div>
  </>
);

export default AnimatedBeams;
