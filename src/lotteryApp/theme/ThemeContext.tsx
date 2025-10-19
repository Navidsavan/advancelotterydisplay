import React, { createContext, useContext, useEffect, useState } from "react";
import { type ThemeName, lightTheme, darkTheme,type Theme } from "./theme";


interface ThemeContextType {
themeName: ThemeName;
theme: Theme;
toggleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ThemeProvider: React.FC<{ children: React.ReactNode; storageKey?: string }> = ({ children, storageKey = "appTheme" }) => {
const [themeName, setThemeName] = useState<ThemeName>(() => {
try {
const v = localStorage.getItem(storageKey) as ThemeName | null;
return v || "light";
} catch (e) {
return "light";
}
});


useEffect(() => {
try { localStorage.setItem(storageKey, themeName); } catch {}
}, [themeName, storageKey]);


useEffect(() => {
document.documentElement.setAttribute("data-theme", themeName);
}, [themeName]);


const toggleTheme = () => setThemeName((t) => (t === "light" ? "dark" : "light"));


const theme = themeName === "light" ? lightTheme : darkTheme;


return <ThemeContext.Provider value={{ themeName, theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};


export const useTheme = () => {
const ctx = useContext(ThemeContext);
if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
return ctx;
};