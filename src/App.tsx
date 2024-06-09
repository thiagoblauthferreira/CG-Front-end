import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginPointScreen from "./pages/Login/login";
import SignUpScreen from "./pages/Sign Up/doador.signup";
import { LandingTemporaria } from "./pages/LandingTemporaria/LandingTemporaria";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LoginPointScreen />} path="/login"></Route>
        <Route element={<LandingTemporaria />} path="/"></Route>
        <Route element={<SignUpScreen />} path="/cadastro"></Route>
      </Routes>
    </Router>
  );
}

export default App;
