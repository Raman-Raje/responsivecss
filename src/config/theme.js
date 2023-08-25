import { css } from "styled-components";

// define the theme
const baseTheme = {
  // Breakpoints
  breakpoints: {
    xs: 0, // Extra small screen size (mobile)
    sm: 600, // Small screen size (tablet)
    md: 960, // Medium screen size (laptop)
    lg: 1280, // Large screen size (desktop)
    xl: 1920, // Extra large screen size (large desktop)
  },

  // Media queries
  mediaQueries: {
    xs: "@media (min-width: 0px)",
    sm: "@media (min-width: 600px)",
    md: "@media (min-width: 960px)",
    lg: "@media (min-width: 1280px)",
    xl: "@media (min-width: 1920px)",
  },

  spacing: {
    xxxs: "0.0625rem", // 1px
    xxs: "0.125rem", // 2px
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    xxl: "4rem", // 64px
  },

  // Typography
  typography: {
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      xxl: "1.5rem", // 24px
      xxxl: "2rem", // 32px
      xxxxl: "2.5rem", // 40px
      xxxxxl: "3rem", // 48px
      xxxxxxl: "3.5rem", // 56px
      xxxxxxxl: "4rem", // 64px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },

  // heights
  heights: {
    navbar: "8vh",
    smallNav: "4vh",
    footer: "15vh",
    fullScreen: "100vh",
    full: "100%",
  },

  // widths
  widths: {
    full: "100%",
  },
};

// light theme
const lightTheme = {
  ...baseTheme,

  // Colors
  colors: {
    primary: "#3795BD",
    secondary: "#F50057",
    error: "#F44336",
    warning: "#FF9800",
    info: "#2196F3",
    success: "#4CAF50",
    transparent: "transparent",
    white: "#FFFFFF",
    pureLogo: "#7594C1",
    logo: "#5DB5A7",
    darkLogo: "#209e8a",

    text: {
      primary: "#212121",
      secondary: "#757575",
      disabled: "#9E9E9E",
      hint: "#BDBDBD",
      white: "#FFFFFF",
      logo: "#5DB5A7",
      darkLogo: "#209e8a",
      pureLogo: "#7594C1",
    },
    appoitment: {
      completed: "#CCEEBC",
      rescheduled: "#F8FDCF",
      cancelled: "#FAD4D5",
    },
    background: {
      default: "#f5f5f5",
      paper: "#FFFFFF",
    },
    divider: "#BDBDBD",
  },
  themeName: "light",
};

// dark theme
const darkTheme = {
  ...baseTheme,

  // Colors
  colors: {
    primary: "#3795BD",
    secondary: "#F50057",
    error: "#F44336",
    warning: "#FF9800",
    info: "#2196F3",
    success: "#4CAF50",
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
      disabled: "#9E9E9E",
      hint: "#757575",
      white: "#FFFFFF",
    },
    appoitment: {
      completed: "#CCEEBC",
      rescheduled: "#F8FDCF",
      cancelled: "#FAD4D5",
    },
    background: {
      default: "#212121",
      paper: "#424242",
    },
    divider: "#757575",
  },
  themeName: "dark",
};

export { lightTheme, darkTheme };
