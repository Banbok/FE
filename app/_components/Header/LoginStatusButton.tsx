"use client";

import useUserStore from "../../_zustand/userStore";
import LoginButton from "../Button/LoginButton";
import LogoutButton from "../Button/LogoutButton";

const LoginStatusButton = () => {
  const { isLoggedIn } = useUserStore();

  return (
    <nav className="flex items-center gap-4">
      {isLoggedIn ? <LogoutButton /> : <LoginButton />}
    </nav>
  );
};

export default LoginStatusButton;
