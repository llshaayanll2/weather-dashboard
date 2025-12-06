import { Box, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useLanguage } from "../context/languageContext";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

interface Props {
  monthlyTemps: number[];
}

const Average: React.FC<Props> = ({ monthlyTemps }) => {
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const theme = useTheme();

  const months =
    lang === "fa"
      ? [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند",
        ]
      : [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

  let data = months.map((m, i) => ({
    month: m,
    temp: monthlyTemps[i] || 0,
  }));

  if (lang === "fa") {
    data = data.reverse();
  }

  return (
    <Box
      sx={{
        width: { xs: "95%", sm: "90%", md: "45%" },
        bgcolor: theme.custom.card,
        p: { xs: 2, md: 3 },
        borderRadius: 5,
        mt: { xs: 3, md: 0 },
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "16px", md: "20px" },
          mb: 2,
          color: theme.palette.text.primary,
        }}
      >
        {t("avg")}
      </Typography>

      <Box sx={{ width: "100%", height: { xs: 150, sm: 180, md: 155 } }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            style={{ direction: lang === "fa" ? "rtl" : "ltr" }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={theme.palette.divider}
            />

            <XAxis
              dataKey="month"
              stroke={theme.palette.text.primary}
              tick={{ fontSize: 11 }}
            />

            <YAxis
              stroke={theme.palette.text.primary}
              domain={[0, 40]}
              ticks={[10, 20, 30, 40]}
              tick={{ fontSize: 11 }}
            />

            <Tooltip
              contentStyle={{
                background: theme.custom.cardSecondary,
                borderRadius: 8,
                border: "none",
                color: theme.palette.text.primary,
              }}
            />

            <Line
              type="monotone"
              dataKey="temp"
              stroke={theme.palette.primary.main}
              strokeWidth={3}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Average;
