import { addVertex, addEdge, knightMoves } from "./knight";

function component() {
  addVertex();
  addEdge();

  knightMoves([3, 3], [4, 3]);
  // knightMoves([0, 0], [1, 1]);
}
component();
