/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            padding: {
                png: "20px 0px",
                padFooter: "10px 0",
                pad: "10px 30px",
                padD: "25px 20px 20px",
                paD: " 15px 50px",
                padLink: "10px 20px",
                padding: "5px 0",
                p: "20px 10px",
                paSelect: "0 20px",
            },
            colors: {
                color: "#53c60b",
                colorDimgrey: "#696969",
                colorFff: "#fff",
                colorLink: "#234a0b",
                colorSpan: "#808080",
                colorD: "#ed4133",
                colorA: "#48ac0a",
            },

            margin: {
                margin: "20px 0",
                marginT: "16px 0",
                marginG: "24px 0",
                marginP: "18px 0",
                marginR: "100px 0 200px",
                marginDetail: "22px 0",
                marginLoc: "20px 0 40px",
                marginInt: "60px 0",
                marginLi: "10px 0",
                marginDe: "0 10px",
                marg: "0 15px 0 5px",
                marginMax: "0 0 20px"
            },
        },
    },
    plugins: [],
};
