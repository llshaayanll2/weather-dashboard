import { Box, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import type { MainWeatherProps } from "../types";
import Average from "./average";
import { t } from "i18next";
import { useThemeMode } from "../context/theme";
import { useLanguage } from "../context/language";

const MainDash: React.FC<MainWeatherProps> = ({ weather }) => {
  const { mode } = useThemeMode();
  const { lang } = useLanguage();
  const locale = lang === "fa" ? "fa-IR" : "en-US";

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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: { xs: "center", md: "flex-start" },
        gap: 3,
        px: 2,
        mt: 3,
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "38%" },
          borderRadius: 5,
          bgcolor: mode === "light" ? "#e1e9ee" : "#292f45",
        }}
      >
        <Box sx={{ p: 2 }}>
          {!weather ? (
            <Typography
              sx={{
                color: mode === "light" ? "#292f45" : "#e1e9ee",
                fontWeight: "bold",
              }}
            >
              {t("serachForCity")}
            </Typography>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 1,
                      mt: 1,
                      width: "fit-content",
                      fontSize: "17px",
                      borderRadius: 5,
                      gap: 1,
                      bgcolor: "#cdd9e0",
                      color: "#003464",
                      mb: 2,
                    }}
                  >
                    <PlaceIcon />
                    {weather.name}
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: mode === "light" ? "#003464" : "#ffffff",
                      fontSize: "28px",
                    }}
                  >
                    {new Date(weather.dt * 1000).toLocaleDateString(locale, {
                      weekday: "long",
                    })}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 2, mt: 0.5 }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: mode === "light" ? "#000000" : "#ffffff",
                      }}
                    >
                      {new Date(weather.dt * 1000).toLocaleDateString(locale)}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: mode === "light" ? "#000000" : "#ffffff",
                      }}
                    >
                      {new Date(weather.dt * 1000).toLocaleTimeString(locale)}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      mt: 2,
                      fontWeight: "bold",
                      fontSize: "32px",
                      color: mode === "light" ? "#003464" : "#ffffff",
                    }}
                  >
                    {weather.main.temp}°{lang === "fa" ? "C" : "C"}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "13px",
                      mt: 0.5,
                      color: mode === "light" ? "#000000" : "#ffffff",
                    }}
                  >
                    {weather.weather[0].description}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: { xs: "100%", sm: "45%" },
                    mt: { xs: 2, sm: 0 },
                  }}
                >
                  <Box
                    component="img"
                    src={getWeatherImage(
                      weather.weather[0].main,
                      weather.weather[0].description
                    )}
                    alt={weather.weather[0].description}
                    sx={{
                      width: { xs: "180px", sm: "220px", md: "200px" },
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>

      <Average
        monthlyTemps={[12, 15, 20, 25, 30, 35, 32, 31, 26, 20, 15, 10]}
      />
    </Box>
  );
};

export default MainDash;
