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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Songlist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/table */ \"(app-pages-browser)/./components/ui/table.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst invoices = [\n    {\n        invoice: \"INV001\",\n        paymentStatus: \"Paid\",\n        totalAmount: \"$250.00\",\n        paymentMethod: \"Credit Card\"\n    },\n    {\n        invoice: \"INV002\",\n        paymentStatus: \"Pending\",\n        totalAmount: \"$150.00\",\n        paymentMethod: \"PayPal\"\n    },\n    {\n        invoice: \"INV003\",\n        paymentStatus: \"Unpaid\",\n        totalAmount: \"$350.00\",\n        paymentMethod: \"Bank Transfer\"\n    },\n    {\n        invoice: \"INV004\",\n        paymentStatus: \"Paid\",\n        totalAmount: \"$450.00\",\n        paymentMethod: \"Credit Card\"\n    },\n    {\n        invoice: \"INV005\",\n        paymentStatus: \"Paid\",\n        totalAmount: \"$550.00\",\n        paymentMethod: \"PayPal\"\n    },\n    {\n        invoice: \"INV006\",\n        paymentStatus: \"Pending\",\n        totalAmount: \"$200.00\",\n        paymentMethod: \"Bank Transfer\"\n    },\n    {\n        invoice: \"INV007\",\n        paymentStatus: \"Unpaid\",\n        totalAmount: \"$300.00\",\n        paymentMethod: \"Credit Card\"\n    }\n];\nfunction Songlist(props) {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const res = await fetch(\"https://sample-fr74qt3l6a-uc.a.run.app/api/music?lyrics=\".concat(props.song));\n            const data1 = await res.json();\n            console.log(data1.cluster[0]);\n        };\n        fetchData();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.Table, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCaption, {\n                    children: \"A list of your recent invoices.\"\n                }, void 0, false, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHeader, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                                className: \"w-[100px]\",\n                                children: \"Invoice\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                                children: \"Status\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                                children: \"Method\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                                className: \"text-right\",\n                                children: \"Amount\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableBody, {\n                    children: data.cluster.map((invoice)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                    className: \"font-medium\",\n                                    children: invoice.invoice\n                                }, void 0, false, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                    children: invoice.paymentStatus\n                                }, void 0, false, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                    children: invoice.paymentMethod\n                                }, void 0, false, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                    className: \"text-right\",\n                                    children: invoice.totalAmount\n                                }, void 0, false, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, invoice.invoice, true, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableFooter, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                colSpan: 3,\n                                children: \"Total\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                className: \"text-right\",\n                                children: \"$2,500.00\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n            lineNumber: 75,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Songlist, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Songlist;\nvar _c;\n$RefreshReg$(_c, \"Songlist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc29uZ2xpc3Qvc29uZ2xpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVZ0M7QUFDQztBQUUvQixNQUFNUyxXQUFXO0lBQ2Y7UUFDRUMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGFBQWE7UUFDYkMsZUFBZTtJQUNqQjtJQUNBO1FBQ0VILFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxhQUFhO1FBQ2JDLGVBQWU7SUFDakI7SUFDQTtRQUNFSCxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsYUFBYTtRQUNiQyxlQUFlO0lBQ2pCO0lBQ0E7UUFDRUgsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGFBQWE7UUFDYkMsZUFBZTtJQUNqQjtJQUNBO1FBQ0VILFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxhQUFhO1FBQ2JDLGVBQWU7SUFDakI7SUFDQTtRQUNFSCxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsYUFBYTtRQUNiQyxlQUFlO0lBQ2pCO0lBQ0E7UUFDRUgsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGFBQWE7UUFDYkMsZUFBZTtJQUNqQjtDQUNEO0FBS1ksU0FBU0MsU0FBU0MsS0FBWTs7SUFDekNQLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVEsWUFBWTtZQUNsQixNQUFNQyxNQUFNLE1BQU1DLE1BQU8sMkRBQXNFLE9BQVhILE1BQU1JLElBQUk7WUFDOUYsTUFBTUMsUUFBTyxNQUFNSCxJQUFJSSxJQUFJO1lBQzNCQyxRQUFRQyxHQUFHLENBQUVILE1BQUtJLE9BQU8sQ0FBQyxFQUFFO1FBQzVCO1FBQ0FSO0lBQ0o7SUFFQSxxQkFFSTtrQkFDQSw0RUFBQ2hCLHVEQUFLQTs7OEJBQ1IsOERBQUNFLDhEQUFZQTs4QkFBQzs7Ozs7OzhCQUNkLDhEQUFDSSw2REFBV0E7OEJBQ1YsNEVBQUNDLDBEQUFRQTs7MENBQ1AsOERBQUNGLDJEQUFTQTtnQ0FBQ29CLFdBQVU7MENBQVk7Ozs7OzswQ0FDakMsOERBQUNwQiwyREFBU0E7MENBQUM7Ozs7OzswQ0FDWCw4REFBQ0EsMkRBQVNBOzBDQUFDOzs7Ozs7MENBQ1gsOERBQUNBLDJEQUFTQTtnQ0FBQ29CLFdBQVU7MENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUd0Qyw4REFBQ3hCLDJEQUFTQTs4QkFDUG1CLEtBQUtJLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLENBQUNoQix3QkFDakIsOERBQUNILDBEQUFRQTs7OENBQ1AsOERBQUNKLDJEQUFTQTtvQ0FBQ3NCLFdBQVU7OENBQWVmLFFBQVFBLE9BQU87Ozs7Ozs4Q0FDbkQsOERBQUNQLDJEQUFTQTs4Q0FBRU8sUUFBUUMsYUFBYTs7Ozs7OzhDQUNqQyw4REFBQ1IsMkRBQVNBOzhDQUFFTyxRQUFRRyxhQUFhOzs7Ozs7OENBQ2pDLDhEQUFDViwyREFBU0E7b0NBQUNzQixXQUFVOzhDQUFjZixRQUFRRSxXQUFXOzs7Ozs7OzJCQUp6Q0YsUUFBUUEsT0FBTzs7Ozs7Ozs7Ozs4QkFRbEMsOERBQUNOLDZEQUFXQTs4QkFDViw0RUFBQ0csMERBQVFBOzswQ0FDUCw4REFBQ0osMkRBQVNBO2dDQUFDd0IsU0FBUzswQ0FBRzs7Ozs7OzBDQUN2Qiw4REFBQ3hCLDJEQUFTQTtnQ0FBQ3NCLFdBQVU7MENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE1QztHQTVDd0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc29uZ2xpc3Qvc29uZ2xpc3QudHN4P2U0MTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgVGFibGVCb2R5LFxuICAgIFRhYmxlQ2FwdGlvbixcbiAgICBUYWJsZUNlbGwsXG4gICAgVGFibGVGb290ZXIsXG4gICAgVGFibGVIZWFkLFxuICAgIFRhYmxlSGVhZGVyLFxuICAgIFRhYmxlUm93LFxuICB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFibGVcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuICBjb25zdCBpbnZvaWNlcyA9IFtcbiAgICB7XG4gICAgICBpbnZvaWNlOiBcIklOVjAwMVwiLFxuICAgICAgcGF5bWVudFN0YXR1czogXCJQYWlkXCIsXG4gICAgICB0b3RhbEFtb3VudDogXCIkMjUwLjAwXCIsXG4gICAgICBwYXltZW50TWV0aG9kOiBcIkNyZWRpdCBDYXJkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbnZvaWNlOiBcIklOVjAwMlwiLFxuICAgICAgcGF5bWVudFN0YXR1czogXCJQZW5kaW5nXCIsXG4gICAgICB0b3RhbEFtb3VudDogXCIkMTUwLjAwXCIsXG4gICAgICBwYXltZW50TWV0aG9kOiBcIlBheVBhbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW52b2ljZTogXCJJTlYwMDNcIixcbiAgICAgIHBheW1lbnRTdGF0dXM6IFwiVW5wYWlkXCIsXG4gICAgICB0b3RhbEFtb3VudDogXCIkMzUwLjAwXCIsXG4gICAgICBwYXltZW50TWV0aG9kOiBcIkJhbmsgVHJhbnNmZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGludm9pY2U6IFwiSU5WMDA0XCIsXG4gICAgICBwYXltZW50U3RhdHVzOiBcIlBhaWRcIixcbiAgICAgIHRvdGFsQW1vdW50OiBcIiQ0NTAuMDBcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IFwiQ3JlZGl0IENhcmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGludm9pY2U6IFwiSU5WMDA1XCIsXG4gICAgICBwYXltZW50U3RhdHVzOiBcIlBhaWRcIixcbiAgICAgIHRvdGFsQW1vdW50OiBcIiQ1NTAuMDBcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IFwiUGF5UGFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbnZvaWNlOiBcIklOVjAwNlwiLFxuICAgICAgcGF5bWVudFN0YXR1czogXCJQZW5kaW5nXCIsXG4gICAgICB0b3RhbEFtb3VudDogXCIkMjAwLjAwXCIsXG4gICAgICBwYXltZW50TWV0aG9kOiBcIkJhbmsgVHJhbnNmZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGludm9pY2U6IFwiSU5WMDA3XCIsXG4gICAgICBwYXltZW50U3RhdHVzOiBcIlVucGFpZFwiLFxuICAgICAgdG90YWxBbW91bnQ6IFwiJDMwMC4wMFwiLFxuICAgICAgcGF5bWVudE1ldGhvZDogXCJDcmVkaXQgQ2FyZFwiLFxuICAgIH0sXG4gIF1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBzb25nOiBzdHJpbmc7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb25nbGlzdChwcm9wczogUHJvcHMpe1xuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT57XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoIChgaHR0cHM6Ly9zYW1wbGUtZnI3NHF0M2w2YS11Yy5hLnJ1bi5hcHAvYXBpL211c2ljP2x5cmljcz0ke3Byb3BzLnNvbmd9YClcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nIChkYXRhLmNsdXN0ZXJbMF0pO1xuICAgICAgICB9O1xuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8PlxuICAgICAgICA8VGFibGU+XG4gICAgICA8VGFibGVDYXB0aW9uPkEgbGlzdCBvZiB5b3VyIHJlY2VudCBpbnZvaWNlcy48L1RhYmxlQ2FwdGlvbj5cbiAgICAgIDxUYWJsZUhlYWRlcj5cbiAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgIDxUYWJsZUhlYWQgY2xhc3NOYW1lPVwidy1bMTAwcHhdXCI+SW52b2ljZTwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+U3RhdHVzPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlSGVhZD5NZXRob2Q8L1RhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVIZWFkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5BbW91bnQ8L1RhYmxlSGVhZD5cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICA8VGFibGVCb2R5PlxuICAgICAgICB7ZGF0YS5jbHVzdGVyLm1hcCgoaW52b2ljZSkgPT4gKFxuICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2ludm9pY2UuaW52b2ljZX0+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e2ludm9pY2UuaW52b2ljZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+e2ludm9pY2UucGF5bWVudFN0YXR1c308L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+e2ludm9pY2UucGF5bWVudE1ldGhvZH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPntpbnZvaWNlLnRvdGFsQW1vdW50fTwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICkpfVxuICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICA8VGFibGVGb290ZXI+XG4gICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PlRvdGFsPC9UYWJsZUNlbGw+XG4gICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+JDIsNTAwLjAwPC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICA8L1RhYmxlRm9vdGVyPlxuICAgIDwvVGFibGU+XG4gICAgICAgIFxuICAgICAgICA8Lz5cbiAgICApXG5cbn0iXSwibmFtZXMiOlsiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNhcHRpb24iLCJUYWJsZUNlbGwiLCJUYWJsZUZvb3RlciIsIlRhYmxlSGVhZCIsIlRhYmxlSGVhZGVyIiwiVGFibGVSb3ciLCJ1c2VFZmZlY3QiLCJpbnZvaWNlcyIsImludm9pY2UiLCJwYXltZW50U3RhdHVzIiwidG90YWxBbW91bnQiLCJwYXltZW50TWV0aG9kIiwiU29uZ2xpc3QiLCJwcm9wcyIsImZldGNoRGF0YSIsInJlcyIsImZldGNoIiwic29uZyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNsdXN0ZXIiLCJjbGFzc05hbWUiLCJtYXAiLCJjb2xTcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/songlist/songlist.tsx\n"));

/***/ })

});