// src/theme.ts
export type ThemeName = "light" | "dark";
export interface Theme {
  background: string;
  iconColor:string;
  surface: string;
  text: string;
  textMuted:string;
  muted: string;
  accent: string;
  sidebarBg: string;
  activeBackground:string;
  buttonBackground:string;
  buttonText:string,
  activeText: string,
  activeIcon: string
}

export const lightTheme: Theme = {
  background: "#FFFFFF",
  iconColor:"#4F4545",
  surface: "#ffffff",
  text: "#0b2545",
  textMuted:"red",
  muted: "#6b7280",
  accent: "#2f95dc",
  sidebarBg: "#071033",
  activeBackground:'#311E9C',
  buttonBackground:'#311E9C',
  buttonText:"#FFFFFF",
  activeText: "#2f95dc", // ✅ active text color (light blue)
  activeIcon: "#2f95dc", // ✅ active icon color
};

export const darkTheme: Theme = {
  background: "#282875",
  iconColor:"#FAFAFA",
  surface: "#0f1724",
  text: "#e6eef8",
  textMuted:"red",
  muted: "#9aa6bd",
  accent: "#2f95dc",
  sidebarBg: "#04102a",
  activeBackground:'#FCFCFC',
  buttonBackground:'#FCFCFC',
  buttonText:"#333131",
  activeText: "#4da3ff", // ✅ active text color (bright blue)
  activeIcon: "#4da3ff", // ✅ active icon color
};


