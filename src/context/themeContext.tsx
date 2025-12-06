import {createContext,useContext,useState,type ReactNode,} from "react";
import {ThemeProvider as MUIThemeProvider,createTheme,type Theme,} from "@mui/material/styles";
import type { ThemeMode, ThemeContextType } from "../types";
import { useLanguage } from "./languageContext";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const { lang } = useLanguage();

  const direction = lang === "fa" ? "rtl" : "ltr";

  const theme: Theme = createTheme({
    direction, 

    palette: {
      mode,
      background: {
        default: mode === "light" ? "#ffffff" : "#25262e",
        paper: mode === "light" ? "#ffffff" : "#292F45",
      },
      text: {
        primary: mode === "light" ? "#003464" : "#ffffff",
        secondary: mode === "light" ? "#4a4a4a" : "#cccccc",
      },
      primary: {
        main: mode === "light" ? "#2196F3" : "#90CAF9",
      },
    },

    typography: {
      fontFamily: "Vazirmatn, Roboto, Arial, sans-serif",
    },

    components: {
      MuiPopover: {
        defaultProps: {
          transformOrigin: {
            horizontal: direction === "rtl" ? "right" : "left",
            vertical: "top",
          },
        },
      },
      MuiMenu: {
        defaultProps: {
          transformOrigin: {
            horizontal: direction === "rtl" ? "right" : "left",
            vertical: "top",
          },
        },
      },
    },

    custom: {
      header: mode === "light" ? "#F3FAFE" : "#292F45",
      footer: mode === "light" ? "#F3FAFE" : "#292F45",
      card: mode === "light" ? "#e1e9ee" : "#292f45",
      cardSecondary: mode === "light" ? "#cdd9e0" : "#3F4861",
      inputBorder: mode === "light" ? "#003464" : "#ffffff",
      inputHover: mode === "light" ? "#074979" : "#b0b3c2",
    },
  });

  document.documentElement.dir = direction;

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeMode must be used inside ThemeProvider");
  }
  return ctx;
};
