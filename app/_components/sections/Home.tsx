"use client";

import { Title } from "./Title";
import { CodeUrlInput } from "./CodeUrlInput";
import { useScrollPosition } from "../../_hooks/useScrollPosition";

const Home = () => {
  const activeSection = useScrollPosition();

  // 🔽 클릭 시 다음 섹션으로 이동하는 함수
  const scrollToNextSection = () => {
    const sections = [
      document.getElementById("title-section"),
      document.getElementById("input-section"),
    ].filter((section): section is HTMLElement => section !== null);

    if (activeSection < sections.length - 1) {
      sections[activeSection + 1].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <Title
        isActive={activeSection === 0}
        onClick={scrollToNextSection}
        id="title-section"
      />
      <CodeUrlInput
        isActive={activeSection === 1}
        onClick={scrollToNextSection}
        id="input-section"
      />
    </div>
  );
};

export default Home;
