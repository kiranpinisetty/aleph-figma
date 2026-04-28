import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Minus, Plus, X, ArrowRight } from "lucide-react";

const RED = "#C8102E";
const OFF = "#F6F5F3";

const condensed = { fontFamily: "'Barlow Condensed', sans-serif" };
const body = { fontFamily: "'Barlow', sans-serif" };

const COLOURS: { name: string; value: string }[] = [
  { name: "Red", value: "#C8102E" },
  { name: "Black", value: "#0E0E0E" },
  { name: "White", value: "#FFFFFF" },
  { name: "Navy Blue", value: "#0A2342" },
  { name: "Royal Blue", value: "#1D4ED8" },
  { name: "Green", value: "#15803D" },
  { name: "Yellow", value: "#FACC15" },
  { name: "Orange", value: "#F97316" },
  { name: "Maroon", value: "#7F1D1D" },
  { name: "Sky Blue", value: "#38BDF8" },
  { name: "Purple", value: "#7C3AED" },
  { name: "Grey", value: "#6B7280" },
];

const COLLARS = ["Round Neck", "V-Neck", "Polo Collar"];
const SLEEVES = ["Full Sleeve", "Half Sleeve", "Sleeveless"];
const PRINTS = [
  { t: "Sublimation", d: "Full colour, photo-quality, fade-resistant" },
  { t: "Embroidery", d: "Stitched logos, premium finish" },
];

const EXTRAS = [
  "Add Player Names on Back",
  "Add Sponsor Logo",
  "Add Captain / VC Armband Badge",
  "Include Shorts (same colour scheme)",
  "Include Socks",
];

function Pill({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...condensed,
        fontWeight: 800,
        letterSpacing: "0.12em",
        fontSize: "12px",
        background: active ? RED : "#fff",
        color: active ? "#fff" : "#111",
        border: `1px solid ${active ? RED : "#E3E1DD"}`,
      }}
      className="uppercase px-5 py-2.5 transition-colors"
    >
      {children}
    </button>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ ...condensed, fontWeight: 800, letterSpacing: "0.15em", fontSize: "12px", color: RED }}
      className="uppercase mb-3"
    >
      {children}
    </div>
  );
}

function JerseySVG({
  base,
  accent,
  collar,
  sleeve,
  view,
  team,
  number,
}: {
  base: string;
  accent: string;
  collar: string;
  sleeve: string;
  view: "front" | "back";
  team: string;
  number: string;
}) {
  const sleeveTrim =
    sleeve === "Sleeveless" ? 60 : sleeve === "Half Sleeve" ? 30 : 0;
  const isLight = base.toUpperCase() === "#FFFFFF" || base.toUpperCase() === "#FACC15";
  const ink = isLight ? "#0E0E0E" : "#FFFFFF";
  return (
    <svg viewBox="0 0 320 380" className="w-full max-w-[340px] mx-auto" style={{ transition: "filter 400ms" }}>
      <defs>
        <clipPath id="body">
          <path d="M70 80 L120 50 L160 60 L200 50 L250 80 L260 380 L60 380 Z" />
        </clipPath>
      </defs>
      {/* sleeves */}
      <g style={{ transition: "all 400ms" }}>
        <path
          d={`M70 80 L20 ${130 + sleeveTrim} L40 ${170 + sleeveTrim} L100 ${110}`}
          fill={accent}
        />
        <path
          d={`M250 80 L300 ${130 + sleeveTrim} L280 ${170 + sleeveTrim} L220 ${110}`}
          fill={accent}
        />
      </g>
      {/* body */}
      <rect x="0" y="0" width="320" height="380" fill={base} clipPath="url(#body)" style={{ transition: "fill 400ms" }} />
      {/* side panels */}
      <path d="M70 80 L60 380 L100 380 L100 100 Z" fill={accent} clipPath="url(#body)" opacity="0.85" />
      <path d="M250 80 L260 380 L220 380 L220 100 Z" fill={accent} clipPath="url(#body)" opacity="0.85" />
      {/* collar */}
      {collar === "Round Neck" && (
        <path d="M135 60 Q160 90 185 60 L180 50 Q160 70 140 50 Z" fill={accent} />
      )}
      {collar === "V-Neck" && <path d="M130 50 L160 100 L190 50 L185 50 L160 88 L135 50 Z" fill={accent} />}
      {collar === "Polo Collar" && (
        <>
          <path d="M120 50 L160 80 L200 50 L200 70 L160 95 L120 70 Z" fill={accent} />
          <line x1="160" y1="80" x2="160" y2="130" stroke={ink} strokeWidth="2" />
        </>
      )}
      {/* text */}
      {view === "front" ? (
        <text
          x="160"
          y="200"
          textAnchor="middle"
          fill={ink}
          style={{ ...condensed, fontWeight: 800, letterSpacing: "2px", fontSize: 18 }}
        >
          {(team || "TEAM NAME").toUpperCase().slice(0, 14)}
        </text>
      ) : (
        <>
          <text
            x="160"
            y="170"
            textAnchor="middle"
            fill={ink}
            style={{ ...condensed, fontWeight: 800, letterSpacing: "2px", fontSize: 14 }}
          >
            {(team || "ALEPH").toUpperCase().slice(0, 14)}
          </text>
          <text
            x="160"
            y="270"
            textAnchor="middle"
            fill={ink}
            style={{ ...condensed, fontWeight: 900, fontSize: 92 }}
          >
            {(number || "10").slice(0, 2)}
          </text>
        </>
      )}
    </svg>
  );
}

