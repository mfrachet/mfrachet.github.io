var root = window.document.documentElement;

var DarkTheme = {
  primaryColor: "#fff",
  primaryColorLighter: "hsl(340deg, 82%, 42%)",
  secondaryColor: "hsl(340deg, 82%, 42%)",
  successColor: "#A5D6A7",
  textColor800: "hsl(0deg, 0%, 100%)",
  textColor700: "hsl(0deg, 0%, 90%)",
  bgColor: "hsl(231deg, 48%, 6%)",
  bgHover: "hsl(231deg, 48%, 12%)",
  bgActive: "hsl(231deg, 48%, 16%)",
  bgCode: "hsl(231deg, 48%, 6%)",
};

var LightTheme = {
  primaryColor: "hsl(231deg, 48%, 48%)",
  primaryColorLighter: "hsl(231deg, 48%, 96%)",
  secondaryColor: "hsl(340deg, 82%, 72%)",
  successColor: "#A5D6A7",
  textColor800: "hsl(0, 0%, 15%)",
  textColor700: "hsl(0, 0%, 25%)",
  bgColor: "#fff",
  bgHover: "hsl(0, 0%, 94%)",
  bgActive: "hsl(0, 0%, 84%)",
  bgCode: "hsl(231deg, 48%, 6%)",
};

function switchTheme(nextTheme) {
  var theme = nextTheme === "light" ? LightTheme : DarkTheme;

  root.style.setProperty("--primary-color", theme.primaryColor);
  root.style.setProperty("--primary-color-lighter", theme.primaryColorLighter);
  root.style.setProperty("--secondary-color", theme.secondaryColor);
  root.style.setProperty("--success-color", theme.successColor);
  root.style.setProperty("--text-color800", theme.textColor800);
  root.style.setProperty("--text-color700", theme.textColor700);
  root.style.setProperty("--bg-color", theme.bgColor);
  root.style.setProperty("--bg-hover", theme.bgHover);
  root.style.setProperty("--bg-active", theme.bgActive);
  root.style.setProperty("--bg-code", theme.bgCode);
}

function clickToSwitchTheme() {
  var currentTheme = window.localStorage.getItem("theme") || "dark";
  var nextTheme = currentTheme === "dark" ? "light" : "dark";

  window.localStorage.setItem("theme", nextTheme);
  switchTheme(nextTheme);
}

// Prevent theme verification from flashing
var actualTheme = window.localStorage.getItem("theme") || "dark";
switchTheme(actualTheme);
