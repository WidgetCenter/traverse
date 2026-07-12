System.register(["jimu-core","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ })

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
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
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");


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
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting-traverse p-3" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.section },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.label }, "Map"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { onSelect: onMapWidgetSelected, useMapWidgetIds: props.useMapWidgetIds })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.divider }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.section },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.label }, "Default Bearing Format"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.btnGroup },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: activeBtn(defaultBearingFormat === 'quadrant'), onClick: () => setConfig('defaultBearingFormat', 'quadrant') }, "Quadrant"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: activeBtn(defaultBearingFormat === 'azimuth'), onClick: () => setConfig('defaultBearingFormat', 'azimuth') }, "Azimuth")),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.hint }, defaultBearingFormat === 'quadrant'
                ? 'e.g. N 45°30\'00" E'
                : 'e.g. 045.5000 (0–360°, clockwise from north)')),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.section },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.label }, "Default Distance Unit"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { style: S.select, value: defaultDistanceUnit, onChange: ev => setConfig('defaultDistanceUnit', ev.target.value) },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "feet" }, "Feet"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "chains" }, "Chains"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "meters" }, "Meters")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90cmF2ZXJzZS9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObEI7QUFFc0M7QUFHdkUsTUFBTSxDQUFDLEdBQUc7SUFDUixPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUF5QjtJQUN4RCxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUF5QjtJQUMxRyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUI7SUFDbEYsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUF5QjtJQUNoRSxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUs7UUFDdEQsTUFBTSxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVM7S0FDMUM7SUFDeEIsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQXlCO0NBQ3JGO0FBRUQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFlLEVBQXVCLEVBQUUsQ0FBQyxDQUFDO0lBQzNELElBQUksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTO0lBQ3BFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUc7SUFDakMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTO0lBQy9DLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUztJQUNuQyxNQUFNLEVBQUUsYUFBYSxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFO0NBQ3RELENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQXNDLEVBQUUsRUFBRTtJQUN6RCxNQUFNLG1CQUFtQixHQUFHLENBQUMsZUFBeUIsRUFBRSxFQUFFO1FBQ3hELEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRUQsTUFBTSxTQUFTLEdBQUcsQ0FBeUIsR0FBTSxFQUFFLEtBQWdCLEVBQUUsRUFBRTtRQUNyRSxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO0lBQy9FLENBQUM7SUFFRCxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTTtJQUVsRSxPQUFPLENBQ0wsb0VBQUssU0FBUyxFQUFDLDZCQUE2QjtRQUUxQyxvRUFBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU87WUFDbkIsb0VBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLFVBQVc7WUFDOUIsMkRBQUMsa0ZBQWlCLElBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZSxHQUFJLENBQ3hGO1FBRU4sb0VBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUk7UUFFekIsb0VBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ25CLG9FQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyw2QkFBOEI7WUFDakQsb0VBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRO2dCQUNwQix1RUFBUSxLQUFLLEVBQUUsU0FBUyxDQUFDLG9CQUFvQixLQUFLLFVBQVUsQ0FBQyxFQUMzRCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLFVBQVUsQ0FBQyxlQUVyRDtnQkFDVCx1RUFBUSxLQUFLLEVBQUUsU0FBUyxDQUFDLG9CQUFvQixLQUFLLFNBQVMsQ0FBQyxFQUMxRCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLFNBQVMsQ0FBQyxjQUVwRCxDQUNMO1lBQ04sb0VBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQ2Ysb0JBQW9CLEtBQUssVUFBVTtnQkFDbEMsQ0FBQyxDQUFDLHFCQUFxQjtnQkFDdkIsQ0FBQyxDQUFDLDhDQUE4QyxDQUM5QyxDQUNGO1FBRU4sb0VBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPO1lBQ25CLG9FQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyw0QkFBNkI7WUFDaEQsdUVBQ0UsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQ2YsS0FBSyxFQUFFLG1CQUFtQixFQUMxQixRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFZLENBQUM7Z0JBRXhFLHVFQUFRLEtBQUssRUFBQyxNQUFNLFdBQWM7Z0JBQ2xDLHVFQUFRLEtBQUssRUFBQyxRQUFRLGFBQWdCO2dCQUN0Qyx1RUFBUSxLQUFLLEVBQUMsUUFBUSxhQUFnQixDQUMvQixDQUNMLENBRUYsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxPQUFPO0FBRWQsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3RyYXZlcnNlL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbmltcG9ydCB7IE1hcFdpZGdldFNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgdHlwZSB7IENvbmZpZywgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IFMgPSB7XG4gIHNlY3Rpb246IHsgbWFyZ2luQm90dG9tOiAnMTZweCcgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxuICBsYWJlbDogeyBmb250U2l6ZTogJzEycHgnLCBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogJzZweCcsIGNvbG9yOiAnIzNkM2QzZCcgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxuICBoaW50OiB7IGZvbnRTaXplOiAnMTFweCcsIGNvbG9yOiAnIzg4OCcsIG1hcmdpblRvcDogJzRweCcgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxuICBidG5Hcm91cDogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzZweCcgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzLFxuICBzZWxlY3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnNXB4IDhweCcsIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkNGQ0ZDQnLCBmb250U2l6ZTogJzEycHgnLCBjdXJzb3I6ICdwb2ludGVyJ1xuICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXMsXG4gIGRpdmlkZXI6IHsgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNlOGU4ZTgnLCBtYXJnaW46ICcxNnB4IDAnIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc1xufVxuXG5jb25zdCBhY3RpdmVCdG4gPSAoYWN0aXZlOiBib29sZWFuKTogUmVhY3QuQ1NTUHJvcGVydGllcyA9PiAoe1xuICBmbGV4OiAxLCBwYWRkaW5nOiAnNXB4IDEwcHgnLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBjdXJzb3I6ICdwb2ludGVyJyxcbiAgZm9udFNpemU6ICcxMnB4JywgZm9udFdlaWdodDogNTAwLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZSA/ICcjMDA3OWMxJyA6ICcjZjNmM2YzJyxcbiAgY29sb3I6IGFjdGl2ZSA/ICd3aGl0ZScgOiAnIzNkM2QzZCcsXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke2FjdGl2ZSA/ICcjMDA3OWMxJyA6ICcjZDRkNGQ0J31gXG59KVxuXG5jb25zdCBTZXR0aW5nID0gKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+KSA9PiB7XG4gIGNvbnN0IG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IGlkOiBwcm9wcy5pZCwgdXNlTWFwV2lkZ2V0SWRzIH0pXG4gIH1cblxuICBjb25zdCBzZXRDb25maWcgPSA8SyBleHRlbmRzIGtleW9mIENvbmZpZz4oa2V5OiBLLCB2YWx1ZTogQ29uZmlnW0tdKSA9PiB7XG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHByb3BzLmlkLCBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoa2V5LCB2YWx1ZSkgfSlcbiAgfVxuXG4gIGNvbnN0IHsgZGVmYXVsdEJlYXJpbmdGb3JtYXQsIGRlZmF1bHREaXN0YW5jZVVuaXQgfSA9IHByb3BzLmNvbmZpZ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy10cmF2ZXJzZSBwLTNcIj5cblxuICAgICAgPGRpdiBzdHlsZT17Uy5zZWN0aW9ufT5cbiAgICAgICAgPGRpdiBzdHlsZT17Uy5sYWJlbH0+TWFwPC9kaXY+XG4gICAgICAgIDxNYXBXaWRnZXRTZWxlY3RvciBvblNlbGVjdD17b25NYXBXaWRnZXRTZWxlY3RlZH0gdXNlTWFwV2lkZ2V0SWRzPXtwcm9wcy51c2VNYXBXaWRnZXRJZHN9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17Uy5kaXZpZGVyfSAvPlxuXG4gICAgICA8ZGl2IHN0eWxlPXtTLnNlY3Rpb259PlxuICAgICAgICA8ZGl2IHN0eWxlPXtTLmxhYmVsfT5EZWZhdWx0IEJlYXJpbmcgRm9ybWF0PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e1MuYnRuR3JvdXB9PlxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e2FjdGl2ZUJ0bihkZWZhdWx0QmVhcmluZ0Zvcm1hdCA9PT0gJ3F1YWRyYW50Jyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb25maWcoJ2RlZmF1bHRCZWFyaW5nRm9ybWF0JywgJ3F1YWRyYW50Jyl9PlxuICAgICAgICAgICAgUXVhZHJhbnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXthY3RpdmVCdG4oZGVmYXVsdEJlYXJpbmdGb3JtYXQgPT09ICdhemltdXRoJyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb25maWcoJ2RlZmF1bHRCZWFyaW5nRm9ybWF0JywgJ2F6aW11dGgnKX0+XG4gICAgICAgICAgICBBemltdXRoXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtTLmhpbnR9PlxuICAgICAgICAgIHtkZWZhdWx0QmVhcmluZ0Zvcm1hdCA9PT0gJ3F1YWRyYW50J1xuICAgICAgICAgICAgPyAnZS5nLiBOIDQ1wrAzMFxcJzAwXCIgRSdcbiAgICAgICAgICAgIDogJ2UuZy4gMDQ1LjUwMDAgKDDigJMzNjDCsCwgY2xvY2t3aXNlIGZyb20gbm9ydGgpJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17Uy5zZWN0aW9ufT5cbiAgICAgICAgPGRpdiBzdHlsZT17Uy5sYWJlbH0+RGVmYXVsdCBEaXN0YW5jZSBVbml0PC9kaXY+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBzdHlsZT17Uy5zZWxlY3R9XG4gICAgICAgICAgdmFsdWU9e2RlZmF1bHREaXN0YW5jZVVuaXR9XG4gICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHNldENvbmZpZygnZGVmYXVsdERpc3RhbmNlVW5pdCcsIGV2LnRhcmdldC52YWx1ZSBhcyBhbnkpfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZlZXRcIj5GZWV0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNoYWluc1wiPkNoYWluczwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXRlcnNcIj5NZXRlcnM8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=