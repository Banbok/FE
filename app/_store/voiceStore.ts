import { create } from "zustand";
import { persist } from "zustand/middleware";

import { VoiceState } from "./../_type/speechRecognition.type";

export const useVoiceStore = create<VoiceState>()(
  persist(
    (set) => ({
      isVoiceEnabled: false,
      setVoiceEnabled: (enabled) => set({ isVoiceEnabled: enabled }),
    }),
    {
      name: "voice-storage",
    }
  )
);
