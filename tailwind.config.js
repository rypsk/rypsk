/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        rypsk: {
          primary: "#ff6a00",
          "primary-content": "#0a0a0a",
          secondary: "#ff9a3d",
          "secondary-content": "#0a0a0a",
          accent: "#ff6a00",
          "accent-content": "#0a0a0a",
          neutral: "#1a1a1a",
          "neutral-content": "#f5f5f5",
          "base-100": "#0a0a0a",
          "base-200": "#111111",
          "base-300": "#1c1c1c",
          "base-content": "#f5f5f5",
          info: "#ff9a3d",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
        },
      },
      {
        "rypsk-light": {
          primary: "#ff6a00",
          "primary-content": "#ffffff",
          secondary: "#e85d00",
          "secondary-content": "#ffffff",
          accent: "#ff6a00",
          "accent-content": "#ffffff",
          neutral: "#e5e5e5",
          "neutral-content": "#0a0a0a",
          "base-100": "#ffffff",
          "base-200": "#f5f5f5",
          "base-300": "#e9e9e9",
          "base-content": "#0a0a0a",
          info: "#ff9a3d",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
        },
      },
    ],
  },
}
