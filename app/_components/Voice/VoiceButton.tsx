"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useVoiceStore } from "../../_store/voiceStore";

const LazyVoiceNavigation = dynamic(() => import("./VoiceNavigation"), {
  ssr: false,
  loading: () => null,
});

export default function VoiceButton() {
  const isVoiceEnabled = useVoiceStore((state) => state.isVoiceEnabled);
  const setVoiceEnabled = useVoiceStore((state) => state.setVoiceEnabled);

  if (isVoiceEnabled) {
    return <LazyVoiceNavigation autoStart={true} />;
  }

  return (
    <button
      onClick={() => setVoiceEnabled(true)}
      className="fixed bottom-4 right-4 p-2 bg-gray-300 hover:bg-gray-400 text-white rounded-full z-[100]"
      aria-label="음성 인식 켜기"
    >
      <Image
        src="/mic_off.svg"
        alt="음성 인식 켜기"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </button>
  );
}
