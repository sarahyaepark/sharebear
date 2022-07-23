import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#bcb6ff",
      light: "#c4e2ff",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Form />
      </ThemeProvider>
    </div>
  );
}

export default App;
