import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useLanguage } from "../context/languageContext";
import { useTheme } from "@mui/material/styles";

const LiveClock = () => {
  const { lang } = useLanguage();
  const theme = useTheme();
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

  return (
    <Typography
      sx={{
        fontSize: { xs: "12px", sm: "14px" },
        color: theme.palette.text.primary,
        whiteSpace: "nowrap",
      }}
    >
      {time.toLocaleString(locale, options)}
    </Typography>
  );
};

export default LiveClock;
