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
        p: { xs: 1.5, md: 2 },
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
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          gap: { xs: 1, md: 0 },
        }}
      >
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontSize: { xs: "12px", md: "15px" },
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {t("nadin")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: { xs: 2, md: 3 },
            justifyContent: "center",
            flexWrap: "nowrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.7,
              whiteSpace: "nowrap",
            }}
          >
            <MailOutlineIcon
              sx={{ color: theme.palette.text.primary, fontSize: 18 }}
            />
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: "11px", md: "15px" },
              }}
            >
              {t("contact")}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.7,
              whiteSpace: "nowrap",
            }}
          >
            <CalendarMonthIcon
              sx={{ color: theme.palette.text.primary, fontSize: 18 }}
            />
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: "11px", md: "15px" },
                display: "flex",
                alignItems: "center",
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
