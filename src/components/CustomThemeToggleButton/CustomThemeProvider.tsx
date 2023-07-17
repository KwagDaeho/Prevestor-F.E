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
  isDarkMode: false,
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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#203a89" : "#2976a2",
      },
      secondary: {
        main: isDarkMode ? "#3a8a36" : "#c74726",
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
