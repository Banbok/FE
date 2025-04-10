import { create } from "zustand";
import { persist } from "zustand/middleware";

import { AuthState } from "../_type/userInfo.type";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,

      fetchUser: async () => {
        set({ isLoading: true });
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/v1/members/me`,
            {
              credentials: "include",
            }
          );
          if (!res.ok) throw new Error("유저 정보를 가져오는데 실패했어요.");
          const data = await res.json();
          set({ user: data.result });
        } catch (error) {
          set({ user: null });
          console.error("유저 정보 불러오기 실패:", error);
        } finally {
          set({ isLoading: false });
        }
      },

      logout: async () => {
        try {
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/logout`, {
            method: "POST",
            credentials: "include",
          });
          set({ user: null });
        } catch (error) {
          console.error("로그아웃 실패:", error);
        }
      },
    }),
    {
      name: "auth-storage", // localStorage key 이름
      partialize: (state) => ({ user: state.user }), // 저장할 항목만 선택
    }
  )
);
