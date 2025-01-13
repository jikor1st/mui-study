import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#00ff00",
    },
  },
  typography: {
    fontFamily: ["Roboto"].join(","),
    h1: {
      fontSize: "160px",
      fontWeight: "bold",
    },
    customFont: {
      fontSize: "100px",
      fontWeight: "bold",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Roboto",
        },
      },
    },
  },
});

export default theme;
