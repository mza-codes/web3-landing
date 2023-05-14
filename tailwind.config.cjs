/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gradientColorStopPositions: {
                10: "10%",
                20: "20%",
                70: "70%",
            },
            colors: {
                app: "#65d6f4",
            },
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
            nominee: ["Nominee", "sans- serif"],
            redzone: ["Redzone", "sans- serif"],
        },
    },
    plugins: [
        {
            ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
        },
    ],
};
