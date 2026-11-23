// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// Facts come from the owner's Privacy Policy and Terms of Use (dated 2026-11-23)
// and from the app's Figma file. The App Store lookup returned no listing yet.

export const site = {
  brand: "Onn TV Remote",
  email: "kees@prins.mom",
  year: new Date().getFullYear(),
  operator: "Kees Prins",
  // wording follows section 6 of the owner's Terms of Use
  disclaimer: "The onn. name and associated brand elements are trademarks associated with Walmart Apollo, LLC, used under a separate license. Walmart does not operate, support or take responsibility for this app.",
};

export const app = {
  id: "6832104320",
  url: "https://apps.apple.com/app/id6832104320",
};

export const nav = [
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

export const steps = [
  { n: "1", title: "Get the app", text: "Download it from the App Store." },
  { n: "2", title: "Join the same Wi‑Fi", text: "Your iPhone and TV need to be on the same network." },
  { n: "3", title: "Connect to device", text: "Choose your TV on the Connect to device screen and start controlling." },
];

export const features = [
  { tag: "Controls", title: "The full remote", text: "Power, navigation, Back, Home, volume, mute and channels, all on one screen." },
  { tag: "T‑Pad", title: "Swipe through menus", text: "Switch to the touchpad and move through TV menus with a swipe." },
  { tag: "Keyboard", title: "Type on the TV", text: "A text-input screen lets you enter text on your TV from your iPhone." },
  { tag: "Voice search", title: "Search by voice", text: "Press the microphone to search on your TV. Speech is handled by the TV and its manufacturer." },
  { tag: "Cast", title: "Where it's offered", text: "Photos, videos, files and screen mirroring are available only where the app offers them and your TV supports them." },
];

export const appFeatures = features;

export const specs: [string, string][] = [
  ["Works with", "Compatible TVs on your Wi‑Fi network"],
  ["Connection", "Wi‑Fi — iPhone and TV on the same network"],
  ["Permissions", "Local Network; Microphone for voice search"],
  ["Purchases", "Auto-renewing subscriptions through the App Store"],
  ["Platform", "iPhone"],
];

export const faq = [
  { q: "How do I connect to my TV?", a: "Make sure your iPhone and TV are on the same Wi‑Fi network. Open the app and choose your TV on the Connect to device screen." },
  { q: "My TV doesn't show up", a: "Check that the TV is on, that it and your iPhone are on the same network, and that the app has Local Network access in your iPhone settings. Without that access, remote control may not work." },
  { q: "Does voice search send my voice to you?", a: "Voice search is handled by the TV or its manufacturer, which may process it under its own policies. We run no speech-recognition server and keep no server archive of microphone recordings." },
  { q: "Can I cast photos or videos?", a: "Where the app offers casting, the photos, videos or files you pick can be sent to the TV. The developer does not store them on a server of its own." },
  { q: "How do I cancel my subscription?", a: "Subscriptions are billed to your Apple Account. Cancel them in your iPhone's Settings → your name → Subscriptions. Deleting the app does not cancel an active subscription." },
  { q: "My purchase doesn't unlock the features", a: "Access follows your Apple Account. If it still doesn't update, email us. For billing and refund requests, contact Apple." },
  { q: "Will every TV work?", a: "Not guaranteed. Compatibility depends on the TV model, firmware and network setup, so some features may be missing on some devices." },
];
