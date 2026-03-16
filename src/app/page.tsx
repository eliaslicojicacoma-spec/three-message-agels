import Link from "next/link";
import {
  homeFoundations,
  homeHero,
  homeHighlights,
  homeImpactAreas,
  homeMissionCall,
} from "@/content/home";
import { verseOfDayContent } from "@/content/verse-of-day";
import Reveal from "@/components/ui/reveal";
import HeroDepth from "@/components/ui/hero-depth";
import TiltCard from "@/components/ui/tilt-card";

function getRandomVerse() {
  const index = Math.floor(Math.random() * verseOfDayContent.length);
  return verseOfDayContent[index];
}

export default function HomePage() {
  const verse = getRandomVerse();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-[var(--border-soft)]">
        <HeroDepth>
          <div
            className="hero-3d-bg min-h-[78vh] bg-cover bg-center"
            style={{
              backgroundImage:
                'linear-gradient(rgba(22,22,22,0.28), rgba(22,22,22,0.52)), url("https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1800&q=80")',
            }}
          >
            <div className="hero-grid-overlay" />
            <div className="hero-orb hero-orb-a hero-3d-float" />
            <div className="hero-orb hero-orb-b hero-3d-float" />

            <div className="page-shell flex min-h-[78vh] items-end py-14 md:py-20">
              <div className="hero-3d-content max-w-5xl mobile-balance">
                <Reveal>
                  <p className="eyebrow-clean text-white/80">{homeHero.badge}</p>
                </Reveal>

                <Reveal delay={80}>
                  <h1 className="hero-title kinetic-title mt-4">
                    <span className="line">{homeHero.title}</span>
                  </h1>
                </Reveal>

                <Reveal delay={160}>
                  <p className="mt-6 max-w-3xl text-xl leading-10 text-white/84 md:text-2xl">
                    {homeHero.description}
                  </p>
                </Reveal>

                <Reveal delay={220}>
                  <div className="hero-mobile-stack mt-10 flex flex-wrap gap-4">
                    <Link href={homeHero.primaryCta.href} className="button-dark button-pulse">
                      {homeHero.primaryCta.label}
                    </Link>

                    <Link
                      href={homeHero.secondaryCta.href}
                      className="button-outline button-pulse !border-white/24 !text-white hover:!bg-white/8"
                    >
                      {homeHero.secondaryCta.label}
                    </Link>
                  </div>
                </Reveal>

                <Reveal delay={300}>
                  <div className="mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
                    <div className="hero-glass-card hero-3d-card float-card-soft p-5 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/62">
                        Base
                      </p>
