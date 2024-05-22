import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginPointScreen from "./pages/Login/login";
import SignUpChoiceScreen from "./pages/Sign Up/signup";
import SignUpDoadorScreen from "./pages/Sign Up/Doador/doador.signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LoginPointScreen />} path="/login"></Route>
        <Route element={<SignUpChoiceScreen />} path="/cadastro"></Route>
        <Route element={<SignUpDoadorScreen />} path="/cadastro/doador"></Route>
      </Routes>
    </Router>
  );
}

export default App;
