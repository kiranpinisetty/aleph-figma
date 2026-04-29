import { useState } from "react";
import {
  ArrowRight,
  ClipboardList,
  Users,
  Trophy,
  Instagram,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Award,
  Tag,
  MessageCircle,
  Globe,
  Zap,
  Shirt,
  TrendingUp,
  Percent,
  CircleDot,
} from "lucide-react";

const RED = "#C8102E";
const DARK = "#0E0E0E";
const OFF = "#F6F5F3";
const CRICHEROES_URL = "https://cricheroes.com/team-profile/5279275/aleph-sports-club/matches";

const condensed = { fontFamily: "'Barlow Condensed', sans-serif" };
const body = { fontFamily: "'Barlow', sans-serif" };

const IMG_PITCH =
  "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

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

function SectionWatermark({ n }: { n: string }) {
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

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: DARK, minHeight: "60vh" }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${IMG_PITCH}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(14,14,14,0.95) 30%, rgba(14,14,14,0.55))" }}
      />
      <div
        aria-hidden
        className="absolute right-[-80px] top-1/2 -translate-y-1/2 hidden md:block pointer-events-none"
      >
        <div
          className="rounded-full"
          style={{
            width: 460,
            height: 460,
            border: "2px solid rgba(255,255,255,0.15)",
          }}
        />
        <div
          className="absolute inset-12 rounded-full"
          style={{ border: "1px dashed rgba(255,255,255,0.12)" }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 min-h-[60vh] flex flex-col justify-end">
        <Eyebrow light>★ Aleph Sports Club</Eyebrow>
        <h1
          style={{
            ...condensed,
            fontWeight: 900,
            fontSize: "clamp(56px, 9vw, 132px)",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
          }}
          className="uppercase text-white max-w-4xl"
        >
          Club Cricket Every Week
        </h1>
        <div
          style={{ ...condensed, fontWeight: 800, letterSpacing: "0.05em", color: RED, fontSize: "clamp(18px, 2vw, 26px)" }}
          className="uppercase mt-4"
        >
          Vijayawada's Most Active Cricket Community
        </div>
        <p style={{ ...body, fontSize: "17px", lineHeight: 1.7 }} className="text-white/65 mt-6 max-w-2xl">
          We run weekly competitive cricket matches open to all skill levels. Show up, play hard, and be part of a team
          that takes the game seriously.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <button
            style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "14px" }}
            className="aleph-btn aleph-btn-darken-red text-white uppercase px-7 py-4 inline-flex items-center gap-2"
          >
            Join the Roster <ArrowRight size={16} />
          </button>
          <button
            style={{
              border: "1px solid rgba(255,255,255,0.4)",
              ...condensed,
              fontWeight: 800,
              letterSpacing: "0.12em",
              fontSize: "14px",
            }}
            className="aleph-btn aleph-btn-fill-red text-white uppercase px-7 py-4"
          >
            View Match Schedule
          </button>
        </div>
        <div
          className="mt-10"
          style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px" }}
        >
          <span className="text-white/50 uppercase">Home</span>
          <span className="text-white/30 mx-2">/</span>
          <span style={{ color: RED }} className="uppercase">
            Club Cricket
          </span>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { i: "🏏", t: "Weekly Matches", d: "Every Saturday & Sunday" },
    { i: "👥", t: "Active Players", d: "Open Roster" },
    { i: "📍", t: "Venue", d: "Vijayawada Ground" },
    { i: "🏆", t: "Platform", d: "CricHeroes Tracked" },
  ];
  return (
    <section
      style={{
        background: RED,
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 12px, transparent 12px 28px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={s.t}
            className="px-4"
            style={{
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.25)" : undefined,
            }}
          >
            <div className="text-2xl mb-2">{s.i}</div>
            <div
              style={{ ...condensed, fontWeight: 800, letterSpacing: "0.05em", fontSize: "20px" }}
              className="uppercase text-white"
            >
              {s.t}
            </div>
            <div style={{ ...body, fontSize: "13px" }} className="text-white/75 mt-1">
              {s.d}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionWatermark n="01" />
        <div className="grid md:grid-cols-2 gap-14 relative items-start">
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <BigHeading>Aleph Sports Cricket Club</BigHeading>
            <p style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-6 max-w-xl">
              Aleph Sports Club is Vijayawada's most consistently active cricket club — running organised, competitive
              matches every single week. Whether you're a seasoned club cricketer or someone who just loves the game,
              there's a place for you here. Every match is tracked live on CricHeroes so your stats, runs, and wickets
              are recorded professionally.
            </p>
            <p style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-5 max-w-xl">
              We're not just a store — we're a cricket community. Show up on match day, gear up, and play like it
              matters. Because it does.
            </p>
            <button
              style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "14px" }}
              className="aleph-btn aleph-btn-darken-red mt-10 text-white uppercase px-7 py-4 inline-flex items-center gap-2"
            >
              Join the Club <ArrowRight size={16} />
            </button>
            <div
              style={{ ...body, fontSize: "13px", color: "#6B6B6B" }}
              className="mt-5"
            >
              All matches tracked on CricHeroes · Free to join · Open to all skill levels
            </div>
          </div>
          <div style={{ background: DARK, borderTop: `3px solid ${RED}` }} className="p-8 md:p-10">
            <div
              className="flex items-center gap-4 pb-6 mb-6"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center"
                style={{ background: RED }}
              >
                <Trophy size={26} color="#fff" />
              </div>
              <div>
                <div
                  style={{ ...condensed, fontWeight: 700, letterSpacing: "0.2em", fontSize: "11px", color: RED }}
                  className="uppercase"
                >
                  Official Match Platform
                </div>
                <div
                  style={{ ...condensed, fontWeight: 900, fontSize: "26px", letterSpacing: "0.05em" }}
                  className="text-white uppercase"
                >
                  CricHeroes
                </div>
              </div>
            </div>
            <div className="space-y-5">
              {[
                ["Matches Played", "View on CricHeroes"],
                ["Players Registered", "Growing Every Week"],
                ["Founded", "Vijayawada, Andhra Pradesh"],
              ].map(([t, d]) => (
                <div key={t} style={{ borderLeft: `3px solid ${RED}` }} className="pl-5">
                  <div
                    style={{ ...condensed, fontWeight: 800, letterSpacing: "0.05em", fontSize: "20px" }}
                    className="uppercase text-white"
                  >
                    {t}
                  </div>
                  <div style={{ ...body, fontSize: "14px" }} className="text-white/65 mt-1">
                    {d}
                  </div>
                </div>
              ))}
            </div>
            <a
              href={CRICHEROES_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                background: RED,
                ...condensed,
                fontWeight: 800,
                letterSpacing: "0.12em",
                fontSize: "13px",
              }}
              className="mt-8 w-full text-white uppercase px-6 py-4 inline-flex items-center justify-center gap-2 hover:opacity-90"
            >
              View Full Profile on CricHeroes <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScheduleCard({
  day,
  title,
  rows,
  dark = false,
}: {
  day: string;
  title: string;
  rows: { Icon: any; label: string; value: string }[];
  dark?: boolean;
}) {
  return (
    <div
      style={{
        background: dark ? DARK : "#fff",
        border: dark ? undefined : "1px solid #E3E1DD",
        borderTop: `3px solid ${RED}`,
      }}
      className="p-8 md:p-10"
    >
      <div
        style={{
          ...condensed,
          fontWeight: 900,
          fontSize: "56px",
          lineHeight: 1,
          color: RED,
          letterSpacing: "0.02em",
        }}
        className="uppercase"
      >
        {day}
      </div>
      <h3
        style={{
          ...condensed,
          fontWeight: 800,
          fontSize: "28px",
          letterSpacing: "0.01em",
          color: dark ? "#fff" : DARK,
        }}
        className="uppercase mt-3"
      >
        {title}
      </h3>
      <div className="mt-6 space-y-4">
        {rows.map(({ Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <div
              className="shrink-0 w-6 h-6 mt-0.5 flex items-center justify-center"
              style={{ background: RED }}
            >
              <Icon size={14} color="#fff" />
            </div>
            <div>
              <div
                style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px" }}
                className={`uppercase ${dark ? "text-white/55" : "text-[#6B6B6B]"}`}
              >
                {label}
              </div>
              <div
                style={{ ...body, fontSize: "15px", lineHeight: 1.5 }}
                className={dark ? "text-white" : "text-[#111]"}
              >
                {value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Schedule() {
  return (
    <section style={{ background: OFF }} className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionWatermark n="02" />
        <div className="relative max-w-3xl">
          <Eyebrow>Fixtures</Eyebrow>
          <BigHeading>Weekly Match Schedule</BigHeading>
          <p style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-6">
            Matches happen every week. Below is the standard schedule — specific fixtures are announced on Instagram
            @Aleph_Sports and updated on CricHeroes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <ScheduleCard
            dark
            day="Sat"
            title="Weekend League Match"
            rows={[
              { Icon: MapPin, label: "Venue", value: "Vijayawada (confirmed on match week)" },
              { Icon: Clock, label: "Time", value: "Morning — 6:00 AM start" },
              { Icon: Award, label: "Format", value: "T20 / Limited Overs" },
              { Icon: Users, label: "Teams", value: "Open selection based on roster" },
            ]}
          />
          <ScheduleCard
            day="Sun"
            title="Sunday Practice & Match"
            rows={[
              { Icon: MapPin, label: "Venue", value: "Vijayawada (confirmed on match week)" },
              { Icon: Clock, label: "Time", value: "Morning — 6:00 AM start" },
              { Icon: Award, label: "Format", value: "Practice + Informal Match" },
              { Icon: Users, label: "Open", value: "All registered players welcome" },
            ]}
          />
        </div>
        <div
          style={{ background: RED }}
          className="mt-10 px-6 md:px-8 py-5 flex items-center gap-4"
        >
          <Zap size={22} color="#fff" />
          <p style={{ ...body, fontSize: "15px", lineHeight: 1.6 }} className="text-white">
            Match schedules are confirmed every Thursday via WhatsApp group and Instagram. Join the roster to get
            notified.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      Icon: ClipboardList,
      t: "Fill the Roster Form",
      d: "Submit your details using the form below — name, phone, batting/bowling style, and preferred position. Takes 60 seconds.",
    },
    {
      n: "02",
      Icon: Users,
      t: "Get Added to the Squad",
      d: "We'll add you to the WhatsApp group where weekly match details, venues, and timings are shared every Thursday.",
    },
    {
      n: "03",
      Icon: Trophy,
      t: "Show Up & Play",
      d: "Arrive on match day, warm up, and play. All matches are tracked live on CricHeroes — your stats are recorded every game.",
    },
  ];
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionWatermark n="03" />
        <div className="relative text-center max-w-3xl mx-auto">
          <Eyebrow>The Process</Eyebrow>
          <BigHeading>How to Join & Play</BigHeading>
          <p style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-6">
            Three simple steps to get on the field with Aleph Sports Club.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {steps.map(({ n, Icon, t, d }) => (
            <div
              key={n}
              className="relative p-8 overflow-hidden"
              style={{ border: "1px solid #E3E1DD", borderTop: `3px solid ${RED}` }}
            >
              <span
                aria-hidden
                style={{
                  ...condensed,
                  fontWeight: 900,
                  fontSize: "140px",
                  lineHeight: 0.8,
                  color: "transparent",
                  WebkitTextStroke: "1px #F0EEEC",
                }}
                className="absolute -top-2 right-2 select-none pointer-events-none uppercase"
              >
                {n}
              </span>
              <div className="relative">
                <div
                  className="w-14 h-14 flex items-center justify-center"
                  style={{ background: RED }}
                >
                  <Icon size={26} color="#fff" />
                </div>
                <div
                  style={{ ...condensed, fontWeight: 700, letterSpacing: "0.2em", fontSize: "11px", color: RED }}
                  className="uppercase mt-6"
                >
                  Step {n}
                </div>
                <h3 style={{ ...condensed, fontWeight: 800, fontSize: "26px" }} className="uppercase mt-2">
                  {t}
                </h3>
                <p style={{ ...body, fontSize: "15px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-3">
                  {d}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{ background: RED }}
          className="mt-12 px-6 md:px-8 py-6 text-center"
        >
          <p style={{ ...body, fontSize: "16px", lineHeight: 1.6 }} className="text-white">
            Already on CricHeroes? Search{" "}
            <span style={{ ...condensed, fontWeight: 800, letterSpacing: "0.05em" }}>
              "Aleph Sports Club"
            </span>{" "}
            and follow us to track every match live.
          </p>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { Icon: Calendar, t: "Weekly Competitive Matches", d: "Real fixtures every weekend, not just net sessions" },
    { Icon: TrendingUp, t: "CricHeroes Stat Tracking", d: "Your runs, wickets, and averages logged professionally" },
    { Icon: Percent, t: "Priority Store Discounts", d: "Club members get exclusive pricing on gear and jerseys" },
    { Icon: Shirt, t: "Custom Club Kit", d: "Play in the official Aleph Sports jersey — look like a team" },
    { Icon: MessageCircle, t: "WhatsApp Match Updates", d: "Venue, time, and team announced every Thursday" },
    { Icon: Users, t: "Open to All Skill Levels", d: "Beginners to experienced club cricketers — all welcome" },
  ];
  return (
    <section style={{ background: OFF }} className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionWatermark n="04" />
        <div className="relative">
          <Eyebrow>Member Benefits</Eyebrow>
          <BigHeading>Why Play With Us</BigHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-14" style={{ border: "1px solid #E3E1DD" }}>
          {items.map(({ Icon, t, d }, i) => (
            <div
              key={t}
              className="group relative p-10 bg-white transition-all"
              style={{
                borderRight: i % 3 !== 2 ? "1px solid #E3E1DD" : undefined,
                borderBottom: i < 3 ? "1px solid #E3E1DD" : undefined,
              }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: RED }}
              />
              <Icon style={{ color: RED }} size={32} strokeWidth={1.8} />
              <h3
                style={{ ...condensed, fontWeight: 800, fontSize: "22px", letterSpacing: "0.01em" }}
                className="uppercase mt-5"
              >
                {t}
              </h3>
              <p style={{ ...body, fontSize: "15px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-2">
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentMatches() {
  const matches = [
    { n: "M-042", a: "Aleph Sports Club", b: "Krishna Kings XI", result: "WON", score: "182/6 vs 174/9" },
    { n: "M-041", a: "Aleph Sports Club", b: "Riverfront CC", result: "WON", score: "156/4 vs 150 a.o." },
    { n: "M-040", a: "Aleph Sports Club", b: "Indus Cricket Club", result: "LOST", score: "138 a.o. vs 142/3" },
  ];
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionWatermark n="05" />
        <div className="relative max-w-3xl">
          <Eyebrow>Match Centre</Eyebrow>
          <BigHeading>Recent Matches</BigHeading>
          <p style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-6">
            All results, scorecards, and player stats are available on our CricHeroes profile.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {matches.map((m) => {
            const won = m.result === "WON";
            return (
              <div
                key={m.n}
                style={{ background: DARK, borderTop: `3px solid ${RED}` }}
                className="p-8 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center justify-between">
                  <span
                    style={{ ...condensed, fontWeight: 800, letterSpacing: "0.2em", fontSize: "12px", color: RED }}
                    className="uppercase"
                  >
                    Match {m.n}
                  </span>
                  <span
                    style={{
                      ...condensed,
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                      fontSize: "11px",
                      background: won ? RED : "transparent",
                      border: won ? undefined : "1px solid rgba(255,255,255,0.4)",
                      color: "#fff",
                    }}
                    className="uppercase px-3 py-1"
                  >
                    {m.result}
                  </span>
                </div>
                <div className="mt-8 space-y-3">
                  <div style={{ ...condensed, fontWeight: 800, fontSize: "20px" }} className="uppercase text-white">
                    {m.a}
                  </div>
                  <div
                    style={{ ...condensed, fontWeight: 700, letterSpacing: "0.2em", fontSize: "11px", color: RED }}
                    className="uppercase"
                  >
                    Vs
                  </div>
                  <div
                    style={{ ...condensed, fontWeight: 800, fontSize: "20px" }}
                    className="uppercase text-white/80"
                  >
                    {m.b}
                  </div>
                </div>
                <div
                  className="mt-6 pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div
                    style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px" }}
                    className="uppercase text-white/55"
                  >
                    T20 · Vijayawada
                  </div>
                  <div style={{ ...body, fontSize: "14px" }} className="text-white/85 mt-1">
                    {m.score}
                  </div>
                </div>
                <a
                  href={CRICHEROES_URL}
                  target="_blank"
                  rel="noreferrer"
                  style={{ ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "13px", color: RED }}
                  className="uppercase mt-6 inline-flex items-center gap-2 border-b border-current"
                >
                  View Scorecard <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <a
            href={CRICHEROES_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              border: `1px solid ${RED}`,
              ...condensed,
              fontWeight: 800,
              letterSpacing: "0.12em",
              fontSize: "14px",
            }}
            className="uppercase px-7 py-4 inline-flex items-center gap-2 hover:bg-[#C8102E] hover:!text-white text-[#C8102E] transition-colors"
          >
            View All Matches on CricHeroes <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function RosterForm() {
  const [exp, setExp] = useState("Beginner");
  const [crich, setCrich] = useState<"Yes" | "No">("No");
  const inputCls = "w-full bg-white border border-[#E3E1DD] px-4 py-3 outline-none focus:border-[#C8102E]";
  const labelCls = "uppercase block mb-2";
  const labelStyle = { ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px", color: RED };

  return (
    <section style={{ background: OFF }} className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionWatermark n="06" />
        <div className="grid md:grid-cols-2 gap-6 relative">
          <div
            style={{ background: DARK, borderLeft: `3px solid ${RED}` }}
            className="p-10 md:p-12"
          >
            <Eyebrow light={false}>Open Roster</Eyebrow>
            <h2
              style={{
                ...condensed,
                fontWeight: 900,
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 0.9,
                letterSpacing: "-0.01em",
              }}
              className="uppercase text-white"
            >
              Ready To Play?
            </h2>
            <p style={{ ...body, fontSize: "16px", lineHeight: 1.7 }} className="text-white/70 mt-6">
              Fill the form and we'll add you to the squad. Matches every Saturday and Sunday. All skill levels welcome
              — from first-timers to experienced club cricketers.
            </p>
            <div className="my-8 h-px" style={{ background: "rgba(255,255,255,0.12)" }} />
            <div className="space-y-5">
              {[
                { Icon: Phone, l: "WhatsApp", v: "+91 9491581580" },
                { Icon: Instagram, l: "Instagram", v: "@Aleph_Sports" },
                { Icon: Globe, l: "CricHeroes", v: "Aleph Sports Club" },
                { Icon: MapPin, l: "Location", v: "Vijayawada, Andhra Pradesh" },
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
                    <div style={{ ...body, fontSize: "15px" }} className="text-white mt-1">
                      {v}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ background: "#fff", borderTop: `3px solid ${RED}`, border: "1px solid #E3E1DD" }}
            className="p-8 md:p-12 space-y-5"
          >
            <div>
              <label style={labelStyle} className={labelCls}>
                Full Name
              </label>
              <input className={inputCls} placeholder="Your full name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label style={labelStyle} className={labelCls}>
                  Phone Number
                </label>
                <input className={inputCls} defaultValue="+91 " />
              </div>
              <div>
                <label style={labelStyle} className={labelCls}>
                  Age
                </label>
                <input type="number" className={inputCls} placeholder="e.g. 24" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={labelStyle} className={labelCls}>
                  Batting Style
                </label>
                <select className={inputCls}>
                  <option>Right Hand</option>
                  <option>Left Hand</option>
                </select>
              </div>
              <div>
                <label style={labelStyle} className={labelCls}>
                  Bowling Style
                </label>
                <select className={inputCls}>
                  <option>Right Arm Fast</option>
                  <option>Right Arm Medium</option>
                  <option>Right Arm Spin</option>
                  <option>Left Arm Spin</option>
                  <option>Left Arm Fast</option>
                  <option>I Don't Bowl</option>
                </select>
              </div>
            </div>
            <div>
              <label style={labelStyle} className={labelCls}>
                Primary Role
              </label>
              <select className={inputCls}>
                <option>Batsman</option>
                <option>Bowler</option>
                <option>All-Rounder</option>
                <option>Wicket-Keeper</option>
              </select>
            </div>
            <div>
              <label style={labelStyle} className={labelCls}>
                Experience Level
              </label>
              <div className="flex flex-wrap gap-2">
                {["Beginner", "Intermediate", "Experienced"].map((lvl) => {
                  const active = exp === lvl;
                  return (
                    <button
                      type="button"
                      key={lvl}
                      onClick={() => setExp(lvl)}
                      style={{
                        ...condensed,
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        fontSize: "12px",
                        background: active ? RED : "#fff",
                        color: active ? "#fff" : "#111",
                        border: `1px solid ${active ? RED : "#E3E1DD"}`,
                      }}
                      className="uppercase px-5 py-2.5"
                    >
                      {lvl}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <label style={labelStyle} className={labelCls}>
                Are you on CricHeroes?
              </label>
              <div
                role="tablist"
                className="inline-flex"
                style={{ border: "1px solid #E3E1DD" }}
              >
                {(["Yes", "No"] as const).map((v) => {
                  const active = crich === v;
                  return (
                    <button
                      type="button"
                      key={v}
                      onClick={() => setCrich(v)}
                      style={{
                        ...condensed,
                        fontWeight: 800,
                        letterSpacing: "0.15em",
                        fontSize: "12px",
                        background: active ? RED : "#fff",
                        color: active ? "#fff" : "#111",
                      }}
                      className="uppercase px-7 py-2.5"
                    >
                      {v}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <label style={labelStyle} className={labelCls}>
                Any Message (Optional)
              </label>
              <textarea
                rows={4}
                className={inputCls}
                placeholder="Tell us anything — availability, preferred position, or questions"
              />
            </div>
            <button
              type="submit"
              style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.15em", fontSize: "14px" }}
              className="aleph-btn aleph-btn-darken-red w-full text-white uppercase py-4 inline-flex items-center justify-center gap-2"
            >
              Join the Roster <ArrowRight size={16} />
            </button>
            <div style={{ ...body, fontSize: "13px", color: "#6B6B6B" }} className="text-center">
              We'll add you to the WhatsApp group within 24 hours
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function InstagramCTA() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center mb-6">
          <Instagram size={64} style={{ color: RED }} strokeWidth={1.5} />
        </div>
        <BigHeading>Follow For Match Updates</BigHeading>
        <p style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-6">
          Match schedules, team announcements, and live score updates every week on Instagram.
        </p>
        <button
          style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "14px" }}
          className="aleph-btn aleph-btn-darken-red mt-10 text-white uppercase px-7 py-4 inline-flex items-center gap-2"
        >
          Follow @Aleph_Sports <ArrowRight size={16} />
        </button>
        <div style={{ ...body, fontSize: "14px", color: "#6B6B6B" }} className="mt-5">
          Also follow us on CricHeroes to track live scorecards
        </div>
      </div>
    </section>
  );
}

function FinalBanner() {
  return (
    <section style={{ background: DARK, borderTop: `3px solid ${RED}` }} className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <CircleDot size={36} style={{ color: RED }} className="mx-auto mb-6" />
        <h2
          style={{
            ...condensed,
            fontWeight: 900,
            fontSize: "clamp(36px, 6vw, 80px)",
            lineHeight: 0.9,
            letterSpacing: "-0.01em",
          }}
          className="uppercase text-white"
        >
          Vijayawada's Cricket Community Is Waiting
        </h2>
        <p style={{ ...body, fontSize: "17px", lineHeight: 1.7 }} className="text-white/65 mt-6">
          Don't just watch cricket. Play it. Every week. With Aleph Sports Club.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <button
            style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "14px" }}
            className="aleph-btn aleph-btn-darken-red text-white uppercase px-7 py-4 inline-flex items-center gap-2"
          >
            Join Now <ArrowRight size={16} />
          </button>
          <button
            style={{
              border: "1px solid rgba(255,255,255,0.6)",
              ...condensed,
              fontWeight: 800,
              letterSpacing: "0.12em",
              fontSize: "14px",
            }}
            className="aleph-btn aleph-btn-fill-red text-white uppercase px-7 py-4 inline-flex items-center gap-2"
          >
            <Phone size={14} /> Call Us: +91 9491581580
          </button>
        </div>
      </div>
    </section>
  );
}

export function ClubCricketPage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <Schedule />
      <HowItWorks />
      <Benefits />
      <RecentMatches />
      <RosterForm />
      <InstagramCTA />
      <FinalBanner />
    </>
  );
}