# Aleph Sports

The Aleph Sports landing page for [alephsports.in](https://alephsports.in), built for a modern sportswear brand. It presents the brand, services, club cricket offering, and a configurable custom-jersey enquiry flow in a responsive single-page experience.

## Features

- Responsive landing page with animated sections and navigation
- Services overview for custom sportswear and team kits
- Club cricket-focused product and service content
- Interactive jersey configurator with live front/back preview
- Customisation controls for colours, collar, sleeves, print type, team details, quantity, and extras
- Contact and quote-enquiry flows

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Motion for animations
- React Router
- Radix UI and Material UI components
- Lucide React icons

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

The compiled site is written to `dist/`.

## Project structure

```text
src/
├── app/
│   ├── App.tsx                 # Application shell and page routing
│   └── components/             # Landing-page sections and shared UI
├── imports/                    # Imported design content
├── styles/                     # Global styles, theme, and fonts
└── main.tsx                    # React entry point
```

The main page content is composed from the components in `src/app/components`. The jersey configurator is self-contained and sends its selected design summary to the enquiry flow.

## Development notes

- Use `npm run dev` for local iteration.
- Run `npm run build` before submitting changes to catch TypeScript and bundling errors.
- Keep reusable primitives in `src/app/components/ui` and page-specific sections in `src/app/components`.

## License and attribution

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for asset and third-party attribution details.
