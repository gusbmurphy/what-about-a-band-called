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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderBandModButtonGroup = exports.BandModButtonGroup = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
var ToggleButtonGroup_1 = __importDefault(__webpack_require__(/*! react-bootstrap/ToggleButtonGroup */ "QKck"));
var ToggleButton_1 = __importDefault(__webpack_require__(/*! react-bootstrap/ToggleButton */ "hlKo"));
var bs_1 = __webpack_require__(/*! react-icons/bs */ "X13+");
// TODO: Logging out will still show the BsCarrets as 'filled' if the user modified those bands
var BandModButtonGroup = /** @class */ (function (_super) {
    __extends(BandModButtonGroup, _super);
    function BandModButtonGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            modValue: _this.props.modPerformed,
        };
        return _this;
    }
    BandModButtonGroup.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.state.modValue != prevState.modValue) {
            if (this.state.modValue == 0) {
                if (this.props.modifyBand)
                    this.props.modifyBand(0, prevState.modValue);
            }
            else {
                if (this.props.modifyBand)
                    this.props.modifyBand(this.state.modValue);
            }
        }
    };
    BandModButtonGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, userIsAuthorized = _a.userIsAuthorized, modPerformed = _a.modPerformed;
        return (react_1.default.createElement(ToggleButtonGroup_1.default, { name: "modButtons", value: this.state.modValue, onChange: function (val) {
                // console.log(val)
                return _this.setState({ modValue: _this.state.modValue + val });
            } },
            react_1.default.createElement(ToggleButton_1.default, { name: "negativeButton", value: -1, disabled: !userIsAuthorized, checked: modPerformed == -1 }, this.state.modValue == -1 ? react_1.default.createElement(bs_1.BsCaretDownFill, null) : react_1.default.createElement(bs_1.BsCaretDown, null)),
            react_1.default.createElement(ToggleButton_1.default, { name: "positiveButton", value: 1, disabled: !userIsAuthorized, checked: modPerformed == 1 }, this.state.modValue == 1 ? react_1.default.createElement(bs_1.BsCaretUpFill, null) : react_1.default.createElement(bs_1.BsCaretUp, null))));
    };
    return BandModButtonGroup;
}(react_1.default.Component));
exports.BandModButtonGroup = BandModButtonGroup;
exports.PlaceholderBandModButtonGroup = function () {
    return (react_1.default.createElement(ToggleButtonGroup_1.default, { name: "placeHolderModButtons" },
        react_1.default.createElement(ToggleButton_1.default, { disabled: true, value: 1 },
            react_1.default.createElement(bs_1.BsCaretDown, null)),
        react_1.default.createElement(ToggleButton_1.default, { disabled: true, value: 2 },
            react_1.default.createElement(bs_1.BsCaretUp, null))));
};


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
    });
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

/***/ "OEB8":
/*!****************************************!*\
  !*** ./src/app/components/NewUser.tsx ***!
  \****************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewUserForm = exports.UnconnectedNewUserForm = void 0;
// import PropTypes from "prop-types";
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
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
var mapStateToProps = function (_a) {
    var session = _a.session;
    return ({
        userCreationStatus: session.userCreationStatus,
    });
};
var mapDispatchToProps = function (dispatch) { return ({
    submitForm: function (/*email,*/ username, password, repeatPassword) {
        return dispatch(session_slice_1.sessionActions.requestCreateUser({
            // email,
            username: username,
            password: password,
            repeatPassword: repeatPassword,
        }));
    },
}); };
var reduxConnector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
var UnconnectedNewUserForm = /** @class */ (function (_super) {
    __extends(UnconnectedNewUserForm, _super);
    function UnconnectedNewUserForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            email: "",
            username: "",
            password: "",
            repeatPassword: "",
        };
        return _this;
    }
    // TODO: Wouldn't it be easy to make it so the email is validated as the user types? Maybe on a slight delay? Same with the username and password?
    UnconnectedNewUserForm.prototype.render = function () {
        var _this = this;
        var userCreationStatus = this.props.userCreationStatus;
        return (react_1.default.createElement(Container_1.default, { className: "mb-5" },
            react_1.default.createElement(Card_1.default, { style: { maxWidth: "36rem" }, className: "mx-auto" },
                react_1.default.createElement(Card_1.default.Body, null,
                    react_1.default.createElement(Form_1.default, null,
                        react_1.default.createElement(Form_1.default.Group, { controlId: "formNewUserName" },
                            react_1.default.createElement(Form_1.default.Label, null, "Username"),
                            react_1.default.createElement(Form_1.default.Control, { type: "text", onChange: function (e) { return _this.setState({ username: e.target.value }); }, isInvalid: this.props.userCreationStatus ==
                                    statuses_1.UserCreationStatuses.USERNAME_TAKEN }),
                            react_1.default.createElement(Form_1.default.Control.Feedback, { type: "invalid" }, "Username is already taken.")),
                        react_1.default.createElement(Form_1.default.Group, { controlId: "formNewUserPassword" },
                            react_1.default.createElement(Form_1.default.Label, null, "Password"),
                            react_1.default.createElement(Form_1.default.Control, { type: "password", onChange: function (e) { return _this.setState({ password: e.target.value }); }, isInvalid: this.props.userCreationStatus ==
                                    statuses_1.UserCreationStatuses.PASSWORDS_DONT_MATCH })),
                        react_1.default.createElement(Form_1.default.Group, { controlId: "formNewUserRepeatPassword" },
                            react_1.default.createElement(Form_1.default.Label, null, "Repeat Password"),
                            react_1.default.createElement(Form_1.default.Control, { type: "password", onChange: function (e) {
                                    return _this.setState({ repeatPassword: e.target.value });
                                }, isInvalid: this.props.userCreationStatus ==
                                    statuses_1.UserCreationStatuses.PASSWORDS_DONT_MATCH }),
                            react_1.default.createElement(Form_1.default.Control.Feedback, { type: "invalid" }, "Passwords don't match.")),
                        react_1.default.createElement(Button_1.default, { variant: "primary", type: "button", disabled: this.props.userCreationStatus ==
                                statuses_1.UserCreationStatuses.PROCESSING ||
                                this.props.userCreationStatus == statuses_1.UserCreationStatuses.SUCCESS, onClick: function () {
                                return _this.props.submitForm(
                                // this.state.email,
                                _this.state.username, _this.state.password, _this.state.repeatPassword);
                            } }, "Submit"),
                        this.props.userCreationStatus ==
                            statuses_1.UserCreationStatuses.SUCCESS && (react_1.default.createElement(Alert_1.default, { variant: "success" },
                            "Account created! You may now ",
                            react_1.default.createElement("a", { href: "/login" }, "log in"),
                            ".")),
                        userCreationStatus == statuses_1.UserCreationStatuses.PROCESSING && (react_1.default.createElement(Alert_1.default, { variant: "info" },
                            react_1.default.createElement(Spinner_1.default, { animation: "border", variant: "primary" }),
                            " Processing...")))))));
    };
    return UnconnectedNewUserForm;
}(react_1.default.Component));
exports.UnconnectedNewUserForm = UnconnectedNewUserForm;
exports.NewUserForm = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UnconnectedNewUserForm);


/***/ }),

/***/ "PVq7":
/*!********************************************!*\
  !*** ./src/app/components/UserProfile.tsx ***!
  \********************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var user_profile_slice_1 = __webpack_require__(/*! ../store/slices/user-profile-slice */ "4tJo");
var Container_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Container */ "7vrA"));
var Row_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Row */ "3Z9Z"));
var Col_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Col */ "JI6e"));
var Card_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Card */ "6xyR"));
var Table_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Table */ "MBJH"));
var Badge_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Badge */ "65eO"));
var get_time_since_1 = __webpack_require__(/*! ../components/utility/get-time-since */ "KiFf");
function mapStateToProps(state) {
    return {
        fetchStatus: state.userProfile.fetchStatus,
        profile: state.userProfile.profile,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestFetchProfile: function (targetId) {
            dispatch(user_profile_slice_1.userProfileActions.requestFetchUserProfile({ targetId: targetId }));
        },
    };
}
var reduxConnector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
var UnconnectedUserProfile = /** @class */ (function (_super) {
    __extends(UnconnectedUserProfile, _super);
    function UnconnectedUserProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnconnectedUserProfile.prototype.componentDidMount = function () {
        this.props.requestFetchProfile(this.props.id);
    };
    UnconnectedUserProfile.prototype.render = function () {
        var profile = this.props.profile;
        if (profile) {
            return (react_1.default.createElement(Container_1.default, { className: "mb-5" },
                react_1.default.createElement(Card_1.default, null,
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
                                                    " (created ",
                                                    get_time_since_1.getTimeSince(new Date(band.createdOn)),
                                                    " ago)"))); })))))))))));
        }
        else {
            return null;
        }
    };
    return UnconnectedUserProfile;
}(react_1.default.Component));
exports.UserProfile = reduxConnector(UnconnectedUserProfile);


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
exports.store = void 0;
var redux_1 = __webpack_require__(/*! redux */ "ANjH");
var redux_saga_1 = __importDefault(__webpack_require__(/*! redux-saga */ "rRWa"));
var toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "i7Pf");
var bands_slice_1 = __importDefault(__webpack_require__(/*! ./slices/bands-slice */ "Xep1"));
var session_slice_1 = __importDefault(__webpack_require__(/*! ./slices/session-slice */ "fqsA"));
var user_records_slice_1 = __importDefault(__webpack_require__(/*! ./slices/user-records-slice */ "tIUU"));
var user_profile_slice_1 = __importDefault(__webpack_require__(/*! ./slices/user-profile-slice */ "4tJo"));
var sagas = __importStar(__webpack_require__(/*! ./sagas */ "uHhB"));
var sagaMiddleware = redux_saga_1.default();
var middleware = __spreadArrays(toolkit_1.getDefaultMiddleware({ thunk: false }), [sagaMiddleware]);
var rootReducer = redux_1.combineReducers({
    bands: bands_slice_1.default,
    session: session_slice_1.default,
    userRecords: user_records_slice_1.default,
    userProfile: user_profile_slice_1.default
});
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
var NewUser_1 = __webpack_require__(/*! ./NewUser */ "OEB8");
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
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/new-user", component: NewUser_1.NewUserForm }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Landing_1.Landing }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/users/:userId", component: function (_a) {
                    var match = _a.match;
                    return react_1.default.createElement(UserProfile_1.UserProfile, { id: match.params.userId });
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
exports.BigBandTable = void 0;
// import PropTypes from "prop-types";
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
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
var create_user_profile_url_1 = __webpack_require__(/*! ./utility/create-user-profile-url */ "n7of");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "55Ip");
var Spinner_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Spinner */ "T/rR"));
var defaultBandsPerFetch = 20;
// TODO: Something should display when we have no bands to display!
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
var reduxConnector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
var UnconnectedBigBandTable = /** @class */ (function (_super) {
    __extends(UnconnectedBigBandTable, _super);
    function UnconnectedBigBandTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            sortType: statuses_1.BandSortTypes.MOST_RECENT,
            bandsPerFetch: defaultBandsPerFetch,
            shouldFetchBands: false,
            maxBandsDisplayed: defaultBandsPerFetch,
        };
        return _this;
    }
    UnconnectedBigBandTable.prototype.componentDidMount = function () {
        this.props.requestFetchBands(this.state.bandsPerFetch, this.state.sortType);
    };
    UnconnectedBigBandTable.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.state.maxBandsDisplayed > prevState.maxBandsDisplayed ||
            this.state.shouldFetchBands) {
            this.props.requestFetchBands(this.state.maxBandsDisplayed, this.state.sortType);
            this.setState({ shouldFetchBands: false });
        }
        if (this.state.sortType !== prevState.sortType) {
            this.setState({
                maxBandsDisplayed: this.state.bandsPerFetch,
                shouldFetchBands: true,
            });
        }
    };
    UnconnectedBigBandTable.prototype.setSortType = function (newType) {
        this.setState({ sortType: newType });
    };
    UnconnectedBigBandTable.prototype.loadMore = function () {
        this.setState(function (state) {
            return {
                maxBandsDisplayed: state.maxBandsDisplayed + state.bandsPerFetch,
            };
        });
    };
    UnconnectedBigBandTable.prototype.getUserModificationToBand = function (thisBandId) {
        var modification = this.props.usersModifications.find(function (modification) { return modification.targetBandId === thisBandId; });
        if (modification)
            return modification.value;
        else
            return 0;
    };
    UnconnectedBigBandTable.prototype.render = function () {
        var _this = this;
        // TODO: Should we have some notification that bands are being fetched?
        var desiredBands = limit_sort_bands_1.sortAndLimitBands(this.props.bands, this.state.sortType, this.state.maxBandsDisplayed);
        var sortRadios = [
            { value: statuses_1.BandSortTypes.BEST, name: "Best" },
            { value: statuses_1.BandSortTypes.WORST, name: "Worst" },
            { value: statuses_1.BandSortTypes.MOST_RECENT, name: "Most Recent" },
        ];
        var userIsAuthenticated = this.props.userIsAuthenticated;
        return (react_1.default.createElement(Card_1.default, null,
            react_1.default.createElement(Card_1.default.Header, null,
                react_1.default.createElement(ButtonGroup_1.default, { toggle: true }, sortRadios.map(function (radio, idx) { return (react_1.default.createElement(ToggleButton_1.default, { key: idx, type: "radio", value: radio.value, name: "sortRadio", checked: radio.value === _this.state.sortType, onChange: function (e) {
                        e.preventDefault();
                        var currentTarget = e.currentTarget;
                        var sortTypeAsNumber = parseInt(currentTarget.value);
                        _this.setSortType(sortTypeAsNumber);
                    } }, radio.name)); }))),
            react_1.default.createElement(Card_1.default.Body, null,
                react_1.default.createElement(Table_1.default, { size: "sm", striped: true, bordered: true },
                    react_1.default.createElement("tbody", null, this.props.appIsFetchingBands ? (react_1.default.createElement(react_1.default.Fragment, null, getEntryPlaceholders(defaultBandsPerFetch))) : (react_1.default.createElement(react_1.default.Fragment, null, desiredBands.map(function (band) { return (react_1.default.createElement("tr", { key: String(band._id) },
                        react_1.default.createElement("td", null,
                            react_1.default.createElement(BandModButtonGroup_1.BandModButtonGroup, { userIsAuthorized: userIsAuthenticated, modPerformed: _this.getUserModificationToBand(band._id), modifyBand: function (modValue, undoValue) {
                                    return _this.props.addPointsTo(band._id, modValue, _this.props.userId, undoValue);
                                }, currentScore: band.score }),
                            " ",
                            react_1.default.createElement(Badge_1.default, { variant: "secondary" }, band.score),
                            " ",
                            band.name,
                            " ",
                            react_1.default.createElement("span", { className: "font-weight-lighter" },
                                "from",
                                " ",
                                react_1.default.createElement(react_router_dom_1.Link, { to: create_user_profile_url_1.createUserProfileUrl(String(band.ownerId)) }, band.ownerName))))); }))))),
                react_1.default.createElement(Button_1.default, { variant: "secondary", block: true, onClick: function () { return _this.loadMore(); } }, "Show me more..."))));
    };
    return UnconnectedBigBandTable;
}(react_1.default.Component));
function getEntryPlaceholders(numOfPlaceholders) {
    var placeholders = [];
    for (var i = 0; i < numOfPlaceholders; i++) {
        placeholders.push(BandTableEntryPlaceholder());
    }
    return placeholders;
}
var BandTableEntryPlaceholder = function () {
    return (react_1.default.createElement("tr", null,
        react_1.default.createElement("td", null,
            react_1.default.createElement(BandModButtonGroup_1.PlaceholderBandModButtonGroup, null),
            " ",
            react_1.default.createElement(Spinner_1.default, { animation: "border", variant: "primary", size: "sm" }))));
};
exports.BigBandTable = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UnconnectedBigBandTable);


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


