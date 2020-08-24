(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+WgK":
/*!**********************************!*\
  !*** ./src/app/store/history.js ***!
  \**********************************/
/*! exports provided: history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "LhCv");


const history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])();


/***/ }),

/***/ 0:
/*!***********************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8080 ./src/app/index.tsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! F:\Web\what-about-a-band-called\node_modules\webpack-dev-server\client\index.js?http://localhost:8080 */"GBRk");
module.exports = __webpack_require__(/*! F:\Web\what-about-a-band-called\src\app\index.tsx */"qgVz");


/***/ }),

/***/ "1HUD":
/*!***************************************************!*\
  !*** ./src/app/components/BandModButtonGroup.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderBandModButtonGroup = exports.BandModButtonGroup = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "q1tI"));
var ToggleButton_1 = __importDefault(__webpack_require__(/*! react-bootstrap/ToggleButton */ "hlKo"));
var ToggleButtonGroup_1 = __importDefault(__webpack_require__(/*! react-bootstrap/ToggleButtonGroup */ "QKck"));
var bs_1 = __webpack_require__(/*! react-icons/bs */ "X13+");
// TODO: Logging out will still show the BsCarrets as 'filled' if the user modified those bands
function BandModButtonGroup(_a) {
    var userIsAuthorized = _a.userIsAuthorized, modifyBand = _a.modifyBand, modPerformed = _a.modPerformed;
    var _b = react_1.useState(modPerformed), modValue = _b[0], setModValue = _b[1];
    var prevModValue = usePrevious(modValue);
    react_1.useEffect(function () {
        if (modValue == 0) {
            // TODO: This act of checking if modifyBand exists seems bad, can we do better?
            if (modifyBand)
                modifyBand(0, prevModValue);
        }
        else {
            if (modifyBand)
                modifyBand(modValue);
        }
    }, [modValue]);
    return (react_1.default.createElement(ToggleButtonGroup_1.default, { name: "modButtons", value: modValue, onChange: function (val) { return setModValue(modValue + val); } },
        react_1.default.createElement(ToggleButton_1.default, { name: "negativeButton", value: -1, disabled: !userIsAuthorized, checked: modPerformed == -1 }, modValue == -1 ? react_1.default.createElement(bs_1.BsCaretDownFill, null) : react_1.default.createElement(bs_1.BsCaretDown, null)),
        react_1.default.createElement(ToggleButton_1.default, { name: "positiveButton", value: 1, disabled: !userIsAuthorized, checked: modPerformed == 1 }, modValue == 1 ? react_1.default.createElement(bs_1.BsCaretUpFill, null) : react_1.default.createElement(bs_1.BsCaretUp, null))));
}
exports.BandModButtonGroup = BandModButtonGroup;
function usePrevious(value) {
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        ref.current = value;
    });
    return ref.current;
}
function PlaceholderBandModButtonGroup() {
    return (react_1.default.createElement(ToggleButtonGroup_1.default, { name: "placeHolderModButtons" },
        react_1.default.createElement(ToggleButton_1.default, { disabled: true, value: 1 },
            react_1.default.createElement(bs_1.BsCaretDown, null)),
        react_1.default.createElement(ToggleButton_1.default, { disabled: true, value: 2 },
            react_1.default.createElement(bs_1.BsCaretUp, null))));
}
exports.PlaceholderBandModButtonGroup = PlaceholderBandModButtonGroup;


/***/ }),

/***/ "4tJo":
/*!****************************************************!*\
  !*** ./src/app/store/slices/user-profile-slice.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileActions = void 0;
var toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "i7Pf");
var statuses_1 = __webpack_require__(/*! ../statuses */ "7Fo/");
var initialState = {
    fetchStatus: statuses_1.ProfileFetchStatuses.NOT_TRYING,
    profile: undefined,
};
var userProfileSlice = toolkit_1.createSlice({
    name: "userProfile",
    initialState: initialState,
    reducers: {
        requestFetchUserProfile: function (state, action) {
            state.fetchStatus = statuses_1.ProfileFetchStatuses.ATTEMPTING;
        },
        fetchUserProfileSuccess: function (state, action) {
            state.fetchStatus = statuses_1.ProfileFetchStatuses.SUCCESS;
            state.profile = action.payload.profile;
        },
        fetchUserProfileFailure: function (state) {
            state.fetchStatus = statuses_1.ProfileFetchStatuses.FAILURE;
            state.profile = undefined;
        },
    },
});
exports.userProfileActions = userProfileSlice.actions;
exports.default = userProfileSlice.reducer;


/***/ }),

/***/ "5ilM":
/*!*****************************************************!*\
  !*** ./src/app/components/CreateBandFormAlerts.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BandCreatedAlert = exports.UserNotLoggedInAlert = exports.BandExistsAlert = exports.NoNameAlert = exports.ErrorAlert = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
var Alert_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Alert */ "TUci"));
var react_router_bootstrap_1 = __webpack_require__(/*! react-router-bootstrap */ "+Tvs");
function ErrorAlert() {
    return (react_1.default.createElement(Alert_1.default, { variant: "warning" },
        react_1.default.createElement(Alert_1.default.Heading, null, "Uh oh..."),
        react_1.default.createElement("p", null, "Something went wrong! What did you do!? Do you have any idea how much I worked to get this place clean and then you show up and mess the whole thing up? No respect...")));
}
exports.ErrorAlert = ErrorAlert;
function NoNameAlert() {
    return (react_1.default.createElement(Alert_1.default, { variant: "warning" },
        react_1.default.createElement(Alert_1.default.Heading, null, "This MF said \u201C \u201D"),
        react_1.default.createElement("p", null, "Who are you, John Cage? \uD83D\uDE2D\uD83D\uDE2D\uD83D\uDE2D Just kidding, don't know who that is.")));
}
exports.NoNameAlert = NoNameAlert;
function BandExistsAlert() {
    return (react_1.default.createElement(Alert_1.default, { variant: "warning" },
        react_1.default.createElement(Alert_1.default.Heading, null, "Somebody already thought of that!"),
        react_1.default.createElement("p", null, "Going to have to try harder. Maybe read a very complicated book and then think of some reference to that.")));
}
exports.BandExistsAlert = BandExistsAlert;
function UserNotLoggedInAlert() {
    return (react_1.default.createElement(Alert_1.default, { variant: "warning" },
        react_1.default.createElement(Alert_1.default.Heading, null, "You've gotta be signed in!"),
        react_1.default.createElement("p", null,
            "We don't let just anyone in here. You can",
            " ",
            react_1.default.createElement(react_router_bootstrap_1.LinkContainer, { to: "/new-user" },
                react_1.default.createElement(Alert_1.default.Link, null, "make an account here")),
            ", though, if you want.")));
}
exports.UserNotLoggedInAlert = UserNotLoggedInAlert;
function BandCreatedAlert(name) {
    return (react_1.default.createElement(Alert_1.default, { variant: "success" },
        react_1.default.createElement(Alert_1.default.Heading, null,
            "\u201C",
            name,
            "\u201D submitted!"),
        react_1.default.createElement("p", null, "Now that's funny.")));
}
exports.BandCreatedAlert = BandCreatedAlert;


/***/ }),

/***/ "6pyq":
/*!***************************************************************!*\
  !*** ./src/app/components/utility/limit-sort-user-records.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortAndLimitUserRecords = void 0;
var statuses_1 = __webpack_require__(/*! ../../store/statuses */ "7Fo/");
function sortAndLimitUserRecords(records, sortBy, limit) {
    var filteredRecords = __spreadArrays(records);
    switch (sortBy) {
        case statuses_1.UserRecordSortTypes.HIGHEST_AVERAGE_SCORE:
            filteredRecords.sort(function (a, b) { return b.averageScore - a.averageScore; });
            break;
        case statuses_1.UserRecordSortTypes.HIGHEST_SCORE:
            filteredRecords.sort(function (a, b) { return b.totalScore - a.totalScore; });
            break;
        case statuses_1.UserRecordSortTypes.MOST_NAMES_CONTRIBUTED:
            filteredRecords.sort(function (a, b) { return b.namesContributed - a.namesContributed; });
    }
    filteredRecords = filteredRecords.slice(0, limit);
    return filteredRecords;
}
exports.sortAndLimitUserRecords = sortAndLimitUserRecords;


/***/ }),

/***/ "7Fo/":
/*!***********************************!*\
  !*** ./src/app/store/statuses.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreationStatuses = exports.AuthenticationStatuses = exports.ProfileFetchStatuses = exports.BandScoreModificationStatuses = exports.BandSortTypes = exports.BandCreationStatuses = exports.UserRecordSortTypes = void 0;
var UserRecordSortTypes;
(function (UserRecordSortTypes) {
    UserRecordSortTypes[UserRecordSortTypes["HIGHEST_SCORE"] = 0] = "HIGHEST_SCORE";
    UserRecordSortTypes[UserRecordSortTypes["HIGHEST_AVERAGE_SCORE"] = 1] = "HIGHEST_AVERAGE_SCORE";
    UserRecordSortTypes[UserRecordSortTypes["MOST_NAMES_CONTRIBUTED"] = 2] = "MOST_NAMES_CONTRIBUTED";
})(UserRecordSortTypes = exports.UserRecordSortTypes || (exports.UserRecordSortTypes = {}));
var BandCreationStatuses;
(function (BandCreationStatuses) {
    BandCreationStatuses[BandCreationStatuses["CREATING"] = 0] = "CREATING";
    BandCreationStatuses[BandCreationStatuses["CREATED"] = 1] = "CREATED";
    BandCreationStatuses[BandCreationStatuses["ERROR"] = 2] = "ERROR";
    BandCreationStatuses[BandCreationStatuses["BAND_EXISTS"] = 3] = "BAND_EXISTS";
    BandCreationStatuses[BandCreationStatuses["NOT_TRYING"] = 4] = "NOT_TRYING";
})(BandCreationStatuses = exports.BandCreationStatuses || (exports.BandCreationStatuses = {}));
var BandSortTypes;
(function (BandSortTypes) {
    BandSortTypes[BandSortTypes["BEST"] = 0] = "BEST";
    BandSortTypes[BandSortTypes["WORST"] = 1] = "WORST";
    BandSortTypes[BandSortTypes["MOST_RECENT"] = 2] = "MOST_RECENT";
})(BandSortTypes = exports.BandSortTypes || (exports.BandSortTypes = {}));
var BandScoreModificationStatuses;
(function (BandScoreModificationStatuses) {
    BandScoreModificationStatuses[BandScoreModificationStatuses["ATTEMPTING"] = 0] = "ATTEMPTING";
    BandScoreModificationStatuses[BandScoreModificationStatuses["SUCCESS"] = 1] = "SUCCESS";
    BandScoreModificationStatuses[BandScoreModificationStatuses["FAILURE"] = 2] = "FAILURE";
    BandScoreModificationStatuses[BandScoreModificationStatuses["NOT_TRYING"] = 3] = "NOT_TRYING";
})(BandScoreModificationStatuses = exports.BandScoreModificationStatuses || (exports.BandScoreModificationStatuses = {}));
var ProfileFetchStatuses;
(function (ProfileFetchStatuses) {
    ProfileFetchStatuses[ProfileFetchStatuses["ATTEMPTING"] = 0] = "ATTEMPTING";
    ProfileFetchStatuses[ProfileFetchStatuses["SUCCESS"] = 1] = "SUCCESS";
    ProfileFetchStatuses[ProfileFetchStatuses["FAILURE"] = 2] = "FAILURE";
    ProfileFetchStatuses[ProfileFetchStatuses["NOT_TRYING"] = 3] = "NOT_TRYING";
})(ProfileFetchStatuses = exports.ProfileFetchStatuses || (exports.ProfileFetchStatuses = {}));
var AuthenticationStatuses;
(function (AuthenticationStatuses) {
    AuthenticationStatuses[AuthenticationStatuses["AUTHENTICATING"] = 0] = "AUTHENTICATING";
    AuthenticationStatuses[AuthenticationStatuses["AUTHENTICATED"] = 1] = "AUTHENTICATED";
    AuthenticationStatuses[AuthenticationStatuses["NOT_AUTHENTICATED"] = 2] = "NOT_AUTHENTICATED";
    AuthenticationStatuses[AuthenticationStatuses["NOT_TRYING"] = 3] = "NOT_TRYING";
    AuthenticationStatuses[AuthenticationStatuses["SERVER_ERROR"] = 4] = "SERVER_ERROR";
    AuthenticationStatuses[AuthenticationStatuses["USERNAME_NOT_FOUND"] = 5] = "USERNAME_NOT_FOUND";
    AuthenticationStatuses[AuthenticationStatuses["INVALID_PASSWORD"] = 6] = "INVALID_PASSWORD";
    AuthenticationStatuses[AuthenticationStatuses["LOGGING_OUT"] = 7] = "LOGGING_OUT";
})(AuthenticationStatuses = exports.AuthenticationStatuses || (exports.AuthenticationStatuses = {}));
var UserCreationStatuses;
(function (UserCreationStatuses) {
    UserCreationStatuses[UserCreationStatuses["PROCESSING"] = 0] = "PROCESSING";
    UserCreationStatuses[UserCreationStatuses["PASSWORDS_DONT_MATCH"] = 1] = "PASSWORDS_DONT_MATCH";
    UserCreationStatuses[UserCreationStatuses["USERNAME_TAKEN"] = 2] = "USERNAME_TAKEN";
    UserCreationStatuses[UserCreationStatuses["NOT_TRYING"] = 3] = "NOT_TRYING";
    UserCreationStatuses[UserCreationStatuses["SERVER_ERROR"] = 4] = "SERVER_ERROR";
    UserCreationStatuses[UserCreationStatuses["SUCCESS"] = 5] = "SUCCESS";
    UserCreationStatuses[UserCreationStatuses["EMPTY_FIELDS"] = 6] = "EMPTY_FIELDS";
    UserCreationStatuses[UserCreationStatuses["INVALID_EMAIL"] = 7] = "INVALID_EMAIL";
    UserCreationStatuses[UserCreationStatuses["EMAIL_TAKEN"] = 8] = "EMAIL_TAKEN";
})(UserCreationStatuses = exports.UserCreationStatuses || (exports.UserCreationStatuses = {}));


/***/ }),

/***/ "7Zh8":
/*!***************************************************!*\
  !*** ./src/app/store/sagas/band-creation-saga.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandCreationSaga = void 0;
var effects_1 = __webpack_require__(/*! redux-saga/effects */ "5rFJ");
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "vDqi"));
var paths = __importStar(__webpack_require__(/*! ../../../server/paths */ "VYM/"));
var bands_slice_1 = __webpack_require__(/*! ../slices/bands-slice */ "Xep1");
function bandCreationSaga() {
    var payload, creatingUserId, bandName, creatingUsername, requestBody, response, newBand, error_1, reason;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (false) {}
                return [4 /*yield*/, effects_1.take(bands_slice_1.bandActions.requestCreateBand.type)];
            case 1:
                payload = (_a.sent()).payload;
                creatingUserId = payload.creatingUserId, bandName = payload.bandName, creatingUsername = payload.creatingUsername;
                requestBody = {
                    bandName: bandName,
                    ownerId: creatingUserId,
                    ownerName: creatingUsername,
                };
                _a.label = 2;
            case 2:
                _a.trys.push([2, 6, , 8]);
                return [4 /*yield*/, effects_1.call(axios_1.default.post, paths.serverUrl + paths.newBand, requestBody)];
            case 3:
                response = _a.sent();
                if (!(response.status == 200)) return [3 /*break*/, 5];
                newBand = response.data.newBand;
                return [4 /*yield*/, effects_1.put(bands_slice_1.bandActions.createBandSuccess(newBand))];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5: return [3 /*break*/, 8];
            case 6:
                error_1 = _a.sent();
                reason = error_1.response.data.reason;
                return [4 /*yield*/, effects_1.put(bands_slice_1.bandActions.createBandFailure(reason))];
            case 7:
                _a.sent();
                return [3 /*break*/, 8];
            case 8: return [3 /*break*/, 0];
            case 9: return [2 /*return*/];
        }
    });
}
exports.bandCreationSaga = bandCreationSaga;


/***/ }),

/***/ "7hBq":
/*!*******************************************!*\
  !*** ./src/app/components/Navigation.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "q1tI"));
var Nav_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Nav */ "+YzT"));
var Navbar_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Navbar */ "6ctO"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var react_router_bootstrap_1 = __webpack_require__(/*! react-router-bootstrap */ "+Tvs");
var session_slice_1 = __webpack_require__(/*! ../store/slices/session-slice */ "fqsA");
function Navigation() {
    var _a = react_redux_1.useSelector(function (state) { return state.session; }), authenticationStatus = _a.authenticationStatus, username = _a.username;
    var dispatch = react_redux_1.useDispatch();
    function logout() {
        dispatch(session_slice_1.sessionActions.requestLogout());
    }
    function checkSession() {
        dispatch(session_slice_1.sessionActions.requestCheckSession());
    }
    react_1.useEffect(function () {
        if (authenticationStatus == statuses_1.AuthenticationStatuses.NOT_TRYING)
            checkSession();
    }, []);
    return (react_1.default.createElement(Navbar_1.default, { bg: "light", className: "mb-3" },
        react_1.default.createElement(react_router_bootstrap_1.LinkContainer, { to: "/" },
            react_1.default.createElement(Navbar_1.default.Brand, null, "wababc?")),
        authenticationStatus == statuses_1.AuthenticationStatuses.AUTHENTICATED ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Nav_1.default.Item, null,
                "Signed in as ",
                username),
            react_1.default.createElement(Nav_1.default.Link, { onClick: function () { return logout(); } }, "Logout"))) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_router_bootstrap_1.LinkContainer, { to: "/login" },
                react_1.default.createElement(Nav_1.default.Link, null, "Login")),
            react_1.default.createElement(react_router_bootstrap_1.LinkContainer, { to: "/new-user" },
                react_1.default.createElement(Nav_1.default.Link, null, "Create Account"))))));
}
exports.Navigation = Navigation;


/***/ }),

/***/ "AEI1":
/*!***********************************************!*\
  !*** ./src/app/components/CreateBandForm.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBandForm = void 0;
// import PropTypes from "prop-types";
var react_1 = __importStar(__webpack_require__(/*! react */ "q1tI"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var bands_slice_1 = __webpack_require__(/*! ../store/slices/bands-slice */ "Xep1");
var InputGroup_1 = __importDefault(__webpack_require__(/*! react-bootstrap/InputGroup */ "zUrK"));
var FormControl_1 = __importDefault(__webpack_require__(/*! react-bootstrap/FormControl */ "jDKy"));
var Button_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Button */ "cWnB"));
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var statuses_2 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var Spinner_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Spinner */ "T/rR"));
var CreateBandFormAlerts_1 = __webpack_require__(/*! ./CreateBandFormAlerts */ "5ilM");
var CreationAlert;
(function (CreationAlert) {
    CreationAlert[CreationAlert["Error"] = 0] = "Error";
    CreationAlert[CreationAlert["NoName"] = 1] = "NoName";
    CreationAlert[CreationAlert["BandExists"] = 2] = "BandExists";
    CreationAlert[CreationAlert["BandCreated"] = 3] = "BandCreated";
    CreationAlert[CreationAlert["NotLoggedIn"] = 4] = "NotLoggedIn";
})(CreationAlert || (CreationAlert = {}));
function CreateBandForm() {
    var _a = react_redux_1.useSelector(function (state) { return state; }), _b = _a.session, authenticationStatus = _b.authenticationStatus, userId = _b.userId, username = _b.username, bandCreationStatus = _a.bands.creationStatus;
    var _c = react_1.useState(""), bandName = _c[0], setBandName = _c[1];
    var _d = react_1.useState(""), createdName = _d[0], setCreatedName = _d[1];
    var _e = react_1.useState(undefined), alert = _e[0], setAlert = _e[1];
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        switch (bandCreationStatus) {
            case statuses_2.BandCreationStatuses.BAND_EXISTS:
                setAlert(CreationAlert.BandExists);
                return;
            case statuses_2.BandCreationStatuses.ERROR:
                setAlert(CreationAlert.Error);
                return;
            case statuses_2.BandCreationStatuses.CREATED:
                setCreatedName(bandName);
                setBandName("");
                setAlert(CreationAlert.BandCreated);
                return;
        }
    }, [bandCreationStatus]);
    function handleSubmit() {
        if (authenticationStatus == statuses_1.AuthenticationStatuses.AUTHENTICATED) {
            if (bandName == "") {
                setAlert(CreationAlert.NoName);
            }
            else {
                dispatch(bands_slice_1.bandActions.requestCreateBand({
                    creatingUserId: userId,
                    bandName: bandName,
                    creatingUsername: username,
                }));
            }
        }
        else {
            setAlert(CreationAlert.NotLoggedIn);
        }
    }
    function DisplayAlert(_a) {
        var alert = _a.alert;
        switch (alert) {
            case undefined:
                return null;
            case CreationAlert.BandCreated:
                return CreateBandFormAlerts_1.BandCreatedAlert(createdName);
            case CreationAlert.BandExists:
                return CreateBandFormAlerts_1.BandExistsAlert();
            case CreationAlert.Error:
                return CreateBandFormAlerts_1.ErrorAlert();
            case CreationAlert.NoName:
                return CreateBandFormAlerts_1.NoNameAlert();
            case CreationAlert.NotLoggedIn:
                return CreateBandFormAlerts_1.UserNotLoggedInAlert();
            default:
                return null;
        }
    }
    function handleNameChange(e) {
        setBandName(e.target.value);
    }
    return (react_1.default.createElement("div", { className: "mb-3" },
        react_1.default.createElement(InputGroup_1.default, { size: "lg" },
            react_1.default.createElement(FormControl_1.default, { type: "text", placeholder: "What about a band called...", onChange: function (e) { return handleNameChange(e); }, value: bandName }),
            react_1.default.createElement(InputGroup_1.default.Append, null, bandCreationStatus == statuses_2.BandCreationStatuses.CREATING ? (react_1.default.createElement(Button_1.default, { variant: "primary", disabled: true },
                react_1.default.createElement(Spinner_1.default, { as: "span", animation: "border", size: "sm", role: "status", "aria-hidden": "true" }))) : (react_1.default.createElement(Button_1.default, { variant: "primary", onClick: function () { return handleSubmit(); } }, "Submit")))),
        react_1.default.createElement(DisplayAlert, { alert: alert })));
}
exports.CreateBandForm = CreateBandForm;


/***/ }),

/***/ "EP/U":
/*!********************************************!*\
  !*** ./src/app/store/sagas/logout-saga.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutSaga = void 0;
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "vDqi"));
var effects_1 = __webpack_require__(/*! redux-saga/effects */ "5rFJ");
var paths = __importStar(__webpack_require__(/*! ../../../server/paths */ "VYM/"));
var session_slice_1 = __webpack_require__(/*! ../slices/session-slice */ "fqsA");
function logoutSaga() {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (false) {}
                return [4 /*yield*/, effects_1.take(session_slice_1.sessionActions.requestLogout.type)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 5, , 7]);
                return [4 /*yield*/, effects_1.call(axios_1.default.delete, paths.serverUrl + paths.sessionEndpoint, { withCredentials: true })];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.put(session_slice_1.sessionActions.logoutSuccess())];
            case 4:
                _a.sent();
                return [3 /*break*/, 7];
            case 5:
                err_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(session_slice_1.sessionActions.logoutFailure())];
            case 6:
                _a.sent();
                return [3 /*break*/, 7];
            case 7: return [3 /*break*/, 0];
            case 8: return [2 /*return*/];
        }
    });
}
exports.logoutSaga = logoutSaga;


/***/ }),

/***/ "KiFf":
/*!******************************************************!*\
  !*** ./src/app/components/utility/get-time-since.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeSince = void 0;
var msInMinute = 60000;
var msInHour = msInMinute * 60;
var msInDay = msInHour * 24;
var msInYear = msInDay * 365;
function getTimeSince(date) {
    var elapsedTime = Date.now() - date.getTime();
    if (elapsedTime < msInMinute) {
        return "1m";
    }
    if (elapsedTime < msInHour) {
        var numOfMinutes = Math.floor(elapsedTime / msInMinute);
        return numOfMinutes + "m";
    }
    if (elapsedTime < msInDay) {
        var numOfHours = Math.floor(elapsedTime / msInHour);
        var numOfMinutes = Math.floor((elapsedTime % msInHour) / msInMinute);
        var string_1 = numOfHours + "h";
        if (numOfMinutes > 0)
            string_1 += " " + numOfMinutes + "m";
        return string_1;
    }
    if (elapsedTime < msInYear) {
        var numOfDays_1 = Math.floor(elapsedTime / msInDay);
        return numOfDays_1 + "d";
    }
    var numOfYears = Math.floor(elapsedTime / msInYear);
    var numOfDays = Math.floor((elapsedTime % msInYear) / msInDay);
    var string = numOfYears + "y";
    if (numOfDays > 0)
        string += " " + numOfDays + "d";
    return string;
}
exports.getTimeSince = getTimeSince;


/***/ }),

/***/ "NL3p":
/*!*******************************************************!*\
  !*** ./src/app/store/sagas/watch-fetch-bands-saga.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBands = exports.watchFetchBandsSaga = void 0;
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "vDqi"));
var effects_1 = __webpack_require__(/*! redux-saga/effects */ "5rFJ");
var paths = __importStar(__webpack_require__(/*! ../../../server/paths */ "VYM/"));
var bands_slice_1 = __webpack_require__(/*! ../slices/bands-slice */ "Xep1");
function watchFetchBandsSaga() {
    var fetchBandsChannel, payload, maxBands, sortBy;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.actionChannel(bands_slice_1.bandActions.requestFetchBands.type)];
            case 1:
                fetchBandsChannel = _a.sent();
                _a.label = 2;
            case 2:
                if (false) {}
                return [4 /*yield*/, effects_1.take(fetchBandsChannel)];
            case 3:
                payload = (_a.sent()).payload;
                maxBands = payload.maxBands, sortBy = payload.sortBy;
                return [4 /*yield*/, effects_1.call(fetchBands, maxBands, sortBy)];
            case 4:
                _a.sent();
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}
exports.watchFetchBandsSaga = watchFetchBandsSaga;
function fetchBands(maxBands, sortBy) {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(axios_1.default.post, paths.serverUrl + paths.postBands, {
                        maxBands: maxBands,
                        sortBy: sortBy,
                    })];
            case 1:
                response = _a.sent();
                if (response.status != 200)
                    throw new Error();
                return [4 /*yield*/, effects_1.put(bands_slice_1.bandActions.fetchBandsSuccess(response.data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(bands_slice_1.bandActions.fetchBandsFailure())];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
exports.fetchBands = fetchBands;


/***/ }),

/***/ "O5yZ":
/*!*********************************************************!*\
  !*** ./src/app/store/sagas/user-authentication-saga.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthenticationSaga = void 0;
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "vDqi"));
var effects_1 = __webpack_require__(/*! redux-saga/effects */ "5rFJ");
var paths = __importStar(__webpack_require__(/*! ../../../server/paths */ "VYM/"));
var session_slice_1 = __webpack_require__(/*! ../slices/session-slice */ "fqsA");
function userAuthenticationSaga() {
    var payload, username, password, response, _a, userId, bandsModified, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (false) {}
                return [4 /*yield*/, effects_1.take(session_slice_1.sessionActions.requestAuthenticateUser.type)];
            case 1:
                payload = (_b.sent()).payload;
                username = payload.username, password = payload.password;
                _b.label = 2;
            case 2:
                _b.trys.push([2, 6, , 10]);
                return [4 /*yield*/, effects_1.call(axios_1.default.post, paths.serverUrl + paths.authenticate, {
                        username: username,
                        password: password,
                    }, { withCredentials: true })];
            case 3:
                response = _b.sent();
                _a = response.data, userId = _a.userId, bandsModified = _a.bandsModified;
                if (!(response.status == 200)) return [3 /*break*/, 5];
                return [4 /*yield*/, effects_1.put(session_slice_1.sessionActions.authenticateUserSuccess({
                        userId: userId,
                        username: username,
                        bandsModified: bandsModified,
                    }))];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5: return [3 /*break*/, 10];
            case 6:
                err_1 = _b.sent();
                if (!err_1.response) return [3 /*break*/, 8];
                return [4 /*yield*/, effects_1.put(session_slice_1.sessionActions.authenticateUserFailure({
                        reason: err_1.response.data.reason,
                    }))];
            case 7:
                _b.sent();
                return [3 /*break*/, 9];
            case 8:
                console.error(err_1);
                _b.label = 9;
            case 9: return [3 /*break*/, 10];
            case 10: return [3 /*break*/, 0];
            case 11: return [2 /*return*/];
        }
    });
}
exports.userAuthenticationSaga = userAuthenticationSaga;


/***/ }),

/***/ "PVq7":
/*!********************************************!*\
  !*** ./src/app/components/UserProfile.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "q1tI"));
var Card_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Card */ "6xyR"));
var Col_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Col */ "JI6e"));
var Badge_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Badge */ "65eO"));
var Container_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Container */ "7vrA"));
var Table_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Table */ "MBJH"));
var Row_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Row */ "3Z9Z"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var get_time_since_1 = __webpack_require__(/*! ../components/utility/get-time-since */ "KiFf");
var user_profile_slice_1 = __webpack_require__(/*! ../store/slices/user-profile-slice */ "4tJo");
function UserProfile(_a) {
    var userId = _a.userId;
    var profile = react_redux_1.useSelector(function (state) { return state.userProfile; }).profile;
    var dispatch = react_redux_1.useDispatch();
    function fetchProfile() {
        dispatch(user_profile_slice_1.userProfileActions.requestFetchUserProfile({ targetId: userId }));
    }
    react_1.useEffect(function () {
        fetchProfile();
    });
    return (react_1.default.createElement(Container_1.default, { className: "mb-5" },
        react_1.default.createElement(Card_1.default, null, profile ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Card_1.default.Header, null,
                react_1.default.createElement("h5", null, profile.name)),
            react_1.default.createElement(Card_1.default.Body, null,
                react_1.default.createElement(Card_1.default, null,
                    react_1.default.createElement(Card_1.default.Body, null,
                        react_1.default.createElement(Row_1.default, null,
                            react_1.default.createElement(Col_1.default, { md: 4 },
                                react_1.default.createElement("div", null,
                                    "Total score: ",
                                    react_1.default.createElement("b", null, profile.totalScore)),
                                react_1.default.createElement("div", null,
                                    "Average score: ",
                                    react_1.default.createElement("b", null, profile.averageScore.toFixed(2))),
                                react_1.default.createElement("div", null,
                                    "Names contributed: ",
                                    react_1.default.createElement("b", null, profile.namesContributed))),
                            react_1.default.createElement(Col_1.default, { md: 8 },
                                react_1.default.createElement(Table_1.default, { size: "sm", striped: true, bordered: true },
                                    react_1.default.createElement("tbody", null, profile.bands.map(function (band) { return (react_1.default.createElement("tr", { key: String(band._id) },
                                        react_1.default.createElement("td", null,
                                            react_1.default.createElement(Badge_1.default, { variant: "secondary" }, band.score),
                                            " ",
                                            react_1.default.createElement("b", null, band.name),
                                            " (created",
                                            " ",
                                            get_time_since_1.getTimeSince(new Date(band.createdOn)),
                                            " ago)"))); })))))))))) : (react_1.default.createElement("p", null, "Loading")))));
}
exports.UserProfile = UserProfile;


