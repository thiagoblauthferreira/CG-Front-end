import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginPointScreen from "./pages/Login/login";
import SignUpScreen from "./pages/Sign Up/doador.signup";
import { PrivateRoute } from "./components/ControledRoutes";
import Cookies from "js-cookie";
import { LandingTemporaria } from "./pages/LandingTemporaria/LandingTemporaria";
import { Home } from "./pages/homeDoador/home";

function App() {
  function invalidateSession() {
    Cookies.remove("session");
  }

  return (
    <Router>
      <Routes>
        <Route element={<LoginPointScreen />} path="/login"></Route>
        <Route element={<LandingTemporaria />} path="/"></Route>
        <Route element={<SignUpScreen />} path="/cadastro"></Route>
        {/*Rotas privadas vão aqui dentro*/}
        <Route element={<PrivateRoute />}>
          <Route path="home" element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
