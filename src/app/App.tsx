import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  MessageSquare,
  Shirt,
  ShieldCheck,
  Wrench,
  Trophy,
  BadgeCheck,
  Zap,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Star,
  ArrowRight,
  Hammer,
  Layers,
  Droplets,
  Ruler,
} from "lucide-react";
import { ServicesPage } from "./components/services-page";
import { ClubCricketPage } from "./components/club-cricket-page";
import { ContactPage } from "./components/contact-page";
import { Reveal } from "./components/reveal";

import logoUrl from "../imports/Aleph.png";
/* [FIX 6] Svestarn logo for footer 4th column / bottom bar */
import svestarnLogo from "../imports/svestarn-logo.png";

const CATALOGUE_URL = "https://wa.me/c/919491581580";
const WHATSAPP_URL = "https://wa.me/919491581580";

type Route = "home" | "services" | "club" | "contact";

const RED = "#C8102E";
const DARK = "#0E0E0E";
const OFF = "#F6F5F3";

const condensed = { fontFamily: "'Barlow Condensed', sans-serif" };
const body = { fontFamily: "'Barlow', sans-serif" };

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ ...condensed, color: RED, letterSpacing: "0.2em", fontWeight: 700, fontSize: "11px" }}
      className="uppercase mb-4"
    >
      {children}
    </div>
  );
}

function SectionHeading({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2
      style={{
        ...condensed,
        fontWeight: 900,
        fontSize: "clamp(40px, 6vw, 84px)",
        lineHeight: 0.9,
        letterSpacing: "-0.01em",
        color: light ? "#fff" : DARK,
      }}
      className="uppercase"
    >
      {children}
    </h2>
  );
}

function LogoLockup({
  onClick,
  hideTextOnMobile = true,
  scale = 1,
  theme = "dark",
}: {
  onClick?: () => void;
  hideTextOnMobile?: boolean;
  scale?: number;
  theme?: "light" | "dark";
}) {
  const Component = onClick ? "button" : "div";
  const isLight = theme === "light";
  const primary = isLight ? DARK : "#fff";
  const subtle = isLight ? "rgba(14,14,14,0.55)" : "rgba(255,255,255,0.55)";
  return (
    <Component
      onClick={onClick}
      className="flex items-center gap-3 group text-left transition-opacity hover:opacity-90"
      style={{ transform: `scale(${scale})`, transformOrigin: "left center" }}
    >
      <img
        src={logoUrl}
        alt="Aleph Sports"
        className="object-contain block transition-transform duration-300 group-hover:scale-105"
        style={{ height: 80, width: "auto", display: "block" }}
      />
      <span className={`${hideTextOnMobile ? "hidden sm:flex" : "flex"} flex-col leading-none`}>
        <span
          className="uppercase transition-colors duration-300"
          style={{ ...condensed, fontWeight: 800, letterSpacing: "0.18em", fontSize: "16px", color: primary }}
        >
          Aleph<span style={{ color: RED }}> Sports</span>
        </span>
        <span
          className="uppercase transition-colors duration-300"
          style={{
            ...condensed,
            fontWeight: 500,
            letterSpacing: "0.32em",
            fontSize: "9px",
            color: subtle,
            marginTop: 4,
          }}
        >
          Vijayawada · IND
        </span>
      </span>
    </Component>
  );
}

