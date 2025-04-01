"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import useUserStore from "@/app/_zustand/userStore";

export default function ProfilePage() {
  const router = useRouter();
  const { user, isLoggedIn, initializeFromStorage, checkTokenExpiry } =
    useUserStore();

  // 상태 초기화
  useEffect(() => {
    initializeFromStorage();
  }, []);

  // 로그인 상태 및 토큰 만료 체크
  useEffect(() => {
    // 상태가 초기화된 후에만 실행
    if (isLoggedIn === false) return;

    if (!isLoggedIn || !checkTokenExpiry()) {
      router.push("/login");
    }
  }, [isLoggedIn, checkTokenExpiry, router]);

  if (!user) return <p>로딩 중...</p>;

  const userId = user.email.split("@")[0];

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">내 프로필</h1>
      <div className="flex items-center gap-4">
        <img
          src={user.profileImageUrl}
          alt="프로필 이미지"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-gray-600">@{userId}</p>
        </div>
      </div>
    </div>
  );
}
