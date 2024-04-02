class PriorityQueue<T> {
  private items: { item: T; priority: number }[];

  constructor() {
    this.items = [];
  }

  enqueue(item: T, priority: number): void {
    this.items.push({ item, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue(): T | undefined {
    return this.items.shift()?.item;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

export type Point = { x: number; y: number };
type Grid = number[][];

function heuristic(node: Point, goal: Point): number {
  return Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y);
}

export function astar(maze: Grid, start: Point, goal: Point): Point[] | null {
  const rows = maze.length;
  const cols = maze[0].length;
  const openList = new PriorityQueue<Point>();
  const cameFrom: { [key: string]: Point } = {};
  const gScore: { [key: string]: number } = {};

  const startKey = `${start.x}-${start.y}`;
  gScore[startKey] = 0;
  openList.enqueue(start, 0);

  while (!openList.isEmpty()) {
    const current = openList.dequeue() as Point;

    if (current.x === goal.x && current.y === goal.y) {
      const path: Point[] = [];
      let currentKey = `${current.x}-${current.y}`;
      while (currentKey in cameFrom) {
        const node = cameFrom[currentKey];
        path.push(node);
        currentKey = `${node.x}-${node.y}`;
      }
      path.reverse();
      return path;
    }

    for (const [dx, dy] of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ]) {
      const neighbor: Point = { x: current.x + dx, y: current.y + dy };
      if (
        neighbor.x >= 0 &&
        neighbor.x < rows &&
        neighbor.y >= 0 &&
        neighbor.y < cols &&
        maze[neighbor.x][neighbor.y] !== 1 &&
        (maze[neighbor.x][neighbor.y] !== 2 ||
          maze[neighbor.x][neighbor.y] === maze[goal.x][goal.y])
      ) {
        const tentativeGScore = (gScore[`${current.x}-${current.y}`] || 0) + 1;
        const neighborKey = `${neighbor.x}-${neighbor.y}`;

        if (!(neighborKey in gScore) || tentativeGScore < gScore[neighborKey]) {
          cameFrom[neighborKey] = current;
          gScore[neighborKey] = tentativeGScore;
          const priority = tentativeGScore + heuristic(neighbor, goal);
          openList.enqueue(neighbor, priority);
        }
      }
    }
  }

  return null;
}
