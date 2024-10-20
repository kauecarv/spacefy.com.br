import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			xs: '400px'
  		},
  		fontFamily: {
  	    poppins: ['var(--font-poppins)', 'sans-serif'], 
        dmsans: ['var(--font-dmsans)', 'sans-serif'], 
  		},
  		colors: {
  			spacefy: '#4F46E5',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  	
  		},
  	
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
