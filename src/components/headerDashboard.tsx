import { Box, TextField, Typography, Autocomplete } from "@mui/material";
import "@fontsource/roboto/400.css";
import Setting from "./setting";
import { useLanguage } from "../context/languageContext";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import type { NavbarProps } from "../types";
import { useThemeMode } from "../context/themeContext";
import { useTheme } from "@mui/material/styles";

const HeaderDash: React.FC<NavbarProps> = ({ onSearch }) => {
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const [city, setCity] = useState("San Francisco");
  const { mode } = useThemeMode();
  const theme = useTheme();

  const cityList = [
    "Tehran",
    "Mashhad",
    "Isfahan",
    "Tabriz",
    "Shiraz",
    "Karaj",
    "Ahvaz",
    "London",
    "Paris",
    "New York",
    "San Francisco",
    "Tokyo",
  ];

  useEffect(() => {
    onSearch("San Francisco");
  }, []);
  const handleSearch = (value: string) => {
    const v = value.trim();
    if (!v) return;
    onSearch(v);
  };

  return (
    <Box
      sx={{
        bgcolor: theme.custom.header,
        boxShadow: 5,
        px: { xs: 2, md: 3 },
        py: 1,

        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        gap: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          width: "100%",
          mb: { xs: 1, md: 0 },
        }}
      >
        <Box
          component="img"
          src="/image/logo.png"
          sx={{ width: 60, height: 60, borderRadius: "50%" }}
        />
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 500,
          }}
        >
          {t("WeatherDashboard")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "row", md: "row" },
          width: { xs: "100%", md: "auto" },
          alignItems: "center",
          gap: 1,
        }}
      >
        <Autocomplete
          freeSolo
          options={cityList}
          value={city}
          onInputChange={(_, v) => setCity(v)}
          onChange={(_, v) => {
            if (typeof v === "string") {
              setCity(v);
              handleSearch(v);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={t("SearchYourLocation")}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearch(city);
                }
              }}
              sx={{
                "& .MuiInputBase-input": {
                  color: theme.palette.text.primary,
                },
                "& .MuiInputLabel-root": {
                  color:
                    mode === "light" ? theme.palette.text.primary : "#b0b3c2",
                },
              }}
            />
          )}
          sx={{
            minWidth: { xs: "80%", sm: 260, md: 320 },
            direction: lang === "fa" ? "rtl" : "ltr",
          }}
        />

        <Setting />
      </Box>
    </Box>
  );
};

export default HeaderDash;
