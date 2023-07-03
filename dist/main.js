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
  // knightMoves([0, 0], [3, 3]);
}
component();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLG9CQUFvQixPQUFPO0FBQzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7O0FBRUEsb0JBQW9CLHVCQUF1QjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1DQUFtQyxrQkFBa0I7O0FBRXJELGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOOztBQUVBLHNCQUFzQixvQkFBb0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJDOzs7Ozs7O1VDL0kzQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjJEOztBQUUzRDtBQUNBLEVBQUUsa0RBQVM7QUFDWCxFQUFFLGdEQUFPOztBQUVULEVBQUUsb0RBQVc7QUFDYjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMva25pZ2h0LmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHcmFwaCA9ICgpID0+IHtcbiAgbGV0IHZlcnRpY2VzID0gW107XG4gIGxldCBlZGdlcyA9IFtdO1xuXG4gIHJldHVybiB7IHZlcnRpY2VzLCBlZGdlcyB9O1xufTtcblxubGV0IGdyYXBoID0gR3JhcGgoKTtcblxuY29uc3QgYWRkVmVydGV4ID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICBsZXQgdmVydGV4ID0gW2ksIGpdO1xuXG4gICAgICBncmFwaC52ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG5cbiAgICAgIC8vIEFkZHMgYXNzb2NpYXRpdmUgZW1wdHkgYXJyYXlcbiAgICAgIGdyYXBoLmVkZ2VzW3ZlcnRleF0gPSBbXTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGFkZEVkZ2UgPSAoKSA9PiB7XG4gIGxldCBhcnJheSA9IGdyYXBoLnZlcnRpY2VzO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdmVydGV4MSA9IGFycmF5W2ldO1xuICAgIGxldCB2YWxpZE1vdmVzID0gZ2V0TGVnYWxNb3Zlcyh2ZXJ0ZXgxKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRNb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHZlcnRleDIgPSB2YWxpZE1vdmVzW2ldO1xuXG4gICAgICBncmFwaC5lZGdlc1t2ZXJ0ZXgxXS5wdXNoKHZlcnRleDIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZ2V0TGVnYWxNb3ZlcyA9IChbeCwgeV0pID0+IHtcbiAgY29uc3QgY29tYm9zID0gW1xuICAgIFsyLCAxXSxcbiAgICBbMiwgLTFdLFxuICAgIFstMiwgMV0sXG4gICAgWy0yLCAtMV0sXG4gICAgWzEsIDJdLFxuICAgIFsxLCAtMl0sXG4gICAgWy0xLCAyXSxcbiAgICBbLTEsIC0yXSxcbiAgXTtcblxuICBsZXQgdmFsaWRNb3ZlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tYm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHZhbHVlcyA9IGNvbWJvc1tpXTtcbiAgICBsZXQgbW92ZSA9IFt4ICsgdmFsdWVzWzBdLCB5ICsgdmFsdWVzWzFdXTtcblxuICAgIGlmIChtb3ZlWzBdIDw9IDcgJiYgbW92ZVswXSA+PSAwICYmIG1vdmVbMV0gPD0gNyAmJiBtb3ZlWzFdID49IDApIHtcbiAgICAgIHZhbGlkTW92ZXMucHVzaChtb3ZlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsaWRNb3Zlcztcbn07XG5cbmNvbnN0IGlzQXJyYXlJbkFycmF5ID0gKHNvdXJjZSwgc2VhcmNoKSA9PiB7XG4gIGxldCBzZWFyY2hMZW4gPSBzZWFyY2gubGVuZ3RoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gc2tpcCBpZiBub3Qgc2FtZSBsZW5ndGhcbiAgICBpZiAoc291cmNlW2ldLmxlbmd0aCAhPT0gc2VhcmNoTGVuKSBjb250aW51ZTtcbiAgICAvLyBjb21wYXJlIGVhY2ggZWxlbWVudFxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VhcmNoTGVuOyBqKyspIHtcbiAgICAgIC8vIGlmIGEgcGFpciBkb2Vzbid0IG1hdGNoIHNraXAgZm9yd2FyZHNcbiAgICAgIGlmIChzb3VyY2VbaV1bal0gIT09IHNlYXJjaFtqXSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoaiA9PT0gc2VhcmNoTGVuIC0gMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3Qgc2hvcnRlc3RQYXRoID0gKHN0YXJ0LCBlbmQsIHByZWRlY2Vzc29ycykgPT4ge1xuICBjb25zdCBwYXRoID0gW107XG5cbiAgcGF0aC5wdXNoKGVuZCk7XG5cbiAgbGV0IHUgPSBwcmVkZWNlc3NvcnNbZW5kXTtcbiAgbGV0IGFycmF5RXF1YWwgPSB1WzBdID09PSBzdGFydFswXSAmJiB1WzFdID09PSBzdGFydFsxXSA/IHRydWUgOiBmYWxzZTtcblxuICB3aGlsZSAoYXJyYXlFcXVhbCA9PT0gZmFsc2UpIHtcbiAgICBwYXRoLnB1c2godSk7XG4gICAgdSA9IHByZWRlY2Vzc29yc1t1XTtcbiAgICBhcnJheUVxdWFsID0gdVswXSA9PT0gc3RhcnRbMF0gJiYgdVsxXSA9PT0gc3RhcnRbMV0gPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwYXRoLnB1c2goc3RhcnQpO1xuXG4gIGxldCByb3V0ZSA9IHBhdGgucmV2ZXJzZSgpO1xuXG4gIGNvbnNvbGUubG9nKGA9PiBZb3UgbWFkZSBpdCBpbiAke3JvdXRlLmxlbmd0aCAtIDF9IG1vdmVzISBIZXJlJ3MgeW91ciBwYXRoOmApO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGUubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyhyb3V0ZVtpXS5qb2luKFwiLFwiKSk7XG4gIH1cbn07XG5cbmNvbnN0IGtuaWdodE1vdmVzID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgbGV0IHZpc2l0ZWQgPSBbc3RhcnRdO1xuICBsZXQgcXVldWUgPSBbc3RhcnRdO1xuXG4gIGNvbnN0IGVkZ2VzID0gW107XG4gIGVkZ2VzW3N0YXJ0XSA9IDA7XG5cbiAgY29uc3QgcHJlZGVjZXNzb3JzID0gW107XG4gIHByZWRlY2Vzc29yc1tzdGFydF0gPSBudWxsO1xuXG4gIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgaWYgKGN1cnJlbnRbMF0gPT09IGVuZFswXSAmJiBjdXJyZW50WzFdID09PSBlbmRbMV0pIHtcbiAgICAgIHNob3J0ZXN0UGF0aChzdGFydCwgZW5kLCBwcmVkZWNlc3NvcnMpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBhZGpMaXN0ID0gZ3JhcGguZWRnZXNbY3VycmVudF07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRqTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGFkakxpc3RbaV07XG4gICAgICAgIGxldCBpdGVtVmlzaXRlZCA9IGlzQXJyYXlJbkFycmF5KHZpc2l0ZWQsIGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChpdGVtVmlzaXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB2aXNpdGVkLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgcXVldWUucHVzaChlbGVtZW50KTtcblxuICAgICAgICAgIGVkZ2VzW2VsZW1lbnRdID0gZWRnZXNbY3VycmVudF0gKyAxO1xuICAgICAgICAgIHByZWRlY2Vzc29yc1tlbGVtZW50XSA9IGN1cnJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7IGFkZFZlcnRleCwgYWRkRWRnZSwga25pZ2h0TW92ZXMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkVmVydGV4LCBhZGRFZGdlLCBrbmlnaHRNb3ZlcyB9IGZyb20gXCIuL2tuaWdodFwiO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGFkZFZlcnRleCgpO1xuICBhZGRFZGdlKCk7XG5cbiAga25pZ2h0TW92ZXMoWzMsIDNdLCBbNCwgM10pO1xuICAvLyBrbmlnaHRNb3ZlcyhbMCwgMF0sIFszLCAzXSk7XG59XG5jb21wb25lbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==