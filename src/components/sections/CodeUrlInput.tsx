import { useState } from "react";
import { SectionProps } from "../../interfaces/sectionprops";

export const CodeUrlInput: React.FC<SectionProps> = ({ isActive }) => {
  const [codeurl, setCodeurl] = useState("");

  const handleSubmit = () => {
    if (!codeurl.trim()) return;

    alert("URL 저장 완료" + codeurl);

    setCodeurl("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div
      className={`h-screen w-full flex flex-col justify-center items-center bg-blue-100 transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-50"
      }`}
    >
      <input
        type="text"
        placeholder="해결한 코테 링크를 작성해주세요..."
        value={codeurl}
        onChange={(e) => setCodeurl(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSubmit}
        className="p-2 rounded cursor-pointer bg-blue-500 text-white hover:bg-blue-600"
      >
        전송
      </button>
    </div>
  );
};
