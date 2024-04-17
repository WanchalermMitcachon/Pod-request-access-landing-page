/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hostLogoMobile": "url('./src/assets/mobile/image-host.jpg')",
        "hostLogoTablet": "url('./src/assets/tablet/image-host.jpg')",
        "hostLogoDesktop": "url('./src/assets/desktop/image-host.jpg')",
      }
    },
    screens: {
      mobile:"360px",
      tablet: "640px",
      desktop: "1024px",
    },
  },
  plugins: [],
};