/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0JhbmRNb2RCdXR0b25Hcm91cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCYW5kRm9ybUFsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zdGF0dXNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2JhbmQtY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0NyZWF0ZUJhbmRGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2xvZ291dC1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2dldC10aW1lLXNpbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItYXV0aGVudGljYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTmV3VXNlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJQcm9maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2ZldGNoLXVzZXItcmVjb3Jkcy1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvYmFuZC1zY29yZS1tb2RpZmljYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BhdGhzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvY2hlY2stc2Vzc2lvbi1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL2JhbmRzLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy91c2VyLWNyZWF0aW9uLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9mZXRjaC11c2VyLXByb2ZpbGUtc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NsaWNlcy9zZXNzaW9uLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluLnRzeCIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2hvdCBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvbG9nJCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTGFuZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvQmlnQmFuZFRhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJSZWNvcmRzTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvdXRpbGl0eS9saW1pdC1zb3J0LWJhbmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBK0M7O0FBRXhDLGdCQUFnQixvRUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0QzQyx3RUFBMEI7QUFFMUIsZ0hBQWtFO0FBQ2xFLHNHQUF3RDtBQUN4RCw2REFLd0I7QUFtQnhCLCtGQUErRjtBQUMvRjtJQUF3QyxzQ0FHdkM7SUFIRDtRQUFBLHFFQW1EQztRQS9DQyxXQUFLLEdBQUc7WUFDTixRQUFRLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO1NBQ2xDLENBQUM7O0lBNkNKLENBQUM7SUEzQ0MsK0NBQWtCLEdBQWxCLFVBQ0UsU0FBa0MsRUFDbEMsU0FBa0M7UUFFbEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQzdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtvQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3pFO2lCQUFNO2dCQUNMLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO29CQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkU7U0FDRjtJQUNILENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQUEsaUJBNkJDO1FBNUJPLFNBQXFDLElBQUksQ0FBQyxLQUFLLEVBQTdDLGdCQUFnQix3QkFBRSxZQUFZLGtCQUFlLENBQUM7UUFDdEQsT0FBTyxDQUNMLDhCQUFDLDJCQUFp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Q0FBQztBQUN2QixDQUFDO0FBM0JELDhDQTJCQyIsImZpbGUiOiJtYWluLjQzOTRjNGY0NDYyYWI5ODI3ZGE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Ub2dnbGVCdXR0b25Hcm91cFwiO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVG9nZ2xlQnV0dG9uXCI7XHJcbmltcG9ydCB7XHJcbiAgQnNDYXJldERvd24sXHJcbiAgQnNDYXJldERvd25GaWxsLFxyXG4gIEJzQ2FyZXRVcCxcclxuICBCc0NhcmV0VXBGaWxsLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5cclxuLy8gQmFuZE1vZEJ1dHRvbkdyb3VwLnByb3BUeXBlcyA9IHtcclxuLy8gICB1c2VySXNBdXRob3JpemVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4vLyAgIG1vZGlmeUJhbmQ6IFByb3BUeXBlcy5mdW5jLFxyXG4vLyAgIG1vZFBlcmZvcm1lZDogUHJvcFR5cGVzLm9uZU9mKFsxLCAwLCAtMV0pLFxyXG4vLyB9O1xyXG5cclxudHlwZSBCYW5kTW9kQnV0dG9uR3JvdXBQcm9wcyA9IHtcclxuICB1c2VySXNBdXRob3JpemVkOiBib29sZWFuO1xyXG4gIG1vZGlmeUJhbmQ/OiAobW9kVmFsdWU6IG51bWJlciwgdW5kb1ZhbHVlPzogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIG1vZFBlcmZvcm1lZDogbnVtYmVyO1xyXG4gIGN1cnJlbnRTY29yZTogbnVtYmVyO1xyXG59O1xyXG5cclxudHlwZSBCYW5kTW9kQnV0dG9uR3JvdXBTdGF0ZSA9IHtcclxuICBtb2RWYWx1ZTogbnVtYmVyO1xyXG59O1xyXG5cclxuLy8gVE9ETzogTG9nZ2luZyBvdXQgd2lsbCBzdGlsbCBzaG93IHRoZSBCc0NhcnJldHMgYXMgJ2ZpbGxlZCcgaWYgdGhlIHVzZXIgbW9kaWZpZWQgdGhvc2UgYmFuZHNcclxuZXhwb3J0IGNsYXNzIEJhbmRNb2RCdXR0b25Hcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuICBCYW5kTW9kQnV0dG9uR3JvdXBQcm9wcyxcclxuICBCYW5kTW9kQnV0dG9uR3JvdXBTdGF0ZVxyXG4+IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIG1vZFZhbHVlOiB0aGlzLnByb3BzLm1vZFBlcmZvcm1lZCxcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoXHJcbiAgICBwcmV2UHJvcHM6IEJhbmRNb2RCdXR0b25Hcm91cFByb3BzLFxyXG4gICAgcHJldlN0YXRlOiBCYW5kTW9kQnV0dG9uR3JvdXBTdGF0ZVxyXG4gICkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubW9kVmFsdWUgIT0gcHJldlN0YXRlLm1vZFZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLm1vZFZhbHVlID09IDApIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2RpZnlCYW5kKSB0aGlzLnByb3BzLm1vZGlmeUJhbmQoMCwgcHJldlN0YXRlLm1vZFZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2RpZnlCYW5kKSB0aGlzLnByb3BzLm1vZGlmeUJhbmQodGhpcy5zdGF0ZS5tb2RWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdXNlcklzQXV0aG9yaXplZCwgbW9kUGVyZm9ybWVkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRvZ2dsZUJ1dHRvbkdyb3VwXHJcbiAgICAgICAgbmFtZT17XCJtb2RCdXR0b25zXCJ9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW9kVmFsdWV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWwpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kVmFsdWU6IHRoaXMuc3RhdGUubW9kVmFsdWUgKyB2YWwgfSlcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8VG9nZ2xlQnV0dG9uXHJcbiAgICAgICAgICBuYW1lPXtcIm5lZ2F0aXZlQnV0dG9uXCJ9XHJcbiAgICAgICAgICB2YWx1ZT17LTF9XHJcbiAgICAgICAgICBkaXNhYmxlZD17IXVzZXJJc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICBjaGVja2VkPXttb2RQZXJmb3JtZWQgPT0gLTF9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUubW9kVmFsdWUgPT0gLTEgPyA8QnNDYXJldERvd25GaWxsIC8+IDogPEJzQ2FyZXREb3duIC8+fVxyXG4gICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgIG5hbWU9e1wicG9zaXRpdmVCdXR0b25cIn1cclxuICAgICAgICAgIHZhbHVlPXsxfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyF1c2VySXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgY2hlY2tlZD17bW9kUGVyZm9ybWVkID09IDF9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUubW9kVmFsdWUgPT0gMSA/IDxCc0NhcmV0VXBGaWxsIC8+IDogPEJzQ2FyZXRVcCAvPn1cclxuICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGxhY2Vob2xkZXJCYW5kTW9kQnV0dG9uR3JvdXAgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2dnbGVCdXR0b25Hcm91cCBuYW1lPXtcInBsYWNlSG9sZGVyTW9kQnV0dG9uc1wifT5cclxuICAgICAgPFRvZ2dsZUJ1dHRvbiBkaXNhYmxlZD17dHJ1ZX0gdmFsdWU9ezF9PlxyXG4gICAgICAgIDxCc0NhcmV0RG93biAvPlxyXG4gICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgPFRvZ2dsZUJ1dHRvbiBkaXNhYmxlZD17dHJ1ZX0gdmFsdWU9ezJ9PlxyXG4gICAgICAgIDxCc0NhcmV0VXAgLz5cclxuICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVGZXRjaFN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyUHJvZmlsZVR5cGUgPSB7XHJcbiAgaWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRvdGFsU2NvcmU6IG51bWJlcjtcclxuICBuYW1lc0NvbnRyaWJ1dGVkOiBudW1iZXI7XHJcbiAgYXZlcmFnZVNjb3JlOiBudW1iZXI7XHJcbiAgYmFuZHM6IEJhbmRDbGFzc1tdO1xyXG59O1xyXG5cclxudHlwZSBVc2VyUHJvZmlsZVNsaWNlU3RhdGUgPSB7XHJcbiAgZmV0Y2hTdGF0dXM6IFByb2ZpbGVGZXRjaFN0YXR1c2VzO1xyXG4gIHByb2ZpbGU/OiBVc2VyUHJvZmlsZVR5cGU7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJQcm9maWxlU2xpY2VTdGF0ZSA9IHtcclxuICBmZXRjaFN0YXR1czogUHJvZmlsZUZldGNoU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICBwcm9maWxlOiB1bmRlZmluZWQsXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUHJvZmlsZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclByb2ZpbGVcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHJlcXVlc3RGZXRjaFVzZXJQcm9maWxlKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICB0YXJnZXRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5mZXRjaFN0YXR1cyA9IFByb2ZpbGVGZXRjaFN0YXR1c2VzLkFUVEVNUFRJTkc7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyUHJvZmlsZVN1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBwcm9maWxlOiBVc2VyUHJvZmlsZVR5cGUgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5mZXRjaFN0YXR1cyA9IFByb2ZpbGVGZXRjaFN0YXR1c2VzLlNVQ0NFU1M7XHJcbiAgICAgIHN0YXRlLnByb2ZpbGUgPSBhY3Rpb24ucGF5bG9hZC5wcm9maWxlO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclByb2ZpbGVGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmZldGNoU3RhdHVzID0gUHJvZmlsZUZldGNoU3RhdHVzZXMuRkFJTFVSRTtcclxuICAgICAgc3RhdGUucHJvZmlsZSA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclByb2ZpbGVBY3Rpb25zID0gdXNlclByb2ZpbGVTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCB1c2VyUHJvZmlsZVNsaWNlLnJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9BbGVydFwiO1xyXG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckFsZXJ0KCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPlVoIG9oLi4uPC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5cclxuICAgICAgICBTb21ldGhpbmcgd2VudCB3cm9uZyEgV2hhdCBkaWQgeW91IGRvIT8gRG8geW91IGhhdmUgYW55IGlkZWEgaG93IG11Y2ggSVxyXG4gICAgICAgIHdvcmtlZCB0byBnZXQgdGhpcyBwbGFjZSBjbGVhbiBhbmQgdGhlbiB5b3Ugc2hvdyB1cCBhbmQgbWVzcyB0aGUgd2hvbGVcclxuICAgICAgICB0aGluZyB1cD8gTm8gcmVzcGVjdC4uLlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOb05hbWVBbGVydCgpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwid2FybmluZ1wiPlxyXG4gICAgICA8QWxlcnQuSGVhZGluZz5UaGlzIE1GIHNhaWQgJmxkcXVvOyAmcmRxdW87PC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5cclxuICAgICAgICBXaG8gYXJlIHlvdSwgSm9obiBDYWdlPyDwn5it8J+YrfCfmK0gSnVzdCBraWRkaW5nLCBkb24mYXBvczt0IGtub3cgd2hvIHRoYXRcclxuICAgICAgICBpcy5cclxuICAgICAgPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFuZEV4aXN0c0FsZXJ0KCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPlNvbWVib2R5IGFscmVhZHkgdGhvdWdodCBvZiB0aGF0ITwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgR29pbmcgdG8gaGF2ZSB0byB0cnkgaGFyZGVyLiBNYXliZSByZWFkIGEgdmVyeSBjb21wbGljYXRlZCBib29rIGFuZCB0aGVuXHJcbiAgICAgICAgdGhpbmsgb2Ygc29tZSByZWZlcmVuY2UgdG8gdGhhdC5cclxuICAgICAgPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlck5vdExvZ2dlZEluQWxlcnQoKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cIndhcm5pbmdcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+WW91JmFwb3M7dmUgZ290dGEgYmUgc2lnbmVkIGluITwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgV2UgZG9uJmFwb3M7dCBsZXQganVzdCBhbnlvbmUgaW4gaGVyZS4gWW91IGNhbntcIiBcIn1cclxuICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9uZXctdXNlclwiPlxyXG4gICAgICAgICAgPEFsZXJ0Lkxpbms+bWFrZSBhbiBhY2NvdW50IGhlcmU8L0FsZXJ0Lkxpbms+XHJcbiAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICwgdGhvdWdoLCBpZiB5b3Ugd2FudC5cclxuICAgICAgPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFuZENyZWF0ZWRBbGVydChuYW1lOiBzdHJpbmcpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwic3VjY2Vzc1wiPlxyXG4gICAgICA8QWxlcnQuSGVhZGluZz4mbGRxdW87e25hbWV9JnJkcXVvOyBzdWJtaXR0ZWQhPC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5Ob3cgdGhhdCZhcG9zO3MgZnVubnkuPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZCB9IGZyb20gXCIuLi8uLi9zdG9yZS9zbGljZXMvdXNlci1yZWNvcmRzLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydEFuZExpbWl0VXNlclJlY29yZHMoXHJcbiAgcmVjb3JkczogVXNlclJlY29yZFtdLFxyXG4gIHNvcnRCeTogVXNlclJlY29yZFNvcnRUeXBlcyxcclxuICBsaW1pdDogbnVtYmVyXHJcbik6IFVzZXJSZWNvcmRbXSB7XHJcbiAgbGV0IGZpbHRlcmVkUmVjb3JkcyA9IFsuLi5yZWNvcmRzXTtcclxuXHJcbiAgc3dpdGNoIChzb3J0QnkpIHtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX0FWRVJBR0VfU0NPUkU6XHJcbiAgICAgIGZpbHRlcmVkUmVjb3Jkcy5zb3J0KChhLCBiKSA9PiBiLmF2ZXJhZ2VTY29yZSAtIGEuYXZlcmFnZVNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9TQ09SRTpcclxuICAgICAgZmlsdGVyZWRSZWNvcmRzLnNvcnQoKGEsIGIpID0+IGIudG90YWxTY29yZSAtIGEudG90YWxTY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLk1PU1RfTkFNRVNfQ09OVFJJQlVURUQ6XHJcbiAgICAgIGZpbHRlcmVkUmVjb3Jkcy5zb3J0KChhLCBiKSA9PiBiLm5hbWVzQ29udHJpYnV0ZWQgLSBhLm5hbWVzQ29udHJpYnV0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyZWRSZWNvcmRzID0gZmlsdGVyZWRSZWNvcmRzLnNsaWNlKDAsIGxpbWl0KTtcclxuICByZXR1cm4gZmlsdGVyZWRSZWNvcmRzO1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFVzZXJSZWNvcmRTb3J0VHlwZXMge1xyXG4gIEhJR0hFU1RfU0NPUkUsXHJcbiAgSElHSEVTVF9BVkVSQUdFX1NDT1JFLFxyXG4gIE1PU1RfTkFNRVNfQ09OVFJJQlVURURcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFuZENyZWF0aW9uU3RhdHVzZXMge1xyXG4gIENSRUFUSU5HLFxyXG4gIENSRUFURUQsXHJcbiAgRVJST1IsXHJcbiAgQkFORF9FWElTVFMsXHJcbiAgTk9UX1RSWUlORyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFuZFNvcnRUeXBlcyB7XHJcbiAgQkVTVCxcclxuICBXT1JTVCxcclxuICBNT1NUX1JFQ0VOVCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMge1xyXG4gIEFUVEVNUFRJTkcsXHJcbiAgU1VDQ0VTUyxcclxuICBGQUlMVVJFLFxyXG4gIE5PVF9UUllJTkcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByb2ZpbGVGZXRjaFN0YXR1c2VzIHtcclxuICBBVFRFTVBUSU5HLFxyXG4gIFNVQ0NFU1MsXHJcbiAgRkFJTFVSRSxcclxuICBOT1RfVFJZSU5HXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMge1xyXG4gIEFVVEhFTlRJQ0FUSU5HLFxyXG4gIEFVVEhFTlRJQ0FURUQsXHJcbiAgTk9UX0FVVEhFTlRJQ0FURUQsXHJcbiAgTk9UX1RSWUlORyxcclxuICBTRVJWRVJfRVJST1IsXHJcbiAgVVNFUk5BTUVfTk9UX0ZPVU5ELFxyXG4gIElOVkFMSURfUEFTU1dPUkQsXHJcbiAgTE9HR0lOR19PVVQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFVzZXJDcmVhdGlvblN0YXR1c2VzIHtcclxuICBQUk9DRVNTSU5HLFxyXG4gIFBBU1NXT1JEU19ET05UX01BVENILFxyXG4gIFVTRVJOQU1FX1RBS0VOLFxyXG4gIE5PVF9UUllJTkcsXHJcbiAgU0VSVkVSX0VSUk9SLFxyXG4gIFNVQ0NFU1MsXHJcbiAgRU1QVFlfRklFTERTLFxyXG4gIElOVkFMSURfRU1BSUwsXHJcbiAgRU1BSUxfVEFLRU4sXHJcbn1cclxuIiwiaW1wb3J0IHsgdGFrZSwgcHV0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IE5ld0JhbmRSZXF1ZXN0Qm9keSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcm91dGUtaGFuZGxlcnMvYmFuZHNcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcbmltcG9ydCB7IEJhbmRDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGJhbmRDcmVhdGlvblNhZ2EoKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShiYW5kQWN0aW9ucy5yZXF1ZXN0Q3JlYXRlQmFuZC50eXBlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiU2FnYSBwYXlsb2FkOiBcIiwgcGF5bG9hZCk7XHJcbiAgICBjb25zdCB7IGNyZWF0aW5nVXNlcklkLCBiYW5kTmFtZSwgY3JlYXRpbmdVc2VybmFtZSB9ID0gcGF5bG9hZDtcclxuICAgIC8vIGxldCBuZXdCYW5kID0ge1xyXG4gICAgLy8gICBjcmVhdGluZ1VzZXJJZCxcclxuICAgIC8vICAgYmFuZE5hbWUsXHJcbiAgICAvLyB9O1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHk6IE5ld0JhbmRSZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgYmFuZE5hbWUsXHJcbiAgICAgIG93bmVySWQ6IGNyZWF0aW5nVXNlcklkLFxyXG4gICAgICBvd25lck5hbWU6IGNyZWF0aW5nVXNlcm5hbWUsXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJIRXJlIVwiKVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5uZXdCYW5kLFxyXG4gICAgICAgIHJlcXVlc3RCb2R5XHJcbiAgICAgICk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgaW4gYmFuZGNyZWF0aW9uc2FnYTogXCIsIHJlc3BvbnNlKVxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm93IGltIGhlcmUhXCIpXHJcbiAgICAgICAgY29uc3QgbmV3QmFuZDogQmFuZENsYXNzID0gcmVzcG9uc2UuZGF0YS5uZXdCYW5kO1xyXG4gICAgICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5jcmVhdGVCYW5kU3VjY2VzcyhuZXdCYW5kKSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gbGV0IHsgX2lkLCBiYW5kTmFtZSwgY3JlYXRpbmdVc2VySWQsIHNjb3JlIH0gPSBuZXdCYW5kO1xyXG4gICAgICAvLyBsZXQgbmV3QmFuZDogQmFuZENsYXNzID0ge1xyXG4gICAgICAvLyAgIG5hbWU6IGJhbmROYW1lLFxyXG4gICAgICAvLyAgIG93bmVyTmFtZTogY3JlYXRpbmdVc2VybmFtZSxcclxuICAgICAgLy8gICBvd25lcklkOiBjcmVhdGluZ1VzZXJJZCxcclxuICAgICAgLy8gICBzY29yZTogMCxcclxuICAgICAgLy8gICBjcmVhdGVkT24sXHJcbiAgICAgIC8vICAgX2lkOiBuZXdCYW5kSWQsXHJcbiAgICAgIC8vIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCByZWFzb246IEJhbmRDcmVhdGlvblN0YXR1c2VzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5yZWFzb247XHJcbiAgICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5jcmVhdGVCYW5kRmFpbHVyZShyZWFzb24pKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCB7IGF1dGhlbnRpY2F0aW9uU3RhdHVzLCB1c2VybmFtZSB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2Vzc2lvblxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgZGlzcGF0Y2goc2Vzc2lvbkFjdGlvbnMucmVxdWVzdExvZ291dCgpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrU2Vzc2lvbigpIHtcclxuICAgIGRpc3BhdGNoKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDaGVja1Nlc3Npb24oKSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORylcclxuICAgICAgY2hlY2tTZXNzaW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgPExpbmtDb250YWluZXIgdG89XCIvXCI+XHJcbiAgICAgICAgPE5hdmJhci5CcmFuZD53YWJhYmM/PC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAge2F1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPE5hdi5JdGVtPlNpZ25lZCBpbiBhcyB7dXNlcm5hbWV9PC9OYXYuSXRlbT5cclxuICAgICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX0+TG9nb3V0PC9OYXYuTGluaz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgPE5hdi5MaW5rPkxvZ2luPC9OYXYuTGluaz5cclxuICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL25ldy11c2VyXCI+XHJcbiAgICAgICAgICAgIDxOYXYuTGluaz5DcmVhdGUgQWNjb3VudDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L05hdmJhcj5cclxuICApO1xyXG59IiwiLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIERpc3BhdGNoLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMsIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgQmFuZENyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9TcGlubmVyXCI7XHJcbmltcG9ydCB7XHJcbiAgQmFuZENyZWF0ZWRBbGVydCxcclxuICBCYW5kRXhpc3RzQWxlcnQsXHJcbiAgRXJyb3JBbGVydCxcclxuICBOb05hbWVBbGVydCxcclxuICBVc2VyTm90TG9nZ2VkSW5BbGVydCxcclxufSBmcm9tIFwiLi9DcmVhdGVCYW5kRm9ybUFsZXJ0c1wiO1xyXG5cclxuZW51bSBDcmVhdGlvbkFsZXJ0IHtcclxuICBFcnJvcixcclxuICBOb05hbWUsXHJcbiAgQmFuZEV4aXN0cyxcclxuICBCYW5kQ3JlYXRlZCxcclxuICBOb3RMb2dnZWRJbixcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUJhbmRGb3JtKCk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCB7XHJcbiAgICBzZXNzaW9uOiB7IGF1dGhlbnRpY2F0aW9uU3RhdHVzLCB1c2VySWQsIHVzZXJuYW1lIH0sXHJcbiAgICBiYW5kczogeyBjcmVhdGlvblN0YXR1czogYmFuZENyZWF0aW9uU3RhdHVzIH0sXHJcbiAgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZSk7XHJcbiAgY29uc3QgW2JhbmROYW1lLCBzZXRCYW5kTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3JlYXRlZE5hbWUsIHNldENyZWF0ZWROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGU8Q3JlYXRpb25BbGVydCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3dpdGNoIChiYW5kQ3JlYXRpb25TdGF0dXMpIHtcclxuICAgICAgY2FzZSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5CQU5EX0VYSVNUUzpcclxuICAgICAgICBzZXRBbGVydChDcmVhdGlvbkFsZXJ0LkJhbmRFeGlzdHMpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY2FzZSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5FUlJPUjpcclxuICAgICAgICBzZXRBbGVydChDcmVhdGlvbkFsZXJ0LkVycm9yKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhc2UgQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRFRDpcclxuICAgICAgICBzZXRDcmVhdGVkTmFtZShiYW5kTmFtZSk7XHJcbiAgICAgICAgc2V0QmFuZE5hbWUoXCJcIik7XHJcbiAgICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5CYW5kQ3JlYXRlZCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0sIFtiYW5kQ3JlYXRpb25TdGF0dXNdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gICAgaWYgKGF1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRCkge1xyXG4gICAgICBpZiAoYmFuZE5hbWUgPT0gXCJcIikge1xyXG4gICAgICAgIHNldEFsZXJ0KENyZWF0aW9uQWxlcnQuTm9OYW1lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RDcmVhdGVCYW5kKHtcclxuICAgICAgICAgICAgY3JlYXRpbmdVc2VySWQ6IHVzZXJJZCEsXHJcbiAgICAgICAgICAgIGJhbmROYW1lLFxyXG4gICAgICAgICAgICBjcmVhdGluZ1VzZXJuYW1lOiB1c2VybmFtZSEsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEFsZXJ0KENyZWF0aW9uQWxlcnQuTm90TG9nZ2VkSW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRGlzcGxheUFsZXJ0KHtcclxuICAgIGFsZXJ0LFxyXG4gIH06IHtcclxuICAgIGFsZXJ0OiBDcmVhdGlvbkFsZXJ0IHwgdW5kZWZpbmVkO1xyXG4gIH0pOiBKU1guRWxlbWVudCB8IG51bGwge1xyXG4gICAgc3dpdGNoIChhbGVydCkge1xyXG4gICAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0LkJhbmRDcmVhdGVkOlxyXG4gICAgICAgIHJldHVybiBCYW5kQ3JlYXRlZEFsZXJ0KGNyZWF0ZWROYW1lKTtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0LkJhbmRFeGlzdHM6XHJcbiAgICAgICAgcmV0dXJuIEJhbmRFeGlzdHNBbGVydCgpO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuRXJyb3I6XHJcbiAgICAgICAgcmV0dXJuIEVycm9yQWxlcnQoKTtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0Lk5vTmFtZTpcclxuICAgICAgICByZXR1cm4gTm9OYW1lQWxlcnQoKTtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0Lk5vdExvZ2dlZEluOlxyXG4gICAgICAgIHJldHVybiBVc2VyTm90TG9nZ2VkSW5BbGVydCgpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTmFtZUNoYW5nZShlKSB7XHJcbiAgICBzZXRCYW5kTmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgPElucHV0R3JvdXAgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYWJvdXQgYSBiYW5kIGNhbGxlZC4uLlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZU5hbWVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICB2YWx1ZT17YmFuZE5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICB7YmFuZENyZWF0aW9uU3RhdHVzID09IEJhbmRDcmVhdGlvblN0YXR1c2VzLkNSRUFUSU5HID8gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgPFNwaW5uZXJcclxuICAgICAgICAgICAgICAgIGFzPVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb249XCJib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoKX0+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgIDxEaXNwbGF5QWxlcnQgYWxlcnQ9e2FsZXJ0fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBsb2dvdXRTYWdhKCkge1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICB5aWVsZCB0YWtlKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RMb2dvdXQudHlwZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLmRlbGV0ZSxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5zZXNzaW9uRW5kcG9pbnQsIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9XHJcbiAgICAgICk7XHJcbiAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5sb2dvdXRTdWNjZXNzKCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5sb2dvdXRGYWlsdXJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImNvbnN0IG1zSW5NaW51dGUgPSA2MDAwMDtcclxuY29uc3QgbXNJbkhvdXIgPSBtc0luTWludXRlICogNjA7XHJcbmNvbnN0IG1zSW5EYXkgPSBtc0luSG91ciAqIDI0O1xyXG5jb25zdCBtc0luWWVhciA9IG1zSW5EYXkgKiAzNjU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZVNpbmNlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGVsYXBzZWRUaW1lID0gRGF0ZS5ub3coKSAtIGRhdGUuZ2V0VGltZSgpO1xyXG4gIGlmIChlbGFwc2VkVGltZSA8IG1zSW5NaW51dGUpIHtcclxuICAgIHJldHVybiBcIjFtXCI7XHJcbiAgfVxyXG4gIGlmIChlbGFwc2VkVGltZSA8IG1zSW5Ib3VyKSB7XHJcbiAgICBjb25zdCBudW1PZk1pbnV0ZXMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJbk1pbnV0ZSk7XHJcbiAgICByZXR1cm4gYCR7bnVtT2ZNaW51dGVzfW1gO1xyXG4gIH1cclxuICBpZiAoZWxhcHNlZFRpbWUgPCBtc0luRGF5KSB7XHJcbiAgICBjb25zdCBudW1PZkhvdXJzID0gTWF0aC5mbG9vcihlbGFwc2VkVGltZSAvIG1zSW5Ib3VyKTtcclxuICAgIGNvbnN0IG51bU9mTWludXRlcyA9IE1hdGguZmxvb3IoKGVsYXBzZWRUaW1lICUgbXNJbkhvdXIpIC8gbXNJbk1pbnV0ZSk7XHJcbiAgICBsZXQgc3RyaW5nID0gYCR7bnVtT2ZIb3Vyc31oYDtcclxuICAgIGlmIChudW1PZk1pbnV0ZXMgPiAwKSBzdHJpbmcgKz0gYCAke251bU9mTWludXRlc31tYDtcclxuICAgIHJldHVybiBzdHJpbmc7XHJcbiAgfVxyXG4gIGlmIChlbGFwc2VkVGltZSA8IG1zSW5ZZWFyKSB7XHJcbiAgICBjb25zdCBudW1PZkRheXMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJbkRheSk7XHJcbiAgICByZXR1cm4gYCR7bnVtT2ZEYXlzfWRgO1xyXG4gIH1cclxuICBjb25zdCBudW1PZlllYXJzID0gTWF0aC5mbG9vcihlbGFwc2VkVGltZSAvIG1zSW5ZZWFyKTtcclxuICBjb25zdCBudW1PZkRheXMgPSBNYXRoLmZsb29yKChlbGFwc2VkVGltZSAlIG1zSW5ZZWFyKSAvIG1zSW5EYXkpO1xyXG4gIGxldCBzdHJpbmcgPSBgJHtudW1PZlllYXJzfXlgO1xyXG4gIGlmIChudW1PZkRheXMgPiAwKSBzdHJpbmcgKz0gYCAke251bU9mRGF5c31kYDtcclxuICByZXR1cm4gc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWN0aW9uQ2hhbm5lbCwgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHdhdGNoRmV0Y2hCYW5kc1NhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICBjb25zdCBmZXRjaEJhbmRzQ2hhbm5lbCA9IHlpZWxkIGFjdGlvbkNoYW5uZWwoXHJcbiAgICBiYW5kQWN0aW9ucy5yZXF1ZXN0RmV0Y2hCYW5kcy50eXBlXHJcbiAgKTtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKGZldGNoQmFuZHNDaGFubmVsKTtcclxuICAgIGNvbnN0IHsgbWF4QmFuZHMsIHNvcnRCeSB9ID0gcGF5bG9hZDtcclxuICAgIHlpZWxkIGNhbGwoZmV0Y2hCYW5kcywgbWF4QmFuZHMsIHNvcnRCeSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoQmFuZHMobWF4QmFuZHMsIHNvcnRCeSkge1xyXG4gIGxldCByZXNwb25zZTtcclxuICB0cnkge1xyXG4gICAgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGF4aW9zLnBvc3QsIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLnBvc3RCYW5kcywge1xyXG4gICAgICBtYXhCYW5kcyxcclxuICAgICAgc29ydEJ5LFxyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMuZmV0Y2hCYW5kc1N1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMuZmV0Y2hCYW5kc0ZhaWx1cmUoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHVzZXJBdXRoZW50aWNhdGlvblNhZ2EoKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0QXV0aGVudGljYXRlVXNlci50eXBlKTtcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBwYXlsb2FkO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuYXV0aGVudGljYXRlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHsgdXNlcklkLCBiYW5kc01vZGlmaWVkIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImJhbmRzTW9kaWZpZWQgaW4gdXNlckF1dGhlbnRpY2F0aW9uU2FnYTogXCIsIGJhbmRzTW9kaWZpZWQpO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmF1dGhlbnRpY2F0ZVVzZXJTdWNjZXNzKHtcclxuICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgYmFuZHNNb2RpZmllZCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5hdXRoZW50aWNhdGVVc2VyRmFpbHVyZSh7XHJcbiAgICAgICAgICAgIHJlYXNvbjogZXJyLnJlc3BvbnNlLmRhdGEucmVhc29uLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBVc2VyQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXJcIjtcclxuXHJcbi8vIFVuY29ubmVjdGVkTmV3VXNlckZvcm0ucHJvcFR5cGVzID0ge1xyXG4vLyAgIHN1Ym1pdEZvcm06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbi8vICAgdXNlckNyZWF0aW9uU3RhdHVzOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhVc2VyQ3JlYXRpb25TdGF0dXNlcykpLFxyXG4vLyB9O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2Vzc2lvbiB9KSA9PiAoe1xyXG4gIHVzZXJDcmVhdGlvblN0YXR1czogc2Vzc2lvbi51c2VyQ3JlYXRpb25TdGF0dXMsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHN1Ym1pdEZvcm06ICgvKmVtYWlsLCovIHVzZXJuYW1lLCBwYXNzd29yZCwgcmVwZWF0UGFzc3dvcmQpID0+XHJcbiAgICBkaXNwYXRjaChcclxuICAgICAgc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENyZWF0ZVVzZXIoe1xyXG4gICAgICAgIC8vIGVtYWlsLFxyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIHJlcGVhdFBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgKSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIE5ld1VzZXJGb3JtUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+O1xyXG5cclxudHlwZSBOZXdVc2VyRm9ybVN0YXRlID0ge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIHJlcGVhdFBhc3N3b3JkOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgVW5jb25uZWN0ZWROZXdVc2VyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuICBOZXdVc2VyRm9ybVByb3BzLFxyXG4gIE5ld1VzZXJGb3JtU3RhdGVcclxuPiB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICByZXBlYXRQYXNzd29yZDogXCJcIixcclxuICB9O1xyXG5cclxuICAvLyBUT0RPOiBXb3VsZG4ndCBpdCBiZSBlYXN5IHRvIG1ha2UgaXQgc28gdGhlIGVtYWlsIGlzIHZhbGlkYXRlZCBhcyB0aGUgdXNlciB0eXBlcz8gTWF5YmUgb24gYSBzbGlnaHQgZGVsYXk/IFNhbWUgd2l0aCB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkP1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHVzZXJDcmVhdGlvblN0YXR1cyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtcIm1iLTVcIn0+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzZyZW1cIiB9fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICB7LyogPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJFbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWwgQWRkcmVzczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5JTlZBTElEX0VNQUlMXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+ICovfVxyXG4gICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuVVNFUk5BTUVfVEFLRU5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgVXNlcm5hbWUgaXMgYWxyZWFkeSB0YWtlbi5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlclBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuUEFTU1dPUkRTX0RPTlRfTUFUQ0hcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJSZXBlYXRQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UmVwZWF0IFBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlcGVhdFBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICBQYXNzd29yZHMgZG9uJmFwb3M7dCBtYXRjaC5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HIHx8XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09IFVzZXJDcmVhdGlvblN0YXR1c2VzLlNVQ0NFU1NcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3VibWl0Rm9ybShcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlcGVhdFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlNVQ0NFU1MgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEFjY291bnQgY3JlYXRlZCEgWW91IG1heSBub3cgPGEgaHJlZj1cIi9sb2dpblwiPmxvZyBpbjwvYT4uXHJcbiAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3VzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HICYmIChcclxuICAgICAgICAgICAgICAgIDxBbGVydCB2YXJpYW50PVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiIC8+IFByb2Nlc3NpbmcuLi5cclxuICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmV3VXNlckZvcm0gPSBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShVbmNvbm5lY3RlZE5ld1VzZXJGb3JtKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQge1xyXG4gIFVzZXJQcm9maWxlVHlwZSxcclxuICB1c2VyUHJvZmlsZUFjdGlvbnMsXHJcbn0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9Db250YWluZXJcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9lc20vVGFibGVcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL0JhZGdlXCI7XHJcbmltcG9ydCB7IGdldFRpbWVTaW5jZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxpdHkvZ2V0LXRpbWUtc2luY2VcIjtcclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogUm9vdFN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZldGNoU3RhdHVzOiBzdGF0ZS51c2VyUHJvZmlsZS5mZXRjaFN0YXR1cyxcclxuICAgIHByb2ZpbGU6IHN0YXRlLnVzZXJQcm9maWxlLnByb2ZpbGUsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcXVlc3RGZXRjaFByb2ZpbGU6ICh0YXJnZXRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh1c2VyUHJvZmlsZUFjdGlvbnMucmVxdWVzdEZldGNoVXNlclByb2ZpbGUoeyB0YXJnZXRJZCB9KSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHJlZHV4Q29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbnR5cGUgVXNlclByb2ZpbGVQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiByZWR1eENvbm5lY3Rvcj4gJiB7XHJcbiAgaWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbn07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZFVzZXJQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFVzZXJQcm9maWxlUHJvcHM+IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMucmVxdWVzdEZldGNoUHJvZmlsZSh0aGlzLnByb3BzLmlkKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcHJvZmlsZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChwcm9maWxlKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGg1Pntwcm9maWxlLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBzY29yZTogPGI+e3Byb2ZpbGUudG90YWxTY29yZX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF2ZXJhZ2Ugc2NvcmU6IDxiPntwcm9maWxlLmF2ZXJhZ2VTY29yZS50b0ZpeGVkKDIpfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZXMgY29udHJpYnV0ZWQ6IDxiPntwcm9maWxlLm5hbWVzQ29udHJpYnV0ZWR9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgc2l6ZT1cInNtXCIgc3RyaXBlZCBib3JkZXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLmJhbmRzLm1hcCgoYmFuZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17U3RyaW5nKGJhbmQuX2lkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntiYW5kLnNjb3JlfTwvQmFkZ2U+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPntiYW5kLm5hbWV9PC9iPiAoY3JlYXRlZCB7Z2V0VGltZVNpbmNlKG5ldyBEYXRlKGJhbmQuY3JlYXRlZE9uKSl9IGFnbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUHJvZmlsZSA9IHJlZHV4Q29ubmVjdG9yKFVuY29ubmVjdGVkVXNlclByb2ZpbGUpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFjdGlvbkNoYW5uZWwsIGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyB1c2VyUmVjb3Jkc0FjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRzUmVxdWVzdEJvZHkgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3JvdXRlLWhhbmRsZXJzL3VzZXItcmVjb3Jkc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogd2F0Y2hGZXRjaFVzZXJSZWNvcmRzU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIGNvbnN0IGZldGNoVXNlclJlY29yZHNDaGFubmVsID0geWllbGQgYWN0aW9uQ2hhbm5lbChcclxuICAgIHVzZXJSZWNvcmRzQWN0aW9ucy5yZXF1ZXN0RmV0Y2hVc2VyUmVjb3Jkcy50eXBlXHJcbiAgKTtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKGZldGNoVXNlclJlY29yZHNDaGFubmVsKTtcclxuICAgIGNvbnN0IHsgbnVtT2ZSZWNvcmRzLCBzb3J0VHlwZSB9ID0gcGF5bG9hZDtcclxuICAgIHlpZWxkIGNhbGwoZmV0Y2hVc2VyUmVjb3JkcywgbnVtT2ZSZWNvcmRzLCBzb3J0VHlwZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoVXNlclJlY29yZHMoXHJcbiAgbWF4UmVjb3JkczogbnVtYmVyLFxyXG4gIHNvcnRCeTogVXNlclJlY29yZFNvcnRUeXBlc1xyXG4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICBheGlvcy5wb3N0LFxyXG4gICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5nZXRVc2VyUmVjb3JkcyxcclxuICAgICAgeyBudW1PZlJlY29yZHM6IG1heFJlY29yZHMsIHNvcnRUeXBlOiBzb3J0QnkgfVxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIHlpZWxkIHB1dCh1c2VyUmVjb3Jkc0FjdGlvbnMuZmV0Y2hVc2VyUmVjb3Jkc1N1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQodXNlclJlY29yZHNBY3Rpb25zLmZldGNoVXNlclJlY29yZHNGYWlsdXJlKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbi8vIFRPRE86IFRoaXMgZG9lc24ndCB3b3JrIHJpZ2h0IG9uIHRoZSBkYXRhYmFzZSBzaWRlIVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBiYW5kU2NvcmVNb2RpZmljYXRpb25TYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShiYW5kQWN0aW9ucy5yZXF1ZXN0TW9kaWZ5QmFuZFNjb3JlLnR5cGUpO1xyXG4gICAgY29uc3QgeyB0YXJnZXRCYW5kSWQsIG1vZGlmeWluZ1VzZXJJZCwgbW9kaWZpY2F0aW9uVmFsdWUgfSA9IHBheWxvYWQ7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm1vZGlmaWNhdGlvbiB2YWx1ZSBpbiBzYWdhOiBcIiwgbW9kaWZpY2F0aW9uVmFsdWUpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5tb2RpZnlCYW5kLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRhcmdldEJhbmRJZCxcclxuICAgICAgICAgIG1vZGlmeWluZ1VzZXJJZCxcclxuICAgICAgICAgIG1vZGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICBpZiAobW9kaWZpY2F0aW9uVmFsdWUgPT0gMCkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIGJhbmRBY3Rpb25zLm1vZGlmeUJhbmRTY29yZVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvblZhbHVlOiAtcGF5bG9hZC51bmRvVmFsdWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHRhcmdldEJhbmRJZCxcclxuICAgICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5tb2RpZnlCYW5kU2NvcmVGYWlsdXJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmVyVXJsID1cclxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6Nzc3N1wiO1xyXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlID0gXCIvYXBpL2F1dGhlbnRpY2F0ZVwiO1xyXG5leHBvcnQgY29uc3QgcG9zdEJhbmRzID0gXCIvYXBpL2JhbmRzXCI7XHJcbmV4cG9ydCBjb25zdCBtb2RpZnlCYW5kID0gXCIvYXBpL2JhbmQvbW9kaWZ5XCI7XHJcbmV4cG9ydCBjb25zdCBuZXdCYW5kID0gXCIvYXBpL2JhbmQvbmV3XCI7XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gXCIvYXBpL2NyZWF0ZS11c2VyXCI7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VybmFtZSA9IFwiL2FwaS91c2VybmFtZXMvZ2V0XCI7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyUmVjb3JkcyA9IFwiL2FwaS91c2Vycy9nZXRcIjtcclxuZXhwb3J0IGNvbnN0IHNlc3Npb25FbmRwb2ludCA9IFwiL2FwaS9zZXNzaW9uXCI7XHJcblxyXG5cclxuY29uc3QgZ2V0VXNlclByb2ZpbGVCYXNlID0gXCIvYXBpL3VzZXItcHJvZmlsZVwiO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlclByb2ZpbGVFbmRwb2ludCA9IGdldFVzZXJQcm9maWxlQmFzZSArIFwiLzp1c2VySWRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHZXRVc2VyUHJvZmlsZVVybChcclxuICB0YXJnZXRVc2VySWQgLyo6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQqL1xyXG4pOiBzdHJpbmcge1xyXG4gIHJldHVybiBnZXRVc2VyUHJvZmlsZUJhc2UgKyBcIi9cIiArIHRhcmdldFVzZXJJZCAvKi50b0hleFN0cmluZyovO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWN0aW9uQ2hhbm5lbCwgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNoZWNrU2Vzc2lvblNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgeWllbGQgdGFrZShzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0Q2hlY2tTZXNzaW9uLnR5cGUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLmdldCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5zZXNzaW9uRW5kcG9pbnQsXHJcbiAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VySWQsIHVzZXJuYW1lLCBiYW5kc01vZGlmaWVkIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmNoZWNrU2Vzc2lvblN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBiYW5kc01vZGlmaWVkLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5jaGVja1Nlc3Npb25GYWlsdXJlKCkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmNoZWNrU2Vzc2lvbkZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHtcclxuICBCYW5kQ3JlYXRpb25TdGF0dXNlcyxcclxuICBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcyxcclxuICBCYW5kU29ydFR5cGVzLFxyXG59IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbnR5cGUgU2NvcmVNb2RpZmljYXRpb25TdGF0ZSA9IHtcclxuICBzdGF0dXM6IEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzO1xyXG4gIC8vIFRPRE86IFRoaXMgbmVlZHMgdG8gcmVmZXIgdG8gYSBiYW5kJ3MgSURcclxuICB0YXJnZXQ/OiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG59O1xyXG5cclxudHlwZSBCYW5kc1NsaWNlU3RhdGUgPSB7XHJcbiAgcGVuZGluZ0ZldGNoZXM6IG51bWJlcjtcclxuICBjcmVhdGlvblN0YXR1czogQmFuZENyZWF0aW9uU3RhdHVzZXM7XHJcbiAgaXRlbXM6IEJhbmRDbGFzc1tdO1xyXG4gIHNjb3JlTW9kaWZpY2F0aW9uU3RhdGU6IFNjb3JlTW9kaWZpY2F0aW9uU3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEJhbmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogMCxcclxuICBpdGVtczogW10sXHJcbiAgY3JlYXRpb25TdGF0dXM6IEJhbmRDcmVhdGlvblN0YXR1c2VzLk5PVF9UUllJTkcsXHJcbiAgc2NvcmVNb2RpZmljYXRpb25TdGF0ZToge1xyXG4gICAgc3RhdHVzOiBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBiYW5kc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiYmFuZHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIEJhbmQgZmV0Y2hpbmdcclxuICAgIHJlcXVlc3RGZXRjaEJhbmRzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICBtYXhCYW5kczogbnVtYmVyO1xyXG4gICAgICAgIHNvcnRCeTogQmFuZFNvcnRUeXBlcztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcysrO1xyXG4gICAgfSxcclxuICAgIGZldGNoQmFuZHNTdWNjZXNzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QmFuZENsYXNzW10+KSB7XHJcbiAgICAgIGFjdGlvbi5wYXlsb2FkLmZvckVhY2goKG5ld0JhbmQpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLml0ZW1zLnNvbWUoKGJhbmQpID0+IGJhbmQuX2lkID09IG5ld0JhbmQuX2lkKSlcclxuICAgICAgICAgIHN0YXRlLml0ZW1zLnB1c2gobmV3QmFuZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfSxcclxuICAgIGZldGNoQmFuZHNGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEJhbmQgY3JlYXRpb25cclxuICAgIHJlcXVlc3RDcmVhdGVCYW5kKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICBjcmVhdGluZ1VzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICBiYW5kTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGNyZWF0aW5nVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5jcmVhdGlvblN0YXR1cyA9IEJhbmRDcmVhdGlvblN0YXR1c2VzLkNSRUFUSU5HO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUJhbmRTdWNjZXNzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QmFuZENsYXNzPikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm9rYXkgd2hheXRzIHVwXCIpXHJcbiAgICAgIHN0YXRlLmNyZWF0aW9uU3RhdHVzID0gQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRFRDtcclxuICAgICAgc3RhdGUuaXRlbXMucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQmFuZEZhaWx1cmUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxCYW5kQ3JlYXRpb25TdGF0dXNlcz4pIHtcclxuICAgICAgc3RhdGUuY3JlYXRpb25TdGF0dXMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTW9kaWZ5IGJhbmQgc2NvcmVcclxuICAgIHJlcXVlc3RNb2RpZnlCYW5kU2NvcmUoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHRhcmdldEJhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICBtb2RpZnlpbmdVc2VySWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWU6IG51bWJlcjtcclxuICAgICAgICB1bmRvVmFsdWU/OiBudW1iZXI7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS5zdGF0dXMgPVxyXG4gICAgICAgIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLkFUVEVNUFRJTkc7XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUudGFyZ2V0ID0gYWN0aW9uLnBheWxvYWQudGFyZ2V0QmFuZElkO1xyXG4gICAgfSxcclxuICAgIG1vZGlmeUJhbmRTY29yZVN1Y2Nlc3Moc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBjb25zdCB0YXJnZXRCYW5kSW5kZXggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXgoXHJcbiAgICAgICAgKGJhbmQpID0+IGJhbmQuX2lkID09PSBhY3Rpb24ucGF5bG9hZC50YXJnZXRCYW5kSWRcclxuICAgICAgKTtcclxuICAgICAgc3RhdGUuaXRlbXNbdGFyZ2V0QmFuZEluZGV4XS5zY29yZSArPSBhY3Rpb24ucGF5bG9hZC5tb2RpZmljYXRpb25WYWx1ZTtcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS5zdGF0dXMgPVxyXG4gICAgICAgIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLlNVQ0NFU1M7XHJcbiAgICB9LFxyXG4gICAgbW9kaWZ5QmFuZFNjb3JlRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICAvLyBUT0RPOiBTaG91bGRuJ3Qgd2UgYmUgZ2V0dGluZyBhIHJlYXNvbiBmb3IgdGhlIGZhaWx1cmUgaGVyZT9cclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS5zdGF0dXMgPVxyXG4gICAgICAgIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLkZBSUxVUkU7XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBiYW5kQWN0aW9ucyA9IGJhbmRzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgYmFuZHNTbGljZS5yZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBnZXREZWZhdWx0TWlkZGxld2FyZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCBiYW5kc1JlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCBzZXNzaW9uUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgdXNlclJlY29yZHNSZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuaW1wb3J0IHVzZXJQcm9maWxlUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBzYWdhcyBmcm9tIFwiLi9zYWdhc1wiO1xyXG5cclxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG5jb25zdCBtaWRkbGV3YXJlID0gWy4uLmdldERlZmF1bHRNaWRkbGV3YXJlKHsgdGh1bms6IGZhbHNlIH0pLCBzYWdhTWlkZGxld2FyZV07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYmFuZHM6IGJhbmRzUmVkdWNlcixcclxuICBzZXNzaW9uOiBzZXNzaW9uUmVkdWNlcixcclxuICB1c2VyUmVjb3JkczogdXNlclJlY29yZHNSZWR1Y2VyLFxyXG4gIHVzZXJQcm9maWxlOiB1c2VyUHJvZmlsZVJlZHVjZXJcclxufSk7XHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiByb290UmVkdWNlcixcclxuICBtaWRkbGV3YXJlOiBtaWRkbGV3YXJlLFxyXG59KTtcclxuXHJcbmZvciAoY29uc3Qgc2FnYSBpbiBzYWdhcykge1xyXG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihzYWdhc1tzYWdhXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdGFrZSwgcHV0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHsgVXNlckNyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogdXNlckNyZWF0aW9uU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENyZWF0ZVVzZXIudHlwZSk7XHJcbiAgICBjb25zdCB7IC8qZW1haWwsKi8gdXNlcm5hbWUsIHBhc3N3b3JkLCByZXBlYXRQYXNzd29yZCB9ID0gcGF5bG9hZDtcclxuXHJcbiAgICAvLyBpZiAoIWVtYWlsSXNWYWxpZChlbWFpbCkpIHtcclxuICAgIC8vICAgeWllbGQgcHV0KFxyXG4gICAgLy8gICAgIHNlc3Npb25BY3Rpb25zLmNyZWF0ZVVzZXJGYWlsdXJlKHtcclxuICAgIC8vICAgICAgIHJlYXNvbjogVXNlckNyZWF0aW9uU3RhdHVzZXMuSU5WQUxJRF9FTUFJTCxcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgICAgaWYgKHBhc3N3b3JkICE9PSByZXBlYXRQYXNzd29yZCkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmNyZWF0ZVVzZXJGYWlsdXJlKHtcclxuICAgICAgICAgICAgcmVhc29uOiBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgICAgICBheGlvcy5wb3N0LFxyXG4gICAgICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5jcmVhdGVVc2VyLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgLy8gZW1haWwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlclN1Y2Nlc3MoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgICAgICAgICAgIHJlYXNvbjogZXJyb3IucmVzcG9uc2UuZGF0YS5yZWFzb24sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgLy8gfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW1haWxJc1ZhbGlkKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICBjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgcmV0dXJuIHJlLnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlLCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IHVzZXJQcm9maWxlQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUdldFVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaFByb2ZpbGVTYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShcclxuICAgICAgdXNlclByb2ZpbGVBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJQcm9maWxlLnR5cGVcclxuICAgICk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuICAgIGNvbnN0IHRhcmdldElkID0gcGF5bG9hZC50YXJnZXRJZDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldElkKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNyZWF0ZUdldFVzZXJQcm9maWxlVXJsKHRhcmdldElkKSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5nZXQsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwodGFyZ2V0SWQpXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgdXNlclByb2ZpbGVBY3Rpb25zLmZldGNoVXNlclByb2ZpbGVTdWNjZXNzKHtcclxuICAgICAgICAgICAgcHJvZmlsZTogcmVzcG9uc2UuZGF0YS5wcm9maWxlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dCh1c2VyUHJvZmlsZUFjdGlvbnMuZmV0Y2hVc2VyUHJvZmlsZUZhaWx1cmUoKSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB5aWVsZCBwdXQodXNlclByb2ZpbGVBY3Rpb25zLmZldGNoVXNlclByb2ZpbGVGYWlsdXJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMsIFVzZXJDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4vYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcywgU1RBVEVTIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG50eXBlIFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uID0ge1xyXG4gIHRhcmdldEJhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICB2YWx1ZTogbnVtYmVyO1xyXG59O1xyXG5cclxudHlwZSBTZXNzaW9uU2xpY2VTdGF0ZSA9IHtcclxuICBhdXRoZW50aWNhdGlvblN0YXR1czogQXV0aGVudGljYXRpb25TdGF0dXNlcztcclxuICB1c2VySWQ/OiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gIHVzZXJDcmVhdGlvblN0YXR1czogVXNlckNyZWF0aW9uU3RhdHVzZXM7XHJcbiAgYmFuZHNNb2RpZmllZDogU2Vzc2lvbkJhbmRNb2RpZmljYXRpb25bXTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU2Vzc2lvblNsaWNlU3RhdGUgPSB7XHJcbiAgYXV0aGVudGljYXRpb25TdGF0dXM6IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICB1c2VySWQ6IHVuZGVmaW5lZCxcclxuICB1c2VybmFtZTogdW5kZWZpbmVkLFxyXG4gIHVzZXJDcmVhdGlvblN0YXR1czogVXNlckNyZWF0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICBiYW5kc01vZGlmaWVkOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHNlc3Npb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInNlc3Npb25cIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIFNlc3Npb24gY2hlY2tpbmdcclxuICAgIHJlcXVlc3RDaGVja1Nlc3Npb24oc3RhdGUpIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HO1xyXG4gICAgfSxcclxuICAgIGNoZWNrU2Vzc2lvblN1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHVzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGJhbmRzTW9kaWZpZWQ6IFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uW107XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQ7XHJcbiAgICAgIHN0YXRlLnVzZXJJZCA9IGFjdGlvbi5wYXlsb2FkLnVzZXJJZDtcclxuICAgICAgc3RhdGUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZTtcclxuICAgICAgc3RhdGUuYmFuZHNNb2RpZmllZCA9IGFjdGlvbi5wYXlsb2FkLmJhbmRzTW9kaWZpZWQ7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tTZXNzaW9uRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORztcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlciBhdXRoZW50aWNhdGlvblxyXG4gICAgcmVxdWVzdEF1dGhlbnRpY2F0ZVVzZXIoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRJTkc7XHJcbiAgICB9LFxyXG4gICAgYXV0aGVudGljYXRlVXNlclN1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHVzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGJhbmRzTW9kaWZpZWQ6IFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uW107XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQ7XHJcbiAgICAgIHN0YXRlLnVzZXJJZCA9IGFjdGlvbi5wYXlsb2FkLnVzZXJJZDtcclxuICAgICAgc3RhdGUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZTtcclxuICAgICAgc3RhdGUuYmFuZHNNb2RpZmllZCA9IGFjdGlvbi5wYXlsb2FkLmJhbmRzTW9kaWZpZWQ7XHJcbiAgICB9LFxyXG4gICAgYXV0aGVudGljYXRlVXNlckZhaWx1cmUoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IGFjdGlvbi5wYXlsb2FkLnJlYXNvbjtcclxuICAgICAgLy8gVE9ETzogSXMgaXQgbmVjZXNzYXJ5IHRvIHJlc2V0IHRoaXMgdG8gbnVsbCBoZXJlP1xyXG4gICAgICBzdGF0ZS51c2VySWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFVzZXIgbG9nb3V0XHJcbiAgICByZXF1ZXN0TG9nb3V0KHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5MT0dHSU5HX09VVDtcclxuICAgIH0sXHJcbiAgICBsb2dvdXRGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5TRVJWRVJfRVJST1I7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0U3VjY2VzcyhzdGF0ZSkge1xyXG4gICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlciBjcmVhdGlvblxyXG4gICAgcmVxdWVzdENyZWF0ZVVzZXIoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIC8vIGVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgIHJlcGVhdFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUudXNlckNyZWF0aW9uU3RhdHVzID0gVXNlckNyZWF0aW9uU3RhdHVzZXMuUFJPQ0VTU0lORztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVVc2VyU3VjY2VzcyhzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS51c2VyQ3JlYXRpb25TdGF0dXMgPSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZVVzZXJGYWlsdXJlKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUudXNlckNyZWF0aW9uU3RhdHVzID0gYWN0aW9uLnBheWxvYWQucmVhc29uO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgIC8vIEJhbmQgbW9kaWZpY2F0aW9uXHJcbiAgICBbYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlU3VjY2Vzcy50eXBlXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuYmFuZHNNb2RpZmllZC5wdXNoKHtcclxuICAgICAgICB0YXJnZXRCYW5kSWQ6IGFjdGlvbi5wYXlsb2FkLnRhcmdldEJhbmRJZCxcclxuICAgICAgICB2YWx1ZTogYWN0aW9uLnBheWxvYWQubW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXNzaW9uQWN0aW9ucyA9IHNlc3Npb25TbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBzZXNzaW9uU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gXCIuLi9zdG9yZS9oaXN0b3J5XCI7XHJcbmltcG9ydCB7IEJpZ0JhbmRUYWJsZSB9IGZyb20gXCIuL0JpZ0JhbmRUYWJsZVwiO1xyXG5pbXBvcnQgeyBMYW5kaW5nIH0gZnJvbSBcIi4vTGFuZGluZ1wiO1xyXG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tIFwiLi9Mb2dpblwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIi4vTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBOZXdVc2VyRm9ybSB9IGZyb20gXCIuL05ld1VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xyXG5cclxuLy8gY29uc3QgQXV0aGVudGljYXRpb25HdWFyZCA9IChDb21wb25lbnQpID0+ICh7IG1hdGNoIH0pID0+IHtcclxuLy8gICBpZiAoXHJcbi8vICAgICBzdG9yZS5nZXRTdGF0ZSgpLnNlc3Npb24uYXV0aGVudGljYXRpb25TdGF0dXMgIT09XHJcbi8vICAgICBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuLy8gICApIHtcclxuLy8gICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz47XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiA8Q29tcG9uZW50IG1hdGNoPXttYXRjaH0gLz47XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9ICgpID0+IChcclxuICAvLyBUT0RPOiBXaGF0IGlzIHRoZSBSb3V0ZXIncyBcImhpc3RvcnlcIiBhbGwgYWJvdXQ/XHJcbiAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvYmFuZHNcIiBjb21wb25lbnQ9e0JpZ0JhbmRUYWJsZX0gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW5Gb3JtfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL25ldy11c2VyXCIgY29tcG9uZW50PXtOZXdVc2VyRm9ybX0gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0xhbmRpbmd9IC8+XHJcbiAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICBwYXRoPVwiL3VzZXJzLzp1c2VySWRcIlxyXG4gICAgICAgICAgY29tcG9uZW50PXsoeyBtYXRjaCB9KSA9PiA8VXNlclByb2ZpbGUgaWQ9e21hdGNoLnBhcmFtcy51c2VySWR9IC8+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICA8L1JvdXRlcj5cclxuKTtcclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcImRaWkhcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiaTNYcFwiOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ3JlYXRlQmFuZEZvcm0gfSBmcm9tIFwiLi9DcmVhdGVCYW5kRm9ybVwiO1xyXG5pbXBvcnQgeyBCaWdCYW5kVGFibGUgfSBmcm9tIFwiLi9CaWdCYW5kVGFibGVcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9Db250YWluZXJcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3Jkc0xpc3QgfSBmcm9tIFwiLi9Vc2VyUmVjb3Jkc0xpc3RcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgSnVtYm90cm9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSnVtYm90cm9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTGFuZGluZyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgey8qIDxKdW1ib3Ryb24+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJsYW5kaW5nVGl0bGVcIj5XaGF0IGFib3V0IGEgYmFuZCBjYWxsZWQuLi48L2gxPlxyXG4gICAgPC9KdW1ib3Ryb24+ICovfVxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgICA8Q29sIG1kPXs4fSBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgICAgIDxDcmVhdGVCYW5kRm9ybSAvPlxyXG4gICAgICAgICAgPEJpZ0JhbmRUYWJsZSAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezR9PlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+TW9zdCBOYW1lcyBDb250cmlidXRlZDwvaDU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPFVzZXJSZWNvcmRzTGlzdFxyXG4gICAgICAgICAgICAgICAgbWF4UmVjb3Jkcz17MTB9XHJcbiAgICAgICAgICAgICAgICBzb3J0VHlwZT17VXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+SGlnaGVzdCBBdmVyYWdlIFNjb3JlPC9oNT5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8VXNlclJlY29yZHNMaXN0XHJcbiAgICAgICAgICAgICAgICBtYXhSZWNvcmRzPXsxMH1cclxuICAgICAgICAgICAgICAgIHNvcnRUeXBlPXtVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfQVZFUkFHRV9TQ09SRX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGg1PkhpZ2hlc3QgU2NvcmU8L2g1PlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxVc2VyUmVjb3Jkc0xpc3RcclxuICAgICAgICAgICAgICAgIG1heFJlY29yZHM9ezEwfVxyXG4gICAgICAgICAgICAgICAgc29ydFR5cGU9e1VzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9TQ09SRX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICA8Lz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkZvcm0oKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IGF1dGhlbnRpY2F0aW9uU3RhdHVzID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2Vzc2lvbi5hdXRoZW50aWNhdGlvblN0YXR1c1xyXG4gICk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIGRpc3BhdGNoKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RBdXRoZW50aWNhdGVVc2VyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Q2FyZCBzdHlsZT17eyBtYXhXaWR0aDogXCIzNnJlbVwiIH19IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1VzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25TdGF0dXNlcy5VU0VSTkFNRV9OT1RfRk9VTkRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBOZXcgdXNlcj8gQ3JlYXRlIGFuIGFjY291bnQgPGEgaHJlZj1cIi9uZXctdXNlclwiPmhlcmU8L2E+LlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5UZXh0PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIHVzZXJuYW1lLlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuSU5WQUxJRF9QQVNTV09SRFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICBJbmNvcnJlY3QgcGFzc3dvcmQuXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HIHx8XHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIHthdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz4gUHJvY2Vzc2luZy4uLlxyXG4gICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHthdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQgJiYgKFxyXG4gICAgICAgICAgICAgIDxBbGVydCB2YXJpYW50PVwic3VjY2Vzc1wiPlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4hPC9BbGVydD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVc2VyUHJvZmlsZVVybCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIFwiL3VzZXJzL1wiICsgdXNlcklkO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4vY29tcG9uZW50cy9NYWluXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxNYWluIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXHJcbik7XHJcbiIsIi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uR3JvdXBcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CYWRnZVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RvZ2dsZUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzLCBCYW5kU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBzb3J0QW5kTGltaXRCYW5kcyB9IGZyb20gXCIuL3V0aWxpdHkvbGltaXQtc29ydC1iYW5kc1wiO1xyXG5pbXBvcnQge1xyXG4gIEJhbmRNb2RCdXR0b25Hcm91cCxcclxuICBQbGFjZWhvbGRlckJhbmRNb2RCdXR0b25Hcm91cCxcclxufSBmcm9tIFwiLi9CYW5kTW9kQnV0dG9uR3JvdXBcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlL1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4vdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9TcGlubmVyXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0QmFuZHNQZXJGZXRjaCA9IDIwO1xyXG5cclxuLy8gVE9ETzogU29tZXRoaW5nIHNob3VsZCBkaXNwbGF5IHdoZW4gd2UgaGF2ZSBubyBiYW5kcyB0byBkaXNwbGF5IVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBSb290U3RhdGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgYXBwSXNGZXRjaGluZ0JhbmRzOiBzdGF0ZS5iYW5kcy5wZW5kaW5nRmV0Y2hlcyA+IDAsXHJcbiAgICBiYW5kczogWy4uLnN0YXRlLmJhbmRzLml0ZW1zXSxcclxuICAgIHVzZXJJc0F1dGhlbnRpY2F0ZWQ6XHJcbiAgICAgIHN0YXRlLnNlc3Npb24uYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiBmYWxzZSxcclxuICAgIHVzZXJJZDogc3RhdGUuc2Vzc2lvbi51c2VySWQsXHJcbiAgICB1c2Vyc01vZGlmaWNhdGlvbnM6IHN0YXRlLnNlc3Npb24uYmFuZHNNb2RpZmllZCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgYWRkUG9pbnRzVG86IChcclxuICAgICAgdGFyZ2V0QmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkLFxyXG4gICAgICBtb2RpZmljYXRpb25WYWx1ZTogbnVtYmVyLFxyXG4gICAgICBtb2RpZnlpbmdVc2VySWQ/OiBNb25nb29zZVR5cGVzLk9iamVjdElkLFxyXG4gICAgICB1bmRvVmFsdWU/OiBudW1iZXJcclxuICAgICkgPT4ge1xyXG4gICAgICBpZiAobW9kaWZ5aW5nVXNlcklkKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICBiYW5kQWN0aW9ucy5yZXF1ZXN0TW9kaWZ5QmFuZFNjb3JlKHtcclxuICAgICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgICBtb2RpZnlpbmdVc2VySWQsXHJcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICB1bmRvVmFsdWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZXF1ZXN0RmV0Y2hCYW5kczogKG1heEJhbmRzOiBudW1iZXIsIHNvcnRCeTogQmFuZFNvcnRUeXBlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaChiYW5kQWN0aW9ucy5yZXF1ZXN0RmV0Y2hCYW5kcyh7IG1heEJhbmRzLCBzb3J0QnkgfSkpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIEJpZ0JhbmRUYWJsZVByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPjtcclxuXHJcbnR5cGUgQmlnQmFuZFRhYmxlU3RhdGUgPSB7XHJcbiAgc29ydFR5cGU6IEJhbmRTb3J0VHlwZXM7XHJcbiAgYmFuZHNQZXJGZXRjaDogbnVtYmVyO1xyXG4gIHNob3VsZEZldGNoQmFuZHM6IGJvb2xlYW47XHJcbiAgbWF4QmFuZHNEaXNwbGF5ZWQ6IG51bWJlcjtcclxufTtcclxuXHJcbmNsYXNzIFVuY29ubmVjdGVkQmlnQmFuZFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIEJpZ0JhbmRUYWJsZVByb3BzLFxyXG4gIEJpZ0JhbmRUYWJsZVN0YXRlXHJcbj4ge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgc29ydFR5cGU6IEJhbmRTb3J0VHlwZXMuTU9TVF9SRUNFTlQsXHJcbiAgICBiYW5kc1BlckZldGNoOiBkZWZhdWx0QmFuZHNQZXJGZXRjaCxcclxuICAgIHNob3VsZEZldGNoQmFuZHM6IGZhbHNlLFxyXG4gICAgbWF4QmFuZHNEaXNwbGF5ZWQ6IGRlZmF1bHRCYW5kc1BlckZldGNoLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5yZXF1ZXN0RmV0Y2hCYW5kcyh0aGlzLnN0YXRlLmJhbmRzUGVyRmV0Y2gsIHRoaXMuc3RhdGUuc29ydFR5cGUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKFxyXG4gICAgcHJldlByb3BzOiBCaWdCYW5kVGFibGVQcm9wcyxcclxuICAgIHByZXZTdGF0ZTogQmlnQmFuZFRhYmxlU3RhdGVcclxuICApIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5zdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCA+IHByZXZTdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCB8fFxyXG4gICAgICB0aGlzLnN0YXRlLnNob3VsZEZldGNoQmFuZHNcclxuICAgICkge1xyXG4gICAgICB0aGlzLnByb3BzLnJlcXVlc3RGZXRjaEJhbmRzKFxyXG4gICAgICAgIHRoaXMuc3RhdGUubWF4QmFuZHNEaXNwbGF5ZWQsXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zb3J0VHlwZVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdWxkRmV0Y2hCYW5kczogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuc29ydFR5cGUgIT09IHByZXZTdGF0ZS5zb3J0VHlwZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtYXhCYW5kc0Rpc3BsYXllZDogdGhpcy5zdGF0ZS5iYW5kc1BlckZldGNoLFxyXG4gICAgICAgIHNob3VsZEZldGNoQmFuZHM6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U29ydFR5cGUobmV3VHlwZTogQmFuZFNvcnRUeXBlcykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRUeXBlOiBuZXdUeXBlIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZE1vcmUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1heEJhbmRzRGlzcGxheWVkOiBzdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCArIHN0YXRlLmJhbmRzUGVyRmV0Y2gsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJNb2RpZmljYXRpb25Ub0JhbmQodGhpc0JhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCkge1xyXG4gICAgY29uc3QgbW9kaWZpY2F0aW9uID0gdGhpcy5wcm9wcy51c2Vyc01vZGlmaWNhdGlvbnMuZmluZChcclxuICAgICAgKG1vZGlmaWNhdGlvbikgPT4gbW9kaWZpY2F0aW9uLnRhcmdldEJhbmRJZCA9PT0gdGhpc0JhbmRJZFxyXG4gICAgKTtcclxuICAgIGlmIChtb2RpZmljYXRpb24pIHJldHVybiBtb2RpZmljYXRpb24udmFsdWU7XHJcbiAgICBlbHNlIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gVE9ETzogU2hvdWxkIHdlIGhhdmUgc29tZSBub3RpZmljYXRpb24gdGhhdCBiYW5kcyBhcmUgYmVpbmcgZmV0Y2hlZD9cclxuICAgIGNvbnN0IGRlc2lyZWRCYW5kcyA9IHNvcnRBbmRMaW1pdEJhbmRzKFxyXG4gICAgICB0aGlzLnByb3BzLmJhbmRzLFxyXG4gICAgICB0aGlzLnN0YXRlLnNvcnRUeXBlLFxyXG4gICAgICB0aGlzLnN0YXRlLm1heEJhbmRzRGlzcGxheWVkXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNvcnRSYWRpb3MgPSBbXHJcbiAgICAgIHsgdmFsdWU6IEJhbmRTb3J0VHlwZXMuQkVTVCwgbmFtZTogXCJCZXN0XCIgfSxcclxuICAgICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5XT1JTVCwgbmFtZTogXCJXb3JzdFwiIH0sXHJcbiAgICAgIHsgdmFsdWU6IEJhbmRTb3J0VHlwZXMuTU9TVF9SRUNFTlQsIG5hbWU6IFwiTW9zdCBSZWNlbnRcIiB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCB7IHVzZXJJc0F1dGhlbnRpY2F0ZWQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIHRvZ2dsZT5cclxuICAgICAgICAgICAge3NvcnRSYWRpb3MubWFwKChyYWRpbywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3JhZGlvLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInNvcnRSYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtyYWRpby52YWx1ZSA9PT0gdGhpcy5zdGF0ZS5zb3J0VHlwZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIHR5cGVvZiBlLmN1cnJlbnRUYXJnZXQgJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydFR5cGVBc051bWJlcjogbnVtYmVyID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFNvcnRUeXBlKHNvcnRUeXBlQXNOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cmFkaW8ubmFtZX1cclxuICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXBwSXNGZXRjaGluZ0JhbmRzID8gKFxyXG4gICAgICAgICAgICAgICAgPD57Z2V0RW50cnlQbGFjZWhvbGRlcnMoZGVmYXVsdEJhbmRzUGVyRmV0Y2gpfTwvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7ZGVzaXJlZEJhbmRzLm1hcCgoYmFuZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1N0cmluZyhiYW5kLl9pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFuZE1vZEJ1dHRvbkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklzQXV0aG9yaXplZD17dXNlcklzQXV0aGVudGljYXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RQZXJmb3JtZWQ9e3RoaXMuZ2V0VXNlck1vZGlmaWNhdGlvblRvQmFuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbmQuX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlCYW5kPXsobW9kVmFsdWUsIHVuZG9WYWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkUG9pbnRzVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbmQuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZG9WYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2NvcmU9e2JhbmQuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntiYW5kLnNjb3JlfTwvQmFkZ2U+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmFuZC5uYW1lfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImZvbnQtd2VpZ2h0LWxpZ2h0ZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Y3JlYXRlVXNlclByb2ZpbGVVcmwoU3RyaW5nKGJhbmQub3duZXJJZCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYW5kLm93bmVyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGJsb2NrIG9uQ2xpY2s9eygpID0+IHRoaXMubG9hZE1vcmUoKX0+XHJcbiAgICAgICAgICAgIFNob3cgbWUgbW9yZS4uLlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFbnRyeVBsYWNlaG9sZGVycyhudW1PZlBsYWNlaG9sZGVyczogbnVtYmVyKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJzOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZlBsYWNlaG9sZGVyczsgaSsrKSB7XHJcbiAgICBwbGFjZWhvbGRlcnMucHVzaChCYW5kVGFibGVFbnRyeVBsYWNlaG9sZGVyKCkpO1xyXG4gIH1cclxuICByZXR1cm4gcGxhY2Vob2xkZXJzO1xyXG59XHJcblxyXG5jb25zdCBCYW5kVGFibGVFbnRyeVBsYWNlaG9sZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8UGxhY2Vob2xkZXJCYW5kTW9kQnV0dG9uR3JvdXAgLz57XCIgXCJ9XHJcbiAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwic21cIiAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEJpZ0JhbmRUYWJsZSA9IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFVuY29ubmVjdGVkQmlnQmFuZFRhYmxlKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJSZWNvcmQgPSB7XHJcbiAgaWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRvdGFsU2NvcmU6IG51bWJlcjtcclxuICBuYW1lc0NvbnRyaWJ1dGVkOiBudW1iZXI7XHJcbiAgYXZlcmFnZVNjb3JlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIFVzZXJSZWNvcmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogbnVtYmVyO1xyXG4gIGl0ZW1zOiBVc2VyUmVjb3JkW107XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJSZWNvcmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogMCxcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUmVjb3Jkc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclJlY29yZHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHJlcXVlc3RGZXRjaFVzZXJSZWNvcmRzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICBudW1PZlJlY29yZHM6IG51bWJlcjtcclxuICAgICAgICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcysrO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclJlY29yZHNTdWNjZXNzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFVzZXJSZWNvcmRbXT5cclxuICAgICkge1xyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKChuZXdSZWNvcmQpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLml0ZW1zLnNvbWUoKHJlY29yZCkgPT4gcmVjb3JkLmlkID09IG5ld1JlY29yZC5pZCkpXHJcbiAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKG5ld1JlY29yZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclJlY29yZHNGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclJlY29yZHNBY3Rpb25zID0gdXNlclJlY29yZHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVjb3Jkc1NsaWNlLnJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlclJlY29yZHNBY3Rpb25zLFxyXG4gIFVzZXJSZWNvcmQsXHJcbn0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlL1wiO1xyXG5pbXBvcnQgeyBzb3J0QW5kTGltaXRVc2VyUmVjb3JkcyB9IGZyb20gXCIuL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHNcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQmFkZ2VcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybFwiXHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFJvb3RTdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhcHBJc0ZldGNoaW5nUmVjb3Jkczogc3RhdGUudXNlclJlY29yZHMucGVuZGluZ0ZldGNoZXMgPiAwLFxyXG4gICAgcmVjb3JkczogWy4uLnN0YXRlLnVzZXJSZWNvcmRzLml0ZW1zXSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVxdWVzdFVzZXJSZWNvcmRzOiAoXHJcbiAgICAgIG51bU9mUmVjb3JkczogbnVtYmVyLFxyXG4gICAgICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlc1xyXG4gICAgKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIHVzZXJSZWNvcmRzQWN0aW9ucy5yZXF1ZXN0RmV0Y2hVc2VyUmVjb3Jkcyh7IG51bU9mUmVjb3Jkcywgc29ydFR5cGUgfSlcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGlzdEVudHJ5QmFkZ2UocHJvcHM6IHtcclxuICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxuICByZWNvcmQ6IFVzZXJSZWNvcmQ7XHJcbn0pIHtcclxuICBzd2l0Y2ggKHByb3BzLnNvcnRUeXBlKSB7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9BVkVSQUdFX1NDT1JFOlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57cHJvcHMucmVjb3JkLmF2ZXJhZ2VTY29yZS50b0ZpeGVkKDIpfTwvQmFkZ2U+O1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfU0NPUkU6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntwcm9wcy5yZWNvcmQudG90YWxTY29yZX08L0JhZGdlPjtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEOlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57cHJvcHMucmVjb3JkLm5hbWVzQ29udHJpYnV0ZWR9PC9CYWRnZT47XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj4/PC9CYWRnZT47XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIFVzZXJSZWNvcmRzTGlzdFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPiAmIHtcclxuICBtYXhSZWNvcmRzOiBudW1iZXI7XHJcbiAgc29ydFR5cGU6IFVzZXJSZWNvcmRTb3J0VHlwZXM7XHJcbn07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZFVzZXJSZWNvcmRzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxVc2VyUmVjb3Jkc0xpc3RQcm9wcz4ge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5yZXF1ZXN0VXNlclJlY29yZHModGhpcy5wcm9wcy5tYXhSZWNvcmRzLCB0aGlzLnByb3BzLnNvcnRUeXBlKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmFwcElzRmV0Y2hpbmdSZWNvcmRzKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgdXNlciByZWNvcmRzLi4uPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlc2lyZWRSZWNvcmRzID0gc29ydEFuZExpbWl0VXNlclJlY29yZHMoXHJcbiAgICAgIHRoaXMucHJvcHMucmVjb3JkcyxcclxuICAgICAgdGhpcy5wcm9wcy5zb3J0VHlwZSxcclxuICAgICAgdGhpcy5wcm9wcy5tYXhSZWNvcmRzXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtkZXNpcmVkUmVjb3Jkcy5tYXAoKHJlY29yZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17U3RyaW5nKHJlY29yZC5pZCl9PlxyXG4gICAgICAgICAgICAgIDx0ZD57aW5kZXggKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2NyZWF0ZVVzZXJQcm9maWxlVXJsKFN0cmluZyhyZWNvcmQuaWQpKX0+e3JlY29yZC5uYW1lfTwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGlzdEVudHJ5QmFkZ2VcclxuICAgICAgICAgICAgICAgICAgc29ydFR5cGU9e3RoaXMucHJvcHMuc29ydFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclJlY29yZHNMaXN0ID0gY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVW5jb25uZWN0ZWRVc2VyUmVjb3Jkc0xpc3QpO1xyXG4iLCJleHBvcnQgeyBiYW5kQ3JlYXRpb25TYWdhIH0gZnJvbSBcIi4vYmFuZC1jcmVhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IGJhbmRTY29yZU1vZGlmaWNhdGlvblNhZ2EgfSBmcm9tIFwiLi9iYW5kLXNjb3JlLW1vZGlmaWNhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IHVzZXJBdXRoZW50aWNhdGlvblNhZ2EgfSBmcm9tIFwiLi91c2VyLWF1dGhlbnRpY2F0aW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgdXNlckNyZWF0aW9uU2FnYSB9IGZyb20gXCIuL3VzZXItY3JlYXRpb24tc2FnYVwiO1xyXG5leHBvcnQgeyB3YXRjaEZldGNoQmFuZHNTYWdhIH0gZnJvbSBcIi4vd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYVwiO1xyXG5leHBvcnQgeyB3YXRjaEZldGNoVXNlclJlY29yZHNTYWdhIH0gZnJvbSBcIi4vZmV0Y2gtdXNlci1yZWNvcmRzLXNhZ2FcIjtcclxuZXhwb3J0IHsgZmV0Y2hQcm9maWxlU2FnYSB9IGZyb20gXCIuL2ZldGNoLXVzZXItcHJvZmlsZS1zYWdhXCI7XHJcbmV4cG9ydCB7IGNoZWNrU2Vzc2lvblNhZ2EgfSBmcm9tIFwiLi9jaGVjay1zZXNzaW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgbG9nb3V0U2FnYSB9IGZyb20gXCIuL2xvZ291dC1zYWdhXCI7IiwiaW1wb3J0IHsgQmFuZFNvcnRUeXBlcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydEFuZExpbWl0QmFuZHMoXHJcbiAgYmFuZHM6IEJhbmRDbGFzc1tdLFxyXG4gIHNvcnRCeTogQmFuZFNvcnRUeXBlcyxcclxuICBsaW1pdDogbnVtYmVyXHJcbik6IEJhbmRDbGFzc1tdIHtcclxuICBsZXQgZmlsdGVyZWRCYW5kcyA9IFsuLi5iYW5kc107XHJcblxyXG4gIHN3aXRjaCAoc29ydEJ5KSB7XHJcbiAgICBjYXNlIEJhbmRTb3J0VHlwZXMuQkVTVDpcclxuICAgICAgZmlsdGVyZWRCYW5kcy5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLk1PU1RfUkVDRU5UOlxyXG4gICAgICBmaWx0ZXJlZEJhbmRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAvLyBUT0RPOiBXaGF0IGlzIGhhcHBlbmluZyBoZXJlP1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gRGF0ZS5wYXJzZShiLmNyZWF0ZWRPbikgLSBEYXRlLnBhcnNlKGEuY3JlYXRlZE9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLldPUlNUOlxyXG4gICAgICBmaWx0ZXJlZEJhbmRzLnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgLSBiLnNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGZpbHRlcmVkQmFuZHMgPSBmaWx0ZXJlZEJhbmRzLnNsaWNlKDAsIGxpbWl0KTtcclxuICByZXR1cm4gZmlsdGVyZWRCYW5kcztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9