export function JerseyConfigurator({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (summary: string) => void;
}) {
  const [collar, setCollar] = useState(COLLARS[0]);
  const [sleeve, setSleeve] = useState(SLEEVES[1]);
  const [base, setBase] = useState(COLOURS[0]);
  const [accent, setAccent] = useState(COLOURS[1]);
  const [print, setPrint] = useState(PRINTS[0].t);
  const [team, setTeam] = useState("");
  const [number, setNumber] = useState("10");
  const [qty, setQty] = useState(11);
  const [extras, setExtras] = useState<Record<string, boolean>>({});
  const [view, setView] = useState<"front" | "back">("front");

  const summary = useMemo(
    () =>
      `${collar} · ${sleeve} · ${base.name} + ${accent.name} · ${print} · Qty: ${qty}` +
      (team ? ` · Team: ${team}` : "") +
      (number ? ` · #${number}` : "") +
      (Object.keys(extras).filter((k) => extras[k]).length
        ? ` · Extras: ${Object.keys(extras)
            .filter((k) => extras[k])
            .join(", ")}`
        : ""),
    [collar, sleeve, base, accent, print, qty, team, number, extras],
  );

  const reset = () => {
    setCollar(COLLARS[0]);
    setSleeve(SLEEVES[1]);
    setBase(COLOURS[0]);
    setAccent(COLOURS[1]);
    setPrint(PRINTS[0].t);
    setTeam("");
    setNumber("10");
    setQty(11);
    setExtras({});
    setView("front");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6"
          style={{ background: "rgba(0,0,0,0.85)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            style={{ background: "#fff", borderTop: `3px solid ${RED}`, willChange: "transform, opacity" }}
            className="w-full max-w-6xl max-h-[95vh] overflow-hidden grid md:grid-cols-2 relative"
          >
            <button
              onClick={onClose}
              style={{ ...condensed, fontWeight: 800, letterSpacing: "0.15em", fontSize: "12px", color: RED }}
              className="absolute top-4 right-5 z-10 uppercase inline-flex items-center gap-1"
            >
              <X size={14} /> Close
            </button>

            {/* LEFT — Live preview */}
            <div
              style={{ background: OFF }}
              className="p-8 md:p-10 flex flex-col items-center justify-start md:justify-center md:sticky md:top-0 md:max-h-[95vh]"
            >
              <div
                style={{ ...condensed, fontWeight: 700, letterSpacing: "0.2em", fontSize: "11px", color: RED }}
                className="uppercase mb-3"
              >
                Live Preview
              </div>
              <JerseySVG
                base={base.value}
                accent={accent.value}
                collar={collar}
                sleeve={sleeve}
                view={view}
                team={team}
                number={number}
              />
              <div className="flex gap-2 mt-6">
                {(["front", "back"] as const).map((v) => (
                  <Pill key={v} active={view === v} onClick={() => setView(v)}>
                    {v}
                  </Pill>
                ))}
              </div>
              <p style={{ ...body, fontSize: "12px", color: "#6B6B6B" }} className="mt-5 text-center">
                This is a design preview. Final product may vary slightly.
              </p>
            </div>

            {/* RIGHT — Controls */}
            <div className="overflow-y-auto max-h-[95vh] flex flex-col">
              <div className="p-7 md:p-9 space-y-8 flex-1">
                <div>
                  <h2
                    style={{ ...condensed, fontWeight: 900, fontSize: "32px", lineHeight: 0.9 }}
                    className="uppercase"
                  >
                    Customise Your Jersey
                  </h2>
                  <p style={{ ...body, fontSize: "14px", color: "#6B6B6B" }} className="mt-2">
                    Configure every detail — we'll quote you within 24 hours.
                  </p>
                </div>

                <div>
                  <Label>Collar Type</Label>
                  <div className="flex flex-wrap gap-2">
                    {COLLARS.map((c) => (
                      <Pill key={c} active={collar === c} onClick={() => setCollar(c)}>
                        {c}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Sleeve Type</Label>
                  <div className="flex flex-wrap gap-2">
                    {SLEEVES.map((s) => (
                      <Pill key={s} active={sleeve === s} onClick={() => setSleeve(s)}>
                        {s}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Base Colour</Label>
                  <div className="grid grid-cols-6 gap-3">
                    {COLOURS.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setBase(c)}
                        title={c.name}
                        className="w-10 h-10"
                        style={{
                          background: c.value,
                          border: c.name === "White" ? "1px solid #E3E1DD" : undefined,
                          boxShadow: base.name === c.name ? `0 0 0 2px #fff, 0 0 0 4px ${RED}` : undefined,
                        }}
                      />
                    ))}
                  </div>
                  <p style={{ ...body, fontSize: "12px", color: "#6B6B6B" }} className="mt-3">
                    Custom colours available — mention in enquiry.
                  </p>
                </div>

                <div>
                  <Label>Accent / Side Panel Colour</Label>
                  <div className="grid grid-cols-6 gap-3">
                    {COLOURS.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setAccent(c)}
                        title={c.name}
                        className="w-10 h-10"
                        style={{
                          background: c.value,
                          border: c.name === "White" ? "1px solid #E3E1DD" : undefined,
                          boxShadow: accent.name === c.name ? `0 0 0 2px #fff, 0 0 0 4px ${RED}` : undefined,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Print Type</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PRINTS.map((p) => {
                      const active = print === p.t;
                      return (
                        <button
                          key={p.t}
                          type="button"
                          onClick={() => setPrint(p.t)}
                          style={{
                            background: active ? RED : "#fff",
                            color: active ? "#fff" : "#111",
                            border: `1px solid ${active ? RED : "#E3E1DD"}`,
                          }}
                          className="text-left p-4 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span style={{ ...condensed, fontWeight: 800, fontSize: "18px" }} className="uppercase">
                              {p.t}
                            </span>
                            {active && <Check size={18} />}
                          </div>
                          <div
                            style={{ ...body, fontSize: "13px" }}
                            className={active ? "text-white/85 mt-1" : "text-[#6B6B6B] mt-1"}
                          >
                            {p.d}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <Label>Team Details</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      placeholder="Team name"
                      value={team}
                      onChange={(e) => setTeam(e.target.value)}
                      className="w-full bg-white border border-[#E3E1DD] px-4 py-3 outline-none focus:border-[#C8102E]"
                    />
                    <input
                      placeholder="Player number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value.replace(/\D/g, ""))}
                      className="w-full bg-white border border-[#E3E1DD] px-4 py-3 outline-none focus:border-[#C8102E]"
                    />
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <span
                      style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px" }}
                      className="uppercase text-[#6B6B6B]"
                    >
                      Quantity
                    </span>
                    <div className="inline-flex items-center" style={{ border: "1px solid #E3E1DD" }}>
                      <button
                        onClick={() => setQty(Math.max(5, qty - 1))}
                        className="w-10 h-10 flex items-center justify-center hover:bg-[#F6F5F3]"
                      >
                        <Minus size={14} />
                      </button>
                      <span
                        style={{ ...condensed, fontWeight: 800, fontSize: "20px" }}
                        className="w-12 text-center"
                      >
                        {qty}
                      </span>
                      <button
                        onClick={() => setQty(qty + 1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-[#F6F5F3]"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span style={{ ...body, fontSize: "12px", color: "#6B6B6B" }}>Minimum 5</span>
                  </div>
                </div>

                <div>
                  <Label>Extras</Label>
                  <div className="space-y-2">
                    {EXTRAS.map((x) => {
                      const checked = !!extras[x];
                      return (
                        <button
                          key={x}
                          type="button"
                          onClick={() => setExtras({ ...extras, [x]: !checked })}
                          className="flex items-center gap-3 w-full text-left py-2"
                        >
                          <span
                            className="w-5 h-5 flex items-center justify-center"
                            style={{ background: checked ? RED : "#fff", border: `1px solid ${checked ? RED : "#E3E1DD"}` }}
                          >
                            {checked && <Check size={12} color="#fff" strokeWidth={3} />}
                          </span>
                          <span style={{ ...body, fontSize: "15px" }} className="text-[#111]">
                            {x}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div
                className="sticky bottom-0 bg-white border-t border-[#E3E1DD] p-5 md:p-6"
                style={{ boxShadow: "0 -8px 24px rgba(0,0,0,0.05)" }}
              >
                <div style={{ ...body, fontSize: "13px", color: "#6B6B6B" }} className="mb-3">
                  {summary}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={reset}
                    style={{
                      border: "1px solid #0E0E0E",
                      ...condensed,
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      fontSize: "13px",
                    }}
                    className="uppercase px-5 py-3 hover:bg-[#0E0E0E] hover:text-white transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    onClick={() => onSubmit(summary)}
                    style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "13px" }}
                    className="flex-1 text-white uppercase py-3 inline-flex items-center justify-center gap-2 hover:opacity-90"
                  >
                    Send This Design For Quote <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
