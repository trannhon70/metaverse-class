/* eslint-disable */
import { ZoomClient } from "@/lib/zoomVideoSdk";
import { useCallback, useEffect, useState } from "react";
export function useActiveVideo(zmClient: ZoomClient) {
  const [activeVideo, setActiveVideo] = useState<number>(0);
  const [activeSpeaker, setActiveSpeaker] = useState<number>(0);
  const onVideoActiveChange = useCallback((payload: any) => {
    const { state, userId } = payload;
    if (state === "Active") {
      setActiveVideo(userId);
    } else if (state === "Inactive") {
      setActiveVideo(0);
    }
  }, []);
  const onActiveSpeakerChange = useCallback((payload: any) => {
    if (Array.isArray(payload) && payload.length > 0) {
      const { userId } = payload[0];
      setActiveSpeaker(userId);
    }
  }, []);
  useEffect(() => {
    zmClient.on("video-active-change", onVideoActiveChange);
    zmClient.on("active-speaker", onActiveSpeakerChange);
    return () => {
      zmClient.off("video-active-change", onVideoActiveChange);
      zmClient.off("active-speaker", onActiveSpeakerChange);
    };
  }, [zmClient, onVideoActiveChange, onActiveSpeakerChange]);
  return activeVideo || activeSpeaker;
}
