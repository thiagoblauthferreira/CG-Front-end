import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { AuthRoute } from "./Auth/AuthRoute";
import { PrivateRoute } from "./Auth/PrivateRoute";
import { Layout } from "../layout";

import LoginPointScreen from "../pages/auth/login";
import SignUpScreen from "../pages/auth/register";
import HomeScreen from "../pages/home";
import SheltersScreen from "../pages/shelters";
import DistribuitionPointsScreen from "../pages/distribuition-points";
import ProductsScreen from "../pages/products";

export function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route element={<LoginPointScreen />} path="/"></Route>
          <Route element={<SignUpScreen />} path="/register"></Route>
        </Route>

        <Route element={<Layout />}>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/shelters" element={<SheltersScreen />} />
          <Route path="/distribuition-points" element={<DistribuitionPointsScreen />} />
          <Route path="/distribuition-points/:id" element={<ProductsScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}
