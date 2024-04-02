/* eslint-disable react-hooks/exhaustive-deps */
import { CELL_SIZE } from "@/constant/metaverseClass/config";
import { backgroundMapImage } from "@/constant/metaverseClass/maps/background";
import { useCheckPath } from "@/hooks/useCheckPath";
import { useGamePlayContext } from "@/hooks/useGamePlayContext";
import { RootState } from "@/redux/store";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GridTemplate from "./GridTemplate";
import PlayersList from "./PlayersList";
const CAMERA_LIMIT = useCheckPath({ str: "xmas" })
  ? useCheckPath({ str: "xmas_goal" })
    ? 2
    : 1
  : 4;
const GameContainer = () => {
  const { currentRoom, players, playerId } = useGamePlayContext();
  const isLoading = useSelector((state: RootState) => state.map.isLoading);
  const isXmas = useCheckPath({ str: "xmas" });
  const [scale, setScale] = useState(1);
  const [cameraPosition, setCameraPosition] = useState(() => {
    if (useCheckPath({ str: "xmas_entrance" })) {
      return { x: 31, y: 41 };
    } else if (useCheckPath({ str: "xmas_room" })) {
      return { x: 30, y: 30 };
    } else if (useCheckPath({ str: "xmas_goal" })) {
      return { x: 17, y: 33 };
    } else if (useCheckPath({ str: "xmas_final" })) {
      return { x: 36, y: 41 };
    } else return { x: 0, y: 0 };
  });
  useEffect(() => {
    const container = document.getElementById("container");
    if (container) {
      container.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
          isXmas
            ? setScale((sc) => (sc - 0.06 < 0.4 ? 0.4 : sc - 0.1))
            : setScale((sc) => (sc - 0.06 < 0.8 ? 0.8 : sc - 0.1));
        } else {
          setScale((sc) => (sc + 0.1 > 2 ? 2 : sc + 0.1));
        }
      });
    }
  }, [cameraPosition?.x, cameraPosition?.y]);
  useEffect(() => {
    isXmas && setScale(1.3);
  }, [isXmas, window.location.href]);
  useEffect(() => {
    try {
      const gameContainer = document.getElementById(
        "game-container"
      ) as HTMLDivElement;

      if (!gameContainer) return;

      const containerRect = gameContainer.getBoundingClientRect();

      if (playerId && scale > (isXmas ? 0.5 : 1.45)) {
        // You may need to adjust the values for x and y based on your requirements
        const x =
          players[playerId]?.x * CELL_SIZE - containerRect.width / (2 * scale);
        const y =
          players[playerId]?.y * CELL_SIZE - containerRect.height / (2 * scale);
        const centerX = currentRoom.cols / 2;
        const centerY = currentRoom.rows / 2;
        const isPlayerInRect =
          players[playerId]?.x >= centerX - CAMERA_LIMIT &&
          players[playerId]?.x <= centerX + CAMERA_LIMIT &&
          players[playerId]?.y >= centerY - CAMERA_LIMIT &&
          players[playerId]?.y <= centerY + CAMERA_LIMIT;
        if (isPlayerInRect) {
          setCameraPosition({ x, y });
          // console.log("in");
        } else {
          // console.log("out");
          setCameraPosition({ x, y });
        }
      } else {
        setCameraPosition({ x: 0, y: 0 });
      }
    } catch (error) {
      console.log(error);
    }
  }, [playerId && players[playerId], cameraPosition?.x, cameraPosition?.y]);
  return (
    <div
      id="container"
      className={classNames(
        "w-full h-full relative top-0 flex justify-center items-center duration-500 hover:cursor-pointer",
        isLoading ? "invisible opacity-0" : "visible opacity-100"
      )}
    >
      <div
        id="game-container"
        style={{
          width: `${currentRoom.cols * CELL_SIZE}px`,
          height: `${currentRoom.rows * CELL_SIZE}px`,
          transform: `scale(${scale}) translate(${-(
            cameraPosition.x / scale
          )}px, ${-cameraPosition.y / scale}px)`,
        }}
        className={classNames(
          `bg-no-repeat bg-center bg-cover absolute duration-[0.5s] transition-all ease-linear `
        )}
      >
        {backgroundMapImage.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt="bg"
            className={classNames(
              "absolute top-0 left-0 w-full h-full object-cover",
              currentRoom.type === item.id ? "visible" : "invisible"
            )}
          />
        ))}

        <GridTemplate />
        <PlayersList />
      </div>
    </div>
  );
};

export default GameContainer;
