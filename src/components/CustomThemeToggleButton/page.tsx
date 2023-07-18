import { Button } from "@mui/material";
import { useThemeToggle } from "src/utils/theme/CustomThemeProvider";

const CustomThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useThemeToggle();

  return (
    <Button onClick={toggleTheme} variant="contained">
      {isDarkMode ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default CustomThemeToggleButton;
