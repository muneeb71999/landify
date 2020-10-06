module.exports = {
  purge: {
    enabled: true,
    content: ["./**.html"],
  },
  theme: {
    borderRadius: {
      sm: "0.125rem",
      default: "0.25rem",
      default: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      xl: "13.25px",
    },
    extend: {
      colors: {
        "orange-400": "#FF9900",
      },
    },
  },
};
