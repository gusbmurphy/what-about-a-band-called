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
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), username = _b[0], setUsername = _b[1];
    var _c = react_1.useState(""), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState(""), repeatPassword = _d[0], setRepeatPassword = _d[1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0JhbmRNb2RCdXR0b25Hcm91cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCYW5kRm9ybUFsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zdGF0dXNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2JhbmQtY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0NyZWF0ZUJhbmRGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2xvZ291dC1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2dldC10aW1lLXNpbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItYXV0aGVudGljYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlclByb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvZmV0Y2gtdXNlci1yZWNvcmRzLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9iYW5kLXNjb3JlLW1vZGlmaWNhdGlvbi1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGF0aHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy9jaGVjay1zZXNzaW9uLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvYmFuZHMtc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2ZldGNoLXVzZXItcHJvZmlsZS1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW4udHN4Iiwid2VicGFjazovLy8od2VicGFjaykvaG90IHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9sb2ckIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9MYW5kaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2NyZWF0ZS11c2VyLXByb2ZpbGUtdXJsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9CaWdCYW5kVGFibGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlclJlY29yZHNMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2xpbWl0LXNvcnQtYmFuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL05ld1VzZXJGb3JtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQStDOztBQUV4QyxnQkFBZ0Isb0VBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEM0Msd0VBQTBCO0FBRTFCLGdIQUFrRTtBQUNsRSxzR0FBd0Q7QUFDeEQsNkRBS3dCO0FBbUJ4QiwrRkFBK0Y7QUFDL0Y7SUFBd0Msc0NBR3ZDO0lBSEQ7UUFBQSxxRUFtREM7UUEvQ0MsV0FBSyxHQUFHO1lBQ04sUUFBUSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtTQUNsQyxDQUFDOztJQTZDSixDQUFDO0lBM0NDLCtDQUFrQixHQUFsQixVQUNFLFNBQWtDLEVBQ2xDLFNBQWtDO1FBRWxDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUM3QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7b0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN6RTtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtvQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZFO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUFBLGlCQTZCQztRQTVCTyxTQUFxQyxJQUFJLENBQUMsS0FBSyxFQUE3QyxnQkFBZ0Isd0JBQUUsWUFBWSxrQkFBZSxDQUFDO1FBQ3RELE9BQU8sQ0FDTCw4QkFBQywy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QjtBQUNyQix1QkFBdUI7QUFDdkIsNkJBQTZCIiwiZmlsZSI6Im1haW4uYmIyNWJjNWU5ZTUyNGYyZTdiMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b25Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RvZ2dsZUJ1dHRvbkdyb3VwXCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Ub2dnbGVCdXR0b25cIjtcclxuaW1wb3J0IHtcclxuICBCc0NhcmV0RG93bixcclxuICBCc0NhcmV0RG93bkZpbGwsXHJcbiAgQnNDYXJldFVwLFxyXG4gIEJzQ2FyZXRVcEZpbGwsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG4vLyBCYW5kTW9kQnV0dG9uR3JvdXAucHJvcFR5cGVzID0ge1xyXG4vLyAgIHVzZXJJc0F1dGhvcml6ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbi8vICAgbW9kaWZ5QmFuZDogUHJvcFR5cGVzLmZ1bmMsXHJcbi8vICAgbW9kUGVyZm9ybWVkOiBQcm9wVHlwZXMub25lT2YoWzEsIDAsIC0xXSksXHJcbi8vIH07XHJcblxyXG50eXBlIEJhbmRNb2RCdXR0b25Hcm91cFByb3BzID0ge1xyXG4gIHVzZXJJc0F1dGhvcml6ZWQ6IGJvb2xlYW47XHJcbiAgbW9kaWZ5QmFuZD86IChtb2RWYWx1ZTogbnVtYmVyLCB1bmRvVmFsdWU/OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgbW9kUGVyZm9ybWVkOiBudW1iZXI7XHJcbiAgY3VycmVudFNjb3JlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIEJhbmRNb2RCdXR0b25Hcm91cFN0YXRlID0ge1xyXG4gIG1vZFZhbHVlOiBudW1iZXI7XHJcbn07XHJcblxyXG4vLyBUT0RPOiBMb2dnaW5nIG91dCB3aWxsIHN0aWxsIHNob3cgdGhlIEJzQ2FycmV0cyBhcyAnZmlsbGVkJyBpZiB0aGUgdXNlciBtb2RpZmllZCB0aG9zZSBiYW5kc1xyXG5leHBvcnQgY2xhc3MgQmFuZE1vZEJ1dHRvbkdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIEJhbmRNb2RCdXR0b25Hcm91cFByb3BzLFxyXG4gIEJhbmRNb2RCdXR0b25Hcm91cFN0YXRlXHJcbj4ge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbW9kVmFsdWU6IHRoaXMucHJvcHMubW9kUGVyZm9ybWVkLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShcclxuICAgIHByZXZQcm9wczogQmFuZE1vZEJ1dHRvbkdyb3VwUHJvcHMsXHJcbiAgICBwcmV2U3RhdGU6IEJhbmRNb2RCdXR0b25Hcm91cFN0YXRlXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2RWYWx1ZSAhPSBwcmV2U3RhdGUubW9kVmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUubW9kVmFsdWUgPT0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGlmeUJhbmQpIHRoaXMucHJvcHMubW9kaWZ5QmFuZCgwLCBwcmV2U3RhdGUubW9kVmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGlmeUJhbmQpIHRoaXMucHJvcHMubW9kaWZ5QmFuZCh0aGlzLnN0YXRlLm1vZFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB1c2VySXNBdXRob3JpemVkLCBtb2RQZXJmb3JtZWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VG9nZ2xlQnV0dG9uR3JvdXBcclxuICAgICAgICBuYW1lPXtcIm1vZEJ1dHRvbnNcIn1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tb2RWYWx1ZX1cclxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT5cclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbClcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RWYWx1ZTogdGhpcy5zdGF0ZS5tb2RWYWx1ZSArIHZhbCB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgIG5hbWU9e1wibmVnYXRpdmVCdXR0b25cIn1cclxuICAgICAgICAgIHZhbHVlPXstMX1cclxuICAgICAgICAgIGRpc2FibGVkPXshdXNlcklzQXV0aG9yaXplZH1cclxuICAgICAgICAgIGNoZWNrZWQ9e21vZFBlcmZvcm1lZCA9PSAtMX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tb2RWYWx1ZSA9PSAtMSA/IDxCc0NhcmV0RG93bkZpbGwgLz4gOiA8QnNDYXJldERvd24gLz59XHJcbiAgICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgbmFtZT17XCJwb3NpdGl2ZUJ1dHRvblwifVxyXG4gICAgICAgICAgdmFsdWU9ezF9XHJcbiAgICAgICAgICBkaXNhYmxlZD17IXVzZXJJc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICBjaGVja2VkPXttb2RQZXJmb3JtZWQgPT0gMX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tb2RWYWx1ZSA9PSAxID8gPEJzQ2FyZXRVcEZpbGwgLz4gOiA8QnNDYXJldFVwIC8+fVxyXG4gICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQbGFjZWhvbGRlckJhbmRNb2RCdXR0b25Hcm91cCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvZ2dsZUJ1dHRvbkdyb3VwIG5hbWU9e1wicGxhY2VIb2xkZXJNb2RCdXR0b25zXCJ9PlxyXG4gICAgICA8VG9nZ2xlQnV0dG9uIGRpc2FibGVkPXt0cnVlfSB2YWx1ZT17MX0+XHJcbiAgICAgICAgPEJzQ2FyZXREb3duIC8+XHJcbiAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICA8VG9nZ2xlQnV0dG9uIGRpc2FibGVkPXt0cnVlfSB2YWx1ZT17Mn0+XHJcbiAgICAgICAgPEJzQ2FyZXRVcCAvPlxyXG4gICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUZldGNoU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJQcm9maWxlVHlwZSA9IHtcclxuICBpZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdG90YWxTY29yZTogbnVtYmVyO1xyXG4gIG5hbWVzQ29udHJpYnV0ZWQ6IG51bWJlcjtcclxuICBhdmVyYWdlU2NvcmU6IG51bWJlcjtcclxuICBiYW5kczogQmFuZENsYXNzW107XHJcbn07XHJcblxyXG50eXBlIFVzZXJQcm9maWxlU2xpY2VTdGF0ZSA9IHtcclxuICBmZXRjaFN0YXR1czogUHJvZmlsZUZldGNoU3RhdHVzZXM7XHJcbiAgcHJvZmlsZT86IFVzZXJQcm9maWxlVHlwZTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlclByb2ZpbGVTbGljZVN0YXRlID0ge1xyXG4gIGZldGNoU3RhdHVzOiBQcm9maWxlRmV0Y2hTdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIHByb2ZpbGU6IHVuZGVmaW5lZCxcclxufTtcclxuXHJcbmNvbnN0IHVzZXJQcm9maWxlU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJ1c2VyUHJvZmlsZVwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgcmVxdWVzdEZldGNoVXNlclByb2ZpbGUoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHRhcmdldElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmZldGNoU3RhdHVzID0gUHJvZmlsZUZldGNoU3RhdHVzZXMuQVRURU1QVElORztcclxuICAgIH0sXHJcbiAgICBmZXRjaFVzZXJQcm9maWxlU3VjY2VzcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IHByb2ZpbGU6IFVzZXJQcm9maWxlVHlwZSB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmZldGNoU3RhdHVzID0gUHJvZmlsZUZldGNoU3RhdHVzZXMuU1VDQ0VTUztcclxuICAgICAgc3RhdGUucHJvZmlsZSA9IGFjdGlvbi5wYXlsb2FkLnByb2ZpbGU7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyUHJvZmlsZUZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuZmV0Y2hTdGF0dXMgPSBQcm9maWxlRmV0Y2hTdGF0dXNlcy5GQUlMVVJFO1xyXG4gICAgICBzdGF0ZS5wcm9maWxlID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyUHJvZmlsZUFjdGlvbnMgPSB1c2VyUHJvZmlsZVNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJQcm9maWxlU2xpY2UucmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQWxlcnQoKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cIndhcm5pbmdcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+VWggb2guLi48L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFNvbWV0aGluZyB3ZW50IHdyb25nISBXaGF0IGRpZCB5b3UgZG8hPyBEbyB5b3UgaGF2ZSBhbnkgaWRlYSBob3cgbXVjaCBJXHJcbiAgICAgICAgd29ya2VkIHRvIGdldCB0aGlzIHBsYWNlIGNsZWFuIGFuZCB0aGVuIHlvdSBzaG93IHVwIGFuZCBtZXNzIHRoZSB3aG9sZVxyXG4gICAgICAgIHRoaW5nIHVwPyBObyByZXNwZWN0Li4uXHJcbiAgICAgIDwvcD5cclxuICAgIDwvQWxlcnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5vTmFtZUFsZXJ0KCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPlRoaXMgTUYgc2FpZCAmbGRxdW87ICZyZHF1bzs8L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFdobyBhcmUgeW91LCBKb2huIENhZ2U/IPCfmK3wn5it8J+YrSBKdXN0IGtpZGRpbmcsIGRvbiZhcG9zO3Qga25vdyB3aG8gdGhhdFxyXG4gICAgICAgIGlzLlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYW5kRXhpc3RzQWxlcnQoKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cIndhcm5pbmdcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+U29tZWJvZHkgYWxyZWFkeSB0aG91Z2h0IG9mIHRoYXQhPC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5cclxuICAgICAgICBHb2luZyB0byBoYXZlIHRvIHRyeSBoYXJkZXIuIE1heWJlIHJlYWQgYSB2ZXJ5IGNvbXBsaWNhdGVkIGJvb2sgYW5kIHRoZW5cclxuICAgICAgICB0aGluayBvZiBzb21lIHJlZmVyZW5jZSB0byB0aGF0LlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyTm90TG9nZ2VkSW5BbGVydCgpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwid2FybmluZ1wiPlxyXG4gICAgICA8QWxlcnQuSGVhZGluZz5Zb3UmYXBvczt2ZSBnb3R0YSBiZSBzaWduZWQgaW4hPC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5cclxuICAgICAgICBXZSBkb24mYXBvczt0IGxldCBqdXN0IGFueW9uZSBpbiBoZXJlLiBZb3UgY2Fue1wiIFwifVxyXG4gICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL25ldy11c2VyXCI+XHJcbiAgICAgICAgICA8QWxlcnQuTGluaz5tYWtlIGFuIGFjY291bnQgaGVyZTwvQWxlcnQuTGluaz5cclxuICAgICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICAgICAgLCB0aG91Z2gsIGlmIHlvdSB3YW50LlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYW5kQ3JlYXRlZEFsZXJ0KG5hbWU6IHN0cmluZyk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJzdWNjZXNzXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPiZsZHF1bzt7bmFtZX0mcmRxdW87IHN1Ym1pdHRlZCE8L0FsZXJ0LkhlYWRpbmc+XHJcbiAgICAgIDxwPk5vdyB0aGF0JmFwb3M7cyBmdW5ueS48L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0QW5kTGltaXRVc2VyUmVjb3JkcyhcclxuICByZWNvcmRzOiBVc2VyUmVjb3JkW10sXHJcbiAgc29ydEJ5OiBVc2VyUmVjb3JkU29ydFR5cGVzLFxyXG4gIGxpbWl0OiBudW1iZXJcclxuKTogVXNlclJlY29yZFtdIHtcclxuICBsZXQgZmlsdGVyZWRSZWNvcmRzID0gWy4uLnJlY29yZHNdO1xyXG5cclxuICBzd2l0Y2ggKHNvcnRCeSkge1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfQVZFUkFHRV9TQ09SRTpcclxuICAgICAgZmlsdGVyZWRSZWNvcmRzLnNvcnQoKGEsIGIpID0+IGIuYXZlcmFnZVNjb3JlIC0gYS5hdmVyYWdlU2NvcmUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX1NDT1JFOlxyXG4gICAgICBmaWx0ZXJlZFJlY29yZHMuc29ydCgoYSwgYikgPT4gYi50b3RhbFNjb3JlIC0gYS50b3RhbFNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuTU9TVF9OQU1FU19DT05UUklCVVRFRDpcclxuICAgICAgZmlsdGVyZWRSZWNvcmRzLnNvcnQoKGEsIGIpID0+IGIubmFtZXNDb250cmlidXRlZCAtIGEubmFtZXNDb250cmlidXRlZCk7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJlZFJlY29yZHMgPSBmaWx0ZXJlZFJlY29yZHMuc2xpY2UoMCwgbGltaXQpO1xyXG4gIHJldHVybiBmaWx0ZXJlZFJlY29yZHM7XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gVXNlclJlY29yZFNvcnRUeXBlcyB7XHJcbiAgSElHSEVTVF9TQ09SRSxcclxuICBISUdIRVNUX0FWRVJBR0VfU0NPUkUsXHJcbiAgTU9TVF9OQU1FU19DT05UUklCVVRFRFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYW5kQ3JlYXRpb25TdGF0dXNlcyB7XHJcbiAgQ1JFQVRJTkcsXHJcbiAgQ1JFQVRFRCxcclxuICBFUlJPUixcclxuICBCQU5EX0VYSVNUUyxcclxuICBOT1RfVFJZSU5HLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYW5kU29ydFR5cGVzIHtcclxuICBCRVNULFxyXG4gIFdPUlNULFxyXG4gIE1PU1RfUkVDRU5ULFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcyB7XHJcbiAgQVRURU1QVElORyxcclxuICBTVUNDRVNTLFxyXG4gIEZBSUxVUkUsXHJcbiAgTk9UX1RSWUlORyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUHJvZmlsZUZldGNoU3RhdHVzZXMge1xyXG4gIEFUVEVNUFRJTkcsXHJcbiAgU1VDQ0VTUyxcclxuICBGQUlMVVJFLFxyXG4gIE5PVF9UUllJTkdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXV0aGVudGljYXRpb25TdGF0dXNlcyB7XHJcbiAgQVVUSEVOVElDQVRJTkcsXHJcbiAgQVVUSEVOVElDQVRFRCxcclxuICBOT1RfQVVUSEVOVElDQVRFRCxcclxuICBOT1RfVFJZSU5HLFxyXG4gIFNFUlZFUl9FUlJPUixcclxuICBVU0VSTkFNRV9OT1RfRk9VTkQsXHJcbiAgSU5WQUxJRF9QQVNTV09SRCxcclxuICBMT0dHSU5HX09VVCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVXNlckNyZWF0aW9uU3RhdHVzZXMge1xyXG4gIFBST0NFU1NJTkcsXHJcbiAgUEFTU1dPUkRTX0RPTlRfTUFUQ0gsXHJcbiAgVVNFUk5BTUVfVEFLRU4sXHJcbiAgTk9UX1RSWUlORyxcclxuICBTRVJWRVJfRVJST1IsXHJcbiAgU1VDQ0VTUyxcclxuICBFTVBUWV9GSUVMRFMsXHJcbiAgSU5WQUxJRF9FTUFJTCxcclxuICBFTUFJTF9UQUtFTixcclxufVxyXG4iLCJpbXBvcnQgeyB0YWtlLCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgTmV3QmFuZFJlcXVlc3RCb2R5IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9yb3V0ZS1oYW5kbGVycy9iYW5kc1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgQmFuZENyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogYmFuZENyZWF0aW9uU2FnYSgpIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKGJhbmRBY3Rpb25zLnJlcXVlc3RDcmVhdGVCYW5kLnR5cGUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJTYWdhIHBheWxvYWQ6IFwiLCBwYXlsb2FkKTtcclxuICAgIGNvbnN0IHsgY3JlYXRpbmdVc2VySWQsIGJhbmROYW1lLCBjcmVhdGluZ1VzZXJuYW1lIH0gPSBwYXlsb2FkO1xyXG4gICAgLy8gbGV0IG5ld0JhbmQgPSB7XHJcbiAgICAvLyAgIGNyZWF0aW5nVXNlcklkLFxyXG4gICAgLy8gICBiYW5kTmFtZSxcclxuICAgIC8vIH07XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keTogTmV3QmFuZFJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBiYW5kTmFtZSxcclxuICAgICAgb3duZXJJZDogY3JlYXRpbmdVc2VySWQsXHJcbiAgICAgIG93bmVyTmFtZTogY3JlYXRpbmdVc2VybmFtZSxcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkhFcmUhXCIpXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5wb3N0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLm5ld0JhbmQsXHJcbiAgICAgICAgcmVxdWVzdEJvZHlcclxuICAgICAgKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJyZXNwb25zZSBpbiBiYW5kY3JlYXRpb25zYWdhOiBcIiwgcmVzcG9uc2UpXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3cgaW0gaGVyZSFcIilcclxuICAgICAgICBjb25zdCBuZXdCYW5kOiBCYW5kQ2xhc3MgPSByZXNwb25zZS5kYXRhLm5ld0JhbmQ7XHJcbiAgICAgICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmNyZWF0ZUJhbmRTdWNjZXNzKG5ld0JhbmQpKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBsZXQgeyBfaWQsIGJhbmROYW1lLCBjcmVhdGluZ1VzZXJJZCwgc2NvcmUgfSA9IG5ld0JhbmQ7XHJcbiAgICAgIC8vIGxldCBuZXdCYW5kOiBCYW5kQ2xhc3MgPSB7XHJcbiAgICAgIC8vICAgbmFtZTogYmFuZE5hbWUsXHJcbiAgICAgIC8vICAgb3duZXJOYW1lOiBjcmVhdGluZ1VzZXJuYW1lLFxyXG4gICAgICAvLyAgIG93bmVySWQ6IGNyZWF0aW5nVXNlcklkLFxyXG4gICAgICAvLyAgIHNjb3JlOiAwLFxyXG4gICAgICAvLyAgIGNyZWF0ZWRPbixcclxuICAgICAgLy8gICBfaWQ6IG5ld0JhbmRJZCxcclxuICAgICAgLy8gfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHJlYXNvbjogQmFuZENyZWF0aW9uU3RhdHVzZXMgPSBlcnJvci5yZXNwb25zZS5kYXRhLnJlYXNvbjtcclxuICAgICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmNyZWF0ZUJhbmRGYWlsdXJlKHJlYXNvbikpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcywgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgTGlua0NvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHsgYXV0aGVudGljYXRpb25TdGF0dXMsIHVzZXJuYW1lIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICBkaXNwYXRjaChzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0TG9nb3V0KCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tTZXNzaW9uKCkge1xyXG4gICAgZGlzcGF0Y2goc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENoZWNrU2Vzc2lvbigpKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HKVxyXG4gICAgICBjaGVja1Nlc3Npb24oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgPExpbmtDb250YWluZXIgdG89XCIvXCI+XHJcbiAgICAgICAgPE5hdmJhci5CcmFuZD53YWJhYmM/PC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAge2F1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPE5hdi5JdGVtPlNpZ25lZCBpbiBhcyB7dXNlcm5hbWV9PC9OYXYuSXRlbT5cclxuICAgICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX0+TG9nb3V0PC9OYXYuTGluaz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgPE5hdi5MaW5rPkxvZ2luPC9OYXYuTGluaz5cclxuICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL25ldy11c2VyXCI+XHJcbiAgICAgICAgICAgIDxOYXYuTGluaz5DcmVhdGUgQWNjb3VudDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L05hdmJhcj5cclxuICApO1xyXG59IiwiLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIERpc3BhdGNoLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMsIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgQmFuZENyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9TcGlubmVyXCI7XHJcbmltcG9ydCB7XHJcbiAgQmFuZENyZWF0ZWRBbGVydCxcclxuICBCYW5kRXhpc3RzQWxlcnQsXHJcbiAgRXJyb3JBbGVydCxcclxuICBOb05hbWVBbGVydCxcclxuICBVc2VyTm90TG9nZ2VkSW5BbGVydCxcclxufSBmcm9tIFwiLi9DcmVhdGVCYW5kRm9ybUFsZXJ0c1wiO1xyXG5cclxuZW51bSBDcmVhdGlvbkFsZXJ0IHtcclxuICBFcnJvcixcclxuICBOb05hbWUsXHJcbiAgQmFuZEV4aXN0cyxcclxuICBCYW5kQ3JlYXRlZCxcclxuICBOb3RMb2dnZWRJbixcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUJhbmRGb3JtKCk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCB7XHJcbiAgICBzZXNzaW9uOiB7IGF1dGhlbnRpY2F0aW9uU3RhdHVzLCB1c2VySWQsIHVzZXJuYW1lIH0sXHJcbiAgICBiYW5kczogeyBjcmVhdGlvblN0YXR1czogYmFuZENyZWF0aW9uU3RhdHVzIH0sXHJcbiAgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZSk7XHJcbiAgY29uc3QgW2JhbmROYW1lLCBzZXRCYW5kTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3JlYXRlZE5hbWUsIHNldENyZWF0ZWROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGU8Q3JlYXRpb25BbGVydCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3dpdGNoIChiYW5kQ3JlYXRpb25TdGF0dXMpIHtcclxuICAgICAgY2FzZSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5CQU5EX0VYSVNUUzpcclxuICAgICAgICBzZXRBbGVydChDcmVhdGlvbkFsZXJ0LkJhbmRFeGlzdHMpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY2FzZSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5FUlJPUjpcclxuICAgICAgICBzZXRBbGVydChDcmVhdGlvbkFsZXJ0LkVycm9yKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhc2UgQmFuZENyZWF0aW9uU3RhdHVzZXMuQ1JFQVRFRDpcclxuICAgICAgICBzZXRDcmVhdGVkTmFtZShiYW5kTmFtZSk7XHJcbiAgICAgICAgc2V0QmFuZE5hbWUoXCJcIik7XHJcbiAgICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5CYW5kQ3JlYXRlZCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0sIFtiYW5kQ3JlYXRpb25TdGF0dXNdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gICAgaWYgKGF1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRCkge1xyXG4gICAgICBpZiAoYmFuZE5hbWUgPT0gXCJcIikge1xyXG4gICAgICAgIHNldEFsZXJ0KENyZWF0aW9uQWxlcnQuTm9OYW1lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RDcmVhdGVCYW5kKHtcclxuICAgICAgICAgICAgY3JlYXRpbmdVc2VySWQ6IHVzZXJJZCEsXHJcbiAgICAgICAgICAgIGJhbmROYW1lLFxyXG4gICAgICAgICAgICBjcmVhdGluZ1VzZXJuYW1lOiB1c2VybmFtZSEsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEFsZXJ0KENyZWF0aW9uQWxlcnQuTm90TG9nZ2VkSW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRGlzcGxheUFsZXJ0KHtcclxuICAgIGFsZXJ0LFxyXG4gIH06IHtcclxuICAgIGFsZXJ0OiBDcmVhdGlvbkFsZXJ0IHwgdW5kZWZpbmVkO1xyXG4gIH0pOiBKU1guRWxlbWVudCB8IG51bGwge1xyXG4gICAgc3dpdGNoIChhbGVydCkge1xyXG4gICAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0LkJhbmRDcmVhdGVkOlxyXG4gICAgICAgIHJldHVybiBCYW5kQ3JlYXRlZEFsZXJ0KGNyZWF0ZWROYW1lKTtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0LkJhbmRFeGlzdHM6XHJcbiAgICAgICAgcmV0dXJuIEJhbmRFeGlzdHNBbGVydCgpO1xyXG4gICAgICBjYXNlIENyZWF0aW9uQWxlcnQuRXJyb3I6XHJcbiAgICAgICAgcmV0dXJuIEVycm9yQWxlcnQoKTtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0Lk5vTmFtZTpcclxuICAgICAgICByZXR1cm4gTm9OYW1lQWxlcnQoKTtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0Lk5vdExvZ2dlZEluOlxyXG4gICAgICAgIHJldHVybiBVc2VyTm90TG9nZ2VkSW5BbGVydCgpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTmFtZUNoYW5nZShlKSB7XHJcbiAgICBzZXRCYW5kTmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgPElucHV0R3JvdXAgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYWJvdXQgYSBiYW5kIGNhbGxlZC4uLlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZU5hbWVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICB2YWx1ZT17YmFuZE5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRHcm91cC5BcHBlbmQ+XHJcbiAgICAgICAgICB7YmFuZENyZWF0aW9uU3RhdHVzID09IEJhbmRDcmVhdGlvblN0YXR1c2VzLkNSRUFUSU5HID8gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgPFNwaW5uZXJcclxuICAgICAgICAgICAgICAgIGFzPVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb249XCJib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoKX0+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0lucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgIDxEaXNwbGF5QWxlcnQgYWxlcnQ9e2FsZXJ0fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBsb2dvdXRTYWdhKCkge1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICB5aWVsZCB0YWtlKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RMb2dvdXQudHlwZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLmRlbGV0ZSxcclxuICAgICAgICBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5zZXNzaW9uRW5kcG9pbnQsIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9XHJcbiAgICAgICk7XHJcbiAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5sb2dvdXRTdWNjZXNzKCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5sb2dvdXRGYWlsdXJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImNvbnN0IG1zSW5NaW51dGUgPSA2MDAwMDtcclxuY29uc3QgbXNJbkhvdXIgPSBtc0luTWludXRlICogNjA7XHJcbmNvbnN0IG1zSW5EYXkgPSBtc0luSG91ciAqIDI0O1xyXG5jb25zdCBtc0luWWVhciA9IG1zSW5EYXkgKiAzNjU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZVNpbmNlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGVsYXBzZWRUaW1lID0gRGF0ZS5ub3coKSAtIGRhdGUuZ2V0VGltZSgpO1xyXG4gIGlmIChlbGFwc2VkVGltZSA8IG1zSW5NaW51dGUpIHtcclxuICAgIHJldHVybiBcIjFtXCI7XHJcbiAgfVxyXG4gIGlmIChlbGFwc2VkVGltZSA8IG1zSW5Ib3VyKSB7XHJcbiAgICBjb25zdCBudW1PZk1pbnV0ZXMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJbk1pbnV0ZSk7XHJcbiAgICByZXR1cm4gYCR7bnVtT2ZNaW51dGVzfW1gO1xyXG4gIH1cclxuICBpZiAoZWxhcHNlZFRpbWUgPCBtc0luRGF5KSB7XHJcbiAgICBjb25zdCBudW1PZkhvdXJzID0gTWF0aC5mbG9vcihlbGFwc2VkVGltZSAvIG1zSW5Ib3VyKTtcclxuICAgIGNvbnN0IG51bU9mTWludXRlcyA9IE1hdGguZmxvb3IoKGVsYXBzZWRUaW1lICUgbXNJbkhvdXIpIC8gbXNJbk1pbnV0ZSk7XHJcbiAgICBsZXQgc3RyaW5nID0gYCR7bnVtT2ZIb3Vyc31oYDtcclxuICAgIGlmIChudW1PZk1pbnV0ZXMgPiAwKSBzdHJpbmcgKz0gYCAke251bU9mTWludXRlc31tYDtcclxuICAgIHJldHVybiBzdHJpbmc7XHJcbiAgfVxyXG4gIGlmIChlbGFwc2VkVGltZSA8IG1zSW5ZZWFyKSB7XHJcbiAgICBjb25zdCBudW1PZkRheXMgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gbXNJbkRheSk7XHJcbiAgICByZXR1cm4gYCR7bnVtT2ZEYXlzfWRgO1xyXG4gIH1cclxuICBjb25zdCBudW1PZlllYXJzID0gTWF0aC5mbG9vcihlbGFwc2VkVGltZSAvIG1zSW5ZZWFyKTtcclxuICBjb25zdCBudW1PZkRheXMgPSBNYXRoLmZsb29yKChlbGFwc2VkVGltZSAlIG1zSW5ZZWFyKSAvIG1zSW5EYXkpO1xyXG4gIGxldCBzdHJpbmcgPSBgJHtudW1PZlllYXJzfXlgO1xyXG4gIGlmIChudW1PZkRheXMgPiAwKSBzdHJpbmcgKz0gYCAke251bU9mRGF5c31kYDtcclxuICByZXR1cm4gc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYWN0aW9uQ2hhbm5lbCwgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHdhdGNoRmV0Y2hCYW5kc1NhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICBjb25zdCBmZXRjaEJhbmRzQ2hhbm5lbCA9IHlpZWxkIGFjdGlvbkNoYW5uZWwoXHJcbiAgICBiYW5kQWN0aW9ucy5yZXF1ZXN0RmV0Y2hCYW5kcy50eXBlXHJcbiAgKTtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKGZldGNoQmFuZHNDaGFubmVsKTtcclxuICAgIGNvbnN0IHsgbWF4QmFuZHMsIHNvcnRCeSB9ID0gcGF5bG9hZDtcclxuICAgIHlpZWxkIGNhbGwoZmV0Y2hCYW5kcywgbWF4QmFuZHMsIHNvcnRCeSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoQmFuZHMobWF4QmFuZHMsIHNvcnRCeSkge1xyXG4gIGxldCByZXNwb25zZTtcclxuICB0cnkge1xyXG4gICAgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGF4aW9zLnBvc3QsIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLnBvc3RCYW5kcywge1xyXG4gICAgICBtYXhCYW5kcyxcclxuICAgICAgc29ydEJ5LFxyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMuZmV0Y2hCYW5kc1N1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMuZmV0Y2hCYW5kc0ZhaWx1cmUoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHVzZXJBdXRoZW50aWNhdGlvblNhZ2EoKSB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0QXV0aGVudGljYXRlVXNlci50eXBlKTtcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBwYXlsb2FkO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuYXV0aGVudGljYXRlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHsgdXNlcklkLCBiYW5kc01vZGlmaWVkIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImJhbmRzTW9kaWZpZWQgaW4gdXNlckF1dGhlbnRpY2F0aW9uU2FnYTogXCIsIGJhbmRzTW9kaWZpZWQpO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmF1dGhlbnRpY2F0ZVVzZXJTdWNjZXNzKHtcclxuICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgYmFuZHNNb2RpZmllZCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5hdXRoZW50aWNhdGVVc2VyRmFpbHVyZSh7XHJcbiAgICAgICAgICAgIHJlYXNvbjogZXJyLnJlc3BvbnNlLmRhdGEucmVhc29uLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzLCB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQge1xyXG4gIFVzZXJQcm9maWxlVHlwZSxcclxuICB1c2VyUHJvZmlsZUFjdGlvbnMsXHJcbn0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy91c2VyLXByb2ZpbGUtc2xpY2VcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9Db250YWluZXJcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9lc20vVGFibGVcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL0JhZGdlXCI7XHJcbmltcG9ydCB7IGdldFRpbWVTaW5jZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxpdHkvZ2V0LXRpbWUtc2luY2VcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogUm9vdFN0YXRlKSB7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIGZldGNoU3RhdHVzOiBzdGF0ZS51c2VyUHJvZmlsZS5mZXRjaFN0YXR1cyxcclxuLy8gICAgIHByb2ZpbGU6IHN0YXRlLnVzZXJQcm9maWxlLnByb2ZpbGUsXHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHJlcXVlc3RGZXRjaFByb2ZpbGU6ICh0YXJnZXRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCkgPT4ge1xyXG4vLyAgICAgICBkaXNwYXRjaCh1c2VyUHJvZmlsZUFjdGlvbnMucmVxdWVzdEZldGNoVXNlclByb2ZpbGUoeyB0YXJnZXRJZCB9KSk7XHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHJlZHV4Q29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XHJcbi8vIHR5cGUgVXNlclByb2ZpbGVQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiByZWR1eENvbm5lY3Rvcj4gJiB7XHJcbi8vICAgaWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlclByb2ZpbGUoe1xyXG4gIHVzZXJJZCxcclxufToge1xyXG4gIHVzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxufSk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCB7IGZldGNoU3RhdHVzLCBwcm9maWxlIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2VyUHJvZmlsZVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBmdW5jdGlvbiBmZXRjaFByb2ZpbGUoKSB7XHJcbiAgICBkaXNwYXRjaCh1c2VyUHJvZmlsZUFjdGlvbnMucmVxdWVzdEZldGNoVXNlclByb2ZpbGUoeyB0YXJnZXRJZDogdXNlcklkIH0pKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFByb2ZpbGUoKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtcIm1iLTVcIn0+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIHtwcm9maWxlID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxoNT57cHJvZmlsZS5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgc2NvcmU6IDxiPntwcm9maWxlLnRvdGFsU2NvcmV9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdmVyYWdlIHNjb3JlOiA8Yj57cHJvZmlsZS5hdmVyYWdlU2NvcmUudG9GaXhlZCgyKX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVzIGNvbnRyaWJ1dGVkOiA8Yj57cHJvZmlsZS5uYW1lc0NvbnRyaWJ1dGVkfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHNpemU9XCJzbVwiIHN0cmlwZWQgYm9yZGVyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS5iYW5kcy5tYXAoKGJhbmQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1N0cmluZyhiYW5kLl9pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57YmFuZC5zY29yZX08L0JhZGdlPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57YmFuZC5uYW1lfTwvYj4gKGNyZWF0ZWR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldFRpbWVTaW5jZShuZXcgRGF0ZShiYW5kLmNyZWF0ZWRPbikpfSBhZ28pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwPkxvYWRpbmc8L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gY2xhc3MgVW5jb25uZWN0ZWRVc2VyUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxVc2VyUHJvZmlsZVByb3BzPiB7XHJcbi8vICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbi8vICAgICB0aGlzLnByb3BzLnJlcXVlc3RGZXRjaFByb2ZpbGUodGhpcy5wcm9wcy5pZCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZW5kZXIoKSB7XHJcbi8vICAgICBjb25zdCB7IHByb2ZpbGUgfSA9IHRoaXMucHJvcHM7XHJcbi8vICAgICBpZiAocHJvZmlsZSkge1xyXG4vLyAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtcIm1iLTVcIn0+XHJcbi8vICAgICAgICAgICA8Q2FyZD5cclxuLy8gICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4vLyAgICAgICAgICAgICAgIDxoNT57cHJvZmlsZS5uYW1lfTwvaDU+XHJcbi8vICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbi8vICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbi8vICAgICAgICAgICAgICAgPENhcmQ+XHJcbi8vICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgc2NvcmU6IDxiPntwcm9maWxlLnRvdGFsU2NvcmV9PC9iPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBBdmVyYWdlIHNjb3JlOiA8Yj57cHJvZmlsZS5hdmVyYWdlU2NvcmUudG9GaXhlZCgyKX08L2I+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVzIGNvbnRyaWJ1dGVkOiA8Yj57cHJvZmlsZS5uYW1lc0NvbnRyaWJ1dGVkfTwvYj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezh9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHNpemU9XCJzbVwiIHN0cmlwZWQgYm9yZGVyZWQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS5iYW5kcy5tYXAoKGJhbmQpID0+IChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1N0cmluZyhiYW5kLl9pZCl9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57YmFuZC5zY29yZX08L0JhZGdlPntcIiBcIn1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57YmFuZC5uYW1lfTwvYj4gKGNyZWF0ZWR7XCIgXCJ9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldFRpbWVTaW5jZShuZXcgRGF0ZShiYW5kLmNyZWF0ZWRPbikpfSBhZ28pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuLy8gICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbi8vICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuLy8gICAgICAgICAgICAgICA8L0NhcmQ+XHJcbi8vICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4vLyAgICAgICAgICAgPC9DYXJkPlxyXG4vLyAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4vLyAgICAgICApO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgcmV0dXJuIG51bGw7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgY29uc3QgVXNlclByb2ZpbGUgPSByZWR1eENvbm5lY3RvcihVbmNvbm5lY3RlZFVzZXJQcm9maWxlKTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25DaGFubmVsLCBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgdXNlclJlY29yZHNBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3Jkc1JlcXVlc3RCb2R5IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9yb3V0ZS1oYW5kbGVycy91c2VyLXJlY29yZHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHdhdGNoRmV0Y2hVc2VyUmVjb3Jkc1NhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICBjb25zdCBmZXRjaFVzZXJSZWNvcmRzQ2hhbm5lbCA9IHlpZWxkIGFjdGlvbkNoYW5uZWwoXHJcbiAgICB1c2VyUmVjb3Jkc0FjdGlvbnMucmVxdWVzdEZldGNoVXNlclJlY29yZHMudHlwZVxyXG4gICk7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShmZXRjaFVzZXJSZWNvcmRzQ2hhbm5lbCk7XHJcbiAgICBjb25zdCB7IG51bU9mUmVjb3Jkcywgc29ydFR5cGUgfSA9IHBheWxvYWQ7XHJcbiAgICB5aWVsZCBjYWxsKGZldGNoVXNlclJlY29yZHMsIG51bU9mUmVjb3Jkcywgc29ydFR5cGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaFVzZXJSZWNvcmRzKFxyXG4gIG1heFJlY29yZHM6IG51bWJlcixcclxuICBzb3J0Qnk6IFVzZXJSZWNvcmRTb3J0VHlwZXNcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuZ2V0VXNlclJlY29yZHMsXHJcbiAgICAgIHsgbnVtT2ZSZWNvcmRzOiBtYXhSZWNvcmRzLCBzb3J0VHlwZTogc29ydEJ5IH1cclxuICAgICk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB5aWVsZCBwdXQodXNlclJlY29yZHNBY3Rpb25zLmZldGNoVXNlclJlY29yZHNTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHVzZXJSZWNvcmRzQWN0aW9ucy5mZXRjaFVzZXJSZWNvcmRzRmFpbHVyZSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG4vLyBUT0RPOiBUaGlzIGRvZXNuJ3Qgd29yayByaWdodCBvbiB0aGUgZGF0YWJhc2Ugc2lkZSFcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogYmFuZFNjb3JlTW9kaWZpY2F0aW9uU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoYmFuZEFjdGlvbnMucmVxdWVzdE1vZGlmeUJhbmRTY29yZS50eXBlKTtcclxuICAgIGNvbnN0IHsgdGFyZ2V0QmFuZElkLCBtb2RpZnlpbmdVc2VySWQsIG1vZGlmaWNhdGlvblZhbHVlIH0gPSBwYXlsb2FkO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJtb2RpZmljYXRpb24gdmFsdWUgaW4gc2FnYTogXCIsIG1vZGlmaWNhdGlvblZhbHVlKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMubW9kaWZ5QmFuZCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICBtb2RpZnlpbmdVc2VySWQsXHJcbiAgICAgICAgICBtb2RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgaWYgKG1vZGlmaWNhdGlvblZhbHVlID09IDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBiYW5kQWN0aW9ucy5tb2RpZnlCYW5kU2NvcmVTdWNjZXNzKHtcclxuICAgICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgICBtb2RpZmljYXRpb25WYWx1ZTogLXBheWxvYWQudW5kb1ZhbHVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIGJhbmRBY3Rpb25zLm1vZGlmeUJhbmRTY29yZVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlRmFpbHVyZSgpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlclVybCA9XHJcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCJodHRwOi8vbG9jYWxob3N0Ojc3NzdcIjtcclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IFwiL2FwaS9hdXRoZW50aWNhdGVcIjtcclxuZXhwb3J0IGNvbnN0IHBvc3RCYW5kcyA9IFwiL2FwaS9iYW5kc1wiO1xyXG5leHBvcnQgY29uc3QgbW9kaWZ5QmFuZCA9IFwiL2FwaS9iYW5kL21vZGlmeVwiO1xyXG5leHBvcnQgY29uc3QgbmV3QmFuZCA9IFwiL2FwaS9iYW5kL25ld1wiO1xyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IFwiL2FwaS9jcmVhdGUtdXNlclwiO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlcm5hbWUgPSBcIi9hcGkvdXNlcm5hbWVzL2dldFwiO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlclJlY29yZHMgPSBcIi9hcGkvdXNlcnMvZ2V0XCI7XHJcbmV4cG9ydCBjb25zdCBzZXNzaW9uRW5kcG9pbnQgPSBcIi9hcGkvc2Vzc2lvblwiO1xyXG5cclxuXHJcbmNvbnN0IGdldFVzZXJQcm9maWxlQmFzZSA9IFwiL2FwaS91c2VyLXByb2ZpbGVcIjtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJQcm9maWxlRW5kcG9pbnQgPSBnZXRVc2VyUHJvZmlsZUJhc2UgKyBcIi86dXNlcklkXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwoXHJcbiAgdGFyZ2V0VXNlcklkIC8qOiBNb25nb29zZVR5cGVzLk9iamVjdElkKi9cclxuKTogc3RyaW5nIHtcclxuICByZXR1cm4gZ2V0VXNlclByb2ZpbGVCYXNlICsgXCIvXCIgKyB0YXJnZXRVc2VySWQgLyoudG9IZXhTdHJpbmcqLztcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFjdGlvbkNoYW5uZWwsIGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBjaGVja1Nlc3Npb25TYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENoZWNrU2Vzc2lvbi50eXBlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5nZXQsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuc2Vzc2lvbkVuZHBvaW50LFxyXG4gICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH1cclxuICAgICAgKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlcklkLCB1c2VybmFtZSwgYmFuZHNNb2RpZmllZCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5jaGVja1Nlc3Npb25TdWNjZXNzKHtcclxuICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgYmFuZHNNb2RpZmllZCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMuY2hlY2tTZXNzaW9uRmFpbHVyZSgpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5jaGVja1Nlc3Npb25GYWlsdXJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7XHJcbiAgQmFuZENyZWF0aW9uU3RhdHVzZXMsXHJcbiAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMsXHJcbiAgQmFuZFNvcnRUeXBlcyxcclxufSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG50eXBlIFNjb3JlTW9kaWZpY2F0aW9uU3RhdGUgPSB7XHJcbiAgc3RhdHVzOiBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcztcclxuICAvLyBUT0RPOiBUaGlzIG5lZWRzIHRvIHJlZmVyIHRvIGEgYmFuZCdzIElEXHJcbiAgdGFyZ2V0PzogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxufTtcclxuXHJcbnR5cGUgQmFuZHNTbGljZVN0YXRlID0ge1xyXG4gIHBlbmRpbmdGZXRjaGVzOiBudW1iZXI7XHJcbiAgY3JlYXRpb25TdGF0dXM6IEJhbmRDcmVhdGlvblN0YXR1c2VzO1xyXG4gIGl0ZW1zOiBCYW5kQ2xhc3NbXTtcclxuICBzY29yZU1vZGlmaWNhdGlvblN0YXRlOiBTY29yZU1vZGlmaWNhdGlvblN0YXRlO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBCYW5kc1NsaWNlU3RhdGUgPSB7XHJcbiAgcGVuZGluZ0ZldGNoZXM6IDAsXHJcbiAgaXRlbXM6IFtdLFxyXG4gIGNyZWF0aW9uU3RhdHVzOiBCYW5kQ3JlYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIHNjb3JlTW9kaWZpY2F0aW9uU3RhdGU6IHtcclxuICAgIHN0YXR1czogQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgYmFuZHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImJhbmRzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICAvLyBCYW5kIGZldGNoaW5nXHJcbiAgICByZXF1ZXN0RmV0Y2hCYW5kcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgbWF4QmFuZHM6IG51bWJlcjtcclxuICAgICAgICBzb3J0Qnk6IEJhbmRTb3J0VHlwZXM7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMrKztcclxuICAgIH0sXHJcbiAgICBmZXRjaEJhbmRzU3VjY2VzcyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEJhbmRDbGFzc1tdPikge1xyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKChuZXdCYW5kKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5pdGVtcy5zb21lKChiYW5kKSA9PiBiYW5kLl9pZCA9PSBuZXdCYW5kLl9pZCkpXHJcbiAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKG5ld0JhbmQpO1xyXG4gICAgICB9KTtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMtLTtcclxuICAgIH0sXHJcbiAgICBmZXRjaEJhbmRzRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBCYW5kIGNyZWF0aW9uXHJcbiAgICByZXF1ZXN0Q3JlYXRlQmFuZChcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgY3JlYXRpbmdVc2VySWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgYmFuZE5hbWU6IHN0cmluZztcclxuICAgICAgICBjcmVhdGluZ1VzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuY3JlYXRpb25TdGF0dXMgPSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVElORztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVCYW5kU3VjY2VzcyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEJhbmRDbGFzcz4pIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJva2F5IHdoYXl0cyB1cFwiKVxyXG4gICAgICBzdGF0ZS5jcmVhdGlvblN0YXR1cyA9IEJhbmRDcmVhdGlvblN0YXR1c2VzLkNSRUFURUQ7XHJcbiAgICAgIHN0YXRlLml0ZW1zLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUJhbmRGYWlsdXJlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QmFuZENyZWF0aW9uU3RhdHVzZXM+KSB7XHJcbiAgICAgIHN0YXRlLmNyZWF0aW9uU3RhdHVzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIE1vZGlmeSBiYW5kIHNjb3JlXHJcbiAgICByZXF1ZXN0TW9kaWZ5QmFuZFNjb3JlKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICB0YXJnZXRCYW5kSWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgbW9kaWZ5aW5nVXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIG1vZGlmaWNhdGlvblZhbHVlOiBudW1iZXI7XHJcbiAgICAgICAgdW5kb1ZhbHVlPzogbnVtYmVyO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUuc3RhdHVzID1cclxuICAgICAgICBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcy5BVFRFTVBUSU5HO1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnRhcmdldCA9IGFjdGlvbi5wYXlsb2FkLnRhcmdldEJhbmRJZDtcclxuICAgIH0sXHJcbiAgICBtb2RpZnlCYW5kU2NvcmVTdWNjZXNzKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgY29uc3QgdGFyZ2V0QmFuZEluZGV4ID0gc3RhdGUuaXRlbXMuZmluZEluZGV4KFxyXG4gICAgICAgIChiYW5kKSA9PiBiYW5kLl9pZCA9PT0gYWN0aW9uLnBheWxvYWQudGFyZ2V0QmFuZElkXHJcbiAgICAgICk7XHJcbiAgICAgIHN0YXRlLml0ZW1zW3RhcmdldEJhbmRJbmRleF0uc2NvcmUgKz0gYWN0aW9uLnBheWxvYWQubW9kaWZpY2F0aW9uVmFsdWU7XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUuc3RhdHVzID1cclxuICAgICAgICBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcy5TVUNDRVNTO1xyXG4gICAgfSxcclxuICAgIG1vZGlmeUJhbmRTY29yZUZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgLy8gVE9ETzogU2hvdWxkbid0IHdlIGJlIGdldHRpbmcgYSByZWFzb24gZm9yIHRoZSBmYWlsdXJlIGhlcmU/XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUuc3RhdHVzID1cclxuICAgICAgICBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcy5GQUlMVVJFO1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYmFuZEFjdGlvbnMgPSBiYW5kc1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IGJhbmRzU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgZ2V0RGVmYXVsdE1pZGRsZXdhcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYmFuZHNSZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgc2Vzc2lvblJlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHVzZXJSZWNvcmRzUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvdXNlci1yZWNvcmRzLXNsaWNlXCI7XHJcbmltcG9ydCB1c2VyUHJvZmlsZVJlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL3VzZXItcHJvZmlsZS1zbGljZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgc2FnYXMgZnJvbSBcIi4vc2FnYXNcIjtcclxuXHJcbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuY29uc3QgbWlkZGxld2FyZSA9IFsuLi5nZXREZWZhdWx0TWlkZGxld2FyZSh7IHRodW5rOiBmYWxzZSB9KSwgc2FnYU1pZGRsZXdhcmVdO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGJhbmRzOiBiYW5kc1JlZHVjZXIsXHJcbiAgc2Vzc2lvbjogc2Vzc2lvblJlZHVjZXIsXHJcbiAgdXNlclJlY29yZHM6IHVzZXJSZWNvcmRzUmVkdWNlcixcclxuICB1c2VyUHJvZmlsZTogdXNlclByb2ZpbGVSZWR1Y2VyXHJcbn0pO1xyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXHJcbiAgbWlkZGxld2FyZTogbWlkZGxld2FyZSxcclxufSk7XHJcblxyXG5mb3IgKGNvbnN0IHNhZ2EgaW4gc2FnYXMpIHtcclxuICBzYWdhTWlkZGxld2FyZS5ydW4oc2FnYXNbc2FnYV0pO1xyXG59XHJcbiIsImltcG9ydCB7IHRha2UsIHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB7IFVzZXJDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHVzZXJDcmVhdGlvblNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDcmVhdGVVc2VyLnR5cGUpO1xyXG4gICAgY29uc3QgeyAvKmVtYWlsLCovIHVzZXJuYW1lLCBwYXNzd29yZCwgcmVwZWF0UGFzc3dvcmQgfSA9IHBheWxvYWQ7XHJcblxyXG4gICAgLy8gaWYgKCFlbWFpbElzVmFsaWQoZW1haWwpKSB7XHJcbiAgICAvLyAgIHlpZWxkIHB1dChcclxuICAgIC8vICAgICBzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyRmFpbHVyZSh7XHJcbiAgICAvLyAgICAgICByZWFzb246IFVzZXJDcmVhdGlvblN0YXR1c2VzLklOVkFMSURfRU1BSUwsXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIGlmIChwYXNzd29yZCAhPT0gcmVwZWF0UGFzc3dvcmQpIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyRmFpbHVyZSh7XHJcbiAgICAgICAgICAgIHJlYXNvbjogVXNlckNyZWF0aW9uU3RhdHVzZXMuUEFTU1dPUkRTX0RPTlRfTUFUQ0gsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuY3JlYXRlVXNlcixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgIC8vIGVtYWlsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmNyZWF0ZVVzZXJTdWNjZXNzKCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmNyZWF0ZVVzZXJGYWlsdXJlKHtcclxuICAgICAgICAgICAgICByZWFzb246IGVycm9yLnJlc3BvbnNlLmRhdGEucmVhc29uLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVtYWlsSXNWYWxpZChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gIHJldHVybiByZS50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdGFrZSwgcHV0LCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyB1c2VyUHJvZmlsZUFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3VzZXItcHJvZmlsZS1zbGljZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVHZXRVc2VyUHJvZmlsZVVybCB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZmV0Y2hQcm9maWxlU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoXHJcbiAgICAgIHVzZXJQcm9maWxlQWN0aW9ucy5yZXF1ZXN0RmV0Y2hVc2VyUHJvZmlsZS50eXBlXHJcbiAgICApO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGF5bG9hZCk7XHJcbiAgICBjb25zdCB0YXJnZXRJZCA9IHBheWxvYWQudGFyZ2V0SWQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXRJZCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhjcmVhdGVHZXRVc2VyUHJvZmlsZVVybCh0YXJnZXRJZCkpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICAgICAgYXhpb3MuZ2V0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIGNyZWF0ZUdldFVzZXJQcm9maWxlVXJsKHRhcmdldElkKVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIHVzZXJQcm9maWxlQWN0aW9ucy5mZXRjaFVzZXJQcm9maWxlU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHByb2ZpbGU6IHJlc3BvbnNlLmRhdGEucHJvZmlsZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5aWVsZCBwdXQodXNlclByb2ZpbGVBY3Rpb25zLmZldGNoVXNlclByb2ZpbGVGYWlsdXJlKCkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgeWllbGQgcHV0KHVzZXJQcm9maWxlQWN0aW9ucy5mZXRjaFVzZXJQcm9maWxlRmFpbHVyZSgpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzLCBVc2VyQ3JlYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMsIFNUQVRFUyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxudHlwZSBTZXNzaW9uQmFuZE1vZGlmaWNhdGlvbiA9IHtcclxuICB0YXJnZXRCYW5kSWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxufTtcclxuXHJcbnR5cGUgU2Vzc2lvblNsaWNlU3RhdGUgPSB7XHJcbiAgYXV0aGVudGljYXRpb25TdGF0dXM6IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXM7XHJcbiAgdXNlcklkPzogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICB1c2VybmFtZT86IHN0cmluZztcclxuICB1c2VyQ3JlYXRpb25TdGF0dXM6IFVzZXJDcmVhdGlvblN0YXR1c2VzO1xyXG4gIGJhbmRzTW9kaWZpZWQ6IFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uW107XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFNlc3Npb25TbGljZVN0YXRlID0ge1xyXG4gIGF1dGhlbnRpY2F0aW9uU3RhdHVzOiBBdXRoZW50aWNhdGlvblN0YXR1c2VzLk5PVF9UUllJTkcsXHJcbiAgdXNlcklkOiB1bmRlZmluZWQsXHJcbiAgdXNlcm5hbWU6IHVuZGVmaW5lZCxcclxuICB1c2VyQ3JlYXRpb25TdGF0dXM6IFVzZXJDcmVhdGlvblN0YXR1c2VzLk5PVF9UUllJTkcsXHJcbiAgYmFuZHNNb2RpZmllZDogW10sXHJcbn07XHJcblxyXG5jb25zdCBzZXNzaW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJzZXNzaW9uXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICAvLyBTZXNzaW9uIGNoZWNraW5nXHJcbiAgICByZXF1ZXN0Q2hlY2tTZXNzaW9uKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVElORztcclxuICAgIH0sXHJcbiAgICBjaGVja1Nlc3Npb25TdWNjZXNzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICB1c2VySWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBiYW5kc01vZGlmaWVkOiBTZXNzaW9uQmFuZE1vZGlmaWNhdGlvbltdO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEO1xyXG4gICAgICBzdGF0ZS51c2VySWQgPSBhY3Rpb24ucGF5bG9hZC51c2VySWQ7XHJcbiAgICAgIHN0YXRlLnVzZXJuYW1lID0gYWN0aW9uLnBheWxvYWQudXNlcm5hbWU7XHJcbiAgICAgIHN0YXRlLmJhbmRzTW9kaWZpZWQgPSBhY3Rpb24ucGF5bG9hZC5iYW5kc01vZGlmaWVkO1xyXG4gICAgfSxcclxuICAgIGNoZWNrU2Vzc2lvbkZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLk5PVF9UUllJTkc7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFVzZXIgYXV0aGVudGljYXRpb25cclxuICAgIHJlcXVlc3RBdXRoZW50aWNhdGVVc2VyKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HO1xyXG4gICAgfSxcclxuICAgIGF1dGhlbnRpY2F0ZVVzZXJTdWNjZXNzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICB1c2VySWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBiYW5kc01vZGlmaWVkOiBTZXNzaW9uQmFuZE1vZGlmaWNhdGlvbltdO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEO1xyXG4gICAgICBzdGF0ZS51c2VySWQgPSBhY3Rpb24ucGF5bG9hZC51c2VySWQ7XHJcbiAgICAgIHN0YXRlLnVzZXJuYW1lID0gYWN0aW9uLnBheWxvYWQudXNlcm5hbWU7XHJcbiAgICAgIHN0YXRlLmJhbmRzTW9kaWZpZWQgPSBhY3Rpb24ucGF5bG9hZC5iYW5kc01vZGlmaWVkO1xyXG4gICAgfSxcclxuICAgIGF1dGhlbnRpY2F0ZVVzZXJGYWlsdXJlKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBhY3Rpb24ucGF5bG9hZC5yZWFzb247XHJcbiAgICAgIC8vIFRPRE86IElzIGl0IG5lY2Vzc2FyeSB0byByZXNldCB0aGlzIHRvIG51bGwgaGVyZT9cclxuICAgICAgc3RhdGUudXNlcklkID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBVc2VyIGxvZ291dFxyXG4gICAgcmVxdWVzdExvZ291dChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuTE9HR0lOR19PVVQ7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0RmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuU0VSVkVSX0VSUk9SO1xyXG4gICAgfSxcclxuICAgIGxvZ291dFN1Y2Nlc3Moc3RhdGUpIHtcclxuICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFVzZXIgY3JlYXRpb25cclxuICAgIHJlcXVlc3RDcmVhdGVVc2VyKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICAvLyBlbWFpbDogc3RyaW5nO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICByZXBlYXRQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLnVzZXJDcmVhdGlvblN0YXR1cyA9IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkc7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlVXNlclN1Y2Nlc3Moc3RhdGUpIHtcclxuICAgICAgc3RhdGUudXNlckNyZWF0aW9uU3RhdHVzID0gVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTUztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVVc2VyRmFpbHVyZShzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLnVzZXJDcmVhdGlvblN0YXR1cyA9IGFjdGlvbi5wYXlsb2FkLnJlYXNvbjtcclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAvLyBCYW5kIG1vZGlmaWNhdGlvblxyXG4gICAgW2JhbmRBY3Rpb25zLm1vZGlmeUJhbmRTY29yZVN1Y2Nlc3MudHlwZV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmJhbmRzTW9kaWZpZWQucHVzaCh7XHJcbiAgICAgICAgdGFyZ2V0QmFuZElkOiBhY3Rpb24ucGF5bG9hZC50YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgdmFsdWU6IGFjdGlvbi5wYXlsb2FkLm1vZGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2Vzc2lvbkFjdGlvbnMgPSBzZXNzaW9uU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvblNsaWNlLnJlZHVjZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IGhpc3RvcnkgfSBmcm9tIFwiLi4vc3RvcmUvaGlzdG9yeVwiO1xyXG5pbXBvcnQgeyBCaWdCYW5kVGFibGUgfSBmcm9tIFwiLi9CaWdCYW5kVGFibGVcIjtcclxuaW1wb3J0IHsgTGFuZGluZyB9IGZyb20gXCIuL0xhbmRpbmdcIjtcclxuaW1wb3J0IHsgTG9naW5Gb3JtIH0gZnJvbSBcIi4vTG9naW5cIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCIuL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgTmV3VXNlckZvcm0gfSBmcm9tIFwiLi9OZXdVc2VyRm9ybVwiO1xyXG5pbXBvcnQgeyBVc2VyUHJvZmlsZSB9IGZyb20gXCIuL1VzZXJQcm9maWxlXCI7XHJcblxyXG4vLyBjb25zdCBBdXRoZW50aWNhdGlvbkd1YXJkID0gKENvbXBvbmVudCkgPT4gKHsgbWF0Y2ggfSkgPT4ge1xyXG4vLyAgIGlmIChcclxuLy8gICAgIHN0b3JlLmdldFN0YXRlKCkuc2Vzc2lvbi5hdXRoZW50aWNhdGlvblN0YXR1cyAhPT1cclxuLy8gICAgIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRFxyXG4vLyAgICkge1xyXG4vLyAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9cIiAvPjtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIDxDb21wb25lbnQgbWF0Y2g9e21hdGNofSAvPjtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluID0gKCkgPT4gKFxyXG4gIC8vIFRPRE86IFdoYXQgaXMgdGhlIFJvdXRlcidzIFwiaGlzdG9yeVwiIGFsbCBhYm91dD9cclxuICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9iYW5kc1wiIGNvbXBvbmVudD17QmlnQmFuZFRhYmxlfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbkZvcm19IC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbmV3LXVzZXJcIiBjb21wb25lbnQ9e05ld1VzZXJGb3JtfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17TGFuZGluZ30gLz5cclxuICAgICAgICA8Um91dGVcclxuICAgICAgICAgIHBhdGg9XCIvdXNlcnMvOnVzZXJJZFwiXHJcbiAgICAgICAgICBjb21wb25lbnQ9eyh7IG1hdGNoIH0pID0+IDxVc2VyUHJvZmlsZSB1c2VySWQ9e21hdGNoLnBhcmFtcy51c2VySWR9IC8+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICA8L1JvdXRlcj5cclxuKTtcclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcImRaWkhcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiaTNYcFwiOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ3JlYXRlQmFuZEZvcm0gfSBmcm9tIFwiLi9DcmVhdGVCYW5kRm9ybVwiO1xyXG5pbXBvcnQgeyBCaWdCYW5kVGFibGUgfSBmcm9tIFwiLi9CaWdCYW5kVGFibGVcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9Db250YWluZXJcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3Jkc0xpc3QgfSBmcm9tIFwiLi9Vc2VyUmVjb3Jkc0xpc3RcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgSnVtYm90cm9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSnVtYm90cm9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTGFuZGluZyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgey8qIDxKdW1ib3Ryb24+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJsYW5kaW5nVGl0bGVcIj5XaGF0IGFib3V0IGEgYmFuZCBjYWxsZWQuLi48L2gxPlxyXG4gICAgPC9KdW1ib3Ryb24+ICovfVxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFJvdyBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgICA8Q29sIG1kPXs4fSBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgICAgIDxDcmVhdGVCYW5kRm9ybSAvPlxyXG4gICAgICAgICAgPEJpZ0JhbmRUYWJsZSAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezR9PlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+TW9zdCBOYW1lcyBDb250cmlidXRlZDwvaDU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPFVzZXJSZWNvcmRzTGlzdFxyXG4gICAgICAgICAgICAgICAgbWF4UmVjb3Jkcz17MTB9XHJcbiAgICAgICAgICAgICAgICBzb3J0VHlwZT17VXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+SGlnaGVzdCBBdmVyYWdlIFNjb3JlPC9oNT5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8VXNlclJlY29yZHNMaXN0XHJcbiAgICAgICAgICAgICAgICBtYXhSZWNvcmRzPXsxMH1cclxuICAgICAgICAgICAgICAgIHNvcnRUeXBlPXtVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfQVZFUkFHRV9TQ09SRX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGg1PkhpZ2hlc3QgU2NvcmU8L2g1PlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxVc2VyUmVjb3Jkc0xpc3RcclxuICAgICAgICAgICAgICAgIG1heFJlY29yZHM9ezEwfVxyXG4gICAgICAgICAgICAgICAgc29ydFR5cGU9e1VzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9TQ09SRX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICA8Lz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkZvcm0oKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IGF1dGhlbnRpY2F0aW9uU3RhdHVzID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2Vzc2lvbi5hdXRoZW50aWNhdGlvblN0YXR1c1xyXG4gICk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIGRpc3BhdGNoKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RBdXRoZW50aWNhdGVVc2VyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Q2FyZCBzdHlsZT17eyBtYXhXaWR0aDogXCIzNnJlbVwiIH19IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1VzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25TdGF0dXNlcy5VU0VSTkFNRV9OT1RfRk9VTkRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBOZXcgdXNlcj8gQ3JlYXRlIGFuIGFjY291bnQgPGEgaHJlZj1cIi9uZXctdXNlclwiPmhlcmU8L2E+LlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5UZXh0PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciBhIHZhbGlkIHVzZXJuYW1lLlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzID09XHJcbiAgICAgICAgICAgICAgICAgIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuSU5WQUxJRF9QQVNTV09SRFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICBJbmNvcnJlY3QgcGFzc3dvcmQuXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HIHx8XHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIHthdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz4gUHJvY2Vzc2luZy4uLlxyXG4gICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHthdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQgJiYgKFxyXG4gICAgICAgICAgICAgIDxBbGVydCB2YXJpYW50PVwic3VjY2Vzc1wiPlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4hPC9BbGVydD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVc2VyUHJvZmlsZVVybCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIFwiL3VzZXJzL1wiICsgdXNlcklkO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4vY29tcG9uZW50cy9NYWluXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxNYWluIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXHJcbik7XHJcbiIsIi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uR3JvdXBcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CYWRnZVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RvZ2dsZUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzLCBCYW5kU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBzb3J0QW5kTGltaXRCYW5kcyB9IGZyb20gXCIuL3V0aWxpdHkvbGltaXQtc29ydC1iYW5kc1wiO1xyXG5pbXBvcnQge1xyXG4gIEJhbmRNb2RCdXR0b25Hcm91cCxcclxuICBQbGFjZWhvbGRlckJhbmRNb2RCdXR0b25Hcm91cCxcclxufSBmcm9tIFwiLi9CYW5kTW9kQnV0dG9uR3JvdXBcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlL1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4vdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9TcGlubmVyXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0QmFuZHNQZXJGZXRjaCA9IDIwO1xyXG5cclxuLy8gVE9ETzogU29tZXRoaW5nIHNob3VsZCBkaXNwbGF5IHdoZW4gd2UgaGF2ZSBubyBiYW5kcyB0byBkaXNwbGF5IVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBSb290U3RhdGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgYXBwSXNGZXRjaGluZ0JhbmRzOiBzdGF0ZS5iYW5kcy5wZW5kaW5nRmV0Y2hlcyA+IDAsXHJcbiAgICBiYW5kczogWy4uLnN0YXRlLmJhbmRzLml0ZW1zXSxcclxuICAgIHVzZXJJc0F1dGhlbnRpY2F0ZWQ6XHJcbiAgICAgIHN0YXRlLnNlc3Npb24uYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5BVVRIRU5USUNBVEVEXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiBmYWxzZSxcclxuICAgIHVzZXJJZDogc3RhdGUuc2Vzc2lvbi51c2VySWQsXHJcbiAgICB1c2Vyc01vZGlmaWNhdGlvbnM6IHN0YXRlLnNlc3Npb24uYmFuZHNNb2RpZmllZCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgYWRkUG9pbnRzVG86IChcclxuICAgICAgdGFyZ2V0QmFuZElkOiBNb25nb29zZVR5cGVzLk9iamVjdElkLFxyXG4gICAgICBtb2RpZmljYXRpb25WYWx1ZTogbnVtYmVyLFxyXG4gICAgICBtb2RpZnlpbmdVc2VySWQ/OiBNb25nb29zZVR5cGVzLk9iamVjdElkLFxyXG4gICAgICB1bmRvVmFsdWU/OiBudW1iZXJcclxuICAgICkgPT4ge1xyXG4gICAgICBpZiAobW9kaWZ5aW5nVXNlcklkKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICBiYW5kQWN0aW9ucy5yZXF1ZXN0TW9kaWZ5QmFuZFNjb3JlKHtcclxuICAgICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgICBtb2RpZnlpbmdVc2VySWQsXHJcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICB1bmRvVmFsdWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZXF1ZXN0RmV0Y2hCYW5kczogKG1heEJhbmRzOiBudW1iZXIsIHNvcnRCeTogQmFuZFNvcnRUeXBlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaChiYW5kQWN0aW9ucy5yZXF1ZXN0RmV0Y2hCYW5kcyh7IG1heEJhbmRzLCBzb3J0QnkgfSkpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIEJpZ0JhbmRUYWJsZVByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPjtcclxuXHJcbnR5cGUgQmlnQmFuZFRhYmxlU3RhdGUgPSB7XHJcbiAgc29ydFR5cGU6IEJhbmRTb3J0VHlwZXM7XHJcbiAgYmFuZHNQZXJGZXRjaDogbnVtYmVyO1xyXG4gIHNob3VsZEZldGNoQmFuZHM6IGJvb2xlYW47XHJcbiAgbWF4QmFuZHNEaXNwbGF5ZWQ6IG51bWJlcjtcclxufTtcclxuXHJcbmNsYXNzIFVuY29ubmVjdGVkQmlnQmFuZFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIEJpZ0JhbmRUYWJsZVByb3BzLFxyXG4gIEJpZ0JhbmRUYWJsZVN0YXRlXHJcbj4ge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgc29ydFR5cGU6IEJhbmRTb3J0VHlwZXMuTU9TVF9SRUNFTlQsXHJcbiAgICBiYW5kc1BlckZldGNoOiBkZWZhdWx0QmFuZHNQZXJGZXRjaCxcclxuICAgIHNob3VsZEZldGNoQmFuZHM6IGZhbHNlLFxyXG4gICAgbWF4QmFuZHNEaXNwbGF5ZWQ6IGRlZmF1bHRCYW5kc1BlckZldGNoLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5yZXF1ZXN0RmV0Y2hCYW5kcyh0aGlzLnN0YXRlLmJhbmRzUGVyRmV0Y2gsIHRoaXMuc3RhdGUuc29ydFR5cGUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKFxyXG4gICAgcHJldlByb3BzOiBCaWdCYW5kVGFibGVQcm9wcyxcclxuICAgIHByZXZTdGF0ZTogQmlnQmFuZFRhYmxlU3RhdGVcclxuICApIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5zdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCA+IHByZXZTdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCB8fFxyXG4gICAgICB0aGlzLnN0YXRlLnNob3VsZEZldGNoQmFuZHNcclxuICAgICkge1xyXG4gICAgICB0aGlzLnByb3BzLnJlcXVlc3RGZXRjaEJhbmRzKFxyXG4gICAgICAgIHRoaXMuc3RhdGUubWF4QmFuZHNEaXNwbGF5ZWQsXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zb3J0VHlwZVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdWxkRmV0Y2hCYW5kczogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuc29ydFR5cGUgIT09IHByZXZTdGF0ZS5zb3J0VHlwZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtYXhCYW5kc0Rpc3BsYXllZDogdGhpcy5zdGF0ZS5iYW5kc1BlckZldGNoLFxyXG4gICAgICAgIHNob3VsZEZldGNoQmFuZHM6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U29ydFR5cGUobmV3VHlwZTogQmFuZFNvcnRUeXBlcykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRUeXBlOiBuZXdUeXBlIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZE1vcmUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1heEJhbmRzRGlzcGxheWVkOiBzdGF0ZS5tYXhCYW5kc0Rpc3BsYXllZCArIHN0YXRlLmJhbmRzUGVyRmV0Y2gsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJNb2RpZmljYXRpb25Ub0JhbmQodGhpc0JhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCkge1xyXG4gICAgY29uc3QgbW9kaWZpY2F0aW9uID0gdGhpcy5wcm9wcy51c2Vyc01vZGlmaWNhdGlvbnMuZmluZChcclxuICAgICAgKG1vZGlmaWNhdGlvbikgPT4gbW9kaWZpY2F0aW9uLnRhcmdldEJhbmRJZCA9PT0gdGhpc0JhbmRJZFxyXG4gICAgKTtcclxuICAgIGlmIChtb2RpZmljYXRpb24pIHJldHVybiBtb2RpZmljYXRpb24udmFsdWU7XHJcbiAgICBlbHNlIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gVE9ETzogU2hvdWxkIHdlIGhhdmUgc29tZSBub3RpZmljYXRpb24gdGhhdCBiYW5kcyBhcmUgYmVpbmcgZmV0Y2hlZD9cclxuICAgIGNvbnN0IGRlc2lyZWRCYW5kcyA9IHNvcnRBbmRMaW1pdEJhbmRzKFxyXG4gICAgICB0aGlzLnByb3BzLmJhbmRzLFxyXG4gICAgICB0aGlzLnN0YXRlLnNvcnRUeXBlLFxyXG4gICAgICB0aGlzLnN0YXRlLm1heEJhbmRzRGlzcGxheWVkXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNvcnRSYWRpb3MgPSBbXHJcbiAgICAgIHsgdmFsdWU6IEJhbmRTb3J0VHlwZXMuQkVTVCwgbmFtZTogXCJCZXN0XCIgfSxcclxuICAgICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5XT1JTVCwgbmFtZTogXCJXb3JzdFwiIH0sXHJcbiAgICAgIHsgdmFsdWU6IEJhbmRTb3J0VHlwZXMuTU9TVF9SRUNFTlQsIG5hbWU6IFwiTW9zdCBSZWNlbnRcIiB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCB7IHVzZXJJc0F1dGhlbnRpY2F0ZWQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIHRvZ2dsZT5cclxuICAgICAgICAgICAge3NvcnRSYWRpb3MubWFwKChyYWRpbywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3JhZGlvLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInNvcnRSYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtyYWRpby52YWx1ZSA9PT0gdGhpcy5zdGF0ZS5zb3J0VHlwZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIHR5cGVvZiBlLmN1cnJlbnRUYXJnZXQgJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydFR5cGVBc051bWJlcjogbnVtYmVyID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFNvcnRUeXBlKHNvcnRUeXBlQXNOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cmFkaW8ubmFtZX1cclxuICAgICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXBwSXNGZXRjaGluZ0JhbmRzID8gKFxyXG4gICAgICAgICAgICAgICAgPD57Z2V0RW50cnlQbGFjZWhvbGRlcnMoZGVmYXVsdEJhbmRzUGVyRmV0Y2gpfTwvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7ZGVzaXJlZEJhbmRzLm1hcCgoYmFuZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1N0cmluZyhiYW5kLl9pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFuZE1vZEJ1dHRvbkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklzQXV0aG9yaXplZD17dXNlcklzQXV0aGVudGljYXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RQZXJmb3JtZWQ9e3RoaXMuZ2V0VXNlck1vZGlmaWNhdGlvblRvQmFuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbmQuX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlCYW5kPXsobW9kVmFsdWUsIHVuZG9WYWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkUG9pbnRzVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbmQuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZG9WYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2NvcmU9e2JhbmQuc2NvcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntiYW5kLnNjb3JlfTwvQmFkZ2U+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmFuZC5uYW1lfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImZvbnQtd2VpZ2h0LWxpZ2h0ZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Y3JlYXRlVXNlclByb2ZpbGVVcmwoU3RyaW5nKGJhbmQub3duZXJJZCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYW5kLm93bmVyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGJsb2NrIG9uQ2xpY2s9eygpID0+IHRoaXMubG9hZE1vcmUoKX0+XHJcbiAgICAgICAgICAgIFNob3cgbWUgbW9yZS4uLlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFbnRyeVBsYWNlaG9sZGVycyhudW1PZlBsYWNlaG9sZGVyczogbnVtYmVyKTogSlNYLkVsZW1lbnRbXSB7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJzOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZlBsYWNlaG9sZGVyczsgaSsrKSB7XHJcbiAgICBwbGFjZWhvbGRlcnMucHVzaChCYW5kVGFibGVFbnRyeVBsYWNlaG9sZGVyKCkpO1xyXG4gIH1cclxuICByZXR1cm4gcGxhY2Vob2xkZXJzO1xyXG59XHJcblxyXG5jb25zdCBCYW5kVGFibGVFbnRyeVBsYWNlaG9sZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8UGxhY2Vob2xkZXJCYW5kTW9kQnV0dG9uR3JvdXAgLz57XCIgXCJ9XHJcbiAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwic21cIiAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEJpZ0JhbmRUYWJsZSA9IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKFVuY29ubmVjdGVkQmlnQmFuZFRhYmxlKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJSZWNvcmQgPSB7XHJcbiAgaWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRvdGFsU2NvcmU6IG51bWJlcjtcclxuICBuYW1lc0NvbnRyaWJ1dGVkOiBudW1iZXI7XHJcbiAgYXZlcmFnZVNjb3JlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIFVzZXJSZWNvcmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogbnVtYmVyO1xyXG4gIGl0ZW1zOiBVc2VyUmVjb3JkW107XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJSZWNvcmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogMCxcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUmVjb3Jkc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclJlY29yZHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHJlcXVlc3RGZXRjaFVzZXJSZWNvcmRzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICBudW1PZlJlY29yZHM6IG51bWJlcjtcclxuICAgICAgICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcysrO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclJlY29yZHNTdWNjZXNzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFVzZXJSZWNvcmRbXT5cclxuICAgICkge1xyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKChuZXdSZWNvcmQpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLml0ZW1zLnNvbWUoKHJlY29yZCkgPT4gcmVjb3JkLmlkID09IG5ld1JlY29yZC5pZCkpXHJcbiAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKG5ld1JlY29yZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclJlY29yZHNGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclJlY29yZHNBY3Rpb25zID0gdXNlclJlY29yZHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVjb3Jkc1NsaWNlLnJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlclJlY29yZHNBY3Rpb25zLFxyXG4gIFVzZXJSZWNvcmQsXHJcbn0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlL1wiO1xyXG5pbXBvcnQgeyBzb3J0QW5kTGltaXRVc2VyUmVjb3JkcyB9IGZyb20gXCIuL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHNcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQmFkZ2VcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybFwiXHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFJvb3RTdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhcHBJc0ZldGNoaW5nUmVjb3Jkczogc3RhdGUudXNlclJlY29yZHMucGVuZGluZ0ZldGNoZXMgPiAwLFxyXG4gICAgcmVjb3JkczogWy4uLnN0YXRlLnVzZXJSZWNvcmRzLml0ZW1zXSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVxdWVzdFVzZXJSZWNvcmRzOiAoXHJcbiAgICAgIG51bU9mUmVjb3JkczogbnVtYmVyLFxyXG4gICAgICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlc1xyXG4gICAgKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIHVzZXJSZWNvcmRzQWN0aW9ucy5yZXF1ZXN0RmV0Y2hVc2VyUmVjb3Jkcyh7IG51bU9mUmVjb3Jkcywgc29ydFR5cGUgfSlcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGlzdEVudHJ5QmFkZ2UocHJvcHM6IHtcclxuICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxuICByZWNvcmQ6IFVzZXJSZWNvcmQ7XHJcbn0pIHtcclxuICBzd2l0Y2ggKHByb3BzLnNvcnRUeXBlKSB7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9BVkVSQUdFX1NDT1JFOlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57cHJvcHMucmVjb3JkLmF2ZXJhZ2VTY29yZS50b0ZpeGVkKDIpfTwvQmFkZ2U+O1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfU0NPUkU6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntwcm9wcy5yZWNvcmQudG90YWxTY29yZX08L0JhZGdlPjtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEOlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57cHJvcHMucmVjb3JkLm5hbWVzQ29udHJpYnV0ZWR9PC9CYWRnZT47XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj4/PC9CYWRnZT47XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIFVzZXJSZWNvcmRzTGlzdFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPiAmIHtcclxuICBtYXhSZWNvcmRzOiBudW1iZXI7XHJcbiAgc29ydFR5cGU6IFVzZXJSZWNvcmRTb3J0VHlwZXM7XHJcbn07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZFVzZXJSZWNvcmRzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxVc2VyUmVjb3Jkc0xpc3RQcm9wcz4ge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5yZXF1ZXN0VXNlclJlY29yZHModGhpcy5wcm9wcy5tYXhSZWNvcmRzLCB0aGlzLnByb3BzLnNvcnRUeXBlKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmFwcElzRmV0Y2hpbmdSZWNvcmRzKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgdXNlciByZWNvcmRzLi4uPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlc2lyZWRSZWNvcmRzID0gc29ydEFuZExpbWl0VXNlclJlY29yZHMoXHJcbiAgICAgIHRoaXMucHJvcHMucmVjb3JkcyxcclxuICAgICAgdGhpcy5wcm9wcy5zb3J0VHlwZSxcclxuICAgICAgdGhpcy5wcm9wcy5tYXhSZWNvcmRzXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtkZXNpcmVkUmVjb3Jkcy5tYXAoKHJlY29yZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17U3RyaW5nKHJlY29yZC5pZCl9PlxyXG4gICAgICAgICAgICAgIDx0ZD57aW5kZXggKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2NyZWF0ZVVzZXJQcm9maWxlVXJsKFN0cmluZyhyZWNvcmQuaWQpKX0+e3JlY29yZC5uYW1lfTwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGlzdEVudHJ5QmFkZ2VcclxuICAgICAgICAgICAgICAgICAgc29ydFR5cGU9e3RoaXMucHJvcHMuc29ydFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclJlY29yZHNMaXN0ID0gY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVW5jb25uZWN0ZWRVc2VyUmVjb3Jkc0xpc3QpO1xyXG4iLCJleHBvcnQgeyBiYW5kQ3JlYXRpb25TYWdhIH0gZnJvbSBcIi4vYmFuZC1jcmVhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IGJhbmRTY29yZU1vZGlmaWNhdGlvblNhZ2EgfSBmcm9tIFwiLi9iYW5kLXNjb3JlLW1vZGlmaWNhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IHVzZXJBdXRoZW50aWNhdGlvblNhZ2EgfSBmcm9tIFwiLi91c2VyLWF1dGhlbnRpY2F0aW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgdXNlckNyZWF0aW9uU2FnYSB9IGZyb20gXCIuL3VzZXItY3JlYXRpb24tc2FnYVwiO1xyXG5leHBvcnQgeyB3YXRjaEZldGNoQmFuZHNTYWdhIH0gZnJvbSBcIi4vd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYVwiO1xyXG5leHBvcnQgeyB3YXRjaEZldGNoVXNlclJlY29yZHNTYWdhIH0gZnJvbSBcIi4vZmV0Y2gtdXNlci1yZWNvcmRzLXNhZ2FcIjtcclxuZXhwb3J0IHsgZmV0Y2hQcm9maWxlU2FnYSB9IGZyb20gXCIuL2ZldGNoLXVzZXItcHJvZmlsZS1zYWdhXCI7XHJcbmV4cG9ydCB7IGNoZWNrU2Vzc2lvblNhZ2EgfSBmcm9tIFwiLi9jaGVjay1zZXNzaW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgbG9nb3V0U2FnYSB9IGZyb20gXCIuL2xvZ291dC1zYWdhXCI7IiwiaW1wb3J0IHsgQmFuZFNvcnRUeXBlcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydEFuZExpbWl0QmFuZHMoXHJcbiAgYmFuZHM6IEJhbmRDbGFzc1tdLFxyXG4gIHNvcnRCeTogQmFuZFNvcnRUeXBlcyxcclxuICBsaW1pdDogbnVtYmVyXHJcbik6IEJhbmRDbGFzc1tdIHtcclxuICBsZXQgZmlsdGVyZWRCYW5kcyA9IFsuLi5iYW5kc107XHJcblxyXG4gIHN3aXRjaCAoc29ydEJ5KSB7XHJcbiAgICBjYXNlIEJhbmRTb3J0VHlwZXMuQkVTVDpcclxuICAgICAgZmlsdGVyZWRCYW5kcy5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLk1PU1RfUkVDRU5UOlxyXG4gICAgICBmaWx0ZXJlZEJhbmRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAvLyBUT0RPOiBXaGF0IGlzIGhhcHBlbmluZyBoZXJlP1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gRGF0ZS5wYXJzZShiLmNyZWF0ZWRPbikgLSBEYXRlLnBhcnNlKGEuY3JlYXRlZE9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLldPUlNUOlxyXG4gICAgICBmaWx0ZXJlZEJhbmRzLnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgLSBiLnNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGZpbHRlcmVkQmFuZHMgPSBmaWx0ZXJlZEJhbmRzLnNsaWNlKDAsIGxpbWl0KTtcclxuICByZXR1cm4gZmlsdGVyZWRCYW5kcztcclxufVxyXG4iLCIvLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcywgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFVzZXJDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbi8vIFVuY29ubmVjdGVkTmV3VXNlckZvcm0ucHJvcFR5cGVzID0ge1xyXG4vLyAgIHN1Ym1pdEZvcm06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbi8vICAgdXNlckNyZWF0aW9uU3RhdHVzOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhVc2VyQ3JlYXRpb25TdGF0dXNlcykpLFxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2Vzc2lvbiB9KSA9PiAoe1xyXG4vLyAgIHVzZXJDcmVhdGlvblN0YXR1czogc2Vzc2lvbi51c2VyQ3JlYXRpb25TdGF0dXMsXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4vLyAgIHN1Ym1pdEZvcm06ICgvKmVtYWlsLCovIHVzZXJuYW1lLCBwYXNzd29yZCwgcmVwZWF0UGFzc3dvcmQpID0+XHJcbi8vICAgICBkaXNwYXRjaChcclxuLy8gICAgICAgc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENyZWF0ZVVzZXIoe1xyXG4vLyAgICAgICAgIC8vIGVtYWlsLFxyXG4vLyAgICAgICAgIHVzZXJuYW1lLFxyXG4vLyAgICAgICAgIHBhc3N3b3JkLFxyXG4vLyAgICAgICAgIHJlcGVhdFBhc3N3b3JkLFxyXG4vLyAgICAgICB9KVxyXG4vLyAgICAgKSxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG4vLyB0eXBlIE5ld1VzZXJGb3JtUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+O1xyXG5cclxuLy8gdHlwZSBOZXdVc2VyRm9ybVN0YXRlID0ge1xyXG4vLyAgIGVtYWlsOiBzdHJpbmc7XHJcbi8vICAgdXNlcm5hbWU6IHN0cmluZztcclxuLy8gICBwYXNzd29yZDogc3RyaW5nO1xyXG4vLyAgIHJlcGVhdFBhc3N3b3JkOiBzdHJpbmc7XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmV3VXNlckZvcm0oKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHVzZXJDcmVhdGlvblN0YXR1cyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNlc3Npb24udXNlckNyZWF0aW9uU3RhdHVzXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlcGVhdFBhc3N3b3JkLCBzZXRSZXBlYXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBmdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDcmVhdGVVc2VyKHtcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICByZXBlYXRQYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgPENhcmQgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzZyZW1cIiB9fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICB7LyogPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJFbWFpbFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsIEFkZHJlc3M8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuSU5WQUxJRF9FTUFJTFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPiAqL31cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJOYW1lXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICB1c2VyQ3JlYXRpb25TdGF0dXMgPT0gVXNlckNyZWF0aW9uU3RhdHVzZXMuVVNFUk5BTUVfVEFLRU5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIFVzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW4uXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgIHVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJSZXBlYXRQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlJlcGVhdCBQYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXBlYXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICB1c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuUEFTU1dPUkRTX0RPTlRfTUFUQ0hcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIFBhc3N3b3JkcyBkb24mYXBvczt0IG1hdGNoLlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgdXNlckNyZWF0aW9uU3RhdHVzID09IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgfHxcclxuICAgICAgICAgICAgICAgIHVzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN1Ym1pdEZvcm0oKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAge3VzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIEFjY291bnQgY3JlYXRlZCEgWW91IG1heSBub3cgPGEgaHJlZj1cIi9sb2dpblwiPmxvZyBpbjwvYT4uXHJcbiAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3VzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz4gUHJvY2Vzc2luZy4uLlxyXG4gICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBjbGFzcyBVbmNvbm5lY3RlZE5ld1VzZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4vLyAgIE5ld1VzZXJGb3JtUHJvcHMsXHJcbi8vICAgTmV3VXNlckZvcm1TdGF0ZVxyXG4vLyA+IHtcclxuLy8gICBzdGF0ZSA9IHtcclxuLy8gICAgIGVtYWlsOiBcIlwiLFxyXG4vLyAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbi8vICAgICBwYXNzd29yZDogXCJcIixcclxuLy8gICAgIHJlcGVhdFBhc3N3b3JkOiBcIlwiLFxyXG4vLyAgIH07XHJcblxyXG4vLyAgIC8vIFRPRE86IFdvdWxkbid0IGl0IGJlIGVhc3kgdG8gbWFrZSBpdCBzbyB0aGUgZW1haWwgaXMgdmFsaWRhdGVkIGFzIHRoZSB1c2VyIHR5cGVzPyBNYXliZSBvbiBhIHNsaWdodCBkZWxheT8gU2FtZSB3aXRoIHRoZSB1c2VybmFtZSBhbmQgcGFzc3dvcmQ/XHJcblxyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIGNvbnN0IHsgdXNlckNyZWF0aW9uU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wibWItNVwifT5cclxuLy8gICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXhXaWR0aDogXCIzNnJlbVwiIH19IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuLy8gICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbi8vICAgICAgICAgICAgIDxGb3JtPlxyXG4vLyAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlckVtYWlsXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbCBBZGRyZXNzPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuLy8gICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLklOVkFMSURfRU1BSUxcclxuLy8gICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cclxuLy8gICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4vLyAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD4gKi99XHJcbi8vICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJOYW1lXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Vc2VybmFtZTwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbi8vICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuLy8gICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5VU0VSTkFNRV9UQUtFTlxyXG4vLyAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICBVc2VybmFtZSBpcyBhbHJlYWR5IHRha2VuLlxyXG4vLyAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyUGFzc3dvcmRcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbi8vICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuLy8gICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSFxyXG4vLyAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuLy8gICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlclJlcGVhdFBhc3N3b3JkXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5SZXBlYXQgUGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbi8vICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVwZWF0UGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbi8vICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlBBU1NXT1JEU19ET05UX01BVENIXHJcbi8vICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkcyBkb24mYXBvczt0IG1hdGNoLlxyXG4vLyAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgIDxCdXR0b25cclxuLy8gICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4vLyAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4vLyAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgfHxcclxuLy8gICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT0gVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTU1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXRGb3JtKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuZW1haWwsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VybmFtZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhc3N3b3JkLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVwZWF0UGFzc3dvcmRcclxuLy8gICAgICAgICAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4vLyAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTUyAmJiAoXHJcbi8vICAgICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgQWNjb3VudCBjcmVhdGVkISBZb3UgbWF5IG5vdyA8YSBocmVmPVwiL2xvZ2luXCI+bG9nIGluPC9hPi5cclxuLy8gICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbi8vICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICB7dXNlckNyZWF0aW9uU3RhdHVzID09IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgJiYgKFxyXG4vLyAgICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJpbmZvXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz4gUHJvY2Vzc2luZy4uLlxyXG4vLyAgICAgICAgICAgICAgICAgPC9BbGVydD5cclxuLy8gICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICA8L0Zvcm0+XHJcbi8vICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuLy8gICAgICAgICA8L0NhcmQ+XHJcbi8vICAgICAgIDwvQ29udGFpbmVyPlxyXG4vLyAgICAgKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBOZXdVc2VyRm9ybSA9IGNvbm5lY3QoXHJcbi8vICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4vLyAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4vLyApKFVuY29ubmVjdGVkTmV3VXNlckZvcm0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9