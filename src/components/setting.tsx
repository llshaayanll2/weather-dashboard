import { useState } from "react";
import {
  IconButton,
  Popover,
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router";
import { useLanguage } from "../context/language";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "../context/theme";

const Setting: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const { lang, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { mode, setMode } = useThemeMode();

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: "light" | "dark" | null
  ) => {
    if (newMode !== null) setMode(newMode);
  };

  const handleLangChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLang: "en" | "fa" | null
  ) => {
    if (newLang !== null) changeLanguage(newLang);
  };

  const login = () => navigate("/");

  return (
    <>
      <IconButton onClick={handleOpen}>
        <SettingsOutlinedIcon
          sx={{
            border: "1px solid #BBC1C4",
            borderRadius: "12px",
            p: 2,
            color: "#BBC1C4",
          }}
        />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: { p: 2, minWidth: 220, direction: lang === "fa" ? "rtl" : "ltr" },
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 1, fontWeight: 500 }}>{t("mode")}</Typography>
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={handleModeChange}
            size="small"
            fullWidth
          >
            <ToggleButton value="light" sx={{ display: "flex", gap: 1 }}>
              {" "}
              <LightModeOutlinedIcon sx={{ fontSize: "16px" }} /> {t("light")}
            </ToggleButton>
            <ToggleButton value="dark" sx={{ display: "flex", gap: 1 }}>
              {" "}
              <DarkModeOutlinedIcon sx={{ fontSize: "16px" }} /> {t("dark")}
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box sx={{ mt: 2 }}>
          <Typography sx={{ mb: 1, fontWeight: 500 }}>
            {t("Language") || "Language"}
          </Typography>
          <ToggleButtonGroup
            value={lang}
            exclusive
            onChange={handleLangChange}
            size="small"
            fullWidth
          >
            <ToggleButton value="en">{t("en")}</ToggleButton>
            <ToggleButton value="fa">{t("fa")}</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <IconButton
          sx={{
            display: "flex",
            gap: 1,
            fontSize: "17px",
            fontWeight: "bold",
            mt: 2,
          }}
          onClick={login}
        >
          <LogoutIcon /> {t("exit")}
        </IconButton>
      </Popover>
    </>
  );
};

export default Setting;
