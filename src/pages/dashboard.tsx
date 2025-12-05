// Dashboard.tsx
import { useState } from "react";
import axios from "axios";
import HeaderDash from "../components/headerDashboard";
import MainDash from "../components/mainDashboard";
import Forecast from "../components/forecast";
import type { WeatherData } from "../types";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Footer from "../components/footerDashboard";

const Dashboard = () => {
  const theme = useTheme();
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
        bgcolor: theme.palette.background.default,
        minHeight: "100vh",
        pb: "120px",
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
