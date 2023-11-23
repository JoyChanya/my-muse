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

/***/ "(app-pages-browser)/./components/songlist/songlist.tsx":
/*!******************************************!*\
  !*** ./components/songlist/songlist.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Songlist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/table */ \"(app-pages-browser)/./components/ui/table.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Transition!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/transitions/transition.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst tags = [\n    {\n        title: \"love song\"\n    },\n    {\n        title: \"rock\"\n    },\n    {\n        title: \"international\"\n    },\n    {\n        title: \"Thai pop\"\n    },\n    {\n        title: \"heartbreaking\"\n    }\n];\nfunction Songlist() {\n    _s();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [song, setsong] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const fetchData = async ()=>{\n        const res = await fetch(\"https://mymuse-backend-fr74qt3l6a-uc.a.run.app/api/music?lyrics=\".concat(song));\n        const data = await res.json();\n        console.log(data.cluster);\n        setList(data.cluster);\n        if (data.cluster) {\n            setOpen(true);\n        } else {\n            setOpen(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>{\n                    fetchData();\n                    e.preventDefault();\n                },\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                    type: \"text\",\n                    placeholder: \"\\uD83D\\uDD0E Search\",\n                    value: song,\n                    onChange: (e)=>setsong(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex grid grid-cols-2 justify-center items-center gap-x-10 space-y-2 md:gap-4 md:flex md:space-x-6 md:space-y-0\",\n                children: tags.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-white text-[1rem] opacity-50 rounded-full text-black p-4\",\n                            onClick: ()=>setsong(item.title),\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this)\n                    }, idx, false, {\n                        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n                show: isOpen,\n                enter: \"transform \",\n                enterFrom: \"opacity-0\",\n                enterTo: \"opacity-100\",\n                leave: \"transition-opcaity duration-150\",\n                leaveFrom: \"opacity-100\",\n                leaveTo: \"opacity-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pb-[10rem]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHeader, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                                            className: \"w-[100px]\",\n                                            children: \"#\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                                            children: \"Song\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                                            children: \"Artist\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableBody, {\n                                children: list.map((song, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                className: \"font-medium\",\n                                                children: index + 1\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                className: \"font-medium\",\n                                                children: song[0]\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                                className: \"font-medium\",\n                                                children: song[1]\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Songlist, \"0Ar3O7CwMlTBPwHQM77jEhb3l3Y=\");\n_c = Songlist;\nvar _c;\n$RefreshReg$(_c, \"Songlist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc29uZ2xpc3Qvc29uZ2xpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM2QztBQVVmO0FBRWE7QUFDSTtBQUMvQyxNQUFNUyxPQUFPO0lBQ1g7UUFBRUMsT0FBTztJQUFXO0lBQ3BCO1FBQUVBLE9BQU87SUFBTTtJQUNmO1FBQUVBLE9BQU87SUFBZTtJQUN4QjtRQUFFQSxPQUFPO0lBQVU7SUFDbkI7UUFBRUEsT0FBTztJQUFlO0NBQ3pCO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU0sQ0FBQ08sUUFBUUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBLENBQVM7SUFDdkMsTUFBTVcsWUFBWTtRQUNoQixNQUFNQyxNQUFNLE1BQU1DLE1BQU0sbUVBQXdFLE9BQUxKO1FBQzNGLE1BQU1LLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtRQUMzQkMsUUFBUUMsR0FBRyxDQUFDSCxLQUFLSSxPQUFPO1FBQ3hCWixRQUFRUSxLQUFLSSxPQUFPO1FBQ3BCLElBQUlKLEtBQUtJLE9BQU8sRUFBRTtZQUNoQlYsUUFBUTtRQUNWLE9BQ0k7WUFDRkEsUUFBUTtRQUNWO0lBQ0Y7SUFDRixxQkFDRTs7MEJBQ0UsOERBQUNXO2dCQUFLQyxVQUFVLENBQUNDO29CQUNmVjtvQkFDQVUsRUFBRUMsY0FBYztnQkFDbEI7Z0JBQUdDLFdBQVU7MEJBQ1gsNEVBQUM5Qix1REFBS0E7b0JBQUMrQixNQUFLO29CQUFPQyxhQUFhO29CQUFhQyxPQUFPakI7b0JBQU1rQixVQUFVLENBQUNOLElBQU1YLFFBQVFXLEVBQUVPLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7MEJBRW5HLDhEQUFDRztnQkFBSU4sV0FBVTswQkFDWnJCLEtBQUs0QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsb0JBQ2YsOERBQUNIO2tDQUNDLDRFQUFDSTs0QkFBT1YsV0FBVTs0QkFBOERXLFNBQVMsSUFBTXhCLFFBQVFxQixLQUFLNUIsS0FBSztzQ0FBSTRCLEtBQUs1QixLQUFLOzs7Ozs7dUJBRHZINkI7Ozs7Ozs7Ozs7MEJBS1osOERBQUMvQiwwRkFBVUE7Z0JBQ1hrQyxNQUFNNUI7Z0JBQ042QixPQUFNO2dCQUNOQyxXQUFVO2dCQUNWQyxTQUFRO2dCQUNSQyxPQUFNO2dCQUNOQyxXQUFVO2dCQUNWQyxTQUFROzBCQUVSLDRFQUFDWjtvQkFBSU4sV0FBVTs4QkFDYiw0RUFBQzdCLHVEQUFLQTs7MENBQ0osOERBQUNJLDZEQUFXQTswQ0FDViw0RUFBQ0MsMERBQVFBOztzREFDUCw4REFBQ0YsMkRBQVNBOzRDQUFDMEIsV0FBVTtzREFBWTs7Ozs7O3NEQUNqQyw4REFBQzFCLDJEQUFTQTtzREFBQzs7Ozs7O3NEQUNYLDhEQUFDQSwyREFBU0E7c0RBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUlmLDhEQUFDRiwyREFBU0E7MENBQ1BVLEtBQUt5QixHQUFHLENBQUMsQ0FBQ3JCLE1BQVdpQyxzQkFDcEIsOERBQUMzQywwREFBUUE7OzBEQUNQLDhEQUFDSCwyREFBU0E7Z0RBQUMyQixXQUFVOzBEQUFlbUIsUUFBUTs7Ozs7OzBEQUM1Qyw4REFBQzlDLDJEQUFTQTtnREFBQzJCLFdBQVU7MERBQWVkLElBQUksQ0FBQyxFQUFFOzs7Ozs7MERBQzNDLDhEQUFDYiwyREFBU0E7Z0RBQUMyQixXQUFVOzBEQUFlZCxJQUFJLENBQUMsRUFBRTs7Ozs7Ozt1Q0FIOUJpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCL0I7R0E1RXdCdEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb25nbGlzdC9zb25nbGlzdC50c3g/ZTQxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCB7XG4gIFRhYmxlLFxuICBUYWJsZUJvZHksXG4gIFRhYmxlQ2FwdGlvbixcbiAgVGFibGVDZWxsLFxuICBUYWJsZUZvb3RlcixcbiAgVGFibGVIZWFkLFxuICBUYWJsZUhlYWRlcixcbiAgVGFibGVSb3csXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFibGVcIlxuaW1wb3J0IHsgTGlzdCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuY29uc3QgdGFncyA9IFtcbiAgeyB0aXRsZTogXCJsb3ZlIHNvbmdcIn0sXG4gIHsgdGl0bGU6IFwicm9ja1wifSxcbiAgeyB0aXRsZTogXCJpbnRlcm5hdGlvbmFsXCJ9LFxuICB7IHRpdGxlOiBcIlRoYWkgcG9wXCJ9LFxuICB7IHRpdGxlOiBcImhlYXJ0YnJlYWtpbmdcIn0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvbmdsaXN0KCkge1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSBhcyBhbnkpXG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzb25nLCBzZXRzb25nXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL215bXVzZS1iYWNrZW5kLWZyNzRxdDNsNmEtdWMuYS5ydW4uYXBwL2FwaS9tdXNpYz9seXJpY3M9JHtzb25nfWApXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuY2x1c3RlcilcbiAgICAgIHNldExpc3QoZGF0YS5jbHVzdGVyKTtcbiAgICAgIGlmIChkYXRhLmNsdXN0ZXIpIHtcbiAgICAgICAgc2V0T3Blbih0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgc2V0T3BlbihmYWxzZSlcbiAgICAgIH1cbiAgICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH19IGNsYXNzTmFtZT0ndy1mdWxsJz5cbiAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9eyfwn5SOIFNlYXJjaCd9IHZhbHVlPXtzb25nfSBvbkNoYW5nZT17KGUpID0+IHNldHNvbmcoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdyaWQgZ3JpZC1jb2xzLTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC14LTEwIHNwYWNlLXktMiBtZDpnYXAtNCBtZDpmbGV4IG1kOnNwYWNlLXgtNiBtZDpzcGFjZS15LTBcIj5cbiAgICAgICAge3RhZ3MubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aWR4fT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy13aGl0ZSB0ZXh0LVsxcmVtXSBvcGFjaXR5LTUwIHJvdW5kZWQtZnVsbCB0ZXh0LWJsYWNrIHAtNCcgb25DbGljaz17KCkgPT4gc2V0c29uZyhpdGVtLnRpdGxlKX0+e2l0ZW0udGl0bGV9PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICAgIDxUcmFuc2l0aW9uIFxuICAgICAgICBzaG93PXtpc09wZW59XG4gICAgICAgIGVudGVyPVwidHJhbnNmb3JtIFwiXG4gICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXG4gICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXG4gICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbi1vcGNhaXR5IGR1cmF0aW9uLTE1MFwiXG4gICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcbiAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXG4gICAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi1bMTByZW1dXCI+XG4gICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBjbGFzc05hbWU9XCJ3LVsxMDBweF1cIj4jPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5Tb25nPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5BcnRpc3Q8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICB7LyogPFRhYmxlSGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+QW1vdW50PC9UYWJsZUhlYWQ+ICovfVxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgIHtsaXN0Lm1hcCgoc29uZzogYW55LCBpbmRleDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntpbmRleCArIDF9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e3NvbmdbMF19PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e3NvbmdbMV19PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICB7LyogPFRhYmxlQ2VsbD57bGlzdC5zb25nfTwvVGFibGVDZWxsPiAqL31cbiAgICAgICAgICAgICAgICAgIHsvKiA8VGFibGVDZWxsPntpbnZvaWNlLnBheW1lbnRNZXRob2R9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj57aW52b2ljZS50b3RhbEFtb3VudH08L1RhYmxlQ2VsbD4gKi99XG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgIHsvKiA8VGFibGVGb290ZXI+XG4gICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PlRvdGFsPC9UYWJsZUNlbGw+XG4gICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+JDIsNTAwLjAwPC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICA8L1RhYmxlRm9vdGVyPiAqL31cbiAgICAgICAgICA8L1RhYmxlPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICBcbiAgICA8Lz5cbiAgKVxuXG59Il0sIm5hbWVzIjpbIklucHV0IiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZUhlYWRlciIsIlRhYmxlUm93IiwidXNlU3RhdGUiLCJUcmFuc2l0aW9uIiwidGFncyIsInRpdGxlIiwiU29uZ2xpc3QiLCJsaXN0Iiwic2V0TGlzdCIsImlzT3BlbiIsInNldE9wZW4iLCJzb25nIiwic2V0c29uZyIsImZldGNoRGF0YSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2x1c3RlciIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJkaXYiLCJtYXAiLCJpdGVtIiwiaWR4IiwiYnV0dG9uIiwib25DbGljayIsInNob3ciLCJlbnRlciIsImVudGVyRnJvbSIsImVudGVyVG8iLCJsZWF2ZSIsImxlYXZlRnJvbSIsImxlYXZlVG8iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/songlist/songlist.tsx\n"));

/***/ })

});