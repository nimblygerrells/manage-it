import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
  primary: { main: "#84bd5e", contrastText: "#ffffff" },
  secondary: { main: "#F3B216", contrastText: "#ffffff" }
};
const themeName = "GoNimbly";

export default createMuiTheme({ palette, themeName });
