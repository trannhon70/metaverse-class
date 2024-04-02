import { useGamePlayContext } from "@/hooks/useGamePlayContext";
import { PlayerType } from "@/types/player";
import { useMemo } from "react";
import Player from "./Player";

const PlayersList = () => {
  const { players } = useGamePlayContext();
  const playersArr = useMemo<PlayerType[]>(
    () => Object.values(players),
    [players]
  );

  return (
    <>
      {playersArr?.map((item: PlayerType) => (
        <Player
          key={item.id}
          id={item.id}
          x={item.x}
          y={item.y}
          name={item.name}
          state={item.state}
          avatar={item.avatar}
          direction={item.direction}
          roomId={item.roomId}
          emoji={item.emoji}
        />
      ))}
    </>
  );
};

export default PlayersList;
