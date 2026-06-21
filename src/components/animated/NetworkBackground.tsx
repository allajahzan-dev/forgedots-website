"use client";

import { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Explicitly define the Particle class before use
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6; // Very slow drift
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls safely
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(139, 92, 246, 0.4)"; // Violet-500 equivalent
        ctx!.fill();
      }
    }

    let particles: Particle[] = [];

    // Particle settings
    const particleCount = 80;
    const maxDistance = 180;
    const mouseRadius = 250;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();

      if (rect) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
      }
    };

    const init = () => {
      resize();
      particles = [];
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle(rect.width, rect.height));
        }
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        // Connect to mouse interactively
        const dxMouse = mouse.x - particles[i].x;
        const dyMouse = mouse.y - particles[i].y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseRadius) {
          ctx!.beginPath();
          ctx!.moveTo(particles[i].x, particles[i].y);
          ctx!.lineTo(mouse.x, mouse.y);
          const opacity = 1 - distMouse / mouseRadius;
          ctx!.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.4})`; // Violet
          ctx!.lineWidth = 1;
          ctx!.stroke();

          // Gentle interactive magnetic pull towards mouse
          particles[i].x += dxMouse * 0.02;
          particles[i].y += dyMouse * 0.02;
        }

        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - distance / maxDistance;
            ctx!.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.25})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        ctx.clearRect(0, 0, rect.width, rect.height);

        particles.forEach((particle) => {
          particle.update(rect.width, rect.height);
          particle.draw();
        });

        drawLines();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", init);
    // Bind directly to window to ensure we catch mouse events seamlessly over the hero section
    // window.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", init);
      // window.removeEventListener("mousemove", handleMouseMove);
      // window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-1 pointer-events-none mix-blend-screen opacity-30"
    />
  );
}
