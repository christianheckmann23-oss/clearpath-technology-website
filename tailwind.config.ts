import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  corePlugins: {
    // The site's existing hand-written CSS (globals.css) already defines
    // resets and a `.container` class — disable Tailwind's versions so they
    // don't collide with it.
    preflight: false,
    container: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
