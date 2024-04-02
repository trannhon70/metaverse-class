import { useGamePlayContext } from "@/hooks/useGamePlayContext";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ZoomMeeting from "./ZoomMeeting";

const MeetingRoom = () => {
  const { setCurrentPlayer } = useGamePlayContext();
  const isOpen = useSelector(
    (state: RootState) => state.meetingRoomSlice.isOpenMeeting
  );
  useEffect(() => {
    isOpen
      ? setCurrentPlayer((prev) => ({ ...prev, hasJoinedMeeting: true }))
      : setCurrentPlayer((prev) => ({ ...prev, hasJoinedMeeting: false }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return <>{isOpen && <ZoomMeeting />}</>;
};

export default MeetingRoom;
