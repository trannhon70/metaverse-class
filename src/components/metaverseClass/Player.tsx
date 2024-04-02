import { CELL_SIZE } from "@/constant/metaverseClass/config";
import { useGamePlayContext } from "@/hooks/useGamePlayContext";
import { PlayerType } from "@/types/player";
import { useEffect, useMemo, useRef, useState } from "react";

const Player: React.FC<PlayerType> = ({
  x,
  y,
  direction,
  state,
  name,
  avatar,
  id,
  emoji,
}) => {
  const { currentPlayer } = useGamePlayContext();
  const [animation, setAnimation] = useState("3px");
  const directionStyle = useMemo(() => {
    switch (direction) {
      case "top":
        return "-114px";
      case "bottom":
        return "-4px";
      case "left":
        return "-40px";
      case "right":
        return "-77px";
      default:
        return "-4px";
    }
  }, [direction]);
  const clientWidth = useRef<any>();
  window.addEventListener("resize", () => {
    clientWidth.current = document.getElementById("container")?.offsetWidth;
  });
  const [cellSize,setCellSize] = useState<any>(CELL_SIZE)

  useEffect(()=>{
    if(clientWidth.current <= 1024) {
      setCellSize(24)
    }
  },[clientWidth.current])
  useEffect(() => {
    (async () => {
      setAnimation("-23px");
      setTimeout(() => {
        setAnimation("-49px");
      }, 50);
      setTimeout(() => {
        setAnimation("-23px");
      }, 100);
      setTimeout(() => {
        setAnimation("3px");
      }, 150);
    })();
  }, [state]);

  return (
    <div
      style={{
        transform: `translateX(${x * cellSize}px) translateY(${
          y * cellSize
        }px)`,
        width: `${cellSize}px`,
        height: `${cellSize + 5}px`,
      }}
      className="absolute top-0 left-0 duration-300">
      <div
        style={{
          backgroundSize: "80px",
          backgroundPositionY: directionStyle,
          backgroundPositionX: animation,
          backgroundImage: `url(${avatar}.png)`,
          
        }}
        className={`absolute top-0 left-0 w-full h-full`}></div>
      {/* name */}
      <div className="absolute flex items-center gap-1 -top-1 -translate-y-full left-1/2 font-bold -translate-x-1/2 text-xs bg-gray-800/50 text-white px-2 py-0.1 rounded-lg whitespace-nowrap capitalize">
        {id === currentPlayer.id && (
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        )}
        {name}
      </div>
      {/* emoji */}
      {emoji && (
        <div className="absolute flex items-center -top-6 -translate-y-full left-1/2 font-bold -translate-x-1/2 bg-white text-white px-2 py-0.5 rounded-lg text-md">
          {emoji}
        </div>
      )}
    </div>
  );
};

export default Player;
