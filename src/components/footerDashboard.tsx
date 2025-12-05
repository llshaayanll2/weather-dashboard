import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/languageContext";
import LiveClock from "./clock";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.custom.footer,
        p: { xs: 2, md: 3 },
        position: "fixed",
        width: "100%",
        left: 0,
        bottom: 0,
        boxShadow: 5,
        zIndex: 1200,
        direction: lang === "fa" ? "rtl" : "ltr",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          gap: { xs: 1, sm: 2, md: 3 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontSize: { xs: "12px", md: "14px" },
            whiteSpace: "nowrap",
            px: 2,
          }}
        >
          {t("nadin")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: { xs: 1.2, sm: 3 },
            px: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <MailOutlineIcon sx={{ color: theme.palette.text.primary }} />
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontSize: "14px",
                whiteSpace: "nowrap",
              }}
            >
              {t("contact")}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CalendarMonthIcon sx={{ color: theme.palette.text.primary }} />
            <Typography
              sx={{
                fontSize: "14px",
                whiteSpace: "nowrap",
                minWidth: "100px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                color: theme.palette.text.primary,
              }}
            >
              <LiveClock />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
