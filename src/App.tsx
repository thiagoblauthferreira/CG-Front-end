import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginPointScreen from "./pages/Login/login";
import SignUpScreen from "./pages/Sign Up/doador.signup";
import SearchShelterScreen from "./pages/Donor/SearchSelter/search.shelter";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LoginPointScreen />} path="/login"></Route>
        <Route element={<SignUpScreen />} path="/cadastro"></Route>
        <Route element={<SearchShelterScreen />} path="/busca/abrigos"></Route>
      </Routes>
    </Router>
  );
}

export default App;
