import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      header: string;
      footer: string;
      card: string;
      cardSecondary: string;
      inputBorder: string;
      inputHover: string;
    };
  }

  interface ThemeOptions {
    custom?: {
      header?: string;
      footer?: string;
      card?: string;
      cardSecondary?: string;
      inputBorder?: string;
      inputHover?: string;
    };
  }
}
