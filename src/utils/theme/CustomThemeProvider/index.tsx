"use client";

import {
  createContext,
  useContext,
  useState,
  ReactElement,
  ReactNode,
} from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext<{
  isDarkMode: boolean;
  toggleTheme: () => void;
}>({
  isDarkMode: true,
  toggleTheme: () => {},
});

export const useThemeToggle = () => {
  return useContext(ThemeContext);
};

interface CustomThemeProviderProps {
  children?: ReactNode;
}

const CustomThemeProvider = ({
  children,
}: CustomThemeProviderProps): ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#bcbcca" : "#1986a2",
        light: isDarkMode ? "#bcbcca" : "#1986a2",
        dark: isDarkMode ? "#bcbcca" : "#1986a2",
        contrastText: isDarkMode ? "#1986a2" : "#aaa",
      },
      secondary: {
        main: isDarkMode ? "#171737" : "#888",
      },
      error: {
        main: isDarkMode ? "#bcbcca" : "#1986a2",
        light: isDarkMode ? "#bcbcca" : "#1986a2",
        dark: isDarkMode ? "#bcbcca" : "#1986a2",
        contrastText: isDarkMode ? "#bcbcca" : "#1986a2",
      },
      warning: {
        main: isDarkMode ? "#bcbcca" : "#1986a2",
        light: isDarkMode ? "#bcbcca" : "#1986a2",
        dark: isDarkMode ? "#bcbcca" : "#1986a2",
        contrastText: isDarkMode ? "#bcbcca" : "#1986a2",
      },
      info: {
        main: isDarkMode ? "#bcbcca" : "#1986a2",
        light: isDarkMode ? "#bcbcca" : "#1986a2",
        dark: isDarkMode ? "#bcbcca" : "#1986a2",
        contrastText: isDarkMode ? "#bcbcca" : "#1986a2",
      },
      success: {
        main: isDarkMode ? "#1986a2" : "#bcbcca",
        light: isDarkMode ? "#1986a2" : "#bcbcca",
        dark: isDarkMode ? "#1986a2" : "#bcbcca",
        contrastText: isDarkMode ? "#1986a2" : "#bcbcca",
      },
      tonalOffset: {
        light: 1,
        dark: 1,
      },
      contrastThreshold: 1,
      common: {
        black: isDarkMode ? "#bcbcca" : "#1986a2",
        white: isDarkMode ? "#bcbcca" : "#1986a2",
      },
      grey: {
        50: "#111",
        100: "#111",
        200: "#111",
        300: "#111",
        400: "#111",
        500: "#111",
        600: "#111",
        700: "#111",
        800: "#111",
        900: "#111",
        A100: "#111",
        A200: "#111",
        A400: "#111",
        A700: "#111",
      },
      text: {
        primary: isDarkMode ? "#fff" : "#171737",
        secondary: isDarkMode ? "#fff" : "#171737",
        disabled: isDarkMode ? "#fff" : "#171737",
      },
      divider: "#f90",
      action: {
        active: "#f90",
        hover: "#f90",
        hoverOpacity: 0.8,
        selected: "#111",
        selectedOpacity: 0.8,
        disabled: "#111",
        disabledOpacity: 0.8,
        disabledBackground: "#111",
        focus: "#111",
        focusOpacity: 0.8,
        activatedOpacity: 0.8,
      },
      background: {
        default: isDarkMode ? "#222" : "#fff",
        paper: isDarkMode ? "#121212" : "#d8d8d8",
      },
    },
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
