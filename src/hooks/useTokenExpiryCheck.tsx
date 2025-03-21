import { useEffect } from "react";
import useUserStore from "../zustand/userStore";

export default function useTokenExpiryCheck() {
  const checkTokenExpiry = useUserStore((state) => state.checkTokenExpiry);
  const initializeFromStorage = useUserStore(
    (state) => state.initializeFromStorage
  );

  useEffect(() => {
    // 앱 시작 시 로컬 스토리지에서 사용자 정보 초기화
    initializeFromStorage();

    // 주기적으로 토큰 만료 확인
    const intervalId = setInterval(() => {
      checkTokenExpiry();
    }, 60000);

    return () => clearInterval(intervalId);
  }, [initializeFromStorage, checkTokenExpiry]);
}
