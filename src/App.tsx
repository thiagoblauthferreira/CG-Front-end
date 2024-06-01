import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginPointScreen from "./pages/Login/login";
import SignUpScreen from "./pages/Sign Up/doador.signup";
import { PrivateRoute } from "./components/ControledRoutes";
import Cookies from "js-cookie";

function App() {

  function invalidateSession() {
    Cookies.remove("session");
  }

  return (
    <Router>
      <Routes>
        <Route element={<LoginPointScreen />} path="/login"></Route>
        <Route element={<SignUpScreen />} path="/cadastro"></Route>
        {/*Rotas privadas vão aqui dentro*/}
        <Route element={<PrivateRoute/>}> 
          <Route path="dashboard" element={<h1>Olá</h1>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
