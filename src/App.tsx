import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPointScreen from "./pages/auth/Login/login";
import SignUpScreen from "./pages/auth/Sign Up/signup";
import { PrivateRoute } from "./pages/private/ControledRoutes";

import { Layout } from "./layout";
import { Home } from "./pages/private/homeDoador/home";
import SheltersScreen from "./pages/shelters";
import DistribuitionPointsScreen from "./pages/distribuition-points";
import ProductsScreen from "./pages/distribuition-points/products";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LoginPointScreen />} path="/"></Route>
        <Route element={<SignUpScreen />} path="/cadastro"></Route>

        <Route element={<Layout />}>
          <Route path="/shelters" element={<SheltersScreen />} />
          <Route path="/distribuition-points" element={<DistribuitionPointsScreen />} />
          <Route path="/distribuition-points/:id" element={<ProductsScreen />} />
        </Route>
        <Route element={<PrivateRoute />}>
          {/*Rotas privadas vão aqui dentro*/}
          <Route path="/home" element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
