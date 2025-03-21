import { useEffect } from "react";

import useUserStore from "./zustand/userStore";
import AppRouter from "./router/AppRouter";
import "./App.css";

function App() {
  const checkTokenExpiry = useUserStore((state) => state.checkTokenExpiry);
  const initializeFromStorage = useUserStore(
    (state) => state.initializeFromStorage
  );

  useEffect(() => {
    initializeFromStorage();

    const intervalId = setInterval(() => {
      checkTokenExpiry();
    }, 100000);

    return () => clearInterval(intervalId);
  }, [initializeFromStorage, checkTokenExpiry]);

  return <AppRouter />;
}

export default App;
