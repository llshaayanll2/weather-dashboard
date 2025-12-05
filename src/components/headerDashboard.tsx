import { Box, TextField, Typography, Autocomplete } from "@mui/material";
import "@fontsource/roboto/400.css";
import Setting from "./setting";
import { useLanguage } from "../context/languageContext";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
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
    if (city.trim().length > 0) {
      onSearch(city);
    }
  }, [city, onSearch]);

  return (
    <Box
      sx={{
        bgcolor: theme.custom.header,
        boxShadow: 5,
        direction: lang === "fa" ? "rtl" : "ltr",
        px: { xs: 2, md: 3 },
        py: 1,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        gap: { xs: 1.5, md: 0 },
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          flexDirection: "row",
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
          alignItems: "center",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Autocomplete
          freeSolo
          options={cityList}
          value={city}
          onInputChange={(_, newValue) => setCity(newValue)}
          sx={{
            minWidth: { xs: "100%", sm: 260, md: 320 },
            direction: lang === "fa" ? "rtl" : "ltr",
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={t("SearchYourLocation")}
              sx={{
                "& .MuiInputBase-input": {
                  color: theme.palette.text.primary,
                },
                "& .MuiInputLabel-root": {
                  color:
                    mode === "light" ? theme.palette.text.primary : "#b0b3c2",
                },
                "& fieldset": {
                  borderColor: theme.custom.inputBorder,
                },
                "&:hover fieldset": {
                  borderColor: theme.custom.inputHover,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.custom.inputHover,
                },
              }}
            />
          )}
        />

        <Setting />
      </Box>
    </Box>
  );
};

export default HeaderDash;