/***/ }),

/***/ "U6Ra":
/*!********************************************************!*\
  !*** ./src/app/store/sagas/fetch-user-records-saga.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserRecords = exports.watchFetchUserRecordsSaga = void 0;
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "vDqi"));
var effects_1 = __webpack_require__(/*! redux-saga/effects */ "5rFJ");
var paths = __importStar(__webpack_require__(/*! ../../../server/paths */ "VYM/"));
var user_records_slice_1 = __webpack_require__(/*! ../slices/user-records-slice */ "tIUU");
function watchFetchUserRecordsSaga() {
    var fetchUserRecordsChannel, payload, numOfRecords, sortType;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.actionChannel(user_records_slice_1.userRecordsActions.requestFetchUserRecords.type)];
            case 1:
                fetchUserRecordsChannel = _a.sent();
                _a.label = 2;
            case 2:
                if (false) {}
                return [4 /*yield*/, effects_1.take(fetchUserRecordsChannel)];
            case 3:
                payload = (_a.sent()).payload;
                numOfRecords = payload.numOfRecords, sortType = payload.sortType;
                return [4 /*yield*/, effects_1.call(fetchUserRecords, numOfRecords, sortType)];
            case 4:
                _a.sent();
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}
exports.watchFetchUserRecordsSaga = watchFetchUserRecordsSaga;
function fetchUserRecords(maxRecords, sortBy) {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(axios_1.default.post, paths.serverUrl + paths.getUserRecords, { numOfRecords: maxRecords, sortType: sortBy })];
            case 1:
                response = _a.sent();
                if (response.status != 200)
                    throw new Error();
                return [4 /*yield*/, effects_1.put(user_records_slice_1.userRecordsActions.fetchUserRecordsSuccess(response.data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(user_records_slice_1.userRecordsActions.fetchUserRecordsFailure())];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
exports.fetchUserRecords = fetchUserRecords;


/***/ }),

/***/ "UpH7":
/*!*************************************************************!*\
  !*** ./src/app/store/sagas/band-score-modification-saga.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandScoreModificationSaga = void 0;
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "vDqi"));
var effects_1 = __webpack_require__(/*! redux-saga/effects */ "5rFJ");
var paths = __importStar(__webpack_require__(/*! ../../../server/paths */ "VYM/"));
var bands_slice_1 = __webpack_require__(/*! ../slices/bands-slice */ "Xep1");
// TODO: This doesn't work right on the database side!
function bandScoreModificationSaga() {
    var payload, targetBandId, modifyingUserId, modificationValue, response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (false) {}
                return [4 /*yield*/, effects_1.take(bands_slice_1.bandActions.requestModifyBandScore.type)];
            case 1:
                payload = (_a.sent()).payload;
                targetBandId = payload.targetBandId, modifyingUserId = payload.modifyingUserId, modificationValue = payload.modificationValue;
                _a.label = 2;
            case 2:
                _a.trys.push([2, 8, , 10]);
                return [4 /*yield*/, effects_1.call(axios_1.default.post, paths.serverUrl + paths.modifyBand, {
                        targetBandId: targetBandId,
                        modifyingUserId: modifyingUserId,
                        modificationValue: modificationValue,
                    })];
            case 3:
                response = _a.sent();
                if (response.status != 200)
                    throw new Error();
                if (!(modificationValue == 0)) return [3 /*break*/, 5];
                return [4 /*yield*/, effects_1.put(bands_slice_1.bandActions.modifyBandScoreSuccess({
                        targetBandId: targetBandId,
                        modificationValue: -payload.undoValue,
                    }))];
            case 4:
                _a.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, effects_1.put(bands_slice_1.bandActions.modifyBandScoreSuccess({
                    targetBandId: targetBandId,
                    modificationValue: modificationValue,
                }))];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [3 /*break*/, 10];
            case 8:
                error_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(bands_slice_1.bandActions.modifyBandScoreFailure())];
            case 9:
                _a.sent();
                return [3 /*break*/, 10];
            case 10: return [3 /*break*/, 0];
            case 11: return [2 /*return*/];
        }
    });
}
exports.bandScoreModificationSaga = bandScoreModificationSaga;


/***/ }),

/***/ "VYM/":
/*!*****************************!*\
  !*** ./src/server/paths.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetUserProfileUrl = exports.getUserProfileEndpoint = exports.sessionEndpoint = exports.getUserRecords = exports.getUsername = exports.createUser = exports.newBand = exports.modifyBand = exports.postBands = exports.authenticate = exports.serverUrl = void 0;
exports.serverUrl =  false ? undefined : "http://localhost:7777";
exports.authenticate = "/api/authenticate";
exports.postBands = "/api/bands";
exports.modifyBand = "/api/band/modify";
exports.newBand = "/api/band/new";
exports.createUser = "/api/create-user";
exports.getUsername = "/api/usernames/get";
exports.getUserRecords = "/api/users/get";
exports.sessionEndpoint = "/api/session";
var getUserProfileBase = "/api/user-profile";
exports.getUserProfileEndpoint = getUserProfileBase + "/:userId";
function createGetUserProfileUrl(targetUserId /*: MongooseTypes.ObjectId*/) {
    return getUserProfileBase + "/" + targetUserId /*.toHexString*/;
}
exports.createGetUserProfileUrl = createGetUserProfileUrl;


/***/ }),

/***/ "XCa7":
/*!***************************************************!*\
  !*** ./src/app/store/sagas/check-session-saga.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSessionSaga = void 0;
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "vDqi"));
var effects_1 = __webpack_require__(/*! redux-saga/effects */ "5rFJ");
var paths = __importStar(__webpack_require__(/*! ../../../server/paths */ "VYM/"));
var session_slice_1 = __webpack_require__(/*! ../slices/session-slice */ "fqsA");
function checkSessionSaga() {
    var response, _a, userId, username, bandsModified, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (false) {}
                return [4 /*yield*/, effects_1.take(session_slice_1.sessionActions.requestCheckSession.type)];
            case 1:
                _c.sent();
                _c.label = 2;
            case 2:
                _c.trys.push([2, 8, , 10]);
                return [4 /*yield*/, effects_1.call(axios_1.default.get, paths.serverUrl + paths.sessionEndpoint, { withCredentials: true })];
            case 3:
                response = _c.sent();
                if (!(response.status == 200)) return [3 /*break*/, 5];
                _a = response.data, userId = _a.userId, username = _a.username, bandsModified = _a.bandsModified;
                return [4 /*yield*/, effects_1.put(session_slice_1.sessionActions.checkSessionSuccess({
                        userId: userId,
                        username: username,
                        bandsModified: bandsModified,
                    }))];
            case 4:
                _c.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, effects_1.put(session_slice_1.sessionActions.checkSessionFailure())];
            case 6:
                _c.sent();
                _c.label = 7;
            case 7: return [3 /*break*/, 10];
            case 8:
                _b = _c.sent();
                return [4 /*yield*/, effects_1.put(session_slice_1.sessionActions.checkSessionFailure())];
            case 9:
                _c.sent();
                return [3 /*break*/, 10];
            case 10: return [3 /*break*/, 0];
            case 11: return [2 /*return*/];
        }
    });
}
exports.checkSessionSaga = checkSessionSaga;


/***/ }),

/***/ "Xep1":
/*!*********************************************!*\
  !*** ./src/app/store/slices/bands-slice.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bandActions = void 0;
var toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "i7Pf");
var statuses_1 = __webpack_require__(/*! ../statuses */ "7Fo/");
var initialState = {
    pendingFetches: 0,
    items: [],
    creationStatus: statuses_1.BandCreationStatuses.NOT_TRYING,
    scoreModificationState: {
        status: statuses_1.BandScoreModificationStatuses.NOT_TRYING,
    },
};
var bandsSlice = toolkit_1.createSlice({
    name: "bands",
    initialState: initialState,
    reducers: {
        // Band fetching
        requestFetchBands: function (state, action) {
            state.pendingFetches++;
        },
        fetchBandsSuccess: function (state, action) {
            action.payload.forEach(function (newBand) {
                if (!state.items.some(function (band) { return band._id == newBand._id; }))
                    state.items.push(newBand);
            });
            state.pendingFetches--;
        },
        fetchBandsFailure: function (state) {
            state.pendingFetches--;
        },
        // Band creation
        requestCreateBand: function (state, action) {
            state.creationStatus = statuses_1.BandCreationStatuses.CREATING;
        },
        createBandSuccess: function (state, action) {
            // console.log("okay whayts up")
            state.creationStatus = statuses_1.BandCreationStatuses.CREATED;
            state.items.push(action.payload);
        },
        createBandFailure: function (state, action) {
            state.creationStatus = action.payload;
        },
        // Modify band score
        requestModifyBandScore: function (state, action) {
            state.scoreModificationState.status =
                statuses_1.BandScoreModificationStatuses.ATTEMPTING;
            state.scoreModificationState.target = action.payload.targetBandId;
        },
        modifyBandScoreSuccess: function (state, action) {
            var targetBandIndex = state.items.findIndex(function (band) { return band._id === action.payload.targetBandId; });
            state.items[targetBandIndex].score += action.payload.modificationValue;
            state.scoreModificationState.status =
                statuses_1.BandScoreModificationStatuses.SUCCESS;
        },
        modifyBandScoreFailure: function (state) {
            // TODO: Shouldn't we be getting a reason for the failure here?
            state.scoreModificationState.status =
                statuses_1.BandScoreModificationStatuses.FAILURE;
            state.scoreModificationState.target = undefined;
        },
    },
});
exports.bandActions = bandsSlice.actions;
exports.default = bandsSlice.reducer;


/***/ }),

/***/ "YZbJ":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.useTypedSelector = void 0;
var redux_1 = __webpack_require__(/*! redux */ "ANjH");
var redux_saga_1 = __importDefault(__webpack_require__(/*! redux-saga */ "rRWa"));
var toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "i7Pf");
var bands_slice_1 = __importDefault(__webpack_require__(/*! ./slices/bands-slice */ "Xep1"));
var session_slice_1 = __importDefault(__webpack_require__(/*! ./slices/session-slice */ "fqsA"));
var user_records_slice_1 = __importDefault(__webpack_require__(/*! ./slices/user-records-slice */ "tIUU"));
var user_profile_slice_1 = __importDefault(__webpack_require__(/*! ./slices/user-profile-slice */ "4tJo"));
var sagas = __importStar(__webpack_require__(/*! ./sagas */ "uHhB"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var sagaMiddleware = redux_saga_1.default();
var middleware = __spreadArrays(toolkit_1.getDefaultMiddleware({ thunk: false }), [sagaMiddleware]);
var rootReducer = redux_1.combineReducers({
    bands: bands_slice_1.default,
    session: session_slice_1.default,
    userRecords: user_records_slice_1.default,
    userProfile: user_profile_slice_1.default,
});
exports.useTypedSelector = react_redux_1.useSelector;
exports.store = toolkit_1.configureStore({
    reducer: rootReducer,
    middleware: middleware,
});
for (var saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}


/***/ }),

/***/ "bU5+":
/*!***************************************************!*\
  !*** ./src/app/store/sagas/user-creation-saga.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreationSaga = void 0;
var effects_1 = __webpack_require__(/*! redux-saga/effects */ "5rFJ");
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "vDqi"));
var paths = __importStar(__webpack_require__(/*! ../../../server/paths */ "VYM/"));
var session_slice_1 = __webpack_require__(/*! ../slices/session-slice */ "fqsA");
var statuses_1 = __webpack_require__(/*! ../statuses */ "7Fo/");
function userCreationSaga() {
    var payload, username, password, repeatPassword, response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (false) {}
                return [4 /*yield*/, effects_1.take(session_slice_1.sessionActions.requestCreateUser.type)];
            case 1:
                payload = (_a.sent()).payload;
                username = payload.username, password = payload.password, repeatPassword = payload.repeatPassword;
                if (!(password !== repeatPassword)) return [3 /*break*/, 3];
                return [4 /*yield*/, effects_1.put(session_slice_1.sessionActions.createUserFailure({
                        reason: statuses_1.UserCreationStatuses.PASSWORDS_DONT_MATCH,
                    }))];
            case 2:
                _a.sent();
                return [3 /*break*/, 9];
            case 3:
                _a.trys.push([3, 7, , 9]);
                return [4 /*yield*/, effects_1.call(axios_1.default.post, paths.serverUrl + paths.createUser, {
                        username: username,
                        password: password,
                    })];
            case 4:
                response = _a.sent();
                if (!(response.status == 200)) return [3 /*break*/, 6];
                return [4 /*yield*/, effects_1.put(session_slice_1.sessionActions.createUserSuccess())];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6: return [3 /*break*/, 9];
            case 7:
                error_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(session_slice_1.sessionActions.createUserFailure({
                        reason: error_1.response.data.reason,
                    }))];
            case 8:
                _a.sent();
                return [3 /*break*/, 9];
            case 9: return [3 /*break*/, 0];
            case 10: return [2 /*return*/];
        }
    });
}
exports.userCreationSaga = userCreationSaga;
function emailIsValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


/***/ }),

/***/ "f7N+":
/*!********************************************************!*\
  !*** ./src/app/store/sagas/fetch-user-profile-saga.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProfileSaga = void 0;
var effects_1 = __webpack_require__(/*! redux-saga/effects */ "5rFJ");
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "vDqi"));
var paths = __importStar(__webpack_require__(/*! ../../../server/paths */ "VYM/"));
var user_profile_slice_1 = __webpack_require__(/*! ../slices/user-profile-slice */ "4tJo");
var paths_1 = __webpack_require__(/*! ../../../server/paths */ "VYM/");
function fetchProfileSaga() {
    var payload, targetId, response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (false) {}
                return [4 /*yield*/, effects_1.take(user_profile_slice_1.userProfileActions.requestFetchUserProfile.type)];
            case 1:
                payload = (_a.sent()).payload;
                targetId = payload.targetId;
                _a.label = 2;
            case 2:
                _a.trys.push([2, 8, , 10]);
                return [4 /*yield*/, effects_1.call(axios_1.default.get, paths.serverUrl + paths_1.createGetUserProfileUrl(targetId))];
            case 3:
                response = _a.sent();
                if (!(response.status == 200)) return [3 /*break*/, 5];
                return [4 /*yield*/, effects_1.put(user_profile_slice_1.userProfileActions.fetchUserProfileSuccess({
                        profile: response.data.profile,
                    }))];
            case 4:
                _a.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, effects_1.put(user_profile_slice_1.userProfileActions.fetchUserProfileFailure())];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [3 /*break*/, 10];
            case 8:
                err_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(user_profile_slice_1.userProfileActions.fetchUserProfileFailure())];
            case 9:
                _a.sent();
                return [3 /*break*/, 10];
            case 10: return [3 /*break*/, 0];
            case 11: return [2 /*return*/];
        }
    });
}
exports.fetchProfileSaga = fetchProfileSaga;


/***/ }),

/***/ "fqsA":
/*!***********************************************!*\
  !*** ./src/app/store/slices/session-slice.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionActions = void 0;
var toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "i7Pf");
var statuses_1 = __webpack_require__(/*! ../statuses */ "7Fo/");
var bands_slice_1 = __webpack_require__(/*! ./bands-slice */ "Xep1");
var initialState = {
    authenticationStatus: statuses_1.AuthenticationStatuses.NOT_TRYING,
    userId: undefined,
    username: undefined,
    userCreationStatus: statuses_1.UserCreationStatuses.NOT_TRYING,
    bandsModified: [],
};
var sessionSlice = toolkit_1.createSlice({
    name: "session",
    initialState: initialState,
    reducers: {
        // Session checking
        requestCheckSession: function (state) {
            state.authenticationStatus = statuses_1.AuthenticationStatuses.AUTHENTICATING;
        },
        checkSessionSuccess: function (state, action) {
            state.authenticationStatus = statuses_1.AuthenticationStatuses.AUTHENTICATED;
            state.userId = action.payload.userId;
            state.username = action.payload.username;
            state.bandsModified = action.payload.bandsModified;
        },
        checkSessionFailure: function (state) {
            state.authenticationStatus = statuses_1.AuthenticationStatuses.NOT_TRYING;
        },
        // User authentication
        requestAuthenticateUser: function (state, action) {
            state.authenticationStatus = statuses_1.AuthenticationStatuses.AUTHENTICATING;
        },
        authenticateUserSuccess: function (state, action) {
            state.authenticationStatus = statuses_1.AuthenticationStatuses.AUTHENTICATED;
            state.userId = action.payload.userId;
            state.username = action.payload.username;
            state.bandsModified = action.payload.bandsModified;
        },
        authenticateUserFailure: function (state, action) {
            state.authenticationStatus = action.payload.reason;
            // TODO: Is it necessary to reset this to null here?
            state.userId = undefined;
        },
        // User logout
        requestLogout: function (state) {
            state.authenticationStatus = statuses_1.AuthenticationStatuses.LOGGING_OUT;
        },
        logoutFailure: function (state) {
            state.authenticationStatus = statuses_1.AuthenticationStatuses.SERVER_ERROR;
        },
        logoutSuccess: function (state) {
            state = initialState;
        },
        // User creation
        requestCreateUser: function (state, action) {
            state.userCreationStatus = statuses_1.UserCreationStatuses.PROCESSING;
        },
        createUserSuccess: function (state) {
            state.userCreationStatus = statuses_1.UserCreationStatuses.SUCCESS;
        },
        createUserFailure: function (state, action) {
            state.userCreationStatus = action.payload.reason;
        },
    },
    extraReducers: (_a = {},
        // Band modification
        _a[bands_slice_1.bandActions.modifyBandScoreSuccess.type] = function (state, action) {
            state.bandsModified.push({
                targetBandId: action.payload.targetBandId,
                value: action.payload.modificationValue,
            });
        },
        _a),
});
exports.sessionActions = sessionSlice.actions;
exports.default = sessionSlice.reducer;


/***/ }),

/***/ "g6pE":
/*!*************************************!*\
  !*** ./src/app/components/Main.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "55Ip");
var store_1 = __webpack_require__(/*! ../store */ "YZbJ");
var history_1 = __webpack_require__(/*! ../store/history */ "+WgK");
var BigBandTable_1 = __webpack_require__(/*! ./BigBandTable */ "t+eW");
var Landing_1 = __webpack_require__(/*! ./Landing */ "mUFl");
var Login_1 = __webpack_require__(/*! ./Login */ "mlUh");
var Navigation_1 = __webpack_require__(/*! ./Navigation */ "7hBq");
var NewUserForm_1 = __webpack_require__(/*! ./NewUserForm */ "w4Fm");
var UserProfile_1 = __webpack_require__(/*! ./UserProfile */ "PVq7");
// const AuthenticationGuard = (Component) => ({ match }) => {
//   if (
//     store.getState().session.authenticationStatus !==
//     AuthenticationStatuses.AUTHENTICATED
//   ) {
//     return <Redirect to="/" />;
//   }
//   return <Component match={match} />;
// };
exports.Main = function () { return (
// TODO: What is the Router's "history" all about?
react_1.default.createElement(react_router_dom_1.Router, { history: history_1.history },
    react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
        react_1.default.createElement("div", null,
            react_1.default.createElement(Navigation_1.Navigation, null),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/bands", component: BigBandTable_1.BigBandTable }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: Login_1.LoginForm }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/new-user", component: NewUserForm_1.NewUserForm }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Landing_1.Landing }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/users/:userId", component: function (_a) {
                    var match = _a.match;
                    return react_1.default.createElement(UserProfile_1.UserProfile, { userId: match.params.userId });
                } }))))); };


/***/ }),

/***/ "i3Xp":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "dZZH"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "i3Xp";

/***/ }),

/***/ "mUFl":
/*!****************************************!*\
  !*** ./src/app/components/Landing.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Landing = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
var CreateBandForm_1 = __webpack_require__(/*! ./CreateBandForm */ "AEI1");
var BigBandTable_1 = __webpack_require__(/*! ./BigBandTable */ "t+eW");
var Container_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Container */ "7vrA"));
var Row_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Row */ "3Z9Z"));
var Col_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Col */ "JI6e"));
var Card_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Card */ "6xyR"));
var UserRecordsList_1 = __webpack_require__(/*! ./UserRecordsList */ "u/DC");
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
function Landing() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Container_1.default, null,
            react_1.default.createElement(Row_1.default, { className: "mb-5" },
                react_1.default.createElement(Col_1.default, { md: 8, className: "mb-3" },
                    react_1.default.createElement(CreateBandForm_1.CreateBandForm, null),
                    react_1.default.createElement(BigBandTable_1.BigBandTable, null)),
                react_1.default.createElement(Col_1.default, { md: 4 },
                    react_1.default.createElement(Card_1.default, { className: "mb-3" },
                        react_1.default.createElement(Card_1.default.Header, null,
                            react_1.default.createElement("h5", null, "Most Names Contributed")),
                        react_1.default.createElement(Card_1.default.Body, null,
                            react_1.default.createElement(UserRecordsList_1.UserRecordsList, { maxRecords: 10, sortType: statuses_1.UserRecordSortTypes.MOST_NAMES_CONTRIBUTED }))),
                    react_1.default.createElement(Card_1.default, { className: "mb-3" },
                        react_1.default.createElement(Card_1.default.Header, null,
                            react_1.default.createElement("h5", null, "Highest Average Score")),
                        react_1.default.createElement(Card_1.default.Body, null,
                            react_1.default.createElement(UserRecordsList_1.UserRecordsList, { maxRecords: 10, sortType: statuses_1.UserRecordSortTypes.HIGHEST_AVERAGE_SCORE }))),
                    react_1.default.createElement(Card_1.default, { className: "mb-3" },
                        react_1.default.createElement(Card_1.default.Header, null,
                            react_1.default.createElement("h5", null, "Highest Score")),
                        react_1.default.createElement(Card_1.default.Body, null,
                            react_1.default.createElement(UserRecordsList_1.UserRecordsList, { maxRecords: 10, sortType: statuses_1.UserRecordSortTypes.HIGHEST_SCORE }))))))));
}
exports.Landing = Landing;


/***/ }),

/***/ "mlUh":
/*!**************************************!*\
  !*** ./src/app/components/Login.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginForm = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "q1tI"));
var Alert_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Alert */ "TUci"));
var Button_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Button */ "cWnB"));
var Card_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Card */ "6xyR"));
var Container_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Container */ "7vrA"));
var Form_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Form */ "QojX"));
var Spinner_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Spinner */ "T/rR"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var session_slice_1 = __webpack_require__(/*! ../store/slices/session-slice */ "fqsA");
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
function LoginForm() {
    var authenticationStatus = react_redux_1.useSelector(function (state) { return state.session.authenticationStatus; });
    var _a = react_1.useState(""), username = _a[0], setUsername = _a[1];
    var _b = react_1.useState(""), password = _b[0], setPassword = _b[1];
    var dispatch = react_redux_1.useDispatch();
    function handleSubmit() {
        dispatch(session_slice_1.sessionActions.requestAuthenticateUser({ username: username, password: password }));
    }
    return (react_1.default.createElement(Container_1.default, null,
        react_1.default.createElement(Card_1.default, { style: { maxWidth: "36rem" }, className: "mx-auto" },
            react_1.default.createElement(Card_1.default.Body, null,
                react_1.default.createElement(Form_1.default, null,
                    react_1.default.createElement(Form_1.default.Group, { controlId: "formBasicUsername" },
                        react_1.default.createElement(Form_1.default.Label, null, "Username"),
                        react_1.default.createElement(Form_1.default.Control, { type: "text", isInvalid: authenticationStatus ==
                                statuses_1.AuthenticationStatuses.USERNAME_NOT_FOUND, onChange: function (e) { return setUsername(e.target.value); } }),
                        react_1.default.createElement(Form_1.default.Text, { className: "text-muted" },
                            "New user? Create an account ",
                            react_1.default.createElement("a", { href: "/new-user" }, "here"),
                            "."),
                        react_1.default.createElement(Form_1.default.Control.Feedback, { type: "invalid" }, "Please enter a valid username.")),
                    react_1.default.createElement(Form_1.default.Group, { controlId: "formBasicPassword" },
                        react_1.default.createElement(Form_1.default.Label, null, "Password"),
                        react_1.default.createElement(Form_1.default.Control, { type: "password", isInvalid: authenticationStatus ==
                                statuses_1.AuthenticationStatuses.INVALID_PASSWORD, onChange: function (e) { return setPassword(e.target.value); } }),
                        react_1.default.createElement(Form_1.default.Control.Feedback, { type: "invalid" }, "Incorrect password.")),
                    react_1.default.createElement(Button_1.default, { variant: "primary", type: "button", disabled: authenticationStatus == statuses_1.AuthenticationStatuses.AUTHENTICATING ||
                            authenticationStatus == statuses_1.AuthenticationStatuses.AUTHENTICATED, onClick: function () { return handleSubmit(); } }, "Submit"),
                    authenticationStatus == statuses_1.AuthenticationStatuses.AUTHENTICATING && (react_1.default.createElement(Alert_1.default, { variant: "info" },
                        react_1.default.createElement(Spinner_1.default, { animation: "border", variant: "primary" }),
                        " Processing...")),
                    authenticationStatus == statuses_1.AuthenticationStatuses.AUTHENTICATED && (react_1.default.createElement(Alert_1.default, { variant: "success" }, "Successfully logged in!")))))));
}
exports.LoginForm = LoginForm;


/***/ }),

/***/ "n7of":
/*!***************************************************************!*\
  !*** ./src/app/components/utility/create-user-profile-url.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserProfileUrl = void 0;
function createUserProfileUrl(userId) {
    return "/users/" + userId;
}
exports.createUserProfileUrl = createUserProfileUrl;


/***/ }),

/***/ "qgVz":
/*!***************************!*\
  !*** ./src/app/index.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "i8i4"));
var Main_1 = __webpack_require__(/*! ./components/Main */ "g6pE");
__webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "q4sD");
react_dom_1.default.render(react_1.default.createElement(Main_1.Main, null), document.getElementById("app"));


/***/ }),

/***/ "t+eW":
/*!*********************************************!*\
  !*** ./src/app/components/BigBandTable.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigBandTable = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "q1tI"));
var Badge_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Badge */ "65eO"));
var Button_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Button */ "cWnB"));
var ButtonGroup_1 = __importDefault(__webpack_require__(/*! react-bootstrap/ButtonGroup */ "pJDg"));
var Card_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Card */ "6xyR"));
var Spinner_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Spinner */ "T/rR"));
var Table_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Table */ "MBJH"));
var ToggleButton_1 = __importDefault(__webpack_require__(/*! react-bootstrap/ToggleButton */ "hlKo"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "55Ip");
var store_1 = __webpack_require__(/*! ../store/ */ "YZbJ");
var bands_slice_1 = __webpack_require__(/*! ../store/slices/bands-slice */ "Xep1");
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var BandModButtonGroup_1 = __webpack_require__(/*! ./BandModButtonGroup */ "1HUD");
var create_user_profile_url_1 = __webpack_require__(/*! ./utility/create-user-profile-url */ "n7of");
var limit_sort_bands_1 = __webpack_require__(/*! ./utility/limit-sort-bands */ "vpfB");
function BigBandTable() {
    var appIsFetchingBands = store_1.useTypedSelector(function (state) { return state.bands.pendingFetches > 0; });
    var bands = store_1.useTypedSelector(function (state) { return __spreadArrays(state.bands.items); });
    var userIsAuthenticated = store_1.useTypedSelector(function (state) {
        return state.session.authenticationStatus == statuses_1.AuthenticationStatuses.AUTHENTICATED;
    });
    var userId = store_1.useTypedSelector(function (state) { return state.session.userId; });
    var usersModifications = store_1.useTypedSelector(function (state) { return state.session.bandsModified; });
    var _a = react_1.useState(statuses_1.BandSortTypes.MOST_RECENT), sortType = _a[0], setSortType = _a[1];
    var _b = react_1.useState(false), shouldFetchBands = _b[0], setShouldFetchBands = _b[1];
    var bandsPerFetch = 20;
    var _c = react_1.useState(bandsPerFetch), maxBandsDisplayed = _c[0], setMaxBandsDisplayed = _c[1];
    var dispatch = react_redux_1.useDispatch();
    function addPointsTo(targetBandId, modificationValue, modifyingUserId, undoValue) {
        if (modifyingUserId) {
            dispatch(bands_slice_1.bandActions.requestModifyBandScore({
                targetBandId: targetBandId,
                modifyingUserId: modifyingUserId,
                modificationValue: modificationValue,
                undoValue: undoValue,
            }));
        }
    }
    function requestFetchBands() {
        dispatch(bands_slice_1.bandActions.requestFetchBands({
            maxBands: maxBandsDisplayed,
            sortBy: sortType,
        }));
    }
    function getUserModificationToBand(thisBandId) {
        var modification = usersModifications.find(function (modification) { return modification.targetBandId === thisBandId; });
        if (modification)
            return modification.value;
        else
            return 0;
    }
    react_1.useEffect(function () {
        requestFetchBands();
    }, []);
    react_1.useEffect(function () {
        requestFetchBands();
        setShouldFetchBands(false);
    }, [maxBandsDisplayed, shouldFetchBands]);
    react_1.useEffect(function () {
        setMaxBandsDisplayed(bandsPerFetch);
        setShouldFetchBands(true);
    }, [sortType]);
    var desiredBands = limit_sort_bands_1.sortAndLimitBands(bands, sortType, maxBandsDisplayed);
    var sortRadios = [
        { value: statuses_1.BandSortTypes.BEST, name: "Best" },
        { value: statuses_1.BandSortTypes.WORST, name: "Worst" },
        { value: statuses_1.BandSortTypes.MOST_RECENT, name: "Most Recent" },
    ];
    return (react_1.default.createElement(Card_1.default, null,
        react_1.default.createElement(Card_1.default.Header, null,
            react_1.default.createElement(ButtonGroup_1.default, { toggle: true }, sortRadios.map(function (radio, idx) { return (react_1.default.createElement(ToggleButton_1.default, { key: idx, type: "radio", value: radio.value, name: "sortRadio", checked: radio.value === sortType, onChange: function (e) {
                    e.preventDefault();
                    var currentTarget = e.currentTarget;
                    var sortTypeAsNumber = parseInt(currentTarget.value);
                    setSortType(sortTypeAsNumber);
                } }, radio.name)); }))),
        react_1.default.createElement(Card_1.default.Body, null,
            react_1.default.createElement(Table_1.default, { size: "sm", striped: true, bordered: true },
                react_1.default.createElement("tbody", null, appIsFetchingBands ? (react_1.default.createElement(react_1.default.Fragment, null, getEntryPlaceholders(bandsPerFetch))) : (react_1.default.createElement(react_1.default.Fragment, null, desiredBands.map(function (band) { return (react_1.default.createElement("tr", { key: String(band._id) },
                    react_1.default.createElement("td", null,
                        react_1.default.createElement(BandModButtonGroup_1.BandModButtonGroup, { userIsAuthorized: userIsAuthenticated, modPerformed: getUserModificationToBand(band._id), modifyBand: function (modValue, undoValue) {
                                return addPointsTo(band._id, modValue, userId, undoValue);
                            } }),
                        " ",
                        react_1.default.createElement(Badge_1.default, { variant: "secondary" }, band.score),
                        " ",
                        band.name,
                        " ",
                        react_1.default.createElement("span", { className: "font-weight-lighter" },
                            "from",
                            " ",
                            react_1.default.createElement(react_router_dom_1.Link, { to: create_user_profile_url_1.createUserProfileUrl(String(band.ownerId)) }, band.ownerName))))); }))))),
            react_1.default.createElement(Button_1.default, { variant: "secondary", block: true, onClick: function () {
                    return setMaxBandsDisplayed(maxBandsDisplayed + bandsPerFetch);
                } }, "Show me more..."))));
}
exports.BigBandTable = BigBandTable;
function getEntryPlaceholders(numOfPlaceholders) {
    var placeholders = [];
    for (var i = 0; i < numOfPlaceholders; i++) {
        placeholders.push(BandTableEntryPlaceholder());
    }
    return placeholders;
}
function BandTableEntryPlaceholder() {
    return (react_1.default.createElement("tr", null,
        react_1.default.createElement("td", null,
            react_1.default.createElement(BandModButtonGroup_1.PlaceholderBandModButtonGroup, null),
            " ",
            react_1.default.createElement(Spinner_1.default, { animation: "border", variant: "primary", size: "sm" }))));
}


/***/ }),

