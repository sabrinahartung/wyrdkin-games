/**
 * Single source of truth for all site copy & data.
 * Swap placeholders for real content here — components read from this file.
 */

export const studio = {
  name: "LAST STOP",
  nameLine2: "GAMES",
  tagline: "An indie game studio building worlds in our spare time.",
  // Placeholder until real copy exists.
  blurb:
    "We're a small crew making the kind of games we wish existed. Pixel-perfect worlds, weird ideas, no publishers telling us no. [placeholder copy]",
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
  "NOW IN DEVELOPMENT",
  "★",
  "WISHLIST ON STEAM SOON",
  "★",
  "JOIN OUR DISCORD",
  "★",
  "DEVLOG #01 IS LIVE",
  "★",
  "MADE IN OUR SPARE TIME",
  "★",
];

export const studioStats = [
  { label: "Games in dev", value: "03" },
  { label: "Team members", value: "07" },
  { label: "Caffeinated beveragess / day", value: "∞" },
];

// "Our Games" grid. Set `image` to a cover-art URL to fill the card; leave it
// empty ("") to show the flat color placeholder instead.
export const games = [
  { id: "g1", title: "Whiskers in the Sand", status: "In Development", color: "#ff5fa2", image: "/games/wits.jpg" },
  { id: "g2", title: "Shape Smasher", status: "Prototype", color: "#5fe0ff", image: "" },
  { id: "g3", title: "Terranaut", status: "Concept", color: "#ffd45f", image: "" },
  // { id: "g4", title: "Game 04", status: "Concept", color: "#a07cff", image: "" },
  // { id: "g5", title: "Game 05", status: "Concept", color: "#7cff9e", image: "" },
  // { id: "g6", title: "Game 06", status: "Concept", color: "#ff9e5f", image: "" },
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
export const team = [
  { id: "t1", name: "Kilian", role: "Code", color: "#ff5fa2", blurb: "[ short blurb ]" },
  { id: "t2", name: "Matt", role: "Art", color: "#5fe0ff", blurb: "[ short blurb ]" },
  { id: "t3", name: "Mickey", role: "Social Media", color: "#7cffbb", blurb: "[ short blurb ]" },
  { id: "t4", name: "Sabrina", role: "Art", color: "#5fe0ff", blurb: "[ short blurb ]" },
  { id: "t5", name: "Satoshi", role: "Code", color: "#ff5fa2", blurb: "[ short blurb ]" },
  { id: "t6", name: "Dana", role: "Audio", color: "#a07cff", blurb: "[ short blurb ]" },
  { id: "t7", name: "Joao", role: "Code", color: "#ff5fa2", blurb: "[ short blurb ]" },
];

// Devlog feed (replaces the "Latest Transactions" table)
export const devlog = [
  { id: "d1", tag: "DEVLOG", title: "Setting up the studio", date: "3 days ago", author: "Member 01" },
  { id: "d2", tag: "ART", title: "First character sprites", date: "1 week ago", author: "Member 02" },
  { id: "d3", tag: "DESIGN", title: "Combat loop notes", date: "2 weeks ago", author: "Member 03" },
  { id: "d4", tag: "AUDIO", title: "Main theme demo", date: "3 weeks ago", author: "Member 04" },
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
