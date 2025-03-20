import { useState } from "react";
import { SectionProps } from "../../interfaces/sectionprops";

export const CodeUrlInput: React.FC<SectionProps> = ({
  isActive,
  onClick,
  id,
}) => {
  const [codeurl, setCodeurl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!codeurl.trim()) return;

    try {
      setIsLoading(true);

      // 로컬 스토리지에서 토큰 가져오기 (토큰 인증 방식을 사용하는 경우)
      const token = localStorage.getItem("accessToken");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/v1/problems`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify({ link: codeurl }),
          // CORS 문제 해결을 위한 설정
          mode: "cors",
        }
      );

      if (response.ok) {
        alert("URL 저장 완료: " + codeurl);
        setCodeurl("");
      } else {
        const errorData = await response.json();
        alert(
          "오류가 발생했습니다: " + (errorData.message || response.statusText)
        );
      }
    } catch (error) {
      console.error("서버 요청 실패:", error);
      alert("서버 요청 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section
      id={id}
      className={`h-screen w-full flex justify-center items-center bg-white transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-50"
      }`}
      onClick={onClick}
    >
      <input
        type="text"
        placeholder="해결한 코테 링크를 작성해주세요..."
        value={codeurl}
        onChange={(e) => setCodeurl(e.target.value)}
        onKeyDown={handleKeyPress}
        className="w-64 p-2 border-t border-l border-b border-black rounded-l-2xl focus:outline-none"
        disabled={isLoading}
      />
      <button
        onClick={handleSubmit}
        className={`px-2 py-2 border border-blue-500 rounded-r-2xl bg-blue-500 text-white transition-all ${
          isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "전송 중..." : "전송"}
      </button>
    </section>
  );
};
