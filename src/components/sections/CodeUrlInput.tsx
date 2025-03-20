import { useState } from "react";
import { SectionProps } from "../../interfaces/sectionprops";

export const CodeUrlInput: React.FC<SectionProps> = ({
  isActive,
  onClick,
  id,
}) => {
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
      />
      <button
        onClick={handleSubmit}
        className="px-2 py-2 border border-blue-500 rounded-r-2xl bg-blue-500 text-white hover:bg-blue-600 transition-all"
      >
        전송
      </button>
    </section>
  );
};
