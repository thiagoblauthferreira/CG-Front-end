import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginPointScreen from "./pages/auth/Login/login";
import SignUpScreen from "./pages/auth/Sign Up/signup";
import { PrivateRoute } from "./pages/private/ControledRoutes";
import Cookies from "js-cookie";
import { LandingTemporaria } from "./pages/LandingTemporaria/LandingTemporaria";
import { Home } from "./pages/private/homeDoador/home";

function App() {
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
