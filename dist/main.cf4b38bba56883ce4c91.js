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
                return [4 /*yield*/, effects_1.call(axios_1.default.post, paths.serverUrl + paths.newBand, requestBody)];
            case 2:
                response = _a.sent();
                _a.label = 3;
            case 3:
                _a.trys.push([3, 5, , 7]);
                if (response.status != 200)
                    throw new Error();
                newBand = response.newBand;
                // let { _id, bandName, creatingUserId, score } = newBand;
                // let newBand: BandClass = {
                //   name: bandName,
                //   ownerName: creatingUsername,
                //   ownerId: creatingUserId,
                //   score: 0,
                //   createdOn,
                //   _id: newBandId,
                // };
                return [4 /*yield*/, effects_1.put(bands_slice_1.bandActions.createBandSuccess(newBand))];
            case 4:
                // let { _id, bandName, creatingUserId, score } = newBand;
                // let newBand: BandClass = {
                //   name: bandName,
                //   ownerName: creatingUsername,
                //   ownerId: creatingUserId,
                //   score: 0,
                //   createdOn,
                //   _id: newBandId,
                // };
                _a.sent();
                return [3 /*break*/, 7];
            case 5:
                error_1 = _a.sent();
                reason = response.data.reason;
                return [4 /*yield*/, effects_1.put(bands_slice_1.bandActions.createBandFailure(reason))];
            case 6:
                _a.sent();
                return [3 /*break*/, 7];
            case 7: return [3 /*break*/, 0];
            case 8: return [2 /*return*/];
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
var NoNameAlert = function () { return (react_1.default.createElement(Alert_1.default, { variant: "danger" },
    react_1.default.createElement(Alert_1.default.Heading, null, "This MF said \u201C \u201D"),
    react_1.default.createElement("p", null, "Who are you? John Cage XD? Just kidding, don't know who that is."))); };
