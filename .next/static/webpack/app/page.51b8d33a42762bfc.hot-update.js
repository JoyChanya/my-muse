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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar/navbar */ \"(app-pages-browser)/./components/navbar/navbar.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_songlist_songlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/songlist/songlist */ \"(app-pages-browser)/./components/songlist/songlist.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst tags = [\n    {\n        title: \"love song\"\n    },\n    {\n        title: \"rock\"\n    },\n    {\n        title: \"international\"\n    },\n    {\n        title: \"Thai pop\"\n    },\n    {\n        title: \"heartbreaking\"\n    }\n];\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [song, setsong] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [showTable, setShowTable] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(song);\n    });\n    const search = ()=>{\n        setShowTable(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center bg-cover bg-[url('/background.png')]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex min-h-screen w-full justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center space-y-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold text-5xl text-white\",\n                            children: \"Find your perfect song right here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold text-xl text-white\",\n                            children: \"Type the lyrics, artist, genre, or context that you long for\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: (e)=>{\n                                e.preventDefault();\n                                search();\n                            },\n                            className: \"w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                type: \"text\",\n                                placeholder: \"\\uD83D\\uDD0E Search\",\n                                value: song,\n                                onChange: (e)=>setsong(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center gap-2 md:flex md:space-x-6 md:space-y-0\",\n                            children: tags.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-white opacity-50 rounded-full text-black p-4\",\n                                        onClick: ()=>setsong(item.title),\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, this)\n                                }, idx, false, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        showTable ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_songlist_songlist__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            song: song\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 24\n                        }, this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/app/page.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"AfAdq6Oy6bHsAUDbRDx3QPiY3w8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVnRDtBQUNIO0FBQ1E7QUFDWDtBQUNIO0FBRXZDLE1BQU1NLE9BQU87SUFDWDtRQUFFQyxPQUFPO0lBQVc7SUFDcEI7UUFBRUEsT0FBTztJQUFNO0lBQ2Y7UUFBRUEsT0FBTztJQUFlO0lBQ3hCO1FBQUVBLE9BQU87SUFBVTtJQUNuQjtRQUFFQSxPQUFPO0lBQWU7Q0FDekI7QUFHYyxTQUFTQzs7SUFFdEIsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBUztJQUN6QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxPQUFNQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFTO0lBQzFDRCxnREFBU0EsQ0FBQztRQUNSYSxRQUFRQyxHQUFHLENBQUNQO0lBQ2Q7SUFDQSxNQUFNUSxTQUFTO1FBRWJMLGFBQWE7SUFDZjtJQUNBLHFCQUNFLDhEQUFDTTtRQUFLQyxXQUFVOzswQkFDZCw4REFBQ3BCLGlFQUFNQTs7Ozs7MEJBQ1AsOERBQUNxQjtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVk7O3NDQUNmLDhEQUFDRTs0QkFBRUYsV0FBWTtzQ0FBZ0M7Ozs7OztzQ0FDL0MsOERBQUNFOzRCQUFFRixXQUFZO3NDQUErQjs7Ozs7O3NDQUNoRCw4REFBQ0c7NEJBQUtDLFVBQVUsQ0FBQ0M7Z0NBRWZBLEVBQUVDLGNBQWM7Z0NBQ2hCUjs0QkFFRjs0QkFBR0UsV0FBVTtzQ0FDWCw0RUFBQ25CLHVEQUFLQTtnQ0FBQzBCLE1BQUs7Z0NBQU9DLGFBQWE7Z0NBQWFDLE9BQU9uQjtnQ0FBTW9CLFVBQVUsQ0FBQ0wsSUFBS2QsUUFBUWMsRUFBRU0sTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7OztzQ0FFaEcsOERBQUNSOzRCQUFJRCxXQUFVO3NDQUNaZCxLQUFLMEIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLG9CQUNmLDhEQUFDYjs4Q0FDQyw0RUFBQ2M7d0NBQU9mLFdBQVU7d0NBQWtEZ0IsU0FBUyxJQUFNekIsUUFBUXNCLEtBQUsxQixLQUFLO2tEQUFJMEIsS0FBSzFCLEtBQUs7Ozs7OzttQ0FEM0cyQjs7Ozs7Ozs7Ozt3QkFLYnRCLDBCQUFZLDhEQUFDVixxRUFBUUE7NEJBQUNRLE1BQU1BOzs7OzttQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWpEO0dBN0N3QkY7O1FBRVBILGtEQUFTQTs7O0tBRkZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyJ1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCBTb25nbGlzdCBmcm9tICdAL2NvbXBvbmVudHMvc29uZ2xpc3Qvc29uZ2xpc3QnXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCB0YWdzID0gW1xuICB7IHRpdGxlOiBcImxvdmUgc29uZ1wifSxcbiAgeyB0aXRsZTogXCJyb2NrXCJ9LFxuICB7IHRpdGxlOiBcImludGVybmF0aW9uYWxcIn0sXG4gIHsgdGl0bGU6IFwiVGhhaSBwb3BcIn0sXG4gIHsgdGl0bGU6IFwiaGVhcnRicmVha2luZ1wifSxcbl1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKClcbnsgXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc29uZywgc2V0c29uZ10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3Nob3dUYWJsZSwgc2V0U2hvd1RhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0LHNldElucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zb2xlLmxvZyhzb25nKVxuICB9KVxuICBjb25zdCBzZWFyY2ggPSAoKSA9PiB7XG4gICAgXG4gICAgc2V0U2hvd1RhYmxlKHRydWUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctY292ZXIgYmctW3VybCgnL2JhY2tncm91bmQucG5nJyldXCI+XG4gICAgICA8TmF2YmFyLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggbWluLWgtc2NyZWVuIHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHNwYWNlLXktMTBcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWUgPSAnZm9udC1ib2xkIHRleHQtNXhsIHRleHQtd2hpdGUnPkZpbmQgeW91ciBwZXJmZWN0IHNvbmcgcmlnaHQgaGVyZTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWUgPSAnZm9udC1ib2xkIHRleHQteGwgdGV4dC13aGl0ZSc+VHlwZSB0aGUgbHlyaWNzLCBhcnRpc3QsIGdlbnJlLCBvciBjb250ZXh0IHRoYXQgeW91IGxvbmcgZm9yPC9wPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+XG4gICAgICAgIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2VhcmNoKCk7XG5cbiAgICAgICAgfX0gY2xhc3NOYW1lPSd3LWZ1bGwnPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXsn8J+UjiBTZWFyY2gnfSB2YWx1ZT17c29uZ30gb25DaGFuZ2U9eyhlKT0+IHNldHNvbmcoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIG1kOmZsZXggbWQ6c3BhY2UteC02IG1kOnNwYWNlLXktMFwiPlxuICAgICAgICAgICAge3RhZ3MubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLXdoaXRlIG9wYWNpdHktNTAgcm91bmRlZC1mdWxsIHRleHQtYmxhY2sgcC00JyBvbkNsaWNrPXsoKSA9PiBzZXRzb25nKGl0ZW0udGl0bGUpfT57aXRlbS50aXRsZX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c2hvd1RhYmxlID8gPFNvbmdsaXN0IHNvbmc9e3Nvbmd9Lz4gOiBudWxsfVxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJJbnB1dCIsIlNvbmdsaXN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJ0YWdzIiwidGl0bGUiLCJIb21lIiwicm91dGVyIiwic29uZyIsInNldHNvbmciLCJzaG93VGFibGUiLCJzZXRTaG93VGFibGUiLCJpbnB1dCIsInNldElucHV0IiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});