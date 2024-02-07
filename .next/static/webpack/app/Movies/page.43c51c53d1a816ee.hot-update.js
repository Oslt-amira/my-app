"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Movies/page",{

/***/ "(app-pages-browser)/./app/Movies/page.tsx":
/*!*****************************!*\
  !*** ./app/Movies/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoviesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction MoviesPage() {\n    _s();\n    const [Movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const options = {\n        method: \"GET\",\n        headers: {\n            accept: \"application/json\"\n        }\n    };\n    const fetchMovies = async ()=>{\n        const options = {\n            method: \"GET\",\n            headers: {\n                accept: \"application/json\"\n            }\n        };\n        try {\n            const response = await fetch(\"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc\", options);\n            const data = await response.json();\n            setMovies(data.results);\n            console.log(Movies);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" md:flex  p-5  \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"overflow-x-auto\",\n            children: Movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {}, movie, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\Movies\\\\page.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\Movies\\\\page.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\Movies\\\\page.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(MoviesPage, \"EwYeuK14ZQb9g0eKZyr5SVIgFsY=\");\n_c = MoviesPage;\nvar _c;\n$RefreshReg$(_c, \"MoviesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Nb3ZpZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM0QztBQVVkO0FBR2YsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZDLE1BQU1LLFVBQVU7UUFBRUMsUUFBUTtRQUFPQyxTQUFTO1lBQUVDLFFBQVE7UUFBbUI7SUFBRTtJQUd6RSxNQUFNQyxjQUFjO1FBQ2xCLE1BQU1KLFVBQVU7WUFDZEMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQQyxRQUFRO1lBQ1Y7UUFDRjtRQUVBLElBQUk7WUFDRixNQUFNRSxXQUFXLE1BQU1DLE1BQU0scUlBQXFJTjtZQUNsSyxNQUFNTyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENULFVBQVVRLEtBQUtFLE9BQU87WUFDdEJDLFFBQVFDLEdBQUcsQ0FBQ2I7UUFDZCxFQUFFLE9BQU9jLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBR0FsQixnREFBU0EsQ0FBQztRQUFTVTtJQUNuQixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDZGhCLE9BQU9pQixHQUFHLENBQUNDLENBQUFBLHNCQUNWLDhEQUFDcEIscURBQUlBLE1BQU1vQjs7Ozs7Ozs7Ozs7Ozs7O0FBUW5CO0dBdkN3Qm5CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Nb3ZpZXMvcGFnZS50c3g/YjFkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZERlc2NyaXB0aW9uLFxyXG4gIENhcmRGb290ZXIsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkVGl0bGUsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzUGFnZSgpIHtcclxuICBjb25zdCBbTW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7IG1ldGhvZDogXCJHRVRcIiwgaGVhZGVyczogeyBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiIH0gfTtcclxuXHJcblxyXG4gIGNvbnN0IGZldGNoTW92aWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2Rpc2NvdmVyL21vdmllP2luY2x1ZGVfYWR1bHQ9ZmFsc2UmaW5jbHVkZV92aWRlbz1mYWxzZSZsYW5ndWFnZT1lbi1VUyZwYWdlPTEmc29ydF9ieT1wb3B1bGFyaXR5LmRlc2MnLCBvcHRpb25zKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0TW92aWVzKGRhdGEucmVzdWx0cyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKE1vdmllcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyAgZmV0Y2hNb3ZpZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDpmbGV4ICBwLTUgIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICB7TW92aWVzLm1hcChtb3ZpZSA9PiAoXHJcbiAgICAgICAgPENhcmQga2V5PXttb3ZpZX0+XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJNb3ZpZXNQYWdlIiwiTW92aWVzIiwic2V0TW92aWVzIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJmZXRjaE1vdmllcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJtb3ZpZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Movies/page.tsx\n"));

/***/ })

});