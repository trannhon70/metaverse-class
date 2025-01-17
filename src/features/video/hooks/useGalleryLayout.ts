import { MediaStream, ParticipantType, ZoomClient } from "@/lib/zoomVideoSdk";
import { MutableRefObject, useCallback, useEffect, useState } from "react";
import { getVideoLayout } from "../video-layout-helper";
import { CellLayout, Dimension, Pagination } from "../video-types";
import { useParticipantsChange } from "./useParticipantsChange";
import { useRenderVideo } from "./useRenderVideo";
/**
 * Default order of video:
 *  1. video's participants first
 *  2. self on the second position
 */
export function useGalleryLayout(
  zmClient: ZoomClient,
  mediaStream: MediaStream | null,
  isVideoDecodeReady: boolean,
  videoRef: MutableRefObject<HTMLCanvasElement | null>,
  dimension: Dimension,
  pagination: Pagination
) {
  const [visibleParticipants, setVisibleParticipants] = useState<
    ParticipantType[]
  >([]);
  const [layout, setLayout] = useState<CellLayout[]>([]);
  const [subscribedVideos, setSubscribedVideos] = useState<number[]>([]);
  const { page, pageSize, totalPage, totalSize } = pagination;
  let size = pageSize;
  if (page === totalPage - 1) {
    size = Math.min(size, totalSize % pageSize || size);
  }

  useEffect(() => {
    setLayout(getVideoLayout(dimension.width, dimension.height, size));
  }, [dimension, size]);

  const onParticipantsChange = useCallback(
    (participants: ParticipantType[]) => {
      const currentUser = zmClient.getCurrentUserInfo();
      if (currentUser && participants.length > 0) {
        let pageParticipants: ParticipantType[] = [];
        if (participants.length === 1) {
          pageParticipants = participants;
        } else {
          pageParticipants = participants
            .filter((user) => user.userId !== currentUser.userId)
            .sort(
              (user1, user2) => Number(user2.bVideoOn) - Number(user1.bVideoOn)
            );
          pageParticipants.splice(1, 0, currentUser);
          pageParticipants = pageParticipants.filter(
            (_user, index) => Math.floor(index / pageSize) === page
          );
        }
        setVisibleParticipants(pageParticipants);
        const videoParticipants = pageParticipants
          .filter((user) => user.bVideoOn)
          .map((user) => user.userId);
        setSubscribedVideos(videoParticipants);
      }
    },
    [zmClient, page, pageSize]
  );
  useParticipantsChange(zmClient, onParticipantsChange, layout);

  useRenderVideo(
    mediaStream,
    isVideoDecodeReady,
    videoRef,
    layout,
    subscribedVideos,
    visibleParticipants,
    zmClient.getCurrentUserInfo()?.userId
  );
  return {
    visibleParticipants,
    layout,
  };
}
