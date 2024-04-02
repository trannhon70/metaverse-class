const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        "3xl": "1800px",
      },
    },
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        itim: ["Itim", "cursive"],
      },
      screens: {
        "3xl": "1600px",
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // borderRadius: {
      // 	lg: "var(--radius)",
      // 	md: "calc(var(--radius) - 2px)",
      // 	sm: "calc(var(--radius) - 4px)",
      // },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        characterAnimation: {
          "0%, 100%": { backgroundPositionX: "3px" },
          "30%": { backgroundPositionX: "-23px" },
          "60%": { backgroundPositionX: "-43px" },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        moveLeft: {
          "0%": {
            transform: "translateX(-400px) translateY(-180px) scale(0.5)",
            opacity: 0.5,
          },
          "100%": {
            transform: "translateX(0) translateY(0) scale(1)",
            opacity: 1,
          },
        },
        moveLeft1: {
          "0%": {
            transform: "translateX(-500px) translateY(300px) scale(1.8)",
            // opacity: 0,
          },
          "100%": {
            transform: "translateX(0) translateY(0) scale(1)",
            // opacity: 1,
          },
        },
        moveRight: {
          "0%": {
            transform: "translateX(400px) translateY(-180px) scale(0.5)",
            opacity: 0.5,
          },
          "100%": {
            transform: "translateX(0) translateY(0) scale(1)",
            opacity: 1,
          },
        },
        moveRight1: {
          "0%": {
            transform: "translateX(500px) translateY(300px) scale(1.8)",
            // opacity: 0,
          },
          "100%": {
            transform: "translateX(0) translateY(0) scale(1)",
            // opacity: 1,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        character: "characterAnimation 3s linear infinite",
        "move-left": "moveLeft 0.8s linear",
        "move-left-1": "moveLeft1 0.8s linear",
        "move-right": "moveRight 0.8s linear",
        "move-right-1": "moveRight1 0.8s linear",
        "fade-in": "fadeIn 0.8s linear",
      },
    },
  },
  plugins: ["tailwind-scrollbar-hide"],
};

export default config;