/***/ "tIUU":
/*!****************************************************!*\
  !*** ./src/app/store/slices/user-records-slice.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.userRecordsActions = void 0;
var toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "i7Pf");
var initialState = {
    pendingFetches: 0,
    items: [],
};
var userRecordsSlice = toolkit_1.createSlice({
    name: "userRecords",
    initialState: initialState,
    reducers: {
        requestFetchUserRecords: function (state, action) {
            state.pendingFetches++;
        },
        fetchUserRecordsSuccess: function (state, action) {
            action.payload.forEach(function (newRecord) {
                if (!state.items.some(function (record) { return record.id == newRecord.id; }))
                    state.items.push(newRecord);
            });
            state.pendingFetches--;
        },
        fetchUserRecordsFailure: function (state) {
            state.pendingFetches--;
        }
    },
});
exports.userRecordsActions = userRecordsSlice.actions;
exports.default = userRecordsSlice.reducer;


/***/ }),

/***/ "u/DC":
/*!************************************************!*\
  !*** ./src/app/components/UserRecordsList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRecordsList = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var user_records_slice_1 = __webpack_require__(/*! ../store/slices/user-records-slice */ "tIUU");
var limit_sort_user_records_1 = __webpack_require__(/*! ./utility/limit-sort-user-records */ "6pyq");
var Table_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Table */ "MBJH"));
var Badge_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Badge */ "65eO"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "55Ip");
var create_user_profile_url_1 = __webpack_require__(/*! ../components/utility/create-user-profile-url */ "n7of");
function mapStateToProps(state) {
    return {
        appIsFetchingRecords: state.userRecords.pendingFetches > 0,
        records: __spreadArrays(state.userRecords.items),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestUserRecords: function (numOfRecords, sortType) {
            dispatch(user_records_slice_1.userRecordsActions.requestFetchUserRecords({ numOfRecords: numOfRecords, sortType: sortType }));
        },
    };
}
function ListEntryBadge(props) {
    switch (props.sortType) {
        case statuses_1.UserRecordSortTypes.HIGHEST_AVERAGE_SCORE:
            return react_1.default.createElement(Badge_1.default, { variant: "secondary" }, props.record.averageScore.toFixed(2));
        case statuses_1.UserRecordSortTypes.HIGHEST_SCORE:
            return react_1.default.createElement(Badge_1.default, { variant: "secondary" }, props.record.totalScore);
        case statuses_1.UserRecordSortTypes.MOST_NAMES_CONTRIBUTED:
            return react_1.default.createElement(Badge_1.default, { variant: "secondary" }, props.record.namesContributed);
        default:
            return react_1.default.createElement(Badge_1.default, { variant: "secondary" }, "?");
    }
}
var reduxConnector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
var UnconnectedUserRecordsList = /** @class */ (function (_super) {
    __extends(UnconnectedUserRecordsList, _super);
    function UnconnectedUserRecordsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnconnectedUserRecordsList.prototype.componentDidMount = function () {
        this.props.requestUserRecords(this.props.maxRecords, this.props.sortType);
    };
    UnconnectedUserRecordsList.prototype.render = function () {
        var _this = this;
        if (this.props.appIsFetchingRecords) {
            return react_1.default.createElement("div", null, "Loading user records...");
        }
        var desiredRecords = limit_sort_user_records_1.sortAndLimitUserRecords(this.props.records, this.props.sortType, this.props.maxRecords);
        return (react_1.default.createElement(Table_1.default, { size: "sm", striped: true, bordered: true },
            react_1.default.createElement("tbody", null, desiredRecords.map(function (record, index) { return (react_1.default.createElement("tr", { key: String(record.id) },
                react_1.default.createElement("td", null, index + 1),
                react_1.default.createElement("td", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: create_user_profile_url_1.createUserProfileUrl(String(record.id)) }, record.name),
                    " ",
                    react_1.default.createElement(ListEntryBadge, { sortType: _this.props.sortType, record: record })))); }))));
    };
    return UnconnectedUserRecordsList;
}(react_1.default.Component));
exports.UserRecordsList = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UnconnectedUserRecordsList);


/***/ }),

/***/ "uHhB":
/*!**************************************!*\
  !*** ./src/app/store/sagas/index.js ***!
  \**************************************/
/*! exports provided: bandCreationSaga, bandScoreModificationSaga, userAuthenticationSaga, userCreationSaga, watchFetchBandsSaga, watchFetchUserRecordsSaga, fetchProfileSaga, checkSessionSaga, logoutSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _band_creation_saga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./band-creation-saga */ "7Zh8");
/* harmony import */ var _band_creation_saga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_band_creation_saga__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bandCreationSaga", function() { return _band_creation_saga__WEBPACK_IMPORTED_MODULE_0__["bandCreationSaga"]; });

/* harmony import */ var _band_score_modification_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./band-score-modification-saga */ "UpH7");
/* harmony import */ var _band_score_modification_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_band_score_modification_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bandScoreModificationSaga", function() { return _band_score_modification_saga__WEBPACK_IMPORTED_MODULE_1__["bandScoreModificationSaga"]; });

/* harmony import */ var _user_authentication_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-authentication-saga */ "O5yZ");
/* harmony import */ var _user_authentication_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_user_authentication_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userAuthenticationSaga", function() { return _user_authentication_saga__WEBPACK_IMPORTED_MODULE_2__["userAuthenticationSaga"]; });

/* harmony import */ var _user_creation_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-creation-saga */ "bU5+");
/* harmony import */ var _user_creation_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_user_creation_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userCreationSaga", function() { return _user_creation_saga__WEBPACK_IMPORTED_MODULE_3__["userCreationSaga"]; });

/* harmony import */ var _watch_fetch_bands_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./watch-fetch-bands-saga */ "NL3p");
/* harmony import */ var _watch_fetch_bands_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_watch_fetch_bands_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchFetchBandsSaga", function() { return _watch_fetch_bands_saga__WEBPACK_IMPORTED_MODULE_4__["watchFetchBandsSaga"]; });

/* harmony import */ var _fetch_user_records_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch-user-records-saga */ "U6Ra");
/* harmony import */ var _fetch_user_records_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fetch_user_records_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchFetchUserRecordsSaga", function() { return _fetch_user_records_saga__WEBPACK_IMPORTED_MODULE_5__["watchFetchUserRecordsSaga"]; });

/* harmony import */ var _fetch_user_profile_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fetch-user-profile-saga */ "f7N+");
/* harmony import */ var _fetch_user_profile_saga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fetch_user_profile_saga__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProfileSaga", function() { return _fetch_user_profile_saga__WEBPACK_IMPORTED_MODULE_6__["fetchProfileSaga"]; });

/* harmony import */ var _check_session_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./check-session-saga */ "XCa7");
/* harmony import */ var _check_session_saga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_check_session_saga__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkSessionSaga", function() { return _check_session_saga__WEBPACK_IMPORTED_MODULE_7__["checkSessionSaga"]; });

/* harmony import */ var _logout_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout-saga */ "EP/U");
/* harmony import */ var _logout_saga__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_logout_saga__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logoutSaga", function() { return _logout_saga__WEBPACK_IMPORTED_MODULE_8__["logoutSaga"]; });











/***/ }),

/***/ "vpfB":
/*!********************************************************!*\
  !*** ./src/app/components/utility/limit-sort-bands.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortAndLimitBands = void 0;
var statuses_1 = __webpack_require__(/*! ../../store/statuses */ "7Fo/");
function sortAndLimitBands(bands, sortBy, limit) {
    var filteredBands = __spreadArrays(bands);
    switch (sortBy) {
        case statuses_1.BandSortTypes.BEST:
            filteredBands.sort(function (a, b) { return b.score - a.score; });
            break;
        case statuses_1.BandSortTypes.MOST_RECENT:
            filteredBands.sort(function (a, b) {
                // TODO: What is happening here?
                // @ts-ignore
                return Date.parse(b.createdOn) - Date.parse(a.createdOn);
            });
            break;
        case statuses_1.BandSortTypes.WORST:
            filteredBands.sort(function (a, b) { return a.score - b.score; });
            break;
        default:
            break;
    }
    filteredBands = filteredBands.slice(0, limit);
    return filteredBands;
}
exports.sortAndLimitBands = sortAndLimitBands;


/***/ }),

/***/ "w4Fm":
/*!********************************************!*\
  !*** ./src/app/components/NewUserForm.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewUserForm = void 0;
// import PropTypes from "prop-types";
var react_1 = __importStar(__webpack_require__(/*! react */ "q1tI"));
var Button_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Button */ "cWnB"));
var Container_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Container */ "7vrA"));
var Card_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Card */ "6xyR"));
var Alert_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Alert */ "TUci"));
var Form_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Form */ "QojX"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var session_slice_1 = __webpack_require__(/*! ../store/slices/session-slice */ "fqsA");
var Spinner_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Spinner */ "T/rR"));
// UnconnectedNewUserForm.propTypes = {
//   submitForm: PropTypes.func.isRequired,
//   userCreationStatus: PropTypes.oneOf(Object.values(UserCreationStatuses)),
// };
// const mapStateToProps = ({ session }) => ({
//   userCreationStatus: session.userCreationStatus,
// });
// const mapDispatchToProps = (dispatch) => ({
//   submitForm: (/*email,*/ username, password, repeatPassword) =>
//     dispatch(
//       sessionActions.requestCreateUser({
//         // email,
//         username,
//         password,
//         repeatPassword,
//       })
//     ),
// });
// const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
// type NewUserFormProps = ConnectedProps<typeof reduxConnector>;
// type NewUserFormState = {
//   email: string;
//   username: string;
//   password: string;
//   repeatPassword: string;
// };
function NewUserForm() {
    var userCreationStatus = react_redux_1.useSelector(function (state) { return state.session.userCreationStatus; });
    // const [email, setEmail] = useState("");
    var _a = react_1.useState(""), username = _a[0], setUsername = _a[1];
    var _b = react_1.useState(""), password = _b[0], setPassword = _b[1];
    var _c = react_1.useState(""), repeatPassword = _c[0], setRepeatPassword = _c[1];
    var dispatch = react_redux_1.useDispatch();
    function submitForm() {
        dispatch(session_slice_1.sessionActions.requestCreateUser({
            username: username,
            password: password,
            repeatPassword: repeatPassword,
        }));
    }
    return (react_1.default.createElement(Container_1.default, { className: "mb-5" },
        react_1.default.createElement(Card_1.default, { style: { maxWidth: "36rem" }, className: "mx-auto" },
            react_1.default.createElement(Card_1.default.Body, null,
                react_1.default.createElement(Form_1.default, null,
                    react_1.default.createElement(Form_1.default.Group, { controlId: "formNewUserName" },
                        react_1.default.createElement(Form_1.default.Label, null, "Username"),
                        react_1.default.createElement(Form_1.default.Control, { type: "text", onChange: function (e) { return setUsername(e.target.value); }, isInvalid: userCreationStatus == statuses_1.UserCreationStatuses.USERNAME_TAKEN }),
                        react_1.default.createElement(Form_1.default.Control.Feedback, { type: "invalid" }, "Username is already taken.")),
                    react_1.default.createElement(Form_1.default.Group, { controlId: "formNewUserPassword" },
                        react_1.default.createElement(Form_1.default.Label, null, "Password"),
                        react_1.default.createElement(Form_1.default.Control, { type: "password", onChange: function (e) { return setPassword(e.target.value); }, isInvalid: userCreationStatus ==
                                statuses_1.UserCreationStatuses.PASSWORDS_DONT_MATCH })),
                    react_1.default.createElement(Form_1.default.Group, { controlId: "formNewUserRepeatPassword" },
                        react_1.default.createElement(Form_1.default.Label, null, "Repeat Password"),
                        react_1.default.createElement(Form_1.default.Control, { type: "password", onChange: function (e) { return setRepeatPassword(e.target.value); }, isInvalid: userCreationStatus ==
                                statuses_1.UserCreationStatuses.PASSWORDS_DONT_MATCH }),
                        react_1.default.createElement(Form_1.default.Control.Feedback, { type: "invalid" }, "Passwords don't match.")),
                    react_1.default.createElement(Button_1.default, { variant: "primary", type: "button", disabled: userCreationStatus == statuses_1.UserCreationStatuses.PROCESSING ||
                            userCreationStatus == statuses_1.UserCreationStatuses.SUCCESS, onClick: function () { return submitForm(); } }, "Submit"),
                    userCreationStatus == statuses_1.UserCreationStatuses.SUCCESS && (react_1.default.createElement(Alert_1.default, { variant: "success" },
                        "Account created! You may now ",
                        react_1.default.createElement("a", { href: "/login" }, "log in"),
                        ".")),
                    userCreationStatus == statuses_1.UserCreationStatuses.PROCESSING && (react_1.default.createElement(Alert_1.default, { variant: "info" },
                        react_1.default.createElement(Spinner_1.default, { animation: "border", variant: "primary" }),
                        " Processing...")))))));
}
exports.NewUserForm = NewUserForm;
// export class UnconnectedNewUserForm extends React.Component<
//   NewUserFormProps,
//   NewUserFormState
// > {
//   state = {
//     email: "",
//     username: "",
//     password: "",
//     repeatPassword: "",
//   };
//   // TODO: Wouldn't it be easy to make it so the email is validated as the user types? Maybe on a slight delay? Same with the username and password?
//   render() {
//     const { userCreationStatus } = this.props;
//     return (
//       <Container className={"mb-5"}>
//         <Card style={{ maxWidth: "36rem" }} className="mx-auto">
//           <Card.Body>
//             <Form>
//               {/* <Form.Group controlId="formNewUserEmail">
//                 <Form.Label>Email Address</Form.Label>
//                 <Form.Control
//                   type="text"
//                   onChange={(e) => this.setState({ email: e.target.value })}
//                   isInvalid={
//                     this.props.userCreationStatus ==
//                     UserCreationStatuses.INVALID_EMAIL
//                   }
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Please enter a valid email address.
//                 </Form.Control.Feedback>
//               </Form.Group> */}
//               <Form.Group controlId="formNewUserName">
//                 <Form.Label>Username</Form.Label>
//                 <Form.Control
//                   type="text"
//                   onChange={(e) => this.setState({ username: e.target.value })}
//                   isInvalid={
//                     this.props.userCreationStatus ==
//                     UserCreationStatuses.USERNAME_TAKEN
//                   }
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Username is already taken.
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group controlId="formNewUserPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   onChange={(e) => this.setState({ password: e.target.value })}
//                   isInvalid={
//                     this.props.userCreationStatus ==
//                     UserCreationStatuses.PASSWORDS_DONT_MATCH
//                   }
//                 />
//               </Form.Group>
//               <Form.Group controlId="formNewUserRepeatPassword">
//                 <Form.Label>Repeat Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   onChange={(e) =>
//                     this.setState({ repeatPassword: e.target.value })
//                   }
//                   isInvalid={
//                     this.props.userCreationStatus ==
//                     UserCreationStatuses.PASSWORDS_DONT_MATCH
//                   }
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Passwords don&apos;t match.
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Button
//                 variant="primary"
//                 type="button"
//                 disabled={
//                   this.props.userCreationStatus ==
//                     UserCreationStatuses.PROCESSING ||
//                   this.props.userCreationStatus == UserCreationStatuses.SUCCESS
//                 }
//                 onClick={() =>
//                   this.props.submitForm(
//                     // this.state.email,
//                     this.state.username,
//                     this.state.password,
//                     this.state.repeatPassword
//                   )
//                 }
//               >
//                 Submit
//               </Button>
//               {this.props.userCreationStatus ==
//                 UserCreationStatuses.SUCCESS && (
//                 <Alert variant="success">
//                   Account created! You may now <a href="/login">log in</a>.
//                 </Alert>
//               )}
//               {userCreationStatus == UserCreationStatuses.PROCESSING && (
//                 <Alert variant="info">
//                   <Spinner animation="border" variant="primary" /> Processing...
//                 </Alert>
//               )}
//             </Form>
//           </Card.Body>
//         </Card>
//       </Container>
//     );
//   }
// }
// export const NewUserForm = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UnconnectedNewUserForm);


