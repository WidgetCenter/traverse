System.register(["jimu-core/emotion","jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
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
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-arcgis"
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ },

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
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/traverse/src/runtime/widget.tsx ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const UNIT_TO_METERS = { feet: 0.3048, chains: 20.1168, meters: 1.0 };
const R_EARTH = 6378137;
// ---------------------------------------------------------------------------
// Bearing parsing helpers
// ---------------------------------------------------------------------------
/**
 * Parse a traditional quadrant bearing string such as "N 45°30'00\" E" into
 * an azimuth (0–360°). Returns null if the string is malformed.
 */
function parseQuadrantBearing(input) {
    if (!input)
        return null;
    const str = input.trim().toUpperCase()
        .replace(/[°'"]+/g, ' ')
        .replace(/[-,]+/g, ' ')
        .replace(/\s+/g, ' ');
    const m = str.match(/^([NS])\s*([\d.]+)\s*([\d.]*)\s*([\d.]*)\s*([EW])$/);
    if (!m)
        return null;
    const ns = m[1], d = parseFloat(m[2] || '0'), min = parseFloat(m[3] || '0'), sec = parseFloat(m[4] || '0'), ew = m[5];
    const dd = d + min / 60 + sec / 3600;
    if (dd < 0 || dd > 90)
        return null;
    if (ns === 'N' && ew === 'E')
        return dd;
    if (ns === 'S' && ew === 'E')
        return 180 - dd;
    if (ns === 'S' && ew === 'W')
        return 180 + dd;
    if (ns === 'N' && ew === 'W')
        return 360 - dd;
    return null;
}
/**
 * Parse a quadrant-number bearing.  The user enters a quadrant number (1–4)
 * plus a DMS angle string.  Convention:
 *   Q1 = NE  →  azimuth = angle
 *   Q2 = SE  →  azimuth = 180 − angle
 *   Q3 = SW  →  azimuth = 180 + angle
 *   Q4 = NW  →  azimuth = 360 − angle
 *
 * The angle field accepts the same flexible DMS syntax as parseQuadrantBearing
 * (e.g. "45 30 00", "45°30'00\"", "45.5").
 */
function parseQuadrantNumberBearing(quadrant, angleStr) {
    if (quadrant < 1 || quadrant > 4)
        return null;
    if (!angleStr)
        return null;
    // Normalise separators to spaces, strip degree/minute/second symbols.
    const str = angleStr.trim()
        .replace(/[°'"]+/g, ' ')
        .replace(/[-,]+/g, ' ')
        .replace(/\s+/g, ' ');
    const parts = str.split(' ');
    const d = parseFloat(parts[0] || '0');
    const min = parseFloat(parts[1] || '0');
    const sec = parseFloat(parts[2] || '0');
    if (isNaN(d))
        return null;
    const dd = d + (isNaN(min) ? 0 : min) / 60 + (isNaN(sec) ? 0 : sec) / 3600;
    if (dd < 0 || dd > 90)
        return null;
    if (quadrant === 1)
        return dd;
    if (quadrant === 2)
        return 180 - dd;
    if (quadrant === 3)
        return 180 + dd;
    if (quadrant === 4)
        return 360 - dd;
    return null;
}
function parseAzimuth(input) {
    if (!input)
        return null;
    const val = parseFloat(input);
    if (isNaN(val) || val < 0 || val >= 360)
        return null;
    return val;
}
function parseBearing(bearing, format) {
    return format === 'quadrant' ? parseQuadrantBearing(bearing) : parseAzimuth(bearing);
}
/**
 * Parse a stored bearing value that may be either a plain string (quadrant /
 * azimuth mode) or the encoded quadrant-number format "Q<n>|<angleStr>" that
 * we use internally when bearingEntry === 'number'.
 */
function parseBearingValue(bearing, format, bearingEntry) {
    if (format === 'quadrant' && bearingEntry === 'number') {
        const sep = bearing.indexOf('|');
        if (sep === -1)
            return null;
        const q = parseInt(bearing.slice(1, sep), 10);
        const angle = bearing.slice(sep + 1);
        return parseQuadrantNumberBearing(q, angle);
    }
    return parseBearing(bearing, format);
}
// ---------------------------------------------------------------------------
// Distance / geometry helpers
// ---------------------------------------------------------------------------
function toMeters(distance, unit) {
    return parseFloat(distance) * (UNIT_TO_METERS[unit] || 1);
}
function webMercatorToWGS84(x, y) {
    const lon = x / R_EARTH * (180 / Math.PI);
    const lat = (2 * Math.atan(Math.exp(y / R_EARTH)) - Math.PI / 2) * (180 / Math.PI);
    return [parseFloat(lon.toFixed(7)), parseFloat(lat.toFixed(7))];
}
function hexToRgba(hex) {
    const h = hex.replace('#', '');
    return [
        parseInt(h.slice(0, 2), 16),
        parseInt(h.slice(2, 4), 16),
        parseInt(h.slice(4, 6), 16),
        255
    ];
}
function computeNextPoint(x, y, azimuthDeg, distanceMeters) {
    const lat_rad = 2 * Math.atan(Math.exp(y / R_EARTH)) - Math.PI / 2;
    const cos_lat = Math.cos(lat_rad);
    const az_rad = azimuthDeg * Math.PI / 180;
    return {
        x: x + distanceMeters * Math.sin(az_rad) / cos_lat,
        y: y + distanceMeters * Math.cos(az_rad) / cos_lat
    };
}
// ---------------------------------------------------------------------------
// Traverse calculation
// ---------------------------------------------------------------------------
function buildTraversePoints(startX, startY, courses, unit, bearingFormat, bearingEntry) {
    const points = [{ x: startX, y: startY }];
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        const az = parseBearingValue(course.bearing, bearingFormat, bearingEntry);
        if (az === null || !course.distance || isNaN(parseFloat(course.distance)))
            return null;
        const d = toMeters(course.distance, unit);
        const last = points[points.length - 1];
        points.push(computeNextPoint(last.x, last.y, az, d));
    }
    return points;
}
function computeClosureReport(courses, unit, bearingFormat, bearingEntry) {
    let sumDep = 0, sumLat = 0, totalDist = 0;
    let gx = 0, gy = 0;
    const gPts = [{ x: 0, y: 0 }];
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        const az = parseBearingValue(course.bearing, bearingFormat, bearingEntry);
        if (az === null || !course.distance)
            return null;
        const d = toMeters(course.distance, unit);
        const az_rad = az * Math.PI / 180;
        const dep = d * Math.sin(az_rad);
        const lat = d * Math.cos(az_rad);
        sumDep += dep;
        sumLat += lat;
        totalDist += d;
        gx += dep;
        gy += lat;
        gPts.push({ x: gx, y: gy });
    }
    const closureM = Math.sqrt(sumDep * sumDep + sumLat * sumLat);
    const unitFactor = 1 / (UNIT_TO_METERS[unit] || 1);
    const precisionRatio = closureM > 0.001 ? Math.round(totalDist / closureM) : 999999;
    let area = 0;
    const n = gPts.length;
    for (let j = 0; j < n; j++) {
        const k = (j + 1) % n;
        area += gPts[j].x * gPts[k].y - gPts[k].x * gPts[j].y;
    }
    const areaSqM = Math.abs(area / 2);
    return {
        closureError: closureM * unitFactor,
        precisionRatio,
        totalDist: totalDist * unitFactor,
        sumDep: sumDep * unitFactor,
        sumLat: sumLat * unitFactor,
        areaAcres: areaSqM * 0.000247105,
        areaSqFt: areaSqM * 10.7639
    };
}
// ---------------------------------------------------------------------------
// Display helpers
// ---------------------------------------------------------------------------
function formatBearingLabel(az, format) {
    if (format === 'azimuth')
        return az.toFixed(4) + '°';
    let ns, ew, angle;
    if (az <= 90) {
        ns = 'N';
        ew = 'E';
        angle = az;
    }
    else if (az <= 180) {
        ns = 'S';
        ew = 'E';
        angle = 180 - az;
    }
    else if (az <= 270) {
        ns = 'S';
        ew = 'W';
        angle = az - 180;
    }
    else {
        ns = 'N';
        ew = 'W';
        angle = 360 - az;
    }
    let deg = Math.floor(angle);
    const minF = (angle - deg) * 60;
    let min = Math.floor(minF);
    let sec = Math.round((minF - min) * 60);
    if (sec === 60) {
        sec = 0;
        min++;
    }
    if (min === 60) {
        min = 0;
        deg++;
    }
    return `${ns} ${String(deg).padStart(2, '0')}°${String(min).padStart(2, '0')}'${String(sec).padStart(2, '0')}" ${ew}`;
}
function getPointColor(isStart, isEnd, closureDist) {
    if (isStart)
        return [0, 180, 0, 255];
    if (isEnd && closureDist > 0.05)
        return [220, 38, 38, 255];
    return [41, 121, 255, 255];
}
// ---------------------------------------------------------------------------
// Helpers for quadrant-number bearing storage format "Q<n>|<angleStr>"
// ---------------------------------------------------------------------------
/** Decode the quadrant number from a stored "Q<n>|<angle>" value. */
function decodeQNum(bearing) {
    const sep = bearing.indexOf('|');
    if (sep === -1)
        return 1;
    return parseInt(bearing.slice(1, sep), 10) || 1;
}
/** Decode the angle string from a stored "Q<n>|<angle>" value. */
function decodeQAngle(bearing) {
    const sep = bearing.indexOf('|');
    if (sep === -1)
        return bearing;
    return bearing.slice(sep + 1);
}
/** Build the storage string for quadrant-number mode. */
function encodeQNum(q, angle) {
    return `Q${q}|${angle}`;
}
// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const S = {
    wrap: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
        fontSize: '13px', backgroundColor: '#ffffff', overflow: 'hidden', boxSizing: 'border-box' },
    header: { padding: '12px 16px', fontWeight: '600', fontSize: '15px', color: '#1e293b',
        borderBottom: '1px solid #e2e8f0', flexShrink: 0 },
    body: { flex: 1, overflowY: 'auto', padding: '12px 16px' },
    section: { marginBottom: '14px' },
    label: { fontSize: '11px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase',
        letterSpacing: '0.05em', marginBottom: '5px' },
    row: { display: 'flex', gap: '8px', alignItems: 'center' },
    btn: { padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer',
        fontSize: '12px', fontWeight: '500', transition: 'background-color 0.15s', whiteSpace: 'nowrap' },
    btnPrimary: { backgroundColor: '#3b82f6', color: 'white', border: '1px solid #2563eb' },
    btnSecondary: { backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0' },
    btnActive: { backgroundColor: '#1d4ed8', color: 'white', border: '1px solid #1e40af' },
    btnDanger: { backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca',
        padding: '2px 7px', fontSize: '14px', fontWeight: '700', lineHeight: '1' },
    btnDisabled: { opacity: 0.45, cursor: 'not-allowed' },
    input: { border: '1px solid #e2e8f0', borderRadius: '5px', padding: '4px 7px',
        fontSize: '12px', width: '100%', boxSizing: 'border-box', fontFamily: 'monospace' },
    select: { border: '1px solid #e2e8f0', borderRadius: '5px', padding: '4px 7px',
        fontSize: '12px', backgroundColor: '#fff', cursor: 'pointer' },
    qNumSelect: { border: '1px solid #e2e8f0', borderRadius: '5px', padding: '4px 5px',
        fontSize: '12px', backgroundColor: '#fff', cursor: 'pointer', width: '48px', flexShrink: 0,
        fontFamily: 'monospace' },
    qNumInput: { border: '1px solid #e2e8f0', borderRadius: '5px', padding: '4px 5px',
        fontSize: '12px', width: '32px', flexShrink: 0, fontFamily: 'monospace',
        textAlign: 'center', boxSizing: 'border-box' },
    table: { width: '100%', borderCollapse: 'collapse', fontSize: '12px' },
    th: { padding: '5px 6px', backgroundColor: '#f8fafc', fontWeight: '600', color: '#64748b',
        textAlign: 'left', borderBottom: '1px solid #e2e8f0', fontSize: '11px' },
    td: { padding: '4px 6px', borderBottom: '1px solid #f1f5f9', verticalAlign: 'middle' },
    trSelected: { backgroundColor: '#e0f2fe' }, // light blue row highlight
    coordBox: { backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '5px',
        padding: '5px 9px', fontSize: '11px', color: '#475569', fontFamily: 'monospace', marginTop: '5px' },
    reportBox: { backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px',
        padding: '11px 14px', marginTop: '8px' },
    reportRow: { display: 'flex', justifyContent: 'space-between', padding: '3px 0', fontSize: '12px' },
    reportDivider: { borderTop: '1px solid #bbf7d0', paddingTop: '6px', marginTop: '4px' },
    errorBox: { backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '6px',
        padding: '7px 11px', fontSize: '12px', color: '#dc2626', marginBottom: '10px' },
    warn: { backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '6px',
        padding: '7px 11px', fontSize: '12px', color: '#92400e', marginBottom: '10px' },
    hint: { fontSize: '11px', color: '#94a3b8', marginBottom: '10px', lineHeight: '1.5',
        fontFamily: 'monospace', backgroundColor: '#f8fafc', padding: '5px 8px',
        borderRadius: '4px', border: '1px solid #e2e8f0' },
    entryToggle: { display: 'flex', gap: '4px', marginBottom: '6px', alignItems: 'center' },
    entryToggleLabel: { fontSize: '11px', color: '#64748b', marginRight: '2px' }
};
// ---------------------------------------------------------------------------
// Widget component
// ---------------------------------------------------------------------------
class TraverseWidget extends jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Component {
    constructor(props) {
        var _a, _b, _c, _d;
        super(props);
        this._GraphicsLayer = null;
        this._Graphic = null;
        this._Point = null;
        this._Polyline = null;
        this._SimpleLine = null;
        this._SimpleMarker = null;
        this._TextSymbol = null;
        this._traverseLayer = null;
        this._labelLayer = null;
        this._highlightLayer = null;
        this._clickHandle = null;
        this._redrawTimer = null;
        /**
         * Refs for each course row's bearing and distance inputs.
         * Index matches the courses array. Populated during render via callback refs.
         */
        this._bearingRefs = [];
        this._distanceRefs = [];
        /**
         * For quadrant-number mode the bearing cell is split into a narrow text
         * input for the quadrant digit (1–4) and a text input for the DMS angle.
         * _qNumRefs   → the quadrant digit field (first tab stop in the cell)
         * _qAngleRefs → the DMS angle field (second tab stop in the cell)
         */
        this._qNumRefs = [];
        this._qAngleRefs = [];
        this.state = {
            jimuMapView: null,
            modulesLoaded: false,
            isPickingStart: false,
            startPoint: null,
            courses: [{ bearing: '', distance: '' }],
            bearingFormat: (_b = (_a = props.config) === null || _a === void 0 ? void 0 : _a.defaultBearingFormat) !== null && _b !== void 0 ? _b : 'quadrant',
            bearingEntry: 'letters',
            distanceUnit: (_d = (_c = props.config) === null || _c === void 0 ? void 0 : _c.defaultDistanceUnit) !== null && _d !== void 0 ? _d : 'feet',
            closureReport: null,
            parseError: null,
            pendingFocusRow: null,
            pendingFocusField: null,
            selectedCourseIndex: null,
            traverseColor: '#dc2626',
            exportLineString: true,
            exportPoints: true,
            exportPolygon: true,
            exportFileName: 'traverse'
        };
        this._onViewChange = this._onViewChange.bind(this);
    }
    // -------------------------------------------------------------------------
    // Focus management
    // -------------------------------------------------------------------------
    /**
     * Called after every render. If a pending focus target was set (e.g. after
     * adding a new course row via 10-key), resolve it and clear the pending state.
     */
    componentDidUpdate(_, prevState) {
        const { pendingFocusRow, pendingFocusField, bearingFormat, bearingEntry } = this.state;
        // ---- Focus management ----
        if (pendingFocusRow !== null && pendingFocusField !== null) {
            // Consume the pending focus immediately to avoid infinite loops.
            this.setState({ pendingFocusRow: null, pendingFocusField: null }, () => {
                if (pendingFocusField === 'distance') {
                    const el = this._distanceRefs[pendingFocusRow];
                    if (el) {
                        el.focus();
                        el.select();
                    }
                }
                else {
                    // bearing field — in number mode focus the quadrant digit input (first
                    // sub-field), else focus the main bearing input
                    if (bearingFormat === 'quadrant' && bearingEntry === 'number') {
                        const el = this._qNumRefs[pendingFocusRow];
                        if (el) {
                            el.focus();
                            el.select();
                        }
                    }
                    else {
                        const el = this._bearingRefs[pendingFocusRow];
                        if (el) {
                            el.focus();
                            el.select();
                        }
                    }
                }
            });
        }
        // ---- Live redraw trigger ----
        // Schedule a debounced live redraw whenever anything that affects the
        // drawn geometry changes.  We skip if the map/modules are not yet ready,
        // or if there is no start point — nothing useful can be drawn in those cases.
        const { startPoint, courses, distanceUnit, modulesLoaded, selectedCourseIndex } = this.state;
        const geometryChanged = prevState.courses !== courses ||
            prevState.startPoint !== startPoint ||
            prevState.bearingFormat !== bearingFormat ||
            prevState.bearingEntry !== bearingEntry ||
            prevState.distanceUnit !== distanceUnit;
        if (geometryChanged && modulesLoaded && startPoint) {
            if (this._redrawTimer !== null)
                clearTimeout(this._redrawTimer);
            this._redrawTimer = setTimeout(() => {
                this._redrawTimer = null;
                this._liveRedraw();
                // Keep highlight in sync after the geometry redraws.
                this._redrawHighlight(this.state.selectedCourseIndex);
            }, 150);
        }
        // ---- Highlight redraw on selection change ----
        // When only the selected row changes (no geometry change), update the
        // highlight layer immediately without touching traverse/label layers.
        if (prevState.selectedCourseIndex !== selectedCourseIndex && !geometryChanged && modulesLoaded) {
            this._redrawHighlight(selectedCourseIndex);
        }
    }
    // -------------------------------------------------------------------------
    // Lifecycle / map wiring
    // -------------------------------------------------------------------------
    componentWillUnmount() {
        var _a;
        if (this._redrawTimer !== null) {
            clearTimeout(this._redrawTimer);
            this._redrawTimer = null;
        }
        this._cancelPick();
        const view = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
        if (view) {
            if (this._traverseLayer)
                view.map.remove(this._traverseLayer);
            if (this._labelLayer)
                view.map.remove(this._labelLayer);
            if (this._highlightLayer)
                view.map.remove(this._highlightLayer);
        }
    }
    _onViewChange(jimuMapView) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!jimuMapView)
                return;
            this.setState({ jimuMapView }, () => __awaiter(this, void 0, void 0, function* () {
                if (!this.state.modulesLoaded) {
                    const mods = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.loadArcGISJSAPIModules)([
                        'esri/layers/GraphicsLayer',
                        'esri/Graphic',
                        'esri/geometry/Point',
                        'esri/geometry/Polyline',
                        'esri/symbols/SimpleLineSymbol',
                        'esri/symbols/SimpleMarkerSymbol',
                        'esri/symbols/TextSymbol'
                    ]);
                    this._GraphicsLayer = mods[0];
                    this._Graphic = mods[1];
                    this._Point = mods[2];
                    this._Polyline = mods[3];
                    this._SimpleLine = mods[4];
                    this._SimpleMarker = mods[5];
                    this._TextSymbol = mods[6];
                    this.setState({ modulesLoaded: true }, () => this._initLayers());
                }
                else {
                    this._initLayers();
                }
            }));
        });
    }
    _initLayers() {
        var _a;
        const view = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
        if (!view || !this._GraphicsLayer)
            return;
        if (!this._traverseLayer) {
            this._traverseLayer = new this._GraphicsLayer({ listMode: 'hide', id: 'traverse-graphics' });
            this._labelLayer = new this._GraphicsLayer({ listMode: 'hide', id: 'traverse-labels' });
            // Highlight layer sits on top of both traverse layers so the selection
            // halo is always rendered above the course lines.
            this._highlightLayer = new this._GraphicsLayer({ listMode: 'hide', id: 'traverse-highlight' });
            view.map.addMany([this._traverseLayer, this._labelLayer, this._highlightLayer]);
        }
    }
    // -------------------------------------------------------------------------
    // Point picking
    // -------------------------------------------------------------------------
    _cancelPick() {
        var _a;
        if (this._clickHandle) {
            this._clickHandle.remove();
            this._clickHandle = null;
        }
        const view = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
        if (view)
            view.cursor = 'auto';
    }
    _startPickingPoint() {
        var _a;
        const view = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
        if (!view)
            return;
        this._cancelPick();
        this.setState({ isPickingStart: true, parseError: null });
        view.cursor = 'crosshair';
        this._clickHandle = view.on('click', (evt) => {
            this._cancelPick();
            const pt = evt.mapPoint;
            this.setState({
                isPickingStart: false,
                startPoint: { x: pt.x, y: pt.y, spatialReference: pt.spatialReference },
                closureReport: null,
                parseError: null
            });
        });
    }
    // -------------------------------------------------------------------------
    // Leg mutation
    // -------------------------------------------------------------------------
    _addCourse(focusBearing = false) {
        this.setState(prev => ({
            courses: [...prev.courses, { bearing: '', distance: '' }],
            closureReport: null,
            pendingFocusRow: focusBearing ? prev.courses.length : null,
            pendingFocusField: focusBearing ? 'bearing' : null
        }));
    }
    _insertCourse(afterIndex) {
        this.setState(prev => {
            const courses = [...prev.courses];
            courses.splice(afterIndex + 1, 0, { bearing: '', distance: '' });
            const sel = prev.selectedCourseIndex;
            return {
                courses,
                closureReport: null,
                selectedCourseIndex: sel !== null && sel > afterIndex ? sel + 1 : sel,
                pendingFocusRow: afterIndex + 1,
                pendingFocusField: 'bearing'
            };
        });
    }
    _removeCourse(i) {
        this.setState(prev => {
            const sel = prev.selectedCourseIndex;
            return {
                courses: prev.courses.filter((_, idx) => idx !== i),
                closureReport: null,
                selectedCourseIndex: sel === i ? null : sel !== null && sel > i ? sel - 1 : sel
            };
        });
    }
    _updateCourse(i, field, value) {
        this.setState(prev => {
            const courses = [...prev.courses];
            courses[i] = Object.assign(Object.assign({}, courses[i]), { [field]: value });
            return { courses, closureReport: null };
        });
    }
    // -------------------------------------------------------------------------
    // 10-key keyboard navigation handler
    // Called on keydown for any course input (bearing or distance).
    // -------------------------------------------------------------------------
    _handleCourseKeyDown(ev, rowIndex, field) {
        const isNumpadEnter = ev.code === 'NumpadEnter';
        const isNumpadPlus = ev.code === 'NumpadAdd';
        // NumpadEnter / NumpadAdd on the distance field (last interactive cell in
        // a row): add a new course and move focus to its bearing field.
        if ((isNumpadEnter || isNumpadPlus) && field === 'distance') {
            ev.preventDefault();
            this._addCourse(true);
            return;
        }
        // NumpadEnter / NumpadAdd on the quadrant digit field: advance to the DMS
        // angle field of the same row.
        if ((isNumpadEnter || isNumpadPlus) && field === 'quadrant') {
            ev.preventDefault();
            const el = this._qAngleRefs[rowIndex];
            if (el) {
                el.focus();
                el.select();
            }
            return;
        }
        // NumpadEnter / NumpadAdd on a bearing field: jump to the distance field
        // of the same row so the surveyor can stay on 10-key.
        if ((isNumpadEnter || isNumpadPlus) && field === 'bearing') {
            ev.preventDefault();
            const el = this._distanceRefs[rowIndex];
            if (el) {
                el.focus();
                el.select();
            }
            return;
        }
    }
    // -------------------------------------------------------------------------
    // Draw / clear
    // -------------------------------------------------------------------------
    /**
     * Live redraw: called automatically (debounced) as the user edits courses.
     * Only draws courses that are fully valid — incomplete/invalid courses are
     * silently skipped.  Never sets parseError; never computes the closure report.
     */
    _liveRedraw() {
        var _a;
        const { startPoint, courses, distanceUnit, bearingFormat, bearingEntry } = this.state;
        const view = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
        if (!startPoint || !view || !this._traverseLayer)
            return;
        this._traverseLayer.removeAll();
        this._labelLayer.removeAll();
        const sr = startPoint.spatialReference;
        const lineColor = hexToRgba(this.state.traverseColor);
        const closureColor = [249, 115, 22, 255];
        // Walk courses, accumulating valid points.  Stop including a course the
        // moment one fails to parse — everything after an invalid course would
        // have an incorrect start position.
        const drawnPoints = [{ x: startPoint.x, y: startPoint.y }];
        const drawnCourseIndices = [];
        for (let i = 0; i < courses.length; i++) {
            const course = courses[i];
            const az = parseBearingValue(course.bearing, bearingFormat, bearingEntry);
            const dist = course.distance ? parseFloat(course.distance) : NaN;
            if (az === null || isNaN(dist) || dist <= 0)
                break; // stop at first invalid
            const prev = drawnPoints[drawnPoints.length - 1];
            drawnPoints.push(computeNextPoint(prev.x, prev.y, az, toMeters(course.distance, distanceUnit)));
            drawnCourseIndices.push(i);
        }
        if (drawnPoints.length < 2)
            return; // nothing drawable yet
        // Draw course lines and labels.
        for (let k = 0; k < drawnCourseIndices.length; k++) {
            const i = drawnCourseIndices[k];
            const p0 = drawnPoints[k], p1 = drawnPoints[k + 1];
            this._traverseLayer.add(new this._Graphic({
                geometry: new this._Polyline({ paths: [[[p0.x, p0.y], [p1.x, p1.y]]], spatialReference: sr }),
                symbol: new this._SimpleLine({ color: lineColor, width: 2, style: 'dash' })
            }));
            const az = parseBearingValue(courses[i].bearing, bearingFormat, bearingEntry);
            const courseLabel = courses[i].distance + ' ' + distanceUnit + '\n' + formatBearingLabel(az, bearingFormat);
            this._labelLayer.add(new this._Graphic({
                geometry: new this._Point({ x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2, spatialReference: sr }),
                symbol: new this._TextSymbol({
                    text: courseLabel,
                    color: lineColor,
                    font: { size: 9, family: 'sans-serif' },
                    haloColor: [255, 255, 255, 230],
                    haloSize: 1.5,
                    horizontalAlignment: 'center',
                    verticalAlignment: 'bottom'
                })
            }));
        }
        // Closure line (red dash) if the last drawn point differs from the start.
        const first = drawnPoints[0], last = drawnPoints[drawnPoints.length - 1];
        const closureDist = Math.hypot(last.x - first.x, last.y - first.y);
        if (closureDist > 0.05) {
            this._traverseLayer.add(new this._Graphic({
                geometry: new this._Polyline({ paths: [[[last.x, last.y], [first.x, first.y]]], spatialReference: sr }),
                symbol: new this._SimpleLine({ color: closureColor, width: 1.5, style: 'dash' })
            }));
        }
        // Vertex markers.
        for (let j = 0; j < drawnPoints.length; j++) {
            const pt = drawnPoints[j];
            this._traverseLayer.add(new this._Graphic({
                geometry: new this._Point({ x: pt.x, y: pt.y, spatialReference: sr }),
                symbol: new this._SimpleMarker({
                    color: getPointColor(j === 0, j === drawnPoints.length - 1, closureDist),
                    outline: { color: [255, 255, 255, 255], width: 1.5 },
                    size: j === 0 ? 12 : 8,
                    style: 'circle'
                })
            }));
        }
    }
    /**
     * Redraws the highlight layer for the given course index.
     * Walks the course chain from the start point up to and including `index` to
     * find the segment endpoints, then draws a thick cyan halo line into
     * `_highlightLayer`.  Clears the layer if `index` is null or the segment
     * geometry cannot be resolved (e.g. an earlier course is invalid).
     */
    _redrawHighlight(index) {
        if (!this._highlightLayer)
            return;
        this._highlightLayer.removeAll();
        if (index === null)
            return;
        const { startPoint, courses, distanceUnit, bearingFormat, bearingEntry } = this.state;
        if (!startPoint)
            return;
        const sr = startPoint.spatialReference;
        // Walk the chain up to and including `index`.  Any parse failure before
        // or at the target course means we cannot draw a valid segment.
        let px = startPoint.x, py = startPoint.y;
        let segStart = null;
        let segEnd = null;
        for (let i = 0; i <= index; i++) {
            const az = parseBearingValue(courses[i].bearing, bearingFormat, bearingEntry);
            const dist = courses[i].distance ? parseFloat(courses[i].distance) : NaN;
            if (az === null || isNaN(dist) || dist <= 0)
                return; // chain broken
            const nx = computeNextPoint(px, py, az, toMeters(courses[i].distance, distanceUnit));
            if (i === index) {
                segStart = { x: px, y: py };
                segEnd = nx;
            }
            px = nx.x;
            py = nx.y;
        }
        if (!segStart || !segEnd)
            return;
        // Outer halo — wider, semi-transparent cyan
        this._highlightLayer.add(new this._Graphic({
            geometry: new this._Polyline({
                paths: [[[segStart.x, segStart.y], [segEnd.x, segEnd.y]]],
                spatialReference: sr
            }),
            symbol: new this._SimpleLine({ color: [0, 255, 255, 80], width: 10, style: 'solid' })
        }));
        // Inner bright line — solid cyan on top
        this._highlightLayer.add(new this._Graphic({
            geometry: new this._Polyline({
                paths: [[[segStart.x, segStart.y], [segEnd.x, segEnd.y]]],
                spatialReference: sr
            }),
            symbol: new this._SimpleLine({ color: [0, 220, 255, 255], width: 3, style: 'solid' })
        }));
    }
    _drawTraverse() {
        var _a;
        const { startPoint, courses, distanceUnit, bearingFormat, bearingEntry } = this.state;
        const view = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
        if (!startPoint) {
            this.setState({ parseError: 'Pick a starting point on the map first.' });
            return;
        }
        if (!view || !this._traverseLayer) {
            this.setState({ parseError: 'Map not ready.' });
            return;
        }
        if (courses.length === 0 || courses.every(l => !l.bearing && !l.distance)) {
            this.setState({ parseError: 'Enter at least one traverse course.' });
            return;
        }
        const points = buildTraversePoints(startPoint.x, startPoint.y, courses, distanceUnit, bearingFormat, bearingEntry);
        if (!points) {
            this.setState({ parseError: 'Could not parse one or more courses. Check bearing format and distance values.' });
            return;
        }
        this._traverseLayer.removeAll();
        this._labelLayer.removeAll();
        const sr = startPoint.spatialReference;
        const lineColor = hexToRgba(this.state.traverseColor);
        const closureColor = [249, 115, 22, 255];
        const geomForZoom = [];
        for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i], p1 = points[i + 1];
            const lineGeom = new this._Polyline({ paths: [[[p0.x, p0.y], [p1.x, p1.y]]], spatialReference: sr });
            this._traverseLayer.add(new this._Graphic({
                geometry: lineGeom,
                symbol: new this._SimpleLine({ color: lineColor, width: 2, style: 'dash' })
            }));
            geomForZoom.push(lineGeom);
            const az = parseBearingValue(courses[i].bearing, bearingFormat, bearingEntry);
            const courseLabel = courses[i].distance + ' ' + distanceUnit + '\n' + formatBearingLabel(az, bearingFormat);
            this._labelLayer.add(new this._Graphic({
                geometry: new this._Point({ x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2, spatialReference: sr }),
                symbol: new this._TextSymbol({
                    text: courseLabel,
                    color: lineColor,
                    font: { size: 9, family: 'sans-serif' },
                    haloColor: [255, 255, 255, 230],
                    haloSize: 1.5,
                    horizontalAlignment: 'center',
                    verticalAlignment: 'bottom'
                })
            }));
        }
        const first = points[0], last = points[points.length - 1];
        const closureDist = Math.hypot(last.x - first.x, last.y - first.y);
        if (closureDist > 0.05) {
            this._traverseLayer.add(new this._Graphic({
                geometry: new this._Polyline({ paths: [[[last.x, last.y], [first.x, first.y]]], spatialReference: sr }),
                symbol: new this._SimpleLine({ color: closureColor, width: 1.5, style: 'dash' })
            }));
        }
        for (let j = 0; j < points.length; j++) {
            const pt = points[j];
            this._traverseLayer.add(new this._Graphic({
                geometry: new this._Point({ x: pt.x, y: pt.y, spatialReference: sr }),
                symbol: new this._SimpleMarker({
                    color: getPointColor(j === 0, j === points.length - 1, closureDist),
                    outline: { color: [255, 255, 255, 255], width: 1.5 },
                    size: j === 0 ? 12 : 8,
                    style: 'circle'
                })
            }));
        }
        if (geomForZoom.length > 0)
            view.goTo(geomForZoom, { animate: true }).catch(() => { });
        // Refresh the selection highlight on top of the freshly drawn traverse.
        this._redrawHighlight(this.state.selectedCourseIndex);
        this.setState({ closureReport: computeClosureReport(courses, distanceUnit, bearingFormat, bearingEntry), parseError: null });
    }
    _clearAll() {
        this._cancelPick();
        if (this._traverseLayer)
            this._traverseLayer.removeAll();
        if (this._labelLayer)
            this._labelLayer.removeAll();
        if (this._highlightLayer)
            this._highlightLayer.removeAll();
        this.setState({
            startPoint: null,
            courses: [{ bearing: '', distance: '' }],
            closureReport: null,
            parseError: null,
            isPickingStart: false,
            selectedCourseIndex: null
        });
    }
    _exportGeoJSON() {
        const { startPoint, courses, distanceUnit, bearingFormat, bearingEntry, closureReport, traverseColor, exportLineString, exportPoints, exportPolygon, exportFileName } = this.state;
        if (!startPoint)
            return;
        // Walk courses, stopping at first invalid entry.
        const points = [{ x: startPoint.x, y: startPoint.y }];
        const validCourses = [];
        for (const c of courses) {
            const az = parseBearingValue(c.bearing, bearingFormat, bearingEntry);
            const distM = toMeters(c.distance, distanceUnit);
            if (az === null || !c.distance || isNaN(distM) || distM <= 0)
                break;
            const last = points[points.length - 1];
            points.push(computeNextPoint(last.x, last.y, az, distM));
            validCourses.push({ bearing: c.bearing, distance: c.distance, az, distM });
        }
        if (validCourses.length === 0)
            return;
        const wgs84 = points.map(p => webMercatorToWGS84(p.x, p.y));
        const features = [];
        // LineString — full traverse path
        if (exportLineString) {
            features.push({
                type: 'Feature',
                geometry: { type: 'LineString', coordinates: wgs84 },
                properties: {
                    stroke: traverseColor,
                    courseCount: validCourses.length,
                    totalDistance: parseFloat(validCourses.reduce((s, c) => s + c.distM, 0).toFixed(3)),
                    distanceUnit,
                    bearingFormat
                }
            });
        }
        // Points — one per vertex
        if (exportPoints) {
            wgs84.forEach((coord, i) => {
                const props = { 'marker-color': traverseColor, index: i, type: i === 0 ? 'start' : 'vertex' };
                if (i > 0) {
                    const c = validCourses[i - 1];
                    props.bearing = c.bearing;
                    props.distance = parseFloat(c.distance);
                    props.distanceUnit = distanceUnit;
                }
                features.push({ type: 'Feature', geometry: { type: 'Point', coordinates: coord }, properties: props });
            });
        }
        // Polygon
        if (exportPolygon && validCourses.length >= 2) {
            const ring = [...wgs84, wgs84[0]];
            const polyProps = { fill: traverseColor, 'fill-opacity': 0.2, stroke: traverseColor };
            if (closureReport) {
                polyProps.areaAcres = parseFloat(closureReport.areaAcres.toFixed(4));
                polyProps.areaSqFt = Math.round(closureReport.areaSqFt);
                polyProps.closureError = parseFloat(closureReport.closureError.toFixed(4));
                polyProps.precisionRatio = `1:${closureReport.precisionRatio.toLocaleString()}`;
            }
            features.push({ type: 'Feature', geometry: { type: 'Polygon', coordinates: [ring] }, properties: polyProps });
        }
        const geojson = { type: 'FeatureCollection', features };
        const blob = new Blob([JSON.stringify(geojson, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = (exportFileName.trim() || 'traverse') + '.geojson';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    // -------------------------------------------------------------------------
    // Render helpers — bearing cell
    // -------------------------------------------------------------------------
    /**
     * Render the bearing input cell for a single course row.
     *
     * In quadrant + letters mode: a single text input accepting "N 45°30' E".
     * In quadrant + number mode:  a narrow text input for the quadrant digit
     *                             (1–4) + a text input for the DMS angle,
     *                             stored internally as "Q<n>|<angle>".
     * In azimuth mode:            a single numeric-ish text input.
     */
    _renderBearingCell(course, i) {
        const { bearingFormat, bearingEntry } = this.state;
        if (bearingFormat === 'quadrant' && bearingEntry === 'number') {
            const qNum = decodeQNum(course.bearing);
            const qAngle = decodeQAngle(course.bearing);
            return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', gap: '4px', alignItems: 'center' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { ref: el => { this._qNumRefs[i] = el; }, type: "text", inputMode: "numeric", maxLength: 1, style: S.qNumInput, value: qNum, title: "Quadrant: 1=NE  2=SE  3=SW  4=NW", placeholder: "Q", onChange: ev => {
                            // Accept only digits 1–4; silently ignore anything else.
                            const raw = ev.target.value.trim();
                            const n = parseInt(raw, 10);
                            if (raw === '' || (n >= 1 && n <= 4)) {
                                const newQ = raw === '' ? 1 : n;
                                this._updateCourse(i, 'bearing', encodeQNum(newQ, qAngle));
                            }
                        }, onKeyDown: ev => this._handleCourseKeyDown(ev, i, 'quadrant') }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { ref: el => { this._qAngleRefs[i] = el; }, type: "text", style: Object.assign(Object.assign({}, S.input), { flex: 1 }), value: qAngle, placeholder: "45 30 00", title: "Degrees minutes seconds \u2014 e.g. 45 30 00", onChange: ev => {
                            this._updateCourse(i, 'bearing', encodeQNum(qNum, ev.target.value));
                        }, onKeyDown: ev => this._handleCourseKeyDown(ev, i, 'bearing') })] }));
        }
        // Default: single text input (letters quadrant or azimuth)
        const bPlaceholder = bearingFormat === 'quadrant' ? "N 45°30'00\" E" : '045.5000';
        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { ref: el => { this._bearingRefs[i] = el; }, type: "text", style: S.input, value: course.bearing, placeholder: bPlaceholder, onChange: ev => this._updateCourse(i, 'bearing', ev.target.value), onKeyDown: ev => this._handleCourseKeyDown(ev, i, 'bearing') }));
    }
    // -------------------------------------------------------------------------
    // Main render
    // -------------------------------------------------------------------------
    render() {
        var _a;
        const { jimuMapView, modulesLoaded, isPickingStart, startPoint, courses, bearingFormat, bearingEntry, distanceUnit, closureReport, parseError, selectedCourseIndex, traverseColor, exportLineString, exportPoints, exportPolygon } = this.state;
        const mapReady = !!jimuMapView && modulesLoaded;
        const drawn = closureReport !== null;
        // Keep ref arrays in sync with course count (trim stale tails).
        this._bearingRefs.length = courses.length;
        this._distanceRefs.length = courses.length;
        this._qNumRefs.length = courses.length;
        this._qAngleRefs.length = courses.length;
        // Build the format hint text.
        let hintText;
        if (bearingFormat === 'azimuth') {
            hintText = 'Azimuth: 045.5000  (0–360° clockwise from north)';
        }
        else if (bearingEntry === 'number') {
            hintText = 'Quadrant #: type 1–4, then enter angle as D M S  (e.g. 45 30 00)\nQ1=NE  Q2=SE  Q3=SW  Q4=NW';
        }
        else {
            hintText = "Quadrant: N 45°30'00\" E  or  S12 30 00W  or  N45.504E";
        }
        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.wrap, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this._onViewChange }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.header, children: "Traverse Tool" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.body, children: [!jimuMapView && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.warn, children: "Connect this widget to a map in the widget settings." })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.section, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.label, children: "Starting Point" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), (isPickingStart ? S.btnActive : S.btnSecondary)), (!mapReady ? S.btnDisabled : {})), disabled: !mapReady, onClick: () => this._startPickingPoint(), children: isPickingStart ? 'Click on map…' : startPoint ? 'Re-pick Start' : 'Pick Start Point' }), startPoint && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.coordBox, children: ["X: ", startPoint.x.toFixed(2), '   ', "Y: ", startPoint.y.toFixed(2)] }))] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: Object.assign(Object.assign(Object.assign({}, S.section), S.row), { alignItems: 'flex-start', gap: '14px' }), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { flex: 1 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.label, children: "Bearing Format" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.row, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), { flex: 1 }), (bearingFormat === 'quadrant' ? S.btnPrimary : S.btnSecondary)), onClick: () => this.setState({ bearingFormat: 'quadrant', closureReport: null }), children: "Quadrant" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), { flex: 1 }), (bearingFormat === 'azimuth' ? S.btnPrimary : S.btnSecondary)), onClick: () => this.setState({ bearingFormat: 'azimuth', closureReport: null }), children: "Azimuth" })] }), bearingFormat === 'quadrant' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: Object.assign(Object.assign({}, S.entryToggle), { marginTop: '6px' }), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: S.entryToggleLabel, children: "Entry:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), { padding: '3px 8px', fontSize: '11px' }), (bearingEntry === 'letters' ? S.btnPrimary : S.btnSecondary)), title: "Enter bearing as N/S + angle + E/W (traditional)", onClick: () => this.setState({ bearingEntry: 'letters', closureReport: null }), children: "N/S E/W" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), { padding: '3px 8px', fontSize: '11px' }), (bearingEntry === 'number' ? S.btnPrimary : S.btnSecondary)), title: "Enter bearing as quadrant number (1\u20134) + DMS angle", onClick: () => this.setState({ bearingEntry: 'number', closureReport: null }), children: "Q1\u2013Q4" })] }))] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.label, children: "Distance Unit" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { style: S.select, value: distanceUnit, onChange: ev => this.setState({ distanceUnit: ev.target.value, closureReport: null }), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "feet", children: "Feet" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "chains", children: "Chains" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "meters", children: "Meters" })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.label, children: "Color" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "color", value: traverseColor, style: { width: '40px', height: '30px', border: '1px solid #e2e8f0', borderRadius: '5px', cursor: 'pointer', padding: '1px 2px' }, onChange: ev => this.setState({ traverseColor: ev.target.value }) })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.section, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: Object.assign(Object.assign({}, S.row), { marginBottom: '6px' }), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: S.label, children: ["Traverse Courses (", courses.length, ")"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), S.btnSecondary), { padding: '3px 9px', fontSize: '11px', marginLeft: 'auto' }), onClick: () => this._addCourse(false), children: "+ Add Leg" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { style: S.table, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: Object.assign(Object.assign({}, S.th), { width: '22px' }), children: "#" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: S.th, children: bearingFormat === 'quadrant' && bearingEntry === 'number'
                                                            ? 'Q# + Angle (D M S)'
                                                            : 'Bearing' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: Object.assign(Object.assign({}, S.th), { width: '76px' }), children: "Distance" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: Object.assign(Object.assign({}, S.th), { width: '26px' }) })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: courses.map((course, i) => {
                                                const isSelected = i === selectedCourseIndex;
                                                const rowStyle = isSelected
                                                    ? Object.assign(Object.assign({}, S.trSelected), { cursor: 'pointer' }) : { cursor: 'pointer' };
                                                return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: rowStyle, onClick: () => {
                                                        // Toggle: clicking the already-selected row deselects it.
                                                        this.setState(prev => ({
                                                            selectedCourseIndex: prev.selectedCourseIndex === i ? null : i
                                                        }));
                                                    }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: Object.assign(Object.assign({}, S.td), { color: isSelected ? '#0369a1' : '#94a3b8', fontWeight: '600', fontSize: '11px' }), children: i + 1 }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: S.td, children: this._renderBearingCell(course, i) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: S.td, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { ref: el => { this._distanceRefs[i] = el; }, type: "number", style: S.input, value: course.distance, placeholder: "0.00", min: "0", step: "0.01", onChange: ev => this._updateCourse(i, 'distance', ev.target.value), onKeyDown: ev => this._handleCourseKeyDown(ev, i, 'distance') }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: Object.assign(Object.assign({}, S.td), { whiteSpace: 'nowrap' }), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), S.btnSecondary), { padding: '2px 6px', fontSize: '14px', fontWeight: '700', lineHeight: '1', marginRight: '3px' }), title: "Insert course after", onClick: ev => { ev.stopPropagation(); this._insertCourse(i); }, children: "+" }), courses.length > 1 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: Object.assign(Object.assign({}, S.btn), S.btnDanger), title: "Remove course", onClick: ev => {
                                                                        var _a;
                                                                        ev.stopPropagation();
                                                                        if (isSelected)
                                                                            (_a = this._highlightLayer) === null || _a === void 0 ? void 0 : _a.removeAll();
                                                                        this._removeCourse(i);
                                                                    }, children: "\u00D7" }))] })] }, i));
                                            }) })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign({}, S.hint), { whiteSpace: 'pre-line' }), children: hintText }), parseError && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: S.errorBox, children: parseError }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: Object.assign(Object.assign({}, S.row), { marginBottom: '6px' }), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: Object.assign(Object.assign(Object.assign(Object.assign({}, S.btn), S.btnPrimary), { flex: 1 }), (!mapReady || !startPoint ? S.btnDisabled : {})), disabled: !mapReady || !startPoint, onClick: () => this._drawTraverse(), children: drawn ? 'Redraw Traverse' : 'Draw Traverse' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: Object.assign(Object.assign({}, S.btn), S.btnSecondary), onClick: () => this._clearAll(), children: "Clear" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: '6px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign({}, S.label), { marginBottom: '4px' }), children: "File Name" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', alignItems: 'center', gap: '6px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", style: Object.assign(Object.assign({}, S.input), { flex: 1 }), value: this.state.exportFileName, placeholder: "traverse", onChange: ev => this.setState({ exportFileName: ev.target.value }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '12px', color: '#94a3b8', flexShrink: 0 }, children: ".geojson" })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: '6px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign({}, S.label), { marginBottom: '4px' }), children: "Export Geometry" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', gap: '12px', fontSize: '12px', color: '#475569' }, children: ([
                                        ['exportLineString', 'Line'],
                                        ['exportPoints', 'Points'],
                                        ['exportPolygon', 'Polygon']
                                    ]).map(([key, label]) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: { display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: this.state[key], onChange: ev => this.setState({ [key]: ev.target.checked }) }), label] }, key))) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: '14px' }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: Object.assign(Object.assign(Object.assign(Object.assign({}, S.btn), S.btnSecondary), { width: '100%' }), (!startPoint ? S.btnDisabled : {})), disabled: !startPoint, onClick: () => this._exportGeoJSON(), children: "Export GeoJSON" }) }), closureReport && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.reportBox, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: '600', fontSize: '13px', color: '#166534', marginBottom: '8px' }, children: "Closure Report" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.reportRow, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: '#374151' }, children: "Total Perimeter" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { fontWeight: '600' }, children: [closureReport.totalDist.toFixed(3), " ", distanceUnit] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.reportRow, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: '#374151' }, children: "Sum Departures" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { fontWeight: '600' }, children: [closureReport.sumDep.toFixed(4), " ", distanceUnit] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.reportRow, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: '#374151' }, children: "Sum Latitudes" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { fontWeight: '600' }, children: [closureReport.sumLat.toFixed(4), " ", distanceUnit] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: Object.assign(Object.assign({}, S.reportRow), S.reportDivider), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: '#374151' }, children: "Closure Error" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { fontWeight: '600', color: closureReport.closureError > 0.1 ? '#dc2626' : '#166534' }, children: [closureReport.closureError.toFixed(4), " ", distanceUnit] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: S.reportRow, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: '#374151' }, children: "Precision Ratio" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { fontWeight: '600' }, children: ["1 : ", closureReport.precisionRatio.toLocaleString()] })] }), courses.length >= 2 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: Object.assign(Object.assign({}, S.reportRow), S.reportDivider), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: '#374151' }, children: "Enclosed Area" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { fontWeight: '600' }, children: [closureReport.areaAcres.toFixed(4), " ac", '  ', "(", Math.round(closureReport.areaSqFt).toLocaleString(), " sq ft)"] })] }))] }))] })] }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TraverseWidget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90cmF2ZXJzZS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkc7QUFDc0M7QUFHNUYsOEVBQThFO0FBQzlFLFlBQVk7QUFDWiw4RUFBOEU7QUFFOUUsTUFBTSxjQUFjLEdBQTJCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7QUFDN0YsTUFBTSxPQUFPLEdBQUcsT0FBTztBQUV2Qiw4RUFBOEU7QUFDOUUsMEJBQTBCO0FBQzFCLDhFQUE4RTtBQUU5RTs7O0dBR0c7QUFDSCxTQUFTLG9CQUFvQixDQUFFLEtBQWE7SUFDMUMsSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPLElBQUk7SUFDdkIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRTtTQUNuQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztTQUN2QixPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztTQUN0QixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUN2QixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDO0lBQ3pFLElBQUksQ0FBQyxDQUFDO1FBQUUsT0FBTyxJQUFJO0lBQ25CLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNySCxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSTtJQUNwQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7UUFBRSxPQUFPLElBQUk7SUFDbEMsSUFBSSxFQUFFLEtBQUssR0FBRyxJQUFJLEVBQUUsS0FBSyxHQUFHO1FBQUUsT0FBTyxFQUFFO0lBQ3ZDLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFFLEtBQUssR0FBRztRQUFFLE9BQU8sR0FBRyxHQUFHLEVBQUU7SUFDN0MsSUFBSSxFQUFFLEtBQUssR0FBRyxJQUFJLEVBQUUsS0FBSyxHQUFHO1FBQUUsT0FBTyxHQUFHLEdBQUcsRUFBRTtJQUM3QyxJQUFJLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBRSxLQUFLLEdBQUc7UUFBRSxPQUFPLEdBQUcsR0FBRyxFQUFFO0lBQzdDLE9BQU8sSUFBSTtBQUNiLENBQUM7QUFFRDs7Ozs7Ozs7OztHQVVHO0FBQ0gsU0FBUywwQkFBMEIsQ0FBRSxRQUFnQixFQUFFLFFBQWdCO0lBQ3JFLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQztRQUFFLE9BQU8sSUFBSTtJQUM3QyxJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSTtJQUUxQixzRUFBc0U7SUFDdEUsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRTtTQUN4QixPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztTQUN2QixPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztTQUN0QixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUV2QixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM1QixNQUFNLENBQUMsR0FBSyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUN2QyxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUN2QyxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUV2QyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFBRSxPQUFPLElBQUk7SUFDekIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJO0lBQzFFLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtRQUFFLE9BQU8sSUFBSTtJQUVsQyxJQUFJLFFBQVEsS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFFO0lBQzdCLElBQUksUUFBUSxLQUFLLENBQUM7UUFBRSxPQUFPLEdB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R0FBRyxFQUFFO0lBQUMsQ0FBQztTQUN2RCxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxHQUFHO0lBQUMsQ0FBQztTQUN4QyxDQUFDO1FBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUU7SUFBQyxDQUFDO0lBQzVELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzNCLE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUU7SUFDL0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkMsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFLENBQUM7UUFBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQUMsR0FBRyxFQUFFO0lBQUMsQ0FBQztJQUNsQyxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFBQyxHQUFHLEVBQUU7SUFBQyxDQUFDO0lBQ2xDLE9BQU8sR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO0FBQ3ZILENBQUM7QUFFRCxTQUFTLGFBQWEs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L0IsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQUssSUFBSSxPQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxlQUM3RixJQUNILENBQ1AsSUFDRyxDQUNQLElBQ0csSUFDRixDQUNQO0lBQ0gsQ0FBQztDQUNGO0FBRUQsaUVBQWUsY0FBYztBQUVyQixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3RyYXZlcnNlL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldywgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHR5cGUgeyBCZWFyaW5nRm9ybWF0LCBEaXN0YW5jZVVuaXQsIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENvbnN0YW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IFVOSVRfVE9fTUVURVJTOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0geyBmZWV0OiAwLjMwNDgsIGNoYWluczogMjAuMTE2OCwgbWV0ZXJzOiAxLjAgfVxuY29uc3QgUl9FQVJUSCA9IDYzNzgxMzdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCZWFyaW5nIHBhcnNpbmcgaGVscGVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogUGFyc2UgYSB0cmFkaXRpb25hbCBxdWFkcmFudCBiZWFyaW5nIHN0cmluZyBzdWNoIGFzIFwiTiA0NcKwMzAnMDBcXFwiIEVcIiBpbnRvXG4gKiBhbiBhemltdXRoICgw4oCTMzYwwrApLiBSZXR1cm5zIG51bGwgaWYgdGhlIHN0cmluZyBpcyBtYWxmb3JtZWQuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUXVhZHJhbnRCZWFyaW5nIChpbnB1dDogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICghaW5wdXQpIHJldHVybiBudWxsXG4gIGNvbnN0IHN0ciA9IGlucHV0LnRyaW0oKS50b1VwcGVyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL1vCsCdcIl0rL2csICcgJylcbiAgICAucmVwbGFjZSgvWy0sXSsvZywgJyAnKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgY29uc3QgbSA9IHN0ci5tYXRjaCgvXihbTlNdKVxccyooW1xcZC5dKylcXHMqKFtcXGQuXSopXFxzKihbXFxkLl0qKVxccyooW0VXXSkkLylcbiAgaWYgKCFtKSByZXR1cm4gbnVsbFxuICBjb25zdCBucyA9IG1bMV0sIGQgPSBwYXJzZUZsb2F0KG1bMl0gfHwgJzAnKSwgbWluID0gcGFyc2VGbG9hdChtWzNdIHx8ICcwJyksIHNlYyA9IHBhcnNlRmxvYXQobVs0XSB8fCAnMCcpLCBldyA9IG1bNV1cbiAgY29uc3QgZGQgPSBkICsgbWluIC8gNjAgKyBzZWMgLyAzNjAwXG4gIGlmIChkZCA8IDAgfHwgZGQgPiA5MCkgcmV0dXJuIG51bGxcbiAgaWYgKG5zID09PSAnTicgJiYgZXcgPT09ICdFJykgcmV0dXJuIGRkXG4gIGlmIChucyA9PT0gJ1MnICYmIGV3ID09PSAnRScpIHJldHVybiAxODAgLSBkZFxuICBpZiAobnMgPT09ICdTJyAmJiBldyA9PT0gJ1cnKSByZXR1cm4gMTgwICsgZGRcbiAgaWYgKG5zID09PSAnTicgJiYgZXcgPT09ICdXJykgcmV0dXJuIDM2MCAtIGRkXG4gIHJldHVybiBudWxsXG59XG5cbi8qKlxuICogUGFyc2UgYSBxdWFkcmFudC1udW1iZXIgYmVhcmluZy4gIFRoZSB1c2VyIGVudGVycyBhIHF1YWRyYW50IG51bWJlciAoMeKAkzQpXG4gKiBwbHVzIGEgRE1TIGFuZ2xlIHN0cmluZy4gIENvbnZlbnRpb246XG4gKiAgIFExID0gTkUgIOKGkiAgYXppbXV0aCA9IGFuZ2xlXG4gKiAgIFEyID0gU0UgIOKGkiAgYXppbXV0aCA9IDE4MCDiiJIgYW5nbGVcbiAqICAgUTMgPSBTVyAg4oaSICBhemltdXRoID0gMTgwICsgYW5nbGVcbiAqICAgUTQgPSBOVyAg4oaSICBhemltdXRoID0gMzYwIOKIkiBhbmdsZVxuICpcbiAqIFRoZSBhbmdsZSBmaWVsZCBhY2NlcHRzIHRoZSBzYW1lIGZsZXhpYmxlIERNUyBzeW50YXggYXMgcGFyc2VRdWFkcmFudEJlYXJpbmdcbiAqIChlLmcuIFwiNDUgMzAgMDBcIiwgXCI0NcKwMzAnMDBcXFwiXCIsIFwiNDUuNVwiKS5cbiAqL1xuZnVuY3Rpb24gcGFyc2VRdWFkcmFudE51bWJlckJlYXJpbmcgKHF1YWRyYW50OiBudW1iZXIsIGFuZ2xlU3RyOiBzdHJpbmcpOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKHF1YWRyYW50IDwgMSB8fCBxdWFkcmFudCA+IDQpIHJldHVybiBudWxsXG4gIGlmICghYW5nbGVTdHIpIHJldHVybiBudWxsXG5cbiAgLy8gTm9ybWFsaXNlIHNlcGFyYXRvcnMgdG8gc3BhY2VzLCBzdHJpcCBkZWdyZWUvbWludXRlL3NlY29uZCBzeW1ib2xzLlxuICBjb25zdCBzdHIgPSBhbmdsZVN0ci50cmltKClcbiAgICAucmVwbGFjZSgvW8KwJ1wiXSsvZywgJyAnKVxuICAgIC5yZXBsYWNlKC9bLSxdKy9nLCAnICcpXG4gICAgLnJlcGxhY2UoL1xccysvZywgJyAnKVxuXG4gIGNvbnN0IHBhcnRzID0gc3RyLnNwbGl0KCcgJylcbiAgY29uc3QgZCAgID0gcGFyc2VGbG9hdChwYXJ0c1swXSB8fCAnMCcpXG4gIGNvbnN0IG1pbiA9IHBhcnNlRmxvYXQocGFydHNbMV0gfHwgJzAnKVxuICBjb25zdCBzZWMgPSBwYXJzZUZsb2F0KHBhcnRzWzJdIHx8ICcwJylcblxuICBpZiAoaXNOYU4oZCkpIHJldHVybiBudWxsXG4gIGNvbnN0IGRkID0gZCArIChpc05hTihtaW4pID8gMCA6IG1pbikgLyA2MCArIChpc05hTihzZWMpID8gMCA6IHNlYykgLyAzNjAwXG4gIGlmIChkZCA8IDAgfHwgZGQgPiA5MCkgcmV0dXJuIG51bGxcblxuICBpZiAocXVhZHJhbnQgPT09IDEpIHJldHVybiBkZFxuICBpZiAocXVhZHJhbnQgPT09IDIpIHJldHVybiAxODAgLSBkZFxuICBpZiAocXVhZHJhbnQgPT09IDMpIHJldHVybiAxODAgKyBkZFxuICBpZiAocXVhZHJhbnQgPT09IDQpIHJldHVybiAzNjAgLSBkZFxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBwYXJzZUF6aW11dGggKGlucHV0OiBzdHJpbmcpOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKCFpbnB1dCkgcmV0dXJuIG51bGxcbiAgY29uc3QgdmFsID0gcGFyc2VGbG9hdChpbnB1dClcbiAgaWYgKGlzTmFOKHZhbCkgfHwgdmFsIDwgMCB8fCB2YWwgPj0gMzYwKSByZXR1cm4gbnVsbFxuICByZXR1cm4gdmFsXG59XG5cbmZ1bmN0aW9uIHBhcnNlQmVhcmluZyAoYmVhcmluZzogc3RyaW5nLCBmb3JtYXQ6IEJlYXJpbmdGb3JtYXQpOiBudW1iZXIgfCBudWxsIHtcbiAgcmV0dXJuIGZvcm1hdCA9PT0gJ3F1YWRyYW50JyA/IHBhcnNlUXVhZHJhbnRCZWFyaW5nKGJlYXJpbmcpIDogcGFyc2VBemltdXRoKGJlYXJpbmcpXG59XG5cbi8qKlxuICogUGFyc2UgYSBzdG9yZWQgYmVhcmluZyB2YWx1ZSB0aGF0IG1heSBiZSBlaXRoZXIgYSBwbGFpbiBzdHJpbmcgKHF1YWRyYW50IC9cbiAqIGF6aW11dGggbW9kZSkgb3IgdGhlIGVuY29kZWQgcXVhZHJhbnQtbnVtYmVyIGZvcm1hdCBcIlE8bj58PGFuZ2xlU3RyPlwiIHRoYXRcbiAqIHdlIHVzZSBpbnRlcm5hbGx5IHdoZW4gYmVhcmluZ0VudHJ5ID09PSAnbnVtYmVyJy5cbiAqL1xuZnVuY3Rpb24gcGFyc2VCZWFyaW5nVmFsdWUgKFxuICBiZWFyaW5nOiBzdHJpbmcsXG4gIGZvcm1hdDogQmVhcmluZ0Zvcm1hdCxcbiAgYmVhcmluZ0VudHJ5OiBCZWFyaW5nRW50cnlcbik6IG51bWJlciB8IG51bGwge1xuICBpZiAoZm9ybWF0ID09PSAncXVhZHJhbnQnICYmIGJlYXJpbmdFbnRyeSA9PT0gJ251bWJlcicpIHtcbiAgICBjb25zdCBzZXAgPSBiZWFyaW5nLmluZGV4T2YoJ3wnKVxuICAgIGlmIChzZXAgPT09IC0xKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHEgPSBwYXJzZUludChiZWFyaW5nLnNsaWNlKDEsIHNlcCksIDEwKVxuICAgIGNvbnN0IGFuZ2xlID0gYmVhcmluZy5zbGljZShzZXAgKyAxKVxuICAgIHJldHVybiBwYXJzZVF1YWRyYW50TnVtYmVyQmVhcmluZyhxLCBhbmdsZSlcbiAgfVxuICByZXR1cm4gcGFyc2VCZWFyaW5nKGJlYXJpbmcsIGZvcm1hdClcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEaXN0YW5jZSAvIGdlb21ldHJ5IGhlbHBlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiB0b01ldGVycyAoZGlzdGFuY2U6IHN0cmluZywgdW5pdDogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoZGlzdGFuY2UpICogKFVOSVRfVE9fTUVURVJTW3VuaXRdIHx8IDEpXG59XG5cbmZ1bmN0aW9uIHdlYk1lcmNhdG9yVG9XR1M4NCAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgbG9uID0geCAvIFJfRUFSVEggKiAoMTgwIC8gTWF0aC5QSSlcbiAgY29uc3QgbGF0ID0gKDIgKiBNYXRoLmF0YW4oTWF0aC5leHAoeSAvIFJfRUFSVEgpKSAtIE1hdGguUEkgLyAyKSAqICgxODAgLyBNYXRoLlBJKVxuICByZXR1cm4gW3BhcnNlRmxvYXQobG9uLnRvRml4ZWQoNykpLCBwYXJzZUZsb2F0KGxhdC50b0ZpeGVkKDcpKV1cbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2JhIChoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgaCA9IGhleC5yZXBsYWNlKCcjJywgJycpXG4gIHJldHVybiBbXG4gICAgcGFyc2VJbnQoaC5zbGljZSgwLCAyKSwgMTYpLFxuICAgIHBhcnNlSW50KGguc2xpY2UoMiwgNCksIDE2KSxcbiAgICBwYXJzZUludChoLnNsaWNlKDQsIDYpLCAxNiksXG4gICAgMjU1XG4gIF1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZU5leHRQb2ludCAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGF6aW11dGhEZWc6IG51bWJlciwgZGlzdGFuY2VNZXRlcnM6IG51bWJlcikge1xuICBjb25zdCBsYXRfcmFkID0gMiAqIE1hdGguYXRhbihNYXRoLmV4cCh5IC8gUl9FQVJUSCkpIC0gTWF0aC5QSSAvIDJcbiAgY29uc3QgY29zX2xhdCA9IE1hdGguY29zKGxhdF9yYWQpXG4gIGNvbnN0IGF6X3JhZCA9IGF6aW11dGhEZWcgKiBNYXRoLlBJIC8gMTgwXG4gIHJldHVybiB7XG4gICAgeDogeCArIGRpc3RhbmNlTWV0ZXJzICogTWF0aC5zaW4oYXpfcmFkKSAvIGNvc19sYXQsXG4gICAgeTogeSArIGRpc3RhbmNlTWV0ZXJzICogTWF0aC5jb3MoYXpfcmFkKSAvIGNvc19sYXRcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERhdGEgdHlwZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbnRlcmZhY2UgVHJhdmVyc2VDb3Vyc2UgeyBiZWFyaW5nOiBzdHJpbmc7IGRpc3RhbmNlOiBzdHJpbmcgfVxuaW50ZXJmYWNlIFRyYXZlcnNlUG9pbnQgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG5cbi8qKiBDb250cm9scyBob3cgdGhlIGJlYXJpbmcgZmllbGQgaXMgcmVuZGVyZWQgaW4gdGhlIFVJIHdoZW4gZm9ybWF0ID0gJ3F1YWRyYW50Jy4gKi9cbnR5cGUgQmVhcmluZ0VudHJ5ID0gJ2xldHRlcnMnIHwgJ251bWJlcidcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUcmF2ZXJzZSBjYWxjdWxhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGJ1aWxkVHJhdmVyc2VQb2ludHMgKFxuICBzdGFydFg6IG51bWJlciwgc3RhcnRZOiBudW1iZXIsXG4gIGNvdXJzZXM6IFRyYXZlcnNlQ291cnNlW10sXG4gIHVuaXQ6IHN0cmluZyxcbiAgYmVhcmluZ0Zvcm1hdDogQmVhcmluZ0Zvcm1hdCxcbiAgYmVhcmluZ0VudHJ5OiBCZWFyaW5nRW50cnlcbik6IFRyYXZlcnNlUG9pbnRbXSB8IG51bGwge1xuICBjb25zdCBwb2ludHM6IFRyYXZlcnNlUG9pbnRbXSA9IFt7IHg6IHN0YXJ0WCwgeTogc3RhcnRZIH1dXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291cnNlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvdXJzZSA9IGNvdXJzZXNbaV1cbiAgICBjb25zdCBheiA9IHBhcnNlQmVhcmluZ1ZhbHVlKGNvdXJzZS5iZWFyaW5nLCBiZWFyaW5nRm9ybWF0LCBiZWFyaW5nRW50cnkpXG4gICAgaWYgKGF6ID09PSBudWxsIHx8ICFjb3Vyc2UuZGlzdGFuY2UgfHwgaXNOYU4ocGFyc2VGbG9hdChjb3Vyc2UuZGlzdGFuY2UpKSkgcmV0dXJuIG51bGxcbiAgICBjb25zdCBkID0gdG9NZXRlcnMoY291cnNlLmRpc3RhbmNlLCB1bml0KVxuICAgIGNvbnN0IGxhc3QgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdXG4gICAgcG9pbnRzLnB1c2goY29tcHV0ZU5leHRQb2ludChsYXN0LngsIGxhc3QueSwgYXosIGQpKVxuICB9XG4gIHJldHVybiBwb2ludHNcbn1cblxuaW50ZXJmYWNlIENsb3N1cmVSZXBvcnQge1xuICBjbG9zdXJlRXJyb3I6IG51bWJlclxuICBwcmVjaXNpb25SYXRpbzogbnVtYmVyXG4gIHRvdGFsRGlzdDogbnVtYmVyXG4gIHN1bURlcDogbnVtYmVyXG4gIHN1bUxhdDogbnVtYmVyXG4gIGFyZWFBY3JlczogbnVtYmVyXG4gIGFyZWFTcUZ0OiBudW1iZXJcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUNsb3N1cmVSZXBvcnQgKFxuICBjb3Vyc2VzOiBUcmF2ZXJzZUNvdXJzZVtdLFxuICB1bml0OiBzdHJpbmcsXG4gIGJlYXJpbmdGb3JtYXQ6IEJlYXJpbmdGb3JtYXQsXG4gIGJlYXJpbmdFbnRyeTogQmVhcmluZ0VudHJ5XG4pOiBDbG9zdXJlUmVwb3J0IHwgbnVsbCB7XG4gIGxldCBzdW1EZXAgPSAwLCBzdW1MYXQgPSAwLCB0b3RhbERpc3QgPSAwXG4gIGxldCBneCA9IDAsIGd5ID0gMFxuICBjb25zdCBnUHRzOiBUcmF2ZXJzZVBvaW50W10gPSBbeyB4OiAwLCB5OiAwIH1dXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291cnNlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvdXJzZSA9IGNvdXJzZXNbaV1cbiAgICBjb25zdCBheiA9IHBhcnNlQmVhcmluZ1ZhbHVlKGNvdXJzZS5iZWFyaW5nLCBiZWFyaW5nRm9ybWF0LCBiZWFyaW5nRW50cnkpXG4gICAgaWYgKGF6ID09PSBudWxsIHx8ICFjb3Vyc2UuZGlzdGFuY2UpIHJldHVybiBudWxsXG4gICAgY29uc3QgZCA9IHRvTWV0ZXJzKGNvdXJzZS5kaXN0YW5jZSwgdW5pdClcbiAgICBjb25zdCBhel9yYWQgPSBheiAqIE1hdGguUEkgLyAxODBcbiAgICBjb25zdCBkZXAgPSBkICogTWF0aC5zaW4oYXpfcmFkKVxuICAgIGNvbnN0IGxhdCA9IGQgKiBNYXRoLmNvcyhhel9yYWQpXG4gICAgc3VtRGVwICs9IGRlcDsgc3VtTGF0ICs9IGxhdDsgdG90YWxEaXN0ICs9IGRcbiAgICBneCArPSBkZXA7IGd5ICs9IGxhdFxuICAgIGdQdHMucHVzaCh7IHg6IGd4LCB5OiBneSB9KVxuICB9XG4gIGNvbnN0IGNsb3N1cmVNID0gTWF0aC5zcXJ0KHN1bURlcCAqIHN1bURlcCArIHN1bUxhdCAqIHN1bUxhdClcbiAgY29uc3QgdW5pdEZhY3RvciA9IDEgLyAoVU5JVF9UT19NRVRFUlNbdW5pdF0gfHwgMSlcbiAgY29uc3QgcHJlY2lzaW9uUmF0aW8gPSBjbG9zdXJlTSA+IDAuMDAxID8gTWF0aC5yb3VuZCh0b3RhbERpc3QgLyBjbG9zdXJlTSkgOiA5OTk5OTlcblxuICBsZXQgYXJlYSA9IDBcbiAgY29uc3QgbiA9IGdQdHMubGVuZ3RoXG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgayA9IChqICsgMSkgJSBuXG4gICAgYXJlYSArPSBnUHRzW2pdLnggKiBnUHRzW2tdLnkgLSBnUHRzW2tdLnggKiBnUHRzW2pdLnlcbiAgfVxuICBjb25zdCBhcmVhU3FNID0gTWF0aC5hYnMoYXJlYSAvIDIpXG5cbiAgcmV0dXJuIHtcbiAgICBjbG9zdXJlRXJyb3I6IGNsb3N1cmVNICogdW5pdEZhY3RvcixcbiAgICBwcmVjaXNpb25SYXRpbyxcbiAgICB0b3RhbERpc3Q6IHRvdGFsRGlzdCAqIHVuaXRGYWN0b3IsXG4gICAgc3VtRGVwOiBzdW1EZXAgKiB1bml0RmFjdG9yLFxuICAgIHN1bUxhdDogc3VtTGF0ICogdW5pdEZhY3RvcixcbiAgICBhcmVhQWNyZXM6IGFyZWFTcU0gKiAwLjAwMDI0NzEwNSxcbiAgICBhcmVhU3FGdDogYXJlYVNxTSAqIDEwLjc2MzlcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERpc3BsYXkgaGVscGVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGZvcm1hdEJlYXJpbmdMYWJlbCAoYXo6IG51bWJlciwgZm9ybWF0OiBCZWFyaW5nRm9ybWF0KTogc3RyaW5nIHtcbiAgaWYgKGZvcm1hdCA9PT0gJ2F6aW11dGgnKSByZXR1cm4gYXoudG9GaXhlZCg0KSArICfCsCdcbiAgbGV0IG5zOiBzdHJpbmcsIGV3OiBzdHJpbmcsIGFuZ2xlOiBudW1iZXJcbiAgaWYgKGF6IDw9IDkwKSAgICAgICB7IG5zID0gJ04nOyBldyA9ICdFJzsgYW5nbGUgPSBheiB9XG4gIGVsc2UgaWYgKGF6IDw9IDE4MCkgeyBucyA9ICdTJzsgZXcgPSAnRSc7IGFuZ2xlID0gMTgwIC0gYXogfVxuICBlbHNlIGlmIChheiA8PSAyNzApIHsgbnMgPSAnUyc7IGV3ID0gJ1cnOyBhbmdsZSA9IGF6IC0gMTgwIH1cbiAgZWxzZSAgICAgICAgICAgICAgICB7IG5zID0gJ04nOyBldyA9ICdXJzsgYW5nbGUgPSAzNjAgLSBheiB9XG4gIGxldCBkZWcgPSBNYXRoLmZsb29yKGFuZ2xlKVxuICBjb25zdCBtaW5GID0gKGFuZ2xlIC0gZGVnKSAqIDYwXG4gIGxldCBtaW4gPSBNYXRoLmZsb29yKG1pbkYpXG4gIGxldCBzZWMgPSBNYXRoLnJvdW5kKChtaW5GIC0gbWluKSAqIDYwKVxuICBpZiAoc2VjID09PSA2MCkgeyBzZWMgPSAwOyBtaW4rKyB9XG4gIGlmIChtaW4gPT09IDYwKSB7IG1pbiA9IDA7IGRlZysrIH1cbiAgcmV0dXJuIGAke25zfSAke1N0cmluZyhkZWcpLnBhZFN0YXJ0KDIsICcwJyl9wrAke1N0cmluZyhtaW4pLnBhZFN0YXJ0KDIsICcwJyl9JyR7U3RyaW5nKHNlYykucGFkU3RhcnQoMiwgJzAnKX1cIiAke2V3fWBcbn1cblxuZnVuY3Rpb24gZ2V0UG9pbnRDb2xvciAoaXNTdGFydDogYm9vbGVhbiwgaXNFbmQ6IGJvb2xlYW4sIGNsb3N1cmVEaXN0OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gIGlmIChpc1N0YXJ0KSByZXR1cm4gWzAsIDE4MCwgMCwgMjU1XVxuICBpZiAoaXNFbmQgJiYgY2xvc3VyZURpc3QgPiAwLjA1KSByZXR1cm4gWzIyMCwgMzgsIDM4LCAyNTVdXG4gIHJldHVybiBbNDEsIDEyMSwgMjU1LCAyNTVdXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSGVscGVycyBmb3IgcXVhZHJhbnQtbnVtYmVyIGJlYXJpbmcgc3RvcmFnZSBmb3JtYXQgXCJRPG4+fDxhbmdsZVN0cj5cIlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKiBEZWNvZGUgdGhlIHF1YWRyYW50IG51bWJlciBmcm9tIGEgc3RvcmVkIFwiUTxuPnw8YW5nbGU+XCIgdmFsdWUuICovXG5mdW5jdGlvbiBkZWNvZGVRTnVtIChiZWFyaW5nOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBzZXAgPSBiZWFyaW5nLmluZGV4T2YoJ3wnKVxuICBpZiAoc2VwID09PSAtMSkgcmV0dXJuIDFcbiAgcmV0dXJuIHBhcnNlSW50KGJlYXJpbmcuc2xpY2UoMSwgc2VwKSwgMTApIHx8IDFcbn1cblxuLyoqIERlY29kZSB0aGUgYW5nbGUgc3RyaW5nIGZyb20gYSBzdG9yZWQgXCJRPG4+fDxhbmdsZT5cIiB2YWx1ZS4gKi9cbmZ1bmN0aW9uIGRlY29kZVFBbmdsZSAoYmVhcmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc2VwID0gYmVhcmluZy5pbmRleE9mKCd8JylcbiAgaWYgKHNlcCA9PT0gLTEpIHJldHVybiBiZWFyaW5nXG4gIHJldHVybiBiZWFyaW5nLnNsaWNlKHNlcCArIDEpXG59XG5cbi8qKiBCdWlsZCB0aGUgc3RvcmFnZSBzdHJpbmcgZm9yIHF1YWRyYW50LW51bWJlciBtb2RlLiAqL1xuZnVuY3Rpb24gZW5jb2RlUU51bSAocTogbnVtYmVyLCBhbmdsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBRJHtxfXwke2FuZ2xlfWBcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBTOiBSZWNvcmQ8c3RyaW5nLCBSZWFjdC5DU1NQcm9wZXJ0aWVzPiA9IHtcbiAgd3JhcDogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBmb250U2l6ZTogJzEzcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBib3hTaXppbmc6ICdib3JkZXItYm94JyB9LFxuICBoZWFkZXI6IHsgcGFkZGluZzogJzEycHggMTZweCcsIGZvbnRXZWlnaHQ6ICc2MDAnLCBmb250U2l6ZTogJzE1cHgnLCBjb2xvcjogJyMxZTI5M2InLFxuICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTJlOGYwJywgZmxleFNocmluazogMCB9LFxuICBib2R5OiB7IGZsZXg6IDEsIG92ZXJmbG93WTogJ2F1dG8nLCBwYWRkaW5nOiAnMTJweCAxNnB4JyB9LFxuICBzZWN0aW9uOiB7IG1hcmdpbkJvdHRvbTogJzE0cHgnIH0sXG4gIGxhYmVsOiB7IGZvbnRTaXplOiAnMTFweCcsIGZvbnRXZWlnaHQ6ICc2MDAnLCBjb2xvcjogJyM2NDc0OGInLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wNWVtJywgbWFyZ2luQm90dG9tOiAnNXB4JyB9LFxuICByb3c6IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc4cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9LFxuICBidG46IHsgcGFkZGluZzogJzZweCAxMnB4JywgYm9yZGVyUmFkaXVzOiAnNnB4JywgYm9yZGVyOiAnbm9uZScsIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGZvbnRTaXplOiAnMTJweCcsIGZvbnRXZWlnaHQ6ICc1MDAnLCB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciAwLjE1cycsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH0sXG4gIGJ0blByaW1hcnk6IHsgYmFja2dyb3VuZENvbG9yOiAnIzNiODJmNicsIGNvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICcxcHggc29saWQgIzI1NjNlYicgfSxcbiAgYnRuU2Vjb25kYXJ5OiB7IGJhY2tncm91bmRDb2xvcjogJyNmMWY1ZjknLCBjb2xvcjogJyM0NzU1NjknLCBib3JkZXI6ICcxcHggc29saWQgI2UyZThmMCcgfSxcbiAgYnRuQWN0aXZlOiB7IGJhY2tncm91bmRDb2xvcjogJyMxZDRlZDgnLCBjb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnMXB4IHNvbGlkICMxZTQwYWYnIH0sXG4gIGJ0bkRhbmdlcjogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmVlMmUyJywgY29sb3I6ICcjZGMyNjI2JywgYm9yZGVyOiAnMXB4IHNvbGlkICNmZWNhY2EnLFxuICAgIHBhZGRpbmc6ICcycHggN3B4JywgZm9udFNpemU6ICcxNHB4JywgZm9udFdlaWdodDogJzcwMCcsIGxpbmVIZWlnaHQ6ICcxJyB9LFxuICBidG5EaXNhYmxlZDogeyBvcGFjaXR5OiAwLjQ1LCBjdXJzb3I6ICdub3QtYWxsb3dlZCcgfSxcbiAgaW5wdXQ6IHsgYm9yZGVyOiAnMXB4IHNvbGlkICNlMmU4ZjAnLCBib3JkZXJSYWRpdXM6ICc1cHgnLCBwYWRkaW5nOiAnNHB4IDdweCcsXG4gICAgZm9udFNpemU6ICcxMnB4Jywgd2lkdGg6ICcxMDAlJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnIH0sXG4gIHNlbGVjdDogeyBib3JkZXI6ICcxcHggc29saWQgI2UyZThmMCcsIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICc0cHggN3B4JyxcbiAgICBmb250U2l6ZTogJzEycHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgY3Vyc29yOiAncG9pbnRlcicgfSxcbiAgcU51bVNlbGVjdDogeyBib3JkZXI6ICcxcHggc29saWQgI2UyZThmMCcsIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICc0cHggNXB4JyxcbiAgICBmb250U2l6ZTogJzEycHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgY3Vyc29yOiAncG9pbnRlcicsIHdpZHRoOiAnNDhweCcsIGZsZXhTaHJpbms6IDAsXG4gICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScgfSxcbiAgcU51bUlucHV0OiB7IGJvcmRlcjogJzFweCBzb2xpZCAjZTJlOGYwJywgYm9yZGVyUmFkaXVzOiAnNXB4JywgcGFkZGluZzogJzRweCA1cHgnLFxuICAgIGZvbnRTaXplOiAnMTJweCcsIHdpZHRoOiAnMzJweCcsIGZsZXhTaHJpbms6IDAsIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicgYXMgY29uc3QsIGJveFNpemluZzogJ2JvcmRlci1ib3gnIGFzIGNvbnN0IH0sXG4gIHRhYmxlOiB7IHdpZHRoOiAnMTAwJScsIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnLCBmb250U2l6ZTogJzEycHgnIH0sXG4gIHRoOiB7IHBhZGRpbmc6ICc1cHggNnB4JywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZmFmYycsIGZvbnRXZWlnaHQ6ICc2MDAnLCBjb2xvcjogJyM2NDc0OGInLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2UyZThmMCcsIGZvbnRTaXplOiAnMTFweCcgfSxcbiAgdGQ6IHsgcGFkZGluZzogJzRweCA2cHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2YxZjVmOScsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH0sXG4gIHRyU2VsZWN0ZWQ6IHsgYmFja2dyb3VuZENvbG9yOiAnI2UwZjJmZScgfSwgICAvLyBsaWdodCBibHVlIHJvdyBoaWdobGlnaHRcbiAgY29vcmRCb3g6IHsgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZmFmYycsIGJvcmRlcjogJzFweCBzb2xpZCAjZTJlOGYwJywgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBwYWRkaW5nOiAnNXB4IDlweCcsIGZvbnRTaXplOiAnMTFweCcsIGNvbG9yOiAnIzQ3NTU2OScsIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLCBtYXJnaW5Ub3A6ICc1cHgnIH0sXG4gIHJlcG9ydEJveDogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmZGY0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNiYmY3ZDAnLCBib3JkZXJSYWRpdXM6ICc4cHgnLFxuICAgIHBhZGRpbmc6ICcxMXB4IDE0cHgnLCBtYXJnaW5Ub3A6ICc4cHgnIH0sXG4gIHJlcG9ydFJvdzogeyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHBhZGRpbmc6ICczcHggMCcsIGZvbnRTaXplOiAnMTJweCcgfSxcbiAgcmVwb3J0RGl2aWRlcjogeyBib3JkZXJUb3A6ICcxcHggc29saWQgI2JiZjdkMCcsIHBhZGRpbmdUb3A6ICc2cHgnLCBtYXJnaW5Ub3A6ICc0cHgnIH0sXG4gIGVycm9yQm94OiB7IGJhY2tncm91bmRDb2xvcjogJyNmZWYyZjInLCBib3JkZXI6ICcxcHggc29saWQgI2ZlY2FjYScsIGJvcmRlclJhZGl1czogJzZweCcsXG4gICAgcGFkZGluZzogJzdweCAxMXB4JywgZm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjZGMyNjI2JywgbWFyZ2luQm90dG9tOiAnMTBweCcgfSxcbiAgd2FybjogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmYmViJywgYm9yZGVyOiAnMXB4IHNvbGlkICNmZGU2OGEnLCBib3JkZXJSYWRpdXM6ICc2cHgnLFxuICAgIHBhZGRpbmc6ICc3cHggMTFweCcsIGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnIzkyNDAwZScsIG1hcmdpbkJvdHRvbTogJzEwcHgnIH0sXG4gIGhpbnQ6IHsgZm9udFNpemU6ICcxMXB4JywgY29sb3I6ICcjOTRhM2I4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIGxpbmVIZWlnaHQ6ICcxLjUnLFxuICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmYWZjJywgcGFkZGluZzogJzVweCA4cHgnLFxuICAgIGJvcmRlclJhZGl1czogJzRweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjZTJlOGYwJyB9LFxuICBlbnRyeVRvZ2dsZTogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzRweCcsIG1hcmdpbkJvdHRvbTogJzZweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH0sXG4gIGVudHJ5VG9nZ2xlTGFiZWw6IHsgZm9udFNpemU6ICcxMXB4JywgY29sb3I6ICcjNjQ3NDhiJywgbWFyZ2luUmlnaHQ6ICcycHgnIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDb21wb25lbnQgc3RhdGUgaW50ZXJmYWNlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW50ZXJmYWNlIFN0YXJ0UG9pbnQgeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgc3BhdGlhbFJlZmVyZW5jZTogYW55IH1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3IHwgbnVsbFxuICBtb2R1bGVzTG9hZGVkOiBib29sZWFuXG4gIGlzUGlja2luZ1N0YXJ0OiBib29sZWFuXG4gIHN0YXJ0UG9pbnQ6IFN0YXJ0UG9pbnQgfCBudWxsXG4gIGNvdXJzZXM6IFRyYXZlcnNlQ291cnNlW11cbiAgYmVhcmluZ0Zvcm1hdDogQmVhcmluZ0Zvcm1hdFxuICAvKiogT25seSByZWxldmFudCB3aGVuIGJlYXJpbmdGb3JtYXQgPT09ICdxdWFkcmFudCcuIFRvZ2dsZXMgdGhlIGJlYXJpbmdcbiAgICogIGlucHV0IGJldHdlZW4gdGhlIHRyYWRpdGlvbmFsIFwiTiA0NcKwMzAnIEVcIiBsZXR0ZXIgbW9kZSBhbmQgdGhlIG51bWVyaWNcbiAgICogIHF1YWRyYW50LW51bWJlciBtb2RlIChRMeKAk1E0ICsgRE1TIGFuZ2xlKS4gKi9cbiAgYmVhcmluZ0VudHJ5OiBCZWFyaW5nRW50cnlcbiAgZGlzdGFuY2VVbml0OiBEaXN0YW5jZVVuaXRcbiAgY2xvc3VyZVJlcG9ydDogQ2xvc3VyZVJlcG9ydCB8IG51bGxcbiAgcGFyc2VFcnJvcjogc3RyaW5nIHwgbnVsbFxuICAvKiogUm93IGluZGV4IHRvIGZvY3VzIGFmdGVyIGEgc3RhdGUgdXBkYXRlICh1c2VkIGZvciAxMC1rZXkgbmF2aWdhdGlvbikuICovXG4gIHBlbmRpbmdGb2N1c1JvdzogbnVtYmVyIHwgbnVsbFxuICAvKiogV2hpY2ggZmllbGQgdG8gZm9jdXMgaW4gdGhlIHBlbmRpbmcgcm93OiAnYmVhcmluZycgfCAnZGlzdGFuY2UnLiAqL1xuICBwZW5kaW5nRm9jdXNGaWVsZDogJ2JlYXJpbmcnIHwgJ2Rpc3RhbmNlJyB8IG51bGxcbiAgLyoqIEluZGV4IG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY291cnNlIHJvdyAobnVsbCA9IG5vbmUpLiAqL1xuICBzZWxlY3RlZENvdXJzZUluZGV4OiBudW1iZXIgfCBudWxsXG4gIC8qKiBIZXggY29sb3IgZm9yIHRyYXZlcnNlIGNvdXJzZSBsaW5lcyBvbiB0aGUgbWFwIGFuZCBpbiBleHBvcnRzLiAqL1xuICB0cmF2ZXJzZUNvbG9yOiBzdHJpbmdcbiAgZXhwb3J0TGluZVN0cmluZzogYm9vbGVhblxuICBleHBvcnRQb2ludHM6IGJvb2xlYW5cbiAgZXhwb3J0UG9seWdvbjogYm9vbGVhblxuICBleHBvcnRGaWxlTmFtZTogc3RyaW5nXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gV2lkZ2V0IGNvbXBvbmVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNsYXNzIFRyYXZlcnNlV2lkZ2V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFsbFdpZGdldFByb3BzPElNQ29uZmlnPiwgU3RhdGU+IHtcbiAgcHJpdmF0ZSBfR3JhcGhpY3NMYXllcjogYW55ID0gbnVsbFxuICBwcml2YXRlIF9HcmFwaGljOiBhbnkgPSBudWxsXG4gIHByaXZhdGUgX1BvaW50OiBhbnkgPSBudWxsXG4gIHByaXZhdGUgX1BvbHlsaW5lOiBhbnkgPSBudWxsXG4gIHByaXZhdGUgX1NpbXBsZUxpbmU6IGFueSA9IG51bGxcbiAgcHJpdmF0ZSBfU2ltcGxlTWFya2VyOiBhbnkgPSBudWxsXG4gIHByaXZhdGUgX1RleHRTeW1ib2w6IGFueSA9IG51bGxcbiAgcHJpdmF0ZSBfdHJhdmVyc2VMYXllcjogYW55ID0gbnVsbFxuICBwcml2YXRlIF9sYWJlbExheWVyOiBhbnkgPSBudWxsXG4gIHByaXZhdGUgX2hpZ2hsaWdodExheWVyOiBhbnkgPSBudWxsXG4gIHByaXZhdGUgX2NsaWNrSGFuZGxlOiBhbnkgPSBudWxsXG4gIHByaXZhdGUgX3JlZHJhd1RpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsXG5cbiAgLyoqXG4gICAqIFJlZnMgZm9yIGVhY2ggY291cnNlIHJvdydzIGJlYXJpbmcgYW5kIGRpc3RhbmNlIGlucHV0cy5cbiAgICogSW5kZXggbWF0Y2hlcyB0aGUgY291cnNlcyBhcnJheS4gUG9wdWxhdGVkIGR1cmluZyByZW5kZXIgdmlhIGNhbGxiYWNrIHJlZnMuXG4gICAqL1xuICBwcml2YXRlIF9iZWFyaW5nUmVmczogQXJyYXk8SFRNTElucHV0RWxlbWVudCB8IG51bGw+ID0gW11cbiAgcHJpdmF0ZSBfZGlzdGFuY2VSZWZzOiBBcnJheTxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD4gPSBbXVxuXG4gIC8qKlxuICAgKiBGb3IgcXVhZHJhbnQtbnVtYmVyIG1vZGUgdGhlIGJlYXJpbmcgY2VsbCBpcyBzcGxpdCBpbnRvIGEgbmFycm93IHRleHRcbiAgICogaW5wdXQgZm9yIHRoZSBxdWFkcmFudCBkaWdpdCAoMeKAkzQpIGFuZCBhIHRleHQgaW5wdXQgZm9yIHRoZSBETVMgYW5nbGUuXG4gICAqIF9xTnVtUmVmcyAgIOKGkiB0aGUgcXVhZHJhbnQgZGlnaXQgZmllbGQgKGZpcnN0IHRhYiBzdG9wIGluIHRoZSBjZWxsKVxuICAgKiBfcUFuZ2xlUmVmcyDihpIgdGhlIERNUyBhbmdsZSBmaWVsZCAoc2Vjb25kIHRhYiBzdG9wIGluIHRoZSBjZWxsKVxuICAgKi9cbiAgcHJpdmF0ZSBfcU51bVJlZnM6IEFycmF5PEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPiA9IFtdXG4gIHByaXZhdGUgX3FBbmdsZVJlZnM6IEFycmF5PEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPiA9IFtdXG5cbiAgY29uc3RydWN0b3IgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgamltdU1hcFZpZXc6IG51bGwsXG4gICAgICBtb2R1bGVzTG9hZGVkOiBmYWxzZSxcbiAgICAgIGlzUGlja2luZ1N0YXJ0OiBmYWxzZSxcbiAgICAgIHN0YXJ0UG9pbnQ6IG51bGwsXG4gICAgICBjb3Vyc2VzOiBbeyBiZWFyaW5nOiAnJywgZGlzdGFuY2U6ICcnIH1dLFxuICAgICAgYmVhcmluZ0Zvcm1hdDogcHJvcHMuY29uZmlnPy5kZWZhdWx0QmVhcmluZ0Zvcm1hdCA/PyAncXVhZHJhbnQnLFxuICAgICAgYmVhcmluZ0VudHJ5OiAnbGV0dGVycycsXG4gICAgICBkaXN0YW5jZVVuaXQ6IHByb3BzLmNvbmZpZz8uZGVmYXVsdERpc3RhbmNlVW5pdCA/PyAnZmVldCcsXG4gICAgICBjbG9zdXJlUmVwb3J0OiBudWxsLFxuICAgICAgcGFyc2VFcnJvcjogbnVsbCxcbiAgICAgIHBlbmRpbmdGb2N1c1JvdzogbnVsbCxcbiAgICAgIHBlbmRpbmdGb2N1c0ZpZWxkOiBudWxsLFxuICAgICAgc2VsZWN0ZWRDb3Vyc2VJbmRleDogbnVsbCxcbiAgICAgIHRyYXZlcnNlQ29sb3I6ICcjZGMyNjI2JyxcbiAgICAgIGV4cG9ydExpbmVTdHJpbmc6IHRydWUsXG4gICAgICBleHBvcnRQb2ludHM6IHRydWUsXG4gICAgICBleHBvcnRQb2x5Z29uOiB0cnVlLFxuICAgICAgZXhwb3J0RmlsZU5hbWU6ICd0cmF2ZXJzZSdcbiAgICB9XG4gICAgdGhpcy5fb25WaWV3Q2hhbmdlID0gdGhpcy5fb25WaWV3Q2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRm9jdXMgbWFuYWdlbWVudFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIENhbGxlZCBhZnRlciBldmVyeSByZW5kZXIuIElmIGEgcGVuZGluZyBmb2N1cyB0YXJnZXQgd2FzIHNldCAoZS5nLiBhZnRlclxuICAgKiBhZGRpbmcgYSBuZXcgY291cnNlIHJvdyB2aWEgMTAta2V5KSwgcmVzb2x2ZSBpdCBhbmQgY2xlYXIgdGhlIHBlbmRpbmcgc3RhdGUuXG4gICAqL1xuICBjb21wb25lbnREaWRVcGRhdGUgKF86IGFueSwgcHJldlN0YXRlOiBTdGF0ZSkge1xuICAgIGNvbnN0IHsgcGVuZGluZ0ZvY3VzUm93LCBwZW5kaW5nRm9jdXNGaWVsZCwgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5IH0gPSB0aGlzLnN0YXRlXG5cbiAgICAvLyAtLS0tIEZvY3VzIG1hbmFnZW1lbnQgLS0tLVxuICAgIGlmIChwZW5kaW5nRm9jdXNSb3cgIT09IG51bGwgJiYgcGVuZGluZ0ZvY3VzRmllbGQgIT09IG51bGwpIHtcbiAgICAgIC8vIENvbnN1bWUgdGhlIHBlbmRpbmcgZm9jdXMgaW1tZWRpYXRlbHkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGVuZGluZ0ZvY3VzUm93OiBudWxsLCBwZW5kaW5nRm9jdXNGaWVsZDogbnVsbCB9LCAoKSA9PiB7XG4gICAgICAgIGlmIChwZW5kaW5nRm9jdXNGaWVsZCA9PT0gJ2Rpc3RhbmNlJykge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fZGlzdGFuY2VSZWZzW3BlbmRpbmdGb2N1c1JvdyFdXG4gICAgICAgICAgaWYgKGVsKSB7IGVsLmZvY3VzKCk7IGVsLnNlbGVjdCgpIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBiZWFyaW5nIGZpZWxkIOKAlCBpbiBudW1iZXIgbW9kZSBmb2N1cyB0aGUgcXVhZHJhbnQgZGlnaXQgaW5wdXQgKGZpcnN0XG4gICAgICAgICAgLy8gc3ViLWZpZWxkKSwgZWxzZSBmb2N1cyB0aGUgbWFpbiBiZWFyaW5nIGlucHV0XG4gICAgICAgICAgaWYgKGJlYXJpbmdGb3JtYXQgPT09ICdxdWFkcmFudCcgJiYgYmVhcmluZ0VudHJ5ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9xTnVtUmVmc1twZW5kaW5nRm9jdXNSb3chXVxuICAgICAgICAgICAgaWYgKGVsKSB7IGVsLmZvY3VzKCk7IGVsLnNlbGVjdCgpIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9iZWFyaW5nUmVmc1twZW5kaW5nRm9jdXNSb3chXVxuICAgICAgICAgICAgaWYgKGVsKSB7IGVsLmZvY3VzKCk7IGVsLnNlbGVjdCgpIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gLS0tLSBMaXZlIHJlZHJhdyB0cmlnZ2VyIC0tLS1cbiAgICAvLyBTY2hlZHVsZSBhIGRlYm91bmNlZCBsaXZlIHJlZHJhdyB3aGVuZXZlciBhbnl0aGluZyB0aGF0IGFmZmVjdHMgdGhlXG4gICAgLy8gZHJhd24gZ2VvbWV0cnkgY2hhbmdlcy4gIFdlIHNraXAgaWYgdGhlIG1hcC9tb2R1bGVzIGFyZSBub3QgeWV0IHJlYWR5LFxuICAgIC8vIG9yIGlmIHRoZXJlIGlzIG5vIHN0YXJ0IHBvaW50IOKAlCBub3RoaW5nIHVzZWZ1bCBjYW4gYmUgZHJhd24gaW4gdGhvc2UgY2FzZXMuXG4gICAgY29uc3QgeyBzdGFydFBvaW50LCBjb3Vyc2VzLCBkaXN0YW5jZVVuaXQsIG1vZHVsZXNMb2FkZWQsIHNlbGVjdGVkQ291cnNlSW5kZXggfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGdlb21ldHJ5Q2hhbmdlZCA9XG4gICAgICBwcmV2U3RhdGUuY291cnNlcyAgICAgICAhPT0gY291cnNlcyAgICAgICB8fFxuICAgICAgcHJldlN0YXRlLnN0YXJ0UG9pbnQgICAgIT09IHN0YXJ0UG9pbnQgICAgfHxcbiAgICAgIHByZXZTdGF0ZS5iZWFyaW5nRm9ybWF0ICE9PSBiZWFyaW5nRm9ybWF0IHx8XG4gICAgICBwcmV2U3RhdGUuYmVhcmluZ0VudHJ5ICAhPT0gYmVhcmluZ0VudHJ5ICB8fFxuICAgICAgcHJldlN0YXRlLmRpc3RhbmNlVW5pdCAgIT09IGRpc3RhbmNlVW5pdFxuXG4gICAgaWYgKGdlb21ldHJ5Q2hhbmdlZCAmJiBtb2R1bGVzTG9hZGVkICYmIHN0YXJ0UG9pbnQpIHtcbiAgICAgIGlmICh0aGlzLl9yZWRyYXdUaW1lciAhPT0gbnVsbCkgY2xlYXJUaW1lb3V0KHRoaXMuX3JlZHJhd1RpbWVyKVxuICAgICAgdGhpcy5fcmVkcmF3VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVkcmF3VGltZXIgPSBudWxsXG4gICAgICAgIHRoaXMuX2xpdmVSZWRyYXcoKVxuICAgICAgICAvLyBLZWVwIGhpZ2hsaWdodCBpbiBzeW5jIGFmdGVyIHRoZSBnZW9tZXRyeSByZWRyYXdzLlxuICAgICAgICB0aGlzLl9yZWRyYXdIaWdobGlnaHQodGhpcy5zdGF0ZS5zZWxlY3RlZENvdXJzZUluZGV4KVxuICAgICAgfSwgMTUwKVxuICAgIH1cblxuICAgIC8vIC0tLS0gSGlnaGxpZ2h0IHJlZHJhdyBvbiBzZWxlY3Rpb24gY2hhbmdlIC0tLS1cbiAgICAvLyBXaGVuIG9ubHkgdGhlIHNlbGVjdGVkIHJvdyBjaGFuZ2VzIChubyBnZW9tZXRyeSBjaGFuZ2UpLCB1cGRhdGUgdGhlXG4gICAgLy8gaGlnaGxpZ2h0IGxheWVyIGltbWVkaWF0ZWx5IHdpdGhvdXQgdG91Y2hpbmcgdHJhdmVyc2UvbGFiZWwgbGF5ZXJzLlxuICAgIGlmIChwcmV2U3RhdGUuc2VsZWN0ZWRDb3Vyc2VJbmRleCAhPT0gc2VsZWN0ZWRDb3Vyc2VJbmRleCAmJiAhZ2VvbWV0cnlDaGFuZ2VkICYmIG1vZHVsZXNMb2FkZWQpIHtcbiAgICAgIHRoaXMuX3JlZHJhd0hpZ2hsaWdodChzZWxlY3RlZENvdXJzZUluZGV4KVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTGlmZWN5Y2xlIC8gbWFwIHdpcmluZ1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGlmICh0aGlzLl9yZWRyYXdUaW1lciAhPT0gbnVsbCkgeyBjbGVhclRpbWVvdXQodGhpcy5fcmVkcmF3VGltZXIpOyB0aGlzLl9yZWRyYXdUaW1lciA9IG51bGwgfVxuICAgIHRoaXMuX2NhbmNlbFBpY2soKVxuICAgIGNvbnN0IHZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3XG4gICAgaWYgKHZpZXcpIHtcbiAgICAgIGlmICh0aGlzLl90cmF2ZXJzZUxheWVyKSB2aWV3Lm1hcC5yZW1vdmUodGhpcy5fdHJhdmVyc2VMYXllcilcbiAgICAgIGlmICh0aGlzLl9sYWJlbExheWVyKSB2aWV3Lm1hcC5yZW1vdmUodGhpcy5fbGFiZWxMYXllcilcbiAgICAgIGlmICh0aGlzLl9oaWdobGlnaHRMYXllcikgdmlldy5tYXAucmVtb3ZlKHRoaXMuX2hpZ2hsaWdodExheWVyKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9vblZpZXdDaGFuZ2UgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldykge1xuICAgIGlmICghamltdU1hcFZpZXcpIHJldHVyblxuICAgIHRoaXMuc2V0U3RhdGUoeyBqaW11TWFwVmlldyB9LCBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUubW9kdWxlc0xvYWRlZCkge1xuICAgICAgICBjb25zdCBtb2RzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICAgICAgJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInLFxuICAgICAgICAgICdlc3JpL0dyYXBoaWMnLFxuICAgICAgICAgICdlc3JpL2dlb21ldHJ5L1BvaW50JyxcbiAgICAgICAgICAnZXNyaS9nZW9tZXRyeS9Qb2x5bGluZScsXG4gICAgICAgICAgJ2Vzcmkvc3ltYm9scy9TaW1wbGVMaW5lU3ltYm9sJyxcbiAgICAgICAgICAnZXNyaS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbCcsXG4gICAgICAgICAgJ2Vzcmkvc3ltYm9scy9UZXh0U3ltYm9sJ1xuICAgICAgICBdKVxuICAgICAgICB0aGlzLl9HcmFwaGljc0xheWVyID0gbW9kc1swXVxuICAgICAgICB0aGlzLl9HcmFwaGljID0gbW9kc1sxXVxuICAgICAgICB0aGlzLl9Qb2ludCA9IG1vZHNbMl1cbiAgICAgICAgdGhpcy5fUG9seWxpbmUgPSBtb2RzWzNdXG4gICAgICAgIHRoaXMuX1NpbXBsZUxpbmUgPSBtb2RzWzRdXG4gICAgICAgIHRoaXMuX1NpbXBsZU1hcmtlciA9IG1vZHNbNV1cbiAgICAgICAgdGhpcy5fVGV4dFN5bWJvbCA9IG1vZHNbNl1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZHVsZXNMb2FkZWQ6IHRydWUgfSwgKCkgPT4gdGhpcy5faW5pdExheWVycygpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5pdExheWVycygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF9pbml0TGF5ZXJzICgpIHtcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlld1xuICAgIGlmICghdmlldyB8fCAhdGhpcy5fR3JhcGhpY3NMYXllcikgcmV0dXJuXG4gICAgaWYgKCF0aGlzLl90cmF2ZXJzZUxheWVyKSB7XG4gICAgICB0aGlzLl90cmF2ZXJzZUxheWVyID0gbmV3IHRoaXMuX0dyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnLCBpZDogJ3RyYXZlcnNlLWdyYXBoaWNzJyB9KVxuICAgICAgdGhpcy5fbGFiZWxMYXllciAgICA9IG5ldyB0aGlzLl9HcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJywgaWQ6ICd0cmF2ZXJzZS1sYWJlbHMnIH0pXG4gICAgICAvLyBIaWdobGlnaHQgbGF5ZXIgc2l0cyBvbiB0b3Agb2YgYm90aCB0cmF2ZXJzZSBsYXllcnMgc28gdGhlIHNlbGVjdGlvblxuICAgICAgLy8gaGFsbyBpcyBhbHdheXMgcmVuZGVyZWQgYWJvdmUgdGhlIGNvdXJzZSBsaW5lcy5cbiAgICAgIHRoaXMuX2hpZ2hsaWdodExheWVyID0gbmV3IHRoaXMuX0dyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogJ2hpZGUnLCBpZDogJ3RyYXZlcnNlLWhpZ2hsaWdodCcgfSlcbiAgICAgIHZpZXcubWFwLmFkZE1hbnkoW3RoaXMuX3RyYXZlcnNlTGF5ZXIsIHRoaXMuX2xhYmVsTGF5ZXIsIHRoaXMuX2hpZ2hsaWdodExheWVyXSlcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFBvaW50IHBpY2tpbmdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIF9jYW5jZWxQaWNrICgpIHtcbiAgICBpZiAodGhpcy5fY2xpY2tIYW5kbGUpIHsgdGhpcy5fY2xpY2tIYW5kbGUucmVtb3ZlKCk7IHRoaXMuX2NsaWNrSGFuZGxlID0gbnVsbCB9XG4gICAgY29uc3QgdmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXdcbiAgICBpZiAodmlldykgdmlldy5jdXJzb3IgPSAnYXV0bydcbiAgfVxuXG4gIF9zdGFydFBpY2tpbmdQb2ludCAoKSB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXdcbiAgICBpZiAoIXZpZXcpIHJldHVyblxuICAgIHRoaXMuX2NhbmNlbFBpY2soKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1BpY2tpbmdTdGFydDogdHJ1ZSwgcGFyc2VFcnJvcjogbnVsbCB9KVxuICAgIHZpZXcuY3Vyc29yID0gJ2Nyb3NzaGFpcidcbiAgICB0aGlzLl9jbGlja0hhbmRsZSA9IHZpZXcub24oJ2NsaWNrJywgKGV2dDogYW55KSA9PiB7XG4gICAgICB0aGlzLl9jYW5jZWxQaWNrKClcbiAgICAgIGNvbnN0IHB0ID0gZXZ0Lm1hcFBvaW50XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNQaWNraW5nU3RhcnQ6IGZhbHNlLFxuICAgICAgICBzdGFydFBvaW50OiB7IHg6IHB0LngsIHk6IHB0LnksIHNwYXRpYWxSZWZlcmVuY2U6IHB0LnNwYXRpYWxSZWZlcmVuY2UgfSxcbiAgICAgICAgY2xvc3VyZVJlcG9ydDogbnVsbCxcbiAgICAgICAgcGFyc2VFcnJvcjogbnVsbFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBMZWcgbXV0YXRpb25cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIF9hZGRDb3Vyc2UgKGZvY3VzQmVhcmluZyA9IGZhbHNlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICBjb3Vyc2VzOiBbLi4ucHJldi5jb3Vyc2VzLCB7IGJlYXJpbmc6ICcnLCBkaXN0YW5jZTogJycgfV0sXG4gICAgICBjbG9zdXJlUmVwb3J0OiBudWxsLFxuICAgICAgcGVuZGluZ0ZvY3VzUm93OiBmb2N1c0JlYXJpbmcgPyBwcmV2LmNvdXJzZXMubGVuZ3RoIDogbnVsbCxcbiAgICAgIHBlbmRpbmdGb2N1c0ZpZWxkOiBmb2N1c0JlYXJpbmcgPyAnYmVhcmluZycgOiBudWxsXG4gICAgfSkpXG4gIH1cblxuICBfaW5zZXJ0Q291cnNlIChhZnRlckluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXYgPT4ge1xuICAgICAgY29uc3QgY291cnNlcyA9IFsuLi5wcmV2LmNvdXJzZXNdXG4gICAgICBjb3Vyc2VzLnNwbGljZShhZnRlckluZGV4ICsgMSwgMCwgeyBiZWFyaW5nOiAnJywgZGlzdGFuY2U6ICcnIH0pXG4gICAgICBjb25zdCBzZWwgPSBwcmV2LnNlbGVjdGVkQ291cnNlSW5kZXhcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvdXJzZXMsXG4gICAgICAgIGNsb3N1cmVSZXBvcnQ6IG51bGwsXG4gICAgICAgIHNlbGVjdGVkQ291cnNlSW5kZXg6IHNlbCAhPT0gbnVsbCAmJiBzZWwgPiBhZnRlckluZGV4ID8gc2VsICsgMSA6IHNlbCxcbiAgICAgICAgcGVuZGluZ0ZvY3VzUm93OiBhZnRlckluZGV4ICsgMSxcbiAgICAgICAgcGVuZGluZ0ZvY3VzRmllbGQ6ICdiZWFyaW5nJ1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfcmVtb3ZlQ291cnNlIChpOiBudW1iZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXYgPT4ge1xuICAgICAgY29uc3Qgc2VsID0gcHJldi5zZWxlY3RlZENvdXJzZUluZGV4XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb3Vyc2VzOiBwcmV2LmNvdXJzZXMuZmlsdGVyKChfLCBpZHgpID0+IGlkeCAhPT0gaSksXG4gICAgICAgIGNsb3N1cmVSZXBvcnQ6IG51bGwsXG4gICAgICAgIHNlbGVjdGVkQ291cnNlSW5kZXg6IHNlbCA9PT0gaSA/IG51bGwgOiBzZWwgIT09IG51bGwgJiYgc2VsID4gaSA/IHNlbCAtIDEgOiBzZWxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX3VwZGF0ZUNvdXJzZSAoaTogbnVtYmVyLCBmaWVsZDoga2V5b2YgVHJhdmVyc2VDb3Vyc2UsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXYgPT4ge1xuICAgICAgY29uc3QgY291cnNlcyA9IFsuLi5wcmV2LmNvdXJzZXNdXG4gICAgICBjb3Vyc2VzW2ldID0geyAuLi5jb3Vyc2VzW2ldLCBbZmllbGRdOiB2YWx1ZSB9XG4gICAgICByZXR1cm4geyBjb3Vyc2VzLCBjbG9zdXJlUmVwb3J0OiBudWxsIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAxMC1rZXkga2V5Ym9hcmQgbmF2aWdhdGlvbiBoYW5kbGVyXG4gIC8vIENhbGxlZCBvbiBrZXlkb3duIGZvciBhbnkgY291cnNlIGlucHV0IChiZWFyaW5nIG9yIGRpc3RhbmNlKS5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIF9oYW5kbGVDb3Vyc2VLZXlEb3duIChcbiAgICBldjogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGZpZWxkOiAncXVhZHJhbnQnIHwgJ2JlYXJpbmcnIHwgJ2Rpc3RhbmNlJ1xuICApIHtcbiAgICBjb25zdCBpc051bXBhZEVudGVyID0gZXYuY29kZSA9PT0gJ051bXBhZEVudGVyJ1xuICAgIGNvbnN0IGlzTnVtcGFkUGx1cyAgPSBldi5jb2RlID09PSAnTnVtcGFkQWRkJ1xuXG4gICAgLy8gTnVtcGFkRW50ZXIgLyBOdW1wYWRBZGQgb24gdGhlIGRpc3RhbmNlIGZpZWxkIChsYXN0IGludGVyYWN0aXZlIGNlbGwgaW5cbiAgICAvLyBhIHJvdyk6IGFkZCBhIG5ldyBjb3Vyc2UgYW5kIG1vdmUgZm9jdXMgdG8gaXRzIGJlYXJpbmcgZmllbGQuXG4gICAgaWYgKChpc051bXBhZEVudGVyIHx8IGlzTnVtcGFkUGx1cykgJiYgZmllbGQgPT09ICdkaXN0YW5jZScpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuX2FkZENvdXJzZSh0cnVlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTnVtcGFkRW50ZXIgLyBOdW1wYWRBZGQgb24gdGhlIHF1YWRyYW50IGRpZ2l0IGZpZWxkOiBhZHZhbmNlIHRvIHRoZSBETVNcbiAgICAvLyBhbmdsZSBmaWVsZCBvZiB0aGUgc2FtZSByb3cuXG4gICAgaWYgKChpc051bXBhZEVudGVyIHx8IGlzTnVtcGFkUGx1cykgJiYgZmllbGQgPT09ICdxdWFkcmFudCcpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fcUFuZ2xlUmVmc1tyb3dJbmRleF1cbiAgICAgIGlmIChlbCkgeyBlbC5mb2N1cygpOyBlbC5zZWxlY3QoKSB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBOdW1wYWRFbnRlciAvIE51bXBhZEFkZCBvbiBhIGJlYXJpbmcgZmllbGQ6IGp1bXAgdG8gdGhlIGRpc3RhbmNlIGZpZWxkXG4gICAgLy8gb2YgdGhlIHNhbWUgcm93IHNvIHRoZSBzdXJ2ZXlvciBjYW4gc3RheSBvbiAxMC1rZXkuXG4gICAgaWYgKChpc051bXBhZEVudGVyIHx8IGlzTnVtcGFkUGx1cykgJiYgZmllbGQgPT09ICdiZWFyaW5nJykge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgZWwgPSB0aGlzLl9kaXN0YW5jZVJlZnNbcm93SW5kZXhdXG4gICAgICBpZiAoZWwpIHsgZWwuZm9jdXMoKTsgZWwuc2VsZWN0KCkgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBEcmF3IC8gY2xlYXJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBMaXZlIHJlZHJhdzogY2FsbGVkIGF1dG9tYXRpY2FsbHkgKGRlYm91bmNlZCkgYXMgdGhlIHVzZXIgZWRpdHMgY291cnNlcy5cbiAgICogT25seSBkcmF3cyBjb3Vyc2VzIHRoYXQgYXJlIGZ1bGx5IHZhbGlkIOKAlCBpbmNvbXBsZXRlL2ludmFsaWQgY291cnNlcyBhcmVcbiAgICogc2lsZW50bHkgc2tpcHBlZC4gIE5ldmVyIHNldHMgcGFyc2VFcnJvcjsgbmV2ZXIgY29tcHV0ZXMgdGhlIGNsb3N1cmUgcmVwb3J0LlxuICAgKi9cbiAgX2xpdmVSZWRyYXcgKCkge1xuICAgIGNvbnN0IHsgc3RhcnRQb2ludCwgY291cnNlcywgZGlzdGFuY2VVbml0LCBiZWFyaW5nRm9ybWF0LCBiZWFyaW5nRW50cnkgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlld1xuICAgIGlmICghc3RhcnRQb2ludCB8fCAhdmlldyB8fCAhdGhpcy5fdHJhdmVyc2VMYXllcikgcmV0dXJuXG5cbiAgICB0aGlzLl90cmF2ZXJzZUxheWVyLnJlbW92ZUFsbCgpXG4gICAgdGhpcy5fbGFiZWxMYXllci5yZW1vdmVBbGwoKVxuXG4gICAgY29uc3Qgc3IgPSBzdGFydFBvaW50LnNwYXRpYWxSZWZlcmVuY2VcbiAgICBjb25zdCBsaW5lQ29sb3IgPSBoZXhUb1JnYmEodGhpcy5zdGF0ZS50cmF2ZXJzZUNvbG9yKVxuICAgIGNvbnN0IGNsb3N1cmVDb2xvciA9IFsyNDksIDExNSwgMjIsIDI1NV1cblxuICAgIC8vIFdhbGsgY291cnNlcywgYWNjdW11bGF0aW5nIHZhbGlkIHBvaW50cy4gIFN0b3AgaW5jbHVkaW5nIGEgY291cnNlIHRoZVxuICAgIC8vIG1vbWVudCBvbmUgZmFpbHMgdG8gcGFyc2Ug4oCUIGV2ZXJ5dGhpbmcgYWZ0ZXIgYW4gaW52YWxpZCBjb3Vyc2Ugd291bGRcbiAgICAvLyBoYXZlIGFuIGluY29ycmVjdCBzdGFydCBwb3NpdGlvbi5cbiAgICBjb25zdCBkcmF3blBvaW50czogVHJhdmVyc2VQb2ludFtdID0gW3sgeDogc3RhcnRQb2ludC54LCB5OiBzdGFydFBvaW50LnkgfV1cbiAgICBjb25zdCBkcmF3bkNvdXJzZUluZGljZXM6IG51bWJlcltdID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291cnNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY291cnNlID0gY291cnNlc1tpXVxuICAgICAgY29uc3QgYXogPSBwYXJzZUJlYXJpbmdWYWx1ZShjb3Vyc2UuYmVhcmluZywgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5KVxuICAgICAgY29uc3QgZGlzdCA9IGNvdXJzZS5kaXN0YW5jZSA/IHBhcnNlRmxvYXQoY291cnNlLmRpc3RhbmNlKSA6IE5hTlxuICAgICAgaWYgKGF6ID09PSBudWxsIHx8IGlzTmFOKGRpc3QpIHx8IGRpc3QgPD0gMCkgYnJlYWsgIC8vIHN0b3AgYXQgZmlyc3QgaW52YWxpZFxuXG4gICAgICBjb25zdCBwcmV2ID0gZHJhd25Qb2ludHNbZHJhd25Qb2ludHMubGVuZ3RoIC0gMV1cbiAgICAgIGRyYXduUG9pbnRzLnB1c2goY29tcHV0ZU5leHRQb2ludChwcmV2LngsIHByZXYueSwgYXosIHRvTWV0ZXJzKGNvdXJzZS5kaXN0YW5jZSwgZGlzdGFuY2VVbml0KSkpXG4gICAgICBkcmF3bkNvdXJzZUluZGljZXMucHVzaChpKVxuICAgIH1cblxuICAgIGlmIChkcmF3blBvaW50cy5sZW5ndGggPCAyKSByZXR1cm4gIC8vIG5vdGhpbmcgZHJhd2FibGUgeWV0XG5cbiAgICAvLyBEcmF3IGNvdXJzZSBsaW5lcyBhbmQgbGFiZWxzLlxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZHJhd25Db3Vyc2VJbmRpY2VzLmxlbmd0aDsgaysrKSB7XG4gICAgICBjb25zdCBpID0gZHJhd25Db3Vyc2VJbmRpY2VzW2tdXG4gICAgICBjb25zdCBwMCA9IGRyYXduUG9pbnRzW2tdLCBwMSA9IGRyYXduUG9pbnRzW2sgKyAxXVxuICAgICAgdGhpcy5fdHJhdmVyc2VMYXllci5hZGQobmV3IHRoaXMuX0dyYXBoaWMoe1xuICAgICAgICBnZW9tZXRyeTogbmV3IHRoaXMuX1BvbHlsaW5lKHsgcGF0aHM6IFtbW3AwLngsIHAwLnldLCBbcDEueCwgcDEueV1dXSwgc3BhdGlhbFJlZmVyZW5jZTogc3IgfSksXG4gICAgICAgIHN5bWJvbDogbmV3IHRoaXMuX1NpbXBsZUxpbmUoeyBjb2xvcjogbGluZUNvbG9yLCB3aWR0aDogMiwgc3R5bGU6ICdkYXNoJyB9KVxuICAgICAgfSkpXG4gICAgICBjb25zdCBheiA9IHBhcnNlQmVhcmluZ1ZhbHVlKGNvdXJzZXNbaV0uYmVhcmluZywgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5KSFcbiAgICAgIGNvbnN0IGNvdXJzZUxhYmVsID0gY291cnNlc1tpXS5kaXN0YW5jZSArICcgJyArIGRpc3RhbmNlVW5pdCArICdcXG4nICsgZm9ybWF0QmVhcmluZ0xhYmVsKGF6LCBiZWFyaW5nRm9ybWF0KVxuICAgICAgdGhpcy5fbGFiZWxMYXllci5hZGQobmV3IHRoaXMuX0dyYXBoaWMoe1xuICAgICAgICBnZW9tZXRyeTogbmV3IHRoaXMuX1BvaW50KHsgeDogKHAwLnggKyBwMS54KSAvIDIsIHk6IChwMC55ICsgcDEueSkgLyAyLCBzcGF0aWFsUmVmZXJlbmNlOiBzciB9KSxcbiAgICAgICAgc3ltYm9sOiBuZXcgdGhpcy5fVGV4dFN5bWJvbCh7XG4gICAgICAgICAgdGV4dDogY291cnNlTGFiZWwsXG4gICAgICAgICAgY29sb3I6IGxpbmVDb2xvcixcbiAgICAgICAgICBmb250OiB7IHNpemU6IDksIGZhbWlseTogJ3NhbnMtc2VyaWYnIH0sXG4gICAgICAgICAgaGFsb0NvbG9yOiBbMjU1LCAyNTUsIDI1NSwgMjMwXSxcbiAgICAgICAgICBoYWxvU2l6ZTogMS41LFxuICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiAnYm90dG9tJ1xuICAgICAgICB9KVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gQ2xvc3VyZSBsaW5lIChyZWQgZGFzaCkgaWYgdGhlIGxhc3QgZHJhd24gcG9pbnQgZGlmZmVycyBmcm9tIHRoZSBzdGFydC5cbiAgICBjb25zdCBmaXJzdCA9IGRyYXduUG9pbnRzWzBdLCBsYXN0ID0gZHJhd25Qb2ludHNbZHJhd25Qb2ludHMubGVuZ3RoIC0gMV1cbiAgICBjb25zdCBjbG9zdXJlRGlzdCA9IE1hdGguaHlwb3QobGFzdC54IC0gZmlyc3QueCwgbGFzdC55IC0gZmlyc3QueSlcbiAgICBpZiAoY2xvc3VyZURpc3QgPiAwLjA1KSB7XG4gICAgICB0aGlzLl90cmF2ZXJzZUxheWVyLmFkZChuZXcgdGhpcy5fR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgdGhpcy5fUG9seWxpbmUoeyBwYXRoczogW1tbbGFzdC54LCBsYXN0LnldLCBbZmlyc3QueCwgZmlyc3QueV1dXSwgc3BhdGlhbFJlZmVyZW5jZTogc3IgfSksXG4gICAgICAgIHN5bWJvbDogbmV3IHRoaXMuX1NpbXBsZUxpbmUoeyBjb2xvcjogY2xvc3VyZUNvbG9yLCB3aWR0aDogMS41LCBzdHlsZTogJ2Rhc2gnIH0pXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBWZXJ0ZXggbWFya2Vycy5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRyYXduUG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBwdCA9IGRyYXduUG9pbnRzW2pdXG4gICAgICB0aGlzLl90cmF2ZXJzZUxheWVyLmFkZChuZXcgdGhpcy5fR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgdGhpcy5fUG9pbnQoeyB4OiBwdC54LCB5OiBwdC55LCBzcGF0aWFsUmVmZXJlbmNlOiBzciB9KSxcbiAgICAgICAgc3ltYm9sOiBuZXcgdGhpcy5fU2ltcGxlTWFya2VyKHtcbiAgICAgICAgICBjb2xvcjogZ2V0UG9pbnRDb2xvcihqID09PSAwLCBqID09PSBkcmF3blBvaW50cy5sZW5ndGggLSAxLCBjbG9zdXJlRGlzdCksXG4gICAgICAgICAgb3V0bGluZTogeyBjb2xvcjogWzI1NSwgMjU1LCAyNTUsIDI1NV0sIHdpZHRoOiAxLjUgfSxcbiAgICAgICAgICBzaXplOiBqID09PSAwID8gMTIgOiA4LFxuICAgICAgICAgIHN0eWxlOiAnY2lyY2xlJ1xuICAgICAgICB9KVxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZHJhd3MgdGhlIGhpZ2hsaWdodCBsYXllciBmb3IgdGhlIGdpdmVuIGNvdXJzZSBpbmRleC5cbiAgICogV2Fsa3MgdGhlIGNvdXJzZSBjaGFpbiBmcm9tIHRoZSBzdGFydCBwb2ludCB1cCB0byBhbmQgaW5jbHVkaW5nIGBpbmRleGAgdG9cbiAgICogZmluZCB0aGUgc2VnbWVudCBlbmRwb2ludHMsIHRoZW4gZHJhd3MgYSB0aGljayBjeWFuIGhhbG8gbGluZSBpbnRvXG4gICAqIGBfaGlnaGxpZ2h0TGF5ZXJgLiAgQ2xlYXJzIHRoZSBsYXllciBpZiBgaW5kZXhgIGlzIG51bGwgb3IgdGhlIHNlZ21lbnRcbiAgICogZ2VvbWV0cnkgY2Fubm90IGJlIHJlc29sdmVkIChlLmcuIGFuIGVhcmxpZXIgY291cnNlIGlzIGludmFsaWQpLlxuICAgKi9cbiAgX3JlZHJhd0hpZ2hsaWdodCAoaW5kZXg6IG51bWJlciB8IG51bGwpIHtcbiAgICBpZiAoIXRoaXMuX2hpZ2hsaWdodExheWVyKSByZXR1cm5cbiAgICB0aGlzLl9oaWdobGlnaHRMYXllci5yZW1vdmVBbGwoKVxuXG4gICAgaWYgKGluZGV4ID09PSBudWxsKSByZXR1cm5cblxuICAgIGNvbnN0IHsgc3RhcnRQb2ludCwgY291cnNlcywgZGlzdGFuY2VVbml0LCBiZWFyaW5nRm9ybWF0LCBiZWFyaW5nRW50cnkgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoIXN0YXJ0UG9pbnQpIHJldHVyblxuXG4gICAgY29uc3Qgc3IgPSBzdGFydFBvaW50LnNwYXRpYWxSZWZlcmVuY2VcbiAgICAvLyBXYWxrIHRoZSBjaGFpbiB1cCB0byBhbmQgaW5jbHVkaW5nIGBpbmRleGAuICBBbnkgcGFyc2UgZmFpbHVyZSBiZWZvcmVcbiAgICAvLyBvciBhdCB0aGUgdGFyZ2V0IGNvdXJzZSBtZWFucyB3ZSBjYW5ub3QgZHJhdyBhIHZhbGlkIHNlZ21lbnQuXG4gICAgbGV0IHB4ID0gc3RhcnRQb2ludC54LCBweSA9IHN0YXJ0UG9pbnQueVxuICAgIGxldCBzZWdTdGFydDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbCA9IG51bGxcbiAgICBsZXQgc2VnRW5kOiAgIHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGwgPSBudWxsXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBpbmRleDsgaSsrKSB7XG4gICAgICBjb25zdCBheiA9IHBhcnNlQmVhcmluZ1ZhbHVlKGNvdXJzZXNbaV0uYmVhcmluZywgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5KVxuICAgICAgY29uc3QgZGlzdCA9IGNvdXJzZXNbaV0uZGlzdGFuY2UgPyBwYXJzZUZsb2F0KGNvdXJzZXNbaV0uZGlzdGFuY2UpIDogTmFOXG4gICAgICBpZiAoYXogPT09IG51bGwgfHwgaXNOYU4oZGlzdCkgfHwgZGlzdCA8PSAwKSByZXR1cm4gIC8vIGNoYWluIGJyb2tlblxuXG4gICAgICBjb25zdCBueCA9IGNvbXB1dGVOZXh0UG9pbnQocHgsIHB5LCBheiwgdG9NZXRlcnMoY291cnNlc1tpXS5kaXN0YW5jZSwgZGlzdGFuY2VVbml0KSlcbiAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICBzZWdTdGFydCA9IHsgeDogcHgsIHk6IHB5IH1cbiAgICAgICAgc2VnRW5kICAgPSBueFxuICAgICAgfVxuICAgICAgcHggPSBueC54XG4gICAgICBweSA9IG54LnlcbiAgICB9XG5cbiAgICBpZiAoIXNlZ1N0YXJ0IHx8ICFzZWdFbmQpIHJldHVyblxuXG4gICAgLy8gT3V0ZXIgaGFsbyDigJQgd2lkZXIsIHNlbWktdHJhbnNwYXJlbnQgY3lhblxuICAgIHRoaXMuX2hpZ2hsaWdodExheWVyLmFkZChuZXcgdGhpcy5fR3JhcGhpYyh7XG4gICAgICBnZW9tZXRyeTogbmV3IHRoaXMuX1BvbHlsaW5lKHtcbiAgICAgICAgcGF0aHM6IFtbW3NlZ1N0YXJ0LngsIHNlZ1N0YXJ0LnldLCBbc2VnRW5kLngsIHNlZ0VuZC55XV1dLFxuICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBzclxuICAgICAgfSksXG4gICAgICBzeW1ib2w6IG5ldyB0aGlzLl9TaW1wbGVMaW5lKHsgY29sb3I6IFswLCAyNTUsIDI1NSwgODBdLCB3aWR0aDogMTAsIHN0eWxlOiAnc29saWQnIH0pXG4gICAgfSkpXG4gICAgLy8gSW5uZXIgYnJpZ2h0IGxpbmUg4oCUIHNvbGlkIGN5YW4gb24gdG9wXG4gICAgdGhpcy5faGlnaGxpZ2h0TGF5ZXIuYWRkKG5ldyB0aGlzLl9HcmFwaGljKHtcbiAgICAgIGdlb21ldHJ5OiBuZXcgdGhpcy5fUG9seWxpbmUoe1xuICAgICAgICBwYXRoczogW1tbc2VnU3RhcnQueCwgc2VnU3RhcnQueV0sIFtzZWdFbmQueCwgc2VnRW5kLnldXV0sXG4gICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHNyXG4gICAgICB9KSxcbiAgICAgIHN5bWJvbDogbmV3IHRoaXMuX1NpbXBsZUxpbmUoeyBjb2xvcjogWzAsIDIyMCwgMjU1LCAyNTVdLCB3aWR0aDogMywgc3R5bGU6ICdzb2xpZCcgfSlcbiAgICB9KSlcbiAgfVxuXG4gIF9kcmF3VHJhdmVyc2UgKCkge1xuICAgIGNvbnN0IHsgc3RhcnRQb2ludCwgY291cnNlcywgZGlzdGFuY2VVbml0LCBiZWFyaW5nRm9ybWF0LCBiZWFyaW5nRW50cnkgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlld1xuXG4gICAgaWYgKCFzdGFydFBvaW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGFyc2VFcnJvcjogJ1BpY2sgYSBzdGFydGluZyBwb2ludCBvbiB0aGUgbWFwIGZpcnN0LicgfSk7IHJldHVyblxuICAgIH1cbiAgICBpZiAoIXZpZXcgfHwgIXRoaXMuX3RyYXZlcnNlTGF5ZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXJzZUVycm9yOiAnTWFwIG5vdCByZWFkeS4nIH0pOyByZXR1cm5cbiAgICB9XG4gICAgaWYgKGNvdXJzZXMubGVuZ3RoID09PSAwIHx8IGNvdXJzZXMuZXZlcnkobCA9PiAhbC5iZWFyaW5nICYmICFsLmRpc3RhbmNlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhcnNlRXJyb3I6ICdFbnRlciBhdCBsZWFzdCBvbmUgdHJhdmVyc2UgY291cnNlLicgfSk7IHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBvaW50cyA9IGJ1aWxkVHJhdmVyc2VQb2ludHMoc3RhcnRQb2ludC54LCBzdGFydFBvaW50LnksIGNvdXJzZXMsIGRpc3RhbmNlVW5pdCwgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5KVxuICAgIGlmICghcG9pbnRzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGFyc2VFcnJvcjogJ0NvdWxkIG5vdCBwYXJzZSBvbmUgb3IgbW9yZSBjb3Vyc2VzLiBDaGVjayBiZWFyaW5nIGZvcm1hdCBhbmQgZGlzdGFuY2UgdmFsdWVzLicgfSk7IHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3RyYXZlcnNlTGF5ZXIucmVtb3ZlQWxsKClcbiAgICB0aGlzLl9sYWJlbExheWVyLnJlbW92ZUFsbCgpXG5cbiAgICBjb25zdCBzciA9IHN0YXJ0UG9pbnQuc3BhdGlhbFJlZmVyZW5jZVxuICAgIGNvbnN0IGxpbmVDb2xvciA9IGhleFRvUmdiYSh0aGlzLnN0YXRlLnRyYXZlcnNlQ29sb3IpXG4gICAgY29uc3QgY2xvc3VyZUNvbG9yID0gWzI0OSwgMTE1LCAyMiwgMjU1XVxuICAgIGNvbnN0IGdlb21Gb3Jab29tOiBhbnlbXSA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IHAwID0gcG9pbnRzW2ldLCBwMSA9IHBvaW50c1tpICsgMV1cbiAgICAgIGNvbnN0IGxpbmVHZW9tID0gbmV3IHRoaXMuX1BvbHlsaW5lKHsgcGF0aHM6IFtbW3AwLngsIHAwLnldLCBbcDEueCwgcDEueV1dXSwgc3BhdGlhbFJlZmVyZW5jZTogc3IgfSlcbiAgICAgIHRoaXMuX3RyYXZlcnNlTGF5ZXIuYWRkKG5ldyB0aGlzLl9HcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IGxpbmVHZW9tLFxuICAgICAgICBzeW1ib2w6IG5ldyB0aGlzLl9TaW1wbGVMaW5lKHsgY29sb3I6IGxpbmVDb2xvciwgd2lkdGg6IDIsIHN0eWxlOiAnZGFzaCcgfSlcbiAgICAgIH0pKVxuICAgICAgZ2VvbUZvclpvb20ucHVzaChsaW5lR2VvbSlcblxuICAgICAgY29uc3QgYXogPSBwYXJzZUJlYXJpbmdWYWx1ZShjb3Vyc2VzW2ldLmJlYXJpbmcsIGJlYXJpbmdGb3JtYXQsIGJlYXJpbmdFbnRyeSkhXG4gICAgICBjb25zdCBjb3Vyc2VMYWJlbCA9IGNvdXJzZXNbaV0uZGlzdGFuY2UgKyAnICcgKyBkaXN0YW5jZVVuaXQgKyAnXFxuJyArIGZvcm1hdEJlYXJpbmdMYWJlbChheiwgYmVhcmluZ0Zvcm1hdClcbiAgICAgIHRoaXMuX2xhYmVsTGF5ZXIuYWRkKG5ldyB0aGlzLl9HcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyB0aGlzLl9Qb2ludCh7IHg6IChwMC54ICsgcDEueCkgLyAyLCB5OiAocDAueSArIHAxLnkpIC8gMiwgc3BhdGlhbFJlZmVyZW5jZTogc3IgfSksXG4gICAgICAgIHN5bWJvbDogbmV3IHRoaXMuX1RleHRTeW1ib2woe1xuICAgICAgICAgIHRleHQ6IGNvdXJzZUxhYmVsLFxuICAgICAgICAgIGNvbG9yOiBsaW5lQ29sb3IsXG4gICAgICAgICAgZm9udDogeyBzaXplOiA5LCBmYW1pbHk6ICdzYW5zLXNlcmlmJyB9LFxuICAgICAgICAgIGhhbG9Db2xvcjogWzI1NSwgMjU1LCAyNTUsIDIzMF0sXG4gICAgICAgICAgaGFsb1NpemU6IDEuNSxcbiAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAnY2VudGVyJyxcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ2JvdHRvbSdcbiAgICAgICAgfSlcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0ID0gcG9pbnRzWzBdLCBsYXN0ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXVxuICAgIGNvbnN0IGNsb3N1cmVEaXN0ID0gTWF0aC5oeXBvdChsYXN0LnggLSBmaXJzdC54LCBsYXN0LnkgLSBmaXJzdC55KVxuICAgIGlmIChjbG9zdXJlRGlzdCA+IDAuMDUpIHtcbiAgICAgIHRoaXMuX3RyYXZlcnNlTGF5ZXIuYWRkKG5ldyB0aGlzLl9HcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyB0aGlzLl9Qb2x5bGluZSh7IHBhdGhzOiBbW1tsYXN0LngsIGxhc3QueV0sIFtmaXJzdC54LCBmaXJzdC55XV1dLCBzcGF0aWFsUmVmZXJlbmNlOiBzciB9KSxcbiAgICAgICAgc3ltYm9sOiBuZXcgdGhpcy5fU2ltcGxlTGluZSh7IGNvbG9yOiBjbG9zdXJlQ29sb3IsIHdpZHRoOiAxLjUsIHN0eWxlOiAnZGFzaCcgfSlcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBwdCA9IHBvaW50c1tqXVxuICAgICAgdGhpcy5fdHJhdmVyc2VMYXllci5hZGQobmV3IHRoaXMuX0dyYXBoaWMoe1xuICAgICAgICBnZW9tZXRyeTogbmV3IHRoaXMuX1BvaW50KHsgeDogcHQueCwgeTogcHQueSwgc3BhdGlhbFJlZmVyZW5jZTogc3IgfSksXG4gICAgICAgIHN5bWJvbDogbmV3IHRoaXMuX1NpbXBsZU1hcmtlcih7XG4gICAgICAgICAgY29sb3I6IGdldFBvaW50Q29sb3IoaiA9PT0gMCwgaiA9PT0gcG9pbnRzLmxlbmd0aCAtIDEsIGNsb3N1cmVEaXN0KSxcbiAgICAgICAgICBvdXRsaW5lOiB7IGNvbG9yOiBbMjU1LCAyNTUsIDI1NSwgMjU1XSwgd2lkdGg6IDEuNSB9LFxuICAgICAgICAgIHNpemU6IGogPT09IDAgPyAxMiA6IDgsXG4gICAgICAgICAgc3R5bGU6ICdjaXJjbGUnXG4gICAgICAgIH0pXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICBpZiAoZ2VvbUZvclpvb20ubGVuZ3RoID4gMCkgdmlldy5nb1RvKGdlb21Gb3Jab29tLCB7IGFuaW1hdGU6IHRydWUgfSkuY2F0Y2goKCkgPT4ge30pXG5cbiAgICAvLyBSZWZyZXNoIHRoZSBzZWxlY3Rpb24gaGlnaGxpZ2h0IG9uIHRvcCBvZiB0aGUgZnJlc2hseSBkcmF3biB0cmF2ZXJzZS5cbiAgICB0aGlzLl9yZWRyYXdIaWdobGlnaHQodGhpcy5zdGF0ZS5zZWxlY3RlZENvdXJzZUluZGV4KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3N1cmVSZXBvcnQ6IGNvbXB1dGVDbG9zdXJlUmVwb3J0KGNvdXJzZXMsIGRpc3RhbmNlVW5pdCwgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5KSwgcGFyc2VFcnJvcjogbnVsbCB9KVxuICB9XG5cbiAgX2NsZWFyQWxsICgpIHtcbiAgICB0aGlzLl9jYW5jZWxQaWNrKClcbiAgICBpZiAodGhpcy5fdHJhdmVyc2VMYXllcikgdGhpcy5fdHJhdmVyc2VMYXllci5yZW1vdmVBbGwoKVxuICAgIGlmICh0aGlzLl9sYWJlbExheWVyKSB0aGlzLl9sYWJlbExheWVyLnJlbW92ZUFsbCgpXG4gICAgaWYgKHRoaXMuX2hpZ2hsaWdodExheWVyKSB0aGlzLl9oaWdobGlnaHRMYXllci5yZW1vdmVBbGwoKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnRQb2ludDogbnVsbCxcbiAgICAgIGNvdXJzZXM6IFt7IGJlYXJpbmc6ICcnLCBkaXN0YW5jZTogJycgfV0sXG4gICAgICBjbG9zdXJlUmVwb3J0OiBudWxsLFxuICAgICAgcGFyc2VFcnJvcjogbnVsbCxcbiAgICAgIGlzUGlja2luZ1N0YXJ0OiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkQ291cnNlSW5kZXg6IG51bGxcbiAgICB9KVxuICB9XG5cbiAgX2V4cG9ydEdlb0pTT04gKCkge1xuICAgIGNvbnN0IHsgc3RhcnRQb2ludCwgY291cnNlcywgZGlzdGFuY2VVbml0LCBiZWFyaW5nRm9ybWF0LCBiZWFyaW5nRW50cnksXG4gICAgICBjbG9zdXJlUmVwb3J0LCB0cmF2ZXJzZUNvbG9yLCBleHBvcnRMaW5lU3RyaW5nLCBleHBvcnRQb2ludHMsIGV4cG9ydFBvbHlnb24sIGV4cG9ydEZpbGVOYW1lIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCFzdGFydFBvaW50KSByZXR1cm5cblxuICAgIC8vIFdhbGsgY291cnNlcywgc3RvcHBpbmcgYXQgZmlyc3QgaW52YWxpZCBlbnRyeS5cbiAgICBjb25zdCBwb2ludHM6IEFycmF5PHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4gPSBbeyB4OiBzdGFydFBvaW50LngsIHk6IHN0YXJ0UG9pbnQueSB9XVxuICAgIGNvbnN0IHZhbGlkQ291cnNlczogQXJyYXk8eyBiZWFyaW5nOiBzdHJpbmc7IGRpc3RhbmNlOiBzdHJpbmc7IGF6OiBudW1iZXI7IGRpc3RNOiBudW1iZXIgfT4gPSBbXVxuICAgIGZvciAoY29uc3QgYyBvZiBjb3Vyc2VzKSB7XG4gICAgICBjb25zdCBheiA9IHBhcnNlQmVhcmluZ1ZhbHVlKGMuYmVhcmluZywgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5KVxuICAgICAgY29uc3QgZGlzdE0gPSB0b01ldGVycyhjLmRpc3RhbmNlLCBkaXN0YW5jZVVuaXQpXG4gICAgICBpZiAoYXogPT09IG51bGwgfHwgIWMuZGlzdGFuY2UgfHwgaXNOYU4oZGlzdE0pIHx8IGRpc3RNIDw9IDApIGJyZWFrXG4gICAgICBjb25zdCBsYXN0ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXVxuICAgICAgcG9pbnRzLnB1c2goY29tcHV0ZU5leHRQb2ludChsYXN0LngsIGxhc3QueSwgYXosIGRpc3RNKSlcbiAgICAgIHZhbGlkQ291cnNlcy5wdXNoKHsgYmVhcmluZzogYy5iZWFyaW5nLCBkaXN0YW5jZTogYy5kaXN0YW5jZSwgYXosIGRpc3RNIH0pXG4gICAgfVxuXG4gICAgaWYgKHZhbGlkQ291cnNlcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gICAgY29uc3Qgd2dzODQgPSBwb2ludHMubWFwKHAgPT4gd2ViTWVyY2F0b3JUb1dHUzg0KHAueCwgcC55KSlcbiAgICBjb25zdCBmZWF0dXJlczogb2JqZWN0W10gPSBbXVxuXG4gICAgLy8gTGluZVN0cmluZyDigJQgZnVsbCB0cmF2ZXJzZSBwYXRoXG4gICAgaWYgKGV4cG9ydExpbmVTdHJpbmcpIHtcbiAgICAgIGZlYXR1cmVzLnB1c2goe1xuICAgICAgICB0eXBlOiAnRmVhdHVyZScsXG4gICAgICAgIGdlb21ldHJ5OiB7IHR5cGU6ICdMaW5lU3RyaW5nJywgY29vcmRpbmF0ZXM6IHdnczg0IH0sXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBzdHJva2U6IHRyYXZlcnNlQ29sb3IsXG4gICAgICAgICAgY291cnNlQ291bnQ6IHZhbGlkQ291cnNlcy5sZW5ndGgsXG4gICAgICAgICAgdG90YWxEaXN0YW5jZTogcGFyc2VGbG9hdCh2YWxpZENvdXJzZXMucmVkdWNlKChzLCBjKSA9PiBzICsgYy5kaXN0TSwgMCkudG9GaXhlZCgzKSksXG4gICAgICAgICAgZGlzdGFuY2VVbml0LFxuICAgICAgICAgIGJlYXJpbmdGb3JtYXRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBQb2ludHMg4oCUIG9uZSBwZXIgdmVydGV4XG4gICAgaWYgKGV4cG9ydFBvaW50cykge1xuICAgICAgd2dzODQuZm9yRWFjaCgoY29vcmQsIGkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7ICdtYXJrZXItY29sb3InOiB0cmF2ZXJzZUNvbG9yLCBpbmRleDogaSwgdHlwZTogaSA9PT0gMCA/ICdzdGFydCcgOiAndmVydGV4JyB9XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgIGNvbnN0IGMgPSB2YWxpZENvdXJzZXNbaSAtIDFdXG4gICAgICAgICAgcHJvcHMuYmVhcmluZyA9IGMuYmVhcmluZ1xuICAgICAgICAgIHByb3BzLmRpc3RhbmNlID0gcGFyc2VGbG9hdChjLmRpc3RhbmNlKVxuICAgICAgICAgIHByb3BzLmRpc3RhbmNlVW5pdCA9IGRpc3RhbmNlVW5pdFxuICAgICAgICB9XG4gICAgICAgIGZlYXR1cmVzLnB1c2goeyB0eXBlOiAnRmVhdHVyZScsIGdlb21ldHJ5OiB7IHR5cGU6ICdQb2ludCcsIGNvb3JkaW5hdGVzOiBjb29yZCB9LCBwcm9wZXJ0aWVzOiBwcm9wcyB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBQb2x5Z29uXG4gICAgaWYgKGV4cG9ydFBvbHlnb24gJiYgdmFsaWRDb3Vyc2VzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCByaW5nID0gWy4uLndnczg0LCB3Z3M4NFswXV1cbiAgICAgIGNvbnN0IHBvbHlQcm9wczogUmVjb3JkPHN0cmluZywgYW55PiA9IHsgZmlsbDogdHJhdmVyc2VDb2xvciwgJ2ZpbGwtb3BhY2l0eSc6IDAuMiwgc3Ryb2tlOiB0cmF2ZXJzZUNvbG9yIH1cbiAgICAgIGlmIChjbG9zdXJlUmVwb3J0KSB7XG4gICAgICAgIHBvbHlQcm9wcy5hcmVhQWNyZXMgPSBwYXJzZUZsb2F0KGNsb3N1cmVSZXBvcnQuYXJlYUFjcmVzLnRvRml4ZWQoNCkpXG4gICAgICAgIHBvbHlQcm9wcy5hcmVhU3FGdCA9IE1hdGgucm91bmQoY2xvc3VyZVJlcG9ydC5hcmVhU3FGdClcbiAgICAgICAgcG9seVByb3BzLmNsb3N1cmVFcnJvciA9IHBhcnNlRmxvYXQoY2xvc3VyZVJlcG9ydC5jbG9zdXJlRXJyb3IudG9GaXhlZCg0KSlcbiAgICAgICAgcG9seVByb3BzLnByZWNpc2lvblJhdGlvID0gYDE6JHtjbG9zdXJlUmVwb3J0LnByZWNpc2lvblJhdGlvLnRvTG9jYWxlU3RyaW5nKCl9YFxuICAgICAgfVxuICAgICAgZmVhdHVyZXMucHVzaCh7IHR5cGU6ICdGZWF0dXJlJywgZ2VvbWV0cnk6IHsgdHlwZTogJ1BvbHlnb24nLCBjb29yZGluYXRlczogW3JpbmddIH0sIHByb3BlcnRpZXM6IHBvbHlQcm9wcyB9KVxuICAgIH1cblxuICAgIGNvbnN0IGdlb2pzb24gPSB7IHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsIGZlYXR1cmVzIH1cbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGdlb2pzb24sIG51bGwsIDIpXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSlcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGEuaHJlZiA9IHVybFxuICAgIGEuZG93bmxvYWQgPSAoZXhwb3J0RmlsZU5hbWUudHJpbSgpIHx8ICd0cmF2ZXJzZScpICsgJy5nZW9qc29uJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSlcbiAgICBhLmNsaWNrKClcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpXG4gIH1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUmVuZGVyIGhlbHBlcnMg4oCUIGJlYXJpbmcgY2VsbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgYmVhcmluZyBpbnB1dCBjZWxsIGZvciBhIHNpbmdsZSBjb3Vyc2Ugcm93LlxuICAgKlxuICAgKiBJbiBxdWFkcmFudCArIGxldHRlcnMgbW9kZTogYSBzaW5nbGUgdGV4dCBpbnB1dCBhY2NlcHRpbmcgXCJOIDQ1wrAzMCcgRVwiLlxuICAgKiBJbiBxdWFkcmFudCArIG51bWJlciBtb2RlOiAgYSBuYXJyb3cgdGV4dCBpbnB1dCBmb3IgdGhlIHF1YWRyYW50IGRpZ2l0XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMeKAkzQpICsgYSB0ZXh0IGlucHV0IGZvciB0aGUgRE1TIGFuZ2xlLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVkIGludGVybmFsbHkgYXMgXCJRPG4+fDxhbmdsZT5cIi5cbiAgICogSW4gYXppbXV0aCBtb2RlOiAgICAgICAgICAgIGEgc2luZ2xlIG51bWVyaWMtaXNoIHRleHQgaW5wdXQuXG4gICAqL1xuICBfcmVuZGVyQmVhcmluZ0NlbGwgKGNvdXJzZTogVHJhdmVyc2VDb3Vyc2UsIGk6IG51bWJlcik6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBiZWFyaW5nRm9ybWF0LCBiZWFyaW5nRW50cnkgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChiZWFyaW5nRm9ybWF0ID09PSAncXVhZHJhbnQnICYmIGJlYXJpbmdFbnRyeSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IHFOdW0gICA9IGRlY29kZVFOdW0oY291cnNlLmJlYXJpbmcpXG4gICAgICBjb25zdCBxQW5nbGUgPSBkZWNvZGVRQW5nbGUoY291cnNlLmJlYXJpbmcpXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc0cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICB7LyogUXVhZHJhbnQgZGlnaXQgaW5wdXQg4oCUIGFjY2VwdHMgMSwgMiwgMywgb3IgNCAqL31cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17ZWwgPT4geyB0aGlzLl9xTnVtUmVmc1tpXSA9IGVsIH19XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpbnB1dE1vZGU9XCJudW1lcmljXCJcbiAgICAgICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgICAgIHN0eWxlPXtTLnFOdW1JbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXtxTnVtfVxuICAgICAgICAgICAgdGl0bGU9XCJRdWFkcmFudDogMT1ORSAgMj1TRSAgMz1TVyAgND1OV1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlFcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHtcbiAgICAgICAgICAgICAgLy8gQWNjZXB0IG9ubHkgZGlnaXRzIDHigJM0OyBzaWxlbnRseSBpZ25vcmUgYW55dGhpbmcgZWxzZS5cbiAgICAgICAgICAgICAgY29uc3QgcmF3ID0gZXYudGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgICAgICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQocmF3LCAxMClcbiAgICAgICAgICAgICAgaWYgKHJhdyA9PT0gJycgfHwgKG4gPj0gMSAmJiBuIDw9IDQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3USA9IHJhdyA9PT0gJycgPyAxIDogblxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdXJzZShpLCAnYmVhcmluZycsIGVuY29kZVFOdW0obmV3USwgcUFuZ2xlKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZXYgPT4gdGhpcy5faGFuZGxlQ291cnNlS2V5RG93bihldiwgaSwgJ3F1YWRyYW50Jyl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHsvKiBETVMgYW5nbGUgaW5wdXQgKi99XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5fcUFuZ2xlUmVmc1tpXSA9IGVsIH19XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBzdHlsZT17eyAuLi5TLmlucHV0LCBmbGV4OiAxIH19XG4gICAgICAgICAgICB2YWx1ZT17cUFuZ2xlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI0NSAzMCAwMFwiXG4gICAgICAgICAgICB0aXRsZT1cIkRlZ3JlZXMgbWludXRlcyBzZWNvbmRzIOKAlCBlLmcuIDQ1IDMwIDAwXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdXJzZShpLCAnYmVhcmluZycsIGVuY29kZVFOdW0ocU51bSwgZXYudGFyZ2V0LnZhbHVlKSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbktleURvd249e2V2ID0+IHRoaXMuX2hhbmRsZUNvdXJzZUtleURvd24oZXYsIGksICdiZWFyaW5nJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdDogc2luZ2xlIHRleHQgaW5wdXQgKGxldHRlcnMgcXVhZHJhbnQgb3IgYXppbXV0aClcbiAgICBjb25zdCBiUGxhY2Vob2xkZXIgPSBiZWFyaW5nRm9ybWF0ID09PSAncXVhZHJhbnQnID8gXCJOIDQ1wrAzMCcwMFxcXCIgRVwiIDogJzA0NS41MDAwJ1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX2JlYXJpbmdSZWZzW2ldID0gZWwgfX1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBzdHlsZT17Uy5pbnB1dH1cbiAgICAgICAgdmFsdWU9e2NvdXJzZS5iZWFyaW5nfVxuICAgICAgICBwbGFjZWhvbGRlcj17YlBsYWNlaG9sZGVyfVxuICAgICAgICBvbkNoYW5nZT17ZXYgPT4gdGhpcy5fdXBkYXRlQ291cnNlKGksICdiZWFyaW5nJywgZXYudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25LZXlEb3duPXtldiA9PiB0aGlzLl9oYW5kbGVDb3Vyc2VLZXlEb3duKGV2LCBpLCAnYmVhcmluZycpfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1haW4gcmVuZGVyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgamltdU1hcFZpZXcsIG1vZHVsZXNMb2FkZWQsIGlzUGlja2luZ1N0YXJ0LCBzdGFydFBvaW50LCBjb3Vyc2VzLFxuICAgICAgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5LCBkaXN0YW5jZVVuaXQsIGNsb3N1cmVSZXBvcnQsIHBhcnNlRXJyb3IsXG4gICAgICBzZWxlY3RlZENvdXJzZUluZGV4LCB0cmF2ZXJzZUNvbG9yLCBleHBvcnRMaW5lU3RyaW5nLCBleHBvcnRQb2ludHMsIGV4cG9ydFBvbHlnb24gfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBtYXBSZWFkeSA9ICEhamltdU1hcFZpZXcgJiYgbW9kdWxlc0xvYWRlZFxuICAgIGNvbnN0IGRyYXduID0gY2xvc3VyZVJlcG9ydCAhPT0gbnVsbFxuXG4gICAgLy8gS2VlcCByZWYgYXJyYXlzIGluIHN5bmMgd2l0aCBjb3Vyc2UgY291bnQgKHRyaW0gc3RhbGUgdGFpbHMpLlxuICAgIHRoaXMuX2JlYXJpbmdSZWZzLmxlbmd0aCAgPSBjb3Vyc2VzLmxlbmd0aFxuICAgIHRoaXMuX2Rpc3RhbmNlUmVmcy5sZW5ndGggPSBjb3Vyc2VzLmxlbmd0aFxuICAgIHRoaXMuX3FOdW1SZWZzLmxlbmd0aCAgICAgPSBjb3Vyc2VzLmxlbmd0aFxuICAgIHRoaXMuX3FBbmdsZVJlZnMubGVuZ3RoICAgPSBjb3Vyc2VzLmxlbmd0aFxuXG4gICAgLy8gQnVpbGQgdGhlIGZvcm1hdCBoaW50IHRleHQuXG4gICAgbGV0IGhpbnRUZXh0OiBzdHJpbmdcbiAgICBpZiAoYmVhcmluZ0Zvcm1hdCA9PT0gJ2F6aW11dGgnKSB7XG4gICAgICBoaW50VGV4dCA9ICdBemltdXRoOiAwNDUuNTAwMCAgKDDigJMzNjDCsCBjbG9ja3dpc2UgZnJvbSBub3J0aCknXG4gICAgfSBlbHNlIGlmIChiZWFyaW5nRW50cnkgPT09ICdudW1iZXInKSB7XG4gICAgICBoaW50VGV4dCA9ICdRdWFkcmFudCAjOiB0eXBlIDHigJM0LCB0aGVuIGVudGVyIGFuZ2xlIGFzIEQgTSBTICAoZS5nLiA0NSAzMCAwMClcXG5RMT1ORSAgUTI9U0UgIFEzPVNXICBRND1OVydcbiAgICB9IGVsc2Uge1xuICAgICAgaGludFRleHQgPSBcIlF1YWRyYW50OiBOIDQ1wrAzMCcwMFxcXCIgRSAgb3IgIFMxMiAzMCAwMFcgIG9yICBONDUuNTA0RVwiXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e1Mud3JhcH0+XG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5fb25WaWV3Q2hhbmdlfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e1MuaGVhZGVyfT5UcmF2ZXJzZSBUb29sPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17Uy5ib2R5fT5cbiAgICAgICAgICB7IWppbXVNYXBWaWV3ICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e1Mud2Fybn0+Q29ubmVjdCB0aGlzIHdpZGdldCB0byBhIG1hcCBpbiB0aGUgd2lkZ2V0IHNldHRpbmdzLjwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogU3RhcnRpbmcgUG9pbnQgKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17Uy5zZWN0aW9ufT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e1MubGFiZWx9PlN0YXJ0aW5nIFBvaW50PC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHN0eWxlPXt7IC4uLlMuYnRuLCAuLi4oaXNQaWNraW5nU3RhcnQgPyBTLmJ0bkFjdGl2ZSA6IFMuYnRuU2Vjb25kYXJ5KSwgLi4uKCFtYXBSZWFkeSA/IFMuYnRuRGlzYWJsZWQgOiB7fSkgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFtYXBSZWFkeX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5fc3RhcnRQaWNraW5nUG9pbnQoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2lzUGlja2luZ1N0YXJ0ID8gJ0NsaWNrIG9uIG1hcOKApicgOiBzdGFydFBvaW50ID8gJ1JlLXBpY2sgU3RhcnQnIDogJ1BpY2sgU3RhcnQgUG9pbnQnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7c3RhcnRQb2ludCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1MuY29vcmRCb3h9PlxuICAgICAgICAgICAgICAgIFg6IHtzdGFydFBvaW50LngudG9GaXhlZCgyKX17JyAgICd9WToge3N0YXJ0UG9pbnQueS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQmVhcmluZyBGb3JtYXQgKyBVbml0ICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uUy5zZWN0aW9uLCAuLi5TLnJvdywgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLCBnYXA6ICcxNHB4JyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Uy5sYWJlbH0+QmVhcmluZyBGb3JtYXQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Uy5yb3d9PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLlMuYnRuLCBmbGV4OiAxLCAuLi4oYmVhcmluZ0Zvcm1hdCA9PT0gJ3F1YWRyYW50JyA/IFMuYnRuUHJpbWFyeSA6IFMuYnRuU2Vjb25kYXJ5KSB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGJlYXJpbmdGb3JtYXQ6ICdxdWFkcmFudCcsIGNsb3N1cmVSZXBvcnQ6IG51bGwgfSl9XG4gICAgICAgICAgICAgICAgPlF1YWRyYW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uUy5idG4sIGZsZXg6IDEsIC4uLihiZWFyaW5nRm9ybWF0ID09PSAnYXppbXV0aCcgPyBTLmJ0blByaW1hcnkgOiBTLmJ0blNlY29uZGFyeSkgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBiZWFyaW5nRm9ybWF0OiAnYXppbXV0aCcsIGNsb3N1cmVSZXBvcnQ6IG51bGwgfSl9XG4gICAgICAgICAgICAgICAgPkF6aW11dGg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFF1YWRyYW50IGVudHJ5IHN1Yi10b2dnbGU6IGxldHRlcnMgdnMuIHF1YWRyYW50IG51bWJlciAqL31cbiAgICAgICAgICAgICAge2JlYXJpbmdGb3JtYXQgPT09ICdxdWFkcmFudCcgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uUy5lbnRyeVRvZ2dsZSwgbWFyZ2luVG9wOiAnNnB4JyB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtTLmVudHJ5VG9nZ2xlTGFiZWx9PkVudHJ5Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uUy5idG4sIHBhZGRpbmc6ICczcHggOHB4JywgZm9udFNpemU6ICcxMXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAuLi4oYmVhcmluZ0VudHJ5ID09PSAnbGV0dGVycycgPyBTLmJ0blByaW1hcnkgOiBTLmJ0blNlY29uZGFyeSkgfX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFbnRlciBiZWFyaW5nIGFzIE4vUyArIGFuZ2xlICsgRS9XICh0cmFkaXRpb25hbClcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYmVhcmluZ0VudHJ5OiAnbGV0dGVycycsIGNsb3N1cmVSZXBvcnQ6IG51bGwgfSl9XG4gICAgICAgICAgICAgICAgICA+Ti9TIEUvVzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5TLmJ0biwgcGFkZGluZzogJzNweCA4cHgnLCBmb250U2l6ZTogJzExcHgnLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLihiZWFyaW5nRW50cnkgPT09ICdudW1iZXInID8gUy5idG5QcmltYXJ5IDogUy5idG5TZWNvbmRhcnkpIH19XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRW50ZXIgYmVhcmluZyBhcyBxdWFkcmFudCBudW1iZXIgKDHigJM0KSArIERNUyBhbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBiZWFyaW5nRW50cnk6ICdudW1iZXInLCBjbG9zdXJlUmVwb3J0OiBudWxsIH0pfVxuICAgICAgICAgICAgICAgICAgPlEx4oCTUTQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTLmxhYmVsfT5EaXN0YW5jZSBVbml0PC9kaXY+XG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICBzdHlsZT17Uy5zZWxlY3R9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2Rpc3RhbmNlVW5pdH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4gdGhpcy5zZXRTdGF0ZSh7IGRpc3RhbmNlVW5pdDogZXYudGFyZ2V0LnZhbHVlIGFzIERpc3RhbmNlVW5pdCwgY2xvc3VyZVJlcG9ydDogbnVsbCB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZWV0XCI+RmVldDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGFpbnNcIj5DaGFpbnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWV0ZXJzXCI+TWV0ZXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTLmxhYmVsfT5Db2xvcjwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0cmF2ZXJzZUNvbG9yfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNDBweCcsIGhlaWdodDogJzMwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI2UyZThmMCcsIGJvcmRlclJhZGl1czogJzVweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBwYWRkaW5nOiAnMXB4IDJweCcgfX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4gdGhpcy5zZXRTdGF0ZSh7IHRyYXZlcnNlQ29sb3I6IGV2LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIExlZ3MgVGFibGUgKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17Uy5zZWN0aW9ufT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uUy5yb3csIG1hcmdpbkJvdHRvbTogJzZweCcgfX0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtTLmxhYmVsfT5UcmF2ZXJzZSBDb3Vyc2VzICh7Y291cnNlcy5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLlMuYnRuLCAuLi5TLmJ0blNlY29uZGFyeSwgcGFkZGluZzogJzNweCA5cHgnLCBmb250U2l6ZTogJzExcHgnLCBtYXJnaW5MZWZ0OiAnYXV0bycgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLl9hZGRDb3Vyc2UoZmFsc2UpfVxuICAgICAgICAgICAgICA+KyBBZGQgTGVnPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17Uy50YWJsZX0+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgLi4uUy50aCwgd2lkdGg6ICcyMnB4JyB9fT4jPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17Uy50aH0+XG4gICAgICAgICAgICAgICAgICAgIHtiZWFyaW5nRm9ybWF0ID09PSAncXVhZHJhbnQnICYmIGJlYXJpbmdFbnRyeSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgICA/ICdRIyArIEFuZ2xlIChEIE0gUyknXG4gICAgICAgICAgICAgICAgICAgICAgOiAnQmVhcmluZyd9XG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IC4uLlMudGgsIHdpZHRoOiAnNzZweCcgfX0+RGlzdGFuY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IC4uLlMudGgsIHdpZHRoOiAnMjZweCcgfX0+PC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge2NvdXJzZXMubWFwKChjb3Vyc2UsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpID09PSBzZWxlY3RlZENvdXJzZUluZGV4XG4gICAgICAgICAgICAgICAgICBjb25zdCByb3dTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IGlzU2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgPyB7IC4uLlMudHJTZWxlY3RlZCwgY3Vyc29yOiAncG9pbnRlcicgfVxuICAgICAgICAgICAgICAgICAgICA6IHsgY3Vyc29yOiAncG9pbnRlcicgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtyb3dTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGU6IGNsaWNraW5nIHRoZSBhbHJlYWR5LXNlbGVjdGVkIHJvdyBkZXNlbGVjdHMgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb3Vyc2VJbmRleDogcHJldi5zZWxlY3RlZENvdXJzZUluZGV4ID09PSBpID8gbnVsbCA6IGlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgLi4uUy50ZCwgY29sb3I6IGlzU2VsZWN0ZWQgPyAnIzAzNjlhMScgOiAnIzk0YTNiOCcsIGZvbnRXZWlnaHQ6ICc2MDAnLCBmb250U2l6ZTogJzExcHgnIH19PntpICsgMX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17Uy50ZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyQmVhcmluZ0NlbGwoY291cnNlLCBpKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17Uy50ZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX2Rpc3RhbmNlUmVmc1tpXSA9IGVsIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17Uy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvdXJzZS5kaXN0YW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHRoaXMuX3VwZGF0ZUNvdXJzZShpLCAnZGlzdGFuY2UnLCBldi50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2V2ID0+IHRoaXMuX2hhbmRsZUNvdXJzZUtleURvd24oZXYsIGksICdkaXN0YW5jZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyAuLi5TLnRkLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uUy5idG4sIC4uLlMuYnRuU2Vjb25kYXJ5LCBwYWRkaW5nOiAnMnB4IDZweCcsIGZvbnRTaXplOiAnMTRweCcsIGZvbnRXZWlnaHQ6ICc3MDAnLCBsaW5lSGVpZ2h0OiAnMScsIG1hcmdpblJpZ2h0OiAnM3B4JyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkluc2VydCBjb3Vyc2UgYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB7IGV2LnN0b3BQcm9wYWdhdGlvbigpOyB0aGlzLl9pbnNlcnRDb3Vyc2UoaSkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID4rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291cnNlcy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLlMuYnRuLCAuLi5TLmJ0bkRhbmdlciB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIGNvdXJzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NlbGVjdGVkKSB0aGlzLl9oaWdobGlnaHRMYXllcj8ucmVtb3ZlQWxsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNvdXJzZShpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEZvcm1hdCBoaW50ICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uUy5oaW50LCB3aGl0ZVNwYWNlOiAncHJlLWxpbmUnIH19PntoaW50VGV4dH08L2Rpdj5cblxuICAgICAgICAgIHsvKiBFcnJvciAqL31cbiAgICAgICAgICB7cGFyc2VFcnJvciAmJiA8ZGl2IHN0eWxlPXtTLmVycm9yQm94fT57cGFyc2VFcnJvcn08L2Rpdj59XG5cbiAgICAgICAgICB7LyogQWN0aW9ucyAqL31cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLlMucm93LCBtYXJnaW5Cb3R0b206ICc2cHgnIH19PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBzdHlsZT17eyAuLi5TLmJ0biwgLi4uUy5idG5QcmltYXJ5LCBmbGV4OiAxLCAuLi4oIW1hcFJlYWR5IHx8ICFzdGFydFBvaW50ID8gUy5idG5EaXNhYmxlZCA6IHt9KSB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IW1hcFJlYWR5IHx8ICFzdGFydFBvaW50fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLl9kcmF3VHJhdmVyc2UoKX1cbiAgICAgICAgICAgID57ZHJhd24gPyAnUmVkcmF3IFRyYXZlcnNlJyA6ICdEcmF3IFRyYXZlcnNlJ308L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uUy5idG4sIC4uLlMuYnRuU2Vjb25kYXJ5IH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuX2NsZWFyQWxsKCl9XG4gICAgICAgICAgICA+Q2xlYXI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzZweCcgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLlMubGFiZWwsIG1hcmdpbkJvdHRvbTogJzRweCcgfX0+RmlsZSBOYW1lPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzZweCcgfX0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5TLmlucHV0LCBmbGV4OiAxIH19XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXhwb3J0RmlsZU5hbWV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0cmF2ZXJzZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHRoaXMuc2V0U3RhdGUoeyBleHBvcnRGaWxlTmFtZTogZXYudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyM5NGEzYjgnLCBmbGV4U2hyaW5rOiAwIH19Pi5nZW9qc29uPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc2cHgnIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5TLmxhYmVsLCBtYXJnaW5Cb3R0b206ICc0cHgnIH19PkV4cG9ydCBHZW9tZXRyeTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzEycHgnLCBmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyM0NzU1NjknIH19PlxuICAgICAgICAgICAgICB7KFtcbiAgICAgICAgICAgICAgICBbJ2V4cG9ydExpbmVTdHJpbmcnLCAnTGluZSddIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgIFsnZXhwb3J0UG9pbnRzJywgICAgICdQb2ludHMnXSBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICBbJ2V4cG9ydFBvbHlnb24nLCAgICAnUG9seWdvbiddIGFzIGNvbnN0XG4gICAgICAgICAgICAgIF0pLm1hcCgoW2tleSwgbGFiZWxdKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxhYmVsIGtleT17a2V5fSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICc0cHgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlW2tleV19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiB0aGlzLnNldFN0YXRlKHsgW2tleV06IGV2LnRhcmdldC5jaGVja2VkIH0gYXMgYW55KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzE0cHgnIH19PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBzdHlsZT17eyAuLi5TLmJ0biwgLi4uUy5idG5TZWNvbmRhcnksIHdpZHRoOiAnMTAwJScsIC4uLighc3RhcnRQb2ludCA/IFMuYnRuRGlzYWJsZWQgOiB7fSkgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzdGFydFBvaW50fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLl9leHBvcnRHZW9KU09OKCl9XG4gICAgICAgICAgICA+RXhwb3J0IEdlb0pTT048L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBDbG9zdXJlIFJlcG9ydCAqL31cbiAgICAgICAgICB7Y2xvc3VyZVJlcG9ydCAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtTLnJlcG9ydEJveH0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcsIGZvbnRTaXplOiAnMTNweCcsIGNvbG9yOiAnIzE2NjUzNCcsIG1hcmdpbkJvdHRvbTogJzhweCcgfX0+XG4gICAgICAgICAgICAgICAgQ2xvc3VyZSBSZXBvcnRcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1MucmVwb3J0Um93fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMzNzQxNTEnIH19PlRvdGFsIFBlcmltZXRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNjAwJyB9fT57Y2xvc3VyZVJlcG9ydC50b3RhbERpc3QudG9GaXhlZCgzKX0ge2Rpc3RhbmNlVW5pdH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTLnJlcG9ydFJvd30+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMzc0MTUxJyB9fT5TdW0gRGVwYXJ0dXJlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNjAwJyB9fT57Y2xvc3VyZVJlcG9ydC5zdW1EZXAudG9GaXhlZCg0KX0ge2Rpc3RhbmNlVW5pdH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTLnJlcG9ydFJvd30+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMzc0MTUxJyB9fT5TdW0gTGF0aXR1ZGVzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc2MDAnIH19PntjbG9zdXJlUmVwb3J0LnN1bUxhdC50b0ZpeGVkKDQpfSB7ZGlzdGFuY2VVbml0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uUy5yZXBvcnRSb3csIC4uLlMucmVwb3J0RGl2aWRlciB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMzNzQxNTEnIH19PkNsb3N1cmUgRXJyb3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcsIGNvbG9yOiBjbG9zdXJlUmVwb3J0LmNsb3N1cmVFcnJvciA+IDAuMSA/ICcjZGMyNjI2JyA6ICcjMTY2NTM0JyB9fT5cbiAgICAgICAgICAgICAgICAgIHtjbG9zdXJlUmVwb3J0LmNsb3N1cmVFcnJvci50b0ZpeGVkKDQpfSB7ZGlzdGFuY2VVbml0fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1MucmVwb3J0Um93fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyMzNzQxNTEnIH19PlByZWNpc2lvbiBSYXRpbzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNjAwJyB9fT4xIDoge2Nsb3N1cmVSZXBvcnQucHJlY2lzaW9uUmF0aW8udG9Mb2NhbGVTdHJpbmcoKX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7Y291cnNlcy5sZW5ndGggPj0gMiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5TLnJlcG9ydFJvdywgLi4uUy5yZXBvcnREaXZpZGVyIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMzc0MTUxJyB9fT5FbmNsb3NlZCBBcmVhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtjbG9zdXJlUmVwb3J0LmFyZWFBY3Jlcy50b0ZpeGVkKDQpfSBhY3snICAnfSh7TWF0aC5yb3VuZChjbG9zdXJlUmVwb3J0LmFyZWFTcUZ0KS50b0xvY2FsZVN0cmluZygpfSBzcSBmdClcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlcnNlV2lkZ2V0XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9