function BandExistsAlert() {
    return (react_1.default.createElement(Alert_1.default, { variant: "danger" },
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
function BandCreatedAlert() {
    return (react_1.default.createElement(Alert_1.default, { variant: "success" },
        react_1.default.createElement(Alert_1.default.Heading, null, "Name submitted!"),
        react_1.default.createElement("p", null, "Now that's funny.")));
}
function mapStateToProps(state) {
    return {
        authenticationStatus: state.session.authenticationStatus,
        userId: state.session.userId,
        username: state.session.username,
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
        };
        return _this;
    }
    UnconnectedCreateBandForm.prototype.handleClick = function () {
        if (this.props.authenticationStatus == statuses_1.AuthenticationStatuses.AUTHENTICATED) {
            if (this.state.bandName == "") {
                this.setState({
                    displayBandExistsAlert: false,
                    displayUserNotLoggedIn: false,
                    displayNoNameAlert: true,
                });
            }
            else {
                this.props.createBand(this.props.userId, this.props.username, this.state.bandName);
                this.setState({
                    displayBandExistsAlert: false,
                    displayUserNotLoggedIn: false,
                    displayNoNameAlert: false,
                    displayProgess: false,
                    displaySuccess: true,
                });
            }
        }
        else {
            this.setState({
                displayBandExistsAlert: false,
                displayUserNotLoggedIn: true,
                displayNoNameAlert: false,
            });
        }
    };
    UnconnectedCreateBandForm.prototype.render = function () {
        var _this = this;
        var _a = this.state, displayBandExistsAlert = _a.displayBandExistsAlert, displayNoNameAlert = _a.displayNoNameAlert, displayProgess = _a.displayProgess, displayUserNotLoggedIn = _a.displayUserNotLoggedIn, displaySuccess = _a.displaySuccess;
        return (react_1.default.createElement("div", { className: "mb-3" },
            react_1.default.createElement(InputGroup_1.default, { size: "lg" },
                react_1.default.createElement(FormControl_1.default, { type: "text", placeholder: "What about a band called...", onChange: function (e) { return _this.setState({ bandName: e.target.value }); } }),
                react_1.default.createElement(InputGroup_1.default.Append, null,
                    react_1.default.createElement(Button_1.default, { variant: "primary", onClick: function () { return _this.handleClick(); } }, "Submit"))),
            displayUserNotLoggedIn ? react_1.default.createElement(UserNotLoggedInAlert, null) : null,
            displayNoNameAlert ? react_1.default.createElement(NoNameAlert, null) : null,
            displayBandExistsAlert ? react_1.default.createElement(BandExistsAlert, null) : null,
            displaySuccess ? react_1.default.createElement(BandCreatedAlert, null) : null));
    };
    return UnconnectedCreateBandForm;
}(react_1.default.Component));
exports.CreateBandForm = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UnconnectedCreateBandForm);


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
exports.createGetUserProfileUrl = exports.getUserProfileEndpoint = exports.checkSession = exports.getUserRecords = exports.getUsername = exports.createUser = exports.newBand = exports.modifyBand = exports.postBands = exports.authenticate = exports.serverUrl = void 0;
exports.serverUrl =  false ? undefined : "http://localhost:7777";
exports.authenticate = "/api/authenticate";
exports.postBands = "/api/bands";
exports.modifyBand = "/api/band/modify";
exports.newBand = "/api/band/new";
exports.createUser = "/api/create-user";
exports.getUsername = "/api/usernames/get";
exports.getUserRecords = "/api/users/get";
exports.checkSession = "/api/session";
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
                return [4 /*yield*/, effects_1.call(axios_1.default.get, paths.serverUrl + paths.checkSession, { withCredentials: true })];
            case 3:
                response = _c.sent();
                if (!(response.status == 200)) return [3 /*break*/, 5];
                console.log("response in check-session-saga: ", response);
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
        requestLogout: function () {
            return initialState;
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
/*! exports provided: bandCreationSaga, bandScoreModificationSaga, userAuthenticationSaga, userCreationSaga, watchFetchBandsSaga, watchFetchUserRecordsSaga, fetchProfileSaga, checkSessionSaga */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0JhbmRNb2RCdXR0b25Hcm91cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2xpbWl0LXNvcnQtdXNlci1yZWNvcmRzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc3RhdHVzZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9iYW5kLWNyZWF0aW9uLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCYW5kRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxpdHkvZ2V0LXRpbWUtc2luY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy93YXRjaC1mZXRjaC1iYW5kcy1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvdXNlci1hdXRoZW50aWNhdGlvbi1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9OZXdVc2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlclByb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvZmV0Y2gtdXNlci1yZWNvcmRzLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9iYW5kLXNjb3JlLW1vZGlmaWNhdGlvbi1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGF0aHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9jaGVjay1zZXNzaW9uLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvYmFuZHMtc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2ZldGNoLXVzZXItcHJvZmlsZS1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW4udHN4Iiwid2VicGFjazovLy8od2VicGFjaykvaG90IHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9sb2ckIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9MYW5kaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2NyZWF0ZS11c2VyLXByb2ZpbGUtdXJsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9CaWdCYW5kVGFibGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlclJlY29yZHNMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2xpbWl0LXNvcnQtYmFuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7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WyJpbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RvZ2dsZUJ1dHRvbkdyb3VwXCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Ub2dnbGVCdXR0b25cIjtcclxuaW1wb3J0IHtcclxuICBCc0NhcmV0RG93bixcclxuICBCc0NhcmV0RG93bkZpbGwsXHJcbiAgQnNDYXJldFVwLFxyXG4gIEJzQ2FyZXRVcEZpbGwsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG4vLyBCYW5kTW9kQnV0dG9uR3JvdXAucHJvcFR5cGVzID0ge1xyXG4vLyAgIHVzZXJJc0F1dGhvcml6ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbi8vICAgbW9kaWZ5QmFuZDogUHJvcFR5cGVzLmZ1bmMsXHJcbi8vICAgbW9kUGVyZm9ybWVkOiBQcm9wVHlwZXMub25lT2YoWzEsIDAsIC0xXSksXHJcbi8vIH07XHJcblxyXG50eXBlIEJhbmRNb2RCdXR0b25Hcm91cFByb3BzID0ge1xyXG4gIHVzZXJJc0F1dGhvcml6ZWQ6IGJvb2xlYW47XHJcbiAgbW9kaWZ5QmFuZD86IChtb2RWYWx1ZTogbnVtYmVyLCB1bmRvVmFsdWU/OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgbW9kUGVyZm9ybWVkOiBudW1iZXI7XHJcbiAgY3VycmVudFNjb3JlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIEJhbmRNb2RCdXR0b25Hcm91cFN0YXRlID0ge1xyXG4gIG1vZFZhbHVlOiBudW1iZXI7XHJcbn07XHJcblxyXG4vLyBUT0RPOiBMb2dnaW5nIG91dCB3aWxsIHN0aWxsIHNob3cgdGhlIEJzQ2FycmV0cyBhcyAnZmlsbGVkJyBpZiB0aGUgdXNlciBtb2RpZmllZCB0aG9zZSBiYW5kc1xyXG5leHBvcnQgY2xhc3MgQmFuZE1vZEJ1dHRvbkdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIEJhbmRNb2RCdXR0b25Hcm91cFByb3BzLFxyXG4gIEJhbmRNb2RCdXR0b25Hcm91cFN0YXRlXHJcbj4ge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbW9kVmFsdWU6IHRoaXMucHJvcHMubW9kUGVyZm9ybWVkLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShcclxuICAgIHByZXZQcm9wczogQmFuZE1vZEJ1dHRvbkdyb3VwUHJvcHMsXHJcbiAgICBwcmV2U3RhdGU6IEJhbmRNb2RCdXR0b25Hcm91cFN0YXRlXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2RWYWx1ZSAhPSBwcmV2U3RhdGUubW9kVmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUubW9kVmFsdWUgPT0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGlmeUJhbmQpIHRoaXMucHJvcHMubW9kaWZ5QmFuZCgwLCBwcmV2U3RhdGUubW9kVmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGlmeUJhbmQpIHRoaXMucHJvcHMubW9kaWZ5QmFuZCh0aGlzLnN0YXRlLm1vZFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB1c2VySXNBdXRob3JpemVkLCBtb2RQZXJmb3JtZWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcclxuICAgICAgICBuYW1lPXtcIm1vZEJ1dHRvbnNcIn1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tb2RWYWx1ZX1cclxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT5cclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbClcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RWYWx1ZTogdGhpcy5zdGF0ZS5tb2RWYWx1ZSArIHZhbCB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgIG5hbWU9e1wibmVnYXRpdmVCdXR0b25cIn1cclxuICAgICAgICAgIHZhbHVlPXstMX1cclxuICAgICAgICAgIGRpc2FibGVkPXshdXNlcklzQXV0aG9yaXplZH1cclxuICAgICAgICAgIGNoZWNrZWQ9e21vZFBlcmZvcm1lZCA9PSAtMX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tb2RWYWx1ZSA9PSAtMSA/IDxCc0NhcmV0RG93bkZpbGwgLz4gOiA8QnNDYXJldERvd24gLz59XHJcbiAgICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgbmFtZT17XCJwb3NpdGl2ZUJ1dHRvblwifVxyXG4gICAgICAgICAgdmFsdWU9ezF9XHJcbiAgICAgICAgICBkaXNhYmxlZD17IXVzZXJJc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICBjaGVja2VkPXttb2RQZXJmb3JtZWQgPT0gMX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tb2RWYWx1ZSA9PSAxID8gPEJzQ2FyZXRVcEZpbGwgLz4gOiA8QnNDYXJldFVwIC8+fVxyXG4gICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUZldGNoU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJQcm9maWxlVHlwZSA9IHtcclxuICBpZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdG90YWxTY29yZTogbnVtYmVyO1xyXG4gIG5hbWVzQ29udHJpYnV0ZWQ6IG51bWJlcjtcclxuICBhdmVyYWdlU2NvcmU6IG51bWJlcjtcclxuICBiYW5kczogQmFuZENsYXNzW107XHJcbn07XHJcblxyXG50eXBlIFVzZXJQcm9maWxlU2xpY2VTdGF0ZSA9IHtcclxuICBmZXRjaFN0YXR1czogUHJvZmlsZUZldGNoU3RhdHVzZXM7XHJcbiAgcHJvZmlsZT86IFVzZXJQcm9maWxlVHlwZTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclByb2ZpbGVTbGljZVN0YXRlID0ge1xyXG4gIGZldGNoU3RhdHVzOiBQcm9maWxlRmV0Y2hTdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIHByb2ZpbGU6IHVuZGVmaW5lZCxcclxufTtcclxuXHJcbmNvbnN0IHVzZXJQcm9maWxlU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJ1c2VyUHJvZmlsZVwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgcmVxdWVzdEZldGNoVXNlclByb2ZpbGUoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHRhcmdldElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmZldGNoU3RhdHVzID0gUHJvZmlsZUZldGNoU3RhdHVzZXMuQVRURU1QVElORztcclxuICAgIH0sXHJcbiAgICBmZXRjaFVzZXJQcm9maWxlU3VjY2VzcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IHByb2ZpbGU6IFVzZXJQcm9maWxlVHlwZSB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmZldGNoU3RhdHVzID0gUHJvZmlsZUZldGNoU3RhdHVzZXMuU1VDQ0VTUztcclxuICAgICAgc3RhdGUucHJvZmlsZSA9IGFjdGlvbi5wYXlsb2FkLnByb2ZpbGU7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyUHJvZmlsZUZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuZmV0Y2hTdGF0dXMgPSBQcm9maWxlRmV0Y2hTdGF0dXNlcy5GQUlMVVJFO1xyXG4gICAgICBzdGF0ZS5wcm9maWxlID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyUHJvZmlsZUFjdGlvbnMgPSB1c2VyUHJvZmlsZVNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJQcm9maWxlU2xpY2UucmVkdWNlcjsiLCJpbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRBbmRMaW1pdFVzZXJSZWNvcmRzKFxyXG4gIHJlY29yZHM6IFVzZXJSZWNvcmRbXSxcclxuICBzb3J0Qnk6IFVzZXJSZWNvcmRTb3J0VHlwZXMsXHJcbiAgbGltaXQ6IG51bWJlclxyXG4pOiBVc2VyUmVjb3JkW10ge1xyXG4gIGxldCBmaWx0ZXJlZFJlY29yZHMgPSBbLi4ucmVjb3Jkc107XHJcblxyXG4gIHN3aXRjaCAoc29ydEJ5KSB7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9BVkVSQUdFX1NDT1JFOlxyXG4gICAgICBmaWx0ZXJlZFJlY29yZHMuc29ydCgoYSwgYikgPT4gYi5hdmVyYWdlU2NvcmUgLSBhLmF2ZXJhZ2VTY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfU0NPUkU6XHJcbiAgICAgIGZpbHRlcmVkUmVjb3Jkcy5zb3J0KChhLCBiKSA9PiBiLnRvdGFsU2NvcmUgLSBhLnRvdGFsU2NvcmUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEOlxyXG4gICAgICBmaWx0ZXJlZFJlY29yZHMuc29ydCgoYSwgYikgPT4gYi5uYW1lc0NvbnRyaWJ1dGVkIC0gYS5uYW1lc0NvbnRyaWJ1dGVkKTtcclxuICB9XHJcblxyXG4gIGZpbHRlcmVkUmVjb3JkcyA9IGZpbHRlcmVkUmVjb3Jkcy5zbGljZSgwLCBsaW1pdCk7XHJcbiAgcmV0dXJuIGZpbHRlcmVkUmVjb3JkcztcclxufVxyXG4iLCJleHBvcnQgZW51bSBVc2VyUmVjb3JkU29ydFR5cGVzIHtcclxuICBISUdIRVNUX1NDT1JFLFxyXG4gIEhJR0hFU1RfQVZFUkFHRV9TQ09SRSxcclxuICBNT1NUX05BTUVTX0NPTlRSSUJVVEVEXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhbmRDcmVhdGlvblN0YXR1c2VzIHtcclxuICBDUkVBVElORyxcclxuICBDUkVBVEVELFxyXG4gIEVSUk9SLFxyXG4gIEJBTkRfRVhJU1RTLFxyXG4gIE5PVF9UUllJTkcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhbmRTb3J0VHlwZXMge1xyXG4gIEJFU1QsXHJcbiAgV09SU1QsXHJcbiAgTU9TVF9SRUNFTlQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhbmRTY29yZU1vZGlmaWNhdGlvblN0YXR1c2VzIHtcclxuICBBVFRFTVBUSU5HLFxyXG4gIFNVQ0NFU1MsXHJcbiAgRkFJTFVSRSxcclxuICBOT1RfVFJZSU5HLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQcm9maWxlRmV0Y2hTdGF0dXNlcyB7XHJcbiAgQVRURU1QVElORyxcclxuICBTVUNDRVNTLFxyXG4gIEZBSUxVUkUsXHJcbiAgTk9UX1RSWUlOR1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBBdXRoZW50aWNhdGlvblN0YXR1c2VzIHtcclxuICBBVVRIRU5USUNBVElORyxcclxuICBBVVRIRU5USUNBVEVELFxyXG4gIE5PVF9BVVRIRU5USUNBVEVELFxyXG4gIE5PVF9UUllJTkcsXHJcbiAgU0VSVkVSX0VSUk9SLFxyXG4gIFVTRVJOQU1FX05PVF9GT1VORCxcclxuICBJTlZBTElEX1BBU1NXT1JELFxyXG4gIExPR0dJTkdfT1VULFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBVc2VyQ3JlYXRpb25TdGF0dXNlcyB7XHJcbiAgUFJPQ0VTU0lORyxcclxuICBQQVNTV09SRFNfRE9OVF9NQVRDSCxcclxuICBVU0VSTkFNRV9UQUtFTixcclxuICBOT1RfVFJZSU5HLFxyXG4gIFNFUlZFUl9FUlJPUixcclxuICBTVUNDRVNTLFxyXG4gIEVNUFRZX0ZJRUxEUyxcclxuICBJTlZBTElEX0VNQUlMLFxyXG4gIEVNQUlMX1RBS0VOLFxyXG59XHJcbiIsImltcG9ydCB7IHRha2UsIHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBOZXdCYW5kUmVxdWVzdEJvZHkgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3JvdXRlLWhhbmRsZXJzL2JhbmRzXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYW5kQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBiYW5kQ3JlYXRpb25TYWdhKCkge1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoYmFuZEFjdGlvbnMucmVxdWVzdENyZWF0ZUJhbmQudHlwZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNhZ2EgcGF5bG9hZDogXCIsIHBheWxvYWQpXHJcbiAgICBjb25zdCB7IGNyZWF0aW5nVXNlcklkLCBiYW5kTmFtZSwgY3JlYXRpbmdVc2VybmFtZSB9ID0gcGF5bG9hZDtcclxuICAgIC8vIGxldCBuZXdCYW5kID0ge1xyXG4gICAgLy8gICBjcmVhdGluZ1VzZXJJZCxcclxuICAgIC8vICAgYmFuZE5hbWUsXHJcbiAgICAvLyB9O1xyXG4gICAgY29uc3QgcmVxdWVzdEJvZHk6IE5ld0JhbmRSZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgYmFuZE5hbWUsXHJcbiAgICAgIG93bmVySWQ6IGNyZWF0aW5nVXNlcklkLFxyXG4gICAgICBvd25lck5hbWU6IGNyZWF0aW5nVXNlcm5hbWUsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICBheGlvcy5wb3N0LFxyXG4gICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5uZXdCYW5kLFxyXG4gICAgICByZXF1ZXN0Qm9keVxyXG4gICAgKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgY29uc3QgbmV3QmFuZDogQmFuZENsYXNzID0gcmVzcG9uc2UubmV3QmFuZDtcclxuICAgICAgLy8gbGV0IHsgX2lkLCBiYW5kTmFtZSwgY3JlYXRpbmdVc2VySWQsIHNjb3JlIH0gPSBuZXdCYW5kO1xyXG4gICAgICAvLyBsZXQgbmV3QmFuZDogQmFuZENsYXNzID0ge1xyXG4gICAgICAvLyAgIG5hbWU6IGJhbmROYW1lLFxyXG4gICAgICAvLyAgIG93bmVyTmFtZTogY3JlYXRpbmdVc2VybmFtZSxcclxuICAgICAgLy8gICBvd25lcklkOiBjcmVhdGluZ1VzZXJJZCxcclxuICAgICAgLy8gICBzY29yZTogMCxcclxuICAgICAgLy8gICBjcmVhdGVkT24sXHJcbiAgICAgIC8vICAgX2lkOiBuZXdCYW5kSWQsXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5jcmVhdGVCYW5kU3VjY2VzcyhuZXdCYW5kKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCByZWFzb246IEJhbmRDcmVhdGlvblN0YXR1c2VzID0gcmVzcG9uc2UuZGF0YS5yZWFzb247XHJcbiAgICAgIHlpZWxkIHB1dChiYW5kQWN0aW9ucy5jcmVhdGVCYW5kRmFpbHVyZShyZWFzb24pKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5cclxuLy8gVW5jb25uZWN0ZWROYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcclxuLy8gICB1c2VybmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gICBhdXRoZW50aWNhdGlvblN0YXR1czogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC52YWx1ZXMoQXV0aGVudGljYXRpb25TdGF0dXNlcykpLFxyXG4vLyAgIGxvZ291dDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy8gfTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNlc3Npb24gfSkgPT4gKHtcclxuICBhdXRoZW50aWNhdGlvblN0YXR1czogc2Vzc2lvbi5hdXRoZW50aWNhdGlvblN0YXR1cyxcclxuICB1c2VybmFtZTogc2Vzc2lvbi51c2VybmFtZSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbG9nb3V0OiAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RMb2dvdXQoKSk7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tTZXNzaW9uOiAoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDaGVja1Nlc3Npb24oKSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIE5hdmlnYXRpb25Qcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xyXG5cclxuY2xhc3MgVW5jb25uZWN0ZWROYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE5hdmlnYXRpb25Qcm9wcz4ge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HKVxyXG4gICAgICB0aGlzLnByb3BzLmNoZWNrU2Vzc2lvbigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE5hdmJhciBiZz1cImxpZ2h0XCIgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvXCI+XHJcbiAgICAgICAgICA8TmF2YmFyLkJyYW5kPndhYmFiYz88L05hdmJhci5CcmFuZD5cclxuICAgICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICAgICAgey8qIDxOYXYuSXRlbSBjbGFzc05hbWU9XCJtci1zbS0yXCI+ICovfVxyXG4gICAgICAgIHt0aGlzLnByb3BzLmF1dGhlbnRpY2F0aW9uU3RhdHVzID09XHJcbiAgICAgICAgQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdi5JdGVtPlNpZ25lZCBpbiBhcyB7dGhpcy5wcm9wcy51c2VybmFtZX08L05hdi5JdGVtPlxyXG4gICAgICAgICAgICA8TmF2Lkxpbmsgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5sb2dvdXQoKX0+TG9nb3V0PC9OYXYuTGluaz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICA8TmF2Lkxpbms+TG9naW48L05hdi5MaW5rPlxyXG4gICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qIDwvTmF2Lkl0ZW0+ICovfVxyXG4gICAgICA8L05hdmJhcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbiA9IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFVuY29ubmVjdGVkTmF2aWdhdGlvbik7XHJcbiIsIi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJyZWFjdC1ib290c3RyYXAvQWxlcnRcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIjtcclxuXHJcbmNvbnN0IE5vTmFtZUFsZXJ0ID0gKCkgPT4gKFxyXG4gIDxBbGVydCB2YXJpYW50PVwiZGFuZ2VyXCI+XHJcbiAgICA8QWxlcnQuSGVhZGluZz5UaGlzIE1GIHNhaWQgJmxkcXVvOyAmcmRxdW87PC9BbGVydC5IZWFkaW5nPlxyXG4gICAgPHA+V2hvIGFyZSB5b3U/IEpvaG4gQ2FnZSBYRD8gSnVzdCBraWRkaW5nLCBkb24mYXBvczt0IGtub3cgd2hvIHRoYXQgaXMuPC9wPlxyXG4gIDwvQWxlcnQ+XHJcbik7XHJcblxyXG5mdW5jdGlvbiBCYW5kRXhpc3RzQWxlcnQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwiZGFuZ2VyXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPlNvbWVib2R5IGFscmVhZHkgdGhvdWdodCBvZiB0aGF0ITwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgR29pbmcgdG8gaGF2ZSB0byB0cnkgaGFyZGVyLiBNYXliZSByZWFkIGEgdmVyeSBjb21wbGljYXRlZCBib29rIGFuZCB0aGVuXHJcbiAgICAgICAgdGhpbmsgb2Ygc29tZSByZWZlcmVuY2UgdG8gdGhhdC5cclxuICAgICAgPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBVc2VyTm90TG9nZ2VkSW5BbGVydCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPllvdSZhcG9zO3ZlIGdvdHRhIGJlIHNpZ25lZCBpbiE8L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFdlIGRvbiZhcG9zO3QgbGV0IGp1c3QgYW55b25lIGluIGhlcmUuIFlvdSBjYW57XCIgXCJ9XHJcbiAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbmV3LXVzZXJcIj5cclxuICAgICAgICAgIDxBbGVydC5MaW5rPm1ha2UgYW4gYWNjb3VudCBoZXJlPC9BbGVydC5MaW5rPlxyXG4gICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICAsIHRob3VnaCwgaWYgeW91IHdhbnQuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQmFuZENyZWF0ZWRBbGVydCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJzdWNjZXNzXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPk5hbWUgc3VibWl0dGVkITwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+Tm93IHRoYXQmYXBvcztzIGZ1bm55LjwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzOiBzdGF0ZS5zZXNzaW9uLmF1dGhlbnRpY2F0aW9uU3RhdHVzLFxyXG4gICAgdXNlcklkOiBzdGF0ZS5zZXNzaW9uLnVzZXJJZCxcclxuICAgIHVzZXJuYW1lOiBzdGF0ZS5zZXNzaW9uLnVzZXJuYW1lLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBjcmVhdGVCYW5kOiAodXNlcklkLCB1c2VybmFtZSwgYmFuZE5hbWUpID0+IHtcclxuICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgYmFuZEFjdGlvbnMucmVxdWVzdENyZWF0ZUJhbmQoe1xyXG4gICAgICAgICAgY3JlYXRpbmdVc2VySWQ6IHVzZXJJZCxcclxuICAgICAgICAgIGNyZWF0aW5nVXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgYmFuZE5hbWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgcmVkdXhDb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcclxudHlwZSBDcmVhdGVCYW5kRm9ybVByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPjtcclxuXHJcbnR5cGUgQ3JlYXRlQmFuZEZvcm1TdGF0ZSA9IHtcclxuICBiYW5kTmFtZTogc3RyaW5nO1xyXG4gIGRpc3BsYXlCYW5kRXhpc3RzQWxlcnQ6IGJvb2xlYW47XHJcbiAgZGlzcGxheVVzZXJOb3RMb2dnZWRJbjogYm9vbGVhbjtcclxuICBkaXNwbGF5Tm9OYW1lQWxlcnQ6IGJvb2xlYW47XHJcbiAgZGlzcGxheVByb2dlc3M6IGJvb2xlYW47XHJcbiAgZGlzcGxheVN1Y2Nlc3M6IGJvb2xlYW47XHJcbn07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZENyZWF0ZUJhbmRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIENyZWF0ZUJhbmRGb3JtUHJvcHMsXHJcbiAgQ3JlYXRlQmFuZEZvcm1TdGF0ZVxyXG4+IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGJhbmROYW1lOiBcIlwiLFxyXG4gICAgZGlzcGxheUJhbmRFeGlzdHNBbGVydDogZmFsc2UsXHJcbiAgICBkaXNwbGF5VXNlck5vdExvZ2dlZEluOiBmYWxzZSxcclxuICAgIGRpc3BsYXlOb05hbWVBbGVydDogZmFsc2UsXHJcbiAgICBkaXNwbGF5UHJvZ2VzczogZmFsc2UsXHJcbiAgICBkaXNwbGF5U3VjY2VzczogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMucHJvcHMuYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEXHJcbiAgICApIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuYmFuZE5hbWUgPT0gXCJcIikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZGlzcGxheUJhbmRFeGlzdHNBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICBkaXNwbGF5VXNlck5vdExvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgIGRpc3BsYXlOb05hbWVBbGVydDogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZUJhbmQoXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZXJJZCxcclxuICAgICAgICAgIHRoaXMucHJvcHMudXNlcm5hbWUsXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmJhbmROYW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGRpc3BsYXlCYW5kRXhpc3RzQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgZGlzcGxheVVzZXJOb3RMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICBkaXNwbGF5Tm9OYW1lQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgZGlzcGxheVByb2dlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgZGlzcGxheVN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRpc3BsYXlCYW5kRXhpc3RzQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc3BsYXlVc2VyTm90TG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgZGlzcGxheU5vTmFtZUFsZXJ0OiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGRpc3BsYXlCYW5kRXhpc3RzQWxlcnQsXHJcbiAgICAgIGRpc3BsYXlOb05hbWVBbGVydCxcclxuICAgICAgZGlzcGxheVByb2dlc3MsXHJcbiAgICAgIGRpc3BsYXlVc2VyTm90TG9nZ2VkSW4sXHJcbiAgICAgIGRpc3BsYXlTdWNjZXNzLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgIDxJbnB1dEdyb3VwIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFib3V0IGEgYmFuZCBjYWxsZWQuLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBiYW5kTmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICB7ZGlzcGxheVVzZXJOb3RMb2dnZWRJbiA/IDxVc2VyTm90TG9nZ2VkSW5BbGVydCAvPiA6IG51bGx9XHJcbiAgICAgICAge2Rpc3BsYXlOb05hbWVBbGVydCA/IDxOb05hbWVBbGVydCAvPiA6IG51bGx9XHJcbiAgICAgICAge2Rpc3BsYXlCYW5kRXhpc3RzQWxlcnQgPyA8QmFuZEV4aXN0c0FsZXJ0IC8+IDogbnVsbH1cclxuICAgICAgICB7ZGlzcGxheVN1Y2Nlc3MgPyA8QmFuZENyZWF0ZWRBbGVydCAvPiA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVCYW5kRm9ybSA9IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFVuY29ubmVjdGVkQ3JlYXRlQmFuZEZvcm0pO1xyXG4iLCJjb25zdCBtc0luTWludXRlID0gNjAwMDA7XHJcbmNvbnN0IG1zSW5Ib3VyID0gbXNJbk1pbnV0ZSAqIDYwO1xyXG5jb25zdCBtc0luRGF5ID0gbXNJbkhvdXIgKiAyNDtcclxuY29uc3QgbXNJblllYXIgPSBtc0luRGF5ICogMzY1O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVTaW5jZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICBjb25zdCBlbGFwc2VkVGltZSA9IERhdGUubm93KCkgLSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG4gIGlmIChlbGFwc2VkVGltZSA8IG1zSW5NaW51dGUpIHtcclxuICAgIHJldHVybiBcIjFtXCI7XHJcbiAgfVxyXG4gIGlmIChlbGFwc2VkVGltZSA8IG1zSW5Ib3VyKSB7XHJcbiAgICBjb25zdCBudW1PZk1pbnV0ZXMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJbk1pbnV0ZSk7XHJcbiAgICByZXR1cm4gYCR7bnVtT2ZNaW51dGVzfW1gO1xyXG4gIH1cclxuICBpZiAoZWxhcHNlZFRpbWUgPCBtc0luRGF5KSB7XHJcbiAgICBjb25zdCBudW1PZkhvdXJzID0gTWF0aC5mbG9vcihlbGFwc2VkVGltZSAvIG1zSW5Ib3VyKTtcclxuICAgIGNvbnN0IG51bU9mTWludXRlcyA9IE1hdGguZmxvb3IoKGVsYXBzZWRUaW1lICUgbXNJbkhvdXIpIC8gbXNJbk1pbnV0ZSk7XHJcbiAgICBsZXQgc3RyaW5nID0gYCR7bnVtT2ZIb3Vyc31oYDtcclxuICAgIGlmIChudW1PZk1pbnV0ZXMgPiAwKSBzdHJpbmcgKz0gYCAke251bU9mTWludXRlc31tYDtcclxuICAgIHJldHVybiBzdHJpbmc7XHJcbiAgfVxyXG4gIGlmIChlbGFwc2VkVGltZSA8IG1zSW5ZZWFyKSB7XHJcbiAgICBjb25zdCBudW1PZkRheXMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJbkRheSk7XHJcbiAgICByZXR1cm4gYCR7bnVtT2ZEYXlzfWRgO1xyXG4gIH1cclxuICBjb25zdCBudW1PZlllYXJzID0gTWF0aC5mbG9vcihlbGFwc2VkVGltZSAvIG1zSW5ZZWFyKTtcclxuICBjb25zdCBudW1PZkRheXMgPSBNYXRoLmZsb29yKChlbGFwc2VkVGltZSAlIG1zSW5ZZWFyKSAvIG1zSW5EYXkpO1xyXG4gIGxldCBzdHJpbmcgPSBgJHtudW1PZlllYXJzfXlgO1xyXG4gIGlmIChudW1PZkRheXMgPiAwKSBzdHJpbmcgKz0gYCAke251bU9mRGF5c31kYDtcclxuICByZXR1cm4gc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWN0aW9uQ2hhbm5lbCwgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHdhdGNoRmV0Y2hCYW5kc1NhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICBjb25zdCBmZXRjaEJhbmRzQ2hhbm5lbCA9IHlpZWxkIGFjdGlvbkNoYW5uZWwoXHJcbiAgICBiYW5kQWN0aW9ucy5yZXF1ZXN0RmV0Y2hCYW5kcy50eXBlXHJcbiAgKTtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKGZldGNoQmFuZHNDaGFubmVsKTtcclxuICAgIGNvbnN0IHsgbWF4QmFuZHMsIHNvcnRCeSB9ID0gcGF5bG9hZDtcclxuICAgIHlpZWxkIGNhbGwoZmV0Y2hCYW5kcywgbWF4QmFuZHMsIHNvcnRCeSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoQmFuZHMobWF4QmFuZHMsIHNvcnRCeSkge1xyXG4gIGxldCByZXNwb25zZTtcclxuICB0cnkge1xyXG4gICAgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGF4aW9zLnBvc3QsIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLnBvc3RCYW5kcywge1xyXG4gICAgICBtYXhCYW5kcyxcclxuICAgICAgc29ydEJ5LFxyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMuZmV0Y2hCYW5kc1N1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMuZmV0Y2hCYW5kc0ZhaWx1cmUoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHVzZXJBdXRoZW50aWNhdGlvblNhZ2EoKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0QXV0aGVudGljYXRlVXNlci50eXBlKTtcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBwYXlsb2FkO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuYXV0aGVudGljYXRlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHsgdXNlcklkLCBiYW5kc01vZGlmaWVkIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhbmRzTW9kaWZpZWQgaW4gdXNlckF1dGhlbnRpY2F0aW9uU2FnYTogXCIsIGJhbmRzTW9kaWZpZWQpO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmF1dGhlbnRpY2F0ZVVzZXJTdWNjZXNzKHtcclxuICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgYmFuZHNNb2RpZmllZCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5hdXRoZW50aWNhdGVVc2VyRmFpbHVyZSh7XHJcbiAgICAgICAgICAgIHJlYXNvbjogZXJyLnJlc3BvbnNlLmRhdGEucmVhc29uLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBVc2VyQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXJcIjtcclxuXHJcbi8vIFVuY29ubmVjdGVkTmV3VXNlckZvcm0ucHJvcFR5cGVzID0ge1xyXG4vLyAgIHN1Ym1pdEZvcm06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbi8vICAgdXNlckNyZWF0aW9uU3RhdHVzOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhVc2VyQ3JlYXRpb25TdGF0dXNlcykpLFxyXG4vLyB9O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2Vzc2lvbiB9KSA9PiAoe1xyXG4gIHVzZXJDcmVhdGlvblN0YXR1czogc2Vzc2lvbi51c2VyQ3JlYXRpb25TdGF0dXMsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHN1Ym1pdEZvcm06ICgvKmVtYWlsLCovIHVzZXJuYW1lLCBwYXNzd29yZCwgcmVwZWF0UGFzc3dvcmQpID0+XHJcbiAgICBkaXNwYXRjaChcclxuICAgICAgc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENyZWF0ZVVzZXIoe1xyXG4gICAgICAgIC8vIGVtYWlsLFxyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIHJlcGVhdFBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgKSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIE5ld1VzZXJGb3JtUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+O1xyXG5cclxudHlwZSBOZXdVc2VyRm9ybVN0YXRlID0ge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIHJlcGVhdFBhc3N3b3JkOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgVW5jb25uZWN0ZWROZXdVc2VyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuICBOZXdVc2VyRm9ybVByb3BzLFxyXG4gIE5ld1VzZXJGb3JtU3RhdGVcclxuPiB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICByZXBlYXRQYXNzd29yZDogXCJcIixcclxuICB9O1xyXG5cclxuICAvLyBUT0RPOiBXb3VsZG4ndCBpdCBiZSBlYXN5IHRvIG1ha2UgaXQgc28gdGhlIGVtYWlsIGlzIHZhbGlkYXRlZCBhcyB0aGUgdXNlciB0eXBlcz8gTWF5YmUgb24gYSBzbGlnaHQgZGVsYXk/IFNhbWUgd2l0aCB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkP1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHVzZXJDcmVhdGlvblN0YXR1cyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzZyZW1cIiB9fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICB7LyogPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJFbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWwgQWRkcmVzczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5JTlZBTElEX0VNQUlMXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+ICovfVxyXG4gICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuVVNFUk5BTUVfVEFLRU5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgVXNlcm5hbWUgaXMgYWxyZWFkeSB0YWtlbi5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlclBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuUEFTU1dPUkRTX0RPTlRfTUFUQ0hcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJSZXBlYXRQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UmVwZWF0IFBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlcGVhdFBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgICBQYXNzd29yZHMgZG9uJmFwb3M7dCBtYXRjaC5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HIHx8XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckNyZWF0aW9uU3RhdHVzID09IFVzZXJDcmVhdGlvblN0YXR1c2VzLlNVQ0NFU1NcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3VibWl0Rm9ybShcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlcGVhdFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlNVQ0NFU1MgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEFjY291bnQgY3JlYXRlZCEgWW91IG1heSBub3cgPGEgaHJlZj1cIi9sb2dpblwiPmxvZyBpbjwvYT4uXHJcbiAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3VzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HICYmIChcclxuICAgICAgICAgICAgICAgIDxBbGVydCB2YXJpYW50PVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiIC8+IFByb2Nlc3NpbmcuLi5cclxuICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTmV3VXNlckZvcm0gPSBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShVbmNvbm5lY3RlZE5ld1VzZXJGb3JtKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQge1xyXG4gIFVzZXJQcm9maWxlVHlwZSxcclxuICB1c2VyUHJvZmlsZUFjdGlvbnMsXHJcbn0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9Db250YWluZXJcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9lc20vVGFibGVcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL0JhZGdlXCI7XHJcbmltcG9ydCB7IGdldFRpbWVTaW5jZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxpdHkvZ2V0LXRpbWUtc2luY2VcIjtcclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogUm9vdFN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZldGNoU3RhdHVzOiBzdGF0ZS51c2VyUHJvZmlsZS5mZXRjaFN0YXR1cyxcclxuICAgIHByb2ZpbGU6IHN0YXRlLnVzZXJQcm9maWxlLnByb2ZpbGUsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcXVlc3RGZXRjaFByb2ZpbGU6ICh0YXJnZXRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh1c2VyUHJvZmlsZUFjdGlvbnMucmVxdWVzdEZldGNoVXNlclByb2ZpbGUoeyB0YXJnZXRJZCB9KSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHJlZHV4Q29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbnR5cGUgVXNlclByb2ZpbGVQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiByZWR1eENvbm5lY3Rvcj4gJiB7XHJcbiAgaWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbn07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZFVzZXJQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFVzZXJQcm9maWxlUHJvcHM+IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMucmVxdWVzdEZldGNoUHJvZmlsZSh0aGlzLnByb3BzLmlkKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcHJvZmlsZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChwcm9maWxlKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGg1Pntwcm9maWxlLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBzY29yZTogPGI+e3Byb2ZpbGUudG90YWxTY29yZX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF2ZXJhZ2Ugc2NvcmU6IDxiPntwcm9maWxlLmF2ZXJhZ2VTY29yZX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVzIGNvbnRyaWJ1dGVkOiA8Yj57cHJvZmlsZS5uYW1lc0NvbnRyaWJ1dGVkfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHNpemU9XCJzbVwiIHN0cmlwZWQgYm9yZGVyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS5iYW5kcy5tYXAoKGJhbmQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1N0cmluZyhiYW5kLl9pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57YmFuZC5zY29yZX08L0JhZGdlPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57YmFuZC5uYW1lfTwvYj4gKGNyZWF0ZWQge2dldFRpbWVTaW5jZShuZXcgRGF0ZShiYW5kLmNyZWF0ZWRPbikpfSBhZ28pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclByb2ZpbGUgPSByZWR1eENvbm5lY3RvcihVbmNvbm5lY3RlZFVzZXJQcm9maWxlKTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25DaGFubmVsLCBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgdXNlclJlY29yZHNBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3Jkc1JlcXVlc3RCb2R5IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9yb3V0ZS1oYW5kbGVycy91c2VyLXJlY29yZHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHdhdGNoRmV0Y2hVc2VyUmVjb3Jkc1NhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICBjb25zdCBmZXRjaFVzZXJSZWNvcmRzQ2hhbm5lbCA9IHlpZWxkIGFjdGlvbkNoYW5uZWwoXHJcbiAgICB1c2VyUmVjb3Jkc0FjdGlvbnMucmVxdWVzdEZldGNoVXNlclJlY29yZHMudHlwZVxyXG4gICk7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShmZXRjaFVzZXJSZWNvcmRzQ2hhbm5lbCk7XHJcbiAgICBjb25zdCB7IG51bU9mUmVjb3Jkcywgc29ydFR5cGUgfSA9IHBheWxvYWQ7XHJcbiAgICB5aWVsZCBjYWxsKGZldGNoVXNlclJlY29yZHMsIG51bU9mUmVjb3Jkcywgc29ydFR5cGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaFVzZXJSZWNvcmRzKFxyXG4gIG1heFJlY29yZHM6IG51bWJlcixcclxuICBzb3J0Qnk6IFVzZXJSZWNvcmRTb3J0VHlwZXNcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuZ2V0VXNlclJlY29yZHMsXHJcbiAgICAgIHsgbnVtT2ZSZWNvcmRzOiBtYXhSZWNvcmRzLCBzb3J0VHlwZTogc29ydEJ5IH1cclxuICAgICk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB5aWVsZCBwdXQodXNlclJlY29yZHNBY3Rpb25zLmZldGNoVXNlclJlY29yZHNTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHVzZXJSZWNvcmRzQWN0aW9ucy5mZXRjaFVzZXJSZWNvcmRzRmFpbHVyZSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG4vLyBUT0RPOiBUaGlzIGRvZXNuJ3Qgd29yayByaWdodCBvbiB0aGUgZGF0YWJhc2Ugc2lkZSFcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogYmFuZFNjb3JlTW9kaWZpY2F0aW9uU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoYmFuZEFjdGlvbnMucmVxdWVzdE1vZGlmeUJhbmRTY29yZS50eXBlKTtcclxuICAgIGNvbnN0IHsgdGFyZ2V0QmFuZElkLCBtb2RpZnlpbmdVc2VySWQsIG1vZGlmaWNhdGlvblZhbHVlIH0gPSBwYXlsb2FkO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coXCJtb2RpZmljYXRpb24gdmFsdWUgaW4gc2FnYTogXCIsIG1vZGlmaWNhdGlvblZhbHVlKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMubW9kaWZ5QmFuZCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICBtb2RpZnlpbmdVc2VySWQsXHJcbiAgICAgICAgICBtb2RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgaWYgKG1vZGlmaWNhdGlvblZhbHVlID09IDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBiYW5kQWN0aW9ucy5tb2RpZnlCYW5kU2NvcmVTdWNjZXNzKHtcclxuICAgICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgICBtb2RpZmljYXRpb25WYWx1ZTogLXBheWxvYWQudW5kb1ZhbHVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIGJhbmRBY3Rpb25zLm1vZGlmeUJhbmRTY29yZVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlRmFpbHVyZSgpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlclVybCA9XHJcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCJodHRwOi8vbG9jYWxob3N0Ojc3NzdcIjtcclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IFwiL2FwaS9hdXRoZW50aWNhdGVcIjtcclxuZXhwb3J0IGNvbnN0IHBvc3RCYW5kcyA9IFwiL2FwaS9iYW5kc1wiO1xyXG5leHBvcnQgY29uc3QgbW9kaWZ5QmFuZCA9IFwiL2FwaS9iYW5kL21vZGlmeVwiO1xyXG5leHBvcnQgY29uc3QgbmV3QmFuZCA9IFwiL2FwaS9iYW5kL25ld1wiO1xyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IFwiL2FwaS9jcmVhdGUtdXNlclwiO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlcm5hbWUgPSBcIi9hcGkvdXNlcm5hbWVzL2dldFwiO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlclJlY29yZHMgPSBcIi9hcGkvdXNlcnMvZ2V0XCI7XHJcbmV4cG9ydCBjb25zdCBjaGVja1Nlc3Npb24gPSBcIi9hcGkvc2Vzc2lvblwiO1xyXG5cclxuY29uc3QgZ2V0VXNlclByb2ZpbGVCYXNlID0gXCIvYXBpL3VzZXItcHJvZmlsZVwiO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlclByb2ZpbGVFbmRwb2ludCA9IGdldFVzZXJQcm9maWxlQmFzZSArIFwiLzp1c2VySWRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHZXRVc2VyUHJvZmlsZVVybChcclxuICB0YXJnZXRVc2VySWQgLyo6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQqL1xyXG4pOiBzdHJpbmcge1xyXG4gIHJldHVybiBnZXRVc2VyUHJvZmlsZUJhc2UgKyBcIi9cIiArIHRhcmdldFVzZXJJZCAvKi50b0hleFN0cmluZyovO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWN0aW9uQ2hhbm5lbCwgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNoZWNrU2Vzc2lvblNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgeWllbGQgdGFrZShzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0Q2hlY2tTZXNzaW9uLnR5cGUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLmdldCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5jaGVja1Nlc3Npb24sXHJcbiAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgaW4gY2hlY2stc2Vzc2lvbi1zYWdhOiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlcklkLCB1c2VybmFtZSwgYmFuZHNNb2RpZmllZCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5jaGVja1Nlc3Npb25TdWNjZXNzKHtcclxuICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgYmFuZHNNb2RpZmllZCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMuY2hlY2tTZXNzaW9uRmFpbHVyZSgpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5jaGVja1Nlc3Npb25GYWlsdXJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7XHJcbiAgQmFuZENyZWF0aW9uU3RhdHVzZXMsXHJcbiAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMsXHJcbiAgQmFuZFNvcnRUeXBlcyxcclxufSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG50eXBlIFNjb3JlTW9kaWZpY2F0aW9uU3RhdGUgPSB7XHJcbiAgc3RhdHVzOiBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcztcclxuICAvLyBUT0RPOiBUaGlzIG5lZWRzIHRvIHJlZmVyIHRvIGEgYmFuZCdzIElEXHJcbiAgdGFyZ2V0PzogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxufTtcclxuXHJcbnR5cGUgQmFuZHNTbGljZVN0YXRlID0ge1xyXG4gIHBlbmRpbmdGZXRjaGVzOiBudW1iZXI7XHJcbiAgY3JlYXRpb25TdGF0dXM6IEJhbmRDcmVhdGlvblN0YXR1c2VzO1xyXG4gIGl0ZW1zOiBCYW5kQ2xhc3NbXTtcclxuICBzY29yZU1vZGlmaWNhdGlvblN0YXRlOiBTY29yZU1vZGlmaWNhdGlvblN0YXRlO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBCYW5kc1NsaWNlU3RhdGUgPSB7XHJcbiAgcGVuZGluZ0ZldGNoZXM6IDAsXHJcbiAgaXRlbXM6IFtdLFxyXG4gIGNyZWF0aW9uU3RhdHVzOiBCYW5kQ3JlYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIHNjb3JlTW9kaWZpY2F0aW9uU3RhdGU6IHtcclxuICAgIHN0YXR1czogQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgYmFuZHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImJhbmRzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICAvLyBCYW5kIGZldGNoaW5nXHJcbiAgICByZXF1ZXN0RmV0Y2hCYW5kcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgbWF4QmFuZHM6IG51bWJlcjtcclxuICAgICAgICBzb3J0Qnk6IEJhbmRTb3J0VHlwZXM7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMrKztcclxuICAgIH0sXHJcbiAgICBmZXRjaEJhbmRzU3VjY2VzcyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEJhbmRDbGFzc1tdPikge1xyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKChuZXdCYW5kKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5pdGVtcy5zb21lKChiYW5kKSA9PiBiYW5kLl9pZCA9PSBuZXdCYW5kLl9pZCkpXHJcbiAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKG5ld0JhbmQpO1xyXG4gICAgICB9KTtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMtLTtcclxuICAgIH0sXHJcbiAgICBmZXRjaEJhbmRzRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBCYW5kIGNyZWF0aW9uXHJcbiAgICByZXF1ZXN0Q3JlYXRlQmFuZChcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgY3JlYXRpbmdVc2VySWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgYmFuZE5hbWU6IHN0cmluZztcclxuICAgICAgICBjcmVhdGluZ1VzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuY3JlYXRpb25TdGF0dXMgPSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVElORztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVCYW5kU3VjY2VzcyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEJhbmRDbGFzcz4pIHtcclxuICAgICAgc3RhdGUuY3JlYXRpb25TdGF0dXMgPSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVEVEO1xyXG4gICAgICBzdGF0ZS5pdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVCYW5kRmFpbHVyZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEJhbmRDcmVhdGlvblN0YXR1c2VzPikge1xyXG4gICAgICBzdGF0ZS5jcmVhdGlvblN0YXR1cyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBNb2RpZnkgYmFuZCBzY29yZVxyXG4gICAgcmVxdWVzdE1vZGlmeUJhbmRTY29yZShcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdGFyZ2V0QmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIG1vZGlmeWluZ1VzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICBtb2RpZmljYXRpb25WYWx1ZTogbnVtYmVyO1xyXG4gICAgICAgIHVuZG9WYWx1ZT86IG51bWJlcjtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnN0YXR1cyA9XHJcbiAgICAgICAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuQVRURU1QVElORztcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS50YXJnZXQgPSBhY3Rpb24ucGF5bG9hZC50YXJnZXRCYW5kSWQ7XHJcbiAgICB9LFxyXG4gICAgbW9kaWZ5QmFuZFNjb3JlU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEJhbmRJbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleChcclxuICAgICAgICAoYmFuZCkgPT4gYmFuZC5faWQgPT09IGFjdGlvbi5wYXlsb2FkLnRhcmdldEJhbmRJZFxyXG4gICAgICApO1xyXG4gICAgICBzdGF0ZS5pdGVtc1t0YXJnZXRCYW5kSW5kZXhdLnNjb3JlICs9IGFjdGlvbi5wYXlsb2FkLm1vZGlmaWNhdGlvblZhbHVlO1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnN0YXR1cyA9XHJcbiAgICAgICAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuU1VDQ0VTUztcclxuICAgIH0sXHJcbiAgICBtb2RpZnlCYW5kU2NvcmVGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIC8vIFRPRE86IFNob3VsZG4ndCB3ZSBiZSBnZXR0aW5nIGEgcmVhc29uIGZvciB0aGUgZmFpbHVyZSBoZXJlP1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnN0YXR1cyA9XHJcbiAgICAgICAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuRkFJTFVSRTtcclxuICAgICAgc3RhdGUuc2NvcmVNb2RpZmljYXRpb25TdGF0ZS50YXJnZXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhbmRBY3Rpb25zID0gYmFuZHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBiYW5kc1NsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGdldERlZmF1bHRNaWRkbGV3YXJlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGJhbmRzUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHNlc3Npb25SZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB1c2VyUmVjb3Jkc1JlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZVwiO1xyXG5pbXBvcnQgdXNlclByb2ZpbGVSZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuXHJcbmltcG9ydCAqIGFzIHNhZ2FzIGZyb20gXCIuL3NhZ2FzXCI7XHJcblxyXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbLi4uZ2V0RGVmYXVsdE1pZGRsZXdhcmUoeyB0aHVuazogZmFsc2UgfSksIHNhZ2FNaWRkbGV3YXJlXTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBiYW5kczogYmFuZHNSZWR1Y2VyLFxyXG4gIHNlc3Npb246IHNlc3Npb25SZWR1Y2VyLFxyXG4gIHVzZXJSZWNvcmRzOiB1c2VyUmVjb3Jkc1JlZHVjZXIsXHJcbiAgdXNlclByb2ZpbGU6IHVzZXJQcm9maWxlUmVkdWNlclxyXG59KTtcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxyXG4gIG1pZGRsZXdhcmU6IG1pZGRsZXdhcmUsXHJcbn0pO1xyXG5cclxuZm9yIChjb25zdCBzYWdhIGluIHNhZ2FzKSB7XHJcbiAgc2FnYU1pZGRsZXdhcmUucnVuKHNhZ2FzW3NhZ2FdKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlLCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgeyBVc2VyQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB1c2VyQ3JlYXRpb25TYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0Q3JlYXRlVXNlci50eXBlKTtcclxuICAgIGNvbnN0IHsgLyplbWFpbCwqLyB1c2VybmFtZSwgcGFzc3dvcmQsIHJlcGVhdFBhc3N3b3JkIH0gPSBwYXlsb2FkO1xyXG5cclxuICAgIC8vIGlmICghZW1haWxJc1ZhbGlkKGVtYWlsKSkge1xyXG4gICAgLy8gICB5aWVsZCBwdXQoXHJcbiAgICAvLyAgICAgc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgLy8gICAgICAgcmVhc29uOiBVc2VyQ3JlYXRpb25TdGF0dXNlcy5JTlZBTElEX0VNQUlMLFxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgICBpZiAocGFzc3dvcmQgIT09IHJlcGVhdFBhc3N3b3JkKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuY3JlYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgICAgICAgICByZWFzb246IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBBU1NXT1JEU19ET05UX01BVENILFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLmNyZWF0ZVVzZXIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAvLyBlbWFpbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyU3VjY2VzcygpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyRmFpbHVyZSh7XHJcbiAgICAgICAgICAgICAgcmVhc29uOiBlcnJvci5yZXNwb25zZS5kYXRhLnJlYXNvbixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbWFpbElzVmFsaWQoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICByZXR1cm4gcmUudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcbiIsImltcG9ydCB7IHRha2UsIHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgdXNlclByb2ZpbGVBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuaW1wb3J0IHsgY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoUHJvZmlsZVNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKFxyXG4gICAgICB1c2VyUHJvZmlsZUFjdGlvbnMucmVxdWVzdEZldGNoVXNlclByb2ZpbGUudHlwZVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gICAgY29uc3QgdGFyZ2V0SWQgPSBwYXlsb2FkLnRhcmdldElkO1xyXG4gICAgY29uc29sZS5sb2codGFyZ2V0SWQpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwodGFyZ2V0SWQpKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLmdldCxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBjcmVhdGVHZXRVc2VyUHJvZmlsZVVybCh0YXJnZXRJZClcclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICB1c2VyUHJvZmlsZUFjdGlvbnMuZmV0Y2hVc2VyUHJvZmlsZVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICBwcm9maWxlOiByZXNwb25zZS5kYXRhLnByb2ZpbGUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHVzZXJQcm9maWxlQWN0aW9ucy5mZXRjaFVzZXJQcm9maWxlRmFpbHVyZSgpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh1c2VyUHJvZmlsZUFjdGlvbnMuZmV0Y2hVc2VyUHJvZmlsZUZhaWx1cmUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcywgVXNlckNyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzLCBTVEFURVMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbnR5cGUgU2Vzc2lvbkJhbmRNb2RpZmljYXRpb24gPSB7XHJcbiAgdGFyZ2V0QmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIFNlc3Npb25TbGljZVN0YXRlID0ge1xyXG4gIGF1dGhlbnRpY2F0aW9uU3RhdHVzOiBBdXRoZW50aWNhdGlvblN0YXR1c2VzO1xyXG4gIHVzZXJJZD86IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgdXNlckNyZWF0aW9uU3RhdHVzOiBVc2VyQ3JlYXRpb25TdGF0dXNlcztcclxuICBiYW5kc01vZGlmaWVkOiBTZXNzaW9uQmFuZE1vZGlmaWNhdGlvbltdO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTZXNzaW9uU2xpY2VTdGF0ZSA9IHtcclxuICBhdXRoZW50aWNhdGlvblN0YXR1czogQXV0aGVudGljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIHVzZXJJZDogdW5kZWZpbmVkLFxyXG4gIHVzZXJuYW1lOiB1bmRlZmluZWQsXHJcbiAgdXNlckNyZWF0aW9uU3RhdHVzOiBVc2VyQ3JlYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIGJhbmRzTW9kaWZpZWQ6IFtdLFxyXG59O1xyXG5cclxuY29uc3Qgc2Vzc2lvblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwic2Vzc2lvblwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8gU2Vzc2lvbiBjaGVja2luZ1xyXG4gICAgcmVxdWVzdENoZWNrU2Vzc2lvbihzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRJTkc7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tTZXNzaW9uU3VjY2VzcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgYmFuZHNNb2RpZmllZDogU2Vzc2lvbkJhbmRNb2RpZmljYXRpb25bXTtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRDtcclxuICAgICAgc3RhdGUudXNlcklkID0gYWN0aW9uLnBheWxvYWQudXNlcklkO1xyXG4gICAgICBzdGF0ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lO1xyXG4gICAgICBzdGF0ZS5iYW5kc01vZGlmaWVkID0gYWN0aW9uLnBheWxvYWQuYmFuZHNNb2RpZmllZDtcclxuICAgIH0sXHJcbiAgICBjaGVja1Nlc3Npb25GYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVc2VyIGF1dGhlbnRpY2F0aW9uXHJcbiAgICByZXF1ZXN0QXV0aGVudGljYXRlVXNlcihcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVElORztcclxuICAgIH0sXHJcbiAgICBhdXRoZW50aWNhdGVVc2VyU3VjY2VzcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgdXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgYmFuZHNNb2RpZmllZDogU2Vzc2lvbkJhbmRNb2RpZmljYXRpb25bXTtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRDtcclxuICAgICAgc3RhdGUudXNlcklkID0gYWN0aW9uLnBheWxvYWQudXNlcklkO1xyXG4gICAgICBzdGF0ZS51c2VybmFtZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lO1xyXG4gICAgICBzdGF0ZS5iYW5kc01vZGlmaWVkID0gYWN0aW9uLnBheWxvYWQuYmFuZHNNb2RpZmllZDtcclxuICAgIH0sXHJcbiAgICBhdXRoZW50aWNhdGVVc2VyRmFpbHVyZShzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gYWN0aW9uLnBheWxvYWQucmVhc29uO1xyXG4gICAgICAvLyBUT0RPOiBJcyBpdCBuZWNlc3NhcnkgdG8gcmVzZXQgdGhpcyB0byBudWxsIGhlcmU/XHJcbiAgICAgIHN0YXRlLnVzZXJJZCA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlciBsb2dvdXRcclxuICAgIHJlcXVlc3RMb2dvdXQoKSB7XHJcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFVzZXIgY3JlYXRpb25cclxuICAgIHJlcXVlc3RDcmVhdGVVc2VyKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICAvLyBlbWFpbDogc3RyaW5nO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICByZXBlYXRQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLnVzZXJDcmVhdGlvblN0YXR1cyA9IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkc7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlVXNlclN1Y2Nlc3Moc3RhdGUpIHtcclxuICAgICAgc3RhdGUudXNlckNyZWF0aW9uU3RhdHVzID0gVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTUztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVVc2VyRmFpbHVyZShzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLnVzZXJDcmVhdGlvblN0YXR1cyA9IGFjdGlvbi5wYXlsb2FkLnJlYXNvbjtcclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAvLyBCYW5kIG1vZGlmaWNhdGlvblxyXG4gICAgW2JhbmRBY3Rpb25zLm1vZGlmeUJhbmRTY29yZVN1Y2Nlc3MudHlwZV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmJhbmRzTW9kaWZpZWQucHVzaCh7XHJcbiAgICAgICAgdGFyZ2V0QmFuZElkOiBhY3Rpb24ucGF5bG9hZC50YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgdmFsdWU6IGFjdGlvbi5wYXlsb2FkLm1vZGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2Vzc2lvbkFjdGlvbnMgPSBzZXNzaW9uU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvblNsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IGhpc3RvcnkgfSBmcm9tIFwiLi4vc3RvcmUvaGlzdG9yeVwiO1xyXG5pbXBvcnQgeyBCaWdCYW5kVGFibGUgfSBmcm9tIFwiLi9CaWdCYW5kVGFibGVcIjtcclxuaW1wb3J0IHsgTGFuZGluZyB9IGZyb20gXCIuL0xhbmRpbmdcIjtcclxuaW1wb3J0IHsgTG9naW4gfSBmcm9tIFwiLi9Mb2dpblwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIi4vTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBOZXdVc2VyRm9ybSB9IGZyb20gXCIuL05ld1VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xyXG5cclxuLy8gY29uc3QgQXV0aGVudGljYXRpb25HdWFyZCA9IChDb21wb25lbnQpID0+ICh7IG1hdGNoIH0pID0+IHtcclxuLy8gICBpZiAoXHJcbi8vICAgICBzdG9yZS5nZXRTdGF0ZSgpLnNlc3Npb24uYXV0aGVudGljYXRpb25TdGF0dXMgIT09XHJcbi8vICAgICBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuLy8gICApIHtcclxuLy8gICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz47XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiA8Q29tcG9uZW50IG1hdGNoPXttYXRjaH0gLz47XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9ICgpID0+IChcclxuICAvLyBUT0RPOiBXaGF0IGlzIHRoZSBSb3V0ZXIncyBcImhpc3RvcnlcIiBhbGwgYWJvdXQ/XHJcbiAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvYmFuZHNcIiBjb21wb25lbnQ9e0JpZ0JhbmRUYWJsZX0gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59IC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbmV3LXVzZXJcIiBjb21wb25lbnQ9e05ld1VzZXJGb3JtfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17TGFuZGluZ30gLz5cclxuICAgICAgICA8Um91dGVcclxuICAgICAgICAgIHBhdGg9XCIvdXNlcnMvOnVzZXJJZFwiXHJcbiAgICAgICAgICBjb21wb25lbnQ9eyh7IG1hdGNoIH0pID0+IDxVc2VyUHJvZmlsZSBpZD17bWF0Y2gucGFyYW1zLnVzZXJJZH0gLz59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIDwvUm91dGVyPlxyXG4pO1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiZFpaSFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCJpM1hwXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDcmVhdGVCYW5kRm9ybSB9IGZyb20gXCIuL0NyZWF0ZUJhbmRGb3JtXCI7XHJcbmltcG9ydCB7IEJpZ0JhbmRUYWJsZSB9IGZyb20gXCIuL0JpZ0JhbmRUYWJsZVwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRzTGlzdCB9IGZyb20gXCIuL1VzZXJSZWNvcmRzTGlzdFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCBKdW1ib3Ryb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9KdW1ib3Ryb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMYW5kaW5nID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICB7LyogPEp1bWJvdHJvbj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImxhbmRpbmdUaXRsZVwiPldoYXQgYWJvdXQgYSBiYW5kIGNhbGxlZC4uLjwvaDE+XHJcbiAgICA8L0p1bWJvdHJvbj4gKi99XHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Um93IGNsYXNzTmFtZT17XCJtYi01XCJ9PlxyXG4gICAgICAgIDxDb2wgbWQ9ezh9IGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgPENyZWF0ZUJhbmRGb3JtIC8+XHJcbiAgICAgICAgICA8QmlnQmFuZFRhYmxlIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17NH0+XHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxoNT5Nb3N0IE5hbWVzIENvbnRyaWJ1dGVkPC9oNT5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8VXNlclJlY29yZHNMaXN0XHJcbiAgICAgICAgICAgICAgICBtYXhSZWNvcmRzPXsxMH1cclxuICAgICAgICAgICAgICAgIHNvcnRUeXBlPXtVc2VyUmVjb3JkU29ydFR5cGVzLk1PU1RfTkFNRVNfQ09OVFJJQlVURUR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxoNT5IaWdoZXN0IEF2ZXJhZ2UgU2NvcmU8L2g1PlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxVc2VyUmVjb3Jkc0xpc3RcclxuICAgICAgICAgICAgICAgIG1heFJlY29yZHM9ezEwfVxyXG4gICAgICAgICAgICAgICAgc29ydFR5cGU9e1VzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9BVkVSQUdFX1NDT1JFfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+SGlnaGVzdCBTY29yZTwvaDU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPFVzZXJSZWNvcmRzTGlzdFxyXG4gICAgICAgICAgICAgICAgbWF4UmVjb3Jkcz17MTB9XHJcbiAgICAgICAgICAgICAgICBzb3J0VHlwZT17VXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX1NDT1JFfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIDwvPlxyXG4pO1xyXG4iLCIvLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9BbGVydFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1NwaW5uZXJcIjtcclxuXHJcbi8vIFVuY29ubmVjdGVkTG9naW4ucHJvcFR5cGVzID0ge1xyXG4vLyAgIGF1dGhlbnRpY2F0ZVVzZXI6IFByb3BUeXBlcy5mdW5jLFxyXG4vLyAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhBdXRoZW50aWNhdGlvblN0YXR1c2VzKSksXHJcbi8vIH07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBzZXNzaW9uIH0pID0+ICh7XHJcbiAgYXV0aGVudGljYXRpb25TdGF0dXM6IHNlc3Npb24uYXV0aGVudGljYXRpb25TdGF0dXMsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGF1dGhlbnRpY2F0ZVVzZXI6ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+XHJcbiAgICBkaXNwYXRjaChzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0QXV0aGVudGljYXRlVXNlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSksXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdXhDb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcclxudHlwZSBMb2dpblByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPjtcclxuXHJcbnR5cGUgTG9naW5TdGF0ZSA9IHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PExvZ2luUHJvcHMsIExvZ2luU3RhdGU+IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhdXRoZW50aWNhdGlvblN0YXR1cywgYXV0aGVudGljYXRlVXNlciB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzZyZW1cIiB9fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNVc2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuVVNFUk5BTUVfTk9UX0ZPVU5EXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICBOZXcgdXNlcj8gQ3JlYXRlIGFuIGFjY291bnQgPGEgaHJlZj1cIi9uZXctdXNlclwiPmhlcmU8L2E+LlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLlRleHQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIHVzZXJuYW1lLlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuSU5WQUxJRF9QQVNTV09SRFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIEluY29ycmVjdCBwYXNzd29yZC5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgICBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HIHx8XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRlVXNlcih0aGlzLnN0YXRlLnVzZXJuYW1lLCB0aGlzLnN0YXRlLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIHthdXRoZW50aWNhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVElORyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgdmFyaWFudD1cInByaW1hcnlcIiAvPiBQcm9jZXNzaW5nLi4uXHJcbiAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2F1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5TdWNjZXNzZnVsbHkgbG9nZ2VkIGluITwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTG9naW4gPSBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShVbmNvbm5lY3RlZExvZ2luKTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVzZXJQcm9maWxlVXJsKHVzZXJJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gXCIvdXNlcnMvXCIgKyB1c2VySWQ7XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi9jb21wb25lbnRzL01haW5cIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPE1haW4gLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcclxuKTtcclxuIiwiLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgU3ludGhldGljRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25Hcm91cFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBCYWRnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0JhZGdlXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9UYWJsZVwiO1xyXG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVG9nZ2xlQnV0dG9uXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMsIEJhbmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IHNvcnRBbmRMaW1pdEJhbmRzIH0gZnJvbSBcIi4vdXRpbGl0eS9saW1pdC1zb3J0LWJhbmRzXCI7XHJcbmltcG9ydCB7IEJhbmRNb2RCdXR0b25Hcm91cCB9IGZyb20gXCIuL0JhbmRNb2RCdXR0b25Hcm91cFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmUvXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgY3JlYXRlVXNlclByb2ZpbGVVcmwgfSBmcm9tIFwiLi91dGlsaXR5L2NyZWF0ZS11c2VyLXByb2ZpbGUtdXJsXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgZGVmYXVsdEJhbmRzUGVyRmV0Y2ggPSAyMDtcclxuXHJcbi8vIFRPRE86IFNvbWV0aGluZyBzaG91bGQgZGlzcGxheSB3aGVuIHdlIGhhdmUgbm8gYmFuZHMgdG8gZGlzcGxheSFcclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogUm9vdFN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFwcElzRmV0Y2hpbmdCYW5kczogc3RhdGUuYmFuZHMucGVuZGluZ0ZldGNoZXMgPiAwLFxyXG4gICAgYmFuZHM6IFsuLi5zdGF0ZS5iYW5kcy5pdGVtc10sXHJcbiAgICB1c2VySXNBdXRoZW50aWNhdGVkOlxyXG4gICAgICBzdGF0ZS5zZXNzaW9uLmF1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRFxyXG4gICAgICAgID8gdHJ1ZVxyXG4gICAgICAgIDogZmFsc2UsXHJcbiAgICB1c2VySWQ6IHN0YXRlLnNlc3Npb24udXNlcklkLFxyXG4gICAgdXNlcnNNb2RpZmljYXRpb25zOiBzdGF0ZS5zZXNzaW9uLmJhbmRzTW9kaWZpZWQsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZFBvaW50c1RvOiAoXHJcbiAgICAgIHRhcmdldEJhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCxcclxuICAgICAgbW9kaWZpY2F0aW9uVmFsdWU6IG51bWJlcixcclxuICAgICAgbW9kaWZ5aW5nVXNlcklkPzogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCxcclxuICAgICAgdW5kb1ZhbHVlPzogbnVtYmVyXHJcbiAgICApID0+IHtcclxuICAgICAgaWYgKG1vZGlmeWluZ1VzZXJJZCkge1xyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgYmFuZEFjdGlvbnMucmVxdWVzdE1vZGlmeUJhbmRTY29yZSh7XHJcbiAgICAgICAgICAgIHRhcmdldEJhbmRJZCxcclxuICAgICAgICAgICAgbW9kaWZ5aW5nVXNlcklkLFxyXG4gICAgICAgICAgICBtb2RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgdW5kb1ZhbHVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVxdWVzdEZldGNoQmFuZHM6IChtYXhCYW5kczogbnVtYmVyLCBzb3J0Qnk6IEJhbmRTb3J0VHlwZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goYmFuZEFjdGlvbnMucmVxdWVzdEZldGNoQmFuZHMoeyBtYXhCYW5kcywgc29ydEJ5IH0pKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgcmVkdXhDb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcclxudHlwZSBCaWdCYW5kVGFibGVQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiByZWR1eENvbm5lY3Rvcj47XHJcblxyXG50eXBlIEJpZ0JhbmRUYWJsZVN0YXRlID0ge1xyXG4gIHNvcnRUeXBlOiBCYW5kU29ydFR5cGVzO1xyXG4gIGJhbmRzUGVyRmV0Y2g6IG51bWJlcjtcclxuICBzaG91bGRGZXRjaEJhbmRzOiBib29sZWFuO1xyXG4gIG1heEJhbmRzRGlzcGxheWVkOiBudW1iZXI7XHJcbn07XHJcblxyXG4vLyBVbmNvbm5lY3RlZEJpZ0JhbmRUYWJsZS5wcm9wVHlwZXMgPSB7XHJcbi8vICAgYmFuZHM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4vLyAgICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuLy8gICAgICAgX2lkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4vLyAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4vLyAgICAgICBvd25lcklkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4vLyAgICAgICBzY29yZTogUHJvcFR5cGVzLm51bWJlcixcclxuLy8gICAgIH0pXHJcbi8vICAgKSxcclxuLy8gICB1c2VySXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4vLyAgIHVzZXJJZDogUHJvcFR5cGVzLnN0cmluZyxcclxuLy8gICB1c2Vyc01vZGlmaWNhdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcclxuLy8gICBhZGRQb2ludHNUbzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy8gICByZXF1ZXN0RmV0Y2hCYW5kczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy8gICBhcHBJc0ZldGNoaW5nQmFuZHM6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbi8vIH07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZEJpZ0JhbmRUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuICBCaWdCYW5kVGFibGVQcm9wcyxcclxuICBCaWdCYW5kVGFibGVTdGF0ZVxyXG4+IHtcclxuICAvLyBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gIC8vICAgc3VwZXIocHJvcHMpO1xyXG4gIC8vICAgdGhpcy5zdGF0ZSA9IHtcclxuICAvLyAgICAgc29ydFR5cGU6IEJhbmRTb3J0VHlwZXMuTU9TVF9SRUNFTlQsXHJcbiAgLy8gICAgIGJhbmRzUGVyRmV0Y2g6IGRlZmF1bHRCYW5kc1BlckZldGNoLFxyXG4gIC8vICAgICBzaG91bGRGZXRjaEJhbmRzOiBmYWxzZSxcclxuICAvLyAgICAgbWF4QmFuZHNEaXNwbGF5ZWQ6IGRlZmF1bHRCYW5kc1BlckZldGNoLFxyXG4gIC8vICAgfTtcclxuICAvLyB9XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzb3J0VHlwZTogQmFuZFNvcnRUeXBlcy5NT1NUX1JFQ0VOVCxcclxuICAgIGJhbmRzUGVyRmV0Y2g6IGRlZmF1bHRCYW5kc1BlckZldGNoLFxyXG4gICAgc2hvdWxkRmV0Y2hCYW5kczogZmFsc2UsXHJcbiAgICBtYXhCYW5kc0Rpc3BsYXllZDogZGVmYXVsdEJhbmRzUGVyRmV0Y2gsXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLnJlcXVlc3RGZXRjaEJhbmRzKHRoaXMuc3RhdGUuYmFuZHNQZXJGZXRjaCwgdGhpcy5zdGF0ZS5zb3J0VHlwZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoXHJcbiAgICBwcmV2UHJvcHM6IEJpZ0JhbmRUYWJsZVByb3BzLFxyXG4gICAgcHJldlN0YXRlOiBCaWdCYW5kVGFibGVTdGF0ZVxyXG4gICkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLnN0YXRlLm1heEJhbmRzRGlzcGxheWVkOiBcIiwgdGhpcy5zdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInByZXZTdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZDogXCIsIHByZXZTdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuc3RhdGUubWF4QmFuZHNEaXNwbGF5ZWQgPiBwcmV2U3RhdGUubWF4QmFuZHNEaXNwbGF5ZWQgfHxcclxuICAgICAgdGhpcy5zdGF0ZS5zaG91bGRGZXRjaEJhbmRzXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5wcm9wcy5yZXF1ZXN0RmV0Y2hCYW5kcyhcclxuICAgICAgICB0aGlzLnN0YXRlLm1heEJhbmRzRGlzcGxheWVkLFxyXG4gICAgICAgIHRoaXMuc3RhdGUuc29ydFR5cGVcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3VsZEZldGNoQmFuZHM6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLnNvcnRUeXBlICE9PSBwcmV2U3RhdGUuc29ydFR5cGUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbWF4QmFuZHNEaXNwbGF5ZWQ6IHRoaXMuc3RhdGUuYmFuZHNQZXJGZXRjaCxcclxuICAgICAgICBzaG91bGRGZXRjaEJhbmRzOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNvcnRUeXBlKG5ld1R5cGU6IEJhbmRTb3J0VHlwZXMpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0VHlwZTogbmV3VHlwZSB9KTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IFRoaXMgb25seSB3b3JrcyBhZnRlciB0aGUgc2Vjb25kIHB1c2gsIHZlcnkgc3RyYW5nZVxyXG4gIGxvYWRNb3JlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtYXhCYW5kc0Rpc3BsYXllZDogc3RhdGUubWF4QmFuZHNEaXNwbGF5ZWQgKyBzdGF0ZS5iYW5kc1BlckZldGNoLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICAvLyB0aGlzLnByb3BzLnJlcXVlc3RGZXRjaEJhbmRzKFxyXG4gICAgLy8gICB0aGlzLnN0YXRlLm1heEJhbmRzRGlzcGxheWVkLFxyXG4gICAgLy8gICB0aGlzLnN0YXRlLnNvcnRUeXBlXHJcbiAgICAvLyApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlck1vZGlmaWNhdGlvblRvQmFuZCh0aGlzQmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkKSB7XHJcbiAgICBjb25zdCBtb2RpZmljYXRpb24gPSB0aGlzLnByb3BzLnVzZXJzTW9kaWZpY2F0aW9ucy5maW5kKFxyXG4gICAgICAobW9kaWZpY2F0aW9uKSA9PiBtb2RpZmljYXRpb24udGFyZ2V0QmFuZElkID09PSB0aGlzQmFuZElkXHJcbiAgICApO1xyXG4gICAgaWYgKG1vZGlmaWNhdGlvbikgcmV0dXJuIG1vZGlmaWNhdGlvbi52YWx1ZTtcclxuICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAvLyBUT0RPOiBTaG91bGQgd2UgaGF2ZSBzb21lIG5vdGlmaWNhdGlvbiB0aGF0IGJhbmRzIGFyZSBiZWluZyBmZXRjaGVkP1xyXG4gICAgY29uc3QgZGVzaXJlZEJhbmRzID0gc29ydEFuZExpbWl0QmFuZHMoXHJcbiAgICAgIHRoaXMucHJvcHMuYmFuZHMsXHJcbiAgICAgIHRoaXMuc3RhdGUuc29ydFR5cGUsXHJcbiAgICAgIHRoaXMuc3RhdGUubWF4QmFuZHNEaXNwbGF5ZWRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc29ydFJhZGlvcyA9IFtcclxuICAgICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5CRVNULCBuYW1lOiBcIkJlc3RcIiB9LFxyXG4gICAgICB7IHZhbHVlOiBCYW5kU29ydFR5cGVzLldPUlNULCBuYW1lOiBcIldvcnN0XCIgfSxcclxuICAgICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5NT1NUX1JFQ0VOVCwgbmFtZTogXCJNb3N0IFJlY2VudFwiIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHsgdXNlcklzQXV0aGVudGljYXRlZCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICA8QnV0dG9uR3JvdXAgdG9nZ2xlPlxyXG4gICAgICAgICAgICB7c29ydFJhZGlvcy5tYXAoKHJhZGlvLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cmFkaW8udmFsdWV9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic29ydFJhZGlvXCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3JhZGlvLnZhbHVlID09PSB0aGlzLnN0YXRlLnNvcnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBTeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgd2hhdCdzIGdvaW5nIG9uIHdpdGggdGhpcyB0eXBlIGNhc3RpbmdcclxuICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyB0eXBlb2YgZS5jdXJyZW50VGFyZ2V0ICYge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudFRhcmdldFwiLCBjdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydFR5cGVBc051bWJlcjogbnVtYmVyID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvcnRUeXBlQXNOdW1iZXJcIiwgc29ydFR5cGVBc051bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U29ydFR5cGUoc29ydFR5cGVBc051bWJlcik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtyYWRpby5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPFRhYmxlIHNpemU9XCJzbVwiIHN0cmlwZWQgYm9yZGVyZWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7ZGVzaXJlZEJhbmRzLm1hcCgoYmFuZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17U3RyaW5nKGJhbmQuX2lkKX0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8QmFuZE1vZEJ1dHRvbkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VySXNBdXRob3JpemVkPXt1c2VySXNBdXRoZW50aWNhdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbW9kUGVyZm9ybWVkPXt0aGlzLmdldFVzZXJNb2RpZmljYXRpb25Ub0JhbmQoYmFuZC5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5QmFuZD17KG1vZFZhbHVlLCB1bmRvVmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkUG9pbnRzVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFuZC5faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kb1ZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTY29yZT17YmFuZC5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntiYW5kLnNjb3JlfTwvQmFkZ2U+IHtiYW5kLm5hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJmb250LXdlaWdodC1saWdodGVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbSAgPExpbmsgdG89e2NyZWF0ZVVzZXJQcm9maWxlVXJsKFN0cmluZyhiYW5kLm93bmVySWQpKX0+e2JhbmQub3duZXJOYW1lfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGJsb2NrIG9uQ2xpY2s9eygpID0+IHRoaXMubG9hZE1vcmUoKX0+XHJcbiAgICAgICAgICAgIFNob3cgbWUgbW9yZS4uLlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQmlnQmFuZFRhYmxlID0gY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVW5jb25uZWN0ZWRCaWdCYW5kVGFibGUpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgVXNlclJlY29yZCA9IHtcclxuICBpZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdG90YWxTY29yZTogbnVtYmVyO1xyXG4gIG5hbWVzQ29udHJpYnV0ZWQ6IG51bWJlcjtcclxuICBhdmVyYWdlU2NvcmU6IG51bWJlcjtcclxufTtcclxuXHJcbnR5cGUgVXNlclJlY29yZHNTbGljZVN0YXRlID0ge1xyXG4gIHBlbmRpbmdGZXRjaGVzOiBudW1iZXI7XHJcbiAgaXRlbXM6IFVzZXJSZWNvcmRbXTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclJlY29yZHNTbGljZVN0YXRlID0ge1xyXG4gIHBlbmRpbmdGZXRjaGVzOiAwLFxyXG4gIGl0ZW1zOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHVzZXJSZWNvcmRzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJ1c2VyUmVjb3Jkc1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgcmVxdWVzdEZldGNoVXNlclJlY29yZHMoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIG51bU9mUmVjb3JkczogbnVtYmVyO1xyXG4gICAgICAgIHNvcnRUeXBlOiBVc2VyUmVjb3JkU29ydFR5cGVzO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzKys7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyUmVjb3Jkc1N1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248VXNlclJlY29yZFtdPlxyXG4gICAgKSB7XHJcbiAgICAgIGFjdGlvbi5wYXlsb2FkLmZvckVhY2goKG5ld1JlY29yZCkgPT4ge1xyXG4gICAgICAgIGlmICghc3RhdGUuaXRlbXMuc29tZSgocmVjb3JkKSA9PiByZWNvcmQuaWQgPT0gbmV3UmVjb3JkLmlkKSlcclxuICAgICAgICAgIHN0YXRlLml0ZW1zLnB1c2gobmV3UmVjb3JkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyUmVjb3Jkc0ZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMtLTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyUmVjb3Jkc0FjdGlvbnMgPSB1c2VyUmVjb3Jkc1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWNvcmRzU2xpY2UucmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHtcclxuICB1c2VyUmVjb3Jkc0FjdGlvbnMsXHJcbiAgVXNlclJlY29yZCxcclxufSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmUvXCI7XHJcbmltcG9ydCB7IHNvcnRBbmRMaW1pdFVzZXJSZWNvcmRzIH0gZnJvbSBcIi4vdXRpbGl0eS9saW1pdC1zb3J0LXVzZXItcmVjb3Jkc1wiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9UYWJsZVwiO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CYWRnZVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgY3JlYXRlVXNlclByb2ZpbGVVcmwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlsaXR5L2NyZWF0ZS11c2VyLXByb2ZpbGUtdXJsXCJcclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogUm9vdFN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFwcElzRmV0Y2hpbmdSZWNvcmRzOiBzdGF0ZS51c2VyUmVjb3Jkcy5wZW5kaW5nRmV0Y2hlcyA+IDAsXHJcbiAgICByZWNvcmRzOiBbLi4uc3RhdGUudXNlclJlY29yZHMuaXRlbXNdLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXF1ZXN0VXNlclJlY29yZHM6IChcclxuICAgICAgbnVtT2ZSZWNvcmRzOiBudW1iZXIsXHJcbiAgICAgIHNvcnRUeXBlOiBVc2VyUmVjb3JkU29ydFR5cGVzXHJcbiAgICApID0+IHtcclxuICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgdXNlclJlY29yZHNBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJSZWNvcmRzKHsgbnVtT2ZSZWNvcmRzLCBzb3J0VHlwZSB9KVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBMaXN0RW50cnlCYWRnZShwcm9wczoge1xyXG4gIHNvcnRUeXBlOiBVc2VyUmVjb3JkU29ydFR5cGVzO1xyXG4gIHJlY29yZDogVXNlclJlY29yZDtcclxufSkge1xyXG4gIHN3aXRjaCAocHJvcHMuc29ydFR5cGUpIHtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX0FWRVJBR0VfU0NPUkU6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntwcm9wcy5yZWNvcmQuYXZlcmFnZVNjb3JlLnRvRml4ZWQoMil9PC9CYWRnZT47XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9TQ09SRTpcclxuICAgICAgcmV0dXJuIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e3Byb3BzLnJlY29yZC50b3RhbFNjb3JlfTwvQmFkZ2U+O1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLk1PU1RfTkFNRVNfQ09OVFJJQlVURUQ6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntwcm9wcy5yZWNvcmQubmFtZXNDb250cmlidXRlZH08L0JhZGdlPjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPj88L0JhZGdlPjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHV4Q29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbnR5cGUgVXNlclJlY29yZHNMaXN0UHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+ICYge1xyXG4gIG1heFJlY29yZHM6IG51bWJlcjtcclxuICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxufTtcclxuXHJcbmNsYXNzIFVuY29ubmVjdGVkVXNlclJlY29yZHNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFVzZXJSZWNvcmRzTGlzdFByb3BzPiB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLnJlcXVlc3RVc2VyUmVjb3Jkcyh0aGlzLnByb3BzLm1heFJlY29yZHMsIHRoaXMucHJvcHMuc29ydFR5cGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYXBwSXNGZXRjaGluZ1JlY29yZHMpIHtcclxuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZyB1c2VyIHJlY29yZHMuLi48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVzaXJlZFJlY29yZHMgPSBzb3J0QW5kTGltaXRVc2VyUmVjb3JkcyhcclxuICAgICAgdGhpcy5wcm9wcy5yZWNvcmRzLFxyXG4gICAgICB0aGlzLnByb3BzLnNvcnRUeXBlLFxyXG4gICAgICB0aGlzLnByb3BzLm1heFJlY29yZHNcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRhYmxlIHNpemU9XCJzbVwiIHN0cmlwZWQgYm9yZGVyZWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge2Rlc2lyZWRSZWNvcmRzLm1hcCgocmVjb3JkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtTdHJpbmcocmVjb3JkLmlkKX0+XHJcbiAgICAgICAgICAgICAgPHRkPntpbmRleCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17Y3JlYXRlVXNlclByb2ZpbGVVcmwoU3RyaW5nKHJlY29yZC5pZCkpfT57cmVjb3JkLm5hbWV9PC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxMaXN0RW50cnlCYWRnZVxyXG4gICAgICAgICAgICAgICAgICBzb3J0VHlwZT17dGhpcy5wcm9wcy5zb3J0VHlwZX1cclxuICAgICAgICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUmVjb3Jkc0xpc3QgPSBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShVbmNvbm5lY3RlZFVzZXJSZWNvcmRzTGlzdCk7XHJcbiIsImV4cG9ydCB7IGJhbmRDcmVhdGlvblNhZ2EgfSBmcm9tIFwiLi9iYW5kLWNyZWF0aW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgYmFuZFNjb3JlTW9kaWZpY2F0aW9uU2FnYSB9IGZyb20gXCIuL2JhbmQtc2NvcmUtbW9kaWZpY2F0aW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgdXNlckF1dGhlbnRpY2F0aW9uU2FnYSB9IGZyb20gXCIuL3VzZXItYXV0aGVudGljYXRpb24tc2FnYVwiO1xyXG5leHBvcnQgeyB1c2VyQ3JlYXRpb25TYWdhIH0gZnJvbSBcIi4vdXNlci1jcmVhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IHdhdGNoRmV0Y2hCYW5kc1NhZ2EgfSBmcm9tIFwiLi93YXRjaC1mZXRjaC1iYW5kcy1zYWdhXCI7XHJcbmV4cG9ydCB7IHdhdGNoRmV0Y2hVc2VyUmVjb3Jkc1NhZ2EgfSBmcm9tIFwiLi9mZXRjaC11c2VyLXJlY29yZHMtc2FnYVwiO1xyXG5leHBvcnQgeyBmZXRjaFByb2ZpbGVTYWdhIH0gZnJvbSBcIi4vZmV0Y2gtdXNlci1wcm9maWxlLXNhZ2FcIjtcclxuZXhwb3J0IHsgY2hlY2tTZXNzaW9uU2FnYSB9IGZyb20gXCIuL2NoZWNrLXNlc3Npb24tc2FnYVwiOyIsImltcG9ydCB7IEJhbmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRBbmRMaW1pdEJhbmRzKFxyXG4gIGJhbmRzOiBCYW5kQ2xhc3NbXSxcclxuICBzb3J0Qnk6IEJhbmRTb3J0VHlwZXMsXHJcbiAgbGltaXQ6IG51bWJlclxyXG4pOiBCYW5kQ2xhc3NbXSB7XHJcbiAgbGV0IGZpbHRlcmVkQmFuZHMgPSBbLi4uYmFuZHNdO1xyXG5cclxuICBzd2l0Y2ggKHNvcnRCeSkge1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLkJFU1Q6XHJcbiAgICAgIGZpbHRlcmVkQmFuZHMuc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQmFuZFNvcnRUeXBlcy5NT1NUX1JFQ0VOVDpcclxuICAgICAgZmlsdGVyZWRCYW5kcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgLy8gVE9ETzogV2hhdCBpcyBoYXBwZW5pbmcgaGVyZT9cclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIERhdGUucGFyc2UoYi5jcmVhdGVkT24pIC0gRGF0ZS5wYXJzZShhLmNyZWF0ZWRPbik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQmFuZFNvcnRUeXBlcy5XT1JTVDpcclxuICAgICAgZmlsdGVyZWRCYW5kcy5zb3J0KChhLCBiKSA9PiBhLnNjb3JlIC0gYi5zY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJlZEJhbmRzID0gZmlsdGVyZWRCYW5kcy5zbGljZSgwLCBsaW1pdCk7XHJcbiAgcmV0dXJuIGZpbHRlcmVkQmFuZHM7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==