function Navbar({ route, setRoute }: { route: Route; setRoute: (r: Route) => void }) {
  const [open, setOpen] = useState(false);
  const links: { label: string; route?: Route }[] = [
    { label: "HOME", route: "home" },
    { label: "SERVICES", route: "services" },
    { label: "CLUB CRICKET", route: "club" },
  ];
  const go = (r?: Route) => {
    if (r) {
      setRoute(r);
      const path = r === "home" ? "/" : `/${r}`;
      window.history.replaceState(null, "", path);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
    setOpen(false);
  };
  const navBg = "rgba(14,14,14,0.94)";
  const navBorder = "1px solid rgba(255,255,255,0.08)";
  const linkIdle = "rgba(255,255,255,0.78)";
  const iconColor = "#ffffff";
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
      style={{
        background: navBg,
        borderBottom: navBorder,
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300"
        style={{ height: 72 }}
      >
        <LogoLockup onClick={() => go("home")} theme="dark" />
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const isActive = l.route && l.route === route;
            return (
              <button
                key={l.label}
                onClick={() => go(l.route)}
                style={{
                  ...condensed,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  fontSize: "13px",
                  color: isActive ? RED : linkIdle,
                }}
                className="relative uppercase transition-colors duration-200 hover:opacity-100"
              >
                {l.label}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] transition-all duration-300"
                  style={{
                    background: RED,
                    width: isActive ? "100%" : "0%",
                  }}
                />
              </button>
            );
          })}
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => go("contact")}
            style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "13px" }}
            className="text-white uppercase px-5 py-3 hover:opacity-90"
          >
            Contact Us
          </button>
        </div>
        <button className="md:hidden" style={{ color: iconColor }} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{
            background: DARK,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.route)}
              style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", color: "#fff" }}
              className="uppercase text-left"
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => go("contact")} style={{ background: RED, ...condensed, fontWeight: 800 }} className="text-white uppercase py-3">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}

