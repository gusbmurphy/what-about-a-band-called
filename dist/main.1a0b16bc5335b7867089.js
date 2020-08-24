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
    }, []);
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
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/bands", component: BigBandTable_1.ControlledBandTable }),
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
                    react_1.default.createElement(BigBandTable_1.ControlledBandTable, null)),
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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/ts-loader/index.js):\nError: ENOENT: no such file or directory, open 'F:\\Web\\what-about-a-band-called\\src\\app\\components\\BigBandTable.tsx'");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCYW5kRm9ybUFsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zdGF0dXNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2JhbmQtY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0NyZWF0ZUJhbmRGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2xvZ291dC1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2dldC10aW1lLXNpbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItYXV0aGVudGljYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlclByb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvZmV0Y2gtdXNlci1yZWNvcmRzLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9iYW5kLXNjb3JlLW1vZGlmaWNhdGlvbi1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGF0aHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9jaGVjay1zZXNzaW9uLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvYmFuZHMtc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2ZldGNoLXVzZXItcHJvZmlsZS1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW4udHN4Iiwid2VicGFjazovLy8od2VicGFjaykvaG90IHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9sb2ckIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9MYW5kaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2NyZWF0ZS11c2VyLXByb2ZpbGUtdXJsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlclJlY29yZHNMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9OZXdVc2VyRm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUErQzs7QUFFeEMsZ0JBQWdCLG9FQUFvQjs7Ozs7Ozs7Ozs7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akMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLGdEQUFnRDtBQUNoRCxzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLGtEQUFrRDtBQUNsRCxvREFBb0Q7QUFDcEQsNENBQTRDO0FBQzVDLDhFQUE4RTtBQUM5RSwyQkFBMkI7QUFDM0IsbUJBQW1CO0FBQ25CLDRFQUE0RTtBQUM1RSx5Q0FBeUM7QUFDekMsbUZBQW1GO0FBQ25GLDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCLHlCQUF5QjtBQUN6QixrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLFNBQVM7QUFDVCxNQUFNO0FBQ04sSUFBSTtBQUVKLHNDQUFzQztBQUN0QyxxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCLDZCQUE2QiIsImZpbGUiOiJtYWluLjFhMGIxNmJjNTMzNWI3ODY3MDg5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlRmV0Y2hTdGF0dXNlcyB9IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgVXNlclByb2ZpbGVUeXBlID0ge1xyXG4gIGlkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0b3RhbFNjb3JlOiBudW1iZXI7XHJcbiAgbmFtZXNDb250cmlidXRlZDogbnVtYmVyO1xyXG4gIGF2ZXJhZ2VTY29yZTogbnVtYmVyO1xyXG4gIGJhbmRzOiBCYW5kQ2xhc3NbXTtcclxufTtcclxuXHJcbnR5cGUgVXNlclByb2ZpbGVTbGljZVN0YXRlID0ge1xyXG4gIGZldGNoU3RhdHVzOiBQcm9maWxlRmV0Y2hTdGF0dXNlcztcclxuICBwcm9maWxlPzogVXNlclByb2ZpbGVUeXBlO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyUHJvZmlsZVNsaWNlU3RhdGUgPSB7XHJcbiAgZmV0Y2hTdGF0dXM6IFByb2ZpbGVGZXRjaFN0YXR1c2VzLk5PVF9UUllJTkcsXHJcbiAgcHJvZmlsZTogdW5kZWZpbmVkLFxyXG59O1xyXG5cclxuY29uc3QgdXNlclByb2ZpbGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInVzZXJQcm9maWxlXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICByZXF1ZXN0RmV0Y2hVc2VyUHJvZmlsZShcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdGFyZ2V0SWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuZmV0Y2hTdGF0dXMgPSBQcm9maWxlRmV0Y2hTdGF0dXNlcy5BVFRFTVBUSU5HO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclByb2ZpbGVTdWNjZXNzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgcHJvZmlsZTogVXNlclByb2ZpbGVUeXBlIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuZmV0Y2hTdGF0dXMgPSBQcm9maWxlRmV0Y2hTdGF0dXNlcy5TVUNDRVNTO1xyXG4gICAgICBzdGF0ZS5wcm9maWxlID0gYWN0aW9uLnBheWxvYWQucHJvZmlsZTtcclxuICAgIH0sXHJcbiAgICBmZXRjaFVzZXJQcm9maWxlRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5mZXRjaFN0YXR1cyA9IFByb2ZpbGVGZXRjaFN0YXR1c2VzLkZBSUxVUkU7XHJcbiAgICAgIHN0YXRlLnByb2ZpbGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJQcm9maWxlQWN0aW9ucyA9IHVzZXJQcm9maWxlU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgdXNlclByb2ZpbGVTbGljZS5yZWR1Y2VyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJyZWFjdC1ib290c3RyYXAvQWxlcnRcIjtcclxuaW1wb3J0IHsgTGlua0NvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JBbGVydCgpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwid2FybmluZ1wiPlxyXG4gICAgICA8QWxlcnQuSGVhZGluZz5VaCBvaC4uLjwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgU29tZXRoaW5nIHdlbnQgd3JvbmchIFdoYXQgZGlkIHlvdSBkbyE/IERvIHlvdSBoYXZlIGFueSBpZGVhIGhvdyBtdWNoIElcclxuICAgICAgICB3b3JrZWQgdG8gZ2V0IHRoaXMgcGxhY2UgY2xlYW4gYW5kIHRoZW4geW91IHNob3cgdXAgYW5kIG1lc3MgdGhlIHdob2xlXHJcbiAgICAgICAgdGhpbmcgdXA/IE5vIHJlc3BlY3QuLi5cclxuICAgICAgPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTm9OYW1lQWxlcnQoKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cIndhcm5pbmdcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+VGhpcyBNRiBzYWlkICZsZHF1bzsgJnJkcXVvOzwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgV2hvIGFyZSB5b3UsIEpvaG4gQ2FnZT8g8J+YrfCfmK3wn5itIEp1c3Qga2lkZGluZywgZG9uJmFwb3M7dCBrbm93IHdobyB0aGF0XHJcbiAgICAgICAgaXMuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhbmRFeGlzdHNBbGVydCgpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwid2FybmluZ1wiPlxyXG4gICAgICA8QWxlcnQuSGVhZGluZz5Tb21lYm9keSBhbHJlYWR5IHRob3VnaHQgb2YgdGhhdCE8L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEdvaW5nIHRvIGhhdmUgdG8gdHJ5IGhhcmRlci4gTWF5YmUgcmVhZCBhIHZlcnkgY29tcGxpY2F0ZWQgYm9vayBhbmQgdGhlblxyXG4gICAgICAgIHRoaW5rIG9mIHNvbWUgcmVmZXJlbmNlIHRvIHRoYXQuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJOb3RMb2dnZWRJbkFsZXJ0KCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPllvdSZhcG9zO3ZlIGdvdHRhIGJlIHNpZ25lZCBpbiE8L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFdlIGRvbiZhcG9zO3QgbGV0IGp1c3QgYW55b25lIGluIGhlcmUuIFlvdSBjYW57XCIgXCJ9XHJcbiAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbmV3LXVzZXJcIj5cclxuICAgICAgICAgIDxBbGVydC5MaW5rPm1ha2UgYW4gYWNjb3VudCBoZXJlPC9BbGVydC5MaW5rPlxyXG4gICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICAsIHRob3VnaCwgaWYgeW91IHdhbnQuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhbmRDcmVhdGVkQWxlcnQobmFtZTogc3RyaW5nKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+JmxkcXVvO3tuYW1lfSZyZHF1bzsgc3VibWl0dGVkITwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+Tm93IHRoYXQmYXBvcztzIGZ1bm55LjwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRBbmRMaW1pdFVzZXJSZWNvcmRzKFxyXG4gIHJlY29yZHM6IFVzZXJSZWNvcmRbXSxcclxuICBzb3J0Qnk6IFVzZXJSZWNvcmRTb3J0VHlwZXMsXHJcbiAgbGltaXQ6IG51bWJlclxyXG4pOiBVc2VyUmVjb3JkW10ge1xyXG4gIGxldCBmaWx0ZXJlZFJlY29yZHMgPSBbLi4ucmVjb3Jkc107XHJcblxyXG4gIHN3aXRjaCAoc29ydEJ5KSB7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9BVkVSQUdFX1NDT1JFOlxyXG4gICAgICBmaWx0ZXJlZFJlY29yZHMuc29ydCgoYSwgYikgPT4gYi5hdmVyYWdlU2NvcmUgLSBhLmF2ZXJhZ2VTY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfU0NPUkU6XHJcbiAgICAgIGZpbHRlcmVkUmVjb3Jkcy5zb3J0KChhLCBiKSA9PiBiLnRvdGFsU2NvcmUgLSBhLnRvdGFsU2NvcmUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEOlxyXG4gICAgICBmaWx0ZXJlZFJlY29yZHMuc29ydCgoYSwgYikgPT4gYi5uYW1lc0NvbnRyaWJ1dGVkIC0gYS5uYW1lc0NvbnRyaWJ1dGVkKTtcclxuICB9XHJcblxyXG4gIGZpbHRlcmVkUmVjb3JkcyA9IGZpbHRlcmVkUmVjb3Jkcy5zbGljZSgwLCBsaW1pdCk7XHJcbiAgcmV0dXJuIGZpbHRlcmVkUmVjb3JkcztcclxufVxyXG4iLCJleHBvcnQgZW51bSBVc2VyUmVjb3JkU29ydFR5cGVzIHtcclxuICBISUdIRVNUX1NDT1JFLFxyXG4gIEhJR0hFU1RfQVZFUkFHRV9TQ09SRSxcclxuICBNT1NUX05BTUVTX0NPTlRSSUJVVEVEXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhbmRDcmVhdGlvblN0YXR1c2VzIHtcclxuICBDUkVBVElORyxcclxuICBDUkVBVEVELFxyXG4gIEVSUk9SLFxyXG4gIEJBTkRfRVhJU1RTLFxyXG4gIE5PVF9UUllJTkcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhbmRTb3J0VHlwZXMge1xyXG4gIEJFU1QsXHJcbiAgV09SU1QsXHJcbiAgTU9TVF9SRUNFTlQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzIHtcclxuICBBVFRFTVBUSU5HLFxyXG4gIFNVQ0NFU1MsXHJcbiAgRkFJTFVSRSxcclxuICBOT1RfVFJZSU5HLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQcm9maWxlRmV0Y2hTdGF0dXNlcyB7XHJcbiAgQVRURU1QVElORyxcclxuICBTVUNDRVNTLFxyXG4gIEZBSUxVUkUsXHJcbiAgTk9UX1RSWUlOR1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBBdXRoZW50aWNhdGlvblN0YXR1c2VzIHtcclxuICBBVVRIRU5USUNBVElORyxcclxuICBBVVRIRU5USUNBVEVELFxyXG4gIE5PVF9BVVRIRU5USUNBVEVELFxyXG4gIE5PVF9UUllJTkcsXHJcbiAgU0VSVkVSX0VSUk9SLFxyXG4gIFVTRVJOQU1FX05PVF9GT1VORCxcclxuICBJTlZBTElEX1BBU1NXT1JELFxyXG4gIExPR0dJTkdfT1VULFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBVc2VyQ3JlYXRpb25TdGF0dXNlcyB7XHJcbiAgUFJPQ0VTU0lORyxcclxuICBQQVNTV09SRFNfRE9OVF9NQVRDSCxcclxuICBVU0VSTkFNRV9UQUtFTixcclxuICBOT1RfVFJZSU5HLFxyXG4gIFNFUlZFUl9FUlJPUixcclxuICBTVUNDRVNTLFxyXG4gIEVNUFRZX0ZJRUxEUyxcclxuICBJTlZBTElEX0VNQUlMLFxyXG4gIEVNQUlMX1RBS0VOLFxyXG59XHJcbiIsImltcG9ydCB7IHRha2UsIHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBOZXdCYW5kUmVxdWVzdEJvZHkgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3JvdXRlLWhhbmRsZXJzL2JhbmRzXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYW5kQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBiYW5kQ3JlYXRpb25TYWdhKCkge1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoYmFuZEFjdGlvbnMucmVxdWVzdENyZWF0ZUJhbmQudHlwZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNhZ2EgcGF5bG9hZDogXCIsIHBheWxvYWQpO1xyXG4gICAgY29uc3QgeyBjcmVhdGluZ1VzZXJJZCwgYmFuZE5hbWUsIGNyZWF0aW5nVXNlcm5hbWUgfSA9IHBheWxvYWQ7XHJcbiAgICAvLyBsZXQgbmV3QmFuZCA9IHtcclxuICAgIC8vICAgY3JlYXRpbmdVc2VySWQsXHJcbiAgICAvLyAgIGJhbmROYW1lLFxyXG4gICAgLy8gfTtcclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5OiBOZXdCYW5kUmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgIGJhbmROYW1lLFxyXG4gICAgICBvd25lcklkOiBjcmVhdGluZ1VzZXJJZCxcclxuICAgICAgb3duZXJOYW1lOiBjcmVhdGluZ1VzZXJuYW1lLFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiSEVyZSFcIilcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMubmV3QmFuZCxcclxuICAgICAgICByZXF1ZXN0Qm9keVxyXG4gICAgICApO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3BvbnNlIGluIGJhbmRjcmVhdGlvbnNhZ2E6IFwiLCByZXNwb25zZSlcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vdyBpbSBoZXJlIVwiKVxyXG4gICAgICAgIGNvbnN0IG5ld0JhbmQ6IEJhbmRDbGFzcyA9IHJlc3BvbnNlLmRhdGEubmV3QmFuZDtcclxuICAgICAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMuY3JlYXRlQmFuZFN1Y2Nlc3MobmV3QmFuZCkpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGxldCB7IF9pZCwgYmFuZE5hbWUsIGNyZWF0aW5nVXNlcklkLCBzY29yZSB9ID0gbmV3QmFuZDtcclxuICAgICAgLy8gbGV0IG5ld0JhbmQ6IEJhbmRDbGFzcyA9IHtcclxuICAgICAgLy8gICBuYW1lOiBiYW5kTmFtZSxcclxuICAgICAgLy8gICBvd25lck5hbWU6IGNyZWF0aW5nVXNlcm5hbWUsXHJcbiAgICAgIC8vICAgb3duZXJJZDogY3JlYXRpbmdVc2VySWQsXHJcbiAgICAgIC8vICAgc2NvcmU6IDAsXHJcbiAgICAgIC8vICAgY3JlYXRlZE9uLFxyXG4gICAgICAvLyAgIF9pZDogbmV3QmFuZElkLFxyXG4gICAgICAvLyB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgcmVhc29uOiBCYW5kQ3JlYXRpb25TdGF0dXNlcyA9IGVycm9yLnJlc3BvbnNlLmRhdGEucmVhc29uO1xyXG4gICAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMuY3JlYXRlQmFuZEZhaWx1cmUocmVhc29uKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzLCB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2aWdhdGlvbigpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgeyBhdXRoZW50aWNhdGlvblN0YXR1cywgdXNlcm5hbWUgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNlc3Npb25cclxuICApO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIGRpc3BhdGNoKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RMb2dvdXQoKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja1Nlc3Npb24oKSB7XHJcbiAgICBkaXNwYXRjaChzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0Q2hlY2tTZXNzaW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLk5PVF9UUllJTkcpXHJcbiAgICAgIGNoZWNrU2Vzc2lvbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9cIj5cclxuICAgICAgICA8TmF2YmFyLkJyYW5kPndhYmFiYz88L05hdmJhci5CcmFuZD5cclxuICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICB7YXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TmF2Lkl0ZW0+U2lnbmVkIGluIGFzIHt1c2VybmFtZX08L05hdi5JdGVtPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfT5Mb2dvdXQ8L05hdi5MaW5rPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICA8TmF2Lkxpbms+TG9naW48L05hdi5MaW5rPlxyXG4gICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbmV3LXVzZXJcIj5cclxuICAgICAgICAgICAgPE5hdi5MaW5rPkNyZWF0ZSBBY2NvdW50PC9OYXYuTGluaz5cclxuICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvTmF2YmFyPlxyXG4gICk7XHJcbn0iLCIvLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRGlzcGF0Y2gsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcywgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXBcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCYW5kQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXJcIjtcclxuaW1wb3J0IHtcclxuICBCYW5kQ3JlYXRlZEFsZXJ0LFxyXG4gIEJhbmRFeGlzdHNBbGVydCxcclxuICBFcnJvckFsZXJ0LFxyXG4gIE5vTmFtZUFsZXJ0LFxyXG4gIFVzZXJOb3RMb2dnZWRJbkFsZXJ0LFxyXG59IGZyb20gXCIuL0NyZWF0ZUJhbmRGb3JtQWxlcnRzXCI7XHJcblxyXG5lbnVtIENyZWF0aW9uQWxlcnQge1xyXG4gIEVycm9yLFxyXG4gIE5vTmFtZSxcclxuICBCYW5kRXhpc3RzLFxyXG4gIEJhbmRDcmVhdGVkLFxyXG4gIE5vdExvZ2dlZEluLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQmFuZEZvcm0oKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHtcclxuICAgIHNlc3Npb246IHsgYXV0aGVudGljYXRpb25TdGF0dXMsIHVzZXJJZCwgdXNlcm5hbWUgfSxcclxuICAgIGJhbmRzOiB7IGNyZWF0aW9uU3RhdHVzOiBiYW5kQ3JlYXRpb25TdGF0dXMgfSxcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlKTtcclxuICBjb25zdCBbYmFuZE5hbWUsIHNldEJhbmROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjcmVhdGVkTmFtZSwgc2V0Q3JlYXRlZE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZTxDcmVhdGlvbkFsZXJ0IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGJhbmRDcmVhdGlvblN0YXR1cykge1xyXG4gICAgICBjYXNlIEJhbmRDcmVhdGlvblN0YXR1c2VzLkJBTkRfRVhJU1RTOlxyXG4gICAgICAgIHNldEFsZXJ0KENyZWF0aW9uQWxlcnQuQmFuZEV4aXN0cyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjYXNlIEJhbmRDcmVhdGlvblN0YXR1c2VzLkVSUk9SOlxyXG4gICAgICAgIHNldEFsZXJ0KENyZWF0aW9uQWxlcnQuRXJyb3IpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY2FzZSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVEVEOlxyXG4gICAgICAgIHNldENyZWF0ZWROYW1lKGJhbmROYW1lKTtcclxuICAgICAgICBzZXRCYW5kTmFtZShcIlwiKTtcclxuICAgICAgICBzZXRBbGVydChDcmVhdGlvbkFsZXJ0LkJhbmRDcmVhdGVkKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfSwgW2JhbmRDcmVhdGlvblN0YXR1c10pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICBpZiAoYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEKSB7XHJcbiAgICAgIGlmIChiYW5kTmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5Ob05hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgYmFuZEFjdGlvbnMucmVxdWVzdENyZWF0ZUJhbmQoe1xyXG4gICAgICAgICAgICBjcmVhdGluZ1VzZXJJZDogdXNlcklkISxcclxuICAgICAgICAgICAgYmFuZE5hbWUsXHJcbiAgICAgICAgICAgIGNyZWF0aW5nVXNlcm5hbWU6IHVzZXJuYW1lISxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5Ob3RMb2dnZWRJbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBEaXNwbGF5QWxlcnQoe1xyXG4gICAgYWxlcnQsXHJcbiAgfToge1xyXG4gICAgYWxlcnQ6IENyZWF0aW9uQWxlcnQgfCB1bmRlZmluZWQ7XHJcbiAgfSk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XHJcbiAgICBzd2l0Y2ggKGFsZXJ0KSB7XHJcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuQmFuZENyZWF0ZWQ6XHJcbiAgICAgICAgcmV0dXJuIEJhbmRDcmVhdGVkQWxlcnQoY3JlYXRlZE5hbWUpO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuQmFuZEV4aXN0czpcclxuICAgICAgICByZXR1cm4gQmFuZEV4aXN0c0FsZXJ0KCk7XHJcbiAgICAgIGNhc2UgQ3JlYXRpb25BbGVydC5FcnJvcjpcclxuICAgICAgICByZXR1cm4gRXJyb3JBbGVydCgpO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuTm9OYW1lOlxyXG4gICAgICAgIHJldHVybiBOb05hbWVBbGVydCgpO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuTm90TG9nZ2VkSW46XHJcbiAgICAgICAgcmV0dXJuIFVzZXJOb3RMb2dnZWRJbkFsZXJ0KCk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVOYW1lQ2hhbmdlKGUpIHtcclxuICAgIHNldEJhbmROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICA8SW5wdXRHcm91cCBzaXplPVwibGdcIj5cclxuICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhYm91dCBhIGJhbmQgY2FsbGVkLi4uXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlTmFtZUNoYW5nZShlKX1cclxuICAgICAgICAgIHZhbHVlPXtiYW5kTmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgIHtiYW5kQ3JlYXRpb25TdGF0dXMgPT0gQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRJTkcgPyAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICA8U3Bpbm5lclxyXG4gICAgICAgICAgICAgICAgYXM9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImJvcmRlclwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdCgpfT5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgPERpc3BsYXlBbGVydCBhbGVydD17YWxlcnR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGxvZ291dFNhZ2EoKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdExvZ291dC50eXBlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MuZGVsZXRlLFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLnNlc3Npb25FbmRwb2ludCwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX1cclxuICAgICAgKTtcclxuICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmxvZ291dFN1Y2Nlc3MoKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmxvZ291dEZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiY29uc3QgbXNJbk1pbnV0ZSA9IDYwMDAwO1xyXG5jb25zdCBtc0luSG91ciA9IG1zSW5NaW51dGUgKiA2MDtcclxuY29uc3QgbXNJbkRheSA9IG1zSW5Ib3VyICogMjQ7XHJcbmNvbnN0IG1zSW5ZZWFyID0gbXNJbkRheSAqIDM2NTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lU2luY2UoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgY29uc3QgZWxhcHNlZFRpbWUgPSBEYXRlLm5vdygpIC0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJbk1pbnV0ZSkge1xyXG4gICAgcmV0dXJuIFwiMW1cIjtcclxuICB9XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJbkhvdXIpIHtcclxuICAgIGNvbnN0IG51bU9mTWludXRlcyA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyBtc0luTWludXRlKTtcclxuICAgIHJldHVybiBgJHtudW1PZk1pbnV0ZXN9bWA7XHJcbiAgfVxyXG4gIGlmIChlbGFwc2VkVGltZSA8IG1zSW5EYXkpIHtcclxuICAgIGNvbnN0IG51bU9mSG91cnMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJbkhvdXIpO1xyXG4gICAgY29uc3QgbnVtT2ZNaW51dGVzID0gTWF0aC5mbG9vcigoZWxhcHNlZFRpbWUgJSBtc0luSG91cikgLyBtc0luTWludXRlKTtcclxuICAgIGxldCBzdHJpbmcgPSBgJHtudW1PZkhvdXJzfWhgO1xyXG4gICAgaWYgKG51bU9mTWludXRlcyA+IDApIHN0cmluZyArPSBgICR7bnVtT2ZNaW51dGVzfW1gO1xyXG4gICAgcmV0dXJuIHN0cmluZztcclxuICB9XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJblllYXIpIHtcclxuICAgIGNvbnN0IG51bU9mRGF5cyA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyBtc0luRGF5KTtcclxuICAgIHJldHVybiBgJHtudW1PZkRheXN9ZGA7XHJcbiAgfVxyXG4gIGNvbnN0IG51bU9mWWVhcnMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJblllYXIpO1xyXG4gIGNvbnN0IG51bU9mRGF5cyA9IE1hdGguZmxvb3IoKGVsYXBzZWRUaW1lICUgbXNJblllYXIpIC8gbXNJbkRheSk7XHJcbiAgbGV0IHN0cmluZyA9IGAke251bU9mWWVhcnN9eWA7XHJcbiAgaWYgKG51bU9mRGF5cyA+IDApIHN0cmluZyArPSBgICR7bnVtT2ZEYXlzfWRgO1xyXG4gIHJldHVybiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25DaGFubmVsLCBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogd2F0Y2hGZXRjaEJhbmRzU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIGNvbnN0IGZldGNoQmFuZHNDaGFubmVsID0geWllbGQgYWN0aW9uQ2hhbm5lbChcclxuICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RGZXRjaEJhbmRzLnR5cGVcclxuICApO1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoZmV0Y2hCYW5kc0NoYW5uZWwpO1xyXG4gICAgY29uc3QgeyBtYXhCYW5kcywgc29ydEJ5IH0gPSBwYXlsb2FkO1xyXG4gICAgeWllbGQgY2FsbChmZXRjaEJhbmRzLCBtYXhCYW5kcywgc29ydEJ5KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZmV0Y2hCYW5kcyhtYXhCYW5kcywgc29ydEJ5KSB7XHJcbiAgbGV0IHJlc3BvbnNlO1xyXG4gIHRyeSB7XHJcbiAgICByZXNwb25zZSA9IHlpZWxkIGNhbGwoYXhpb3MucG9zdCwgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMucG9zdEJhbmRzLCB7XHJcbiAgICAgIG1heEJhbmRzLFxyXG4gICAgICBzb3J0QnksXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5mZXRjaEJhbmRzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5mZXRjaEJhbmRzRmFpbHVyZSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogdXNlckF1dGhlbnRpY2F0aW9uU2FnYSgpIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RBdXRoZW50aWNhdGVVc2VyLnR5cGUpO1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHBheWxvYWQ7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5hdXRoZW50aWNhdGUsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyB1c2VySWQsIGJhbmRzTW9kaWZpZWQgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFuZHNNb2RpZmllZCBpbiB1c2VyQXV0aGVudGljYXRpb25TYWdhOiBcIiwgYmFuZHNNb2RpZmllZCk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuYXV0aGVudGljYXRlVXNlclN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBiYW5kc01vZGlmaWVkLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmF1dGhlbnRpY2F0ZVVzZXJGYWlsdXJlKHtcclxuICAgICAgICAgICAgcmVhc29uOiBlcnIucmVzcG9uc2UuZGF0YS5yZWFzb24sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBCYWRnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9CYWRnZVwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9lc20vVGFibGVcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbGl0eS9nZXQtdGltZS1zaW5jZVwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlclByb2ZpbGVBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUHJvZmlsZSh7XHJcbiAgdXNlcklkLFxyXG59OiB7XHJcbiAgdXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG59KTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHsgcHJvZmlsZSB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlclByb2ZpbGVcclxuICApO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgZnVuY3Rpb24gZmV0Y2hQcm9maWxlKCkge1xyXG4gICAgZGlzcGF0Y2godXNlclByb2ZpbGVBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJQcm9maWxlKHsgdGFyZ2V0SWQ6IHVzZXJJZCB9KSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hQcm9maWxlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAge3Byb2ZpbGUgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGg1Pntwcm9maWxlLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBzY29yZTogPGI+e3Byb2ZpbGUudG90YWxTY29yZX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF2ZXJhZ2Ugc2NvcmU6IDxiPntwcm9maWxlLmF2ZXJhZ2VTY29yZS50b0ZpeGVkKDIpfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZXMgY29udHJpYnV0ZWQ6IDxiPntwcm9maWxlLm5hbWVzQ29udHJpYnV0ZWR9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgc2l6ZT1cInNtXCIgc3RyaXBlZCBib3JkZXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLmJhbmRzLm1hcCgoYmFuZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17U3RyaW5nKGJhbmQuX2lkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntiYW5kLnNjb3JlfTwvQmFkZ2U+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPntiYW5kLm5hbWV9PC9iPiAoY3JlYXRlZHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VGltZVNpbmNlKG5ldyBEYXRlKGJhbmQuY3JlYXRlZE9uKSl9IGFnbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHA+TG9hZGluZzwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25DaGFubmVsLCBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgdXNlclJlY29yZHNBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3Jkc1JlcXVlc3RCb2R5IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9yb3V0ZS1oYW5kbGVycy91c2VyLXJlY29yZHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHdhdGNoRmV0Y2hVc2VyUmVjb3Jkc1NhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICBjb25zdCBmZXRjaFVzZXJSZWNvcmRzQ2hhbm5lbCA9IHlpZWxkIGFjdGlvbkNoYW5uZWwoXHJcbiAgICB1c2VyUmVjb3Jkc0FjdGlvbnMucmVxdWVzdEZldGNoVXNlclJlY29yZHMudHlwZVxyXG4gICk7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShmZXRjaFVzZXJSZWNvcmRzQ2hhbm5lbCk7XHJcbiAgICBjb25zdCB7IG51bU9mUmVjb3Jkcywgc29ydFR5cGUgfSA9IHBheWxvYWQ7XHJcbiAgICB5aWVsZCBjYWxsKGZldGNoVXNlclJlY29yZHMsIG51bU9mUmVjb3Jkcywgc29ydFR5cGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaFVzZXJSZWNvcmRzKFxyXG4gIG1heFJlY29yZHM6IG51bWJlcixcclxuICBzb3J0Qnk6IFVzZXJSZWNvcmRTb3J0VHlwZXNcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuZ2V0VXNlclJlY29yZHMsXHJcbiAgICAgIHsgbnVtT2ZSZWNvcmRzOiBtYXhSZWNvcmRzLCBzb3J0VHlwZTogc29ydEJ5IH1cclxuICAgICk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB5aWVsZCBwdXQodXNlclJlY29yZHNBY3Rpb25zLmZldGNoVXNlclJlY29yZHNTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHVzZXJSZWNvcmRzQWN0aW9ucy5mZXRjaFVzZXJSZWNvcmRzRmFpbHVyZSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG4vLyBUT0RPOiBUaGlzIGRvZXNuJ3Qgd29yayByaWdodCBvbiB0aGUgZGF0YWJhc2Ugc2lkZSFcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogYmFuZFNjb3JlTW9kaWZpY2F0aW9uU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoYmFuZEFjdGlvbnMucmVxdWVzdE1vZGlmeUJhbmRTY29yZS50eXBlKTtcclxuICAgIGNvbnN0IHsgdGFyZ2V0QmFuZElkLCBtb2RpZnlpbmdVc2VySWQsIG1vZGlmaWNhdGlvblZhbHVlIH0gPSBwYXlsb2FkO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJtb2RpZmljYXRpb24gdmFsdWUgaW4gc2FnYTogXCIsIG1vZGlmaWNhdGlvblZhbHVlKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMubW9kaWZ5QmFuZCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICBtb2RpZnlpbmdVc2VySWQsXHJcbiAgICAgICAgICBtb2RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgaWYgKG1vZGlmaWNhdGlvblZhbHVlID09IDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBiYW5kQWN0aW9ucy5tb2RpZnlCYW5kU2NvcmVTdWNjZXNzKHtcclxuICAgICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgICBtb2RpZmljYXRpb25WYWx1ZTogLXBheWxvYWQudW5kb1ZhbHVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIGJhbmRBY3Rpb25zLm1vZGlmeUJhbmRTY29yZVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlRmFpbHVyZSgpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlclVybCA9XHJcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCJodHRwOi8vbG9jYWxob3N0Ojc3NzdcIjtcclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IFwiL2FwaS9hdXRoZW50aWNhdGVcIjtcclxuZXhwb3J0IGNvbnN0IHBvc3RCYW5kcyA9IFwiL2FwaS9iYW5kc1wiO1xyXG5leHBvcnQgY29uc3QgbW9kaWZ5QmFuZCA9IFwiL2FwaS9iYW5kL21vZGlmeVwiO1xyXG5leHBvcnQgY29uc3QgbmV3QmFuZCA9IFwiL2FwaS9iYW5kL25ld1wiO1xyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IFwiL2FwaS9jcmVhdGUtdXNlclwiO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlcm5hbWUgPSBcIi9hcGkvdXNlcm5hbWVzL2dldFwiO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlclJlY29yZHMgPSBcIi9hcGkvdXNlcnMvZ2V0XCI7XHJcbmV4cG9ydCBjb25zdCBzZXNzaW9uRW5kcG9pbnQgPSBcIi9hcGkvc2Vzc2lvblwiO1xyXG5cclxuXHJcbmNvbnN0IGdldFVzZXJQcm9maWxlQmFzZSA9IFwiL2FwaS91c2VyLXByb2ZpbGVcIjtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJQcm9maWxlRW5kcG9pbnQgPSBnZXRVc2VyUHJvZmlsZUJhc2UgKyBcIi86dXNlcklkXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwoXHJcbiAgdGFyZ2V0VXNlcklkIC8qOiBNb25nb29zZVR5cGVzLk9iamVjdElkKi9cclxuKTogc3RyaW5nIHtcclxuICByZXR1cm4gZ2V0VXNlclByb2ZpbGVCYXNlICsgXCIvXCIgKyB0YXJnZXRVc2VySWQgLyoudG9IZXhTdHJpbmcqLztcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFjdGlvbkNoYW5uZWwsIGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBjaGVja1Nlc3Npb25TYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENoZWNrU2Vzc2lvbi50eXBlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5nZXQsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuc2Vzc2lvbkVuZHBvaW50LFxyXG4gICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH1cclxuICAgICAgKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlcklkLCB1c2VybmFtZSwgYmFuZHNNb2RpZmllZCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5jaGVja1Nlc3Npb25TdWNjZXNzKHtcclxuICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgYmFuZHNNb2RpZmllZCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMuY2hlY2tTZXNzaW9uRmFpbHVyZSgpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5jaGVja1Nlc3Npb25GYWlsdXJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7XHJcbiAgQmFuZENyZWF0aW9uU3RhdHVzZXMsXHJcbiAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMsXHJcbiAgQmFuZFNvcnRUeXBlcyxcclxufSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG50eXBlIFNjb3JlTW9kaWZpY2F0aW9uU3RhdGUgPSB7XHJcbiAgc3RhdHVzOiBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcztcclxuICAvLyBUT0RPOiBUaGlzIG5lZWRzIHRvIHJlZmVyIHRvIGEgYmFuZCdzIElEXHJcbiAgdGFyZ2V0PzogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxufTtcclxuXHJcbnR5cGUgQmFuZHNTbGljZVN0YXRlID0ge1xyXG4gIHBlbmRpbmdGZXRjaGVzOiBudW1iZXI7XHJcbiAgY3JlYXRpb25TdGF0dXM6IEJhbmRDcmVhdGlvblN0YXR1c2VzO1xyXG4gIGl0ZW1zOiBCYW5kQ2xhc3NbXTtcclxuICBzY29yZU1vZGlmaWNhdGlvblN0YXRlOiBTY29yZU1vZGlmaWNhdGlvblN0YXRlO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBCYW5kc1NsaWNlU3RhdGUgPSB7XHJcbiAgcGVuZGluZ0ZldGNoZXM6IDAsXHJcbiAgaXRlbXM6IFtdLFxyXG4gIGNyZWF0aW9uU3RhdHVzOiBCYW5kQ3JlYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIHNjb3JlTW9kaWZpY2F0aW9uU3RhdGU6IHtcclxuICAgIHN0YXR1czogQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgYmFuZHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImJhbmRzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICAvLyBCYW5kIGZldGNoaW5nXHJcbiAgICByZXF1ZXN0RmV0Y2hCYW5kcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgbWF4QmFuZHM6IG51bWJlcjtcclxuICAgICAgICBzb3J0Qnk6IEJhbmRTb3J0VHlwZXM7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMrKztcclxuICAgIH0sXHJcbiAgICBmZXRjaEJhbmRzU3VjY2VzcyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEJhbmRDbGFzc1tdPikge1xyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKChuZXdCYW5kKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5pdGVtcy5zb21lKChiYW5kKSA9PiBiYW5kLl9pZCA9PSBuZXdCYW5kLl9pZCkpXHJcbiAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKG5ld0JhbmQpO1xyXG4gICAgICB9KTtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMtLTtcclxuICAgIH0sXHJcbiAgICBmZXRjaEJhbmRzRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBCYW5kIGNyZWF0aW9uXHJcbiAgICByZXF1ZXN0Q3JlYXRlQmFuZChcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgY3JlYXRpbmdVc2VySWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgYmFuZE5hbWU6IHN0cmluZztcclxuICAgICAgICBjcmVhdGluZ1VzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuY3JlYXRpb25TdGF0dXMgPSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVElORztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVCYW5kU3VjY2VzcyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEJhbmRDbGFzcz4pIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJva2F5IHdoYXl0cyB1cFwiKVxyXG4gICAgICBzdGF0ZS5jcmVhdGlvblN0YXR1cyA9IEJhbmRDcmVhdGlvblN0YXR1c2VzLkNSRUFURUQ7XHJcbiAgICAgIHN0YXRlLml0ZW1zLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUJhbmRGYWlsdXJlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QmFuZENyZWF0aW9uU3RhdHVzZXM+KSB7XHJcbiAgICAgIHN0YXRlLmNyZWF0aW9uU3RhdHVzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIE1vZGlmeSBiYW5kIHNjb3JlXHJcbiAgICByZXF1ZXN0TW9kaWZ5QmFuZFNjb3JlKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICB0YXJnZXRCYW5kSWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgbW9kaWZ5aW5nVXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIG1vZGlmaWNhdGlvblZhbHVlOiBudW1iZXI7XHJcbiAgICAgICAgdW5kb1ZhbHVlPzogbnVtYmVyO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUuc3RhdHVzID1cclxuICAgICAgICBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcy5BVFRFTVBUSU5HO1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnRhcmdldCA9IGFjdGlvbi5wYXlsb2FkLnRhcmdldEJhbmRJZDtcclxuICAgIH0sXHJcbiAgICBtb2RpZnlCYW5kU2NvcmVTdWNjZXNzKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgY29uc3QgdGFyZ2V0QmFuZEluZGV4ID0gc3RhdGUuaXRlbXMuZmluZEluZGV4KFxyXG4gICAgICAgIChiYW5kKSA9PiBiYW5kLl9pZCA9PT0gYWN0aW9uLnBheWxvYWQudGFyZ2V0QmFuZElkXHJcbiAgICAgICk7XHJcbiAgICAgIHN0YXRlLml0ZW1zW3RhcmdldEJhbmRJbmRleF0uc2NvcmUgKz0gYWN0aW9uLnBheWxvYWQubW9kaWZpY2F0aW9uVmFsdWU7XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUuc3RhdHVzID1cclxuICAgICAgICBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcy5TVUNDRVNTO1xyXG4gICAgfSxcclxuICAgIG1vZGlmeUJhbmRTY29yZUZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgLy8gVE9ETzogU2hvdWxkbid0IHdlIGJlIGdldHRpbmcgYSByZWFzb24gZm9yIHRoZSBmYWlsdXJlIGhlcmU/XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUuc3RhdHVzID1cclxuICAgICAgICBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcy5GQUlMVVJFO1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYmFuZEFjdGlvbnMgPSBiYW5kc1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IGJhbmRzU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgZ2V0RGVmYXVsdE1pZGRsZXdhcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYmFuZHNSZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgc2Vzc2lvblJlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHVzZXJSZWNvcmRzUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvdXNlci1yZWNvcmRzLXNsaWNlXCI7XHJcbmltcG9ydCB1c2VyUHJvZmlsZVJlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL3VzZXItcHJvZmlsZS1zbGljZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgc2FnYXMgZnJvbSBcIi4vc2FnYXNcIjtcclxuaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbLi4uZ2V0RGVmYXVsdE1pZGRsZXdhcmUoeyB0aHVuazogZmFsc2UgfSksIHNhZ2FNaWRkbGV3YXJlXTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBiYW5kczogYmFuZHNSZWR1Y2VyLFxyXG4gIHNlc3Npb246IHNlc3Npb25SZWR1Y2VyLFxyXG4gIHVzZXJSZWNvcmRzOiB1c2VyUmVjb3Jkc1JlZHVjZXIsXHJcbiAgdXNlclByb2ZpbGU6IHVzZXJQcm9maWxlUmVkdWNlcixcclxufSk7XHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VUeXBlZFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3I7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXHJcbiAgbWlkZGxld2FyZTogbWlkZGxld2FyZSxcclxufSk7XHJcblxyXG5mb3IgKGNvbnN0IHNhZ2EgaW4gc2FnYXMpIHtcclxuICBzYWdhTWlkZGxld2FyZS5ydW4oc2FnYXNbc2FnYV0pO1xyXG59XHJcbiIsImltcG9ydCB7IHRha2UsIHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB7IFVzZXJDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHVzZXJDcmVhdGlvblNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDcmVhdGVVc2VyLnR5cGUpO1xyXG4gICAgY29uc3QgeyAvKmVtYWlsLCovIHVzZXJuYW1lLCBwYXNzd29yZCwgcmVwZWF0UGFzc3dvcmQgfSA9IHBheWxvYWQ7XHJcblxyXG4gICAgLy8gaWYgKCFlbWFpbElzVmFsaWQoZW1haWwpKSB7XHJcbiAgICAvLyAgIHlpZWxkIHB1dChcclxuICAgIC8vICAgICBzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyRmFpbHVyZSh7XHJcbiAgICAvLyAgICAgICByZWFzb246IFVzZXJDcmVhdGlvblN0YXR1c2VzLklOVkFMSURfRU1BSUwsXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIGlmIChwYXNzd29yZCAhPT0gcmVwZWF0UGFzc3dvcmQpIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyRmFpbHVyZSh7XHJcbiAgICAgICAgICAgIHJlYXNvbjogVXNlckNyZWF0aW9uU3RhdHVzZXMuUEFTU1dPUkRTX0RPTlRfTUFUQ0gsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuY3JlYXRlVXNlcixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgIC8vIGVtYWlsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmNyZWF0ZVVzZXJTdWNjZXNzKCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmNyZWF0ZVVzZXJGYWlsdXJlKHtcclxuICAgICAgICAgICAgICByZWFzb246IGVycm9yLnJlc3BvbnNlLmRhdGEucmVhc29uLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVtYWlsSXNWYWxpZChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gIHJldHVybiByZS50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdGFrZSwgcHV0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyB1c2VyUHJvZmlsZUFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3VzZXItcHJvZmlsZS1zbGljZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVHZXRVc2VyUHJvZmlsZVVybCB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZmV0Y2hQcm9maWxlU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoXHJcbiAgICAgIHVzZXJQcm9maWxlQWN0aW9ucy5yZXF1ZXN0RmV0Y2hVc2VyUHJvZmlsZS50eXBlXHJcbiAgICApO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGF5bG9hZCk7XHJcbiAgICBjb25zdCB0YXJnZXRJZCA9IHBheWxvYWQudGFyZ2V0SWQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXRJZCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhjcmVhdGVHZXRVc2VyUHJvZmlsZVVybCh0YXJnZXRJZCkpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MuZ2V0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIGNyZWF0ZUdldFVzZXJQcm9maWxlVXJsKHRhcmdldElkKVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHVzZXJQcm9maWxlQWN0aW9ucy5mZXRjaFVzZXJQcm9maWxlU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHByb2ZpbGU6IHJlc3BvbnNlLmRhdGEucHJvZmlsZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5aWVsZCBwdXQodXNlclByb2ZpbGVBY3Rpb25zLmZldGNoVXNlclByb2ZpbGVGYWlsdXJlKCkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgeWllbGQgcHV0KHVzZXJQcm9maWxlQWN0aW9ucy5mZXRjaFVzZXJQcm9maWxlRmFpbHVyZSgpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzLCBVc2VyQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMsIFNUQVRFUyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxudHlwZSBTZXNzaW9uQmFuZE1vZGlmaWNhdGlvbiA9IHtcclxuICB0YXJnZXRCYW5kSWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxufTtcclxuXHJcbnR5cGUgU2Vzc2lvblNsaWNlU3RhdGUgPSB7XHJcbiAgYXV0aGVudGljYXRpb25TdGF0dXM6IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXM7XHJcbiAgdXNlcklkPzogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICB1c2VybmFtZT86IHN0cmluZztcclxuICB1c2VyQ3JlYXRpb25TdGF0dXM6IFVzZXJDcmVhdGlvblN0YXR1c2VzO1xyXG4gIGJhbmRzTW9kaWZpZWQ6IFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uW107XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFNlc3Npb25TbGljZVN0YXRlID0ge1xyXG4gIGF1dGhlbnRpY2F0aW9uU3RhdHVzOiBBdXRoZW50aWNhdGlvblN0YXR1c2VzLk5PVF9UUllJTkcsXHJcbiAgdXNlcklkOiB1bmRlZmluZWQsXHJcbiAgdXNlcm5hbWU6IHVuZGVmaW5lZCxcclxuICB1c2VyQ3JlYXRpb25TdGF0dXM6IFVzZXJDcmVhdGlvblN0YXR1c2VzLk5PVF9UUllJTkcsXHJcbiAgYmFuZHNNb2RpZmllZDogW10sXHJcbn07XHJcblxyXG5jb25zdCBzZXNzaW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJzZXNzaW9uXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICAvLyBTZXNzaW9uIGNoZWNraW5nXHJcbiAgICByZXF1ZXN0Q2hlY2tTZXNzaW9uKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVElORztcclxuICAgIH0sXHJcbiAgICBjaGVja1Nlc3Npb25TdWNjZXNzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICB1c2VySWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBiYW5kc01vZGlmaWVkOiBTZXNzaW9uQmFuZE1vZGlmaWNhdGlvbltdO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEO1xyXG4gICAgICBzdGF0ZS51c2VySWQgPSBhY3Rpb24ucGF5bG9hZC51c2VySWQ7XHJcbiAgICAgIHN0YXRlLnVzZXJuYW1lID0gYWN0aW9uLnBheWxvYWQudXNlcm5hbWU7XHJcbiAgICAgIHN0YXRlLmJhbmRzTW9kaWZpZWQgPSBhY3Rpb24ucGF5bG9hZC5iYW5kc01vZGlmaWVkO1xyXG4gICAgfSxcclxuICAgIGNoZWNrU2Vzc2lvbkZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLk5PVF9UUllJTkc7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFVzZXIgYXV0aGVudGljYXRpb25cclxuICAgIHJlcXVlc3RBdXRoZW50aWNhdGVVc2VyKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HO1xyXG4gICAgfSxcclxuICAgIGF1dGhlbnRpY2F0ZVVzZXJTdWNjZXNzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICB1c2VySWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBiYW5kc01vZGlmaWVkOiBTZXNzaW9uQmFuZE1vZGlmaWNhdGlvbltdO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEO1xyXG4gICAgICBzdGF0ZS51c2VySWQgPSBhY3Rpb24ucGF5bG9hZC51c2VySWQ7XHJcbiAgICAgIHN0YXRlLnVzZXJuYW1lID0gYWN0aW9uLnBheWxvYWQudXNlcm5hbWU7XHJcbiAgICAgIHN0YXRlLmJhbmRzTW9kaWZpZWQgPSBhY3Rpb24ucGF5bG9hZC5iYW5kc01vZGlmaWVkO1xyXG4gICAgfSxcclxuICAgIGF1dGhlbnRpY2F0ZVVzZXJGYWlsdXJlKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBhY3Rpb24ucGF5bG9hZC5yZWFzb247XHJcbiAgICAgIC8vIFRPRE86IElzIGl0IG5lY2Vzc2FyeSB0byByZXNldCB0aGlzIHRvIG51bGwgaGVyZT9cclxuICAgICAgc3RhdGUudXNlcklkID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVc2VyIGxvZ291dFxyXG4gICAgcmVxdWVzdExvZ291dChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuTE9HR0lOR19PVVQ7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0RmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuU0VSVkVSX0VSUk9SO1xyXG4gICAgfSxcclxuICAgIGxvZ291dFN1Y2Nlc3Moc3RhdGUpIHtcclxuICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFVzZXIgY3JlYXRpb25cclxuICAgIHJlcXVlc3RDcmVhdGVVc2VyKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICAvLyBlbWFpbDogc3RyaW5nO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICByZXBlYXRQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLnVzZXJDcmVhdGlvblN0YXR1cyA9IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkc7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlVXNlclN1Y2Nlc3Moc3RhdGUpIHtcclxuICAgICAgc3RhdGUudXNlckNyZWF0aW9uU3RhdHVzID0gVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTUztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVVc2VyRmFpbHVyZShzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLnVzZXJDcmVhdGlvblN0YXR1cyA9IGFjdGlvbi5wYXlsb2FkLnJlYXNvbjtcclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAvLyBCYW5kIG1vZGlmaWNhdGlvblxyXG4gICAgW2JhbmRBY3Rpb25zLm1vZGlmeUJhbmRTY29yZVN1Y2Nlc3MudHlwZV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmJhbmRzTW9kaWZpZWQucHVzaCh7XHJcbiAgICAgICAgdGFyZ2V0QmFuZElkOiBhY3Rpb24ucGF5bG9hZC50YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgdmFsdWU6IGFjdGlvbi5wYXlsb2FkLm1vZGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2Vzc2lvbkFjdGlvbnMgPSBzZXNzaW9uU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvblNsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IGhpc3RvcnkgfSBmcm9tIFwiLi4vc3RvcmUvaGlzdG9yeVwiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVkQmFuZFRhYmxlIH0gZnJvbSBcIi4vQmlnQmFuZFRhYmxlXCI7XHJcbmltcG9ydCB7IExhbmRpbmcgfSBmcm9tIFwiLi9MYW5kaW5nXCI7XHJcbmltcG9ydCB7IExvZ2luRm9ybSB9IGZyb20gXCIuL0xvZ2luXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiLi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IE5ld1VzZXJGb3JtIH0gZnJvbSBcIi4vTmV3VXNlckZvcm1cIjtcclxuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xyXG5cclxuLy8gY29uc3QgQXV0aGVudGljYXRpb25HdWFyZCA9IChDb21wb25lbnQpID0+ICh7IG1hdGNoIH0pID0+IHtcclxuLy8gICBpZiAoXHJcbi8vICAgICBzdG9yZS5nZXRTdGF0ZSgpLnNlc3Npb24uYXV0aGVudGljYXRpb25TdGF0dXMgIT09XHJcbi8vICAgICBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuLy8gICApIHtcclxuLy8gICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz47XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiA8Q29tcG9uZW50IG1hdGNoPXttYXRjaH0gLz47XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9ICgpID0+IChcclxuICAvLyBUT0RPOiBXaGF0IGlzIHRoZSBSb3V0ZXIncyBcImhpc3RvcnlcIiBhbGwgYWJvdXQ/XHJcbiAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvYmFuZHNcIiBjb21wb25lbnQ9e0NvbnRyb2xsZWRCYW5kVGFibGV9IC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2luRm9ybX0gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9uZXctdXNlclwiIGNvbXBvbmVudD17TmV3VXNlckZvcm19IC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtMYW5kaW5nfSAvPlxyXG4gICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgcGF0aD1cIi91c2Vycy86dXNlcklkXCJcclxuICAgICAgICAgIGNvbXBvbmVudD17KHsgbWF0Y2ggfSkgPT4gPFVzZXJQcm9maWxlIHVzZXJJZD17bWF0Y2gucGFyYW1zLnVzZXJJZH0gLz59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIDwvUm91dGVyPlxyXG4pO1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiZFpaSFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCJpM1hwXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDcmVhdGVCYW5kRm9ybSB9IGZyb20gXCIuL0NyZWF0ZUJhbmRGb3JtXCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZWRCYW5kVGFibGUgfSBmcm9tIFwiLi9CaWdCYW5kVGFibGVcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9Db250YWluZXJcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3Jkc0xpc3QgfSBmcm9tIFwiLi9Vc2VyUmVjb3Jkc0xpc3RcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgSnVtYm90cm9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSnVtYm90cm9uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGFuZGluZygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT17XCJtYi01XCJ9PlxyXG4gICAgICAgICAgPENvbCBtZD17OH0gY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgIDxDcmVhdGVCYW5kRm9ybSAvPlxyXG4gICAgICAgICAgICA8Q29udHJvbGxlZEJhbmRUYWJsZSAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIG1kPXs0fT5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGg1Pk1vc3QgTmFtZXMgQ29udHJpYnV0ZWQ8L2g1PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxVc2VyUmVjb3Jkc0xpc3RcclxuICAgICAgICAgICAgICAgICAgbWF4UmVjb3Jkcz17MTB9XHJcbiAgICAgICAgICAgICAgICAgIHNvcnRUeXBlPXtVc2VyUmVjb3JkU29ydFR5cGVzLk1PU1RfTkFNRVNfQ09OVFJJQlVURUR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoNT5IaWdoZXN0IEF2ZXJhZ2UgU2NvcmU8L2g1PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxVc2VyUmVjb3Jkc0xpc3RcclxuICAgICAgICAgICAgICAgICAgbWF4UmVjb3Jkcz17MTB9XHJcbiAgICAgICAgICAgICAgICAgIHNvcnRUeXBlPXtVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfQVZFUkFHRV9TQ09SRX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGg1PkhpZ2hlc3QgU2NvcmU8L2g1PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgIDxVc2VyUmVjb3Jkc0xpc3RcclxuICAgICAgICAgICAgICAgICAgbWF4UmVjb3Jkcz17MTB9XHJcbiAgICAgICAgICAgICAgICAgIHNvcnRUeXBlPXtVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfU0NPUkV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9BbGVydFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW5Gb3JtKCk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCBhdXRoZW50aWNhdGlvblN0YXR1cyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNlc3Npb24uYXV0aGVudGljYXRpb25TdGF0dXNcclxuICApO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICBkaXNwYXRjaChzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0QXV0aGVudGljYXRlVXNlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPENhcmQgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzZyZW1cIiB9fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNVc2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVzZXJuYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuVVNFUk5BTUVfTk9UX0ZPVU5EXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgTmV3IHVzZXI/IENyZWF0ZSBhbiBhY2NvdW50IDxhIGhyZWY9XCIvbmV3LXVzZXJcIj5oZXJlPC9hPi5cclxuICAgICAgICAgICAgICA8L0Zvcm0uVGV4dD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCB1c2VybmFtZS5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICBBdXRoZW50aWNhdGlvblN0YXR1c2VzLklOVkFMSURfUEFTU1dPUkRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgSW5jb3JyZWN0IHBhc3N3b3JkLlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVElORyB8fFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdCgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICB7YXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVElORyAmJiAoXHJcbiAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiIC8+IFByb2Nlc3NpbmcuLi5cclxuICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7YXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5TdWNjZXNzZnVsbHkgbG9nZ2VkIGluITwvQWxlcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVXNlclByb2ZpbGVVcmwodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBcIi91c2Vycy9cIiArIHVzZXJJZDtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvTWFpblwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8TWFpbiAvPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKVxyXG4pO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgVXNlclJlY29yZCA9IHtcclxuICBpZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdG90YWxTY29yZTogbnVtYmVyO1xyXG4gIG5hbWVzQ29udHJpYnV0ZWQ6IG51bWJlcjtcclxuICBhdmVyYWdlU2NvcmU6IG51bWJlcjtcclxufTtcclxuXHJcbnR5cGUgVXNlclJlY29yZHNTbGljZVN0YXRlID0ge1xyXG4gIHBlbmRpbmdGZXRjaGVzOiBudW1iZXI7XHJcbiAgaXRlbXM6IFVzZXJSZWNvcmRbXTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclJlY29yZHNTbGljZVN0YXRlID0ge1xyXG4gIHBlbmRpbmdGZXRjaGVzOiAwLFxyXG4gIGl0ZW1zOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHVzZXJSZWNvcmRzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJ1c2VyUmVjb3Jkc1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgcmVxdWVzdEZldGNoVXNlclJlY29yZHMoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIG51bU9mUmVjb3JkczogbnVtYmVyO1xyXG4gICAgICAgIHNvcnRUeXBlOiBVc2VyUmVjb3JkU29ydFR5cGVzO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzKys7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyUmVjb3Jkc1N1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248VXNlclJlY29yZFtdPlxyXG4gICAgKSB7XHJcbiAgICAgIGFjdGlvbi5wYXlsb2FkLmZvckVhY2goKG5ld1JlY29yZCkgPT4ge1xyXG4gICAgICAgIGlmICghc3RhdGUuaXRlbXMuc29tZSgocmVjb3JkKSA9PiByZWNvcmQuaWQgPT0gbmV3UmVjb3JkLmlkKSlcclxuICAgICAgICAgIHN0YXRlLml0ZW1zLnB1c2gobmV3UmVjb3JkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyUmVjb3Jkc0ZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMtLTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyUmVjb3Jkc0FjdGlvbnMgPSB1c2VyUmVjb3Jkc1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWNvcmRzU2xpY2UucmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHtcclxuICB1c2VyUmVjb3Jkc0FjdGlvbnMsXHJcbiAgVXNlclJlY29yZCxcclxufSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmUvXCI7XHJcbmltcG9ydCB7IHNvcnRBbmRMaW1pdFVzZXJSZWNvcmRzIH0gZnJvbSBcIi4vdXRpbGl0eS9saW1pdC1zb3J0LXVzZXItcmVjb3Jkc1wiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9UYWJsZVwiO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CYWRnZVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgY3JlYXRlVXNlclByb2ZpbGVVcmwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlsaXR5L2NyZWF0ZS11c2VyLXByb2ZpbGUtdXJsXCJcclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogUm9vdFN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFwcElzRmV0Y2hpbmdSZWNvcmRzOiBzdGF0ZS51c2VyUmVjb3Jkcy5wZW5kaW5nRmV0Y2hlcyA+IDAsXHJcbiAgICByZWNvcmRzOiBbLi4uc3RhdGUudXNlclJlY29yZHMuaXRlbXNdLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXF1ZXN0VXNlclJlY29yZHM6IChcclxuICAgICAgbnVtT2ZSZWNvcmRzOiBudW1iZXIsXHJcbiAgICAgIHNvcnRUeXBlOiBVc2VyUmVjb3JkU29ydFR5cGVzXHJcbiAgICApID0+IHtcclxuICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgdXNlclJlY29yZHNBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJSZWNvcmRzKHsgbnVtT2ZSZWNvcmRzLCBzb3J0VHlwZSB9KVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBMaXN0RW50cnlCYWRnZShwcm9wczoge1xyXG4gIHNvcnRUeXBlOiBVc2VyUmVjb3JkU29ydFR5cGVzO1xyXG4gIHJlY29yZDogVXNlclJlY29yZDtcclxufSkge1xyXG4gIHN3aXRjaCAocHJvcHMuc29ydFR5cGUpIHtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX0FWRVJBR0VfU0NPUkU6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntwcm9wcy5yZWNvcmQuYXZlcmFnZVNjb3JlLnRvRml4ZWQoMil9PC9CYWRnZT47XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9TQ09SRTpcclxuICAgICAgcmV0dXJuIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e3Byb3BzLnJlY29yZC50b3RhbFNjb3JlfTwvQmFkZ2U+O1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLk1PU1RfTkFNRVNfQ09OVFJJQlVURUQ6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntwcm9wcy5yZWNvcmQubmFtZXNDb250cmlidXRlZH08L0JhZGdlPjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPj88L0JhZGdlPjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHV4Q29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbnR5cGUgVXNlclJlY29yZHNMaXN0UHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+ICYge1xyXG4gIG1heFJlY29yZHM6IG51bWJlcjtcclxuICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxufTtcclxuXHJcbmNsYXNzIFVuY29ubmVjdGVkVXNlclJlY29yZHNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFVzZXJSZWNvcmRzTGlzdFByb3BzPiB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLnJlcXVlc3RVc2VyUmVjb3Jkcyh0aGlzLnByb3BzLm1heFJlY29yZHMsIHRoaXMucHJvcHMuc29ydFR5cGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYXBwSXNGZXRjaGluZ1JlY29yZHMpIHtcclxuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZyB1c2VyIHJlY29yZHMuLi48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVzaXJlZFJlY29yZHMgPSBzb3J0QW5kTGltaXRVc2VyUmVjb3JkcyhcclxuICAgICAgdGhpcy5wcm9wcy5yZWNvcmRzLFxyXG4gICAgICB0aGlzLnByb3BzLnNvcnRUeXBlLFxyXG4gICAgICB0aGlzLnByb3BzLm1heFJlY29yZHNcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRhYmxlIHNpemU9XCJzbVwiIHN0cmlwZWQgYm9yZGVyZWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge2Rlc2lyZWRSZWNvcmRzLm1hcCgocmVjb3JkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtTdHJpbmcocmVjb3JkLmlkKX0+XHJcbiAgICAgICAgICAgICAgPHRkPntpbmRleCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17Y3JlYXRlVXNlclByb2ZpbGVVcmwoU3RyaW5nKHJlY29yZC5pZCkpfT57cmVjb3JkLm5hbWV9PC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxMaXN0RW50cnlCYWRnZVxyXG4gICAgICAgICAgICAgICAgICBzb3J0VHlwZT17dGhpcy5wcm9wcy5zb3J0VHlwZX1cclxuICAgICAgICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUmVjb3Jkc0xpc3QgPSBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShVbmNvbm5lY3RlZFVzZXJSZWNvcmRzTGlzdCk7XHJcbiIsImV4cG9ydCB7IGJhbmRDcmVhdGlvblNhZ2EgfSBmcm9tIFwiLi9iYW5kLWNyZWF0aW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgYmFuZFNjb3JlTW9kaWZpY2F0aW9uU2FnYSB9IGZyb20gXCIuL2JhbmQtc2NvcmUtbW9kaWZpY2F0aW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgdXNlckF1dGhlbnRpY2F0aW9uU2FnYSB9IGZyb20gXCIuL3VzZXItYXV0aGVudGljYXRpb24tc2FnYVwiO1xyXG5leHBvcnQgeyB1c2VyQ3JlYXRpb25TYWdhIH0gZnJvbSBcIi4vdXNlci1jcmVhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IHdhdGNoRmV0Y2hCYW5kc1NhZ2EgfSBmcm9tIFwiLi93YXRjaC1mZXRjaC1iYW5kcy1zYWdhXCI7XHJcbmV4cG9ydCB7IHdhdGNoRmV0Y2hVc2VyUmVjb3Jkc1NhZ2EgfSBmcm9tIFwiLi9mZXRjaC11c2VyLXJlY29yZHMtc2FnYVwiO1xyXG5leHBvcnQgeyBmZXRjaFByb2ZpbGVTYWdhIH0gZnJvbSBcIi4vZmV0Y2gtdXNlci1wcm9maWxlLXNhZ2FcIjtcclxuZXhwb3J0IHsgY2hlY2tTZXNzaW9uU2FnYSB9IGZyb20gXCIuL2NoZWNrLXNlc3Npb24tc2FnYVwiO1xyXG5leHBvcnQgeyBsb2dvdXRTYWdhIH0gZnJvbSBcIi4vbG9nb3V0LXNhZ2FcIjsiLCIvLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcywgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFVzZXJDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbi8vIFVuY29ubmVjdGVkTmV3VXNlckZvcm0ucHJvcFR5cGVzID0ge1xyXG4vLyAgIHN1Ym1pdEZvcm06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbi8vICAgdXNlckNyZWF0aW9uU3RhdHVzOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhVc2VyQ3JlYXRpb25TdGF0dXNlcykpLFxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2Vzc2lvbiB9KSA9PiAoe1xyXG4vLyAgIHVzZXJDcmVhdGlvblN0YXR1czogc2Vzc2lvbi51c2VyQ3JlYXRpb25TdGF0dXMsXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4vLyAgIHN1Ym1pdEZvcm06ICgvKmVtYWlsLCovIHVzZXJuYW1lLCBwYXNzd29yZCwgcmVwZWF0UGFzc3dvcmQpID0+XHJcbi8vICAgICBkaXNwYXRjaChcclxuLy8gICAgICAgc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENyZWF0ZVVzZXIoe1xyXG4vLyAgICAgICAgIC8vIGVtYWlsLFxyXG4vLyAgICAgICAgIHVzZXJuYW1lLFxyXG4vLyAgICAgICAgIHBhc3N3b3JkLFxyXG4vLyAgICAgICAgIHJlcGVhdFBhc3N3b3JkLFxyXG4vLyAgICAgICB9KVxyXG4vLyAgICAgKSxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG4vLyB0eXBlIE5ld1VzZXJGb3JtUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+O1xyXG5cclxuLy8gdHlwZSBOZXdVc2VyRm9ybVN0YXRlID0ge1xyXG4vLyAgIGVtYWlsOiBzdHJpbmc7XHJcbi8vICAgdXNlcm5hbWU6IHN0cmluZztcclxuLy8gICBwYXNzd29yZDogc3RyaW5nO1xyXG4vLyAgIHJlcGVhdFBhc3N3b3JkOiBzdHJpbmc7XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmV3VXNlckZvcm0oKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHVzZXJDcmVhdGlvblN0YXR1cyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNlc3Npb24udXNlckNyZWF0aW9uU3RhdHVzXHJcbiAgKTtcclxuXHJcbiAgLy8gY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlcGVhdFBhc3N3b3JkLCBzZXRSZXBlYXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBmdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDcmVhdGVVc2VyKHtcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICByZXBlYXRQYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgPENhcmQgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzZyZW1cIiB9fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICB7LyogPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJFbWFpbFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsIEFkZHJlc3M8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuSU5WQUxJRF9FTUFJTFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPiAqL31cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJOYW1lXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICB1c2VyQ3JlYXRpb25TdGF0dXMgPT0gVXNlckNyZWF0aW9uU3RhdHVzZXMuVVNFUk5BTUVfVEFLRU5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIFVzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW4uXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgIHVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJSZXBlYXRQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlJlcGVhdCBQYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXBlYXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICB1c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuUEFTU1dPUkRTX0RPTlRfTUFUQ0hcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIFBhc3N3b3JkcyBkb24mYXBvczt0IG1hdGNoLlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgdXNlckNyZWF0aW9uU3RhdHVzID09IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgfHxcclxuICAgICAgICAgICAgICAgIHVzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN1Ym1pdEZvcm0oKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAge3VzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIEFjY291bnQgY3JlYXRlZCEgWW91IG1heSBub3cgPGEgaHJlZj1cIi9sb2dpblwiPmxvZyBpbjwvYT4uXHJcbiAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3VzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz4gUHJvY2Vzc2luZy4uLlxyXG4gICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBjbGFzcyBVbmNvbm5lY3RlZE5ld1VzZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4vLyAgIE5ld1VzZXJGb3JtUHJvcHMsXHJcbi8vICAgTmV3VXNlckZvcm1TdGF0ZVxyXG4vLyA+IHtcclxuLy8gICBzdGF0ZSA9IHtcclxuLy8gICAgIGVtYWlsOiBcIlwiLFxyXG4vLyAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbi8vICAgICBwYXNzd29yZDogXCJcIixcclxuLy8gICAgIHJlcGVhdFBhc3N3b3JkOiBcIlwiLFxyXG4vLyAgIH07XHJcblxyXG4vLyAgIC8vIFRPRE86IFdvdWxkbid0IGl0IGJlIGVhc3kgdG8gbWFrZSBpdCBzbyB0aGUgZW1haWwgaXMgdmFsaWRhdGVkIGFzIHRoZSB1c2VyIHR5cGVzPyBNYXliZSBvbiBhIHNsaWdodCBkZWxheT8gU2FtZSB3aXRoIHRoZSB1c2VybmFtZSBhbmQgcGFzc3dvcmQ/XHJcblxyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIGNvbnN0IHsgdXNlckNyZWF0aW9uU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wibWItNVwifT5cclxuLy8gICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXhXaWR0aDogXCIzNnJlbVwiIH19IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuLy8gICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbi8vICAgICAgICAgICAgIDxGb3JtPlxyXG4vLyAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlckVtYWlsXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbCBBZGRyZXNzPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuLy8gICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLklOVkFMSURfRU1BSUxcclxuLy8gICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cclxuLy8gICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4vLyAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD4gKi99XHJcbi8vICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJOYW1lXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Vc2VybmFtZTwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbi8vICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuLy8gICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5VU0VSTkFNRV9UQUtFTlxyXG4vLyAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICBVc2VybmFtZSBpcyBhbHJlYWR5IHRha2VuLlxyXG4vLyAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyUGFzc3dvcmRcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbi8vICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuLy8gICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSFxyXG4vLyAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuLy8gICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlclJlcGVhdFBhc3N3b3JkXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5SZXBlYXQgUGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbi8vICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVwZWF0UGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbi8vICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlBBU1NXT1JEU19ET05UX01BVENIXHJcbi8vICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkcyBkb24mYXBvczt0IG1hdGNoLlxyXG4vLyAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgIDxCdXR0b25cclxuLy8gICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4vLyAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4vLyAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgfHxcclxuLy8gICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT0gVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTU1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXRGb3JtKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuZW1haWwsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VybmFtZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhc3N3b3JkLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVwZWF0UGFzc3dvcmRcclxuLy8gICAgICAgICAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4vLyAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTUyAmJiAoXHJcbi8vICAgICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgQWNjb3VudCBjcmVhdGVkISBZb3UgbWF5IG5vdyA8YSBocmVmPVwiL2xvZ2luXCI+bG9nIGluPC9hPi5cclxuLy8gICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbi8vICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICB7dXNlckNyZWF0aW9uU3RhdHVzID09IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgJiYgKFxyXG4vLyAgICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJpbmZvXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz4gUHJvY2Vzc2luZy4uLlxyXG4vLyAgICAgICAgICAgICAgICAgPC9BbGVydD5cclxuLy8gICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICA8L0Zvcm0+XHJcbi8vICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuLy8gICAgICAgICA8L0NhcmQ+XHJcbi8vICAgICAgIDwvQ29udGFpbmVyPlxyXG4vLyAgICAgKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBOZXdVc2VyRm9ybSA9IGNvbm5lY3QoXHJcbi8vICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4vLyAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4vLyApKFVuY29ubmVjdGVkTmV3VXNlckZvcm0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9