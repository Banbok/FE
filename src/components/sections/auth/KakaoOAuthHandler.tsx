import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useUserStore from "../../../zustand/userStore";

export default function KakaoOAuthHandler() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);

  useEffect(() => {
    const handleOAuthRedirect = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        console.log("추출된 코드:", code);

        if (!code) {
          throw new Error("인증 코드를 찾을 수 없습니다.");
        }

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/v1/oauth/login/kakao?code=${code}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("로그인 처리 중 오류가 발생했습니다.");
        }

        const data = await response.json();

        if (data.token) {
          setToken(data.token);
        }

        if (data.userInfo) {
          setUser(data.userInfo);
        }

        navigate("/"); // 메인 페이지로 이동
      } catch (err) {
        console.error("OAuth 처리 오류:", err);

        // 타입 검사를 추가하여 err.message 안전하게 접근
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }
      } finally {
        setLoading(false);
      }
    };

    handleOAuthRedirect();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>로그인 처리 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-red-500">오류가 발생했습니다: {error}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          로그인 페이지로 돌아가기
        </button>
      </div>
    );
  }

  return null;
}
