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
exports.BandModButtonGroup = void 0;
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
                console.log("Saga payload: ", payload);
                creatingUserId = payload.creatingUserId, bandName = payload.bandName, creatingUsername = payload.creatingUsername;
                requestBody = {
                    bandName: bandName,
                    ownerId: creatingUserId,
                    ownerName: creatingUsername,
                };
                _a.label = 2;
            case 2:
                _a.trys.push([2, 6, , 8]);
                console.log("HEre!");
                return [4 /*yield*/, effects_1.call(axios_1.default.post, paths.serverUrl + paths.newBand, requestBody)];
            case 3:
                response = _a.sent();
                console.log("response in bandcreationsaga: ", response);
                if (!(response.status == 200)) return [3 /*break*/, 5];
                console.log("now im here!");
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
// import PropTypes from "prop-types";
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var react_router_bootstrap_1 = __webpack_require__(/*! react-router-bootstrap */ "+Tvs");
var session_slice_1 = __webpack_require__(/*! ../store/slices/session-slice */ "fqsA");
// UnconnectedNavigation.propTypes = {
//   username: PropTypes.string,
//   authenticationStatus: PropTypes.oneOf(Object.values(AuthenticationStatuses)),
//   logout: PropTypes.func.isRequired,
// };
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
                react_1.default.createElement(Nav_1.default.Link, { onClick: function () { return _this.props.logout(); } }, "Logout"))) : (react_1.default.createElement(react_router_bootstrap_1.LinkContainer, { to: "/login" },
                react_1.default.createElement(Nav_1.default.Link, null, "Login")))));
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
exports.CreateBandForm = void 0;
// import PropTypes from "prop-types";
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var bands_slice_1 = __webpack_require__(/*! ../store/slices/bands-slice */ "Xep1");
var InputGroup_1 = __importDefault(__webpack_require__(/*! react-bootstrap/InputGroup */ "zUrK"));
var FormControl_1 = __importDefault(__webpack_require__(/*! react-bootstrap/FormControl */ "jDKy"));
var Button_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Button */ "cWnB"));
var Alert_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Alert */ "TUci"));
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var react_router_bootstrap_1 = __webpack_require__(/*! react-router-bootstrap */ "+Tvs");
var statuses_2 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var Spinner_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Spinner */ "T/rR"));
var ErrorAlert = function () { return (react_1.default.createElement(Alert_1.default, { variant: "warning" },
    react_1.default.createElement(Alert_1.default.Heading, null, "Uh oh..."),
    react_1.default.createElement("p", null, "Something went wrong! What did you do!? Do you have any idea how much I worked to get this place clean and then you show up and mess the whole thing up? No respect..."))); };
var NoNameAlert = function () { return (react_1.default.createElement(Alert_1.default, { variant: "warning" },
    react_1.default.createElement(Alert_1.default.Heading, null, "This MF said \u201C     \u201D"),
    react_1.default.createElement("p", null, "Who are you, John Cage? \uD83D\uDE2D\uD83D\uDE2D\uD83D\uDE2D Just kidding, don't know who that is."))); };
