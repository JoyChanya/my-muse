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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar/navbar */ \"(app-pages-browser)/./components/navbar/navbar.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_songlist_songlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/songlist/songlist */ \"(app-pages-browser)/./components/songlist/songlist.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst tags = [\n    {\n        title: \"love song\"\n    },\n    {\n        title: \"rock\"\n    },\n    {\n        title: \"international\"\n    },\n    {\n        title: \"Thai pop\"\n    },\n    {\n        title: \"heartbreaking\"\n    }\n];\nfunction Home() {\n    _s();\n    const [song, setsong] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [showTable, setShowTable] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(song);\n    });\n    const search = ()=>{\n        setShowTable(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center bg-cover bg-[url('/background.png')]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex min-h-screen w-full justify-center pt-[2rem] md:pt-[10rem]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center space-y-10 px-[4rem]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold text-2xl md:text-5xl text-white\",\n                            children: \"Find your perfect song right here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-l md:text-xl text-white break-words\",\n                            children: \"Type the lyrics, artist, genre, or context that you long for\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: (e)=>{\n                                e.preventDefault();\n                                search();\n                            },\n                            className: \"w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                type: \"text\",\n                                placeholder: \"\\uD83D\\uDD0E Search\",\n                                value: song,\n                                onChange: (e)=>setsong(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex grid grid-cols-2 justify-center items-center gap-x-10 space-y-2 md:gap-4 md:flex md:space-x-6 md:space-y-0\",\n                            children: tags.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-white text-[0.7rem] opacity-50 rounded-full text-black p-4\",\n                                        onClick: ()=>setsong(item.title),\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this)\n                                }, idx, false, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        showTable ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_songlist_songlist__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            song: song\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 24\n                        }, this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ufqmg/S/GTfmKYTezztkgYJBWHM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFZ0Q7QUFDSDtBQUNRO0FBQ1g7QUFHMUMsTUFBTUssT0FBTztJQUNYO1FBQUVDLE9BQU87SUFBVztJQUNwQjtRQUFFQSxPQUFPO0lBQU07SUFDZjtRQUFFQSxPQUFPO0lBQWU7SUFDeEI7UUFBRUEsT0FBTztJQUFVO0lBQ25CO1FBQUVBLE9BQU87SUFBZTtDQUN6QjtBQUdjLFNBQVNDOztJQUV0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQVM7SUFDekMsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1EsT0FBTUMsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBUztJQUMxQ0QsZ0RBQVNBLENBQUM7UUFDUlcsUUFBUUMsR0FBRyxDQUFDUDtJQUNkO0lBQ0EsTUFBTVEsU0FBUztRQUNUTCxhQUFhO0lBQ25CO0lBQ0EscUJBQ0UsOERBQUNNO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDbEIsaUVBQU1BOzs7OzswQkFDUCw4REFBQ21CO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBWTs7c0NBQ2YsOERBQUNFOzRCQUFFRixXQUFZO3NDQUE0Qzs7Ozs7O3NDQUMzRCw4REFBQ0U7NEJBQUVGLFdBQVk7c0NBQTJDOzs7Ozs7c0NBQzVELDhEQUFDRzs0QkFBS0MsVUFBVSxDQUFDQztnQ0FFZkEsRUFBRUMsY0FBYztnQ0FDaEJSOzRCQUVGOzRCQUFHRSxXQUFVO3NDQUNYLDRFQUFDakIsdURBQUtBO2dDQUFDd0IsTUFBSztnQ0FBT0MsYUFBYTtnQ0FBYUMsT0FBT25CO2dDQUFNb0IsVUFBVSxDQUFDTCxJQUFLZCxRQUFRYyxFQUFFTSxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7O3NDQUVoRyw4REFBQ1I7NEJBQUlELFdBQVU7c0NBQ1piLEtBQUt5QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsb0JBQ2YsOERBQUNiOzhDQUNDLDRFQUFDYzt3Q0FBT2YsV0FBVTt3Q0FBZ0VnQixTQUFTLElBQU16QixRQUFRc0IsS0FBS3pCLEtBQUs7a0RBQUl5QixLQUFLekIsS0FBSzs7Ozs7O21DQUR6SDBCOzs7Ozs7Ozs7O3dCQUtidEIsMEJBQVksOERBQUNSLHFFQUFRQTs0QkFBQ00sTUFBTUE7Ozs7O21DQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakQ7R0EzQ3dCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhcidcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiXG5pbXBvcnQgU29uZ2xpc3QgZnJvbSAnQC9jb21wb25lbnRzL3NvbmdsaXN0L3NvbmdsaXN0J1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgdGFncyA9IFtcbiAgeyB0aXRsZTogXCJsb3ZlIHNvbmdcIn0sXG4gIHsgdGl0bGU6IFwicm9ja1wifSxcbiAgeyB0aXRsZTogXCJpbnRlcm5hdGlvbmFsXCJ9LFxuICB7IHRpdGxlOiBcIlRoYWkgcG9wXCJ9LFxuICB7IHRpdGxlOiBcImhlYXJ0YnJlYWtpbmdcIn0sXG5dXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpXG57IFxuICBjb25zdCBbc29uZywgc2V0c29uZ10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3Nob3dUYWJsZSwgc2V0U2hvd1RhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0LHNldElucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zb2xlLmxvZyhzb25nKVxuICB9KVxuICBjb25zdCBzZWFyY2ggPSAoKSA9PiB7XG4gICAgICAgIHNldFNob3dUYWJsZSh0cnVlKVxuICB9XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWNvdmVyIGJnLVt1cmwoJy9iYWNrZ3JvdW5kLnBuZycpXVwiPlxuICAgICAgPE5hdmJhci8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IG1pbi1oLXNjcmVlbiB3LWZ1bGwganVzdGlmeS1jZW50ZXIgcHQtWzJyZW1dIG1kOnB0LVsxMHJlbV1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHNwYWNlLXktMTAgcHgtWzRyZW1dXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lID0gJ2ZvbnQtYm9sZCB0ZXh0LTJ4bCBtZDp0ZXh0LTV4bCB0ZXh0LXdoaXRlJz5GaW5kIHlvdXIgcGVyZmVjdCBzb25nIHJpZ2h0IGhlcmU8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lID0gJ3RleHQtbCBtZDp0ZXh0LXhsIHRleHQtd2hpdGUgYnJlYWstd29yZHMnPlR5cGUgdGhlIGx5cmljcywgYXJ0aXN0LCBnZW5yZSwgb3IgY29udGV4dCB0aGF0IHlvdSBsb25nIGZvcjwvcD5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNlYXJjaCgpO1xuXG4gICAgICAgIH19IGNsYXNzTmFtZT0ndy1mdWxsJz5cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17J/CflI4gU2VhcmNoJ30gdmFsdWU9e3Nvbmd9IG9uQ2hhbmdlPXsoZSk9PiBzZXRzb25nKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdyaWQgZ3JpZC1jb2xzLTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC14LTEwIHNwYWNlLXktMiBtZDpnYXAtNCBtZDpmbGV4IG1kOnNwYWNlLXgtNiBtZDpzcGFjZS15LTBcIj5cbiAgICAgICAgICAgIHt0YWdzLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy13aGl0ZSB0ZXh0LVswLjdyZW1dIG9wYWNpdHktNTAgcm91bmRlZC1mdWxsIHRleHQtYmxhY2sgcC00JyBvbkNsaWNrPXsoKSA9PiBzZXRzb25nKGl0ZW0udGl0bGUpfT57aXRlbS50aXRsZX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c2hvd1RhYmxlID8gPFNvbmdsaXN0IHNvbmc9e3Nvbmd9Lz4gOiBudWxsfVxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJJbnB1dCIsIlNvbmdsaXN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0YWdzIiwidGl0bGUiLCJIb21lIiwic29uZyIsInNldHNvbmciLCJzaG93VGFibGUiLCJzZXRTaG93VGFibGUiLCJpbnB1dCIsInNldElucHV0IiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});