import { MutableRefObject } from "react";
import { MapType } from "./map";
import { MessageType } from "./message";

export interface PlayerType {
  id: string;
  name: string;
  direction?: string;
  avatar?: string;
  x: number;
  state?: number;
  y: number;
  roomId: string;
  emoji?: string;
  hasJoinedMeeting?: boolean;
}

export type Position = { x: number | null; y: number | null };

export interface GamePlayContextProps {
  playerId: string | null;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
  setCurrentRoom: any,
  messages: Record<string, MessageType>;
  respawnAction: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  playerRef: any; // Type accordingly to your Firebase database reference
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  players: any;
  currentRoom: MapType;
  currentPlayer: PlayerType;
  clickPositionMap: MutableRefObject<Position>;
}
