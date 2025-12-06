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
import { useLanguage } from "../context/languageContext";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "../context/themeContext";
import { useTheme } from "@mui/material/styles";

const Setting: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const { lang, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mode, setMode } = useThemeMode();
  const theme = useTheme();

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleModeChange = (_e: any, newMode: any) => {
    if (newMode) setMode(newMode);
  };

  const handleLangChange = (_e: any, newLang: any) => {
    if (newLang) changeLanguage(newLang);
  };

  const login = () => navigate("/");

  return (
    <>
      <IconButton onClick={handleOpen}>
        <SettingsOutlinedIcon
          sx={{
            border: `1px solid #90a4ae`,
            borderRadius: "12px",
            p: 2,
            color: "#90a4ae",
          }}
        />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: theme.direction === "rtl" ? "left" : "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: theme.direction === "rtl" ? "left" : "right",
        }}
        PaperProps={{
          sx: {
            p: 2,
            minWidth: 220,
            bgcolor: theme.palette.background.paper,
          },
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography
            sx={{ mb: 1, fontWeight: 500, color: theme.palette.text.primary }}
          >
            {t("mode")}
          </Typography>

          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={handleModeChange}
            size="small"
            fullWidth
          >
            <ToggleButton
              value="light"
              sx={{
                display: "flex",
                gap: 1,
                color: theme.palette.text.primary,
                "&.Mui-selected": {
                  backgroundColor: theme.custom.cardSecondary,
                },
              }}
            >
              <LightModeOutlinedIcon sx={{ fontSize: 16 }} />
              {t("light")}
            </ToggleButton>

            <ToggleButton
              value="dark"
              sx={{
                display: "flex",
                gap: 1,
                color: theme.palette.text.primary,
                "&.Mui-selected": {
                  backgroundColor: theme.custom.cardSecondary,
                },
              }}
            >
              <DarkModeOutlinedIcon sx={{ fontSize: 16 }} />
              {t("dark")}
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{ mb: 1, fontWeight: 500, color: theme.palette.text.primary }}
          >
            {t("language")}
          </Typography>

          <ToggleButtonGroup
            value={lang}
            exclusive
            onChange={handleLangChange}
            size="small"
            fullWidth
          >
            <ToggleButton
              value="en"
              sx={{
                "&.Mui-selected": {
                  backgroundColor: theme.custom.cardSecondary,
                },
              }}
            >
              {t("en")}
            </ToggleButton>

            <ToggleButton
              value="fa"
              sx={{
                "&.Mui-selected": {
                  backgroundColor: theme.custom.cardSecondary,
                },
              }}
            >
              {t("fa")}
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <IconButton
          sx={{
            display: "flex",
            gap: 1,
            fontSize: "17px",
            fontWeight: "bold",
            mt: 2,
            color: theme.palette.text.primary,
          }}
          onClick={login}
        >
          <LogoutIcon />
          {t("exit")}
        </IconButton>
      </Popover>
    </>
  );
};

export default Setting;
