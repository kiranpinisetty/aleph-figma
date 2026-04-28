import { useState } from "react";
import { Check, ArrowRight, Phone, Settings2 } from "lucide-react";
import { JerseyConfigurator } from "./jersey-configurator";

const CATALOGUE_URL = "https://wa.me/c/919491581580";

const RED = "#C8102E";
const DARK = "#0E0E0E";
const OFF = "#F6F5F3";

const condensed = { fontFamily: "'Barlow Condensed', sans-serif" };
const body = { fontFamily: "'Barlow', sans-serif" };

const IMG_JERSEY =
  "https://images.unsplash.com/photo-1761751844072-120967509161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";
const IMG_BAT =
  "https://images.unsplash.com/photo-1603722039047-bc9997bfa963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";
const IMG_GLOVE_1 =
  "https://images.unsplash.com/photo-1593766730583-db5945f17581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG_GLOVE_2 =
  "https://images.unsplash.com/photo-1593341646647-75b32930e4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG_HELMET =
  "https://images.unsplash.com/photo-1652107999818-f972a785b1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG_GEAR =
  "https://images.unsplash.com/photo-1659081435441-6f3197d89dc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG_GEAR_2 =
  "https://images.unsplash.com/photo-1659081476962-df97acad7f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG_ACTION =
  "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div
      style={{
        ...condensed,
        color: light ? "#fff" : RED,
        letterSpacing: "0.2em",
        fontWeight: 700,
        fontSize: "11px",
      }}
      className="uppercase mb-4"
    >
      {children}
    </div>
  );
}

function BigHeading({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2
      style={{
        ...condensed,
        fontWeight: 900,
        fontSize: "clamp(36px, 5.5vw, 72px)",
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

function PageHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: DARK,
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(200,16,46,0.08) 0 1px, transparent 1px 32px)",
        minHeight: "50vh",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 min-h-[50vh] flex flex-col justify-end">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <Eyebrow light={false}>What We Offer</Eyebrow>
            <h1
              style={{
                ...condensed,
                fontWeight: 900,
                fontSize: "clamp(56px, 8vw, 120px)",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
              }}
              className="uppercase text-white"
            >
              Our Services
            </h1>
            <p
              style={{ ...body, fontSize: "17px", lineHeight: 1.7 }}
              className="text-white/60 mt-6 max-w-2xl"
            >
              Everything your team needs — jerseys, gear, repairs, and more. All under one roof in Vijayawada.
            </p>
          </div>
        </div>
        <div
          className="mt-10"
          style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px" }}
        >
          <span className="text-white/50 uppercase">Home</span>
          <span className="text-white/30 mx-2">/</span>
          <span style={{ color: RED }} className="uppercase">
            Services
          </span>
        </div>
      </div>
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block"
        aria-hidden
      >
        <span
          style={{
            ...condensed,
            fontWeight: 900,
            fontSize: "260px",
            lineHeight: 0.8,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.1)",
            letterSpacing: "-0.02em",
          }}
          className="uppercase"
        >
          Services
        </span>
      </div>
    </section>
  );
}

