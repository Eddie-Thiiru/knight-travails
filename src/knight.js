const Graph = () => {
  let vertices = [];
  let edges = [];

  return { vertices, edges };
};

let graph = Graph();

const addVertex = () => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let vertex = [i, j];

      graph.vertices.push(vertex);

      // Adds associative empty array
      graph.edges[vertex] = [];
    }
  }
};

const addEdge = () => {
  let array = graph.vertices;

  for (let i = 0; i < array.length; i++) {
    let vertex1 = array[i];
    let validMoves = getLegalMoves(vertex1);

    for (let i = 0; i < validMoves.length; i++) {
      let vertex2 = validMoves[i];

      graph.edges[vertex1].push(vertex2);
    }
  }
};

const getLegalMoves = ([x, y]) => {
  const combos = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  let validMoves = [];

  for (let i = 0; i < combos.length; i++) {
    let values = combos[i];
    let move = [x + values[0], y + values[1]];

    if (move[0] <= 7 && move[0] >= 0 && move[1] <= 7 && move[1] >= 0) {
      validMoves.push(move);
    }
  }

  return validMoves;
};

const isArrayInArray = (source, search) => {
  let searchLen = search.length;

  for (let i = 0; i < source.length; i++) {
    // skip if not same length
    if (source[i].length !== searchLen) continue;
    // compare each element
    for (let j = 0; j < searchLen; j++) {
      // if a pair doesn't match skip forwards
      if (source[i][j] !== search[j]) {
        break;
      } else if (j === searchLen - 1) {
        return true;
      }
    }
  }
  return false;
};

const shortestPath = (start, end, predecessors) => {
  const path = [];

  path.push(end);

  let u = predecessors[end];
  let arrayEqual = u[0] === start[0] && u[1] === start[1] ? true : false;

  while (arrayEqual === false) {
    path.push(u);
    u = predecessors[u];
    arrayEqual = u[0] === start[0] && u[1] === start[1] ? true : false;
  }

  path.push(start);

  let route = path.reverse();

  console.log(`=> You made it in ${route.length - 1} moves! Here's your path:`);

  for (let i = 0; i < route.length; i++) {
    console.log(route[i].join(","));
  }
};

const knightMoves = (start, end) => {
  let visited = [start];
  let queue = [start];

  const edges = [];
  edges[start] = 0;

  const predecessors = [];
  predecessors[start] = null;

  while (queue.length > 0) {
    let current = queue.shift();

    if (current[0] === end[0] && current[1] === end[1]) {
      shortestPath(start, end, predecessors);

      return;
    } else {
      let adjList = graph.edges[current];

      for (let i = 0; i < adjList.length; i++) {
        let element = adjList[i];
        let itemVisited = isArrayInArray(visited, element);

        if (itemVisited === false) {
          visited.push(element);
          queue.push(element);

          edges[element] = edges[current] + 1;
          predecessors[element] = current;
        }
      }
    }
  }
};

export { addVertex, addEdge, knightMoves };
