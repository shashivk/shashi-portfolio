module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "Poppins", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      colors: {
        // Legacy support
        "light-content": "#A7A7A7",
        "dark-heading": "#0f0f23",
        "dark-content": "#64748b",
        "light-heading": "#e2e8f0",
        "dark-mode": "#0b0b1a",
        "dark-card": "#1a1a2e",
        "green-text": "#10b981",
        "greenbg": "#d1fae5",
        // New design tokens
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          purple: "#7c3aed",
          pink: "#ec4899",
          cyan: "#06b6d4",
          emerald: "#10b981",
        },
        dark: {
          bg: "#060612",
          surface: "#0e0e24",
          card: "#141428",
          border: "#1e1e3f",
          muted: "#252545",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.7s ease-out forwards",
        "slide-in-right": "slideInRight 0.7s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
        "typewriter": "typewriter 3s steps(40) 1s forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-blue": "0 0 30px rgba(59, 130, 246, 0.3)",
        "glow-purple": "0 0 30px rgba(124, 58, 237, 0.3)",
        "glow-pink": "0 0 30px rgba(236, 72, 153, 0.3)",
        "card": "0 8px 32px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.6)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.1)",
      },
    },
  },
  plugins: [],
};
