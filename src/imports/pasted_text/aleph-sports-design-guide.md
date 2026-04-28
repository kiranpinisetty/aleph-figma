Figma + Dev Prompt — Aleph Sports: Jersey Configurator + Live Match Widget + WhatsApp Catalogue + Animations

PART 1 — JERSEY CONFIGURATOR (Services Page · Customised Jerseys Section)
Trigger: User clicks "CUSTOMISE YOUR JERSEY →" button (sits beside "GET A JERSEY QUOTE →" in the Customised Jerseys section of the Services page).
Opens as a full-screen modal overlay — dark rgba(0,0,0,0.85) backdrop, modal itself white background, sharp corners, 3px red top border. Close button top-right: "✕ CLOSE" in small Barlow Condensed red.

Modal Layout — Two Columns:
LEFT PANEL — Live Jersey Preview (sticky)

Background: Off-white #F6F5F3
Large jersey SVG/illustration mockup — front view, centered
Jersey updates live as user makes selections
Below mockup: small toggle — "FRONT / BACK" view switcher as two red pill buttons
Bottom of panel: Team name renders live on the jersey chest area as user types it
Player number renders live on the back view
Small label below jersey: "This is a design preview. Final product may vary slightly."

RIGHT PANEL — Configurator Controls — White background, scrollable, padding 36px
Section 1 — JERSEY STYLE

Label: "COLLAR TYPE"
3 visual pill selectors with small icon previews: Round Neck · V-Neck · Polo Collar
Active selection: red background + white text. Inactive: white + 1px border

Section 2 — SLEEVE STYLE

Label: "SLEEVE TYPE"
3 pill selectors: Full Sleeve · Half Sleeve · Sleeveless

Section 3 — PRIMARY COLOUR

Label: "BASE COLOUR"
Colour swatch grid — 12 swatches in 4×3 grid: Red, Black, White, Navy Blue, Royal Blue, Green, Yellow, Orange, Maroon, Sky Blue, Purple, Grey
Active swatch: red ring border around it
Below swatches: small note — "Custom colours available — mention in enquiry"

Section 4 — ACCENT COLOUR

Label: "ACCENT / SIDE PANEL COLOUR"
Same 12-swatch grid
Updates side panel and sleeve colour on live preview

Section 5 — PRINTING METHOD

Label: "PRINT TYPE"
2 large toggle cards side by side:

Sublimation — Full colour, photo-quality, fade-resistant — Red checkmark if selected
Embroidery — Stitched logos, premium finish — Red checkmark if selected



Section 6 — TEAM DETAILS

Team Name — text input — renders live on jersey chest
Player Number — number input — renders live on jersey back
Quantity — number stepper (–) 11 (+), minimum 5 shown below in muted text

Section 7 — EXTRAS

Checkbox list with red checkmarks:

☐ Add Player Names on Back
☐ Add Sponsor Logo
☐ Add Captain / VC Armband Badge
☐ Include Shorts (same colour scheme)
☐ Include Socks



Bottom of Right Panel — Sticky Action Bar:

Summary line: "Round Neck · Half Sleeve · Red + Black · Sublimation · Qty: 11" in small muted gray
Two buttons side by side:

Ghost outline black: "RESET"
Solid red full-width: "SEND THIS DESIGN FOR QUOTE →"


Clicking red button: closes modal, auto-fills the enquiry form Subject as "Jersey Order" and appends the configuration summary into the Message field, then scrolls to enquiry form


PART 2 — LIVE CRICHEROES MATCH WIDGET (Homepage · After Hero Section)
Placement: Immediately after the red marquee strip on the homepage. Before the Services section.
Section Design: White background.

Red tag: "LIVE FROM THE FIELD"
Big black heading: "LATEST CLUB MATCHES"
Subtext: "Aleph Sports Club plays every week. All matches tracked live on CricHeroes."

Widget Card — Dark #0E0E0E background, 3px red top border, padding 36px:
Layout inside card:
Top bar:

Left: Red badge "● CLUB CRICKET" + "Aleph Sports Club" in white Barlow Condensed
Right: CricHeroes label in muted white + red link "VIEW ALL MATCHES →" linking to https://cricheroes.com/team-profile/5279275/aleph-sports-club/matches

Match result rows — 3 recent matches displayed as horizontal rows, separated by thin white 10% opacity dividers. Each row:

Left: Match number + date in muted white small text
Center: "ALEPH SPORTS CLUB" in white bold vs "OPPONENT NAME" in muted white — with VS in red between
Right: Result badge — "WON" in solid red background white text OR "LOST" in dark gray — + "View Scorecard →" in small red link text

Bottom of card:

Centered red outline button: "FOLLOW US ON CRICHEROES →"
Small muted white text: "Live scorecards · Player stats · Season averages"

Note for developer: Fetch match data from CricHeroes profile page https://cricheroes.com/team-profile/5279275/aleph-sports-club/matches — if API not available, use static placeholder data styled realistically and update manually.

