import { Metadata } from "next";

import Home from "./_components/sections/Home";

export const metadata: Metadata = {
  title: "Banbok - 코딩테스트 준비를 위한 반복 학습 웹사이트",
  description:
    "Banbok은 코딩테스트, 백준, 프로그래머스 이 외 코딩테스트 사이트의 문제를 반복 학습을 도와주는 웹사이트입니다.",
  keywords: "코딩, 코테, 코딩테스트, 코딩테스트 학습",
  openGraph: {
    title: "Banbok",
    description: "코딩 테스트의 반복 학습을 도와주는 웹 사이트 입니다.",
    url: "https://banbok.vercel.app/",
    images: [
      {
        url: "https://banbok.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Banbok 대표 이미지",
      },
    ],
    siteName: "Banbok",
    locale: "ko_KR",
    type: "website",
  },
};

export default function main() {
  return (
    <main>
      <Home />
    </main>
  );
}
