// Dashboard.tsx
import { useState } from "react";
import axios from "axios";
import HeaderDash from "../components/headerDash";
import MainDash from "../components/mainDash";
import Forecast from "../components/forecast";
import type { WeatherData } from "../types";
import { Box } from "@mui/material";
import { useThemeMode } from "../context/theme";
import Footer from "../components/footer";

const Dashboard = () => {
  const { mode } = useThemeMode();
  const API_KEY = "5b5a3eb388ec33924aa663275e11fd86";

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<any[]>([]);

  const fetchWeather = async (city: string) => {
    try {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: { q: city, appid: API_KEY, units: "metric" },
        }
      );
      setWeather(res.data);

      const resF = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params: { q: city, appid: API_KEY, units: "metric" },
        }
      );
      setForecast(resF.data.list);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: mode === "light" ? "#f3fafe" : "black",
        minHeight: "100vh",         // ⬅ کامل درست شد
        pb: "120px",                // ⬅ برای اینکه محتوا زیر Footer نرود
      }}
    >
      <HeaderDash onSearch={fetchWeather} />

      <Box sx={{ mt: 2 }}>
        <MainDash weather={weather} forecast={[]} average={[]} />
      </Box>

      <Box sx={{ mt: 2 }}>
        <Forecast forecast={forecast} />
      </Box>

      <Footer />
    </Box>
  );
};

export default Dashboard;
