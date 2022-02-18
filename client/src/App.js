import "./App.css";

import { Route } from "react-router-dom";
import Countries from "./components/Countries/Countries/Countries";
import Country from "./components/Countries/country/Country";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import FormActivity from "./components/activities/formActivity/FormActivity";
import { darkTheme, lightTheme } from "./themes";
import useDarkMode from "./hooks/useDarkMode/useDarkMode";
import { ThemeProvider } from "styled-components";
import LandingPage from "./screens/LandingPage";
import Home from "./screens/Home";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Route exact path="/" component={LandingPage} />
      <Route
        path="/home"
        render={() => <NavBar theme={theme} toggleTheme={toggleTheme} />}
      />
      <Route exact path="/home/countries" component={Home} />
      <Route exact path="/home/countries/:id" component={Country} />
      <Route exact path="/home/activities/create" component={FormActivity} />
      <Route />
      <Route path="/home" component={Footer} />
    </ThemeProvider>
  );
}

export default App;
