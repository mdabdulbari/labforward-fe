import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import Home from "./views/Home";

const theme = createMuiTheme({
    typography: {
        fontFamily: ['"Noto Sans TC"', "sans-serif"],
        useNextVariants: true,
        fontWeight: "bold",
        color: "#264052",
    },
    palette: {
        primary: {
            main: "#f86152",
        },
    },
    textColor: "#264052",
    secondaryText: "#cad1d6",
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <Home />
            </div>
        </MuiThemeProvider>
    );
}

export default App;
