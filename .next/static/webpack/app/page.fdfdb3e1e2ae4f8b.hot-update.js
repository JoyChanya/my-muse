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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar/navbar */ \"(app-pages-browser)/./components/navbar/navbar.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_songlist_songlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/songlist/songlist */ \"(app-pages-browser)/./components/songlist/songlist.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst tags = [\n    {\n        title: \"love song\"\n    },\n    {\n        title: \"rock\"\n    },\n    {\n        title: \"international\"\n    },\n    {\n        title: \"Thai pop\"\n    },\n    {\n        title: \"heartbreaking\"\n    }\n];\nfunction Home() {\n    _s();\n    const [song, setsong] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [showTable, setShowTable] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n        lineNumber: 20,\n        columnNumber: 46\n    }, this));\n    const search = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_songlist_songlist__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            song: song\n        }, void 0, false, {\n            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center bg-cover bg-[url('/background.png')]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex min-h-screen w-full justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center space-y-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold text-5xl text-white\",\n                            children: \"Find your perfect song right here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold text-xl text-white\",\n                            children: \"Type the lyrics, artist, genre, or context that you long for\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: (e)=>{\n                                setShowTable;\n                                e.preventDefault();\n                            },\n                            className: \"w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                type: \"text\",\n                                placeholder: \"\\uD83D\\uDD0E Search\",\n                                onChange: (e)=>setsong(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center gap-2 md:flex md:space-x-6 md:space-y-0\",\n                            children: tags.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-white opacity-50 rounded-full text-black p-4\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, this)\n                                }, idx, false, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fGBW9gOxnAa9tpiEsdkOcHWuk6Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFZ0Q7QUFDSDtBQUNRO0FBQ3RCO0FBRS9CLE1BQU1JLE9BQU87SUFDWDtRQUFFQyxPQUFPO0lBQVc7SUFDcEI7UUFBRUEsT0FBTztJQUFNO0lBQ2Y7UUFBRUEsT0FBTztJQUFlO0lBQ3hCO1FBQUVBLE9BQU87SUFBVTtJQUNuQjtRQUFFQSxPQUFPO0lBQWU7Q0FDekI7QUFHYyxTQUFTQzs7SUFFdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFTO0lBQ3pDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsZUFBQyw4REFBQ1E7Ozs7O0lBQzVDLE1BQU1DLFNBQVM7UUFDYixxQkFDRSw4REFBQ1YscUVBQVFBO1lBQUNLLE1BQU1BOzs7Ozs7SUFFcEI7SUFFQSxxQkFDRSw4REFBQ007UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNkLGlFQUFNQTs7Ozs7MEJBQ1AsOERBQUNXO2dCQUFJRyxXQUFVOzBCQUNiLDRFQUFDSDtvQkFBSUcsV0FBWTs7c0NBQ2YsOERBQUNDOzRCQUFFRCxXQUFZO3NDQUFnQzs7Ozs7O3NDQUMvQyw4REFBQ0M7NEJBQUVELFdBQVk7c0NBQStCOzs7Ozs7c0NBQ2hELDhEQUFDRTs0QkFBS0MsVUFBVSxDQUFDQztnQ0FFZlI7Z0NBQ0FRLEVBQUVDLGNBQWM7NEJBQ2xCOzRCQUFHTCxXQUFVO3NDQUNYLDRFQUFDYix1REFBS0E7Z0NBQUNtQixNQUFLO2dDQUFPQyxhQUFjO2dDQUFZQyxVQUFVLENBQUNKLElBQUtWLFFBQVFVLEVBQUVLLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7c0NBRW5GLDhEQUFDYjs0QkFBSUcsV0FBVTtzQ0FDWlYsS0FBS3FCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxvQkFDZiw4REFBQ2hCOzhDQUNDLDRFQUFDaUI7d0NBQU9kLFdBQVU7a0RBQW1EWSxLQUFLckIsS0FBSzs7Ozs7O21DQUR2RXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFheEI7R0F2Q3dCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXInXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxuaW1wb3J0IFNvbmdsaXN0IGZyb20gJ0AvY29tcG9uZW50cy9zb25nbGlzdC9zb25nbGlzdCdcbmltcG9ydCB7dXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgdGFncyA9IFtcbiAgeyB0aXRsZTogXCJsb3ZlIHNvbmdcIn0sXG4gIHsgdGl0bGU6IFwicm9ja1wifSxcbiAgeyB0aXRsZTogXCJpbnRlcm5hdGlvbmFsXCJ9LFxuICB7IHRpdGxlOiBcIlRoYWkgcG9wXCJ9LFxuICB7IHRpdGxlOiBcImhlYXJ0YnJlYWtpbmdcIn0sXG5dXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpXG57XG4gIGNvbnN0IFtzb25nLCBzZXRzb25nXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbc2hvd1RhYmxlLCBzZXRTaG93VGFibGVdID0gdXNlU3RhdGUoPGRpdi8+KTtcbiAgY29uc3Qgc2VhcmNoID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8U29uZ2xpc3Qgc29uZz17c29uZ30vPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWNvdmVyIGJnLVt1cmwoJy9iYWNrZ3JvdW5kLnBuZycpXVwiPlxuICAgICAgPE5hdmJhci8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IG1pbi1oLXNjcmVlbiB3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzcGFjZS15LTEwXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lID0gJ2ZvbnQtYm9sZCB0ZXh0LTV4bCB0ZXh0LXdoaXRlJz5GaW5kIHlvdXIgcGVyZmVjdCBzb25nIHJpZ2h0IGhlcmU8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lID0gJ2ZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtd2hpdGUnPlR5cGUgdGhlIGx5cmljcywgYXJ0aXN0LCBnZW5yZSwgb3IgY29udGV4dCB0aGF0IHlvdSBsb25nIGZvcjwvcD5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgc2V0U2hvd1RhYmxlXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9fSBjbGFzc05hbWU9J3ctZnVsbCc+XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e2Dwn5SOIFNlYXJjaGB9IG9uQ2hhbmdlPXsoZSk9PiBzZXRzb25nKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMiBtZDpmbGV4IG1kOnNwYWNlLXgtNiBtZDpzcGFjZS15LTBcIj5cbiAgICAgICAgICAgIHt0YWdzLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy13aGl0ZSBvcGFjaXR5LTUwIHJvdW5kZWQtZnVsbCB0ZXh0LWJsYWNrIHAtNCc+e2l0ZW0udGl0bGV9PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJJbnB1dCIsIlNvbmdsaXN0IiwidXNlU3RhdGUiLCJ0YWdzIiwidGl0bGUiLCJIb21lIiwic29uZyIsInNldHNvbmciLCJzaG93VGFibGUiLCJzZXRTaG93VGFibGUiLCJkaXYiLCJzZWFyY2giLCJtYWluIiwiY2xhc3NOYW1lIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiaWR4IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});