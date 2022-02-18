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
import styled from "styled-components";
import Home from "./screens/Home";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <PageContainer>
      <ThemeProvider theme={themeMode}>
        <Route exact path="/" component={LandingPage} />
        <Route
          path="/home"
          render={() => <NavBar theme={theme} toggleTheme={toggleTheme} />}
        />
        {/* <Route exact path="/home/countries" component={Countries} /> */}
        <Route exact path="/home/countries" component={Home} />
        <Route exact path="/home/countries/:id" component={Country} />
        <Route exact path="/home/activities/create" component={FormActivity} />
        <Route />
        <Route path="/home" component={Footer} />
      </ThemeProvider>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  .contenedor::-webkit-scrollbar:vertical {
    width: 10px;
  }

  div::-webkit-scrollbar-button:increment,
  body::-webkit-scrollbar-button:decrement {
    display: none;
  }

  .contenedor::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  body::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

export default App;
