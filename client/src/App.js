import "./App.css";

import { Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { darkTheme, lightTheme } from "./themes";
import useDarkMode from "./hooks/useDarkMode/useDarkMode";
import { ThemeProvider } from "styled-components";
import LandingPage from "./screens/LandingPage";
import Home from "./screens/Home";
import Details from "./screens/Details";
import NewActivity from "./screens/NewActivity";

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
      <Route exact path="/home/countries/:id" component={Details} />
      <Route exact path="/home/activities/create" component={NewActivity} />
      <Route />
      <Route path="/home" component={Footer} />
    </ThemeProvider>
  );
}

export default App;
