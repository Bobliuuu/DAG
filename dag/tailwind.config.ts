import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {backgroundImage: {
      'upload': "url('/img/graphics/uploadbackground.png')", 
      'process': "url('/img/graphics/processbackground.png')",
      'landing': "url('/img/graphics/landingbackground.png')",
      'host': "url('/img/graphics/hostbackground.png')",
      'annotate': "url('/img/graphics/annotatebackground.png')",
    }},
  },
  plugins: [],
} satisfies Config;
