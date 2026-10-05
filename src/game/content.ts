/**
 * Single source of truth for the Whiskers In The Sand subpage.
 * Everything that page shows lives here — edit copy, swap assets, and add
 * items/characters without touching component code.
 *
 * Studio-wide data (name, socials, base paths) stays in `src/content.ts`.
 */

// Base-path-aware asset helper + the studio's own links, shared with the
// homepage so both stay correct under the GitHub Pages base.
export { asset, homeUrl, studio } from "../content";

// ── Steam ─────────────────────────────────────────────────────────────
export const STEAM_APP_ID = "4567940";
export const STEAM_URL =
  "https://store.steampowered.com/app/4567940/Whiskers_In_The_Sand_Demo/";
// Official Steam store widget (shows the Wishlist / Download Demo buttons).
export const STEAM_WIDGET_URL = `https://store.steampowered.com/widget/${STEAM_APP_ID}/`;

// ── Game meta ─────────────────────────────────────────────────────────
export const game = {
  title: "WHISKERS",
  titleLine2: "IN THE SAND",
  // One-line hook shown in the hero.
  hook: "A survivors-like roguelite where cats shoot their way through an undead Egyptian desert.",
  // Longer pitch for the "What is it" section. Each entry renders as its own
  // paragraph — split or add entries to control the line breaks.
  pitch: [
    "Pick a cat. Grab a gun. Collect souls.",
    "Survive wave after wave of mummies, scarabs, and desert horrors then raid the shop between rounds to stack items, combine weapons, and forge builds.", 
    "Spend scarab coins on permanent blessings from the old gods, and end the pharaoh's second reign.",
  ],
  status: "DEMO OUT NOW",
  releaseLine: "Full release coming 2026",
};

// ── Scrolling marquee (top of page) ──────────────────────────────────
export const tickerItems = [
  "DEMO OUT NOW ON STEAM",
  "◈",
  "WISHLIST TO SUPPORT THE PHARAOH'S DOWNFALL",
  "◈",
  "9 LANGUAGES",
  "◈",
  "STEAM LEADERBOARDS",
  "◈",
  "CATS. GUNS. MUMMIES.",
  "◈",
];

// ── Feature pillars (icons are real game sprites in /public/features) ──
export const features = [
  {
    icon: "features/waves.png",
    title: "Survive the Waves",
    body: "Wave-based arena combat that never lets up. Bosses crash in every five rounds — a giant beetle, a sphinx, a very angry tortoise.",
  },
  {
    icon: "features/builds.png",
    title: "Forge Absurd Builds",
    body: "Stack passive relics, combine weapons at the workbench, and chase synergies until your run is beautifully, unfairly overpowered.",
  },
  {
    icon: "features/shop.png",
    title: "Shop Between Rounds",
    body: "Buy, reroll, lock, and upgrade in the shop each wave. Every choice pushes your build stronger — or riskier.",
  },
  {
    icon: "features/blessing.png",
    title: "Earn Divine Blessings",
    body: "Spend the souls you collect on permanent upgrades from the old gods — Bastet, Anubis, Khepri and more — carried across every run.",
  },
];

// ── Item showcase (real icons + real in-game flavor text) ────────────
// Rarities mirror the game's ladder (see rarityColor in ItemShowcase.tsx):
// Common · Uncommon · Rare · Mythical · Legendary · Cursed. Ordered low→high
// so the grid sweeps up through the tiers.
export const items = [
  {
    name: "Bracers",
    icon: "items/bracers.png",
    flavor: "Your wrists deserve some love too.",
    rarity: "Common",
  },
  {
    name: "Monocle",
    icon: "items/monocle.png",
    flavor: "For when you want to see danger coming — and look classy doing it.",
    rarity: "Common",
  },
  {
    name: "Honeycomb",
    icon: "items/honeycomb.png",
    flavor: "Sticky, sweet, and slightly bee-flavored.",
    rarity: "Uncommon",
  },
  {
    name: "Ace of Spades",
    icon: "items/ace_of_spades.png",
    flavor: "It's not gambling if you never fold.",
    rarity: "Rare",
  },
  {
    name: "Workbench",
    icon: "items/workbench.png",
    flavor: "Skill issue? Nah — tool issue.",
    rarity: "Mythical",
  },
  {
    name: "Trusty Shovel",
    icon: "items/trusty_shovel.png",
    flavor: "Purrs while it digs. We don't know how. We're afraid to ask.",
    rarity: "Mythical",
  },
  {
    name: "Staff of Horus",
    icon: "items/staff_of_horus.png",
    flavor: "The staff sees, the staff strikes.",
    rarity: "Legendary",
  },
  {
    name: "Curse of the Pharaoh",
    icon: "items/curse_of_the_pharaoh.png",
    flavor: "Unwrap power, unleash problems.",
    rarity: "Cursed",
  },
];

// ── Playable cats ─────────────────────────────────────────────────────
// `demo: true` = playable in the current Steam demo.
export const characters = [
  {
    name: "Jonesy",
    portrait: "portraits/jonesy.png",
    blurb: "The gunslinger. Rolls in with a cowboy hat and a trusty PP7.",
    demo: true,
  },
  {
    name: "A.T.R.I.U.M-3",
    portrait: "portraits/atrium.png",
    blurb: "The machine. Laser arm, missile arm — built different.",
    demo: true,
  },
  {
    name: "Snarl",
    portrait: "portraits/snarl.png",
    blurb: "The bruiser. Bare fists, forged fighting mummies.",
    demo: true,
  },
  {
    name: "Chunky",
    portrait: "portraits/chunky.png",
    blurb: "The foodie. Waddles into battle loaded with snacks.",
    demo: false,
  },
  {
    name: "Clover",
    portrait: "portraits/clover.png",
    blurb: "The lucky one. Fifty luck straight out the gate.",
    demo: false,
  },
  {
    name: "Gaspar",
    portrait: "portraits/gaspar.png",
    blurb: "The dandy. Fancy perfume and a fine carton of milk.",
    demo: false,
  },
  {
    name: "Julie",
    portrait: "portraits/julie.png",
    blurb: "The charmer. A beautiful collar and plenty of attitude.",
    demo: false,
  },
  {
    name: "Lulu",
    portrait: "portraits/lulu.png",
    blurb: "The demolitionist. Land mines, a teddy bear, a mortar tube.",
    demo: false,
  },
];

// ── Screenshot gallery (downloaded from the Steam store page) ─────────
export const screenshots = [
  "screens/screen1.jpg",
  "screens/screen2.jpg",
  "screens/screen3.jpg",
  "screens/screen4.jpg",
  "screens/screen5.jpg",
];

// ── Trailer ───────────────────────────────────────────────────────────
// Steam serves the trailer as an HLS stream (no plain MP4). It plays inline
// via hls.js (Safari plays HLS natively). If Steam ever re-encodes the
// trailer this URL's hash changes — grab a fresh one from the store page's
// appdetails API. `href` is the fallback if playback isn't supported.
export const trailer = {
  poster: "art/trailer_poster.jpg",
  hls: "https://video.akamai.steamstatic.com/store_trailers/4567940/684184606/a8b44607e815baf0fc99f48227cf0376145efe71/1775348656/hls_264_master.m3u8?t=1780528835",
  href: STEAM_URL,
};

// ── Socials / footer ─────────────────────────────────────────────────
export const socials = [
  { label: "Steam", href: STEAM_URL },
  { label: "Discord", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "X", href: "#" },
];

export const credit = {
  line: "Made with ❤️",
};
