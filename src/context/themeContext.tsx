import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import type { ThemeMode, ThemeContextType } from "../types/index";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
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
    fontFamily: 'Vazirmatn, Roboto, Arial, sans-serif',
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
