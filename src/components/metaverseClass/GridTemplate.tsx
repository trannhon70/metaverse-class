import { COLS } from "@/constant/metaverseClass/config";
import { useCheckPath } from "@/hooks/useCheckPath";
import { useGamePlayContext } from "@/hooks/useGamePlayContext";
// import ModalPassword from "@/pages/Home/components/ModalPassword";
import QuizModal from "@/pages/Home/components/QuizModal";
import { setOpenMeeting } from "@/redux/slices/meetingRoomSlice";
import { setFirebasePlayer } from "@/utils/firebase/player";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
const GridTemplate = () => {
  const {
    currentRoom,
    clickPositionMap,
    currentPlayer,
    players,
    setCurrentRoom,
  } = useGamePlayContext();
  const COLS_C = useCheckPath({ str: "xmas" }) ? 60 : COLS;

  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentMap, setCurrentMap] = useState<any>(currentRoom.map);
  const [renderMap, setRenderMap] = useState(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const temp: Array<{ x: number; y: number; value: any }> = [];
    currentRoom.map.forEach((i, index) =>
      i.forEach((item, j) => temp.push({ x: index, y: j, value: item }))
    );
    return temp;
  });
  useEffect(() => {
    currentPlayer.hasJoinedMeeting
      ? audioRef.current?.pause()
      : audioRef.current?.play();
  }, [currentPlayer.hasJoinedMeeting]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const temp: Array<{ x: number; y: number; value: any }> = [];
    currentRoom.map.forEach((i, index) =>
      i.forEach((item, j) => temp.push({ x: index, y: j, value: item }))
    );
    setRenderMap(temp);
  }, [currentRoom.map, currentMap]);
  const handleClickItem = (x: number, y: number) => {
    if (currentRoom.actions?.[`${y},${x}`].type === "JOIN_MEETING") {
      // alert("show");
      dispatch(setOpenMeeting(true));
      setFirebasePlayer(currentPlayer.id, {
        ...currentPlayer,
        hasJoinedMeeting: true,
      });
    }
  };
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${COLS_C}, minmax(0, 1fr))`,
      }}
      className="absolute inset-0 grid"
    >
      {renderMap?.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            clickPositionMap.current.x = item.y;
            clickPositionMap.current.y = item.x;
            // console.log("item", item);
            // const newMap = JSON.parse(JSON.stringify(renderMap));
            // if (newMap[index].value === 1) {
            //   newMap[index].value = 0;
            //   currentRoom.map[item.x][item.y] = 0;
            // } else {
            //   newMap[index].value = 1;
            //   currentRoom.map[item.x][item.y] = 1;
            // }
            // setRenderMap(newMap);
            // console.log("newMap", currentRoom.map);
          }}
          className={classNames(
            `aspect-square relative flex items-center justify-center`
            // outline outline-1 outline-white/30 ${item.value === 1 && "bg-red-600/50"}
            // "outline outline-1 outline-white/30",
            // item.value === 1 && "bg-red-600/50"x
          )}
        >
          {currentRoom.actions?.[`${item.y},${item.x}`] && (
            <div className="w-fit h-full relative">
              {currentRoom.actions?.[`${item.y},${item.x}`]?.type ==
                "POP_UP_QUIZ" &&
                Math.abs(item.y - players?.[currentPlayer?.id]?.x) < 2 &&
                Math.abs(item.x - players?.[currentPlayer?.id]?.y) < 2 && (
                  <QuizModal
                    question={
                      currentRoom.actions?.[`${item.y},${item.x}`]?.question
                    }
                    answer={
                      currentRoom.actions?.[`${item.y},${item.x}`]?.answer
                    }
                    isLowerCase={
                      currentRoom.actions?.[`${item.y},${item.x}`]?.isLowerCase
                    }
                    isCorrect={(value: any) => {
                      if (value == true) {
                        let actiont: any = currentRoom.actions;
                        actiont[`${item.y},${item.x}`] = {};
                        let mapt: any = currentRoom.map;
                        mapt[item.x][item.y] = 0;
                        setCurrentRoom((prev: any) => ({
                          ...prev,
                          map: mapt,
                          actions: actiont,
                        }));
                        setCurrentMap(mapt);
                      } else {
                        let actionf: any = { ...currentRoom.actions };
                        actionf[`${item.y},${item.x}`] = {
                          ...currentRoom.actions?.[`${item.y},${item.x}`],
                          tooltip: "Incorrect! Press x to try again!",
                        };
                        setCurrentRoom((prev: any) => ({
                          ...prev,
                          actions: actionf,
                        }));
                      }
                    }}
                    isQuiz={
                      currentRoom.actions?.[`${item.y},${item.x}`]?.isQuiz
                    }
                    reward={
                      currentRoom.actions?.[`${item.y},${item.x}`]?.reward
                    }
                  />
                )}
              {currentRoom.actions?.[`${item.y},${item.x}`]?.label && (
                <p className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-md px-2 py-0.5 font-bold text-xs ring-1 whitespace-nowrap opacity-70">
                  {currentRoom.actions?.[`${item.y},${item.x}`]?.label}
                </p>
              )}

              {/* <ModalPassword /> */}

              {currentRoom.actions?.[`${item.y},${item.x}`].image && (
                <img
                  id={currentRoom.actions?.[`${item.y},${item.x}`].id}
                  src={currentRoom.actions?.[`${item.y},${item.x}`].image}
                  className={classNames(
                    "w-full h-full object-contain rounded-sm",
                    currentRoom.actions?.[`${item.y},${item.x}`].type ===
                      "POP_UP_QUESTION" ||
                      ("POP_UP_QUIZ" && "scale-[1.2]"),
                    currentRoom.actions?.[`${item.y},${item.x}`]?.styling
                  )}
                  onClick={() => {
                    handleClickItem(item.x, item.y);
                  }}
                  alt="alt"
                />
              )}
              {currentRoom.actions?.[`${item.y},${item.x}`].tooltip && (
                <span
                  className={classNames(
                    "hidden left-0 bg-[#ffffffc7] whitespace-nowrap text-[0.5rem]  lg:text-xs w-fit absolute -top-8 font-bold p-1 px-2 rounded-full -translate-x-1/3 tooptip",
                    currentRoom.actions?.[`${item.y},${item.x}`].type ===
                      "POP_UP_QUESTION" ||
                      ("POP_UP_QUIZ" && "-top-10")
                  )}
                >
                  {currentRoom.actions?.[`${item.y},${item.x}`].tooltip}
                </span>
              )}
            </div>
          )}
        </div>
      ))}
      <audio ref={audioRef} src={currentRoom.sound} autoPlay loop />
    </div>
  );
};

export default GridTemplate;
