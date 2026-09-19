/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6EE",
        cream: "#F8F1E5",
        beige: "#E9DFD0",
        sand: "#DCCDB6",
        cocoa: "#55432F",
        mutedBrown: "#7D6852",
        sage: "#9CA88B",
        gold: "#C8A66B",
        softGold: "#E4CE9D",
        powder: "#DCE7F2",
        powderDeep: "#C7D6E8",
        rose: "#C98A8A",
      },
      fontFamily: {
        serifDisplay: ['"Cormorant Garamond"', "Georgia", "serif"],
        hand: ["Caveat", "cursive"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        paper: "0 20px 50px rgba(70, 52, 34, 0.12)",
        soft: "0 12px 30px rgba(70, 52, 34, 0.10)",
        glow: "0 0 32px rgba(200, 166, 107, 0.18)",
      },
      letterSpacing: {
        widest2: "0.24em",
      },
      backgroundImage: {
        "paper-glow":
          "radial-gradient(circle at 15% 18%, rgba(255,255,255,0.78) 0, rgba(255,255,255,0) 34%), radial-gradient(circle at 82% 22%, rgba(255,255,255,0.42) 0, rgba(255,255,255,0) 26%), linear-gradient(135deg, #FBF7EF 0%, #F6EEDF 52%, #F1E6D2 100%)",
      },
      animation: {
        glowPulse: "glowPulse 7s ease-in-out infinite",
        floatSoft: "floatSoft 9s ease-in-out infinite",
        beat: "beat 1.7s ease-in-out infinite",
        flicker: "flicker 1.1s ease-in-out infinite",
        popIn: "popIn 420ms cubic-bezier(0.22,0.61,0.36,1) both",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.88", transform: "scale(1.03)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-7px)" },
        },
        beat: {
          "0%, 100%": { transform: "scale(1)" },
          "12%": { transform: "scale(1.12)" },
          "24%": { transform: "scale(1)" },
          "36%": { transform: "scale(1.07)" },
          "48%": { transform: "scale(1)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1", transform: "scaleY(1)" },
          "50%": { opacity: "0.8", transform: "scaleY(0.93)" },
        },
        popIn: {
          "0%": { transform: "scale(0.6)", opacity: "0" },
          "70%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
