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
import { useLanguage } from "../context/language";
import { useThemeMode } from "../context/theme";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { mode } = useThemeMode();
  const { lang, changeLanguage } = useLanguage();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    changeLanguage(event.target.value as "en" | "fa");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: mode === "light" ? "#eefaff" : "#25262e",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        direction: lang === "fa" ? "rtl" : "ltr",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "85%", md: "60%", lg: "50%" },
          bgcolor: mode === "light" ? "white" : "#292F45",
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
              py: 6,
              px: { xs: 4, md: 5 },
              width: { xs: "100%", md: "50%" },
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                mt: 2,
                fontSize: "24px",
                fontWeight: "bold",
                color: mode === "light" ? "#003464" : "white",
              }}
            >
              {t("Login")}
            </Typography>

            <TextField
              label={t("EnterYourName")}
              fullWidth
              required
              sx={{
                mt: 4,
                "& .MuiInputBase-input": {
                  color: mode === "light" ? "#003464" : "#ffffff",
                },
                "& .MuiInputLabel-root": {
                  color: mode === "light" ? "#003464" : "#ffffff",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: mode === "light" ? "#003464" : "#ffffff",
                  },
                  "&:hover fieldset": {
                    borderColor: mode === "light" ? "#074979" : "#ffffff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: mode === "light" ? "#074979" : "#ffffff",
                  },
                },
              }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: { xs: 6, md: 25 },
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
              display: "block",
              width: { xs: "100%", md: "50%" },
              height: { xs: "200px", md: "auto" },
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      <FormControl
        variant="standard"
        sx={{
          minWidth: 140,
          mt: 2,
          "& .MuiInputLabel-root": {
            color: mode === "light" ? "#003464" : "#ffffff",
          },
          "& .MuiInputBase-input": {
            color: mode === "light" ? "#003464" : "#ffffff",
          },
          "& .MuiSvgIcon-root": {
            color: mode === "light" ? "#003464" : "#ffffff",
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: mode === "light" ? "#003464" : "#ffffff",
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottomColor: mode === "light" ? "#074979" : "#ffffff",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: mode === "light" ? "#074979" : "#ffffff",
          },
        }}
      >
        <InputLabel id="language-label">Language</InputLabel>

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
