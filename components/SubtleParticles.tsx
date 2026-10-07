"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  shape: "dot" | "spark";
};

export function SubtleParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let particles: Particle[] = [];

    const colors = ["#1776E9", "#1E9C34", "#4AD45F", "#5BA4F0"];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Dense field of tiny specs — dust / grain particles, not bubbles
      const count = Math.max(90, Math.floor((width * height) / 9000));
      particles = Array.from({ length: count }, () => {
        const size = Math.random() < 0.75 ? 1 + Math.random() : 1.5 + Math.random() * 1.2;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          size,
          vx: (Math.random() - 0.5) * 0.35,
          vy: -0.08 - Math.random() * 0.28,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.35 + Math.random() * 0.4,
          shape: Math.random() < 0.82 ? "dot" : "spark",
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (!reduceMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Slight horizontal drift variation
          particle.vx += (Math.random() - 0.5) * 0.01;
          particle.vx = Math.max(-0.4, Math.min(0.4, particle.vx));

          if (particle.y < -4) {
            particle.y = height + 4;
            particle.x = Math.random() * width;
          }
          if (particle.x < -4) particle.x = width + 4;
          if (particle.x > width + 4) particle.x = -4;
        }

        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;

        if (particle.shape === "spark") {
          // Tiny cross / spark fleck
          const s = particle.size;
          ctx.fillRect(particle.x - s * 1.4, particle.y - 0.4, s * 2.8, 0.8);
          ctx.fillRect(particle.x - 0.4, particle.y - s * 1.4, 0.8, s * 2.8);
        } else {
          // Sharp square pixel-like particle (reads as grain, not a bubble)
          const s = particle.size;
          ctx.fillRect(particle.x - s / 2, particle.y - s / 2, s, s);
        }
      }

      ctx.globalAlpha = 1;
      if (!reduceMotion) raf = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[35]"
    />
  );
}
