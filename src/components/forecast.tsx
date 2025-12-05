import { Box, Typography, Paper } from "@mui/material";
import type { ForecastProps } from "../types";
import Divider from "@mui/material/Divider";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/languageContext";
import { useTheme } from "@mui/material/styles";

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  const { t } = useTranslation();
  const { lang } = useLanguage();
  const theme = useTheme();

  const locale = lang === "fa" ? "fa-IR" : "en-US";

  const days: {
    date: string;
    dayName: string;
    temp: number;
    main: string;
    desc: string;
  }[] = [];

  const getWeatherImage = (main: string, desc: string) => {
    const m = main.toLowerCase();
    const d = desc.toLowerCase();

    if (m.includes("clear")) return "/image/sunny.png";
    if (m.includes("cloud") || d.includes("overcast"))
      return "/image/cloudy.png";
    if (m.includes("rain") || m.includes("drizzle")) return "/image/rain.png";
    if (m.includes("snow")) return "/image/snow.png";
    if (m.includes("thunder") || d.includes("storm"))
      return "/image/thunder.png";
    if (m.includes("mist") || m.includes("fog") || m.includes("haze"))
      return "/image/haze.png";

    return "/image/cloudy.png";
  };

  forecast.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    const exists = days.find((d) => d.date === date);

    if (!exists) {
      days.push({
        date,
        temp: Math.round(item.main.temp),
        main: item.weather[0].main,
        desc: item.weather[0].description,
        dayName: new Date(date).toLocaleDateString(locale, {
          weekday: "long",
        }),
      });
    }
  });

  const fiveDays = days.slice(0, 5);

  return (
    <Box
      sx={{
        width: "90%",
        borderRadius: 4,
        px: 2,
        py: 4,
        mt: 4,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        bgcolor: theme.custom.card,
        direction: lang === "fa" ? "rtl" : "ltr",
        overflowX: "hidden",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "22px",
          color: theme.palette.text.primary,
          mb: 1.5,
          textAlign: lang === "fa" ? "right" : "left",
        }}
      >
        {t("fiveDays")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 3, sm: 7 },
          flexWrap: { xs: "nowrap", sm: "wrap" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {fiveDays.map((d) => {
          const imgSrc = getWeatherImage(d.main, d.desc);

          return (
            <Paper
              key={d.date}
              elevation={3}
              sx={{
                p: 1.2,
                width: { xs: "100%", sm: "130px" },
                maxWidth: 350,
                textAlign: "center",
                borderRadius: 6,
                bgcolor: theme.custom.cardSecondary,
                direction: "rtl",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                  fontSize: "17px",
                  mt: 2.5,
                }}
              >
                {d.dayName}
              </Typography>

              <Divider
                sx={{
                  mt: 0.8,
                  borderColor: theme.palette.divider,
                  opacity: 0.3,
                  width: "40%",
                  mx: "auto",
                }}
              />

              <Box
                component="img"
                src={imgSrc}
                alt={d.desc}
                sx={{
                  width: "100px",
                  height: "130px",
                  mt: 1.5,
                  objectFit: "contain",
                  mx: "auto",
                }}
              />

              <Typography
                sx={{
                  fontSize: "23px",
                  fontWeight: "bold",
                  mt: 1,
                  mb: 2,
                  color: theme.palette.text.primary,
                }}
              >
                {d.temp}°C
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};

export default Forecast;
