System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/traverse/src/runtime/widget.tsx ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
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
class TraverseWidget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Component {
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
                    const mods = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
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
            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', gap: '4px', alignItems: 'center' } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { ref: el => { this._qNumRefs[i] = el; }, type: "text", inputMode: "numeric", maxLength: 1, style: S.qNumInput, value: qNum, title: "Quadrant: 1=NE  2=SE  3=SW  4=NW", placeholder: "Q", onChange: ev => {
                        // Accept only digits 1–4; silently ignore anything else.
                        const raw = ev.target.value.trim();
                        const n = parseInt(raw, 10);
                        if (raw === '' || (n >= 1 && n <= 4)) {
                            const newQ = raw === '' ? 1 : n;
                            this._updateCourse(i, 'bearing', encodeQNum(newQ, qAngle));
                        }
                    }, onKeyDown: ev => this._handleCourseKeyDown(ev, i, 'quadrant') }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { ref: el => { this._qAngleRefs[i] = el; }, type: "text", style: Object.assign(Object.assign({}, S.input), { flex: 1 }), value: qAngle, placeholder: "45 30 00", title: "Degrees minutes seconds \u2014 e.g. 45 30 00", onChange: ev => {
                        this._updateCourse(i, 'bearing', encodeQNum(qNum, ev.target.value));
                    }, onKeyDown: ev => this._handleCourseKeyDown(ev, i, 'bearing') })));
        }
        // Default: single text input (letters quadrant or azimuth)
        const bPlaceholder = bearingFormat === 'quadrant' ? "N 45°30'00\" E" : '045.5000';
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { ref: el => { this._bearingRefs[i] = el; }, type: "text", style: S.input, value: course.bearing, placeholder: bPlaceholder, onChange: ev => this._updateCourse(i, 'bearing', ev.target.value), onKeyDown: ev => this._handleCourseKeyDown(ev, i, 'bearing') }));
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
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.wrap },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this._onViewChange }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.header }, "Traverse Tool"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.body },
                !jimuMapView && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.warn }, "Connect this widget to a map in the widget settings.")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.section },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.label }, "Starting Point"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), (isPickingStart ? S.btnActive : S.btnSecondary)), (!mapReady ? S.btnDisabled : {})), disabled: !mapReady, onClick: () => this._startPickingPoint() }, isPickingStart ? 'Click on map…' : startPoint ? 'Re-pick Start' : 'Pick Start Point'),
                    startPoint && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.coordBox },
                        "X: ",
                        startPoint.x.toFixed(2),
                        '   ',
                        "Y: ",
                        startPoint.y.toFixed(2)))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: Object.assign(Object.assign(Object.assign({}, S.section), S.row), { alignItems: 'flex-start', gap: '14px' }) },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { flex: 1 } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.label }, "Bearing Format"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.row },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), { flex: 1 }), (bearingFormat === 'quadrant' ? S.btnPrimary : S.btnSecondary)), onClick: () => this.setState({ bearingFormat: 'quadrant', closureReport: null }) }, "Quadrant"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), { flex: 1 }), (bearingFormat === 'azimuth' ? S.btnPrimary : S.btnSecondary)), onClick: () => this.setState({ bearingFormat: 'azimuth', closureReport: null }) }, "Azimuth")),
                        bearingFormat === 'quadrant' && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: Object.assign(Object.assign({}, S.entryToggle), { marginTop: '6px' }) },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: S.entryToggleLabel }, "Entry:"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), { padding: '3px 8px', fontSize: '11px' }), (bearingEntry === 'letters' ? S.btnPrimary : S.btnSecondary)), title: "Enter bearing as N/S + angle + E/W (traditional)", onClick: () => this.setState({ bearingEntry: 'letters', closureReport: null }) }, "N/S E/W"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), { padding: '3px 8px', fontSize: '11px' }), (bearingEntry === 'number' ? S.btnPrimary : S.btnSecondary)), title: "Enter bearing as quadrant number (1\u20134) + DMS angle", onClick: () => this.setState({ bearingEntry: 'number', closureReport: null }) }, "Q1\u2013Q4")))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.label }, "Distance Unit"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { style: S.select, value: distanceUnit, onChange: ev => this.setState({ distanceUnit: ev.target.value, closureReport: null }) },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "feet" }, "Feet"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "chains" }, "Chains"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "meters" }, "Meters"))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.label }, "Color"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "color", value: traverseColor, style: { width: '40px', height: '30px', border: '1px solid #e2e8f0', borderRadius: '5px', cursor: 'pointer', padding: '1px 2px' }, onChange: ev => this.setState({ traverseColor: ev.target.value }) }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.section },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: Object.assign(Object.assign({}, S.row), { marginBottom: '6px' }) },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: S.label },
                            "Traverse Courses (",
                            courses.length,
                            ")"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), S.btnSecondary), { padding: '3px 9px', fontSize: '11px', marginLeft: 'auto' }), onClick: () => this._addCourse(false) }, "+ Add Leg")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("table", { style: S.table },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("thead", null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("th", { style: Object.assign(Object.assign({}, S.th), { width: '22px' }) }, "#"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("th", { style: S.th }, bearingFormat === 'quadrant' && bearingEntry === 'number'
                                    ? 'Q# + Angle (D M S)'
                                    : 'Bearing'),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("th", { style: Object.assign(Object.assign({}, S.th), { width: '76px' }) }, "Distance"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("th", { style: Object.assign(Object.assign({}, S.th), { width: '26px' }) }))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tbody", null, courses.map((course, i) => {
                            const isSelected = i === selectedCourseIndex;
                            const rowStyle = isSelected
                                ? Object.assign(Object.assign({}, S.trSelected), { cursor: 'pointer' }) : { cursor: 'pointer' };
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", { key: i, style: rowStyle, onClick: () => {
                                    // Toggle: clicking the already-selected row deselects it.
                                    this.setState(prev => ({
                                        selectedCourseIndex: prev.selectedCourseIndex === i ? null : i
                                    }));
                                } },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { style: Object.assign(Object.assign({}, S.td), { color: isSelected ? '#0369a1' : '#94a3b8', fontWeight: '600', fontSize: '11px' }) }, i + 1),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { style: S.td }, this._renderBearingCell(course, i)),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { style: S.td },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { ref: el => { this._distanceRefs[i] = el; }, type: "number", style: S.input, value: course.distance, placeholder: "0.00", min: "0", step: "0.01", onChange: ev => this._updateCourse(i, 'distance', ev.target.value), onKeyDown: ev => this._handleCourseKeyDown(ev, i, 'distance') })),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { style: Object.assign(Object.assign({}, S.td), { whiteSpace: 'nowrap' }) },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: Object.assign(Object.assign(Object.assign({}, S.btn), S.btnSecondary), { padding: '2px 6px', fontSize: '14px', fontWeight: '700', lineHeight: '1', marginRight: '3px' }), title: "Insert course after", onClick: ev => { ev.stopPropagation(); this._insertCourse(i); } }, "+"),
                                    courses.length > 1 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: Object.assign(Object.assign({}, S.btn), S.btnDanger), title: "Remove course", onClick: ev => {
                                            var _a;
                                            ev.stopPropagation();
                                            if (isSelected)
                                                (_a = this._highlightLayer) === null || _a === void 0 ? void 0 : _a.removeAll();
                                            this._removeCourse(i);
                                        } }, "\u00D7")))));
                        })))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: Object.assign(Object.assign({}, S.hint), { whiteSpace: 'pre-line' }) }, hintText),
                parseError && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.errorBox }, parseError),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: Object.assign(Object.assign({}, S.row), { marginBottom: '6px' }) },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: Object.assign(Object.assign(Object.assign(Object.assign({}, S.btn), S.btnPrimary), { flex: 1 }), (!mapReady || !startPoint ? S.btnDisabled : {})), disabled: !mapReady || !startPoint, onClick: () => this._drawTraverse() }, drawn ? 'Redraw Traverse' : 'Draw Traverse'),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: Object.assign(Object.assign({}, S.btn), S.btnSecondary), onClick: () => this._clearAll() }, "Clear")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: '6px' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: Object.assign(Object.assign({}, S.label), { marginBottom: '4px' }) }, "File Name"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '6px' } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "text", style: Object.assign(Object.assign({}, S.input), { flex: 1 }), value: this.state.exportFileName, placeholder: "traverse", onChange: ev => this.setState({ exportFileName: ev.target.value }) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontSize: '12px', color: '#94a3b8', flexShrink: 0 } }, ".geojson"))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: '6px' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: Object.assign(Object.assign({}, S.label), { marginBottom: '4px' }) }, "Export Geometry"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { display: 'flex', gap: '12px', fontSize: '12px', color: '#475569' } }, ([
                        ['exportLineString', 'Line'],
                        ['exportPoints', 'Points'],
                        ['exportPolygon', 'Polygon']
                    ]).map(([key, label]) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { key: key, style: { display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "checkbox", checked: this.state[key], onChange: ev => this.setState({ [key]: ev.target.checked }) }),
                        label))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: '14px' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: Object.assign(Object.assign(Object.assign(Object.assign({}, S.btn), S.btnSecondary), { width: '100%' }), (!startPoint ? S.btnDisabled : {})), disabled: !startPoint, onClick: () => this._exportGeoJSON() }, "Export GeoJSON")),
                closureReport && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.reportBox },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { fontWeight: '600', fontSize: '13px', color: '#166534', marginBottom: '8px' } }, "Closure Report"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.reportRow },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { color: '#374151' } }, "Total Perimeter"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontWeight: '600' } },
                            closureReport.totalDist.toFixed(3),
                            " ",
                            distanceUnit)),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.reportRow },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { color: '#374151' } }, "Sum Departures"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontWeight: '600' } },
                            closureReport.sumDep.toFixed(4),
                            " ",
                            distanceUnit)),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.reportRow },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { color: '#374151' } }, "Sum Latitudes"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontWeight: '600' } },
                            closureReport.sumLat.toFixed(4),
                            " ",
                            distanceUnit)),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: Object.assign(Object.assign({}, S.reportRow), S.reportDivider) },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { color: '#374151' } }, "Closure Error"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontWeight: '600', color: closureReport.closureError > 0.1 ? '#dc2626' : '#166534' } },
                            closureReport.closureError.toFixed(4),
                            " ",
                            distanceUnit)),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: S.reportRow },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { color: '#374151' } }, "Precision Ratio"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontWeight: '600' } },
                            "1 : ",
                            closureReport.precisionRatio.toLocaleString())),
                    courses.length >= 2 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: Object.assign(Object.assign({}, S.reportRow), S.reportDivider) },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { color: '#374151' } }, "Enclosed Area"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { fontWeight: '600' } },
                            closureReport.areaAcres.toFixed(4),
                            " ac",
                            '  ',
                            "(",
                            Math.round(closureReport.areaSqFt).toLocaleString(),
                            " sq ft)"))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90cmF2ZXJzZS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05HO0FBQ3NDO0FBRzVGLDhFQUE4RTtBQUM5RSxZQUFZO0FBQ1osOEVBQThFO0FBRTlFLE1BQU0sY0FBYyxHQUEyQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQzdGLE1BQU0sT0FBTyxHQUFHLE9BQU87QUFFdkIsOEVBQThFO0FBQzlFLDBCQUEwQjtBQUMxQiw4RUFBOEU7QUFFOUU7OztHQUdHO0FBQ0gsU0FBUyxvQkFBb0IsQ0FBRSxLQUFhO0lBQzFDLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxJQUFJO0lBQ3ZCLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7U0FDbkMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUM7U0FDdkIsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7U0FDdEIsT0FB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RUFBTSxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFOzRCQUMvQixhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7OzRCQUFLLElBQUk7OzRCQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRTtzQ0FDN0YsQ0FDSCxDQUNQLENBQ0csQ0FDUCxDQUNHLENBQ0YsQ0FDUDtJQUNILENBQUM7Q0FDRjtBQUVELGlFQUFlLGNBQWM7QUFFckIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3RyYXZlcnNlL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcsIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB0eXBlIHsgQmVhcmluZ0Zvcm1hdCwgRGlzdGFuY2VVbml0LCBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDb25zdGFudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBVTklUX1RPX01FVEVSUzogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgZmVldDogMC4zMDQ4LCBjaGFpbnM6IDIwLjExNjgsIG1ldGVyczogMS4wIH1cbmNvbnN0IFJfRUFSVEggPSA2Mzc4MTM3XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQmVhcmluZyBwYXJzaW5nIGhlbHBlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFBhcnNlIGEgdHJhZGl0aW9uYWwgcXVhZHJhbnQgYmVhcmluZyBzdHJpbmcgc3VjaCBhcyBcIk4gNDXCsDMwJzAwXFxcIiBFXCIgaW50b1xuICogYW4gYXppbXV0aCAoMOKAkzM2MMKwKS4gUmV0dXJucyBudWxsIGlmIHRoZSBzdHJpbmcgaXMgbWFsZm9ybWVkLlxuICovXG5mdW5jdGlvbiBwYXJzZVF1YWRyYW50QmVhcmluZyAoaW5wdXQ6IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xuICBpZiAoIWlucHV0KSByZXR1cm4gbnVsbFxuICBjb25zdCBzdHIgPSBpbnB1dC50cmltKCkudG9VcHBlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9bwrAnXCJdKy9nLCAnICcpXG4gICAgLnJlcGxhY2UoL1stLF0rL2csICcgJylcbiAgICAucmVwbGFjZSgvXFxzKy9nLCAnICcpXG4gIGNvbnN0IG0gPSBzdHIubWF0Y2goL14oW05TXSlcXHMqKFtcXGQuXSspXFxzKihbXFxkLl0qKVxccyooW1xcZC5dKilcXHMqKFtFV10pJC8pXG4gIGlmICghbSkgcmV0dXJuIG51bGxcbiAgY29uc3QgbnMgPSBtWzFdLCBkID0gcGFyc2VGbG9hdChtWzJdIHx8ICcwJyksIG1pbiA9IHBhcnNlRmxvYXQobVszXSB8fCAnMCcpLCBzZWMgPSBwYXJzZUZsb2F0KG1bNF0gfHwgJzAnKSwgZXcgPSBtWzVdXG4gIGNvbnN0IGRkID0gZCArIG1pbiAvIDYwICsgc2VjIC8gMzYwMFxuICBpZiAoZGQgPCAwIHx8IGRkID4gOTApIHJldHVybiBudWxsXG4gIGlmIChucyA9PT0gJ04nICYmIGV3ID09PSAnRScpIHJldHVybiBkZFxuICBpZiAobnMgPT09ICdTJyAmJiBldyA9PT0gJ0UnKSByZXR1cm4gMTgwIC0gZGRcbiAgaWYgKG5zID09PSAnUycgJiYgZXcgPT09ICdXJykgcmV0dXJuIDE4MCArIGRkXG4gIGlmIChucyA9PT0gJ04nICYmIGV3ID09PSAnVycpIHJldHVybiAzNjAgLSBkZFxuICByZXR1cm4gbnVsbFxufVxuXG4vKipcbiAqIFBhcnNlIGEgcXVhZHJhbnQtbnVtYmVyIGJlYXJpbmcuICBUaGUgdXNlciBlbnRlcnMgYSBxdWFkcmFudCBudW1iZXIgKDHigJM0KVxuICogcGx1cyBhIERNUyBhbmdsZSBzdHJpbmcuICBDb252ZW50aW9uOlxuICogICBRMSA9IE5FICDihpIgIGF6aW11dGggPSBhbmdsZVxuICogICBRMiA9IFNFICDihpIgIGF6aW11dGggPSAxODAg4oiSIGFuZ2xlXG4gKiAgIFEzID0gU1cgIOKGkiAgYXppbXV0aCA9IDE4MCArIGFuZ2xlXG4gKiAgIFE0ID0gTlcgIOKGkiAgYXppbXV0aCA9IDM2MCDiiJIgYW5nbGVcbiAqXG4gKiBUaGUgYW5nbGUgZmllbGQgYWNjZXB0cyB0aGUgc2FtZSBmbGV4aWJsZSBETVMgc3ludGF4IGFzIHBhcnNlUXVhZHJhbnRCZWFyaW5nXG4gKiAoZS5nLiBcIjQ1IDMwIDAwXCIsIFwiNDXCsDMwJzAwXFxcIlwiLCBcIjQ1LjVcIikuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUXVhZHJhbnROdW1iZXJCZWFyaW5nIChxdWFkcmFudDogbnVtYmVyLCBhbmdsZVN0cjogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmIChxdWFkcmFudCA8IDEgfHwgcXVhZHJhbnQgPiA0KSByZXR1cm4gbnVsbFxuICBpZiAoIWFuZ2xlU3RyKSByZXR1cm4gbnVsbFxuXG4gIC8vIE5vcm1hbGlzZSBzZXBhcmF0b3JzIHRvIHNwYWNlcywgc3RyaXAgZGVncmVlL21pbnV0ZS9zZWNvbmQgc3ltYm9scy5cbiAgY29uc3Qgc3RyID0gYW5nbGVTdHIudHJpbSgpXG4gICAgLnJlcGxhY2UoL1vCsCdcIl0rL2csICcgJylcbiAgICAucmVwbGFjZSgvWy0sXSsvZywgJyAnKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csICcgJylcblxuICBjb25zdCBwYXJ0cyA9IHN0ci5zcGxpdCgnICcpXG4gIGNvbnN0IGQgICA9IHBhcnNlRmxvYXQocGFydHNbMF0gfHwgJzAnKVxuICBjb25zdCBtaW4gPSBwYXJzZUZsb2F0KHBhcnRzWzFdIHx8ICcwJylcbiAgY29uc3Qgc2VjID0gcGFyc2VGbG9hdChwYXJ0c1syXSB8fCAnMCcpXG5cbiAgaWYgKGlzTmFOKGQpKSByZXR1cm4gbnVsbFxuICBjb25zdCBkZCA9IGQgKyAoaXNOYU4obWluKSA/IDAgOiBtaW4pIC8gNjAgKyAoaXNOYU4oc2VjKSA/IDAgOiBzZWMpIC8gMzYwMFxuICBpZiAoZGQgPCAwIHx8IGRkID4gOTApIHJldHVybiBudWxsXG5cbiAgaWYgKHF1YWRyYW50ID09PSAxKSByZXR1cm4gZGRcbiAgaWYgKHF1YWRyYW50ID09PSAyKSByZXR1cm4gMTgwIC0gZGRcbiAgaWYgKHF1YWRyYW50ID09PSAzKSByZXR1cm4gMTgwICsgZGRcbiAgaWYgKHF1YWRyYW50ID09PSA0KSByZXR1cm4gMzYwIC0gZGRcbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gcGFyc2VBemltdXRoIChpbnB1dDogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICghaW5wdXQpIHJldHVybiBudWxsXG4gIGNvbnN0IHZhbCA9IHBhcnNlRmxvYXQoaW5wdXQpXG4gIGlmIChpc05hTih2YWwpIHx8IHZhbCA8IDAgfHwgdmFsID49IDM2MCkgcmV0dXJuIG51bGxcbiAgcmV0dXJuIHZhbFxufVxuXG5mdW5jdGlvbiBwYXJzZUJlYXJpbmcgKGJlYXJpbmc6IHN0cmluZywgZm9ybWF0OiBCZWFyaW5nRm9ybWF0KTogbnVtYmVyIHwgbnVsbCB7XG4gIHJldHVybiBmb3JtYXQgPT09ICdxdWFkcmFudCcgPyBwYXJzZVF1YWRyYW50QmVhcmluZyhiZWFyaW5nKSA6IHBhcnNlQXppbXV0aChiZWFyaW5nKVxufVxuXG4vKipcbiAqIFBhcnNlIGEgc3RvcmVkIGJlYXJpbmcgdmFsdWUgdGhhdCBtYXkgYmUgZWl0aGVyIGEgcGxhaW4gc3RyaW5nIChxdWFkcmFudCAvXG4gKiBhemltdXRoIG1vZGUpIG9yIHRoZSBlbmNvZGVkIHF1YWRyYW50LW51bWJlciBmb3JtYXQgXCJRPG4+fDxhbmdsZVN0cj5cIiB0aGF0XG4gKiB3ZSB1c2UgaW50ZXJuYWxseSB3aGVuIGJlYXJpbmdFbnRyeSA9PT0gJ251bWJlcicuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlQmVhcmluZ1ZhbHVlIChcbiAgYmVhcmluZzogc3RyaW5nLFxuICBmb3JtYXQ6IEJlYXJpbmdGb3JtYXQsXG4gIGJlYXJpbmdFbnRyeTogQmVhcmluZ0VudHJ5XG4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKGZvcm1hdCA9PT0gJ3F1YWRyYW50JyAmJiBiZWFyaW5nRW50cnkgPT09ICdudW1iZXInKSB7XG4gICAgY29uc3Qgc2VwID0gYmVhcmluZy5pbmRleE9mKCd8JylcbiAgICBpZiAoc2VwID09PSAtMSkgcmV0dXJuIG51bGxcbiAgICBjb25zdCBxID0gcGFyc2VJbnQoYmVhcmluZy5zbGljZSgxLCBzZXApLCAxMClcbiAgICBjb25zdCBhbmdsZSA9IGJlYXJpbmcuc2xpY2Uoc2VwICsgMSlcbiAgICByZXR1cm4gcGFyc2VRdWFkcmFudE51bWJlckJlYXJpbmcocSwgYW5nbGUpXG4gIH1cbiAgcmV0dXJuIHBhcnNlQmVhcmluZyhiZWFyaW5nLCBmb3JtYXQpXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGlzdGFuY2UgLyBnZW9tZXRyeSBoZWxwZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gdG9NZXRlcnMgKGRpc3RhbmNlOiBzdHJpbmcsIHVuaXQ6IHN0cmluZyk6IG51bWJlciB7XG4gIHJldHVybiBwYXJzZUZsb2F0KGRpc3RhbmNlKSAqIChVTklUX1RPX01FVEVSU1t1bml0XSB8fCAxKVxufVxuXG5mdW5jdGlvbiB3ZWJNZXJjYXRvclRvV0dTODQgKHg6IG51bWJlciwgeTogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IGxvbiA9IHggLyBSX0VBUlRIICogKDE4MCAvIE1hdGguUEkpXG4gIGNvbnN0IGxhdCA9ICgyICogTWF0aC5hdGFuKE1hdGguZXhwKHkgLyBSX0VBUlRIKSkgLSBNYXRoLlBJIC8gMikgKiAoMTgwIC8gTWF0aC5QSSlcbiAgcmV0dXJuIFtwYXJzZUZsb2F0KGxvbi50b0ZpeGVkKDcpKSwgcGFyc2VGbG9hdChsYXQudG9GaXhlZCg3KSldXG59XG5cbmZ1bmN0aW9uIGhleFRvUmdiYSAoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IGggPSBoZXgucmVwbGFjZSgnIycsICcnKVxuICByZXR1cm4gW1xuICAgIHBhcnNlSW50KGguc2xpY2UoMCwgMiksIDE2KSxcbiAgICBwYXJzZUludChoLnNsaWNlKDIsIDQpLCAxNiksXG4gICAgcGFyc2VJbnQoaC5zbGljZSg0LCA2KSwgMTYpLFxuICAgIDI1NVxuICBdXG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVOZXh0UG9pbnQgKHg6IG51bWJlciwgeTogbnVtYmVyLCBhemltdXRoRGVnOiBudW1iZXIsIGRpc3RhbmNlTWV0ZXJzOiBudW1iZXIpIHtcbiAgY29uc3QgbGF0X3JhZCA9IDIgKiBNYXRoLmF0YW4oTWF0aC5leHAoeSAvIFJfRUFSVEgpKSAtIE1hdGguUEkgLyAyXG4gIGNvbnN0IGNvc19sYXQgPSBNYXRoLmNvcyhsYXRfcmFkKVxuICBjb25zdCBhel9yYWQgPSBhemltdXRoRGVnICogTWF0aC5QSSAvIDE4MFxuICByZXR1cm4ge1xuICAgIHg6IHggKyBkaXN0YW5jZU1ldGVycyAqIE1hdGguc2luKGF6X3JhZCkgLyBjb3NfbGF0LFxuICAgIHk6IHkgKyBkaXN0YW5jZU1ldGVycyAqIE1hdGguY29zKGF6X3JhZCkgLyBjb3NfbGF0XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEYXRhIHR5cGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW50ZXJmYWNlIFRyYXZlcnNlQ291cnNlIHsgYmVhcmluZzogc3RyaW5nOyBkaXN0YW5jZTogc3RyaW5nIH1cbmludGVyZmFjZSBUcmF2ZXJzZVBvaW50IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuXG4vKiogQ29udHJvbHMgaG93IHRoZSBiZWFyaW5nIGZpZWxkIGlzIHJlbmRlcmVkIGluIHRoZSBVSSB3aGVuIGZvcm1hdCA9ICdxdWFkcmFudCcuICovXG50eXBlIEJlYXJpbmdFbnRyeSA9ICdsZXR0ZXJzJyB8ICdudW1iZXInXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHJhdmVyc2UgY2FsY3VsYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBidWlsZFRyYXZlcnNlUG9pbnRzIChcbiAgc3RhcnRYOiBudW1iZXIsIHN0YXJ0WTogbnVtYmVyLFxuICBjb3Vyc2VzOiBUcmF2ZXJzZUNvdXJzZVtdLFxuICB1bml0OiBzdHJpbmcsXG4gIGJlYXJpbmdGb3JtYXQ6IEJlYXJpbmdGb3JtYXQsXG4gIGJlYXJpbmdFbnRyeTogQmVhcmluZ0VudHJ5XG4pOiBUcmF2ZXJzZVBvaW50W10gfCBudWxsIHtcbiAgY29uc3QgcG9pbnRzOiBUcmF2ZXJzZVBvaW50W10gPSBbeyB4OiBzdGFydFgsIHk6IHN0YXJ0WSB9XVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdXJzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb3Vyc2UgPSBjb3Vyc2VzW2ldXG4gICAgY29uc3QgYXogPSBwYXJzZUJlYXJpbmdWYWx1ZShjb3Vyc2UuYmVhcmluZywgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5KVxuICAgIGlmIChheiA9PT0gbnVsbCB8fCAhY291cnNlLmRpc3RhbmNlIHx8IGlzTmFOKHBhcnNlRmxvYXQoY291cnNlLmRpc3RhbmNlKSkpIHJldHVybiBudWxsXG4gICAgY29uc3QgZCA9IHRvTWV0ZXJzKGNvdXJzZS5kaXN0YW5jZSwgdW5pdClcbiAgICBjb25zdCBsYXN0ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXVxuICAgIHBvaW50cy5wdXNoKGNvbXB1dGVOZXh0UG9pbnQobGFzdC54LCBsYXN0LnksIGF6LCBkKSlcbiAgfVxuICByZXR1cm4gcG9pbnRzXG59XG5cbmludGVyZmFjZSBDbG9zdXJlUmVwb3J0IHtcbiAgY2xvc3VyZUVycm9yOiBudW1iZXJcbiAgcHJlY2lzaW9uUmF0aW86IG51bWJlclxuICB0b3RhbERpc3Q6IG51bWJlclxuICBzdW1EZXA6IG51bWJlclxuICBzdW1MYXQ6IG51bWJlclxuICBhcmVhQWNyZXM6IG51bWJlclxuICBhcmVhU3FGdDogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVDbG9zdXJlUmVwb3J0IChcbiAgY291cnNlczogVHJhdmVyc2VDb3Vyc2VbXSxcbiAgdW5pdDogc3RyaW5nLFxuICBiZWFyaW5nRm9ybWF0OiBCZWFyaW5nRm9ybWF0LFxuICBiZWFyaW5nRW50cnk6IEJlYXJpbmdFbnRyeVxuKTogQ2xvc3VyZVJlcG9ydCB8IG51bGwge1xuICBsZXQgc3VtRGVwID0gMCwgc3VtTGF0ID0gMCwgdG90YWxEaXN0ID0gMFxuICBsZXQgZ3ggPSAwLCBneSA9IDBcbiAgY29uc3QgZ1B0czogVHJhdmVyc2VQb2ludFtdID0gW3sgeDogMCwgeTogMCB9XVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdXJzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb3Vyc2UgPSBjb3Vyc2VzW2ldXG4gICAgY29uc3QgYXogPSBwYXJzZUJlYXJpbmdWYWx1ZShjb3Vyc2UuYmVhcmluZywgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5KVxuICAgIGlmIChheiA9PT0gbnVsbCB8fCAhY291cnNlLmRpc3RhbmNlKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IGQgPSB0b01ldGVycyhjb3Vyc2UuZGlzdGFuY2UsIHVuaXQpXG4gICAgY29uc3QgYXpfcmFkID0gYXogKiBNYXRoLlBJIC8gMTgwXG4gICAgY29uc3QgZGVwID0gZCAqIE1hdGguc2luKGF6X3JhZClcbiAgICBjb25zdCBsYXQgPSBkICogTWF0aC5jb3MoYXpfcmFkKVxuICAgIHN1bURlcCArPSBkZXA7IHN1bUxhdCArPSBsYXQ7IHRvdGFsRGlzdCArPSBkXG4gICAgZ3ggKz0gZGVwOyBneSArPSBsYXRcbiAgICBnUHRzLnB1c2goeyB4OiBneCwgeTogZ3kgfSlcbiAgfVxuICBjb25zdCBjbG9zdXJlTSA9IE1hdGguc3FydChzdW1EZXAgKiBzdW1EZXAgKyBzdW1MYXQgKiBzdW1MYXQpXG4gIGNvbnN0IHVuaXRGYWN0b3IgPSAxIC8gKFVOSVRfVE9fTUVURVJTW3VuaXRdIHx8IDEpXG4gIGNvbnN0IHByZWNpc2lvblJhdGlvID0gY2xvc3VyZU0gPiAwLjAwMSA/IE1hdGgucm91bmQodG90YWxEaXN0IC8gY2xvc3VyZU0pIDogOTk5OTk5XG5cbiAgbGV0IGFyZWEgPSAwXG4gIGNvbnN0IG4gPSBnUHRzLmxlbmd0aFxuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGsgPSAoaiArIDEpICUgblxuICAgIGFyZWEgKz0gZ1B0c1tqXS54ICogZ1B0c1trXS55IC0gZ1B0c1trXS54ICogZ1B0c1tqXS55XG4gIH1cbiAgY29uc3QgYXJlYVNxTSA9IE1hdGguYWJzKGFyZWEgLyAyKVxuXG4gIHJldHVybiB7XG4gICAgY2xvc3VyZUVycm9yOiBjbG9zdXJlTSAqIHVuaXRGYWN0b3IsXG4gICAgcHJlY2lzaW9uUmF0aW8sXG4gICAgdG90YWxEaXN0OiB0b3RhbERpc3QgKiB1bml0RmFjdG9yLFxuICAgIHN1bURlcDogc3VtRGVwICogdW5pdEZhY3RvcixcbiAgICBzdW1MYXQ6IHN1bUxhdCAqIHVuaXRGYWN0b3IsXG4gICAgYXJlYUFjcmVzOiBhcmVhU3FNICogMC4wMDAyNDcxMDUsXG4gICAgYXJlYVNxRnQ6IGFyZWFTcU0gKiAxMC43NjM5XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEaXNwbGF5IGhlbHBlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBmb3JtYXRCZWFyaW5nTGFiZWwgKGF6OiBudW1iZXIsIGZvcm1hdDogQmVhcmluZ0Zvcm1hdCk6IHN0cmluZyB7XG4gIGlmIChmb3JtYXQgPT09ICdhemltdXRoJykgcmV0dXJuIGF6LnRvRml4ZWQoNCkgKyAnwrAnXG4gIGxldCBuczogc3RyaW5nLCBldzogc3RyaW5nLCBhbmdsZTogbnVtYmVyXG4gIGlmIChheiA8PSA5MCkgICAgICAgeyBucyA9ICdOJzsgZXcgPSAnRSc7IGFuZ2xlID0gYXogfVxuICBlbHNlIGlmIChheiA8PSAxODApIHsgbnMgPSAnUyc7IGV3ID0gJ0UnOyBhbmdsZSA9IDE4MCAtIGF6IH1cbiAgZWxzZSBpZiAoYXogPD0gMjcwKSB7IG5zID0gJ1MnOyBldyA9ICdXJzsgYW5nbGUgPSBheiAtIDE4MCB9XG4gIGVsc2UgICAgICAgICAgICAgICAgeyBucyA9ICdOJzsgZXcgPSAnVyc7IGFuZ2xlID0gMzYwIC0gYXogfVxuICBsZXQgZGVnID0gTWF0aC5mbG9vcihhbmdsZSlcbiAgY29uc3QgbWluRiA9IChhbmdsZSAtIGRlZykgKiA2MFxuICBsZXQgbWluID0gTWF0aC5mbG9vcihtaW5GKVxuICBsZXQgc2VjID0gTWF0aC5yb3VuZCgobWluRiAtIG1pbikgKiA2MClcbiAgaWYgKHNlYyA9PT0gNjApIHsgc2VjID0gMDsgbWluKysgfVxuICBpZiAobWluID09PSA2MCkgeyBtaW4gPSAwOyBkZWcrKyB9XG4gIHJldHVybiBgJHtuc30gJHtTdHJpbmcoZGVnKS5wYWRTdGFydCgyLCAnMCcpfcKwJHtTdHJpbmcobWluKS5wYWRTdGFydCgyLCAnMCcpfScke1N0cmluZyhzZWMpLnBhZFN0YXJ0KDIsICcwJyl9XCIgJHtld31gXG59XG5cbmZ1bmN0aW9uIGdldFBvaW50Q29sb3IgKGlzU3RhcnQ6IGJvb2xlYW4sIGlzRW5kOiBib29sZWFuLCBjbG9zdXJlRGlzdDogbnVtYmVyKTogbnVtYmVyW10ge1xuICBpZiAoaXNTdGFydCkgcmV0dXJuIFswLCAxODAsIDAsIDI1NV1cbiAgaWYgKGlzRW5kICYmIGNsb3N1cmVEaXN0ID4gMC4wNSkgcmV0dXJuIFsyMjAsIDM4LCAzOCwgMjU1XVxuICByZXR1cm4gWzQxLCAxMjEsIDI1NSwgMjU1XVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEhlbHBlcnMgZm9yIHF1YWRyYW50LW51bWJlciBiZWFyaW5nIHN0b3JhZ2UgZm9ybWF0IFwiUTxuPnw8YW5nbGVTdHI+XCJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiogRGVjb2RlIHRoZSBxdWFkcmFudCBudW1iZXIgZnJvbSBhIHN0b3JlZCBcIlE8bj58PGFuZ2xlPlwiIHZhbHVlLiAqL1xuZnVuY3Rpb24gZGVjb2RlUU51bSAoYmVhcmluZzogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3Qgc2VwID0gYmVhcmluZy5pbmRleE9mKCd8JylcbiAgaWYgKHNlcCA9PT0gLTEpIHJldHVybiAxXG4gIHJldHVybiBwYXJzZUludChiZWFyaW5nLnNsaWNlKDEsIHNlcCksIDEwKSB8fCAxXG59XG5cbi8qKiBEZWNvZGUgdGhlIGFuZ2xlIHN0cmluZyBmcm9tIGEgc3RvcmVkIFwiUTxuPnw8YW5nbGU+XCIgdmFsdWUuICovXG5mdW5jdGlvbiBkZWNvZGVRQW5nbGUgKGJlYXJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHNlcCA9IGJlYXJpbmcuaW5kZXhPZignfCcpXG4gIGlmIChzZXAgPT09IC0xKSByZXR1cm4gYmVhcmluZ1xuICByZXR1cm4gYmVhcmluZy5zbGljZShzZXAgKyAxKVxufVxuXG4vKiogQnVpbGQgdGhlIHN0b3JhZ2Ugc3RyaW5nIGZvciBxdWFkcmFudC1udW1iZXIgbW9kZS4gKi9cbmZ1bmN0aW9uIGVuY29kZVFOdW0gKHE6IG51bWJlciwgYW5nbGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgUSR7cX18JHthbmdsZX1gXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgUzogUmVjb3JkPHN0cmluZywgUmVhY3QuQ1NTUHJvcGVydGllcz4gPSB7XG4gIHdyYXA6IHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZm9udFNpemU6ICcxM3B4JywgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsIG92ZXJmbG93OiAnaGlkZGVuJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcgfSxcbiAgaGVhZGVyOiB7IHBhZGRpbmc6ICcxMnB4IDE2cHgnLCBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6ICcxNXB4JywgY29sb3I6ICcjMWUyOTNiJyxcbiAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2UyZThmMCcsIGZsZXhTaHJpbms6IDAgfSxcbiAgYm9keTogeyBmbGV4OiAxLCBvdmVyZmxvd1k6ICdhdXRvJywgcGFkZGluZzogJzEycHggMTZweCcgfSxcbiAgc2VjdGlvbjogeyBtYXJnaW5Cb3R0b206ICcxNHB4JyB9LFxuICBsYWJlbDogeyBmb250U2l6ZTogJzExcHgnLCBmb250V2VpZ2h0OiAnNjAwJywgY29sb3I6ICcjNjQ3NDhiJywgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgbGV0dGVyU3BhY2luZzogJzAuMDVlbScsIG1hcmdpbkJvdHRvbTogJzVweCcgfSxcbiAgcm93OiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnOHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfSxcbiAgYnRuOiB7IHBhZGRpbmc6ICc2cHggMTJweCcsIGJvcmRlclJhZGl1czogJzZweCcsIGJvcmRlcjogJ25vbmUnLCBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBmb250U2l6ZTogJzEycHgnLCBmb250V2VpZ2h0OiAnNTAwJywgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMC4xNXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9LFxuICBidG5QcmltYXJ5OiB7IGJhY2tncm91bmRDb2xvcjogJyMzYjgyZjYnLCBjb2xvcjogJ3doaXRlJywgYm9yZGVyOiAnMXB4IHNvbGlkICMyNTYzZWInIH0sXG4gIGJ0blNlY29uZGFyeTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjFmNWY5JywgY29sb3I6ICcjNDc1NTY5JywgYm9yZGVyOiAnMXB4IHNvbGlkICNlMmU4ZjAnIH0sXG4gIGJ0bkFjdGl2ZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjMWQ0ZWQ4JywgY29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJzFweCBzb2xpZCAjMWU0MGFmJyB9LFxuICBidG5EYW5nZXI6IHsgYmFja2dyb3VuZENvbG9yOiAnI2ZlZTJlMicsIGNvbG9yOiAnI2RjMjYyNicsIGJvcmRlcjogJzFweCBzb2xpZCAjZmVjYWNhJyxcbiAgICBwYWRkaW5nOiAnMnB4IDdweCcsIGZvbnRTaXplOiAnMTRweCcsIGZvbnRXZWlnaHQ6ICc3MDAnLCBsaW5lSGVpZ2h0OiAnMScgfSxcbiAgYnRuRGlzYWJsZWQ6IHsgb3BhY2l0eTogMC40NSwgY3Vyc29yOiAnbm90LWFsbG93ZWQnIH0sXG4gIGlucHV0OiB7IGJvcmRlcjogJzFweCBzb2xpZCAjZTJlOGYwJywgYm9yZGVyUmFkaXVzOiAnNXB4JywgcGFkZGluZzogJzRweCA3cHgnLFxuICAgIGZvbnRTaXplOiAnMTJweCcsIHdpZHRoOiAnMTAwJScsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyB9LFxuICBzZWxlY3Q6IHsgYm9yZGVyOiAnMXB4IHNvbGlkICNlMmU4ZjAnLCBib3JkZXJSYWRpdXM6ICc1cHgnLCBwYWRkaW5nOiAnNHB4IDdweCcsXG4gICAgZm9udFNpemU6ICcxMnB4JywgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsIGN1cnNvcjogJ3BvaW50ZXInIH0sXG4gIHFOdW1TZWxlY3Q6IHsgYm9yZGVyOiAnMXB4IHNvbGlkICNlMmU4ZjAnLCBib3JkZXJSYWRpdXM6ICc1cHgnLCBwYWRkaW5nOiAnNHB4IDVweCcsXG4gICAgZm9udFNpemU6ICcxMnB4JywgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsIGN1cnNvcjogJ3BvaW50ZXInLCB3aWR0aDogJzQ4cHgnLCBmbGV4U2hyaW5rOiAwLFxuICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnIH0sXG4gIHFOdW1JbnB1dDogeyBib3JkZXI6ICcxcHggc29saWQgI2UyZThmMCcsIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICc0cHggNXB4JyxcbiAgICBmb250U2l6ZTogJzEycHgnLCB3aWR0aDogJzMycHgnLCBmbGV4U2hyaW5rOiAwLCBmb250RmFtaWx5OiAnbW9ub3NwYWNlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInIGFzIGNvbnN0LCBib3hTaXppbmc6ICdib3JkZXItYm94JyBhcyBjb25zdCB9LFxuICB0YWJsZTogeyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJywgZm9udFNpemU6ICcxMnB4JyB9LFxuICB0aDogeyBwYWRkaW5nOiAnNXB4IDZweCcsIGJhY2tncm91bmRDb2xvcjogJyNmOGZhZmMnLCBmb250V2VpZ2h0OiAnNjAwJywgY29sb3I6ICcjNjQ3NDhiJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlMmU4ZjAnLCBmb250U2l6ZTogJzExcHgnIH0sXG4gIHRkOiB7IHBhZGRpbmc6ICc0cHggNnB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNmMWY1ZjknLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9LFxuICB0clNlbGVjdGVkOiB7IGJhY2tncm91bmRDb2xvcjogJyNlMGYyZmUnIH0sICAgLy8gbGlnaHQgYmx1ZSByb3cgaGlnaGxpZ2h0XG4gIGNvb3JkQm94OiB7IGJhY2tncm91bmRDb2xvcjogJyNmOGZhZmMnLCBib3JkZXI6ICcxcHggc29saWQgI2UyZThmMCcsIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgcGFkZGluZzogJzVweCA5cHgnLCBmb250U2l6ZTogJzExcHgnLCBjb2xvcjogJyM0NzU1NjknLCBmb250RmFtaWx5OiAnbW9ub3NwYWNlJywgbWFyZ2luVG9wOiAnNXB4JyB9LFxuICByZXBvcnRCb3g6IHsgYmFja2dyb3VuZENvbG9yOiAnI2YwZmRmNCcsIGJvcmRlcjogJzFweCBzb2xpZCAjYmJmN2QwJywgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICBwYWRkaW5nOiAnMTFweCAxNHB4JywgbWFyZ2luVG9wOiAnOHB4JyB9LFxuICByZXBvcnRSb3c6IHsgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBwYWRkaW5nOiAnM3B4IDAnLCBmb250U2l6ZTogJzEycHgnIH0sXG4gIHJlcG9ydERpdmlkZXI6IHsgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNiYmY3ZDAnLCBwYWRkaW5nVG9wOiAnNnB4JywgbWFyZ2luVG9wOiAnNHB4JyB9LFxuICBlcnJvckJveDogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmVmMmYyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNmZWNhY2EnLCBib3JkZXJSYWRpdXM6ICc2cHgnLFxuICAgIHBhZGRpbmc6ICc3cHggMTFweCcsIGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnI2RjMjYyNicsIG1hcmdpbkJvdHRvbTogJzEwcHgnIH0sXG4gIHdhcm46IHsgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmJlYicsIGJvcmRlcjogJzFweCBzb2xpZCAjZmRlNjhhJywgYm9yZGVyUmFkaXVzOiAnNnB4JyxcbiAgICBwYWRkaW5nOiAnN3B4IDExcHgnLCBmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyM5MjQwMGUnLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9LFxuICBoaW50OiB7IGZvbnRTaXplOiAnMTFweCcsIGNvbG9yOiAnIzk0YTNiOCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBsaW5lSGVpZ2h0OiAnMS41JyxcbiAgICBmb250RmFtaWx5OiAnbW9ub3NwYWNlJywgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZmFmYycsIHBhZGRpbmc6ICc1cHggOHB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLCBib3JkZXI6ICcxcHggc29saWQgI2UyZThmMCcgfSxcbiAgZW50cnlUb2dnbGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc0cHgnLCBtYXJnaW5Cb3R0b206ICc2cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9LFxuICBlbnRyeVRvZ2dsZUxhYmVsOiB7IGZvbnRTaXplOiAnMTFweCcsIGNvbG9yOiAnIzY0NzQ4YicsIG1hcmdpblJpZ2h0OiAnMnB4JyB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ29tcG9uZW50IHN0YXRlIGludGVyZmFjZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmludGVyZmFjZSBTdGFydFBvaW50IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHNwYXRpYWxSZWZlcmVuY2U6IGFueSB9XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldyB8IG51bGxcbiAgbW9kdWxlc0xvYWRlZDogYm9vbGVhblxuICBpc1BpY2tpbmdTdGFydDogYm9vbGVhblxuICBzdGFydFBvaW50OiBTdGFydFBvaW50IHwgbnVsbFxuICBjb3Vyc2VzOiBUcmF2ZXJzZUNvdXJzZVtdXG4gIGJlYXJpbmdGb3JtYXQ6IEJlYXJpbmdGb3JtYXRcbiAgLyoqIE9ubHkgcmVsZXZhbnQgd2hlbiBiZWFyaW5nRm9ybWF0ID09PSAncXVhZHJhbnQnLiBUb2dnbGVzIHRoZSBiZWFyaW5nXG4gICAqICBpbnB1dCBiZXR3ZWVuIHRoZSB0cmFkaXRpb25hbCBcIk4gNDXCsDMwJyBFXCIgbGV0dGVyIG1vZGUgYW5kIHRoZSBudW1lcmljXG4gICAqICBxdWFkcmFudC1udW1iZXIgbW9kZSAoUTHigJNRNCArIERNUyBhbmdsZSkuICovXG4gIGJlYXJpbmdFbnRyeTogQmVhcmluZ0VudHJ5XG4gIGRpc3RhbmNlVW5pdDogRGlzdGFuY2VVbml0XG4gIGNsb3N1cmVSZXBvcnQ6IENsb3N1cmVSZXBvcnQgfCBudWxsXG4gIHBhcnNlRXJyb3I6IHN0cmluZyB8IG51bGxcbiAgLyoqIFJvdyBpbmRleCB0byBmb2N1cyBhZnRlciBhIHN0YXRlIHVwZGF0ZSAodXNlZCBmb3IgMTAta2V5IG5hdmlnYXRpb24pLiAqL1xuICBwZW5kaW5nRm9jdXNSb3c6IG51bWJlciB8IG51bGxcbiAgLyoqIFdoaWNoIGZpZWxkIHRvIGZvY3VzIGluIHRoZSBwZW5kaW5nIHJvdzogJ2JlYXJpbmcnIHwgJ2Rpc3RhbmNlJy4gKi9cbiAgcGVuZGluZ0ZvY3VzRmllbGQ6ICdiZWFyaW5nJyB8ICdkaXN0YW5jZScgfCBudWxsXG4gIC8qKiBJbmRleCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvdXJzZSByb3cgKG51bGwgPSBub25lKS4gKi9cbiAgc2VsZWN0ZWRDb3Vyc2VJbmRleDogbnVtYmVyIHwgbnVsbFxuICAvKiogSGV4IGNvbG9yIGZvciB0cmF2ZXJzZSBjb3Vyc2UgbGluZXMgb24gdGhlIG1hcCBhbmQgaW4gZXhwb3J0cy4gKi9cbiAgdHJhdmVyc2VDb2xvcjogc3RyaW5nXG4gIGV4cG9ydExpbmVTdHJpbmc6IGJvb2xlYW5cbiAgZXhwb3J0UG9pbnRzOiBib29sZWFuXG4gIGV4cG9ydFBvbHlnb246IGJvb2xlYW5cbiAgZXhwb3J0RmlsZU5hbWU6IHN0cmluZ1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFdpZGdldCBjb21wb25lbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jbGFzcyBUcmF2ZXJzZVdpZGdldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sIFN0YXRlPiB7XG4gIHByaXZhdGUgX0dyYXBoaWNzTGF5ZXI6IGFueSA9IG51bGxcbiAgcHJpdmF0ZSBfR3JhcGhpYzogYW55ID0gbnVsbFxuICBwcml2YXRlIF9Qb2ludDogYW55ID0gbnVsbFxuICBwcml2YXRlIF9Qb2x5bGluZTogYW55ID0gbnVsbFxuICBwcml2YXRlIF9TaW1wbGVMaW5lOiBhbnkgPSBudWxsXG4gIHByaXZhdGUgX1NpbXBsZU1hcmtlcjogYW55ID0gbnVsbFxuICBwcml2YXRlIF9UZXh0U3ltYm9sOiBhbnkgPSBudWxsXG4gIHByaXZhdGUgX3RyYXZlcnNlTGF5ZXI6IGFueSA9IG51bGxcbiAgcHJpdmF0ZSBfbGFiZWxMYXllcjogYW55ID0gbnVsbFxuICBwcml2YXRlIF9oaWdobGlnaHRMYXllcjogYW55ID0gbnVsbFxuICBwcml2YXRlIF9jbGlja0hhbmRsZTogYW55ID0gbnVsbFxuICBwcml2YXRlIF9yZWRyYXdUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbFxuXG4gIC8qKlxuICAgKiBSZWZzIGZvciBlYWNoIGNvdXJzZSByb3cncyBiZWFyaW5nIGFuZCBkaXN0YW5jZSBpbnB1dHMuXG4gICAqIEluZGV4IG1hdGNoZXMgdGhlIGNvdXJzZXMgYXJyYXkuIFBvcHVsYXRlZCBkdXJpbmcgcmVuZGVyIHZpYSBjYWxsYmFjayByZWZzLlxuICAgKi9cbiAgcHJpdmF0ZSBfYmVhcmluZ1JlZnM6IEFycmF5PEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPiA9IFtdXG4gIHByaXZhdGUgX2Rpc3RhbmNlUmVmczogQXJyYXk8SFRNTElucHV0RWxlbWVudCB8IG51bGw+ID0gW11cblxuICAvKipcbiAgICogRm9yIHF1YWRyYW50LW51bWJlciBtb2RlIHRoZSBiZWFyaW5nIGNlbGwgaXMgc3BsaXQgaW50byBhIG5hcnJvdyB0ZXh0XG4gICAqIGlucHV0IGZvciB0aGUgcXVhZHJhbnQgZGlnaXQgKDHigJM0KSBhbmQgYSB0ZXh0IGlucHV0IGZvciB0aGUgRE1TIGFuZ2xlLlxuICAgKiBfcU51bVJlZnMgICDihpIgdGhlIHF1YWRyYW50IGRpZ2l0IGZpZWxkIChmaXJzdCB0YWIgc3RvcCBpbiB0aGUgY2VsbClcbiAgICogX3FBbmdsZVJlZnMg4oaSIHRoZSBETVMgYW5nbGUgZmllbGQgKHNlY29uZCB0YWIgc3RvcCBpbiB0aGUgY2VsbClcbiAgICovXG4gIHByaXZhdGUgX3FOdW1SZWZzOiBBcnJheTxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD4gPSBbXVxuICBwcml2YXRlIF9xQW5nbGVSZWZzOiBBcnJheTxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD4gPSBbXVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGppbXVNYXBWaWV3OiBudWxsLFxuICAgICAgbW9kdWxlc0xvYWRlZDogZmFsc2UsXG4gICAgICBpc1BpY2tpbmdTdGFydDogZmFsc2UsXG4gICAgICBzdGFydFBvaW50OiBudWxsLFxuICAgICAgY291cnNlczogW3sgYmVhcmluZzogJycsIGRpc3RhbmNlOiAnJyB9XSxcbiAgICAgIGJlYXJpbmdGb3JtYXQ6IHByb3BzLmNvbmZpZz8uZGVmYXVsdEJlYXJpbmdGb3JtYXQgPz8gJ3F1YWRyYW50JyxcbiAgICAgIGJlYXJpbmdFbnRyeTogJ2xldHRlcnMnLFxuICAgICAgZGlzdGFuY2VVbml0OiBwcm9wcy5jb25maWc/LmRlZmF1bHREaXN0YW5jZVVuaXQgPz8gJ2ZlZXQnLFxuICAgICAgY2xvc3VyZVJlcG9ydDogbnVsbCxcbiAgICAgIHBhcnNlRXJyb3I6IG51bGwsXG4gICAgICBwZW5kaW5nRm9jdXNSb3c6IG51bGwsXG4gICAgICBwZW5kaW5nRm9jdXNGaWVsZDogbnVsbCxcbiAgICAgIHNlbGVjdGVkQ291cnNlSW5kZXg6IG51bGwsXG4gICAgICB0cmF2ZXJzZUNvbG9yOiAnI2RjMjYyNicsXG4gICAgICBleHBvcnRMaW5lU3RyaW5nOiB0cnVlLFxuICAgICAgZXhwb3J0UG9pbnRzOiB0cnVlLFxuICAgICAgZXhwb3J0UG9seWdvbjogdHJ1ZSxcbiAgICAgIGV4cG9ydEZpbGVOYW1lOiAndHJhdmVyc2UnXG4gICAgfVxuICAgIHRoaXMuX29uVmlld0NoYW5nZSA9IHRoaXMuX29uVmlld0NoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEZvY3VzIG1hbmFnZW1lbnRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgYWZ0ZXIgZXZlcnkgcmVuZGVyLiBJZiBhIHBlbmRpbmcgZm9jdXMgdGFyZ2V0IHdhcyBzZXQgKGUuZy4gYWZ0ZXJcbiAgICogYWRkaW5nIGEgbmV3IGNvdXJzZSByb3cgdmlhIDEwLWtleSksIHJlc29sdmUgaXQgYW5kIGNsZWFyIHRoZSBwZW5kaW5nIHN0YXRlLlxuICAgKi9cbiAgY29tcG9uZW50RGlkVXBkYXRlIChfOiBhbnksIHByZXZTdGF0ZTogU3RhdGUpIHtcbiAgICBjb25zdCB7IHBlbmRpbmdGb2N1c1JvdywgcGVuZGluZ0ZvY3VzRmllbGQsIGJlYXJpbmdGb3JtYXQsIGJlYXJpbmdFbnRyeSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgLy8gLS0tLSBGb2N1cyBtYW5hZ2VtZW50IC0tLS1cbiAgICBpZiAocGVuZGluZ0ZvY3VzUm93ICE9PSBudWxsICYmIHBlbmRpbmdGb2N1c0ZpZWxkICE9PSBudWxsKSB7XG4gICAgICAvLyBDb25zdW1lIHRoZSBwZW5kaW5nIGZvY3VzIGltbWVkaWF0ZWx5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzLlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBlbmRpbmdGb2N1c1JvdzogbnVsbCwgcGVuZGluZ0ZvY3VzRmllbGQ6IG51bGwgfSwgKCkgPT4ge1xuICAgICAgICBpZiAocGVuZGluZ0ZvY3VzRmllbGQgPT09ICdkaXN0YW5jZScpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX2Rpc3RhbmNlUmVmc1twZW5kaW5nRm9jdXNSb3chXVxuICAgICAgICAgIGlmIChlbCkgeyBlbC5mb2N1cygpOyBlbC5zZWxlY3QoKSB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gYmVhcmluZyBmaWVsZCDigJQgaW4gbnVtYmVyIG1vZGUgZm9jdXMgdGhlIHF1YWRyYW50IGRpZ2l0IGlucHV0IChmaXJzdFxuICAgICAgICAgIC8vIHN1Yi1maWVsZCksIGVsc2UgZm9jdXMgdGhlIG1haW4gYmVhcmluZyBpbnB1dFxuICAgICAgICAgIGlmIChiZWFyaW5nRm9ybWF0ID09PSAncXVhZHJhbnQnICYmIGJlYXJpbmdFbnRyeSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fcU51bVJlZnNbcGVuZGluZ0ZvY3VzUm93IV1cbiAgICAgICAgICAgIGlmIChlbCkgeyBlbC5mb2N1cygpOyBlbC5zZWxlY3QoKSB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fYmVhcmluZ1JlZnNbcGVuZGluZ0ZvY3VzUm93IV1cbiAgICAgICAgICAgIGlmIChlbCkgeyBlbC5mb2N1cygpOyBlbC5zZWxlY3QoKSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIC0tLS0gTGl2ZSByZWRyYXcgdHJpZ2dlciAtLS0tXG4gICAgLy8gU2NoZWR1bGUgYSBkZWJvdW5jZWQgbGl2ZSByZWRyYXcgd2hlbmV2ZXIgYW55dGhpbmcgdGhhdCBhZmZlY3RzIHRoZVxuICAgIC8vIGRyYXduIGdlb21ldHJ5IGNoYW5nZXMuICBXZSBza2lwIGlmIHRoZSBtYXAvbW9kdWxlcyBhcmUgbm90IHlldCByZWFkeSxcbiAgICAvLyBvciBpZiB0aGVyZSBpcyBubyBzdGFydCBwb2ludCDigJQgbm90aGluZyB1c2VmdWwgY2FuIGJlIGRyYXduIGluIHRob3NlIGNhc2VzLlxuICAgIGNvbnN0IHsgc3RhcnRQb2ludCwgY291cnNlcywgZGlzdGFuY2VVbml0LCBtb2R1bGVzTG9hZGVkLCBzZWxlY3RlZENvdXJzZUluZGV4IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBnZW9tZXRyeUNoYW5nZWQgPVxuICAgICAgcHJldlN0YXRlLmNvdXJzZXMgICAgICAgIT09IGNvdXJzZXMgICAgICAgfHxcbiAgICAgIHByZXZTdGF0ZS5zdGFydFBvaW50ICAgICE9PSBzdGFydFBvaW50ICAgIHx8XG4gICAgICBwcmV2U3RhdGUuYmVhcmluZ0Zvcm1hdCAhPT0gYmVhcmluZ0Zvcm1hdCB8fFxuICAgICAgcHJldlN0YXRlLmJlYXJpbmdFbnRyeSAgIT09IGJlYXJpbmdFbnRyeSAgfHxcbiAgICAgIHByZXZTdGF0ZS5kaXN0YW5jZVVuaXQgICE9PSBkaXN0YW5jZVVuaXRcblxuICAgIGlmIChnZW9tZXRyeUNoYW5nZWQgJiYgbW9kdWxlc0xvYWRlZCAmJiBzdGFydFBvaW50KSB7XG4gICAgICBpZiAodGhpcy5fcmVkcmF3VGltZXIgIT09IG51bGwpIGNsZWFyVGltZW91dCh0aGlzLl9yZWRyYXdUaW1lcilcbiAgICAgIHRoaXMuX3JlZHJhd1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlZHJhd1RpbWVyID0gbnVsbFxuICAgICAgICB0aGlzLl9saXZlUmVkcmF3KClcbiAgICAgICAgLy8gS2VlcCBoaWdobGlnaHQgaW4gc3luYyBhZnRlciB0aGUgZ2VvbWV0cnkgcmVkcmF3cy5cbiAgICAgICAgdGhpcy5fcmVkcmF3SGlnaGxpZ2h0KHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3Vyc2VJbmRleClcbiAgICAgIH0sIDE1MClcbiAgICB9XG5cbiAgICAvLyAtLS0tIEhpZ2hsaWdodCByZWRyYXcgb24gc2VsZWN0aW9uIGNoYW5nZSAtLS0tXG4gICAgLy8gV2hlbiBvbmx5IHRoZSBzZWxlY3RlZCByb3cgY2hhbmdlcyAobm8gZ2VvbWV0cnkgY2hhbmdlKSwgdXBkYXRlIHRoZVxuICAgIC8vIGhpZ2hsaWdodCBsYXllciBpbW1lZGlhdGVseSB3aXRob3V0IHRvdWNoaW5nIHRyYXZlcnNlL2xhYmVsIGxheWVycy5cbiAgICBpZiAocHJldlN0YXRlLnNlbGVjdGVkQ291cnNlSW5kZXggIT09IHNlbGVjdGVkQ291cnNlSW5kZXggJiYgIWdlb21ldHJ5Q2hhbmdlZCAmJiBtb2R1bGVzTG9hZGVkKSB7XG4gICAgICB0aGlzLl9yZWRyYXdIaWdobGlnaHQoc2VsZWN0ZWRDb3Vyc2VJbmRleClcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIExpZmVjeWNsZSAvIG1hcCB3aXJpbmdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fcmVkcmF3VGltZXIgIT09IG51bGwpIHsgY2xlYXJUaW1lb3V0KHRoaXMuX3JlZHJhd1RpbWVyKTsgdGhpcy5fcmVkcmF3VGltZXIgPSBudWxsIH1cbiAgICB0aGlzLl9jYW5jZWxQaWNrKClcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlld1xuICAgIGlmICh2aWV3KSB7XG4gICAgICBpZiAodGhpcy5fdHJhdmVyc2VMYXllcikgdmlldy5tYXAucmVtb3ZlKHRoaXMuX3RyYXZlcnNlTGF5ZXIpXG4gICAgICBpZiAodGhpcy5fbGFiZWxMYXllcikgdmlldy5tYXAucmVtb3ZlKHRoaXMuX2xhYmVsTGF5ZXIpXG4gICAgICBpZiAodGhpcy5faGlnaGxpZ2h0TGF5ZXIpIHZpZXcubWFwLnJlbW92ZSh0aGlzLl9oaWdobGlnaHRMYXllcilcbiAgICB9XG4gIH1cblxuICBhc3luYyBfb25WaWV3Q2hhbmdlIChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpIHtcbiAgICBpZiAoIWppbXVNYXBWaWV3KSByZXR1cm5cbiAgICB0aGlzLnNldFN0YXRlKHsgamltdU1hcFZpZXcgfSwgYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLm1vZHVsZXNMb2FkZWQpIHtcbiAgICAgICAgY29uc3QgbW9kcyA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgICAgICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJyxcbiAgICAgICAgICAnZXNyaS9HcmFwaGljJyxcbiAgICAgICAgICAnZXNyaS9nZW9tZXRyeS9Qb2ludCcsXG4gICAgICAgICAgJ2VzcmkvZ2VvbWV0cnkvUG9seWxpbmUnLFxuICAgICAgICAgICdlc3JpL3N5bWJvbHMvU2ltcGxlTGluZVN5bWJvbCcsXG4gICAgICAgICAgJ2Vzcmkvc3ltYm9scy9TaW1wbGVNYXJrZXJTeW1ib2wnLFxuICAgICAgICAgICdlc3JpL3N5bWJvbHMvVGV4dFN5bWJvbCdcbiAgICAgICAgXSlcbiAgICAgICAgdGhpcy5fR3JhcGhpY3NMYXllciA9IG1vZHNbMF1cbiAgICAgICAgdGhpcy5fR3JhcGhpYyA9IG1vZHNbMV1cbiAgICAgICAgdGhpcy5fUG9pbnQgPSBtb2RzWzJdXG4gICAgICAgIHRoaXMuX1BvbHlsaW5lID0gbW9kc1szXVxuICAgICAgICB0aGlzLl9TaW1wbGVMaW5lID0gbW9kc1s0XVxuICAgICAgICB0aGlzLl9TaW1wbGVNYXJrZXIgPSBtb2RzWzVdXG4gICAgICAgIHRoaXMuX1RleHRTeW1ib2wgPSBtb2RzWzZdXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2R1bGVzTG9hZGVkOiB0cnVlIH0sICgpID0+IHRoaXMuX2luaXRMYXllcnMoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2luaXRMYXllcnMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfaW5pdExheWVycyAoKSB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXdcbiAgICBpZiAoIXZpZXcgfHwgIXRoaXMuX0dyYXBoaWNzTGF5ZXIpIHJldHVyblxuICAgIGlmICghdGhpcy5fdHJhdmVyc2VMYXllcikge1xuICAgICAgdGhpcy5fdHJhdmVyc2VMYXllciA9IG5ldyB0aGlzLl9HcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJywgaWQ6ICd0cmF2ZXJzZS1ncmFwaGljcycgfSlcbiAgICAgIHRoaXMuX2xhYmVsTGF5ZXIgICAgPSBuZXcgdGhpcy5fR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiAnaGlkZScsIGlkOiAndHJhdmVyc2UtbGFiZWxzJyB9KVxuICAgICAgLy8gSGlnaGxpZ2h0IGxheWVyIHNpdHMgb24gdG9wIG9mIGJvdGggdHJhdmVyc2UgbGF5ZXJzIHNvIHRoZSBzZWxlY3Rpb25cbiAgICAgIC8vIGhhbG8gaXMgYWx3YXlzIHJlbmRlcmVkIGFib3ZlIHRoZSBjb3Vyc2UgbGluZXMuXG4gICAgICB0aGlzLl9oaWdobGlnaHRMYXllciA9IG5ldyB0aGlzLl9HcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6ICdoaWRlJywgaWQ6ICd0cmF2ZXJzZS1oaWdobGlnaHQnIH0pXG4gICAgICB2aWV3Lm1hcC5hZGRNYW55KFt0aGlzLl90cmF2ZXJzZUxheWVyLCB0aGlzLl9sYWJlbExheWVyLCB0aGlzLl9oaWdobGlnaHRMYXllcl0pXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQb2ludCBwaWNraW5nXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBfY2FuY2VsUGljayAoKSB7XG4gICAgaWYgKHRoaXMuX2NsaWNrSGFuZGxlKSB7IHRoaXMuX2NsaWNrSGFuZGxlLnJlbW92ZSgpOyB0aGlzLl9jbGlja0hhbmRsZSA9IG51bGwgfVxuICAgIGNvbnN0IHZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3XG4gICAgaWYgKHZpZXcpIHZpZXcuY3Vyc29yID0gJ2F1dG8nXG4gIH1cblxuICBfc3RhcnRQaWNraW5nUG9pbnQgKCkge1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3XG4gICAgaWYgKCF2aWV3KSByZXR1cm5cbiAgICB0aGlzLl9jYW5jZWxQaWNrKClcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNQaWNraW5nU3RhcnQ6IHRydWUsIHBhcnNlRXJyb3I6IG51bGwgfSlcbiAgICB2aWV3LmN1cnNvciA9ICdjcm9zc2hhaXInXG4gICAgdGhpcy5fY2xpY2tIYW5kbGUgPSB2aWV3Lm9uKCdjbGljaycsIChldnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5fY2FuY2VsUGljaygpXG4gICAgICBjb25zdCBwdCA9IGV2dC5tYXBQb2ludFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzUGlja2luZ1N0YXJ0OiBmYWxzZSxcbiAgICAgICAgc3RhcnRQb2ludDogeyB4OiBwdC54LCB5OiBwdC55LCBzcGF0aWFsUmVmZXJlbmNlOiBwdC5zcGF0aWFsUmVmZXJlbmNlIH0sXG4gICAgICAgIGNsb3N1cmVSZXBvcnQ6IG51bGwsXG4gICAgICAgIHBhcnNlRXJyb3I6IG51bGxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTGVnIG11dGF0aW9uXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBfYWRkQ291cnNlIChmb2N1c0JlYXJpbmcgPSBmYWxzZSkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldiA9PiAoe1xuICAgICAgY291cnNlczogWy4uLnByZXYuY291cnNlcywgeyBiZWFyaW5nOiAnJywgZGlzdGFuY2U6ICcnIH1dLFxuICAgICAgY2xvc3VyZVJlcG9ydDogbnVsbCxcbiAgICAgIHBlbmRpbmdGb2N1c1JvdzogZm9jdXNCZWFyaW5nID8gcHJldi5jb3Vyc2VzLmxlbmd0aCA6IG51bGwsXG4gICAgICBwZW5kaW5nRm9jdXNGaWVsZDogZm9jdXNCZWFyaW5nID8gJ2JlYXJpbmcnIDogbnVsbFxuICAgIH0pKVxuICB9XG5cbiAgX2luc2VydENvdXJzZSAoYWZ0ZXJJbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2ID0+IHtcbiAgICAgIGNvbnN0IGNvdXJzZXMgPSBbLi4ucHJldi5jb3Vyc2VzXVxuICAgICAgY291cnNlcy5zcGxpY2UoYWZ0ZXJJbmRleCArIDEsIDAsIHsgYmVhcmluZzogJycsIGRpc3RhbmNlOiAnJyB9KVxuICAgICAgY29uc3Qgc2VsID0gcHJldi5zZWxlY3RlZENvdXJzZUluZGV4XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb3Vyc2VzLFxuICAgICAgICBjbG9zdXJlUmVwb3J0OiBudWxsLFxuICAgICAgICBzZWxlY3RlZENvdXJzZUluZGV4OiBzZWwgIT09IG51bGwgJiYgc2VsID4gYWZ0ZXJJbmRleCA/IHNlbCArIDEgOiBzZWwsXG4gICAgICAgIHBlbmRpbmdGb2N1c1JvdzogYWZ0ZXJJbmRleCArIDEsXG4gICAgICAgIHBlbmRpbmdGb2N1c0ZpZWxkOiAnYmVhcmluZydcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX3JlbW92ZUNvdXJzZSAoaTogbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2ID0+IHtcbiAgICAgIGNvbnN0IHNlbCA9IHByZXYuc2VsZWN0ZWRDb3Vyc2VJbmRleFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY291cnNlczogcHJldi5jb3Vyc2VzLmZpbHRlcigoXywgaWR4KSA9PiBpZHggIT09IGkpLFxuICAgICAgICBjbG9zdXJlUmVwb3J0OiBudWxsLFxuICAgICAgICBzZWxlY3RlZENvdXJzZUluZGV4OiBzZWwgPT09IGkgPyBudWxsIDogc2VsICE9PSBudWxsICYmIHNlbCA+IGkgPyBzZWwgLSAxIDogc2VsXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF91cGRhdGVDb3Vyc2UgKGk6IG51bWJlciwgZmllbGQ6IGtleW9mIFRyYXZlcnNlQ291cnNlLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2ID0+IHtcbiAgICAgIGNvbnN0IGNvdXJzZXMgPSBbLi4ucHJldi5jb3Vyc2VzXVxuICAgICAgY291cnNlc1tpXSA9IHsgLi4uY291cnNlc1tpXSwgW2ZpZWxkXTogdmFsdWUgfVxuICAgICAgcmV0dXJuIHsgY291cnNlcywgY2xvc3VyZVJlcG9ydDogbnVsbCB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gMTAta2V5IGtleWJvYXJkIG5hdmlnYXRpb24gaGFuZGxlclxuICAvLyBDYWxsZWQgb24ga2V5ZG93biBmb3IgYW55IGNvdXJzZSBpbnB1dCAoYmVhcmluZyBvciBkaXN0YW5jZSkuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBfaGFuZGxlQ291cnNlS2V5RG93biAoXG4gICAgZXY6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBmaWVsZDogJ3F1YWRyYW50JyB8ICdiZWFyaW5nJyB8ICdkaXN0YW5jZSdcbiAgKSB7XG4gICAgY29uc3QgaXNOdW1wYWRFbnRlciA9IGV2LmNvZGUgPT09ICdOdW1wYWRFbnRlcidcbiAgICBjb25zdCBpc051bXBhZFBsdXMgID0gZXYuY29kZSA9PT0gJ051bXBhZEFkZCdcblxuICAgIC8vIE51bXBhZEVudGVyIC8gTnVtcGFkQWRkIG9uIHRoZSBkaXN0YW5jZSBmaWVsZCAobGFzdCBpbnRlcmFjdGl2ZSBjZWxsIGluXG4gICAgLy8gYSByb3cpOiBhZGQgYSBuZXcgY291cnNlIGFuZCBtb3ZlIGZvY3VzIHRvIGl0cyBiZWFyaW5nIGZpZWxkLlxuICAgIGlmICgoaXNOdW1wYWRFbnRlciB8fCBpc051bXBhZFBsdXMpICYmIGZpZWxkID09PSAnZGlzdGFuY2UnKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLl9hZGRDb3Vyc2UodHJ1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE51bXBhZEVudGVyIC8gTnVtcGFkQWRkIG9uIHRoZSBxdWFkcmFudCBkaWdpdCBmaWVsZDogYWR2YW5jZSB0byB0aGUgRE1TXG4gICAgLy8gYW5nbGUgZmllbGQgb2YgdGhlIHNhbWUgcm93LlxuICAgIGlmICgoaXNOdW1wYWRFbnRlciB8fCBpc051bXBhZFBsdXMpICYmIGZpZWxkID09PSAncXVhZHJhbnQnKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBlbCA9IHRoaXMuX3FBbmdsZVJlZnNbcm93SW5kZXhdXG4gICAgICBpZiAoZWwpIHsgZWwuZm9jdXMoKTsgZWwuc2VsZWN0KCkgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTnVtcGFkRW50ZXIgLyBOdW1wYWRBZGQgb24gYSBiZWFyaW5nIGZpZWxkOiBqdW1wIHRvIHRoZSBkaXN0YW5jZSBmaWVsZFxuICAgIC8vIG9mIHRoZSBzYW1lIHJvdyBzbyB0aGUgc3VydmV5b3IgY2FuIHN0YXkgb24gMTAta2V5LlxuICAgIGlmICgoaXNOdW1wYWRFbnRlciB8fCBpc051bXBhZFBsdXMpICYmIGZpZWxkID09PSAnYmVhcmluZycpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fZGlzdGFuY2VSZWZzW3Jvd0luZGV4XVxuICAgICAgaWYgKGVsKSB7IGVsLmZvY3VzKCk7IGVsLnNlbGVjdCgpIH1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRHJhdyAvIGNsZWFyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogTGl2ZSByZWRyYXc6IGNhbGxlZCBhdXRvbWF0aWNhbGx5IChkZWJvdW5jZWQpIGFzIHRoZSB1c2VyIGVkaXRzIGNvdXJzZXMuXG4gICAqIE9ubHkgZHJhd3MgY291cnNlcyB0aGF0IGFyZSBmdWxseSB2YWxpZCDigJQgaW5jb21wbGV0ZS9pbnZhbGlkIGNvdXJzZXMgYXJlXG4gICAqIHNpbGVudGx5IHNraXBwZWQuICBOZXZlciBzZXRzIHBhcnNlRXJyb3I7IG5ldmVyIGNvbXB1dGVzIHRoZSBjbG9zdXJlIHJlcG9ydC5cbiAgICovXG4gIF9saXZlUmVkcmF3ICgpIHtcbiAgICBjb25zdCB7IHN0YXJ0UG9pbnQsIGNvdXJzZXMsIGRpc3RhbmNlVW5pdCwgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5IH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgdmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXdcbiAgICBpZiAoIXN0YXJ0UG9pbnQgfHwgIXZpZXcgfHwgIXRoaXMuX3RyYXZlcnNlTGF5ZXIpIHJldHVyblxuXG4gICAgdGhpcy5fdHJhdmVyc2VMYXllci5yZW1vdmVBbGwoKVxuICAgIHRoaXMuX2xhYmVsTGF5ZXIucmVtb3ZlQWxsKClcblxuICAgIGNvbnN0IHNyID0gc3RhcnRQb2ludC5zcGF0aWFsUmVmZXJlbmNlXG4gICAgY29uc3QgbGluZUNvbG9yID0gaGV4VG9SZ2JhKHRoaXMuc3RhdGUudHJhdmVyc2VDb2xvcilcbiAgICBjb25zdCBjbG9zdXJlQ29sb3IgPSBbMjQ5LCAxMTUsIDIyLCAyNTVdXG5cbiAgICAvLyBXYWxrIGNvdXJzZXMsIGFjY3VtdWxhdGluZyB2YWxpZCBwb2ludHMuICBTdG9wIGluY2x1ZGluZyBhIGNvdXJzZSB0aGVcbiAgICAvLyBtb21lbnQgb25lIGZhaWxzIHRvIHBhcnNlIOKAlCBldmVyeXRoaW5nIGFmdGVyIGFuIGludmFsaWQgY291cnNlIHdvdWxkXG4gICAgLy8gaGF2ZSBhbiBpbmNvcnJlY3Qgc3RhcnQgcG9zaXRpb24uXG4gICAgY29uc3QgZHJhd25Qb2ludHM6IFRyYXZlcnNlUG9pbnRbXSA9IFt7IHg6IHN0YXJ0UG9pbnQueCwgeTogc3RhcnRQb2ludC55IH1dXG4gICAgY29uc3QgZHJhd25Db3Vyc2VJbmRpY2VzOiBudW1iZXJbXSA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdXJzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvdXJzZSA9IGNvdXJzZXNbaV1cbiAgICAgIGNvbnN0IGF6ID0gcGFyc2VCZWFyaW5nVmFsdWUoY291cnNlLmJlYXJpbmcsIGJlYXJpbmdGb3JtYXQsIGJlYXJpbmdFbnRyeSlcbiAgICAgIGNvbnN0IGRpc3QgPSBjb3Vyc2UuZGlzdGFuY2UgPyBwYXJzZUZsb2F0KGNvdXJzZS5kaXN0YW5jZSkgOiBOYU5cbiAgICAgIGlmIChheiA9PT0gbnVsbCB8fCBpc05hTihkaXN0KSB8fCBkaXN0IDw9IDApIGJyZWFrICAvLyBzdG9wIGF0IGZpcnN0IGludmFsaWRcblxuICAgICAgY29uc3QgcHJldiA9IGRyYXduUG9pbnRzW2RyYXduUG9pbnRzLmxlbmd0aCAtIDFdXG4gICAgICBkcmF3blBvaW50cy5wdXNoKGNvbXB1dGVOZXh0UG9pbnQocHJldi54LCBwcmV2LnksIGF6LCB0b01ldGVycyhjb3Vyc2UuZGlzdGFuY2UsIGRpc3RhbmNlVW5pdCkpKVxuICAgICAgZHJhd25Db3Vyc2VJbmRpY2VzLnB1c2goaSlcbiAgICB9XG5cbiAgICBpZiAoZHJhd25Qb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuICAvLyBub3RoaW5nIGRyYXdhYmxlIHlldFxuXG4gICAgLy8gRHJhdyBjb3Vyc2UgbGluZXMgYW5kIGxhYmVscy5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGRyYXduQ291cnNlSW5kaWNlcy5sZW5ndGg7IGsrKykge1xuICAgICAgY29uc3QgaSA9IGRyYXduQ291cnNlSW5kaWNlc1trXVxuICAgICAgY29uc3QgcDAgPSBkcmF3blBvaW50c1trXSwgcDEgPSBkcmF3blBvaW50c1trICsgMV1cbiAgICAgIHRoaXMuX3RyYXZlcnNlTGF5ZXIuYWRkKG5ldyB0aGlzLl9HcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyB0aGlzLl9Qb2x5bGluZSh7IHBhdGhzOiBbW1twMC54LCBwMC55XSwgW3AxLngsIHAxLnldXV0sIHNwYXRpYWxSZWZlcmVuY2U6IHNyIH0pLFxuICAgICAgICBzeW1ib2w6IG5ldyB0aGlzLl9TaW1wbGVMaW5lKHsgY29sb3I6IGxpbmVDb2xvciwgd2lkdGg6IDIsIHN0eWxlOiAnZGFzaCcgfSlcbiAgICAgIH0pKVxuICAgICAgY29uc3QgYXogPSBwYXJzZUJlYXJpbmdWYWx1ZShjb3Vyc2VzW2ldLmJlYXJpbmcsIGJlYXJpbmdGb3JtYXQsIGJlYXJpbmdFbnRyeSkhXG4gICAgICBjb25zdCBjb3Vyc2VMYWJlbCA9IGNvdXJzZXNbaV0uZGlzdGFuY2UgKyAnICcgKyBkaXN0YW5jZVVuaXQgKyAnXFxuJyArIGZvcm1hdEJlYXJpbmdMYWJlbChheiwgYmVhcmluZ0Zvcm1hdClcbiAgICAgIHRoaXMuX2xhYmVsTGF5ZXIuYWRkKG5ldyB0aGlzLl9HcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyB0aGlzLl9Qb2ludCh7IHg6IChwMC54ICsgcDEueCkgLyAyLCB5OiAocDAueSArIHAxLnkpIC8gMiwgc3BhdGlhbFJlZmVyZW5jZTogc3IgfSksXG4gICAgICAgIHN5bWJvbDogbmV3IHRoaXMuX1RleHRTeW1ib2woe1xuICAgICAgICAgIHRleHQ6IGNvdXJzZUxhYmVsLFxuICAgICAgICAgIGNvbG9yOiBsaW5lQ29sb3IsXG4gICAgICAgICAgZm9udDogeyBzaXplOiA5LCBmYW1pbHk6ICdzYW5zLXNlcmlmJyB9LFxuICAgICAgICAgIGhhbG9Db2xvcjogWzI1NSwgMjU1LCAyNTUsIDIzMF0sXG4gICAgICAgICAgaGFsb1NpemU6IDEuNSxcbiAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiAnY2VudGVyJyxcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogJ2JvdHRvbSdcbiAgICAgICAgfSlcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIENsb3N1cmUgbGluZSAocmVkIGRhc2gpIGlmIHRoZSBsYXN0IGRyYXduIHBvaW50IGRpZmZlcnMgZnJvbSB0aGUgc3RhcnQuXG4gICAgY29uc3QgZmlyc3QgPSBkcmF3blBvaW50c1swXSwgbGFzdCA9IGRyYXduUG9pbnRzW2RyYXduUG9pbnRzLmxlbmd0aCAtIDFdXG4gICAgY29uc3QgY2xvc3VyZURpc3QgPSBNYXRoLmh5cG90KGxhc3QueCAtIGZpcnN0LngsIGxhc3QueSAtIGZpcnN0LnkpXG4gICAgaWYgKGNsb3N1cmVEaXN0ID4gMC4wNSkge1xuICAgICAgdGhpcy5fdHJhdmVyc2VMYXllci5hZGQobmV3IHRoaXMuX0dyYXBoaWMoe1xuICAgICAgICBnZW9tZXRyeTogbmV3IHRoaXMuX1BvbHlsaW5lKHsgcGF0aHM6IFtbW2xhc3QueCwgbGFzdC55XSwgW2ZpcnN0LngsIGZpcnN0LnldXV0sIHNwYXRpYWxSZWZlcmVuY2U6IHNyIH0pLFxuICAgICAgICBzeW1ib2w6IG5ldyB0aGlzLl9TaW1wbGVMaW5lKHsgY29sb3I6IGNsb3N1cmVDb2xvciwgd2lkdGg6IDEuNSwgc3R5bGU6ICdkYXNoJyB9KVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gVmVydGV4IG1hcmtlcnMuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBkcmF3blBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgcHQgPSBkcmF3blBvaW50c1tqXVxuICAgICAgdGhpcy5fdHJhdmVyc2VMYXllci5hZGQobmV3IHRoaXMuX0dyYXBoaWMoe1xuICAgICAgICBnZW9tZXRyeTogbmV3IHRoaXMuX1BvaW50KHsgeDogcHQueCwgeTogcHQueSwgc3BhdGlhbFJlZmVyZW5jZTogc3IgfSksXG4gICAgICAgIHN5bWJvbDogbmV3IHRoaXMuX1NpbXBsZU1hcmtlcih7XG4gICAgICAgICAgY29sb3I6IGdldFBvaW50Q29sb3IoaiA9PT0gMCwgaiA9PT0gZHJhd25Qb2ludHMubGVuZ3RoIC0gMSwgY2xvc3VyZURpc3QpLFxuICAgICAgICAgIG91dGxpbmU6IHsgY29sb3I6IFsyNTUsIDI1NSwgMjU1LCAyNTVdLCB3aWR0aDogMS41IH0sXG4gICAgICAgICAgc2l6ZTogaiA9PT0gMCA/IDEyIDogOCxcbiAgICAgICAgICBzdHlsZTogJ2NpcmNsZSdcbiAgICAgICAgfSlcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRyYXdzIHRoZSBoaWdobGlnaHQgbGF5ZXIgZm9yIHRoZSBnaXZlbiBjb3Vyc2UgaW5kZXguXG4gICAqIFdhbGtzIHRoZSBjb3Vyc2UgY2hhaW4gZnJvbSB0aGUgc3RhcnQgcG9pbnQgdXAgdG8gYW5kIGluY2x1ZGluZyBgaW5kZXhgIHRvXG4gICAqIGZpbmQgdGhlIHNlZ21lbnQgZW5kcG9pbnRzLCB0aGVuIGRyYXdzIGEgdGhpY2sgY3lhbiBoYWxvIGxpbmUgaW50b1xuICAgKiBgX2hpZ2hsaWdodExheWVyYC4gIENsZWFycyB0aGUgbGF5ZXIgaWYgYGluZGV4YCBpcyBudWxsIG9yIHRoZSBzZWdtZW50XG4gICAqIGdlb21ldHJ5IGNhbm5vdCBiZSByZXNvbHZlZCAoZS5nLiBhbiBlYXJsaWVyIGNvdXJzZSBpcyBpbnZhbGlkKS5cbiAgICovXG4gIF9yZWRyYXdIaWdobGlnaHQgKGluZGV4OiBudW1iZXIgfCBudWxsKSB7XG4gICAgaWYgKCF0aGlzLl9oaWdobGlnaHRMYXllcikgcmV0dXJuXG4gICAgdGhpcy5faGlnaGxpZ2h0TGF5ZXIucmVtb3ZlQWxsKClcblxuICAgIGlmIChpbmRleCA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IHN0YXJ0UG9pbnQsIGNvdXJzZXMsIGRpc3RhbmNlVW5pdCwgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5IH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCFzdGFydFBvaW50KSByZXR1cm5cblxuICAgIGNvbnN0IHNyID0gc3RhcnRQb2ludC5zcGF0aWFsUmVmZXJlbmNlXG4gICAgLy8gV2FsayB0aGUgY2hhaW4gdXAgdG8gYW5kIGluY2x1ZGluZyBgaW5kZXhgLiAgQW55IHBhcnNlIGZhaWx1cmUgYmVmb3JlXG4gICAgLy8gb3IgYXQgdGhlIHRhcmdldCBjb3Vyc2UgbWVhbnMgd2UgY2Fubm90IGRyYXcgYSB2YWxpZCBzZWdtZW50LlxuICAgIGxldCBweCA9IHN0YXJ0UG9pbnQueCwgcHkgPSBzdGFydFBvaW50LnlcbiAgICBsZXQgc2VnU3RhcnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGwgPSBudWxsXG4gICAgbGV0IHNlZ0VuZDogICB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsID0gbnVsbFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXg7IGkrKykge1xuICAgICAgY29uc3QgYXogPSBwYXJzZUJlYXJpbmdWYWx1ZShjb3Vyc2VzW2ldLmJlYXJpbmcsIGJlYXJpbmdGb3JtYXQsIGJlYXJpbmdFbnRyeSlcbiAgICAgIGNvbnN0IGRpc3QgPSBjb3Vyc2VzW2ldLmRpc3RhbmNlID8gcGFyc2VGbG9hdChjb3Vyc2VzW2ldLmRpc3RhbmNlKSA6IE5hTlxuICAgICAgaWYgKGF6ID09PSBudWxsIHx8IGlzTmFOKGRpc3QpIHx8IGRpc3QgPD0gMCkgcmV0dXJuICAvLyBjaGFpbiBicm9rZW5cblxuICAgICAgY29uc3QgbnggPSBjb21wdXRlTmV4dFBvaW50KHB4LCBweSwgYXosIHRvTWV0ZXJzKGNvdXJzZXNbaV0uZGlzdGFuY2UsIGRpc3RhbmNlVW5pdCkpXG4gICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcbiAgICAgICAgc2VnU3RhcnQgPSB7IHg6IHB4LCB5OiBweSB9XG4gICAgICAgIHNlZ0VuZCAgID0gbnhcbiAgICAgIH1cbiAgICAgIHB4ID0gbngueFxuICAgICAgcHkgPSBueC55XG4gICAgfVxuXG4gICAgaWYgKCFzZWdTdGFydCB8fCAhc2VnRW5kKSByZXR1cm5cblxuICAgIC8vIE91dGVyIGhhbG8g4oCUIHdpZGVyLCBzZW1pLXRyYW5zcGFyZW50IGN5YW5cbiAgICB0aGlzLl9oaWdobGlnaHRMYXllci5hZGQobmV3IHRoaXMuX0dyYXBoaWMoe1xuICAgICAgZ2VvbWV0cnk6IG5ldyB0aGlzLl9Qb2x5bGluZSh7XG4gICAgICAgIHBhdGhzOiBbW1tzZWdTdGFydC54LCBzZWdTdGFydC55XSwgW3NlZ0VuZC54LCBzZWdFbmQueV1dXSxcbiAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogc3JcbiAgICAgIH0pLFxuICAgICAgc3ltYm9sOiBuZXcgdGhpcy5fU2ltcGxlTGluZSh7IGNvbG9yOiBbMCwgMjU1LCAyNTUsIDgwXSwgd2lkdGg6IDEwLCBzdHlsZTogJ3NvbGlkJyB9KVxuICAgIH0pKVxuICAgIC8vIElubmVyIGJyaWdodCBsaW5lIOKAlCBzb2xpZCBjeWFuIG9uIHRvcFxuICAgIHRoaXMuX2hpZ2hsaWdodExheWVyLmFkZChuZXcgdGhpcy5fR3JhcGhpYyh7XG4gICAgICBnZW9tZXRyeTogbmV3IHRoaXMuX1BvbHlsaW5lKHtcbiAgICAgICAgcGF0aHM6IFtbW3NlZ1N0YXJ0LngsIHNlZ1N0YXJ0LnldLCBbc2VnRW5kLngsIHNlZ0VuZC55XV1dLFxuICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBzclxuICAgICAgfSksXG4gICAgICBzeW1ib2w6IG5ldyB0aGlzLl9TaW1wbGVMaW5lKHsgY29sb3I6IFswLCAyMjAsIDI1NSwgMjU1XSwgd2lkdGg6IDMsIHN0eWxlOiAnc29saWQnIH0pXG4gICAgfSkpXG4gIH1cblxuICBfZHJhd1RyYXZlcnNlICgpIHtcbiAgICBjb25zdCB7IHN0YXJ0UG9pbnQsIGNvdXJzZXMsIGRpc3RhbmNlVW5pdCwgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5IH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgdmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXdcblxuICAgIGlmICghc3RhcnRQb2ludCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhcnNlRXJyb3I6ICdQaWNrIGEgc3RhcnRpbmcgcG9pbnQgb24gdGhlIG1hcCBmaXJzdC4nIH0pOyByZXR1cm5cbiAgICB9XG4gICAgaWYgKCF2aWV3IHx8ICF0aGlzLl90cmF2ZXJzZUxheWVyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGFyc2VFcnJvcjogJ01hcCBub3QgcmVhZHkuJyB9KTsgcmV0dXJuXG4gICAgfVxuICAgIGlmIChjb3Vyc2VzLmxlbmd0aCA9PT0gMCB8fCBjb3Vyc2VzLmV2ZXJ5KGwgPT4gIWwuYmVhcmluZyAmJiAhbC5kaXN0YW5jZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXJzZUVycm9yOiAnRW50ZXIgYXQgbGVhc3Qgb25lIHRyYXZlcnNlIGNvdXJzZS4nIH0pOyByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwb2ludHMgPSBidWlsZFRyYXZlcnNlUG9pbnRzKHN0YXJ0UG9pbnQueCwgc3RhcnRQb2ludC55LCBjb3Vyc2VzLCBkaXN0YW5jZVVuaXQsIGJlYXJpbmdGb3JtYXQsIGJlYXJpbmdFbnRyeSlcbiAgICBpZiAoIXBvaW50cykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhcnNlRXJyb3I6ICdDb3VsZCBub3QgcGFyc2Ugb25lIG9yIG1vcmUgY291cnNlcy4gQ2hlY2sgYmVhcmluZyBmb3JtYXQgYW5kIGRpc3RhbmNlIHZhbHVlcy4nIH0pOyByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl90cmF2ZXJzZUxheWVyLnJlbW92ZUFsbCgpXG4gICAgdGhpcy5fbGFiZWxMYXllci5yZW1vdmVBbGwoKVxuXG4gICAgY29uc3Qgc3IgPSBzdGFydFBvaW50LnNwYXRpYWxSZWZlcmVuY2VcbiAgICBjb25zdCBsaW5lQ29sb3IgPSBoZXhUb1JnYmEodGhpcy5zdGF0ZS50cmF2ZXJzZUNvbG9yKVxuICAgIGNvbnN0IGNsb3N1cmVDb2xvciA9IFsyNDksIDExNSwgMjIsIDI1NV1cbiAgICBjb25zdCBnZW9tRm9yWm9vbTogYW55W10gPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBwMCA9IHBvaW50c1tpXSwgcDEgPSBwb2ludHNbaSArIDFdXG4gICAgICBjb25zdCBsaW5lR2VvbSA9IG5ldyB0aGlzLl9Qb2x5bGluZSh7IHBhdGhzOiBbW1twMC54LCBwMC55XSwgW3AxLngsIHAxLnldXV0sIHNwYXRpYWxSZWZlcmVuY2U6IHNyIH0pXG4gICAgICB0aGlzLl90cmF2ZXJzZUxheWVyLmFkZChuZXcgdGhpcy5fR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBsaW5lR2VvbSxcbiAgICAgICAgc3ltYm9sOiBuZXcgdGhpcy5fU2ltcGxlTGluZSh7IGNvbG9yOiBsaW5lQ29sb3IsIHdpZHRoOiAyLCBzdHlsZTogJ2Rhc2gnIH0pXG4gICAgICB9KSlcbiAgICAgIGdlb21Gb3Jab29tLnB1c2gobGluZUdlb20pXG5cbiAgICAgIGNvbnN0IGF6ID0gcGFyc2VCZWFyaW5nVmFsdWUoY291cnNlc1tpXS5iZWFyaW5nLCBiZWFyaW5nRm9ybWF0LCBiZWFyaW5nRW50cnkpIVxuICAgICAgY29uc3QgY291cnNlTGFiZWwgPSBjb3Vyc2VzW2ldLmRpc3RhbmNlICsgJyAnICsgZGlzdGFuY2VVbml0ICsgJ1xcbicgKyBmb3JtYXRCZWFyaW5nTGFiZWwoYXosIGJlYXJpbmdGb3JtYXQpXG4gICAgICB0aGlzLl9sYWJlbExheWVyLmFkZChuZXcgdGhpcy5fR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgdGhpcy5fUG9pbnQoeyB4OiAocDAueCArIHAxLngpIC8gMiwgeTogKHAwLnkgKyBwMS55KSAvIDIsIHNwYXRpYWxSZWZlcmVuY2U6IHNyIH0pLFxuICAgICAgICBzeW1ib2w6IG5ldyB0aGlzLl9UZXh0U3ltYm9sKHtcbiAgICAgICAgICB0ZXh0OiBjb3Vyc2VMYWJlbCxcbiAgICAgICAgICBjb2xvcjogbGluZUNvbG9yLFxuICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogOSwgZmFtaWx5OiAnc2Fucy1zZXJpZicgfSxcbiAgICAgICAgICBoYWxvQ29sb3I6IFsyNTUsIDI1NSwgMjU1LCAyMzBdLFxuICAgICAgICAgIGhhbG9TaXplOiAxLjUsXG4gICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogJ2NlbnRlcicsXG4gICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6ICdib3R0b20nXG4gICAgICAgIH0pXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdCA9IHBvaW50c1swXSwgbGFzdCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1cbiAgICBjb25zdCBjbG9zdXJlRGlzdCA9IE1hdGguaHlwb3QobGFzdC54IC0gZmlyc3QueCwgbGFzdC55IC0gZmlyc3QueSlcbiAgICBpZiAoY2xvc3VyZURpc3QgPiAwLjA1KSB7XG4gICAgICB0aGlzLl90cmF2ZXJzZUxheWVyLmFkZChuZXcgdGhpcy5fR3JhcGhpYyh7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgdGhpcy5fUG9seWxpbmUoeyBwYXRoczogW1tbbGFzdC54LCBsYXN0LnldLCBbZmlyc3QueCwgZmlyc3QueV1dXSwgc3BhdGlhbFJlZmVyZW5jZTogc3IgfSksXG4gICAgICAgIHN5bWJvbDogbmV3IHRoaXMuX1NpbXBsZUxpbmUoeyBjb2xvcjogY2xvc3VyZUNvbG9yLCB3aWR0aDogMS41LCBzdHlsZTogJ2Rhc2gnIH0pXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgcHQgPSBwb2ludHNbal1cbiAgICAgIHRoaXMuX3RyYXZlcnNlTGF5ZXIuYWRkKG5ldyB0aGlzLl9HcmFwaGljKHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyB0aGlzLl9Qb2ludCh7IHg6IHB0LngsIHk6IHB0LnksIHNwYXRpYWxSZWZlcmVuY2U6IHNyIH0pLFxuICAgICAgICBzeW1ib2w6IG5ldyB0aGlzLl9TaW1wbGVNYXJrZXIoe1xuICAgICAgICAgIGNvbG9yOiBnZXRQb2ludENvbG9yKGogPT09IDAsIGogPT09IHBvaW50cy5sZW5ndGggLSAxLCBjbG9zdXJlRGlzdCksXG4gICAgICAgICAgb3V0bGluZTogeyBjb2xvcjogWzI1NSwgMjU1LCAyNTUsIDI1NV0sIHdpZHRoOiAxLjUgfSxcbiAgICAgICAgICBzaXplOiBqID09PSAwID8gMTIgOiA4LFxuICAgICAgICAgIHN0eWxlOiAnY2lyY2xlJ1xuICAgICAgICB9KVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgaWYgKGdlb21Gb3Jab29tLmxlbmd0aCA+IDApIHZpZXcuZ29UbyhnZW9tRm9yWm9vbSwgeyBhbmltYXRlOiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KVxuXG4gICAgLy8gUmVmcmVzaCB0aGUgc2VsZWN0aW9uIGhpZ2hsaWdodCBvbiB0b3Agb2YgdGhlIGZyZXNobHkgZHJhd24gdHJhdmVyc2UuXG4gICAgdGhpcy5fcmVkcmF3SGlnaGxpZ2h0KHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3Vyc2VJbmRleClcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zdXJlUmVwb3J0OiBjb21wdXRlQ2xvc3VyZVJlcG9ydChjb3Vyc2VzLCBkaXN0YW5jZVVuaXQsIGJlYXJpbmdGb3JtYXQsIGJlYXJpbmdFbnRyeSksIHBhcnNlRXJyb3I6IG51bGwgfSlcbiAgfVxuXG4gIF9jbGVhckFsbCAoKSB7XG4gICAgdGhpcy5fY2FuY2VsUGljaygpXG4gICAgaWYgKHRoaXMuX3RyYXZlcnNlTGF5ZXIpIHRoaXMuX3RyYXZlcnNlTGF5ZXIucmVtb3ZlQWxsKClcbiAgICBpZiAodGhpcy5fbGFiZWxMYXllcikgdGhpcy5fbGFiZWxMYXllci5yZW1vdmVBbGwoKVxuICAgIGlmICh0aGlzLl9oaWdobGlnaHRMYXllcikgdGhpcy5faGlnaGxpZ2h0TGF5ZXIucmVtb3ZlQWxsKClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJ0UG9pbnQ6IG51bGwsXG4gICAgICBjb3Vyc2VzOiBbeyBiZWFyaW5nOiAnJywgZGlzdGFuY2U6ICcnIH1dLFxuICAgICAgY2xvc3VyZVJlcG9ydDogbnVsbCxcbiAgICAgIHBhcnNlRXJyb3I6IG51bGwsXG4gICAgICBpc1BpY2tpbmdTdGFydDogZmFsc2UsXG4gICAgICBzZWxlY3RlZENvdXJzZUluZGV4OiBudWxsXG4gICAgfSlcbiAgfVxuXG4gIF9leHBvcnRHZW9KU09OICgpIHtcbiAgICBjb25zdCB7IHN0YXJ0UG9pbnQsIGNvdXJzZXMsIGRpc3RhbmNlVW5pdCwgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5LFxuICAgICAgY2xvc3VyZVJlcG9ydCwgdHJhdmVyc2VDb2xvciwgZXhwb3J0TGluZVN0cmluZywgZXhwb3J0UG9pbnRzLCBleHBvcnRQb2x5Z29uLCBleHBvcnRGaWxlTmFtZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghc3RhcnRQb2ludCkgcmV0dXJuXG5cbiAgICAvLyBXYWxrIGNvdXJzZXMsIHN0b3BwaW5nIGF0IGZpcnN0IGludmFsaWQgZW50cnkuXG4gICAgY29uc3QgcG9pbnRzOiBBcnJheTx7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+ID0gW3sgeDogc3RhcnRQb2ludC54LCB5OiBzdGFydFBvaW50LnkgfV1cbiAgICBjb25zdCB2YWxpZENvdXJzZXM6IEFycmF5PHsgYmVhcmluZzogc3RyaW5nOyBkaXN0YW5jZTogc3RyaW5nOyBhejogbnVtYmVyOyBkaXN0TTogbnVtYmVyIH0+ID0gW11cbiAgICBmb3IgKGNvbnN0IGMgb2YgY291cnNlcykge1xuICAgICAgY29uc3QgYXogPSBwYXJzZUJlYXJpbmdWYWx1ZShjLmJlYXJpbmcsIGJlYXJpbmdGb3JtYXQsIGJlYXJpbmdFbnRyeSlcbiAgICAgIGNvbnN0IGRpc3RNID0gdG9NZXRlcnMoYy5kaXN0YW5jZSwgZGlzdGFuY2VVbml0KVxuICAgICAgaWYgKGF6ID09PSBudWxsIHx8ICFjLmRpc3RhbmNlIHx8IGlzTmFOKGRpc3RNKSB8fCBkaXN0TSA8PSAwKSBicmVha1xuICAgICAgY29uc3QgbGFzdCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1cbiAgICAgIHBvaW50cy5wdXNoKGNvbXB1dGVOZXh0UG9pbnQobGFzdC54LCBsYXN0LnksIGF6LCBkaXN0TSkpXG4gICAgICB2YWxpZENvdXJzZXMucHVzaCh7IGJlYXJpbmc6IGMuYmVhcmluZywgZGlzdGFuY2U6IGMuZGlzdGFuY2UsIGF6LCBkaXN0TSB9KVxuICAgIH1cblxuICAgIGlmICh2YWxpZENvdXJzZXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgIGNvbnN0IHdnczg0ID0gcG9pbnRzLm1hcChwID0+IHdlYk1lcmNhdG9yVG9XR1M4NChwLngsIHAueSkpXG4gICAgY29uc3QgZmVhdHVyZXM6IG9iamVjdFtdID0gW11cblxuICAgIC8vIExpbmVTdHJpbmcg4oCUIGZ1bGwgdHJhdmVyc2UgcGF0aFxuICAgIGlmIChleHBvcnRMaW5lU3RyaW5nKSB7XG4gICAgICBmZWF0dXJlcy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxuICAgICAgICBnZW9tZXRyeTogeyB0eXBlOiAnTGluZVN0cmluZycsIGNvb3JkaW5hdGVzOiB3Z3M4NCB9LFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgc3Ryb2tlOiB0cmF2ZXJzZUNvbG9yLFxuICAgICAgICAgIGNvdXJzZUNvdW50OiB2YWxpZENvdXJzZXMubGVuZ3RoLFxuICAgICAgICAgIHRvdGFsRGlzdGFuY2U6IHBhcnNlRmxvYXQodmFsaWRDb3Vyc2VzLnJlZHVjZSgocywgYykgPT4gcyArIGMuZGlzdE0sIDApLnRvRml4ZWQoMykpLFxuICAgICAgICAgIGRpc3RhbmNlVW5pdCxcbiAgICAgICAgICBiZWFyaW5nRm9ybWF0XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gUG9pbnRzIOKAlCBvbmUgcGVyIHZlcnRleFxuICAgIGlmIChleHBvcnRQb2ludHMpIHtcbiAgICAgIHdnczg0LmZvckVhY2goKGNvb3JkLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0geyAnbWFya2VyLWNvbG9yJzogdHJhdmVyc2VDb2xvciwgaW5kZXg6IGksIHR5cGU6IGkgPT09IDAgPyAnc3RhcnQnIDogJ3ZlcnRleCcgfVxuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICBjb25zdCBjID0gdmFsaWRDb3Vyc2VzW2kgLSAxXVxuICAgICAgICAgIHByb3BzLmJlYXJpbmcgPSBjLmJlYXJpbmdcbiAgICAgICAgICBwcm9wcy5kaXN0YW5jZSA9IHBhcnNlRmxvYXQoYy5kaXN0YW5jZSlcbiAgICAgICAgICBwcm9wcy5kaXN0YW5jZVVuaXQgPSBkaXN0YW5jZVVuaXRcbiAgICAgICAgfVxuICAgICAgICBmZWF0dXJlcy5wdXNoKHsgdHlwZTogJ0ZlYXR1cmUnLCBnZW9tZXRyeTogeyB0eXBlOiAnUG9pbnQnLCBjb29yZGluYXRlczogY29vcmQgfSwgcHJvcGVydGllczogcHJvcHMgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gUG9seWdvblxuICAgIGlmIChleHBvcnRQb2x5Z29uICYmIHZhbGlkQ291cnNlcy5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3QgcmluZyA9IFsuLi53Z3M4NCwgd2dzODRbMF1dXG4gICAgICBjb25zdCBwb2x5UHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7IGZpbGw6IHRyYXZlcnNlQ29sb3IsICdmaWxsLW9wYWNpdHknOiAwLjIsIHN0cm9rZTogdHJhdmVyc2VDb2xvciB9XG4gICAgICBpZiAoY2xvc3VyZVJlcG9ydCkge1xuICAgICAgICBwb2x5UHJvcHMuYXJlYUFjcmVzID0gcGFyc2VGbG9hdChjbG9zdXJlUmVwb3J0LmFyZWFBY3Jlcy50b0ZpeGVkKDQpKVxuICAgICAgICBwb2x5UHJvcHMuYXJlYVNxRnQgPSBNYXRoLnJvdW5kKGNsb3N1cmVSZXBvcnQuYXJlYVNxRnQpXG4gICAgICAgIHBvbHlQcm9wcy5jbG9zdXJlRXJyb3IgPSBwYXJzZUZsb2F0KGNsb3N1cmVSZXBvcnQuY2xvc3VyZUVycm9yLnRvRml4ZWQoNCkpXG4gICAgICAgIHBvbHlQcm9wcy5wcmVjaXNpb25SYXRpbyA9IGAxOiR7Y2xvc3VyZVJlcG9ydC5wcmVjaXNpb25SYXRpby50b0xvY2FsZVN0cmluZygpfWBcbiAgICAgIH1cbiAgICAgIGZlYXR1cmVzLnB1c2goeyB0eXBlOiAnRmVhdHVyZScsIGdlb21ldHJ5OiB7IHR5cGU6ICdQb2x5Z29uJywgY29vcmRpbmF0ZXM6IFtyaW5nXSB9LCBwcm9wZXJ0aWVzOiBwb2x5UHJvcHMgfSlcbiAgICB9XG5cbiAgICBjb25zdCBnZW9qc29uID0geyB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLCBmZWF0dXJlcyB9XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShnZW9qc29uLCBudWxsLCAyKV0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBhLmhyZWYgPSB1cmxcbiAgICBhLmRvd25sb2FkID0gKGV4cG9ydEZpbGVOYW1lLnRyaW0oKSB8fCAndHJhdmVyc2UnKSArICcuZ2VvanNvbidcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpXG4gICAgYS5jbGljaygpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKVxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKVxuICB9XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFJlbmRlciBoZWxwZXJzIOKAlCBiZWFyaW5nIGNlbGxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGJlYXJpbmcgaW5wdXQgY2VsbCBmb3IgYSBzaW5nbGUgY291cnNlIHJvdy5cbiAgICpcbiAgICogSW4gcXVhZHJhbnQgKyBsZXR0ZXJzIG1vZGU6IGEgc2luZ2xlIHRleHQgaW5wdXQgYWNjZXB0aW5nIFwiTiA0NcKwMzAnIEVcIi5cbiAgICogSW4gcXVhZHJhbnQgKyBudW1iZXIgbW9kZTogIGEgbmFycm93IHRleHQgaW5wdXQgZm9yIHRoZSBxdWFkcmFudCBkaWdpdFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDHigJM0KSArIGEgdGV4dCBpbnB1dCBmb3IgdGhlIERNUyBhbmdsZSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlZCBpbnRlcm5hbGx5IGFzIFwiUTxuPnw8YW5nbGU+XCIuXG4gICAqIEluIGF6aW11dGggbW9kZTogICAgICAgICAgICBhIHNpbmdsZSBudW1lcmljLWlzaCB0ZXh0IGlucHV0LlxuICAgKi9cbiAgX3JlbmRlckJlYXJpbmdDZWxsIChjb3Vyc2U6IFRyYXZlcnNlQ291cnNlLCBpOiBudW1iZXIpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgYmVhcmluZ0Zvcm1hdCwgYmVhcmluZ0VudHJ5IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoYmVhcmluZ0Zvcm1hdCA9PT0gJ3F1YWRyYW50JyAmJiBiZWFyaW5nRW50cnkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25zdCBxTnVtICAgPSBkZWNvZGVRTnVtKGNvdXJzZS5iZWFyaW5nKVxuICAgICAgY29uc3QgcUFuZ2xlID0gZGVjb2RlUUFuZ2xlKGNvdXJzZS5iZWFyaW5nKVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgey8qIFF1YWRyYW50IGRpZ2l0IGlucHV0IOKAlCBhY2NlcHRzIDEsIDIsIDMsIG9yIDQgKi99XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5fcU51bVJlZnNbaV0gPSBlbCB9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRNb2RlPVwibnVtZXJpY1wiXG4gICAgICAgICAgICBtYXhMZW5ndGg9ezF9XG4gICAgICAgICAgICBzdHlsZT17Uy5xTnVtSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17cU51bX1cbiAgICAgICAgICAgIHRpdGxlPVwiUXVhZHJhbnQ6IDE9TkUgIDI9U0UgIDM9U1cgIDQ9TldcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJRXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiB7XG4gICAgICAgICAgICAgIC8vIEFjY2VwdCBvbmx5IGRpZ2l0cyAx4oCTNDsgc2lsZW50bHkgaWdub3JlIGFueXRoaW5nIGVsc2UuXG4gICAgICAgICAgICAgIGNvbnN0IHJhdyA9IGV2LnRhcmdldC52YWx1ZS50cmltKClcbiAgICAgICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHJhdywgMTApXG4gICAgICAgICAgICAgIGlmIChyYXcgPT09ICcnIHx8IChuID49IDEgJiYgbiA8PSA0KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1EgPSByYXcgPT09ICcnID8gMSA6IG5cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3Vyc2UoaSwgJ2JlYXJpbmcnLCBlbmNvZGVRTnVtKG5ld1EsIHFBbmdsZSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbktleURvd249e2V2ID0+IHRoaXMuX2hhbmRsZUNvdXJzZUtleURvd24oZXYsIGksICdxdWFkcmFudCcpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7LyogRE1TIGFuZ2xlIGlucHV0ICovfVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX3FBbmdsZVJlZnNbaV0gPSBlbCB9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgc3R5bGU9e3sgLi4uUy5pbnB1dCwgZmxleDogMSB9fVxuICAgICAgICAgICAgdmFsdWU9e3FBbmdsZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNDUgMzAgMDBcIlxuICAgICAgICAgICAgdGl0bGU9XCJEZWdyZWVzIG1pbnV0ZXMgc2Vjb25kcyDigJQgZS5nLiA0NSAzMCAwMFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3Vyc2UoaSwgJ2JlYXJpbmcnLCBlbmNvZGVRTnVtKHFOdW0sIGV2LnRhcmdldC52YWx1ZSkpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25LZXlEb3duPXtldiA9PiB0aGlzLl9oYW5kbGVDb3Vyc2VLZXlEb3duKGV2LCBpLCAnYmVhcmluZycpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQ6IHNpbmdsZSB0ZXh0IGlucHV0IChsZXR0ZXJzIHF1YWRyYW50IG9yIGF6aW11dGgpXG4gICAgY29uc3QgYlBsYWNlaG9sZGVyID0gYmVhcmluZ0Zvcm1hdCA9PT0gJ3F1YWRyYW50JyA/IFwiTiA0NcKwMzAnMDBcXFwiIEVcIiA6ICcwNDUuNTAwMCdcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIHJlZj17ZWwgPT4geyB0aGlzLl9iZWFyaW5nUmVmc1tpXSA9IGVsIH19XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgc3R5bGU9e1MuaW5wdXR9XG4gICAgICAgIHZhbHVlPXtjb3Vyc2UuYmVhcmluZ31cbiAgICAgICAgcGxhY2Vob2xkZXI9e2JQbGFjZWhvbGRlcn1cbiAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHRoaXMuX3VwZGF0ZUNvdXJzZShpLCAnYmVhcmluZycsIGV2LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIG9uS2V5RG93bj17ZXYgPT4gdGhpcy5faGFuZGxlQ291cnNlS2V5RG93bihldiwgaSwgJ2JlYXJpbmcnKX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBNYWluIHJlbmRlclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGppbXVNYXBWaWV3LCBtb2R1bGVzTG9hZGVkLCBpc1BpY2tpbmdTdGFydCwgc3RhcnRQb2ludCwgY291cnNlcyxcbiAgICAgIGJlYXJpbmdGb3JtYXQsIGJlYXJpbmdFbnRyeSwgZGlzdGFuY2VVbml0LCBjbG9zdXJlUmVwb3J0LCBwYXJzZUVycm9yLFxuICAgICAgc2VsZWN0ZWRDb3Vyc2VJbmRleCwgdHJhdmVyc2VDb2xvciwgZXhwb3J0TGluZVN0cmluZywgZXhwb3J0UG9pbnRzLCBleHBvcnRQb2x5Z29uIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgbWFwUmVhZHkgPSAhIWppbXVNYXBWaWV3ICYmIG1vZHVsZXNMb2FkZWRcbiAgICBjb25zdCBkcmF3biA9IGNsb3N1cmVSZXBvcnQgIT09IG51bGxcblxuICAgIC8vIEtlZXAgcmVmIGFycmF5cyBpbiBzeW5jIHdpdGggY291cnNlIGNvdW50ICh0cmltIHN0YWxlIHRhaWxzKS5cbiAgICB0aGlzLl9iZWFyaW5nUmVmcy5sZW5ndGggID0gY291cnNlcy5sZW5ndGhcbiAgICB0aGlzLl9kaXN0YW5jZVJlZnMubGVuZ3RoID0gY291cnNlcy5sZW5ndGhcbiAgICB0aGlzLl9xTnVtUmVmcy5sZW5ndGggICAgID0gY291cnNlcy5sZW5ndGhcbiAgICB0aGlzLl9xQW5nbGVSZWZzLmxlbmd0aCAgID0gY291cnNlcy5sZW5ndGhcblxuICAgIC8vIEJ1aWxkIHRoZSBmb3JtYXQgaGludCB0ZXh0LlxuICAgIGxldCBoaW50VGV4dDogc3RyaW5nXG4gICAgaWYgKGJlYXJpbmdGb3JtYXQgPT09ICdhemltdXRoJykge1xuICAgICAgaGludFRleHQgPSAnQXppbXV0aDogMDQ1LjUwMDAgICgw4oCTMzYwwrAgY2xvY2t3aXNlIGZyb20gbm9ydGgpJ1xuICAgIH0gZWxzZSBpZiAoYmVhcmluZ0VudHJ5ID09PSAnbnVtYmVyJykge1xuICAgICAgaGludFRleHQgPSAnUXVhZHJhbnQgIzogdHlwZSAx4oCTNCwgdGhlbiBlbnRlciBhbmdsZSBhcyBEIE0gUyAgKGUuZy4gNDUgMzAgMDApXFxuUTE9TkUgIFEyPVNFICBRMz1TVyAgUTQ9TlcnXG4gICAgfSBlbHNlIHtcbiAgICAgIGhpbnRUZXh0ID0gXCJRdWFkcmFudDogTiA0NcKwMzAnMDBcXFwiIEUgIG9yICBTMTIgMzAgMDBXICBvciAgTjQ1LjUwNEVcIlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtTLndyYXB9PlxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuX29uVmlld0NoYW5nZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IHN0eWxlPXtTLmhlYWRlcn0+VHJhdmVyc2UgVG9vbDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e1MuYm9keX0+XG4gICAgICAgICAgeyFqaW11TWFwVmlldyAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtTLndhcm59PkNvbm5lY3QgdGhpcyB3aWRnZXQgdG8gYSBtYXAgaW4gdGhlIHdpZGdldCBzZXR0aW5ncy48L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIFN0YXJ0aW5nIFBvaW50ICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e1Muc2VjdGlvbn0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtTLmxhYmVsfT5TdGFydGluZyBQb2ludDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBzdHlsZT17eyAuLi5TLmJ0biwgLi4uKGlzUGlja2luZ1N0YXJ0ID8gUy5idG5BY3RpdmUgOiBTLmJ0blNlY29uZGFyeSksIC4uLighbWFwUmVhZHkgPyBTLmJ0bkRpc2FibGVkIDoge30pIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshbWFwUmVhZHl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuX3N0YXJ0UGlja2luZ1BvaW50KCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpc1BpY2tpbmdTdGFydCA/ICdDbGljayBvbiBtYXDigKYnIDogc3RhcnRQb2ludCA/ICdSZS1waWNrIFN0YXJ0JyA6ICdQaWNrIFN0YXJ0IFBvaW50J31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAge3N0YXJ0UG9pbnQgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTLmNvb3JkQm94fT5cbiAgICAgICAgICAgICAgICBYOiB7c3RhcnRQb2ludC54LnRvRml4ZWQoMil9eycgICAnfVk6IHtzdGFydFBvaW50LnkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEJlYXJpbmcgRm9ybWF0ICsgVW5pdCAqL31cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLlMuc2VjdGlvbiwgLi4uUy5yb3csIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JywgZ2FwOiAnMTRweCcgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1MubGFiZWx9PkJlYXJpbmcgRm9ybWF0PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1Mucm93fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5TLmJ0biwgZmxleDogMSwgLi4uKGJlYXJpbmdGb3JtYXQgPT09ICdxdWFkcmFudCcgPyBTLmJ0blByaW1hcnkgOiBTLmJ0blNlY29uZGFyeSkgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBiZWFyaW5nRm9ybWF0OiAncXVhZHJhbnQnLCBjbG9zdXJlUmVwb3J0OiBudWxsIH0pfVxuICAgICAgICAgICAgICAgID5RdWFkcmFudDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLlMuYnRuLCBmbGV4OiAxLCAuLi4oYmVhcmluZ0Zvcm1hdCA9PT0gJ2F6aW11dGgnID8gUy5idG5QcmltYXJ5IDogUy5idG5TZWNvbmRhcnkpIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYmVhcmluZ0Zvcm1hdDogJ2F6aW11dGgnLCBjbG9zdXJlUmVwb3J0OiBudWxsIH0pfVxuICAgICAgICAgICAgICAgID5BemltdXRoPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBRdWFkcmFudCBlbnRyeSBzdWItdG9nZ2xlOiBsZXR0ZXJzIHZzLiBxdWFkcmFudCBudW1iZXIgKi99XG4gICAgICAgICAgICAgIHtiZWFyaW5nRm9ybWF0ID09PSAncXVhZHJhbnQnICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLlMuZW50cnlUb2dnbGUsIG1hcmdpblRvcDogJzZweCcgfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17Uy5lbnRyeVRvZ2dsZUxhYmVsfT5FbnRyeTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLlMuYnRuLCBwYWRkaW5nOiAnM3B4IDhweCcsIGZvbnRTaXplOiAnMTFweCcsXG4gICAgICAgICAgICAgICAgICAgICAgLi4uKGJlYXJpbmdFbnRyeSA9PT0gJ2xldHRlcnMnID8gUy5idG5QcmltYXJ5IDogUy5idG5TZWNvbmRhcnkpIH19XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRW50ZXIgYmVhcmluZyBhcyBOL1MgKyBhbmdsZSArIEUvVyAodHJhZGl0aW9uYWwpXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGJlYXJpbmdFbnRyeTogJ2xldHRlcnMnLCBjbG9zdXJlUmVwb3J0OiBudWxsIH0pfVxuICAgICAgICAgICAgICAgICAgPk4vUyBFL1c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uUy5idG4sIHBhZGRpbmc6ICczcHggOHB4JywgZm9udFNpemU6ICcxMXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAuLi4oYmVhcmluZ0VudHJ5ID09PSAnbnVtYmVyJyA/IFMuYnRuUHJpbWFyeSA6IFMuYnRuU2Vjb25kYXJ5KSB9fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVudGVyIGJlYXJpbmcgYXMgcXVhZHJhbnQgbnVtYmVyICgx4oCTNCkgKyBETVMgYW5nbGVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYmVhcmluZ0VudHJ5OiAnbnVtYmVyJywgY2xvc3VyZVJlcG9ydDogbnVsbCB9KX1cbiAgICAgICAgICAgICAgICAgID5RMeKAk1E0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Uy5sYWJlbH0+RGlzdGFuY2UgVW5pdDwvZGl2PlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgc3R5bGU9e1Muc2VsZWN0fVxuICAgICAgICAgICAgICAgIHZhbHVlPXtkaXN0YW5jZVVuaXR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHRoaXMuc2V0U3RhdGUoeyBkaXN0YW5jZVVuaXQ6IGV2LnRhcmdldC52YWx1ZSBhcyBEaXN0YW5jZVVuaXQsIGNsb3N1cmVSZXBvcnQ6IG51bGwgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVldFwiPkZlZXQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2hhaW5zXCI+Q2hhaW5zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1ldGVyc1wiPk1ldGVyczwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Uy5sYWJlbH0+Q29sb3I8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dHJhdmVyc2VDb2xvcn1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzQwcHgnLCBoZWlnaHQ6ICczMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNlMmU4ZjAnLCBib3JkZXJSYWRpdXM6ICc1cHgnLCBjdXJzb3I6ICdwb2ludGVyJywgcGFkZGluZzogJzFweCAycHgnIH19XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHRoaXMuc2V0U3RhdGUoeyB0cmF2ZXJzZUNvbG9yOiBldi50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBMZWdzIFRhYmxlICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e1Muc2VjdGlvbn0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLlMucm93LCBtYXJnaW5Cb3R0b206ICc2cHgnIH19PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17Uy5sYWJlbH0+VHJhdmVyc2UgQ291cnNlcyAoe2NvdXJzZXMubGVuZ3RofSk8L3NwYW4+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5TLmJ0biwgLi4uUy5idG5TZWNvbmRhcnksIHBhZGRpbmc6ICczcHggOXB4JywgZm9udFNpemU6ICcxMXB4JywgbWFyZ2luTGVmdDogJ2F1dG8nIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5fYWRkQ291cnNlKGZhbHNlKX1cbiAgICAgICAgICAgICAgPisgQWRkIExlZzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGFibGUgc3R5bGU9e1MudGFibGV9PlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IC4uLlMudGgsIHdpZHRoOiAnMjJweCcgfX0+IzwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e1MudGh9PlxuICAgICAgICAgICAgICAgICAgICB7YmVhcmluZ0Zvcm1hdCA9PT0gJ3F1YWRyYW50JyAmJiBiZWFyaW5nRW50cnkgPT09ICdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgICAgPyAnUSMgKyBBbmdsZSAoRCBNIFMpJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ0JlYXJpbmcnfVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyAuLi5TLnRoLCB3aWR0aDogJzc2cHgnIH19PkRpc3RhbmNlPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyAuLi5TLnRoLCB3aWR0aDogJzI2cHgnIH19PjwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtjb3Vyc2VzLm1hcCgoY291cnNlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gaSA9PT0gc2VsZWN0ZWRDb3Vyc2VJbmRleFxuICAgICAgICAgICAgICAgICAgY29uc3Qgcm93U3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSBpc1NlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgID8geyAuLi5TLnRyU2VsZWN0ZWQsIGN1cnNvcjogJ3BvaW50ZXInIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7IGN1cnNvcjogJ3BvaW50ZXInIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17cm93U3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlOiBjbGlja2luZyB0aGUgYWxyZWFkeS1zZWxlY3RlZCByb3cgZGVzZWxlY3RzIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ291cnNlSW5kZXg6IHByZXYuc2VsZWN0ZWRDb3Vyc2VJbmRleCA9PT0gaSA/IG51bGwgOiBpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IC4uLlMudGQsIGNvbG9yOiBpc1NlbGVjdGVkID8gJyMwMzY5YTEnIDogJyM5NGEzYjgnLCBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6ICcxMXB4JyB9fT57aSArIDF9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e1MudGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckJlYXJpbmdDZWxsKGNvdXJzZSwgaSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e1MudGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4geyB0aGlzLl9kaXN0YW5jZVJlZnNbaV0gPSBlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1MuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3Vyc2UuZGlzdGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiB0aGlzLl91cGRhdGVDb3Vyc2UoaSwgJ2Rpc3RhbmNlJywgZXYudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtldiA9PiB0aGlzLl9oYW5kbGVDb3Vyc2VLZXlEb3duKGV2LCBpLCAnZGlzdGFuY2UnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgLi4uUy50ZCwgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLlMuYnRuLCAuLi5TLmJ0blNlY29uZGFyeSwgcGFkZGluZzogJzJweCA2cHgnLCBmb250U2l6ZTogJzE0cHgnLCBmb250V2VpZ2h0OiAnNzAwJywgbGluZUhlaWdodDogJzEnLCBtYXJnaW5SaWdodDogJzNweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJJbnNlcnQgY291cnNlIGFmdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXYgPT4geyBldi5zdG9wUHJvcGFnYXRpb24oKTsgdGhpcy5faW5zZXJ0Q291cnNlKGkpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+KzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdXJzZXMubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5TLmJ0biwgLi4uUy5idG5EYW5nZXIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlbW92ZSBjb3Vyc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTZWxlY3RlZCkgdGhpcy5faGlnaGxpZ2h0TGF5ZXI/LnJlbW92ZUFsbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDb3Vyc2UoaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBGb3JtYXQgaGludCAqL31cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLlMuaGludCwgd2hpdGVTcGFjZTogJ3ByZS1saW5lJyB9fT57aGludFRleHR9PC9kaXY+XG5cbiAgICAgICAgICB7LyogRXJyb3IgKi99XG4gICAgICAgICAge3BhcnNlRXJyb3IgJiYgPGRpdiBzdHlsZT17Uy5lcnJvckJveH0+e3BhcnNlRXJyb3J9PC9kaXY+fVxuXG4gICAgICAgICAgey8qIEFjdGlvbnMgKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5TLnJvdywgbWFyZ2luQm90dG9tOiAnNnB4JyB9fT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uUy5idG4sIC4uLlMuYnRuUHJpbWFyeSwgZmxleDogMSwgLi4uKCFtYXBSZWFkeSB8fCAhc3RhcnRQb2ludCA/IFMuYnRuRGlzYWJsZWQgOiB7fSkgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFtYXBSZWFkeSB8fCAhc3RhcnRQb2ludH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5fZHJhd1RyYXZlcnNlKCl9XG4gICAgICAgICAgICA+e2RyYXduID8gJ1JlZHJhdyBUcmF2ZXJzZScgOiAnRHJhdyBUcmF2ZXJzZSd9PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHN0eWxlPXt7IC4uLlMuYnRuLCAuLi5TLmJ0blNlY29uZGFyeSB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLl9jbGVhckFsbCgpfVxuICAgICAgICAgICAgPkNsZWFyPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc2cHgnIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5TLmxhYmVsLCBtYXJnaW5Cb3R0b206ICc0cHgnIH19PkZpbGUgTmFtZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICc2cHgnIH19PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uUy5pbnB1dCwgZmxleDogMSB9fVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmV4cG9ydEZpbGVOYW1lfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHJhdmVyc2VcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiB0aGlzLnNldFN0YXRlKHsgZXhwb3J0RmlsZU5hbWU6IGV2LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjOTRhM2I4JywgZmxleFNocmluazogMCB9fT4uZ2VvanNvbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNnB4JyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uUy5sYWJlbCwgbWFyZ2luQm90dG9tOiAnNHB4JyB9fT5FeHBvcnQgR2VvbWV0cnk8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMnB4JywgZm9udFNpemU6ICcxMnB4JywgY29sb3I6ICcjNDc1NTY5JyB9fT5cbiAgICAgICAgICAgICAgeyhbXG4gICAgICAgICAgICAgICAgWydleHBvcnRMaW5lU3RyaW5nJywgJ0xpbmUnXSBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICBbJ2V4cG9ydFBvaW50cycsICAgICAnUG9pbnRzJ10gYXMgY29uc3QsXG4gICAgICAgICAgICAgICAgWydleHBvcnRQb2x5Z29uJywgICAgJ1BvbHlnb24nXSBhcyBjb25zdFxuICAgICAgICAgICAgICBdKS5tYXAoKFtrZXksIGxhYmVsXSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsYWJlbCBrZXk9e2tleX0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnNHB4JywgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZVtrZXldfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4gdGhpcy5zZXRTdGF0ZSh7IFtrZXldOiBldi50YXJnZXQuY2hlY2tlZCB9IGFzIGFueSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxNHB4JyB9fT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uUy5idG4sIC4uLlMuYnRuU2Vjb25kYXJ5LCB3aWR0aDogJzEwMCUnLCAuLi4oIXN0YXJ0UG9pbnQgPyBTLmJ0bkRpc2FibGVkIDoge30pIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshc3RhcnRQb2ludH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5fZXhwb3J0R2VvSlNPTigpfVxuICAgICAgICAgICAgPkV4cG9ydCBHZW9KU09OPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ2xvc3VyZSBSZXBvcnQgKi99XG4gICAgICAgICAge2Nsb3N1cmVSZXBvcnQgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Uy5yZXBvcnRCb3h9PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc2MDAnLCBmb250U2l6ZTogJzEzcHgnLCBjb2xvcjogJyMxNjY1MzQnLCBtYXJnaW5Cb3R0b206ICc4cHgnIH19PlxuICAgICAgICAgICAgICAgIENsb3N1cmUgUmVwb3J0XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTLnJlcG9ydFJvd30+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMzc0MTUxJyB9fT5Ub3RhbCBQZXJpbWV0ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcgfX0+e2Nsb3N1cmVSZXBvcnQudG90YWxEaXN0LnRvRml4ZWQoMyl9IHtkaXN0YW5jZVVuaXR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Uy5yZXBvcnRSb3d9PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzM3NDE1MScgfX0+U3VtIERlcGFydHVyZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcgfX0+e2Nsb3N1cmVSZXBvcnQuc3VtRGVwLnRvRml4ZWQoNCl9IHtkaXN0YW5jZVVuaXR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Uy5yZXBvcnRSb3d9PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzM3NDE1MScgfX0+U3VtIExhdGl0dWRlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNjAwJyB9fT57Y2xvc3VyZVJlcG9ydC5zdW1MYXQudG9GaXhlZCg0KX0ge2Rpc3RhbmNlVW5pdH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLlMucmVwb3J0Um93LCAuLi5TLnJlcG9ydERpdmlkZXIgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMzc0MTUxJyB9fT5DbG9zdXJlIEVycm9yPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc2MDAnLCBjb2xvcjogY2xvc3VyZVJlcG9ydC5jbG9zdXJlRXJyb3IgPiAwLjEgPyAnI2RjMjYyNicgOiAnIzE2NjUzNCcgfX0+XG4gICAgICAgICAgICAgICAgICB7Y2xvc3VyZVJlcG9ydC5jbG9zdXJlRXJyb3IudG9GaXhlZCg0KX0ge2Rpc3RhbmNlVW5pdH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTLnJlcG9ydFJvd30+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjMzc0MTUxJyB9fT5QcmVjaXNpb24gUmF0aW88L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcgfX0+MSA6IHtjbG9zdXJlUmVwb3J0LnByZWNpc2lvblJhdGlvLnRvTG9jYWxlU3RyaW5nKCl9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge2NvdXJzZXMubGVuZ3RoID49IDIgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uUy5yZXBvcnRSb3csIC4uLlMucmVwb3J0RGl2aWRlciB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnIzM3NDE1MScgfX0+RW5jbG9zZWQgQXJlYTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc2MDAnIH19PlxuICAgICAgICAgICAgICAgICAgICB7Y2xvc3VyZVJlcG9ydC5hcmVhQWNyZXMudG9GaXhlZCg0KX0gYWN7JyAgJ30oe01hdGgucm91bmQoY2xvc3VyZVJlcG9ydC5hcmVhU3FGdCkudG9Mb2NhbGVTdHJpbmcoKX0gc3EgZnQpXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZXJzZVdpZGdldFxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==