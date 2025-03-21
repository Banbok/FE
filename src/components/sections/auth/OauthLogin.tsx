import kakao_icon from "../../../assets/icon/kakao_icon.svg";
import google_icon from "../../../assets/icon/google_icon.svg";
import naver_icon from "../../../assets/icon/naver_icon.svg";

export function KakaoLogin() {
  const handleKakaoLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/v1/oauth/kakao`;
  };

  return (
    <button
      onClick={handleKakaoLogin}
      className="mt-2 p-2 w-full flex items-center justify-center gap-2 border-2 border-yellow-300 rounded-lg hover:bg-yellow-300 transition-colors"
      aria-label="카카오 로그인"
    >
      <div className="transform scale-150">
        <img src={kakao_icon} alt="카카오 아이콘" className="w-5 h-5" />
      </div>
      <span>카카오 로그인</span>
    </button>
  );
}

export function NaverLogin() {
  const handleNaverLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/v1/oauth/naver`;
  };

  return (
    <button
      onClick={handleNaverLogin}
      className="mt-2 p-2 w-full flex items-center justify-center gap-2 border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
      aria-label="네이버 로그인"
    >
      <img src={naver_icon} alt="네이버 아이콘" className="w-5 h-5" />
      <span>네이버 로그인</span>
    </button>
  );
}

export function GoogleLogin() {
  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/v1/oauth/google`;
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="mt-2 p-2 w-full flex items-center justify-center gap-2 border-2 border-red-400 rounded-lg hover:bg-red-400 hover:text-white transition-colors"
      aria-label="구글 로그인"
    >
      <img src={google_icon} alt="구글 아이콘" className="w-5 h-5" />
      <span>구글 로그인</span>
    </button>
  );
}

// // 2
// import apiClient from "../../../api/api";

// export default function KakaoLogin() {
//   // 카카오 로그인 처리 함수
//   const handleKakaoLogin = async () => {
//     // 로그인 후 리디렉션을 위해 현재 경로 저장
//     const currentPath = window.location.pathname;
//     if (currentPath !== "/login" && currentPath !== "/oauth/kakao/callback") {
//       localStorage.setItem("redirectAfterLogin", currentPath);
//     }

//     try {
//       // GET 요청으로 로그인 URL 얻기
//       const response = await apiClient.get(`/v1/oauth/kakao`);
//       console.log(response);

//       // 응답에서 리다이렉트 URL을 받아서 이동
//       if (response.data && response.data.redirectUrl) {
//         window.location.href = response.data.redirectUrl;
//       } else {
//         console.error("리다이렉트 URL을 찾을 수 없습니다.");
//       }
//     } catch (error) {
//       console.error("로그인 요청 중 오류 발생:", error);
//     }
//   };

//   return (
//     <button
//       onClick={handleKakaoLogin}
//       className="mt-2 p-2 w-full flex items-center justify-center gap-2 border-2 border-yellow-300 rounded-lg hover:bg-yellow-300 transition-colors"
//       aria-label="카카오 로그인"
//     >
//       <span>카카오로 로그인하기</span>
//     </button>
//   );
// }

// 3

// import { AxiosError } from "axios"; // ✅ AxiosError 타입 추가

// import apiClient from "../../../api/api";

// export default function KakaoLogin() {
//   // 카카오 로그인 처리 함수
//   const handleKakaoLogin = async () => {
//     // 로그인 후 리디렉션을 위해 현재 경로 저장
//     const currentPath = window.location.pathname;
//     if (currentPath !== "/login" && currentPath !== "/oauth/kakao/callback") {
//       localStorage.setItem("redirectAfterLogin", currentPath);
//     }

//     try {
//       // GET 요청으로 로그인 URL 얻기
//       const response = await apiClient.get(`/v1/oauth/kakao`);
//       console.log("응답값", response);

//       // 응답에서 리다이렉트 URL을 받아서 이동
//       if (response.data && response.data.redirectUrl) {
//         window.location.href = response.data.redirectUrl;
//       } else {
//         console.error("리다이렉트 URL을 찾을 수 없습니다.");
//       }
//     } catch (error: unknown) {
//       // ✅ error가 AxiosError인지 확인 후 타입 단언
//       const axiosError = error as AxiosError;

//       console.error("로그인 요청 중 오류 발생:", axiosError);

//       if (axiosError.response) {
//         console.error("🔴 서버 응답 데이터:", axiosError.response.data);
//         console.error("🟠 서버 응답 상태 코드:", axiosError.response.status);
//         console.error("🟡 서버 응답 헤더:", axiosError.response.headers);
//       } else if (axiosError.request) {
//         console.error(
//           "⚠️ 요청은 보내졌지만 응답을 받지 못함:",
//           axiosError.request
//         );
//       } else {
//         console.error("❌ 요청 설정 중 오류 발생:", axiosError.message);
//       }

//       console.error(
//         "📌 전체 오류 객체:",
//         axiosError.toJSON ? axiosError.toJSON() : axiosError
//       );
//     }
//   };

//   return (
//     <button
//       onClick={handleKakaoLogin}
//       className="mt-2 p-2 w-full flex items-center justify-center gap-2 border-2 border-yellow-300 rounded-lg hover:bg-yellow-300 transition-colors"
//       aria-label="카카오 로그인"
//     >
//       <span>카카오로 로그인하기</span>
//     </button>
//   );
// }
