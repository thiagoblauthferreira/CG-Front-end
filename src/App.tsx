import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginComponent from "./pages/Login/login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginComponent />} />
    </Routes>
  );
}

export default App;
