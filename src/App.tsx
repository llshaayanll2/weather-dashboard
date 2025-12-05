import { Route, Routes } from "react-router";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { LanguageProvider } from "./context/languageContext";
import { ThemeProvider } from "./context/themeContext";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
