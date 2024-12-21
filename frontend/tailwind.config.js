/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                barlow: ["Barlow Condensed", "serif"],
                agdasima: ["Agdasima", "serif"],
            },
            colors: {
                "persian-blue": "#1a36c0",
            },
        },
    },
    plugins: [],
};
