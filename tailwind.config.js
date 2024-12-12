import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#800000",
                    "primary-focus": "#660000",
                    "primary-content": "#ffffff",
                    secondary: "#f0f0f0",
                    "secondary-focus": "#e0e0e0",
                    "secondary-content": "#000000",
                    accent: "#37cdbe",
                    "accent-focus": "#2aa79b",
                    "accent-content": "#ffffff",
                    neutral: "#3d4451",
                    "neutral-focus": "#2a2e37",
                    "neutral-content": "#ffffff",
                    "base-100": "#ffffff",
                    "base-200": "#f9fafb",
                    "base-300": "#d1d5db",
                    "base-content": "#1f2937",
                },
            },
        ],
        darkTheme: "light",
    },
};
