"use client";

import { useEffect } from "react";
import useUserStore from "../_zustand/userStore";

export default function useTokenExpiryCheck() {
  const checkTokenExpiry = useUserStore((state) => state.checkTokenExpiry);
  const initializeFromStorage = useUserStore(
    (state) => state.initializeFromStorage
  );

  useEffect(() => {
    initializeFromStorage();

    const intervalId = setInterval(() => {
      checkTokenExpiry();
    }, 600000);

    return () => clearInterval(intervalId);
  }, [initializeFromStorage, checkTokenExpiry]);
}
