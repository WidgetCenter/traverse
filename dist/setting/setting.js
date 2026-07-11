System.register(["jimu-core/emotion","jimu-core","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ },

/***/ "jimu-ui/advanced/setting-components"
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/traverse/src/setting/setting.tsx ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");



const S = {
    section: { marginBottom: '16px' },
    label: { fontSize: '12px', fontWeight: 600, marginBottom: '6px', color: '#3d3d3d' },
    hint: { fontSize: '11px', color: '#888', marginTop: '4px' },
    btnGroup: { display: 'flex', gap: '6px' },
    select: {
        width: '100%', padding: '5px 8px', borderRadius: '4px',
        border: '1px solid #d4d4d4', fontSize: '12px', cursor: 'pointer'
    },
    divider: { borderTop: '1px solid #e8e8e8', margin: '16px 0' }
};
const activeBtn = (active) => ({
    flex: 1, padding: '5px 10px', borderRadius: '4px', cursor: 'pointer',
    fontSize: '12px', fontWeight: 500,
    backgroundColor: active ? '#0079c1' : '#f3f3f3',
    color: active ? 'white' : '#3d3d3d',
    border: `1px solid ${active ? '#0079c1' : '#d4d4d4'}`
});
const Setting = (props) => {
    const onMapWidgetSelected = (useMapWidgetIds) => {
        props.onSettingChange({ id: props.id, useMapWidgetIds });
    };
    const setConfig = (key, value) => {
        props.onSettingChange({ id: props.id, config: props.config.set(key, value) });
    };
    const { defaultBearingFormat, defaultDistanceUnit } = props.config;
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "widget-setting-traverse p-3", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.section, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.label, children: "Map" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { onSelect: onMapWidgetSelected, useMapWidgetIds: props.useMapWidgetIds })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.divider }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.section, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.label, children: "Default Bearing Format" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.btnGroup, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: activeBtn(defaultBearingFormat === 'quadrant'), onClick: () => setConfig('defaultBearingFormat', 'quadrant'), children: "Quadrant" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: activeBtn(defaultBearingFormat === 'azimuth'), onClick: () => setConfig('defaultBearingFormat', 'azimuth'), children: "Azimuth" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.hint, children: defaultBearingFormat === 'quadrant'
                            ? 'e.g. N 45°30\'00" E'
                            : 'e.g. 045.5000 (0–360°, clockwise from north)' })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.section, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.label, children: "Default Distance Unit" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { style: S.select, value: defaultDistanceUnit, onChange: ev => setConfig('defaultDistanceUnit', ev.target.value), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "feet", children: "Feet" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "chains", children: "Chains" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "meters", children: "Meters" })] })] })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90cmF2ZXJzZS9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsaUY7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0psQjtBQUVzQztBQUd2RSxNQUFNLENBQUMsR0FBRztJQUNSLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQXlCO0lBQ3hELEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQXlCO0lBQzFHLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF5QjtJQUNsRixRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQXlCO0lBQ2hFLE1BQU0sRUFBRTtRQUNOLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxF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LENBQUMsQ0FBQyxNQUFNLEVBQ2YsS0FBSyxFQUFFLG1CQUFtQixFQUMxQixRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFZLENBQUMsYUFFeEUsNEVBQVEsS0FBSyxFQUFDLE1BQU0scUJBQWMsRUFDbEMsNEVBQVEsS0FBSyxFQUFDLFFBQVEsdUJBQWdCLEVBQ3RDLDRFQUFRLEtBQUssRUFBQyxRQUFRLHVCQUFnQixJQUMvQixJQUNMLElBRUYsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxPQUFPO0FBRWQsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy90cmF2ZXJzZS9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbmltcG9ydCB7IE1hcFdpZGdldFNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgdHlwZSB7IENvbmZpZywgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IFMgPSB7XG4gIHNlY3Rpb246IHsgbWFyZ2luQm90dG9tOiAnMTZweCcgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxuICBsYWJlbDogeyBmb250U2l6ZTogJzEycHgnLCBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogJzZweCcsIGNvbG9yOiAnIzNkM2QzZCcgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxuICBoaW50OiB7IGZvbnRTaXplOiAnMTFweCcsIGNvbG9yOiAnIzg4OCcsIG1hcmdpblRvcDogJzRweCcgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxuICBidG5Hcm91cDogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzZweCcgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxuICBzZWxlY3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnNXB4IDhweCcsIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkNGQ0ZDQnLCBmb250U2l6ZTogJzEycHgnLCBjdXJzb3I6ICdwb2ludGVyJ1xuICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXMsXG4gIGRpdmlkZXI6IHsgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNlOGU4ZTgnLCBtYXJnaW46ICcxNnB4IDAnIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc1xufVxuXG5jb25zdCBhY3RpdmVCdG4gPSAoYWN0aXZlOiBib29sZWFuKTogUmVhY3QuQ1NTUHJvcGVydGllcyA9PiAoe1xuICBmbGV4OiAxLCBwYWRkaW5nOiAnNXB4IDEwcHgnLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBjdXJzb3I6ICdwb2ludGVyJyxcbiAgZm9udFNpemU6ICcxMnB4JywgZm9udFdlaWdodDogNTAwLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZSA/ICcjMDA3OWMxJyA6ICcjZjNmM2YzJyxcbiAgY29sb3I6IGFjdGl2ZSA/ICd3aGl0ZScgOiAnIzNkM2QzZCcsXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke2FjdGl2ZSA/ICcjMDA3OWMxJyA6ICcjZDRkNGQ0J31gXG59KVxuXG5jb25zdCBTZXR0aW5nID0gKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+KSA9PiB7XG4gIGNvbnN0IG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IGlkOiBwcm9wcy5pZCwgdXNlTWFwV2lkZ2V0SWRzIH0pXG4gIH1cblxuICBjb25zdCBzZXRDb25maWcgPSA8SyBleHRlbmRzIGtleW9mIENvbmZpZz4oa2V5OiBLLCB2YWx1ZTogQ29uZmlnW0tdKSA9PiB7XG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHByb3BzLmlkLCBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoa2V5LCB2YWx1ZSkgfSlcbiAgfVxuXG4gIGNvbnN0IHsgZGVmYXVsdEJlYXJpbmdGb3JtYXQsIGRlZmF1bHREaXN0YW5jZVVuaXQgfSA9IHByb3BzLmNvbmZpZ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy10cmF2ZXJzZSBwLTNcIj5cblxuICAgICAgPGRpdiBzdHlsZT17Uy5zZWN0aW9ufT5cbiAgICAgICAgPGRpdiBzdHlsZT17Uy5sYWJlbH0+TWFwPC9kaXY+XG4gICAgICAgIDxNYXBXaWRnZXRTZWxlY3RvciBvblNlbGVjdD17b25NYXBXaWRnZXRTZWxlY3RlZH0gdXNlTWFwV2lkZ2V0SWRzPXtwcm9wcy51c2VNYXBXaWRnZXRJZHN9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17Uy5kaXZpZGVyfSAvPlxuXG4gICAgICA8ZGl2IHN0eWxlPXtTLnNlY3Rpb259PlxuICAgICAgICA8ZGl2IHN0eWxlPXtTLmxhYmVsfT5EZWZhdWx0IEJlYXJpbmcgRm9ybWF0PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e1MuYnRuR3JvdXB9PlxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e2FjdGl2ZUJ0bihkZWZhdWx0QmVhcmluZ0Zvcm1hdCA9PT0gJ3F1YWRyYW50Jyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb25maWcoJ2RlZmF1bHRCZWFyaW5nRm9ybWF0JywgJ3F1YWRyYW50Jyl9PlxuICAgICAgICAgICAgUXVhZHJhbnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXthY3RpdmVCdG4oZGVmYXVsdEJlYXJpbmdGb3JtYXQgPT09ICdhemltdXRoJyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb25maWcoJ2RlZmF1bHRCZWFyaW5nRm9ybWF0JywgJ2F6aW11dGgnKX0+XG4gICAgICAgICAgICBBemltdXRoXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtTLmhpbnR9PlxuICAgICAgICAgIHtkZWZhdWx0QmVhcmluZ0Zvcm1hdCA9PT0gJ3F1YWRyYW50J1xuICAgICAgICAgICAgPyAnZS5nLiBOIDQ1wrAzMFxcJzAwXCIgRSdcbiAgICAgICAgICAgIDogJ2UuZy4gMDQ1LjUwMDAgKDDigJMzNjDCsCwgY2xvY2t3aXNlIGZyb20gbm9ydGgpJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17Uy5zZWN0aW9ufT5cbiAgICAgICAgPGRpdiBzdHlsZT17Uy5sYWJlbH0+RGVmYXVsdCBEaXN0YW5jZSBVbml0PC9kaXY+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBzdHlsZT17Uy5zZWxlY3R9XG4gICAgICAgICAgdmFsdWU9e2RlZmF1bHREaXN0YW5jZVVuaXR9XG4gICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHNldENvbmZpZygnZGVmYXVsdERpc3RhbmNlVW5pdCcsIGV2LnRhcmdldC52YWx1ZSBhcyBhbnkpfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZlZXRcIj5GZWV0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNoYWluc1wiPkNoYWluczwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXRlcnNcIj5NZXRlcnM8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=