import AppRouter from "./router/AppRouter";
import "./App.css";
import useTokenExpiryCheck from "./hooks/useTokenExpiryCheck";

function App() {
  useTokenExpiryCheck();

  return <AppRouter />;
}

export default App;
