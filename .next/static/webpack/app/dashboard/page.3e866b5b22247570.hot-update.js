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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const choices = [\n        \"ROCK\",\n        \"PAPER\",\n        \"SCISSORS\"\n    ];\n    const [playerChoice, setPlayerChoice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [computerVal, setComputerVal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function randomComputerVal() {\n        let choice = Math.floor(Math.random() * 3);\n        setComputerVal(choices[choice]);\n    }\n    function logic() {\n        randomComputerVal();\n        if (playerChoice == \"ROCK\" && computerVal == \"SCISSORS\" || playerChoice == \"SCISSORS\" && computerVal == \"PAPER\" || playerChoice == \"PAPER\" && computerVal == \"ROCK\") {\n            setScore(score + 1);\n        } else {\n            setScore(score - 1);\n        }\n        if (playerChoice == \"\") {\n            setScore(0);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        logic();\n    }, [\n        playerChoice\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" md:flex justify-center items-center center h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                className: \"w-[350px] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                                children: \"Paper Rock Scissors \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {\n                                children: \" Pick your choice \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: ()=>setPlayerChoice(\"SCISSORS\"),\n                                children: \"✂️\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: ()=>setPlayerChoice(\"ROCK\"),\n                                children: \"\\uD83E\\uDEA8\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: ()=>setPlayerChoice(\"PAPER\"),\n                                children: \"\\uD83E\\uDD6C\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                    children: score\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"TIv1OYWBWB9+rSaLg4tiRh1Xoto=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0k7QUFTbEI7QUFDZ0I7QUFFL0IsU0FBU1M7O0lBQ3RCLE1BQU1DLFVBQVU7UUFBQztRQUFRO1FBQVM7S0FBVztJQUM3QyxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFFL0MsTUFBTSxDQUFDYyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFDO0lBRW5DLFNBQVNnQjtRQUNQLElBQUlDLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLO1FBQ3hDUCxlQUFlSixPQUFPLENBQUNRLE9BQU87SUFDaEM7SUFFQSxTQUFTSTtRQUNQTDtRQUNBLElBQ0UsZ0JBQWlCLFVBQVVKLGVBQWUsY0FDekNGLGdCQUFnQixjQUFjRSxlQUFlLFdBQzdDRixnQkFBZ0IsV0FBV0UsZUFBZSxRQUMzQztZQUNBRyxTQUFTRCxRQUFRO1FBQ25CLE9BQU87WUFDTEMsU0FBU0QsUUFBUTtRQUNuQjtRQUNBLElBQUdKLGdCQUFnQixJQUFHO1lBQ2xCSyxTQUFTO1FBQ2I7SUFFRjtJQUNBaEIsZ0RBQVNBLENBQUM7UUFDUnNCO0lBQ0YsR0FBRztRQUFDWDtLQUFhO0lBRWpCLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3JCLHFEQUFJQTtnQkFBQ3FCLFdBQVU7O2tDQUNkLDhEQUFDbEIsMkRBQVVBOzswQ0FDVCw4REFBQ0MsMERBQVNBOzBDQUFDOzs7Ozs7MENBQ1gsOERBQUNGLGdFQUFlQTswQ0FBQzs7Ozs7Ozs7Ozs7O2tDQUVuQiw4REFBQ0QsNERBQVdBOzswQ0FDViw4REFBQ0YseURBQU1BO2dDQUFDdUIsU0FBUyxJQUFNYixnQkFBZ0I7MENBQWE7Ozs7OzswQ0FDcEQsOERBQUNWLHlEQUFNQTtnQ0FBQ3VCLFNBQVMsSUFBTWIsZ0JBQWdCOzBDQUFTOzs7Ozs7MENBQ2hELDhEQUFDVix5REFBTUE7Z0NBQUN1QixTQUFTLElBQU1iLGdCQUFnQjswQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlyRCw4REFBQ1c7MEJBQ0QsNEVBQUNmLHVEQUFLQTs4QkFBRU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWQ7R0F2RHdCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2QxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmREZXNjcmlwdGlvbixcclxuICBDYXJkRm9vdGVyLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZFRpdGxlLFxyXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3QgY2hvaWNlcyA9IFtcIlJPQ0tcIiwgXCJQQVBFUlwiLCBcIlNDSVNTT1JTXCJdO1xyXG4gIGNvbnN0IFtwbGF5ZXJDaG9pY2UsIHNldFBsYXllckNob2ljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tcHV0ZXJWYWwsIHNldENvbXB1dGVyVmFsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBmdW5jdGlvbiByYW5kb21Db21wdXRlclZhbCgpIHtcclxuICAgIGxldCBjaG9pY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgIHNldENvbXB1dGVyVmFsKGNob2ljZXNbY2hvaWNlXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsb2dpYygpIHtcclxuICAgIHJhbmRvbUNvbXB1dGVyVmFsKCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIChwbGF5ZXJDaG9pY2UgPT0gXCJST0NLXCIgJiYgY29tcHV0ZXJWYWwgPT0gXCJTQ0lTU09SU1wiKSB8fFxyXG4gICAgICAocGxheWVyQ2hvaWNlID09IFwiU0NJU1NPUlNcIiAmJiBjb21wdXRlclZhbCA9PSBcIlBBUEVSXCIpIHx8XHJcbiAgICAgIChwbGF5ZXJDaG9pY2UgPT0gXCJQQVBFUlwiICYmIGNvbXB1dGVyVmFsID09IFwiUk9DS1wiKVxyXG4gICAgKSB7XHJcbiAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTY29yZShzY29yZSAtIDEpO1xyXG4gICAgfVxyXG4gICAgaWYocGxheWVyQ2hvaWNlICA9PVwiXCIpe1xyXG4gICAgICAgIHNldFNjb3JlKDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2dpYygpO1xyXG4gIH0sIFtwbGF5ZXJDaG9pY2VdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1kOmZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGNlbnRlciBoLXNjcmVlblwiPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LVszNTBweF0gXCI+XHJcbiAgICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgICA8Q2FyZFRpdGxlPlBhcGVyIFJvY2sgU2Npc3NvcnMgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPiBQaWNrIHlvdXIgY2hvaWNlIDwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBsYXllckNob2ljZShcIlNDSVNTT1JTXCIpfT7inILvuI88L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0UGxheWVyQ2hvaWNlKFwiUk9DS1wiKX0+8J+qqDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQbGF5ZXJDaG9pY2UoXCJQQVBFUlwiKX0+8J+lrDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxMYWJlbD57c2NvcmV9PC9MYWJlbD5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG57LyogXHJcbiAgICAgIDxoMT57cGxheWVyQ2hvaWNlfTwvaDE+XHJcbiAgICAgIDxoMT57Y29tcHV0ZXJWYWx9PC9oMT4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJMYWJlbCIsIlBhZ2UiLCJjaG9pY2VzIiwicGxheWVyQ2hvaWNlIiwic2V0UGxheWVyQ2hvaWNlIiwiY29tcHV0ZXJWYWwiLCJzZXRDb21wdXRlclZhbCIsInNjb3JlIiwic2V0U2NvcmUiLCJyYW5kb21Db21wdXRlclZhbCIsImNob2ljZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxvZ2ljIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.tsx\n"));

/***/ })

});