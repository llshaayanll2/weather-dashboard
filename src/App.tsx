import { Route, Routes } from "react-router";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { LanguageProvider } from "./context/language";
import { ThemeProvider as ModeProvider } from "./context/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import "./index.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ModeProvider>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </LanguageProvider>
      </ModeProvider>
    </MuiThemeProvider>
  );
}

export default App;
