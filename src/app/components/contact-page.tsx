import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Instagram,
  MessageCircle,
  Plus,
  Minus,
  Star,
  Car,
  Bus,
  Navigation,
  Clock,
  ShoppingBag,
} from "lucide-react";
import { motion } from "motion/react";

const CATALOGUE_URL = "https://wa.me/c/919491581580";

const RED = "#C8102E";
const DARK = "#0E0E0E";
const OFF = "#F6F5F3";
const PHONE = "+91 9491581580";
const PHONE_RAW = "+919491581580";
const EMAIL = "alephsportsinfo@gmail.com";
const ADDRESS = "29-19-87/3 Bishop Azaraiah School Compound, Labbipet, Vijayawada, Andhra Pradesh 520010";
const CRICHEROES_URL = "https://cricheroes.com/team-profile/5279275/aleph-sports-club/matches";

const condensed = { fontFamily: "'Barlow Condensed', sans-serif" };
const body = { fontFamily: "'Barlow', sans-serif" };

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div
      style={{ ...condensed, color: light ? "#fff" : RED, letterSpacing: "0.2em", fontWeight: 700, fontSize: "11px" }}
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

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: DARK,
        backgroundImage: "repeating-linear-gradient(135deg, rgba(200,16,46,0.08) 0 1px, transparent 1px 32px)",
        minHeight: "40vh",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12 min-h-[40vh] flex flex-col justify-end">
        <Eyebrow>Get In Touch</Eyebrow>
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
          Contact Us
        </h1>
        <p style={{ ...body, fontSize: "17px", lineHeight: 1.7 }} className="text-white/65 mt-6 max-w-2xl">
          Walk in, call us, or drop a message. We respond within 24 hours — always.
        </p>
        <div className="mt-8" style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px" }}>
          <span className="text-white/50 uppercase">Home</span>
          <span className="text-white/30 mx-2">/</span>
          <span style={{ color: RED }} className="uppercase">
            Contact
          </span>
        </div>
      </div>
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block"
      >
        <span
          style={{
            ...condensed,
            fontWeight: 900,
            fontSize: "240px",
            lineHeight: 0.8,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.1)",
            letterSpacing: "-0.02em",
          }}
          className="uppercase"
        >
          Connect
        </span>
      </div>
    </section>
  );
}

