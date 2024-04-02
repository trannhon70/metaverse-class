import { GamePlayContext } from "@/contexts/GamePlayContext";
import { GamePlayContextProps } from "@/types/player";
import { useContext } from "react";

export const useGamePlayContext = (): GamePlayContextProps => {
  const context = useContext(GamePlayContext);
  if (!context) {
    throw new Error("useGamePlayContext must be used within a PlayerProvider");
  }
  return context;
};
