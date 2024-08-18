import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { AuthRoute } from "./Auth/AuthRoute";
import { PrivateRoute } from "./Auth/PrivateRoute";
import { Layout } from "../layout";

import LoginPointScreen from "../pages/auth/login";
import SignUpScreen from "../pages/auth/register";
import HomeScreen from "../pages/home";
import SheltersScreen from "../pages/shelters";
import CoordinatorsScreen from "../pages/shelters/id";
import DistribuitionPointsScreen from "../pages/distribuition-points";
import ProductsScreen from "../pages/distribuition-points/id";
import { PrivateRoleRoute } from "./Auth/PrivateRoleRoute";

export function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route element={<LoginPointScreen />} path="/"></Route>
          <Route element={<SignUpScreen />} path="/register"></Route>
        </Route>

        <Route element={<PrivateRoute />}>
        </Route>

        <Route element={<Layout />}>
          <Route element={<PrivateRoleRoute roles={["coordinator"]} />}></Route>
          <Route element={<PrivateRoleRoute roles={["donor"]} />}></Route>

          <Route path="/home" element={<HomeScreen />} />
          <Route path="/shelters" element={<SheltersScreen />} />
          <Route path="/shelters/:id" element={<CoordinatorsScreen />} />
          <Route path="/distribuition-points" element={<DistribuitionPointsScreen />} />
          <Route path="/distribuition-points/:id" element={<ProductsScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}
