/**
 * Single source of truth for all site copy & data.
 * Swap placeholders for real content here — components read from this file.
 */

export const studio = {
  name: "Wyrdkin",
  nameLine2: "Games",
  tagline: "We're an indie game studio building worlds in our spare time.",
  // Placeholder until real copy exists.
  blurb:
    "We're a small crew making the kind of games we wish existed. Pixel-perfect worlds, weird ideas, no publishers telling us no.",
};

export const nav = [
  { label: "Games", href: "#games" },
  { label: "Studio", href: "#studio" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
  { label: "Devlog", href: "#devlog" },
];

// Scrolling marquee items (top of page)
export const tickerItems = [
  "WISHLIST ON STEAM SOON",
  "★",
  "JOIN OUR DISCORD",
  "★",
  "DEVLOG #01 IS LIVE",
  "★",
];

export const studioStats = [
  { label: "Games in dev", value: "01" },
  { label: "Team members", value: "06" },
  { label: "Caffeinated beveragess / day", value: "∞" },
];

// Build a URL for a file in /public that stays correct under the deploy's base
// path (`/wyrdkin-games/` on GitHub Pages, `/` in dev / on a custom domain).
// Use it for local asset paths; full "https://…" URLs can be passed as-is.
export const asset = (path: string) => import.meta.env.BASE_URL + path;

// "Our Games" grid. Set `image` to a cover-art URL to fill the card; leave it
// empty ("") to show the flat color placeholder instead.
export const games = [
  { id: "g2", title: "Whiskers in the Sand", status: "Demo", color: "#79d4cf", image: "" },
  // { id: "g3", title: "X", status: "Concept", color: "#ffd45f", image: "" },
  // { id: "g4", title: "Game 04", status: "Concept", color: "#9dc5c8", image: "" },
  // { id: "g5", title: "Game 05", status: "Concept", color: "#c7dcdd", image: "" },
  // { id: "g6", title: "Game 06", status: "Concept", color: "#86adaf", image: "" },
];

// Roadmap milestones
export const roadmap = [
  { quarter: "Q1", title: "Studio Launch", done: true },
  { quarter: "Q2", title: "First Playable", done: true },
  { quarter: "Q3", title: "Vertical Slice", done: false },
  { quarter: "Q4", title: "Early Access", done: false },
];

// Team — pixel avatars are color placeholders for now.
// `blurb` is a short one-liner shown in the crew carousel — swap in real ones.
// Tints stay inside the brand family (light teals + the one warm gold), and
// each member gets a distinct one so the carousel reads as a change.
export const team = [
  { id: "t1", name: "Kilian", role: "Dev", color: "#79d4cf", blurb: "" },
  { id: "t2", name: "Matt", role: "Art", color: "#9dc5c8", blurb: "" },
  { id: "t3", name: "Sabrina", role: "Art & Dev", color: "#c7dcdd", blurb: "" },
  { id: "t4", name: "Satoshi", role: "Art & Dev", color: "#c7dcdd", blurb: "" },
  { id: "t5", name: "Joao", role: "Dev", color: "#c7dcdd", blurb: "" },
  { id: "t6", name: "Lucia", role: "Social Media", color: "#c7dcdd", blurb: "" },
];

// Devlog feed (replaces the "Latest Transactions" table)
export const devlog = [
  { id: "d1", tag: "DEVLOG", title: "Demo Version X is out", date: "3 days ago", author: "Member 01" },
  // { id: "d2", tag: "ART", title: "First character sprites", date: "1 week ago", author: "Member 02" },
  // { id: "d3", tag: "DESIGN", title: "Combat loop notes", date: "2 weeks ago", author: "Member 03" },
  // { id: "d4", tag: "AUDIO", title: "Main theme demo", date: "3 weeks ago", author: "Member 04" },
];

export const socials = [
  { label: "Discord", href: "#" },
  { label: "Steam", href: "#" },
  { label: "Bluesky", href: "#" },
  { label: "YouTube", href: "#" },
];

// Playful footer sign-off — one is picked at random on each page load.
export const signoffs = [
  "So long, and thanks for all the fish",
  "The cake was not a lie",
  "It's dangerous to go alone - take this",
  "Stay awhile and listen",
  "Would you kindly stick around?",
  "You must construct additional pylons",
  "Now you're playing with power",
  "Insert coin to continue",
  "Praise the sun \\[T]/",
  "May your framerate be high",
  "The stars are right",
];

// Footer credit line — swap in your own handle.
export const credit = "Website created with ❤️ by Sabrina";
