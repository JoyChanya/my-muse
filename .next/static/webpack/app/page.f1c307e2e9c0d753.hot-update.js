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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar/navbar */ \"(app-pages-browser)/./components/navbar/navbar.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_songlist_songlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/songlist/songlist */ \"(app-pages-browser)/./components/songlist/songlist.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst tags = [\n    {\n        title: \"love song\"\n    },\n    {\n        title: \"rock\"\n    },\n    {\n        title: \"international\"\n    },\n    {\n        title: \"Thai pop\"\n    },\n    {\n        title: \"heartbreaking\"\n    }\n];\nfunction Home() {\n    _s();\n    const [song, setsong] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [showTable, setShowTable] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(song);\n    });\n    const search = ()=>{\n        setShowTable(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center bg-cover bg-[url('/background.png')]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex min-h-screen w-full justify-center pt-[1.5rem] md:pt-[10rem]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center space-y-6 md:space-y-10 px-[2rem]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold text-4xl md:text-5xl text-white\",\n                            children: \"Find your perfect song right here \\uD83C\\uDFB5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-l md:text-xl text-white break-words\",\n                            children: \"Type the lyrics, artist, genre, or context that you long for\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: (e)=>{\n                                e.preventDefault();\n                                search();\n                            },\n                            className: \"w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                type: \"text\",\n                                placeholder: \"\\uD83D\\uDD0E Search\",\n                                value: song,\n                                onChange: (e)=>setsong(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex grid grid-cols-2 justify-center items-center gap-x-10 space-y-2 md:gap-4 md:flex md:space-x-6 md:space-y-0\",\n                            children: tags.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-white text-[0.7rem] opacity-50 rounded-full text-black p-4\",\n                                        onClick: ()=>setsong(item.title),\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this)\n                                }, idx, false, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-4\",\n                            children: showTable ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_songlist_songlist__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                song: song\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 24\n                            }, this) : null\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ufqmg/S/GTfmKYTezztkgYJBWHM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFZ0Q7QUFDSDtBQUNRO0FBQ1g7QUFHMUMsTUFBTUssT0FBTztJQUNYO1FBQUVDLE9BQU87SUFBVztJQUNwQjtRQUFFQSxPQUFPO0lBQU07SUFDZjtRQUFFQSxPQUFPO0lBQWU7SUFDeEI7UUFBRUEsT0FBTztJQUFVO0lBQ25CO1FBQUVBLE9BQU87SUFBZTtDQUN6QjtBQUdjLFNBQVNDOztJQUV0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQVM7SUFDekMsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1EsT0FBTUMsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBUztJQUMxQ0QsZ0RBQVNBLENBQUM7UUFDUlcsUUFBUUMsR0FBRyxDQUFDUDtJQUNkO0lBQ0EsTUFBTVEsU0FBUztRQUNUTCxhQUFhO0lBQ25CO0lBQ0EscUJBQ0UsOERBQUNNO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDbEIsaUVBQU1BOzs7OzswQkFDUCw4REFBQ21CO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBWTs7c0NBQ2YsOERBQUNFOzRCQUFFRixXQUFZO3NDQUE0Qzs7Ozs7O3NDQUMzRCw4REFBQ0U7NEJBQUVGLFdBQVk7c0NBQTJDOzs7Ozs7c0NBQzVELDhEQUFDRzs0QkFBS0MsVUFBVSxDQUFDQztnQ0FFZkEsRUFBRUMsY0FBYztnQ0FDaEJSOzRCQUVGOzRCQUFHRSxXQUFVO3NDQUNYLDRFQUFDakIsdURBQUtBO2dDQUFDd0IsTUFBSztnQ0FBT0MsYUFBYTtnQ0FBYUMsT0FBT25CO2dDQUFNb0IsVUFBVSxDQUFDTCxJQUFLZCxRQUFRYyxFQUFFTSxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7O3NDQUVoRyw4REFBQ1I7NEJBQUlELFdBQVU7c0NBQ1piLEtBQUt5QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsb0JBQ2YsOERBQUNiOzhDQUNDLDRFQUFDYzt3Q0FBT2YsV0FBVTt3Q0FBZ0VnQixTQUFTLElBQU16QixRQUFRc0IsS0FBS3pCLEtBQUs7a0RBQUl5QixLQUFLekIsS0FBSzs7Ozs7O21DQUR6SDBCOzs7Ozs7Ozs7O3NDQUtkLDhEQUFDYjs0QkFBSUQsV0FBVTtzQ0FDZFIsMEJBQVksOERBQUNSLHFFQUFRQTtnQ0FBQ00sTUFBTUE7Ozs7O3VDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqRDtHQTVDd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyJ1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCBTb25nbGlzdCBmcm9tICdAL2NvbXBvbmVudHMvc29uZ2xpc3Qvc29uZ2xpc3QnXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCB0YWdzID0gW1xuICB7IHRpdGxlOiBcImxvdmUgc29uZ1wifSxcbiAgeyB0aXRsZTogXCJyb2NrXCJ9LFxuICB7IHRpdGxlOiBcImludGVybmF0aW9uYWxcIn0sXG4gIHsgdGl0bGU6IFwiVGhhaSBwb3BcIn0sXG4gIHsgdGl0bGU6IFwiaGVhcnRicmVha2luZ1wifSxcbl1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKClcbnsgXG4gIGNvbnN0IFtzb25nLCBzZXRzb25nXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbc2hvd1RhYmxlLCBzZXRTaG93VGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5wdXQsc2V0SW5wdXRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnNvbGUubG9nKHNvbmcpXG4gIH0pXG4gIGNvbnN0IHNlYXJjaCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd1RhYmxlKHRydWUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctY292ZXIgYmctW3VybCgnL2JhY2tncm91bmQucG5nJyldXCI+XG4gICAgICA8TmF2YmFyLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggbWluLWgtc2NyZWVuIHctZnVsbCBqdXN0aWZ5LWNlbnRlciBwdC1bMS41cmVtXSBtZDpwdC1bMTByZW1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzcGFjZS15LTYgbWQ6c3BhY2UteS0xMCBweC1bMnJlbV1cIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWUgPSAnZm9udC1ib2xkIHRleHQtNHhsIG1kOnRleHQtNXhsIHRleHQtd2hpdGUnPkZpbmQgeW91ciBwZXJmZWN0IHNvbmcgcmlnaHQgaGVyZSDwn461PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZSA9ICd0ZXh0LWwgbWQ6dGV4dC14bCB0ZXh0LXdoaXRlIGJyZWFrLXdvcmRzJz5UeXBlIHRoZSBseXJpY3MsIGFydGlzdCwgZ2VucmUsIG9yIGNvbnRleHQgdGhhdCB5b3UgbG9uZyBmb3I8L3A+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT5cbiAgICAgICAge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzZWFyY2goKTtcblxuICAgICAgICB9fSBjbGFzc05hbWU9J3ctZnVsbCc+XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9eyfwn5SOIFNlYXJjaCd9IHZhbHVlPXtzb25nfSBvbkNoYW5nZT17KGUpPT4gc2V0c29uZyhlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncmlkIGdyaWQtY29scy0yIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAteC0xMCBzcGFjZS15LTIgbWQ6Z2FwLTQgbWQ6ZmxleCBtZDpzcGFjZS14LTYgbWQ6c3BhY2UteS0wXCI+XG4gICAgICAgICAgICB7dGFncy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctd2hpdGUgdGV4dC1bMC43cmVtXSBvcGFjaXR5LTUwIHJvdW5kZWQtZnVsbCB0ZXh0LWJsYWNrIHAtNCcgb25DbGljaz17KCkgPT4gc2V0c29uZyhpdGVtLnRpdGxlKX0+e2l0ZW0udGl0bGV9PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B0LTQnPlxuICAgICAgICAgIHtzaG93VGFibGUgPyA8U29uZ2xpc3Qgc29uZz17c29uZ30vPiA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJJbnB1dCIsIlNvbmdsaXN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0YWdzIiwidGl0bGUiLCJIb21lIiwic29uZyIsInNldHNvbmciLCJzaG93VGFibGUiLCJzZXRTaG93VGFibGUiLCJpbnB1dCIsInNldElucHV0IiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});