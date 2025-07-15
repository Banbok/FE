"use client";

import dynamic from "next/dynamic";

const VoiceNavigation = dynamic(() => import("./VoiceNavigation"), {
  ssr: false,
  loading: () => null,
});

export default function VoiceNavigationWrapper() {
  return <VoiceNavigation />;
}