PART 3 — WHATSAPP CATALOGUE BUTTON (Sitewide)
3A — Navbar Addition:
Beside the "CONTACT US" red button in the navbar — add a WhatsApp icon button. Dark green #25D366 background, white WhatsApp icon, no text label, square sharp-cornered button same height as Contact Us. Tooltip on hover: "Browse Our Catalogue". Clicking opens https://wa.me/c/919491581580 in new tab.
3B — Homepage Hero Section:
Below the two existing CTA buttons — add a third text link in muted white: "🛍 Browse our product catalogue on WhatsApp →" — clicking opens https://wa.me/c/919491581580
3C — Services Page · Customised Jerseys Section:
Below the "GET A JERSEY QUOTE" and "CUSTOMISE YOUR JERSEY" buttons — add small text link: "Or browse jersey styles on WhatsApp Catalogue →" in red, underlined, links to catalogue URL.
3D — Footer:
In the contact column of the footer — add WhatsApp Catalogue as a standalone link row: WhatsApp icon in green + "Browse Full Catalogue" in white — links to https://wa.me/c/919491581580
3E — Floating WhatsApp Button (all pages):
Already designed as sticky bottom-right. Update it so single tap opens WhatsApp chat. Add a second floating button just above it — red background, white shopping bag icon — tooltip: "View Catalogue" — links to https://wa.me/c/919491581580

PART 4 — ANIMATIONS & SMOOTH SCROLLING (Whole Project)
implement these in React using Framer Motion + CSS.

Global Settings:

scroll-behavior: smooth on html element
Custom scrollbar: thin 4px, red thumb #C8102E, white track
Page transition: each route fades in over 400ms on load — opacity 0 → 1


Navbar:

On page load: slides down from top — translateY(-100%) → translateY(0) over 500ms ease-out
On scroll past 50px: background transitions smoothly to rgba(14,14,14,0.98) over 300ms
Nav links: on hover, red underline slides in from left — CSS ::after pseudo-element width 0 → 100% over 200ms


Hero Section:

Eyebrow tag: fades in first — delay 200ms
Main headline: each line slides up from translateY(40px) with opacity — staggered 150ms between lines
Subtext paragraph: fades in — delay 600ms
CTA buttons: slide up together — delay 800ms
Background image: subtle Ken Burns effect — scale(1.0) → scale(1.05) over 8 seconds, loops
Floating stats bottom-right: count up animation when scrolled into view — numbers increment from 0 to final value over 1.5s


Scroll Reveal — All Sections:
Use Intersection Observer. Trigger when element is 12% in viewport. Default animation: opacity: 0, translateY: 28px → opacity: 1, translateY: 0 over 600ms ease-out.
Stagger rules:

Section tags (red eyebrow labels): trigger first, no delay
Section headings: 100ms delay after tag
Body paragraphs: 200ms delay
Card grids: each card staggers 80ms after the previous — left to right, top to bottom
CTA buttons: last to animate in each section, 300ms delay after body text


Service Cards (Services Page):

On hover: translateY(-4px) + red left border slides in from top to bottom over 300ms + subtle box-shadow appears
Icon: on card hover, icon scales 1.0 → 1.15 over 200ms


Red Marquee Strip:

Infinite horizontal scroll animation — content duplicated and scrolls left continuously at 40px/s
On hover: pauses the scroll


Jersey Configurator Modal:

Open: backdrop fades in opacity 0 → 1 over 300ms, modal slides up translateY(30px) → 0 + fades in simultaneously
Close: reverses — modal slides down + fades, backdrop fades out
Live preview jersey: colour changes animate with CSS transition: background 400ms ease
Each configurator section: slides in from right translateX(20px) → 0 as user scrolls down the panel


CricHeroes Match Widget:

On scroll into view: card slides up from translateY(40px) with fade
Match result rows: stagger in one by one — 100ms between each row
"WON" badge: pulses once with a subtle scale(1 → 1.08 → 1) on entry


Contact Form:

Input fields: on focus, red border animates in over 150ms + label slides up and shrinks (floating label pattern)
Submit button: on hover translateY(-2px) + background darkens. On click: brief scale(0.97) press effect
On successful submission: form fades out, success message fades in with a red checkmark scaling up scale(0) → 1 with spring easing


FAQ Accordion:

Open: answer panel expands with max-height animation over 350ms ease — no layout jump
"+" icon rotates 0deg → 45deg on open over 250ms
Border-top transitions to red over 200ms on open


Social Media Cards:

On hover: translateY(-6px) + icon scales up 1.0 → 1.2 over 200ms
Card border-top: always red, but on hover thickens 3px → 5px over 200ms


Footer:

Animate in as one block when scrolled into view — opacity 0 → 1 + translateY(20px) → 0 over 500ms
Social icon links: on hover, scale 1.0 → 1.15 + colour shifts to red over 150ms


Floating Buttons (WhatsApp + Catalogue):

Enter animation: slide in from right translateX(80px) → 0 after 2 seconds on page load
Hover: scale 1.0 → 1.08 + subtle shadow appears
Pulse ring animation: every 4 seconds, a red ring expands outward from the WhatsApp button and fades — signals clickability


Performance Rules:

All animations use transform and opacity only — never animate width, height, margin, or top/left — keeps 60fps
will-change: transform on cards and modal
prefers-reduced-motion media query — all animations disabled for users who have it enabled in OS settings
Lazy load all images below the fold with fade-in on load