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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Songlist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/table */ \"(app-pages-browser)/./components/ui/table.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst invoices = [\n    {\n        invoice: \"INV001\",\n        paymentStatus: \"Paid\",\n        totalAmount: \"$250.00\",\n        paymentMethod: \"Credit Card\"\n    },\n    {\n        invoice: \"INV002\",\n        paymentStatus: \"Pending\",\n        totalAmount: \"$150.00\",\n        paymentMethod: \"PayPal\"\n    },\n    {\n        invoice: \"INV003\",\n        paymentStatus: \"Unpaid\",\n        totalAmount: \"$350.00\",\n        paymentMethod: \"Bank Transfer\"\n    },\n    {\n        invoice: \"INV004\",\n        paymentStatus: \"Paid\",\n        totalAmount: \"$450.00\",\n        paymentMethod: \"Credit Card\"\n    },\n    {\n        invoice: \"INV005\",\n        paymentStatus: \"Paid\",\n        totalAmount: \"$550.00\",\n        paymentMethod: \"PayPal\"\n    },\n    {\n        invoice: \"INV006\",\n        paymentStatus: \"Pending\",\n        totalAmount: \"$200.00\",\n        paymentMethod: \"Bank Transfer\"\n    },\n    {\n        invoice: \"INV007\",\n        paymentStatus: \"Unpaid\",\n        totalAmount: \"$300.00\",\n        paymentMethod: \"Credit Card\"\n    }\n];\nfunction Songlist(props) {\n    _s();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const res = await fetch(\"https://sample-fr74qt3l6a-uc.a.run.app/api/music?lyrics=\".concat(props.song));\n            const data = await res.json();\n            console.log(data.cluster[0]);\n            setList(data.cluster);\n        };\n        fetchData();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.Table, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCaption, {\n                    children: \"A list of your recent invoices.\"\n                }, void 0, false, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHeader, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                                className: \"w-[100px]\",\n                                children: \"#\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                                children: \"Song\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableBody, {\n                    children: list.map((list, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                    className: \"font-medium\",\n                                    children: list.song\n                                }, void 0, false, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                    children: invoice.paymentStatus\n                                }, void 0, false, {\n                                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, list.index, true, {\n                            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableFooter, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                colSpan: 3,\n                                children: \"Total\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                className: \"text-right\",\n                                children: \"$2,500.00\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chanyakittichai/Documents/my-muse-personal/components/songlist/songlist.tsx\",\n            lineNumber: 77,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Songlist, \"ZBNfaudzy8bVxb8UgkyyMnLdlWY=\");\n_c = Songlist;\nvar _c;\n$RefreshReg$(_c, \"Songlist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc29uZ2xpc3Qvc29uZ2xpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVZ0M7QUFDVztBQUV6QyxNQUFNVSxXQUFXO0lBQ2Y7UUFDRUMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGFBQWE7UUFDYkMsZUFBZTtJQUNqQjtJQUNBO1FBQ0VILFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxhQUFhO1FBQ2JDLGVBQWU7SUFDakI7SUFDQTtRQUNFSCxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsYUFBYTtRQUNiQyxlQUFlO0lBQ2pCO0lBQ0E7UUFDRUgsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGFBQWE7UUFDYkMsZUFBZTtJQUNqQjtJQUNBO1FBQ0VILFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxhQUFhO1FBQ2JDLGVBQWU7SUFDakI7SUFDQTtRQUNFSCxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsYUFBYTtRQUNiQyxlQUFlO0lBQ2pCO0lBQ0E7UUFDRUgsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLGFBQWE7UUFDYkMsZUFBZTtJQUNqQjtDQUNEO0FBS1ksU0FBU0MsU0FBU0MsS0FBWTs7SUFDekMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFRLEVBQUU7SUFDMUNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTVcsWUFBWTtZQUNsQixNQUFNQyxNQUFNLE1BQU1DLE1BQU8sMkRBQXNFLE9BQVhMLE1BQU1NLElBQUk7WUFDOUYsTUFBTUMsT0FBTyxNQUFNSCxJQUFJSSxJQUFJO1lBQzNCQyxRQUFRQyxHQUFHLENBQUVILEtBQUtJLE9BQU8sQ0FBQyxFQUFFO1lBQzVCVCxRQUFRSyxLQUFLSSxPQUFPO1FBQ3BCO1FBQ0FSO0lBQ0o7SUFFQSxxQkFFSTtrQkFDQSw0RUFBQ25CLHVEQUFLQTs7OEJBQ1IsOERBQUNFLDhEQUFZQTs4QkFBQzs7Ozs7OzhCQUNkLDhEQUFDSSw2REFBV0E7OEJBQ1YsNEVBQUNDLDBEQUFRQTs7MENBQ1AsOERBQUNGLDJEQUFTQTtnQ0FBQ3VCLFdBQVU7MENBQVk7Ozs7OzswQ0FDakMsOERBQUN2QiwyREFBU0E7MENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtmLDhEQUFDSiwyREFBU0E7OEJBQ1BnQixLQUFLWSxHQUFHLENBQUMsQ0FBQ1osTUFBTWEsc0JBQ2YsOERBQUN2QiwwREFBUUE7OzhDQUNQLDhEQUFDSiwyREFBU0E7b0NBQUN5QixXQUFVOzhDQUFlWCxLQUFLSyxJQUFJOzs7Ozs7OENBQzdDLDhEQUFDbkIsMkRBQVNBOzhDQUFFUSxRQUFRQyxhQUFhOzs7Ozs7OzJCQUZwQkssS0FBS2EsS0FBSzs7Ozs7Ozs7Ozs4QkFRN0IsOERBQUMxQiw2REFBV0E7OEJBQ1YsNEVBQUNHLDBEQUFRQTs7MENBQ1AsOERBQUNKLDJEQUFTQTtnQ0FBQzRCLFNBQVM7MENBQUc7Ozs7OzswQ0FDdkIsOERBQUM1QiwyREFBU0E7Z0NBQUN5QixXQUFVOzBDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUM7R0E5Q3dCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NvbmdsaXN0L3NvbmdsaXN0LnRzeD9lNDEzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQge1xuICAgIFRhYmxlLFxuICAgIFRhYmxlQm9keSxcbiAgICBUYWJsZUNhcHRpb24sXG4gICAgVGFibGVDZWxsLFxuICAgIFRhYmxlRm9vdGVyLFxuICAgIFRhYmxlSGVhZCxcbiAgICBUYWJsZUhlYWRlcixcbiAgICBUYWJsZVJvdyxcbiAgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RhYmxlXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG4gIGNvbnN0IGludm9pY2VzID0gW1xuICAgIHtcbiAgICAgIGludm9pY2U6IFwiSU5WMDAxXCIsXG4gICAgICBwYXltZW50U3RhdHVzOiBcIlBhaWRcIixcbiAgICAgIHRvdGFsQW1vdW50OiBcIiQyNTAuMDBcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IFwiQ3JlZGl0IENhcmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGludm9pY2U6IFwiSU5WMDAyXCIsXG4gICAgICBwYXltZW50U3RhdHVzOiBcIlBlbmRpbmdcIixcbiAgICAgIHRvdGFsQW1vdW50OiBcIiQxNTAuMDBcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IFwiUGF5UGFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbnZvaWNlOiBcIklOVjAwM1wiLFxuICAgICAgcGF5bWVudFN0YXR1czogXCJVbnBhaWRcIixcbiAgICAgIHRvdGFsQW1vdW50OiBcIiQzNTAuMDBcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IFwiQmFuayBUcmFuc2ZlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW52b2ljZTogXCJJTlYwMDRcIixcbiAgICAgIHBheW1lbnRTdGF0dXM6IFwiUGFpZFwiLFxuICAgICAgdG90YWxBbW91bnQ6IFwiJDQ1MC4wMFwiLFxuICAgICAgcGF5bWVudE1ldGhvZDogXCJDcmVkaXQgQ2FyZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW52b2ljZTogXCJJTlYwMDVcIixcbiAgICAgIHBheW1lbnRTdGF0dXM6IFwiUGFpZFwiLFxuICAgICAgdG90YWxBbW91bnQ6IFwiJDU1MC4wMFwiLFxuICAgICAgcGF5bWVudE1ldGhvZDogXCJQYXlQYWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGludm9pY2U6IFwiSU5WMDA2XCIsXG4gICAgICBwYXltZW50U3RhdHVzOiBcIlBlbmRpbmdcIixcbiAgICAgIHRvdGFsQW1vdW50OiBcIiQyMDAuMDBcIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IFwiQmFuayBUcmFuc2ZlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW52b2ljZTogXCJJTlYwMDdcIixcbiAgICAgIHBheW1lbnRTdGF0dXM6IFwiVW5wYWlkXCIsXG4gICAgICB0b3RhbEFtb3VudDogXCIkMzAwLjAwXCIsXG4gICAgICBwYXltZW50TWV0aG9kOiBcIkNyZWRpdCBDYXJkXCIsXG4gICAgfSxcbiAgXVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHNvbmc6IHN0cmluZztcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvbmdsaXN0KHByb3BzOiBQcm9wcyl7XG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+e1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCAoYGh0dHBzOi8vc2FtcGxlLWZyNzRxdDNsNmEtdWMuYS5ydW4uYXBwL2FwaS9tdXNpYz9seXJpY3M9JHtwcm9wcy5zb25nfWApXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyAoZGF0YS5jbHVzdGVyWzBdKTtcbiAgICAgICAgc2V0TGlzdChkYXRhLmNsdXN0ZXIpO1xuICAgICAgICB9O1xuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8PlxuICAgICAgICA8VGFibGU+XG4gICAgICA8VGFibGVDYXB0aW9uPkEgbGlzdCBvZiB5b3VyIHJlY2VudCBpbnZvaWNlcy48L1RhYmxlQ2FwdGlvbj5cbiAgICAgIDxUYWJsZUhlYWRlcj5cbiAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgIDxUYWJsZUhlYWQgY2xhc3NOYW1lPVwidy1bMTAwcHhdXCI+IzwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+U29uZzwvVGFibGVIZWFkPlxuICAgICAgICAgIHsvKiA8VGFibGVIZWFkPk1ldGhvZDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUhlYWQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPkFtb3VudDwvVGFibGVIZWFkPiAqL31cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICA8VGFibGVCb2R5PlxuICAgICAgICB7bGlzdC5tYXAoKGxpc3QgLGluZGV4KSA9PiAoXG4gICAgICAgICAgPFRhYmxlUm93IGtleT17bGlzdC5pbmRleH0+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e2xpc3Quc29uZ308L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+e2ludm9pY2UucGF5bWVudFN0YXR1c308L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIHsvKiA8VGFibGVDZWxsPntpbnZvaWNlLnBheW1lbnRNZXRob2R9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj57aW52b2ljZS50b3RhbEFtb3VudH08L1RhYmxlQ2VsbD4gKi99XG4gICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgKSl9XG4gICAgICA8L1RhYmxlQm9keT5cbiAgICAgIDxUYWJsZUZvb3Rlcj5cbiAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30+VG90YWw8L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4kMiw1MDAuMDA8L1RhYmxlQ2VsbD5cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgIDwvVGFibGVGb290ZXI+XG4gICAgPC9UYWJsZT5cbiAgICAgICAgXG4gICAgICAgIDwvPlxuICAgIClcblxufSJdLCJuYW1lcyI6WyJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2FwdGlvbiIsIlRhYmxlQ2VsbCIsIlRhYmxlRm9vdGVyIiwiVGFibGVIZWFkIiwiVGFibGVIZWFkZXIiLCJUYWJsZVJvdyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW52b2ljZXMiLCJpbnZvaWNlIiwicGF5bWVudFN0YXR1cyIsInRvdGFsQW1vdW50IiwicGF5bWVudE1ldGhvZCIsIlNvbmdsaXN0IiwicHJvcHMiLCJsaXN0Iiwic2V0TGlzdCIsImZldGNoRGF0YSIsInJlcyIsImZldGNoIiwic29uZyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNsdXN0ZXIiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsImNvbFNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/songlist/songlist.tsx\n"));

/***/ })

});