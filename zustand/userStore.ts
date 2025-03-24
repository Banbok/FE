import { create } from "zustand";

// 사용자 정보에 대한 인터페이스 정의
interface UserInfo {
  id?: string;
  email: string;
  name: string;
  profileImageUrl: string;
}

// 상태 스토어에 대한 인터페이스 정의
interface UserState {
  user: UserInfo | null;
  isLoggedIn: boolean;
  tokenExpiry: number | null;
  setUser: (userData: UserInfo) => void;
  setToken: (token: string, expiryMinutes?: number) => void;
  logout: () => void;
  initializeFromStorage: () => void;
  checkTokenExpiry: () => boolean; // 토큰 만료 확인 함수 추가
}

const useUserStore = create<UserState>((set, get) => ({
  user: null,
  isLoggedIn: false,
  tokenExpiry: null,

  setUser: (userData: UserInfo) => {
    const { email, name, profileImageUrl } = userData;
    localStorage.setItem(
      "userInfo",
      JSON.stringify({ email, name, profileImageUrl })
    );
    set({ user: userData, isLoggedIn: true });
  },

  setToken: (token: string, expiryMinutes = 60) => {
    const expiryTime = Date.now() + expiryMinutes * 60 * 1000;
    localStorage.setItem("accessToken", token);
    localStorage.setItem("tokenExpiry", expiryTime.toString());
    set({ tokenExpiry: expiryTime });
  },

  logout: () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("tokenExpiry");
    set({ user: null, isLoggedIn: false });
  },

  initializeFromStorage: () => {
    const userInfo = localStorage.getItem("userInfo");
    const tokenExpiry = localStorage.getItem("tokenExpiry");

    if (tokenExpiry) {
      const expiryTime = parseInt(tokenExpiry);

      // 만료 시간 확인
      if (Date.now() > expiryTime) {
        // 만료된 경우 로그아웃 처리
        get().logout();
        return;
      }

      set({ tokenExpiry: expiryTime });
    }

    if (userInfo) {
      set({ user: JSON.parse(userInfo), isLoggedIn: true });
    }
  },

  checkTokenExpiry: () => {
    const { tokenExpiry, logout } = get();

    if (tokenExpiry && Date.now() > tokenExpiry) {
      logout();
      return false; // 토큰 만료됨
    }

    return true; // 토큰 유효함
  },
}));

export default useUserStore;
