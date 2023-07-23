import { Button } from "@mui/material";
import { useThemeToggle } from "src/utils/theme/CustomThemeProvider";

const CustomThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useThemeToggle();
  return (
    <Button
      sx={{ marginLeft: "auto" }}
      onClick={toggleTheme}
      variant="contained">
      {isDarkMode ? "Light" : "Dark"} Mode
    </Button>
  );
};

export default CustomThemeToggleButton;
