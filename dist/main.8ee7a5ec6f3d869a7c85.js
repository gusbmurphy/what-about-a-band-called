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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/ts-loader/index.js):\nError: ENOENT: no such file or directory, open 'F:\\Web\\what-about-a-band-called\\src\\app\\components\\NewUser.tsx'");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0JhbmRNb2RCdXR0b25Hcm91cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCYW5kRm9ybUFsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zdGF0dXNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2JhbmQtY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0NyZWF0ZUJhbmRGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2xvZ291dC1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2dldC10aW1lLXNpbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItYXV0aGVudGljYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlclByb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvZmV0Y2gtdXNlci1yZWNvcmRzLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9iYW5kLXNjb3JlLW1vZGlmaWNhdGlvbi1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGF0aHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9jaGVjay1zZXNzaW9uLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvYmFuZHMtc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2ZldGNoLXVzZXItcHJvZmlsZS1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW4udHN4Iiwid2VicGFjazovLy8od2VicGFjaykvaG90IHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9sb2ckIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9MYW5kaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2NyZWF0ZS11c2VyLXByb2ZpbGUtdXJsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9CaWdCYW5kVGFibGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlclJlY29yZHNMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9u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LElBQUk7WUFDckIsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixDQUFDLENBQUM7WUFDaEQsTUFBTTtRQUNSLEtBQUssd0JBQWEsQ0FBQyxXQUFXO1lBQzVCLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztnQkFDdEIsZ0NBQWdDO2dCQUNoQyxhQUFhO2dCQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNO1FBQ1IsS0FBSyx3QkFBYSxDQUFDLEtBQUs7WUFDdEIsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixDQUFDLENBQUM7WUFDaEQsTUFBTTtRQUNSO1lBQ0UsTUFBTTtLQUNUO0lBRUQsYUFBYSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7QUEzQkQsOENBMkJDIiwiZmlsZSI6Im1haW4uOGVlN2E1ZWM2ZjNkODY5YTdjODUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RvZ2dsZUJ1dHRvbkdyb3VwXCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Ub2dnbGVCdXR0b25cIjtcclxuaW1wb3J0IHtcclxuICBCc0NhcmV0RG93bixcclxuICBCc0NhcmV0RG93bkZpbGwsXHJcbiAgQnNDYXJldFVwLFxyXG4gIEJzQ2FyZXRVcEZpbGwsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG4vLyBCYW5kTW9kQnV0dG9uR3JvdXAucHJvcFR5cGVzID0ge1xyXG4vLyAgIHVzZXJJc0F1dGhvcml6ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbi8vICAgbW9kaWZ5QmFuZDogUHJvcFR5cGVzLmZ1bmMsXHJcbi8vICAgbW9kUGVyZm9ybWVkOiBQcm9wVHlwZXMub25lT2YoWzEsIDAsIC0xXSksXHJcbi8vIH07XHJcblxyXG50eXBlIEJhbmRNb2RCdXR0b25Hcm91cFByb3BzID0ge1xyXG4gIHVzZXJJc0F1dGhvcml6ZWQ6IGJvb2xlYW47XHJcbiAgbW9kaWZ5QmFuZD86IChtb2RWYWx1ZTogbnVtYmVyLCB1bmRvVmFsdWU/OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgbW9kUGVyZm9ybWVkOiBudW1iZXI7XHJcbiAgY3VycmVudFNjb3JlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIEJhbmRNb2RCdXR0b25Hcm91cFN0YXRlID0ge1xyXG4gIG1vZFZhbHVlOiBudW1iZXI7XHJcbn07XHJcblxyXG4vLyBUT0RPOiBMb2dnaW5nIG91dCB3aWxsIHN0aWxsIHNob3cgdGhlIEJzQ2FycmV0cyBhcyAnZmlsbGVkJyBpZiB0aGUgdXNlciBtb2RpZmllZCB0aG9zZSBiYW5kc1xyXG5leHBvcnQgY2xhc3MgQmFuZE1vZEJ1dHRvbkdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIEJhbmRNb2RCdXR0b25Hcm91cFByb3BzLFxyXG4gIEJhbmRNb2RCdXR0b25Hcm91cFN0YXRlXHJcbj4ge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbW9kVmFsdWU6IHRoaXMucHJvcHMubW9kUGVyZm9ybWVkLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShcclxuICAgIHByZXZQcm9wczogQmFuZE1vZEJ1dHRvbkdyb3VwUHJvcHMsXHJcbiAgICBwcmV2U3RhdGU6IEJhbmRNb2RCdXR0b25Hcm91cFN0YXRlXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2RWYWx1ZSAhPSBwcmV2U3RhdGUubW9kVmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUubW9kVmFsdWUgPT0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGlmeUJhbmQpIHRoaXMucHJvcHMubW9kaWZ5QmFuZCgwLCBwcmV2U3RhdGUubW9kVmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGlmeUJhbmQpIHRoaXMucHJvcHMubW9kaWZ5QmFuZCh0aGlzLnN0YXRlLm1vZFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB1c2VySXNBdXRob3JpemVkLCBtb2RQZXJmb3JtZWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcclxuICAgICAgICBuYW1lPXtcIm1vZEJ1dHRvbnNcIn1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tb2RWYWx1ZX1cclxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT5cclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbClcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RWYWx1ZTogdGhpcy5zdGF0ZS5tb2RWYWx1ZSArIHZhbCB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgIG5hbWU9e1wibmVnYXRpdmVCdXR0b25cIn1cclxuICAgICAgICAgIHZhbHVlPXstMX1cclxuICAgICAgICAgIGRpc2FibGVkPXshdXNlcklzQXV0aG9yaXplZH1cclxuICAgICAgICAgIGNoZWNrZWQ9e21vZFBlcmZvcm1lZCA9PSAtMX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tb2RWYWx1ZSA9PSAtMSA/IDxCc0NhcmV0RG93bkZpbGwgLz4gOiA8QnNDYXJldERvd24gLz59XHJcbiAgICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgbmFtZT17XCJwb3NpdGl2ZUJ1dHRvblwifVxyXG4gICAgICAgICAgdmFsdWU9ezF9XHJcbiAgICAgICAgICBkaXNhYmxlZD17IXVzZXJJc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICBjaGVja2VkPXttb2RQZXJmb3JtZWQgPT0gMX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tb2RWYWx1ZSA9PSAxID8gPEJzQ2FyZXRVcEZpbGwgLz4gOiA8QnNDYXJldFVwIC8+fVxyXG4gICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQbGFjZWhvbGRlckJhbmRNb2RCdXR0b25Hcm91cCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvZ2dsZUJ1dHRvbkdyb3VwIG5hbWU9e1wicGxhY2VIb2xkZXJNb2RCdXR0b25zXCJ9PlxyXG4gICAgICA8VG9nZ2xlQnV0dG9uIGRpc2FibGVkPXt0cnVlfSB2YWx1ZT17MX0+XHJcbiAgICAgICAgPEJzQ2FyZXREb3duIC8+XHJcbiAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICA8VG9nZ2xlQnV0dG9uIGRpc2FibGVkPXt0cnVlfSB2YWx1ZT17Mn0+XHJcbiAgICAgICAgPEJzQ2FyZXRVcCAvPlxyXG4gICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUZldGNoU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJQcm9maWxlVHlwZSA9IHtcclxuICBpZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdG90YWxTY29yZTogbnVtYmVyO1xyXG4gIG5hbWVzQ29udHJpYnV0ZWQ6IG51bWJlcjtcclxuICBhdmVyYWdlU2NvcmU6IG51bWJlcjtcclxuICBiYW5kczogQmFuZENsYXNzW107XHJcbn07XHJcblxyXG50eXBlIFVzZXJQcm9maWxlU2xpY2VTdGF0ZSA9IHtcclxuICBmZXRjaFN0YXR1czogUHJvZmlsZUZldGNoU3RhdHVzZXM7XHJcbiAgcHJvZmlsZT86IFVzZXJQcm9maWxlVHlwZTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclByb2ZpbGVTbGljZVN0YXRlID0ge1xyXG4gIGZldGNoU3RhdHVzOiBQcm9maWxlRmV0Y2hTdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIHByb2ZpbGU6IHVuZGVmaW5lZCxcclxufTtcclxuXHJcbmNvbnN0IHVzZXJQcm9maWxlU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJ1c2VyUHJvZmlsZVwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgcmVxdWVzdEZldGNoVXNlclByb2ZpbGUoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHRhcmdldElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmZldGNoU3RhdHVzID0gUHJvZmlsZUZldGNoU3RhdHVzZXMuQVRURU1QVElORztcclxuICAgIH0sXHJcbiAgICBmZXRjaFVzZXJQcm9maWxlU3VjY2VzcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IHByb2ZpbGU6IFVzZXJQcm9maWxlVHlwZSB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmZldGNoU3RhdHVzID0gUHJvZmlsZUZldGNoU3RhdHVzZXMuU1VDQ0VTUztcclxuICAgICAgc3RhdGUucHJvZmlsZSA9IGFjdGlvbi5wYXlsb2FkLnByb2ZpbGU7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyUHJvZmlsZUZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuZmV0Y2hTdGF0dXMgPSBQcm9maWxlRmV0Y2hTdGF0dXNlcy5GQUlMVVJFO1xyXG4gICAgICBzdGF0ZS5wcm9maWxlID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyUHJvZmlsZUFjdGlvbnMgPSB1c2VyUHJvZmlsZVNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJQcm9maWxlU2xpY2UucmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQWxlcnQoKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cIndhcm5pbmdcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+VWggb2guLi48L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFNvbWV0aGluZyB3ZW50IHdyb25nISBXaGF0IGRpZCB5b3UgZG8hPyBEbyB5b3UgaGF2ZSBhbnkgaWRlYSBob3cgbXVjaCBJXHJcbiAgICAgICAgd29ya2VkIHRvIGdldCB0aGlzIHBsYWNlIGNsZWFuIGFuZCB0aGVuIHlvdSBzaG93IHVwIGFuZCBtZXNzIHRoZSB3aG9sZVxyXG4gICAgICAgIHRoaW5nIHVwPyBObyByZXNwZWN0Li4uXHJcbiAgICAgIDwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5vTmFtZUFsZXJ0KCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPlRoaXMgTUYgc2FpZCAmbGRxdW87ICZyZHF1bzs8L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFdobyBhcmUgeW91LCBKb2huIENhZ2U/IPCfmK3wn5it8J+YrSBKdXN0IGtpZGRpbmcsIGRvbiZhcG9zO3Qga25vdyB3aG8gdGhhdFxyXG4gICAgICAgIGlzLlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYW5kRXhpc3RzQWxlcnQoKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cIndhcm5pbmdcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+U29tZWJvZHkgYWxyZWFkeSB0aG91Z2h0IG9mIHRoYXQhPC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5cclxuICAgICAgICBHb2luZyB0byBoYXZlIHRvIHRyeSBoYXJkZXIuIE1heWJlIHJlYWQgYSB2ZXJ5IGNvbXBsaWNhdGVkIGJvb2sgYW5kIHRoZW5cclxuICAgICAgICB0aGluayBvZiBzb21lIHJlZmVyZW5jZSB0byB0aGF0LlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyTm90TG9nZ2VkSW5BbGVydCgpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwid2FybmluZ1wiPlxyXG4gICAgICA8QWxlcnQuSGVhZGluZz5Zb3UmYXBvczt2ZSBnb3R0YSBiZSBzaWduZWQgaW4hPC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5cclxuICAgICAgICBXZSBkb24mYXBvczt0IGxldCBqdXN0IGFueW9uZSBpbiBoZXJlLiBZb3UgY2Fue1wiIFwifVxyXG4gICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL25ldy11c2VyXCI+XHJcbiAgICAgICAgICA8QWxlcnQuTGluaz5tYWtlIGFuIGFjY291bnQgaGVyZTwvQWxlcnQuTGluaz5cclxuICAgICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICAgICAgLCB0aG91Z2gsIGlmIHlvdSB3YW50LlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYW5kQ3JlYXRlZEFsZXJ0KG5hbWU6IHN0cmluZyk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJzdWNjZXNzXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPiZsZHF1bzt7bmFtZX0mcmRxdW87IHN1Ym1pdHRlZCE8L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPk5vdyB0aGF0JmFwb3M7cyBmdW5ueS48L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0QW5kTGltaXRVc2VyUmVjb3JkcyhcclxuICByZWNvcmRzOiBVc2VyUmVjb3JkW10sXHJcbiAgc29ydEJ5OiBVc2VyUmVjb3JkU29ydFR5cGVzLFxyXG4gIGxpbWl0OiBudW1iZXJcclxuKTogVXNlclJlY29yZFtdIHtcclxuICBsZXQgZmlsdGVyZWRSZWNvcmRzID0gWy4uLnJlY29yZHNdO1xyXG5cclxuICBzd2l0Y2ggKHNvcnRCeSkge1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfQVZFUkFHRV9TQ09SRTpcclxuICAgICAgZmlsdGVyZWRSZWNvcmRzLnNvcnQoKGEsIGIpID0+IGIuYXZlcmFnZVNjb3JlIC0gYS5hdmVyYWdlU2NvcmUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX1NDT1JFOlxyXG4gICAgICBmaWx0ZXJlZFJlY29yZHMuc29ydCgoYSwgYikgPT4gYi50b3RhbFNjb3JlIC0gYS50b3RhbFNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuTU9TVF9OQU1FU19DT05UUklCVVRFRDpcclxuICAgICAgZmlsdGVyZWRSZWNvcmRzLnNvcnQoKGEsIGIpID0+IGIubmFtZXNDb250cmlidXRlZCAtIGEubmFtZXNDb250cmlidXRlZCk7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJlZFJlY29yZHMgPSBmaWx0ZXJlZFJlY29yZHMuc2xpY2UoMCwgbGltaXQpO1xyXG4gIHJldHVybiBmaWx0ZXJlZFJlY29yZHM7XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gVXNlclJlY29yZFNvcnRUeXBlcyB7XHJcbiAgSElHSEVTVF9TQ09SRSxcclxuICBISUdIRVNUX0FWRVJBR0VfU0NPUkUsXHJcbiAgTU9TVF9OQU1FU19DT05UUklCVVRFRFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYW5kQ3JlYXRpb25TdGF0dXNlcyB7XHJcbiAgQ1JFQVRJTkcsXHJcbiAgQ1JFQVRFRCxcclxuICBFUlJPUixcclxuICBCQU5EX0VYSVNUUyxcclxuICBOT1RfVFJZSU5HLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYW5kU29ydFR5cGVzIHtcclxuICBCRVNULFxyXG4gIFdPUlNULFxyXG4gIE1PU1RfUkVDRU5ULFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcyB7XHJcbiAgQVRURU1QVElORyxcclxuICBTVUNDRVNTLFxyXG4gIEZBSUxVUkUsXHJcbiAgTk9UX1RSWUlORyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUHJvZmlsZUZldGNoU3RhdHVzZXMge1xyXG4gIEFUVEVNUFRJTkcsXHJcbiAgU1VDQ0VTUyxcclxuICBGQUlMVVJFLFxyXG4gIE5PVF9UUllJTkdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXV0aGVudGljYXRpb25TdGF0dXNlcyB7XHJcbiAgQVVUSEVOVElDQVRJTkcsXHJcbiAgQVVUSEVOVElDQVRFRCxcclxuICBOT1RfQVVUSEVOVElDQVRFRCxcclxuICBOT1RfVFJZSU5HLFxyXG4gIFNFUlZFUl9FUlJPUixcclxuICBVU0VSTkFNRV9OT1RfRk9VTkQsXHJcbiAgSU5WQUxJRF9QQVNTV09SRCxcclxuICBMT0dHSU5HX09VVCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVXNlckNyZWF0aW9uU3RhdHVzZXMge1xyXG4gIFBST0NFU1NJTkcsXHJcbiAgUEFTU1dPUkRTX0RPTlRfTUFUQ0gsXHJcbiAgVVNFUk5BTUVfVEFLRU4sXHJcbiAgTk9UX1RSWUlORyxcclxuICBTRVJWRVJfRVJST1IsXHJcbiAgU1VDQ0VTUyxcclxuICBFTVBUWV9GSUVMRFMsXHJcbiAgSU5WQUxJRF9FTUFJTCxcclxuICBFTUFJTF9UQUtFTixcclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlLCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgTmV3QmFuZFJlcXVlc3RCb2R5IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9yb3V0ZS1oYW5kbGVycy9iYW5kc1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgQmFuZENyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogYmFuZENyZWF0aW9uU2FnYSgpIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKGJhbmRBY3Rpb25zLnJlcXVlc3RDcmVhdGVCYW5kLnR5cGUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJTYWdhIHBheWxvYWQ6IFwiLCBwYXlsb2FkKTtcclxuICAgIGNvbnN0IHsgY3JlYXRpbmdVc2VySWQsIGJhbmROYW1lLCBjcmVhdGluZ1VzZXJuYW1lIH0gPSBwYXlsb2FkO1xyXG4gICAgLy8gbGV0IG5ld0JhbmQgPSB7XHJcbiAgICAvLyAgIGNyZWF0aW5nVXNlcklkLFxyXG4gICAgLy8gICBiYW5kTmFtZSxcclxuICAgIC8vIH07XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keTogTmV3QmFuZFJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBiYW5kTmFtZSxcclxuICAgICAgb3duZXJJZDogY3JlYXRpbmdVc2VySWQsXHJcbiAgICAgIG93bmVyTmFtZTogY3JlYXRpbmdVc2VybmFtZSxcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkhFcmUhXCIpXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5wb3N0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLm5ld0JhbmQsXHJcbiAgICAgICAgcmVxdWVzdEJvZHlcclxuICAgICAgKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJyZXNwb25zZSBpbiBiYW5kY3JlYXRpb25zYWdhOiBcIiwgcmVzcG9uc2UpXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3cgaW0gaGVyZSFcIilcclxuICAgICAgICBjb25zdCBuZXdCYW5kOiBCYW5kQ2xhc3MgPSByZXNwb25zZS5kYXRhLm5ld0JhbmQ7XHJcbiAgICAgICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmNyZWF0ZUJhbmRTdWNjZXNzKG5ld0JhbmQpKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBsZXQgeyBfaWQsIGJhbmROYW1lLCBjcmVhdGluZ1VzZXJJZCwgc2NvcmUgfSA9IG5ld0JhbmQ7XHJcbiAgICAgIC8vIGxldCBuZXdCYW5kOiBCYW5kQ2xhc3MgPSB7XHJcbiAgICAgIC8vICAgbmFtZTogYmFuZE5hbWUsXHJcbiAgICAgIC8vICAgb3duZXJOYW1lOiBjcmVhdGluZ1VzZXJuYW1lLFxyXG4gICAgICAvLyAgIG93bmVySWQ6IGNyZWF0aW5nVXNlcklkLFxyXG4gICAgICAvLyAgIHNjb3JlOiAwLFxyXG4gICAgICAvLyAgIGNyZWF0ZWRPbixcclxuICAgICAgLy8gICBfaWQ6IG5ld0JhbmRJZCxcclxuICAgICAgLy8gfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHJlYXNvbjogQmFuZENyZWF0aW9uU3RhdHVzZXMgPSBlcnJvci5yZXNwb25zZS5kYXRhLnJlYXNvbjtcclxuICAgICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmNyZWF0ZUJhbmRGYWlsdXJlKHJlYXNvbikpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcywgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgTGlua0NvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHsgYXV0aGVudGljYXRpb25TdGF0dXMsIHVzZXJuYW1lIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICBkaXNwYXRjaChzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0TG9nb3V0KCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tTZXNzaW9uKCkge1xyXG4gICAgZGlzcGF0Y2goc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENoZWNrU2Vzc2lvbigpKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HKVxyXG4gICAgICBjaGVja1Nlc3Npb24oKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9cIj5cclxuICAgICAgICA8TmF2YmFyLkJyYW5kPndhYmFiYz88L05hdmJhci5CcmFuZD5cclxuICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICB7YXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TmF2Lkl0ZW0+U2lnbmVkIGluIGFzIHt1c2VybmFtZX08L05hdi5JdGVtPlxyXG4gICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfT5Mb2dvdXQ8L05hdi5MaW5rPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICA8TmF2Lkxpbms+TG9naW48L05hdi5MaW5rPlxyXG4gICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbmV3LXVzZXJcIj5cclxuICAgICAgICAgICAgPE5hdi5MaW5rPkNyZWF0ZSBBY2NvdW50PC9OYXYuTGluaz5cclxuICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvTmF2YmFyPlxyXG4gICk7XHJcbn0iLCIvLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRGlzcGF0Y2gsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcywgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXBcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCYW5kQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXJcIjtcclxuaW1wb3J0IHtcclxuICBCYW5kQ3JlYXRlZEFsZXJ0LFxyXG4gIEJhbmRFeGlzdHNBbGVydCxcclxuICBFcnJvckFsZXJ0LFxyXG4gIE5vTmFtZUFsZXJ0LFxyXG4gIFVzZXJOb3RMb2dnZWRJbkFsZXJ0LFxyXG59IGZyb20gXCIuL0NyZWF0ZUJhbmRGb3JtQWxlcnRzXCI7XHJcblxyXG5lbnVtIENyZWF0aW9uQWxlcnQge1xyXG4gIEVycm9yLFxyXG4gIE5vTmFtZSxcclxuICBCYW5kRXhpc3RzLFxyXG4gIEJhbmRDcmVhdGVkLFxyXG4gIE5vdExvZ2dlZEluLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQmFuZEZvcm0oKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHtcclxuICAgIHNlc3Npb246IHsgYXV0aGVudGljYXRpb25TdGF0dXMsIHVzZXJJZCwgdXNlcm5hbWUgfSxcclxuICAgIGJhbmRzOiB7IGNyZWF0aW9uU3RhdHVzOiBiYW5kQ3JlYXRpb25TdGF0dXMgfSxcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlKTtcclxuICBjb25zdCBbYmFuZE5hbWUsIHNldEJhbmROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjcmVhdGVkTmFtZSwgc2V0Q3JlYXRlZE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZTxDcmVhdGlvbkFsZXJ0IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGJhbmRDcmVhdGlvblN0YXR1cykge1xyXG4gICAgICBjYXNlIEJhbmRDcmVhdGlvblN0YXR1c2VzLkJBTkRfRVhJU1RTOlxyXG4gICAgICAgIHNldEFsZXJ0KENyZWF0aW9uQWxlcnQuQmFuZEV4aXN0cyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjYXNlIEJhbmRDcmVhdGlvblN0YXR1c2VzLkVSUk9SOlxyXG4gICAgICAgIHNldEFsZXJ0KENyZWF0aW9uQWxlcnQuRXJyb3IpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY2FzZSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVEVEOlxyXG4gICAgICAgIHNldENyZWF0ZWROYW1lKGJhbmROYW1lKTtcclxuICAgICAgICBzZXRCYW5kTmFtZShcIlwiKTtcclxuICAgICAgICBzZXRBbGVydChDcmVhdGlvbkFsZXJ0LkJhbmRDcmVhdGVkKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfSwgW2JhbmRDcmVhdGlvblN0YXR1c10pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICBpZiAoYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEKSB7XHJcbiAgICAgIGlmIChiYW5kTmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5Ob05hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgYmFuZEFjdGlvbnMucmVxdWVzdENyZWF0ZUJhbmQoe1xyXG4gICAgICAgICAgICBjcmVhdGluZ1VzZXJJZDogdXNlcklkISxcclxuICAgICAgICAgICAgYmFuZE5hbWUsXHJcbiAgICAgICAgICAgIGNyZWF0aW5nVXNlcm5hbWU6IHVzZXJuYW1lISxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5Ob3RMb2dnZWRJbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBEaXNwbGF5QWxlcnQoe1xyXG4gICAgYWxlcnQsXHJcbiAgfToge1xyXG4gICAgYWxlcnQ6IENyZWF0aW9uQWxlcnQgfCB1bmRlZmluZWQ7XHJcbiAgfSk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XHJcbiAgICBzd2l0Y2ggKGFsZXJ0KSB7XHJcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuQmFuZENyZWF0ZWQ6XHJcbiAgICAgICAgcmV0dXJuIEJhbmRDcmVhdGVkQWxlcnQoY3JlYXRlZE5hbWUpO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuQmFuZEV4aXN0czpcclxuICAgICAgICByZXR1cm4gQmFuZEV4aXN0c0FsZXJ0KCk7XHJcbiAgICAgIGNhc2UgQ3JlYXRpb25BbGVydC5FcnJvcjpcclxuICAgICAgICByZXR1cm4gRXJyb3JBbGVydCgpO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuTm9OYW1lOlxyXG4gICAgICAgIHJldHVybiBOb05hbWVBbGVydCgpO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuTm90TG9nZ2VkSW46XHJcbiAgICAgICAgcmV0dXJuIFVzZXJOb3RMb2dnZWRJbkFsZXJ0KCk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVOYW1lQ2hhbmdlKGUpIHtcclxuICAgIHNldEJhbmROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICA8SW5wdXRHcm91cCBzaXplPVwibGdcIj5cclxuICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhYm91dCBhIGJhbmQgY2FsbGVkLi4uXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlTmFtZUNoYW5nZShlKX1cclxuICAgICAgICAgIHZhbHVlPXtiYW5kTmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgIHtiYW5kQ3JlYXRpb25TdGF0dXMgPT0gQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRJTkcgPyAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICA8U3Bpbm5lclxyXG4gICAgICAgICAgICAgICAgYXM9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImJvcmRlclwiXHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdCgpfT5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvSW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgPERpc3BsYXlBbGVydCBhbGVydD17YWxlcnR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGxvZ291dFNhZ2EoKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdExvZ291dC50eXBlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MuZGVsZXRlLFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLnNlc3Npb25FbmRwb2ludCwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX1cclxuICAgICAgKTtcclxuICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmxvZ291dFN1Y2Nlc3MoKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmxvZ291dEZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiY29uc3QgbXNJbk1pbnV0ZSA9IDYwMDAwO1xyXG5jb25zdCBtc0luSG91ciA9IG1zSW5NaW51dGUgKiA2MDtcclxuY29uc3QgbXNJbkRheSA9IG1zSW5Ib3VyICogMjQ7XHJcbmNvbnN0IG1zSW5ZZWFyID0gbXNJbkRheSAqIDM2NTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lU2luY2UoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgY29uc3QgZWxhcHNlZFRpbWUgPSBEYXRlLm5vdygpIC0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJbk1pbnV0ZSkge1xyXG4gICAgcmV0dXJuIFwiMW1cIjtcclxuICB9XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJbkhvdXIpIHtcclxuICAgIGNvbnN0IG51bU9mTWludXRlcyA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyBtc0luTWludXRlKTtcclxuICAgIHJldHVybiBgJHtudW1PZk1pbnV0ZXN9bWA7XHJcbiAgfVxyXG4gIGlmIChlbGFwc2VkVGltZSA8IG1zSW5EYXkpIHtcclxuICAgIGNvbnN0IG51bU9mSG91cnMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJbkhvdXIpO1xyXG4gICAgY29uc3QgbnVtT2ZNaW51dGVzID0gTWF0aC5mbG9vcigoZWxhcHNlZFRpbWUgJSBtc0luSG91cikgLyBtc0luTWludXRlKTtcclxuICAgIGxldCBzdHJpbmcgPSBgJHtudW1PZkhvdXJzfWhgO1xyXG4gICAgaWYgKG51bU9mTWludXRlcyA+IDApIHN0cmluZyArPSBgICR7bnVtT2ZNaW51dGVzfW1gO1xyXG4gICAgcmV0dXJuIHN0cmluZztcclxuICB9XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJblllYXIpIHtcclxuICAgIGNvbnN0IG51bU9mRGF5cyA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyBtc0luRGF5KTtcclxuICAgIHJldHVybiBgJHtudW1PZkRheXN9ZGA7XHJcbiAgfVxyXG4gIGNvbnN0IG51bU9mWWVhcnMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJblllYXIpO1xyXG4gIGNvbnN0IG51bU9mRGF5cyA9IE1hdGguZmxvb3IoKGVsYXBzZWRUaW1lICUgbXNJblllYXIpIC8gbXNJbkRheSk7XHJcbiAgbGV0IHN0cmluZyA9IGAke251bU9mWWVhcnN9eWA7XHJcbiAgaWYgKG51bU9mRGF5cyA+IDApIHN0cmluZyArPSBgICR7bnVtT2ZEYXlzfWRgO1xyXG4gIHJldHVybiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25DaGFubmVsLCBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogd2F0Y2hGZXRjaEJhbmRzU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIGNvbnN0IGZldGNoQmFuZHNDaGFubmVsID0geWllbGQgYWN0aW9uQ2hhbm5lbChcclxuICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RGZXRjaEJhbmRzLnR5cGVcclxuICApO1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoZmV0Y2hCYW5kc0NoYW5uZWwpO1xyXG4gICAgY29uc3QgeyBtYXhCYW5kcywgc29ydEJ5IH0gPSBwYXlsb2FkO1xyXG4gICAgeWllbGQgY2FsbChmZXRjaEJhbmRzLCBtYXhCYW5kcywgc29ydEJ5KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZmV0Y2hCYW5kcyhtYXhCYW5kcywgc29ydEJ5KSB7XHJcbiAgbGV0IHJlc3BvbnNlO1xyXG4gIHRyeSB7XHJcbiAgICByZXNwb25zZSA9IHlpZWxkIGNhbGwoYXhpb3MucG9zdCwgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMucG9zdEJhbmRzLCB7XHJcbiAgICAgIG1heEJhbmRzLFxyXG4gICAgICBzb3J0QnksXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5mZXRjaEJhbmRzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5mZXRjaEJhbmRzRmFpbHVyZSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogdXNlckF1dGhlbnRpY2F0aW9uU2FnYSgpIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RBdXRoZW50aWNhdGVVc2VyLnR5cGUpO1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHBheWxvYWQ7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5hdXRoZW50aWNhdGUsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyB1c2VySWQsIGJhbmRzTW9kaWZpZWQgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFuZHNNb2RpZmllZCBpbiB1c2VyQXV0aGVudGljYXRpb25TYWdhOiBcIiwgYmFuZHNNb2RpZmllZCk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuYXV0aGVudGljYXRlVXNlclN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBiYW5kc01vZGlmaWVkLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmF1dGhlbnRpY2F0ZVVzZXJGYWlsdXJlKHtcclxuICAgICAgICAgICAgcmVhc29uOiBlcnIucmVzcG9uc2UuZGF0YS5yZWFzb24sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQge1xyXG4gIFVzZXJQcm9maWxlVHlwZSxcclxuICB1c2VyUHJvZmlsZUFjdGlvbnMsXHJcbn0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9Db250YWluZXJcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9lc20vVGFibGVcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL0JhZGdlXCI7XHJcbmltcG9ydCB7IGdldFRpbWVTaW5jZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxpdHkvZ2V0LXRpbWUtc2luY2VcIjtcclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogUm9vdFN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZldGNoU3RhdHVzOiBzdGF0ZS51c2VyUHJvZmlsZS5mZXRjaFN0YXR1cyxcclxuICAgIHByb2ZpbGU6IHN0YXRlLnVzZXJQcm9maWxlLnByb2ZpbGUsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcXVlc3RGZXRjaFByb2ZpbGU6ICh0YXJnZXRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh1c2VyUHJvZmlsZUFjdGlvbnMucmVxdWVzdEZldGNoVXNlclByb2ZpbGUoeyB0YXJnZXRJZCB9KSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHJlZHV4Q29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbnR5cGUgVXNlclByb2ZpbGVQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiByZWR1eENvbm5lY3Rvcj4gJiB7XHJcbiAgaWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbn07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZFVzZXJQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFVzZXJQcm9maWxlUHJvcHM+IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMucmVxdWVzdEZldGNoUHJvZmlsZSh0aGlzLnByb3BzLmlkKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcHJvZmlsZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChwcm9maWxlKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGg1Pntwcm9maWxlLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBzY29yZTogPGI+e3Byb2ZpbGUudG90YWxTY29yZX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF2ZXJhZ2Ugc2NvcmU6IDxiPntwcm9maWxlLmF2ZXJhZ2VTY29yZS50b0ZpeGVkKDIpfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZXMgY29udHJpYnV0ZWQ6IDxiPntwcm9maWxlLm5hbWVzQ29udHJpYnV0ZWR9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgc2l6ZT1cInNtXCIgc3RyaXBlZCBib3JkZXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlLmJhbmRzLm1hcCgoYmFuZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17U3RyaW5nKGJhbmQuX2lkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntiYW5kLnNjb3JlfTwvQmFkZ2U+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPntiYW5kLm5hbWV9PC9iPiAoY3JlYXRlZCB7Z2V0VGltZVNpbmNlKG5ldyBEYXRlKGJhbmQuY3JlYXRlZE9uKSl9IGFnbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUHJvZmlsZSA9IHJlZHV4Q29ubmVjdG9yKFVuY29ubmVjdGVkVXNlclByb2ZpbGUpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFjdGlvbkNoYW5uZWwsIGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyB1c2VyUmVjb3Jkc0FjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRzUmVxdWVzdEJvZHkgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3JvdXRlLWhhbmRsZXJzL3VzZXItcmVjb3Jkc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogd2F0Y2hGZXRjaFVzZXJSZWNvcmRzU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIGNvbnN0IGZldGNoVXNlclJlY29yZHNDaGFubmVsID0geWllbGQgYWN0aW9uQ2hhbm5lbChcclxuICAgIHVzZXJSZWNvcmRzQWN0aW9ucy5yZXF1ZXN0RmV0Y2hVc2VyUmVjb3Jkcy50eXBlXHJcbiAgKTtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKGZldGNoVXNlclJlY29yZHNDaGFubmVsKTtcclxuICAgIGNvbnN0IHsgbnVtT2ZSZWNvcmRzLCBzb3J0VHlwZSB9ID0gcGF5bG9hZDtcclxuICAgIHlpZWxkIGNhbGwoZmV0Y2hVc2VyUmVjb3JkcywgbnVtT2ZSZWNvcmRzLCBzb3J0VHlwZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoVXNlclJlY29yZHMoXHJcbiAgbWF4UmVjb3JkczogbnVtYmVyLFxyXG4gIHNvcnRCeTogVXNlclJlY29yZFNvcnRUeXBlc1xyXG4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICBheGlvcy5wb3N0LFxyXG4gICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5nZXRVc2VyUmVjb3JkcyxcclxuICAgICAgeyBudW1PZlJlY29yZHM6IG1heFJlY29yZHMsIHNvcnRUeXBlOiBzb3J0QnkgfVxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIHlpZWxkIHB1dCh1c2VyUmVjb3Jkc0FjdGlvbnMuZmV0Y2hVc2VyUmVjb3Jkc1N1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQodXNlclJlY29yZHNBY3Rpb25zLmZldGNoVXNlclJlY29yZHNGYWlsdXJlKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbi8vIFRPRE86IFRoaXMgZG9lc24ndCB3b3JrIHJpZ2h0IG9uIHRoZSBkYXRhYmFzZSBzaWRlIVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBiYW5kU2NvcmVNb2RpZmljYXRpb25TYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShiYW5kQWN0aW9ucy5yZXF1ZXN0TW9kaWZ5QmFuZFNjb3JlLnR5cGUpO1xyXG4gICAgY29uc3QgeyB0YXJnZXRCYW5kSWQsIG1vZGlmeWluZ1VzZXJJZCwgbW9kaWZpY2F0aW9uVmFsdWUgfSA9IHBheWxvYWQ7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm1vZGlmaWNhdGlvbiB2YWx1ZSBpbiBzYWdhOiBcIiwgbW9kaWZpY2F0aW9uVmFsdWUpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5tb2RpZnlCYW5kLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRhcmdldEJhbmRJZCxcclxuICAgICAgICAgIG1vZGlmeWluZ1VzZXJJZCxcclxuICAgICAgICAgIG1vZGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICBpZiAobW9kaWZpY2F0aW9uVmFsdWUgPT0gMCkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIGJhbmRBY3Rpb25zLm1vZGlmeUJhbmRTY29yZVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvblZhbHVlOiAtcGF5bG9hZC51bmRvVmFsdWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHRhcmdldEJhbmRJZCxcclxuICAgICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5tb2RpZnlCYW5kU2NvcmVGYWlsdXJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmVyVXJsID1cclxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6Nzc3N1wiO1xyXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlID0gXCIvYXBpL2F1dGhlbnRpY2F0ZVwiO1xyXG5leHBvcnQgY29uc3QgcG9zdEJhbmRzID0gXCIvYXBpL2JhbmRzXCI7XHJcbmV4cG9ydCBjb25zdCBtb2RpZnlCYW5kID0gXCIvYXBpL2JhbmQvbW9kaWZ5XCI7XHJcbmV4cG9ydCBjb25zdCBuZXdCYW5kID0gXCIvYXBpL2JhbmQvbmV3XCI7XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gXCIvYXBpL2NyZWF0ZS11c2VyXCI7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VybmFtZSA9IFwiL2FwaS91c2VybmFtZXMvZ2V0XCI7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyUmVjb3JkcyA9IFwiL2FwaS91c2Vycy9nZXRcIjtcclxuZXhwb3J0IGNvbnN0IHNlc3Npb25FbmRwb2ludCA9IFwiL2FwaS9zZXNzaW9uXCI7XHJcblxyXG5cclxuY29uc3QgZ2V0VXNlclByb2ZpbGVCYXNlID0gXCIvYXBpL3VzZXItcHJvZmlsZVwiO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlclByb2ZpbGVFbmRwb2ludCA9IGdldFVzZXJQcm9maWxlQmFzZSArIFwiLzp1c2VySWRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHZXRVc2VyUHJvZmlsZVVybChcclxuICB0YXJnZXRVc2VySWQgLyo6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQqL1xyXG4pOiBzdHJpbmcge1xyXG4gIHJldHVybiBnZXRVc2VyUHJvZmlsZUJhc2UgKyBcIi9cIiArIHRhcmdldFVzZXJJZCAvKi50b0hleFN0cmluZyovO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWN0aW9uQ2hhbm5lbCwgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNoZWNrU2Vzc2lvblNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgeWllbGQgdGFrZShzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0Q2hlY2tTZXNzaW9uLnR5cGUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLmdldCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5zZXNzaW9uRW5kcG9pbnQsXHJcbiAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VySWQsIHVzZXJuYW1lLCBiYW5kc01vZGlmaWVkIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmNoZWNrU2Vzc2lvblN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBiYW5kc01vZGlmaWVkLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5jaGVja1Nlc3Npb25GYWlsdXJlKCkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmNoZWNrU2Vzc2lvbkZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHtcclxuICBCYW5kQ3JlYXRpb25TdGF0dXNlcyxcclxuICBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcyxcclxuICBCYW5kU29ydFR5cGVzLFxyXG59IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbnR5cGUgU2NvcmVNb2RpZmljYXRpb25TdGF0ZSA9IHtcclxuICBzdGF0dXM6IEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzO1xyXG4gIC8vIFRPRE86IFRoaXMgbmVlZHMgdG8gcmVmZXIgdG8gYSBiYW5kJ3MgSURcclxuICB0YXJnZXQ/OiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG59O1xyXG5cclxudHlwZSBCYW5kc1NsaWNlU3RhdGUgPSB7XHJcbiAgcGVuZGluZ0ZldGNoZXM6IG51bWJlcjtcclxuICBjcmVhdGlvblN0YXR1czogQmFuZENyZWF0aW9uU3RhdHVzZXM7XHJcbiAgaXRlbXM6IEJhbmRDbGFzc1tdO1xyXG4gIHNjb3JlTW9kaWZpY2F0aW9uU3RhdGU6IFNjb3JlTW9kaWZpY2F0aW9uU3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEJhbmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogMCxcclxuICBpdGVtczogW10sXHJcbiAgY3JlYXRpb25TdGF0dXM6IEJhbmRDcmVhdGlvblN0YXR1c2VzLk5PVF9UUllJTkcsXHJcbiAgc2NvcmVNb2RpZmljYXRpb25TdGF0ZToge1xyXG4gICAgc3RhdHVzOiBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBiYW5kc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiYmFuZHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIEJhbmQgZmV0Y2hpbmdcclxuICAgIHJlcXVlc3RGZXRjaEJhbmRzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICBtYXhCYW5kczogbnVtYmVyO1xyXG4gICAgICAgIHNvcnRCeTogQmFuZFNvcnRUeXBlcztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcysrO1xyXG4gICAgfSxcclxuICAgIGZldGNoQmFuZHNTdWNjZXNzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QmFuZENsYXNzW10+KSB7XHJcbiAgICAgIGFjdGlvbi5wYXlsb2FkLmZvckVhY2goKG5ld0JhbmQpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLml0ZW1zLnNvbWUoKGJhbmQpID0+IGJhbmQuX2lkID09IG5ld0JhbmQuX2lkKSlcclxuICAgICAgICAgIHN0YXRlLml0ZW1zLnB1c2gobmV3QmFuZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfSxcclxuICAgIGZldGNoQmFuZHNGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEJhbmQgY3JlYXRpb25cclxuICAgIHJlcXVlc3RDcmVhdGVCYW5kKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICBjcmVhdGluZ1VzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICBiYW5kTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGNyZWF0aW5nVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5jcmVhdGlvblN0YXR1cyA9IEJhbmRDcmVhdGlvblN0YXR1c2VzLkNSRUFUSU5HO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUJhbmRTdWNjZXNzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QmFuZENsYXNzPikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm9rYXkgd2hheXRzIHVwXCIpXHJcbiAgICAgIHN0YXRlLmNyZWF0aW9uU3RhdHVzID0gQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRFRDtcclxuICAgICAgc3RhdGUuaXRlbXMucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQmFuZEZhaWx1cmUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxCYW5kQ3JlYXRpb25TdGF0dXNlcz4pIHtcclxuICAgICAgc3RhdGUuY3JlYXRpb25TdGF0dXMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTW9kaWZ5IGJhbmQgc2NvcmVcclxuICAgIHJlcXVlc3RNb2RpZnlCYW5kU2NvcmUoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHRhcmdldEJhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICBtb2RpZnlpbmdVc2VySWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWU6IG51bWJlcjtcclxuICAgICAgICB1bmRvVmFsdWU/OiBudW1iZXI7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS5zdGF0dXMgPVxyXG4gICAgICAgIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLkFUVEVNUFRJTkc7XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUudGFyZ2V0ID0gYWN0aW9uLnBheWxvYWQudGFyZ2V0QmFuZElkO1xyXG4gICAgfSxcclxuICAgIG1vZGlmeUJhbmRTY29yZVN1Y2Nlc3Moc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBjb25zdCB0YXJnZXRCYW5kSW5kZXggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXgoXHJcbiAgICAgICAgKGJhbmQpID0+IGJhbmQuX2lkID09PSBhY3Rpb24ucGF5bG9hZC50YXJnZXRCYW5kSWRcclxuICAgICAgKTtcclxuICAgICAgc3RhdGUuaXRlbXNbdGFyZ2V0QmFuZEluZGV4XS5zY29yZSArPSBhY3Rpb24ucGF5bG9hZC5tb2RpZmljYXRpb25WYWx1ZTtcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS5zdGF0dXMgPVxyXG4gICAgICAgIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLlNVQ0NFU1M7XHJcbiAgICB9LFxyXG4gICAgbW9kaWZ5QmFuZFNjb3JlRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICAvLyBUT0RPOiBTaG91bGRuJ3Qgd2UgYmUgZ2V0dGluZyBhIHJlYXNvbiBmb3IgdGhlIGZhaWx1cmUgaGVyZT9cclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS5zdGF0dXMgPVxyXG4gICAgICAgIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLkZBSUxVUkU7XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBiYW5kQWN0aW9ucyA9IGJhbmRzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgYmFuZHNTbGljZS5yZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBnZXREZWZhdWx0TWlkZGxld2FyZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCBiYW5kc1JlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCBzZXNzaW9uUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgdXNlclJlY29yZHNSZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuaW1wb3J0IHVzZXJQcm9maWxlUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBzYWdhcyBmcm9tIFwiLi9zYWdhc1wiO1xyXG5cclxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG5jb25zdCBtaWRkbGV3YXJlID0gWy4uLmdldERlZmF1bHRNaWRkbGV3YXJlKHsgdGh1bms6IGZhbHNlIH0pLCBzYWdhTWlkZGxld2FyZV07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYmFuZHM6IGJhbmRzUmVkdWNlcixcclxuICBzZXNzaW9uOiBzZXNzaW9uUmVkdWNlcixcclxuICB1c2VyUmVjb3JkczogdXNlclJlY29yZHNSZWR1Y2VyLFxyXG4gIHVzZXJQcm9maWxlOiB1c2VyUHJvZmlsZVJlZHVjZXJcclxufSk7XHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiByb290UmVkdWNlcixcclxuICBtaWRkbGV3YXJlOiBtaWRkbGV3YXJlLFxyXG59KTtcclxuXHJcbmZvciAoY29uc3Qgc2FnYSBpbiBzYWdhcykge1xyXG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihzYWdhc1tzYWdhXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdGFrZSwgcHV0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHsgVXNlckNyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogdXNlckNyZWF0aW9uU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENyZWF0ZVVzZXIudHlwZSk7XHJcbiAgICBjb25zdCB7IC8qZW1haWwsKi8gdXNlcm5hbWUsIHBhc3N3b3JkLCByZXBlYXRQYXNzd29yZCB9ID0gcGF5bG9hZDtcclxuXHJcbiAgICAvLyBpZiAoIWVtYWlsSXNWYWxpZChlbWFpbCkpIHtcclxuICAgIC8vICAgeWllbGQgcHV0KFxyXG4gICAgLy8gICAgIHNlc3Npb25BY3Rpb25zLmNyZWF0ZVVzZXJGYWlsdXJlKHtcclxuICAgIC8vICAgICAgIHJlYXNvbjogVXNlckNyZWF0aW9uU3RhdHVzZXMuSU5WQUxJRF9FTUFJTCxcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgICAgaWYgKHBhc3N3b3JkICE9PSByZXBlYXRQYXNzd29yZCkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmNyZWF0ZVVzZXJGYWlsdXJlKHtcclxuICAgICAgICAgICAgcmVhc29uOiBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgICAgICBheGlvcy5wb3N0LFxyXG4gICAgICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5jcmVhdGVVc2VyLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgLy8gZW1haWwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlclN1Y2Nlc3MoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgICAgICAgICAgIHJlYXNvbjogZXJyb3IucmVzcG9uc2UuZGF0YS5yZWFzb24sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgLy8gfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZW1haWxJc1ZhbGlkKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICBjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgcmV0dXJuIHJlLnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlLCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IHVzZXJQcm9maWxlQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUdldFVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaFByb2ZpbGVTYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShcclxuICAgICAgdXNlclByb2ZpbGVBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJQcm9maWxlLnR5cGVcclxuICAgICk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuICAgIGNvbnN0IHRhcmdldElkID0gcGF5bG9hZC50YXJnZXRJZDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldElkKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNyZWF0ZUdldFVzZXJQcm9maWxlVXJsKHRhcmdldElkKSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5nZXQsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwodGFyZ2V0SWQpXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgdXNlclByb2ZpbGVBY3Rpb25zLmZldGNoVXNlclByb2ZpbGVTdWNjZXNzKHtcclxuICAgICAgICAgICAgcHJvZmlsZTogcmVzcG9uc2UuZGF0YS5wcm9maWxlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dCh1c2VyUHJvZmlsZUFjdGlvbnMuZmV0Y2hVc2VyUHJvZmlsZUZhaWx1cmUoKSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB5aWVsZCBwdXQodXNlclByb2ZpbGVBY3Rpb25zLmZldGNoVXNlclByb2ZpbGVGYWlsdXJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMsIFVzZXJDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4vYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcywgU1RBVEVTIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG50eXBlIFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uID0ge1xyXG4gIHRhcmdldEJhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICB2YWx1ZTogbnVtYmVyO1xyXG59O1xyXG5cclxudHlwZSBTZXNzaW9uU2xpY2VTdGF0ZSA9IHtcclxuICBhdXRoZW50aWNhdGlvblN0YXR1czogQXV0aGVudGljYXRpb25TdGF0dXNlcztcclxuICB1c2VySWQ/OiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gIHVzZXJDcmVhdGlvblN0YXR1czogVXNlckNyZWF0aW9uU3RhdHVzZXM7XHJcbiAgYmFuZHNNb2RpZmllZDogU2Vzc2lvbkJhbmRNb2RpZmljYXRpb25bXTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU2Vzc2lvblNsaWNlU3RhdGUgPSB7XHJcbiAgYXV0aGVudGljYXRpb25TdGF0dXM6IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICB1c2VySWQ6IHVuZGVmaW5lZCxcclxuICB1c2VybmFtZTogdW5kZWZpbmVkLFxyXG4gIHVzZXJDcmVhdGlvblN0YXR1czogVXNlckNyZWF0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICBiYW5kc01vZGlmaWVkOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHNlc3Npb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInNlc3Npb25cIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIFNlc3Npb24gY2hlY2tpbmdcclxuICAgIHJlcXVlc3RDaGVja1Nlc3Npb24oc3RhdGUpIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HO1xyXG4gICAgfSxcclxuICAgIGNoZWNrU2Vzc2lvblN1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHVzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGJhbmRzTW9kaWZpZWQ6IFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uW107XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQ7XHJcbiAgICAgIHN0YXRlLnVzZXJJZCA9IGFjdGlvbi5wYXlsb2FkLnVzZXJJZDtcclxuICAgICAgc3RhdGUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZTtcclxuICAgICAgc3RhdGUuYmFuZHNNb2RpZmllZCA9IGFjdGlvbi5wYXlsb2FkLmJhbmRzTW9kaWZpZWQ7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tTZXNzaW9uRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORztcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlciBhdXRoZW50aWNhdGlvblxyXG4gICAgcmVxdWVzdEF1dGhlbnRpY2F0ZVVzZXIoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRJTkc7XHJcbiAgICB9LFxyXG4gICAgYXV0aGVudGljYXRlVXNlclN1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHVzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGJhbmRzTW9kaWZpZWQ6IFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uW107XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQ7XHJcbiAgICAgIHN0YXRlLnVzZXJJZCA9IGFjdGlvbi5wYXlsb2FkLnVzZXJJZDtcclxuICAgICAgc3RhdGUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZTtcclxuICAgICAgc3RhdGUuYmFuZHNNb2RpZmllZCA9IGFjdGlvbi5wYXlsb2FkLmJhbmRzTW9kaWZpZWQ7XHJcbiAgICB9LFxyXG4gICAgYXV0aGVudGljYXRlVXNlckZhaWx1cmUoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IGFjdGlvbi5wYXlsb2FkLnJlYXNvbjtcclxuICAgICAgLy8gVE9ETzogSXMgaXQgbmVjZXNzYXJ5IHRvIHJlc2V0IHRoaXMgdG8gbnVsbCBoZXJlP1xyXG4gICAgICBzdGF0ZS51c2VySWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFVzZXIgbG9nb3V0XHJcbiAgICByZXF1ZXN0TG9nb3V0KHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5MT0dHSU5HX09VVDtcclxuICAgIH0sXHJcbiAgICBsb2dvdXRGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5TRVJWRVJfRVJST1I7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0U3VjY2VzcyhzdGF0ZSkge1xyXG4gICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlciBjcmVhdGlvblxyXG4gICAgcmVxdWVzdENyZWF0ZVVzZXIoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIC8vIGVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgIHJlcGVhdFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUudXNlckNyZWF0aW9uU3RhdHVzID0gVXNlckNyZWF0aW9uU3RhdHVzZXMuUFJPQ0VTU0lORztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVVc2VyU3VjY2VzcyhzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS51c2VyQ3JlYXRpb25TdGF0dXMgPSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZVVzZXJGYWlsdXJlKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUudXNlckNyZWF0aW9uU3RhdHVzID0gYWN0aW9uLnBheWxvYWQucmVhc29uO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgIC8vIEJhbmQgbW9kaWZpY2F0aW9uXHJcbiAgICBbYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlU3VjY2Vzcy50eXBlXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuYmFuZHNNb2RpZmllZC5wdXNoKHtcclxuICAgICAgICB0YXJnZXRCYW5kSWQ6IGFjdGlvbi5wYXlsb2FkLnRhcmdldEJhbmRJZCxcclxuICAgICAgICB2YWx1ZTogYWN0aW9uLnBheWxvYWQubW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXNzaW9uQWN0aW9ucyA9IHNlc3Npb25TbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBzZXNzaW9uU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gXCIuLi9zdG9yZS9oaXN0b3J5XCI7XHJcbmltcG9ydCB7IEJpZ0JhbmRUYWJsZSB9IGZyb20gXCIuL0JpZ0JhbmRUYWJsZVwiO1xyXG5pbXBvcnQgeyBMYW5kaW5nIH0gZnJvbSBcIi4vTGFuZGluZ1wiO1xyXG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tIFwiLi9Mb2dpblwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIi4vTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBOZXdVc2VyRm9ybSB9IGZyb20gXCIuL05ld1VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xyXG5cclxuLy8gY29uc3QgQXV0aGVudGljYXRpb25HdWFyZCA9IChDb21wb25lbnQpID0+ICh7IG1hdGNoIH0pID0+IHtcclxuLy8gICBpZiAoXHJcbi8vICAgICBzdG9yZS5nZXRTdGF0ZSgpLnNlc3Npb24uYXV0aGVudGljYXRpb25TdGF0dXMgIT09XHJcbi8vICAgICBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuLy8gICApIHtcclxuLy8gICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz47XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiA8Q29tcG9uZW50IG1hdGNoPXttYXRjaH0gLz47XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9ICgpID0+IChcclxuICAvLyBUT0RPOiBXaGF0IGlzIHRoZSBSb3V0ZXIncyBcImhpc3RvcnlcIiBhbGwgYWJvdXQ/XHJcbiAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvYmFuZHNcIiBjb21wb25lbnQ9e0JpZ0JhbmRUYWJsZX0gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW5Gb3JtfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL25ldy11c2VyXCIgY29tcG9uZW50PXtOZXdVc2VyRm9ybX0gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0xhbmRpbmd9IC8+XHJcbiAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICBwYXRoPVwiL3VzZXJzLzp1c2VySWRcIlxyXG4gICAgICAgICAgY29tcG9uZW50PXsoeyBtYXRjaCB9KSA9PiA8VXNlclByb2ZpbGUgaWQ9e21hdGNoLnBhcmFtcy51c2VySWR9IC8+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICA8L1JvdXRlcj5cclxuKTtcclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcImRaWkhcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiaTNYcFwiOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ3JlYXRlQmFuZEZvcm0gfSBmcm9tIFwiLi9DcmVhdGVCYW5kRm9ybVwiO1xyXG5pbXBvcnQgeyBCaWdCYW5kVGFibGUgfSBmcm9tIFwiLi9CaWdCYW5kVGFibGVcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9Db250YWluZXJcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3Jkc0xpc3QgfSBmcm9tIFwiLi9Vc2VyUmVjb3Jkc0xpc3RcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgSnVtYm90cm9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSnVtYm90cm9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTGFuZGluZyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgey8qIDxKdW1ib3Ryb24+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJsYW5kaW5nVGl0bGVcIj5XaGF0IGFib3V0IGEgYmFuZCBjYWxsZWQuLi48L2gxPlxyXG4gICAgPC9KdW1ib3Ryb24+ICovfVxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgICA8Q29sIG1kPXs4fSBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgICAgIDxDcmVhdGVCYW5kRm9ybSAvPlxyXG4gICAgICAgICAgPEJpZ0JhbmRUYWJsZSAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezR9PlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+TW9zdCBOYW1lcyBDb250cmlidXRlZDwvaDU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPFVzZXJSZWNvcmRzTGlzdFxyXG4gICAgICAgICAgICAgICAgbWF4UmVjb3Jkcz17MTB9XHJcbiAgICAgICAgICAgICAgICBzb3J0VHlwZT17VXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+SGlnaGVzdCBBdmVyYWdlIFNjb3JlPC9oNT5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8VXNlclJlY29yZHNMaXN0XHJcbiAgICAgICAgICAgICAgICBtYXhSZWNvcmRzPXsxMH1cclxuICAgICAgICAgICAgICAgIHNvcnRUeXBlPXtVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfQVZFUkFHRV9TQ09SRX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGg1PkhpZ2hlc3QgU2NvcmU8L2g1PlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxVc2VyUmVjb3Jkc0xpc3RcclxuICAgICAgICAgICAgICAgIG1heFJlY29yZHM9ezEwfVxyXG4gICAgICAgICAgICAgICAgc29ydFR5cGU9e1VzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9TQ09SRX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICA8Lz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkZvcm0oKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IGF1dGhlbnRpY2F0aW9uU3RhdHVzID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2Vzc2lvbi5hdXRoZW50aWNhdGlvblN0YXR1c1xyXG4gICk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIGRpc3BhdGNoKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RBdXRoZW50aWNhdGVVc2VyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Q2FyZCBzdHlsZT17eyBtYXhXaWR0aDogXCIzNnJlbVwiIH19IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1VzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25TdGF0dXNlcy5VU0VSTkFNRV9OT1RfRk9VTkRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBOZXcgdXNlcj8gQ3JlYXRlIGFuIGFjY291bnQgPGEgaHJlZj1cIi9uZXctdXNlclwiPmhlcmU8L2E+LlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5UZXh0PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIHVzZXJuYW1lLlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuSU5WQUxJRF9QQVNTV09SRFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICBJbmNvcnJlY3QgcGFzc3dvcmQuXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HIHx8XHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIHthdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz4gUHJvY2Vzc2luZy4uLlxyXG4gICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHthdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQgJiYgKFxyXG4gICAgICAgICAgICAgIDxBbGVydCB2YXJpYW50PVwic3VjY2Vzc1wiPlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4hPC9BbGVydD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVc2VyUHJvZmlsZVVybCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIFwiL3VzZXJzL1wiICsgdXNlcklkO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4vY29tcG9uZW50cy9NYWluXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxNYWluIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXHJcbik7XHJcbiIsIi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uR3JvdXBcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CYWRnZVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RvZ2dsZUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzLCBCYW5kU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBzb3J0QW5kTGltaXRCYW5kcyB9IGZyb20gXCIuL3V0aWxpdHkvbGltaXQtc29ydC1iYW5kc1wiO1xyXG5pbXBvcnQge1xyXG4gIEJhbmRNb2RCdXR0b25Hcm91cCxcclxuICBQbGFjZWhvbGRlckJhbmRNb2RCdXR0b25Hcm91cCxcclxufSBmcm9tIFwiLi9CYW5kTW9kQnV0dG9uR3JvdXBcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlL1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4vdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9TcGlubmVyXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0QmFuZHNQZXJGZXRjaCA9IDIwO1xyXG5cclxuLy8gVE9ETzogU29tZXRoaW5nIHNob3VsZCBkaXNwbGF5IHdoZW4gd2UgaGF2ZSBubyBiYW5kcyB0byBkaXNwbGF5IVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBSb290U3RhdGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgYXBwSXNGZXRjaGluZ0JhbmRzOiBzdGF0ZS5iYW5kcy5wZW5kaW5nRmV0Y2hlcyA+IDAsXHJcbiAgICBiYW5kczogWy4uLnN0YXRlLmJhbmRzLml0ZW1zXSxcclxuICAgIHVzZXJJc0F1dGhlbnRpY2F0ZWQ6XHJcbiAgICAgIHN0YXRlLnNlc3Npb24uYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiBmYWxzZSxcclxuICAgIHVzZXJJZDogc3RhdGUuc2Vzc2lvbi51c2VySWQsXHJcbiAgICB1c2Vyc01vZGlmaWNhdGlvbnM6IHN0YXRlLnNlc3Npb24uYmFuZHNNb2RpZmllZCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgYWRkUG9pbnRzVG86IChcclxuICAgICAgdGFyZ2V0QmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkLFxyXG4gICAgICBtb2RpZmljYXRpb25WYWx1ZTogbnVtYmVyLFxyXG4gICAgICBtb2RpZnlpbmdVc2VySWQ/OiBNb25nb29zZVR5cGVzLk9iamVjdElkLFxyXG4gICAgICB1bmRvVmFsdWU/OiBudW1iZXJcclxuICAgICkgPT4ge1xyXG4gICAgICBpZiAobW9kaWZ5aW5nVXNlcklkKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICBiYW5kQWN0aW9ucy5yZXF1ZXN0TW9kaWZ5QmFuZFNjb3JlKHtcclxuICAgICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgICBtb2RpZnlpbmdVc2VySWQsXHJcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICB1bmRvVmFsdWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZXF1ZXN0RmV0Y2hCYW5kczogKG1heEJhbmRzOiBudW1iZXIsIHNvcnRCeTogQmFuZFNvcnRUeXBlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaChiYW5kQWN0aW9ucy5yZXF1ZXN0RmV0Y2hCYW5kcyh7IG1heEJhbmRzLCBzb3J0QnkgfSkpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIEJpZ0JhbmRUYWJsZVByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPjtcclxuXHJcbnR5cGUgQmlnQmFuZFRhYmxlU3RhdGUgPSB7XHJcbiAgc29ydFR5cGU6IEJhbmRTb3J0VHlwZXM7XHJcbiAgYmFuZHNQZXJGZXRjaDogbnVtYmVyO1xyXG4gIHNob3VsZEZldGNoQmFuZHM6IGJvb2xlYW47XHJcbiAgbWF4QmFuZHNEaXNwbGF5ZWQ6IG51bWJlcjtcclxufTtcclxuXHJcbmNsYXNzIFVuY29ubmVjdGVkQmlnQmFuZFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIEJpZ0JhbmRUYWJsZVByb3BzLFxyXG4gIEJpZ0JhbmRUYWJsZVN0YXRlXHJcbj4ge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgc29ydFR5cGU6IEJhbmRTb3J0VHlwZXMuTU9TVF9SRUNFTlQsXHJcbiAgICBiYW5kc1BlckZldGNoOiBkZWZhdWx0QmFuZHNQZXJGZXRjaCxcclxuICAgIHNob3VsZEZldGNoQmFuZHM6IGZhbHNlLFxyXG4gICAgbWF4QmFuZHNEaXNwbGF5ZWQ6IGRlZmF1bHRCYW5kc1BlckZldGNoLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5yZXF1ZXN0RmV0Y2hCYW5kcyh0aGlzLnN0YXRlLmJhbmRzUGVyRmV0Y2gsIHRoaXMuc3RhdGUuc29ydFR5cGUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKFxyXG4gICAgcHJldlByb3BzOiBCaWdCYW5kVGFibGVQcm9wcyxcclxuICAgIHByZXZTdGF0ZTogQmlnQmFuZFRhYmxlU3RhdGVcclxuICApIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5zdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCA+IHByZXZTdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCB8fFxyXG4gICAgICB0aGlzLnN0YXRlLnNob3VsZEZldGNoQmFuZHNcclxuICAgICkge1xyXG4gICAgICB0aGlzLnByb3BzLnJlcXVlc3RGZXRjaEJhbmRzKFxyXG4gICAgICAgIHRoaXMuc3RhdGUubWF4QmFuZHNEaXNwbGF5ZWQsXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zb3J0VHlwZVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdWxkRmV0Y2hCYW5kczogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuc29ydFR5cGUgIT09IHByZXZTdGF0ZS5zb3J0VHlwZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtYXhCYW5kc0Rpc3BsYXllZDogdGhpcy5zdGF0ZS5iYW5kc1BlckZldGNoLFxyXG4gICAgICAgIHNob3VsZEZldGNoQmFuZHM6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U29ydFR5cGUobmV3VHlwZTogQmFuZFNvcnRUeXBlcykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRUeXBlOiBuZXdUeXBlIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZE1vcmUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1heEJhbmRzRGlzcGxheWVkOiBzdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCArIHN0YXRlLmJhbmRzUGVyRmV0Y2gsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJNb2RpZmljYXRpb25Ub0JhbmQodGhpc0JhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCkge1xyXG4gICAgY29uc3QgbW9kaWZpY2F0aW9uID0gdGhpcy5wcm9wcy51c2Vyc01vZGlmaWNhdGlvbnMuZmluZChcclxuICAgICAgKG1vZGlmaWNhdGlvbikgPT4gbW9kaWZpY2F0aW9uLnRhcmdldEJhbmRJZCA9PT0gdGhpc0JhbmRJZFxyXG4gICAgKTtcclxuICAgIGlmIChtb2RpZmljYXRpb24pIHJldHVybiBtb2RpZmljYXRpb24udmFsdWU7XHJcbiAgICBlbHNlIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gVE9ETzogU2hvdWxkIHdlIGhhdmUgc29tZSBub3RpZmljYXRpb24gdGhhdCBiYW5kcyBhcmUgYmVpbmcgZmV0Y2hlZD9cclxuICAgIGNvbnN0IGRlc2lyZWRCYW5kcyA9IHNvcnRBbmRMaW1pdEJhbmRzKFxyXG4gICAgICB0aGlzLnByb3BzLmJhbmRzLFxyXG4gICAgICB0aGlzLnN0YXRlLnNvcnRUeXBlLFxyXG4gICAgICB0aGlzLnN0YXRlLm1heEJhbmRzRGlzcGxheWVkXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNvcnRSYWRpb3MgPSBbXHJcbiAgICAgIHsgdmFsdWU6IEJhbmRTb3J0VHlwZXMuQkVTVCwgbmFtZTogXCJCZXN0XCIgfSxcclxuICAgICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5XT1JTVCwgbmFtZTogXCJXb3JzdFwiIH0sXHJcbiAgICAgIHsgdmFsdWU6IEJhbmRTb3J0VHlwZXMuTU9TVF9SRUNFTlQsIG5hbWU6IFwiTW9zdCBSZWNlbnRcIiB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCB7IHVzZXJJc0F1dGhlbnRpY2F0ZWQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIHRvZ2dsZT5cclxuICAgICAgICAgICAge3NvcnRSYWRpb3MubWFwKChyYWRpbywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3JhZGlvLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInNvcnRSYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtyYWRpby52YWx1ZSA9PT0gdGhpcy5zdGF0ZS5zb3J0VHlwZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIHR5cGVvZiBlLmN1cnJlbnRUYXJnZXQgJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydFR5cGVBc051bWJlcjogbnVtYmVyID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFNvcnRUeXBlKHNvcnRUeXBlQXNOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cmFkaW8ubmFtZX1cclxuICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXBwSXNGZXRjaGluZ0JhbmRzID8gKFxyXG4gICAgICAgICAgICAgICAgPD57Z2V0RW50cnlQbGFjZWhvbGRlcnMoZGVmYXVsdEJhbmRzUGVyRmV0Y2gpfTwvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7ZGVzaXJlZEJhbmRzLm1hcCgoYmFuZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1N0cmluZyhiYW5kLl9pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFuZE1vZEJ1dHRvbkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklzQXV0aG9yaXplZD17dXNlcklzQXV0aGVudGljYXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RQZXJmb3JtZWQ9e3RoaXMuZ2V0VXNlck1vZGlmaWNhdGlvblRvQmFuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbmQuX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlCYW5kPXsobW9kVmFsdWUsIHVuZG9WYWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkUG9pbnRzVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbmQuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZG9WYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2NvcmU9e2JhbmQuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntiYW5kLnNjb3JlfTwvQmFkZ2U+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmFuZC5uYW1lfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImZvbnQtd2VpZ2h0LWxpZ2h0ZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Y3JlYXRlVXNlclByb2ZpbGVVcmwoU3RyaW5nKGJhbmQub3duZXJJZCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYW5kLm93bmVyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGJsb2NrIG9uQ2xpY2s9eygpID0+IHRoaXMubG9hZE1vcmUoKX0+XHJcbiAgICAgICAgICAgIFNob3cgbWUgbW9yZS4uLlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFbnRyeVBsYWNlaG9sZGVycyhudW1PZlBsYWNlaG9sZGVyczogbnVtYmVyKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJzOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZlBsYWNlaG9sZGVyczsgaSsrKSB7XHJcbiAgICBwbGFjZWhvbGRlcnMucHVzaChCYW5kVGFibGVFbnRyeVBsYWNlaG9sZGVyKCkpO1xyXG4gIH1cclxuICByZXR1cm4gcGxhY2Vob2xkZXJzO1xyXG59XHJcblxyXG5jb25zdCBCYW5kVGFibGVFbnRyeVBsYWNlaG9sZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8UGxhY2Vob2xkZXJCYW5kTW9kQnV0dG9uR3JvdXAgLz57XCIgXCJ9XHJcbiAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwic21cIiAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEJpZ0JhbmRUYWJsZSA9IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFVuY29ubmVjdGVkQmlnQmFuZFRhYmxlKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJSZWNvcmQgPSB7XHJcbiAgaWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRvdGFsU2NvcmU6IG51bWJlcjtcclxuICBuYW1lc0NvbnRyaWJ1dGVkOiBudW1iZXI7XHJcbiAgYXZlcmFnZVNjb3JlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIFVzZXJSZWNvcmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogbnVtYmVyO1xyXG4gIGl0ZW1zOiBVc2VyUmVjb3JkW107XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJSZWNvcmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogMCxcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUmVjb3Jkc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclJlY29yZHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHJlcXVlc3RGZXRjaFVzZXJSZWNvcmRzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICBudW1PZlJlY29yZHM6IG51bWJlcjtcclxuICAgICAgICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcysrO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclJlY29yZHNTdWNjZXNzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFVzZXJSZWNvcmRbXT5cclxuICAgICkge1xyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKChuZXdSZWNvcmQpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLml0ZW1zLnNvbWUoKHJlY29yZCkgPT4gcmVjb3JkLmlkID09IG5ld1JlY29yZC5pZCkpXHJcbiAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKG5ld1JlY29yZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclJlY29yZHNGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclJlY29yZHNBY3Rpb25zID0gdXNlclJlY29yZHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVjb3Jkc1NsaWNlLnJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlclJlY29yZHNBY3Rpb25zLFxyXG4gIFVzZXJSZWNvcmQsXHJcbn0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlL1wiO1xyXG5pbXBvcnQgeyBzb3J0QW5kTGltaXRVc2VyUmVjb3JkcyB9IGZyb20gXCIuL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHNcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQmFkZ2VcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybFwiXHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFJvb3RTdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhcHBJc0ZldGNoaW5nUmVjb3Jkczogc3RhdGUudXNlclJlY29yZHMucGVuZGluZ0ZldGNoZXMgPiAwLFxyXG4gICAgcmVjb3JkczogWy4uLnN0YXRlLnVzZXJSZWNvcmRzLml0ZW1zXSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVxdWVzdFVzZXJSZWNvcmRzOiAoXHJcbiAgICAgIG51bU9mUmVjb3JkczogbnVtYmVyLFxyXG4gICAgICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlc1xyXG4gICAgKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIHVzZXJSZWNvcmRzQWN0aW9ucy5yZXF1ZXN0RmV0Y2hVc2VyUmVjb3Jkcyh7IG51bU9mUmVjb3Jkcywgc29ydFR5cGUgfSlcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGlzdEVudHJ5QmFkZ2UocHJvcHM6IHtcclxuICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxuICByZWNvcmQ6IFVzZXJSZWNvcmQ7XHJcbn0pIHtcclxuICBzd2l0Y2ggKHByb3BzLnNvcnRUeXBlKSB7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9BVkVSQUdFX1NDT1JFOlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57cHJvcHMucmVjb3JkLmF2ZXJhZ2VTY29yZS50b0ZpeGVkKDIpfTwvQmFkZ2U+O1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfU0NPUkU6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntwcm9wcy5yZWNvcmQudG90YWxTY29yZX08L0JhZGdlPjtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEOlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57cHJvcHMucmVjb3JkLm5hbWVzQ29udHJpYnV0ZWR9PC9CYWRnZT47XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj4/PC9CYWRnZT47XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIFVzZXJSZWNvcmRzTGlzdFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPiAmIHtcclxuICBtYXhSZWNvcmRzOiBudW1iZXI7XHJcbiAgc29ydFR5cGU6IFVzZXJSZWNvcmRTb3J0VHlwZXM7XHJcbn07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZFVzZXJSZWNvcmRzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxVc2VyUmVjb3Jkc0xpc3RQcm9wcz4ge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5yZXF1ZXN0VXNlclJlY29yZHModGhpcy5wcm9wcy5tYXhSZWNvcmRzLCB0aGlzLnByb3BzLnNvcnRUeXBlKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmFwcElzRmV0Y2hpbmdSZWNvcmRzKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgdXNlciByZWNvcmRzLi4uPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlc2lyZWRSZWNvcmRzID0gc29ydEFuZExpbWl0VXNlclJlY29yZHMoXHJcbiAgICAgIHRoaXMucHJvcHMucmVjb3JkcyxcclxuICAgICAgdGhpcy5wcm9wcy5zb3J0VHlwZSxcclxuICAgICAgdGhpcy5wcm9wcy5tYXhSZWNvcmRzXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtkZXNpcmVkUmVjb3Jkcy5tYXAoKHJlY29yZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17U3RyaW5nKHJlY29yZC5pZCl9PlxyXG4gICAgICAgICAgICAgIDx0ZD57aW5kZXggKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2NyZWF0ZVVzZXJQcm9maWxlVXJsKFN0cmluZyhyZWNvcmQuaWQpKX0+e3JlY29yZC5uYW1lfTwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGlzdEVudHJ5QmFkZ2VcclxuICAgICAgICAgICAgICAgICAgc29ydFR5cGU9e3RoaXMucHJvcHMuc29ydFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclJlY29yZHNMaXN0ID0gY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVW5jb25uZWN0ZWRVc2VyUmVjb3Jkc0xpc3QpO1xyXG4iLCJleHBvcnQgeyBiYW5kQ3JlYXRpb25TYWdhIH0gZnJvbSBcIi4vYmFuZC1jcmVhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IGJhbmRTY29yZU1vZGlmaWNhdGlvblNhZ2EgfSBmcm9tIFwiLi9iYW5kLXNjb3JlLW1vZGlmaWNhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IHVzZXJBdXRoZW50aWNhdGlvblNhZ2EgfSBmcm9tIFwiLi91c2VyLWF1dGhlbnRpY2F0aW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgdXNlckNyZWF0aW9uU2FnYSB9IGZyb20gXCIuL3VzZXItY3JlYXRpb24tc2FnYVwiO1xyXG5leHBvcnQgeyB3YXRjaEZldGNoQmFuZHNTYWdhIH0gZnJvbSBcIi4vd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYVwiO1xyXG5leHBvcnQgeyB3YXRjaEZldGNoVXNlclJlY29yZHNTYWdhIH0gZnJvbSBcIi4vZmV0Y2gtdXNlci1yZWNvcmRzLXNhZ2FcIjtcclxuZXhwb3J0IHsgZmV0Y2hQcm9maWxlU2FnYSB9IGZyb20gXCIuL2ZldGNoLXVzZXItcHJvZmlsZS1zYWdhXCI7XHJcbmV4cG9ydCB7IGNoZWNrU2Vzc2lvblNhZ2EgfSBmcm9tIFwiLi9jaGVjay1zZXNzaW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgbG9nb3V0U2FnYSB9IGZyb20gXCIuL2xvZ291dC1zYWdhXCI7IiwiaW1wb3J0IHsgQmFuZFNvcnRUeXBlcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydEFuZExpbWl0QmFuZHMoXHJcbiAgYmFuZHM6IEJhbmRDbGFzc1tdLFxyXG4gIHNvcnRCeTogQmFuZFNvcnRUeXBlcyxcclxuICBsaW1pdDogbnVtYmVyXHJcbik6IEJhbmRDbGFzc1tdIHtcclxuICBsZXQgZmlsdGVyZWRCYW5kcyA9IFsuLi5iYW5kc107XHJcblxyXG4gIHN3aXRjaCAoc29ydEJ5KSB7XHJcbiAgICBjYXNlIEJhbmRTb3J0VHlwZXMuQkVTVDpcclxuICAgICAgZmlsdGVyZWRCYW5kcy5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLk1PU1RfUkVDRU5UOlxyXG4gICAgICBmaWx0ZXJlZEJhbmRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAvLyBUT0RPOiBXaGF0IGlzIGhhcHBlbmluZyBoZXJlP1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gRGF0ZS5wYXJzZShiLmNyZWF0ZWRPbikgLSBEYXRlLnBhcnNlKGEuY3JlYXRlZE9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLldPUlNUOlxyXG4gICAgICBmaWx0ZXJlZEJhbmRzLnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgLSBiLnNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGZpbHRlcmVkQmFuZHMgPSBmaWx0ZXJlZEJhbmRzLnNsaWNlKDAsIGxpbWl0KTtcclxuICByZXR1cm4gZmlsdGVyZWRCYW5kcztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9