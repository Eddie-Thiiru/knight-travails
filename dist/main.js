/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/knight.js":
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEdge: () => (/* binding */ addEdge),
/* harmony export */   addVertex: () => (/* binding */ addVertex),
/* harmony export */   knightMoves: () => (/* binding */ knightMoves)
/* harmony export */ });
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
    const vertex1 = array[i];
    const validMoves = getLegalMoves(vertex1);

    for (let i = 0; i < validMoves.length; i++) {
      const vertex2 = validMoves[i];

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

function isArrayInArray(source, search) {
  var searchLen = search.length;
  for (var i = 0, len = source.length; i < len; i++) {
    // skip not same length
    if (source[i].length != searchLen) continue;
    // compare each element
    for (var j = 0; j < searchLen; j++) {
      // if a pair doesn't match skip forwards
      if (source[i][j] !== search[j]) {
        break;
      } else if (j == searchLen - 1) {
        return true;
      }
    }
  }
  return false;
}

const shortestPath = (start, end, predecessors) => {
  const path = [];

  path.push(start);

  let u = predecessors[start];

  while (u !== end) {
    path.push(u);
    u = predecessors[u];
  }

  path.push(end);

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
      shortestPath(end, start, predecessors);

      return;
    } else {
      const adjList = graph.edges[current];

      for (let i = 0; i < adjList.length; i++) {
        const element = adjList[i];
        const itemVisited = isArrayInArray(visited, element);

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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight */ "./src/knight.js");


function component() {
  (0,_knight__WEBPACK_IMPORTED_MODULE_0__.addVertex)();
  (0,_knight__WEBPACK_IMPORTED_MODULE_0__.addEdge)();

  (0,_knight__WEBPACK_IMPORTED_MODULE_0__.knightMoves)([3, 3], [4, 3]);
  // knightMoves([0, 0], [1, 1]);
}
component();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTs7QUFFQSxvQkFBb0IsdUJBQXVCO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtQ0FBbUMsa0JBQWtCOztBQUVyRCxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjs7QUFFQSxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQzs7Ozs7OztVQzNJM0M7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yRDs7QUFFM0Q7QUFDQSxFQUFFLGtEQUFTO0FBQ1gsRUFBRSxnREFBTzs7QUFFVCxFQUFFLG9EQUFXO0FBQ2I7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2tuaWdodC5qcyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR3JhcGggPSAoKSA9PiB7XG4gIGxldCB2ZXJ0aWNlcyA9IFtdO1xuICBsZXQgZWRnZXMgPSBbXTtcblxuICByZXR1cm4geyB2ZXJ0aWNlcywgZWRnZXMgfTtcbn07XG5cbmxldCBncmFwaCA9IEdyYXBoKCk7XG5cbmNvbnN0IGFkZFZlcnRleCA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgbGV0IHZlcnRleCA9IFtpLCBqXTtcbiAgICAgIGdyYXBoLnZlcnRpY2VzLnB1c2godmVydGV4KTtcblxuICAgICAgLy8gQWRkcyBhc3NvY2lhdGl2ZSBlbXB0eSBhcnJheVxuICAgICAgZ3JhcGguZWRnZXNbdmVydGV4XSA9IFtdO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgYWRkRWRnZSA9ICgpID0+IHtcbiAgbGV0IGFycmF5ID0gZ3JhcGgudmVydGljZXM7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHZlcnRleDEgPSBhcnJheVtpXTtcbiAgICBjb25zdCB2YWxpZE1vdmVzID0gZ2V0TGVnYWxNb3Zlcyh2ZXJ0ZXgxKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRNb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdmVydGV4MiA9IHZhbGlkTW92ZXNbaV07XG5cbiAgICAgIGdyYXBoLmVkZ2VzW3ZlcnRleDFdLnB1c2godmVydGV4Mik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBnZXRMZWdhbE1vdmVzID0gKFt4LCB5XSkgPT4ge1xuICBjb25zdCBjb21ib3MgPSBbXG4gICAgWzIsIDFdLFxuICAgIFsyLCAtMV0sXG4gICAgWy0yLCAxXSxcbiAgICBbLTIsIC0xXSxcbiAgICBbMSwgMl0sXG4gICAgWzEsIC0yXSxcbiAgICBbLTEsIDJdLFxuICAgIFstMSwgLTJdLFxuICBdO1xuXG4gIGxldCB2YWxpZE1vdmVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21ib3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdmFsdWVzID0gY29tYm9zW2ldO1xuICAgIGxldCBtb3ZlID0gW3ggKyB2YWx1ZXNbMF0sIHkgKyB2YWx1ZXNbMV1dO1xuXG4gICAgaWYgKG1vdmVbMF0gPD0gNyAmJiBtb3ZlWzBdID49IDAgJiYgbW92ZVsxXSA8PSA3ICYmIG1vdmVbMV0gPj0gMCkge1xuICAgICAgdmFsaWRNb3Zlcy5wdXNoKG1vdmUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWxpZE1vdmVzO1xufTtcblxuZnVuY3Rpb24gaXNBcnJheUluQXJyYXkoc291cmNlLCBzZWFyY2gpIHtcbiAgdmFyIHNlYXJjaExlbiA9IHNlYXJjaC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzb3VyY2UubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAvLyBza2lwIG5vdCBzYW1lIGxlbmd0aFxuICAgIGlmIChzb3VyY2VbaV0ubGVuZ3RoICE9IHNlYXJjaExlbikgY29udGludWU7XG4gICAgLy8gY29tcGFyZSBlYWNoIGVsZW1lbnRcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlYXJjaExlbjsgaisrKSB7XG4gICAgICAvLyBpZiBhIHBhaXIgZG9lc24ndCBtYXRjaCBza2lwIGZvcndhcmRzXG4gICAgICBpZiAoc291cmNlW2ldW2pdICE9PSBzZWFyY2hbal0pIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKGogPT0gc2VhcmNoTGVuIC0gMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBzaG9ydGVzdFBhdGggPSAoc3RhcnQsIGVuZCwgcHJlZGVjZXNzb3JzKSA9PiB7XG4gIGNvbnN0IHBhdGggPSBbXTtcblxuICBwYXRoLnB1c2goc3RhcnQpO1xuXG4gIGxldCB1ID0gcHJlZGVjZXNzb3JzW3N0YXJ0XTtcblxuICB3aGlsZSAodSAhPT0gZW5kKSB7XG4gICAgcGF0aC5wdXNoKHUpO1xuICAgIHUgPSBwcmVkZWNlc3NvcnNbdV07XG4gIH1cblxuICBwYXRoLnB1c2goZW5kKTtcblxuICBsZXQgcm91dGUgPSBwYXRoLnJldmVyc2UoKTtcblxuICBjb25zb2xlLmxvZyhgPT4gWW91IG1hZGUgaXQgaW4gJHtyb3V0ZS5sZW5ndGggLSAxfSBtb3ZlcyEgSGVyZSdzIHlvdXIgcGF0aDpgKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc29sZS5sb2cocm91dGVbaV0uam9pbihcIixcIikpO1xuICB9XG59O1xuXG5jb25zdCBrbmlnaHRNb3ZlcyA9IChzdGFydCwgZW5kKSA9PiB7XG4gIGxldCB2aXNpdGVkID0gW3N0YXJ0XTtcbiAgbGV0IHF1ZXVlID0gW3N0YXJ0XTtcblxuICBjb25zdCBlZGdlcyA9IFtdO1xuICBlZGdlc1tzdGFydF0gPSAwO1xuXG4gIGNvbnN0IHByZWRlY2Vzc29ycyA9IFtdO1xuICBwcmVkZWNlc3NvcnNbc3RhcnRdID0gbnVsbDtcblxuICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgIGxldCBjdXJyZW50ID0gcXVldWUuc2hpZnQoKTtcblxuICAgIGlmIChjdXJyZW50WzBdID09PSBlbmRbMF0gJiYgY3VycmVudFsxXSA9PT0gZW5kWzFdKSB7XG4gICAgICBzaG9ydGVzdFBhdGgoZW5kLCBzdGFydCwgcHJlZGVjZXNzb3JzKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhZGpMaXN0ID0gZ3JhcGguZWRnZXNbY3VycmVudF07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRqTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gYWRqTGlzdFtpXTtcbiAgICAgICAgY29uc3QgaXRlbVZpc2l0ZWQgPSBpc0FycmF5SW5BcnJheSh2aXNpdGVkLCBlbGVtZW50KTtcblxuICAgICAgICBpZiAoaXRlbVZpc2l0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdmlzaXRlZC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgIHF1ZXVlLnB1c2goZWxlbWVudCk7XG5cbiAgICAgICAgICBlZGdlc1tlbGVtZW50XSA9IGVkZ2VzW2N1cnJlbnRdICsgMTtcbiAgICAgICAgICBwcmVkZWNlc3NvcnNbZWxlbWVudF0gPSBjdXJyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBhZGRWZXJ0ZXgsIGFkZEVkZ2UsIGtuaWdodE1vdmVzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZFZlcnRleCwgYWRkRWRnZSwga25pZ2h0TW92ZXMgfSBmcm9tIFwiLi9rbmlnaHRcIjtcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICBhZGRWZXJ0ZXgoKTtcbiAgYWRkRWRnZSgpO1xuXG4gIGtuaWdodE1vdmVzKFszLCAzXSwgWzQsIDNdKTtcbiAgLy8ga25pZ2h0TW92ZXMoWzAsIDBdLCBbMSwgMV0pO1xufVxuY29tcG9uZW50KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=