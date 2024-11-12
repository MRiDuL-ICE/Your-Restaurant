/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(189, 31, 23, 1) 0%, rgba(189, 31, 23, 0.7) 70%)',
      },
    },
  },
  plugins: [require("daisyui"),
  ],
};
