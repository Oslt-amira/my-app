"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/page.tsx":
/*!********************************!*\
  !*** ./app/dashboard/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const choices = [\n        \"ROCK\",\n        \"PAPER\",\n        \"SCISSORS\"\n    ];\n    const [playerChoice, setPlayerChoice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [computerVal, setComputerVal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function randomComputerVal() {\n        let choice = Math.floor(Math.random() * 3);\n        setComputerVal(choices[choice]);\n    }\n    function logic() {\n        randomComputerVal();\n        if (playerChoice == \"ROCK\" && computerVal == \"SCISSORS\" || playerChoice == \"SCISSORS\" && computerVal == \"PAPER\" || playerChoice == \"PAPER\" && computerVal == \"ROCK\") {\n            setScore(score + 1);\n        } else {\n            setScore(score - 1);\n        }\n        if (playerChoice == \"\") {\n            setScore(0);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        logic();\n    }, [\n        playerChoice\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" md:flex grid grid-cols-2 gap-2 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                className: \"w-[350px] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                                children: \"Paper Rock Scissors \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {\n                                children: \" Pick your choice \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                        className: \"justify-center items-center center h-screen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: ()=>setPlayerChoice(\"SCISSORS\"),\n                                children: \"✂️\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: ()=>setPlayerChoice(\"ROCK\"),\n                                children: \"\\uD83E\\uDEA8\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: ()=>setPlayerChoice(\"PAPER\"),\n                                children: \"\\uD83E\\uDD6C\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                    children: score\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"TIv1OYWBWB9+rSaLg4tiRh1Xoto=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNEM7QUFDSTtBQVNsQjtBQUdmLFNBQVNROztJQUN0QixNQUFNQyxVQUFVO1FBQUM7UUFBUTtRQUFTO0tBQVc7SUFDN0MsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUVuQyxTQUFTZTtRQUNQLElBQUlDLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLO1FBQ3hDUCxlQUFlSixPQUFPLENBQUNRLE9BQU87SUFDaEM7SUFFQSxTQUFTSTtRQUNQTDtRQUNBLElBQ0UsZ0JBQWlCLFVBQVVKLGVBQWUsY0FDekNGLGdCQUFnQixjQUFjRSxlQUFlLFdBQzdDRixnQkFBZ0IsV0FBV0UsZUFBZSxRQUMzQztZQUNBRyxTQUFTRCxRQUFRO1FBQ25CLE9BQU87WUFDTEMsU0FBU0QsUUFBUTtRQUNuQjtRQUNBLElBQUdKLGdCQUFnQixJQUFHO1lBQ2xCSyxTQUFTO1FBQ2I7SUFFRjtJQUNBZixnREFBU0EsQ0FBQztRQUNScUI7SUFDRixHQUFHO1FBQUNYO0tBQWE7SUFFakIscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDcEIscURBQUlBO2dCQUFDb0IsV0FBVTs7a0NBQ2QsOERBQUNqQiwyREFBVUE7OzBDQUNULDhEQUFDQywwREFBU0E7MENBQUM7Ozs7OzswQ0FDWCw4REFBQ0YsZ0VBQWVBOzBDQUFDOzs7Ozs7Ozs7Ozs7a0NBRW5CLDhEQUFDRCw0REFBV0E7d0JBQUNtQixXQUFVOzswQ0FDckIsOERBQUNyQix5REFBTUE7Z0NBQUNzQixTQUFTLElBQU1iLGdCQUFnQjswQ0FBYTs7Ozs7OzBDQUNwRCw4REFBQ1QseURBQU1BO2dDQUFDc0IsU0FBUyxJQUFNYixnQkFBZ0I7MENBQVM7Ozs7OzswQ0FDaEQsOERBQUNULHlEQUFNQTtnQ0FBQ3NCLFNBQVMsSUFBTWIsZ0JBQWdCOzBDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3JELDhEQUFDUixxREFBSUE7MEJBQ0wsNEVBQUNJLDBEQUFTQTs4QkFBRU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2xCO0dBM0R3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9wYWdlLnRzeD9kMTI1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkRGVzY3JpcHRpb24sXHJcbiAgQ2FyZEZvb3RlcixcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRUaXRsZSxcclxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IGNob2ljZXMgPSBbXCJST0NLXCIsIFwiUEFQRVJcIiwgXCJTQ0lTU09SU1wiXTtcclxuICBjb25zdCBbcGxheWVyQ2hvaWNlLCBzZXRQbGF5ZXJDaG9pY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbXB1dGVyVmFsLCBzZXRDb21wdXRlclZhbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgZnVuY3Rpb24gcmFuZG9tQ29tcHV0ZXJWYWwoKSB7XHJcbiAgICBsZXQgY2hvaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICBzZXRDb21wdXRlclZhbChjaG9pY2VzW2Nob2ljZV0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbG9naWMoKSB7XHJcbiAgICByYW5kb21Db21wdXRlclZhbCgpO1xyXG4gICAgaWYgKFxyXG4gICAgICAocGxheWVyQ2hvaWNlID09IFwiUk9DS1wiICYmIGNvbXB1dGVyVmFsID09IFwiU0NJU1NPUlNcIikgfHxcclxuICAgICAgKHBsYXllckNob2ljZSA9PSBcIlNDSVNTT1JTXCIgJiYgY29tcHV0ZXJWYWwgPT0gXCJQQVBFUlwiKSB8fFxyXG4gICAgICAocGxheWVyQ2hvaWNlID09IFwiUEFQRVJcIiAmJiBjb21wdXRlclZhbCA9PSBcIlJPQ0tcIilcclxuICAgICkge1xyXG4gICAgICBzZXRTY29yZShzY29yZSArIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2NvcmUoc2NvcmUgLSAxKTtcclxuICAgIH1cclxuICAgIGlmKHBsYXllckNob2ljZSAgPT1cIlwiKXtcclxuICAgICAgICBzZXRTY29yZSgwKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9naWMoKTtcclxuICB9LCBbcGxheWVyQ2hvaWNlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDpmbGV4IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTIgXCI+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInctWzM1MHB4XSBcIj5cclxuICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgIDxDYXJkVGl0bGU+UGFwZXIgUm9jayBTY2lzc29ycyA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+IFBpY2sgeW91ciBjaG9pY2UgPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY2VudGVyIGgtc2NyZWVuXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBsYXllckNob2ljZShcIlNDSVNTT1JTXCIpfT7inILvuI88L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0UGxheWVyQ2hvaWNlKFwiUk9DS1wiKX0+8J+qqDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQbGF5ZXJDaG9pY2UoXCJQQVBFUlwiKX0+8J+lrDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcblxyXG5cclxuXHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICA8Q2FyZFRpdGxlPntzY29yZX08L0NhcmRUaXRsZT5cclxuXHJcbiAgICAgIDwvQ2FyZD5cclxuey8qIFxyXG4gICAgICA8aDE+e3BsYXllckNob2ljZX08L2gxPlxyXG4gICAgICA8aDE+e2NvbXB1dGVyVmFsfTwvaDE+IFxyXG4gICAgICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY2VudGVyIGgtc2NyZWVuKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJQYWdlIiwiY2hvaWNlcyIsInBsYXllckNob2ljZSIsInNldFBsYXllckNob2ljZSIsImNvbXB1dGVyVmFsIiwic2V0Q29tcHV0ZXJWYWwiLCJzY29yZSIsInNldFNjb3JlIiwicmFuZG9tQ29tcHV0ZXJWYWwiLCJjaG9pY2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsb2dpYyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.tsx\n"));

/***/ })

});