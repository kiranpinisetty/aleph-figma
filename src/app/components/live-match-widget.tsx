import { motion } from "motion/react";
import { ArrowRight, Trophy } from "lucide-react";

const RED = "#C8102E";
const DARK = "#0E0E0E";
const CRICHEROES_URL = "https://cricheroes.com/team-profile/5279275/aleph-sports-club/matches";

const condensed = { fontFamily: "'Barlow Condensed', sans-serif" };
const body = { fontFamily: "'Barlow', sans-serif" };

const matches = [
  { n: "M-042", date: "Apr 20, 2026", opp: "Krishna Kings XI", result: "WON" as const },
  { n: "M-041", date: "Apr 13, 2026", opp: "Riverfront CC", result: "WON" as const },
  { n: "M-040", date: "Apr 06, 2026", opp: "Indus Cricket Club", result: "LOST" as const },
];

export function LiveMatchWidget() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div
            style={{ ...condensed, color: RED, letterSpacing: "0.2em", fontWeight: 700, fontSize: "11px" }}
            className="uppercase mb-4"
          >
            ● Live From The Field
          </div>
          <h2
            style={{
              ...condensed,
              fontWeight: 900,
              fontSize: "clamp(36px, 5.5vw, 72px)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
            }}
            className="uppercase"
          >
            Latest Club Matches
          </h2>
          <p style={{ ...body, fontSize: "17px", lineHeight: 1.7, color: "#6B6B6B" }} className="mt-5">
            Aleph Sports Club plays every week. All matches tracked live on CricHeroes.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ background: DARK, borderTop: `3px solid ${RED}`, willChange: "transform, opacity" }}
          className="mt-12 p-6 md:p-9"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span
                style={{ background: RED, ...condensed, fontWeight: 800, letterSpacing: "0.15em", fontSize: "11px" }}
                className="uppercase text-white px-3 py-1 inline-flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" /> Club Cricket
              </span>
              <span
                style={{ ...condensed, fontWeight: 800, letterSpacing: "0.05em", fontSize: "18px" }}
                className="uppercase text-white"
              >
                Aleph Sports Club
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span
                style={{ ...condensed, fontWeight: 700, letterSpacing: "0.15em", fontSize: "11px" }}
                className="uppercase text-white/55"
              >
                <Trophy size={12} className="inline mr-1" /> CricHeroes
              </span>
              <a
                href={CRICHEROES_URL}
                target="_blank"
                rel="noreferrer"
                style={{ ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "12px", color: RED }}
                className="uppercase border-b border-current inline-flex items-center gap-1"
              >
                View All Matches <ArrowRight size={12} />
              </a>
            </div>
          </div>

          <div>
            {matches.map((m, i) => (
              <motion.div
                key={m.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: 0.1 * i, ease: "easeOut" }}
                className="grid grid-cols-12 gap-4 items-center py-5 border-b border-white/10 last:border-b-0"
              >
                <div className="col-span-12 md:col-span-3">
                  <div
                    style={{ ...condensed, fontWeight: 800, letterSpacing: "0.2em", fontSize: "11px", color: RED }}
                    className="uppercase"
                  >
                    Match {m.n}
                  </div>
                  <div style={{ ...body, fontSize: "13px" }} className="text-white/55 mt-1">
                    {m.date}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 flex items-center gap-4 flex-wrap">
                  <span style={{ ...condensed, fontWeight: 800, fontSize: "20px" }} className="uppercase text-white">
                    Aleph Sports Club
                  </span>
                  <span
                    style={{ ...condensed, fontWeight: 800, letterSpacing: "0.2em", fontSize: "12px", color: RED }}
                    className="uppercase"
                  >
                    Vs
                  </span>
                  <span
                    style={{ ...condensed, fontWeight: 800, fontSize: "20px" }}
                    className="uppercase text-white/70"
                  >
                    {m.opp}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-3 flex md:justify-end items-center gap-4">
                  <motion.span
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.08, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * i + 0.2 }}
                    style={{
                      ...condensed,
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                      fontSize: "11px",
                      background: m.result === "WON" ? RED : "transparent",
                      border: m.result === "WON" ? undefined : "1px solid rgba(255,255,255,0.35)",
                    }}
                    className="uppercase text-white px-3 py-1 inline-block"
                  >
                    {m.result}
                  </motion.span>
                  <a
                    href={CRICHEROES_URL}
                    target="_blank"
                    rel="noreferrer"
                    style={{ ...condensed, fontWeight: 800, letterSpacing: "0.12em", fontSize: "11px", color: RED }}
                    className="uppercase whitespace-nowrap"
                  >
                    View Scorecard →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={CRICHEROES_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                border: `1px solid ${RED}`,
                ...condensed,
                fontWeight: 800,
                letterSpacing: "0.12em",
                fontSize: "13px",
              }}
              className="uppercase px-7 py-3 inline-flex items-center gap-2 hover:bg-[#C8102E] hover:!text-white text-[#C8102E] transition-colors"
            >
              Follow Us on CricHeroes <ArrowRight size={14} />
            </a>
            <div style={{ ...body, fontSize: "13px" }} className="text-white/55 mt-4">
              Live scorecards · Player stats · Season averages
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
