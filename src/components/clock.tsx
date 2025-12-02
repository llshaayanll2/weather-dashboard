import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useLanguage } from "../context/language";
import { useThemeMode } from "../context/theme";

const LiveClock = () => {
  const { lang } = useLanguage();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const locale = lang === "fa" ? "fa-IR" : "en-US";
  const { mode } = useThemeMode();
  return (
    <Typography
      sx={{
        fontSize: "15px",
        color: mode === "light" ? "#003464" : "white",
      }}
    >
      {time.toLocaleString(locale, options)}
    </Typography>
  );
};

export default LiveClock;
