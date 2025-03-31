"use client";

import { useEffect, useState } from "react";
import useUserStore from "../../_zustand/userStore";
import LoginButton from "../Button/LoginButton";
import LogoutButton from "../Button/LogoutButton";

const LoginStatusButton = () => {
  const { isLoggedIn, initializeFromStorage } = useUserStore();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initializeFromStorage();
    setIsInitialized(true);
  }, [initializeFromStorage]);

  if (!isInitialized) {
    return null;
  }

  return (
    <nav className="flex items-center gap-4">
      {isLoggedIn ? <LogoutButton /> : <LoginButton />}
    </nav>
  );
};

export default LoginStatusButton;
