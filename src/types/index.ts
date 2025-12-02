export type mood = "light" | "dark";

export interface WeatherData {
  name: string;
  dt: number;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    main: any;
    description: string;
    icon: string;
  }[];
  sys?: {
    country: string;
  };
}
export interface MainWeatherProps {
  weather: WeatherData | null;
  forecast: any[];
  average: any[];
}

export interface NavbarProps {
  onSearch: (city: string) => void;
}
export interface LangContextType {
  lang: string;
  changeLanguage: (lng: string) => void;
}
export type ThemeMode = "light" | "dark";

export interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}
export interface NavbarProps {
  onSearch: (city: string) => void;
}
export interface ForecastProps {
  forecast: any[];
}
