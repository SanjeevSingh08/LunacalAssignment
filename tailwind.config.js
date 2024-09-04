/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "768px",
      // => @media (min-width: 640px) { ... }

      lg: "1160px",
    },
    boxShadow: {
      cs: "10px 10px 40px 10px #00000080",
      "custom-inset": "inset 0px 4.96px 12.4px 2.48px rgba(0, 0, 0, 0.4)",
      cs2: "5.67px 5.67px 3.78px 0px #00000066",
      "custom-1": "13.49px 16.87px 67.47px 8.43px #0A0A0A",
      "custom-2": "-8.43px -16.87px 50.6px -16.87px #485B71",

      "gallery-s": "0px 4px 10px 2px rgba(0, 0, 0, 0.25) inset",
      "3d-button":
        "0px 3.26px 3.26px 0px rgba(255, 255, 255, 0.15) inset, 0px 0px 48.91px 0px rgba(255, 255, 255, 0.05) inset, 9px 10px 7.1px 0px rgba(0, 0, 0, 0.4), -0.5px -0.5px 6.9px 0px rgba(255, 255, 255, 0.25)",
      "arrow-shadow":
        "0 0 20px rgba(150, 190, 231, 0.5), 0 0 15px rgba(0, 0, 0, 0.5)",
      "arrow-shadow2": "-5px -3px 30px -10px #96BEE7",
    },
    backgroundImage: {
      cg: "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)",
      arrow: "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
      arrowhover:
        "linear-gradient(to bottom right, #96BEE7 0%, #96BEE7 50%, #000000 100%);",
    },
  },
  plugins: [],
};
