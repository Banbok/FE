import { Metadata } from "next";

import Home from "./_components/sections/Home";
import VoiceNavigation from "./_components/VoiceNavigation";

export const metadata: Metadata = {
  title: "Banbok",
  description: "코딩 테스트의 반복 학습을 도와주는 웹 사이트 입니다.",
  keywords: "코딩, 코테, 코딩테스트, 코딩테스트 학습",
  openGraph: {
    title: "Banbok",
    description: "코딩 테스트의 반복 학습을 도와주는 웹 사이트 입니다.",
  },
};

export default function main() {
  return (
    <main>
      <Home />
      <VoiceNavigation />
    </main>
  );
}
