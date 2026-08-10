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
  { label: "The Game", href: "#game" },
  { label: "Studio", href: "#studio" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
  { label: "Devlog", href: "#devlog" },
];

// Scrolling marquee items (top of page)
export const tickerItems = [
  "WHISKERS IN THE SAND — DEMO OUT NOW ON STEAM",
  "★",
  "JOIN OUR DISCORD",
  "★",
  "CATS. GUNS. MUMMIES.",
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

// Page URLs. Both pages are real HTML entries (see vite.config.ts), so these
// are plain links — no client-side router involved.
export const homeUrl = import.meta.env.BASE_URL;
export const gamePageUrl = asset("whiskers-in-the-sand/");

/**
 * The flagship game — the centerpiece of the homepage.
 * Deep content (items, cats, screenshots, trailer) lives on its own subpage
 * in `src/game/content.ts`; this is only what the showcase band needs.
 */
export const flagship = {
  title: "Whiskers In The Sand",
  logo: "art/logo.png",
  // Status pill above the title.
  status: "Demo out now",
  hook: "A survivors-like roguelite where rescued cats shoot their way through an undead Egyptian desert.",
  blurb:
    "Pick a cat. Grab a gun. Survive wave after wave of mummies, scarabs and desert horrors — then raid the shop between rounds to stack relics, combine weapons and forge builds that break the game in your favor.",
  tags: ["Survivors-like", "Roguelite", "Bullet Heaven", "Cats", "Pixel Art"],
  releaseLine: "Full release coming 2026",
  steamUrl:
    "https://store.steampowered.com/app/4567940/Whiskers_In_The_Sand_Demo/",
  pageUrl: gamePageUrl,
  // Backdrop for the showcase band + the thumbnail strip below it.
  backdrop: "screens/screen1.jpg",
  shots: ["screens/screen2.jpg", "screens/screen3.jpg", "screens/screen4.jpg"],
  // Three quick facts shown as pixel stat tiles.
  facts: [
    { value: "8", label: "Playable cats" },
    { value: "200+", label: "Relics to find" },
    { value: "9", label: "Languages" },
  ],
};

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
  { id: "t3", name: "Sabrina", role: "Art & Dev", color: "#79d4cf", blurb: "" },
  { id: "t4", name: "Satoshi", role: "Art & Dev", color: "#c7dcdd", blurb: "" },
  { id: "t5", name: "Joao", role: "Dev", color: "#79d4cf", blurb: "" },
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
