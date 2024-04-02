/* eslint-disable */
import { MediaStream } from "@/lib/zoomVideoSdk";
import React from "react";
interface MediaContext {
  audio: {
    encode: boolean;
    decode: boolean;
  };
  video: {
    encode: boolean;
    decode: boolean;
  };
  share: {
    encode: boolean;
    decode: boolean;
  };
  mediaStream: MediaStream | null;
}
export default React.createContext<MediaContext>(null as any);
