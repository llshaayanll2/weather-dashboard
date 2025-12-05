import "@fontsource/roboto/700.css";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/languageContext";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { lang, changeLanguage } = useLanguage();
  const theme = useTheme();

  const [name, setName] = useState(""); 

  const handleLogin = () => {
    if (!name.trim()) {
     
      return;
    }
    navigate("/dashboard");
  };

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    changeLanguage(event.target.value as "en" | "fa");
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        direction: lang === "fa" ? "rtl" : "ltr",
        px: 2,
        py: 2,
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "85%", md: "60%", lg: "50%" },
          maxWidth: 900,
          bgcolor: theme.palette.background.paper,
          borderRadius: 3,
          boxShadow: 4,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              py: { xs: 4, md: 5 },
              px: { xs: 3, md: 5 },
              width: { xs: "100%", md: "50%" },
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 4,
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                color: theme.palette.text.primary,
              }}
            >
              {t("Login")}
            </Typography>

            <TextField
              label={t("EnterYourName")}
              fullWidth
              required
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              sx={{
                "& .MuiInputBase-input": {
                  color: theme.palette.text.primary,
                },
                "& .MuiInputLabel-root": {
                  color: theme.palette.text.primary,
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.text.primary,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.custom.inputHover,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.custom.inputHover,
                  },
                },
              }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 4,
                p: 2,
                bgcolor: "#2196F3",
                fontSize: "16px",
              }}
              onClick={handleLogin}
            >
              {t("Login")}
            </Button>
          </Box>

          <Box
            component="img"
            src="/image/mainLight.png"
            sx={{
              width: { xs: "100%", md: "50%" },
              height: { xs: "auto", md: "100%" },
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      </Box>

      <FormControl
        variant="standard"
        sx={{
          minWidth: 140,
          mt: 1,
          "& .MuiInputLabel-root": {
            color: theme.palette.text.primary,
          },
          "& .MuiInputBase-input": {
            color: theme.palette.text.primary,
          },
          "& .MuiSvgIcon-root": {
            color: theme.palette.text.primary,
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: theme.palette.text.primary,
          },
        }}
      >
        <InputLabel id="language-label">{t("language")}</InputLabel>

        <Select
          labelId="language-label"
          label="Language"
          value={lang}
          onChange={handleLanguageChange}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fa">فارسی</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Login;