/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0JhbmRNb2RCdXR0b25Hcm91cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCYW5kRm9ybUFsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zdGF0dXNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2JhbmQtY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0NyZWF0ZUJhbmRGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2xvZ291dC1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2dldC10aW1lLXNpbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItYXV0aGVudGljYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlclByb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvZmV0Y2gtdXNlci1yZWNvcmRzLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9iYW5kLXNjb3JlLW1vZGlmaWNhdGlvbi1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGF0aHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9jaGVjay1zZXNzaW9uLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvYmFuZHMtc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2ZldGNoLXVzZXItcHJvZmlsZS1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW4udHN4Iiwid2VicGFjazovLy8od2VicGFjaykvaG90IHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9sb2ckIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9MYW5kaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2NyZWF0ZS11c2VyLXByb2ZpbGUtdXJsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9CaWdCYW5kVGFibGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlclJlY29yZHNMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2xpbWl0LXNvcnQtYmFuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL05ld1VzZXJGb3JtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQStDOztBQUV4QyxnQkFBZ0Isb0VBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGM0MscUVBQTJEO0FBQzNELHNHQUF3RDtBQUN4RCxnSEFBa0U7QUFDbEUsNkRBS3dCO0FBRXhCLCtGQUErRjtBQUMvRixTQUFnQixrQkFBa0IsQ0FBQyxFQVFsQztRQVBDLGdCQUFnQix3QkFDaEIsVUFBVSxrQkFDVixZQUFZO0lBTU4sU0FBMEIsZ0JBQVEsQ0FBQyxZQUFZLENBQUMsRUFBL0MsUUFBUSxVQUFFLFdBQVcsUUFBMEIsQ0FBQztJQUN2RCxJQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFM0MsaUJBQVMsQ0FBQztRQUNSLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNqQiwrRUFBK0U7WUFDL0UsSUFBSSxVQUFVO2dCQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksVUFBVTtnQkFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsT0FBTyxDQUNMLDhCQUFDLDJCQUFpQixJQUNoQixJQUFJLEVBQUUsWUFBWSxFQUNsQixLQUFLLEVBQUUsUUFBUSxFQUNmLFFBQVEsRUFBRSxVQUFDLEdBQUcsSUFBSyxrQkFBVyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsRUFBM0IsQ0FBMkI7UUFFOUMsOEJBQUMsc0JBQVksSUFDWCxJQUFJLEVBQUUsZ0JBQWdCLEVBQ3RCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDVCxRQUFRLEVBQUUsQ0FBQyxnQkFBZ0IsRUFDM0IsT0FBTyxFQUFFLFlBQVksSUFBSSxDQUFDLENBQUMsSUFFMUIsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyw4QkFBQyxvQkFBZSxPQUFHLENBQUMsQ0FBQyxDQUFDLDhCQUFDLGdCQUFXLE9BQUcsQ0FDMUM7UUFDZiw4QkFBQyxzQkFBWSxJQUNYLElBQUksRUFBRSxnQkFBZ0IsRUFDdEIsS0FBSyxFQUFFLENBQUMsRUFDUixRQUFRLEVBQUUsQ0FBQyxnQkFBZ0IsRUFDM0IsT0FBTyxFQUFFLFlBQVksSUFBSSxDQUFDLElBRXpCLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLDhCQUFDLGtCQUFhLE9BQUcsQ0FBQyxDQUFDLENBQUMsOEJBQUMsY0FBUyxPQUFHLENBQ3JDLENBQ0csQ0FDckIsQ0FBQztBQUNKLENBQUM7QUE3Q0QsZ0RBNkNDO0FBRUQsU0FBUyxXQUFXLENBQUMsS0FBSztJQUN4QixJQUFNLEdBQUcsR0FBRyxjQUFNLEVBQUUsQ0FBQztJQUNyQixpQkFBUyxDQUFDO1FBQ1IsR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUM7QUFDckIsQ0FBQztBQUVELFNBQWdCLDZCQUE2QjtJQUMzQyxPQUFPLENBQ0wsOEJBQUMsMkJBQWlCLElBQUMsSUFBSSxFQUFFLHVCQUF1QjtRQUM5Qyw4QkFBQyxzQkFBWSxJQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDcEMsOEJBQUMsZ0JBQVcsT0FBRyxDQUNGO1FBQ2YsOEJBQUMsc0JBQVksSUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3BDLDhCQUFDLGNBQVMsT0FBRyxDQUNBLENBQ0csQ0FDckIsQ0FBQztBQUNKLENBQUM7QUFYRCxzRUFXQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdFRCxvRUFBOEQ7QUFHOUQsZ0VBQW1EO0FBZ0JuRCxJQUFNLFlBQVksR0FBMEI7SUFDMUMsV0FBVyxFQUFFLCtCQUFvQixDQUFDLFVBQVU7SUFDNUMsT0FBTyxFQUFFLFNBQVM7Q0FDbkIsQ0FBQztBQUVGLElBQU0sZ0JBQWdCLEdBQUcscUJBQVcsQ0FBQztJQUNuQyxJQUFJLEVBQUUsYUFBYTtJQUNuQixZQUFZO0lBQ1osUUFBUSxFQUFFO1FBQ1IsdUJBQXVCLEVBQXZCLFVBQ0UsS0FBSyxFQUNMLE1BRUU7WUFFRixLQUFLLENBQUMsV0FBVyxHQUFHLCtCQUFvQixDQUFDLFVBQVUsQ0FBQztRQUN0RCxDQUFDO1FBQ0QsdUJBQXVCLEVBQXZCLFVBQ0UsS0FBSyxFQUNMLE1BQW1EO1lBRW5ELEtBQUssQ0FBQyxXQUFXLEdBQUcsK0JBQW9CLENBQUMsT0FBTyxDQUFDO1lBQ2pELEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDekMsQ0FBQztRQUNELHVCQUF1QixZQUFDLEtBQUs7WUFDM0IsS0FBSyxDQUFDLFdBQVcsR0FBRywrQkFBb0IsQ0FBQyxPQUFPLENBQUM7WUFDakQsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDNUIsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRVUsMEJBQWtCLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0FBQzNELGtCQUFlLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EeEMsd0VBQTBCO0FBQzFCLHdGQUEwQztBQUMxQyx5RkFBdUQ7QUFFdkQsU0FBZ0IsVUFBVTtJQUN4QixPQUFPLENBQ0wsOEJBQUMsZUFBSyxJQUFDLE9BQU8sRUFBQyxTQUFTO1FBQ3RCLDhCQUFDLGVBQUssQ0FBQyxPQUFPLG1CQUF5QjtRQUN2QyxrTkFJSSxDQUNFLENBQ1QsQ0FBQztBQUNKLENBQUM7QUFYRCxnQ0FXQztBQUVELFNBQWdCLFdBQVc7SUFDekIsT0FBTyxDQUNMLDhCQUFDLGVBQUssSUFBQyxPQUFPLEVBQUMsU0FBUztRQUN0Qiw4QkFBQyxlQUFLLENBQUMsT0FBTyxxQ0FBNkM7UUFDM0QsOElBR0ksQ0FDRSxDQUNULENBQUM7QUFDSixDQUFDO0FBVkQsa0NBVUM7QUFFRCxTQUFnQixlQUFlO0lBQzdCLE9BQU8sQ0FDTCw4QkFBQyxlQUFLLElBQUMsT0FBTyxFQUFDLFNBQVM7UUFDdEIsOEJBQUMsZUFBSyxDQUFDLE9BQU8sNENBQWtEO1FBQ2hFLHFKQUdJLENBQ0UsQ0FDVCxDQUFDO0FBQ0osQ0FBQztBQVZELDBDQVVDO0FBRUQsU0FBZ0Isb0JBQW9CO0lBQ2xDLE9BQU8sQ0FDTCw4QkFBQyxlQUFLLElBQUMsT0FBTyxFQUFDLFNBQVM7UUFDdEIsOEJBQUMsZUFBSyxDQUFDLE9BQU8scUNBQWdEO1FBQzlEOztZQUNpRCxHQUFHO1lBQ2xELDhCQUFDLHNDQUFhLElBQUMsRUFBRSxFQUFDLFdBQVc7Z0JBQzNCLDhCQUFDLGVBQUssQ0FBQyxJQUFJLCtCQUFrQyxDQUMvQjtxQ0FFZCxDQUNFLENBQ1QsQ0FBQztBQUNKLENBQUM7QUFiRCxvREFhQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLElBQVk7SUFDM0MsT0FBTyxDQUNMLDhCQUFDLGVBQUssSUFBQyxPQUFPLEVBQUMsU0FBUztRQUN0Qiw4QkFBQyxlQUFLLENBQUMsT0FBTzs7WUFBUyxJQUFJO2dDQUFtQztRQUM5RCw2REFBNkIsQ0FDdkIsQ0FDVCxDQUFDO0FBQ0osQ0FBQztBQVBELDRDQU9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9ERCx5RUFBMkQ7QUFHM0QsU0FBZ0IsdUJBQXVCLENBQ3JDLE9BQXFCLEVBQ3JCLE1BQTJCLEVBQzNCLEtBQWE7SUFFYixJQUFJLGVBQWUsa0JBQU8sT0FBTyxDQUFDLENBQUM7SUFFbkMsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLDhCQUFtQixDQUFDLHFCQUFxQjtZQUM1QyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQS9CLENBQStCLENBQUMsQ0FBQztZQUNoRSxNQUFNO1FBQ1IsS0FBSyw4QkFBbUIsQ0FBQyxhQUFhO1lBQ3BDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1lBQzVELE1BQU07UUFDUixLQUFLLDhCQUFtQixDQUFDLHNCQUFzQjtZQUM3QyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUF2QyxDQUF1QyxDQUFDLENBQUM7S0FDM0U7SUFFRCxlQUFlLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsT0FBTyxlQUFlLENBQUM7QUFDekIsQ0FBQztBQXBCRCwwREFvQkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkQsSUFBWSxtQkFJWDtBQUpELFdBQVksbUJBQW1CO0lBQzdCLCtFQUFhO0lBQ2IsK0ZBQXFCO0lBQ3JCLGlHQUFzQjtBQUN4QixDQUFDLEVBSlcsbUJBQW1CLEdBQW5CLDJCQUFtQixLQUFuQiwyQkFBbUIsUUFJOUI7QUFFRCxJQUFZLG9CQU1YO0FBTkQsV0FBWSxvQkFBb0I7SUFDOUIsdUVBQVE7SUFDUixxRUFBTztJQUNQLGlFQUFLO0lBQ0wsNkVBQVc7SUFDWCwyRUFBVTtBQUNaLENBQUMsRUFOVyxvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQU0vQjtBQUVELElBQVksYUFJWDtBQUpELFdBQVksYUFBYTtJQUN2QixpREFBSTtJQUNKLG1EQUFLO0lBQ0wsK0RBQVc7QUFDYixDQUFDLEVBSlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFJeEI7QUFFRCxJQUFZLDZCQUtYO0FBTEQsV0FBWSw2QkFBNkI7SUFDdkMsNkZBQVU7SUFDVix1RkFBTztJQUNQLHVGQUFPO0lBQ1AsNkZBQVU7QUFDWixDQUFDLEVBTFcsNkJBQTZCLEdBQTdCLHFDQUE2QixLQUE3QixxQ0FBNkIsUUFLeEM7QUFFRCxJQUFZLG9CQUtYO0FBTEQsV0FBWSxvQkFBb0I7SUFDOUIsMkVBQVU7SUFDVixxRUFBTztJQUNQLHFFQUFPO0lBQ1AsMkVBQVU7QUFDWixDQUFDLEVBTFcsb0JBQW9CLEdBQXBCLDRCQUFvQixLQUFwQiw0QkFBb0IsUUFLL0I7QUFFRCxJQUFZLHNCQVNYO0FBVEQsV0FBWSxzQkFBc0I7SUFDaEMsdUZBQWM7SUFDZCxxRkFBYTtJQUNiLDZGQUFpQjtJQUNqQiwrRUFBVTtJQUNWLG1GQUFZO0lBQ1osK0ZBQWtCO0lBQ2xCLDJGQUFnQjtJQUNoQixpRkFBVztBQUNiLENBQUMsRUFUVyxzQkFBc0IsR0FBdEIsOEJBQXNCLEtBQXRCLDhCQUFzQixRQVNqQztBQUVELElBQVksb0JBVVg7QUFWRCxXQUFZLG9CQUFvQjtJQUM5QiwyRUFBVTtJQUNWLCtGQUFvQjtJQUNwQixtRkFBYztJQUNkLDJFQUFVO0lBQ1YsK0VBQVk7SUFDWixxRUFBTztJQUNQLCtFQUFZO0lBQ1osaUZBQWE7SUFDYiw2RUFBVztBQUNiLENBQUMsRUFWVyxvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQVUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REQsc0VBQXFEO0FBQ3JELHdFQUEwQjtBQUMxQixtRkFBK0M7QUFDL0MsNkVBQW9EO0FBT3BELFNBQWlCLGdCQUFnQjs7Ozs7eUJBQ3BCLEVBQUU7Z0JBQ1MscUJBQU0sY0FBSSxDQUFDLHlCQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDOztnQkFBMUQsT0FBTyxHQUFLLFVBQThDLFNBQW5EO2dCQUVQLGNBQWMsR0FBaUMsT0FBTyxlQUF4QyxFQUFFLFFBQVEsR0FBdUIsT0FBTyxTQUE5QixFQUFFLGdCQUFnQixHQUFLLE9BQU8saUJBQVosQ0FBYTtnQkFLekQsV0FBVyxHQUF1QjtvQkFDdEMsUUFBUTtvQkFDUixPQUFPLEVBQUUsY0FBYztvQkFDdkIsU0FBUyxFQUFFLGdCQUFnQjtpQkFDNUIsQ0FBQzs7OztnQkFHaUIscUJBQU0sY0FBSSxDQUN6QixlQUFLLENBQUMsSUFBSSxFQUNWLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFDL0IsV0FBVyxDQUNaOztnQkFKSyxRQUFRLEdBQUcsU0FJaEI7cUJBRUcsU0FBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLEdBQXRCLHdCQUFzQjtnQkFFbEIsT0FBTyxHQUFjLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNqRCxxQkFBTSxhQUFHLENBQUMseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Z0JBQWpELFNBQWlELENBQUM7Ozs7O2dCQVk5QyxNQUFNLEdBQXlCLE9BQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDaEUscUJBQU0sYUFBRyxDQUFDLHlCQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7O2dCQUFoRCxTQUFnRCxDQUFDOzs7Ozs7Q0FHdEQ7QUF6Q0QsNENBeUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25ERCxxRUFBeUM7QUFDekMsb0ZBQXNDO0FBQ3RDLDBGQUE0QztBQUM1QyxtRUFBZ0Y7QUFDaEYsc0VBQTJEO0FBQzNELHlGQUF1RDtBQUN2RCx1RkFBK0Q7QUFHL0QsU0FBZ0IsVUFBVTtJQUNsQixTQUFxQyx5QkFBVyxDQUNwRCxVQUFDLEtBQWdCLElBQUssWUFBSyxDQUFDLE9BQU8sRUFBYixDQUFhLENBQ3BDLEVBRk8sb0JBQW9CLDRCQUFFLFFBQVEsY0FFckMsQ0FBQztJQUVGLElBQU0sUUFBUSxHQUFHLHlCQUFXLEVBQUUsQ0FBQztJQUUvQixTQUFTLE1BQU07UUFDYixRQUFRLENBQUMsOEJBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxTQUFTLFlBQVk7UUFDbkIsUUFBUSxDQUFDLDhCQUFjLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxpQkFBUyxDQUFDO1FBQ1IsSUFBSSxvQkFBb0IsSUFBSSxpQ0FBc0IsQ0FBQyxVQUFVO1lBQzNELFlBQVksRUFBRSxDQUFDO0lBQ25CLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FDTCw4QkFBQyxnQkFBTSxJQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU07UUFDbEMsOEJBQUMsc0NBQWEsSUFBQyxFQUFFLEVBQUMsR0FBRztZQUNuQiw4QkFBQyxnQkFBTSxDQUFDLEtBQUssa0JBQXVCLENBQ3RCO1FBQ2Ysb0JBQW9CLElBQUksaUNBQXNCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUM5RDtZQUNFLDhCQUFDLGFBQUcsQ0FBQyxJQUFJOztnQkFBZSxRQUFRLENBQVk7WUFDNUMsOEJBQUMsYUFBRyxDQUFDLElBQUksSUFBQyxPQUFPLEVBQUUsY0FBTSxhQUFNLEVBQUUsRUFBUixDQUFRLGFBQW1CLENBQ25ELENBQ0osQ0FBQyxDQUFDLENBQUMsQ0FDRjtZQUNFLDhCQUFDLHNDQUFhLElBQUMsRUFBRSxFQUFDLFFBQVE7Z0JBQ3hCLDhCQUFDLGFBQUcsQ0FBQyxJQUFJLGdCQUFpQixDQUNaO1lBQ2hCLDhCQUFDLHNDQUFhLElBQUMsRUFBRSxFQUFDLFdBQVc7Z0JBQzNCLDhCQUFDLGFBQUcsQ0FBQyxJQUFJLHlCQUEwQixDQUNyQixDQUNmLENBQ0osQ0FDTSxDQUNWLENBQUM7QUFDSixDQUFDO0FBMUNELGdDQTBDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREQsc0NBQXNDO0FBQ3RDLHFFQUE2RDtBQUM3RCxtRUFBZ0Y7QUFDaEYsbUZBQTBEO0FBQzFELGtHQUFvRDtBQUNwRCxvR0FBc0Q7QUFDdEQsMEZBQTRDO0FBQzVDLHNFQUEyRDtBQUUzRCxzRUFBeUQ7QUFDekQsNEZBQThDO0FBQzlDLHVGQU1nQztBQUVoQyxJQUFLLGFBTUo7QUFORCxXQUFLLGFBQWE7SUFDaEIsbURBQUs7SUFDTCxxREFBTTtJQUNOLDZEQUFVO0lBQ1YsK0RBQVc7SUFDWCwrREFBVztBQUNiLENBQUMsRUFOSSxhQUFhLEtBQWIsYUFBYSxRQU1qQjtBQUVELFNBQWdCLGNBQWM7SUFDdEIsU0FHRix5QkFBVyxDQUFDLFVBQUMsS0FBZ0IsSUFBSyxZQUFLLEVBQUwsQ0FBSyxDQUFDLEVBRjFDLGVBQW1ELEVBQXhDLG9CQUFvQiw0QkFBRSxNQUFNLGNBQUUsUUFBUSxnQkFDeEIsa0JBQWtCLDBCQUNELENBQUM7SUFDdkMsU0FBMEIsZ0JBQVEsQ0FBQyxFQUFFLENBQUMsRUFBckMsUUFBUSxVQUFFLFdBQVcsUUFBZ0IsQ0FBQztJQUN2QyxTQUFnQyxnQkFBUSxDQUFDLEVBQUUsQ0FBQyxFQUEzQyxXQUFXLFVBQUUsY0FBYyxRQUFnQixDQUFDO0lBQzdDLFNBQW9CLGdCQUFRLENBQTRCLFNBQVMsQ0FBQyxFQUFqRSxLQUFLLFVBQUUsUUFBUSxRQUFrRCxDQUFDO0lBRXpFLElBQU0sUUFBUSxHQUFHLHlCQUFXLEVBQUUsQ0FBQztJQUUvQixpQkFBUyxDQUFDO1FBQ1IsUUFBUSxrQkFBa0IsRUFBRTtZQUMxQixLQUFLLCtCQUFvQixDQUFDLFdBQVc7Z0JBQ25DLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ25DLE9BQU87WUFDVCxLQUFLLCtCQUFvQixDQUFDLEtBQUs7Z0JBQzdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLE9BQU87WUFDVCxLQUFLLCtCQUFvQixDQUFDLE9BQU87Z0JBQy9CLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekIsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQixRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwQyxPQUFPO1NBQ1Y7SUFDSCxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFFekIsU0FBUyxZQUFZO1FBQ25CLElBQUksb0JBQW9CLElBQUksaUNBQXNCLENBQUMsYUFBYSxFQUFFO1lBQ2hFLElBQUksUUFBUSxJQUFJLEVBQUUsRUFBRTtnQkFDbEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDTCxRQUFRLENBQ04seUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDNUIsY0FBYyxFQUFFLE1BQU87b0JBQ3ZCLFFBQVE7b0JBQ1IsZ0JBQWdCLEVBQUUsUUFBUztpQkFDNUIsQ0FBQyxDQUNILENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELFNBQVMsWUFBWSxDQUFDLEVBSXJCO1lBSEMsS0FBSztRQUlMLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxTQUFTO2dCQUNaLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxhQUFhLENBQUMsV0FBVztnQkFDNUIsT0FBTyx1Q0FBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2QyxLQUFLLGFBQWEsQ0FBQyxVQUFVO2dCQUMzQixPQUFPLHNDQUFlLEVBQUUsQ0FBQztZQUMzQixLQUFLLGFBQWEsQ0FBQyxLQUFLO2dCQUN0QixPQUFPLGlDQUFVLEVBQUUsQ0FBQztZQUN0QixLQUFLLGFBQWEsQ0FBQyxNQUFNO2dCQUN2QixPQUFPLGtDQUFXLEVBQUUsQ0FBQztZQUN2QixLQUFLLGFBQWEsQ0FBQyxXQUFXO2dCQUM1QixPQUFPLDJDQUFvQixFQUFFLENBQUM7WUFDaEM7Z0JBQ0UsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRCxTQUFTLGdCQUFnQixDQUFDLENBQUM7UUFDekIsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELE9BQU8sQ0FDTCx1Q0FBSyxTQUFTLEVBQUUsTUFBTTtRQUNwQiw4QkFBQyxvQkFBVSxJQUFDLElBQUksRUFBQyxJQUFJO1lBQ25CLDhCQUFDLHFCQUFXLElBQ1YsSUFBSSxFQUFDLE1BQU0sRUFDWCxXQUFXLEVBQUMsNkJBQTZCLEVBQ3pDLFFBQVEsRUFBRSxVQUFDLENBQUMsSUFBSyx1QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBbkIsQ0FBbUIsRUFDcEMsS0FBSyxFQUFFLFFBQVEsR0FDZjtZQUNGLDhCQUFDLG9CQUFVLENBQUMsTUFBTSxRQUNmLGtCQUFrQixJQUFJLCtCQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FDckQsOEJBQUMsZ0JBQU0sSUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLFFBQVE7Z0JBQ2hDLDhCQUFDLGlCQUFPLElBQ04sRUFBRSxFQUFDLE1BQU0sRUFDVCxTQUFTLEVBQUMsUUFBUSxFQUNsQixJQUFJLEVBQUMsSUFBSSxFQUNULElBQUksRUFBQyxRQUFRLGlCQUNELE1BQU0sR0FDbEIsQ0FDSyxDQUNWLENBQUMsQ0FBQyxDQUFDLENBQ0YsOEJBQUMsZ0JBQU0sSUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBRSxjQUFNLG1CQUFZLEVBQUUsRUFBZCxDQUFjLGFBRTlDLENBQ1YsQ0FDaUIsQ0FDVDtRQUNiLDhCQUFDLFlBQVksSUFBQyxLQUFLLEVBQUUsS0FBSyxHQUFJLENBQzFCLENBQ1AsQ0FBQztBQUNKLENBQUM7QUF0R0Qsd0NBc0dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJRCx3RUFBMEI7QUFDMUIsc0VBQXFEO0FBQ3JELG1GQUErQztBQUMvQyxpRkFBeUQ7QUFFekQsU0FBaUIsVUFBVTs7Ozs7eUJBQ2QsRUFBRTtnQkFDWCxxQkFBTSxjQUFJLENBQUMsOEJBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDOztnQkFBN0MsU0FBNkMsQ0FBQzs7OztnQkFFNUMscUJBQU0sY0FBSSxDQUNSLGVBQUssQ0FBQyxNQUFNLEVBQ1osS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsZUFBZSxFQUFFLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBQyxDQUNqRTs7Z0JBSEQsU0FHQyxDQUFDO2dCQUNGLHFCQUFNLGFBQUcsQ0FBQyw4QkFBYyxDQUFDLGFBQWEsRUFBRSxDQUFDOztnQkFBekMsU0FBeUMsQ0FBQzs7OztnQkFFMUMscUJBQU0sYUFBRyxDQUFDLDhCQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7O2dCQUF6QyxTQUF5QyxDQUFDOzs7Ozs7Q0FHL0M7QUFiRCxnQ0FhQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRCxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDekIsSUFBTSxRQUFRLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNqQyxJQUFNLE9BQU8sR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQzlCLElBQU0sUUFBUSxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFFL0IsU0FBZ0IsWUFBWSxDQUFDLElBQVU7SUFDckMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoRCxJQUFJLFdBQVcsR0FBRyxVQUFVLEVBQUU7UUFDNUIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELElBQUksV0FBVyxHQUFHLFFBQVEsRUFBRTtRQUMxQixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUMxRCxPQUFVLFlBQVksTUFBRyxDQUFDO0tBQzNCO0lBQ0QsSUFBSSxXQUFXLEdBQUcsT0FBTyxFQUFFO1FBQ3pCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDdkUsSUFBSSxRQUFNLEdBQU0sVUFBVSxNQUFHLENBQUM7UUFDOUIsSUFBSSxZQUFZLEdBQUcsQ0FBQztZQUFFLFFBQU0sSUFBSSxNQUFJLFlBQVksTUFBRyxDQUFDO1FBQ3BELE9BQU8sUUFBTSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLFdBQVcsR0FBRyxRQUFRLEVBQUU7UUFDMUIsSUFBTSxXQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDcEQsT0FBVSxXQUFTLE1BQUcsQ0FBQztLQUN4QjtJQUNELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDakUsSUFBSSxNQUFNLEdBQU0sVUFBVSxNQUFHLENBQUM7SUFDOUIsSUFBSSxTQUFTLEdBQUcsQ0FBQztRQUFFLE1BQU0sSUFBSSxNQUFJLFNBQVMsTUFBRyxDQUFDO0lBQzlDLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUF6QkQsb0NBeUJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRCx3RUFBMEI7QUFDMUIsc0VBQW9FO0FBQ3BFLG1GQUErQztBQUMvQyw2RUFBb0Q7QUFJcEQsU0FBaUIsbUJBQW1COzs7O29CQUNSLHFCQUFNLHVCQUFhLENBQzNDLHlCQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUNuQzs7Z0JBRkssaUJBQWlCLEdBQUcsU0FFekI7Ozt5QkFDVSxFQUFFO2dCQUNTLHFCQUFNLGNBQUksQ0FBQyxpQkFBaUIsQ0FBQzs7Z0JBQXpDLE9BQU8sR0FBSyxVQUE2QixTQUFsQztnQkFDUCxRQUFRLEdBQWEsT0FBTyxTQUFwQixFQUFFLE1BQU0sR0FBSyxPQUFPLE9BQVosQ0FBYTtnQkFDckMscUJBQU0sY0FBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDOztnQkFBeEMsU0FBd0MsQ0FBQzs7Ozs7Q0FFNUM7QUFURCxrREFTQztBQUVELFNBQWlCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsTUFBTTs7Ozs7O2dCQUc3QixxQkFBTSxjQUFJLENBQUMsZUFBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUU7d0JBQ25FLFFBQVE7d0JBQ1IsTUFBTTtxQkFDUCxDQUFDOztnQkFIRixRQUFRLEdBQUcsU0FHVCxDQUFDO2dCQUNILElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHO29CQUFFLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDOUMscUJBQU0sYUFBRyxDQUFDLHlCQUFXLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOztnQkFBdkQsU0FBdUQsQ0FBQzs7OztnQkFFeEQscUJBQU0sYUFBRyxDQUFDLHlCQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzs7Z0JBQTFDLFNBQTBDLENBQUM7Ozs7O0NBRTlDO0FBWkQsZ0NBWUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJELHdFQUEwQjtBQUMxQixzRUFBcUQ7QUFDckQsbUZBQStDO0FBQy9DLGlGQUF5RDtBQUd6RCxTQUFpQixzQkFBc0I7Ozs7O3lCQUMxQixFQUFFO2dCQUNTLHFCQUFNLGNBQUksQ0FBQyw4QkFBYyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQzs7Z0JBQW5FLE9BQU8sR0FBSyxVQUF1RCxTQUE1RDtnQkFDUCxRQUFRLEdBQWUsT0FBTyxTQUF0QixFQUFFLFFBQVEsR0FBSyxPQUFPLFNBQVosQ0FBYTs7OztnQkFFcEIscUJBQU0sY0FBSSxDQUN6QixlQUFLLENBQUMsSUFBSSxFQUNWLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFDcEM7d0JBQ0UsUUFBUTt3QkFDUixRQUFRO3FCQUNULEVBQ0QsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQzFCOztnQkFSSyxRQUFRLEdBQUcsU0FRaEI7Z0JBQ0ssS0FBNEIsUUFBUSxDQUFDLElBQUksRUFBdkMsTUFBTSxjQUFFLGFBQWEsb0JBQW1CO3FCQUU1QyxTQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsR0FBdEIsd0JBQXNCO2dCQUN4QixxQkFBTSxhQUFHLENBQ1AsOEJBQWMsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDckMsTUFBTTt3QkFDTixRQUFRO3dCQUNSLGFBQWE7cUJBQ2QsQ0FBQyxDQUNIOztnQkFORCxTQU1DLENBQUM7Ozs7O3FCQUdBLEtBQUcsQ0FBQyxRQUFRLEVBQVosd0JBQVk7Z0JBQ2QscUJBQU0sYUFBRyxDQUNQLDhCQUFjLENBQUMsdUJBQXVCLENBQUM7d0JBQ3JDLE1BQU0sRUFBRSxLQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNO3FCQUNqQyxDQUFDLENBQ0g7O2dCQUpELFNBSUMsQ0FBQzs7O2dCQUVGLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBRyxDQUFDOzs7Ozs7O0NBSXpCO0FBckNELHdEQXFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0QscUVBQXlDO0FBQ3pDLHNGQUF3QztBQUN4QyxvRkFBc0M7QUFDdEMsNEZBQThDO0FBQzlDLG9HQUFzRDtBQUN0RCw0RkFBOEM7QUFDOUMsb0ZBQXNDO0FBQ3RDLG1FQUF1RDtBQUN2RCwrRkFBb0U7QUFFcEUsaUdBQXdFO0FBRXhFLFNBQWdCLFdBQVcsQ0FBQyxFQUkzQjtRQUhDLE1BQU07SUFJRSxXQUFPLEdBQUsseUJBQVcsQ0FDN0IsVUFBQyxLQUFnQixJQUFLLFlBQUssQ0FBQyxXQUFXLEVBQWpCLENBQWlCLENBQ3hDLFFBRmMsQ0FFYjtJQUVGLElBQU0sUUFBUSxHQUFHLHlCQUFXLEVBQUUsQ0FBQztJQUMvQixTQUFTLFlBQVk7UUFDbkIsUUFBUSxDQUFDLHVDQUFrQixDQUFDLHVCQUF1QixDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsaUJBQVMsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUNMLDhCQUFDLG1CQUFTLElBQUMsU0FBUyxFQUFFLE1BQU07UUFDMUIsOEJBQUMsY0FBSSxRQUNGLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDVDtZQUNFLDhCQUFDLGNBQUksQ0FBQyxNQUFNO2dCQUNWLDBDQUFLLE9BQU8sQ0FBQyxJQUFJLENBQU0sQ0FDWDtZQUNkLDhCQUFDLGNBQUksQ0FBQyxJQUFJO2dCQUNSLDhCQUFDLGNBQUk7b0JBQ0gsOEJBQUMsY0FBSSxDQUFDLElBQUk7d0JBQ1IsOEJBQUMsYUFBRzs0QkFDRiw4QkFBQyxhQUFHLElBQUMsRUFBRSxFQUFFLENBQUM7Z0NBQ1I7O29DQUNlLHlDQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUssQ0FDcEM7Z0NBQ047O29DQUNpQix5Q0FBSSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBSyxDQUNuRDtnQ0FDTjs7b0NBQ3FCLHlDQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBSyxDQUNoRCxDQUNGOzRCQUNOLDhCQUFDLGFBQUcsSUFBQyxFQUFFLEVBQUUsQ0FBQztnQ0FDUiw4QkFBQyxlQUFLLElBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxPQUFPLFFBQUMsUUFBUTtvQ0FDL0IsNkNBQ0csT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssUUFDM0Isc0NBQUksR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3dDQUN2Qjs0Q0FDRSw4QkFBQyxlQUFLLElBQUMsT0FBTyxFQUFDLFdBQVcsSUFBRSxJQUFJLENBQUMsS0FBSyxDQUFTOzRDQUFDLEdBQUc7NENBQ25ELHlDQUFJLElBQUksQ0FBQyxJQUFJLENBQUs7OzRDQUFVLEdBQUc7NENBQzlCLDZCQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29EQUNwQyxDQUNGLENBQ04sRUFSNEIsQ0FRNUIsQ0FBQyxDQUNJLENBQ0YsQ0FDSixDQUNGLENBQ0ksQ0FDUCxDQUNHLENBQ1gsQ0FDSixDQUFDLENBQUMsQ0FBQyxDQUNGLG1EQUFjLENBQ2YsQ0FDSSxDQUNHLENBQ2IsQ0FBQztBQUNKLENBQUM7QUFuRUQsa0NBbUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGRCx3RUFBMEI7QUFDMUIsc0VBQW9FO0FBQ3BFLG1GQUErQztBQUMvQywyRkFBa0U7QUFNbEUsU0FBaUIseUJBQXlCOzs7O29CQUNSLHFCQUFNLHVCQUFhLENBQ2pELHVDQUFrQixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FDaEQ7O2dCQUZLLHVCQUF1QixHQUFHLFNBRS9COzs7eUJBQ1UsRUFBRTtnQkFDUyxxQkFBTSxjQUFJLENBQUMsdUJBQXVCLENBQUM7O2dCQUEvQyxPQUFPLEdBQUssVUFBbUMsU0FBeEM7Z0JBQ1AsWUFBWSxHQUFlLE9BQU8sYUFBdEIsRUFBRSxRQUFRLEdBQUssT0FBTyxTQUFaLENBQWE7Z0JBQzNDLHFCQUFNLGNBQUksQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDOztnQkFBcEQsU0FBb0QsQ0FBQzs7Ozs7Q0FFeEQ7QUFURCw4REFTQztBQUVELFNBQWlCLGdCQUFnQixDQUMvQixVQUFrQixFQUNsQixNQUEyQjs7Ozs7O2dCQUdSLHFCQUFNLGNBQUksQ0FDekIsZUFBSyxDQUFDLElBQUksRUFDVixLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQ3RDLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQy9DOztnQkFKSyxRQUFRLEdBQUcsU0FJaEI7Z0JBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUc7b0JBQUUsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUM5QyxxQkFBTSxhQUFHLENBQUMsdUNBQWtCLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOztnQkFBcEUsU0FBb0UsQ0FBQzs7OztnQkFFckUscUJBQU0sYUFBRyxDQUFDLHVDQUFrQixDQUFDLHVCQUF1QixFQUFFLENBQUM7O2dCQUF2RCxTQUF1RCxDQUFDOzs7OztDQUUzRDtBQWZELDRDQWVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DRCx3RUFBMEI7QUFDMUIsc0VBQXFEO0FBQ3JELG1GQUErQztBQUMvQyw2RUFBb0Q7QUFHcEQsc0RBQXNEO0FBRXRELFNBQWlCLHlCQUF5Qjs7Ozs7eUJBQzdCLEVBQUU7Z0JBQ1MscUJBQU0sY0FBSSxDQUFDLHlCQUFXLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDOztnQkFBL0QsT0FBTyxHQUFLLFVBQW1ELFNBQXhEO2dCQUNQLFlBQVksR0FBeUMsT0FBTyxhQUFoRCxFQUFFLGVBQWUsR0FBd0IsT0FBTyxnQkFBL0IsRUFBRSxpQkFBaUIsR0FBSyxPQUFPLGtCQUFaLENBQWE7Ozs7Z0JBR2xELHFCQUFNLGNBQUksQ0FDekIsZUFBSyxDQUFDLElBQUksRUFDVixLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQ2xDO3dCQUNFLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7cUJBQ2xCLENBQ0Y7O2dCQVJLLFFBQVEsR0FBRyxTQVFoQjtnQkFDRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRztvQkFBRSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7cUJBQzFDLGtCQUFpQixJQUFJLENBQUMsR0FBdEIsd0JBQXNCO2dCQUN4QixxQkFBTSxhQUFHLENBQ1AseUJBQVcsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDakMsWUFBWTt3QkFDWixpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTO3FCQUN0QyxDQUFDLENBQ0g7O2dCQUxELFNBS0MsQ0FBQzs7b0JBRUYscUJBQU0sYUFBRyxDQUNQLHlCQUFXLENBQUMsc0JBQXNCLENBQUM7b0JBQ2pDLFlBQVk7b0JBQ1osaUJBQWlCO2lCQUNsQixDQUFDLENBQ0g7O2dCQUxELFNBS0MsQ0FBQzs7Ozs7Z0JBR0oscUJBQU0sYUFBRyxDQUFDLHlCQUFXLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzs7Z0JBQS9DLFNBQStDLENBQUM7Ozs7OztDQUdyRDtBQW5DRCw4REFtQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q1ksaUJBQVMsR0FDcEIsTUFBb0MsQ0FBQyxDQUFDLENBQUMsU0FBRSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQztBQUN6RCxvQkFBWSxHQUFHLG1CQUFtQixDQUFDO0FBQ25DLGlCQUFTLEdBQUcsWUFBWSxDQUFDO0FBQ3pCLGtCQUFVLEdBQUcsa0JBQWtCLENBQUM7QUFDaEMsZUFBTyxHQUFHLGVBQWUsQ0FBQztBQUMxQixrQkFBVSxHQUFHLGtCQUFrQixDQUFDO0FBQ2hDLG1CQUFXLEdBQUcsb0JBQW9CLENBQUM7QUFDbkMsc0JBQWMsR0FBRyxnQkFBZ0IsQ0FBQztBQUNsQyx1QkFBZSxHQUFHLGNBQWMsQ0FBQztBQUc5QyxJQUFNLGtCQUFrQixHQUFHLG1CQUFtQixDQUFDO0FBQ2xDLDhCQUFzQixHQUFHLGtCQUFrQixHQUFHLFVBQVUsQ0FBQztBQUV0RSxTQUFnQix1QkFBdUIsQ0FDckMsWUFBWSxDQUFDLDRCQUE0QjtJQUV6QyxPQUFPLGtCQUFrQixHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7QUFDbEUsQ0FBQztBQUpELDBEQUlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRCx3RUFBMEI7QUFDMUIsc0VBQW9FO0FBQ3BFLG1GQUErQztBQUUvQyxpRkFBeUQ7QUFFekQsU0FBaUIsZ0JBQWdCOzs7Ozt5QkFDcEIsRUFBRTtnQkFDWCxxQkFBTSxjQUFJLENBQUMsOEJBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7O2dCQUFuRCxTQUFtRCxDQUFDOzs7O2dCQUVqQyxxQkFBTSxjQUFJLENBQ3pCLGVBQUssQ0FBQyxHQUFHLEVBQ1QsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsZUFBZSxFQUN2QyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FDMUI7O2dCQUpLLFFBQVEsR0FBRyxTQUloQjtxQkFFRyxTQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsR0FBdEIsd0JBQXNCO2dCQUNsQixLQUFzQyxRQUFRLENBQUMsSUFBSSxFQUFqRCxNQUFNLGNBQUUsUUFBUSxnQkFBRSxhQUFhLG9CQUFtQjtnQkFDMUQscUJBQU0sYUFBRyxDQUNQLDhCQUFjLENBQUMsbUJBQW1CLENBQUM7d0JBQ2pDLE1BQU07d0JBQ04sUUFBUTt3QkFDUixhQUFhO3FCQUNkLENBQUMsQ0FDSDs7Z0JBTkQsU0FNQyxDQUFDOztvQkFFRixxQkFBTSxhQUFHLENBQUMsOEJBQWMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOztnQkFBL0MsU0FBK0MsQ0FBQzs7Ozs7Z0JBR2xELHFCQUFNLGFBQUcsQ0FBQyw4QkFBYyxDQUFDLG1CQUFtQixFQUFFLENBQUM7O2dCQUEvQyxTQUErQyxDQUFDOzs7Ozs7Q0FHckQ7QUExQkQsNENBMEJDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENELG9FQUE4RDtBQUM5RCxnRUFJcUI7QUFpQnJCLElBQU0sWUFBWSxHQUFvQjtJQUNwQyxjQUFjLEVBQUUsQ0FBQztJQUNqQixLQUFLLEVBQUUsRUFBRTtJQUNULGNBQWMsRUFBRSwrQkFBb0IsQ0FBQyxVQUFVO0lBQy9DLHNCQUFzQixFQUFFO1FBQ3RCLE1BQU0sRUFBRSx3Q0FBNkIsQ0FBQyxVQUFVO0tBQ2pEO0NBQ0YsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHLHFCQUFXLENBQUM7SUFDN0IsSUFBSSxFQUFFLE9BQU87SUFDYixZQUFZO0lBQ1osUUFBUSxFQUFFO1FBQ1IsZ0JBQWdCO1FBQ2hCLGlCQUFpQixFQUFqQixVQUNFLEtBQUssRUFDTCxNQUdFO1lBRUYsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxpQkFBaUIsRUFBakIsVUFBa0IsS0FBSyxFQUFFLE1BQWtDO1lBQ3pELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBdkIsQ0FBdUIsQ0FBQztvQkFDdEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNELGlCQUFpQixZQUFDLEtBQUs7WUFDckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFFRCxnQkFBZ0I7UUFDaEIsaUJBQWlCLEVBQWpCLFVBQ0UsS0FBSyxFQUNMLE1BSUU7WUFFRixLQUFLLENBQUMsY0FBYyxHQUFHLCtCQUFvQixDQUFDLFFBQVEsQ0FBQztRQUN2RCxDQUFDO1FBQ0QsaUJBQWlCLEVBQWpCLFVBQWtCLEtBQUssRUFBRSxNQUFnQztZQUN2RCxnQ0FBZ0M7WUFDaEMsS0FBSyxDQUFDLGNBQWMsR0FBRywrQkFBb0IsQ0FBQyxPQUFPLENBQUM7WUFDcEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxpQkFBaUIsRUFBakIsVUFBa0IsS0FBSyxFQUFFLE1BQTJDO1lBQ2xFLEtBQUssQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN4QyxDQUFDO1FBRUQsb0JBQW9CO1FBQ3BCLHNCQUFzQixFQUF0QixVQUNFLEtBQUssRUFDTCxNQUtFO1lBRUYsS0FBSyxDQUFDLHNCQUFzQixDQUFDLE1BQU07Z0JBQ2pDLHdDQUE2QixDQUFDLFVBQVUsQ0FBQztZQUMzQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3BFLENBQUM7UUFDRCxzQkFBc0IsWUFBQyxLQUFLLEVBQUUsTUFBTTtZQUNsQyxJQUFNLGVBQWUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDM0MsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBeEMsQ0FBd0MsQ0FDbkQsQ0FBQztZQUNGLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDdkUsS0FBSyxDQUFDLHNCQUFzQixDQUFDLE1BQU07Z0JBQ2pDLHdDQUE2QixDQUFDLE9BQU8sQ0FBQztRQUMxQyxDQUFDO1FBQ0Qsc0JBQXNCLFlBQUMsS0FBSztZQUMxQiwrREFBK0Q7WUFDL0QsS0FBSyxDQUFDLHNCQUFzQixDQUFDLE1BQU07Z0JBQ2pDLHdDQUE2QixDQUFDLE9BQU8sQ0FBQztZQUN4QyxLQUFLLENBQUMsc0JBQXNCLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUNsRCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFVSxtQkFBVyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFDOUMsa0JBQWUsVUFBVSxDQUFDLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdsQyx1REFBd0M7QUFDeEMsa0ZBQThDO0FBQzlDLG9FQUF3RTtBQUN4RSw2RkFBZ0Q7QUFDaEQsaUdBQW9EO0FBQ3BELDJHQUE2RDtBQUM3RCwyR0FBNkQ7QUFFN0QscUVBQWlDO0FBQ2pDLG1FQUFnRTtBQUVoRSxJQUFNLGNBQWMsR0FBRyxvQkFBb0IsRUFBRSxDQUFDO0FBQzlDLElBQU0sVUFBVSxrQkFBTyw4QkFBb0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFFLGNBQWMsRUFBQyxDQUFDO0FBRS9FLElBQU0sV0FBVyxHQUFHLHVCQUFlLENBQUM7SUFDbEMsS0FBSyxFQUFFLHFCQUFZO0lBQ25CLE9BQU8sRUFBRSx1QkFBYztJQUN2QixXQUFXLEVBQUUsNEJBQWtCO0lBQy9CLFdBQVcsRUFBRSw0QkFBa0I7Q0FDaEMsQ0FBQyxDQUFDO0FBR1Usd0JBQWdCLEdBQW9DLHlCQUFXLENBQUM7QUFFaEUsYUFBSyxHQUFHLHdCQUFjLENBQUM7SUFDbEMsT0FBTyxFQUFFLFdBQVc7SUFDcEIsVUFBVSxFQUFFLFVBQVU7Q0FDdkIsQ0FBQyxDQUFDO0FBRUgsS0FBSyxJQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7SUFDeEIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztDQUNqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkQsc0VBQXFEO0FBQ3JELHdFQUEwQjtBQUMxQixtRkFBK0M7QUFDL0MsaUZBQXlEO0FBQ3pELGdFQUFtRDtBQUduRCxTQUFpQixnQkFBZ0I7Ozs7O3lCQUNwQixFQUFFO2dCQUNTLHFCQUFNLGNBQUksQ0FBQyw4QkFBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQzs7Z0JBQTdELE9BQU8sR0FBSyxVQUFpRCxTQUF0RDtnQkFDSSxRQUFRLEdBQStCLE9BQU8sU0FBdEMsRUFBRSxRQUFRLEdBQXFCLE9BQU8sU0FBNUIsRUFBRSxjQUFjLEdBQUssT0FBTyxlQUFaLENBQWE7cUJBUzVELFNBQVEsS0FBSyxjQUFjLEdBQTNCLHdCQUEyQjtnQkFDN0IscUJBQU0sYUFBRyxDQUNQLDhCQUFjLENBQUMsaUJBQWlCLENBQUM7d0JBQy9CLE1BQU0sRUFBRSwrQkFBb0IsQ0FBQyxvQkFBb0I7cUJBQ2xELENBQUMsQ0FDSDs7Z0JBSkQsU0FJQyxDQUFDOzs7O2dCQUdpQixxQkFBTSxjQUFJLENBQ3pCLGVBQUssQ0FBQyxJQUFJLEVBQ1YsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUNsQzt3QkFDRSxRQUFRO3dCQUNSLFFBQVE7cUJBRVQsQ0FDRjs7Z0JBUkssUUFBUSxHQUFHLFNBUWhCO3FCQUNHLFNBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxHQUF0Qix3QkFBc0I7Z0JBQ3hCLHFCQUFNLGFBQUcsQ0FBQyw4QkFBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7O2dCQUE3QyxTQUE2QyxDQUFDOzs7OztnQkFHaEQscUJBQU0sYUFBRyxDQUNQLDhCQUFjLENBQUMsaUJBQWlCLENBQUM7d0JBQy9CLE1BQU0sRUFBRSxPQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNO3FCQUNuQyxDQUFDLENBQ0g7O2dCQUpELFNBSUMsQ0FBQzs7Ozs7O0NBS1g7QUExQ0QsNENBMENDO0FBRUQsU0FBUyxZQUFZLENBQUMsS0FBYTtJQUNqQyxJQUFNLEVBQUUsR0FBRyx5SkFBeUosQ0FBQztJQUNySyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REQsc0VBQXFEO0FBQ3JELHdFQUEwQjtBQUMxQixtRkFBK0M7QUFHL0MsMkZBQWtFO0FBQ2xFLHVFQUFnRTtBQUVoRSxTQUFpQixnQkFBZ0I7Ozs7O3lCQUNwQixFQUFFO2dCQUNTLHFCQUFNLGNBQUksQ0FDNUIsdUNBQWtCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUNoRDs7Z0JBRk8sT0FBTyxHQUFLLFVBRW5CLFNBRmM7Z0JBSVQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7Ozs7Z0JBSWYscUJBQU0sY0FBSSxDQUN6QixlQUFLLENBQUMsR0FBRyxFQUNULEtBQUssQ0FBQyxTQUFTLEdBQUcsK0JBQXVCLENBQUMsUUFBUSxDQUFDLENBQ3BEOztnQkFISyxRQUFRLEdBQUcsU0FHaEI7cUJBQ0csU0FBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLEdBQXRCLHdCQUFzQjtnQkFDeEIscUJBQU0sYUFBRyxDQUNQLHVDQUFrQixDQUFDLHVCQUF1QixDQUFDO3dCQUN6QyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPO3FCQUMvQixDQUFDLENBQ0g7O2dCQUpELFNBSUMsQ0FBQzs7b0JBRUYscUJBQU0sYUFBRyxDQUFDLHVDQUFrQixDQUFDLHVCQUF1QixFQUFFLENBQUM7O2dCQUF2RCxTQUF1RCxDQUFDOzs7OztnQkFHMUQscUJBQU0sYUFBRyxDQUFDLHVDQUFrQixDQUFDLHVCQUF1QixFQUFFLENBQUM7O2dCQUF2RCxTQUF1RCxDQUFDOzs7Ozs7Q0FHN0Q7QUEzQkQsNENBMkJDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25DRCxvRUFBOEQ7QUFDOUQsZ0VBQTJFO0FBQzNFLHFFQUE0QztBQWdCNUMsSUFBTSxZQUFZLEdBQXNCO0lBQ3RDLG9CQUFvQixFQUFFLGlDQUFzQixDQUFDLFVBQVU7SUFDdkQsTUFBTSxFQUFFLFNBQVM7SUFDakIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsa0JBQWtCLEVBQUUsK0JBQW9CLENBQUMsVUFBVTtJQUNuRCxhQUFhLEVBQUUsRUFBRTtDQUNsQixDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQUcscUJBQVcsQ0FBQztJQUMvQixJQUFJLEVBQUUsU0FBUztJQUNmLFlBQVk7SUFDWixRQUFRLEVBQUU7UUFDUixtQkFBbUI7UUFDbkIsbUJBQW1CLFlBQUMsS0FBSztZQUN2QixLQUFLLENBQUMsb0JBQW9CLEdBQUcsaUNBQXNCLENBQUMsY0FBYyxDQUFDO1FBQ3JFLENBQUM7UUFDRCxtQkFBbUIsRUFBbkIsVUFDRSxLQUFLLEVBQ0wsTUFJRTtZQUVGLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxpQ0FBc0IsQ0FBQyxhQUFhLENBQUM7WUFDbEUsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNyQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3pDLEtBQUssQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDckQsQ0FBQztRQUNELG1CQUFtQixZQUFDLEtBQUs7WUFDdkIsS0FBSyxDQUFDLG9CQUFvQixHQUFHLGlDQUFzQixDQUFDLFVBQVUsQ0FBQztRQUNqRSxDQUFDO1FBRUQsc0JBQXNCO1FBQ3RCLHVCQUF1QixFQUF2QixVQUNFLEtBQUssRUFDTCxNQUdFO1lBRUYsS0FBSyxDQUFDLG9CQUFvQixHQUFHLGlDQUFzQixDQUFDLGNBQWMsQ0FBQztRQUNyRSxDQUFDO1FBQ0QsdUJBQXVCLEVBQXZCLFVBQ0UsS0FBSyxFQUNMLE1BSUU7WUFFRixLQUFLLENBQUMsb0JBQW9CLEdBQUcsaUNBQXNCLENBQUMsYUFBYSxDQUFDO1lBQ2xFLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDckMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN6QyxLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3JELENBQUM7UUFDRCx1QkFBdUIsWUFBQyxLQUFLLEVBQUUsTUFBTTtZQUNuQyxLQUFLLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDbkQsb0RBQW9EO1lBQ3BELEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7UUFFRCxjQUFjO1FBQ2QsYUFBYSxZQUFDLEtBQUs7WUFDakIsS0FBSyxDQUFDLG9CQUFvQixHQUFHLGlDQUFzQixDQUFDLFdBQVcsQ0FBQztRQUNsRSxDQUFDO1FBQ0QsYUFBYSxZQUFDLEtBQUs7WUFDakIsS0FBSyxDQUFDLG9CQUFvQixHQUFHLGlDQUFzQixDQUFDLFlBQVksQ0FBQztRQUNuRSxDQUFDO1FBQ0QsYUFBYSxZQUFDLEtBQUs7WUFDakIsS0FBSyxHQUFHLFlBQVksQ0FBQztRQUN2QixDQUFDO1FBRUQsZ0JBQWdCO1FBQ2hCLGlCQUFpQixFQUFqQixVQUNFLEtBQUssRUFDTCxNQUtFO1lBRUYsS0FBSyxDQUFDLGtCQUFrQixHQUFHLCtCQUFvQixDQUFDLFVBQVUsQ0FBQztRQUM3RCxDQUFDO1FBQ0QsaUJBQWlCLFlBQUMsS0FBSztZQUNyQixLQUFLLENBQUMsa0JBQWtCLEdBQUcsK0JBQW9CLENBQUMsT0FBTyxDQUFDO1FBQzFELENBQUM7UUFDRCxpQkFBaUIsWUFBQyxLQUFLLEVBQUUsTUFBTTtZQUM3QixLQUFLLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDbkQsQ0FBQztLQUNGO0lBQ0QsYUFBYTtRQUNYLG9CQUFvQjtRQUNwQixHQUFDLHlCQUFXLENBQUMsc0JBQXNCLENBQUMsSUFBSSxJQUFHLFVBQUMsS0FBSyxFQUFFLE1BQU07WUFDdkQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVk7Z0JBQ3pDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQjthQUN4QyxDQUFDLENBQUM7UUFDTCxDQUFDO1dBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFVSxzQkFBYyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7QUFDbkQsa0JBQWUsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFIcEMsd0VBQTBCO0FBQzFCLG1FQUF1QztBQUV2Qyw2RUFBaUQ7QUFDakQsMERBQWlDO0FBRWpDLG9FQUEyQztBQUMzQyx1RUFBOEM7QUFDOUMsNkRBQW9DO0FBQ3BDLHlEQUFvQztBQUNwQyxtRUFBMEM7QUFDMUMscUVBQTRDO0FBQzVDLHFFQUE0QztBQUU1Qyw4REFBOEQ7QUFDOUQsU0FBUztBQUNULHdEQUF3RDtBQUN4RCwyQ0FBMkM7QUFDM0MsUUFBUTtBQUNSLGtDQUFrQztBQUNsQyxNQUFNO0FBQ04sd0NBQXdDO0FBQ3hDLEtBQUs7QUFFUSxZQUFJLEdBQUcsY0FBTTtBQUN4QixrREFBa0Q7QUFDbEQsOEJBQUMseUJBQU0sSUFBQyxPQUFPLEVBQUUsaUJBQU87SUFDdEIsOEJBQUMsc0JBQVEsSUFBQyxLQUFLLEVBQUUsYUFBSztRQUNwQjtZQUNFLDhCQUFDLHVCQUFVLE9BQUc7WUFDZCw4QkFBQyx3QkFBSyxJQUFDLEtBQUssUUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBRSwyQkFBWSxHQUFJO1lBQ3RELDhCQUFDLHdCQUFLLElBQUMsS0FBSyxRQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFFLGlCQUFTLEdBQUk7WUFDbkQsOEJBQUMsd0JBQUssSUFBQyxLQUFLLFFBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUUseUJBQVcsR0FBSTtZQUN4RCw4QkFBQyx3QkFBSyxJQUFDLEtBQUssUUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxpQkFBTyxHQUFJO1lBQzVDLDhCQUFDLHdCQUFLLElBQ0osSUFBSSxFQUFDLGdCQUFnQixFQUNyQixTQUFTLEVBQUUsVUFBQyxFQUFTO3dCQUFQLEtBQUs7b0JBQU8scUNBQUMseUJBQVcsSUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUk7Z0JBQTVDLENBQTRDLEdBQ3RFLENBQ0UsQ0FDRyxDQUNKLENBQ1YsRUFqQnlCLENBaUJ6QixDQUFDOzs7Ozs7Ozs7Ozs7QUN6Q0Y7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSx3RUFBMEI7QUFDMUIsMkVBQWtEO0FBQ2xELHVFQUE4QztBQUM5QyxvR0FBc0Q7QUFDdEQsb0ZBQXNDO0FBQ3RDLG9GQUFzQztBQUN0QyxzRkFBd0M7QUFDeEMsNkVBQW9EO0FBQ3BELHNFQUF3RDtBQUd4RCxTQUFnQixPQUFPO0lBQ3JCLE9BQU8sQ0FDTDtRQUNFLDhCQUFDLG1CQUFTO1lBQ1IsOEJBQUMsYUFBRyxJQUFDLFNBQVMsRUFBRSxNQUFNO2dCQUNwQiw4QkFBQyxhQUFHLElBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTTtvQkFDM0IsOEJBQUMsK0JBQWMsT0FBRztvQkFDbEIsOEJBQUMsMkJBQVksT0FBRyxDQUNaO2dCQUNOLDhCQUFDLGFBQUcsSUFBQyxFQUFFLEVBQUUsQ0FBQztvQkFDUiw4QkFBQyxjQUFJLElBQUMsU0FBUyxFQUFFLE1BQU07d0JBQ3JCLDhCQUFDLGNBQUksQ0FBQyxNQUFNOzRCQUNWLG1FQUErQixDQUNuQjt3QkFDZCw4QkFBQyxjQUFJLENBQUMsSUFBSTs0QkFDUiw4QkFBQyxpQ0FBZSxJQUNkLFVBQVUsRUFBRSxFQUFFLEVBQ2QsUUFBUSxFQUFFLDhCQUFtQixDQUFDLHNCQUFzQixHQUNwRCxDQUNRLENBQ1A7b0JBQ1AsOEJBQUMsY0FBSSxJQUFDLFNBQVMsRUFBRSxNQUFNO3dCQUNyQiw4QkFBQyxjQUFJLENBQUMsTUFBTTs0QkFDVixrRUFBOEIsQ0FDbEI7d0JBQ2QsOEJBQUMsY0FBSSxDQUFDLElBQUk7NEJBQ1IsOEJBQUMsaUNBQWUsSUFDZCxVQUFVLEVBQUUsRUFBRSxFQUNkLFFBQVEsRUFBRSw4QkFBbUIsQ0FBQyxxQkFBcUIsR0FDbkQsQ0FDUSxDQUNQO29CQUNQLDhCQUFDLGNBQUksSUFBQyxTQUFTLEVBQUUsTUFBTTt3QkFDckIsOEJBQUMsY0FBSSxDQUFDLE1BQU07NEJBQ1YsMERBQXNCLENBQ1Y7d0JBQ2QsOEJBQUMsY0FBSSxDQUFDLElBQUk7NEJBQ1IsOEJBQUMsaUNBQWUsSUFDZCxVQUFVLEVBQUUsRUFBRSxFQUNkLFFBQVEsRUFBRSw4QkFBbUIsQ0FBQyxhQUFhLEdBQzNDLENBQ1EsQ0FDUCxDQUNILENBQ0YsQ0FDSSxDQUNYLENBQ0osQ0FBQztBQUNKLENBQUM7QUFoREQsMEJBZ0RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNERCxxRUFBd0M7QUFDeEMsd0ZBQTBDO0FBQzFDLDBGQUE0QztBQUM1QyxzRkFBd0M7QUFDeEMsZ0dBQWtEO0FBQ2xELHNGQUF3QztBQUN4Qyw0RkFBOEM7QUFDOUMsbUVBQXVEO0FBRXZELHVGQUErRDtBQUMvRCxzRUFBMkQ7QUFFM0QsU0FBZ0IsU0FBUztJQUN2QixJQUFNLG9CQUFvQixHQUFHLHlCQUFXLENBQ3RDLFVBQUMsS0FBZ0IsSUFBSyxZQUFLLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFsQyxDQUFrQyxDQUN6RCxDQUFDO0lBQ0ksU0FBMEIsZ0JBQVEsQ0FBQyxFQUFFLENBQUMsRUFBckMsUUFBUSxVQUFFLFdBQVcsUUFBZ0IsQ0FBQztJQUN2QyxTQUEwQixnQkFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFyQyxRQUFRLFVBQUUsV0FBVyxRQUFnQixDQUFDO0lBRTdDLElBQU0sUUFBUSxHQUFHLHlCQUFXLEVBQUUsQ0FBQztJQUUvQixTQUFTLFlBQVk7UUFDbkIsUUFBUSxDQUFDLDhCQUFjLENBQUMsdUJBQXVCLENBQUMsRUFBRSxRQUFRLFlBQUUsUUFBUSxZQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxPQUFPLENBQ0wsOEJBQUMsbUJBQVM7UUFDUiw4QkFBQyxjQUFJLElBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBQyxTQUFTO1lBQ3JELDhCQUFDLGNBQUksQ0FBQyxJQUFJO2dCQUNSLDhCQUFDLGNBQUk7b0JBQ0gsOEJBQUMsY0FBSSxDQUFDLEtBQUssSUFBQyxTQUFTLEVBQUMsbUJBQW1CO3dCQUN2Qyw4QkFBQyxjQUFJLENBQUMsS0FBSyxtQkFBc0I7d0JBQ2pDLDhCQUFDLGNBQUksQ0FBQyxPQUFPLElBQ1gsSUFBSSxFQUFDLE1BQU0sRUFDWCxTQUFTLEVBQ1Asb0JBQW9CO2dDQUNwQixpQ0FBc0IsQ0FBQyxrQkFBa0IsRUFFM0MsUUFBUSxFQUFFLFVBQUMsQ0FBQyxJQUFLLGtCQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBM0IsQ0FBMkIsR0FDNUM7d0JBQ0YsOEJBQUMsY0FBSSxDQUFDLElBQUksSUFBQyxTQUFTLEVBQUMsWUFBWTs7NEJBQ0gscUNBQUcsSUFBSSxFQUFDLFdBQVcsV0FBUztnQ0FDOUM7d0JBQ1osOEJBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUMsSUFBSSxFQUFDLFNBQVMscUNBRWIsQ0FDYjtvQkFDYiw4QkFBQyxjQUFJLENBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQyxtQkFBbUI7d0JBQ3ZDLDhCQUFDLGNBQUksQ0FBQyxLQUFLLG1CQUFzQjt3QkFDakMsOEJBQUMsY0FBSSxDQUFDLE9BQU8sSUFDWCxJQUFJLEVBQUMsVUFBVSxFQUNmLFNBQVMsRUFDUCxvQkFBb0I7Z0NBQ3BCLGlDQUFzQixDQUFDLGdCQUFnQixFQUV6QyxRQUFRLEVBQUUsVUFBQyxDQUFDLElBQUssa0JBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixHQUM1Qzt3QkFDRiw4QkFBQyxjQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBQyxJQUFJLEVBQUMsU0FBUywwQkFFYixDQUNiO29CQUNiLDhCQUFDLGdCQUFNLElBQ0wsT0FBTyxFQUFDLFNBQVMsRUFDakIsSUFBSSxFQUFDLFFBQVEsRUFDYixRQUFRLEVBQ04sb0JBQW9CLElBQUksaUNBQXNCLENBQUMsY0FBYzs0QkFDN0Qsb0JBQW9CLElBQUksaUNBQXNCLENBQUMsYUFBYSxFQUU5RCxPQUFPLEVBQUUsY0FBTSxtQkFBWSxFQUFFLEVBQWQsQ0FBYyxhQUd0QjtvQkFDUixvQkFBb0IsSUFBSSxpQ0FBc0IsQ0FBQyxjQUFjLElBQUksQ0FDaEUsOEJBQUMsZUFBSyxJQUFDLE9BQU8sRUFBQyxNQUFNO3dCQUNuQiw4QkFBQyxpQkFBTyxJQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLFNBQVMsR0FBRzt5Q0FDMUMsQ0FDVDtvQkFDQSxvQkFBb0IsSUFBSSxpQ0FBc0IsQ0FBQyxhQUFhLElBQUksQ0FDL0QsOEJBQUMsZUFBSyxJQUFDLE9BQU8sRUFBQyxTQUFTLDhCQUFnQyxDQUN6RCxDQUNJLENBQ0csQ0FDUCxDQUNHLENBQ2IsQ0FBQztBQUNKLENBQUM7QUF6RUQsOEJBeUVDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckZELFNBQWdCLG9CQUFvQixDQUFDLE1BQWM7SUFDakQsT0FBTyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQzVCLENBQUM7QUFGRCxvREFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkQsd0VBQTBCO0FBQzFCLGdGQUFpQztBQUNqQyxrRUFBeUM7QUFDekMsd0VBQThDO0FBRTlDLG1CQUFRLENBQUMsTUFBTSxDQUNiLDhCQUFDLFdBQUksT0FBRyxFQUNSLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQy9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05GLHFFQUFtRTtBQUNuRSx3RkFBMEM7QUFDMUMsMEZBQTRDO0FBQzVDLG9HQUFzRDtBQUN0RCxzRkFBd0M7QUFDeEMsNEZBQThDO0FBQzlDLHdGQUEwQztBQUMxQyxzR0FBd0Q7QUFDeEQsbUVBQTBDO0FBQzFDLDZFQUF3QztBQUN4QywyREFBNkM7QUFDN0MsbUZBQTBEO0FBQzFELHNFQUEwRTtBQUMxRSxtRkFHOEI7QUFDOUIscUdBQXlFO0FBQ3pFLHVGQUErRDtBQUUvRCxTQUFnQixZQUFZO0lBQzFCLElBQU0sa0JBQWtCLEdBQUcsd0JBQWdCLENBQ3pDLFVBQUMsS0FBSyxJQUFLLFlBQUssQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBOUIsQ0FBOEIsQ0FDMUMsQ0FBQztJQUNGLElBQU0sS0FBSyxHQUFHLHdCQUFnQixDQUFDLFVBQUMsS0FBSyxJQUFLLHNCQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFyQixDQUFzQixDQUFDLENBQUM7SUFDbEUsSUFBTSxtQkFBbUIsR0FBRyx3QkFBZ0IsQ0FDMUMsVUFBQyxLQUFLO1FBQ0osWUFBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsSUFBSSxpQ0FBc0IsQ0FBQyxhQUFhO0lBQTFFLENBQTBFLENBQzdFLENBQUM7SUFDRixJQUFNLE1BQU0sR0FBRyx3QkFBZ0IsQ0FBQyxVQUFDLEtBQUssSUFBSyxZQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ2pFLElBQU0sa0JBQWtCLEdBQUcsd0JBQWdCLENBQ3pDLFVBQUMsS0FBSyxJQUFLLFlBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUEzQixDQUEyQixDQUN2QyxDQUFDO0lBRUksU0FBMEIsZ0JBQVEsQ0FBQyx3QkFBYSxDQUFDLFdBQVcsQ0FBQyxFQUE1RCxRQUFRLFVBQUUsV0FBVyxRQUF1QyxDQUFDO0lBQzlELFNBQTBDLGdCQUFRLENBQUMsS0FBSyxDQUFDLEVBQXhELGdCQUFnQixVQUFFLG1CQUFtQixRQUFtQixDQUFDO0lBQ2hFLElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUNuQixTQUE0QyxnQkFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFsRSxpQkFBaUIsVUFBRSxvQkFBb0IsUUFBMkIsQ0FBQztJQUUxRSxJQUFNLFFBQVEsR0FBRyx5QkFBVyxFQUFFLENBQUM7SUFFL0IsU0FBUyxXQUFXLENBQ2xCLFlBQW9DLEVBQ3BDLGlCQUF5QixFQUN6QixlQUF3QyxFQUN4QyxTQUFrQjtRQUVsQixJQUFJLGVBQWUsRUFBRTtZQUNuQixRQUFRLENBQ04seUJBQVcsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakMsWUFBWTtnQkFDWixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsU0FBUzthQUNWLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsU0FBUyxpQkFBaUI7UUFDeEIsUUFBUSxDQUNOLHlCQUFXLENBQUMsaUJBQWlCLENBQUM7WUFDNUIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixNQUFNLEVBQUUsUUFBUTtTQUNqQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLHlCQUF5QixDQUFDLFVBQWtDO1FBQ25FLElBQU0sWUFBWSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FDMUMsVUFBQyxZQUFZLElBQUssbUJBQVksQ0FBQyxZQUFZLEtBQUssVUFBVSxFQUF4QyxDQUF3QyxDQUMzRCxDQUFDO1FBQ0YsSUFBSSxZQUFZO1lBQUUsT0FBTyxZQUFZLENBQUMsS0FBSyxDQUFDOztZQUN2QyxPQUFPLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQsaUJBQVMsQ0FBQztRQUNSLGlCQUFpQixFQUFFLENBQUM7SUFDdEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsaUJBQVMsQ0FBQztRQUNSLGlCQUFpQixFQUFFLENBQUM7UUFDcEIsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBRTFDLGlCQUFTLENBQUM7UUFDUixvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsSUFBTSxZQUFZLEdBQUcsb0NBQWlCLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBRTNFLElBQU0sVUFBVSxHQUFHO1FBQ2pCLEVBQUUsS0FBSyxFQUFFLHdCQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDM0MsRUFBRSxLQUFLLEVBQUUsd0JBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtRQUM3QyxFQUFFLEtBQUssRUFBRSx3QkFBYSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0tBQzFELENBQUM7SUFFRixPQUFPLENBQ0wsOEJBQUMsY0FBSTtRQUNILDhCQUFDLGNBQUksQ0FBQyxNQUFNO1lBQ1YsOEJBQUMscUJBQVcsSUFBQyxNQUFNLFVBQ2hCLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLEVBQUUsR0FBRyxJQUFLLFFBQzlCLDhCQUFDLHNCQUFZLElBQ1gsR0FBRyxFQUFFLEdBQUcsRUFDUixJQUFJLEVBQUMsT0FBTyxFQUNaLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUNsQixJQUFJLEVBQUMsV0FBVyxFQUNoQixPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQ2pDLFFBQVEsRUFBRSxVQUFDLENBQWlCO29CQUMxQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ25CLElBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxhQUV2QixDQUFDO29CQUNGLElBQU0sZ0JBQWdCLEdBQVcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDL0QsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ2hDLENBQUMsSUFFQSxLQUFLLENBQUMsSUFBSSxDQUNFLENBQ2hCLEVBbEIrQixDQWtCL0IsQ0FBQyxDQUNVLENBQ0Y7UUFDZCw4QkFBQyxjQUFJLENBQUMsSUFBSTtZQUNSLDhCQUFDLGVBQUssSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sUUFBQyxRQUFRO2dCQUMvQiw2Q0FDRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FDcEIsOERBQUcsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUksQ0FDM0MsQ0FBQyxDQUFDLENBQUMsQ0FDRiw4REFDRyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLFFBQzFCLHNDQUFJLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDdkI7d0JBQ0UsOEJBQUMsdUNBQWtCLElBQ2pCLGdCQUFnQixFQUFFLG1CQUFtQixFQUNyQyxZQUFZLEVBQUUseUJBQXlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNqRCxVQUFVLEVBQUUsVUFBQyxRQUFRLEVBQUUsU0FBUztnQ0FDOUIsa0JBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDOzRCQUFsRCxDQUFrRCxHQUVwRDt3QkFBQyxHQUFHO3dCQUNOLDhCQUFDLGVBQUssSUFBQyxPQUFPLEVBQUMsV0FBVyxJQUFFLElBQUksQ0FBQyxLQUFLLENBQVM7d0JBQUMsR0FBRzt3QkFDbEQsSUFBSSxDQUFDLElBQUk7d0JBQUUsR0FBRzt3QkFDZix3Q0FBTSxTQUFTLEVBQUUscUJBQXFCOzs0QkFDL0IsR0FBRzs0QkFDUiw4QkFBQyx1QkFBSSxJQUFDLEVBQUUsRUFBRSw4Q0FBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQ2pELElBQUksQ0FBQyxTQUFTLENBQ1YsQ0FDRixDQUNKLENBQ0YsQ0FDTixFQXBCMkIsQ0FvQjNCLENBQUMsQ0FDRCxDQUNKLENBQ0ssQ0FDRjtZQUNSLDhCQUFDLGdCQUFNLElBQ0wsT0FBTyxFQUFDLFdBQVcsRUFDbkIsS0FBSyxRQUNMLE9BQU8sRUFBRTtvQkFDUCwyQkFBb0IsQ0FBQyxpQkFBaUIsR0FBRyxhQUFhLENBQUM7Z0JBQXZELENBQXVELHNCQUlsRCxDQUNDLENBQ1AsQ0FDUixDQUFDO0FBQ0osQ0FBQztBQW5KRCxvQ0FtSkM7QUFFRCxTQUFTLG9CQUFvQixDQUFDLGlCQUF5QjtJQUNyRCxJQUFNLFlBQVksR0FBa0IsRUFBRSxDQUFDO0lBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQyxZQUFZLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQztLQUNoRDtJQUNELE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUM7QUFFRCxTQUFTLHlCQUF5QjtJQUNoQyxPQUFPLENBQ0w7UUFDRTtZQUNFLDhCQUFDLGtEQUE2QixPQUFHO1lBQUMsR0FBRztZQUNyQyw4QkFBQyxpQkFBTyxJQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsSUFBSSxHQUFHLENBQ3ZELENBQ0YsQ0FDTixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVMRCxvRUFBOEQ7QUFpQjlELElBQU0sWUFBWSxHQUEwQjtJQUMxQyxjQUFjLEVBQUUsQ0FBQztJQUNqQixLQUFLLEVBQUUsRUFBRTtDQUNWLENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHLHFCQUFXLENBQUM7SUFDbkMsSUFBSSxFQUFFLGFBQWE7SUFDbkIsWUFBWTtJQUNaLFFBQVEsRUFBRTtRQUNSLHVCQUF1QixFQUF2QixVQUNFLEtBQUssRUFDTCxNQUdFO1lBRUYsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDRCx1QkFBdUIsRUFBdkIsVUFDRSxLQUFLLEVBQ0wsTUFBbUM7WUFFbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO2dCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNLElBQUssYUFBTSxDQUFDLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUF6QixDQUF5QixDQUFDO29CQUMxRCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQ0QsdUJBQXVCLFlBQUMsS0FBSztZQUMzQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekIsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRVUsMEJBQWtCLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0FBQzNELGtCQUFlLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcER4Qyx3RUFBMEI7QUFDMUIsbUVBQXNEO0FBQ3RELHNFQUF3RDtBQUN4RCxpR0FHNEM7QUFFNUMscUdBQTRFO0FBQzVFLHdGQUEwQztBQUMxQyx3RkFBMEM7QUFDMUMsNkVBQXdDO0FBQ3hDLGlIQUFvRjtBQUVwRixTQUFTLGVBQWUsQ0FBQyxLQUFnQjtJQUN2QyxPQUFPO1FBQ0wsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEdBQUcsQ0FBQztRQUMxRCxPQUFPLGlCQUFNLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO0tBQ3RDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxRQUFRO0lBQ2xDLE9BQU87UUFDTCxrQkFBa0IsRUFBRSxVQUNsQixZQUFvQixFQUNwQixRQUE2QjtZQUU3QixRQUFRLENBQ04sdUNBQWtCLENBQUMsdUJBQXVCLENBQUMsRUFBRSxZQUFZLGdCQUFFLFFBQVEsWUFBRSxDQUFDLENBQ3ZFLENBQUM7UUFDSixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxLQUd2QjtJQUNDLFFBQVEsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUN0QixLQUFLLDhCQUFtQixDQUFDLHFCQUFxQjtZQUM1QyxPQUFPLDhCQUFDLGVBQUssSUFBQyxPQUFPLEVBQUMsV0FBVyxJQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBUyxDQUFDO1FBQ25GLEtBQUssOEJBQW1CLENBQUMsYUFBYTtZQUNwQyxPQUFPLDhCQUFDLGVBQUssSUFBQyxPQUFPLEVBQUMsV0FBVyxJQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFTLENBQUM7UUFDdEUsS0FBSyw4QkFBbUIsQ0FBQyxzQkFBc0I7WUFDN0MsT0FBTyw4QkFBQyxlQUFLLElBQUMsT0FBTyxFQUFDLFdBQVcsSUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFTLENBQUM7UUFDNUU7WUFDRSxPQUFPLDhCQUFDLGVBQUssSUFBQyxPQUFPLEVBQUMsV0FBVyxRQUFVLENBQUM7S0FDL0M7QUFDSCxDQUFDO0FBRUQsSUFBTSxjQUFjLEdBQUcscUJBQU8sQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQU1wRTtJQUF5Qyw4Q0FBcUM7SUFBOUU7O0lBbUNBLENBQUM7SUFsQ0Msc0RBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCwyQ0FBTSxHQUFOO1FBQUEsaUJBNkJDO1FBNUJDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRTtZQUNuQyxPQUFPLHFFQUFrQyxDQUFDO1NBQzNDO1FBRUQsSUFBTSxjQUFjLEdBQUcsaURBQXVCLENBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ3RCLENBQUM7UUFFRixPQUFPLENBQ0wsOEJBQUMsZUFBSyxJQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsT0FBTyxRQUFDLFFBQVE7WUFDL0IsNkNBQ0csY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLLElBQUssUUFDckMsc0NBQUksR0FBRyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUN4QiwwQ0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFNO2dCQUNwQjtvQkFDRSw4QkFBQyx1QkFBSSxJQUFDLEVBQUUsRUFBRSw4Q0FBb0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUcsTUFBTSxDQUFDLElBQUksQ0FBUTtvQkFBQyxHQUFHO29CQUMzRSw4QkFBQyxjQUFjLElBQ2IsUUFBUSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUM3QixNQUFNLEVBQUUsTUFBTSxHQUNkLENBQ0MsQ0FDRixDQUNOLEVBWHNDLENBV3RDLENBQUMsQ0FDSSxDQUNGLENBQ1QsQ0FBQztJQUNKLENBQUM7SUFDSCxpQ0FBQztBQUFELENBQUMsQ0FuQ3dDLGVBQUssQ0FBQyxTQUFTLEdBbUN2RDtBQUVZLHVCQUFlLEdBQUcscUJBQU8sQ0FDcEMsZUFBZSxFQUNmLGtCQUFrQixDQUNuQixDQUFDLDBCQUEwQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNoRzlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdEO0FBQ21CO0FBQ1A7QUFDWjtBQUNPO0FBQ087QUFDVDtBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B4RCx5RUFBcUQ7QUFHckQsU0FBZ0IsaUJBQWlCLENBQy9CLEtBQWtCLEVBQ2xCLE1BQXFCLEVBQ3JCLEtBQWE7SUFFYixJQUFJLGFBQWEsa0JBQU8sS0FBSyxDQUFDLENBQUM7SUFFL0IsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLHdCQUFhLENBQUMsSUFBSTtZQUNyQixhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWpCLENBQWlCLENBQUMsQ0FBQztZQUNoRCxNQUFNO1FBQ1IsS0FBSyx3QkFBYSxDQUFDLFdBQVc7WUFDNUIsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN0QixnQ0FBZ0M7Z0JBQ2hDLGFBQWE7Z0JBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU07UUFDUixLQUFLLHdCQUFhLENBQUMsS0FBSztZQUN0QixhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWpCLENBQWlCLENBQUMsQ0FBQztZQUNoRCxNQUFNO1FBQ1I7WUFDRSxNQUFNO0tBQ1Q7SUFFRCxhQUFhLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQztBQTNCRCw4Q0EyQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJELHNDQUFzQztBQUN0QyxxRUFBd0M7QUFDeEMsMEZBQTRDO0FBQzVDLGdHQUFrRDtBQUNsRCxzRkFBd0M7QUFDeEMsd0ZBQTBDO0FBQzFDLHNGQUF3QztBQUN4QyxtRUFBZ0Y7QUFDaEYsc0VBQXlEO0FBQ3pELHVGQUErRDtBQUMvRCw0RkFBOEM7QUFHOUMsdUNBQXVDO0FBQ3ZDLDJDQUEyQztBQUMzQyw4RUFBOEU7QUFDOUUsS0FBSztBQUVMLDhDQUE4QztBQUM5QyxvREFBb0Q7QUFDcEQsTUFBTTtBQUVOLDhDQUE4QztBQUM5QyxtRUFBbUU7QUFDbkUsZ0JBQWdCO0FBQ2hCLDJDQUEyQztBQUMzQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUIsV0FBVztBQUNYLFNBQVM7QUFDVCxNQUFNO0FBRU4sdUVBQXVFO0FBQ3ZFLGlFQUFpRTtBQUVqRSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsNEJBQTRCO0FBQzVCLEtBQUs7QUFFTCxTQUFnQixXQUFXO0lBQ3pCLElBQU0sa0JBQWtCLEdBQUcseUJBQVcsQ0FDcEMsVUFBQyxLQUFnQixJQUFLLFlBQUssQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQWhDLENBQWdDLENBQ3ZELENBQUM7SUFFRiwwQ0FBMEM7SUFDcEMsU0FBMEIsZ0JBQVEsQ0FBQyxFQUFFLENBQUMsRUFBckMsUUFBUSxVQUFFLFdBQVcsUUFBZ0IsQ0FBQztJQUN2QyxTQUEwQixnQkFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFyQyxRQUFRLFVBQUUsV0FBVyxRQUFnQixDQUFDO0lBQ3ZDLFNBQXNDLGdCQUFRLENBQUMsRUFBRSxDQUFDLEVBQWpELGNBQWMsVUFBRSxpQkFBaUIsUUFBZ0IsQ0FBQztJQUV6RCxJQUFNLFFBQVEsR0FBRyx5QkFBVyxFQUFFLENBQUM7SUFFL0IsU0FBUyxVQUFVO1FBQ2pCLFFBQVEsQ0FDTiw4QkFBYyxDQUFDLGlCQUFpQixDQUFDO1lBQy9CLFFBQVE7WUFDUixRQUFRO1lBQ1IsY0FBYztTQUNmLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU8sQ0FDTCw4QkFBQyxtQkFBUyxJQUFDLFNBQVMsRUFBRSxNQUFNO1FBQzFCLDhCQUFDLGNBQUksSUFBQyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFDLFNBQVM7WUFDckQsOEJBQUMsY0FBSSxDQUFDLElBQUk7Z0JBQ1IsOEJBQUMsY0FBSTtvQkFlSCw4QkFBQyxjQUFJLENBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQyxpQkFBaUI7d0JBQ3JDLDhCQUFDLGNBQUksQ0FBQyxLQUFLLG1CQUFzQjt3QkFDakMsOEJBQUMsY0FBSSxDQUFDLE9BQU8sSUFDWCxJQUFJLEVBQUMsTUFBTSxFQUNYLFFBQVEsRUFBRSxVQUFDLENBQUMsSUFBSyxrQkFBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQTNCLENBQTJCLEVBQzVDLFNBQVMsRUFDUCxrQkFBa0IsSUFBSSwrQkFBb0IsQ0FBQyxjQUFjLEdBRTNEO3dCQUNGLDhCQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFDLElBQUksRUFBQyxTQUFTLGlDQUViLENBQ2I7b0JBQ2IsOEJBQUMsY0FBSSxDQUFDLEtBQUssSUFBQyxTQUFTLEVBQUMscUJBQXFCO3dCQUN6Qyw4QkFBQyxjQUFJLENBQUMsS0FBSyxtQkFBc0I7d0JBQ2pDLDhCQUFDLGNBQUksQ0FBQyxPQUFPLElBQ1gsSUFBSSxFQUFDLFVBQVUsRUFDZixRQUFRLEVBQUUsVUFBQyxDQUFDLElBQUssa0JBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixFQUM1QyxTQUFTLEVBQ1Asa0JBQWtCO2dDQUNsQiwrQkFBb0IsQ0FBQyxvQkFBb0IsR0FFM0MsQ0FDUztvQkFDYiw4QkFBQyxjQUFJLENBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQywyQkFBMkI7d0JBQy9DLDhCQUFDLGNBQUksQ0FBQyxLQUFLLDBCQUE2Qjt3QkFDeEMsOEJBQUMsY0FBSSxDQUFDLE9BQU8sSUFDWCxJQUFJLEVBQUMsVUFBVSxFQUNmLFFBQVEsRUFBRSxVQUFDLENBQUMsSUFBSyx3QkFBaUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFqQyxDQUFpQyxFQUNsRCxTQUFTLEVBQ1Asa0JBQWtCO2dDQUNsQiwrQkFBb0IsQ0FBQyxvQkFBb0IsR0FFM0M7d0JBQ0YsOEJBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUMsSUFBSSxFQUFDLFNBQVMsNkJBRWIsQ0FDYjtvQkFDYiw4QkFBQyxnQkFBTSxJQUNMLE9BQU8sRUFBQyxTQUFTLEVBQ2pCLElBQUksRUFBQyxRQUFRLEVBQ2IsUUFBUSxFQUNOLGtCQUFrQixJQUFJLCtCQUFvQixDQUFDLFVBQVU7NEJBQ3JELGtCQUFrQixJQUFJLCtCQUFvQixDQUFDLE9BQU8sRUFFcEQsT0FBTyxFQUFFLGNBQU0saUJBQVUsRUFBRSxFQUFaLENBQVksYUFHcEI7b0JBQ1Isa0JBQWtCLElBQUksK0JBQW9CLENBQUMsT0FBTyxJQUFJLENBQ3JELDhCQUFDLGVBQUssSUFBQyxPQUFPLEVBQUMsU0FBUzs7d0JBQ08scUNBQUcsSUFBSSxFQUFDLFFBQVEsYUFBVzs0QkFDbEQsQ0FDVDtvQkFDQSxrQkFBa0IsSUFBSSwrQkFBb0IsQ0FBQyxVQUFVLElBQUksQ0FDeEQsOEJBQUMsZUFBSyxJQUFDLE9BQU8sRUFBQyxNQUFNO3dCQUNuQiw4QkFBQyxpQkFBTyxJQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLFNBQVMsR0FBRzt5Q0FDMUMsQ0FDVCxDQUNJLENBQ0csQ0FDUCxDQUNHLENBQ2IsQ0FBQztBQUNKLENBQUM7QUF6R0Qsa0NBeUdDO0FBRUQsK0RBQStEO0FBQy9ELHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIsTUFBTTtBQUNOLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUIsT0FBTztBQUVQLHVKQUF1SjtBQUV2SixlQUFlO0FBQ2YsaURBQWlEO0FBQ2pELGVBQWU7QUFDZix1Q0FBdUM7QUFDdkMsbUVBQW1FO0FBQ25FLHdCQUF3QjtBQUN4QixxQkFBcUI7QUFDckIsOERBQThEO0FBQzlELHlEQUF5RDtBQUN6RCxnQ0FBZ0M7QUFDaEMsZ0NBQWdDO0FBQ2hDLCtFQUErRTtBQUMvRSxnQ0FBZ0M7QUFDaEMsdURBQXVEO0FBQ3ZELHlEQUF5RDtBQUN6RCxzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCLHlEQUF5RDtBQUN6RCx3REFBd0Q7QUFDeEQsMkNBQTJDO0FBQzNDLGtDQUFrQztBQUNsQyx5REFBeUQ7QUFDekQsb0RBQW9EO0FBQ3BELGdDQUFnQztBQUNoQyxnQ0FBZ0M7QUFDaEMsa0ZBQWtGO0FBQ2xGLGdDQUFnQztBQUNoQyx1REFBdUQ7QUFDdkQsMERBQTBEO0FBQzFELHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIseURBQXlEO0FBQ3pELCtDQUErQztBQUMvQywyQ0FBMkM7QUFDM0MsOEJBQThCO0FBQzlCLDZEQUE2RDtBQUM3RCxvREFBb0Q7QUFDcEQsZ0NBQWdDO0FBQ2hDLG9DQUFvQztBQUNwQyxrRkFBa0Y7QUFDbEYsZ0NBQWdDO0FBQ2hDLHVEQUF1RDtBQUN2RCxnRUFBZ0U7QUFDaEUsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQiw4QkFBOEI7QUFDOUIsbUVBQW1FO0FBQ25FLDJEQUEyRDtBQUMzRCxnQ0FBZ0M7QUFDaEMsb0NBQW9DO0FBQ3BDLHFDQUFxQztBQUNyQyx3RUFBd0U7QUFDeEUsc0JBQXNCO0FBQ3RCLGdDQUFnQztBQUNoQyx1REFBdUQ7QUFDdkQsZ0VBQWdFO0FBQ2hFLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIseURBQXlEO0FBQ3pELGdEQUFnRDtBQUNoRCwyQ0FBMkM7QUFDM0MsOEJBQThCO0FBQzlCLHdCQUF3QjtBQUN4QixvQ0FBb0M7QUFDcEMsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QixxREFBcUQ7QUFDckQseURBQXlEO0FBQ3pELGtGQUFrRjtBQUNsRixvQkFBb0I7QUFDcEIsaUNBQWlDO0FBQ2pDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyxnREFBZ0Q7QUFDaEQsc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQixrREFBa0Q7QUFDbEQsb0RBQW9EO0FBQ3BELDRDQUE0QztBQUM1Qyw4RUFBOEU7QUFDOUUsMkJBQTJCO0FBQzNCLG1CQUFtQjtBQUNuQiw0RUFBNEU7QUFDNUUseUNBQXlDO0FBQ3pDLG1GQUFtRjtBQUNuRiwyQkFBMkI7QUFDM0IsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixTQUFTO0FBQ1QsTUFBTTtBQUNOLElBQUk7QUFFSixzQ0FBc0M7QUFDdEMscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2Qiw2QkFBNkIiLCJmaWxlIjoibWFpbi4xZWYxNzNmNmM1MWZiYTZhM2E5Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVG9nZ2xlQnV0dG9uXCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RvZ2dsZUJ1dHRvbkdyb3VwXCI7XHJcbmltcG9ydCB7XHJcbiAgQnNDYXJldERvd24sXHJcbiAgQnNDYXJldERvd25GaWxsLFxyXG4gIEJzQ2FyZXRVcCxcclxuICBCc0NhcmV0VXBGaWxsLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5cclxuLy8gVE9ETzogTG9nZ2luZyBvdXQgd2lsbCBzdGlsbCBzaG93IHRoZSBCc0NhcnJldHMgYXMgJ2ZpbGxlZCcgaWYgdGhlIHVzZXIgbW9kaWZpZWQgdGhvc2UgYmFuZHNcclxuZXhwb3J0IGZ1bmN0aW9uIEJhbmRNb2RCdXR0b25Hcm91cCh7XHJcbiAgdXNlcklzQXV0aG9yaXplZCxcclxuICBtb2RpZnlCYW5kLFxyXG4gIG1vZFBlcmZvcm1lZCxcclxufToge1xyXG4gIHVzZXJJc0F1dGhvcml6ZWQ6IGJvb2xlYW47XHJcbiAgbW9kaWZ5QmFuZD86IChtb2RWYWx1ZTogbnVtYmVyLCB1bmRvVmFsdWU/OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgbW9kUGVyZm9ybWVkOiBudW1iZXI7XHJcbn0pOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgW21vZFZhbHVlLCBzZXRNb2RWYWx1ZV0gPSB1c2VTdGF0ZShtb2RQZXJmb3JtZWQpO1xyXG4gIGNvbnN0IHByZXZNb2RWYWx1ZSA9IHVzZVByZXZpb3VzKG1vZFZhbHVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtb2RWYWx1ZSA9PSAwKSB7XHJcbiAgICAgIC8vIFRPRE86IFRoaXMgYWN0IG9mIGNoZWNraW5nIGlmIG1vZGlmeUJhbmQgZXhpc3RzIHNlZW1zIGJhZCwgY2FuIHdlIGRvIGJldHRlcj9cclxuICAgICAgaWYgKG1vZGlmeUJhbmQpIG1vZGlmeUJhbmQoMCwgcHJldk1vZFZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtb2RpZnlCYW5kKSBtb2RpZnlCYW5kKG1vZFZhbHVlKTtcclxuICAgIH1cclxuICB9LCBbbW9kVmFsdWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2dnbGVCdXR0b25Hcm91cFxyXG4gICAgICBuYW1lPXtcIm1vZEJ1dHRvbnNcIn1cclxuICAgICAgdmFsdWU9e21vZFZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0TW9kVmFsdWUobW9kVmFsdWUgKyB2YWwpfVxyXG4gICAgPlxyXG4gICAgICA8VG9nZ2xlQnV0dG9uXHJcbiAgICAgICAgbmFtZT17XCJuZWdhdGl2ZUJ1dHRvblwifVxyXG4gICAgICAgIHZhbHVlPXstMX1cclxuICAgICAgICBkaXNhYmxlZD17IXVzZXJJc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgY2hlY2tlZD17bW9kUGVyZm9ybWVkID09IC0xfVxyXG4gICAgICA+XHJcbiAgICAgICAge21vZFZhbHVlID09IC0xID8gPEJzQ2FyZXREb3duRmlsbCAvPiA6IDxCc0NhcmV0RG93biAvPn1cclxuICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICBuYW1lPXtcInBvc2l0aXZlQnV0dG9uXCJ9XHJcbiAgICAgICAgdmFsdWU9ezF9XHJcbiAgICAgICAgZGlzYWJsZWQ9eyF1c2VySXNBdXRob3JpemVkfVxyXG4gICAgICAgIGNoZWNrZWQ9e21vZFBlcmZvcm1lZCA9PSAxfVxyXG4gICAgICA+XHJcbiAgICAgICAge21vZFZhbHVlID09IDEgPyA8QnNDYXJldFVwRmlsbCAvPiA6IDxCc0NhcmV0VXAgLz59XHJcbiAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSkge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xyXG4gIH0pO1xyXG4gIHJldHVybiByZWYuY3VycmVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBsYWNlaG9sZGVyQmFuZE1vZEJ1dHRvbkdyb3VwKCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvZ2dsZUJ1dHRvbkdyb3VwIG5hbWU9e1wicGxhY2VIb2xkZXJNb2RCdXR0b25zXCJ9PlxyXG4gICAgICA8VG9nZ2xlQnV0dG9uIGRpc2FibGVkPXt0cnVlfSB2YWx1ZT17MX0+XHJcbiAgICAgICAgPEJzQ2FyZXREb3duIC8+XHJcbiAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICA8VG9nZ2xlQnV0dG9uIGRpc2FibGVkPXt0cnVlfSB2YWx1ZT17Mn0+XHJcbiAgICAgICAgPEJzQ2FyZXRVcCAvPlxyXG4gICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlRmV0Y2hTdGF0dXNlcyB9IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgVXNlclByb2ZpbGVUeXBlID0ge1xyXG4gIGlkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0b3RhbFNjb3JlOiBudW1iZXI7XHJcbiAgbmFtZXNDb250cmlidXRlZDogbnVtYmVyO1xyXG4gIGF2ZXJhZ2VTY29yZTogbnVtYmVyO1xyXG4gIGJhbmRzOiBCYW5kQ2xhc3NbXTtcclxufTtcclxuXHJcbnR5cGUgVXNlclByb2ZpbGVTbGljZVN0YXRlID0ge1xyXG4gIGZldGNoU3RhdHVzOiBQcm9maWxlRmV0Y2hTdGF0dXNlcztcclxuICBwcm9maWxlPzogVXNlclByb2ZpbGVUeXBlO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyUHJvZmlsZVNsaWNlU3RhdGUgPSB7XHJcbiAgZmV0Y2hTdGF0dXM6IFByb2ZpbGVGZXRjaFN0YXR1c2VzLk5PVF9UUllJTkcsXHJcbiAgcHJvZmlsZTogdW5kZWZpbmVkLFxyXG59O1xyXG5cclxuY29uc3QgdXNlclByb2ZpbGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInVzZXJQcm9maWxlXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICByZXF1ZXN0RmV0Y2hVc2VyUHJvZmlsZShcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdGFyZ2V0SWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuZmV0Y2hTdGF0dXMgPSBQcm9maWxlRmV0Y2hTdGF0dXNlcy5BVFRFTVBUSU5HO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclByb2ZpbGVTdWNjZXNzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgcHJvZmlsZTogVXNlclByb2ZpbGVUeXBlIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuZmV0Y2hTdGF0dXMgPSBQcm9maWxlRmV0Y2hTdGF0dXNlcy5TVUNDRVNTO1xyXG4gICAgICBzdGF0ZS5wcm9maWxlID0gYWN0aW9uLnBheWxvYWQucHJvZmlsZTtcclxuICAgIH0sXHJcbiAgICBmZXRjaFVzZXJQcm9maWxlRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5mZXRjaFN0YXR1cyA9IFByb2ZpbGVGZXRjaFN0YXR1c2VzLkZBSUxVUkU7XHJcbiAgICAgIHN0YXRlLnByb2ZpbGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJQcm9maWxlQWN0aW9ucyA9IHVzZXJQcm9maWxlU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgdXNlclByb2ZpbGVTbGljZS5yZWR1Y2VyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJyZWFjdC1ib290c3RyYXAvQWxlcnRcIjtcclxuaW1wb3J0IHsgTGlua0NvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JBbGVydCgpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwid2FybmluZ1wiPlxyXG4gICAgICA8QWxlcnQuSGVhZGluZz5VaCBvaC4uLjwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgU29tZXRoaW5nIHdlbnQgd3JvbmchIFdoYXQgZGlkIHlvdSBkbyE/IERvIHlvdSBoYXZlIGFueSBpZGVhIGhvdyBtdWNoIElcclxuICAgICAgICB3b3JrZWQgdG8gZ2V0IHRoaXMgcGxhY2UgY2xlYW4gYW5kIHRoZW4geW91IHNob3cgdXAgYW5kIG1lc3MgdGhlIHdob2xlXHJcbiAgICAgICAgdGhpbmcgdXA/IE5vIHJlc3BlY3QuLi5cclxuICAgICAgPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTm9OYW1lQWxlcnQoKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cIndhcm5pbmdcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+VGhpcyBNRiBzYWlkICZsZHF1bzsgJnJkcXVvOzwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgV2hvIGFyZSB5b3UsIEpvaG4gQ2FnZT8g8J+YrfCfmK3wn5itIEp1c3Qga2lkZGluZywgZG9uJmFwb3M7dCBrbm93IHdobyB0aGF0XHJcbiAgICAgICAgaXMuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhbmRFeGlzdHNBbGVydCgpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwid2FybmluZ1wiPlxyXG4gICAgICA8QWxlcnQuSGVhZGluZz5Tb21lYm9keSBhbHJlYWR5IHRob3VnaHQgb2YgdGhhdCE8L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEdvaW5nIHRvIGhhdmUgdG8gdHJ5IGhhcmRlci4gTWF5YmUgcmVhZCBhIHZlcnkgY29tcGxpY2F0ZWQgYm9vayBhbmQgdGhlblxyXG4gICAgICAgIHRoaW5rIG9mIHNvbWUgcmVmZXJlbmNlIHRvIHRoYXQuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJOb3RMb2dnZWRJbkFsZXJ0KCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPllvdSZhcG9zO3ZlIGdvdHRhIGJlIHNpZ25lZCBpbiE8L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFdlIGRvbiZhcG9zO3QgbGV0IGp1c3QgYW55b25lIGluIGhlcmUuIFlvdSBjYW57XCIgXCJ9XHJcbiAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbmV3LXVzZXJcIj5cclxuICAgICAgICAgIDxBbGVydC5MaW5rPm1ha2UgYW4gYWNjb3VudCBoZXJlPC9BbGVydC5MaW5rPlxyXG4gICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICAsIHRob3VnaCwgaWYgeW91IHdhbnQuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhbmRDcmVhdGVkQWxlcnQobmFtZTogc3RyaW5nKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+JmxkcXVvO3tuYW1lfSZyZHF1bzsgc3VibWl0dGVkITwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+Tm93IHRoYXQmYXBvcztzIGZ1bm55LjwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRBbmRMaW1pdFVzZXJSZWNvcmRzKFxyXG4gIHJlY29yZHM6IFVzZXJSZWNvcmRbXSxcclxuICBzb3J0Qnk6IFVzZXJSZWNvcmRTb3J0VHlwZXMsXHJcbiAgbGltaXQ6IG51bWJlclxyXG4pOiBVc2VyUmVjb3JkW10ge1xyXG4gIGxldCBmaWx0ZXJlZFJlY29yZHMgPSBbLi4ucmVjb3Jkc107XHJcblxyXG4gIHN3aXRjaCAoc29ydEJ5KSB7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9BVkVSQUdFX1NDT1JFOlxyXG4gICAgICBmaWx0ZXJlZFJlY29yZHMuc29ydCgoYSwgYikgPT4gYi5hdmVyYWdlU2NvcmUgLSBhLmF2ZXJhZ2VTY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfU0NPUkU6XHJcbiAgICAgIGZpbHRlcmVkUmVjb3Jkcy5zb3J0KChhLCBiKSA9PiBiLnRvdGFsU2NvcmUgLSBhLnRvdGFsU2NvcmUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEOlxyXG4gICAgICBmaWx0ZXJlZFJlY29yZHMuc29ydCgoYSwgYikgPT4gYi5uYW1lc0NvbnRyaWJ1dGVkIC0gYS5uYW1lc0NvbnRyaWJ1dGVkKTtcclxuICB9XHJcblxyXG4gIGZpbHRlcmVkUmVjb3JkcyA9IGZpbHRlcmVkUmVjb3Jkcy5zbGljZSgwLCBsaW1pdCk7XHJcbiAgcmV0dXJuIGZpbHRlcmVkUmVjb3JkcztcclxufVxyXG4iLCJleHBvcnQgZW51bSBVc2VyUmVjb3JkU29ydFR5cGVzIHtcclxuICBISUdIRVNUX1NDT1JFLFxyXG4gIEhJR0hFU1RfQVZFUkFHRV9TQ09SRSxcclxuICBNT1NUX05BTUVTX0NPTlRSSUJVVEVEXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhbmRDcmVhdGlvblN0YXR1c2VzIHtcclxuICBDUkVBVElORyxcclxuICBDUkVBVEVELFxyXG4gIEVSUk9SLFxyXG4gIEJBTkRfRVhJU1RTLFxyXG4gIE5PVF9UUllJTkcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhbmRTb3J0VHlwZXMge1xyXG4gIEJFU1QsXHJcbiAgV09SU1QsXHJcbiAgTU9TVF9SRUNFTlQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzIHtcclxuICBBVFRFTVBUSU5HLFxyXG4gIFNVQ0NFU1MsXHJcbiAgRkFJTFVSRSxcclxuICBOT1RfVFJZSU5HLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQcm9maWxlRmV0Y2hTdGF0dXNlcyB7XHJcbiAgQVRURU1QVElORyxcclxuICBTVUNDRVNTLFxyXG4gIEZBSUxVUkUsXHJcbiAgTk9UX1RSWUlOR1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBBdXRoZW50aWNhdGlvblN0YXR1c2VzIHtcclxuICBBVVRIRU5USUNBVElORyxcclxuICBBVVRIRU5USUNBVEVELFxyXG4gIE5PVF9BVVRIRU5USUNBVEVELFxyXG4gIE5PVF9UUllJTkcsXHJcbiAgU0VSVkVSX0VSUk9SLFxyXG4gIFVTRVJOQU1FX05PVF9GT1VORCxcclxuICBJTlZBTElEX1BBU1NXT1JELFxyXG4gIExPR0dJTkdfT1VULFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBVc2VyQ3JlYXRpb25TdGF0dXNlcyB7XHJcbiAgUFJPQ0VTU0lORyxcclxuICBQQVNTV09SRFNfRE9OVF9NQVRDSCxcclxuICBVU0VSTkFNRV9UQUtFTixcclxuICBOT1RfVFJZSU5HLFxyXG4gIFNFUlZFUl9FUlJPUixcclxuICBTVUNDRVNTLFxyXG4gIEVNUFRZX0ZJRUxEUyxcclxuICBJTlZBTElEX0VNQUlMLFxyXG4gIEVNQUlMX1RBS0VOLFxyXG59XHJcbiIsImltcG9ydCB7IHRha2UsIHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBOZXdCYW5kUmVxdWVzdEJvZHkgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3JvdXRlLWhhbmRsZXJzL2JhbmRzXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYW5kQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBiYW5kQ3JlYXRpb25TYWdhKCkge1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoYmFuZEFjdGlvbnMucmVxdWVzdENyZWF0ZUJhbmQudHlwZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNhZ2EgcGF5bG9hZDogXCIsIHBheWxvYWQpO1xyXG4gICAgY29uc3QgeyBjcmVhdGluZ1VzZXJJZCwgYmFuZE5hbWUsIGNyZWF0aW5nVXNlcm5hbWUgfSA9IHBheWxvYWQ7XHJcbiAgICAvLyBsZXQgbmV3QmFuZCA9IHtcclxuICAgIC8vICAgY3JlYXRpbmdVc2VySWQsXHJcbiAgICAvLyAgIGJhbmROYW1lLFxyXG4gICAgLy8gfTtcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5OiBOZXdCYW5kUmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIGJhbmROYW1lLFxyXG4gICAgICBvd25lcklkOiBjcmVhdGluZ1VzZXJJZCxcclxuICAgICAgb3duZXJOYW1lOiBjcmVhdGluZ1VzZXJuYW1lLFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiSEVyZSFcIilcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMubmV3QmFuZCxcclxuICAgICAgICByZXF1ZXN0Qm9keVxyXG4gICAgICApO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3BvbnNlIGluIGJhbmRjcmVhdGlvbnNhZ2E6IFwiLCByZXNwb25zZSlcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vdyBpbSBoZXJlIVwiKVxyXG4gICAgICAgIGNvbnN0IG5ld0JhbmQ6IEJhbmRDbGFzcyA9IHJlc3BvbnNlLmRhdGEubmV3QmFuZDtcclxuICAgICAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMuY3JlYXRlQmFuZFN1Y2Nlc3MobmV3QmFuZCkpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGxldCB7IF9pZCwgYmFuZE5hbWUsIGNyZWF0aW5nVXNlcklkLCBzY29yZSB9ID0gbmV3QmFuZDtcclxuICAgICAgLy8gbGV0IG5ld0JhbmQ6IEJhbmRDbGFzcyA9IHtcclxuICAgICAgLy8gICBuYW1lOiBiYW5kTmFtZSxcclxuICAgICAgLy8gICBvd25lck5hbWU6IGNyZWF0aW5nVXNlcm5hbWUsXHJcbiAgICAgIC8vICAgb3duZXJJZDogY3JlYXRpbmdVc2VySWQsXHJcbiAgICAgIC8vICAgc2NvcmU6IDAsXHJcbiAgICAgIC8vICAgY3JlYXRlZE9uLFxyXG4gICAgICAvLyAgIF9pZDogbmV3QmFuZElkLFxyXG4gICAgICAvLyB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgcmVhc29uOiBCYW5kQ3JlYXRpb25TdGF0dXNlcyA9IGVycm9yLnJlc3BvbnNlLmRhdGEucmVhc29uO1xyXG4gICAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMuY3JlYXRlQmFuZEZhaWx1cmUocmVhc29uKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzLCB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2aWdhdGlvbigpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgeyBhdXRoZW50aWNhdGlvblN0YXR1cywgdXNlcm5hbWUgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNlc3Npb25cclxuICApO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIGRpc3BhdGNoKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RMb2dvdXQoKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja1Nlc3Npb24oKSB7XHJcbiAgICBkaXNwYXRjaChzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0Q2hlY2tTZXNzaW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLk5PVF9UUllJTkcpXHJcbiAgICAgIGNoZWNrU2Vzc2lvbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9cIj5cclxuICAgICAgICA8TmF2YmFyLkJyYW5kPndhYmFiYz88L05hdmJhci5CcmFuZD5cclxuICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICB7YXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TmF2Lkl0ZW0+U2lnbmVkIGluIGFzIHt1c2VybmFtZX08L05hdi5JdGVtPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfT5Mb2dvdXQ8L05hdi5MaW5rPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICA8TmF2Lkxpbms+TG9naW48L05hdi5MaW5rPlxyXG4gICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbmV3LXVzZXJcIj5cclxuICAgICAgICAgICAgPE5hdi5MaW5rPkNyZWF0ZSBBY2NvdW50PC9OYXYuTGluaz5cclxuICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvTmF2YmFyPlxyXG4gICk7XHJcbn0iLCIvLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRGlzcGF0Y2gsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcywgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXBcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCYW5kQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXJcIjtcclxuaW1wb3J0IHtcclxuICBCYW5kQ3JlYXRlZEFsZXJ0LFxyXG4gIEJhbmRFeGlzdHNBbGVydCxcclxuICBFcnJvckFsZXJ0LFxyXG4gIE5vTmFtZUFsZXJ0LFxyXG4gIFVzZXJOb3RMb2dnZWRJbkFsZXJ0LFxyXG59IGZyb20gXCIuL0NyZWF0ZUJhbmRGb3JtQWxlcnRzXCI7XHJcblxyXG5lbnVtIENyZWF0aW9uQWxlcnQge1xyXG4gIEVycm9yLFxyXG4gIE5vTmFtZSxcclxuICBCYW5kRXhpc3RzLFxyXG4gIEJhbmRDcmVhdGVkLFxyXG4gIE5vdExvZ2dlZEluLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQmFuZEZvcm0oKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHtcclxuICAgIHNlc3Npb246IHsgYXV0aGVudGljYXRpb25TdGF0dXMsIHVzZXJJZCwgdXNlcm5hbWUgfSxcclxuICAgIGJhbmRzOiB7IGNyZWF0aW9uU3RhdHVzOiBiYW5kQ3JlYXRpb25TdGF0dXMgfSxcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlKTtcclxuICBjb25zdCBbYmFuZE5hbWUsIHNldEJhbmROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjcmVhdGVkTmFtZSwgc2V0Q3JlYXRlZE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZTxDcmVhdGlvbkFsZXJ0IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGJhbmRDcmVhdGlvblN0YXR1cykge1xyXG4gICAgICBjYXNlIEJhbmRDcmVhdGlvblN0YXR1c2VzLkJBTkRfRVhJU1RTOlxyXG4gICAgICAgIHNldEFsZXJ0KENyZWF0aW9uQWxlcnQuQmFuZEV4aXN0cyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjYXNlIEJhbmRDcmVhdGlvblN0YXR1c2VzLkVSUk9SOlxyXG4gICAgICAgIHNldEFsZXJ0KENyZWF0aW9uQWxlcnQuRXJyb3IpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY2FzZSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVEVEOlxyXG4gICAgICAgIHNldENyZWF0ZWROYW1lKGJhbmROYW1lKTtcclxuICAgICAgICBzZXRCYW5kTmFtZShcIlwiKTtcclxuICAgICAgICBzZXRBbGVydChDcmVhdGlvbkFsZXJ0LkJhbmRDcmVhdGVkKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfSwgW2JhbmRDcmVhdGlvblN0YXR1c10pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICBpZiAoYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEKSB7XHJcbiAgICAgIGlmIChiYW5kTmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5Ob05hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgYmFuZEFjdGlvbnMucmVxdWVzdENyZWF0ZUJhbmQoe1xyXG4gICAgICAgICAgICBjcmVhdGluZ1VzZXJJZDogdXNlcklkISxcclxuICAgICAgICAgICAgYmFuZE5hbWUsXHJcbiAgICAgICAgICAgIGNyZWF0aW5nVXNlcm5hbWU6IHVzZXJuYW1lISxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5Ob3RMb2dnZWRJbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBEaXNwbGF5QWxlcnQoe1xyXG4gICAgYWxlcnQsXHJcbiAgfToge1xyXG4gICAgYWxlcnQ6IENyZWF0aW9uQWxlcnQgfCB1bmRlZmluZWQ7XHJcbiAgfSk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XHJcbiAgICBzd2l0Y2ggKGFsZXJ0KSB7XHJcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuQmFuZENyZWF0ZWQ6XHJcbiAgICAgICAgcmV0dXJuIEJhbmRDcmVhdGVkQWxlcnQoY3JlYXRlZE5hbWUpO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuQmFuZEV4aXN0czpcclxuICAgICAgICByZXR1cm4gQmFuZEV4aXN0c0FsZXJ0KCk7XHJcbiAgICAgIGNhc2UgQ3JlYXRpb25BbGVydC5FcnJvcjpcclxuICAgICAgICByZXR1cm4gRXJyb3JBbGVydCgpO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuTm9OYW1lOlxyXG4gICAgICAgIHJldHVybiBOb05hbWVBbGVydCgpO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuTm90TG9nZ2VkSW46XHJcbiAgICAgICAgcmV0dXJuIFVzZXJOb3RMb2dnZWRJbkFsZXJ0KCk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVOYW1lQ2hhbmdlKGUpIHtcclxuICAgIHNldEJhbmROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICA8SW5wdXRHcm91cCBzaXplPVwibGdcIj5cclxuICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhYm91dCBhIGJhbmQgY2FsbGVkLi4uXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlTmFtZUNoYW5nZShlKX1cclxuICAgICAgICAgIHZhbHVlPXtiYW5kTmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgIHtiYW5kQ3JlYXRpb25TdGF0dXMgPT0gQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRJTkcgPyAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICA8U3Bpbm5lclxyXG4gICAgICAgICAgICAgICAgYXM9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImJvcmRlclwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdCgpfT5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgPERpc3BsYXlBbGVydCBhbGVydD17YWxlcnR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGxvZ291dFNhZ2EoKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdExvZ291dC50eXBlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MuZGVsZXRlLFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLnNlc3Npb25FbmRwb2ludCwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX1cclxuICAgICAgKTtcclxuICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmxvZ291dFN1Y2Nlc3MoKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmxvZ291dEZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiY29uc3QgbXNJbk1pbnV0ZSA9IDYwMDAwO1xyXG5jb25zdCBtc0luSG91ciA9IG1zSW5NaW51dGUgKiA2MDtcclxuY29uc3QgbXNJbkRheSA9IG1zSW5Ib3VyICogMjQ7XHJcbmNvbnN0IG1zSW5ZZWFyID0gbXNJbkRheSAqIDM2NTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lU2luY2UoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgY29uc3QgZWxhcHNlZFRpbWUgPSBEYXRlLm5vdygpIC0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJbk1pbnV0ZSkge1xyXG4gICAgcmV0dXJuIFwiMW1cIjtcclxuICB9XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJbkhvdXIpIHtcclxuICAgIGNvbnN0IG51bU9mTWludXRlcyA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyBtc0luTWludXRlKTtcclxuICAgIHJldHVybiBgJHtudW1PZk1pbnV0ZXN9bWA7XHJcbiAgfVxyXG4gIGlmIChlbGFwc2VkVGltZSA8IG1zSW5EYXkpIHtcclxuICAgIGNvbnN0IG51bU9mSG91cnMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJbkhvdXIpO1xyXG4gICAgY29uc3QgbnVtT2ZNaW51dGVzID0gTWF0aC5mbG9vcigoZWxhcHNlZFRpbWUgJSBtc0luSG91cikgLyBtc0luTWludXRlKTtcclxuICAgIGxldCBzdHJpbmcgPSBgJHtudW1PZkhvdXJzfWhgO1xyXG4gICAgaWYgKG51bU9mTWludXRlcyA+IDApIHN0cmluZyArPSBgICR7bnVtT2ZNaW51dGVzfW1gO1xyXG4gICAgcmV0dXJuIHN0cmluZztcclxuICB9XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJblllYXIpIHtcclxuICAgIGNvbnN0IG51bU9mRGF5cyA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyBtc0luRGF5KTtcclxuICAgIHJldHVybiBgJHtudW1PZkRheXN9ZGA7XHJcbiAgfVxyXG4gIGNvbnN0IG51bU9mWWVhcnMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJblllYXIpO1xyXG4gIGNvbnN0IG51bU9mRGF5cyA9IE1hdGguZmxvb3IoKGVsYXBzZWRUaW1lICUgbXNJblllYXIpIC8gbXNJbkRheSk7XHJcbiAgbGV0IHN0cmluZyA9IGAke251bU9mWWVhcnN9eWA7XHJcbiAgaWYgKG51bU9mRGF5cyA+IDApIHN0cmluZyArPSBgICR7bnVtT2ZEYXlzfWRgO1xyXG4gIHJldHVybiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25DaGFubmVsLCBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogd2F0Y2hGZXRjaEJhbmRzU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIGNvbnN0IGZldGNoQmFuZHNDaGFubmVsID0geWllbGQgYWN0aW9uQ2hhbm5lbChcclxuICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RGZXRjaEJhbmRzLnR5cGVcclxuICApO1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoZmV0Y2hCYW5kc0NoYW5uZWwpO1xyXG4gICAgY29uc3QgeyBtYXhCYW5kcywgc29ydEJ5IH0gPSBwYXlsb2FkO1xyXG4gICAgeWllbGQgY2FsbChmZXRjaEJhbmRzLCBtYXhCYW5kcywgc29ydEJ5KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZmV0Y2hCYW5kcyhtYXhCYW5kcywgc29ydEJ5KSB7XHJcbiAgbGV0IHJlc3BvbnNlO1xyXG4gIHRyeSB7XHJcbiAgICByZXNwb25zZSA9IHlpZWxkIGNhbGwoYXhpb3MucG9zdCwgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMucG9zdEJhbmRzLCB7XHJcbiAgICAgIG1heEJhbmRzLFxyXG4gICAgICBzb3J0QnksXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5mZXRjaEJhbmRzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5mZXRjaEJhbmRzRmFpbHVyZSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogdXNlckF1dGhlbnRpY2F0aW9uU2FnYSgpIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RBdXRoZW50aWNhdGVVc2VyLnR5cGUpO1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHBheWxvYWQ7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5hdXRoZW50aWNhdGUsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyB1c2VySWQsIGJhbmRzTW9kaWZpZWQgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFuZHNNb2RpZmllZCBpbiB1c2VyQXV0aGVudGljYXRpb25TYWdhOiBcIiwgYmFuZHNNb2RpZmllZCk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuYXV0aGVudGljYXRlVXNlclN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBiYW5kc01vZGlmaWVkLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmF1dGhlbnRpY2F0ZVVzZXJGYWlsdXJlKHtcclxuICAgICAgICAgICAgcmVhc29uOiBlcnIucmVzcG9uc2UuZGF0YS5yZWFzb24sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBCYWRnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9CYWRnZVwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9lc20vVGFibGVcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbGl0eS9nZXQtdGltZS1zaW5jZVwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlclByb2ZpbGVBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUHJvZmlsZSh7XHJcbiAgdXNlcklkLFxyXG59OiB7XHJcbiAgdXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG59KTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHsgcHJvZmlsZSB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlclByb2ZpbGVcclxuICApO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgZnVuY3Rpb24gZmV0Y2hQcm9maWxlKCkge1xyXG4gICAgZGlzcGF0Y2godXNlclByb2ZpbGVBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJQcm9maWxlKHsgdGFyZ2V0SWQ6IHVzZXJJZCB9KSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQcm9maWxlKCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17XCJtYi01XCJ9PlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICB7cHJvZmlsZSA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+e3Byb2ZpbGUubmFtZX08L2g1PlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIHNjb3JlOiA8Yj57cHJvZmlsZS50b3RhbFNjb3JlfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXZlcmFnZSBzY29yZTogPGI+e3Byb2ZpbGUuYXZlcmFnZVNjb3JlLnRvRml4ZWQoMil9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lcyBjb250cmlidXRlZDogPGI+e3Byb2ZpbGUubmFtZXNDb250cmlidXRlZH08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuYmFuZHMubWFwKChiYW5kKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtTdHJpbmcoYmFuZC5faWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e2JhbmQuc2NvcmV9PC9CYWRnZT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2JhbmQubmFtZX08L2I+IChjcmVhdGVke1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRUaW1lU2luY2UobmV3IERhdGUoYmFuZC5jcmVhdGVkT24pKX0gYWdvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8cD5Mb2FkaW5nPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFjdGlvbkNoYW5uZWwsIGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyB1c2VyUmVjb3Jkc0FjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRzUmVxdWVzdEJvZHkgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3JvdXRlLWhhbmRsZXJzL3VzZXItcmVjb3Jkc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogd2F0Y2hGZXRjaFVzZXJSZWNvcmRzU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIGNvbnN0IGZldGNoVXNlclJlY29yZHNDaGFubmVsID0geWllbGQgYWN0aW9uQ2hhbm5lbChcclxuICAgIHVzZXJSZWNvcmRzQWN0aW9ucy5yZXF1ZXN0RmV0Y2hVc2VyUmVjb3Jkcy50eXBlXHJcbiAgKTtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKGZldGNoVXNlclJlY29yZHNDaGFubmVsKTtcclxuICAgIGNvbnN0IHsgbnVtT2ZSZWNvcmRzLCBzb3J0VHlwZSB9ID0gcGF5bG9hZDtcclxuICAgIHlpZWxkIGNhbGwoZmV0Y2hVc2VyUmVjb3JkcywgbnVtT2ZSZWNvcmRzLCBzb3J0VHlwZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoVXNlclJlY29yZHMoXHJcbiAgbWF4UmVjb3JkczogbnVtYmVyLFxyXG4gIHNvcnRCeTogVXNlclJlY29yZFNvcnRUeXBlc1xyXG4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICBheGlvcy5wb3N0LFxyXG4gICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5nZXRVc2VyUmVjb3JkcyxcclxuICAgICAgeyBudW1PZlJlY29yZHM6IG1heFJlY29yZHMsIHNvcnRUeXBlOiBzb3J0QnkgfVxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIHlpZWxkIHB1dCh1c2VyUmVjb3Jkc0FjdGlvbnMuZmV0Y2hVc2VyUmVjb3Jkc1N1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQodXNlclJlY29yZHNBY3Rpb25zLmZldGNoVXNlclJlY29yZHNGYWlsdXJlKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbi8vIFRPRE86IFRoaXMgZG9lc24ndCB3b3JrIHJpZ2h0IG9uIHRoZSBkYXRhYmFzZSBzaWRlIVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBiYW5kU2NvcmVNb2RpZmljYXRpb25TYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShiYW5kQWN0aW9ucy5yZXF1ZXN0TW9kaWZ5QmFuZFNjb3JlLnR5cGUpO1xyXG4gICAgY29uc3QgeyB0YXJnZXRCYW5kSWQsIG1vZGlmeWluZ1VzZXJJZCwgbW9kaWZpY2F0aW9uVmFsdWUgfSA9IHBheWxvYWQ7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm1vZGlmaWNhdGlvbiB2YWx1ZSBpbiBzYWdhOiBcIiwgbW9kaWZpY2F0aW9uVmFsdWUpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5tb2RpZnlCYW5kLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRhcmdldEJhbmRJZCxcclxuICAgICAgICAgIG1vZGlmeWluZ1VzZXJJZCxcclxuICAgICAgICAgIG1vZGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICBpZiAobW9kaWZpY2F0aW9uVmFsdWUgPT0gMCkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIGJhbmRBY3Rpb25zLm1vZGlmeUJhbmRTY29yZVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvblZhbHVlOiAtcGF5bG9hZC51bmRvVmFsdWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHRhcmdldEJhbmRJZCxcclxuICAgICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5tb2RpZnlCYW5kU2NvcmVGYWlsdXJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmVyVXJsID1cclxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6Nzc3N1wiO1xyXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlID0gXCIvYXBpL2F1dGhlbnRpY2F0ZVwiO1xyXG5leHBvcnQgY29uc3QgcG9zdEJhbmRzID0gXCIvYXBpL2JhbmRzXCI7XHJcbmV4cG9ydCBjb25zdCBtb2RpZnlCYW5kID0gXCIvYXBpL2JhbmQvbW9kaWZ5XCI7XHJcbmV4cG9ydCBjb25zdCBuZXdCYW5kID0gXCIvYXBpL2JhbmQvbmV3XCI7XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gXCIvYXBpL2NyZWF0ZS11c2VyXCI7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VybmFtZSA9IFwiL2FwaS91c2VybmFtZXMvZ2V0XCI7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyUmVjb3JkcyA9IFwiL2FwaS91c2Vycy9nZXRcIjtcclxuZXhwb3J0IGNvbnN0IHNlc3Npb25FbmRwb2ludCA9IFwiL2FwaS9zZXNzaW9uXCI7XHJcblxyXG5cclxuY29uc3QgZ2V0VXNlclByb2ZpbGVCYXNlID0gXCIvYXBpL3VzZXItcHJvZmlsZVwiO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlclByb2ZpbGVFbmRwb2ludCA9IGdldFVzZXJQcm9maWxlQmFzZSArIFwiLzp1c2VySWRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHZXRVc2VyUHJvZmlsZVVybChcclxuICB0YXJnZXRVc2VySWQgLyo6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQqL1xyXG4pOiBzdHJpbmcge1xyXG4gIHJldHVybiBnZXRVc2VyUHJvZmlsZUJhc2UgKyBcIi9cIiArIHRhcmdldFVzZXJJZCAvKi50b0hleFN0cmluZyovO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWN0aW9uQ2hhbm5lbCwgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNoZWNrU2Vzc2lvblNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgeWllbGQgdGFrZShzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0Q2hlY2tTZXNzaW9uLnR5cGUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLmdldCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5zZXNzaW9uRW5kcG9pbnQsXHJcbiAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VySWQsIHVzZXJuYW1lLCBiYW5kc01vZGlmaWVkIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmNoZWNrU2Vzc2lvblN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBiYW5kc01vZGlmaWVkLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5jaGVja1Nlc3Npb25GYWlsdXJlKCkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmNoZWNrU2Vzc2lvbkZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHtcclxuICBCYW5kQ3JlYXRpb25TdGF0dXNlcyxcclxuICBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcyxcclxuICBCYW5kU29ydFR5cGVzLFxyXG59IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbnR5cGUgU2NvcmVNb2RpZmljYXRpb25TdGF0ZSA9IHtcclxuICBzdGF0dXM6IEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzO1xyXG4gIC8vIFRPRE86IFRoaXMgbmVlZHMgdG8gcmVmZXIgdG8gYSBiYW5kJ3MgSURcclxuICB0YXJnZXQ/OiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG59O1xyXG5cclxudHlwZSBCYW5kc1NsaWNlU3RhdGUgPSB7XHJcbiAgcGVuZGluZ0ZldGNoZXM6IG51bWJlcjtcclxuICBjcmVhdGlvblN0YXR1czogQmFuZENyZWF0aW9uU3RhdHVzZXM7XHJcbiAgaXRlbXM6IEJhbmRDbGFzc1tdO1xyXG4gIHNjb3JlTW9kaWZpY2F0aW9uU3RhdGU6IFNjb3JlTW9kaWZpY2F0aW9uU3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEJhbmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogMCxcclxuICBpdGVtczogW10sXHJcbiAgY3JlYXRpb25TdGF0dXM6IEJhbmRDcmVhdGlvblN0YXR1c2VzLk5PVF9UUllJTkcsXHJcbiAgc2NvcmVNb2RpZmljYXRpb25TdGF0ZToge1xyXG4gICAgc3RhdHVzOiBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBiYW5kc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiYmFuZHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIEJhbmQgZmV0Y2hpbmdcclxuICAgIHJlcXVlc3RGZXRjaEJhbmRzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICBtYXhCYW5kczogbnVtYmVyO1xyXG4gICAgICAgIHNvcnRCeTogQmFuZFNvcnRUeXBlcztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcysrO1xyXG4gICAgfSxcclxuICAgIGZldGNoQmFuZHNTdWNjZXNzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QmFuZENsYXNzW10+KSB7XHJcbiAgICAgIGFjdGlvbi5wYXlsb2FkLmZvckVhY2goKG5ld0JhbmQpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLml0ZW1zLnNvbWUoKGJhbmQpID0+IGJhbmQuX2lkID09IG5ld0JhbmQuX2lkKSlcclxuICAgICAgICAgIHN0YXRlLml0ZW1zLnB1c2gobmV3QmFuZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfSxcclxuICAgIGZldGNoQmFuZHNGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEJhbmQgY3JlYXRpb25cclxuICAgIHJlcXVlc3RDcmVhdGVCYW5kKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICBjcmVhdGluZ1VzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICBiYW5kTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGNyZWF0aW5nVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5jcmVhdGlvblN0YXR1cyA9IEJhbmRDcmVhdGlvblN0YXR1c2VzLkNSRUFUSU5HO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUJhbmRTdWNjZXNzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QmFuZENsYXNzPikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm9rYXkgd2hheXRzIHVwXCIpXHJcbiAgICAgIHN0YXRlLmNyZWF0aW9uU3RhdHVzID0gQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRFRDtcclxuICAgICAgc3RhdGUuaXRlbXMucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQmFuZEZhaWx1cmUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxCYW5kQ3JlYXRpb25TdGF0dXNlcz4pIHtcclxuICAgICAgc3RhdGUuY3JlYXRpb25TdGF0dXMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTW9kaWZ5IGJhbmQgc2NvcmVcclxuICAgIHJlcXVlc3RNb2RpZnlCYW5kU2NvcmUoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHRhcmdldEJhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICBtb2RpZnlpbmdVc2VySWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWU6IG51bWJlcjtcclxuICAgICAgICB1bmRvVmFsdWU/OiBudW1iZXI7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS5zdGF0dXMgPVxyXG4gICAgICAgIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLkFUVEVNUFRJTkc7XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUudGFyZ2V0ID0gYWN0aW9uLnBheWxvYWQudGFyZ2V0QmFuZElkO1xyXG4gICAgfSxcclxuICAgIG1vZGlmeUJhbmRTY29yZVN1Y2Nlc3Moc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBjb25zdCB0YXJnZXRCYW5kSW5kZXggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXgoXHJcbiAgICAgICAgKGJhbmQpID0+IGJhbmQuX2lkID09PSBhY3Rpb24ucGF5bG9hZC50YXJnZXRCYW5kSWRcclxuICAgICAgKTtcclxuICAgICAgc3RhdGUuaXRlbXNbdGFyZ2V0QmFuZEluZGV4XS5zY29yZSArPSBhY3Rpb24ucGF5bG9hZC5tb2RpZmljYXRpb25WYWx1ZTtcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS5zdGF0dXMgPVxyXG4gICAgICAgIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLlNVQ0NFU1M7XHJcbiAgICB9LFxyXG4gICAgbW9kaWZ5QmFuZFNjb3JlRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICAvLyBUT0RPOiBTaG91bGRuJ3Qgd2UgYmUgZ2V0dGluZyBhIHJlYXNvbiBmb3IgdGhlIGZhaWx1cmUgaGVyZT9cclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS5zdGF0dXMgPVxyXG4gICAgICAgIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLkZBSUxVUkU7XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBiYW5kQWN0aW9ucyA9IGJhbmRzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgYmFuZHNTbGljZS5yZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBnZXREZWZhdWx0TWlkZGxld2FyZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCBiYW5kc1JlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCBzZXNzaW9uUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgdXNlclJlY29yZHNSZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuaW1wb3J0IHVzZXJQcm9maWxlUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBzYWdhcyBmcm9tIFwiLi9zYWdhc1wiO1xyXG5pbXBvcnQgeyBUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuY29uc3QgbWlkZGxld2FyZSA9IFsuLi5nZXREZWZhdWx0TWlkZGxld2FyZSh7IHRodW5rOiBmYWxzZSB9KSwgc2FnYU1pZGRsZXdhcmVdO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGJhbmRzOiBiYW5kc1JlZHVjZXIsXHJcbiAgc2Vzc2lvbjogc2Vzc2lvblJlZHVjZXIsXHJcbiAgdXNlclJlY29yZHM6IHVzZXJSZWNvcmRzUmVkdWNlcixcclxuICB1c2VyUHJvZmlsZTogdXNlclByb2ZpbGVSZWR1Y2VyLFxyXG59KTtcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVR5cGVkU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvcjtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiByb290UmVkdWNlcixcclxuICBtaWRkbGV3YXJlOiBtaWRkbGV3YXJlLFxyXG59KTtcclxuXHJcbmZvciAoY29uc3Qgc2FnYSBpbiBzYWdhcykge1xyXG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihzYWdhc1tzYWdhXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdGFrZSwgcHV0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHsgVXNlckNyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogdXNlckNyZWF0aW9uU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENyZWF0ZVVzZXIudHlwZSk7XHJcbiAgICBjb25zdCB7IC8qZW1haWwsKi8gdXNlcm5hbWUsIHBhc3N3b3JkLCByZXBlYXRQYXNzd29yZCB9ID0gcGF5bG9hZDtcclxuXHJcbiAgICAvLyBpZiAoIWVtYWlsSXNWYWxpZChlbWFpbCkpIHtcclxuICAgIC8vICAgeWllbGQgcHV0KFxyXG4gICAgLy8gICAgIHNlc3Npb25BY3Rpb25zLmNyZWF0ZVVzZXJGYWlsdXJlKHtcclxuICAgIC8vICAgICAgIHJlYXNvbjogVXNlckNyZWF0aW9uU3RhdHVzZXMuSU5WQUxJRF9FTUFJTCxcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgICAgaWYgKHBhc3N3b3JkICE9PSByZXBlYXRQYXNzd29yZCkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmNyZWF0ZVVzZXJGYWlsdXJlKHtcclxuICAgICAgICAgICAgcmVhc29uOiBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgICAgICBheGlvcy5wb3N0LFxyXG4gICAgICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5jcmVhdGVVc2VyLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgLy8gZW1haWwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlclN1Y2Nlc3MoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgICAgICAgICAgIHJlYXNvbjogZXJyb3IucmVzcG9uc2UuZGF0YS5yZWFzb24sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgLy8gfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW1haWxJc1ZhbGlkKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICBjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgcmV0dXJuIHJlLnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlLCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IHVzZXJQcm9maWxlQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUdldFVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaFByb2ZpbGVTYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShcclxuICAgICAgdXNlclByb2ZpbGVBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJQcm9maWxlLnR5cGVcclxuICAgICk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuICAgIGNvbnN0IHRhcmdldElkID0gcGF5bG9hZC50YXJnZXRJZDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldElkKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNyZWF0ZUdldFVzZXJQcm9maWxlVXJsKHRhcmdldElkKSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5nZXQsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwodGFyZ2V0SWQpXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgdXNlclByb2ZpbGVBY3Rpb25zLmZldGNoVXNlclByb2ZpbGVTdWNjZXNzKHtcclxuICAgICAgICAgICAgcHJvZmlsZTogcmVzcG9uc2UuZGF0YS5wcm9maWxlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dCh1c2VyUHJvZmlsZUFjdGlvbnMuZmV0Y2hVc2VyUHJvZmlsZUZhaWx1cmUoKSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB5aWVsZCBwdXQodXNlclByb2ZpbGVBY3Rpb25zLmZldGNoVXNlclByb2ZpbGVGYWlsdXJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMsIFVzZXJDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4vYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcywgU1RBVEVTIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG50eXBlIFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uID0ge1xyXG4gIHRhcmdldEJhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICB2YWx1ZTogbnVtYmVyO1xyXG59O1xyXG5cclxudHlwZSBTZXNzaW9uU2xpY2VTdGF0ZSA9IHtcclxuICBhdXRoZW50aWNhdGlvblN0YXR1czogQXV0aGVudGljYXRpb25TdGF0dXNlcztcclxuICB1c2VySWQ/OiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gIHVzZXJDcmVhdGlvblN0YXR1czogVXNlckNyZWF0aW9uU3RhdHVzZXM7XHJcbiAgYmFuZHNNb2RpZmllZDogU2Vzc2lvbkJhbmRNb2RpZmljYXRpb25bXTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU2Vzc2lvblNsaWNlU3RhdGUgPSB7XHJcbiAgYXV0aGVudGljYXRpb25TdGF0dXM6IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICB1c2VySWQ6IHVuZGVmaW5lZCxcclxuICB1c2VybmFtZTogdW5kZWZpbmVkLFxyXG4gIHVzZXJDcmVhdGlvblN0YXR1czogVXNlckNyZWF0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICBiYW5kc01vZGlmaWVkOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHNlc3Npb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInNlc3Npb25cIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIFNlc3Npb24gY2hlY2tpbmdcclxuICAgIHJlcXVlc3RDaGVja1Nlc3Npb24oc3RhdGUpIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HO1xyXG4gICAgfSxcclxuICAgIGNoZWNrU2Vzc2lvblN1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHVzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGJhbmRzTW9kaWZpZWQ6IFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uW107XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQ7XHJcbiAgICAgIHN0YXRlLnVzZXJJZCA9IGFjdGlvbi5wYXlsb2FkLnVzZXJJZDtcclxuICAgICAgc3RhdGUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZTtcclxuICAgICAgc3RhdGUuYmFuZHNNb2RpZmllZCA9IGFjdGlvbi5wYXlsb2FkLmJhbmRzTW9kaWZpZWQ7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tTZXNzaW9uRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORztcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlciBhdXRoZW50aWNhdGlvblxyXG4gICAgcmVxdWVzdEF1dGhlbnRpY2F0ZVVzZXIoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRJTkc7XHJcbiAgICB9LFxyXG4gICAgYXV0aGVudGljYXRlVXNlclN1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHVzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGJhbmRzTW9kaWZpZWQ6IFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uW107XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQ7XHJcbiAgICAgIHN0YXRlLnVzZXJJZCA9IGFjdGlvbi5wYXlsb2FkLnVzZXJJZDtcclxuICAgICAgc3RhdGUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZTtcclxuICAgICAgc3RhdGUuYmFuZHNNb2RpZmllZCA9IGFjdGlvbi5wYXlsb2FkLmJhbmRzTW9kaWZpZWQ7XHJcbiAgICB9LFxyXG4gICAgYXV0aGVudGljYXRlVXNlckZhaWx1cmUoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IGFjdGlvbi5wYXlsb2FkLnJlYXNvbjtcclxuICAgICAgLy8gVE9ETzogSXMgaXQgbmVjZXNzYXJ5IHRvIHJlc2V0IHRoaXMgdG8gbnVsbCBoZXJlP1xyXG4gICAgICBzdGF0ZS51c2VySWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFVzZXIgbG9nb3V0XHJcbiAgICByZXF1ZXN0TG9nb3V0KHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5MT0dHSU5HX09VVDtcclxuICAgIH0sXHJcbiAgICBsb2dvdXRGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5TRVJWRVJfRVJST1I7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0U3VjY2VzcyhzdGF0ZSkge1xyXG4gICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlciBjcmVhdGlvblxyXG4gICAgcmVxdWVzdENyZWF0ZVVzZXIoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIC8vIGVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgIHJlcGVhdFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUudXNlckNyZWF0aW9uU3RhdHVzID0gVXNlckNyZWF0aW9uU3RhdHVzZXMuUFJPQ0VTU0lORztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVVc2VyU3VjY2VzcyhzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS51c2VyQ3JlYXRpb25TdGF0dXMgPSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZVVzZXJGYWlsdXJlKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUudXNlckNyZWF0aW9uU3RhdHVzID0gYWN0aW9uLnBheWxvYWQucmVhc29uO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgIC8vIEJhbmQgbW9kaWZpY2F0aW9uXHJcbiAgICBbYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlU3VjY2Vzcy50eXBlXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuYmFuZHNNb2RpZmllZC5wdXNoKHtcclxuICAgICAgICB0YXJnZXRCYW5kSWQ6IGFjdGlvbi5wYXlsb2FkLnRhcmdldEJhbmRJZCxcclxuICAgICAgICB2YWx1ZTogYWN0aW9uLnBheWxvYWQubW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXNzaW9uQWN0aW9ucyA9IHNlc3Npb25TbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBzZXNzaW9uU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gXCIuLi9zdG9yZS9oaXN0b3J5XCI7XHJcbmltcG9ydCB7IEJpZ0JhbmRUYWJsZSB9IGZyb20gXCIuL0JpZ0JhbmRUYWJsZVwiO1xyXG5pbXBvcnQgeyBMYW5kaW5nIH0gZnJvbSBcIi4vTGFuZGluZ1wiO1xyXG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tIFwiLi9Mb2dpblwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIi4vTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBOZXdVc2VyRm9ybSB9IGZyb20gXCIuL05ld1VzZXJGb3JtXCI7XHJcbmltcG9ydCB7IFVzZXJQcm9maWxlIH0gZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcclxuXHJcbi8vIGNvbnN0IEF1dGhlbnRpY2F0aW9uR3VhcmQgPSAoQ29tcG9uZW50KSA9PiAoeyBtYXRjaCB9KSA9PiB7XHJcbi8vICAgaWYgKFxyXG4vLyAgICAgc3RvcmUuZ2V0U3RhdGUoKS5zZXNzaW9uLmF1dGhlbnRpY2F0aW9uU3RhdHVzICE9PVxyXG4vLyAgICAgQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEXHJcbi8vICAgKSB7XHJcbi8vICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL1wiIC8+O1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gPENvbXBvbmVudCBtYXRjaD17bWF0Y2h9IC8+O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW4gPSAoKSA9PiAoXHJcbiAgLy8gVE9ETzogV2hhdCBpcyB0aGUgUm91dGVyJ3MgXCJoaXN0b3J5XCIgYWxsIGFib3V0P1xyXG4gIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2JhbmRzXCIgY29tcG9uZW50PXtCaWdCYW5kVGFibGV9IC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2luRm9ybX0gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9uZXctdXNlclwiIGNvbXBvbmVudD17TmV3VXNlckZvcm19IC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtMYW5kaW5nfSAvPlxyXG4gICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgcGF0aD1cIi91c2Vycy86dXNlcklkXCJcclxuICAgICAgICAgIGNvbXBvbmVudD17KHsgbWF0Y2ggfSkgPT4gPFVzZXJQcm9maWxlIHVzZXJJZD17bWF0Y2gucGFyYW1zLnVzZXJJZH0gLz59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIDwvUm91dGVyPlxyXG4pO1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiZFpaSFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCJpM1hwXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDcmVhdGVCYW5kRm9ybSB9IGZyb20gXCIuL0NyZWF0ZUJhbmRGb3JtXCI7XHJcbmltcG9ydCB7IEJpZ0JhbmRUYWJsZSB9IGZyb20gXCIuL0JpZ0JhbmRUYWJsZVwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRzTGlzdCB9IGZyb20gXCIuL1VzZXJSZWNvcmRzTGlzdFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCBKdW1ib3Ryb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9KdW1ib3Ryb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMYW5kaW5nKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPXtcIm1iLTVcIn0+XHJcbiAgICAgICAgICA8Q29sIG1kPXs4fSBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgICAgICAgPENyZWF0ZUJhbmRGb3JtIC8+XHJcbiAgICAgICAgICAgIDxCaWdCYW5kVGFibGUgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBtZD17NH0+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoNT5Nb3N0IE5hbWVzIENvbnRyaWJ1dGVkPC9oNT5cclxuICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8VXNlclJlY29yZHNMaXN0XHJcbiAgICAgICAgICAgICAgICAgIG1heFJlY29yZHM9ezEwfVxyXG4gICAgICAgICAgICAgICAgICBzb3J0VHlwZT17VXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDU+SGlnaGVzdCBBdmVyYWdlIFNjb3JlPC9oNT5cclxuICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8VXNlclJlY29yZHNMaXN0XHJcbiAgICAgICAgICAgICAgICAgIG1heFJlY29yZHM9ezEwfVxyXG4gICAgICAgICAgICAgICAgICBzb3J0VHlwZT17VXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX0FWRVJBR0VfU0NPUkV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoNT5IaWdoZXN0IFNjb3JlPC9oNT5cclxuICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8VXNlclJlY29yZHNMaXN0XHJcbiAgICAgICAgICAgICAgICAgIG1heFJlY29yZHM9ezEwfVxyXG4gICAgICAgICAgICAgICAgICBzb3J0VHlwZT17VXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX1NDT1JFfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJyZWFjdC1ib290c3RyYXAvQWxlcnRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9TcGlubmVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luRm9ybSgpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgYXV0aGVudGljYXRpb25TdGF0dXMgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uLmF1dGhlbnRpY2F0aW9uU3RhdHVzXHJcbiAgKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gICAgZGlzcGF0Y2goc2Vzc2lvbkFjdGlvbnMucmVxdWVzdEF1dGhlbnRpY2F0ZVVzZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxDYXJkIHN0eWxlPXt7IG1heFdpZHRoOiBcIjM2cmVtXCIgfX0gY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljVXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Vc2VybmFtZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICBBdXRoZW50aWNhdGlvblN0YXR1c2VzLlVTRVJOQU1FX05PVF9GT1VORFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5UZXh0IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIE5ldyB1c2VyPyBDcmVhdGUgYW4gYWNjb3VudCA8YSBocmVmPVwiL25ldy11c2VyXCI+aGVyZTwvYT4uXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLlRleHQ+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgdXNlcm5hbWUuXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25TdGF0dXNlcy5JTlZBTElEX1BBU1NXT1JEXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIEluY29ycmVjdCBwYXNzd29yZC5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRJTkcgfHxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAge2F1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRJTkcgJiYgKFxyXG4gICAgICAgICAgICAgIDxBbGVydCB2YXJpYW50PVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgdmFyaWFudD1cInByaW1hcnlcIiAvPiBQcm9jZXNzaW5nLi4uXHJcbiAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2F1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRCAmJiAoXHJcbiAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJzdWNjZXNzXCI+U3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiE8L0FsZXJ0PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVzZXJQcm9maWxlVXJsKHVzZXJJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gXCIvdXNlcnMvXCIgKyB1c2VySWQ7XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi9jb21wb25lbnRzL01haW5cIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPE1haW4gLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcclxuKTtcclxuIiwiLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBTeW50aGV0aWNFdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CYWRnZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvbkdyb3VwXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXJcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RvZ2dsZUJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgdXNlVHlwZWRTZWxlY3RvciB9IGZyb20gXCIuLi9zdG9yZS9cIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMsIEJhbmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHtcclxuICBCYW5kTW9kQnV0dG9uR3JvdXAsXHJcbiAgUGxhY2Vob2xkZXJCYW5kTW9kQnV0dG9uR3JvdXBcclxufSBmcm9tIFwiLi9CYW5kTW9kQnV0dG9uR3JvdXBcIjtcclxuaW1wb3J0IHsgY3JlYXRlVXNlclByb2ZpbGVVcmwgfSBmcm9tIFwiLi91dGlsaXR5L2NyZWF0ZS11c2VyLXByb2ZpbGUtdXJsXCI7XHJcbmltcG9ydCB7IHNvcnRBbmRMaW1pdEJhbmRzIH0gZnJvbSBcIi4vdXRpbGl0eS9saW1pdC1zb3J0LWJhbmRzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmlnQmFuZFRhYmxlKCk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCBhcHBJc0ZldGNoaW5nQmFuZHMgPSB1c2VUeXBlZFNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5iYW5kcy5wZW5kaW5nRmV0Y2hlcyA+IDBcclxuICApO1xyXG4gIGNvbnN0IGJhbmRzID0gdXNlVHlwZWRTZWxlY3Rvcigoc3RhdGUpID0+IFsuLi5zdGF0ZS5iYW5kcy5pdGVtc10pO1xyXG4gIGNvbnN0IHVzZXJJc0F1dGhlbnRpY2F0ZWQgPSB1c2VUeXBlZFNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PlxyXG4gICAgICBzdGF0ZS5zZXNzaW9uLmF1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRFxyXG4gICk7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlVHlwZWRTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlc3Npb24udXNlcklkKTtcclxuICBjb25zdCB1c2Vyc01vZGlmaWNhdGlvbnMgPSB1c2VUeXBlZFNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uLmJhbmRzTW9kaWZpZWRcclxuICApO1xyXG5cclxuICBjb25zdCBbc29ydFR5cGUsIHNldFNvcnRUeXBlXSA9IHVzZVN0YXRlKEJhbmRTb3J0VHlwZXMuTU9TVF9SRUNFTlQpO1xyXG4gIGNvbnN0IFtzaG91bGRGZXRjaEJhbmRzLCBzZXRTaG91bGRGZXRjaEJhbmRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBiYW5kc1BlckZldGNoID0gMjA7XHJcbiAgY29uc3QgW21heEJhbmRzRGlzcGxheWVkLCBzZXRNYXhCYW5kc0Rpc3BsYXllZF0gPSB1c2VTdGF0ZShiYW5kc1BlckZldGNoKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRQb2ludHNUbyhcclxuICAgIHRhcmdldEJhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCxcclxuICAgIG1vZGlmaWNhdGlvblZhbHVlOiBudW1iZXIsXHJcbiAgICBtb2RpZnlpbmdVc2VySWQ/OiBNb25nb29zZVR5cGVzLk9iamVjdElkLFxyXG4gICAgdW5kb1ZhbHVlPzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBpZiAobW9kaWZ5aW5nVXNlcklkKSB7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RNb2RpZnlCYW5kU2NvcmUoe1xyXG4gICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgbW9kaWZ5aW5nVXNlcklkLFxyXG4gICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICB1bmRvVmFsdWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlcXVlc3RGZXRjaEJhbmRzKCkge1xyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RGZXRjaEJhbmRzKHtcclxuICAgICAgICBtYXhCYW5kczogbWF4QmFuZHNEaXNwbGF5ZWQsXHJcbiAgICAgICAgc29ydEJ5OiBzb3J0VHlwZSxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRVc2VyTW9kaWZpY2F0aW9uVG9CYW5kKHRoaXNCYW5kSWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQpIHtcclxuICAgIGNvbnN0IG1vZGlmaWNhdGlvbiA9IHVzZXJzTW9kaWZpY2F0aW9ucy5maW5kKFxyXG4gICAgICAobW9kaWZpY2F0aW9uKSA9PiBtb2RpZmljYXRpb24udGFyZ2V0QmFuZElkID09PSB0aGlzQmFuZElkXHJcbiAgICApO1xyXG4gICAgaWYgKG1vZGlmaWNhdGlvbikgcmV0dXJuIG1vZGlmaWNhdGlvbi52YWx1ZTtcclxuICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVxdWVzdEZldGNoQmFuZHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXF1ZXN0RmV0Y2hCYW5kcygpO1xyXG4gICAgc2V0U2hvdWxkRmV0Y2hCYW5kcyhmYWxzZSk7XHJcbiAgfSwgW21heEJhbmRzRGlzcGxheWVkLCBzaG91bGRGZXRjaEJhbmRzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRNYXhCYW5kc0Rpc3BsYXllZChiYW5kc1BlckZldGNoKTtcclxuICAgIHNldFNob3VsZEZldGNoQmFuZHModHJ1ZSk7XHJcbiAgfSwgW3NvcnRUeXBlXSk7XHJcblxyXG4gIGNvbnN0IGRlc2lyZWRCYW5kcyA9IHNvcnRBbmRMaW1pdEJhbmRzKGJhbmRzLCBzb3J0VHlwZSwgbWF4QmFuZHNEaXNwbGF5ZWQpO1xyXG5cclxuICBjb25zdCBzb3J0UmFkaW9zID0gW1xyXG4gICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5CRVNULCBuYW1lOiBcIkJlc3RcIiB9LFxyXG4gICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5XT1JTVCwgbmFtZTogXCJXb3JzdFwiIH0sXHJcbiAgICB7IHZhbHVlOiBCYW5kU29ydFR5cGVzLk1PU1RfUkVDRU5ULCBuYW1lOiBcIk1vc3QgUmVjZW50XCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICA8QnV0dG9uR3JvdXAgdG9nZ2xlPlxyXG4gICAgICAgICAge3NvcnRSYWRpb3MubWFwKChyYWRpbywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtyYWRpby52YWx1ZX1cclxuICAgICAgICAgICAgICBuYW1lPVwic29ydFJhZGlvXCJcclxuICAgICAgICAgICAgICBjaGVja2VkPXtyYWRpby52YWx1ZSA9PT0gc29ydFR5cGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBTeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyB0eXBlb2YgZS5jdXJyZW50VGFyZ2V0ICYge1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRUeXBlQXNOdW1iZXI6IG51bWJlciA9IHBhcnNlSW50KGN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U29ydFR5cGUoc29ydFR5cGVBc051bWJlcik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtyYWRpby5uYW1lfVxyXG4gICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgPFRhYmxlIHNpemU9XCJzbVwiIHN0cmlwZWQgYm9yZGVyZWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHthcHBJc0ZldGNoaW5nQmFuZHMgPyAoXHJcbiAgICAgICAgICAgICAgPD57Z2V0RW50cnlQbGFjZWhvbGRlcnMoYmFuZHNQZXJGZXRjaCl9PC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtkZXNpcmVkQmFuZHMubWFwKChiYW5kKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1N0cmluZyhiYW5kLl9pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCYW5kTW9kQnV0dG9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklzQXV0aG9yaXplZD17dXNlcklzQXV0aGVudGljYXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kUGVyZm9ybWVkPXtnZXRVc2VyTW9kaWZpY2F0aW9uVG9CYW5kKGJhbmQuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5QmFuZD17KG1vZFZhbHVlLCB1bmRvVmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkUG9pbnRzVG8oYmFuZC5faWQsIG1vZFZhbHVlLCB1c2VySWQsIHVuZG9WYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntiYW5kLnNjb3JlfTwvQmFkZ2U+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge2JhbmQubmFtZX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiZm9udC13ZWlnaHQtbGlnaHRlclwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2NyZWF0ZVVzZXJQcm9maWxlVXJsKFN0cmluZyhiYW5kLm93bmVySWQpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2JhbmQub3duZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgYmxvY2tcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIHNldE1heEJhbmRzRGlzcGxheWVkKG1heEJhbmRzRGlzcGxheWVkICsgYmFuZHNQZXJGZXRjaClcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaG93IG1lIG1vcmUuLi5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RW50cnlQbGFjZWhvbGRlcnMobnVtT2ZQbGFjZWhvbGRlcnM6IG51bWJlcik6IEpTWC5FbGVtZW50W10ge1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZQbGFjZWhvbGRlcnM7IGkrKykge1xyXG4gICAgcGxhY2Vob2xkZXJzLnB1c2goQmFuZFRhYmxlRW50cnlQbGFjZWhvbGRlcigpKTtcclxuICB9XHJcbiAgcmV0dXJuIHBsYWNlaG9sZGVycztcclxufVxyXG5cclxuZnVuY3Rpb24gQmFuZFRhYmxlRW50cnlQbGFjZWhvbGRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0cj5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxQbGFjZWhvbGRlckJhbmRNb2RCdXR0b25Hcm91cCAvPntcIiBcIn1cclxuICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJzbVwiIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJSZWNvcmQgPSB7XHJcbiAgaWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRvdGFsU2NvcmU6IG51bWJlcjtcclxuICBuYW1lc0NvbnRyaWJ1dGVkOiBudW1iZXI7XHJcbiAgYXZlcmFnZVNjb3JlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIFVzZXJSZWNvcmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogbnVtYmVyO1xyXG4gIGl0ZW1zOiBVc2VyUmVjb3JkW107XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJSZWNvcmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogMCxcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUmVjb3Jkc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclJlY29yZHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHJlcXVlc3RGZXRjaFVzZXJSZWNvcmRzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICBudW1PZlJlY29yZHM6IG51bWJlcjtcclxuICAgICAgICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcysrO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclJlY29yZHNTdWNjZXNzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFVzZXJSZWNvcmRbXT5cclxuICAgICkge1xyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKChuZXdSZWNvcmQpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLml0ZW1zLnNvbWUoKHJlY29yZCkgPT4gcmVjb3JkLmlkID09IG5ld1JlY29yZC5pZCkpXHJcbiAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKG5ld1JlY29yZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclJlY29yZHNGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclJlY29yZHNBY3Rpb25zID0gdXNlclJlY29yZHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVjb3Jkc1NsaWNlLnJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlclJlY29yZHNBY3Rpb25zLFxyXG4gIFVzZXJSZWNvcmQsXHJcbn0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlL1wiO1xyXG5pbXBvcnQgeyBzb3J0QW5kTGltaXRVc2VyUmVjb3JkcyB9IGZyb20gXCIuL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHNcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQmFkZ2VcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybFwiXHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFJvb3RTdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhcHBJc0ZldGNoaW5nUmVjb3Jkczogc3RhdGUudXNlclJlY29yZHMucGVuZGluZ0ZldGNoZXMgPiAwLFxyXG4gICAgcmVjb3JkczogWy4uLnN0YXRlLnVzZXJSZWNvcmRzLml0ZW1zXSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVxdWVzdFVzZXJSZWNvcmRzOiAoXHJcbiAgICAgIG51bU9mUmVjb3JkczogbnVtYmVyLFxyXG4gICAgICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlc1xyXG4gICAgKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIHVzZXJSZWNvcmRzQWN0aW9ucy5yZXF1ZXN0RmV0Y2hVc2VyUmVjb3Jkcyh7IG51bU9mUmVjb3Jkcywgc29ydFR5cGUgfSlcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGlzdEVudHJ5QmFkZ2UocHJvcHM6IHtcclxuICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxuICByZWNvcmQ6IFVzZXJSZWNvcmQ7XHJcbn0pIHtcclxuICBzd2l0Y2ggKHByb3BzLnNvcnRUeXBlKSB7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9BVkVSQUdFX1NDT1JFOlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57cHJvcHMucmVjb3JkLmF2ZXJhZ2VTY29yZS50b0ZpeGVkKDIpfTwvQmFkZ2U+O1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfU0NPUkU6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntwcm9wcy5yZWNvcmQudG90YWxTY29yZX08L0JhZGdlPjtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEOlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57cHJvcHMucmVjb3JkLm5hbWVzQ29udHJpYnV0ZWR9PC9CYWRnZT47XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj4/PC9CYWRnZT47XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIFVzZXJSZWNvcmRzTGlzdFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPiAmIHtcclxuICBtYXhSZWNvcmRzOiBudW1iZXI7XHJcbiAgc29ydFR5cGU6IFVzZXJSZWNvcmRTb3J0VHlwZXM7XHJcbn07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZFVzZXJSZWNvcmRzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxVc2VyUmVjb3Jkc0xpc3RQcm9wcz4ge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5yZXF1ZXN0VXNlclJlY29yZHModGhpcy5wcm9wcy5tYXhSZWNvcmRzLCB0aGlzLnByb3BzLnNvcnRUeXBlKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmFwcElzRmV0Y2hpbmdSZWNvcmRzKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgdXNlciByZWNvcmRzLi4uPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlc2lyZWRSZWNvcmRzID0gc29ydEFuZExpbWl0VXNlclJlY29yZHMoXHJcbiAgICAgIHRoaXMucHJvcHMucmVjb3JkcyxcclxuICAgICAgdGhpcy5wcm9wcy5zb3J0VHlwZSxcclxuICAgICAgdGhpcy5wcm9wcy5tYXhSZWNvcmRzXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtkZXNpcmVkUmVjb3Jkcy5tYXAoKHJlY29yZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17U3RyaW5nKHJlY29yZC5pZCl9PlxyXG4gICAgICAgICAgICAgIDx0ZD57aW5kZXggKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2NyZWF0ZVVzZXJQcm9maWxlVXJsKFN0cmluZyhyZWNvcmQuaWQpKX0+e3JlY29yZC5uYW1lfTwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGlzdEVudHJ5QmFkZ2VcclxuICAgICAgICAgICAgICAgICAgc29ydFR5cGU9e3RoaXMucHJvcHMuc29ydFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclJlY29yZHNMaXN0ID0gY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVW5jb25uZWN0ZWRVc2VyUmVjb3Jkc0xpc3QpO1xyXG4iLCJleHBvcnQgeyBiYW5kQ3JlYXRpb25TYWdhIH0gZnJvbSBcIi4vYmFuZC1jcmVhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IGJhbmRTY29yZU1vZGlmaWNhdGlvblNhZ2EgfSBmcm9tIFwiLi9iYW5kLXNjb3JlLW1vZGlmaWNhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IHVzZXJBdXRoZW50aWNhdGlvblNhZ2EgfSBmcm9tIFwiLi91c2VyLWF1dGhlbnRpY2F0aW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgdXNlckNyZWF0aW9uU2FnYSB9IGZyb20gXCIuL3VzZXItY3JlYXRpb24tc2FnYVwiO1xyXG5leHBvcnQgeyB3YXRjaEZldGNoQmFuZHNTYWdhIH0gZnJvbSBcIi4vd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYVwiO1xyXG5leHBvcnQgeyB3YXRjaEZldGNoVXNlclJlY29yZHNTYWdhIH0gZnJvbSBcIi4vZmV0Y2gtdXNlci1yZWNvcmRzLXNhZ2FcIjtcclxuZXhwb3J0IHsgZmV0Y2hQcm9maWxlU2FnYSB9IGZyb20gXCIuL2ZldGNoLXVzZXItcHJvZmlsZS1zYWdhXCI7XHJcbmV4cG9ydCB7IGNoZWNrU2Vzc2lvblNhZ2EgfSBmcm9tIFwiLi9jaGVjay1zZXNzaW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgbG9nb3V0U2FnYSB9IGZyb20gXCIuL2xvZ291dC1zYWdhXCI7IiwiaW1wb3J0IHsgQmFuZFNvcnRUeXBlcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydEFuZExpbWl0QmFuZHMoXHJcbiAgYmFuZHM6IEJhbmRDbGFzc1tdLFxyXG4gIHNvcnRCeTogQmFuZFNvcnRUeXBlcyxcclxuICBsaW1pdDogbnVtYmVyXHJcbik6IEJhbmRDbGFzc1tdIHtcclxuICBsZXQgZmlsdGVyZWRCYW5kcyA9IFsuLi5iYW5kc107XHJcblxyXG4gIHN3aXRjaCAoc29ydEJ5KSB7XHJcbiAgICBjYXNlIEJhbmRTb3J0VHlwZXMuQkVTVDpcclxuICAgICAgZmlsdGVyZWRCYW5kcy5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLk1PU1RfUkVDRU5UOlxyXG4gICAgICBmaWx0ZXJlZEJhbmRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAvLyBUT0RPOiBXaGF0IGlzIGhhcHBlbmluZyBoZXJlP1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gRGF0ZS5wYXJzZShiLmNyZWF0ZWRPbikgLSBEYXRlLnBhcnNlKGEuY3JlYXRlZE9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLldPUlNUOlxyXG4gICAgICBmaWx0ZXJlZEJhbmRzLnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgLSBiLnNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGZpbHRlcmVkQmFuZHMgPSBmaWx0ZXJlZEJhbmRzLnNsaWNlKDAsIGxpbWl0KTtcclxuICByZXR1cm4gZmlsdGVyZWRCYW5kcztcclxufVxyXG4iLCIvLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcywgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFVzZXJDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbi8vIFVuY29ubmVjdGVkTmV3VXNlckZvcm0ucHJvcFR5cGVzID0ge1xyXG4vLyAgIHN1Ym1pdEZvcm06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbi8vICAgdXNlckNyZWF0aW9uU3RhdHVzOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhVc2VyQ3JlYXRpb25TdGF0dXNlcykpLFxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2Vzc2lvbiB9KSA9PiAoe1xyXG4vLyAgIHVzZXJDcmVhdGlvblN0YXR1czogc2Vzc2lvbi51c2VyQ3JlYXRpb25TdGF0dXMsXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4vLyAgIHN1Ym1pdEZvcm06ICgvKmVtYWlsLCovIHVzZXJuYW1lLCBwYXNzd29yZCwgcmVwZWF0UGFzc3dvcmQpID0+XHJcbi8vICAgICBkaXNwYXRjaChcclxuLy8gICAgICAgc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENyZWF0ZVVzZXIoe1xyXG4vLyAgICAgICAgIC8vIGVtYWlsLFxyXG4vLyAgICAgICAgIHVzZXJuYW1lLFxyXG4vLyAgICAgICAgIHBhc3N3b3JkLFxyXG4vLyAgICAgICAgIHJlcGVhdFBhc3N3b3JkLFxyXG4vLyAgICAgICB9KVxyXG4vLyAgICAgKSxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG4vLyB0eXBlIE5ld1VzZXJGb3JtUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+O1xyXG5cclxuLy8gdHlwZSBOZXdVc2VyRm9ybVN0YXRlID0ge1xyXG4vLyAgIGVtYWlsOiBzdHJpbmc7XHJcbi8vICAgdXNlcm5hbWU6IHN0cmluZztcclxuLy8gICBwYXNzd29yZDogc3RyaW5nO1xyXG4vLyAgIHJlcGVhdFBhc3N3b3JkOiBzdHJpbmc7XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmV3VXNlckZvcm0oKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHVzZXJDcmVhdGlvblN0YXR1cyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNlc3Npb24udXNlckNyZWF0aW9uU3RhdHVzXHJcbiAgKTtcclxuXHJcbiAgLy8gY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlcGVhdFBhc3N3b3JkLCBzZXRSZXBlYXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBmdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDcmVhdGVVc2VyKHtcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICByZXBlYXRQYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgPENhcmQgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzZyZW1cIiB9fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICB7LyogPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJFbWFpbFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsIEFkZHJlc3M8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuSU5WQUxJRF9FTUFJTFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPiAqL31cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJOYW1lXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICB1c2VyQ3JlYXRpb25TdGF0dXMgPT0gVXNlckNyZWF0aW9uU3RhdHVzZXMuVVNFUk5BTUVfVEFLRU5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIFVzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW4uXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgIHVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJSZXBlYXRQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlJlcGVhdCBQYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXBlYXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICB1c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuUEFTU1dPUkRTX0RPTlRfTUFUQ0hcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIFBhc3N3b3JkcyBkb24mYXBvczt0IG1hdGNoLlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgdXNlckNyZWF0aW9uU3RhdHVzID09IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgfHxcclxuICAgICAgICAgICAgICAgIHVzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN1Ym1pdEZvcm0oKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAge3VzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIEFjY291bnQgY3JlYXRlZCEgWW91IG1heSBub3cgPGEgaHJlZj1cIi9sb2dpblwiPmxvZyBpbjwvYT4uXHJcbiAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3VzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz4gUHJvY2Vzc2luZy4uLlxyXG4gICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBjbGFzcyBVbmNvbm5lY3RlZE5ld1VzZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4vLyAgIE5ld1VzZXJGb3JtUHJvcHMsXHJcbi8vICAgTmV3VXNlckZvcm1TdGF0ZVxyXG4vLyA+IHtcclxuLy8gICBzdGF0ZSA9IHtcclxuLy8gICAgIGVtYWlsOiBcIlwiLFxyXG4vLyAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbi8vICAgICBwYXNzd29yZDogXCJcIixcclxuLy8gICAgIHJlcGVhdFBhc3N3b3JkOiBcIlwiLFxyXG4vLyAgIH07XHJcblxyXG4vLyAgIC8vIFRPRE86IFdvdWxkbid0IGl0IGJlIGVhc3kgdG8gbWFrZSBpdCBzbyB0aGUgZW1haWwgaXMgdmFsaWRhdGVkIGFzIHRoZSB1c2VyIHR5cGVzPyBNYXliZSBvbiBhIHNsaWdodCBkZWxheT8gU2FtZSB3aXRoIHRoZSB1c2VybmFtZSBhbmQgcGFzc3dvcmQ/XHJcblxyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIGNvbnN0IHsgdXNlckNyZWF0aW9uU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wibWItNVwifT5cclxuLy8gICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXhXaWR0aDogXCIzNnJlbVwiIH19IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuLy8gICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbi8vICAgICAgICAgICAgIDxGb3JtPlxyXG4vLyAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlckVtYWlsXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbCBBZGRyZXNzPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuLy8gICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLklOVkFMSURfRU1BSUxcclxuLy8gICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cclxuLy8gICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4vLyAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD4gKi99XHJcbi8vICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJOYW1lXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Vc2VybmFtZTwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbi8vICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuLy8gICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5VU0VSTkFNRV9UQUtFTlxyXG4vLyAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICBVc2VybmFtZSBpcyBhbHJlYWR5IHRha2VuLlxyXG4vLyAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyUGFzc3dvcmRcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbi8vICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuLy8gICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSFxyXG4vLyAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuLy8gICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlclJlcGVhdFBhc3N3b3JkXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5SZXBlYXQgUGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbi8vICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVwZWF0UGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbi8vICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlBBU1NXT1JEU19ET05UX01BVENIXHJcbi8vICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkcyBkb24mYXBvczt0IG1hdGNoLlxyXG4vLyAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgIDxCdXR0b25cclxuLy8gICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4vLyAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4vLyAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgfHxcclxuLy8gICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT0gVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTU1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXRGb3JtKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuZW1haWwsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VybmFtZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhc3N3b3JkLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVwZWF0UGFzc3dvcmRcclxuLy8gICAgICAgICAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4vLyAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTUyAmJiAoXHJcbi8vICAgICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgQWNjb3VudCBjcmVhdGVkISBZb3UgbWF5IG5vdyA8YSBocmVmPVwiL2xvZ2luXCI+bG9nIGluPC9hPi5cclxuLy8gICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbi8vICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICB7dXNlckNyZWF0aW9uU3RhdHVzID09IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgJiYgKFxyXG4vLyAgICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJpbmZvXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz4gUHJvY2Vzc2luZy4uLlxyXG4vLyAgICAgICAgICAgICAgICAgPC9BbGVydD5cclxuLy8gICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICA8L0Zvcm0+XHJcbi8vICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuLy8gICAgICAgICA8L0NhcmQ+XHJcbi8vICAgICAgIDwvQ29udGFpbmVyPlxyXG4vLyAgICAgKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBOZXdVc2VyRm9ybSA9IGNvbm5lY3QoXHJcbi8vICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4vLyAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4vLyApKFVuY29ubmVjdGVkTmV3VXNlckZvcm0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9