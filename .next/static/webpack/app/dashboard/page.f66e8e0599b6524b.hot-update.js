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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const choices = [\n        \"ROCK\",\n        \"PAPER\",\n        \"SCISSORS\"\n    ];\n    const [playerChoice, setPlayerChoice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [computerVal, setComputerVal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function randomComputerVal() {\n        let choice = Math.floor(Math.random() * 3);\n        setComputerVal(choices[choice]);\n    }\n    function logic() {\n        randomComputerVal();\n        if (playerChoice == \"ROCK\" && computerVal == \"SCISSORS\" || playerChoice == \"SCISSORS\" && computerVal == \"PAPER\" || playerChoice == \"PAPER\" && computerVal == \"ROCK\") {\n            setScore(score + 1);\n        } else {\n            setScore(score - 1);\n        }\n        if (playerChoice == \"\") {\n            setScore(0);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        logic();\n    }, [\n        playerChoice\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" md:flex p-5 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                className: \"md:flex  justify-center  h-screen p-5\",\n                children: score\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                    className: \"grid grid-row gap-9 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            onClick: ()=>setPlayerChoice(\"SCISSORS\"),\n                            children: \"✂️\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            onClick: ()=>setPlayerChoice(\"ROCK\"),\n                            children: \"\\uD83E\\uDEA8\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            onClick: ()=>setPlayerChoice(\"PAPER\"),\n                            children: \"\\uD83E\\uDD6C\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\my-app\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"TIv1OYWBWB9+rSaLg4tiRh1Xoto=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0k7QUFTbEI7QUFDZ0I7QUFFL0IsU0FBU007O0lBQ3RCLE1BQU1DLFVBQVU7UUFBQztRQUFRO1FBQVM7S0FBVztJQUM3QyxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFFL0MsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDO0lBRW5DLFNBQVNhO1FBQ1AsSUFBSUMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUs7UUFDeENQLGVBQWVKLE9BQU8sQ0FBQ1EsT0FBTztJQUNoQztJQUVBLFNBQVNJO1FBQ1BMO1FBQ0EsSUFDRSxnQkFBaUIsVUFBVUosZUFBZSxjQUN6Q0YsZ0JBQWdCLGNBQWNFLGVBQWUsV0FDN0NGLGdCQUFnQixXQUFXRSxlQUFlLFFBQzNDO1lBQ0FHLFNBQVNELFFBQVE7UUFDbkIsT0FBTztZQUNMQyxTQUFTRCxRQUFRO1FBQ25CO1FBQ0EsSUFBSUosZ0JBQWdCLElBQUk7WUFDdEJLLFNBQVM7UUFDWDtJQUNGO0lBQ0FiLGdEQUFTQSxDQUFDO1FBQ1JtQjtJQUNGLEdBQUc7UUFBQ1g7S0FBYTtJQUVqQixxQkFDRSw4REFBQ1k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNoQix1REFBS0E7Z0JBQUNnQixXQUFVOzBCQUF5Q1Q7Ozs7OzswQkFFMUQsOERBQUNULHFEQUFJQTswQkFDSCw0RUFBQ0MsNERBQVdBO29CQUFDaUIsV0FBVTs7c0NBQ3JCLDhEQUFDbkIseURBQU1BOzRCQUFDb0IsU0FBUyxJQUFNYixnQkFBZ0I7c0NBQWE7Ozs7OztzQ0FDcEQsOERBQUNQLHlEQUFNQTs0QkFBQ29CLFNBQVMsSUFBTWIsZ0JBQWdCO3NDQUFTOzs7Ozs7c0NBQ2hELDhEQUFDUCx5REFBTUE7NEJBQUNvQixTQUFTLElBQU1iLGdCQUFnQjtzQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVM0Q7R0FqRHdCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2QxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmREZXNjcmlwdGlvbixcclxuICBDYXJkRm9vdGVyLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZFRpdGxlLFxyXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3QgY2hvaWNlcyA9IFtcIlJPQ0tcIiwgXCJQQVBFUlwiLCBcIlNDSVNTT1JTXCJdO1xyXG4gIGNvbnN0IFtwbGF5ZXJDaG9pY2UsIHNldFBsYXllckNob2ljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tcHV0ZXJWYWwsIHNldENvbXB1dGVyVmFsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBmdW5jdGlvbiByYW5kb21Db21wdXRlclZhbCgpIHtcclxuICAgIGxldCBjaG9pY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgIHNldENvbXB1dGVyVmFsKGNob2ljZXNbY2hvaWNlXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsb2dpYygpIHtcclxuICAgIHJhbmRvbUNvbXB1dGVyVmFsKCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIChwbGF5ZXJDaG9pY2UgPT0gXCJST0NLXCIgJiYgY29tcHV0ZXJWYWwgPT0gXCJTQ0lTU09SU1wiKSB8fFxyXG4gICAgICAocGxheWVyQ2hvaWNlID09IFwiU0NJU1NPUlNcIiAmJiBjb21wdXRlclZhbCA9PSBcIlBBUEVSXCIpIHx8XHJcbiAgICAgIChwbGF5ZXJDaG9pY2UgPT0gXCJQQVBFUlwiICYmIGNvbXB1dGVyVmFsID09IFwiUk9DS1wiKVxyXG4gICAgKSB7XHJcbiAgICAgIHNldFNjb3JlKHNjb3JlICsgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTY29yZShzY29yZSAtIDEpO1xyXG4gICAgfVxyXG4gICAgaWYgKHBsYXllckNob2ljZSA9PSBcIlwiKSB7XHJcbiAgICAgIHNldFNjb3JlKDApO1xyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9naWMoKTtcclxuICB9LCBbcGxheWVyQ2hvaWNlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDpmbGV4IHAtNSBcIj5cclxuICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1kOmZsZXggIGp1c3RpZnktY2VudGVyICBoLXNjcmVlbiBwLTVcIj57c2NvcmV9PC9MYWJlbD5cclxuXHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93IGdhcC05IFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQbGF5ZXJDaG9pY2UoXCJTQ0lTU09SU1wiKX0+4pyC77iPPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBsYXllckNob2ljZShcIlJPQ0tcIil9PvCfqqg8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0UGxheWVyQ2hvaWNlKFwiUEFQRVJcIil9PvCfpaw8L0J1dHRvbj5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICB7LyogXHJcbiAgICAgIDxoMT57cGxheWVyQ2hvaWNlfTwvaDE+XHJcbiAgICAgIDxoMT57Y29tcHV0ZXJWYWx9PC9oMT4gXHJcbiAgICAgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjZW50ZXIgaC1zY3JlZW4qL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiTGFiZWwiLCJQYWdlIiwiY2hvaWNlcyIsInBsYXllckNob2ljZSIsInNldFBsYXllckNob2ljZSIsImNvbXB1dGVyVmFsIiwic2V0Q29tcHV0ZXJWYWwiLCJzY29yZSIsInNldFNjb3JlIiwicmFuZG9tQ29tcHV0ZXJWYWwiLCJjaG9pY2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsb2dpYyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.tsx\n"));

/***/ })

});