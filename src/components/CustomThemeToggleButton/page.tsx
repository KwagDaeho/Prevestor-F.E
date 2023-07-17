import { Button } from "@mui/material";
import { useThemeToggle } from "./CustomThemeProvider";

const CustomThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useThemeToggle();

  return (
    <Button onClick={toggleTheme} variant="contained">
      {isDarkMode ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default CustomThemeToggleButton;
