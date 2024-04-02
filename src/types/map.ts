export type MapType = {
  id: string;
  type: "room" | "lobby" | "school" | 'xmas_etrance' | 'xmas_room' | 'xmas_goal' | 'xmas_final';
  rows: number;
  cols: number;
  map: number[][];
  sound: string;
  image: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actions?: Record<string, any>;
  startPosition: { x: number; y: number };
};

export type ConfigMapType = Record<string, MapType>;