function TabsStrip({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const tabs = ["All", "Customised Jerseys", "Cricket Gear", "Product Repairs", "Tournament Kits", "Bat Knocking"];
  return (
    <div className="sticky top-16 z-40 bg-white border-b border-[#E3E1DD]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto scrollbar-hide">
        {tabs.map((t) => {
          const isActive = active === t;
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              style={{
                ...condensed,
                fontWeight: 800,
                letterSpacing: "0.12em",
                fontSize: "12px",
                background: isActive ? RED : "#fff",
                color: isActive ? "#fff" : "#111",
                border: isActive ? `1px solid ${RED}` : "1px solid #E3E1DD",
              }}
              className="uppercase px-5 py-2.5 whitespace-nowrap hover:border-[#C8102E] transition-colors"
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SectionNumber({ n }: { n: string }) {
  return (
    <span
      aria-hidden
      style={{
        ...condensed,
        fontWeight: 900,
        fontSize: "200px",
        lineHeight: 0.8,
        color: "transparent",
        WebkitTextStroke: "1px #F0EEEC",
        letterSpacing: "-0.02em",
      }}
      className="absolute -top-6 -left-2 select-none pointer-events-none uppercase"
    >
      {n}
    </span>
  );
}

function FeatureRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div
        className="shrink-0 mt-1 w-6 h-6 flex items-center justify-center"
        style={{ background: RED }}
      >
        <Check size={14} color="#fff" strokeWidth={3} />
      </div>
      <div>
        <div style={{ ...condensed, fontWeight: 800, fontSize: "20px" }} className="uppercase">
          {title}
        </div>
        <div style={{ ...body, fontSize: "15px", lineHeight: 1.65, color: "#6B6B6B" }} className="mt-1">
          {desc}
        </div>
      </div>
    </div>
  );
}

function Service01({ onCustomise }: { onCustomise: () => void }) {
  return (
    <section id="customised-jerseys" className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionNumber n="01" />
        <div className="grid md:grid-cols-2 gap-14 relative">
          <div>
            <Eyebrow>Flagship Service</Eyebrow>
            <BigHeading>Customised Jerseys</BigHeading>
            <p
              style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }}
              className="mt-6 max-w-xl"
            >
              We design and deliver fully customised jerseys for cricket, football, kabaddi, and all team sports.
              Whether it's 11 players or 100 — every kit is cut to size, printed to perfection, and delivered on time.
              We've outfitted 500+ teams across Vijayawada and Andhra Pradesh.
            </p>
            <div className="mt-10 space-y-6">
              <FeatureRow
                title="Sublimation Printing"
                desc="Fade-resistant, photo-quality designs fused into the fabric"
              />
              <FeatureRow title="Embroidery" desc="Stitched logos and crests for a premium club look" />
              <FeatureRow
                title="Moisture-Wicking Fabric"
                desc="Breathable, sweat-managing materials for all-day comfort"
              />
              <FeatureRow
                title="Name & Number Printing"
                desc="Accurate team set printing with consistent sizing"
              />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <button
                style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "14px" }}
                className="text-white uppercase px-7 py-4 inline-flex items-center gap-2 hover:opacity-90"
              >
                Get a Jersey Quote <ArrowRight size={16} />
              </button>
              <button
                onClick={onCustomise}
                style={{
                  border: `1px solid ${RED}`,
                  ...condensed,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  fontSize: "14px",
                }}
                className="uppercase px-7 py-4 inline-flex items-center gap-2 hover:bg-[#C8102E] hover:!text-white text-[#C8102E] transition-colors"
              >
                <Settings2 size={16} /> Customise Your Jersey <ArrowRight size={16} />
              </button>
            </div>
            <a
              href={CATALOGUE_URL}
              target="_blank"
              rel="noreferrer"
              style={{ ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "13px", color: RED }}
              className="mt-4 inline-block uppercase border-b border-current"
            >
              Or browse jersey styles on WhatsApp Catalogue →
            </a>
          </div>
          <div>
            <div className="relative">
              <img src={IMG_JERSEY} alt="Customised cricket jersey" className="w-full h-[520px] object-cover" />
              <div
                style={{
                  background: RED,
                  ...condensed,
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  fontSize: "11px",
                }}
                className="absolute bottom-5 left-5 text-white uppercase px-4 py-2"
              >
                ★ Match Ready
              </div>
            </div>
            <div className="grid grid-cols-3 mt-6" style={{ border: "1px solid #E3E1DD" }}>
              {[
                ["500+", "Kits Delivered"],
                ["7-Day", "Turnaround"],
                ["All", "Sports"],
              ].map(([n, l], i) => (
                <div
                  key={l}
                  className="p-5 text-center"
                  style={{ borderRight: i < 2 ? "1px solid #E3E1DD" : undefined }}
                >
                  <div style={{ ...condensed, fontWeight: 900, fontSize: "26px", color: DARK }} className="uppercase">
                    {n}
                  </div>
                  <div
                    style={{
                      ...condensed,
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      fontSize: "11px",
                      color: "#6B6B6B",
                    }}
                    className="uppercase mt-1"
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Service02() {
  const steps = [
    { n: "01", t: "Inspection", d: "We assess the bat's grade, moisture, and grain quality" },
    { n: "02", t: "Machine Knocking", d: "Systematic mallet work to compress surface fibres" },
    { n: "03", t: "Hand Finishing", d: "Edge and toe reinforcement for match readiness" },
  ];
  return (
    <section
      id="bat-knocking"
      style={{ background: OFF }}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionNumber n="02" />
        <div className="grid md:grid-cols-2 gap-14 relative items-start">
          <div className="relative order-2 md:order-1">
            <img src={IMG_BAT} alt="Bat knocking" className="w-full h-[560px] object-cover" />
            <div
              className="absolute inset-x-0 bottom-0 p-6"
              style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.7))" }}
            >
              <p
                style={{ ...condensed, fontStyle: "italic", fontWeight: 800, fontSize: "32px", color: RED, lineHeight: 0.95 }}
                className="uppercase"
              >
                Ready Your Weapon From Us
              </p>
            </div>
            <div
              style={{
                background: DARK,
                ...condensed,
                fontWeight: 800,
                letterSpacing: "0.15em",
                fontSize: "11px",
              }}
              className="absolute top-5 left-5 text-white uppercase px-4 py-2"
            >
              ⏱ Promised Time Delivery
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Eyebrow>Bat Preparation</Eyebrow>
            <BigHeading>Bat Knocking</BigHeading>
            <p
              style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }}
              className="mt-6 max-w-xl"
            >
              A properly knocked bat is a match-winner. Our experts prepare your English Willow or Kashmir Willow with
              machine and hand knocking — compressing the fibres for maximum durability, reduced risk of cracking, and
              optimal performance from ball one.
            </p>
            <div className="mt-10 relative">
              <div className="absolute left-[11px] top-3 bottom-3 w-px" style={{ background: "#E3E1DD" }} />
              <div className="space-y-8">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-5 relative">
                    <div
                      className="shrink-0 w-6 h-6 mt-1 rounded-full"
                      style={{ background: RED, boxShadow: "0 0 0 4px #F6F5F3" }}
                    />
                    <div>
                      <div
                        style={{ ...condensed, fontWeight: 700, letterSpacing: "0.2em", fontSize: "11px", color: RED }}
                        className="uppercase"
                      >
                        Step {s.n}
                      </div>
                      <div style={{ ...condensed, fontWeight: 800, fontSize: "22px" }} className="uppercase mt-1">
                        {s.t}
                      </div>
                      <div
                        style={{ ...body, fontSize: "15px", lineHeight: 1.65, color: "#6B6B6B" }}
                        className="mt-1"
                      >
                        {s.d}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              style={{
                border: `1px solid ${RED}`,
                ...condensed,
                fontWeight: 800,
                letterSpacing: "0.12em",
                fontSize: "14px",
              }}
              className="mt-10 uppercase px-7 py-4 inline-flex items-center gap-2 hover:bg-[#C8102E] hover:!text-white text-[#C8102E] transition-colors"
            >
              Book Bat Knocking <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Service03() {
  const cards = [
    { img: IMG_BAT, cat: "Willow", t: "English Willow Bats", d: "Grade A & B match bats, knocked-in and ready." },
    { img: IMG_HELMET, cat: "Safety", t: "Protective Pads & Helmets", d: "Certified pads and helmets for every age and grade." },
    { img: IMG_ACTION, cat: "Game Day", t: "Match Balls", d: "Leather match balls and durable practice balls." },
    { img: IMG_GLOVE_1, cat: "Hands", t: "Batting Gloves", d: "Sheep-leather palms with high-impact foam inserts." },
    { img: IMG_GEAR, cat: "Keepers", t: "Wicket-Keeping Gear", d: "Inners, gloves and pads built for long innings behind the stumps." },
    { img: IMG_GEAR_2, cat: "Carry", t: "Accessories & Bags", d: "Wheelie kit bags, grips, toe guards and team accessories." },
  ];
  return (
    <section id="cricket-gear" className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionNumber n="03" />
        <div className="relative max-w-3xl">
          <Eyebrow>Equipment</Eyebrow>
          <BigHeading>Pro Cricket Gear</BigHeading>
          <p
            style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }}
            className="mt-6"
          >
            We stock professional-grade equipment from leading brands — bats, pads, gloves, helmets, and balls. Walk in
            or order online. Every product is hand-checked before it leaves our store.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {cards.map((c) => (
            <div
              key={c.t}
              style={{ border: "1px solid #E3E1DD" }}
              className="bg-white group hover:-translate-y-1 transition-transform"
            >
              <div className="h-52 overflow-hidden">
                <img src={c.img} alt={c.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div
                  style={{ ...condensed, fontWeight: 700, letterSpacing: "0.2em", fontSize: "11px", color: RED }}
                  className="uppercase"
                >
                  {c.cat}
                </div>
                <h3 style={{ ...condensed, fontWeight: 800, fontSize: "24px" }} className="uppercase mt-2">
                  {c.t}
                </h3>
                <p style={{ ...body, fontSize: "14px", lineHeight: 1.65, color: "#6B6B6B" }} className="mt-2">
                  {c.d}
                </p>
                <a
                  href="#"
                  style={{ ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "13px", color: RED }}
                  className="uppercase mt-5 inline-flex items-center gap-2 border-b border-current"
                >
                  Enquire Now <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{ background: DARK, borderLeft: `4px solid ${RED}` }}
          className="mt-12 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
        >
          <p style={{ ...body, fontSize: "16px", lineHeight: 1.6 }} className="text-white/85 max-w-2xl">
            Can't find what you need? Call us at{" "}
            <span style={{ color: "#fff", ...condensed, fontWeight: 800, letterSpacing: "0.05em" }}>
              +91 9491581580
            </span>{" "}
            — we'll source it for you.
          </p>
          <button
            style={{
              border: "1px solid rgba(255,255,255,0.7)",
              ...condensed,
              fontWeight: 800,
              letterSpacing: "0.15em",
              fontSize: "13px",
            }}
            className="text-white uppercase px-7 py-3 inline-flex items-center gap-2 hover:bg-white hover:text-[#0E0E0E] transition-colors shrink-0"
          >
            <Phone size={14} /> Call Now
          </button>
        </div>
      </div>
    </section>
  );
}

function Service04() {
  const repairs = [
    "Batting Glove Repair",
    "Pad Stitching & Foam Replacement",
    "Helmet Strap & Grill Repair",
    "Bag Zip & Strap Repair",
    "Bat Handle Replacement",
    "Grip Fitting & Toe Guard",
  ];
  const collage = [IMG_GLOVE_1, IMG_GLOVE_2, IMG_GEAR, IMG_GEAR_2];
  return (
    <section id="product-repairs" style={{ background: OFF }} className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionNumber n="04" />
        <div className="grid md:grid-cols-2 gap-14 relative items-start">
          <div className="relative">
            <div className="grid grid-cols-2 gap-2">
              {collage.map((src, i) => (
                <img key={i} src={src} alt="Repair" className="w-full h-[260px] object-cover" />
              ))}
            </div>
            <div
              style={{
                background: RED,
                ...condensed,
                fontWeight: 800,
                letterSpacing: "0.2em",
                fontSize: "12px",
              }}
              className="absolute top-6 -right-3 text-white uppercase px-5 py-2 rotate-[8deg] shadow-lg"
            >
              ★ Waste Into Best
            </div>
          </div>
          <div>
            <Eyebrow>Restoration</Eyebrow>
            <BigHeading>Product Repairs</BigHeading>
            <p style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-6 max-w-xl">
              Don't throw away damaged gear. Our repair specialists restore batting gloves, pads, helmets, and bags to
              near-original condition — saving you money and keeping your kit match-ready. We promise you will not
              regret it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-10">
              {repairs.map((r) => (
                <div key={r} className="flex items-center gap-3">
                  <div
                    className="shrink-0 w-5 h-5 flex items-center justify-center"
                    style={{ background: RED }}
                  >
                    <Check size={12} color="#fff" strokeWidth={3} />
                  </div>
                  <span style={{ ...condensed, fontWeight: 700, fontSize: "16px" }} className="uppercase">
                    {r}
                  </span>
                </div>
              ))}
            </div>
            <button
              style={{
                background: RED,
                ...condensed,
                fontWeight: 800,
                letterSpacing: "0.12em",
                fontSize: "14px",
              }}
              className="mt-10 text-white uppercase px-7 py-4 inline-flex items-center gap-2 hover:opacity-90"
            >
              Send Your Gear For Repair <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Service05() {
  const panels = [
    { t: "Full Kit Bundle", d: "Jersey + shorts + socks + cap, coordinated and branded" },
    { t: "Custom Numbering", d: "Every player gets the right size and number, first time" },
    { t: "Fast Bulk Delivery", d: "Tournament deadlines met — or we call you personally" },
  ];
  return (
    <section id="tournament-kits" className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionNumber n="05" />
        <div className="relative max-w-3xl">
          <Eyebrow>Bulk Orders</Eyebrow>
          <BigHeading>Tournament Kits</BigHeading>
          <p style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-6">
            One order. Full team. Zero stress. We bundle jerseys, shorts, socks, caps, and bags into a single
            coordinated kit — with your team name, player numbers, and sponsor logos. Ideal for tournaments, leagues,
            and season openers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 mt-14" style={{ border: "1px solid #E3E1DD" }}>
          {panels.map((p, i) => (
            <div
              key={p.t}
              className="p-8"
              style={{ borderRight: i < 2 ? `1px solid ${RED}` : undefined }}
            >
              <div
                style={{ ...condensed, fontWeight: 900, fontSize: "32px", color: RED }}
                className="uppercase"
              >
                0{i + 1}
              </div>
              <h3 style={{ ...condensed, fontWeight: 800, fontSize: "24px" }} className="uppercase mt-3">
                {p.t}
              </h3>
              <p style={{ ...body, fontSize: "15px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-2">
                {p.d}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-14 max-w-4xl">
          <p
            style={{
              ...condensed,
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(24px, 3vw, 36px)",
              lineHeight: 1.2,
              color: DARK,
            }}
          >
            "We ordered full jersey sets with names and numbers, and every player got the right fit on the first
            delivery."
          </p>
          <div
            style={{ ...condensed, fontWeight: 800, letterSpacing: "0.15em", fontSize: "12px", color: RED }}
            className="uppercase mt-4"
          >
            — Sai Teja, Riverfront CC
          </div>
        </div>
        <button
          style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "14px" }}
          className="mt-10 text-white uppercase px-7 py-4 inline-flex items-center gap-2 hover:opacity-90"
        >
          Request Tournament Quote <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    ["500+", "Teams Served"],
    ["8+", "Years in Business"],
    ["7 Days", "Avg. Delivery"],
    ["100%", "Quality Checked"],
  ];
  return (
    <section style={{ background: DARK, borderTop: `3px solid ${RED}` }} className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(([n, l]) => (
          <div key={l} style={{ borderLeft: `3px solid ${RED}` }} className="pl-5">
            <div
              style={{ ...condensed, fontWeight: 900, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1 }}
              className="text-white"
            >
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
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Eyebrow>Ready To Order?</Eyebrow>
        <BigHeading>Let's Build Your Kit Together</BigHeading>
        <p
          style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }}
          className="mt-6 max-w-xl mx-auto"
        >
          Walk into our store in Vijayawada or drop an enquiry — we'll get back within 24 hours.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <button
            style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "14px" }}
            className="text-white uppercase px-7 py-4 inline-flex items-center gap-2 hover:opacity-90"
          >
            Start Enquiry <ArrowRight size={16} />
          </button>
          <button
            style={{
              border: `1px solid ${DARK}`,
              ...condensed,
              fontWeight: 800,
              letterSpacing: "0.12em",
              fontSize: "14px",
            }}
            className="uppercase px-7 py-4 inline-flex items-center gap-2 text-[#0E0E0E] hover:bg-[#0E0E0E] hover:!text-white transition-colors"
          >
            <Phone size={14} /> Call +91 9491581580
          </button>
        </div>
        <div
          style={{ ...body, fontSize: "13px", color: "#6B6B6B" }}
          className="mt-8 leading-relaxed"
        >
          📍 29-19-87/3 Bishop Azaraiah School Compound, Labbipet, Vijayawada – 520 010
          <span className="hidden md:inline"> &nbsp;|&nbsp; </span>
          <span className="block md:inline mt-1 md:mt-0">🌐 www.alephsports.store</span>
        </div>
      </div>
    </section>
  );
}

export function ServicesPage() {
  const [active, setActive] = useState("All");
  const [configOpen, setConfigOpen] = useState(false);
  const openConfig = () => setConfigOpen(true);

  const handleSubmit = (summary: string) => {
    setConfigOpen(false);
    const msg = `Jersey Order Configuration:\n${summary}`;
    setTimeout(() => {
      const subject = document.querySelector<HTMLSelectElement>("#enquiry-subject");
      const message = document.querySelector<HTMLTextAreaElement>("#enquiry-message");
      if (subject) subject.value = "Jersey Order";
      if (message) message.value = msg;
      const form = document.querySelector("#final-cta") || document.querySelector("footer");
      form?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const sections: Record<string, JSX.Element> = {
    All: (
      <>
        <Service01 onCustomise={openConfig} />
        <Service02 />
        <Service03 />
        <Service04 />
        <Service05 />
      </>
    ),
    "Customised Jerseys": <Service01 onCustomise={openConfig} />,
    "Bat Knocking": <Service02 />,
    "Cricket Gear": <Service03 />,
    "Product Repairs": <Service04 />,
    "Tournament Kits": <Service05 />,
  };
  return (
    <>
      <PageHero />
      <TabsStrip active={active} setActive={setActive} />
      {sections[active]}
      <TrustBar />
      <FinalCTA />
      <JerseyConfigurator open={configOpen} onClose={() => setConfigOpen(false)} onSubmit={handleSubmit} />
    </>
  );
}
