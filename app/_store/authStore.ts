import { create } from "zustand";
import { persist } from "zustand/middleware";

import { AuthState } from "../_type/userInfo.type";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      hasHydrated: false,

      fetchUser: async () => {
        set({ isLoading: true });
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/v1/members/me`,
            {
              credentials: "include",
            }
          );

          const contentType = res.headers.get("content-type");
          const text = await res.text();

          if (res.ok && contentType?.includes("application/json")) {
            const data = JSON.parse(text);
            set({ user: data.result });
          } else {
            // 예상된 상황: 로그인 안됨
            set({ user: null });
            console.warn("로그인된 사용자가 아닙니다. user는 null로 설정됨.");
          }
        } catch (error) {
          // 네트워크 오류 등 예상치 못한 경우만 콘솔 출력
          console.error("유저 정보 불러오기 실패:", error);
          set({ user: null });
        } finally {
          set({ isLoading: false, hasHydrated: true });
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
