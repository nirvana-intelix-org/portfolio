"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden border-b border-ink-line pt-28 md:pt-32"
    >
      <div className="copper-glow -top-40 -right-40" />
      <div className="teal-glow top-20 left-0" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 20%), rgba(189,90,26,0.10), transparent 65%)",
        }}
      />

      <div className="container-px relative">
        <div
          className={`flex items-center gap-3 transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="pill pill-teal">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-teal" />
            Building in MENA — 2026
          </span>
          <span className="pill">Riyadh · New Delhi</span>
        </div>

        <h1
          className={`display-xl mt-8 max-w-5xl transition-all delay-100 duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Digital products,
          <br />
          <span className="relative inline-block italic text-copper">
            built for MENA
            <svg
              aria-hidden
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8 Q 50 2, 100 6 T 198 5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className="text-copper/60"
              />
            </svg>
          </span>
          .
        </h1>

        <p
          className={`text-body mt-8 max-w-2xl text-lg transition-all delay-200 duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="text-ink">Nirvana Intelix</span> is a product
          studio building and operating digital products for the Middle East.
          We make <span className="text-ink">Webziq</span> — our multi-tenant
          website platform — and ship our own products on top of it: AI
          commerce, content platforms, marketplaces, communities and Islamic
          technology. Bilingual by default.
        </p>

        <div
          className={`mt-10 flex flex-wrap items-center gap-3 transition-all delay-300 duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <a href="#products" className="btn-primary group/cta">
            See our products
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
            >
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">
            Start a project
          </a>
        </div>

        <Stats />
      </div>

      <Marquee />
    </section>
  );
}

function Stats() {
  return (
    <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line md:grid-cols-4">
      {[
        { k: "8+", v: "Products in production" },
        { k: "AR/EN", v: "Bilingual by default" },
        { k: "MENA", v: "Built for the region" },
        { k: "AI-first", v: "Where it earns its place" },
      ].map((s) => (
        <div key={s.v} className="bg-paper p-6">
          <div className="font-serif text-3xl text-ink md:text-4xl">{s.k}</div>
          <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-dim">
            {s.v}
          </div>
        </div>
      ))}
    </div>
  );
}

function Marquee() {
  const items = [
    "AI Commerce",
    "Headless Storefronts",
    "Arabic-first UX",
    "BigCommerce",
    "Next.js",
    "Node.js / TypeScript",
    "OpenAI",
    "Marketplaces",
    "Community Networks",
    "Islamic Technology",
    "Healthcare SaaS",
    "Classifieds Platforms",
    "Pilgrim Logistics",
    "Co-working Operations",
  ];
  const row = [...items, ...items];

  return (
    <div className="mt-20 border-y border-ink-line bg-paper-raised/60 py-5">
      <div className="group/marquee relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent" />
        <div className="flex w-max animate-marquee gap-12 group-hover/marquee:[animation-play-state:paused]">
          {row.map((t, i) => (
            <div
              key={`${t}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <span className="h-1 w-1 rounded-full bg-copper" />
              <span className="font-serif text-2xl italic text-ink-muted transition hover:text-ink">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
