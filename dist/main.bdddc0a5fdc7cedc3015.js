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
exports.Navigation = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
var Nav_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Nav */ "+YzT"));
var Navbar_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Navbar */ "6ctO"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var react_router_bootstrap_1 = __webpack_require__(/*! react-router-bootstrap */ "+Tvs");
var session_slice_1 = __webpack_require__(/*! ../store/slices/session-slice */ "fqsA");
var mapStateToProps = function (_a) {
    var session = _a.session;
    return ({
        authenticationStatus: session.authenticationStatus,
        username: session.username,
    });
};
function mapDispatchToProps(dispatch) {
    return {
        logout: function () {
            dispatch(session_slice_1.sessionActions.requestLogout());
        },
        checkSession: function () {
            dispatch(session_slice_1.sessionActions.requestCheckSession());
        },
    };
}
var connector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
var UnconnectedNavigation = /** @class */ (function (_super) {
    __extends(UnconnectedNavigation, _super);
    function UnconnectedNavigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnconnectedNavigation.prototype.componentDidMount = function () {
        if (this.props.authenticationStatus == statuses_1.AuthenticationStatuses.NOT_TRYING)
            this.props.checkSession();
    };
    UnconnectedNavigation.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(Navbar_1.default, { bg: "light", className: "mb-3" },
            react_1.default.createElement(react_router_bootstrap_1.LinkContainer, { to: "/" },
                react_1.default.createElement(Navbar_1.default.Brand, null, "wababc?")),
            this.props.authenticationStatus ==
                statuses_1.AuthenticationStatuses.AUTHENTICATED ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Nav_1.default.Item, null,
                    "Signed in as ",
                    this.props.username),
                react_1.default.createElement(Nav_1.default.Link, { onClick: function () { return _this.props.logout(); } }, "Logout"))) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(react_router_bootstrap_1.LinkContainer, { to: "/login" },
                    react_1.default.createElement(Nav_1.default.Link, null, "Login")),
                react_1.default.createElement(react_router_bootstrap_1.LinkContainer, { to: "/new-user" },
                    react_1.default.createElement(Nav_1.default.Link, null, "Create Account"))))));
    };
    return UnconnectedNavigation;
}(react_1.default.Component));
exports.Navigation = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UnconnectedNavigation);


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
    });
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
    function DisplayAlert(alert) {
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
        react_1.default.createElement(DisplayAlert, null)));
}
exports.CreateBandForm = CreateBandForm;
// class UnconnectedCreateBandForm extends React.Component<
//   CreateBandFormProps,
//   CreateBandFormState
// > {
//   state = {
//     bandName: "",
//     displayBandExistsAlert: false,
//     displayUserNotLoggedIn: false,
//     displayNoNameAlert: false,
//     displayProgess: false,
//     displaySuccess: false,
//     displayErrorAlert: false,
//     lastSuccesfulName: "",
//   };
//   componentDidUpdate(prevProps: CreateBandFormProps) {
//     if (this.props.bandCreationStatus !== prevProps.bandCreationStatus) {
//       switch (this.props.bandCreationStatus) {
//         case BandCreationStatuses.CREATING:
//           this.setState({
//             displayBandExistsAlert: false,
//             displayUserNotLoggedIn: false,
//             displayNoNameAlert: false,
//             displayProgess: true,
//             displaySuccess: false,
//             displayErrorAlert: false,
//           });
//           break;
//         case BandCreationStatuses.CREATED:
//           this.setState({
//             displayBandExistsAlert: false,
//             displayUserNotLoggedIn: false,
//             displayNoNameAlert: false,
//             displayProgess: false,
//             displaySuccess: true,
//             displayErrorAlert: false,
//             lastSuccesfulName: this.state.bandName,
//             bandName: "",
//           });
//           break;
//         case BandCreationStatuses.BAND_EXISTS:
//           this.setState({
//             displayBandExistsAlert: true,
//             displayUserNotLoggedIn: false,
//             displayNoNameAlert: false,
//             displayProgess: false,
//             displaySuccess: false,
//             displayErrorAlert: false,
//             bandName: "",
//           });
//           break;
//         case BandCreationStatuses.ERROR:
//           this.setState({
//             displayBandExistsAlert: false,
//             displayUserNotLoggedIn: false,
//             displayNoNameAlert: false,
//             displayProgess: false,
//             displaySuccess: false,
//             displayErrorAlert: true,
//           });
//           break;
//         default:
//           return;
//       }
//     }
//   }
//   handleClick() {
//     if (
//       this.props.authenticationStatus == AuthenticationStatuses.AUTHENTICATED
//     ) {
//       if (this.state.bandName == "") {
//         this.setState({
//           displayBandExistsAlert: false,
//           displayUserNotLoggedIn: false,
//           displayNoNameAlert: true,
//           displayProgess: false,
//           displaySuccess: false,
//         });
//       } else {
//         this.props.createBand(
//           this.props.userId,
//           this.props.username,
//           this.state.bandName
//         );
//       }
//     } else {
//       this.setState({
//         displayBandExistsAlert: false,
//         displayUserNotLoggedIn: true,
//         displayNoNameAlert: false,
//         displayProgess: false,
//         displaySuccess: false,
//       });
//     }
//   }
//   render() {
//     const {
//       displayBandExistsAlert,
//       displayNoNameAlert,
//       displayProgess,
//       displayUserNotLoggedIn,
//       displaySuccess,
//     } = this.state;
//     return (
//       <div className={"mb-3"}>
//         <InputGroup size="lg">
//           <FormControl
//             type="text"
//             placeholder="What about a band called..."
//             onChange={(e) => this.setState({ bandName: e.target.value })}
//             value={this.state.bandName}
//           />
//           <InputGroup.Append>
//             {displayProgess ? (
//               <Button variant="primary" disabled>
//                 <Spinner
//                   as="span"
//                   animation="border"
//                   size="sm"
//                   role="status"
//                   aria-hidden="true"
//                 />
//               </Button>
//             ) : (
//               <Button variant="primary" onClick={() => this.handleClick()}>
//                 Submit
//               </Button>
//             )}
//           </InputGroup.Append>
//         </InputGroup>
//         {displayUserNotLoggedIn ? <UserNotLoggedInAlert /> : null}
//         {displayNoNameAlert ? <NoNameAlert /> : null}
//         {displayBandExistsAlert ? <BandExistsAlert /> : null}
//         {displaySuccess ? (
//           <BandCreatedAlert name={this.state.lastSuccesfulName} />
//         ) : null}
//       </div>
//     );
//   }
// }
// export const CreateBandForm = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UnconnectedCreateBandForm);


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
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: Login_1.Login }),
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
exports.Login = void 0;
// import PropTypes from "prop-types";
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
var Button_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Button */ "cWnB"));
var Alert_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Alert */ "TUci"));
var Container_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Container */ "7vrA"));
var Card_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Card */ "6xyR"));
var Form_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Form */ "QojX"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var session_slice_1 = __webpack_require__(/*! ../store/slices/session-slice */ "fqsA");
var Spinner_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Spinner */ "T/rR"));
var mapStateToProps = function (_a) {
    var session = _a.session;
    return ({
        authenticationStatus: session.authenticationStatus,
    });
};
var mapDispatchToProps = function (dispatch) { return ({
    authenticateUser: function (username, password) {
        return dispatch(session_slice_1.sessionActions.requestAuthenticateUser({ username: username, password: password }));
    },
}); };
var reduxConnector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
var UnconnectedLogin = /** @class */ (function (_super) {
    __extends(UnconnectedLogin, _super);
    function UnconnectedLogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            username: "",
            password: "",
        };
        return _this;
    }
    UnconnectedLogin.prototype.render = function () {
        var _this = this;
        var _a = this.props, authenticationStatus = _a.authenticationStatus, authenticateUser = _a.authenticateUser;
        return (react_1.default.createElement(Container_1.default, null,
            react_1.default.createElement(Card_1.default, { style: { maxWidth: "36rem" }, className: "mx-auto" },
                react_1.default.createElement(Card_1.default.Body, null,
                    react_1.default.createElement(Form_1.default, null,
                        react_1.default.createElement(Form_1.default.Group, { controlId: "formBasicUsername" },
                            react_1.default.createElement(Form_1.default.Label, null, "Username"),
                            react_1.default.createElement(Form_1.default.Control, { type: "text", isInvalid: authenticationStatus ==
                                    statuses_1.AuthenticationStatuses.USERNAME_NOT_FOUND, onChange: function (e) { return _this.setState({ username: e.target.value }); } }),
                            react_1.default.createElement(Form_1.default.Text, { className: "text-muted" },
                                "New user? Create an account ",
                                react_1.default.createElement("a", { href: "/new-user" }, "here"),
                                "."),
                            react_1.default.createElement(Form_1.default.Control.Feedback, { type: "invalid" }, "Please enter a valid username.")),
                        react_1.default.createElement(Form_1.default.Group, { controlId: "formBasicPassword" },
                            react_1.default.createElement(Form_1.default.Label, null, "Password"),
                            react_1.default.createElement(Form_1.default.Control, { type: "password", isInvalid: authenticationStatus ==
                                    statuses_1.AuthenticationStatuses.INVALID_PASSWORD, onChange: function (e) { return _this.setState({ password: e.target.value }); } }),
                            react_1.default.createElement(Form_1.default.Control.Feedback, { type: "invalid" }, "Incorrect password.")),
                        react_1.default.createElement(Button_1.default, { variant: "primary", type: "button", disabled: authenticationStatus ==
                                statuses_1.AuthenticationStatuses.AUTHENTICATING ||
                                authenticationStatus == statuses_1.AuthenticationStatuses.AUTHENTICATED, onClick: function () {
                                return authenticateUser(_this.state.username, _this.state.password);
                            } }, "Submit"),
                        authenticationStatus ==
                            statuses_1.AuthenticationStatuses.AUTHENTICATING && (react_1.default.createElement(Alert_1.default, { variant: "info" },
                            react_1.default.createElement(Spinner_1.default, { animation: "border", variant: "primary" }),
                            " Processing...")),
                        authenticationStatus == statuses_1.AuthenticationStatuses.AUTHENTICATED && (react_1.default.createElement(Alert_1.default, { variant: "success" }, "Successfully logged in!")))))));
    };
    return UnconnectedLogin;
}(react_1.default.Component));
exports.Login = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UnconnectedLogin);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0JhbmRNb2RCdXR0b25Hcm91cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCYW5kRm9ybUFsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zdGF0dXNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2JhbmQtY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0NyZWF0ZUJhbmRGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2xvZ291dC1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2dldC10aW1lLXNpbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItYXV0aGVudGljYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTmV3VXNlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJQcm9maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2ZldGNoLXVzZXItcmVjb3Jkcy1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvYmFuZC1zY29yZS1tb2RpZmljYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BhdGhzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvY2hlY2stc2Vzc2lvbi1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL2JhbmRzLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy91c2VyLWNyZWF0aW9uLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9mZXRjaC11c2VyLXByb2ZpbGUtc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NsaWNlcy9zZXNzaW9uLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9NYWluLnRzeCIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2hvdCBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvbG9nJCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTGFuZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvQmlnQmFuZFRhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJSZWNvcmRzTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvdXRpbGl0eS9saW1pdC1zb3J0LWJhbmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBK0M7O0FBRXhDLGdCQUFnQixvRUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0QzQyx3RUFBMEI7QUFFMUIsZ0hBQWtFO0FBQ2xFLHNHQUF3RDtBQUN4RCw2REFLd0I7QUFtQnhCLCtGQUErRjtBQUMvRjtJQUF3QyxzQ0FHdkM7SUFIRDtRQUFBLHFFQW1EQztRQS9DQyxXQUFLLEdBQUc7WUFDTixRQUFRLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO1NBQ2xDLENBQUM7O0lBNkNKLENBQUM7SUEzQ0MsK0NBQWtCLEdBQWxCLFVBQ0UsU0FBa0MsRUFDbEMsU0FBa0M7UUFFbEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQzdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtvQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3pFO2lCQUFNO2dCQUNMLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO29CQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkU7U0FDRjtJQUNILENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQUEsaUJBNkJDO1FBNUJPLFNBQXFDLElBQUksQ0FBQyxLQUFLLEVBQTdDLGdCQUFnQix3QkFBRSxZQUFZLGtCQUFlLENBQUM7UUFDdEQsT0FBTyxDQUNMLDhCQUFDLDJCQUFp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QUNQeEQseUVBQXFEO0FBR3JELFNBQWdCLGlCQUFpQixDQUMvQixLQUFrQixFQUNsQixNQUFxQixFQUNyQixLQUFhO0lBRWIsSUFBSSxhQUFhLGtCQUFPLEtBQUssQ0FBQyxDQUFDO0lBRS9CLFFBQVEsTUFBTSxFQUFFO1FBQ2QsS0FBSyx3QkFBYSxDQUFDLElBQUk7WUFDckIsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixDQUFDLENBQUM7WUFDaEQsTUFBTTtRQUNSLEtBQUssd0JBQWEsQ0FBQyxXQUFXO1lBQzVCLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztnQkFDdEIsZ0NBQWdDO2dCQUNoQyxhQUFhO2dCQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNO1FBQ1IsS0FBSyx3QkFBYSxDQUFDLEtBQUs7WUFDdEIsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixDQUFDLENBQUM7WUFDaEQsTUFBTTtRQUNSO1lBQ0UsTUFBTTtLQUNUO0lBRUQsYUFBYSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7QUEzQkQsOENBMkJDIiwiZmlsZSI6Im1haW4uYmRkZGMwYTVmZGM3Y2VkYzMwMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RvZ2dsZUJ1dHRvbkdyb3VwXCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Ub2dnbGVCdXR0b25cIjtcclxuaW1wb3J0IHtcclxuICBCc0NhcmV0RG93bixcclxuICBCc0NhcmV0RG93bkZpbGwsXHJcbiAgQnNDYXJldFVwLFxyXG4gIEJzQ2FyZXRVcEZpbGwsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG4vLyBCYW5kTW9kQnV0dG9uR3JvdXAucHJvcFR5cGVzID0ge1xyXG4vLyAgIHVzZXJJc0F1dGhvcml6ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbi8vICAgbW9kaWZ5QmFuZDogUHJvcFR5cGVzLmZ1bmMsXHJcbi8vICAgbW9kUGVyZm9ybWVkOiBQcm9wVHlwZXMub25lT2YoWzEsIDAsIC0xXSksXHJcbi8vIH07XHJcblxyXG50eXBlIEJhbmRNb2RCdXR0b25Hcm91cFByb3BzID0ge1xyXG4gIHVzZXJJc0F1dGhvcml6ZWQ6IGJvb2xlYW47XHJcbiAgbW9kaWZ5QmFuZD86IChtb2RWYWx1ZTogbnVtYmVyLCB1bmRvVmFsdWU/OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgbW9kUGVyZm9ybWVkOiBudW1iZXI7XHJcbiAgY3VycmVudFNjb3JlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIEJhbmRNb2RCdXR0b25Hcm91cFN0YXRlID0ge1xyXG4gIG1vZFZhbHVlOiBudW1iZXI7XHJcbn07XHJcblxyXG4vLyBUT0RPOiBMb2dnaW5nIG91dCB3aWxsIHN0aWxsIHNob3cgdGhlIEJzQ2FycmV0cyBhcyAnZmlsbGVkJyBpZiB0aGUgdXNlciBtb2RpZmllZCB0aG9zZSBiYW5kc1xyXG5leHBvcnQgY2xhc3MgQmFuZE1vZEJ1dHRvbkdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIEJhbmRNb2RCdXR0b25Hcm91cFByb3BzLFxyXG4gIEJhbmRNb2RCdXR0b25Hcm91cFN0YXRlXHJcbj4ge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbW9kVmFsdWU6IHRoaXMucHJvcHMubW9kUGVyZm9ybWVkLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShcclxuICAgIHByZXZQcm9wczogQmFuZE1vZEJ1dHRvbkdyb3VwUHJvcHMsXHJcbiAgICBwcmV2U3RhdGU6IEJhbmRNb2RCdXR0b25Hcm91cFN0YXRlXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2RWYWx1ZSAhPSBwcmV2U3RhdGUubW9kVmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUubW9kVmFsdWUgPT0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGlmeUJhbmQpIHRoaXMucHJvcHMubW9kaWZ5QmFuZCgwLCBwcmV2U3RhdGUubW9kVmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGlmeUJhbmQpIHRoaXMucHJvcHMubW9kaWZ5QmFuZCh0aGlzLnN0YXRlLm1vZFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB1c2VySXNBdXRob3JpemVkLCBtb2RQZXJmb3JtZWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcclxuICAgICAgICBuYW1lPXtcIm1vZEJ1dHRvbnNcIn1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tb2RWYWx1ZX1cclxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT5cclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbClcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RWYWx1ZTogdGhpcy5zdGF0ZS5tb2RWYWx1ZSArIHZhbCB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgIG5hbWU9e1wibmVnYXRpdmVCdXR0b25cIn1cclxuICAgICAgICAgIHZhbHVlPXstMX1cclxuICAgICAgICAgIGRpc2FibGVkPXshdXNlcklzQXV0aG9yaXplZH1cclxuICAgICAgICAgIGNoZWNrZWQ9e21vZFBlcmZvcm1lZCA9PSAtMX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tb2RWYWx1ZSA9PSAtMSA/IDxCc0NhcmV0RG93bkZpbGwgLz4gOiA8QnNDYXJldERvd24gLz59XHJcbiAgICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgbmFtZT17XCJwb3NpdGl2ZUJ1dHRvblwifVxyXG4gICAgICAgICAgdmFsdWU9ezF9XHJcbiAgICAgICAgICBkaXNhYmxlZD17IXVzZXJJc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICBjaGVja2VkPXttb2RQZXJmb3JtZWQgPT0gMX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tb2RWYWx1ZSA9PSAxID8gPEJzQ2FyZXRVcEZpbGwgLz4gOiA8QnNDYXJldFVwIC8+fVxyXG4gICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQbGFjZWhvbGRlckJhbmRNb2RCdXR0b25Hcm91cCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvZ2dsZUJ1dHRvbkdyb3VwIG5hbWU9e1wicGxhY2VIb2xkZXJNb2RCdXR0b25zXCJ9PlxyXG4gICAgICA8VG9nZ2xlQnV0dG9uIGRpc2FibGVkPXt0cnVlfSB2YWx1ZT17MX0+XHJcbiAgICAgICAgPEJzQ2FyZXREb3duIC8+XHJcbiAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICA8VG9nZ2xlQnV0dG9uIGRpc2FibGVkPXt0cnVlfSB2YWx1ZT17Mn0+XHJcbiAgICAgICAgPEJzQ2FyZXRVcCAvPlxyXG4gICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUZldGNoU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJQcm9maWxlVHlwZSA9IHtcclxuICBpZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdG90YWxTY29yZTogbnVtYmVyO1xyXG4gIG5hbWVzQ29udHJpYnV0ZWQ6IG51bWJlcjtcclxuICBhdmVyYWdlU2NvcmU6IG51bWJlcjtcclxuICBiYW5kczogQmFuZENsYXNzW107XHJcbn07XHJcblxyXG50eXBlIFVzZXJQcm9maWxlU2xpY2VTdGF0ZSA9IHtcclxuICBmZXRjaFN0YXR1czogUHJvZmlsZUZldGNoU3RhdHVzZXM7XHJcbiAgcHJvZmlsZT86IFVzZXJQcm9maWxlVHlwZTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclByb2ZpbGVTbGljZVN0YXRlID0ge1xyXG4gIGZldGNoU3RhdHVzOiBQcm9maWxlRmV0Y2hTdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIHByb2ZpbGU6IHVuZGVmaW5lZCxcclxufTtcclxuXHJcbmNvbnN0IHVzZXJQcm9maWxlU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJ1c2VyUHJvZmlsZVwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgcmVxdWVzdEZldGNoVXNlclByb2ZpbGUoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHRhcmdldElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmZldGNoU3RhdHVzID0gUHJvZmlsZUZldGNoU3RhdHVzZXMuQVRURU1QVElORztcclxuICAgIH0sXHJcbiAgICBmZXRjaFVzZXJQcm9maWxlU3VjY2VzcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IHByb2ZpbGU6IFVzZXJQcm9maWxlVHlwZSB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmZldGNoU3RhdHVzID0gUHJvZmlsZUZldGNoU3RhdHVzZXMuU1VDQ0VTUztcclxuICAgICAgc3RhdGUucHJvZmlsZSA9IGFjdGlvbi5wYXlsb2FkLnByb2ZpbGU7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyUHJvZmlsZUZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuZmV0Y2hTdGF0dXMgPSBQcm9maWxlRmV0Y2hTdGF0dXNlcy5GQUlMVVJFO1xyXG4gICAgICBzdGF0ZS5wcm9maWxlID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyUHJvZmlsZUFjdGlvbnMgPSB1c2VyUHJvZmlsZVNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJQcm9maWxlU2xpY2UucmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQWxlcnQoKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cIndhcm5pbmdcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+VWggb2guLi48L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFNvbWV0aGluZyB3ZW50IHdyb25nISBXaGF0IGRpZCB5b3UgZG8hPyBEbyB5b3UgaGF2ZSBhbnkgaWRlYSBob3cgbXVjaCBJXHJcbiAgICAgICAgd29ya2VkIHRvIGdldCB0aGlzIHBsYWNlIGNsZWFuIGFuZCB0aGVuIHlvdSBzaG93IHVwIGFuZCBtZXNzIHRoZSB3aG9sZVxyXG4gICAgICAgIHRoaW5nIHVwPyBObyByZXNwZWN0Li4uXHJcbiAgICAgIDwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5vTmFtZUFsZXJ0KCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPlRoaXMgTUYgc2FpZCAmbGRxdW87ICZyZHF1bzs8L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFdobyBhcmUgeW91LCBKb2huIENhZ2U/IPCfmK3wn5it8J+YrSBKdXN0IGtpZGRpbmcsIGRvbiZhcG9zO3Qga25vdyB3aG8gdGhhdFxyXG4gICAgICAgIGlzLlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYW5kRXhpc3RzQWxlcnQoKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cIndhcm5pbmdcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+U29tZWJvZHkgYWxyZWFkeSB0aG91Z2h0IG9mIHRoYXQhPC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5cclxuICAgICAgICBHb2luZyB0byBoYXZlIHRvIHRyeSBoYXJkZXIuIE1heWJlIHJlYWQgYSB2ZXJ5IGNvbXBsaWNhdGVkIGJvb2sgYW5kIHRoZW5cclxuICAgICAgICB0aGluayBvZiBzb21lIHJlZmVyZW5jZSB0byB0aGF0LlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyTm90TG9nZ2VkSW5BbGVydCgpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwid2FybmluZ1wiPlxyXG4gICAgICA8QWxlcnQuSGVhZGluZz5Zb3UmYXBvczt2ZSBnb3R0YSBiZSBzaWduZWQgaW4hPC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5cclxuICAgICAgICBXZSBkb24mYXBvczt0IGxldCBqdXN0IGFueW9uZSBpbiBoZXJlLiBZb3UgY2Fue1wiIFwifVxyXG4gICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL25ldy11c2VyXCI+XHJcbiAgICAgICAgICA8QWxlcnQuTGluaz5tYWtlIGFuIGFjY291bnQgaGVyZTwvQWxlcnQuTGluaz5cclxuICAgICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICAgICAgLCB0aG91Z2gsIGlmIHlvdSB3YW50LlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYW5kQ3JlYXRlZEFsZXJ0KG5hbWU6IHN0cmluZyk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJzdWNjZXNzXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPiZsZHF1bzt7bmFtZX0mcmRxdW87IHN1Ym1pdHRlZCE8L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPk5vdyB0aGF0JmFwb3M7cyBmdW5ueS48L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0QW5kTGltaXRVc2VyUmVjb3JkcyhcclxuICByZWNvcmRzOiBVc2VyUmVjb3JkW10sXHJcbiAgc29ydEJ5OiBVc2VyUmVjb3JkU29ydFR5cGVzLFxyXG4gIGxpbWl0OiBudW1iZXJcclxuKTogVXNlclJlY29yZFtdIHtcclxuICBsZXQgZmlsdGVyZWRSZWNvcmRzID0gWy4uLnJlY29yZHNdO1xyXG5cclxuICBzd2l0Y2ggKHNvcnRCeSkge1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfQVZFUkFHRV9TQ09SRTpcclxuICAgICAgZmlsdGVyZWRSZWNvcmRzLnNvcnQoKGEsIGIpID0+IGIuYXZlcmFnZVNjb3JlIC0gYS5hdmVyYWdlU2NvcmUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX1NDT1JFOlxyXG4gICAgICBmaWx0ZXJlZFJlY29yZHMuc29ydCgoYSwgYikgPT4gYi50b3RhbFNjb3JlIC0gYS50b3RhbFNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuTU9TVF9OQU1FU19DT05UUklCVVRFRDpcclxuICAgICAgZmlsdGVyZWRSZWNvcmRzLnNvcnQoKGEsIGIpID0+IGIubmFtZXNDb250cmlidXRlZCAtIGEubmFtZXNDb250cmlidXRlZCk7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJlZFJlY29yZHMgPSBmaWx0ZXJlZFJlY29yZHMuc2xpY2UoMCwgbGltaXQpO1xyXG4gIHJldHVybiBmaWx0ZXJlZFJlY29yZHM7XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gVXNlclJlY29yZFNvcnRUeXBlcyB7XHJcbiAgSElHSEVTVF9TQ09SRSxcclxuICBISUdIRVNUX0FWRVJBR0VfU0NPUkUsXHJcbiAgTU9TVF9OQU1FU19DT05UUklCVVRFRFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYW5kQ3JlYXRpb25TdGF0dXNlcyB7XHJcbiAgQ1JFQVRJTkcsXHJcbiAgQ1JFQVRFRCxcclxuICBFUlJPUixcclxuICBCQU5EX0VYSVNUUyxcclxuICBOT1RfVFJZSU5HLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYW5kU29ydFR5cGVzIHtcclxuICBCRVNULFxyXG4gIFdPUlNULFxyXG4gIE1PU1RfUkVDRU5ULFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcyB7XHJcbiAgQVRURU1QVElORyxcclxuICBTVUNDRVNTLFxyXG4gIEZBSUxVUkUsXHJcbiAgTk9UX1RSWUlORyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUHJvZmlsZUZldGNoU3RhdHVzZXMge1xyXG4gIEFUVEVNUFRJTkcsXHJcbiAgU1VDQ0VTUyxcclxuICBGQUlMVVJFLFxyXG4gIE5PVF9UUllJTkdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXV0aGVudGljYXRpb25TdGF0dXNlcyB7XHJcbiAgQVVUSEVOVElDQVRJTkcsXHJcbiAgQVVUSEVOVElDQVRFRCxcclxuICBOT1RfQVVUSEVOVElDQVRFRCxcclxuICBOT1RfVFJZSU5HLFxyXG4gIFNFUlZFUl9FUlJPUixcclxuICBVU0VSTkFNRV9OT1RfRk9VTkQsXHJcbiAgSU5WQUxJRF9QQVNTV09SRCxcclxuICBMT0dHSU5HX09VVCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVXNlckNyZWF0aW9uU3RhdHVzZXMge1xyXG4gIFBST0NFU1NJTkcsXHJcbiAgUEFTU1dPUkRTX0RPTlRfTUFUQ0gsXHJcbiAgVVNFUk5BTUVfVEFLRU4sXHJcbiAgTk9UX1RSWUlORyxcclxuICBTRVJWRVJfRVJST1IsXHJcbiAgU1VDQ0VTUyxcclxuICBFTVBUWV9GSUVMRFMsXHJcbiAgSU5WQUxJRF9FTUFJTCxcclxuICBFTUFJTF9UQUtFTixcclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlLCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgTmV3QmFuZFJlcXVlc3RCb2R5IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9yb3V0ZS1oYW5kbGVycy9iYW5kc1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgQmFuZENyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogYmFuZENyZWF0aW9uU2FnYSgpIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKGJhbmRBY3Rpb25zLnJlcXVlc3RDcmVhdGVCYW5kLnR5cGUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJTYWdhIHBheWxvYWQ6IFwiLCBwYXlsb2FkKTtcclxuICAgIGNvbnN0IHsgY3JlYXRpbmdVc2VySWQsIGJhbmROYW1lLCBjcmVhdGluZ1VzZXJuYW1lIH0gPSBwYXlsb2FkO1xyXG4gICAgLy8gbGV0IG5ld0JhbmQgPSB7XHJcbiAgICAvLyAgIGNyZWF0aW5nVXNlcklkLFxyXG4gICAgLy8gICBiYW5kTmFtZSxcclxuICAgIC8vIH07XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keTogTmV3QmFuZFJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBiYW5kTmFtZSxcclxuICAgICAgb3duZXJJZDogY3JlYXRpbmdVc2VySWQsXHJcbiAgICAgIG93bmVyTmFtZTogY3JlYXRpbmdVc2VybmFtZSxcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkhFcmUhXCIpXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5wb3N0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLm5ld0JhbmQsXHJcbiAgICAgICAgcmVxdWVzdEJvZHlcclxuICAgICAgKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJyZXNwb25zZSBpbiBiYW5kY3JlYXRpb25zYWdhOiBcIiwgcmVzcG9uc2UpXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3cgaW0gaGVyZSFcIilcclxuICAgICAgICBjb25zdCBuZXdCYW5kOiBCYW5kQ2xhc3MgPSByZXNwb25zZS5kYXRhLm5ld0JhbmQ7XHJcbiAgICAgICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmNyZWF0ZUJhbmRTdWNjZXNzKG5ld0JhbmQpKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBsZXQgeyBfaWQsIGJhbmROYW1lLCBjcmVhdGluZ1VzZXJJZCwgc2NvcmUgfSA9IG5ld0JhbmQ7XHJcbiAgICAgIC8vIGxldCBuZXdCYW5kOiBCYW5kQ2xhc3MgPSB7XHJcbiAgICAgIC8vICAgbmFtZTogYmFuZE5hbWUsXHJcbiAgICAgIC8vICAgb3duZXJOYW1lOiBjcmVhdGluZ1VzZXJuYW1lLFxyXG4gICAgICAvLyAgIG93bmVySWQ6IGNyZWF0aW5nVXNlcklkLFxyXG4gICAgICAvLyAgIHNjb3JlOiAwLFxyXG4gICAgICAvLyAgIGNyZWF0ZWRPbixcclxuICAgICAgLy8gICBfaWQ6IG5ld0JhbmRJZCxcclxuICAgICAgLy8gfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHJlYXNvbjogQmFuZENyZWF0aW9uU3RhdHVzZXMgPSBlcnJvci5yZXNwb25zZS5kYXRhLnJlYXNvbjtcclxuICAgICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmNyZWF0ZUJhbmRGYWlsdXJlKHJlYXNvbikpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2Vzc2lvbiB9KSA9PiAoe1xyXG4gIGF1dGhlbnRpY2F0aW9uU3RhdHVzOiBzZXNzaW9uLmF1dGhlbnRpY2F0aW9uU3RhdHVzLFxyXG4gIHVzZXJuYW1lOiBzZXNzaW9uLnVzZXJuYW1lLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBsb2dvdXQ6ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goc2Vzc2lvbkFjdGlvbnMucmVxdWVzdExvZ291dCgpKTtcclxuICAgIH0sXHJcbiAgICBjaGVja1Nlc3Npb246ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENoZWNrU2Vzc2lvbigpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbnR5cGUgTmF2aWdhdGlvblByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TmF2aWdhdGlvblByb3BzPiB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLk5PVF9UUllJTkcpXHJcbiAgICAgIHRoaXMucHJvcHMuY2hlY2tTZXNzaW9uKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9cIj5cclxuICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+d2FiYWJjPzwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICB7dGhpcy5wcm9wcy5hdXRoZW50aWNhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRCA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXYuSXRlbT5TaWduZWQgaW4gYXMge3RoaXMucHJvcHMudXNlcm5hbWV9PC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMubG9nb3V0KCl9PkxvZ291dDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICA8TmF2Lkxpbms+TG9naW48L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL25ldy11c2VyXCI+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rPkNyZWF0ZSBBY2NvdW50PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb24gPSBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShVbmNvbm5lY3RlZE5hdmlnYXRpb24pO1xyXG4iLCIvLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRGlzcGF0Y2gsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcywgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0lucHV0R3JvdXBcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCYW5kQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXJcIjtcclxuaW1wb3J0IHsgQmFuZENyZWF0ZWRBbGVydCwgQmFuZEV4aXN0c0FsZXJ0LCBFcnJvckFsZXJ0LCBOb05hbWVBbGVydCwgVXNlck5vdExvZ2dlZEluQWxlcnQgfSBmcm9tIFwiLi9DcmVhdGVCYW5kRm9ybUFsZXJ0c1wiO1xyXG5cclxuZW51bSBDcmVhdGlvbkFsZXJ0IHtcclxuICBFcnJvcixcclxuICBOb05hbWUsXHJcbiAgQmFuZEV4aXN0cyxcclxuICBCYW5kQ3JlYXRlZCxcclxuICBOb3RMb2dnZWRJbixcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUJhbmRGb3JtKCk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCB7XHJcbiAgICBzZXNzaW9uOiB7IGF1dGhlbnRpY2F0aW9uU3RhdHVzLCB1c2VySWQsIHVzZXJuYW1lIH0sXHJcbiAgICBiYW5kczogeyBjcmVhdGlvblN0YXR1czogYmFuZENyZWF0aW9uU3RhdHVzIH0sXHJcbiAgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZSk7XHJcbiAgY29uc3QgW2JhbmROYW1lLCBzZXRCYW5kTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3JlYXRlZE5hbWUsIHNldENyZWF0ZWROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGU8Q3JlYXRpb25BbGVydCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3dpdGNoIChiYW5kQ3JlYXRpb25TdGF0dXMpIHtcclxuICAgICAgY2FzZSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5CQU5EX0VYSVNUUzpcclxuICAgICAgICBzZXRBbGVydChDcmVhdGlvbkFsZXJ0LkJhbmRFeGlzdHMpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY2FzZSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5FUlJPUjpcclxuICAgICAgICBzZXRBbGVydChDcmVhdGlvbkFsZXJ0LkVycm9yKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhc2UgQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRFRDpcclxuICAgICAgICBzZXRDcmVhdGVkTmFtZShiYW5kTmFtZSk7XHJcbiAgICAgICAgc2V0QmFuZE5hbWUoXCJcIik7XHJcbiAgICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5CYW5kQ3JlYXRlZCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICBpZiAoYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEKSB7XHJcbiAgICAgIGlmIChiYW5kTmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5Ob05hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgYmFuZEFjdGlvbnMucmVxdWVzdENyZWF0ZUJhbmQoe1xyXG4gICAgICAgICAgICBjcmVhdGluZ1VzZXJJZDogdXNlcklkISxcclxuICAgICAgICAgICAgYmFuZE5hbWUsXHJcbiAgICAgICAgICAgIGNyZWF0aW5nVXNlcm5hbWU6IHVzZXJuYW1lISxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5Ob3RMb2dnZWRJbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBEaXNwbGF5QWxlcnQoYWxlcnQ6IENyZWF0aW9uQWxlcnQpOiBKU1guRWxlbWVudCB8IG51bGwge1xyXG4gICAgc3dpdGNoIChhbGVydCkge1xyXG4gICAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0LkJhbmRDcmVhdGVkOlxyXG4gICAgICAgIHJldHVybiBCYW5kQ3JlYXRlZEFsZXJ0KGNyZWF0ZWROYW1lKTtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0LkJhbmRFeGlzdHM6XHJcbiAgICAgICAgcmV0dXJuIEJhbmRFeGlzdHNBbGVydCgpO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuRXJyb3I6XHJcbiAgICAgICAgcmV0dXJuIEVycm9yQWxlcnQoKTtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0Lk5vTmFtZTpcclxuICAgICAgICByZXR1cm4gTm9OYW1lQWxlcnQoKTtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0Lk5vdExvZ2dlZEluOlxyXG4gICAgICAgIHJldHVybiBVc2VyTm90TG9nZ2VkSW5BbGVydCgpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTmFtZUNoYW5nZShlKSB7XHJcbiAgICBzZXRCYW5kTmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgPElucHV0R3JvdXAgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYWJvdXQgYSBiYW5kIGNhbGxlZC4uLlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZU5hbWVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICB2YWx1ZT17YmFuZE5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICB7YmFuZENyZWF0aW9uU3RhdHVzID09IEJhbmRDcmVhdGlvblN0YXR1c2VzLkNSRUFUSU5HID8gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgPFNwaW5uZXJcclxuICAgICAgICAgICAgICAgIGFzPVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb249XCJib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoKX0+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgIDxEaXNwbGF5QWxlcnQgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGNsYXNzIFVuY29ubmVjdGVkQ3JlYXRlQmFuZEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XHJcbi8vICAgQ3JlYXRlQmFuZEZvcm1Qcm9wcyxcclxuLy8gICBDcmVhdGVCYW5kRm9ybVN0YXRlXHJcbi8vID4ge1xyXG4vLyAgIHN0YXRlID0ge1xyXG4vLyAgICAgYmFuZE5hbWU6IFwiXCIsXHJcbi8vICAgICBkaXNwbGF5QmFuZEV4aXN0c0FsZXJ0OiBmYWxzZSxcclxuLy8gICAgIGRpc3BsYXlVc2VyTm90TG9nZ2VkSW46IGZhbHNlLFxyXG4vLyAgICAgZGlzcGxheU5vTmFtZUFsZXJ0OiBmYWxzZSxcclxuLy8gICAgIGRpc3BsYXlQcm9nZXNzOiBmYWxzZSxcclxuLy8gICAgIGRpc3BsYXlTdWNjZXNzOiBmYWxzZSxcclxuLy8gICAgIGRpc3BsYXlFcnJvckFsZXJ0OiBmYWxzZSxcclxuLy8gICAgIGxhc3RTdWNjZXNmdWxOYW1lOiBcIlwiLFxyXG4vLyAgIH07XHJcblxyXG4vLyAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IENyZWF0ZUJhbmRGb3JtUHJvcHMpIHtcclxuLy8gICAgIGlmICh0aGlzLnByb3BzLmJhbmRDcmVhdGlvblN0YXR1cyAhPT0gcHJldlByb3BzLmJhbmRDcmVhdGlvblN0YXR1cykge1xyXG4vLyAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMuYmFuZENyZWF0aW9uU3RhdHVzKSB7XHJcbi8vICAgICAgICAgY2FzZSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVElORzpcclxuLy8gICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5QmFuZEV4aXN0c0FsZXJ0OiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgZGlzcGxheVVzZXJOb3RMb2dnZWRJbjogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGRpc3BsYXlOb05hbWVBbGVydDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGRpc3BsYXlQcm9nZXNzOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICBkaXNwbGF5U3VjY2VzczogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGRpc3BsYXlFcnJvckFsZXJ0OiBmYWxzZSxcclxuLy8gICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgY2FzZSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVEVEOlxyXG4vLyAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXlCYW5kRXhpc3RzQWxlcnQ6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBkaXNwbGF5VXNlck5vdExvZ2dlZEluOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgZGlzcGxheU5vTmFtZUFsZXJ0OiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgZGlzcGxheVByb2dlc3M6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBkaXNwbGF5U3VjY2VzczogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgZGlzcGxheUVycm9yQWxlcnQ6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBsYXN0U3VjY2VzZnVsTmFtZTogdGhpcy5zdGF0ZS5iYW5kTmFtZSxcclxuLy8gICAgICAgICAgICAgYmFuZE5hbWU6IFwiXCIsXHJcbi8vICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgIGNhc2UgQmFuZENyZWF0aW9uU3RhdHVzZXMuQkFORF9FWElTVFM6XHJcbi8vICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICAgICAgZGlzcGxheUJhbmRFeGlzdHNBbGVydDogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgZGlzcGxheVVzZXJOb3RMb2dnZWRJbjogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGRpc3BsYXlOb05hbWVBbGVydDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGRpc3BsYXlQcm9nZXNzOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgZGlzcGxheVN1Y2Nlc3M6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBkaXNwbGF5RXJyb3JBbGVydDogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGJhbmROYW1lOiBcIlwiLFxyXG4vLyAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICBjYXNlIEJhbmRDcmVhdGlvblN0YXR1c2VzLkVSUk9SOlxyXG4vLyAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXlCYW5kRXhpc3RzQWxlcnQ6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBkaXNwbGF5VXNlck5vdExvZ2dlZEluOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgZGlzcGxheU5vTmFtZUFsZXJ0OiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgZGlzcGxheVByb2dlc3M6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICBkaXNwbGF5U3VjY2VzczogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGRpc3BsYXlFcnJvckFsZXJ0OiB0cnVlLFxyXG4vLyAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuLy8gICBoYW5kbGVDbGljaygpIHtcclxuLy8gICAgIGlmIChcclxuLy8gICAgICAgdGhpcy5wcm9wcy5hdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuLy8gICAgICkge1xyXG4vLyAgICAgICBpZiAodGhpcy5zdGF0ZS5iYW5kTmFtZSA9PSBcIlwiKSB7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgICAgICBkaXNwbGF5QmFuZEV4aXN0c0FsZXJ0OiBmYWxzZSxcclxuLy8gICAgICAgICAgIGRpc3BsYXlVc2VyTm90TG9nZ2VkSW46IGZhbHNlLFxyXG4vLyAgICAgICAgICAgZGlzcGxheU5vTmFtZUFsZXJ0OiB0cnVlLFxyXG4vLyAgICAgICAgICAgZGlzcGxheVByb2dlc3M6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgZGlzcGxheVN1Y2Nlc3M6IGZhbHNlLFxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIHRoaXMucHJvcHMuY3JlYXRlQmFuZChcclxuLy8gICAgICAgICAgIHRoaXMucHJvcHMudXNlcklkLFxyXG4vLyAgICAgICAgICAgdGhpcy5wcm9wcy51c2VybmFtZSxcclxuLy8gICAgICAgICAgIHRoaXMuc3RhdGUuYmFuZE5hbWVcclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgICBkaXNwbGF5QmFuZEV4aXN0c0FsZXJ0OiBmYWxzZSxcclxuLy8gICAgICAgICBkaXNwbGF5VXNlck5vdExvZ2dlZEluOiB0cnVlLFxyXG4vLyAgICAgICAgIGRpc3BsYXlOb05hbWVBbGVydDogZmFsc2UsXHJcbi8vICAgICAgICAgZGlzcGxheVByb2dlc3M6IGZhbHNlLFxyXG4vLyAgICAgICAgIGRpc3BsYXlTdWNjZXNzOiBmYWxzZSxcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuLy8gICByZW5kZXIoKSB7XHJcbi8vICAgICBjb25zdCB7XHJcbi8vICAgICAgIGRpc3BsYXlCYW5kRXhpc3RzQWxlcnQsXHJcbi8vICAgICAgIGRpc3BsYXlOb05hbWVBbGVydCxcclxuLy8gICAgICAgZGlzcGxheVByb2dlc3MsXHJcbi8vICAgICAgIGRpc3BsYXlVc2VyTm90TG9nZ2VkSW4sXHJcbi8vICAgICAgIGRpc3BsYXlTdWNjZXNzLFxyXG4vLyAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4vLyAgICAgICAgIDxJbnB1dEdyb3VwIHNpemU9XCJsZ1wiPlxyXG4vLyAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbi8vICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuLy8gICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFib3V0IGEgYmFuZCBjYWxsZWQuLi5cIlxyXG4vLyAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBiYW5kTmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbi8vICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhbmROYW1lfVxyXG4vLyAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuLy8gICAgICAgICAgICAge2Rpc3BsYXlQcm9nZXNzID8gKFxyXG4vLyAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBkaXNhYmxlZD5cclxuLy8gICAgICAgICAgICAgICAgIDxTcGlubmVyXHJcbi8vICAgICAgICAgICAgICAgICAgIGFzPVwic3BhblwiXHJcbi8vICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImJvcmRlclwiXHJcbi8vICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbi8vICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxyXG4vLyAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgKSA6IChcclxuLy8gICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5cclxuLy8gICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4vLyAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuLy8gICAgICAgICA8L0lucHV0R3JvdXA+XHJcbi8vICAgICAgICAge2Rpc3BsYXlVc2VyTm90TG9nZ2VkSW4gPyA8VXNlck5vdExvZ2dlZEluQWxlcnQgLz4gOiBudWxsfVxyXG4vLyAgICAgICAgIHtkaXNwbGF5Tm9OYW1lQWxlcnQgPyA8Tm9OYW1lQWxlcnQgLz4gOiBudWxsfVxyXG4vLyAgICAgICAgIHtkaXNwbGF5QmFuZEV4aXN0c0FsZXJ0ID8gPEJhbmRFeGlzdHNBbGVydCAvPiA6IG51bGx9XHJcbi8vICAgICAgICAge2Rpc3BsYXlTdWNjZXNzID8gKFxyXG4vLyAgICAgICAgICAgPEJhbmRDcmVhdGVkQWxlcnQgbmFtZT17dGhpcy5zdGF0ZS5sYXN0U3VjY2VzZnVsTmFtZX0gLz5cclxuLy8gICAgICAgICApIDogbnVsbH1cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IENyZWF0ZUJhbmRGb3JtID0gY29ubmVjdChcclxuLy8gICBtYXBTdGF0ZVRvUHJvcHMsXHJcbi8vICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbi8vICkoVW5jb25uZWN0ZWRDcmVhdGVCYW5kRm9ybSk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGxvZ291dFNhZ2EoKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdExvZ291dC50eXBlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MuZGVsZXRlLFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLnNlc3Npb25FbmRwb2ludCwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX1cclxuICAgICAgKTtcclxuICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmxvZ291dFN1Y2Nlc3MoKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmxvZ291dEZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiY29uc3QgbXNJbk1pbnV0ZSA9IDYwMDAwO1xyXG5jb25zdCBtc0luSG91ciA9IG1zSW5NaW51dGUgKiA2MDtcclxuY29uc3QgbXNJbkRheSA9IG1zSW5Ib3VyICogMjQ7XHJcbmNvbnN0IG1zSW5ZZWFyID0gbXNJbkRheSAqIDM2NTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lU2luY2UoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgY29uc3QgZWxhcHNlZFRpbWUgPSBEYXRlLm5vdygpIC0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJbk1pbnV0ZSkge1xyXG4gICAgcmV0dXJuIFwiMW1cIjtcclxuICB9XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJbkhvdXIpIHtcclxuICAgIGNvbnN0IG51bU9mTWludXRlcyA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyBtc0luTWludXRlKTtcclxuICAgIHJldHVybiBgJHtudW1PZk1pbnV0ZXN9bWA7XHJcbiAgfVxyXG4gIGlmIChlbGFwc2VkVGltZSA8IG1zSW5EYXkpIHtcclxuICAgIGNvbnN0IG51bU9mSG91cnMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJbkhvdXIpO1xyXG4gICAgY29uc3QgbnVtT2ZNaW51dGVzID0gTWF0aC5mbG9vcigoZWxhcHNlZFRpbWUgJSBtc0luSG91cikgLyBtc0luTWludXRlKTtcclxuICAgIGxldCBzdHJpbmcgPSBgJHtudW1PZkhvdXJzfWhgO1xyXG4gICAgaWYgKG51bU9mTWludXRlcyA+IDApIHN0cmluZyArPSBgICR7bnVtT2ZNaW51dGVzfW1gO1xyXG4gICAgcmV0dXJuIHN0cmluZztcclxuICB9XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJblllYXIpIHtcclxuICAgIGNvbnN0IG51bU9mRGF5cyA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyBtc0luRGF5KTtcclxuICAgIHJldHVybiBgJHtudW1PZkRheXN9ZGA7XHJcbiAgfVxyXG4gIGNvbnN0IG51bU9mWWVhcnMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJblllYXIpO1xyXG4gIGNvbnN0IG51bU9mRGF5cyA9IE1hdGguZmxvb3IoKGVsYXBzZWRUaW1lICUgbXNJblllYXIpIC8gbXNJbkRheSk7XHJcbiAgbGV0IHN0cmluZyA9IGAke251bU9mWWVhcnN9eWA7XHJcbiAgaWYgKG51bU9mRGF5cyA+IDApIHN0cmluZyArPSBgICR7bnVtT2ZEYXlzfWRgO1xyXG4gIHJldHVybiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25DaGFubmVsLCBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogd2F0Y2hGZXRjaEJhbmRzU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIGNvbnN0IGZldGNoQmFuZHNDaGFubmVsID0geWllbGQgYWN0aW9uQ2hhbm5lbChcclxuICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RGZXRjaEJhbmRzLnR5cGVcclxuICApO1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoZmV0Y2hCYW5kc0NoYW5uZWwpO1xyXG4gICAgY29uc3QgeyBtYXhCYW5kcywgc29ydEJ5IH0gPSBwYXlsb2FkO1xyXG4gICAgeWllbGQgY2FsbChmZXRjaEJhbmRzLCBtYXhCYW5kcywgc29ydEJ5KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZmV0Y2hCYW5kcyhtYXhCYW5kcywgc29ydEJ5KSB7XHJcbiAgbGV0IHJlc3BvbnNlO1xyXG4gIHRyeSB7XHJcbiAgICByZXNwb25zZSA9IHlpZWxkIGNhbGwoYXhpb3MucG9zdCwgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMucG9zdEJhbmRzLCB7XHJcbiAgICAgIG1heEJhbmRzLFxyXG4gICAgICBzb3J0QnksXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5mZXRjaEJhbmRzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5mZXRjaEJhbmRzRmFpbHVyZSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogdXNlckF1dGhlbnRpY2F0aW9uU2FnYSgpIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RBdXRoZW50aWNhdGVVc2VyLnR5cGUpO1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHBheWxvYWQ7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5hdXRoZW50aWNhdGUsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyB1c2VySWQsIGJhbmRzTW9kaWZpZWQgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFuZHNNb2RpZmllZCBpbiB1c2VyQXV0aGVudGljYXRpb25TYWdhOiBcIiwgYmFuZHNNb2RpZmllZCk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuYXV0aGVudGljYXRlVXNlclN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBiYW5kc01vZGlmaWVkLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmF1dGhlbnRpY2F0ZVVzZXJGYWlsdXJlKHtcclxuICAgICAgICAgICAgcmVhc29uOiBlcnIucmVzcG9uc2UuZGF0YS5yZWFzb24sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJyZWFjdC1ib290c3RyYXAvQWxlcnRcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFVzZXJDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xyXG5cclxuLy8gVW5jb25uZWN0ZWROZXdVc2VyRm9ybS5wcm9wVHlwZXMgPSB7XHJcbi8vICAgc3VibWl0Rm9ybTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy8gICB1c2VyQ3JlYXRpb25TdGF0dXM6IFByb3BUeXBlcy5vbmVPZihPYmplY3QudmFsdWVzKFVzZXJDcmVhdGlvblN0YXR1c2VzKSksXHJcbi8vIH07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBzZXNzaW9uIH0pID0+ICh7XHJcbiAgdXNlckNyZWF0aW9uU3RhdHVzOiBzZXNzaW9uLnVzZXJDcmVhdGlvblN0YXR1cyxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc3VibWl0Rm9ybTogKC8qZW1haWwsKi8gdXNlcm5hbWUsIHBhc3N3b3JkLCByZXBlYXRQYXNzd29yZCkgPT5cclxuICAgIGRpc3BhdGNoKFxyXG4gICAgICBzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0Q3JlYXRlVXNlcih7XHJcbiAgICAgICAgLy8gZW1haWwsXHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgcmVwZWF0UGFzc3dvcmQsXHJcbiAgICAgIH0pXHJcbiAgICApLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHV4Q29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbnR5cGUgTmV3VXNlckZvcm1Qcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiByZWR1eENvbm5lY3Rvcj47XHJcblxyXG50eXBlIE5ld1VzZXJGb3JtU3RhdGUgPSB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgcmVwZWF0UGFzc3dvcmQ6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBVbmNvbm5lY3RlZE5ld1VzZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIE5ld1VzZXJGb3JtUHJvcHMsXHJcbiAgTmV3VXNlckZvcm1TdGF0ZVxyXG4+IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIHJlcGVhdFBhc3N3b3JkOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIC8vIFRPRE86IFdvdWxkbid0IGl0IGJlIGVhc3kgdG8gbWFrZSBpdCBzbyB0aGUgZW1haWwgaXMgdmFsaWRhdGVkIGFzIHRoZSB1c2VyIHR5cGVzPyBNYXliZSBvbiBhIHNsaWdodCBkZWxheT8gU2FtZSB3aXRoIHRoZSB1c2VybmFtZSBhbmQgcGFzc3dvcmQ/XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdXNlckNyZWF0aW9uU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXhXaWR0aDogXCIzNnJlbVwiIH19IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgIHsvKiA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlckVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbCBBZGRyZXNzPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLklOVkFMSURfRU1BSUxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD4gKi99XHJcbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJOYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Vc2VybmFtZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5VU0VSTkFNRV9UQUtFTlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICBVc2VybmFtZSBpcyBhbHJlYWR5IHRha2VuLlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlclJlcGVhdFBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5SZXBlYXQgUGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVwZWF0UGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlBBU1NXT1JEU19ET05UX01BVENIXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBhc3N3b3JkcyBkb24mYXBvczt0IG1hdGNoLlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgfHxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT0gVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTU1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXRGb3JtKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVwZWF0UGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTUyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgQWNjb3VudCBjcmVhdGVkISBZb3UgbWF5IG5vdyA8YSBocmVmPVwiL2xvZ2luXCI+bG9nIGluPC9hPi5cclxuICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7dXNlckNyZWF0aW9uU3RhdHVzID09IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz4gUHJvY2Vzc2luZy4uLlxyXG4gICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOZXdVc2VyRm9ybSA9IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFVuY29ubmVjdGVkTmV3VXNlckZvcm0pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7XHJcbiAgVXNlclByb2ZpbGVUeXBlLFxyXG4gIHVzZXJQcm9maWxlQWN0aW9ucyxcclxufSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3VzZXItcHJvZmlsZS1zbGljZVwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9UYWJsZVwiO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9lc20vQmFkZ2VcIjtcclxuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbGl0eS9nZXQtdGltZS1zaW5jZVwiO1xyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBSb290U3RhdGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgZmV0Y2hTdGF0dXM6IHN0YXRlLnVzZXJQcm9maWxlLmZldGNoU3RhdHVzLFxyXG4gICAgcHJvZmlsZTogc3RhdGUudXNlclByb2ZpbGUucHJvZmlsZSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVxdWVzdEZldGNoUHJvZmlsZTogKHRhcmdldElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHVzZXJQcm9maWxlQWN0aW9ucy5yZXF1ZXN0RmV0Y2hVc2VyUHJvZmlsZSh7IHRhcmdldElkIH0pKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgcmVkdXhDb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcclxudHlwZSBVc2VyUHJvZmlsZVByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPiAmIHtcclxuICBpZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxufTtcclxuXHJcbmNsYXNzIFVuY29ubmVjdGVkVXNlclByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VXNlclByb2ZpbGVQcm9wcz4ge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5yZXF1ZXN0RmV0Y2hQcm9maWxlKHRoaXMucHJvcHMuaWQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBwcm9maWxlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKHByb2ZpbGUpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17XCJtYi01XCJ9PlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+e3Byb2ZpbGUubmFtZX08L2g1PlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIHNjb3JlOiA8Yj57cHJvZmlsZS50b3RhbFNjb3JlfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXZlcmFnZSBzY29yZTogPGI+e3Byb2ZpbGUuYXZlcmFnZVNjb3JlLnRvRml4ZWQoMil9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lcyBjb250cmlidXRlZDogPGI+e3Byb2ZpbGUubmFtZXNDb250cmlidXRlZH08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuYmFuZHMubWFwKChiYW5kKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtTdHJpbmcoYmFuZC5faWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e2JhbmQuc2NvcmV9PC9CYWRnZT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2JhbmQubmFtZX08L2I+IChjcmVhdGVkIHtnZXRUaW1lU2luY2UobmV3IERhdGUoYmFuZC5jcmVhdGVkT24pKX0gYWdvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJQcm9maWxlID0gcmVkdXhDb25uZWN0b3IoVW5jb25uZWN0ZWRVc2VyUHJvZmlsZSk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWN0aW9uQ2hhbm5lbCwgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHVzZXJSZWNvcmRzQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvdXNlci1yZWNvcmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZHNSZXF1ZXN0Qm9keSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcm91dGUtaGFuZGxlcnMvdXNlci1yZWNvcmRzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB3YXRjaEZldGNoVXNlclJlY29yZHNTYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgY29uc3QgZmV0Y2hVc2VyUmVjb3Jkc0NoYW5uZWwgPSB5aWVsZCBhY3Rpb25DaGFubmVsKFxyXG4gICAgdXNlclJlY29yZHNBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJSZWNvcmRzLnR5cGVcclxuICApO1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoZmV0Y2hVc2VyUmVjb3Jkc0NoYW5uZWwpO1xyXG4gICAgY29uc3QgeyBudW1PZlJlY29yZHMsIHNvcnRUeXBlIH0gPSBwYXlsb2FkO1xyXG4gICAgeWllbGQgY2FsbChmZXRjaFVzZXJSZWNvcmRzLCBudW1PZlJlY29yZHMsIHNvcnRUeXBlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZmV0Y2hVc2VyUmVjb3JkcyhcclxuICBtYXhSZWNvcmRzOiBudW1iZXIsXHJcbiAgc29ydEJ5OiBVc2VyUmVjb3JkU29ydFR5cGVzXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLmdldFVzZXJSZWNvcmRzLFxyXG4gICAgICB7IG51bU9mUmVjb3JkczogbWF4UmVjb3Jkcywgc29ydFR5cGU6IHNvcnRCeSB9XHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgeWllbGQgcHV0KHVzZXJSZWNvcmRzQWN0aW9ucy5mZXRjaFVzZXJSZWNvcmRzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh1c2VyUmVjb3Jkc0FjdGlvbnMuZmV0Y2hVc2VyUmVjb3Jkc0ZhaWx1cmUoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuLy8gVE9ETzogVGhpcyBkb2Vzbid0IHdvcmsgcmlnaHQgb24gdGhlIGRhdGFiYXNlIHNpZGUhXHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGJhbmRTY29yZU1vZGlmaWNhdGlvblNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKGJhbmRBY3Rpb25zLnJlcXVlc3RNb2RpZnlCYW5kU2NvcmUudHlwZSk7XHJcbiAgICBjb25zdCB7IHRhcmdldEJhbmRJZCwgbW9kaWZ5aW5nVXNlcklkLCBtb2RpZmljYXRpb25WYWx1ZSB9ID0gcGF5bG9hZDtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibW9kaWZpY2F0aW9uIHZhbHVlIGluIHNhZ2E6IFwiLCBtb2RpZmljYXRpb25WYWx1ZSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5wb3N0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLm1vZGlmeUJhbmQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgbW9kaWZ5aW5nVXNlcklkLFxyXG4gICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIGlmIChtb2RpZmljYXRpb25WYWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHRhcmdldEJhbmRJZCxcclxuICAgICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWU6IC1wYXlsb2FkLnVuZG9WYWx1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBiYW5kQWN0aW9ucy5tb2RpZnlCYW5kU2NvcmVTdWNjZXNzKHtcclxuICAgICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgICBtb2RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLm1vZGlmeUJhbmRTY29yZUZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2ZXJVcmwgPVxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiaHR0cDovL2xvY2FsaG9zdDo3Nzc3XCI7XHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGUgPSBcIi9hcGkvYXV0aGVudGljYXRlXCI7XHJcbmV4cG9ydCBjb25zdCBwb3N0QmFuZHMgPSBcIi9hcGkvYmFuZHNcIjtcclxuZXhwb3J0IGNvbnN0IG1vZGlmeUJhbmQgPSBcIi9hcGkvYmFuZC9tb2RpZnlcIjtcclxuZXhwb3J0IGNvbnN0IG5ld0JhbmQgPSBcIi9hcGkvYmFuZC9uZXdcIjtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSBcIi9hcGkvY3JlYXRlLXVzZXJcIjtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJuYW1lID0gXCIvYXBpL3VzZXJuYW1lcy9nZXRcIjtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJSZWNvcmRzID0gXCIvYXBpL3VzZXJzL2dldFwiO1xyXG5leHBvcnQgY29uc3Qgc2Vzc2lvbkVuZHBvaW50ID0gXCIvYXBpL3Nlc3Npb25cIjtcclxuXHJcblxyXG5jb25zdCBnZXRVc2VyUHJvZmlsZUJhc2UgPSBcIi9hcGkvdXNlci1wcm9maWxlXCI7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyUHJvZmlsZUVuZHBvaW50ID0gZ2V0VXNlclByb2ZpbGVCYXNlICsgXCIvOnVzZXJJZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdldFVzZXJQcm9maWxlVXJsKFxyXG4gIHRhcmdldFVzZXJJZCAvKjogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCovXHJcbik6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGdldFVzZXJQcm9maWxlQmFzZSArIFwiL1wiICsgdGFyZ2V0VXNlcklkIC8qLnRvSGV4U3RyaW5nKi87XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25DaGFubmVsLCBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY2hlY2tTZXNzaW9uU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICB5aWVsZCB0YWtlKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDaGVja1Nlc3Npb24udHlwZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MuZ2V0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLnNlc3Npb25FbmRwb2ludCxcclxuICAgICAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICBjb25zdCB7IHVzZXJJZCwgdXNlcm5hbWUsIGJhbmRzTW9kaWZpZWQgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuY2hlY2tTZXNzaW9uU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGJhbmRzTW9kaWZpZWQsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmNoZWNrU2Vzc2lvbkZhaWx1cmUoKSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMuY2hlY2tTZXNzaW9uRmFpbHVyZSgpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJhbmRDcmVhdGlvblN0YXR1c2VzLFxyXG4gIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLFxyXG4gIEJhbmRTb3J0VHlwZXMsXHJcbn0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxudHlwZSBTY29yZU1vZGlmaWNhdGlvblN0YXRlID0ge1xyXG4gIHN0YXR1czogQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXM7XHJcbiAgLy8gVE9ETzogVGhpcyBuZWVkcyB0byByZWZlciB0byBhIGJhbmQncyBJRFxyXG4gIHRhcmdldD86IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbn07XHJcblxyXG50eXBlIEJhbmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogbnVtYmVyO1xyXG4gIGNyZWF0aW9uU3RhdHVzOiBCYW5kQ3JlYXRpb25TdGF0dXNlcztcclxuICBpdGVtczogQmFuZENsYXNzW107XHJcbiAgc2NvcmVNb2RpZmljYXRpb25TdGF0ZTogU2NvcmVNb2RpZmljYXRpb25TdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogQmFuZHNTbGljZVN0YXRlID0ge1xyXG4gIHBlbmRpbmdGZXRjaGVzOiAwLFxyXG4gIGl0ZW1zOiBbXSxcclxuICBjcmVhdGlvblN0YXR1czogQmFuZENyZWF0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICBzY29yZU1vZGlmaWNhdGlvblN0YXRlOiB7XHJcbiAgICBzdGF0dXM6IEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLk5PVF9UUllJTkcsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGJhbmRzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJiYW5kc1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8gQmFuZCBmZXRjaGluZ1xyXG4gICAgcmVxdWVzdEZldGNoQmFuZHMoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIG1heEJhbmRzOiBudW1iZXI7XHJcbiAgICAgICAgc29ydEJ5OiBCYW5kU29ydFR5cGVzO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzKys7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hCYW5kc1N1Y2Nlc3Moc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxCYW5kQ2xhc3NbXT4pIHtcclxuICAgICAgYWN0aW9uLnBheWxvYWQuZm9yRWFjaCgobmV3QmFuZCkgPT4ge1xyXG4gICAgICAgIGlmICghc3RhdGUuaXRlbXMuc29tZSgoYmFuZCkgPT4gYmFuZC5faWQgPT0gbmV3QmFuZC5faWQpKVxyXG4gICAgICAgICAgc3RhdGUuaXRlbXMucHVzaChuZXdCYW5kKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hCYW5kc0ZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMtLTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQmFuZCBjcmVhdGlvblxyXG4gICAgcmVxdWVzdENyZWF0ZUJhbmQoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIGNyZWF0aW5nVXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIGJhbmROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgY3JlYXRpbmdVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmNyZWF0aW9uU3RhdHVzID0gQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRJTkc7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQmFuZFN1Y2Nlc3Moc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxCYW5kQ2xhc3M+KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwib2theSB3aGF5dHMgdXBcIilcclxuICAgICAgc3RhdGUuY3JlYXRpb25TdGF0dXMgPSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVEVEO1xyXG4gICAgICBzdGF0ZS5pdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVCYW5kRmFpbHVyZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEJhbmRDcmVhdGlvblN0YXR1c2VzPikge1xyXG4gICAgICBzdGF0ZS5jcmVhdGlvblN0YXR1cyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBNb2RpZnkgYmFuZCBzY29yZVxyXG4gICAgcmVxdWVzdE1vZGlmeUJhbmRTY29yZShcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdGFyZ2V0QmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIG1vZGlmeWluZ1VzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICBtb2RpZmljYXRpb25WYWx1ZTogbnVtYmVyO1xyXG4gICAgICAgIHVuZG9WYWx1ZT86IG51bWJlcjtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnN0YXR1cyA9XHJcbiAgICAgICAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuQVRURU1QVElORztcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS50YXJnZXQgPSBhY3Rpb24ucGF5bG9hZC50YXJnZXRCYW5kSWQ7XHJcbiAgICB9LFxyXG4gICAgbW9kaWZ5QmFuZFNjb3JlU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEJhbmRJbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleChcclxuICAgICAgICAoYmFuZCkgPT4gYmFuZC5faWQgPT09IGFjdGlvbi5wYXlsb2FkLnRhcmdldEJhbmRJZFxyXG4gICAgICApO1xyXG4gICAgICBzdGF0ZS5pdGVtc1t0YXJnZXRCYW5kSW5kZXhdLnNjb3JlICs9IGFjdGlvbi5wYXlsb2FkLm1vZGlmaWNhdGlvblZhbHVlO1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnN0YXR1cyA9XHJcbiAgICAgICAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuU1VDQ0VTUztcclxuICAgIH0sXHJcbiAgICBtb2RpZnlCYW5kU2NvcmVGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIC8vIFRPRE86IFNob3VsZG4ndCB3ZSBiZSBnZXR0aW5nIGEgcmVhc29uIGZvciB0aGUgZmFpbHVyZSBoZXJlP1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnN0YXR1cyA9XHJcbiAgICAgICAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuRkFJTFVSRTtcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS50YXJnZXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhbmRBY3Rpb25zID0gYmFuZHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBiYW5kc1NsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGdldERlZmF1bHRNaWRkbGV3YXJlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGJhbmRzUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHNlc3Npb25SZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB1c2VyUmVjb3Jkc1JlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZVwiO1xyXG5pbXBvcnQgdXNlclByb2ZpbGVSZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuXHJcbmltcG9ydCAqIGFzIHNhZ2FzIGZyb20gXCIuL3NhZ2FzXCI7XHJcblxyXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbLi4uZ2V0RGVmYXVsdE1pZGRsZXdhcmUoeyB0aHVuazogZmFsc2UgfSksIHNhZ2FNaWRkbGV3YXJlXTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBiYW5kczogYmFuZHNSZWR1Y2VyLFxyXG4gIHNlc3Npb246IHNlc3Npb25SZWR1Y2VyLFxyXG4gIHVzZXJSZWNvcmRzOiB1c2VyUmVjb3Jkc1JlZHVjZXIsXHJcbiAgdXNlclByb2ZpbGU6IHVzZXJQcm9maWxlUmVkdWNlclxyXG59KTtcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxyXG4gIG1pZGRsZXdhcmU6IG1pZGRsZXdhcmUsXHJcbn0pO1xyXG5cclxuZm9yIChjb25zdCBzYWdhIGluIHNhZ2FzKSB7XHJcbiAgc2FnYU1pZGRsZXdhcmUucnVuKHNhZ2FzW3NhZ2FdKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlLCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgeyBVc2VyQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB1c2VyQ3JlYXRpb25TYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0Q3JlYXRlVXNlci50eXBlKTtcclxuICAgIGNvbnN0IHsgLyplbWFpbCwqLyB1c2VybmFtZSwgcGFzc3dvcmQsIHJlcGVhdFBhc3N3b3JkIH0gPSBwYXlsb2FkO1xyXG5cclxuICAgIC8vIGlmICghZW1haWxJc1ZhbGlkKGVtYWlsKSkge1xyXG4gICAgLy8gICB5aWVsZCBwdXQoXHJcbiAgICAvLyAgICAgc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgLy8gICAgICAgcmVhc29uOiBVc2VyQ3JlYXRpb25TdGF0dXNlcy5JTlZBTElEX0VNQUlMLFxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgICBpZiAocGFzc3dvcmQgIT09IHJlcGVhdFBhc3N3b3JkKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgICAgICAgICByZWFzb246IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBBU1NXT1JEU19ET05UX01BVENILFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLmNyZWF0ZVVzZXIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAvLyBlbWFpbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyU3VjY2VzcygpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyRmFpbHVyZSh7XHJcbiAgICAgICAgICAgICAgcmVhc29uOiBlcnJvci5yZXNwb25zZS5kYXRhLnJlYXNvbixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbWFpbElzVmFsaWQoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICByZXR1cm4gcmUudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcbiIsImltcG9ydCB7IHRha2UsIHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgdXNlclByb2ZpbGVBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuaW1wb3J0IHsgY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoUHJvZmlsZVNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKFxyXG4gICAgICB1c2VyUHJvZmlsZUFjdGlvbnMucmVxdWVzdEZldGNoVXNlclByb2ZpbGUudHlwZVxyXG4gICAgKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gICAgY29uc3QgdGFyZ2V0SWQgPSBwYXlsb2FkLnRhcmdldElkO1xyXG4gICAgLy8gY29uc29sZS5sb2codGFyZ2V0SWQpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwodGFyZ2V0SWQpKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLmdldCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBjcmVhdGVHZXRVc2VyUHJvZmlsZVVybCh0YXJnZXRJZClcclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICB1c2VyUHJvZmlsZUFjdGlvbnMuZmV0Y2hVc2VyUHJvZmlsZVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICBwcm9maWxlOiByZXNwb25zZS5kYXRhLnByb2ZpbGUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHVzZXJQcm9maWxlQWN0aW9ucy5mZXRjaFVzZXJQcm9maWxlRmFpbHVyZSgpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh1c2VyUHJvZmlsZUFjdGlvbnMuZmV0Y2hVc2VyUHJvZmlsZUZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcywgVXNlckNyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzLCBTVEFURVMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbnR5cGUgU2Vzc2lvbkJhbmRNb2RpZmljYXRpb24gPSB7XHJcbiAgdGFyZ2V0QmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIFNlc3Npb25TbGljZVN0YXRlID0ge1xyXG4gIGF1dGhlbnRpY2F0aW9uU3RhdHVzOiBBdXRoZW50aWNhdGlvblN0YXR1c2VzO1xyXG4gIHVzZXJJZD86IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgdXNlckNyZWF0aW9uU3RhdHVzOiBVc2VyQ3JlYXRpb25TdGF0dXNlcztcclxuICBiYW5kc01vZGlmaWVkOiBTZXNzaW9uQmFuZE1vZGlmaWNhdGlvbltdO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTZXNzaW9uU2xpY2VTdGF0ZSA9IHtcclxuICBhdXRoZW50aWNhdGlvblN0YXR1czogQXV0aGVudGljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIHVzZXJJZDogdW5kZWZpbmVkLFxyXG4gIHVzZXJuYW1lOiB1bmRlZmluZWQsXHJcbiAgdXNlckNyZWF0aW9uU3RhdHVzOiBVc2VyQ3JlYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIGJhbmRzTW9kaWZpZWQ6IFtdLFxyXG59O1xyXG5cclxuY29uc3Qgc2Vzc2lvblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwic2Vzc2lvblwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8gU2Vzc2lvbiBjaGVja2luZ1xyXG4gICAgcmVxdWVzdENoZWNrU2Vzc2lvbihzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRJTkc7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tTZXNzaW9uU3VjY2VzcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgYmFuZHNNb2RpZmllZDogU2Vzc2lvbkJhbmRNb2RpZmljYXRpb25bXTtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRDtcclxuICAgICAgc3RhdGUudXNlcklkID0gYWN0aW9uLnBheWxvYWQudXNlcklkO1xyXG4gICAgICBzdGF0ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lO1xyXG4gICAgICBzdGF0ZS5iYW5kc01vZGlmaWVkID0gYWN0aW9uLnBheWxvYWQuYmFuZHNNb2RpZmllZDtcclxuICAgIH0sXHJcbiAgICBjaGVja1Nlc3Npb25GYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVc2VyIGF1dGhlbnRpY2F0aW9uXHJcbiAgICByZXF1ZXN0QXV0aGVudGljYXRlVXNlcihcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVElORztcclxuICAgIH0sXHJcbiAgICBhdXRoZW50aWNhdGVVc2VyU3VjY2VzcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgYmFuZHNNb2RpZmllZDogU2Vzc2lvbkJhbmRNb2RpZmljYXRpb25bXTtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRDtcclxuICAgICAgc3RhdGUudXNlcklkID0gYWN0aW9uLnBheWxvYWQudXNlcklkO1xyXG4gICAgICBzdGF0ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lO1xyXG4gICAgICBzdGF0ZS5iYW5kc01vZGlmaWVkID0gYWN0aW9uLnBheWxvYWQuYmFuZHNNb2RpZmllZDtcclxuICAgIH0sXHJcbiAgICBhdXRoZW50aWNhdGVVc2VyRmFpbHVyZShzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gYWN0aW9uLnBheWxvYWQucmVhc29uO1xyXG4gICAgICAvLyBUT0RPOiBJcyBpdCBuZWNlc3NhcnkgdG8gcmVzZXQgdGhpcyB0byBudWxsIGhlcmU/XHJcbiAgICAgIHN0YXRlLnVzZXJJZCA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlciBsb2dvdXRcclxuICAgIHJlcXVlc3RMb2dvdXQoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkxPR0dJTkdfT1VUO1xyXG4gICAgfSxcclxuICAgIGxvZ291dEZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLlNFUlZFUl9FUlJPUjtcclxuICAgIH0sXHJcbiAgICBsb2dvdXRTdWNjZXNzKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVc2VyIGNyZWF0aW9uXHJcbiAgICByZXF1ZXN0Q3JlYXRlVXNlcihcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgLy8gZW1haWw6IHN0cmluZztcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgcmVwZWF0UGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS51c2VyQ3JlYXRpb25TdGF0dXMgPSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZVVzZXJTdWNjZXNzKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnVzZXJDcmVhdGlvblN0YXR1cyA9IFVzZXJDcmVhdGlvblN0YXR1c2VzLlNVQ0NFU1M7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlVXNlckZhaWx1cmUoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS51c2VyQ3JlYXRpb25TdGF0dXMgPSBhY3Rpb24ucGF5bG9hZC5yZWFzb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgLy8gQmFuZCBtb2RpZmljYXRpb25cclxuICAgIFtiYW5kQWN0aW9ucy5tb2RpZnlCYW5kU2NvcmVTdWNjZXNzLnR5cGVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5iYW5kc01vZGlmaWVkLnB1c2goe1xyXG4gICAgICAgIHRhcmdldEJhbmRJZDogYWN0aW9uLnBheWxvYWQudGFyZ2V0QmFuZElkLFxyXG4gICAgICAgIHZhbHVlOiBhY3Rpb24ucGF5bG9hZC5tb2RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlc3Npb25BY3Rpb25zID0gc2Vzc2lvblNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25TbGljZS5yZWR1Y2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBoaXN0b3J5IH0gZnJvbSBcIi4uL3N0b3JlL2hpc3RvcnlcIjtcclxuaW1wb3J0IHsgQmlnQmFuZFRhYmxlIH0gZnJvbSBcIi4vQmlnQmFuZFRhYmxlXCI7XHJcbmltcG9ydCB7IExhbmRpbmcgfSBmcm9tIFwiLi9MYW5kaW5nXCI7XHJcbmltcG9ydCB7IExvZ2luIH0gZnJvbSBcIi4vTG9naW5cIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCIuL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgTmV3VXNlckZvcm0gfSBmcm9tIFwiLi9OZXdVc2VyXCI7XHJcbmltcG9ydCB7IFVzZXJQcm9maWxlIH0gZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcclxuXHJcbi8vIGNvbnN0IEF1dGhlbnRpY2F0aW9uR3VhcmQgPSAoQ29tcG9uZW50KSA9PiAoeyBtYXRjaCB9KSA9PiB7XHJcbi8vICAgaWYgKFxyXG4vLyAgICAgc3RvcmUuZ2V0U3RhdGUoKS5zZXNzaW9uLmF1dGhlbnRpY2F0aW9uU3RhdHVzICE9PVxyXG4vLyAgICAgQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEXHJcbi8vICAgKSB7XHJcbi8vICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL1wiIC8+O1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gPENvbXBvbmVudCBtYXRjaD17bWF0Y2h9IC8+O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW4gPSAoKSA9PiAoXHJcbiAgLy8gVE9ETzogV2hhdCBpcyB0aGUgUm91dGVyJ3MgXCJoaXN0b3J5XCIgYWxsIGFib3V0P1xyXG4gIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2JhbmRzXCIgY29tcG9uZW50PXtCaWdCYW5kVGFibGV9IC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL25ldy11c2VyXCIgY29tcG9uZW50PXtOZXdVc2VyRm9ybX0gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0xhbmRpbmd9IC8+XHJcbiAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICBwYXRoPVwiL3VzZXJzLzp1c2VySWRcIlxyXG4gICAgICAgICAgY29tcG9uZW50PXsoeyBtYXRjaCB9KSA9PiA8VXNlclByb2ZpbGUgaWQ9e21hdGNoLnBhcmFtcy51c2VySWR9IC8+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICA8L1JvdXRlcj5cclxuKTtcclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcImRaWkhcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiaTNYcFwiOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ3JlYXRlQmFuZEZvcm0gfSBmcm9tIFwiLi9DcmVhdGVCYW5kRm9ybVwiO1xyXG5pbXBvcnQgeyBCaWdCYW5kVGFibGUgfSBmcm9tIFwiLi9CaWdCYW5kVGFibGVcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9Db250YWluZXJcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3Jkc0xpc3QgfSBmcm9tIFwiLi9Vc2VyUmVjb3Jkc0xpc3RcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgSnVtYm90cm9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSnVtYm90cm9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTGFuZGluZyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgey8qIDxKdW1ib3Ryb24+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJsYW5kaW5nVGl0bGVcIj5XaGF0IGFib3V0IGEgYmFuZCBjYWxsZWQuLi48L2gxPlxyXG4gICAgPC9KdW1ib3Ryb24+ICovfVxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgICA8Q29sIG1kPXs4fSBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgICAgIDxDcmVhdGVCYW5kRm9ybSAvPlxyXG4gICAgICAgICAgPEJpZ0JhbmRUYWJsZSAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezR9PlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+TW9zdCBOYW1lcyBDb250cmlidXRlZDwvaDU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPFVzZXJSZWNvcmRzTGlzdFxyXG4gICAgICAgICAgICAgICAgbWF4UmVjb3Jkcz17MTB9XHJcbiAgICAgICAgICAgICAgICBzb3J0VHlwZT17VXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+SGlnaGVzdCBBdmVyYWdlIFNjb3JlPC9oNT5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8VXNlclJlY29yZHNMaXN0XHJcbiAgICAgICAgICAgICAgICBtYXhSZWNvcmRzPXsxMH1cclxuICAgICAgICAgICAgICAgIHNvcnRUeXBlPXtVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfQVZFUkFHRV9TQ09SRX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGg1PkhpZ2hlc3QgU2NvcmU8L2g1PlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxVc2VyUmVjb3Jkc0xpc3RcclxuICAgICAgICAgICAgICAgIG1heFJlY29yZHM9ezEwfVxyXG4gICAgICAgICAgICAgICAgc29ydFR5cGU9e1VzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9TQ09SRX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICA8Lz5cclxuKTtcclxuIiwiLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJyZWFjdC1ib290c3RyYXAvQWxlcnRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9TcGlubmVyXCI7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBzZXNzaW9uIH0pID0+ICh7XHJcbiAgYXV0aGVudGljYXRpb25TdGF0dXM6IHNlc3Npb24uYXV0aGVudGljYXRpb25TdGF0dXMsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGF1dGhlbnRpY2F0ZVVzZXI6ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+XHJcbiAgICBkaXNwYXRjaChzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0QXV0aGVudGljYXRlVXNlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSksXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdXhDb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcclxudHlwZSBMb2dpblByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPjtcclxuXHJcbnR5cGUgTG9naW5TdGF0ZSA9IHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PExvZ2luUHJvcHMsIExvZ2luU3RhdGU+IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhdXRoZW50aWNhdGlvblN0YXR1cywgYXV0aGVudGljYXRlVXNlciB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzZyZW1cIiB9fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNVc2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuVVNFUk5BTUVfTk9UX0ZPVU5EXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICBOZXcgdXNlcj8gQ3JlYXRlIGFuIGFjY291bnQgPGEgaHJlZj1cIi9uZXctdXNlclwiPmhlcmU8L2E+LlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLlRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIHVzZXJuYW1lLlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuSU5WQUxJRF9QQVNTV09SRFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIEluY29ycmVjdCBwYXNzd29yZC5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgICBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HIHx8XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlVXNlcih0aGlzLnN0YXRlLnVzZXJuYW1lLCB0aGlzLnN0YXRlLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIHthdXRoZW50aWNhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVElORyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgdmFyaWFudD1cInByaW1hcnlcIiAvPiBQcm9jZXNzaW5nLi4uXHJcbiAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2F1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5TdWNjZXNzZnVsbHkgbG9nZ2VkIGluITwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTG9naW4gPSBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShVbmNvbm5lY3RlZExvZ2luKTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVzZXJQcm9maWxlVXJsKHVzZXJJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gXCIvdXNlcnMvXCIgKyB1c2VySWQ7XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi9jb21wb25lbnRzL01haW5cIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPE1haW4gLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcclxuKTtcclxuIiwiLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgU3ludGhldGljRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25Hcm91cFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBCYWRnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0JhZGdlXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9UYWJsZVwiO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVG9nZ2xlQnV0dG9uXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMsIEJhbmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IHNvcnRBbmRMaW1pdEJhbmRzIH0gZnJvbSBcIi4vdXRpbGl0eS9saW1pdC1zb3J0LWJhbmRzXCI7XHJcbmltcG9ydCB7XHJcbiAgQmFuZE1vZEJ1dHRvbkdyb3VwLFxyXG4gIFBsYWNlaG9sZGVyQmFuZE1vZEJ1dHRvbkdyb3VwLFxyXG59IGZyb20gXCIuL0JhbmRNb2RCdXR0b25Hcm91cFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmUvXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgY3JlYXRlVXNlclByb2ZpbGVVcmwgfSBmcm9tIFwiLi91dGlsaXR5L2NyZWF0ZS11c2VyLXByb2ZpbGUtdXJsXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXJcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRCYW5kc1BlckZldGNoID0gMjA7XHJcblxyXG4vLyBUT0RPOiBTb21ldGhpbmcgc2hvdWxkIGRpc3BsYXkgd2hlbiB3ZSBoYXZlIG5vIGJhbmRzIHRvIGRpc3BsYXkhXHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFJvb3RTdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhcHBJc0ZldGNoaW5nQmFuZHM6IHN0YXRlLmJhbmRzLnBlbmRpbmdGZXRjaGVzID4gMCxcclxuICAgIGJhbmRzOiBbLi4uc3RhdGUuYmFuZHMuaXRlbXNdLFxyXG4gICAgdXNlcklzQXV0aGVudGljYXRlZDpcclxuICAgICAgc3RhdGUuc2Vzc2lvbi5hdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuICAgICAgICA/IHRydWVcclxuICAgICAgICA6IGZhbHNlLFxyXG4gICAgdXNlcklkOiBzdGF0ZS5zZXNzaW9uLnVzZXJJZCxcclxuICAgIHVzZXJzTW9kaWZpY2F0aW9uczogc3RhdGUuc2Vzc2lvbi5iYW5kc01vZGlmaWVkLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhZGRQb2ludHNUbzogKFxyXG4gICAgICB0YXJnZXRCYW5kSWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgIG1vZGlmaWNhdGlvblZhbHVlOiBudW1iZXIsXHJcbiAgICAgIG1vZGlmeWluZ1VzZXJJZD86IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgIHVuZG9WYWx1ZT86IG51bWJlclxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGlmIChtb2RpZnlpbmdVc2VySWQpIHtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RNb2RpZnlCYW5kU2NvcmUoe1xyXG4gICAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICAgIG1vZGlmeWluZ1VzZXJJZCxcclxuICAgICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgIHVuZG9WYWx1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlcXVlc3RGZXRjaEJhbmRzOiAobWF4QmFuZHM6IG51bWJlciwgc29ydEJ5OiBCYW5kU29ydFR5cGVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKGJhbmRBY3Rpb25zLnJlcXVlc3RGZXRjaEJhbmRzKHsgbWF4QmFuZHMsIHNvcnRCeSB9KSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHJlZHV4Q29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbnR5cGUgQmlnQmFuZFRhYmxlUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+O1xyXG5cclxudHlwZSBCaWdCYW5kVGFibGVTdGF0ZSA9IHtcclxuICBzb3J0VHlwZTogQmFuZFNvcnRUeXBlcztcclxuICBiYW5kc1BlckZldGNoOiBudW1iZXI7XHJcbiAgc2hvdWxkRmV0Y2hCYW5kczogYm9vbGVhbjtcclxuICBtYXhCYW5kc0Rpc3BsYXllZDogbnVtYmVyO1xyXG59O1xyXG5cclxuY2xhc3MgVW5jb25uZWN0ZWRCaWdCYW5kVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XHJcbiAgQmlnQmFuZFRhYmxlUHJvcHMsXHJcbiAgQmlnQmFuZFRhYmxlU3RhdGVcclxuPiB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzb3J0VHlwZTogQmFuZFNvcnRUeXBlcy5NT1NUX1JFQ0VOVCxcclxuICAgIGJhbmRzUGVyRmV0Y2g6IGRlZmF1bHRCYW5kc1BlckZldGNoLFxyXG4gICAgc2hvdWxkRmV0Y2hCYW5kczogZmFsc2UsXHJcbiAgICBtYXhCYW5kc0Rpc3BsYXllZDogZGVmYXVsdEJhbmRzUGVyRmV0Y2gsXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLnJlcXVlc3RGZXRjaEJhbmRzKHRoaXMuc3RhdGUuYmFuZHNQZXJGZXRjaCwgdGhpcy5zdGF0ZS5zb3J0VHlwZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoXHJcbiAgICBwcmV2UHJvcHM6IEJpZ0JhbmRUYWJsZVByb3BzLFxyXG4gICAgcHJldlN0YXRlOiBCaWdCYW5kVGFibGVTdGF0ZVxyXG4gICkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnN0YXRlLm1heEJhbmRzRGlzcGxheWVkID4gcHJldlN0YXRlLm1heEJhbmRzRGlzcGxheWVkIHx8XHJcbiAgICAgIHRoaXMuc3RhdGUuc2hvdWxkRmV0Y2hCYW5kc1xyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucmVxdWVzdEZldGNoQmFuZHMoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCxcclxuICAgICAgICB0aGlzLnN0YXRlLnNvcnRUeXBlXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG91bGRGZXRjaEJhbmRzOiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0VHlwZSAhPT0gcHJldlN0YXRlLnNvcnRUeXBlKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1heEJhbmRzRGlzcGxheWVkOiB0aGlzLnN0YXRlLmJhbmRzUGVyRmV0Y2gsXHJcbiAgICAgICAgc2hvdWxkRmV0Y2hCYW5kczogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTb3J0VHlwZShuZXdUeXBlOiBCYW5kU29ydFR5cGVzKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc29ydFR5cGU6IG5ld1R5cGUgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkTW9yZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWF4QmFuZHNEaXNwbGF5ZWQ6IHN0YXRlLm1heEJhbmRzRGlzcGxheWVkICsgc3RhdGUuYmFuZHNQZXJGZXRjaCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlck1vZGlmaWNhdGlvblRvQmFuZCh0aGlzQmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkKSB7XHJcbiAgICBjb25zdCBtb2RpZmljYXRpb24gPSB0aGlzLnByb3BzLnVzZXJzTW9kaWZpY2F0aW9ucy5maW5kKFxyXG4gICAgICAobW9kaWZpY2F0aW9uKSA9PiBtb2RpZmljYXRpb24udGFyZ2V0QmFuZElkID09PSB0aGlzQmFuZElkXHJcbiAgICApO1xyXG4gICAgaWYgKG1vZGlmaWNhdGlvbikgcmV0dXJuIG1vZGlmaWNhdGlvbi52YWx1ZTtcclxuICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyBUT0RPOiBTaG91bGQgd2UgaGF2ZSBzb21lIG5vdGlmaWNhdGlvbiB0aGF0IGJhbmRzIGFyZSBiZWluZyBmZXRjaGVkP1xyXG4gICAgY29uc3QgZGVzaXJlZEJhbmRzID0gc29ydEFuZExpbWl0QmFuZHMoXHJcbiAgICAgIHRoaXMucHJvcHMuYmFuZHMsXHJcbiAgICAgIHRoaXMuc3RhdGUuc29ydFR5cGUsXHJcbiAgICAgIHRoaXMuc3RhdGUubWF4QmFuZHNEaXNwbGF5ZWRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc29ydFJhZGlvcyA9IFtcclxuICAgICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5CRVNULCBuYW1lOiBcIkJlc3RcIiB9LFxyXG4gICAgICB7IHZhbHVlOiBCYW5kU29ydFR5cGVzLldPUlNULCBuYW1lOiBcIldvcnN0XCIgfSxcclxuICAgICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5NT1NUX1JFQ0VOVCwgbmFtZTogXCJNb3N0IFJlY2VudFwiIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHsgdXNlcklzQXV0aGVudGljYXRlZCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICA8QnV0dG9uR3JvdXAgdG9nZ2xlPlxyXG4gICAgICAgICAgICB7c29ydFJhZGlvcy5tYXAoKHJhZGlvLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cmFkaW8udmFsdWV9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic29ydFJhZGlvXCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3JhZGlvLnZhbHVlID09PSB0aGlzLnN0YXRlLnNvcnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBTeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQgYXMgdHlwZW9mIGUuY3VycmVudFRhcmdldCAmIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBzb3J0VHlwZUFzTnVtYmVyOiBudW1iZXIgPSBwYXJzZUludChcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U29ydFR5cGUoc29ydFR5cGVBc051bWJlcik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtyYWRpby5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPFRhYmxlIHNpemU9XCJzbVwiIHN0cmlwZWQgYm9yZGVyZWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hcHBJc0ZldGNoaW5nQmFuZHMgPyAoXHJcbiAgICAgICAgICAgICAgICA8PntnZXRFbnRyeVBsYWNlaG9sZGVycyhkZWZhdWx0QmFuZHNQZXJGZXRjaCl9PC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtkZXNpcmVkQmFuZHMubWFwKChiYW5kKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17U3RyaW5nKGJhbmQuX2lkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5kTW9kQnV0dG9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySXNBdXRob3JpemVkPXt1c2VySXNBdXRoZW50aWNhdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZFBlcmZvcm1lZD17dGhpcy5nZXRVc2VyTW9kaWZpY2F0aW9uVG9CYW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFuZC5faWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUJhbmQ9eyhtb2RWYWx1ZSwgdW5kb1ZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hZGRQb2ludHNUbyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFuZC5faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kb1ZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTY29yZT17YmFuZC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e2JhbmQuc2NvcmV9PC9CYWRnZT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtiYW5kLm5hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiZm9udC13ZWlnaHQtbGlnaHRlclwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9te1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtjcmVhdGVVc2VyUHJvZmlsZVVybChTdHJpbmcoYmFuZC5vd25lcklkKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JhbmQub3duZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgYmxvY2sgb25DbGljaz17KCkgPT4gdGhpcy5sb2FkTW9yZSgpfT5cclxuICAgICAgICAgICAgU2hvdyBtZSBtb3JlLi4uXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVudHJ5UGxhY2Vob2xkZXJzKG51bU9mUGxhY2Vob2xkZXJzOiBudW1iZXIpOiBKU1guRWxlbWVudFtdIHtcclxuICBjb25zdCBwbGFjZWhvbGRlcnM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU9mUGxhY2Vob2xkZXJzOyBpKyspIHtcclxuICAgIHBsYWNlaG9sZGVycy5wdXNoKEJhbmRUYWJsZUVudHJ5UGxhY2Vob2xkZXIoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBwbGFjZWhvbGRlcnM7XHJcbn1cclxuXHJcbmNvbnN0IEJhbmRUYWJsZUVudHJ5UGxhY2Vob2xkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0cj5cclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxQbGFjZWhvbGRlckJhbmRNb2RCdXR0b25Hcm91cCAvPntcIiBcIn1cclxuICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJzbVwiIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQmlnQmFuZFRhYmxlID0gY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVW5jb25uZWN0ZWRCaWdCYW5kVGFibGUpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgVXNlclJlY29yZCA9IHtcclxuICBpZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdG90YWxTY29yZTogbnVtYmVyO1xyXG4gIG5hbWVzQ29udHJpYnV0ZWQ6IG51bWJlcjtcclxuICBhdmVyYWdlU2NvcmU6IG51bWJlcjtcclxufTtcclxuXHJcbnR5cGUgVXNlclJlY29yZHNTbGljZVN0YXRlID0ge1xyXG4gIHBlbmRpbmdGZXRjaGVzOiBudW1iZXI7XHJcbiAgaXRlbXM6IFVzZXJSZWNvcmRbXTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclJlY29yZHNTbGljZVN0YXRlID0ge1xyXG4gIHBlbmRpbmdGZXRjaGVzOiAwLFxyXG4gIGl0ZW1zOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHVzZXJSZWNvcmRzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJ1c2VyUmVjb3Jkc1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgcmVxdWVzdEZldGNoVXNlclJlY29yZHMoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIG51bU9mUmVjb3JkczogbnVtYmVyO1xyXG4gICAgICAgIHNvcnRUeXBlOiBVc2VyUmVjb3JkU29ydFR5cGVzO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzKys7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyUmVjb3Jkc1N1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248VXNlclJlY29yZFtdPlxyXG4gICAgKSB7XHJcbiAgICAgIGFjdGlvbi5wYXlsb2FkLmZvckVhY2goKG5ld1JlY29yZCkgPT4ge1xyXG4gICAgICAgIGlmICghc3RhdGUuaXRlbXMuc29tZSgocmVjb3JkKSA9PiByZWNvcmQuaWQgPT0gbmV3UmVjb3JkLmlkKSlcclxuICAgICAgICAgIHN0YXRlLml0ZW1zLnB1c2gobmV3UmVjb3JkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyUmVjb3Jkc0ZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMtLTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyUmVjb3Jkc0FjdGlvbnMgPSB1c2VyUmVjb3Jkc1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWNvcmRzU2xpY2UucmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHtcclxuICB1c2VyUmVjb3Jkc0FjdGlvbnMsXHJcbiAgVXNlclJlY29yZCxcclxufSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmUvXCI7XHJcbmltcG9ydCB7IHNvcnRBbmRMaW1pdFVzZXJSZWNvcmRzIH0gZnJvbSBcIi4vdXRpbGl0eS9saW1pdC1zb3J0LXVzZXItcmVjb3Jkc1wiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9UYWJsZVwiO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CYWRnZVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgY3JlYXRlVXNlclByb2ZpbGVVcmwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlsaXR5L2NyZWF0ZS11c2VyLXByb2ZpbGUtdXJsXCJcclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogUm9vdFN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFwcElzRmV0Y2hpbmdSZWNvcmRzOiBzdGF0ZS51c2VyUmVjb3Jkcy5wZW5kaW5nRmV0Y2hlcyA+IDAsXHJcbiAgICByZWNvcmRzOiBbLi4uc3RhdGUudXNlclJlY29yZHMuaXRlbXNdLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXF1ZXN0VXNlclJlY29yZHM6IChcclxuICAgICAgbnVtT2ZSZWNvcmRzOiBudW1iZXIsXHJcbiAgICAgIHNvcnRUeXBlOiBVc2VyUmVjb3JkU29ydFR5cGVzXHJcbiAgICApID0+IHtcclxuICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgdXNlclJlY29yZHNBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJSZWNvcmRzKHsgbnVtT2ZSZWNvcmRzLCBzb3J0VHlwZSB9KVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBMaXN0RW50cnlCYWRnZShwcm9wczoge1xyXG4gIHNvcnRUeXBlOiBVc2VyUmVjb3JkU29ydFR5cGVzO1xyXG4gIHJlY29yZDogVXNlclJlY29yZDtcclxufSkge1xyXG4gIHN3aXRjaCAocHJvcHMuc29ydFR5cGUpIHtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX0FWRVJBR0VfU0NPUkU6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntwcm9wcy5yZWNvcmQuYXZlcmFnZVNjb3JlLnRvRml4ZWQoMil9PC9CYWRnZT47XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9TQ09SRTpcclxuICAgICAgcmV0dXJuIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e3Byb3BzLnJlY29yZC50b3RhbFNjb3JlfTwvQmFkZ2U+O1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLk1PU1RfTkFNRVNfQ09OVFJJQlVURUQ6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntwcm9wcy5yZWNvcmQubmFtZXNDb250cmlidXRlZH08L0JhZGdlPjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPj88L0JhZGdlPjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHV4Q29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbnR5cGUgVXNlclJlY29yZHNMaXN0UHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+ICYge1xyXG4gIG1heFJlY29yZHM6IG51bWJlcjtcclxuICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxufTtcclxuXHJcbmNsYXNzIFVuY29ubmVjdGVkVXNlclJlY29yZHNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFVzZXJSZWNvcmRzTGlzdFByb3BzPiB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLnJlcXVlc3RVc2VyUmVjb3Jkcyh0aGlzLnByb3BzLm1heFJlY29yZHMsIHRoaXMucHJvcHMuc29ydFR5cGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYXBwSXNGZXRjaGluZ1JlY29yZHMpIHtcclxuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZyB1c2VyIHJlY29yZHMuLi48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVzaXJlZFJlY29yZHMgPSBzb3J0QW5kTGltaXRVc2VyUmVjb3JkcyhcclxuICAgICAgdGhpcy5wcm9wcy5yZWNvcmRzLFxyXG4gICAgICB0aGlzLnByb3BzLnNvcnRUeXBlLFxyXG4gICAgICB0aGlzLnByb3BzLm1heFJlY29yZHNcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRhYmxlIHNpemU9XCJzbVwiIHN0cmlwZWQgYm9yZGVyZWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge2Rlc2lyZWRSZWNvcmRzLm1hcCgocmVjb3JkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtTdHJpbmcocmVjb3JkLmlkKX0+XHJcbiAgICAgICAgICAgICAgPHRkPntpbmRleCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17Y3JlYXRlVXNlclByb2ZpbGVVcmwoU3RyaW5nKHJlY29yZC5pZCkpfT57cmVjb3JkLm5hbWV9PC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxMaXN0RW50cnlCYWRnZVxyXG4gICAgICAgICAgICAgICAgICBzb3J0VHlwZT17dGhpcy5wcm9wcy5zb3J0VHlwZX1cclxuICAgICAgICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUmVjb3Jkc0xpc3QgPSBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShVbmNvbm5lY3RlZFVzZXJSZWNvcmRzTGlzdCk7XHJcbiIsImV4cG9ydCB7IGJhbmRDcmVhdGlvblNhZ2EgfSBmcm9tIFwiLi9iYW5kLWNyZWF0aW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgYmFuZFNjb3JlTW9kaWZpY2F0aW9uU2FnYSB9IGZyb20gXCIuL2JhbmQtc2NvcmUtbW9kaWZpY2F0aW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgdXNlckF1dGhlbnRpY2F0aW9uU2FnYSB9IGZyb20gXCIuL3VzZXItYXV0aGVudGljYXRpb24tc2FnYVwiO1xyXG5leHBvcnQgeyB1c2VyQ3JlYXRpb25TYWdhIH0gZnJvbSBcIi4vdXNlci1jcmVhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IHdhdGNoRmV0Y2hCYW5kc1NhZ2EgfSBmcm9tIFwiLi93YXRjaC1mZXRjaC1iYW5kcy1zYWdhXCI7XHJcbmV4cG9ydCB7IHdhdGNoRmV0Y2hVc2VyUmVjb3Jkc1NhZ2EgfSBmcm9tIFwiLi9mZXRjaC11c2VyLXJlY29yZHMtc2FnYVwiO1xyXG5leHBvcnQgeyBmZXRjaFByb2ZpbGVTYWdhIH0gZnJvbSBcIi4vZmV0Y2gtdXNlci1wcm9maWxlLXNhZ2FcIjtcclxuZXhwb3J0IHsgY2hlY2tTZXNzaW9uU2FnYSB9IGZyb20gXCIuL2NoZWNrLXNlc3Npb24tc2FnYVwiO1xyXG5leHBvcnQgeyBsb2dvdXRTYWdhIH0gZnJvbSBcIi4vbG9nb3V0LXNhZ2FcIjsiLCJpbXBvcnQgeyBCYW5kU29ydFR5cGVzIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0QW5kTGltaXRCYW5kcyhcclxuICBiYW5kczogQmFuZENsYXNzW10sXHJcbiAgc29ydEJ5OiBCYW5kU29ydFR5cGVzLFxyXG4gIGxpbWl0OiBudW1iZXJcclxuKTogQmFuZENsYXNzW10ge1xyXG4gIGxldCBmaWx0ZXJlZEJhbmRzID0gWy4uLmJhbmRzXTtcclxuXHJcbiAgc3dpdGNoIChzb3J0QnkpIHtcclxuICAgIGNhc2UgQmFuZFNvcnRUeXBlcy5CRVNUOlxyXG4gICAgICBmaWx0ZXJlZEJhbmRzLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEJhbmRTb3J0VHlwZXMuTU9TVF9SRUNFTlQ6XHJcbiAgICAgIGZpbHRlcmVkQmFuZHMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIC8vIFRPRE86IFdoYXQgaXMgaGFwcGVuaW5nIGhlcmU/XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiBEYXRlLnBhcnNlKGIuY3JlYXRlZE9uKSAtIERhdGUucGFyc2UoYS5jcmVhdGVkT24pO1xyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEJhbmRTb3J0VHlwZXMuV09SU1Q6XHJcbiAgICAgIGZpbHRlcmVkQmFuZHMuc29ydCgoYSwgYikgPT4gYS5zY29yZSAtIGIuc2NvcmUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyZWRCYW5kcyA9IGZpbHRlcmVkQmFuZHMuc2xpY2UoMCwgbGltaXQpO1xyXG4gIHJldHVybiBmaWx0ZXJlZEJhbmRzO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=