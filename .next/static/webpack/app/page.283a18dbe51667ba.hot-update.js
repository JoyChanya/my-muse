"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar/navbar */ \"(app-pages-browser)/./components/navbar/navbar.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_songlist_songlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/songlist/songlist */ \"(app-pages-browser)/./components/songlist/songlist.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst tags = [\n    {\n        title: \"love song\"\n    },\n    {\n        title: \"rock\"\n    },\n    {\n        title: \"international\"\n    },\n    {\n        title: \"Thai pop\"\n    },\n    {\n        title: \"heartbreaking\"\n    }\n];\nfunction Home() {\n    _s();\n    const [song, setsong] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [showTable, setShowTable] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const search = ()=>{\n        setShowTable(true);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: showTable ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_songlist_songlist__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                song: song\n            }, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 24\n            }, this) : null\n        }, void 0, false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center bg-cover bg-[url('/background.png')]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex min-h-screen w-full justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center space-y-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold text-5xl text-white\",\n                            children: \"Find your perfect song right here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold text-xl text-white\",\n                            children: \"Type the lyrics, artist, genre, or context that you long for\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: (e)=>{\n                                e.preventDefault();\n                                search();\n                            },\n                            className: \"w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    type: \"text\",\n                                    placeholder: \"\\uD83D\\uDD0E Search\",\n                                    onChange: (e)=>setsong(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: search,\n                                    children: \"search\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center gap-2 md:flex md:space-x-6 md:space-y-0\",\n                            children: tags.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-white opacity-50 rounded-full text-black p-4\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this)\n                                }, idx, false, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Wfd0S979STF8rmJ/2uVxgXktzmc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFZ0Q7QUFDSDtBQUNRO0FBQ3RCO0FBRS9CLE1BQU1JLE9BQU87SUFDWDtRQUFFQyxPQUFPO0lBQVc7SUFDcEI7UUFBRUEsT0FBTztJQUFNO0lBQ2Y7UUFBRUEsT0FBTztJQUFlO0lBQ3hCO1FBQUVBLE9BQU87SUFBVTtJQUNuQjtRQUFFQSxPQUFPO0lBQWU7Q0FDekI7QUFHYyxTQUFTQzs7SUFFdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFTO0lBQ3pDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNUSxTQUFTO1FBQ2JELGFBQWE7UUFDYixxQkFDRTtzQkFDS0QsMEJBQVksOERBQUNQLHFFQUFRQTtnQkFBQ0ssTUFBTUE7Ozs7O3VCQUFVOztJQUcvQztJQUNBLHFCQUNFLDhEQUFDSztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ2IsaUVBQU1BOzs7OzswQkFDUCw4REFBQ2M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFZOztzQ0FDZiw4REFBQ0U7NEJBQUVGLFdBQVk7c0NBQWdDOzs7Ozs7c0NBQy9DLDhEQUFDRTs0QkFBRUYsV0FBWTtzQ0FBK0I7Ozs7OztzQ0FDaEQsOERBQUNHOzRCQUFLQyxVQUFVLENBQUNDO2dDQUVmQSxFQUFFQyxjQUFjO2dDQUNoQlI7NEJBQ0Y7NEJBQUdFLFdBQVU7OzhDQUNYLDhEQUFDWix1REFBS0E7b0NBQUNtQixNQUFLO29DQUFPQyxhQUFjO29DQUFZQyxVQUFVLENBQUNKLElBQUtWLFFBQVFVLEVBQUVLLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzhDQUNuRiw4REFBQ0M7b0NBQU9DLFNBQVNmOzhDQUFROzs7Ozs7Ozs7Ozs7c0NBRXpCLDhEQUFDRzs0QkFBSUQsV0FBVTtzQ0FDWlQsS0FBS3VCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxvQkFDZiw4REFBQ2Y7OENBQ0MsNEVBQUNXO3dDQUFPWixXQUFVO2tEQUFtRGUsS0FBS3ZCLEtBQUs7Ozs7OzttQ0FEdkV3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3hCO0dBM0N3QnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyJ1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCBTb25nbGlzdCBmcm9tICdAL2NvbXBvbmVudHMvc29uZ2xpc3Qvc29uZ2xpc3QnXG5pbXBvcnQge3VzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHRhZ3MgPSBbXG4gIHsgdGl0bGU6IFwibG92ZSBzb25nXCJ9LFxuICB7IHRpdGxlOiBcInJvY2tcIn0sXG4gIHsgdGl0bGU6IFwiaW50ZXJuYXRpb25hbFwifSxcbiAgeyB0aXRsZTogXCJUaGFpIHBvcFwifSxcbiAgeyB0aXRsZTogXCJoZWFydGJyZWFraW5nXCJ9LFxuXVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKVxue1xuICBjb25zdCBbc29uZywgc2V0c29uZ10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3Nob3dUYWJsZSwgc2V0U2hvd1RhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2VhcmNoID0gKCkgPT4ge1xuICAgIHNldFNob3dUYWJsZSh0cnVlKVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICAgIHtzaG93VGFibGUgPyA8U29uZ2xpc3Qgc29uZz17c29uZ30vPiA6IG51bGx9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctY292ZXIgYmctW3VybCgnL2JhY2tncm91bmQucG5nJyldXCI+XG4gICAgICA8TmF2YmFyLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggbWluLWgtc2NyZWVuIHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHNwYWNlLXktMTBcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWUgPSAnZm9udC1ib2xkIHRleHQtNXhsIHRleHQtd2hpdGUnPkZpbmQgeW91ciBwZXJmZWN0IHNvbmcgcmlnaHQgaGVyZTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWUgPSAnZm9udC1ib2xkIHRleHQteGwgdGV4dC13aGl0ZSc+VHlwZSB0aGUgbHlyaWNzLCBhcnRpc3QsIGdlbnJlLCBvciBjb250ZXh0IHRoYXQgeW91IGxvbmcgZm9yPC9wPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+XG4gICAgICAgIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2VhcmNoKCk7XG4gICAgICAgIH19IGNsYXNzTmFtZT0ndy1mdWxsJz5cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17YPCflI4gU2VhcmNoYH0gb25DaGFuZ2U9eyhlKT0+IHNldHNvbmcoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZWFyY2h9PnNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMiBtZDpmbGV4IG1kOnNwYWNlLXgtNiBtZDpzcGFjZS15LTBcIj5cbiAgICAgICAgICAgIHt0YWdzLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy13aGl0ZSBvcGFjaXR5LTUwIHJvdW5kZWQtZnVsbCB0ZXh0LWJsYWNrIHAtNCc+e2l0ZW0udGl0bGV9PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG5cblxuICAgIDwvbWFpbj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIklucHV0IiwiU29uZ2xpc3QiLCJ1c2VTdGF0ZSIsInRhZ3MiLCJ0aXRsZSIsIkhvbWUiLCJzb25nIiwic2V0c29uZyIsInNob3dUYWJsZSIsInNldFNob3dUYWJsZSIsInNlYXJjaCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJpdGVtIiwiaWR4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});