import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors :{
      'paper-white' : '',
      'paper-black' :'#222222' ,
      '' : '',
      'success' :'', 
      'warning' : '',
      'error' : '', 

     }
    },
  },
  plugins: [],
};
export default config;
