import React, { useState } from "react";

export default function Home() {
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
    <div className="w-full overflow-x-auto">
      <div className="flex flex-col min-w-[600px] md:min-w-[800px] items-center justify-center min-h-screen p-4 bg-gray-100 gap-4">
        <h1 className="text-3xl font-bold mr-4">반복</h1>
        <h2 className="text-lg text-gray-600 mr-4 text-center">
          해결한 코딩테스트 문제의 링크를 등록하고 <br />
          1일, 3일, 7일, 21일마다 알림을 받아 반복해서 문제를 해결해보세요!!
        </h2>
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
    </div>
  );
}