function QuickStrip() {
  const items = [
    { Icon: Phone, label: "Call Us", v: PHONE, sub: "Mon–Sun, 9AM–8PM", href: `tel:${PHONE_RAW}` },
    { Icon: Mail, label: "Email Us", v: EMAIL, sub: "Reply within 24 hours", href: `mailto:${EMAIL}` },
    { Icon: MapPin, label: "Visit Us", v: "Labbipet, Vijayawada", sub: "Walk-ins welcome", href: "#map" },
  ];
  return (
    <section style={{ background: RED }}>
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(({ Icon, label, v, sub, href }, i) => (
          <a
            href={href}
            key={label}
            className="flex items-start gap-4 px-2 hover:opacity-90"
            style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.25)" : undefined, paddingLeft: i > 0 ? 24 : 0 }}
          >
            <Icon size={26} color="#fff" strokeWidth={1.8} />
            <div>
              <div
                style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px" }}
                className="uppercase text-white/80"
              >
                {label}
              </div>
              <div style={{ ...condensed, fontWeight: 800, fontSize: "22px" }} className="uppercase text-white mt-1">
                {v}
              </div>
              <div style={{ ...body, fontSize: "13px" }} className="text-white/75 mt-1">
                {sub}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function MainContact() {
  const inputCls = "w-full bg-white border border-[#E3E1DD] px-4 py-3 outline-none focus:border-[#C8102E]";
  const lblStyle = { ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px", color: RED };
  const lblCls = "uppercase block mb-2";
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ background: OFF, borderTop: `3px solid ${RED}` }}
          className="p-8 md:p-12 space-y-5"
        >
          <Eyebrow>Send An Enquiry</Eyebrow>
          <BigHeading>Let's Talk</BigHeading>
          <p style={{ ...body, fontSize: "16px", lineHeight: 1.7, color: "#6B6B6B" }}>
            Jersey orders, gear queries, bat knocking bookings, club cricket — whatever it is, we're listening.
          </p>
          <div>
            <label style={lblStyle} className={lblCls}>
              Full Name
            </label>
            <input className={inputCls} placeholder="Your full name" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label style={lblStyle} className={lblCls}>
                Phone Number
              </label>
              <input className={inputCls} defaultValue="+91 " />
            </div>
            <div>
              <label style={lblStyle} className={lblCls}>
                Email Address
              </label>
              <input type="email" className={inputCls} placeholder="you@email.com" />
            </div>
          </div>
          <div>
            <label style={lblStyle} className={lblCls}>
              Subject
            </label>
            <select className={inputCls}>
              <option>Jersey Order</option>
              <option>Cricket Gear</option>
              <option>Bat Knocking</option>
              <option>Product Repair</option>
              <option>Tournament Kit</option>
              <option>Club Cricket</option>
              <option>General Enquiry</option>
            </select>
          </div>
          <div>
            <label style={lblStyle} className={lblCls}>
              Message
            </label>
            <textarea
              rows={5}
              className={inputCls}
              placeholder="Tell us what you need — we'll get back with a solution"
            />
          </div>
          <button
            type="submit"
            style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.15em", fontSize: "14px" }}
            className="aleph-btn aleph-btn-darken-red w-full text-white uppercase py-4 inline-flex items-center justify-center gap-2"
          >
            {/* [FIX 7] CTA: .aleph-btn smooth 0.2s ease + darken on hover */}
            Send Message <ArrowRight size={16} />
          </button>
          <div style={{ ...body, fontSize: "13px", color: "#6B6B6B" }} className="text-center">
            Or WhatsApp us directly at {PHONE}
          </div>
        </form>

        <div style={{ background: DARK, borderLeft: `3px solid ${RED}` }} className="p-8 md:p-12">
          <Eyebrow>Find Us</Eyebrow>
          <h3
            style={{ ...condensed, fontWeight: 900, fontSize: "44px", lineHeight: 0.9, letterSpacing: "0.02em" }}
            className="uppercase text-white"
          >
            Aleph Sports
          </h3>
          <div
            style={{ ...condensed, fontStyle: "italic", fontWeight: 700, fontSize: "20px", color: RED }}
            className="mt-2"
          >
            The Beginning
          </div>
          <div className="mt-8 space-y-6">
            {[
              { Icon: Phone, l: "Phone / WhatsApp", v: PHONE, d: "Tap to call or WhatsApp" },
              { Icon: Mail, l: "Email", v: EMAIL },
              { Icon: Globe, l: "Website", v: "www.alephsports.store" },
              { Icon: MapPin, l: "Address", v: ADDRESS },
            ].map(({ Icon, l, v, d }) => (
              <div key={l} className="flex items-start gap-4">
                <Icon style={{ color: RED }} size={20} />
                <div>
                  <div
                    style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px", color: RED }}
                    className="uppercase"
                  >
                    {l}
                  </div>
                  <div style={{ ...body, fontSize: "15px", lineHeight: 1.6 }} className="text-white mt-1">
                    {v}
                  </div>
                  {d && <div style={{ ...body, fontSize: "13px" }} className="text-white/55 mt-0.5">{d}</div>}
                </div>
              </div>
            ))}
          </div>
          <div className="my-8 h-px" style={{ background: "rgba(200,16,46,0.4)" }} />
          <div className="flex items-start gap-4">
            <Clock style={{ color: RED }} size={20} />
            <div className="flex-1">
              <div
                style={{ ...condensed, fontWeight: 800, letterSpacing: "0.15em", fontSize: "13px" }}
                className="uppercase text-white"
              >
                Store Hours
              </div>
              <div style={{ ...body, fontSize: "14px", lineHeight: 1.8 }} className="text-white/75 mt-2">
                Mon – Sat: 9:00 AM – 8:00 PM
                <br />
                Sunday: 10:00 AM – 6:00 PM
              </div>
              <span
                style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.15em", fontSize: "11px" }}
                className="inline-block uppercase text-white px-3 py-1 mt-3"
              >
                ● Open Today
              </span>
            </div>
          </div>
          <div className="mt-10 space-y-3">
            <a
              href={`https://wa.me/${PHONE_RAW.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.15em", fontSize: "14px" }}
              className="aleph-btn aleph-btn-darken-red w-full text-white uppercase py-4 inline-flex items-center justify-center gap-2"
            >
              {/* [FIX 7] WhatsApp CTA: .aleph-btn smooth transition */}
              WhatsApp Now <ArrowRight size={16} />
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              style={{
                border: "1px solid rgba(255,255,255,0.6)",
                ...condensed,
                fontWeight: 800,
                letterSpacing: "0.15em",
                fontSize: "14px",
              }}
              className="aleph-btn aleph-btn-fill-red w-full text-white uppercase py-4 inline-flex items-center justify-center gap-2"
            >
              {/* [FIX 7] Call outline CTA: .aleph-btn + fill-red hover */}
              Call Now <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  const cards = [
    { Icon: Car, t: "By Auto / Cab", d: "Tell driver: Bishop Azaraiah School Compound, Labbipet — near TTD Kalyana Mandapam" },
    { Icon: Bus, t: "By Bus", d: "Labbipet bus stop is the closest — 2 min walk from the stop" },
    { Icon: Navigation, t: "Landmark", d: "Opposite TTD Kalyanamandapam, Vijayawada — easily visible from main road" },
  ];
  return (
    <section id="map" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <Eyebrow>Our Location</Eyebrow>
          <BigHeading>Visit Our Store</BigHeading>
          <p style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-6">
            We're located in Labbipet, Vijayawada — easy to find, walk-ins always welcome.
          </p>
        </div>
        <div className="mt-12 relative" style={{ border: "1px solid #E3E1DD" }}>
          <iframe
            title="Aleph Sports Map"
            src={`https://www.google.com/maps?q=${encodeURIComponent("Labbipet, Vijayawada, Andhra Pradesh 520010")}&output=embed`}
            width="100%"
            height={460}
            style={{ border: 0, filter: "grayscale(0.85) contrast(1.05)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div
            className="absolute top-6 left-6 flex items-center gap-3 px-4 py-3"
            style={{ background: "#fff", borderLeft: `3px solid ${RED}`, boxShadow: "0 6px 24px rgba(0,0,0,0.12)" }}
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full" style={{ background: RED }}>
              <MapPin size={18} color="#fff" />
            </div>
            <div>
              <div
                style={{ ...condensed, fontWeight: 800, letterSpacing: "0.05em", fontSize: "16px" }}
                className="uppercase"
              >
                Aleph Sports
              </div>
              <div style={{ ...body, fontSize: "12px", color: "#6B6B6B" }}>Labbipet, Vijayawada</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {cards.map(({ Icon, t, d }) => (
            <div key={t} style={{ border: "1px solid #E3E1DD", borderTop: `3px solid ${RED}` }} className="p-6 bg-white">
              <Icon style={{ color: RED }} size={28} strokeWidth={1.8} />
              <h4 style={{ ...condensed, fontWeight: 800, fontSize: "20px" }} className="uppercase mt-4">
                {t}
              </h4>
              <p style={{ ...body, fontSize: "14px", lineHeight: 1.65, color: "#6B6B6B" }} className="mt-2">
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialCard({
  dark,
  Icon,
  title,
  handle,
  desc,
  cta,
  href,
  meta,
}: {
  dark?: boolean;
  Icon: any;
  title: string;
  handle: string;
  desc: string;
  cta: string;
  href: string;
  meta?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        background: dark ? DARK : "#fff",
        border: dark ? undefined : "1px solid #E3E1DD",
        borderTop: `3px solid ${RED}`,
      }}
      className="aleph-btn p-8 flex flex-col h-full hover:-translate-y-1 relative hover:shadow-xl"
    >
      {/* [FIX 7] Social card: .aleph-btn smooth 0.2s hover + [FIX 8] flex-col h-full for equal height */}
      {/* [FIX 8] Social card icon standardized to 24px across all cards */}
      <Icon style={{ color: RED }} size={24} strokeWidth={1.8} />
      <h3
        style={{ ...condensed, fontWeight: 800, fontSize: "26px", color: dark ? "#fff" : DARK }}
        className="uppercase mt-6"
      >
        {title}
      </h3>
      <div
        style={{ ...condensed, fontWeight: 700, letterSpacing: "0.05em", fontSize: "16px", color: RED }}
        className="mt-1"
      >
        {handle}
      </div>
      <p
        style={{ ...body, fontSize: "14px", lineHeight: 1.7 }}
        className={`mt-4 flex-1 ${dark ? "text-white/75" : "text-[#6B6B6B]"}`}
      >
        {desc}
      </p>
      <span
        style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "13px" }}
        className="mt-6 self-start text-white uppercase px-5 py-3 inline-flex items-center gap-2"
      >
        {cta} <ArrowRight size={14} />
      </span>
      {meta && (
        <span
          style={{ ...body, fontSize: "12px" }}
          className={`absolute bottom-4 right-5 ${dark ? "text-white/40" : "text-[#9a9a9a]"}`}
        >
          {meta}
        </span>
      )}
    </a>
  );
}

function Social() {
  return (
    <section style={{ background: OFF }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <Eyebrow>Follow The Journey</Eyebrow>
          <BigHeading>Find Us On Social</BigHeading>
          <p style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-6">
            Match updates, new gear drops, jersey designs, and club cricket announcements — all on social.
          </p>
        </div>
        {/* [FIX 8] items-stretch makes all 4 social cards equal height in each row */}
        <div className="aleph-social-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          <SocialCard
            Icon={Instagram}
            title="Instagram"
            handle="@Aleph_Sports"
            desc="Match day photos, jersey drops, club cricket updates, and behind-the-scenes from the store."
            cta="Follow Us"
            href="https://instagram.com/Aleph_Sports"
            meta="Active community"
          />
          <SocialCard
            dark
            Icon={MessageCircle}
            title="WhatsApp"
            handle={PHONE}
            desc="Fastest way to place orders, ask questions, or book bat knocking. We reply same day."
            cta="Chat Now"
            href={`https://wa.me/${PHONE_RAW.replace("+", "")}`}
          />
          <SocialCard
            Icon={Star}
            title="CricHeroes"
            handle="ALEPH SPORTS CLUB"
            desc="Follow our club profile for live scorecards, match results, and player stats from every weekly game."
            cta="View Profile"
            href={CRICHEROES_URL}
          />
          <SocialCard
            dark
            Icon={MapPin}
            title="Google"
            handle="ALEPH SPORTS"
            desc="Find us on Google Maps and leave a review — it helps other players and teams discover us."
            cta="Leave a Review"
            href="https://www.google.com/maps/search/Aleph+Sports+Vijayawada"
          />
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  ["How do I place a jersey order?", "Fill the enquiry form or WhatsApp us. We'll discuss design, quantity, and timeline. Minimum order: 5 jerseys."],
  ["How long does jersey delivery take?", "Standard orders: 7–10 working days. Urgent orders: contact us directly to check availability."],
  ["Do you deliver outside Vijayawada?", "Yes. We ship across Andhra Pradesh and Telangana. Courier charges apply."],
  ["What is bat knocking and why do I need it?", "Bat knocking compresses the fibres of a new bat to prevent cracking and improve performance. All new bats should be knocked before use."],
  ["How do I join the club cricket matches?", "Fill the roster form on the Club Cricket page or WhatsApp us. We'll add you to the squad WhatsApp group."],
  ["Do you repair all types of cricket gear?", "We repair batting gloves, pads, helmets, bags, and bats. WhatsApp us a photo of the damage for a quick assessment."],
  ["Are there any charges to join club cricket?", "Contact us for current match fee details. Fees are minimal and go towards ground booking and match management."],
  ["Can I visit the store without an appointment?", "Absolutely. Walk-ins are always welcome during store hours: Mon–Sat 9AM–8PM, Sun 10AM–6PM."],
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <Eyebrow>Quick Answers</Eyebrow>
          <BigHeading>Frequently Asked</BigHeading>
          <p style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-6">
            Before you call — your question might already be answered here.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-14 space-y-3">
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div
                key={q}
                style={{
                  background: "#fff",
                  border: "1px solid #E3E1DD",
                  borderTop: isOpen ? `3px solid ${RED}` : "1px solid #E3E1DD",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span
                    style={{ ...condensed, fontWeight: 800, fontSize: "20px", letterSpacing: "0.01em" }}
                    className="uppercase"
                  >
                    {q}
                  </span>
                  <span
                    className="shrink-0 w-9 h-9 flex items-center justify-center"
                    style={{ background: isOpen ? RED : "#fff", border: `1px solid ${RED}` }}
                  >
                    {isOpen ? <Minus size={16} color="#fff" /> : <Plus size={16} color={RED} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 -mt-1">
                    <p style={{ ...body, fontSize: "16px", lineHeight: 1.7, color: "#6B6B6B" }}>{a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FloatingButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
      className="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-3"
    >
      <a
        href={CATALOGUE_URL}
        target="_blank"
        rel="noreferrer"
        title="View Catalogue"
        className="group inline-flex items-center gap-3 pl-2 pr-2 py-2 hover:pr-5 transition-all hover:scale-105"
        style={{
          background: RED,
          boxShadow: "0 12px 32px rgba(200,16,46,0.45)",
          ...condensed,
          fontWeight: 800,
          letterSpacing: "0.15em",
          fontSize: "13px",
        }}
      >
        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/15">
          <ShoppingBag size={20} color="#fff" />
        </span>
        <span className="text-white uppercase max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] transition-all duration-300">
          View Catalogue →
        </span>
      </a>
      <a
        href={`https://wa.me/${PHONE_RAW.replace("+", "")}`}
        target="_blank"
        rel="noreferrer"
        className="group relative inline-flex items-center gap-3 pl-2 pr-2 py-2 hover:pr-5 transition-all hover:scale-105"
        style={{
          background: RED,
          boxShadow: "0 12px 32px rgba(200,16,46,0.45)",
          ...condensed,
          fontWeight: 800,
          letterSpacing: "0.15em",
          fontSize: "13px",
        }}
      >
        <span className="aleph-pulse-ring relative w-12 h-12 flex items-center justify-center rounded-full" style={{ background: "#25D366" }}>
          <MessageCircle size={22} color="#fff" />
        </span>
        <span className="text-white uppercase max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] transition-all duration-300">
          Chat with us →
        </span>
      </a>
    </motion.div>
  );
}

function FinalBanner() {
  return (
    <section style={{ background: DARK, borderTop: `3px solid ${RED}` }} className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
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
          Ready To Order or Join The Club?
        </h2>
        <p style={{ ...body, fontSize: "17px", lineHeight: 1.7 }} className="text-white/65 mt-6">
          Jerseys, gear, repairs, bat knocking, or club cricket — one call gets it done.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <button
            style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "14px" }}
            className="text-white uppercase px-7 py-4 inline-flex items-center gap-2 hover:opacity-90"
          >
            Start Enquiry <ArrowRight size={16} />
          </button>
          <a
            href={`tel:${PHONE_RAW}`}
            style={{
              border: "1px solid rgba(255,255,255,0.6)",
              ...condensed,
              fontWeight: 800,
              letterSpacing: "0.12em",
              fontSize: "14px",
            }}
            className="text-white uppercase px-7 py-4 inline-flex items-center gap-2 hover:bg-white/10"
          >
            <Phone size={14} /> Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <>
      <Hero />
      <QuickStrip />
      <MainContact />
      <MapSection />
      <Social />
      <FAQ />
      <FinalBanner />
      <FloatingButtons />
    </>
  );
}