function Hero({ setRoute }: { setRoute: (r: Route) => void }) {
  return (
    <section className="relative min-h-screen w-full flex items-end overflow-hidden" style={{ background: DARK }}>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1593341646782-e0b495cff86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(14,14,14,0.95) 30%, rgba(14,14,14,0.5) 100%)" }}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-32 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <Reveal>
            <Eyebrow>★ Aleph Sports · The Beginning</Eyebrow>
            <h1
              style={{
                ...condensed,
                fontWeight: 900,
                fontSize: "clamp(56px, 9vw, 132px)",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
              }}
              className="uppercase drop-shadow-xl"
            >
              <span className="text-white block">One Stop Solution</span>
              <span style={{ color: RED }} className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C8102E] to-[#ff2a4b]">
                For Every Sport Need
              </span>
            </h1>
            <p style={{ ...body, fontSize: "17px", lineHeight: 1.7 }} className="text-white/60 mt-8 max-w-xl">
              Vijayawada's premier sports gear destination. From custom team jerseys delivered in 7 days to expert bat
              knocking and tournament-ready cricket kits — we power every athlete with quality you can trust.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-4 mt-10">
              {/* [FIX 7] Red CTA: .aleph-btn for 0.2s ease transitions + darken-on-hover */}
              <button
                onClick={() => {
                  setRoute("contact");
                  window.history.replaceState(null, "", "/contact?subject=" + encodeURIComponent("General Enquiry"));
                  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
                }}
                style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "14px" }}
                className="aleph-btn aleph-btn-darken-red text-white uppercase px-7 py-4 hover:shadow-[0_0_20px_rgba(200,16,46,0.4)] inline-flex items-center gap-2 group"
              >
                Start Enquiry <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              {/* [FIX 7] Outline CTA: .aleph-btn transitions + fill-red hover */}
              <button
                onClick={() => {
                  setRoute("services");
                  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
                }}
                style={{
                  ...condensed,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  fontSize: "14px",
                  border: "1px solid rgba(255,255,255,0.4)",
                }}
                className="aleph-btn aleph-btn-fill-red text-white uppercase px-7 py-4 hover:border-[#C8102E]"
              >
                Explore Services
              </button>
            </div>
            <a
              href={CATALOGUE_URL}
              target="_blank"
              rel="noreferrer"
              style={{ ...body, fontSize: "14px" }}
              className="text-white/65 hover:text-white inline-block mt-6 border-b border-white/30 pb-1 transition-colors"
            >
              🛍 Browse our product catalogue on WhatsApp →
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-5 md:justify-self-end md:max-w-[220px]">
          {[
            ["500+", "Teams Outfitted"],
            ["8+", "Years of Service"],
            ["100%", "Quality Promise"],
          ].map(([n, l]) => (
            <div
              key={l}
              style={{ borderLeft: `3px solid ${RED}` }}
              className="pl-4 transition-all duration-300 hover:translate-x-1 hover:border-l-[5px]"
            >
              <div style={{ ...condensed, fontWeight: 900, fontSize: "40px", lineHeight: 1 }} className="text-white drop-shadow-md">
                {n}
              </div>
              <div
                style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px" }}
                className="uppercase text-white/60 mt-2"
              >
                {l}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  const text =
    "★ Vijayawada's #1 Sports Gear Store  ★ Custom Jerseys in 7 Days  ★ Bat Knocking Experts  ★ Club Cricket Every Week  ★ Quality Guaranteed";
  return (
    <div style={{ background: RED }} className="overflow-hidden py-5 border-y border-black/10">
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            style={{ ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "18px" }}
            className="text-white uppercase"
          >
            {text}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
    </div>
  );
}

function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Pro-Level Equipment",
      desc: "Gear trusted by serious players — every bat, pad and ball hand-picked to match real on-pitch standards.",
    },
    {
      icon: Shirt,
      title: "Custom Team Kits",
      desc: "Design your own identity. Sublimation, embroidery and tailored fits that turn your squad into a brand.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      desc: "Tournament around the corner? We move fast — express turnarounds and on-time delivery, every order.",
    },
    {
      icon: MessageSquare,
      title: "Expert Advice",
      desc: "We're players first, sellers second. Get honest guidance on bats, gear and kit from people who actually play.",
    },
  ];
  return (
    <section style={{ background: OFF }} className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
      {/* soft red glow accent */}
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] pointer-events-none opacity-[0.10]"
        style={{ background: `radial-gradient(circle, ${RED} 0%, transparent 70%)` }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-14">
        {/* LEFT — sticky intro */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow>Why Choose Us</Eyebrow>
              <h2
                className="uppercase"
                style={{
                  ...condensed,
                  fontWeight: 900,
                  fontSize: "clamp(40px, 5.4vw, 76px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.01em",
                  color: DARK,
                }}
              >
                Built For
                <span style={{ color: RED }} className="block">Athletes Who</span>
                <span className="block">Mean Business.</span>
              </h2>
              <p style={{ ...body, fontSize: "16px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-8 max-w-md">
                Four reasons clubs, captains and serious players keep coming back. No fluff — just gear, craft and
                turnaround that holds up under match pressure.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-16" style={{ background: RED }} />
                <span
                  style={{ ...condensed, fontWeight: 700, letterSpacing: "0.25em", fontSize: "11px", color: "#6B6B6B" }}
                  className="uppercase"
                >
                  The Aleph Standard
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* RIGHT — stacked rows */}
        <div className="lg:col-span-7">
          <div style={{ borderTop: "1px solid #E3E1DD" }}>
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div
                  className="group relative py-8 md:py-10 px-2 md:px-4 grid grid-cols-[auto_1fr_auto] gap-6 md:gap-8 items-start cursor-default overflow-hidden"
                  style={{ borderBottom: "1px solid #E3E1DD" }}
                >
                  {/* red sweep on hover */}
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, rgba(200,16,46,0.08) 0%, transparent 100%)`,
                    }}
                  />
                  {/* index */}
                  <div
                    style={{
                      ...condensed,
                      fontWeight: 900,
                      fontSize: "clamp(40px, 5vw, 64px)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      color: "#D9D6CF",
                    }}
                    className="group-hover:text-[#C8102E] transition-colors duration-300 relative z-10 w-[3ch]"
                  >
                    0{i + 1}
                  </div>
                  {/* content */}
                  <div className="relative z-10 min-w-0">
                    <h3
                      style={{ ...condensed, fontWeight: 800, fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "0.02em", color: DARK }}
                      className="uppercase transition-transform duration-300 group-hover:translate-x-2"
                    >
                      {title}
                    </h3>
                    <p
                      style={{ ...body, fontSize: "15px", lineHeight: 1.7, color: "#6B6B6B" }}
                      className="mt-3 max-w-xl"
                    >
                      {desc}
                    </p>
                  </div>
                  {/* icon */}
                  <div
                    className="relative z-10 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300 group-hover:rotate-[-6deg] group-hover:bg-white"
                    style={{
                      border: "1px solid #E3E1DD",
                      background: "#fff",
                    }}
                  >
                    <Icon
                      className="text-[#0E0E0E] group-hover:text-[#C8102E] transition-colors duration-300"
                      size={26}
                      strokeWidth={1.6}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: Shirt, title: "Customised Jerseys", desc: "Sublimation prints & embroidery for cricket, kabaddi, football and more — delivered in 7 days." },
    { icon: ShieldCheck, title: "Cricket Gear", desc: "Bats, pads, gloves, helmets and balls from leading brands and our own quality lines." },
    { icon: Wrench, title: "Product Repairs", desc: "Bat knocking, re-handling, grip replacement and pad repairs by experienced technicians." },
    { icon: Trophy, title: "Tournament Kits", desc: "Complete team outfitting — uniforms, accessories and travel bags ready for tournament day." },
    { icon: BadgeCheck, title: "Quality Assurance", desc: "Every product hand-inspected and guaranteed to meet club & professional standards." },
    { icon: Zap, title: "Fast Turnaround", desc: "Express orders, on-time delivery and dedicated support for last-minute team needs." },
  ];
  return (
    <section className="bg-white pt-12 md:pt-16 pb-24 md:pb-32">
      {/* Section 3 — white bg to differentiate from off-white WhyChooseUs above */}
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          {/* [FIX 3] Eyebrow "What We Do" is clear — kept as-is */}
          <Eyebrow>What We Do</Eyebrow>
          <SectionHeading>Our Services</SectionHeading>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-8" style={{ border: "1px solid #E3E1DD" }}>
          {items.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.1} className="h-full">
              <div
                className="group p-10 h-full relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:z-10"
                style={{
                  background: OFF,
                  borderTop: `4px solid ${RED}`,
                  borderRight: i % 3 !== 2 ? "1px solid #E3E1DD" : undefined,
                  borderBottom: i < 3 ? "1px solid #E3E1DD" : undefined,
                }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white mb-6 group-hover:bg-[#C8102E] transition-colors duration-300">
                  <Icon className="text-[#C8102E] group-hover:text-white transition-colors duration-300" size={24} strokeWidth={1.8} />
                </div>
                {/* [FIX 5] Product/service name: font-size 16px, weight 500 (body font) */}
                <h3
                  style={{ ...body, fontWeight: 500, fontSize: "16px" }}
                  className="uppercase mt-1"
                >
                  {title}
                </h3>
                {/* [FIX 1] Body text: 15px / line-height 1.6 */}
                <p style={{ ...body, fontSize: "15px", lineHeight: 1.6, color: "#6B6B6B" }} className="mt-3">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Jerseys() {
  const feats = [
    { icon: Layers, t: "Sublimation", d: "Vibrant full-colour prints that won't fade or peel after washing." },
    { icon: Hammer, t: "Embroidery", d: "Premium stitched logos and badges for a sharp, lasting finish." },
    { icon: Droplets, t: "Moisture Control", d: "Performance fabrics that wick sweat and keep players cool." },
    { icon: Ruler, t: "Team Fit Accuracy", d: "Custom sizing charts ensure every player gets a perfect fit." },
  ];
  return (
    <section style={{ background: DARK }} className="relative py-24 md:py-32 overflow-hidden">
      {/* full-bleed background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1761751844072-120967509161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(14,14,14,0.85) 0%, rgba(14,14,14,0.95) 100%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Editorial header: massive headline + side meta */}
        <Reveal className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <Eyebrow>Custom Jerseys</Eyebrow>
            <h2
              className="uppercase"
              style={{
                ...condensed,
                fontWeight: 900,
                fontSize: "clamp(48px, 8vw, 120px)",
                lineHeight: 0.85,
                letterSpacing: "-0.02em",
                color: "#fff",
              }}
            >
              Wear Your
              <span className="block" style={{ color: RED }}>Team's Colours.</span>
            </h2>
          </div>
          <div className="md:col-span-4">
            <div className="h-px w-full mb-6" style={{ background: "rgba(255,255,255,0.18)" }} />
            <p style={{ ...body, fontSize: "15px", lineHeight: 1.75 }} className="text-white/65">
              From design concept to final stitch — sublimation, embroidery and performance fabrics built for the
              rigours of club and tournament cricket.
            </p>
            <div
              style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.18em", fontSize: "11px" }}
              className="inline-block text-white uppercase px-4 py-2 mt-6"
            >
              ★ 7-Day Turnaround
            </div>
          </div>
        </Reveal>

        {/* Horizontal pill-row of features (distinct from Services grid) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.08)" }}>
          {feats.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08} className="h-full">
              <div
                className="group relative h-full p-7 transition-colors duration-300"
                style={{ background: DARK }}
              >
                {/* Big faded number behind */}
                <div
                  style={{
                    ...condensed,
                    fontWeight: 900,
                    fontSize: "80px",
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.04)",
                  }}
                  className="absolute top-3 right-4 select-none transition-colors duration-300 group-hover:text-[rgba(200,16,46,0.15)]"
                >
                  0{i + 1}
                </div>
                <Icon
                  className="text-white/85 group-hover:text-[#C8102E] transition-colors duration-300"
                  size={30}
                  strokeWidth={1.6}
                />
                <h4
                  style={{ ...condensed, fontWeight: 800, fontSize: "20px", letterSpacing: "0.04em" }}
                  className="uppercase mt-6 text-white"
                >
                  {t}
                </h4>
                <p style={{ ...body, fontSize: "14px", lineHeight: 1.65 }} className="text-white/55 mt-3">
                  {d}
                </p>
                {/* bottom red bar grows on hover */}
                <span
                  className="absolute left-0 bottom-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: RED }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClubBanner({ setRoute }: { setRoute: (r: Route) => void }) {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: RED,
      }}
    >
      <div className="absolute inset-0 mix-blend-overlay opacity-20 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <div className="text-5xl mb-6 animate-bounce">🏏</div>
          <h2
            style={{
              ...condensed,
              fontWeight: 900,
              fontSize: "clamp(44px, 7vw, 96px)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
            }}
            className="uppercase text-white drop-shadow-lg"
          >
            Club Cricket Matches Every Week!
          </h2>
          {/* [FIX 1] Dark-bg body text: 16px / line-height 1.6 */}
          <p style={{ ...body, fontSize: "16px", lineHeight: 1.6 }} className="text-white/90 mt-6 max-w-2xl mx-auto font-medium">
            Join Vijayawada's most active cricket community. Weekend fixtures, friendly competition, real game time.
          </p>
          {/* [FIX 7] Outline button: .aleph-btn smooth 0.2s transitions + lift */}
          <button
            onClick={() => {
              setRoute("club");
              window.history.replaceState(null, "", "/club#club-roster-form");
            }}
            style={{
              border: "2px solid rgba(255,255,255,0.9)",
              ...condensed,
              fontWeight: 800,
              letterSpacing: "0.15em",
              fontSize: "14px",
            }}
            className="aleph-btn text-white uppercase px-10 py-5 mt-10 hover:bg-white hover:text-[#C8102E] hover:border-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          >
            Join the Roster →
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function ProGear() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <Eyebrow>Premium Equipment</Eyebrow>
          <SectionHeading>Pro Cricket Gear</SectionHeading>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <Reveal delay={0.1}>
            <div className="relative h-[560px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group cursor-pointer">
              <div className="absolute inset-0 bg-[#C8102E]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply pointer-events-none"></div>
              <img
                src="https://images.unsplash.com/photo-1603722039047-bc9997bfa963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="English Willow Bat"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-8 z-20 transition-transform duration-300 group-hover:-translate-y-2"
                style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.85))" }}
              >
                <div
                  style={{ ...condensed, fontWeight: 700, letterSpacing: "0.2em", fontSize: "11px", color: RED }}
                  className="uppercase mb-3"
                >
                  Premium · Grade A
                </div>
                <h3 style={{ ...condensed, fontWeight: 900, fontSize: "44px", lineHeight: 0.9 }} className="uppercase text-white drop-shadow-md">
                  English Willow
                </h3>
                <p style={{ ...body, fontSize: "15px", lineHeight: 1.7 }} className="text-white/80 mt-3 max-w-md">
                  Hand-selected, hand-pressed bats with knocking-in service included. Ready for your first innings.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-rows-2 gap-6">
            <Reveal delay={0.2}>
              {/* [FIX 5] 4px top border on ProGear dark card */}
              <div style={{ background: DARK, borderTop: `4px solid ${RED}` }} className="p-10 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group">
                <div>
                  <Eyebrow>Safety First</Eyebrow>
                  <h3 style={{ ...condensed, fontWeight: 900, fontSize: "40px", lineHeight: 0.9 }} className="uppercase text-white transition-colors group-hover:text-[#f4f4f4]">
                    Protective Gear
                  </h3>
                </div>
                {/* [FIX 1] Dark-bg body: 15px / 1.6 */}
                <p style={{ ...body, fontSize: "15px", lineHeight: 1.6 }} className="text-white/70 mt-6">
                  Helmets, pads, gloves, abdominal guards and arm guards — fully certified protection for every position
                  on the pitch.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              {/* [FIX 5] 4px top border on light gear card too */}
              <div style={{ background: "#fff", border: "1px solid #E3E1DD", borderTop: `4px solid ${RED}` }} className="p-10 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                <div>
                  <Eyebrow>Tournament Grade</Eyebrow>
                  <h3
                    style={{ ...condensed, fontWeight: 900, fontSize: "40px", lineHeight: 0.9, color: DARK }}
                    className="uppercase transition-colors group-hover:text-[#1a1a1a]"
                  >
                    Match Balls
                  </h3>
                </div>
                {/* [FIX 1] Body: 15px / 1.6 */}
                <p style={{ ...body, fontSize: "15px", lineHeight: 1.6, color: "#6B6B6B" }} className="mt-6">
                  Leather match balls and practice balls suited for every format — from club nets to weekend fixtures.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { q: "I got some cricket items from Rohit, who sells and repairs gear, and I'm really happy with everything. He offers high-quality bats, gloves, pads, and custom cricket jerseys, all at very reasonable prices.", n: "Nalluri Sai Sagar", i: "NS" },
    { q: "The best all-in-one store for cricket and other sports in and around Vijayawada. I thoroughly enjoyed my visit and purchase at Aleph. Rohit has great insight into the wide range of stock he carries. The quality of the bats is simply magnificent and top notch.", n: "Prashant Anumula", i: "PA" },
    { q: "I recently bought a bat, ball, and a customized jersey with my name and number from Aleph Sports. The quality of all the items is top notch, and the jersey came out exactly how I wanted. The staff was helpful and the service was great.", n: "Mahabaleshwar Naik", i: "MN" },
  ];
  return (
    <section style={{ background: OFF }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-3xl">
            {/* [FIX 3] "Social Proof" → "Happy Clients" — clearer, less jargon */}
            <Eyebrow>Happy Clients</Eyebrow>
            <SectionHeading>Trusted By Local Teams</SectionHeading>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:justify-end">
            <div className="flex shrink-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} fill="#F5B400" stroke="#F5B400" className="drop-shadow-sm" />
              ))}
            </div>
            <a
              href="https://www.google.com/maps/search/Aleph+Sports+Vijayawada"
              target="_blank"
              rel="noreferrer"
              style={{ ...condensed, fontWeight: 800, letterSpacing: "0.15em", fontSize: "13px", color: RED }}
              className="uppercase border-b border-current hover:text-[#a00c24] transition-colors"
            >
              Read Google Reviews →
            </a>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {reviews.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.15}>
              {/* [FIX 5] 4px top border on testimonial dark cards */}
              <div
                style={{ background: DARK, borderTop: `4px solid ${RED}` }}
                className="p-8 h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300"
              >
                {/* [FIX 1] Dark-bg testimonial text: 15px / 1.6 */}
                <p
                  style={{ ...body, fontStyle: "italic", fontSize: "15px", lineHeight: 1.7, textAlign: "justify" }}
                  className="text-white/80 flex-1"
                >
                  "{r.q}"
                </p>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                  <div
                    className="w-12 h-12 shrink-0 flex items-center justify-center"
                    style={{ background: RED, ...condensed, fontWeight: 800, color: "#fff" }}
                  >
                    {r.i}
                  </div>
                  <div className="min-w-0">
                    <div style={{ ...condensed, fontWeight: 800, letterSpacing: "0.05em" }} className="text-white uppercase">
                      {r.n}
                    </div>
                    <div style={{ ...body, fontSize: "13px", color: "#9a9a9a" }}>{r.c}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const inputCls = "w-full bg-white border border-[#E3E1DD] px-4 py-3 outline-none focus:border-[#C8102E]";
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">
        <div>
          {/* [FIX 3] "Enquiry Desk" → "Get In Touch" — clearer label */}
          <Eyebrow>Get In Touch</Eyebrow>
          <SectionHeading>Connect With Us</SectionHeading>
          {/* [FIX 1] Body text: 16px / line-height 1.6 */}
          <p style={{ ...body, fontSize: "16px", lineHeight: 1.6, color: "#6B6B6B" }} className="mt-6 max-w-md">
            Tell us about your team or your gear needs. Our team gets back to every enquiry within 24 hours.
          </p>
          <div style={{ background: OFF, borderLeft: `4px solid ${RED}` }} className="mt-10 p-8 space-y-5">
            {[
              { Icon: Phone, l: "Phone", v: "+91 98765 43210" },
              { Icon: Mail, l: "Email", v: "hello@alephsports.in" },
              { Icon: MapPin, l: "Address", v: "MG Road, Vijayawada, AP 520001" },
              { Icon: Instagram, l: "Instagram", v: "@alephsports" },
            ].map(({ Icon, l, v }) => (
              <div key={l} className="flex items-start gap-4">
                <Icon style={{ color: RED }} size={20} />
                <div>
                  <div
                    style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px", color: RED }}
                    className="uppercase"
                  >
                    {l}
                  </div>
                  <div style={{ ...body, fontSize: "16px", color: "#111" }} className="mt-1">
                    {v}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ background: OFF, borderTop: `3px solid ${RED}` }}
          className="p-8 md:p-10 space-y-5"
        >
          <div>
            <label
              style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px", color: RED }}
              className="uppercase block mb-2"
            >
              Full Name
            </label>
            <input className={inputCls} placeholder="Your full name" />
          </div>
          <div>
            <label
              style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px", color: RED }}
              className="uppercase block mb-2"
            >
              Phone Number
            </label>
            <input className={inputCls} placeholder="+91" />
          </div>
          <div>
            <label
              style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px", color: RED }}
              className="uppercase block mb-2"
            >
              Service Required
            </label>
            <select className={inputCls}>
              <option>Custom Jerseys</option>
              <option>Cricket Gear</option>
              <option>Bat Knocking / Repairs</option>
              <option>Tournament Kits</option>
              <option>Club Cricket Roster</option>
            </select>
          </div>
          <div>
            <label
              style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px", color: RED }}
              className="uppercase block mb-2"
            >
              Details
            </label>
            <textarea rows={4} className={inputCls} placeholder="Tell us about your team or what you need..." />
          </div>
          {/* [FIX 7] Submit CTA: .aleph-btn smooth 0.2s transition + translateY lift */}
          <button
            type="submit"
            style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.15em", fontSize: "14px" }}
            className="aleph-btn aleph-btn-darken-red w-full text-white uppercase py-4 inline-flex items-center justify-center gap-2"
          >
            Submit Enquiry <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer({ setRoute }: { setRoute: (r: Route) => void }) {
  const goTo = (r: Route) => {
    setRoute(r);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };
  const navItems: { label: string; route: Route }[] = [
    { label: "Home", route: "home" },
    { label: "Services", route: "services" },
    { label: "Club Cricket", route: "club" },
    { label: "Pro Gear", route: "services" },
    { label: "Contact", route: "contact" },
  ];
  return (
    <footer style={{ background: DARK, borderTop: `3px solid ${RED}` }} className="text-white relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      {/* [FIX 6] Footer restructured from 3-column → 4-column grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">

        {/* COL 1 — Brand */}
        <Reveal>
          {/* [FIX 6] Logo: 24px bottom margin for breathing room */}
          <div className="mb-6"><LogoLockup hideTextOnMobile={false} scale={1} /></div>
          {/* [FIX 6] Footer body: 13px / #999999 on dark bg */}
          <p style={{ ...body, fontSize: "13px", lineHeight: 1.7, color: "#999999" }} className="max-w-xs">
            Vijayawada's one-stop sports gear destination — custom jerseys, cricket equipment & club cricket since 2018.
          </p>
        </Reveal>

        {/* COL 2 — Navigate */}
        <Reveal delay={0.1}>
          <div style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px", color: RED }} className="uppercase mb-5">Navigate</div>
          <ul className="space-y-3">
            {navItems.map((it) => (
              <li key={it.label}>
                <button onClick={() => goTo(it.route)} style={{ ...condensed, fontWeight: 700, letterSpacing: "0.05em", fontSize: "13px" }}
                  className="aleph-btn text-white/70 hover:text-white uppercase transition-colors">{it.label}</button>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* COL 3 — Reach Us */}
        <Reveal delay={0.2}>
          <div style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px", color: RED }} className="uppercase mb-5">Reach Us</div>
          {/* [FIX 6] Contact info: 13px / #999999 */}
          <ul style={{ ...body, fontSize: "13px", lineHeight: 1.9, color: "#999999" }} className="space-y-1">
            <li>+91 9491581580</li>
            <li>alephsportsinfo@gmail.com</li>
            <li>29-19-87/3 Bishop Azaraiah School Compound, Labbipet, Vijayawada, Andhra Pradesh 520010</li>
            <li className="pt-2">
              <a href={CATALOGUE_URL} target="_blank" rel="noreferrer"
                className="aleph-btn inline-flex items-center gap-2 text-white hover:text-[#25D366] transition-colors group">
                <span className="w-7 h-7 inline-flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: "#25D366" }}>
                  <MessageSquare size={14} color="#fff" />
                </span>
                <span style={{ ...condensed, fontWeight: 800, letterSpacing: "0.05em", fontSize: "13px" }} className="uppercase">Browse Catalogue</span>
              </a>
            </li>
          </ul>
        </Reveal>

        {/* [FIX 6] COL 4 — Connect (NEW social column) */}
        <Reveal delay={0.3}>
          <div style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px", color: RED }} className="uppercase mb-5">Connect</div>
          <ul className="space-y-4">
            {[
              { label: "Instagram", sub: "@Aleph_Sports", href: "https://instagram.com/Aleph_Sports" },
              { label: "WhatsApp", sub: "+91 9491581580", href: "https://wa.me/919491581580" },
              { label: "CricHeroes", sub: "Aleph Sports Club", href: "https://cricheroes.com/team-profile/5279275/aleph-sports-club/matches" },
              { label: "Google ", sub: "Leave a Review", href: "https://www.google.com/maps/search/Aleph+Sports+Vijayawada" },
            ].map(({ label, sub, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" className="aleph-btn group flex flex-col">
                  <span style={{ ...condensed, fontWeight: 800, fontSize: "13px", letterSpacing: "0.05em" }}
                    className="uppercase text-white/80 group-hover:text-[#C8102E] transition-colors">{label}</span>
                  {/* [FIX 6] Sub-label: 12px / #999 */}
                  <span style={{ ...body, fontSize: "12px", color: "#999999" }}>{sub}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span style={{ ...body, fontSize: "13px", color: "#999999" }}>
            © 2026 Aleph Sports.
          </span>
          <div className="flex items-center gap-3">
            <span style={{ ...body, fontSize: "14px", color: "#999999" }}>
              Powered by
            </span>
            <a
              href="https://svestarn.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 group transition-opacity hover:opacity-90"
            >
              <img
                src={svestarnLogo}
                alt="Svestarn IT Solutions"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span
                style={{ ...condensed, fontWeight: 800, letterSpacing: "0.1em", fontSize: "16px", color: RED }}
                className="uppercase"
              >
                Svestarn IT Solutions
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [route, setRoute] = useState<Route>("home");
  return (
    <div style={{ ...body, background: "#fff", color: "#111111" }} className="min-h-screen">
      <Navbar route={route} setRoute={setRoute} />
      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {route === "home" ? (
            <>
              <Hero setRoute={setRoute} />
              <Marquee />
              <WhyChooseUs />
              <Services />
              <Jerseys />
              <ClubBanner setRoute={setRoute} />
              <ProGear />
              <Testimonials />
              <Contact />
            </>
          ) : route === "services" ? (
            <ServicesPage setRoute={setRoute} />
          ) : route === "club" ? (
            <ClubCricketPage setRoute={setRoute} />
          ) : (
            <ContactPage />
          )}
        </motion.div>
      </AnimatePresence>
      <Footer setRoute={setRoute} />
    </div>
  );
}