function BandExistsAlert() {
    return (react_1.default.createElement(Alert_1.default, { variant: "warning" },
        react_1.default.createElement(Alert_1.default.Heading, null, "Somebody already thought of that!"),
        react_1.default.createElement("p", null, "Going to have to try harder. Maybe read a very complicated book and then think of some reference to that.")));
}
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
var BandCreatedAlert = function (_a) {
    var name = _a.name;
    return (react_1.default.createElement(Alert_1.default, { variant: "success" },
        react_1.default.createElement(Alert_1.default.Heading, null,
            "\u201C",
            name,
            "\u201D submitted!"),
        react_1.default.createElement("p", null, "Now that's funny.")));
};
function mapStateToProps(state) {
    return {
        authenticationStatus: state.session.authenticationStatus,
        userId: state.session.userId,
        username: state.session.username,
        bandCreationStatus: state.bands.creationStatus,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        createBand: function (userId, username, bandName) {
            dispatch(bands_slice_1.bandActions.requestCreateBand({
                creatingUserId: userId,
                creatingUsername: username,
                bandName: bandName,
            }));
        },
    };
}
var reduxConnector = react_redux_1.connect(mapStateToProps, mapDispatchToProps);
var UnconnectedCreateBandForm = /** @class */ (function (_super) {
    __extends(UnconnectedCreateBandForm, _super);
    function UnconnectedCreateBandForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            bandName: "",
            displayBandExistsAlert: false,
            displayUserNotLoggedIn: false,
            displayNoNameAlert: false,
            displayProgess: false,
            displaySuccess: false,
            displayErrorAlert: false,
            lastSuccesfulName: "",
        };
        return _this;
    }
    UnconnectedCreateBandForm.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.bandCreationStatus !== prevProps.bandCreationStatus) {
            switch (this.props.bandCreationStatus) {
                case statuses_2.BandCreationStatuses.CREATING:
                    this.setState({
                        displayBandExistsAlert: false,
                        displayUserNotLoggedIn: false,
                        displayNoNameAlert: false,
                        displayProgess: true,
                        displaySuccess: false,
                        displayErrorAlert: false,
                    });
                    break;
                case statuses_2.BandCreationStatuses.CREATED:
                    this.setState({
                        displayBandExistsAlert: false,
                        displayUserNotLoggedIn: false,
                        displayNoNameAlert: false,
                        displayProgess: false,
                        displaySuccess: true,
                        displayErrorAlert: false,
                        lastSuccesfulName: this.state.bandName,
                        bandName: "",
                    });
                    break;
                case statuses_2.BandCreationStatuses.BAND_EXISTS:
                    this.setState({
                        displayBandExistsAlert: true,
                        displayUserNotLoggedIn: false,
                        displayNoNameAlert: false,
                        displayProgess: false,
                        displaySuccess: false,
                        displayErrorAlert: false,
                        bandName: "",
                    });
                    break;
                case statuses_2.BandCreationStatuses.ERROR:
                    this.setState({
                        displayBandExistsAlert: false,
                        displayUserNotLoggedIn: false,
                        displayNoNameAlert: false,
                        displayProgess: false,
                        displaySuccess: false,
                        displayErrorAlert: true,
                    });
                    break;
                default:
                    return;
            }
        }
    };
    UnconnectedCreateBandForm.prototype.handleClick = function () {
        if (this.props.authenticationStatus == statuses_1.AuthenticationStatuses.AUTHENTICATED) {
            if (this.state.bandName == "") {
                this.setState({
                    displayBandExistsAlert: false,
                    displayUserNotLoggedIn: false,
                    displayNoNameAlert: true,
                    displayProgess: false,
                    displaySuccess: false,
                });
            }
            else {
                this.props.createBand(this.props.userId, this.props.username, this.state.bandName);
                // this.setState({
                //   displayBandExistsAlert: false,
                //   displayUserNotLoggedIn: false,
                //   displayNoNameAlert: false,
                //   displayProgess: false,
                //   displaySuccess: true,
                //   lastSuccesfulName: this.state.bandName,
                //   bandName: "",
                // });
            }
        }
        else {
            this.setState({
                displayBandExistsAlert: false,
                displayUserNotLoggedIn: true,
                displayNoNameAlert: false,
                displayProgess: false,
                displaySuccess: false,
            });
        }
    };
    UnconnectedCreateBandForm.prototype.render = function () {
        var _this = this;
        var _a = this.state, displayBandExistsAlert = _a.displayBandExistsAlert, displayNoNameAlert = _a.displayNoNameAlert, displayProgess = _a.displayProgess, displayUserNotLoggedIn = _a.displayUserNotLoggedIn, displaySuccess = _a.displaySuccess;
        return (react_1.default.createElement("div", { className: "mb-3" },
            react_1.default.createElement(InputGroup_1.default, { size: "lg" },
                react_1.default.createElement(FormControl_1.default, { type: "text", placeholder: "What about a band called...", onChange: function (e) { return _this.setState({ bandName: e.target.value }); }, value: this.state.bandName }),
                react_1.default.createElement(InputGroup_1.default.Append, null, displayProgess ? (react_1.default.createElement(Button_1.default, { variant: "primary", disabled: true },
                    react_1.default.createElement(Spinner_1.default, { as: "span", animation: "border", size: "sm", role: "status", "aria-hidden": "true" }))) : (react_1.default.createElement(Button_1.default, { variant: "primary", onClick: function () { return _this.handleClick(); } }, "Submit")))),
            displayUserNotLoggedIn ? react_1.default.createElement(UserNotLoggedInAlert, null) : null,
            displayNoNameAlert ? react_1.default.createElement(NoNameAlert, null) : null,
            displayBandExistsAlert ? react_1.default.createElement(BandExistsAlert, null) : null,
            displaySuccess ? (react_1.default.createElement(BandCreatedAlert, { name: this.state.lastSuccesfulName })) : null));
    };
    return UnconnectedCreateBandForm;
}(react_1.default.Component));
exports.CreateBandForm = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UnconnectedCreateBandForm);


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
    var elapsedTime = Date.now() - date.getMilliseconds();
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
                console.log("bandsModified in userAuthenticationSaga: ", bandsModified);
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
        return (react_1.default.createElement(Container_1.default, null,
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
            return (react_1.default.createElement(Container_1.default, null,
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
                                            react_1.default.createElement("b", null, profile.averageScore)),
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
                console.log("modification value in saga: ", modificationValue);
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
                console.log(response);
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
            console.log("okay whayts up");
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
                console.log(payload);
                targetId = payload.targetId;
                console.log(targetId);
                _a.label = 2;
            case 2:
                _a.trys.push([2, 8, , 10]);
                console.log(paths_1.createGetUserProfileUrl(targetId));
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
// UnconnectedLogin.propTypes = {
//   authenticateUser: PropTypes.func,
//   authenticationStatus: PropTypes.oneOf(Object.values(AuthenticationStatuses)),
// };
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
// UnconnectedBigBandTable.propTypes = {
//   bands: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string,
//       name: PropTypes.string,
//       ownerId: PropTypes.string,
//       score: PropTypes.number,
//     })
//   ),
//   userIsAuthenticated: PropTypes.bool.isRequired,
//   userId: PropTypes.string,
//   usersModifications: PropTypes.array,
//   addPointsTo: PropTypes.func.isRequired,
//   requestFetchBands: PropTypes.func.isRequired,
//   appIsFetchingBands: PropTypes.bool.isRequired,
// };
var UnconnectedBigBandTable = /** @class */ (function (_super) {
    __extends(UnconnectedBigBandTable, _super);
    function UnconnectedBigBandTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // constructor(props) {
        //   super(props);
        //   this.state = {
        //     sortType: BandSortTypes.MOST_RECENT,
        //     bandsPerFetch: defaultBandsPerFetch,
        //     shouldFetchBands: false,
        //     maxBandsDisplayed: defaultBandsPerFetch,
        //   };
        // }
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
        console.log("this.state.maxBandsDisplayed: ", this.state.maxBandsDisplayed);
        console.log("prevState.maxBandsDisplayed: ", prevState.maxBandsDisplayed);
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
    // TODO: This only works after the second push, very strange
    UnconnectedBigBandTable.prototype.loadMore = function () {
        this.setState(function (state) {
            return {
                maxBandsDisplayed: state.maxBandsDisplayed + state.bandsPerFetch,
            };
        });
        // this.props.requestFetchBands(
        //   this.state.maxBandsDisplayed,
        //   this.state.sortType
        // );
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
                        // TODO: Figure out what's going on with this type casting
                        var currentTarget = e.currentTarget;
                        console.log("currentTarget", currentTarget);
                        var sortTypeAsNumber = parseInt(currentTarget.value);
                        console.log("sortTypeAsNumber", sortTypeAsNumber);
                        _this.setSortType(sortTypeAsNumber);
                    } }, radio.name)); }))),
            react_1.default.createElement(Card_1.default.Body, null,
                react_1.default.createElement(Table_1.default, { size: "sm", striped: true, bordered: true },
                    react_1.default.createElement("tbody", null, desiredBands.map(function (band) { return (react_1.default.createElement("tr", { key: String(band._id) },
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
                                "from  ",
                                react_1.default.createElement(react_router_dom_1.Link, { to: create_user_profile_url_1.createUserProfileUrl(String(band.ownerId)) }, band.ownerName))))); }))),
                react_1.default.createElement(Button_1.default, { variant: "secondary", block: true, onClick: function () { return _this.loadMore(); } }, "Show me more..."))));
    };
    return UnconnectedBigBandTable;
}(react_1.default.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0JhbmRNb2RCdXR0b25Hcm91cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2xpbWl0LXNvcnQtdXNlci1yZWNvcmRzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc3RhdHVzZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9iYW5kLWNyZWF0aW9uLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCYW5kRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9sb2dvdXQtc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvdXRpbGl0eS9nZXQtdGltZS1zaW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3dhdGNoLWZldGNoLWJhbmRzLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy91c2VyLWF1dGhlbnRpY2F0aW9uLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL05ld1VzZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2VyUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9mZXRjaC11c2VyLXJlY29yZHMtc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2JhbmQtc2NvcmUtbW9kaWZpY2F0aW9uLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wYXRocy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2NoZWNrLXNlc3Npb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NsaWNlcy9iYW5kcy1zbGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvdXNlci1jcmVhdGlvbi1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvZmV0Y2gtdXNlci1wcm9maWxlLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvc2Vzc2lvbi1zbGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFpbi50c3giLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0xhbmRpbmcudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxpdHkvY3JlYXRlLXVzZXItcHJvZmlsZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0JpZ0JhbmRUYWJsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvdXNlci1yZWNvcmRzLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Vc2VyUmVjb3Jkc0xpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxpdHkv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LHdCQUFhLENBQUMsSUFBSTtZQUNyQixhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWpCLENBQWlCLENBQUMsQ0FBQztZQUNoRCxNQUFNO1FBQ1IsS0FBSyx3QkFBYSxDQUFDLFdBQVc7WUFDNUIsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN0QixnQ0FBZ0M7Z0JBQ2hDLGFBQWE7Z0JBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU07UUFDUixLQUFLLHdCQUFhLENBQUMsS0FBSztZQUN0QixhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWpCLENBQWlCLENBQUMsQ0FBQztZQUNoRCxNQUFNO1FBQ1I7WUFDRSxNQUFNO0tBQ1Q7SUFFRCxhQUFhLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQztBQTNCRCw4Q0EyQkMiLCJmaWxlIjoibWFpbi41ZTBmNDc0M2NiOTZhNmEwYWI5NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbkdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVG9nZ2xlQnV0dG9uR3JvdXBcIjtcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RvZ2dsZUJ1dHRvblwiO1xyXG5pbXBvcnQge1xyXG4gIEJzQ2FyZXREb3duLFxyXG4gIEJzQ2FyZXREb3duRmlsbCxcclxuICBCc0NhcmV0VXAsXHJcbiAgQnNDYXJldFVwRmlsbCxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuXHJcbi8vIEJhbmRNb2RCdXR0b25Hcm91cC5wcm9wVHlwZXMgPSB7XHJcbi8vICAgdXNlcklzQXV0aG9yaXplZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuLy8gICBtb2RpZnlCYW5kOiBQcm9wVHlwZXMuZnVuYyxcclxuLy8gICBtb2RQZXJmb3JtZWQ6IFByb3BUeXBlcy5vbmVPZihbMSwgMCwgLTFdKSxcclxuLy8gfTtcclxuXHJcbnR5cGUgQmFuZE1vZEJ1dHRvbkdyb3VwUHJvcHMgPSB7XHJcbiAgdXNlcklzQXV0aG9yaXplZDogYm9vbGVhbjtcclxuICBtb2RpZnlCYW5kPzogKG1vZFZhbHVlOiBudW1iZXIsIHVuZG9WYWx1ZT86IG51bWJlcikgPT4gdm9pZDtcclxuICBtb2RQZXJmb3JtZWQ6IG51bWJlcjtcclxuICBjdXJyZW50U2NvcmU6IG51bWJlcjtcclxufTtcclxuXHJcbnR5cGUgQmFuZE1vZEJ1dHRvbkdyb3VwU3RhdGUgPSB7XHJcbiAgbW9kVmFsdWU6IG51bWJlcjtcclxufTtcclxuXHJcbi8vIFRPRE86IExvZ2dpbmcgb3V0IHdpbGwgc3RpbGwgc2hvdyB0aGUgQnNDYXJyZXRzIGFzICdmaWxsZWQnIGlmIHRoZSB1c2VyIG1vZGlmaWVkIHRob3NlIGJhbmRzXHJcbmV4cG9ydCBjbGFzcyBCYW5kTW9kQnV0dG9uR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XHJcbiAgQmFuZE1vZEJ1dHRvbkdyb3VwUHJvcHMsXHJcbiAgQmFuZE1vZEJ1dHRvbkdyb3VwU3RhdGVcclxuPiB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBtb2RWYWx1ZTogdGhpcy5wcm9wcy5tb2RQZXJmb3JtZWQsXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKFxyXG4gICAgcHJldlByb3BzOiBCYW5kTW9kQnV0dG9uR3JvdXBQcm9wcyxcclxuICAgIHByZXZTdGF0ZTogQmFuZE1vZEJ1dHRvbkdyb3VwU3RhdGVcclxuICApIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLm1vZFZhbHVlICE9IHByZXZTdGF0ZS5tb2RWYWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5tb2RWYWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubW9kaWZ5QmFuZCkgdGhpcy5wcm9wcy5tb2RpZnlCYW5kKDAsIHByZXZTdGF0ZS5tb2RWYWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubW9kaWZ5QmFuZCkgdGhpcy5wcm9wcy5tb2RpZnlCYW5kKHRoaXMuc3RhdGUubW9kVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHVzZXJJc0F1dGhvcml6ZWQsIG1vZFBlcmZvcm1lZCB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUb2dnbGVCdXR0b25Hcm91cFxyXG4gICAgICAgIG5hbWU9e1wibW9kQnV0dG9uc1wifVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vZFZhbHVlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PlxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codmFsKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZFZhbHVlOiB0aGlzLnN0YXRlLm1vZFZhbHVlICsgdmFsIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgbmFtZT17XCJuZWdhdGl2ZUJ1dHRvblwifVxyXG4gICAgICAgICAgdmFsdWU9ey0xfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyF1c2VySXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgY2hlY2tlZD17bW9kUGVyZm9ybWVkID09IC0xfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1vZFZhbHVlID09IC0xID8gPEJzQ2FyZXREb3duRmlsbCAvPiA6IDxCc0NhcmV0RG93biAvPn1cclxuICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICA8VG9nZ2xlQnV0dG9uXHJcbiAgICAgICAgICBuYW1lPXtcInBvc2l0aXZlQnV0dG9uXCJ9XHJcbiAgICAgICAgICB2YWx1ZT17MX1cclxuICAgICAgICAgIGRpc2FibGVkPXshdXNlcklzQXV0aG9yaXplZH1cclxuICAgICAgICAgIGNoZWNrZWQ9e21vZFBlcmZvcm1lZCA9PSAxfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1vZFZhbHVlID09IDEgPyA8QnNDYXJldFVwRmlsbCAvPiA6IDxCc0NhcmV0VXAgLz59XHJcbiAgICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlRmV0Y2hTdGF0dXNlcyB9IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgVXNlclByb2ZpbGVUeXBlID0ge1xyXG4gIGlkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0b3RhbFNjb3JlOiBudW1iZXI7XHJcbiAgbmFtZXNDb250cmlidXRlZDogbnVtYmVyO1xyXG4gIGF2ZXJhZ2VTY29yZTogbnVtYmVyO1xyXG4gIGJhbmRzOiBCYW5kQ2xhc3NbXTtcclxufTtcclxuXHJcbnR5cGUgVXNlclByb2ZpbGVTbGljZVN0YXRlID0ge1xyXG4gIGZldGNoU3RhdHVzOiBQcm9maWxlRmV0Y2hTdGF0dXNlcztcclxuICBwcm9maWxlPzogVXNlclByb2ZpbGVUeXBlO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyUHJvZmlsZVNsaWNlU3RhdGUgPSB7XHJcbiAgZmV0Y2hTdGF0dXM6IFByb2ZpbGVGZXRjaFN0YXR1c2VzLk5PVF9UUllJTkcsXHJcbiAgcHJvZmlsZTogdW5kZWZpbmVkLFxyXG59O1xyXG5cclxuY29uc3QgdXNlclByb2ZpbGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInVzZXJQcm9maWxlXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICByZXF1ZXN0RmV0Y2hVc2VyUHJvZmlsZShcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdGFyZ2V0SWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuZmV0Y2hTdGF0dXMgPSBQcm9maWxlRmV0Y2hTdGF0dXNlcy5BVFRFTVBUSU5HO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclByb2ZpbGVTdWNjZXNzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgcHJvZmlsZTogVXNlclByb2ZpbGVUeXBlIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuZmV0Y2hTdGF0dXMgPSBQcm9maWxlRmV0Y2hTdGF0dXNlcy5TVUNDRVNTO1xyXG4gICAgICBzdGF0ZS5wcm9maWxlID0gYWN0aW9uLnBheWxvYWQucHJvZmlsZTtcclxuICAgIH0sXHJcbiAgICBmZXRjaFVzZXJQcm9maWxlRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5mZXRjaFN0YXR1cyA9IFByb2ZpbGVGZXRjaFN0YXR1c2VzLkZBSUxVUkU7XHJcbiAgICAgIHN0YXRlLnByb2ZpbGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJQcm9maWxlQWN0aW9ucyA9IHVzZXJQcm9maWxlU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgdXNlclByb2ZpbGVTbGljZS5yZWR1Y2VyOyIsImltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZCB9IGZyb20gXCIuLi8uLi9zdG9yZS9zbGljZXMvdXNlci1yZWNvcmRzLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydEFuZExpbWl0VXNlclJlY29yZHMoXHJcbiAgcmVjb3JkczogVXNlclJlY29yZFtdLFxyXG4gIHNvcnRCeTogVXNlclJlY29yZFNvcnRUeXBlcyxcclxuICBsaW1pdDogbnVtYmVyXHJcbik6IFVzZXJSZWNvcmRbXSB7XHJcbiAgbGV0IGZpbHRlcmVkUmVjb3JkcyA9IFsuLi5yZWNvcmRzXTtcclxuXHJcbiAgc3dpdGNoIChzb3J0QnkpIHtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX0FWRVJBR0VfU0NPUkU6XHJcbiAgICAgIGZpbHRlcmVkUmVjb3Jkcy5zb3J0KChhLCBiKSA9PiBiLmF2ZXJhZ2VTY29yZSAtIGEuYXZlcmFnZVNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9TQ09SRTpcclxuICAgICAgZmlsdGVyZWRSZWNvcmRzLnNvcnQoKGEsIGIpID0+IGIudG90YWxTY29yZSAtIGEudG90YWxTY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLk1PU1RfTkFNRVNfQ09OVFJJQlVURUQ6XHJcbiAgICAgIGZpbHRlcmVkUmVjb3Jkcy5zb3J0KChhLCBiKSA9PiBiLm5hbWVzQ29udHJpYnV0ZWQgLSBhLm5hbWVzQ29udHJpYnV0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyZWRSZWNvcmRzID0gZmlsdGVyZWRSZWNvcmRzLnNsaWNlKDAsIGxpbWl0KTtcclxuICByZXR1cm4gZmlsdGVyZWRSZWNvcmRzO1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFVzZXJSZWNvcmRTb3J0VHlwZXMge1xyXG4gIEhJR0hFU1RfU0NPUkUsXHJcbiAgSElHSEVTVF9BVkVSQUdFX1NDT1JFLFxyXG4gIE1PU1RfTkFNRVNfQ09OVFJJQlVURURcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFuZENyZWF0aW9uU3RhdHVzZXMge1xyXG4gIENSRUFUSU5HLFxyXG4gIENSRUFURUQsXHJcbiAgRVJST1IsXHJcbiAgQkFORF9FWElTVFMsXHJcbiAgTk9UX1RSWUlORyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFuZFNvcnRUeXBlcyB7XHJcbiAgQkVTVCxcclxuICBXT1JTVCxcclxuICBNT1NUX1JFQ0VOVCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMge1xyXG4gIEFUVEVNUFRJTkcsXHJcbiAgU1VDQ0VTUyxcclxuICBGQUlMVVJFLFxyXG4gIE5PVF9UUllJTkcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByb2ZpbGVGZXRjaFN0YXR1c2VzIHtcclxuICBBVFRFTVBUSU5HLFxyXG4gIFNVQ0NFU1MsXHJcbiAgRkFJTFVSRSxcclxuICBOT1RfVFJZSU5HXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMge1xyXG4gIEFVVEhFTlRJQ0FUSU5HLFxyXG4gIEFVVEhFTlRJQ0FURUQsXHJcbiAgTk9UX0FVVEhFTlRJQ0FURUQsXHJcbiAgTk9UX1RSWUlORyxcclxuICBTRVJWRVJfRVJST1IsXHJcbiAgVVNFUk5BTUVfTk9UX0ZPVU5ELFxyXG4gIElOVkFMSURfUEFTU1dPUkQsXHJcbiAgTE9HR0lOR19PVVQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFVzZXJDcmVhdGlvblN0YXR1c2VzIHtcclxuICBQUk9DRVNTSU5HLFxyXG4gIFBBU1NXT1JEU19ET05UX01BVENILFxyXG4gIFVTRVJOQU1FX1RBS0VOLFxyXG4gIE5PVF9UUllJTkcsXHJcbiAgU0VSVkVSX0VSUk9SLFxyXG4gIFNVQ0NFU1MsXHJcbiAgRU1QVFlfRklFTERTLFxyXG4gIElOVkFMSURfRU1BSUwsXHJcbiAgRU1BSUxfVEFLRU4sXHJcbn1cclxuIiwiaW1wb3J0IHsgdGFrZSwgcHV0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IE5ld0JhbmRSZXF1ZXN0Qm9keSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcm91dGUtaGFuZGxlcnMvYmFuZHNcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcbmltcG9ydCB7IEJhbmRDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGJhbmRDcmVhdGlvblNhZ2EoKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShiYW5kQWN0aW9ucy5yZXF1ZXN0Q3JlYXRlQmFuZC50eXBlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiU2FnYSBwYXlsb2FkOiBcIiwgcGF5bG9hZCk7XHJcbiAgICBjb25zdCB7IGNyZWF0aW5nVXNlcklkLCBiYW5kTmFtZSwgY3JlYXRpbmdVc2VybmFtZSB9ID0gcGF5bG9hZDtcclxuICAgIC8vIGxldCBuZXdCYW5kID0ge1xyXG4gICAgLy8gICBjcmVhdGluZ1VzZXJJZCxcclxuICAgIC8vICAgYmFuZE5hbWUsXHJcbiAgICAvLyB9O1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHk6IE5ld0JhbmRSZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgYmFuZE5hbWUsXHJcbiAgICAgIG93bmVySWQ6IGNyZWF0aW5nVXNlcklkLFxyXG4gICAgICBvd25lck5hbWU6IGNyZWF0aW5nVXNlcm5hbWUsXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coXCJIRXJlIVwiKVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5uZXdCYW5kLFxyXG4gICAgICAgIHJlcXVlc3RCb2R5XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgaW4gYmFuZGNyZWF0aW9uc2FnYTogXCIsIHJlc3BvbnNlKVxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm93IGltIGhlcmUhXCIpXHJcbiAgICAgICAgY29uc3QgbmV3QmFuZDogQmFuZENsYXNzID0gcmVzcG9uc2UuZGF0YS5uZXdCYW5kO1xyXG4gICAgICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5jcmVhdGVCYW5kU3VjY2VzcyhuZXdCYW5kKSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gbGV0IHsgX2lkLCBiYW5kTmFtZSwgY3JlYXRpbmdVc2VySWQsIHNjb3JlIH0gPSBuZXdCYW5kO1xyXG4gICAgICAvLyBsZXQgbmV3QmFuZDogQmFuZENsYXNzID0ge1xyXG4gICAgICAvLyAgIG5hbWU6IGJhbmROYW1lLFxyXG4gICAgICAvLyAgIG93bmVyTmFtZTogY3JlYXRpbmdVc2VybmFtZSxcclxuICAgICAgLy8gICBvd25lcklkOiBjcmVhdGluZ1VzZXJJZCxcclxuICAgICAgLy8gICBzY29yZTogMCxcclxuICAgICAgLy8gICBjcmVhdGVkT24sXHJcbiAgICAgIC8vICAgX2lkOiBuZXdCYW5kSWQsXHJcbiAgICAgIC8vIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCByZWFzb246IEJhbmRDcmVhdGlvblN0YXR1c2VzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5yZWFzb247XHJcbiAgICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5jcmVhdGVCYW5kRmFpbHVyZShyZWFzb24pKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5cclxuLy8gVW5jb25uZWN0ZWROYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcclxuLy8gICB1c2VybmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gICBhdXRoZW50aWNhdGlvblN0YXR1czogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQXV0aGVudGljYXRpb25TdGF0dXNlcykpLFxyXG4vLyAgIGxvZ291dDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy8gfTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNlc3Npb24gfSkgPT4gKHtcclxuICBhdXRoZW50aWNhdGlvblN0YXR1czogc2Vzc2lvbi5hdXRoZW50aWNhdGlvblN0YXR1cyxcclxuICB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbG9nb3V0OiAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RMb2dvdXQoKSk7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tTZXNzaW9uOiAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDaGVja1Nlc3Npb24oKSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIE5hdmlnYXRpb25Qcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xyXG5cclxuY2xhc3MgVW5jb25uZWN0ZWROYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE5hdmlnYXRpb25Qcm9wcz4ge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HKVxyXG4gICAgICB0aGlzLnByb3BzLmNoZWNrU2Vzc2lvbigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE5hdmJhciBiZz1cImxpZ2h0XCIgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvXCI+XHJcbiAgICAgICAgICA8TmF2YmFyLkJyYW5kPndhYmFiYz88L05hdmJhci5CcmFuZD5cclxuICAgICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICAgICAgey8qIDxOYXYuSXRlbSBjbGFzc05hbWU9XCJtci1zbS0yXCI+ICovfVxyXG4gICAgICAgIHt0aGlzLnByb3BzLmF1dGhlbnRpY2F0aW9uU3RhdHVzID09XHJcbiAgICAgICAgQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdi5JdGVtPlNpZ25lZCBpbiBhcyB7dGhpcy5wcm9wcy51c2VybmFtZX08L05hdi5JdGVtPlxyXG4gICAgICAgICAgICA8TmF2Lkxpbmsgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5sb2dvdXQoKX0+TG9nb3V0PC9OYXYuTGluaz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICA8TmF2Lkxpbms+TG9naW48L05hdi5MaW5rPlxyXG4gICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qIDwvTmF2Lkl0ZW0+ICovfVxyXG4gICAgICA8L05hdmJhcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbiA9IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFVuY29ubmVjdGVkTmF2aWdhdGlvbik7XHJcbiIsIi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJyZWFjdC1ib290c3RyYXAvQWxlcnRcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IEJhbmRDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xyXG5cclxuY29uc3QgRXJyb3JBbGVydCA9ICgpID0+IChcclxuICA8QWxlcnQgdmFyaWFudD1cIndhcm5pbmdcIj5cclxuICAgIDxBbGVydC5IZWFkaW5nPlVoIG9oLi4uPC9BbGVydC5IZWFkaW5nPlxyXG4gICAgPHA+XHJcbiAgICAgIFNvbWV0aGluZyB3ZW50IHdyb25nISBXaGF0IGRpZCB5b3UgZG8hPyBEbyB5b3UgaGF2ZSBhbnkgaWRlYSBob3cgbXVjaCBJXHJcbiAgICAgIHdvcmtlZCB0byBnZXQgdGhpcyBwbGFjZSBjbGVhbiBhbmQgdGhlbiB5b3Ugc2hvdyB1cCBhbmQgbWVzcyB0aGUgd2hvbGVcclxuICAgICAgdGhpbmcgdXA/IE5vIHJlc3BlY3QuLi5cclxuICAgIDwvcD5cclxuICA8L0FsZXJ0PlxyXG4pO1xyXG5cclxuY29uc3QgTm9OYW1lQWxlcnQgPSAoKSA9PiAoXHJcbiAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICA8QWxlcnQuSGVhZGluZz5UaGlzIE1GIHNhaWQgJmxkcXVvOyAgICAgJnJkcXVvOzwvQWxlcnQuSGVhZGluZz5cclxuICAgIDxwPldobyBhcmUgeW91LCBKb2huIENhZ2U/IPCfmK3wn5it8J+YrSBKdXN0IGtpZGRpbmcsIGRvbiZhcG9zO3Qga25vdyB3aG8gdGhhdCBpcy48L3A+XHJcbiAgPC9BbGVydD5cclxuKTtcclxuXHJcbmZ1bmN0aW9uIEJhbmRFeGlzdHNBbGVydCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPlNvbWVib2R5IGFscmVhZHkgdGhvdWdodCBvZiB0aGF0ITwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgR29pbmcgdG8gaGF2ZSB0byB0cnkgaGFyZGVyLiBNYXliZSByZWFkIGEgdmVyeSBjb21wbGljYXRlZCBib29rIGFuZCB0aGVuXHJcbiAgICAgICAgdGhpbmsgb2Ygc29tZSByZWZlcmVuY2UgdG8gdGhhdC5cclxuICAgICAgPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBVc2VyTm90TG9nZ2VkSW5BbGVydCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPllvdSZhcG9zO3ZlIGdvdHRhIGJlIHNpZ25lZCBpbiE8L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFdlIGRvbiZhcG9zO3QgbGV0IGp1c3QgYW55b25lIGluIGhlcmUuIFlvdSBjYW57XCIgXCJ9XHJcbiAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbmV3LXVzZXJcIj5cclxuICAgICAgICAgIDxBbGVydC5MaW5rPm1ha2UgYW4gYWNjb3VudCBoZXJlPC9BbGVydC5MaW5rPlxyXG4gICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICAsIHRob3VnaCwgaWYgeW91IHdhbnQuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQmFuZENyZWF0ZWRBbGVydCA9ICh7IG5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+JmxkcXVvO3tuYW1lfSZyZHF1bzsgc3VibWl0dGVkITwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+Tm93IHRoYXQmYXBvcztzIGZ1bm55LjwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogUm9vdFN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzOiBzdGF0ZS5zZXNzaW9uLmF1dGhlbnRpY2F0aW9uU3RhdHVzLFxyXG4gICAgdXNlcklkOiBzdGF0ZS5zZXNzaW9uLnVzZXJJZCxcclxuICAgIHVzZXJuYW1lOiBzdGF0ZS5zZXNzaW9uLnVzZXJuYW1lLFxyXG4gICAgYmFuZENyZWF0aW9uU3RhdHVzOiBzdGF0ZS5iYW5kcy5jcmVhdGlvblN0YXR1cyxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgY3JlYXRlQmFuZDogKHVzZXJJZCwgdXNlcm5hbWUsIGJhbmROYW1lKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RDcmVhdGVCYW5kKHtcclxuICAgICAgICAgIGNyZWF0aW5nVXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgICBjcmVhdGluZ1VzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgIGJhbmROYW1lLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHJlZHV4Q29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbnR5cGUgQ3JlYXRlQmFuZEZvcm1Qcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiByZWR1eENvbm5lY3Rvcj47XHJcblxyXG50eXBlIENyZWF0ZUJhbmRGb3JtU3RhdGUgPSB7XHJcbiAgYmFuZE5hbWU6IHN0cmluZztcclxuICBkaXNwbGF5QmFuZEV4aXN0c0FsZXJ0OiBib29sZWFuO1xyXG4gIGRpc3BsYXlVc2VyTm90TG9nZ2VkSW46IGJvb2xlYW47XHJcbiAgZGlzcGxheU5vTmFtZUFsZXJ0OiBib29sZWFuO1xyXG4gIGRpc3BsYXlQcm9nZXNzOiBib29sZWFuO1xyXG4gIGRpc3BsYXlTdWNjZXNzOiBib29sZWFuO1xyXG4gIGRpc3BsYXlFcnJvckFsZXJ0OiBib29sZWFuO1xyXG4gIGxhc3RTdWNjZXNmdWxOYW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZENyZWF0ZUJhbmRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIENyZWF0ZUJhbmRGb3JtUHJvcHMsXHJcbiAgQ3JlYXRlQmFuZEZvcm1TdGF0ZVxyXG4+IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGJhbmROYW1lOiBcIlwiLFxyXG4gICAgZGlzcGxheUJhbmRFeGlzdHNBbGVydDogZmFsc2UsXHJcbiAgICBkaXNwbGF5VXNlck5vdExvZ2dlZEluOiBmYWxzZSxcclxuICAgIGRpc3BsYXlOb05hbWVBbGVydDogZmFsc2UsXHJcbiAgICBkaXNwbGF5UHJvZ2VzczogZmFsc2UsXHJcbiAgICBkaXNwbGF5U3VjY2VzczogZmFsc2UsXHJcbiAgICBkaXNwbGF5RXJyb3JBbGVydDogZmFsc2UsXHJcbiAgICBsYXN0U3VjY2VzZnVsTmFtZTogXCJcIixcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBDcmVhdGVCYW5kRm9ybVByb3BzKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5iYW5kQ3JlYXRpb25TdGF0dXMgIT09IHByZXZQcm9wcy5iYW5kQ3JlYXRpb25TdGF0dXMpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLnByb3BzLmJhbmRDcmVhdGlvblN0YXR1cykge1xyXG4gICAgICAgIGNhc2UgQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRJTkc6XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGlzcGxheUJhbmRFeGlzdHNBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyTm90TG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXNwbGF5Tm9OYW1lQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXNwbGF5UHJvZ2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGlzcGxheVN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXNwbGF5RXJyb3JBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRFRDpcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkaXNwbGF5QmFuZEV4aXN0c0FsZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgZGlzcGxheVVzZXJOb3RMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOb05hbWVBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpc3BsYXlQcm9nZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlzcGxheVN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvckFsZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgbGFzdFN1Y2Nlc2Z1bE5hbWU6IHRoaXMuc3RhdGUuYmFuZE5hbWUsXHJcbiAgICAgICAgICAgIGJhbmROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEJhbmRDcmVhdGlvblN0YXR1c2VzLkJBTkRfRVhJU1RTOlxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRpc3BsYXlCYW5kRXhpc3RzQWxlcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyTm90TG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXNwbGF5Tm9OYW1lQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXNwbGF5UHJvZ2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpc3BsYXlTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlzcGxheUVycm9yQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBiYW5kTmFtZTogXCJcIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5FUlJPUjpcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkaXNwbGF5QmFuZEV4aXN0c0FsZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgZGlzcGxheVVzZXJOb3RMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOb05hbWVBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpc3BsYXlQcm9nZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlzcGxheVN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXNwbGF5RXJyb3JBbGVydDogdHJ1ZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMucHJvcHMuYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEXHJcbiAgICApIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuYmFuZE5hbWUgPT0gXCJcIikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZGlzcGxheUJhbmRFeGlzdHNBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICBkaXNwbGF5VXNlck5vdExvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgIGRpc3BsYXlOb05hbWVBbGVydDogdHJ1ZSxcclxuICAgICAgICAgIGRpc3BsYXlQcm9nZXNzOiBmYWxzZSxcclxuICAgICAgICAgIGRpc3BsYXlTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZUJhbmQoXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZXJJZCxcclxuICAgICAgICAgIHRoaXMucHJvcHMudXNlcm5hbWUsXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmJhbmROYW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgIGRpc3BsYXlCYW5kRXhpc3RzQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgZGlzcGxheVVzZXJOb3RMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgLy8gICBkaXNwbGF5Tm9OYW1lQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgZGlzcGxheVByb2dlc3M6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgZGlzcGxheVN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgLy8gICBsYXN0U3VjY2VzZnVsTmFtZTogdGhpcy5zdGF0ZS5iYW5kTmFtZSxcclxuICAgICAgICAvLyAgIGJhbmROYW1lOiBcIlwiLFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkaXNwbGF5QmFuZEV4aXN0c0FsZXJ0OiBmYWxzZSxcclxuICAgICAgICBkaXNwbGF5VXNlck5vdExvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgIGRpc3BsYXlOb05hbWVBbGVydDogZmFsc2UsXHJcbiAgICAgICAgZGlzcGxheVByb2dlc3M6IGZhbHNlLFxyXG4gICAgICAgIGRpc3BsYXlTdWNjZXNzOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGRpc3BsYXlCYW5kRXhpc3RzQWxlcnQsXHJcbiAgICAgIGRpc3BsYXlOb05hbWVBbGVydCxcclxuICAgICAgZGlzcGxheVByb2dlc3MsXHJcbiAgICAgIGRpc3BsYXlVc2VyTm90TG9nZ2VkSW4sXHJcbiAgICAgIGRpc3BsYXlTdWNjZXNzLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgIDxJbnB1dEdyb3VwIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFib3V0IGEgYmFuZCBjYWxsZWQuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBiYW5kTmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhbmROYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgey8qIFRPRE86IGRpc2FibGUgdGhpcyBidXR0b24gd2hlbiBzdWJtaXR0aW5nICovfVxyXG4gICAgICAgICAgICB7ZGlzcGxheVByb2dlc3MgPyAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgPFNwaW5uZXJcclxuICAgICAgICAgICAgICAgICAgYXM9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwiYm9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAge2Rpc3BsYXlVc2VyTm90TG9nZ2VkSW4gPyA8VXNlck5vdExvZ2dlZEluQWxlcnQgLz4gOiBudWxsfVxyXG4gICAgICAgIHtkaXNwbGF5Tm9OYW1lQWxlcnQgPyA8Tm9OYW1lQWxlcnQgLz4gOiBudWxsfVxyXG4gICAgICAgIHtkaXNwbGF5QmFuZEV4aXN0c0FsZXJ0ID8gPEJhbmRFeGlzdHNBbGVydCAvPiA6IG51bGx9XHJcbiAgICAgICAge2Rpc3BsYXlTdWNjZXNzID8gKFxyXG4gICAgICAgICAgPEJhbmRDcmVhdGVkQWxlcnQgbmFtZT17dGhpcy5zdGF0ZS5sYXN0U3VjY2VzZnVsTmFtZX0gLz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZUJhbmRGb3JtID0gY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVW5jb25uZWN0ZWRDcmVhdGVCYW5kRm9ybSk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGxvZ291dFNhZ2EoKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdExvZ291dC50eXBlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MuZGVsZXRlLFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLnNlc3Npb25FbmRwb2ludCwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX1cclxuICAgICAgKTtcclxuICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmxvZ291dFN1Y2Nlc3MoKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmxvZ291dEZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiY29uc3QgbXNJbk1pbnV0ZSA9IDYwMDAwO1xyXG5jb25zdCBtc0luSG91ciA9IG1zSW5NaW51dGUgKiA2MDtcclxuY29uc3QgbXNJbkRheSA9IG1zSW5Ib3VyICogMjQ7XHJcbmNvbnN0IG1zSW5ZZWFyID0gbXNJbkRheSAqIDM2NTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lU2luY2UoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgY29uc3QgZWxhcHNlZFRpbWUgPSBEYXRlLm5vdygpIC0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuICBpZiAoZWxhcHNlZFRpbWUgPCBtc0luTWludXRlKSB7XHJcbiAgICByZXR1cm4gXCIxbVwiO1xyXG4gIH1cclxuICBpZiAoZWxhcHNlZFRpbWUgPCBtc0luSG91cikge1xyXG4gICAgY29uc3QgbnVtT2ZNaW51dGVzID0gTWF0aC5mbG9vcihlbGFwc2VkVGltZSAvIG1zSW5NaW51dGUpO1xyXG4gICAgcmV0dXJuIGAke251bU9mTWludXRlc31tYDtcclxuICB9XHJcbiAgaWYgKGVsYXBzZWRUaW1lIDwgbXNJbkRheSkge1xyXG4gICAgY29uc3QgbnVtT2ZIb3VycyA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyBtc0luSG91cik7XHJcbiAgICBjb25zdCBudW1PZk1pbnV0ZXMgPSBNYXRoLmZsb29yKChlbGFwc2VkVGltZSAlIG1zSW5Ib3VyKSAvIG1zSW5NaW51dGUpO1xyXG4gICAgbGV0IHN0cmluZyA9IGAke251bU9mSG91cnN9aGA7XHJcbiAgICBpZiAobnVtT2ZNaW51dGVzID4gMCkgc3RyaW5nICs9IGAgJHtudW1PZk1pbnV0ZXN9bWA7XHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG4gIH1cclxuICBpZiAoZWxhcHNlZFRpbWUgPCBtc0luWWVhcikge1xyXG4gICAgY29uc3QgbnVtT2ZEYXlzID0gTWF0aC5mbG9vcihlbGFwc2VkVGltZSAvIG1zSW5EYXkpO1xyXG4gICAgcmV0dXJuIGAke251bU9mRGF5c31kYDtcclxuICB9XHJcbiAgY29uc3QgbnVtT2ZZZWFycyA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyBtc0luWWVhcik7XHJcbiAgY29uc3QgbnVtT2ZEYXlzID0gTWF0aC5mbG9vcigoZWxhcHNlZFRpbWUgJSBtc0luWWVhcikgLyBtc0luRGF5KTtcclxuICBsZXQgc3RyaW5nID0gYCR7bnVtT2ZZZWFyc315YDtcclxuICBpZiAobnVtT2ZEYXlzID4gMCkgc3RyaW5nICs9IGAgJHtudW1PZkRheXN9ZGA7XHJcbiAgcmV0dXJuIHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFjdGlvbkNoYW5uZWwsIGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB3YXRjaEZldGNoQmFuZHNTYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgY29uc3QgZmV0Y2hCYW5kc0NoYW5uZWwgPSB5aWVsZCBhY3Rpb25DaGFubmVsKFxyXG4gICAgYmFuZEFjdGlvbnMucmVxdWVzdEZldGNoQmFuZHMudHlwZVxyXG4gICk7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShmZXRjaEJhbmRzQ2hhbm5lbCk7XHJcbiAgICBjb25zdCB7IG1heEJhbmRzLCBzb3J0QnkgfSA9IHBheWxvYWQ7XHJcbiAgICB5aWVsZCBjYWxsKGZldGNoQmFuZHMsIG1heEJhbmRzLCBzb3J0QnkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaEJhbmRzKG1heEJhbmRzLCBzb3J0QnkpIHtcclxuICBsZXQgcmVzcG9uc2U7XHJcbiAgdHJ5IHtcclxuICAgIHJlc3BvbnNlID0geWllbGQgY2FsbChheGlvcy5wb3N0LCBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5wb3N0QmFuZHMsIHtcclxuICAgICAgbWF4QmFuZHMsXHJcbiAgICAgIHNvcnRCeSxcclxuICAgIH0pO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmZldGNoQmFuZHNTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmZldGNoQmFuZHNGYWlsdXJlKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB1c2VyQXV0aGVudGljYXRpb25TYWdhKCkge1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdEF1dGhlbnRpY2F0ZVVzZXIudHlwZSk7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcGF5bG9hZDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5wb3N0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLmF1dGhlbnRpY2F0ZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB7IHVzZXJJZCwgYmFuZHNNb2RpZmllZCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coXCJiYW5kc01vZGlmaWVkIGluIHVzZXJBdXRoZW50aWNhdGlvblNhZ2E6IFwiLCBiYW5kc01vZGlmaWVkKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5hdXRoZW50aWNhdGVVc2VyU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGJhbmRzTW9kaWZpZWQsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuYXV0aGVudGljYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgICAgICAgICByZWFzb246IGVyci5yZXNwb25zZS5kYXRhLnJlYXNvbixcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9BbGVydFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVXNlckNyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9TcGlubmVyXCI7XHJcblxyXG4vLyBVbmNvbm5lY3RlZE5ld1VzZXJGb3JtLnByb3BUeXBlcyA9IHtcclxuLy8gICBzdWJtaXRGb3JtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4vLyAgIHVzZXJDcmVhdGlvblN0YXR1czogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoVXNlckNyZWF0aW9uU3RhdHVzZXMpKSxcclxuLy8gfTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNlc3Npb24gfSkgPT4gKHtcclxuICB1c2VyQ3JlYXRpb25TdGF0dXM6IHNlc3Npb24udXNlckNyZWF0aW9uU3RhdHVzLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzdWJtaXRGb3JtOiAoLyplbWFpbCwqLyB1c2VybmFtZSwgcGFzc3dvcmQsIHJlcGVhdFBhc3N3b3JkKSA9PlxyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDcmVhdGVVc2VyKHtcclxuICAgICAgICAvLyBlbWFpbCxcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICByZXBlYXRQYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICksXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdXhDb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcclxudHlwZSBOZXdVc2VyRm9ybVByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPjtcclxuXHJcbnR5cGUgTmV3VXNlckZvcm1TdGF0ZSA9IHtcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICByZXBlYXRQYXNzd29yZDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFVuY29ubmVjdGVkTmV3VXNlckZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XHJcbiAgTmV3VXNlckZvcm1Qcm9wcyxcclxuICBOZXdVc2VyRm9ybVN0YXRlXHJcbj4ge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgcmVwZWF0UGFzc3dvcmQ6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgLy8gVE9ETzogV291bGRuJ3QgaXQgYmUgZWFzeSB0byBtYWtlIGl0IHNvIHRoZSBlbWFpbCBpcyB2YWxpZGF0ZWQgYXMgdGhlIHVzZXIgdHlwZXM/IE1heWJlIG9uIGEgc2xpZ2h0IGRlbGF5PyBTYW1lIHdpdGggdGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZD9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB1c2VyQ3JlYXRpb25TdGF0dXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IG1heFdpZHRoOiBcIjM2cmVtXCIgfX0gY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgey8qIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyRW1haWxcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsIEFkZHJlc3M8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuSU5WQUxJRF9FTUFJTFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPiAqL31cclxuICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlck5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVzZXJuYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlVTRVJOQU1FX1RBS0VOXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIFVzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW4uXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlBBU1NXT1JEU19ET05UX01BVENIXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyUmVwZWF0UGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlJlcGVhdCBQYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXBlYXRQYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuUEFTU1dPUkRTX0RPTlRfTUFUQ0hcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgUGFzc3dvcmRzIGRvbiZhcG9zO3QgbWF0Y2guXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuUFJPQ0VTU0lORyB8fFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN1Ym1pdEZvcm0oXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZXBlYXRQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTICYmIChcclxuICAgICAgICAgICAgICAgIDxBbGVydCB2YXJpYW50PVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICBBY2NvdW50IGNyZWF0ZWQhIFlvdSBtYXkgbm93IDxhIGhyZWY9XCIvbG9naW5cIj5sb2cgaW48L2E+LlxyXG4gICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHt1c2VyQ3JlYXRpb25TdGF0dXMgPT0gVXNlckNyZWF0aW9uU3RhdHVzZXMuUFJPQ0VTU0lORyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgdmFyaWFudD1cInByaW1hcnlcIiAvPiBQcm9jZXNzaW5nLi4uXHJcbiAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5ld1VzZXJGb3JtID0gY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVW5jb25uZWN0ZWROZXdVc2VyRm9ybSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHtcclxuICBVc2VyUHJvZmlsZVR5cGUsXHJcbiAgdXNlclByb2ZpbGVBY3Rpb25zLFxyXG59IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9lc20vQ29udGFpbmVyXCI7XHJcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL1RhYmxlXCI7XHJcbmltcG9ydCBCYWRnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9CYWRnZVwiO1xyXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlsaXR5L2dldC10aW1lLXNpbmNlXCI7XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFJvb3RTdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBmZXRjaFN0YXR1czogc3RhdGUudXNlclByb2ZpbGUuZmV0Y2hTdGF0dXMsXHJcbiAgICBwcm9maWxlOiBzdGF0ZS51c2VyUHJvZmlsZS5wcm9maWxlLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXF1ZXN0RmV0Y2hQcm9maWxlOiAodGFyZ2V0SWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQpID0+IHtcclxuICAgICAgZGlzcGF0Y2godXNlclByb2ZpbGVBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJQcm9maWxlKHsgdGFyZ2V0SWQgfSkpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIFVzZXJQcm9maWxlUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+ICYge1xyXG4gIGlkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG59O1xyXG5cclxuY2xhc3MgVW5jb25uZWN0ZWRVc2VyUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxVc2VyUHJvZmlsZVByb3BzPiB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLnJlcXVlc3RGZXRjaFByb2ZpbGUodGhpcy5wcm9wcy5pZCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHByb2ZpbGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAocHJvZmlsZSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxoNT57cHJvZmlsZS5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgc2NvcmU6IDxiPntwcm9maWxlLnRvdGFsU2NvcmV9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdmVyYWdlIHNjb3JlOiA8Yj57cHJvZmlsZS5hdmVyYWdlU2NvcmV9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lcyBjb250cmlidXRlZDogPGI+e3Byb2ZpbGUubmFtZXNDb250cmlidXRlZH08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuYmFuZHMubWFwKChiYW5kKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtTdHJpbmcoYmFuZC5faWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e2JhbmQuc2NvcmV9PC9CYWRnZT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e2JhbmQubmFtZX08L2I+IChjcmVhdGVkIHtnZXRUaW1lU2luY2UobmV3IERhdGUoYmFuZC5jcmVhdGVkT24pKX0gYWdvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJQcm9maWxlID0gcmVkdXhDb25uZWN0b3IoVW5jb25uZWN0ZWRVc2VyUHJvZmlsZSk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWN0aW9uQ2hhbm5lbCwgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHVzZXJSZWNvcmRzQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvdXNlci1yZWNvcmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZHNSZXF1ZXN0Qm9keSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcm91dGUtaGFuZGxlcnMvdXNlci1yZWNvcmRzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB3YXRjaEZldGNoVXNlclJlY29yZHNTYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgY29uc3QgZmV0Y2hVc2VyUmVjb3Jkc0NoYW5uZWwgPSB5aWVsZCBhY3Rpb25DaGFubmVsKFxyXG4gICAgdXNlclJlY29yZHNBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJSZWNvcmRzLnR5cGVcclxuICApO1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoZmV0Y2hVc2VyUmVjb3Jkc0NoYW5uZWwpO1xyXG4gICAgY29uc3QgeyBudW1PZlJlY29yZHMsIHNvcnRUeXBlIH0gPSBwYXlsb2FkO1xyXG4gICAgeWllbGQgY2FsbChmZXRjaFVzZXJSZWNvcmRzLCBudW1PZlJlY29yZHMsIHNvcnRUeXBlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZmV0Y2hVc2VyUmVjb3JkcyhcclxuICBtYXhSZWNvcmRzOiBudW1iZXIsXHJcbiAgc29ydEJ5OiBVc2VyUmVjb3JkU29ydFR5cGVzXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLmdldFVzZXJSZWNvcmRzLFxyXG4gICAgICB7IG51bU9mUmVjb3JkczogbWF4UmVjb3Jkcywgc29ydFR5cGU6IHNvcnRCeSB9XHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgeWllbGQgcHV0KHVzZXJSZWNvcmRzQWN0aW9ucy5mZXRjaFVzZXJSZWNvcmRzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh1c2VyUmVjb3Jkc0FjdGlvbnMuZmV0Y2hVc2VyUmVjb3Jkc0ZhaWx1cmUoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuLy8gVE9ETzogVGhpcyBkb2Vzbid0IHdvcmsgcmlnaHQgb24gdGhlIGRhdGFiYXNlIHNpZGUhXHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGJhbmRTY29yZU1vZGlmaWNhdGlvblNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKGJhbmRBY3Rpb25zLnJlcXVlc3RNb2RpZnlCYW5kU2NvcmUudHlwZSk7XHJcbiAgICBjb25zdCB7IHRhcmdldEJhbmRJZCwgbW9kaWZ5aW5nVXNlcklkLCBtb2RpZmljYXRpb25WYWx1ZSB9ID0gcGF5bG9hZDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibW9kaWZpY2F0aW9uIHZhbHVlIGluIHNhZ2E6IFwiLCBtb2RpZmljYXRpb25WYWx1ZSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5wb3N0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLm1vZGlmeUJhbmQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgbW9kaWZ5aW5nVXNlcklkLFxyXG4gICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIGlmIChtb2RpZmljYXRpb25WYWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHRhcmdldEJhbmRJZCxcclxuICAgICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWU6IC1wYXlsb2FkLnVuZG9WYWx1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBiYW5kQWN0aW9ucy5tb2RpZnlCYW5kU2NvcmVTdWNjZXNzKHtcclxuICAgICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgICBtb2RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLm1vZGlmeUJhbmRTY29yZUZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2ZXJVcmwgPVxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiaHR0cDovL2xvY2FsaG9zdDo3Nzc3XCI7XHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGUgPSBcIi9hcGkvYXV0aGVudGljYXRlXCI7XHJcbmV4cG9ydCBjb25zdCBwb3N0QmFuZHMgPSBcIi9hcGkvYmFuZHNcIjtcclxuZXhwb3J0IGNvbnN0IG1vZGlmeUJhbmQgPSBcIi9hcGkvYmFuZC9tb2RpZnlcIjtcclxuZXhwb3J0IGNvbnN0IG5ld0JhbmQgPSBcIi9hcGkvYmFuZC9uZXdcIjtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSBcIi9hcGkvY3JlYXRlLXVzZXJcIjtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJuYW1lID0gXCIvYXBpL3VzZXJuYW1lcy9nZXRcIjtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJSZWNvcmRzID0gXCIvYXBpL3VzZXJzL2dldFwiO1xyXG5leHBvcnQgY29uc3Qgc2Vzc2lvbkVuZHBvaW50ID0gXCIvYXBpL3Nlc3Npb25cIjtcclxuXHJcblxyXG5jb25zdCBnZXRVc2VyUHJvZmlsZUJhc2UgPSBcIi9hcGkvdXNlci1wcm9maWxlXCI7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyUHJvZmlsZUVuZHBvaW50ID0gZ2V0VXNlclByb2ZpbGVCYXNlICsgXCIvOnVzZXJJZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdldFVzZXJQcm9maWxlVXJsKFxyXG4gIHRhcmdldFVzZXJJZCAvKjogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCovXHJcbik6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGdldFVzZXJQcm9maWxlQmFzZSArIFwiL1wiICsgdGFyZ2V0VXNlcklkIC8qLnRvSGV4U3RyaW5nKi87XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25DaGFubmVsLCBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY2hlY2tTZXNzaW9uU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICB5aWVsZCB0YWtlKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDaGVja1Nlc3Npb24udHlwZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MuZ2V0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLnNlc3Npb25FbmRwb2ludCxcclxuICAgICAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICBjb25zdCB7IHVzZXJJZCwgdXNlcm5hbWUsIGJhbmRzTW9kaWZpZWQgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuY2hlY2tTZXNzaW9uU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGJhbmRzTW9kaWZpZWQsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmNoZWNrU2Vzc2lvbkZhaWx1cmUoKSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMuY2hlY2tTZXNzaW9uRmFpbHVyZSgpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJhbmRDcmVhdGlvblN0YXR1c2VzLFxyXG4gIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLFxyXG4gIEJhbmRTb3J0VHlwZXMsXHJcbn0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxudHlwZSBTY29yZU1vZGlmaWNhdGlvblN0YXRlID0ge1xyXG4gIHN0YXR1czogQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXM7XHJcbiAgLy8gVE9ETzogVGhpcyBuZWVkcyB0byByZWZlciB0byBhIGJhbmQncyBJRFxyXG4gIHRhcmdldD86IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbn07XHJcblxyXG50eXBlIEJhbmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogbnVtYmVyO1xyXG4gIGNyZWF0aW9uU3RhdHVzOiBCYW5kQ3JlYXRpb25TdGF0dXNlcztcclxuICBpdGVtczogQmFuZENsYXNzW107XHJcbiAgc2NvcmVNb2RpZmljYXRpb25TdGF0ZTogU2NvcmVNb2RpZmljYXRpb25TdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogQmFuZHNTbGljZVN0YXRlID0ge1xyXG4gIHBlbmRpbmdGZXRjaGVzOiAwLFxyXG4gIGl0ZW1zOiBbXSxcclxuICBjcmVhdGlvblN0YXR1czogQmFuZENyZWF0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICBzY29yZU1vZGlmaWNhdGlvblN0YXRlOiB7XHJcbiAgICBzdGF0dXM6IEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzLk5PVF9UUllJTkcsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGJhbmRzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJiYW5kc1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8gQmFuZCBmZXRjaGluZ1xyXG4gICAgcmVxdWVzdEZldGNoQmFuZHMoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIG1heEJhbmRzOiBudW1iZXI7XHJcbiAgICAgICAgc29ydEJ5OiBCYW5kU29ydFR5cGVzO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzKys7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hCYW5kc1N1Y2Nlc3Moc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxCYW5kQ2xhc3NbXT4pIHtcclxuICAgICAgYWN0aW9uLnBheWxvYWQuZm9yRWFjaCgobmV3QmFuZCkgPT4ge1xyXG4gICAgICAgIGlmICghc3RhdGUuaXRlbXMuc29tZSgoYmFuZCkgPT4gYmFuZC5faWQgPT0gbmV3QmFuZC5faWQpKVxyXG4gICAgICAgICAgc3RhdGUuaXRlbXMucHVzaChuZXdCYW5kKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hCYW5kc0ZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMtLTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQmFuZCBjcmVhdGlvblxyXG4gICAgcmVxdWVzdENyZWF0ZUJhbmQoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIGNyZWF0aW5nVXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIGJhbmROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgY3JlYXRpbmdVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmNyZWF0aW9uU3RhdHVzID0gQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRJTkc7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlQmFuZFN1Y2Nlc3Moc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxCYW5kQ2xhc3M+KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib2theSB3aGF5dHMgdXBcIilcclxuICAgICAgc3RhdGUuY3JlYXRpb25TdGF0dXMgPSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVEVEO1xyXG4gICAgICBzdGF0ZS5pdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVCYW5kRmFpbHVyZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEJhbmRDcmVhdGlvblN0YXR1c2VzPikge1xyXG4gICAgICBzdGF0ZS5jcmVhdGlvblN0YXR1cyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBNb2RpZnkgYmFuZCBzY29yZVxyXG4gICAgcmVxdWVzdE1vZGlmeUJhbmRTY29yZShcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdGFyZ2V0QmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIG1vZGlmeWluZ1VzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICBtb2RpZmljYXRpb25WYWx1ZTogbnVtYmVyO1xyXG4gICAgICAgIHVuZG9WYWx1ZT86IG51bWJlcjtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnN0YXR1cyA9XHJcbiAgICAgICAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuQVRURU1QVElORztcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS50YXJnZXQgPSBhY3Rpb24ucGF5bG9hZC50YXJnZXRCYW5kSWQ7XHJcbiAgICB9LFxyXG4gICAgbW9kaWZ5QmFuZFNjb3JlU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEJhbmRJbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleChcclxuICAgICAgICAoYmFuZCkgPT4gYmFuZC5faWQgPT09IGFjdGlvbi5wYXlsb2FkLnRhcmdldEJhbmRJZFxyXG4gICAgICApO1xyXG4gICAgICBzdGF0ZS5pdGVtc1t0YXJnZXRCYW5kSW5kZXhdLnNjb3JlICs9IGFjdGlvbi5wYXlsb2FkLm1vZGlmaWNhdGlvblZhbHVlO1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnN0YXR1cyA9XHJcbiAgICAgICAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuU1VDQ0VTUztcclxuICAgIH0sXHJcbiAgICBtb2RpZnlCYW5kU2NvcmVGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIC8vIFRPRE86IFNob3VsZG4ndCB3ZSBiZSBnZXR0aW5nIGEgcmVhc29uIGZvciB0aGUgZmFpbHVyZSBoZXJlP1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnN0YXR1cyA9XHJcbiAgICAgICAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuRkFJTFVSRTtcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS50YXJnZXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhbmRBY3Rpb25zID0gYmFuZHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBiYW5kc1NsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGdldERlZmF1bHRNaWRkbGV3YXJlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGJhbmRzUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHNlc3Npb25SZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB1c2VyUmVjb3Jkc1JlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZVwiO1xyXG5pbXBvcnQgdXNlclByb2ZpbGVSZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuXHJcbmltcG9ydCAqIGFzIHNhZ2FzIGZyb20gXCIuL3NhZ2FzXCI7XHJcblxyXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbLi4uZ2V0RGVmYXVsdE1pZGRsZXdhcmUoeyB0aHVuazogZmFsc2UgfSksIHNhZ2FNaWRkbGV3YXJlXTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBiYW5kczogYmFuZHNSZWR1Y2VyLFxyXG4gIHNlc3Npb246IHNlc3Npb25SZWR1Y2VyLFxyXG4gIHVzZXJSZWNvcmRzOiB1c2VyUmVjb3Jkc1JlZHVjZXIsXHJcbiAgdXNlclByb2ZpbGU6IHVzZXJQcm9maWxlUmVkdWNlclxyXG59KTtcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxyXG4gIG1pZGRsZXdhcmU6IG1pZGRsZXdhcmUsXHJcbn0pO1xyXG5cclxuZm9yIChjb25zdCBzYWdhIGluIHNhZ2FzKSB7XHJcbiAgc2FnYU1pZGRsZXdhcmUucnVuKHNhZ2FzW3NhZ2FdKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlLCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgeyBVc2VyQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB1c2VyQ3JlYXRpb25TYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0Q3JlYXRlVXNlci50eXBlKTtcclxuICAgIGNvbnN0IHsgLyplbWFpbCwqLyB1c2VybmFtZSwgcGFzc3dvcmQsIHJlcGVhdFBhc3N3b3JkIH0gPSBwYXlsb2FkO1xyXG5cclxuICAgIC8vIGlmICghZW1haWxJc1ZhbGlkKGVtYWlsKSkge1xyXG4gICAgLy8gICB5aWVsZCBwdXQoXHJcbiAgICAvLyAgICAgc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgLy8gICAgICAgcmVhc29uOiBVc2VyQ3JlYXRpb25TdGF0dXNlcy5JTlZBTElEX0VNQUlMLFxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgICBpZiAocGFzc3dvcmQgIT09IHJlcGVhdFBhc3N3b3JkKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgICAgICAgICByZWFzb246IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBBU1NXT1JEU19ET05UX01BVENILFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLmNyZWF0ZVVzZXIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAvLyBlbWFpbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyU3VjY2VzcygpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyRmFpbHVyZSh7XHJcbiAgICAgICAgICAgICAgcmVhc29uOiBlcnJvci5yZXNwb25zZS5kYXRhLnJlYXNvbixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbWFpbElzVmFsaWQoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICByZXR1cm4gcmUudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcbiIsImltcG9ydCB7IHRha2UsIHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgdXNlclByb2ZpbGVBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuaW1wb3J0IHsgY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoUHJvZmlsZVNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKFxyXG4gICAgICB1c2VyUHJvZmlsZUFjdGlvbnMucmVxdWVzdEZldGNoVXNlclByb2ZpbGUudHlwZVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gICAgY29uc3QgdGFyZ2V0SWQgPSBwYXlsb2FkLnRhcmdldElkO1xyXG4gICAgY29uc29sZS5sb2codGFyZ2V0SWQpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwodGFyZ2V0SWQpKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLmdldCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBjcmVhdGVHZXRVc2VyUHJvZmlsZVVybCh0YXJnZXRJZClcclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICB1c2VyUHJvZmlsZUFjdGlvbnMuZmV0Y2hVc2VyUHJvZmlsZVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICBwcm9maWxlOiByZXNwb25zZS5kYXRhLnByb2ZpbGUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHVzZXJQcm9maWxlQWN0aW9ucy5mZXRjaFVzZXJQcm9maWxlRmFpbHVyZSgpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh1c2VyUHJvZmlsZUFjdGlvbnMuZmV0Y2hVc2VyUHJvZmlsZUZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcywgVXNlckNyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzLCBTVEFURVMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbnR5cGUgU2Vzc2lvbkJhbmRNb2RpZmljYXRpb24gPSB7XHJcbiAgdGFyZ2V0QmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIFNlc3Npb25TbGljZVN0YXRlID0ge1xyXG4gIGF1dGhlbnRpY2F0aW9uU3RhdHVzOiBBdXRoZW50aWNhdGlvblN0YXR1c2VzO1xyXG4gIHVzZXJJZD86IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgdXNlckNyZWF0aW9uU3RhdHVzOiBVc2VyQ3JlYXRpb25TdGF0dXNlcztcclxuICBiYW5kc01vZGlmaWVkOiBTZXNzaW9uQmFuZE1vZGlmaWNhdGlvbltdO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTZXNzaW9uU2xpY2VTdGF0ZSA9IHtcclxuICBhdXRoZW50aWNhdGlvblN0YXR1czogQXV0aGVudGljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIHVzZXJJZDogdW5kZWZpbmVkLFxyXG4gIHVzZXJuYW1lOiB1bmRlZmluZWQsXHJcbiAgdXNlckNyZWF0aW9uU3RhdHVzOiBVc2VyQ3JlYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIGJhbmRzTW9kaWZpZWQ6IFtdLFxyXG59O1xyXG5cclxuY29uc3Qgc2Vzc2lvblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwic2Vzc2lvblwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8gU2Vzc2lvbiBjaGVja2luZ1xyXG4gICAgcmVxdWVzdENoZWNrU2Vzc2lvbihzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRJTkc7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tTZXNzaW9uU3VjY2VzcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgYmFuZHNNb2RpZmllZDogU2Vzc2lvbkJhbmRNb2RpZmljYXRpb25bXTtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRDtcclxuICAgICAgc3RhdGUudXNlcklkID0gYWN0aW9uLnBheWxvYWQudXNlcklkO1xyXG4gICAgICBzdGF0ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lO1xyXG4gICAgICBzdGF0ZS5iYW5kc01vZGlmaWVkID0gYWN0aW9uLnBheWxvYWQuYmFuZHNNb2RpZmllZDtcclxuICAgIH0sXHJcbiAgICBjaGVja1Nlc3Npb25GYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVc2VyIGF1dGhlbnRpY2F0aW9uXHJcbiAgICByZXF1ZXN0QXV0aGVudGljYXRlVXNlcihcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVElORztcclxuICAgIH0sXHJcbiAgICBhdXRoZW50aWNhdGVVc2VyU3VjY2VzcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgYmFuZHNNb2RpZmllZDogU2Vzc2lvbkJhbmRNb2RpZmljYXRpb25bXTtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRDtcclxuICAgICAgc3RhdGUudXNlcklkID0gYWN0aW9uLnBheWxvYWQudXNlcklkO1xyXG4gICAgICBzdGF0ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lO1xyXG4gICAgICBzdGF0ZS5iYW5kc01vZGlmaWVkID0gYWN0aW9uLnBheWxvYWQuYmFuZHNNb2RpZmllZDtcclxuICAgIH0sXHJcbiAgICBhdXRoZW50aWNhdGVVc2VyRmFpbHVyZShzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gYWN0aW9uLnBheWxvYWQucmVhc29uO1xyXG4gICAgICAvLyBUT0RPOiBJcyBpdCBuZWNlc3NhcnkgdG8gcmVzZXQgdGhpcyB0byBudWxsIGhlcmU/XHJcbiAgICAgIHN0YXRlLnVzZXJJZCA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlciBsb2dvdXRcclxuICAgIHJlcXVlc3RMb2dvdXQoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkxPR0dJTkdfT1VUO1xyXG4gICAgfSxcclxuICAgIGxvZ291dEZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLlNFUlZFUl9FUlJPUjtcclxuICAgIH0sXHJcbiAgICBsb2dvdXRTdWNjZXNzKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVc2VyIGNyZWF0aW9uXHJcbiAgICByZXF1ZXN0Q3JlYXRlVXNlcihcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgLy8gZW1haWw6IHN0cmluZztcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgcmVwZWF0UGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS51c2VyQ3JlYXRpb25TdGF0dXMgPSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZVVzZXJTdWNjZXNzKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnVzZXJDcmVhdGlvblN0YXR1cyA9IFVzZXJDcmVhdGlvblN0YXR1c2VzLlNVQ0NFU1M7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlVXNlckZhaWx1cmUoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS51c2VyQ3JlYXRpb25TdGF0dXMgPSBhY3Rpb24ucGF5bG9hZC5yZWFzb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgLy8gQmFuZCBtb2RpZmljYXRpb25cclxuICAgIFtiYW5kQWN0aW9ucy5tb2RpZnlCYW5kU2NvcmVTdWNjZXNzLnR5cGVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5iYW5kc01vZGlmaWVkLnB1c2goe1xyXG4gICAgICAgIHRhcmdldEJhbmRJZDogYWN0aW9uLnBheWxvYWQudGFyZ2V0QmFuZElkLFxyXG4gICAgICAgIHZhbHVlOiBhY3Rpb24ucGF5bG9hZC5tb2RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlc3Npb25BY3Rpb25zID0gc2Vzc2lvblNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25TbGljZS5yZWR1Y2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBoaXN0b3J5IH0gZnJvbSBcIi4uL3N0b3JlL2hpc3RvcnlcIjtcclxuaW1wb3J0IHsgQmlnQmFuZFRhYmxlIH0gZnJvbSBcIi4vQmlnQmFuZFRhYmxlXCI7XHJcbmltcG9ydCB7IExhbmRpbmcgfSBmcm9tIFwiLi9MYW5kaW5nXCI7XHJcbmltcG9ydCB7IExvZ2luIH0gZnJvbSBcIi4vTG9naW5cIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCIuL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgTmV3VXNlckZvcm0gfSBmcm9tIFwiLi9OZXdVc2VyXCI7XHJcbmltcG9ydCB7IFVzZXJQcm9maWxlIH0gZnJvbSBcIi4vVXNlclByb2ZpbGVcIjtcclxuXHJcbi8vIGNvbnN0IEF1dGhlbnRpY2F0aW9uR3VhcmQgPSAoQ29tcG9uZW50KSA9PiAoeyBtYXRjaCB9KSA9PiB7XHJcbi8vICAgaWYgKFxyXG4vLyAgICAgc3RvcmUuZ2V0U3RhdGUoKS5zZXNzaW9uLmF1dGhlbnRpY2F0aW9uU3RhdHVzICE9PVxyXG4vLyAgICAgQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEXHJcbi8vICAgKSB7XHJcbi8vICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL1wiIC8+O1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gPENvbXBvbmVudCBtYXRjaD17bWF0Y2h9IC8+O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW4gPSAoKSA9PiAoXHJcbiAgLy8gVE9ETzogV2hhdCBpcyB0aGUgUm91dGVyJ3MgXCJoaXN0b3J5XCIgYWxsIGFib3V0P1xyXG4gIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2JhbmRzXCIgY29tcG9uZW50PXtCaWdCYW5kVGFibGV9IC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL25ldy11c2VyXCIgY29tcG9uZW50PXtOZXdVc2VyRm9ybX0gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0xhbmRpbmd9IC8+XHJcbiAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICBwYXRoPVwiL3VzZXJzLzp1c2VySWRcIlxyXG4gICAgICAgICAgY29tcG9uZW50PXsoeyBtYXRjaCB9KSA9PiA8VXNlclByb2ZpbGUgaWQ9e21hdGNoLnBhcmFtcy51c2VySWR9IC8+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICA8L1JvdXRlcj5cclxuKTtcclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcImRaWkhcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiaTNYcFwiOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ3JlYXRlQmFuZEZvcm0gfSBmcm9tIFwiLi9DcmVhdGVCYW5kRm9ybVwiO1xyXG5pbXBvcnQgeyBCaWdCYW5kVGFibGUgfSBmcm9tIFwiLi9CaWdCYW5kVGFibGVcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9Db250YWluZXJcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3Jkc0xpc3QgfSBmcm9tIFwiLi9Vc2VyUmVjb3Jkc0xpc3RcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgSnVtYm90cm9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSnVtYm90cm9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTGFuZGluZyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgey8qIDxKdW1ib3Ryb24+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJsYW5kaW5nVGl0bGVcIj5XaGF0IGFib3V0IGEgYmFuZCBjYWxsZWQuLi48L2gxPlxyXG4gICAgPC9KdW1ib3Ryb24+ICovfVxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgICA8Q29sIG1kPXs4fSBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgICAgIDxDcmVhdGVCYW5kRm9ybSAvPlxyXG4gICAgICAgICAgPEJpZ0JhbmRUYWJsZSAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezR9PlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+TW9zdCBOYW1lcyBDb250cmlidXRlZDwvaDU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPFVzZXJSZWNvcmRzTGlzdFxyXG4gICAgICAgICAgICAgICAgbWF4UmVjb3Jkcz17MTB9XHJcbiAgICAgICAgICAgICAgICBzb3J0VHlwZT17VXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+SGlnaGVzdCBBdmVyYWdlIFNjb3JlPC9oNT5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8VXNlclJlY29yZHNMaXN0XHJcbiAgICAgICAgICAgICAgICBtYXhSZWNvcmRzPXsxMH1cclxuICAgICAgICAgICAgICAgIHNvcnRUeXBlPXtVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfQVZFUkFHRV9TQ09SRX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGg1PkhpZ2hlc3QgU2NvcmU8L2g1PlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxVc2VyUmVjb3Jkc0xpc3RcclxuICAgICAgICAgICAgICAgIG1heFJlY29yZHM9ezEwfVxyXG4gICAgICAgICAgICAgICAgc29ydFR5cGU9e1VzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9TQ09SRX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICA8Lz5cclxuKTtcclxuIiwiLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJyZWFjdC1ib290c3RyYXAvQWxlcnRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9TcGlubmVyXCI7XHJcblxyXG4vLyBVbmNvbm5lY3RlZExvZ2luLnByb3BUeXBlcyA9IHtcclxuLy8gICBhdXRoZW50aWNhdGVVc2VyOiBQcm9wVHlwZXMuZnVuYyxcclxuLy8gICBhdXRoZW50aWNhdGlvblN0YXR1czogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQXV0aGVudGljYXRpb25TdGF0dXNlcykpLFxyXG4vLyB9O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2Vzc2lvbiB9KSA9PiAoe1xyXG4gIGF1dGhlbnRpY2F0aW9uU3RhdHVzOiBzZXNzaW9uLmF1dGhlbnRpY2F0aW9uU3RhdHVzLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBhdXRoZW50aWNhdGVVc2VyOiAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PlxyXG4gICAgZGlzcGF0Y2goc2Vzc2lvbkFjdGlvbnMucmVxdWVzdEF1dGhlbnRpY2F0ZVVzZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSkpLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHV4Q29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbnR5cGUgTG9naW5Qcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiByZWR1eENvbm5lY3Rvcj47XHJcblxyXG50eXBlIExvZ2luU3RhdGUgPSB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59O1xyXG5cclxuY2xhc3MgVW5jb25uZWN0ZWRMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMb2dpblByb3BzLCBMb2dpblN0YXRlPiB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYXV0aGVudGljYXRpb25TdGF0dXMsIGF1dGhlbnRpY2F0ZVVzZXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IG1heFdpZHRoOiBcIjM2cmVtXCIgfX0gY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljVXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVzZXJuYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgICBBdXRoZW50aWNhdGlvblN0YXR1c2VzLlVTRVJOQU1FX05PVF9GT1VORFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5UZXh0IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgTmV3IHVzZXI/IENyZWF0ZSBhbiBhY2NvdW50IDxhIGhyZWY9XCIvbmV3LXVzZXJcIj5oZXJlPC9hPi5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5UZXh0PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCB1c2VybmFtZS5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgICBBdXRoZW50aWNhdGlvblN0YXR1c2VzLklOVkFMSURfUEFTU1dPUkRcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICBJbmNvcnJlY3QgcGFzc3dvcmQuXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVElORyB8fFxyXG4gICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZVVzZXIodGhpcy5zdGF0ZS51c2VybmFtZSwgdGhpcy5zdGF0ZS5wYXNzd29yZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICB7YXV0aGVudGljYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRJTkcgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz4gUHJvY2Vzc2luZy4uLlxyXG4gICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHthdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJzdWNjZXNzXCI+U3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiE8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luID0gY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVW5jb25uZWN0ZWRMb2dpbik7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVc2VyUHJvZmlsZVVybCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIFwiL3VzZXJzL1wiICsgdXNlcklkO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4vY29tcG9uZW50cy9NYWluXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxNYWluIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXHJcbik7XHJcbiIsIi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uR3JvdXBcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CYWRnZVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RvZ2dsZUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzLCBCYW5kU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBzb3J0QW5kTGltaXRCYW5kcyB9IGZyb20gXCIuL3V0aWxpdHkvbGltaXQtc29ydC1iYW5kc1wiO1xyXG5pbXBvcnQgeyBCYW5kTW9kQnV0dG9uR3JvdXAgfSBmcm9tIFwiLi9CYW5kTW9kQnV0dG9uR3JvdXBcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlL1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4vdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRCYW5kc1BlckZldGNoID0gMjA7XHJcblxyXG4vLyBUT0RPOiBTb21ldGhpbmcgc2hvdWxkIGRpc3BsYXkgd2hlbiB3ZSBoYXZlIG5vIGJhbmRzIHRvIGRpc3BsYXkhXHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFJvb3RTdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhcHBJc0ZldGNoaW5nQmFuZHM6IHN0YXRlLmJhbmRzLnBlbmRpbmdGZXRjaGVzID4gMCxcclxuICAgIGJhbmRzOiBbLi4uc3RhdGUuYmFuZHMuaXRlbXNdLFxyXG4gICAgdXNlcklzQXV0aGVudGljYXRlZDpcclxuICAgICAgc3RhdGUuc2Vzc2lvbi5hdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuICAgICAgICA/IHRydWVcclxuICAgICAgICA6IGZhbHNlLFxyXG4gICAgdXNlcklkOiBzdGF0ZS5zZXNzaW9uLnVzZXJJZCxcclxuICAgIHVzZXJzTW9kaWZpY2F0aW9uczogc3RhdGUuc2Vzc2lvbi5iYW5kc01vZGlmaWVkLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhZGRQb2ludHNUbzogKFxyXG4gICAgICB0YXJnZXRCYW5kSWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgIG1vZGlmaWNhdGlvblZhbHVlOiBudW1iZXIsXHJcbiAgICAgIG1vZGlmeWluZ1VzZXJJZD86IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgIHVuZG9WYWx1ZT86IG51bWJlclxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGlmIChtb2RpZnlpbmdVc2VySWQpIHtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RNb2RpZnlCYW5kU2NvcmUoe1xyXG4gICAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICAgIG1vZGlmeWluZ1VzZXJJZCxcclxuICAgICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgIHVuZG9WYWx1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlcXVlc3RGZXRjaEJhbmRzOiAobWF4QmFuZHM6IG51bWJlciwgc29ydEJ5OiBCYW5kU29ydFR5cGVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKGJhbmRBY3Rpb25zLnJlcXVlc3RGZXRjaEJhbmRzKHsgbWF4QmFuZHMsIHNvcnRCeSB9KSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHJlZHV4Q29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbnR5cGUgQmlnQmFuZFRhYmxlUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+O1xyXG5cclxudHlwZSBCaWdCYW5kVGFibGVTdGF0ZSA9IHtcclxuICBzb3J0VHlwZTogQmFuZFNvcnRUeXBlcztcclxuICBiYW5kc1BlckZldGNoOiBudW1iZXI7XHJcbiAgc2hvdWxkRmV0Y2hCYW5kczogYm9vbGVhbjtcclxuICBtYXhCYW5kc0Rpc3BsYXllZDogbnVtYmVyO1xyXG59O1xyXG5cclxuLy8gVW5jb25uZWN0ZWRCaWdCYW5kVGFibGUucHJvcFR5cGVzID0ge1xyXG4vLyAgIGJhbmRzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuLy8gICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbi8vICAgICAgIF9pZDogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gICAgICAgb3duZXJJZDogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gICAgICAgc2NvcmU6IFByb3BUeXBlcy5udW1iZXIsXHJcbi8vICAgICB9KVxyXG4vLyAgICksXHJcbi8vICAgdXNlcklzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuLy8gICB1c2VySWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbi8vICAgdXNlcnNNb2RpZmljYXRpb25zOiBQcm9wVHlwZXMuYXJyYXksXHJcbi8vICAgYWRkUG9pbnRzVG86IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbi8vICAgcmVxdWVzdEZldGNoQmFuZHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbi8vICAgYXBwSXNGZXRjaGluZ0JhbmRzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4vLyB9O1xyXG5cclxuY2xhc3MgVW5jb25uZWN0ZWRCaWdCYW5kVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XHJcbiAgQmlnQmFuZFRhYmxlUHJvcHMsXHJcbiAgQmlnQmFuZFRhYmxlU3RhdGVcclxuPiB7XHJcbiAgLy8gY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAvLyAgIHN1cGVyKHByb3BzKTtcclxuICAvLyAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgLy8gICAgIHNvcnRUeXBlOiBCYW5kU29ydFR5cGVzLk1PU1RfUkVDRU5ULFxyXG4gIC8vICAgICBiYW5kc1BlckZldGNoOiBkZWZhdWx0QmFuZHNQZXJGZXRjaCxcclxuICAvLyAgICAgc2hvdWxkRmV0Y2hCYW5kczogZmFsc2UsXHJcbiAgLy8gICAgIG1heEJhbmRzRGlzcGxheWVkOiBkZWZhdWx0QmFuZHNQZXJGZXRjaCxcclxuICAvLyAgIH07XHJcbiAgLy8gfVxyXG4gIHN0YXRlID0ge1xyXG4gICAgc29ydFR5cGU6IEJhbmRTb3J0VHlwZXMuTU9TVF9SRUNFTlQsXHJcbiAgICBiYW5kc1BlckZldGNoOiBkZWZhdWx0QmFuZHNQZXJGZXRjaCxcclxuICAgIHNob3VsZEZldGNoQmFuZHM6IGZhbHNlLFxyXG4gICAgbWF4QmFuZHNEaXNwbGF5ZWQ6IGRlZmF1bHRCYW5kc1BlckZldGNoLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5yZXF1ZXN0RmV0Y2hCYW5kcyh0aGlzLnN0YXRlLmJhbmRzUGVyRmV0Y2gsIHRoaXMuc3RhdGUuc29ydFR5cGUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKFxyXG4gICAgcHJldlByb3BzOiBCaWdCYW5kVGFibGVQcm9wcyxcclxuICAgIHByZXZTdGF0ZTogQmlnQmFuZFRhYmxlU3RhdGVcclxuICApIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5zdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZDogXCIsIHRoaXMuc3RhdGUubWF4QmFuZHNEaXNwbGF5ZWQpO1xyXG4gICAgY29uc29sZS5sb2coXCJwcmV2U3RhdGUubWF4QmFuZHNEaXNwbGF5ZWQ6IFwiLCBwcmV2U3RhdGUubWF4QmFuZHNEaXNwbGF5ZWQpO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnN0YXRlLm1heEJhbmRzRGlzcGxheWVkID4gcHJldlN0YXRlLm1heEJhbmRzRGlzcGxheWVkIHx8XHJcbiAgICAgIHRoaXMuc3RhdGUuc2hvdWxkRmV0Y2hCYW5kc1xyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucmVxdWVzdEZldGNoQmFuZHMoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCxcclxuICAgICAgICB0aGlzLnN0YXRlLnNvcnRUeXBlXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG91bGRGZXRjaEJhbmRzOiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5zb3J0VHlwZSAhPT0gcHJldlN0YXRlLnNvcnRUeXBlKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1heEJhbmRzRGlzcGxheWVkOiB0aGlzLnN0YXRlLmJhbmRzUGVyRmV0Y2gsXHJcbiAgICAgICAgc2hvdWxkRmV0Y2hCYW5kczogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTb3J0VHlwZShuZXdUeXBlOiBCYW5kU29ydFR5cGVzKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc29ydFR5cGU6IG5ld1R5cGUgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBUaGlzIG9ubHkgd29ya3MgYWZ0ZXIgdGhlIHNlY29uZCBwdXNoLCB2ZXJ5IHN0cmFuZ2VcclxuICBsb2FkTW9yZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWF4QmFuZHNEaXNwbGF5ZWQ6IHN0YXRlLm1heEJhbmRzRGlzcGxheWVkICsgc3RhdGUuYmFuZHNQZXJGZXRjaCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgLy8gdGhpcy5wcm9wcy5yZXF1ZXN0RmV0Y2hCYW5kcyhcclxuICAgIC8vICAgdGhpcy5zdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCxcclxuICAgIC8vICAgdGhpcy5zdGF0ZS5zb3J0VHlwZVxyXG4gICAgLy8gKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJNb2RpZmljYXRpb25Ub0JhbmQodGhpc0JhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCkge1xyXG4gICAgY29uc3QgbW9kaWZpY2F0aW9uID0gdGhpcy5wcm9wcy51c2Vyc01vZGlmaWNhdGlvbnMuZmluZChcclxuICAgICAgKG1vZGlmaWNhdGlvbikgPT4gbW9kaWZpY2F0aW9uLnRhcmdldEJhbmRJZCA9PT0gdGhpc0JhbmRJZFxyXG4gICAgKTtcclxuICAgIGlmIChtb2RpZmljYXRpb24pIHJldHVybiBtb2RpZmljYXRpb24udmFsdWU7XHJcbiAgICBlbHNlIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gVE9ETzogU2hvdWxkIHdlIGhhdmUgc29tZSBub3RpZmljYXRpb24gdGhhdCBiYW5kcyBhcmUgYmVpbmcgZmV0Y2hlZD9cclxuICAgIGNvbnN0IGRlc2lyZWRCYW5kcyA9IHNvcnRBbmRMaW1pdEJhbmRzKFxyXG4gICAgICB0aGlzLnByb3BzLmJhbmRzLFxyXG4gICAgICB0aGlzLnN0YXRlLnNvcnRUeXBlLFxyXG4gICAgICB0aGlzLnN0YXRlLm1heEJhbmRzRGlzcGxheWVkXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNvcnRSYWRpb3MgPSBbXHJcbiAgICAgIHsgdmFsdWU6IEJhbmRTb3J0VHlwZXMuQkVTVCwgbmFtZTogXCJCZXN0XCIgfSxcclxuICAgICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5XT1JTVCwgbmFtZTogXCJXb3JzdFwiIH0sXHJcbiAgICAgIHsgdmFsdWU6IEJhbmRTb3J0VHlwZXMuTU9TVF9SRUNFTlQsIG5hbWU6IFwiTW9zdCBSZWNlbnRcIiB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCB7IHVzZXJJc0F1dGhlbnRpY2F0ZWQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIHRvZ2dsZT5cclxuICAgICAgICAgICAge3NvcnRSYWRpb3MubWFwKChyYWRpbywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3JhZGlvLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInNvcnRSYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtyYWRpby52YWx1ZSA9PT0gdGhpcy5zdGF0ZS5zb3J0VHlwZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBUT0RPOiBGaWd1cmUgb3V0IHdoYXQncyBnb2luZyBvbiB3aXRoIHRoaXMgdHlwZSBjYXN0aW5nXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQgYXMgdHlwZW9mIGUuY3VycmVudFRhcmdldCAmIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRUYXJnZXRcIiwgY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRUeXBlQXNOdW1iZXI6IG51bWJlciA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3J0VHlwZUFzTnVtYmVyXCIsIHNvcnRUeXBlQXNOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFNvcnRUeXBlKHNvcnRUeXBlQXNOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cmFkaW8ubmFtZX1cclxuICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge2Rlc2lyZWRCYW5kcy5tYXAoKGJhbmQpID0+IChcclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e1N0cmluZyhiYW5kLl9pZCl9PlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhbmRNb2RCdXR0b25Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcklzQXV0aG9yaXplZD17dXNlcklzQXV0aGVudGljYXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG1vZFBlcmZvcm1lZD17dGhpcy5nZXRVc2VyTW9kaWZpY2F0aW9uVG9CYW5kKGJhbmQuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUJhbmQ9eyhtb2RWYWx1ZSwgdW5kb1ZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFkZFBvaW50c1RvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhbmQuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVuZG9WYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2NvcmU9e2JhbmQuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57YmFuZC5zY29yZX08L0JhZGdlPiB7YmFuZC5uYW1lfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiZm9udC13ZWlnaHQtbGlnaHRlclwifT5cclxuICAgICAgICAgICAgICAgICAgICAgIGZyb20gIDxMaW5rIHRvPXtjcmVhdGVVc2VyUHJvZmlsZVVybChTdHJpbmcoYmFuZC5vd25lcklkKSl9PntiYW5kLm93bmVyTmFtZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBibG9jayBvbkNsaWNrPXsoKSA9PiB0aGlzLmxvYWRNb3JlKCl9PlxyXG4gICAgICAgICAgICBTaG93IG1lIG1vcmUuLi5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJpZ0JhbmRUYWJsZSA9IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFVuY29ubmVjdGVkQmlnQmFuZFRhYmxlKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJSZWNvcmQgPSB7XHJcbiAgaWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRvdGFsU2NvcmU6IG51bWJlcjtcclxuICBuYW1lc0NvbnRyaWJ1dGVkOiBudW1iZXI7XHJcbiAgYXZlcmFnZVNjb3JlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIFVzZXJSZWNvcmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogbnVtYmVyO1xyXG4gIGl0ZW1zOiBVc2VyUmVjb3JkW107XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJSZWNvcmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogMCxcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUmVjb3Jkc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclJlY29yZHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHJlcXVlc3RGZXRjaFVzZXJSZWNvcmRzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICBudW1PZlJlY29yZHM6IG51bWJlcjtcclxuICAgICAgICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcysrO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclJlY29yZHNTdWNjZXNzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFVzZXJSZWNvcmRbXT5cclxuICAgICkge1xyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKChuZXdSZWNvcmQpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLml0ZW1zLnNvbWUoKHJlY29yZCkgPT4gcmVjb3JkLmlkID09IG5ld1JlY29yZC5pZCkpXHJcbiAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKG5ld1JlY29yZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclJlY29yZHNGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclJlY29yZHNBY3Rpb25zID0gdXNlclJlY29yZHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVjb3Jkc1NsaWNlLnJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlclJlY29yZHNBY3Rpb25zLFxyXG4gIFVzZXJSZWNvcmQsXHJcbn0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlL1wiO1xyXG5pbXBvcnQgeyBzb3J0QW5kTGltaXRVc2VyUmVjb3JkcyB9IGZyb20gXCIuL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHNcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQmFkZ2VcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybFwiXHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFJvb3RTdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhcHBJc0ZldGNoaW5nUmVjb3Jkczogc3RhdGUudXNlclJlY29yZHMucGVuZGluZ0ZldGNoZXMgPiAwLFxyXG4gICAgcmVjb3JkczogWy4uLnN0YXRlLnVzZXJSZWNvcmRzLml0ZW1zXSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVxdWVzdFVzZXJSZWNvcmRzOiAoXHJcbiAgICAgIG51bU9mUmVjb3JkczogbnVtYmVyLFxyXG4gICAgICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlc1xyXG4gICAgKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIHVzZXJSZWNvcmRzQWN0aW9ucy5yZXF1ZXN0RmV0Y2hVc2VyUmVjb3Jkcyh7IG51bU9mUmVjb3Jkcywgc29ydFR5cGUgfSlcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGlzdEVudHJ5QmFkZ2UocHJvcHM6IHtcclxuICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxuICByZWNvcmQ6IFVzZXJSZWNvcmQ7XHJcbn0pIHtcclxuICBzd2l0Y2ggKHByb3BzLnNvcnRUeXBlKSB7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9BVkVSQUdFX1NDT1JFOlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57cHJvcHMucmVjb3JkLmF2ZXJhZ2VTY29yZS50b0ZpeGVkKDIpfTwvQmFkZ2U+O1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfU0NPUkU6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntwcm9wcy5yZWNvcmQudG90YWxTY29yZX08L0JhZGdlPjtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEOlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57cHJvcHMucmVjb3JkLm5hbWVzQ29udHJpYnV0ZWR9PC9CYWRnZT47XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj4/PC9CYWRnZT47XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIFVzZXJSZWNvcmRzTGlzdFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPiAmIHtcclxuICBtYXhSZWNvcmRzOiBudW1iZXI7XHJcbiAgc29ydFR5cGU6IFVzZXJSZWNvcmRTb3J0VHlwZXM7XHJcbn07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZFVzZXJSZWNvcmRzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxVc2VyUmVjb3Jkc0xpc3RQcm9wcz4ge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5yZXF1ZXN0VXNlclJlY29yZHModGhpcy5wcm9wcy5tYXhSZWNvcmRzLCB0aGlzLnByb3BzLnNvcnRUeXBlKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmFwcElzRmV0Y2hpbmdSZWNvcmRzKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgdXNlciByZWNvcmRzLi4uPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlc2lyZWRSZWNvcmRzID0gc29ydEFuZExpbWl0VXNlclJlY29yZHMoXHJcbiAgICAgIHRoaXMucHJvcHMucmVjb3JkcyxcclxuICAgICAgdGhpcy5wcm9wcy5zb3J0VHlwZSxcclxuICAgICAgdGhpcy5wcm9wcy5tYXhSZWNvcmRzXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtkZXNpcmVkUmVjb3Jkcy5tYXAoKHJlY29yZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17U3RyaW5nKHJlY29yZC5pZCl9PlxyXG4gICAgICAgICAgICAgIDx0ZD57aW5kZXggKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2NyZWF0ZVVzZXJQcm9maWxlVXJsKFN0cmluZyhyZWNvcmQuaWQpKX0+e3JlY29yZC5uYW1lfTwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGlzdEVudHJ5QmFkZ2VcclxuICAgICAgICAgICAgICAgICAgc29ydFR5cGU9e3RoaXMucHJvcHMuc29ydFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclJlY29yZHNMaXN0ID0gY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVW5jb25uZWN0ZWRVc2VyUmVjb3Jkc0xpc3QpO1xyXG4iLCJleHBvcnQgeyBiYW5kQ3JlYXRpb25TYWdhIH0gZnJvbSBcIi4vYmFuZC1jcmVhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IGJhbmRTY29yZU1vZGlmaWNhdGlvblNhZ2EgfSBmcm9tIFwiLi9iYW5kLXNjb3JlLW1vZGlmaWNhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IHVzZXJBdXRoZW50aWNhdGlvblNhZ2EgfSBmcm9tIFwiLi91c2VyLWF1dGhlbnRpY2F0aW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgdXNlckNyZWF0aW9uU2FnYSB9IGZyb20gXCIuL3VzZXItY3JlYXRpb24tc2FnYVwiO1xyXG5leHBvcnQgeyB3YXRjaEZldGNoQmFuZHNTYWdhIH0gZnJvbSBcIi4vd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYVwiO1xyXG5leHBvcnQgeyB3YXRjaEZldGNoVXNlclJlY29yZHNTYWdhIH0gZnJvbSBcIi4vZmV0Y2gtdXNlci1yZWNvcmRzLXNhZ2FcIjtcclxuZXhwb3J0IHsgZmV0Y2hQcm9maWxlU2FnYSB9IGZyb20gXCIuL2ZldGNoLXVzZXItcHJvZmlsZS1zYWdhXCI7XHJcbmV4cG9ydCB7IGNoZWNrU2Vzc2lvblNhZ2EgfSBmcm9tIFwiLi9jaGVjay1zZXNzaW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgbG9nb3V0U2FnYSB9IGZyb20gXCIuL2xvZ291dC1zYWdhXCI7IiwiaW1wb3J0IHsgQmFuZFNvcnRUeXBlcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydEFuZExpbWl0QmFuZHMoXHJcbiAgYmFuZHM6IEJhbmRDbGFzc1tdLFxyXG4gIHNvcnRCeTogQmFuZFNvcnRUeXBlcyxcclxuICBsaW1pdDogbnVtYmVyXHJcbik6IEJhbmRDbGFzc1tdIHtcclxuICBsZXQgZmlsdGVyZWRCYW5kcyA9IFsuLi5iYW5kc107XHJcblxyXG4gIHN3aXRjaCAoc29ydEJ5KSB7XHJcbiAgICBjYXNlIEJhbmRTb3J0VHlwZXMuQkVTVDpcclxuICAgICAgZmlsdGVyZWRCYW5kcy5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLk1PU1RfUkVDRU5UOlxyXG4gICAgICBmaWx0ZXJlZEJhbmRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAvLyBUT0RPOiBXaGF0IGlzIGhhcHBlbmluZyBoZXJlP1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gRGF0ZS5wYXJzZShiLmNyZWF0ZWRPbikgLSBEYXRlLnBhcnNlKGEuY3JlYXRlZE9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLldPUlNUOlxyXG4gICAgICBmaWx0ZXJlZEJhbmRzLnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgLSBiLnNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGZpbHRlcmVkQmFuZHMgPSBmaWx0ZXJlZEJhbmRzLnNsaWNlKDAsIGxpbWl0KTtcclxuICByZXR1cm4gZmlsdGVyZWRCYW5kcztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9