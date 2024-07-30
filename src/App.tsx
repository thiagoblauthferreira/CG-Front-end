import { AuthProvider } from "./context/Auth";
import { RoutesPage } from "./routes";

function App() {
  return (
    <AuthProvider>
      <RoutesPage />
    </AuthProvider>
  );
}

export default App;
