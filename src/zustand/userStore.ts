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
  setUser: (userData: UserInfo) => void;
  setToken: (token: string) => void;
  logout: () => void;
  initializeFromStorage: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,

  setUser: (userData: UserInfo) => {
    const { email, name, profileImageUrl } = userData;
    localStorage.setItem(
      "userInfo",
      JSON.stringify({ email, name, profileImageUrl })
    );
    set({ user: userData, isLoggedIn: true });
  },

  setToken: (token: string) => {
    localStorage.setItem("accessToken", token);
  },

  logout: () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("accessToken");
    set({ user: null, isLoggedIn: false });
  },

  initializeFromStorage: () => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      set({ user: JSON.parse(userInfo), isLoggedIn: true });
    }
  },
}));

export default useUserStore;
