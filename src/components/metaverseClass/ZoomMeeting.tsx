import ZoomVideoSdk from "@/components/zoomSdk/ZoomVideoSdk";
import { useGamePlayContext } from "@/hooks/useGamePlayContext";
import { db } from "@/lib/firebase";
import { generateZoomJWT } from "@/utils/generateZoomJWT";
import { child, get, ref } from "firebase/database";
import { useEffect, useMemo, useState } from "react";

const ZoomMeeting = () => {
  const { currentPlayer } = useGamePlayContext();
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isFirstPerson, setIsFirstPerson] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    get(child(ref(db), `players`))
      .then((snapshot) => {
        const playersInCurrentMeeting = Object.values(snapshot.val()).filter(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (item: any) =>
            item.roomId === currentPlayer.roomId && item.hasJoinedMeeting
        );
        if (playersInCurrentMeeting.length === 1) {
          setIsFirstPerson(true);
        }
      })
      .finally(() => {
        setIsLoading(false);
        setHasLoaded(true);
      });
  }, [currentPlayer.roomId]);

  const devConfig = useMemo(
    () => ({
      sdkKey: "",
      sdkSecret: "",
      webEndpoint: "zoom.us",
      topic: currentPlayer.roomId,
      name: currentPlayer.name,
      password: "",
      signature: generateZoomJWT({
        topic: currentPlayer.roomId as string,
        userIdentity: currentPlayer.name,
        password: "",
        roleType: isFirstPerson ? 1 : 0,
      }),
      sessionKey: "",
      userIdentity: "",
      role: isFirstPerson ? 1 : 0,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentPlayer.name, currentPlayer.roomId, isLoading, isFirstPerson]
  );

  return (
    <>{!isLoading && hasLoaded && <ZoomVideoSdk devConfig={devConfig} />}</>
  );
};

export default ZoomMeeting;
