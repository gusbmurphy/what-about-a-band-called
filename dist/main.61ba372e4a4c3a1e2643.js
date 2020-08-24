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
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var user_profile_slice_1 = __webpack_require__(/*! ../store/slices/user-profile-slice */ "4tJo");
var Container_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Container */ "7vrA"));
var Row_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Row */ "3Z9Z"));
var Col_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Col */ "JI6e"));
var Card_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Card */ "6xyR"));
var Table_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Table */ "MBJH"));
var Badge_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Badge */ "65eO"));
var get_time_since_1 = __webpack_require__(/*! ../components/utility/get-time-since */ "KiFf");
// function mapStateToProps(state: RootState) {
//   return {
//     fetchStatus: state.userProfile.fetchStatus,
//     profile: state.userProfile.profile,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     requestFetchProfile: (targetId: MongooseTypes.ObjectId) => {
//       dispatch(userProfileActions.requestFetchUserProfile({ targetId }));
//     },
//   };
// }
// const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
// type UserProfileProps = ConnectedProps<typeof reduxConnector> & {
//   id: MongooseTypes.ObjectId;
// };
function UserProfile(_a) {
    var userId = _a.userId;
    var _b = react_redux_1.useSelector(function (state) { return state.userProfile; }), fetchStatus = _b.fetchStatus, profile = _b.profile;
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
// class UnconnectedUserProfile extends React.Component<UserProfileProps> {
//   componentDidMount() {
//     this.props.requestFetchProfile(this.props.id);
//   }
//   render() {
//     const { profile } = this.props;
//     if (profile) {
//       return (
//         <Container className={"mb-5"}>
//           <Card>
//             <Card.Header>
//               <h5>{profile.name}</h5>
//             </Card.Header>
//             <Card.Body>
//               <Card>
//                 <Card.Body>
//                   <Row>
//                     <Col md={4}>
//                       <div>
//                         Total score: <b>{profile.totalScore}</b>
//                       </div>
//                       <div>
//                         Average score: <b>{profile.averageScore.toFixed(2)}</b>
//                       </div>
//                       <div>
//                         Names contributed: <b>{profile.namesContributed}</b>
//                       </div>
//                     </Col>
//                     <Col md={8}>
//                       <Table size="sm" striped bordered>
//                         <tbody>
//                           {profile.bands.map((band) => (
//                             <tr key={String(band._id)}>
//                               <td>
//                                 <Badge variant="secondary">{band.score}</Badge>{" "}
//                                 <b>{band.name}</b> (created{" "}
//                                 {getTimeSince(new Date(band.createdOn))} ago)
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </Table>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Card>
//             </Card.Body>
//           </Card>
//         </Container>
//       );
//     } else {
//       return null;
//     }
//   }
// }
// export const UserProfile = reduxConnector(UnconnectedUserProfile);


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
exports.Landing = function () { return (react_1.default.createElement(react_1.default.Fragment, null,
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
                        react_1.default.createElement(UserRecordsList_1.UserRecordsList, { maxRecords: 10, sortType: statuses_1.UserRecordSortTypes.HIGHEST_SCORE })))))))); };


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
// import PropTypes from "prop-types";
var react_1 = __importStar(__webpack_require__(/*! react */ "q1tI"));
var Button_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Button */ "cWnB"));
var ButtonGroup_1 = __importDefault(__webpack_require__(/*! react-bootstrap/ButtonGroup */ "pJDg"));
var Badge_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Badge */ "65eO"));
var Card_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Card */ "6xyR"));
var Table_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Table */ "MBJH"));
var ToggleButton_1 = __importDefault(__webpack_require__(/*! react-bootstrap/ToggleButton */ "hlKo"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var bands_slice_1 = __webpack_require__(/*! ../store/slices/bands-slice */ "Xep1");
var limit_sort_bands_1 = __webpack_require__(/*! ./utility/limit-sort-bands */ "vpfB");
var BandModButtonGroup_1 = __webpack_require__(/*! ./BandModButtonGroup */ "1HUD");
var store_1 = __webpack_require__(/*! ../store/ */ "YZbJ");
var create_user_profile_url_1 = __webpack_require__(/*! ./utility/create-user-profile-url */ "n7of");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "55Ip");
// TODO: Something should display when we have no bands to display!
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
function mapStateToProps(state) {
    return {
        appIsFetchingBands: state.bands.pendingFetches > 0,
        bands: __spreadArrays(state.bands.items),
        userIsAuthenticated: state.session.authenticationStatus == statuses_1.AuthenticationStatuses.AUTHENTICATED
            ? true
            : false,
        userId: state.session.userId,
        usersModifications: state.session.bandsModified,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addPointsTo: function (targetBandId, modificationValue, modifyingUserId, undoValue) {
            if (modifyingUserId) {
                dispatch(bands_slice_1.bandActions.requestModifyBandScore({
                    targetBandId: targetBandId,
                    modifyingUserId: modifyingUserId,
                    modificationValue: modificationValue,
                    undoValue: undoValue,
                }));
            }
        },
        requestFetchBands: function (maxBands, sortBy) {
            dispatch(bands_slice_1.bandActions.requestFetchBands({ maxBands: maxBands, sortBy: sortBy }));
        },
    };
}
// const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
// type BigBandTableProps = ConnectedProps<typeof reduxConnector>;
// type BigBandTableState = {
//   sortType: BandSortTypes;
//   bandsPerFetch: number;
//   shouldFetchBands: boolean;
//   maxBandsDisplayed: number;
// };
// class UnconnectedBigBandTable extends React.Component<
//   BigBandTableProps,
//   BigBandTableState
// > {
//   state = {
//     sortType: BandSortTypes.MOST_RECENT,
//     bandsPerFetch: defaultBandsPerFetch,
//     shouldFetchBands: false,
//     maxBandsDisplayed: defaultBandsPerFetch,
//   };
//   componentDidMount() {
//     this.props.requestFetchBands(this.state.bandsPerFetch, this.state.sortType);
//   }
//   componentDidUpdate(
//     prevProps: BigBandTableProps,
//     prevState: BigBandTableState
//   ) {
//     if (
//       this.state.maxBandsDisplayed > prevState.maxBandsDisplayed ||
//       this.state.shouldFetchBands
//     ) {
//       this.props.requestFetchBands(
//         this.state.maxBandsDisplayed,
//         this.state.sortType
//       );
//       this.setState({ shouldFetchBands: false });
//     }
//     if (this.state.sortType !== prevState.sortType) {
//       this.setState({
//         maxBandsDisplayed: this.state.bandsPerFetch,
//         shouldFetchBands: true,
//       });
//     }
//   }
//   setSortType(newType: BandSortTypes) {
//     this.setState({ sortType: newType });
//   }
//   loadMore() {
//     this.setState((state) => {
//       return {
//         maxBandsDisplayed: state.maxBandsDisplayed + state.bandsPerFetch,
//       };
//     });
//   }
//   getUserModificationToBand(thisBandId: MongooseTypes.ObjectId) {
//     const modification = this.props.usersModifications.find(
//       (modification) => modification.targetBandId === thisBandId
//     );
//     if (modification) return modification.value;
//     else return 0;
//   }
//   render() {
//     // TODO: Should we have some notification that bands are being fetched?
//     const desiredBands = sortAndLimitBands(
//       this.props.bands,
//       this.state.sortType,
//       this.state.maxBandsDisplayed
//     );
//     const sortRadios = [
//       { value: BandSortTypes.BEST, name: "Best" },
//       { value: BandSortTypes.WORST, name: "Worst" },
//       { value: BandSortTypes.MOST_RECENT, name: "Most Recent" },
//     ];
//     const { userIsAuthenticated } = this.props;
//     return (
//       <Card>
//         <Card.Header>
//           <ButtonGroup toggle>
//             {sortRadios.map((radio, idx) => (
//               <ToggleButton
//                 key={idx}
//                 type="radio"
//                 value={radio.value}
//                 name="sortRadio"
//                 checked={radio.value === this.state.sortType}
//                 onChange={(e: SyntheticEvent) => {
//                   e.preventDefault();
//                   const currentTarget = e.currentTarget as typeof e.currentTarget & {
//                     value: string;
//                   };
//                   const sortTypeAsNumber: number = parseInt(
//                     currentTarget.value
//                   );
//                   this.setSortType(sortTypeAsNumber);
//                 }}
//               >
//                 {radio.name}
//               </ToggleButton>
//             ))}
//           </ButtonGroup>
//         </Card.Header>
//         <Card.Body>
//           <Table size="sm" striped bordered>
//             <tbody>
//               {this.props.appIsFetchingBands ? (
//                 <>{getEntryPlaceholders(defaultBandsPerFetch)}</>
//               ) : (
//                 <>
//                   {desiredBands.map((band) => (
//                     <tr key={String(band._id)}>
//                       <td>
//                         <BandModButtonGroup
//                           userIsAuthorized={userIsAuthenticated}
//                           modPerformed={this.getUserModificationToBand(
//                             band._id
//                           )}
//                           modifyBand={(modValue, undoValue) =>
//                             this.props.addPointsTo(
//                               band._id,
//                               modValue,
//                               this.props.userId,
//                               undoValue
//                             )
//                           }
//                         />{" "}
//                         <Badge variant="secondary">{band.score}</Badge>{" "}
//                         {band.name}{" "}
//                         <span className={"font-weight-lighter"}>
//                           from{" "}
//                           <Link to={createUserProfileUrl(String(band.ownerId))}>
//                             {band.ownerName}
//                           </Link>
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </>
//               )}
//             </tbody>
//           </Table>
//           <Button variant="secondary" block onClick={() => this.loadMore()}>
//             Show me more...
//           </Button>
//         </Card.Body>
//       </Card>
//     );
//   }
// }
// function getEntryPlaceholders(numOfPlaceholders: number): JSX.Element[] {
//   const placeholders: JSX.Element[] = [];
//   for (let i = 0; i < numOfPlaceholders; i++) {
//     placeholders.push(BandTableEntryPlaceholder());
//   }
//   return placeholders;
// }
// const BandTableEntryPlaceholder = () => {
//   return (
//     <tr>
//       <td>
//         <PlaceholderBandModButtonGroup />{" "}
//         <Spinner animation="border" variant="primary" size="sm" />
//       </td>
//     </tr>
//   );
// };
// export const BigBandTable = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UnconnectedBigBandTable);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0JhbmRNb2RCdXR0b25Hcm91cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCYW5kRm9ybUFsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zdGF0dXNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2JhbmQtY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0NyZWF0ZUJhbmRGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2xvZ291dC1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2dldC10aW1lLXNpbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItYXV0aGVudGljYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlclByb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvZmV0Y2gtdXNlci1yZWNvcmRzLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9iYW5kLXNjb3JlLW1vZGlmaWNhdGlvbi1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGF0aHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9jaGVjay1zZXNzaW9uLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvYmFuZHMtc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2ZldGNoLXVzZXItcHJvZmlsZS1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW4udHN4Iiwid2VicGFjazovLy8od2VicGFjaykvaG90IHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9sb2ckIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9MYW5kaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2NyZWF0ZS11c2VyLXByb2ZpbGUtdXJsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9CaWdCYW5kVGFibGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlclJlY29yZHNMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2xpbWl0LXNvcnQtYmFuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL05ld1VzZXJGb3JtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQStDOztBQUV4QyxnQkFBZ0Isb0VBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGM0MscUVBQTJEO0FBQzNELHNHQUF3RDtBQUN4RCxnSEFBa0U7QUFDbEUsNkRBS3dCO0FBRXhCLCtGQUErRjtBQUMvRixTQUFnQixrQkFBa0IsQ0FBQyxFQVFsQztRQVBDLGdCQUFnQix3QkFDaEIsVUFBVSxrQkFDVixZQUFZO0lBTU4sU0FBMEIsZ0JBQVEsQ0FBQyxZQUFZLENBQUMsRUFBL0MsUUFBUSxVQUFFLFdBQVcsUUFBMEIsQ0FBQztJQUN2RCxJQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFM0MsaUJBQVMsQ0FBQztRQUNSLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNqQiwrRUFBK0U7WUFDL0UsSUFBSSxVQUFVO2dCQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksVUFBVTtnQkFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsT0FBTyxDQUNMLDhCQUFDLDJCQUFpQixJQUNoQixJQUFJLEVBQUUsWUFBWSxFQUNsQixLQUFLLEVBQUUsUUFBUSxFQUNmLFFBQVEsRUFBRSxVQUFDLEdBQUcsSUFBSyxrQkFBVyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsRUFBM0IsQ0FBMkI7UUFFOUMsOEJBQUMsc0JBQVksSUFDWCxJQUFJLEVBQUUsZ0JBQWdCLEVBQ3RCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDVCxRQUFRLEVBQUUsQ0FBQyxn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cEMsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QixxREFBcUQ7QUFDckQseURBQXlEO0FBQ3pELGtGQUFrRjtBQUNsRixvQkFBb0I7QUFDcEIsaUNBQWlDO0FBQ2pDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyxnREFBZ0Q7QUFDaEQsc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQixrREFBa0Q7QUFDbEQsb0RBQW9EO0FBQ3BELDRDQUE0QztBQUM1Qyw4RUFBOEU7QUFDOUUsMkJBQTJCO0FBQzNCLG1CQUFtQjtBQUNuQiw0RUFBNEU7QUFDNUUseUNBQXlDO0FBQ3pDLG1GQUFtRjtBQUNuRiwyQkFBMkI7QUFDM0IsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixTQUFTO0FBQ1QsTUFBTTtBQUNOLElBQUk7QUFFSixzQ0FBc0M7QUFDdEMscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2Qiw2QkFBNkIiLCJmaWxlIjoibWFpbi42MWJhMzcyZTRhNGMzYTFlMjY0My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVG9nZ2xlQnV0dG9uXCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RvZ2dsZUJ1dHRvbkdyb3VwXCI7XHJcbmltcG9ydCB7XHJcbiAgQnNDYXJldERvd24sXHJcbiAgQnNDYXJldERvd25GaWxsLFxyXG4gIEJzQ2FyZXRVcCxcclxuICBCc0NhcmV0VXBGaWxsLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5cclxuLy8gVE9ETzogTG9nZ2luZyBvdXQgd2lsbCBzdGlsbCBzaG93IHRoZSBCc0NhcnJldHMgYXMgJ2ZpbGxlZCcgaWYgdGhlIHVzZXIgbW9kaWZpZWQgdGhvc2UgYmFuZHNcclxuZXhwb3J0IGZ1bmN0aW9uIEJhbmRNb2RCdXR0b25Hcm91cCh7XHJcbiAgdXNlcklzQXV0aG9yaXplZCxcclxuICBtb2RpZnlCYW5kLFxyXG4gIG1vZFBlcmZvcm1lZCxcclxufToge1xyXG4gIHVzZXJJc0F1dGhvcml6ZWQ6IGJvb2xlYW47XHJcbiAgbW9kaWZ5QmFuZD86IChtb2RWYWx1ZTogbnVtYmVyLCB1bmRvVmFsdWU/OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgbW9kUGVyZm9ybWVkOiBudW1iZXI7XHJcbn0pOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgW21vZFZhbHVlLCBzZXRNb2RWYWx1ZV0gPSB1c2VTdGF0ZShtb2RQZXJmb3JtZWQpO1xyXG4gIGNvbnN0IHByZXZNb2RWYWx1ZSA9IHVzZVByZXZpb3VzKG1vZFZhbHVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtb2RWYWx1ZSA9PSAwKSB7XHJcbiAgICAgIC8vIFRPRE86IFRoaXMgYWN0IG9mIGNoZWNraW5nIGlmIG1vZGlmeUJhbmQgZXhpc3RzIHNlZW1zIGJhZCwgY2FuIHdlIGRvIGJldHRlcj9cclxuICAgICAgaWYgKG1vZGlmeUJhbmQpIG1vZGlmeUJhbmQoMCwgcHJldk1vZFZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtb2RpZnlCYW5kKSBtb2RpZnlCYW5kKG1vZFZhbHVlKTtcclxuICAgIH1cclxuICB9LCBbbW9kVmFsdWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2dnbGVCdXR0b25Hcm91cFxyXG4gICAgICBuYW1lPXtcIm1vZEJ1dHRvbnNcIn1cclxuICAgICAgdmFsdWU9e21vZFZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0TW9kVmFsdWUobW9kVmFsdWUgKyB2YWwpfVxyXG4gICAgPlxyXG4gICAgICA8VG9nZ2xlQnV0dG9uXHJcbiAgICAgICAgbmFtZT17XCJuZWdhdGl2ZUJ1dHRvblwifVxyXG4gICAgICAgIHZhbHVlPXstMX1cclxuICAgICAgICBkaXNhYmxlZD17IXVzZXJJc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgY2hlY2tlZD17bW9kUGVyZm9ybWVkID09IC0xfVxyXG4gICAgICA+XHJcbiAgICAgICAge21vZFZhbHVlID09IC0xID8gPEJzQ2FyZXREb3duRmlsbCAvPiA6IDxCc0NhcmV0RG93biAvPn1cclxuICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICBuYW1lPXtcInBvc2l0aXZlQnV0dG9uXCJ9XHJcbiAgICAgICAgdmFsdWU9ezF9XHJcbiAgICAgICAgZGlzYWJsZWQ9eyF1c2VySXNBdXRob3JpemVkfVxyXG4gICAgICAgIGNoZWNrZWQ9e21vZFBlcmZvcm1lZCA9PSAxfVxyXG4gICAgICA+XHJcbiAgICAgICAge21vZFZhbHVlID09IDEgPyA8QnNDYXJldFVwRmlsbCAvPiA6IDxCc0NhcmV0VXAgLz59XHJcbiAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZTogYW55KSB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGxhY2Vob2xkZXJCYW5kTW9kQnV0dG9uR3JvdXAoKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VG9nZ2xlQnV0dG9uR3JvdXAgbmFtZT17XCJwbGFjZUhvbGRlck1vZEJ1dHRvbnNcIn0+XHJcbiAgICAgIDxUb2dnbGVCdXR0b24gZGlzYWJsZWQ9e3RydWV9IHZhbHVlPXsxfT5cclxuICAgICAgICA8QnNDYXJldERvd24gLz5cclxuICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgIDxUb2dnbGVCdXR0b24gZGlzYWJsZWQ9e3RydWV9IHZhbHVlPXsyfT5cclxuICAgICAgICA8QnNDYXJldFVwIC8+XHJcbiAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVGZXRjaFN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyUHJvZmlsZVR5cGUgPSB7XHJcbiAgaWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRvdGFsU2NvcmU6IG51bWJlcjtcclxuICBuYW1lc0NvbnRyaWJ1dGVkOiBudW1iZXI7XHJcbiAgYXZlcmFnZVNjb3JlOiBudW1iZXI7XHJcbiAgYmFuZHM6IEJhbmRDbGFzc1tdO1xyXG59O1xyXG5cclxudHlwZSBVc2VyUHJvZmlsZVNsaWNlU3RhdGUgPSB7XHJcbiAgZmV0Y2hTdGF0dXM6IFByb2ZpbGVGZXRjaFN0YXR1c2VzO1xyXG4gIHByb2ZpbGU/OiBVc2VyUHJvZmlsZVR5cGU7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJQcm9maWxlU2xpY2VTdGF0ZSA9IHtcclxuICBmZXRjaFN0YXR1czogUHJvZmlsZUZldGNoU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICBwcm9maWxlOiB1bmRlZmluZWQsXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUHJvZmlsZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclByb2ZpbGVcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHJlcXVlc3RGZXRjaFVzZXJQcm9maWxlKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICB0YXJnZXRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5mZXRjaFN0YXR1cyA9IFByb2ZpbGVGZXRjaFN0YXR1c2VzLkFUVEVNUFRJTkc7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyUHJvZmlsZVN1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBwcm9maWxlOiBVc2VyUHJvZmlsZVR5cGUgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5mZXRjaFN0YXR1cyA9IFByb2ZpbGVGZXRjaFN0YXR1c2VzLlNVQ0NFU1M7XHJcbiAgICAgIHN0YXRlLnByb2ZpbGUgPSBhY3Rpb24ucGF5bG9hZC5wcm9maWxlO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclByb2ZpbGVGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmZldGNoU3RhdHVzID0gUHJvZmlsZUZldGNoU3RhdHVzZXMuRkFJTFVSRTtcclxuICAgICAgc3RhdGUucHJvZmlsZSA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclByb2ZpbGVBY3Rpb25zID0gdXNlclByb2ZpbGVTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCB1c2VyUHJvZmlsZVNsaWNlLnJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9BbGVydFwiO1xyXG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckFsZXJ0KCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPlVoIG9oLi4uPC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5cclxuICAgICAgICBTb21ldGhpbmcgd2VudCB3cm9uZyEgV2hhdCBkaWQgeW91IGRvIT8gRG8geW91IGhhdmUgYW55IGlkZWEgaG93IG11Y2ggSVxyXG4gICAgICAgIHdvcmtlZCB0byBnZXQgdGhpcyBwbGFjZSBjbGVhbiBhbmQgdGhlbiB5b3Ugc2hvdyB1cCBhbmQgbWVzcyB0aGUgd2hvbGVcclxuICAgICAgICB0aGluZyB1cD8gTm8gcmVzcGVjdC4uLlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOb05hbWVBbGVydCgpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwid2FybmluZ1wiPlxyXG4gICAgICA8QWxlcnQuSGVhZGluZz5UaGlzIE1GIHNhaWQgJmxkcXVvOyAmcmRxdW87PC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5cclxuICAgICAgICBXaG8gYXJlIHlvdSwgSm9obiBDYWdlPyDwn5it8J+YrfCfmK0gSnVzdCBraWRkaW5nLCBkb24mYXBvczt0IGtub3cgd2hvIHRoYXRcclxuICAgICAgICBpcy5cclxuICAgICAgPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFuZEV4aXN0c0FsZXJ0KCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPlNvbWVib2R5IGFscmVhZHkgdGhvdWdodCBvZiB0aGF0ITwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgR29pbmcgdG8gaGF2ZSB0byB0cnkgaGFyZGVyLiBNYXliZSByZWFkIGEgdmVyeSBjb21wbGljYXRlZCBib29rIGFuZCB0aGVuXHJcbiAgICAgICAgdGhpbmsgb2Ygc29tZSByZWZlcmVuY2UgdG8gdGhhdC5cclxuICAgICAgPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlck5vdExvZ2dlZEluQWxlcnQoKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cIndhcm5pbmdcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+WW91JmFwb3M7dmUgZ290dGEgYmUgc2lnbmVkIGluITwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgV2UgZG9uJmFwb3M7dCBsZXQganVzdCBhbnlvbmUgaW4gaGVyZS4gWW91IGNhbntcIiBcIn1cclxuICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9uZXctdXNlclwiPlxyXG4gICAgICAgICAgPEFsZXJ0Lkxpbms+bWFrZSBhbiBhY2NvdW50IGhlcmU8L0FsZXJ0Lkxpbms+XHJcbiAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICwgdGhvdWdoLCBpZiB5b3Ugd2FudC5cclxuICAgICAgPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFuZENyZWF0ZWRBbGVydChuYW1lOiBzdHJpbmcpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwic3VjY2Vzc1wiPlxyXG4gICAgICA8QWxlcnQuSGVhZGluZz4mbGRxdW87e25hbWV9JnJkcXVvOyBzdWJtaXR0ZWQhPC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5Ob3cgdGhhdCZhcG9zO3MgZnVubnkuPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZCB9IGZyb20gXCIuLi8uLi9zdG9yZS9zbGljZXMvdXNlci1yZWNvcmRzLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydEFuZExpbWl0VXNlclJlY29yZHMoXHJcbiAgcmVjb3JkczogVXNlclJlY29yZFtdLFxyXG4gIHNvcnRCeTogVXNlclJlY29yZFNvcnRUeXBlcyxcclxuICBsaW1pdDogbnVtYmVyXHJcbik6IFVzZXJSZWNvcmRbXSB7XHJcbiAgbGV0IGZpbHRlcmVkUmVjb3JkcyA9IFsuLi5yZWNvcmRzXTtcclxuXHJcbiAgc3dpdGNoIChzb3J0QnkpIHtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX0FWRVJBR0VfU0NPUkU6XHJcbiAgICAgIGZpbHRlcmVkUmVjb3Jkcy5zb3J0KChhLCBiKSA9PiBiLmF2ZXJhZ2VTY29yZSAtIGEuYXZlcmFnZVNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9TQ09SRTpcclxuICAgICAgZmlsdGVyZWRSZWNvcmRzLnNvcnQoKGEsIGIpID0+IGIudG90YWxTY29yZSAtIGEudG90YWxTY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLk1PU1RfTkFNRVNfQ09OVFJJQlVURUQ6XHJcbiAgICAgIGZpbHRlcmVkUmVjb3Jkcy5zb3J0KChhLCBiKSA9PiBiLm5hbWVzQ29udHJpYnV0ZWQgLSBhLm5hbWVzQ29udHJpYnV0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyZWRSZWNvcmRzID0gZmlsdGVyZWRSZWNvcmRzLnNsaWNlKDAsIGxpbWl0KTtcclxuICByZXR1cm4gZmlsdGVyZWRSZWNvcmRzO1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFVzZXJSZWNvcmRTb3J0VHlwZXMge1xyXG4gIEhJR0hFU1RfU0NPUkUsXHJcbiAgSElHSEVTVF9BVkVSQUdFX1NDT1JFLFxyXG4gIE1PU1RfTkFNRVNfQ09OVFJJQlVURURcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFuZENyZWF0aW9uU3RhdHVzZXMge1xyXG4gIENSRUFUSU5HLFxyXG4gIENSRUFURUQsXHJcbiAgRVJST1IsXHJcbiAgQkFORF9FWElTVFMsXHJcbiAgTk9UX1RSWUlORyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFuZFNvcnRUeXBlcyB7XHJcbiAgQkVTVCxcclxuICBXT1JTVCxcclxuICBNT1NUX1JFQ0VOVCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMge1xyXG4gIEFUVEVNUFRJTkcsXHJcbiAgU1VDQ0VTUyxcclxuICBGQUlMVVJFLFxyXG4gIE5PVF9UUllJTkcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByb2ZpbGVGZXRjaFN0YXR1c2VzIHtcclxuICBBVFRFTVBUSU5HLFxyXG4gIFNVQ0NFU1MsXHJcbiAgRkFJTFVSRSxcclxuICBOT1RfVFJZSU5HXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMge1xyXG4gIEFVVEhFTlRJQ0FUSU5HLFxyXG4gIEFVVEhFTlRJQ0FURUQsXHJcbiAgTk9UX0FVVEhFTlRJQ0FURUQsXHJcbiAgTk9UX1RSWUlORyxcclxuICBTRVJWRVJfRVJST1IsXHJcbiAgVVNFUk5BTUVfTk9UX0ZPVU5ELFxyXG4gIElOVkFMSURfUEFTU1dPUkQsXHJcbiAgTE9HR0lOR19PVVQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFVzZXJDcmVhdGlvblN0YXR1c2VzIHtcclxuICBQUk9DRVNTSU5HLFxyXG4gIFBBU1NXT1JEU19ET05UX01BVENILFxyXG4gIFVTRVJOQU1FX1RBS0VOLFxyXG4gIE5PVF9UUllJTkcsXHJcbiAgU0VSVkVSX0VSUk9SLFxyXG4gIFNVQ0NFU1MsXHJcbiAgRU1QVFlfRklFTERTLFxyXG4gIElOVkFMSURfRU1BSUwsXHJcbiAgRU1BSUxfVEFLRU4sXHJcbn1cclxuIiwiaW1wb3J0IHsgdGFrZSwgcHV0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IE5ld0JhbmRSZXF1ZXN0Qm9keSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcm91dGUtaGFuZGxlcnMvYmFuZHNcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcbmltcG9ydCB7IEJhbmRDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGJhbmRDcmVhdGlvblNhZ2EoKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShiYW5kQWN0aW9ucy5yZXF1ZXN0Q3JlYXRlQmFuZC50eXBlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiU2FnYSBwYXlsb2FkOiBcIiwgcGF5bG9hZCk7XHJcbiAgICBjb25zdCB7IGNyZWF0aW5nVXNlcklkLCBiYW5kTmFtZSwgY3JlYXRpbmdVc2VybmFtZSB9ID0gcGF5bG9hZDtcclxuICAgIC8vIGxldCBuZXdCYW5kID0ge1xyXG4gICAgLy8gICBjcmVhdGluZ1VzZXJJZCxcclxuICAgIC8vICAgYmFuZE5hbWUsXHJcbiAgICAvLyB9O1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHk6IE5ld0JhbmRSZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgYmFuZE5hbWUsXHJcbiAgICAgIG93bmVySWQ6IGNyZWF0aW5nVXNlcklkLFxyXG4gICAgICBvd25lck5hbWU6IGNyZWF0aW5nVXNlcm5hbWUsXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJIRXJlIVwiKVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5uZXdCYW5kLFxyXG4gICAgICAgIHJlcXVlc3RCb2R5XHJcbiAgICAgICk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgaW4gYmFuZGNyZWF0aW9uc2FnYTogXCIsIHJlc3BvbnNlKVxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm93IGltIGhlcmUhXCIpXHJcbiAgICAgICAgY29uc3QgbmV3QmFuZDogQmFuZENsYXNzID0gcmVzcG9uc2UuZGF0YS5uZXdCYW5kO1xyXG4gICAgICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5jcmVhdGVCYW5kU3VjY2VzcyhuZXdCYW5kKSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gbGV0IHsgX2lkLCBiYW5kTmFtZSwgY3JlYXRpbmdVc2VySWQsIHNjb3JlIH0gPSBuZXdCYW5kO1xyXG4gICAgICAvLyBsZXQgbmV3QmFuZDogQmFuZENsYXNzID0ge1xyXG4gICAgICAvLyAgIG5hbWU6IGJhbmROYW1lLFxyXG4gICAgICAvLyAgIG93bmVyTmFtZTogY3JlYXRpbmdVc2VybmFtZSxcclxuICAgICAgLy8gICBvd25lcklkOiBjcmVhdGluZ1VzZXJJZCxcclxuICAgICAgLy8gICBzY29yZTogMCxcclxuICAgICAgLy8gICBjcmVhdGVkT24sXHJcbiAgICAgIC8vICAgX2lkOiBuZXdCYW5kSWQsXHJcbiAgICAgIC8vIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCByZWFzb246IEJhbmRDcmVhdGlvblN0YXR1c2VzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5yZWFzb247XHJcbiAgICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5jcmVhdGVCYW5kRmFpbHVyZShyZWFzb24pKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCB7IGF1dGhlbnRpY2F0aW9uU3RhdHVzLCB1c2VybmFtZSB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2Vzc2lvblxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgZGlzcGF0Y2goc2Vzc2lvbkFjdGlvbnMucmVxdWVzdExvZ291dCgpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrU2Vzc2lvbigpIHtcclxuICAgIGRpc3BhdGNoKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDaGVja1Nlc3Npb24oKSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORylcclxuICAgICAgY2hlY2tTZXNzaW9uKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5hdmJhciBiZz1cImxpZ2h0XCIgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL1wiPlxyXG4gICAgICAgIDxOYXZiYXIuQnJhbmQ+d2FiYWJjPzwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICAgIHthdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxOYXYuSXRlbT5TaWduZWQgaW4gYXMge3VzZXJuYW1lfTwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICA8TmF2Lkxpbmsgb25DbGljaz17KCkgPT4gbG9nb3V0KCl9PkxvZ291dDwvTmF2Lkxpbms+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgIDxOYXYuTGluaz5Mb2dpbjwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9uZXctdXNlclwiPlxyXG4gICAgICAgICAgICA8TmF2Lkxpbms+Q3JlYXRlIEFjY291bnQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9OYXZiYXI+XHJcbiAgKTtcclxufSIsIi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBEaXNwYXRjaCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzLCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IEJhbmRDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xyXG5pbXBvcnQge1xyXG4gIEJhbmRDcmVhdGVkQWxlcnQsXHJcbiAgQmFuZEV4aXN0c0FsZXJ0LFxyXG4gIEVycm9yQWxlcnQsXHJcbiAgTm9OYW1lQWxlcnQsXHJcbiAgVXNlck5vdExvZ2dlZEluQWxlcnQsXHJcbn0gZnJvbSBcIi4vQ3JlYXRlQmFuZEZvcm1BbGVydHNcIjtcclxuXHJcbmVudW0gQ3JlYXRpb25BbGVydCB7XHJcbiAgRXJyb3IsXHJcbiAgTm9OYW1lLFxyXG4gIEJhbmRFeGlzdHMsXHJcbiAgQmFuZENyZWF0ZWQsXHJcbiAgTm90TG9nZ2VkSW4sXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVCYW5kRm9ybSgpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3Qge1xyXG4gICAgc2Vzc2lvbjogeyBhdXRoZW50aWNhdGlvblN0YXR1cywgdXNlcklkLCB1c2VybmFtZSB9LFxyXG4gICAgYmFuZHM6IHsgY3JlYXRpb25TdGF0dXM6IGJhbmRDcmVhdGlvblN0YXR1cyB9LFxyXG4gIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUpO1xyXG4gIGNvbnN0IFtiYW5kTmFtZSwgc2V0QmFuZE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NyZWF0ZWROYW1lLCBzZXRDcmVhdGVkTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlPENyZWF0aW9uQWxlcnQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN3aXRjaCAoYmFuZENyZWF0aW9uU3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgQmFuZENyZWF0aW9uU3RhdHVzZXMuQkFORF9FWElTVFM6XHJcbiAgICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5CYW5kRXhpc3RzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhc2UgQmFuZENyZWF0aW9uU3RhdHVzZXMuRVJST1I6XHJcbiAgICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5FcnJvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjYXNlIEJhbmRDcmVhdGlvblN0YXR1c2VzLkNSRUFURUQ6XHJcbiAgICAgICAgc2V0Q3JlYXRlZE5hbWUoYmFuZE5hbWUpO1xyXG4gICAgICAgIHNldEJhbmROYW1lKFwiXCIpO1xyXG4gICAgICAgIHNldEFsZXJ0KENyZWF0aW9uQWxlcnQuQmFuZENyZWF0ZWQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9LCBbYmFuZENyZWF0aW9uU3RhdHVzXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIGlmIChhdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQpIHtcclxuICAgICAgaWYgKGJhbmROYW1lID09IFwiXCIpIHtcclxuICAgICAgICBzZXRBbGVydChDcmVhdGlvbkFsZXJ0Lk5vTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICBiYW5kQWN0aW9ucy5yZXF1ZXN0Q3JlYXRlQmFuZCh7XHJcbiAgICAgICAgICAgIGNyZWF0aW5nVXNlcklkOiB1c2VySWQhLFxyXG4gICAgICAgICAgICBiYW5kTmFtZSxcclxuICAgICAgICAgICAgY3JlYXRpbmdVc2VybmFtZTogdXNlcm5hbWUhLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRBbGVydChDcmVhdGlvbkFsZXJ0Lk5vdExvZ2dlZEluKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIERpc3BsYXlBbGVydCh7XHJcbiAgICBhbGVydCxcclxuICB9OiB7XHJcbiAgICBhbGVydDogQ3JlYXRpb25BbGVydCB8IHVuZGVmaW5lZDtcclxuICB9KTogSlNYLkVsZW1lbnQgfCBudWxsIHtcclxuICAgIHN3aXRjaCAoYWxlcnQpIHtcclxuICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIGNhc2UgQ3JlYXRpb25BbGVydC5CYW5kQ3JlYXRlZDpcclxuICAgICAgICByZXR1cm4gQmFuZENyZWF0ZWRBbGVydChjcmVhdGVkTmFtZSk7XHJcbiAgICAgIGNhc2UgQ3JlYXRpb25BbGVydC5CYW5kRXhpc3RzOlxyXG4gICAgICAgIHJldHVybiBCYW5kRXhpc3RzQWxlcnQoKTtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0LkVycm9yOlxyXG4gICAgICAgIHJldHVybiBFcnJvckFsZXJ0KCk7XHJcbiAgICAgIGNhc2UgQ3JlYXRpb25BbGVydC5Ob05hbWU6XHJcbiAgICAgICAgcmV0dXJuIE5vTmFtZUFsZXJ0KCk7XHJcbiAgICAgIGNhc2UgQ3JlYXRpb25BbGVydC5Ob3RMb2dnZWRJbjpcclxuICAgICAgICByZXR1cm4gVXNlck5vdExvZ2dlZEluQWxlcnQoKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU5hbWVDaGFuZ2UoZSkge1xyXG4gICAgc2V0QmFuZE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgIDxJbnB1dEdyb3VwIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFib3V0IGEgYmFuZCBjYWxsZWQuLi5cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVOYW1lQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgdmFsdWU9e2JhbmROYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAge2JhbmRDcmVhdGlvblN0YXR1cyA9PSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVElORyA/IChcclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgIDxTcGlubmVyXHJcbiAgICAgICAgICAgICAgICBhcz1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwiYm9yZGVyXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KCl9PlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICA8RGlzcGxheUFsZXJ0IGFsZXJ0PXthbGVydH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogbG9nb3V0U2FnYSgpIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgeWllbGQgdGFrZShzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0TG9nb3V0LnR5cGUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgeWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5kZWxldGUsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuc2Vzc2lvbkVuZHBvaW50LCB7d2l0aENyZWRlbnRpYWxzOiB0cnVlfVxyXG4gICAgICApO1xyXG4gICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMubG9nb3V0U3VjY2VzcygpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMubG9nb3V0RmFpbHVyZSgpKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJjb25zdCBtc0luTWludXRlID0gNjAwMDA7XHJcbmNvbnN0IG1zSW5Ib3VyID0gbXNJbk1pbnV0ZSAqIDYwO1xyXG5jb25zdCBtc0luRGF5ID0gbXNJbkhvdXIgKiAyNDtcclxuY29uc3QgbXNJblllYXIgPSBtc0luRGF5ICogMzY1O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVTaW5jZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICBjb25zdCBlbGFwc2VkVGltZSA9IERhdGUubm93KCkgLSBkYXRlLmdldFRpbWUoKTtcclxuICBpZiAoZWxhcHNlZFRpbWUgPCBtc0luTWludXRlKSB7XHJcbiAgICByZXR1cm4gXCIxbVwiO1xyXG4gIH1cclxuICBpZiAoZWxhcHNlZFRpbWUgPCBtc0luSG91cikge1xyXG4gICAgY29uc3QgbnVtT2ZNaW51dGVzID0gTWF0aC5mbG9vcihlbGFwc2VkVGltZSAvIG1zSW5NaW51dGUpO1xyXG4gICAgcmV0dXJuIGAke251bU9mTWludXRlc31tYDtcclxuICB9XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJbkRheSkge1xyXG4gICAgY29uc3QgbnVtT2ZIb3VycyA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyBtc0luSG91cik7XHJcbiAgICBjb25zdCBudW1PZk1pbnV0ZXMgPSBNYXRoLmZsb29yKChlbGFwc2VkVGltZSAlIG1zSW5Ib3VyKSAvIG1zSW5NaW51dGUpO1xyXG4gICAgbGV0IHN0cmluZyA9IGAke251bU9mSG91cnN9aGA7XHJcbiAgICBpZiAobnVtT2ZNaW51dGVzID4gMCkgc3RyaW5nICs9IGAgJHtudW1PZk1pbnV0ZXN9bWA7XHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG4gIH1cclxuICBpZiAoZWxhcHNlZFRpbWUgPCBtc0luWWVhcikge1xyXG4gICAgY29uc3QgbnVtT2ZEYXlzID0gTWF0aC5mbG9vcihlbGFwc2VkVGltZSAvIG1zSW5EYXkpO1xyXG4gICAgcmV0dXJuIGAke251bU9mRGF5c31kYDtcclxuICB9XHJcbiAgY29uc3QgbnVtT2ZZZWFycyA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyBtc0luWWVhcik7XHJcbiAgY29uc3QgbnVtT2ZEYXlzID0gTWF0aC5mbG9vcigoZWxhcHNlZFRpbWUgJSBtc0luWWVhcikgLyBtc0luRGF5KTtcclxuICBsZXQgc3RyaW5nID0gYCR7bnVtT2ZZZWFyc315YDtcclxuICBpZiAobnVtT2ZEYXlzID4gMCkgc3RyaW5nICs9IGAgJHtudW1PZkRheXN9ZGA7XHJcbiAgcmV0dXJuIHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFjdGlvbkNoYW5uZWwsIGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB3YXRjaEZldGNoQmFuZHNTYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgY29uc3QgZmV0Y2hCYW5kc0NoYW5uZWwgPSB5aWVsZCBhY3Rpb25DaGFubmVsKFxyXG4gICAgYmFuZEFjdGlvbnMucmVxdWVzdEZldGNoQmFuZHMudHlwZVxyXG4gICk7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShmZXRjaEJhbmRzQ2hhbm5lbCk7XHJcbiAgICBjb25zdCB7IG1heEJhbmRzLCBzb3J0QnkgfSA9IHBheWxvYWQ7XHJcbiAgICB5aWVsZCBjYWxsKGZldGNoQmFuZHMsIG1heEJhbmRzLCBzb3J0QnkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaEJhbmRzKG1heEJhbmRzLCBzb3J0QnkpIHtcclxuICBsZXQgcmVzcG9uc2U7XHJcbiAgdHJ5IHtcclxuICAgIHJlc3BvbnNlID0geWllbGQgY2FsbChheGlvcy5wb3N0LCBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5wb3N0QmFuZHMsIHtcclxuICAgICAgbWF4QmFuZHMsXHJcbiAgICAgIHNvcnRCeSxcclxuICAgIH0pO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmZldGNoQmFuZHNTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmZldGNoQmFuZHNGYWlsdXJlKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB1c2VyQXV0aGVudGljYXRpb25TYWdhKCkge1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdEF1dGhlbnRpY2F0ZVVzZXIudHlwZSk7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcGF5bG9hZDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5wb3N0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLmF1dGhlbnRpY2F0ZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB7IHVzZXJJZCwgYmFuZHNNb2RpZmllZCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJiYW5kc01vZGlmaWVkIGluIHVzZXJBdXRoZW50aWNhdGlvblNhZ2E6IFwiLCBiYW5kc01vZGlmaWVkKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5hdXRoZW50aWNhdGVVc2VyU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGJhbmRzTW9kaWZpZWQsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuYXV0aGVudGljYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgICAgICAgICByZWFzb246IGVyci5yZXNwb25zZS5kYXRhLnJlYXNvbixcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcywgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHtcclxuICBVc2VyUHJvZmlsZVR5cGUsXHJcbiAgdXNlclByb2ZpbGVBY3Rpb25zLFxyXG59IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9lc20vQ29udGFpbmVyXCI7XHJcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL1RhYmxlXCI7XHJcbmltcG9ydCBCYWRnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9CYWRnZVwiO1xyXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlsaXR5L2dldC10aW1lLXNpbmNlXCI7XHJcblxyXG4vLyBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFJvb3RTdGF0ZSkge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBmZXRjaFN0YXR1czogc3RhdGUudXNlclByb2ZpbGUuZmV0Y2hTdGF0dXMsXHJcbi8vICAgICBwcm9maWxlOiBzdGF0ZS51c2VyUHJvZmlsZS5wcm9maWxlLFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICByZXF1ZXN0RmV0Y2hQcm9maWxlOiAodGFyZ2V0SWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQpID0+IHtcclxuLy8gICAgICAgZGlzcGF0Y2godXNlclByb2ZpbGVBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJQcm9maWxlKHsgdGFyZ2V0SWQgfSkpO1xyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG4vLyB0eXBlIFVzZXJQcm9maWxlUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+ICYge1xyXG4vLyAgIGlkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJQcm9maWxlKHtcclxuICB1c2VySWQsXHJcbn06IHtcclxuICB1c2VySWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbn0pOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgeyBmZXRjaFN0YXR1cywgcHJvZmlsZSB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlclByb2ZpbGVcclxuICApO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgZnVuY3Rpb24gZmV0Y2hQcm9maWxlKCkge1xyXG4gICAgZGlzcGF0Y2godXNlclByb2ZpbGVBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJQcm9maWxlKHsgdGFyZ2V0SWQ6IHVzZXJJZCB9KSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQcm9maWxlKCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17XCJtYi01XCJ9PlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICB7cHJvZmlsZSA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+e3Byb2ZpbGUubmFtZX08L2g1PlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIHNjb3JlOiA8Yj57cHJvZmlsZS50b3RhbFNjb3JlfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXZlcmFnZSBzY29yZTogPGI+e3Byb2ZpbGUuYXZlcmFnZVNjb3JlLnRvRml4ZWQoMil9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lcyBjb250cmlidXRlZDogPGI+e3Byb2ZpbGUubmFtZXNDb250cmlidXRlZH08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuYmFuZHMubWFwKChiYW5kKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtTdHJpbmcoYmFuZC5faWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e2JhbmQuc2NvcmV9PC9CYWRnZT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2JhbmQubmFtZX08L2I+IChjcmVhdGVke1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRUaW1lU2luY2UobmV3IERhdGUoYmFuZC5jcmVhdGVkT24pKX0gYWdvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8cD5Mb2FkaW5nPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGNsYXNzIFVuY29ubmVjdGVkVXNlclByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VXNlclByb2ZpbGVQcm9wcz4ge1xyXG4vLyAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4vLyAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0RmV0Y2hQcm9maWxlKHRoaXMucHJvcHMuaWQpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmVuZGVyKCkge1xyXG4vLyAgICAgY29uc3QgeyBwcm9maWxlIH0gPSB0aGlzLnByb3BzO1xyXG4vLyAgICAgaWYgKHByb2ZpbGUpIHtcclxuLy8gICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17XCJtYi01XCJ9PlxyXG4vLyAgICAgICAgICAgPENhcmQ+XHJcbi8vICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuLy8gICAgICAgICAgICAgICA8aDU+e3Byb2ZpbGUubmFtZX08L2g1PlxyXG4vLyAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4vLyAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgIDxDYXJkPlxyXG4vLyAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuLy8gICAgICAgICAgICAgICAgICAgPFJvdz5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs0fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIHNjb3JlOiA8Yj57cHJvZmlsZS50b3RhbFNjb3JlfTwvYj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgQXZlcmFnZSBzY29yZTogPGI+e3Byb2ZpbGUuYXZlcmFnZVNjb3JlLnRvRml4ZWQoMil9PC9iPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lcyBjb250cmlidXRlZDogPGI+e3Byb2ZpbGUubmFtZXNDb250cmlidXRlZH08L2I+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs4fT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuYmFuZHMubWFwKChiYW5kKSA9PiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtTdHJpbmcoYmFuZC5faWQpfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e2JhbmQuc2NvcmV9PC9CYWRnZT57XCIgXCJ9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2JhbmQubmFtZX08L2I+IChjcmVhdGVke1wiIFwifVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRUaW1lU2luY2UobmV3IERhdGUoYmFuZC5jcmVhdGVkT24pKX0gYWdvKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbi8vICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4vLyAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbi8vICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4vLyAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuLy8gICAgICAgICAgIDwvQ2FyZD5cclxuLy8gICAgICAgICA8L0NvbnRhaW5lcj5cclxuLy8gICAgICAgKTtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIHJldHVybiBudWxsO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IFVzZXJQcm9maWxlID0gcmVkdXhDb25uZWN0b3IoVW5jb25uZWN0ZWRVc2VyUHJvZmlsZSk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWN0aW9uQ2hhbm5lbCwgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHVzZXJSZWNvcmRzQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvdXNlci1yZWNvcmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZHNSZXF1ZXN0Qm9keSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcm91dGUtaGFuZGxlcnMvdXNlci1yZWNvcmRzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB3YXRjaEZldGNoVXNlclJlY29yZHNTYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgY29uc3QgZmV0Y2hVc2VyUmVjb3Jkc0NoYW5uZWwgPSB5aWVsZCBhY3Rpb25DaGFubmVsKFxyXG4gICAgdXNlclJlY29yZHNBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJSZWNvcmRzLnR5cGVcclxuICApO1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoZmV0Y2hVc2VyUmVjb3Jkc0NoYW5uZWwpO1xyXG4gICAgY29uc3QgeyBudW1PZlJlY29yZHMsIHNvcnRUeXBlIH0gPSBwYXlsb2FkO1xyXG4gICAgeWllbGQgY2FsbChmZXRjaFVzZXJSZWNvcmRzLCBudW1PZlJlY29yZHMsIHNvcnRUeXBlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZmV0Y2hVc2VyUmVjb3JkcyhcclxuICBtYXhSZWNvcmRzOiBudW1iZXIsXHJcbiAgc29ydEJ5OiBVc2VyUmVjb3JkU29ydFR5cGVzXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLmdldFVzZXJSZWNvcmRzLFxyXG4gICAgICB7IG51bU9mUmVjb3JkczogbWF4UmVjb3Jkcywgc29ydFR5cGU6IHNvcnRCeSB9XHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgeWllbGQgcHV0KHVzZXJSZWNvcmRzQWN0aW9ucy5mZXRjaFVzZXJSZWNvcmRzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh1c2VyUmVjb3Jkc0FjdGlvbnMuZmV0Y2hVc2VyUmVjb3Jkc0ZhaWx1cmUoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuLy8gVE9ETzogVGhpcyBkb2Vzbid0IHdvcmsgcmlnaHQgb24gdGhlIGRhdGFiYXNlIHNpZGUhXHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGJhbmRTY29yZU1vZGlmaWNhdGlvblNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKGJhbmRBY3Rpb25zLnJlcXVlc3RNb2RpZnlCYW5kU2NvcmUudHlwZSk7XHJcbiAgICBjb25zdCB7IHRhcmdldEJhbmRJZCwgbW9kaWZ5aW5nVXNlcklkLCBtb2RpZmljYXRpb25WYWx1ZSB9ID0gcGF5bG9hZDtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibW9kaWZpY2F0aW9uIHZhbHVlIGluIHNhZ2E6IFwiLCBtb2RpZmljYXRpb25WYWx1ZSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5wb3N0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLm1vZGlmeUJhbmQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgbW9kaWZ5aW5nVXNlcklkLFxyXG4gICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIGlmIChtb2RpZmljYXRpb25WYWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHRhcmdldEJhbmRJZCxcclxuICAgICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWU6IC1wYXlsb2FkLnVuZG9WYWx1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBiYW5kQWN0aW9ucy5tb2RpZnlCYW5kU2NvcmVTdWNjZXNzKHtcclxuICAgICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgICBtb2RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLm1vZGlmeUJhbmRTY29yZUZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2ZXJVcmwgPVxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiaHR0cDovL2xvY2FsaG9zdDo3Nzc3XCI7XHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGUgPSBcIi9hcGkvYXV0aGVudGljYXRlXCI7XHJcbmV4cG9ydCBjb25zdCBwb3N0QmFuZHMgPSBcIi9hcGkvYmFuZHNcIjtcclxuZXhwb3J0IGNvbnN0IG1vZGlmeUJhbmQgPSBcIi9hcGkvYmFuZC9tb2RpZnlcIjtcclxuZXhwb3J0IGNvbnN0IG5ld0JhbmQgPSBcIi9hcGkvYmFuZC9uZXdcIjtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSBcIi9hcGkvY3JlYXRlLXVzZXJcIjtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJuYW1lID0gXCIvYXBpL3VzZXJuYW1lcy9nZXRcIjtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJSZWNvcmRzID0gXCIvYXBpL3VzZXJzL2dldFwiO1xyXG5leHBvcnQgY29uc3Qgc2Vzc2lvbkVuZHBvaW50ID0gXCIvYXBpL3Nlc3Npb25cIjtcclxuXHJcblxyXG5jb25zdCBnZXRVc2VyUHJvZmlsZUJhc2UgPSBcIi9hcGkvdXNlci1wcm9maWxlXCI7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyUHJvZmlsZUVuZHBvaW50ID0gZ2V0VXNlclByb2ZpbGVCYXNlICsgXCIvOnVzZXJJZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdldFVzZXJQcm9maWxlVXJsKFxyXG4gIHRhcmdldFVzZXJJZCAvKjogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCovXHJcbik6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGdldFVzZXJQcm9maWxlQmFzZSArIFwiL1wiICsgdGFyZ2V0VXNlcklkIC8qLnRvSGV4U3RyaW5nKi87XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25DaGFubmVsLCBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY2hlY2tTZXNzaW9uU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICB5aWVsZCB0YWtlKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDaGVja1Nlc3Npb24udHlwZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MuZ2V0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLnNlc3Npb25FbmRwb2ludCxcclxuICAgICAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICBjb25zdCB7IHVzZXJJZCwgdXNlcm5hbWUsIGJhbmRzTW9kaWZpZWQgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuY2hlY2tTZXNzaW9uU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGJhbmRzTW9kaWZpZWQsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmNoZWNrU2Vzc2lvbkZhaWx1cmUoKSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMuY2hlY2tTZXNzaW9uRmFpbHVyZSgpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJhbmRDcmVhdGlvblN0YXR1c2VzLFxyXG4gIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLFxyXG4gIEJhbmRTb3J0VHlwZXMsXHJcbn0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxudHlwZSBTY29yZU1vZGlmaWNhdGlvblN0YXRlID0ge1xyXG4gIHN0YXR1czogQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXM7XHJcbiAgLy8gVE9ETzogVGhpcyBuZWVkcyB0byByZWZlciB0byBhIGJhbmQncyBJRFxyXG4gIHRhcmdldD86IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbn07XHJcblxyXG50eXBlIEJhbmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogbnVtYmVyO1xyXG4gIGNyZWF0aW9uU3RhdHVzOiBCYW5kQ3JlYXRpb25TdGF0dXNlcztcclxuICBpdGVtczogQmFuZENsYXNzW107XHJcbiAgc2NvcmVNb2RpZmljYXRpb25TdGF0ZTogU2NvcmVNb2RpZmljYXRpb25TdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogQmFuZHNTbGljZVN0YXRlID0ge1xyXG4gIHBlbmRpbmdGZXRjaGVzOiAwLFxyXG4gIGl0ZW1zOiBbXSxcclxuICBjcmVhdGlvblN0YXR1czogQmFuZENyZWF0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICBzY29yZU1vZGlmaWNhdGlvblN0YXRlOiB7XHJcbiAgICBzdGF0dXM6IEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLk5PVF9UUllJTkcsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGJhbmRzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJiYW5kc1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8gQmFuZCBmZXRjaGluZ1xyXG4gICAgcmVxdWVzdEZldGNoQmFuZHMoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIG1heEJhbmRzOiBudW1iZXI7XHJcbiAgICAgICAgc29ydEJ5OiBCYW5kU29ydFR5cGVzO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzKys7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hCYW5kc1N1Y2Nlc3Moc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxCYW5kQ2xhc3NbXT4pIHtcclxuICAgICAgYWN0aW9uLnBheWxvYWQuZm9yRWFjaCgobmV3QmFuZCkgPT4ge1xyXG4gICAgICAgIGlmICghc3RhdGUuaXRlbXMuc29tZSgoYmFuZCkgPT4gYmFuZC5faWQgPT0gbmV3QmFuZC5faWQpKVxyXG4gICAgICAgICAgc3RhdGUuaXRlbXMucHVzaChuZXdCYW5kKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hCYW5kc0ZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMtLTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQmFuZCBjcmVhdGlvblxyXG4gICAgcmVxdWVzdENyZWF0ZUJhbmQoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIGNyZWF0aW5nVXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIGJhbmROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgY3JlYXRpbmdVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmNyZWF0aW9uU3RhdHVzID0gQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRJTkc7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQmFuZFN1Y2Nlc3Moc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxCYW5kQ2xhc3M+KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwib2theSB3aGF5dHMgdXBcIilcclxuICAgICAgc3RhdGUuY3JlYXRpb25TdGF0dXMgPSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVEVEO1xyXG4gICAgICBzdGF0ZS5pdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVCYW5kRmFpbHVyZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEJhbmRDcmVhdGlvblN0YXR1c2VzPikge1xyXG4gICAgICBzdGF0ZS5jcmVhdGlvblN0YXR1cyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBNb2RpZnkgYmFuZCBzY29yZVxyXG4gICAgcmVxdWVzdE1vZGlmeUJhbmRTY29yZShcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdGFyZ2V0QmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIG1vZGlmeWluZ1VzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICBtb2RpZmljYXRpb25WYWx1ZTogbnVtYmVyO1xyXG4gICAgICAgIHVuZG9WYWx1ZT86IG51bWJlcjtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnN0YXR1cyA9XHJcbiAgICAgICAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuQVRURU1QVElORztcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS50YXJnZXQgPSBhY3Rpb24ucGF5bG9hZC50YXJnZXRCYW5kSWQ7XHJcbiAgICB9LFxyXG4gICAgbW9kaWZ5QmFuZFNjb3JlU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEJhbmRJbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleChcclxuICAgICAgICAoYmFuZCkgPT4gYmFuZC5faWQgPT09IGFjdGlvbi5wYXlsb2FkLnRhcmdldEJhbmRJZFxyXG4gICAgICApO1xyXG4gICAgICBzdGF0ZS5pdGVtc1t0YXJnZXRCYW5kSW5kZXhdLnNjb3JlICs9IGFjdGlvbi5wYXlsb2FkLm1vZGlmaWNhdGlvblZhbHVlO1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnN0YXR1cyA9XHJcbiAgICAgICAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuU1VDQ0VTUztcclxuICAgIH0sXHJcbiAgICBtb2RpZnlCYW5kU2NvcmVGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIC8vIFRPRE86IFNob3VsZG4ndCB3ZSBiZSBnZXR0aW5nIGEgcmVhc29uIGZvciB0aGUgZmFpbHVyZSBoZXJlP1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnN0YXR1cyA9XHJcbiAgICAgICAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuRkFJTFVSRTtcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS50YXJnZXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhbmRBY3Rpb25zID0gYmFuZHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBiYW5kc1NsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGdldERlZmF1bHRNaWRkbGV3YXJlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGJhbmRzUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHNlc3Npb25SZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB1c2VyUmVjb3Jkc1JlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZVwiO1xyXG5pbXBvcnQgdXNlclByb2ZpbGVSZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuXHJcbmltcG9ydCAqIGFzIHNhZ2FzIGZyb20gXCIuL3NhZ2FzXCI7XHJcbmltcG9ydCB7IFR5cGVkVXNlU2VsZWN0b3JIb29rLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG5jb25zdCBtaWRkbGV3YXJlID0gWy4uLmdldERlZmF1bHRNaWRkbGV3YXJlKHsgdGh1bms6IGZhbHNlIH0pLCBzYWdhTWlkZGxld2FyZV07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYmFuZHM6IGJhbmRzUmVkdWNlcixcclxuICBzZXNzaW9uOiBzZXNzaW9uUmVkdWNlcixcclxuICB1c2VyUmVjb3JkczogdXNlclJlY29yZHNSZWR1Y2VyLFxyXG4gIHVzZXJQcm9maWxlOiB1c2VyUHJvZmlsZVJlZHVjZXIsXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVHlwZWRTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxyXG4gIG1pZGRsZXdhcmU6IG1pZGRsZXdhcmUsXHJcbn0pO1xyXG5cclxuZm9yIChjb25zdCBzYWdhIGluIHNhZ2FzKSB7XHJcbiAgc2FnYU1pZGRsZXdhcmUucnVuKHNhZ2FzW3NhZ2FdKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlLCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgeyBVc2VyQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB1c2VyQ3JlYXRpb25TYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0Q3JlYXRlVXNlci50eXBlKTtcclxuICAgIGNvbnN0IHsgLyplbWFpbCwqLyB1c2VybmFtZSwgcGFzc3dvcmQsIHJlcGVhdFBhc3N3b3JkIH0gPSBwYXlsb2FkO1xyXG5cclxuICAgIC8vIGlmICghZW1haWxJc1ZhbGlkKGVtYWlsKSkge1xyXG4gICAgLy8gICB5aWVsZCBwdXQoXHJcbiAgICAvLyAgICAgc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgLy8gICAgICAgcmVhc29uOiBVc2VyQ3JlYXRpb25TdGF0dXNlcy5JTlZBTElEX0VNQUlMLFxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgICBpZiAocGFzc3dvcmQgIT09IHJlcGVhdFBhc3N3b3JkKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgICAgICAgICByZWFzb246IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBBU1NXT1JEU19ET05UX01BVENILFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLmNyZWF0ZVVzZXIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAvLyBlbWFpbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyU3VjY2VzcygpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyRmFpbHVyZSh7XHJcbiAgICAgICAgICAgICAgcmVhc29uOiBlcnJvci5yZXNwb25zZS5kYXRhLnJlYXNvbixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbWFpbElzVmFsaWQoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICByZXR1cm4gcmUudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcbiIsImltcG9ydCB7IHRha2UsIHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgdXNlclByb2ZpbGVBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuaW1wb3J0IHsgY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoUHJvZmlsZVNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKFxyXG4gICAgICB1c2VyUHJvZmlsZUFjdGlvbnMucmVxdWVzdEZldGNoVXNlclByb2ZpbGUudHlwZVxyXG4gICAgKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gICAgY29uc3QgdGFyZ2V0SWQgPSBwYXlsb2FkLnRhcmdldElkO1xyXG4gICAgLy8gY29uc29sZS5sb2codGFyZ2V0SWQpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwodGFyZ2V0SWQpKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLmdldCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBjcmVhdGVHZXRVc2VyUHJvZmlsZVVybCh0YXJnZXRJZClcclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICB1c2VyUHJvZmlsZUFjdGlvbnMuZmV0Y2hVc2VyUHJvZmlsZVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICBwcm9maWxlOiByZXNwb25zZS5kYXRhLnByb2ZpbGUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHVzZXJQcm9maWxlQWN0aW9ucy5mZXRjaFVzZXJQcm9maWxlRmFpbHVyZSgpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh1c2VyUHJvZmlsZUFjdGlvbnMuZmV0Y2hVc2VyUHJvZmlsZUZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcywgVXNlckNyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzLCBTVEFURVMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbnR5cGUgU2Vzc2lvbkJhbmRNb2RpZmljYXRpb24gPSB7XHJcbiAgdGFyZ2V0QmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIFNlc3Npb25TbGljZVN0YXRlID0ge1xyXG4gIGF1dGhlbnRpY2F0aW9uU3RhdHVzOiBBdXRoZW50aWNhdGlvblN0YXR1c2VzO1xyXG4gIHVzZXJJZD86IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgdXNlckNyZWF0aW9uU3RhdHVzOiBVc2VyQ3JlYXRpb25TdGF0dXNlcztcclxuICBiYW5kc01vZGlmaWVkOiBTZXNzaW9uQmFuZE1vZGlmaWNhdGlvbltdO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTZXNzaW9uU2xpY2VTdGF0ZSA9IHtcclxuICBhdXRoZW50aWNhdGlvblN0YXR1czogQXV0aGVudGljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIHVzZXJJZDogdW5kZWZpbmVkLFxyXG4gIHVzZXJuYW1lOiB1bmRlZmluZWQsXHJcbiAgdXNlckNyZWF0aW9uU3RhdHVzOiBVc2VyQ3JlYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIGJhbmRzTW9kaWZpZWQ6IFtdLFxyXG59O1xyXG5cclxuY29uc3Qgc2Vzc2lvblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwic2Vzc2lvblwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8gU2Vzc2lvbiBjaGVja2luZ1xyXG4gICAgcmVxdWVzdENoZWNrU2Vzc2lvbihzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRJTkc7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tTZXNzaW9uU3VjY2VzcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgYmFuZHNNb2RpZmllZDogU2Vzc2lvbkJhbmRNb2RpZmljYXRpb25bXTtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRDtcclxuICAgICAgc3RhdGUudXNlcklkID0gYWN0aW9uLnBheWxvYWQudXNlcklkO1xyXG4gICAgICBzdGF0ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lO1xyXG4gICAgICBzdGF0ZS5iYW5kc01vZGlmaWVkID0gYWN0aW9uLnBheWxvYWQuYmFuZHNNb2RpZmllZDtcclxuICAgIH0sXHJcbiAgICBjaGVja1Nlc3Npb25GYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVc2VyIGF1dGhlbnRpY2F0aW9uXHJcbiAgICByZXF1ZXN0QXV0aGVudGljYXRlVXNlcihcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVElORztcclxuICAgIH0sXHJcbiAgICBhdXRoZW50aWNhdGVVc2VyU3VjY2VzcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgYmFuZHNNb2RpZmllZDogU2Vzc2lvbkJhbmRNb2RpZmljYXRpb25bXTtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRDtcclxuICAgICAgc3RhdGUudXNlcklkID0gYWN0aW9uLnBheWxvYWQudXNlcklkO1xyXG4gICAgICBzdGF0ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lO1xyXG4gICAgICBzdGF0ZS5iYW5kc01vZGlmaWVkID0gYWN0aW9uLnBheWxvYWQuYmFuZHNNb2RpZmllZDtcclxuICAgIH0sXHJcbiAgICBhdXRoZW50aWNhdGVVc2VyRmFpbHVyZShzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gYWN0aW9uLnBheWxvYWQucmVhc29uO1xyXG4gICAgICAvLyBUT0RPOiBJcyBpdCBuZWNlc3NhcnkgdG8gcmVzZXQgdGhpcyB0byBudWxsIGhlcmU/XHJcbiAgICAgIHN0YXRlLnVzZXJJZCA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlciBsb2dvdXRcclxuICAgIHJlcXVlc3RMb2dvdXQoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkxPR0dJTkdfT1VUO1xyXG4gICAgfSxcclxuICAgIGxvZ291dEZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLlNFUlZFUl9FUlJPUjtcclxuICAgIH0sXHJcbiAgICBsb2dvdXRTdWNjZXNzKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVc2VyIGNyZWF0aW9uXHJcbiAgICByZXF1ZXN0Q3JlYXRlVXNlcihcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgLy8gZW1haWw6IHN0cmluZztcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgcmVwZWF0UGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS51c2VyQ3JlYXRpb25TdGF0dXMgPSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZVVzZXJTdWNjZXNzKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnVzZXJDcmVhdGlvblN0YXR1cyA9IFVzZXJDcmVhdGlvblN0YXR1c2VzLlNVQ0NFU1M7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlVXNlckZhaWx1cmUoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS51c2VyQ3JlYXRpb25TdGF0dXMgPSBhY3Rpb24ucGF5bG9hZC5yZWFzb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgLy8gQmFuZCBtb2RpZmljYXRpb25cclxuICAgIFtiYW5kQWN0aW9ucy5tb2RpZnlCYW5kU2NvcmVTdWNjZXNzLnR5cGVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5iYW5kc01vZGlmaWVkLnB1c2goe1xyXG4gICAgICAgIHRhcmdldEJhbmRJZDogYWN0aW9uLnBheWxvYWQudGFyZ2V0QmFuZElkLFxyXG4gICAgICAgIHZhbHVlOiBhY3Rpb24ucGF5bG9hZC5tb2RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlc3Npb25BY3Rpb25zID0gc2Vzc2lvblNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25TbGljZS5yZWR1Y2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBoaXN0b3J5IH0gZnJvbSBcIi4uL3N0b3JlL2hpc3RvcnlcIjtcclxuaW1wb3J0IHsgQmlnQmFuZFRhYmxlIH0gZnJvbSBcIi4vQmlnQmFuZFRhYmxlXCI7XHJcbmltcG9ydCB7IExhbmRpbmcgfSBmcm9tIFwiLi9MYW5kaW5nXCI7XHJcbmltcG9ydCB7IExvZ2luRm9ybSB9IGZyb20gXCIuL0xvZ2luXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiLi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IE5ld1VzZXJGb3JtIH0gZnJvbSBcIi4vTmV3VXNlckZvcm1cIjtcclxuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xyXG5cclxuLy8gY29uc3QgQXV0aGVudGljYXRpb25HdWFyZCA9IChDb21wb25lbnQpID0+ICh7IG1hdGNoIH0pID0+IHtcclxuLy8gICBpZiAoXHJcbi8vICAgICBzdG9yZS5nZXRTdGF0ZSgpLnNlc3Npb24uYXV0aGVudGljYXRpb25TdGF0dXMgIT09XHJcbi8vICAgICBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuLy8gICApIHtcclxuLy8gICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz47XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiA8Q29tcG9uZW50IG1hdGNoPXttYXRjaH0gLz47XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9ICgpID0+IChcclxuICAvLyBUT0RPOiBXaGF0IGlzIHRoZSBSb3V0ZXIncyBcImhpc3RvcnlcIiBhbGwgYWJvdXQ/XHJcbiAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvYmFuZHNcIiBjb21wb25lbnQ9e0JpZ0JhbmRUYWJsZX0gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW5Gb3JtfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL25ldy11c2VyXCIgY29tcG9uZW50PXtOZXdVc2VyRm9ybX0gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0xhbmRpbmd9IC8+XHJcbiAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICBwYXRoPVwiL3VzZXJzLzp1c2VySWRcIlxyXG4gICAgICAgICAgY29tcG9uZW50PXsoeyBtYXRjaCB9KSA9PiA8VXNlclByb2ZpbGUgdXNlcklkPXttYXRjaC5wYXJhbXMudXNlcklkfSAvPn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgPC9Sb3V0ZXI+XHJcbik7XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dcIjogXCJkWlpIXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcImkzWHBcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENyZWF0ZUJhbmRGb3JtIH0gZnJvbSBcIi4vQ3JlYXRlQmFuZEZvcm1cIjtcclxuaW1wb3J0IHsgQmlnQmFuZFRhYmxlIH0gZnJvbSBcIi4vQmlnQmFuZFRhYmxlXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9lc20vQ29udGFpbmVyXCI7XHJcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZHNMaXN0IH0gZnJvbSBcIi4vVXNlclJlY29yZHNMaXN0XCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IEp1bWJvdHJvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0p1bWJvdHJvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExhbmRpbmcgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIHsvKiA8SnVtYm90cm9uPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwibGFuZGluZ1RpdGxlXCI+V2hhdCBhYm91dCBhIGJhbmQgY2FsbGVkLi4uPC9oMT5cclxuICAgIDwvSnVtYm90cm9uPiAqL31cclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPXtcIm1iLTVcIn0+XHJcbiAgICAgICAgPENvbCBtZD17OH0gY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICA8Q3JlYXRlQmFuZEZvcm0gLz5cclxuICAgICAgICAgIDxCaWdCYW5kVGFibGUgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXs0fT5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGg1Pk1vc3QgTmFtZXMgQ29udHJpYnV0ZWQ8L2g1PlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxVc2VyUmVjb3Jkc0xpc3RcclxuICAgICAgICAgICAgICAgIG1heFJlY29yZHM9ezEwfVxyXG4gICAgICAgICAgICAgICAgc29ydFR5cGU9e1VzZXJSZWNvcmRTb3J0VHlwZXMuTU9TVF9OQU1FU19DT05UUklCVVRFRH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGg1PkhpZ2hlc3QgQXZlcmFnZSBTY29yZTwvaDU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPFVzZXJSZWNvcmRzTGlzdFxyXG4gICAgICAgICAgICAgICAgbWF4UmVjb3Jkcz17MTB9XHJcbiAgICAgICAgICAgICAgICBzb3J0VHlwZT17VXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX0FWRVJBR0VfU0NPUkV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxoNT5IaWdoZXN0IFNjb3JlPC9oNT5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8VXNlclJlY29yZHNMaXN0XHJcbiAgICAgICAgICAgICAgICBtYXhSZWNvcmRzPXsxMH1cclxuICAgICAgICAgICAgICAgIHNvcnRUeXBlPXtVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfU0NPUkV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgPC8+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9BbGVydFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW5Gb3JtKCk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCBhdXRoZW50aWNhdGlvblN0YXR1cyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNlc3Npb24uYXV0aGVudGljYXRpb25TdGF0dXNcclxuICApO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICBkaXNwYXRjaChzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0QXV0aGVudGljYXRlVXNlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPENhcmQgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzZyZW1cIiB9fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNVc2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVzZXJuYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuVVNFUk5BTUVfTk9UX0ZPVU5EXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgTmV3IHVzZXI/IENyZWF0ZSBhbiBhY2NvdW50IDxhIGhyZWY9XCIvbmV3LXVzZXJcIj5oZXJlPC9hPi5cclxuICAgICAgICAgICAgICA8L0Zvcm0uVGV4dD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCB1c2VybmFtZS5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICBBdXRoZW50aWNhdGlvblN0YXR1c2VzLklOVkFMSURfUEFTU1dPUkRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgSW5jb3JyZWN0IHBhc3N3b3JkLlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVElORyB8fFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdCgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICB7YXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVElORyAmJiAoXHJcbiAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiIC8+IFByb2Nlc3NpbmcuLi5cclxuICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7YXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5TdWNjZXNzZnVsbHkgbG9nZ2VkIGluITwvQWxlcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVXNlclByb2ZpbGVVcmwodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBcIi91c2Vycy9cIiArIHVzZXJJZDtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvTWFpblwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8TWFpbiAvPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKVxyXG4pO1xyXG4iLCIvLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBTeW50aGV0aWNFdmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvbkdyb3VwXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQmFkZ2VcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RhYmxlXCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Ub2dnbGVCdXR0b25cIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzLCBCYW5kU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBzb3J0QW5kTGltaXRCYW5kcyB9IGZyb20gXCIuL3V0aWxpdHkvbGltaXQtc29ydC1iYW5kc1wiO1xyXG5pbXBvcnQge1xyXG4gIEJhbmRNb2RCdXR0b25Hcm91cCxcclxuICBQbGFjZWhvbGRlckJhbmRNb2RCdXR0b25Hcm91cCxcclxufSBmcm9tIFwiLi9CYW5kTW9kQnV0dG9uR3JvdXBcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlLCB1c2VUeXBlZFNlbGVjdG9yIH0gZnJvbSBcIi4uL3N0b3JlL1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4vdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9TcGlubmVyXCI7XHJcblxyXG4vLyBUT0RPOiBTb21ldGhpbmcgc2hvdWxkIGRpc3BsYXkgd2hlbiB3ZSBoYXZlIG5vIGJhbmRzIHRvIGRpc3BsYXkhXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmlnQmFuZFRhYmxlKCk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCBhcHBJc0ZldGNoaW5nQmFuZHMgPSB1c2VUeXBlZFNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5iYW5kcy5wZW5kaW5nRmV0Y2hlcyA+IDBcclxuICApO1xyXG4gIGNvbnN0IGJhbmRzID0gdXNlVHlwZWRTZWxlY3Rvcigoc3RhdGUpID0+IFsuLi5zdGF0ZS5iYW5kcy5pdGVtc10pO1xyXG4gIGNvbnN0IHVzZXJJc0F1dGhlbnRpY2F0ZWQgPSB1c2VUeXBlZFNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PlxyXG4gICAgICBzdGF0ZS5zZXNzaW9uLmF1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRFxyXG4gICk7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlVHlwZWRTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlc3Npb24udXNlcklkKTtcclxuICBjb25zdCB1c2Vyc01vZGlmaWNhdGlvbnMgPSB1c2VUeXBlZFNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uLmJhbmRzTW9kaWZpZWRcclxuICApO1xyXG5cclxuICBjb25zdCBbc29ydFR5cGUsIHNldFNvcnRUeXBlXSA9IHVzZVN0YXRlKEJhbmRTb3J0VHlwZXMuTU9TVF9SRUNFTlQpO1xyXG4gIGNvbnN0IFtzaG91bGRGZXRjaEJhbmRzLCBzZXRTaG91bGRGZXRjaEJhbmRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBiYW5kc1BlckZldGNoID0gMjA7XHJcbiAgY29uc3QgW21heEJhbmRzRGlzcGxheWVkLCBzZXRNYXhCYW5kc0Rpc3BsYXllZF0gPSB1c2VTdGF0ZShiYW5kc1BlckZldGNoKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRQb2ludHNUbyhcclxuICAgIHRhcmdldEJhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCxcclxuICAgIG1vZGlmaWNhdGlvblZhbHVlOiBudW1iZXIsXHJcbiAgICBtb2RpZnlpbmdVc2VySWQ/OiBNb25nb29zZVR5cGVzLk9iamVjdElkLFxyXG4gICAgdW5kb1ZhbHVlPzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBpZiAobW9kaWZ5aW5nVXNlcklkKSB7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RNb2RpZnlCYW5kU2NvcmUoe1xyXG4gICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgbW9kaWZ5aW5nVXNlcklkLFxyXG4gICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICB1bmRvVmFsdWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlcXVlc3RGZXRjaEJhbmRzKCkge1xyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RGZXRjaEJhbmRzKHtcclxuICAgICAgICBtYXhCYW5kczogbWF4QmFuZHNEaXNwbGF5ZWQsXHJcbiAgICAgICAgc29ydEJ5OiBzb3J0VHlwZSxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRVc2VyTW9kaWZpY2F0aW9uVG9CYW5kKHRoaXNCYW5kSWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQpIHtcclxuICAgIGNvbnN0IG1vZGlmaWNhdGlvbiA9IHVzZXJzTW9kaWZpY2F0aW9ucy5maW5kKFxyXG4gICAgICAobW9kaWZpY2F0aW9uKSA9PiBtb2RpZmljYXRpb24udGFyZ2V0QmFuZElkID09PSB0aGlzQmFuZElkXHJcbiAgICApO1xyXG4gICAgaWYgKG1vZGlmaWNhdGlvbikgcmV0dXJuIG1vZGlmaWNhdGlvbi52YWx1ZTtcclxuICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVxdWVzdEZldGNoQmFuZHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXF1ZXN0RmV0Y2hCYW5kcygpO1xyXG4gICAgc2V0U2hvdWxkRmV0Y2hCYW5kcyhmYWxzZSk7XHJcbiAgfSwgW21heEJhbmRzRGlzcGxheWVkLCBzaG91bGRGZXRjaEJhbmRzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRNYXhCYW5kc0Rpc3BsYXllZChiYW5kc1BlckZldGNoKTtcclxuICAgIHNldFNob3VsZEZldGNoQmFuZHModHJ1ZSk7XHJcbiAgfSwgW3NvcnRUeXBlXSk7XHJcblxyXG4gIGNvbnN0IGRlc2lyZWRCYW5kcyA9IHNvcnRBbmRMaW1pdEJhbmRzKGJhbmRzLCBzb3J0VHlwZSwgbWF4QmFuZHNEaXNwbGF5ZWQpO1xyXG5cclxuICBjb25zdCBzb3J0UmFkaW9zID0gW1xyXG4gICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5CRVNULCBuYW1lOiBcIkJlc3RcIiB9LFxyXG4gICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5XT1JTVCwgbmFtZTogXCJXb3JzdFwiIH0sXHJcbiAgICB7IHZhbHVlOiBCYW5kU29ydFR5cGVzLk1PU1RfUkVDRU5ULCBuYW1lOiBcIk1vc3QgUmVjZW50XCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICA8QnV0dG9uR3JvdXAgdG9nZ2xlPlxyXG4gICAgICAgICAge3NvcnRSYWRpb3MubWFwKChyYWRpbywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtyYWRpby52YWx1ZX1cclxuICAgICAgICAgICAgICBuYW1lPVwic29ydFJhZGlvXCJcclxuICAgICAgICAgICAgICBjaGVja2VkPXtyYWRpby52YWx1ZSA9PT0gc29ydFR5cGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBTeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyB0eXBlb2YgZS5jdXJyZW50VGFyZ2V0ICYge1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRUeXBlQXNOdW1iZXI6IG51bWJlciA9IHBhcnNlSW50KGN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U29ydFR5cGUoc29ydFR5cGVBc051bWJlcik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtyYWRpby5uYW1lfVxyXG4gICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgPFRhYmxlIHNpemU9XCJzbVwiIHN0cmlwZWQgYm9yZGVyZWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHthcHBJc0ZldGNoaW5nQmFuZHMgPyAoXHJcbiAgICAgICAgICAgICAgPD57Z2V0RW50cnlQbGFjZWhvbGRlcnMoYmFuZHNQZXJGZXRjaCl9PC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtkZXNpcmVkQmFuZHMubWFwKChiYW5kKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1N0cmluZyhiYW5kLl9pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCYW5kTW9kQnV0dG9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklzQXV0aG9yaXplZD17dXNlcklzQXV0aGVudGljYXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kUGVyZm9ybWVkPXtnZXRVc2VyTW9kaWZpY2F0aW9uVG9CYW5kKGJhbmQuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5QmFuZD17KG1vZFZhbHVlLCB1bmRvVmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkUG9pbnRzVG8oYmFuZC5faWQsIG1vZFZhbHVlLCB1c2VySWQsIHVuZG9WYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntiYW5kLnNjb3JlfTwvQmFkZ2U+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge2JhbmQubmFtZX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiZm9udC13ZWlnaHQtbGlnaHRlclwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2NyZWF0ZVVzZXJQcm9maWxlVXJsKFN0cmluZyhiYW5kLm93bmVySWQpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2JhbmQub3duZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgYmxvY2tcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIHNldE1heEJhbmRzRGlzcGxheWVkKG1heEJhbmRzRGlzcGxheWVkICsgYmFuZHNQZXJGZXRjaClcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaG93IG1lIG1vcmUuLi5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFJvb3RTdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhcHBJc0ZldGNoaW5nQmFuZHM6IHN0YXRlLmJhbmRzLnBlbmRpbmdGZXRjaGVzID4gMCxcclxuICAgIGJhbmRzOiBbLi4uc3RhdGUuYmFuZHMuaXRlbXNdLFxyXG4gICAgdXNlcklzQXV0aGVudGljYXRlZDpcclxuICAgICAgc3RhdGUuc2Vzc2lvbi5hdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuICAgICAgICA/IHRydWVcclxuICAgICAgICA6IGZhbHNlLFxyXG4gICAgdXNlcklkOiBzdGF0ZS5zZXNzaW9uLnVzZXJJZCxcclxuICAgIHVzZXJzTW9kaWZpY2F0aW9uczogc3RhdGUuc2Vzc2lvbi5iYW5kc01vZGlmaWVkLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhZGRQb2ludHNUbzogKFxyXG4gICAgICB0YXJnZXRCYW5kSWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgIG1vZGlmaWNhdGlvblZhbHVlOiBudW1iZXIsXHJcbiAgICAgIG1vZGlmeWluZ1VzZXJJZD86IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgIHVuZG9WYWx1ZT86IG51bWJlclxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGlmIChtb2RpZnlpbmdVc2VySWQpIHtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RNb2RpZnlCYW5kU2NvcmUoe1xyXG4gICAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICAgIG1vZGlmeWluZ1VzZXJJZCxcclxuICAgICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgIHVuZG9WYWx1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlcXVlc3RGZXRjaEJhbmRzOiAobWF4QmFuZHM6IG51bWJlciwgc29ydEJ5OiBCYW5kU29ydFR5cGVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKGJhbmRBY3Rpb25zLnJlcXVlc3RGZXRjaEJhbmRzKHsgbWF4QmFuZHMsIHNvcnRCeSB9KSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbi8vIGNvbnN0IHJlZHV4Q29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbi8vIHR5cGUgQmlnQmFuZFRhYmxlUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+O1xyXG5cclxuLy8gdHlwZSBCaWdCYW5kVGFibGVTdGF0ZSA9IHtcclxuLy8gICBzb3J0VHlwZTogQmFuZFNvcnRUeXBlcztcclxuLy8gICBiYW5kc1BlckZldGNoOiBudW1iZXI7XHJcbi8vICAgc2hvdWxkRmV0Y2hCYW5kczogYm9vbGVhbjtcclxuLy8gICBtYXhCYW5kc0Rpc3BsYXllZDogbnVtYmVyO1xyXG4vLyB9O1xyXG5cclxuLy8gY2xhc3MgVW5jb25uZWN0ZWRCaWdCYW5kVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XHJcbi8vICAgQmlnQmFuZFRhYmxlUHJvcHMsXHJcbi8vICAgQmlnQmFuZFRhYmxlU3RhdGVcclxuLy8gPiB7XHJcbi8vICAgc3RhdGUgPSB7XHJcbi8vICAgICBzb3J0VHlwZTogQmFuZFNvcnRUeXBlcy5NT1NUX1JFQ0VOVCxcclxuLy8gICAgIGJhbmRzUGVyRmV0Y2g6IGRlZmF1bHRCYW5kc1BlckZldGNoLFxyXG4vLyAgICAgc2hvdWxkRmV0Y2hCYW5kczogZmFsc2UsXHJcbi8vICAgICBtYXhCYW5kc0Rpc3BsYXllZDogZGVmYXVsdEJhbmRzUGVyRmV0Y2gsXHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbi8vICAgICB0aGlzLnByb3BzLnJlcXVlc3RGZXRjaEJhbmRzKHRoaXMuc3RhdGUuYmFuZHNQZXJGZXRjaCwgdGhpcy5zdGF0ZS5zb3J0VHlwZSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBjb21wb25lbnREaWRVcGRhdGUoXHJcbi8vICAgICBwcmV2UHJvcHM6IEJpZ0JhbmRUYWJsZVByb3BzLFxyXG4vLyAgICAgcHJldlN0YXRlOiBCaWdCYW5kVGFibGVTdGF0ZVxyXG4vLyAgICkge1xyXG4vLyAgICAgaWYgKFxyXG4vLyAgICAgICB0aGlzLnN0YXRlLm1heEJhbmRzRGlzcGxheWVkID4gcHJldlN0YXRlLm1heEJhbmRzRGlzcGxheWVkIHx8XHJcbi8vICAgICAgIHRoaXMuc3RhdGUuc2hvdWxkRmV0Y2hCYW5kc1xyXG4vLyAgICAgKSB7XHJcbi8vICAgICAgIHRoaXMucHJvcHMucmVxdWVzdEZldGNoQmFuZHMoXHJcbi8vICAgICAgICAgdGhpcy5zdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCxcclxuLy8gICAgICAgICB0aGlzLnN0YXRlLnNvcnRUeXBlXHJcbi8vICAgICAgICk7XHJcbi8vICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG91bGRGZXRjaEJhbmRzOiBmYWxzZSB9KTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0VHlwZSAhPT0gcHJldlN0YXRlLnNvcnRUeXBlKSB7XHJcbi8vICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgIG1heEJhbmRzRGlzcGxheWVkOiB0aGlzLnN0YXRlLmJhbmRzUGVyRmV0Y2gsXHJcbi8vICAgICAgICAgc2hvdWxkRmV0Y2hCYW5kczogdHJ1ZSxcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuLy8gICBzZXRTb3J0VHlwZShuZXdUeXBlOiBCYW5kU29ydFR5cGVzKSB7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgc29ydFR5cGU6IG5ld1R5cGUgfSk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBsb2FkTW9yZSgpIHtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgbWF4QmFuZHNEaXNwbGF5ZWQ6IHN0YXRlLm1heEJhbmRzRGlzcGxheWVkICsgc3RhdGUuYmFuZHNQZXJGZXRjaCxcclxuLy8gICAgICAgfTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZ2V0VXNlck1vZGlmaWNhdGlvblRvQmFuZCh0aGlzQmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkKSB7XHJcbi8vICAgICBjb25zdCBtb2RpZmljYXRpb24gPSB0aGlzLnByb3BzLnVzZXJzTW9kaWZpY2F0aW9ucy5maW5kKFxyXG4vLyAgICAgICAobW9kaWZpY2F0aW9uKSA9PiBtb2RpZmljYXRpb24udGFyZ2V0QmFuZElkID09PSB0aGlzQmFuZElkXHJcbi8vICAgICApO1xyXG4vLyAgICAgaWYgKG1vZGlmaWNhdGlvbikgcmV0dXJuIG1vZGlmaWNhdGlvbi52YWx1ZTtcclxuLy8gICAgIGVsc2UgcmV0dXJuIDA7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZW5kZXIoKSB7XHJcbi8vICAgICAvLyBUT0RPOiBTaG91bGQgd2UgaGF2ZSBzb21lIG5vdGlmaWNhdGlvbiB0aGF0IGJhbmRzIGFyZSBiZWluZyBmZXRjaGVkP1xyXG4vLyAgICAgY29uc3QgZGVzaXJlZEJhbmRzID0gc29ydEFuZExpbWl0QmFuZHMoXHJcbi8vICAgICAgIHRoaXMucHJvcHMuYmFuZHMsXHJcbi8vICAgICAgIHRoaXMuc3RhdGUuc29ydFR5cGUsXHJcbi8vICAgICAgIHRoaXMuc3RhdGUubWF4QmFuZHNEaXNwbGF5ZWRcclxuLy8gICAgICk7XHJcblxyXG4vLyAgICAgY29uc3Qgc29ydFJhZGlvcyA9IFtcclxuLy8gICAgICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5CRVNULCBuYW1lOiBcIkJlc3RcIiB9LFxyXG4vLyAgICAgICB7IHZhbHVlOiBCYW5kU29ydFR5cGVzLldPUlNULCBuYW1lOiBcIldvcnN0XCIgfSxcclxuLy8gICAgICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5NT1NUX1JFQ0VOVCwgbmFtZTogXCJNb3N0IFJlY2VudFwiIH0sXHJcbi8vICAgICBdO1xyXG5cclxuLy8gICAgIGNvbnN0IHsgdXNlcklzQXV0aGVudGljYXRlZCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICA8Q2FyZD5cclxuLy8gICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbi8vICAgICAgICAgICA8QnV0dG9uR3JvdXAgdG9nZ2xlPlxyXG4vLyAgICAgICAgICAgICB7c29ydFJhZGlvcy5tYXAoKHJhZGlvLCBpZHgpID0+IChcclxuLy8gICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uXHJcbi8vICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbi8vICAgICAgICAgICAgICAgICB2YWx1ZT17cmFkaW8udmFsdWV9XHJcbi8vICAgICAgICAgICAgICAgICBuYW1lPVwic29ydFJhZGlvXCJcclxuLy8gICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3JhZGlvLnZhbHVlID09PSB0aGlzLnN0YXRlLnNvcnRUeXBlfVxyXG4vLyAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBTeW50aGV0aWNFdmVudCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQgYXMgdHlwZW9mIGUuY3VycmVudFRhcmdldCAmIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nO1xyXG4vLyAgICAgICAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgICAgICAgICAgICBjb25zdCBzb3J0VHlwZUFzTnVtYmVyOiBudW1iZXIgPSBwYXJzZUludChcclxuLy8gICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0LnZhbHVlXHJcbi8vICAgICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U29ydFR5cGUoc29ydFR5cGVBc051bWJlcik7XHJcbi8vICAgICAgICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgIHtyYWRpby5uYW1lfVxyXG4vLyAgICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICApKX1cclxuLy8gICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbi8vICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuLy8gICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgPFRhYmxlIHNpemU9XCJzbVwiIHN0cmlwZWQgYm9yZGVyZWQ+XHJcbi8vICAgICAgICAgICAgIDx0Ym9keT5cclxuLy8gICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hcHBJc0ZldGNoaW5nQmFuZHMgPyAoXHJcbi8vICAgICAgICAgICAgICAgICA8PntnZXRFbnRyeVBsYWNlaG9sZGVycyhkZWZhdWx0QmFuZHNQZXJGZXRjaCl9PC8+XHJcbi8vICAgICAgICAgICAgICAgKSA6IChcclxuLy8gICAgICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICAgIHtkZXNpcmVkQmFuZHMubWFwKChiYW5kKSA9PiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17U3RyaW5nKGJhbmQuX2lkKX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5kTW9kQnV0dG9uR3JvdXBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySXNBdXRob3JpemVkPXt1c2VySXNBdXRoZW50aWNhdGVkfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZFBlcmZvcm1lZD17dGhpcy5nZXRVc2VyTW9kaWZpY2F0aW9uVG9CYW5kKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFuZC5faWRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUJhbmQ9eyhtb2RWYWx1ZSwgdW5kb1ZhbHVlKSA9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hZGRQb2ludHNUbyhcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFuZC5faWQsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZFZhbHVlLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJJZCxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kb1ZhbHVlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57YmFuZC5zY29yZX08L0JhZGdlPntcIiBcIn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge2JhbmQubmFtZX17XCIgXCJ9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJmb250LXdlaWdodC1saWdodGVyXCJ9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb217XCIgXCJ9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2NyZWF0ZVVzZXJQcm9maWxlVXJsKFN0cmluZyhiYW5kLm93bmVySWQpKX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmFuZC5vd25lck5hbWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICAgICAgICAgICkpfVxyXG4vLyAgICAgICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgPC90Ym9keT5cclxuLy8gICAgICAgICAgIDwvVGFibGU+XHJcbi8vICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBibG9jayBvbkNsaWNrPXsoKSA9PiB0aGlzLmxvYWRNb3JlKCl9PlxyXG4vLyAgICAgICAgICAgICBTaG93IG1lIG1vcmUuLi5cclxuLy8gICAgICAgICAgIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4vLyAgICAgICA8L0NhcmQ+XHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0RW50cnlQbGFjZWhvbGRlcnMobnVtT2ZQbGFjZWhvbGRlcnM6IG51bWJlcik6IEpTWC5FbGVtZW50W10ge1xyXG4vLyAgIGNvbnN0IHBsYWNlaG9sZGVyczogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZQbGFjZWhvbGRlcnM7IGkrKykge1xyXG4vLyAgICAgcGxhY2Vob2xkZXJzLnB1c2goQmFuZFRhYmxlRW50cnlQbGFjZWhvbGRlcigpKTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHBsYWNlaG9sZGVycztcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgQmFuZFRhYmxlRW50cnlQbGFjZWhvbGRlciA9ICgpID0+IHtcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPHRyPlxyXG4vLyAgICAgICA8dGQ+XHJcbi8vICAgICAgICAgPFBsYWNlaG9sZGVyQmFuZE1vZEJ1dHRvbkdyb3VwIC8+e1wiIFwifVxyXG4vLyAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cInNtXCIgLz5cclxuLy8gICAgICAgPC90ZD5cclxuLy8gICAgIDwvdHI+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBCaWdCYW5kVGFibGUgPSBjb25uZWN0KFxyXG4vLyAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuLy8gICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuLy8gKShVbmNvbm5lY3RlZEJpZ0JhbmRUYWJsZSk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyUmVjb3JkID0ge1xyXG4gIGlkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0b3RhbFNjb3JlOiBudW1iZXI7XHJcbiAgbmFtZXNDb250cmlidXRlZDogbnVtYmVyO1xyXG4gIGF2ZXJhZ2VTY29yZTogbnVtYmVyO1xyXG59O1xyXG5cclxudHlwZSBVc2VyUmVjb3Jkc1NsaWNlU3RhdGUgPSB7XHJcbiAgcGVuZGluZ0ZldGNoZXM6IG51bWJlcjtcclxuICBpdGVtczogVXNlclJlY29yZFtdO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyUmVjb3Jkc1NsaWNlU3RhdGUgPSB7XHJcbiAgcGVuZGluZ0ZldGNoZXM6IDAsXHJcbiAgaXRlbXM6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgdXNlclJlY29yZHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInVzZXJSZWNvcmRzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICByZXF1ZXN0RmV0Y2hVc2VyUmVjb3JkcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgbnVtT2ZSZWNvcmRzOiBudW1iZXI7XHJcbiAgICAgICAgc29ydFR5cGU6IFVzZXJSZWNvcmRTb3J0VHlwZXM7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMrKztcclxuICAgIH0sXHJcbiAgICBmZXRjaFVzZXJSZWNvcmRzU3VjY2VzcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxVc2VyUmVjb3JkW10+XHJcbiAgICApIHtcclxuICAgICAgYWN0aW9uLnBheWxvYWQuZm9yRWFjaCgobmV3UmVjb3JkKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5pdGVtcy5zb21lKChyZWNvcmQpID0+IHJlY29yZC5pZCA9PSBuZXdSZWNvcmQuaWQpKVxyXG4gICAgICAgICAgc3RhdGUuaXRlbXMucHVzaChuZXdSZWNvcmQpO1xyXG4gICAgICB9KTtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMtLTtcclxuICAgIH0sXHJcbiAgICBmZXRjaFVzZXJSZWNvcmRzRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJSZWNvcmRzQWN0aW9ucyA9IHVzZXJSZWNvcmRzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgdXNlclJlY29yZHNTbGljZS5yZWR1Y2VyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQge1xyXG4gIHVzZXJSZWNvcmRzQWN0aW9ucyxcclxuICBVc2VyUmVjb3JkLFxyXG59IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvdXNlci1yZWNvcmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZS9cIjtcclxuaW1wb3J0IHsgc29ydEFuZExpbWl0VXNlclJlY29yZHMgfSBmcm9tIFwiLi91dGlsaXR5L2xpbWl0LXNvcnQtdXNlci1yZWNvcmRzXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RhYmxlXCI7XHJcbmltcG9ydCBCYWRnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0JhZGdlXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVVc2VyUHJvZmlsZVVybCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxpdHkvY3JlYXRlLXVzZXItcHJvZmlsZS11cmxcIlxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBSb290U3RhdGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgYXBwSXNGZXRjaGluZ1JlY29yZHM6IHN0YXRlLnVzZXJSZWNvcmRzLnBlbmRpbmdGZXRjaGVzID4gMCxcclxuICAgIHJlY29yZHM6IFsuLi5zdGF0ZS51c2VyUmVjb3Jkcy5pdGVtc10sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcXVlc3RVc2VyUmVjb3JkczogKFxyXG4gICAgICBudW1PZlJlY29yZHM6IG51bWJlcixcclxuICAgICAgc29ydFR5cGU6IFVzZXJSZWNvcmRTb3J0VHlwZXNcclxuICAgICkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICB1c2VyUmVjb3Jkc0FjdGlvbnMucmVxdWVzdEZldGNoVXNlclJlY29yZHMoeyBudW1PZlJlY29yZHMsIHNvcnRUeXBlIH0pXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExpc3RFbnRyeUJhZGdlKHByb3BzOiB7XHJcbiAgc29ydFR5cGU6IFVzZXJSZWNvcmRTb3J0VHlwZXM7XHJcbiAgcmVjb3JkOiBVc2VyUmVjb3JkO1xyXG59KSB7XHJcbiAgc3dpdGNoIChwcm9wcy5zb3J0VHlwZSkge1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfQVZFUkFHRV9TQ09SRTpcclxuICAgICAgcmV0dXJuIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e3Byb3BzLnJlY29yZC5hdmVyYWdlU2NvcmUudG9GaXhlZCgyKX08L0JhZGdlPjtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX1NDT1JFOlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57cHJvcHMucmVjb3JkLnRvdGFsU2NvcmV9PC9CYWRnZT47XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuTU9TVF9OQU1FU19DT05UUklCVVRFRDpcclxuICAgICAgcmV0dXJuIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e3Byb3BzLnJlY29yZC5uYW1lc0NvbnRyaWJ1dGVkfTwvQmFkZ2U+O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+PzwvQmFkZ2U+O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdXhDb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcclxudHlwZSBVc2VyUmVjb3Jkc0xpc3RQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiByZWR1eENvbm5lY3Rvcj4gJiB7XHJcbiAgbWF4UmVjb3JkczogbnVtYmVyO1xyXG4gIHNvcnRUeXBlOiBVc2VyUmVjb3JkU29ydFR5cGVzO1xyXG59O1xyXG5cclxuY2xhc3MgVW5jb25uZWN0ZWRVc2VyUmVjb3Jkc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VXNlclJlY29yZHNMaXN0UHJvcHM+IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMucmVxdWVzdFVzZXJSZWNvcmRzKHRoaXMucHJvcHMubWF4UmVjb3JkcywgdGhpcy5wcm9wcy5zb3J0VHlwZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hcHBJc0ZldGNoaW5nUmVjb3Jkcykge1xyXG4gICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIHVzZXIgcmVjb3Jkcy4uLjwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZXNpcmVkUmVjb3JkcyA9IHNvcnRBbmRMaW1pdFVzZXJSZWNvcmRzKFxyXG4gICAgICB0aGlzLnByb3BzLnJlY29yZHMsXHJcbiAgICAgIHRoaXMucHJvcHMuc29ydFR5cGUsXHJcbiAgICAgIHRoaXMucHJvcHMubWF4UmVjb3Jkc1xyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGFibGUgc2l6ZT1cInNtXCIgc3RyaXBlZCBib3JkZXJlZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7ZGVzaXJlZFJlY29yZHMubWFwKChyZWNvcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e1N0cmluZyhyZWNvcmQuaWQpfT5cclxuICAgICAgICAgICAgICA8dGQ+e2luZGV4ICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtjcmVhdGVVc2VyUHJvZmlsZVVybChTdHJpbmcocmVjb3JkLmlkKSl9PntyZWNvcmQubmFtZX08L0xpbms+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPExpc3RFbnRyeUJhZGdlXHJcbiAgICAgICAgICAgICAgICAgIHNvcnRUeXBlPXt0aGlzLnByb3BzLnNvcnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJSZWNvcmRzTGlzdCA9IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFVuY29ubmVjdGVkVXNlclJlY29yZHNMaXN0KTtcclxuIiwiZXhwb3J0IHsgYmFuZENyZWF0aW9uU2FnYSB9IGZyb20gXCIuL2JhbmQtY3JlYXRpb24tc2FnYVwiO1xyXG5leHBvcnQgeyBiYW5kU2NvcmVNb2RpZmljYXRpb25TYWdhIH0gZnJvbSBcIi4vYmFuZC1zY29yZS1tb2RpZmljYXRpb24tc2FnYVwiO1xyXG5leHBvcnQgeyB1c2VyQXV0aGVudGljYXRpb25TYWdhIH0gZnJvbSBcIi4vdXNlci1hdXRoZW50aWNhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IHVzZXJDcmVhdGlvblNhZ2EgfSBmcm9tIFwiLi91c2VyLWNyZWF0aW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgd2F0Y2hGZXRjaEJhbmRzU2FnYSB9IGZyb20gXCIuL3dhdGNoLWZldGNoLWJhbmRzLXNhZ2FcIjtcclxuZXhwb3J0IHsgd2F0Y2hGZXRjaFVzZXJSZWNvcmRzU2FnYSB9IGZyb20gXCIuL2ZldGNoLXVzZXItcmVjb3Jkcy1zYWdhXCI7XHJcbmV4cG9ydCB7IGZldGNoUHJvZmlsZVNhZ2EgfSBmcm9tIFwiLi9mZXRjaC11c2VyLXByb2ZpbGUtc2FnYVwiO1xyXG5leHBvcnQgeyBjaGVja1Nlc3Npb25TYWdhIH0gZnJvbSBcIi4vY2hlY2stc2Vzc2lvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IGxvZ291dFNhZ2EgfSBmcm9tIFwiLi9sb2dvdXQtc2FnYVwiOyIsImltcG9ydCB7IEJhbmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRBbmRMaW1pdEJhbmRzKFxyXG4gIGJhbmRzOiBCYW5kQ2xhc3NbXSxcclxuICBzb3J0Qnk6IEJhbmRTb3J0VHlwZXMsXHJcbiAgbGltaXQ6IG51bWJlclxyXG4pOiBCYW5kQ2xhc3NbXSB7XHJcbiAgbGV0IGZpbHRlcmVkQmFuZHMgPSBbLi4uYmFuZHNdO1xyXG5cclxuICBzd2l0Y2ggKHNvcnRCeSkge1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLkJFU1Q6XHJcbiAgICAgIGZpbHRlcmVkQmFuZHMuc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQmFuZFNvcnRUeXBlcy5NT1NUX1JFQ0VOVDpcclxuICAgICAgZmlsdGVyZWRCYW5kcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgLy8gVE9ETzogV2hhdCBpcyBoYXBwZW5pbmcgaGVyZT9cclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIERhdGUucGFyc2UoYi5jcmVhdGVkT24pIC0gRGF0ZS5wYXJzZShhLmNyZWF0ZWRPbik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQmFuZFNvcnRUeXBlcy5XT1JTVDpcclxuICAgICAgZmlsdGVyZWRCYW5kcy5zb3J0KChhLCBiKSA9PiBhLnNjb3JlIC0gYi5zY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJlZEJhbmRzID0gZmlsdGVyZWRCYW5kcy5zbGljZSgwLCBsaW1pdCk7XHJcbiAgcmV0dXJuIGZpbHRlcmVkQmFuZHM7XHJcbn1cclxuIiwiLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9BbGVydFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBVc2VyQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXJcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG4vLyBVbmNvbm5lY3RlZE5ld1VzZXJGb3JtLnByb3BUeXBlcyA9IHtcclxuLy8gICBzdWJtaXRGb3JtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4vLyAgIHVzZXJDcmVhdGlvblN0YXR1czogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoVXNlckNyZWF0aW9uU3RhdHVzZXMpKSxcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNlc3Npb24gfSkgPT4gKHtcclxuLy8gICB1c2VyQ3JlYXRpb25TdGF0dXM6IHNlc3Npb24udXNlckNyZWF0aW9uU3RhdHVzLFxyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuLy8gICBzdWJtaXRGb3JtOiAoLyplbWFpbCwqLyB1c2VybmFtZSwgcGFzc3dvcmQsIHJlcGVhdFBhc3N3b3JkKSA9PlxyXG4vLyAgICAgZGlzcGF0Y2goXHJcbi8vICAgICAgIHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDcmVhdGVVc2VyKHtcclxuLy8gICAgICAgICAvLyBlbWFpbCxcclxuLy8gICAgICAgICB1c2VybmFtZSxcclxuLy8gICAgICAgICBwYXNzd29yZCxcclxuLy8gICAgICAgICByZXBlYXRQYXNzd29yZCxcclxuLy8gICAgICAgfSlcclxuLy8gICAgICksXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgcmVkdXhDb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcclxuLy8gdHlwZSBOZXdVc2VyRm9ybVByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPjtcclxuXHJcbi8vIHR5cGUgTmV3VXNlckZvcm1TdGF0ZSA9IHtcclxuLy8gICBlbWFpbDogc3RyaW5nO1xyXG4vLyAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbi8vICAgcGFzc3dvcmQ6IHN0cmluZztcclxuLy8gICByZXBlYXRQYXNzd29yZDogc3RyaW5nO1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5ld1VzZXJGb3JtKCk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCB1c2VyQ3JlYXRpb25TdGF0dXMgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uLnVzZXJDcmVhdGlvblN0YXR1c1xyXG4gICk7XHJcblxyXG4gIC8vIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZXBlYXRQYXNzd29yZCwgc2V0UmVwZWF0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0Rm9ybSgpIHtcclxuICAgIGRpc3BhdGNoKFxyXG4gICAgICBzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0Q3JlYXRlVXNlcih7XHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgcmVwZWF0UGFzc3dvcmQsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtcIm1iLTVcIn0+XHJcbiAgICAgIDxDYXJkIHN0eWxlPXt7IG1heFdpZHRoOiBcIjM2cmVtXCIgfX0gY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgey8qIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyRW1haWxcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbCBBZGRyZXNzPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLklOVkFMSURfRU1BSUxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD4gKi99XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyTmFtZVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVzZXJuYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgdXNlckNyZWF0aW9uU3RhdHVzID09IFVzZXJDcmVhdGlvblN0YXR1c2VzLlVTRVJOQU1FX1RBS0VOXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICBVc2VybmFtZSBpcyBhbHJlYWR5IHRha2VuLlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICB1c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuUEFTU1dPUkRTX0RPTlRfTUFUQ0hcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyUmVwZWF0UGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5SZXBlYXQgUGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVwZWF0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgdXNlckNyZWF0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlBBU1NXT1JEU19ET05UX01BVENIXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICBQYXNzd29yZHMgZG9uJmFwb3M7dCBtYXRjaC5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgIHVzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HIHx8XHJcbiAgICAgICAgICAgICAgICB1c2VyQ3JlYXRpb25TdGF0dXMgPT0gVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTU1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdWJtaXRGb3JtKCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIHt1c2VyQ3JlYXRpb25TdGF0dXMgPT0gVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTUyAmJiAoXHJcbiAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICBBY2NvdW50IGNyZWF0ZWQhIFlvdSBtYXkgbm93IDxhIGhyZWY9XCIvbG9naW5cIj5sb2cgaW48L2E+LlxyXG4gICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHt1c2VyQ3JlYXRpb25TdGF0dXMgPT0gVXNlckNyZWF0aW9uU3RhdHVzZXMuUFJPQ0VTU0lORyAmJiAoXHJcbiAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiIC8+IFByb2Nlc3NpbmcuLi5cclxuICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG4vLyBleHBvcnQgY2xhc3MgVW5jb25uZWN0ZWROZXdVc2VyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuLy8gICBOZXdVc2VyRm9ybVByb3BzLFxyXG4vLyAgIE5ld1VzZXJGb3JtU3RhdGVcclxuLy8gPiB7XHJcbi8vICAgc3RhdGUgPSB7XHJcbi8vICAgICBlbWFpbDogXCJcIixcclxuLy8gICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4vLyAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbi8vICAgICByZXBlYXRQYXNzd29yZDogXCJcIixcclxuLy8gICB9O1xyXG5cclxuLy8gICAvLyBUT0RPOiBXb3VsZG4ndCBpdCBiZSBlYXN5IHRvIG1ha2UgaXQgc28gdGhlIGVtYWlsIGlzIHZhbGlkYXRlZCBhcyB0aGUgdXNlciB0eXBlcz8gTWF5YmUgb24gYSBzbGlnaHQgZGVsYXk/IFNhbWUgd2l0aCB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkP1xyXG5cclxuLy8gICByZW5kZXIoKSB7XHJcbi8vICAgICBjb25zdCB7IHVzZXJDcmVhdGlvblN0YXR1cyB9ID0gdGhpcy5wcm9wcztcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtcIm1iLTVcIn0+XHJcbi8vICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzZyZW1cIiB9fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbi8vICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICA8Rm9ybT5cclxuLy8gICAgICAgICAgICAgICB7LyogPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJFbWFpbFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWwgQWRkcmVzczwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbi8vICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuLy8gICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5JTlZBTElEX0VNQUlMXHJcbi8vICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXHJcbi8vICAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuLy8gICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+ICovfVxyXG4vLyAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyTmFtZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuLy8gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4vLyAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09XHJcbi8vICAgICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuVVNFUk5BTUVfVEFLRU5cclxuLy8gICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgVXNlcm5hbWUgaXMgYWxyZWFkeSB0YWtlbi5cclxuLy8gICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4vLyAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuLy8gICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlclBhc3N3b3JkXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuLy8gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4vLyAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09XHJcbi8vICAgICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuUEFTU1dPUkRTX0RPTlRfTUFUQ0hcclxuLy8gICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbi8vICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJSZXBlYXRQYXNzd29yZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UmVwZWF0IFBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlcGVhdFBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuLy8gICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSFxyXG4vLyAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICBQYXNzd29yZHMgZG9uJmFwb3M7dCBtYXRjaC5cclxuLy8gICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4vLyAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuLy8gICAgICAgICAgICAgICA8QnV0dG9uXHJcbi8vICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbi8vICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuLy8gICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuLy8gICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuLy8gICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HIHx8XHJcbi8vICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09IFVzZXJDcmVhdGlvblN0YXR1c2VzLlNVQ0NFU1NcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbi8vICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3VibWl0Rm9ybShcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLmVtYWlsLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcm5hbWUsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXNzd29yZCxcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlcGVhdFBhc3N3b3JkXHJcbi8vICAgICAgICAgICAgICAgICAgIClcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICBTdWJtaXRcclxuLy8gICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuLy8gICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlNVQ0NFU1MgJiYgKFxyXG4vLyAgICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJzdWNjZXNzXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIEFjY291bnQgY3JlYXRlZCEgWW91IG1heSBub3cgPGEgaHJlZj1cIi9sb2dpblwiPmxvZyBpbjwvYT4uXHJcbi8vICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4vLyAgICAgICAgICAgICAgICl9XHJcbi8vICAgICAgICAgICAgICAge3VzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HICYmIChcclxuLy8gICAgICAgICAgICAgICAgIDxBbGVydCB2YXJpYW50PVwiaW5mb1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiIC8+IFByb2Nlc3NpbmcuLi5cclxuLy8gICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbi8vICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgPC9Gb3JtPlxyXG4vLyAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbi8vICAgICAgICAgPC9DYXJkPlxyXG4vLyAgICAgICA8L0NvbnRhaW5lcj5cclxuLy8gICAgICk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgY29uc3QgTmV3VXNlckZvcm0gPSBjb25uZWN0KFxyXG4vLyAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuLy8gICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuLy8gKShVbmNvbm5lY3RlZE5ld1VzZXJGb3JtKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==