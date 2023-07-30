import { Button } from "@mui/material";
import { useThemeToggle } from "src/utils/theme/CustomThemeProvider";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const CustomThemeToggleButton = () => {
  const { toggleTheme } = useThemeToggle();
  return (
    <Button
      onClick={toggleTheme}
      color="info"
      variant="contained">
      <span
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBlock: "5px",
        }}>
        <Brightness4Icon sx={{ fontSize: 30 }} />
      </span>
    </Button>
  );
};

export default CustomThemeToggleButton;
