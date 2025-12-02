import { Box, TextField, Typography } from "@mui/material";
import "@fontsource/roboto/400.css";
import Setting from "./setting";
import { useLanguage } from "../context/language";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import type { NavbarProps } from "../types";
import { useThemeMode } from "../context/theme";
import { useEffect } from "react";
const HeaderDash: React.FC<NavbarProps> = ({ onSearch }) => {
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const [city, setCity] = useState("San Francisco");
  const { mode } = useThemeMode();

  useEffect(() => {
    if (city.trim().length > 0) {
      onSearch(city);
    }
  }, [city]);
  return (
    <Box
      sx={{
        display: "flex",
        px: 3,
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: mode === "light" ? "#F3FAFE" : "#292f45",
        boxShadow: 5,
        direction: lang === "fa" ? "rtl" : "ltr",
        "& .MuiInputBase-input": {
          color: mode === "light" ? "#003464" : "#ffffff",
        },
        "& .MuiInputLabel-root": {
          color: mode === "light" ? "#003464" : "#b0b3c2",
        },
        "& fieldset": {
          borderColor: mode === "light" ? "#9ea3b0" : "#9ea3b0",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box
          component="img"
          src="../public/image/logo.png"
          sx={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            textAlign: lang === "fa" ? "right " : "left",
          }}
        />
        <Typography sx={{ color: mode === "light" ? "#003464" : "#f3fafe" }}>
          {t("WeatherDashboard")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexDirection: "row",
        }}
      >
        <TextField
          label={t("SearchYourLocation")}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          inputProps={{
            style: { direction: lang === "fa" ? "rtl" : "ltr" },
          }}
          sx={{
            border: mode === "light" ? "#003464" : "#f3fafe",
            color: mode === "light" ? "#003464" : "#f3fafe",
          }}
        />

        <Setting />
      </Box>
    </Box>
  );
};

export default HeaderDash;
