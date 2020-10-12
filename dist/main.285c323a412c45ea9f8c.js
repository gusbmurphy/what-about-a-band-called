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

/***/ "7SEt":
/*!******************************************!*\
  !*** ./src/app/components/BandTable.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
var Badge_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Badge */ "65eO"));
var Spinner_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Spinner */ "T/rR"));
var Table_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Table */ "MBJH"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "55Ip");
var store_1 = __webpack_require__(/*! ../store */ "YZbJ");
var bands_slice_1 = __webpack_require__(/*! ../store/slices/bands-slice */ "Xep1");
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var BandModButtonGroup_1 = __webpack_require__(/*! ./BandModButtonGroup */ "1HUD");
var create_user_profile_url_1 = __webpack_require__(/*! ./utility/create-user-profile-url */ "n7of");
function BandTable(_a) {
    var bands = _a.bands, defaultNumToDisplay = _a.defaultNumToDisplay;
    var appIsFetchingBands = store_1.useTypedSelector(function (state) { return state.bands.pendingFetches > 0; });
    var userIsAuthenticated = store_1.useTypedSelector(function (state) {
        return state.session.authenticationStatus == statuses_1.AuthenticationStatuses.AUTHENTICATED;
    });
    var userId = store_1.useTypedSelector(function (state) { return state.session.userId; });
    var usersModifications = store_1.useTypedSelector(function (state) { return state.session.bandsModified; });
    var dispatch = react_redux_1.useDispatch();
    function getUserModificationToBand(thisBandId) {
        var modification = usersModifications.find(function (modification) { return modification.targetBandId === thisBandId; });
        if (modification)
            return modification.value;
        else
            return 0;
    }
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
    return (react_1.default.createElement(Table_1.default, { size: "sm", striped: true, bordered: true },
        react_1.default.createElement("tbody", null, appIsFetchingBands ? (react_1.default.createElement(react_1.default.Fragment, null, getEntryPlaceholders(defaultNumToDisplay))) : (react_1.default.createElement(react_1.default.Fragment, null, bands.map(function (band) { return (react_1.default.createElement("tr", { key: String(band._id) },
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
                    react_1.default.createElement(react_router_dom_1.Link, { to: create_user_profile_url_1.createUserProfileUrl(String(band.ownerId)) }, band.ownerName))))); }))))));
}
exports.default = BandTable;
function getEntryPlaceholders(numOfPlaceholders) {
    function BandTableEntryPlaceholder() {
        return (react_1.default.createElement("tr", null,
            react_1.default.createElement("td", null,
                react_1.default.createElement(BandModButtonGroup_1.PlaceholderBandModButtonGroup, null),
                " ",
                react_1.default.createElement(Spinner_1.default, { animation: "border", variant: "primary", size: "sm" }))));
    }
    var placeholders = [];
    for (var i = 0; i < numOfPlaceholders; i++) {
        placeholders.push(BandTableEntryPlaceholder());
    }
    return placeholders;
}


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
                react_1.default.createElement(Nav_1.default.Link, null, "Create Account")),
            react_1.default.createElement(react_router_bootstrap_1.LinkContainer, { to: "/about" },
                react_1.default.createElement(Nav_1.default.Link, null, "About"))))));
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

/***/ "PFPZ":
/*!****************************************************!*\
  !*** ./src/app/components/ControlledBandTable.tsx ***!
  \****************************************************/
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
exports.ControlledBandTable = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "q1tI"));
var Button_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Button */ "cWnB"));
var ButtonGroup_1 = __importDefault(__webpack_require__(/*! react-bootstrap/ButtonGroup */ "pJDg"));
var Card_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Card */ "6xyR"));
var ToggleButton_1 = __importDefault(__webpack_require__(/*! react-bootstrap/ToggleButton */ "hlKo"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var store_1 = __webpack_require__(/*! ../store */ "YZbJ");
var bands_slice_1 = __webpack_require__(/*! ../store/slices/bands-slice */ "Xep1");
var statuses_1 = __webpack_require__(/*! ../store/statuses */ "7Fo/");
var BandTable_1 = __importDefault(__webpack_require__(/*! ./BandTable */ "7SEt"));
var limit_sort_bands_1 = __webpack_require__(/*! ./utility/limit-sort-bands */ "vpfB");
function ControlledBandTable() {
    var bands = store_1.useTypedSelector(function (state) { return __spreadArrays(state.bands.items); });
    var _a = react_1.useState(statuses_1.BandSortTypes.MOST_RECENT), sortType = _a[0], setSortType = _a[1];
    var _b = react_1.useState(false), shouldFetchBands = _b[0], setShouldFetchBands = _b[1];
    var bandsPerFetch = 20;
    var _c = react_1.useState(bandsPerFetch), maxBandsDisplayed = _c[0], setMaxBandsDisplayed = _c[1];
    var dispatch = react_redux_1.useDispatch();
    function requestFetchBands() {
        dispatch(bands_slice_1.bandActions.requestFetchBands({
            maxBands: maxBandsDisplayed,
            sortBy: sortType,
        }));
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
            react_1.default.createElement(BandTable_1.default, { bands: desiredBands, defaultNumToDisplay: bandsPerFetch }),
            react_1.default.createElement(Button_1.default, { variant: "secondary", block: true, onClick: function () {
                    return setMaxBandsDisplayed(maxBandsDisplayed + bandsPerFetch);
                } }, "Show me more..."))));
}
exports.ControlledBandTable = ControlledBandTable;


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
var Container_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Container */ "7vrA"));
var Row_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Row */ "3Z9Z"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var user_profile_slice_1 = __webpack_require__(/*! ../store/slices/user-profile-slice */ "4tJo");
var BandTable_1 = __importDefault(__webpack_require__(/*! ./BandTable */ "7SEt"));
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
                                react_1.default.createElement(BandTable_1.default, { bands: profile.bands, defaultNumToDisplay: 10 })))))))) : (react_1.default.createElement("p", null, "Loading")))));
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

/***/ "f+pi":
/*!**************************************!*\
  !*** ./src/app/components/About.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.About = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "q1tI"));
var Container_1 = __importDefault(__webpack_require__(/*! react-bootstrap/esm/Container */ "7vrA"));
function About() {
    return (react_1.default.createElement(Container_1.default, { className: "mb-5" },
        react_1.default.createElement("h1", null, "About"),
        react_1.default.createElement("p", null, "You'd think that when musicians gather together to talk about their trade, they might be talking about their favorite records, sharing chord voicings, or talking about vintage equipment. You'd be wrong. They are all sitting around saying \"what about a band called\" followed by a horrible pun. I would know\u2014I have a degree in music, and this is the most prized skill of all."),
        react_1.default.createElement("p", null,
            "What About A Band Called was created by ",
            react_1.default.createElement("a", { href: "https://www.gusmurphy.computer/", target: "_blank", rel: "noopener noreferrer" }, "Gus Murphy"),
            ", and has earned such praise as \u201CI think it looks alright.\u201D and \u201CThat name is hard to say.\u201D If you're here, I'd love to know why, so please stop by ",
            react_1.default.createElement("a", { href: "https://www.gusmurphy.computer/", target: "_blank", rel: "noopener noreferrer" }, "my site"),
            " and find my contact info there!")));
}
exports.About = About;


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
var ControlledBandTable_1 = __webpack_require__(/*! ./ControlledBandTable */ "PFPZ");
var Landing_1 = __webpack_require__(/*! ./Landing */ "mUFl");
var Login_1 = __webpack_require__(/*! ./Login */ "mlUh");
var Navigation_1 = __webpack_require__(/*! ./Navigation */ "7hBq");
var NewUserForm_1 = __webpack_require__(/*! ./NewUserForm */ "w4Fm");
var UserProfile_1 = __webpack_require__(/*! ./UserProfile */ "PVq7");
var About_1 = __webpack_require__(/*! ./About */ "f+pi");
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
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/bands", component: ControlledBandTable_1.ControlledBandTable }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: Login_1.LoginForm }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/new-user", component: NewUserForm_1.NewUserForm }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/about", component: About_1.About }),
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
var ControlledBandTable_1 = __webpack_require__(/*! ./ControlledBandTable */ "PFPZ");
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
                    react_1.default.createElement(ControlledBandTable_1.ControlledBandTable, null)),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0JhbmRNb2RCdXR0b25Hcm91cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdGVCYW5kRm9ybUFsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zdGF0dXNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvQmFuZFRhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2JhbmQtY3JlYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0NyZWF0ZUJhbmRGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2xvZ291dC1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL3VzZXItYXV0aGVudGljYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvQ29udHJvbGxlZEJhbmRUYWJsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1VzZXJQcm9maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2ZldGNoLXVzZXItcmVjb3Jkcy1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvYmFuZC1zY29yZS1tb2RpZmljYXRpb24tc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BhdGhzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2FnYXMvY2hlY2stc2Vzc2lvbi1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL2JhbmRzLXNsaWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS9zYWdhcy91c2VyLWNyZWF0aW9uLXNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL0Fib3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2ZldGNoLXVzZXItcHJvZmlsZS1zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL01haW4udHN4Iiwid2VicGFjazovLy8od2VicGFjaykvaG90IHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9sb2ckIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9MYW5kaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2NyZWF0ZS11c2VyLXByb2ZpbGUtdXJsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvc3RvcmUvc2xpY2VzL3VzZXItcmVjb3Jkcy1zbGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVXNlclJlY29yZHNMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3N0b3JlL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy91dGlsaXR5L2xpbWl0LXNvcnQtYmFuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL05ld1VzZXJGb3JtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQStDOztBQUV4QyxnQkFBZ0Isb0VBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGM0MscUVBQTJEO0FBQzNELHNHQUF3RDtBQUN4RCxnSEFBa0U7QUFDbEUsNkRBS3dCO0FBRXhCLCtGQUErRjtBQUMvRixTQUFnQixrQkFBa0IsQ0FBQyxFQVFsQztRQVBDLGdCQUFnQix3QkFDaEIsVUFBVSxrQkFDVixZQUFZO0lBTU4sU0FBMEIsZ0JBQVEsQ0FBQyxZQUFZLENBQUMsRUFBL0MsUUFBUSxVQUFFLFdBQVcsUUFBMEIsQ0FBQztJQUN2RCxJQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFM0MsaUJBQVMsQ0FBQztRQUNSLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNqQiwrRUFBK0U7WUFDL0UsSUFBSSxVQUFVO2dCQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksVUFBVTtnQkFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsT0FBTyxDQUNMLDhCQUFDLDJCQUFpQixJQUNoQixJQUFJLEVBQUUsWUFBWSxFQUNsQixLQUFLLEVBQUUsUUFBUSxFQUNmLFFBQVEsRUFBRSxVQUFDLEdBQUcsSUFBSyxrQkFBVyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsRUFBM0IsQ0FBMkI7UUFFOUMsOEJBQUMsc0JBQVksSUFDWCxJQUFJLEVBQUUsZ0JBQWdCLEVBQ3RCLEtB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O0FBQ3JCLFNBQVM7QUFDVCxNQUFNO0FBQ04sSUFBSTtBQUVKLHNDQUFzQztBQUN0QyxxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCLDZCQUE2QiIsImZpbGUiOiJtYWluLjI4NWMzMjNhNDEyYzQ1ZWE5ZjhjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Ub2dnbGVCdXR0b25cIjtcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbkdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVG9nZ2xlQnV0dG9uR3JvdXBcIjtcclxuaW1wb3J0IHtcclxuICBCc0NhcmV0RG93bixcclxuICBCc0NhcmV0RG93bkZpbGwsXHJcbiAgQnNDYXJldFVwLFxyXG4gIEJzQ2FyZXRVcEZpbGwsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG4vLyBUT0RPOiBMb2dnaW5nIG91dCB3aWxsIHN0aWxsIHNob3cgdGhlIEJzQ2FycmV0cyBhcyAnZmlsbGVkJyBpZiB0aGUgdXNlciBtb2RpZmllZCB0aG9zZSBiYW5kc1xyXG5leHBvcnQgZnVuY3Rpb24gQmFuZE1vZEJ1dHRvbkdyb3VwKHtcclxuICB1c2VySXNBdXRob3JpemVkLFxyXG4gIG1vZGlmeUJhbmQsXHJcbiAgbW9kUGVyZm9ybWVkLFxyXG59OiB7XHJcbiAgdXNlcklzQXV0aG9yaXplZDogYm9vbGVhbjtcclxuICBtb2RpZnlCYW5kPzogKG1vZFZhbHVlOiBudW1iZXIsIHVuZG9WYWx1ZT86IG51bWJlcikgPT4gdm9pZDtcclxuICBtb2RQZXJmb3JtZWQ6IG51bWJlcjtcclxufSk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCBbbW9kVmFsdWUsIHNldE1vZFZhbHVlXSA9IHVzZVN0YXRlKG1vZFBlcmZvcm1lZCk7XHJcbiAgY29uc3QgcHJldk1vZFZhbHVlID0gdXNlUHJldmlvdXMobW9kVmFsdWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG1vZFZhbHVlID09IDApIHtcclxuICAgICAgLy8gVE9ETzogVGhpcyBhY3Qgb2YgY2hlY2tpbmcgaWYgbW9kaWZ5QmFuZCBleGlzdHMgc2VlbXMgYmFkLCBjYW4gd2UgZG8gYmV0dGVyP1xyXG4gICAgICBpZiAobW9kaWZ5QmFuZCkgbW9kaWZ5QmFuZCgwLCBwcmV2TW9kVmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1vZGlmeUJhbmQpIG1vZGlmeUJhbmQobW9kVmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIFttb2RWYWx1ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRvZ2dsZUJ1dHRvbkdyb3VwXHJcbiAgICAgIG5hbWU9e1wibW9kQnV0dG9uc1wifVxyXG4gICAgICB2YWx1ZT17bW9kVmFsdWV9XHJcbiAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRNb2RWYWx1ZShtb2RWYWx1ZSArIHZhbCl9XHJcbiAgICA+XHJcbiAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICBuYW1lPXtcIm5lZ2F0aXZlQnV0dG9uXCJ9XHJcbiAgICAgICAgdmFsdWU9ey0xfVxyXG4gICAgICAgIGRpc2FibGVkPXshdXNlcklzQXV0aG9yaXplZH1cclxuICAgICAgICBjaGVja2VkPXttb2RQZXJmb3JtZWQgPT0gLTF9XHJcbiAgICAgID5cclxuICAgICAgICB7bW9kVmFsdWUgPT0gLTEgPyA8QnNDYXJldERvd25GaWxsIC8+IDogPEJzQ2FyZXREb3duIC8+fVxyXG4gICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgIG5hbWU9e1wicG9zaXRpdmVCdXR0b25cIn1cclxuICAgICAgICB2YWx1ZT17MX1cclxuICAgICAgICBkaXNhYmxlZD17IXVzZXJJc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgY2hlY2tlZD17bW9kUGVyZm9ybWVkID09IDF9XHJcbiAgICAgID5cclxuICAgICAgICB7bW9kVmFsdWUgPT0gMSA/IDxCc0NhcmV0VXBGaWxsIC8+IDogPEJzQ2FyZXRVcCAvPn1cclxuICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlKSB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGxhY2Vob2xkZXJCYW5kTW9kQnV0dG9uR3JvdXAoKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VG9nZ2xlQnV0dG9uR3JvdXAgbmFtZT17XCJwbGFjZUhvbGRlck1vZEJ1dHRvbnNcIn0+XHJcbiAgICAgIDxUb2dnbGVCdXR0b24gZGlzYWJsZWQ9e3RydWV9IHZhbHVlPXsxfT5cclxuICAgICAgICA8QnNDYXJldERvd24gLz5cclxuICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgIDxUb2dnbGVCdXR0b24gZGlzYWJsZWQ9e3RydWV9IHZhbHVlPXsyfT5cclxuICAgICAgICA8QnNDYXJldFVwIC8+XHJcbiAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVGZXRjaFN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyUHJvZmlsZVR5cGUgPSB7XHJcbiAgaWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRvdGFsU2NvcmU6IG51bWJlcjtcclxuICBuYW1lc0NvbnRyaWJ1dGVkOiBudW1iZXI7XHJcbiAgYXZlcmFnZVNjb3JlOiBudW1iZXI7XHJcbiAgYmFuZHM6IEJhbmRDbGFzc1tdO1xyXG59O1xyXG5cclxudHlwZSBVc2VyUHJvZmlsZVNsaWNlU3RhdGUgPSB7XHJcbiAgZmV0Y2hTdGF0dXM6IFByb2ZpbGVGZXRjaFN0YXR1c2VzO1xyXG4gIHByb2ZpbGU/OiBVc2VyUHJvZmlsZVR5cGU7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJQcm9maWxlU2xpY2VTdGF0ZSA9IHtcclxuICBmZXRjaFN0YXR1czogUHJvZmlsZUZldGNoU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICBwcm9maWxlOiB1bmRlZmluZWQsXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUHJvZmlsZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclByb2ZpbGVcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHJlcXVlc3RGZXRjaFVzZXJQcm9maWxlKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICB0YXJnZXRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5mZXRjaFN0YXR1cyA9IFByb2ZpbGVGZXRjaFN0YXR1c2VzLkFUVEVNUFRJTkc7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyUHJvZmlsZVN1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBwcm9maWxlOiBVc2VyUHJvZmlsZVR5cGUgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5mZXRjaFN0YXR1cyA9IFByb2ZpbGVGZXRjaFN0YXR1c2VzLlNVQ0NFU1M7XHJcbiAgICAgIHN0YXRlLnByb2ZpbGUgPSBhY3Rpb24ucGF5bG9hZC5wcm9maWxlO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclByb2ZpbGVGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmZldGNoU3RhdHVzID0gUHJvZmlsZUZldGNoU3RhdHVzZXMuRkFJTFVSRTtcclxuICAgICAgc3RhdGUucHJvZmlsZSA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclByb2ZpbGVBY3Rpb25zID0gdXNlclByb2ZpbGVTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCB1c2VyUHJvZmlsZVNsaWNlLnJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9BbGVydFwiO1xyXG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckFsZXJ0KCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPlVoIG9oLi4uPC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5cclxuICAgICAgICBTb21ldGhpbmcgd2VudCB3cm9uZyEgV2hhdCBkaWQgeW91IGRvIT8gRG8geW91IGhhdmUgYW55IGlkZWEgaG93IG11Y2ggSVxyXG4gICAgICAgIHdvcmtlZCB0byBnZXQgdGhpcyBwbGFjZSBjbGVhbiBhbmQgdGhlbiB5b3Ugc2hvdyB1cCBhbmQgbWVzcyB0aGUgd2hvbGVcclxuICAgICAgICB0aGluZyB1cD8gTm8gcmVzcGVjdC4uLlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0FsZXJ0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOb05hbWVBbGVydCgpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwid2FybmluZ1wiPlxyXG4gICAgICA8QWxlcnQuSGVhZGluZz5UaGlzIE1GIHNhaWQgJmxkcXVvOyAmcmRxdW87PC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5cclxuICAgICAgICBXaG8gYXJlIHlvdSwgSm9obiBDYWdlPyDwn5it8J+YrfCfmK0gSnVzdCBraWRkaW5nLCBkb24mYXBvczt0IGtub3cgd2hvIHRoYXRcclxuICAgICAgICBpcy5cclxuICAgICAgPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFuZEV4aXN0c0FsZXJ0KCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0IHZhcmlhbnQ9XCJ3YXJuaW5nXCI+XHJcbiAgICAgIDxBbGVydC5IZWFkaW5nPlNvbWVib2R5IGFscmVhZHkgdGhvdWdodCBvZiB0aGF0ITwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgR29pbmcgdG8gaGF2ZSB0byB0cnkgaGFyZGVyLiBNYXliZSByZWFkIGEgdmVyeSBjb21wbGljYXRlZCBib29rIGFuZCB0aGVuXHJcbiAgICAgICAgdGhpbmsgb2Ygc29tZSByZWZlcmVuY2UgdG8gdGhhdC5cclxuICAgICAgPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlck5vdExvZ2dlZEluQWxlcnQoKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWxlcnQgdmFyaWFudD1cIndhcm5pbmdcIj5cclxuICAgICAgPEFsZXJ0LkhlYWRpbmc+WW91JmFwb3M7dmUgZ290dGEgYmUgc2lnbmVkIGluITwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgV2UgZG9uJmFwb3M7dCBsZXQganVzdCBhbnlvbmUgaW4gaGVyZS4gWW91IGNhbntcIiBcIn1cclxuICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9uZXctdXNlclwiPlxyXG4gICAgICAgICAgPEFsZXJ0Lkxpbms+bWFrZSBhbiBhY2NvdW50IGhlcmU8L0FsZXJ0Lkxpbms+XHJcbiAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICwgdGhvdWdoLCBpZiB5b3Ugd2FudC5cclxuICAgICAgPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFuZENyZWF0ZWRBbGVydChuYW1lOiBzdHJpbmcpOiBKU1guRWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbGVydCB2YXJpYW50PVwic3VjY2Vzc1wiPlxyXG4gICAgICA8QWxlcnQuSGVhZGluZz4mbGRxdW87e25hbWV9JnJkcXVvOyBzdWJtaXR0ZWQhPC9BbGVydC5IZWFkaW5nPlxyXG4gICAgICA8cD5Ob3cgdGhhdCZhcG9zO3MgZnVubnkuPC9wPlxyXG4gICAgPC9BbGVydD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZCB9IGZyb20gXCIuLi8uLi9zdG9yZS9zbGljZXMvdXNlci1yZWNvcmRzLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydEFuZExpbWl0VXNlclJlY29yZHMoXHJcbiAgcmVjb3JkczogVXNlclJlY29yZFtdLFxyXG4gIHNvcnRCeTogVXNlclJlY29yZFNvcnRUeXBlcyxcclxuICBsaW1pdDogbnVtYmVyXHJcbik6IFVzZXJSZWNvcmRbXSB7XHJcbiAgbGV0IGZpbHRlcmVkUmVjb3JkcyA9IFsuLi5yZWNvcmRzXTtcclxuXHJcbiAgc3dpdGNoIChzb3J0QnkpIHtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX0FWRVJBR0VfU0NPUkU6XHJcbiAgICAgIGZpbHRlcmVkUmVjb3Jkcy5zb3J0KChhLCBiKSA9PiBiLmF2ZXJhZ2VTY29yZSAtIGEuYXZlcmFnZVNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9TQ09SRTpcclxuICAgICAgZmlsdGVyZWRSZWNvcmRzLnNvcnQoKGEsIGIpID0+IGIudG90YWxTY29yZSAtIGEudG90YWxTY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLk1PU1RfTkFNRVNfQ09OVFJJQlVURUQ6XHJcbiAgICAgIGZpbHRlcmVkUmVjb3Jkcy5zb3J0KChhLCBiKSA9PiBiLm5hbWVzQ29udHJpYnV0ZWQgLSBhLm5hbWVzQ29udHJpYnV0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyZWRSZWNvcmRzID0gZmlsdGVyZWRSZWNvcmRzLnNsaWNlKDAsIGxpbWl0KTtcclxuICByZXR1cm4gZmlsdGVyZWRSZWNvcmRzO1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFVzZXJSZWNvcmRTb3J0VHlwZXMge1xyXG4gIEhJR0hFU1RfU0NPUkUsXHJcbiAgSElHSEVTVF9BVkVSQUdFX1NDT1JFLFxyXG4gIE1PU1RfTkFNRVNfQ09OVFJJQlVURURcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFuZENyZWF0aW9uU3RhdHVzZXMge1xyXG4gIENSRUFUSU5HLFxyXG4gIENSRUFURUQsXHJcbiAgRVJST1IsXHJcbiAgQkFORF9FWElTVFMsXHJcbiAgTk9UX1RSWUlORyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFuZFNvcnRUeXBlcyB7XHJcbiAgQkVTVCxcclxuICBXT1JTVCxcclxuICBNT1NUX1JFQ0VOVCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMge1xyXG4gIEFUVEVNUFRJTkcsXHJcbiAgU1VDQ0VTUyxcclxuICBGQUlMVVJFLFxyXG4gIE5PVF9UUllJTkcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByb2ZpbGVGZXRjaFN0YXR1c2VzIHtcclxuICBBVFRFTVBUSU5HLFxyXG4gIFNVQ0NFU1MsXHJcbiAgRkFJTFVSRSxcclxuICBOT1RfVFJZSU5HXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMge1xyXG4gIEFVVEhFTlRJQ0FUSU5HLFxyXG4gIEFVVEhFTlRJQ0FURUQsXHJcbiAgTk9UX0FVVEhFTlRJQ0FURUQsXHJcbiAgTk9UX1RSWUlORyxcclxuICBTRVJWRVJfRVJST1IsXHJcbiAgVVNFUk5BTUVfTk9UX0ZPVU5ELFxyXG4gIElOVkFMSURfUEFTU1dPUkQsXHJcbiAgTE9HR0lOR19PVVQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFVzZXJDcmVhdGlvblN0YXR1c2VzIHtcclxuICBQUk9DRVNTSU5HLFxyXG4gIFBBU1NXT1JEU19ET05UX01BVENILFxyXG4gIFVTRVJOQU1FX1RBS0VOLFxyXG4gIE5PVF9UUllJTkcsXHJcbiAgU0VSVkVSX0VSUk9SLFxyXG4gIFNVQ0NFU1MsXHJcbiAgRU1QVFlfRklFTERTLFxyXG4gIElOVkFMSURfRU1BSUwsXHJcbiAgRU1BSUxfVEFLRU4sXHJcbn1cclxuIiwiaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCYWRnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9CYWRnZVwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9TcGlubmVyXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9UYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyB1c2VUeXBlZFNlbGVjdG9yIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7XHJcbiAgQmFuZE1vZEJ1dHRvbkdyb3VwLFxyXG4gIFBsYWNlaG9sZGVyQmFuZE1vZEJ1dHRvbkdyb3VwXHJcbn0gZnJvbSBcIi4vQmFuZE1vZEJ1dHRvbkdyb3VwXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4vdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbmRUYWJsZSh7XHJcbiAgYmFuZHMsXHJcbiAgZGVmYXVsdE51bVRvRGlzcGxheSxcclxufToge1xyXG4gIGJhbmRzOiBCYW5kQ2xhc3NbXTtcclxuICBkZWZhdWx0TnVtVG9EaXNwbGF5OiBudW1iZXI7XHJcbn0pOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgYXBwSXNGZXRjaGluZ0JhbmRzID0gdXNlVHlwZWRTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUuYmFuZHMucGVuZGluZ0ZldGNoZXMgPiAwXHJcbiAgKTtcclxuICBjb25zdCB1c2VySXNBdXRoZW50aWNhdGVkID0gdXNlVHlwZWRTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT5cclxuICAgICAgc3RhdGUuc2Vzc2lvbi5hdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURURcclxuICApO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHVzZVR5cGVkU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uLnVzZXJJZCk7XHJcbiAgY29uc3QgdXNlcnNNb2RpZmljYXRpb25zID0gdXNlVHlwZWRTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUuc2Vzc2lvbi5iYW5kc01vZGlmaWVkXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBmdW5jdGlvbiBnZXRVc2VyTW9kaWZpY2F0aW9uVG9CYW5kKHRoaXNCYW5kSWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQpIHtcclxuICAgIGNvbnN0IG1vZGlmaWNhdGlvbiA9IHVzZXJzTW9kaWZpY2F0aW9ucy5maW5kKFxyXG4gICAgICAobW9kaWZpY2F0aW9uKSA9PiBtb2RpZmljYXRpb24udGFyZ2V0QmFuZElkID09PSB0aGlzQmFuZElkXHJcbiAgICApO1xyXG4gICAgaWYgKG1vZGlmaWNhdGlvbikgcmV0dXJuIG1vZGlmaWNhdGlvbi52YWx1ZTtcclxuICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRQb2ludHNUbyhcclxuICAgIHRhcmdldEJhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZCxcclxuICAgIG1vZGlmaWNhdGlvblZhbHVlOiBudW1iZXIsXHJcbiAgICBtb2RpZnlpbmdVc2VySWQ/OiBNb25nb29zZVR5cGVzLk9iamVjdElkLFxyXG4gICAgdW5kb1ZhbHVlPzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBpZiAobW9kaWZ5aW5nVXNlcklkKSB7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RNb2RpZnlCYW5kU2NvcmUoe1xyXG4gICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgbW9kaWZ5aW5nVXNlcklkLFxyXG4gICAgICAgICAgbW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICB1bmRvVmFsdWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGUgc2l6ZT1cInNtXCIgc3RyaXBlZCBib3JkZXJlZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIHthcHBJc0ZldGNoaW5nQmFuZHMgPyAoXHJcbiAgICAgICAgICA8PntnZXRFbnRyeVBsYWNlaG9sZGVycyhkZWZhdWx0TnVtVG9EaXNwbGF5KX08Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge2JhbmRzLm1hcCgoYmFuZCkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e1N0cmluZyhiYW5kLl9pZCl9PlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICA8QmFuZE1vZEJ1dHRvbkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklzQXV0aG9yaXplZD17dXNlcklzQXV0aGVudGljYXRlZH1cclxuICAgICAgICAgICAgICAgICAgICBtb2RQZXJmb3JtZWQ9e2dldFVzZXJNb2RpZmljYXRpb25Ub0JhbmQoYmFuZC5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmeUJhbmQ9eyhtb2RWYWx1ZSwgdW5kb1ZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWRkUG9pbnRzVG8oYmFuZC5faWQsIG1vZFZhbHVlLCB1c2VySWQsIHVuZG9WYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntiYW5kLnNjb3JlfTwvQmFkZ2U+IHtiYW5kLm5hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiZm9udC13ZWlnaHQtbGlnaHRlclwifT5cclxuICAgICAgICAgICAgICAgICAgICBmcm9te1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtjcmVhdGVVc2VyUHJvZmlsZVVybChTdHJpbmcoYmFuZC5vd25lcklkKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2JhbmQub3duZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L1RhYmxlPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVudHJ5UGxhY2Vob2xkZXJzKG51bU9mUGxhY2Vob2xkZXJzOiBudW1iZXIpOiBKU1guRWxlbWVudFtdIHtcclxuICBmdW5jdGlvbiBCYW5kVGFibGVFbnRyeVBsYWNlaG9sZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8UGxhY2Vob2xkZXJCYW5kTW9kQnV0dG9uR3JvdXAgLz57XCIgXCJ9XHJcbiAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJzbVwiIC8+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZWhvbGRlcnM6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU9mUGxhY2Vob2xkZXJzOyBpKyspIHtcclxuICAgIHBsYWNlaG9sZGVycy5wdXNoKEJhbmRUYWJsZUVudHJ5UGxhY2Vob2xkZXIoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBwbGFjZWhvbGRlcnM7XHJcbn0iLCJpbXBvcnQgeyB0YWtlLCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgTmV3QmFuZFJlcXVlc3RCb2R5IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9yb3V0ZS1oYW5kbGVycy9iYW5kc1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IEJhbmRDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbW9kZWxzL2JhbmQtbW9kZWxcIjtcclxuaW1wb3J0IHsgQmFuZENyZWF0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogYmFuZENyZWF0aW9uU2FnYSgpIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKGJhbmRBY3Rpb25zLnJlcXVlc3RDcmVhdGVCYW5kLnR5cGUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJTYWdhIHBheWxvYWQ6IFwiLCBwYXlsb2FkKTtcclxuICAgIGNvbnN0IHsgY3JlYXRpbmdVc2VySWQsIGJhbmROYW1lLCBjcmVhdGluZ1VzZXJuYW1lIH0gPSBwYXlsb2FkO1xyXG4gICAgLy8gbGV0IG5ld0JhbmQgPSB7XHJcbiAgICAvLyAgIGNyZWF0aW5nVXNlcklkLFxyXG4gICAgLy8gICBiYW5kTmFtZSxcclxuICAgIC8vIH07XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keTogTmV3QmFuZFJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBiYW5kTmFtZSxcclxuICAgICAgb3duZXJJZDogY3JlYXRpbmdVc2VySWQsXHJcbiAgICAgIG93bmVyTmFtZTogY3JlYXRpbmdVc2VybmFtZSxcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkhFcmUhXCIpXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5wb3N0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLm5ld0JhbmQsXHJcbiAgICAgICAgcmVxdWVzdEJvZHlcclxuICAgICAgKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJyZXNwb25zZSBpbiBiYW5kY3JlYXRpb25zYWdhOiBcIiwgcmVzcG9uc2UpXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3cgaW0gaGVyZSFcIilcclxuICAgICAgICBjb25zdCBuZXdCYW5kOiBCYW5kQ2xhc3MgPSByZXNwb25zZS5kYXRhLm5ld0JhbmQ7XHJcbiAgICAgICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmNyZWF0ZUJhbmRTdWNjZXNzKG5ld0JhbmQpKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBsZXQgeyBfaWQsIGJhbmROYW1lLCBjcmVhdGluZ1VzZXJJZCwgc2NvcmUgfSA9IG5ld0JhbmQ7XHJcbiAgICAgIC8vIGxldCBuZXdCYW5kOiBCYW5kQ2xhc3MgPSB7XHJcbiAgICAgIC8vICAgbmFtZTogYmFuZE5hbWUsXHJcbiAgICAgIC8vICAgb3duZXJOYW1lOiBjcmVhdGluZ1VzZXJuYW1lLFxyXG4gICAgICAvLyAgIG93bmVySWQ6IGNyZWF0aW5nVXNlcklkLFxyXG4gICAgICAvLyAgIHNjb3JlOiAwLFxyXG4gICAgICAvLyAgIGNyZWF0ZWRPbixcclxuICAgICAgLy8gICBfaWQ6IG5ld0JhbmRJZCxcclxuICAgICAgLy8gfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHJlYXNvbjogQmFuZENyZWF0aW9uU3RhdHVzZXMgPSBlcnJvci5yZXNwb25zZS5kYXRhLnJlYXNvbjtcclxuICAgICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmNyZWF0ZUJhbmRGYWlsdXJlKHJlYXNvbikpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcywgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgTGlua0NvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHsgYXV0aGVudGljYXRpb25TdGF0dXMsIHVzZXJuYW1lIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICBkaXNwYXRjaChzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0TG9nb3V0KCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tTZXNzaW9uKCkge1xyXG4gICAgZGlzcGF0Y2goc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENoZWNrU2Vzc2lvbigpKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aGVudGljYXRpb25TdGF0dXMgPT0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HKVxyXG4gICAgICBjaGVja1Nlc3Npb24oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgPExpbmtDb250YWluZXIgdG89XCIvXCI+XHJcbiAgICAgICAgPE5hdmJhci5CcmFuZD53YWJhYmM/PC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAge2F1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPE5hdi5JdGVtPlNpZ25lZCBpbiBhcyB7dXNlcm5hbWV9PC9OYXYuSXRlbT5cclxuICAgICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX0+TG9nb3V0PC9OYXYuTGluaz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgPE5hdi5MaW5rPkxvZ2luPC9OYXYuTGluaz5cclxuICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cclxuICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL25ldy11c2VyXCI+XHJcbiAgICAgICAgICAgIDxOYXYuTGluaz5DcmVhdGUgQWNjb3VudDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICA8L0xpbmtDb250YWluZXI+XHJcbiAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICA8TmF2Lkxpbms+QWJvdXQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9OYXZiYXI+XHJcbiAgKTtcclxufSIsIi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBEaXNwYXRjaCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzLCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IEJhbmRDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xyXG5pbXBvcnQge1xyXG4gIEJhbmRDcmVhdGVkQWxlcnQsXHJcbiAgQmFuZEV4aXN0c0FsZXJ0LFxyXG4gIEVycm9yQWxlcnQsXHJcbiAgTm9OYW1lQWxlcnQsXHJcbiAgVXNlck5vdExvZ2dlZEluQWxlcnQsXHJcbn0gZnJvbSBcIi4vQ3JlYXRlQmFuZEZvcm1BbGVydHNcIjtcclxuXHJcbmVudW0gQ3JlYXRpb25BbGVydCB7XHJcbiAgRXJyb3IsXHJcbiAgTm9OYW1lLFxyXG4gIEJhbmRFeGlzdHMsXHJcbiAgQmFuZENyZWF0ZWQsXHJcbiAgTm90TG9nZ2VkSW4sXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVCYW5kRm9ybSgpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3Qge1xyXG4gICAgc2Vzc2lvbjogeyBhdXRoZW50aWNhdGlvblN0YXR1cywgdXNlcklkLCB1c2VybmFtZSB9LFxyXG4gICAgYmFuZHM6IHsgY3JlYXRpb25TdGF0dXM6IGJhbmRDcmVhdGlvblN0YXR1cyB9LFxyXG4gIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUpO1xyXG4gIGNvbnN0IFtiYW5kTmFtZSwgc2V0QmFuZE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NyZWF0ZWROYW1lLCBzZXRDcmVhdGVkTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlPENyZWF0aW9uQWxlcnQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN3aXRjaCAoYmFuZENyZWF0aW9uU3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgQmFuZENyZWF0aW9uU3RhdHVzZXMuQkFORF9FWElTVFM6XHJcbiAgICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5CYW5kRXhpc3RzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhc2UgQmFuZENyZWF0aW9uU3RhdHVzZXMuRVJST1I6XHJcbiAgICAgICAgc2V0QWxlcnQoQ3JlYXRpb25BbGVydC5FcnJvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjYXNlIEJhbmRDcmVhdGlvblN0YXR1c2VzLkNSRUFURUQ6XHJcbiAgICAgICAgc2V0Q3JlYXRlZE5hbWUoYmFuZE5hbWUpO1xyXG4gICAgICAgIHNldEJhbmROYW1lKFwiXCIpO1xyXG4gICAgICAgIHNldEFsZXJ0KENyZWF0aW9uQWxlcnQuQmFuZENyZWF0ZWQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9LCBbYmFuZENyZWF0aW9uU3RhdHVzXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIGlmIChhdXRoZW50aWNhdGlvblN0YXR1cyA9PSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQpIHtcclxuICAgICAgaWYgKGJhbmROYW1lID09IFwiXCIpIHtcclxuICAgICAgICBzZXRBbGVydChDcmVhdGlvbkFsZXJ0Lk5vTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICBiYW5kQWN0aW9ucy5yZXF1ZXN0Q3JlYXRlQmFuZCh7XHJcbiAgICAgICAgICAgIGNyZWF0aW5nVXNlcklkOiB1c2VySWQhLFxyXG4gICAgICAgICAgICBiYW5kTmFtZSxcclxuICAgICAgICAgICAgY3JlYXRpbmdVc2VybmFtZTogdXNlcm5hbWUhLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRBbGVydChDcmVhdGlvbkFsZXJ0Lk5vdExvZ2dlZEluKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIERpc3BsYXlBbGVydCh7XHJcbiAgICBhbGVydCxcclxuICB9OiB7XHJcbiAgICBhbGVydDogQ3JlYXRpb25BbGVydCB8IHVuZGVmaW5lZDtcclxuICB9KTogSlNYLkVsZW1lbnQgfCBudWxsIHtcclxuICAgIHN3aXRjaCAoYWxlcnQpIHtcclxuICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIGNhc2UgQ3JlYXRpb25BbGVydC5CYW5kQ3JlYXRlZDpcclxuICAgICAgICByZXR1cm4gQmFuZENyZWF0ZWRBbGVydChjcmVhdGVkTmFtZSk7XHJcbiAgICAgIGNhc2UgQ3JlYXRpb25BbGVydC5CYW5kRXhpc3RzOlxyXG4gICAgICAgIHJldHVybiBCYW5kRXhpc3RzQWxlcnQoKTtcclxuICAgICAgY2FzZSBDcmVhdGlvbkFsZXJ0LkVycm9yOlxyXG4gICAgICAgIHJldHVybiBFcnJvckFsZXJ0KCk7XHJcbiAgICAgIGNhc2UgQ3JlYXRpb25BbGVydC5Ob05hbWU6XHJcbiAgICAgICAgcmV0dXJuIE5vTmFtZUFsZXJ0KCk7XHJcbiAgICAgIGNhc2UgQ3JlYXRpb25BbGVydC5Ob3RMb2dnZWRJbjpcclxuICAgICAgICByZXR1cm4gVXNlck5vdExvZ2dlZEluQWxlcnQoKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU5hbWVDaGFuZ2UoZSkge1xyXG4gICAgc2V0QmFuZE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1iLTNcIn0+XHJcbiAgICAgIDxJbnB1dEdyb3VwIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFib3V0IGEgYmFuZCBjYWxsZWQuLi5cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVOYW1lQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgdmFsdWU9e2JhbmROYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAge2JhbmRDcmVhdGlvblN0YXR1cyA9PSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVElORyA/IChcclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgIDxTcGlubmVyXHJcbiAgICAgICAgICAgICAgICBhcz1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwiYm9yZGVyXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KCl9PlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICA8RGlzcGxheUFsZXJ0IGFsZXJ0PXthbGVydH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogbG9nb3V0U2FnYSgpIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgeWllbGQgdGFrZShzZXNzaW9uQWN0aW9ucy5yZXF1ZXN0TG9nb3V0LnR5cGUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgeWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5kZWxldGUsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuc2Vzc2lvbkVuZHBvaW50LCB7d2l0aENyZWRlbnRpYWxzOiB0cnVlfVxyXG4gICAgICApO1xyXG4gICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMubG9nb3V0U3VjY2VzcygpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMubG9nb3V0RmFpbHVyZSgpKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFjdGlvbkNoYW5uZWwsIGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBiYW5kQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB3YXRjaEZldGNoQmFuZHNTYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgY29uc3QgZmV0Y2hCYW5kc0NoYW5uZWwgPSB5aWVsZCBhY3Rpb25DaGFubmVsKFxyXG4gICAgYmFuZEFjdGlvbnMucmVxdWVzdEZldGNoQmFuZHMudHlwZVxyXG4gICk7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShmZXRjaEJhbmRzQ2hhbm5lbCk7XHJcbiAgICBjb25zdCB7IG1heEJhbmRzLCBzb3J0QnkgfSA9IHBheWxvYWQ7XHJcbiAgICB5aWVsZCBjYWxsKGZldGNoQmFuZHMsIG1heEJhbmRzLCBzb3J0QnkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaEJhbmRzKG1heEJhbmRzLCBzb3J0QnkpIHtcclxuICBsZXQgcmVzcG9uc2U7XHJcbiAgdHJ5IHtcclxuICAgIHJlc3BvbnNlID0geWllbGQgY2FsbChheGlvcy5wb3N0LCBwYXRocy5zZXJ2ZXJVcmwgKyBwYXRocy5wb3N0QmFuZHMsIHtcclxuICAgICAgbWF4QmFuZHMsXHJcbiAgICAgIHNvcnRCeSxcclxuICAgIH0pO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmZldGNoQmFuZHNTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KGJhbmRBY3Rpb25zLmZldGNoQmFuZHNGYWlsdXJlKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB1c2VyQXV0aGVudGljYXRpb25TYWdhKCkge1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdEF1dGhlbnRpY2F0ZVVzZXIudHlwZSk7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcGF5bG9hZDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5wb3N0LFxyXG4gICAgICAgIHBhdGhzLnNlcnZlclVybCArIHBhdGhzLmF1dGhlbnRpY2F0ZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB7IHVzZXJJZCwgYmFuZHNNb2RpZmllZCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJiYW5kc01vZGlmaWVkIGluIHVzZXJBdXRoZW50aWNhdGlvblNhZ2E6IFwiLCBiYW5kc01vZGlmaWVkKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5hdXRoZW50aWNhdGVVc2VyU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGJhbmRzTW9kaWZpZWQsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgc2Vzc2lvbkFjdGlvbnMuYXV0aGVudGljYXRlVXNlckZhaWx1cmUoe1xyXG4gICAgICAgICAgICByZWFzb246IGVyci5yZXNwb25zZS5kYXRhLnJlYXNvbixcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgU3ludGhldGljRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25Hcm91cFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1RvZ2dsZUJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VUeXBlZFNlbGVjdG9yIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgeyBCYW5kU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCBCYW5kVGFibGUgZnJvbSBcIi4vQmFuZFRhYmxlXCI7XHJcbmltcG9ydCB7IHNvcnRBbmRMaW1pdEJhbmRzIH0gZnJvbSBcIi4vdXRpbGl0eS9saW1pdC1zb3J0LWJhbmRzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29udHJvbGxlZEJhbmRUYWJsZSgpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgYmFuZHMgPSB1c2VUeXBlZFNlbGVjdG9yKChzdGF0ZSkgPT4gWy4uLnN0YXRlLmJhbmRzLml0ZW1zXSk7XHJcblxyXG4gIGNvbnN0IFtzb3J0VHlwZSwgc2V0U29ydFR5cGVdID0gdXNlU3RhdGUoQmFuZFNvcnRUeXBlcy5NT1NUX1JFQ0VOVCk7XHJcbiAgY29uc3QgW3Nob3VsZEZldGNoQmFuZHMsIHNldFNob3VsZEZldGNoQmFuZHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGJhbmRzUGVyRmV0Y2ggPSAyMDtcclxuICBjb25zdCBbbWF4QmFuZHNEaXNwbGF5ZWQsIHNldE1heEJhbmRzRGlzcGxheWVkXSA9IHVzZVN0YXRlKGJhbmRzUGVyRmV0Y2gpO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlcXVlc3RGZXRjaEJhbmRzKCkge1xyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIGJhbmRBY3Rpb25zLnJlcXVlc3RGZXRjaEJhbmRzKHtcclxuICAgICAgICBtYXhCYW5kczogbWF4QmFuZHNEaXNwbGF5ZWQsXHJcbiAgICAgICAgc29ydEJ5OiBzb3J0VHlwZSxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVxdWVzdEZldGNoQmFuZHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXF1ZXN0RmV0Y2hCYW5kcygpO1xyXG4gICAgc2V0U2hvdWxkRmV0Y2hCYW5kcyhmYWxzZSk7XHJcbiAgfSwgW21heEJhbmRzRGlzcGxheWVkLCBzaG91bGRGZXRjaEJhbmRzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRNYXhCYW5kc0Rpc3BsYXllZChiYW5kc1BlckZldGNoKTtcclxuICAgIHNldFNob3VsZEZldGNoQmFuZHModHJ1ZSk7XHJcbiAgfSwgW3NvcnRUeXBlXSk7XHJcblxyXG4gIGNvbnN0IGRlc2lyZWRCYW5kcyA9IHNvcnRBbmRMaW1pdEJhbmRzKGJhbmRzLCBzb3J0VHlwZSwgbWF4QmFuZHNEaXNwbGF5ZWQpO1xyXG5cclxuICBjb25zdCBzb3J0UmFkaW9zID0gW1xyXG4gICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5CRVNULCBuYW1lOiBcIkJlc3RcIiB9LFxyXG4gICAgeyB2YWx1ZTogQmFuZFNvcnRUeXBlcy5XT1JTVCwgbmFtZTogXCJXb3JzdFwiIH0sXHJcbiAgICB7IHZhbHVlOiBCYW5kU29ydFR5cGVzLk1PU1RfUkVDRU5ULCBuYW1lOiBcIk1vc3QgUmVjZW50XCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICA8QnV0dG9uR3JvdXAgdG9nZ2xlPlxyXG4gICAgICAgICAge3NvcnRSYWRpb3MubWFwKChyYWRpbywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtyYWRpby52YWx1ZX1cclxuICAgICAgICAgICAgICBuYW1lPVwic29ydFJhZGlvXCJcclxuICAgICAgICAgICAgICBjaGVja2VkPXtyYWRpby52YWx1ZSA9PT0gc29ydFR5cGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBTeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldCBhcyB0eXBlb2YgZS5jdXJyZW50VGFyZ2V0ICYge1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRUeXBlQXNOdW1iZXI6IG51bWJlciA9IHBhcnNlSW50KGN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U29ydFR5cGUoc29ydFR5cGVBc051bWJlcik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtyYWRpby5uYW1lfVxyXG4gICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgPEJhbmRUYWJsZSBiYW5kcz17ZGVzaXJlZEJhbmRzfSBkZWZhdWx0TnVtVG9EaXNwbGF5PXtiYW5kc1BlckZldGNofSAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgYmxvY2tcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIHNldE1heEJhbmRzRGlzcGxheWVkKG1heEJhbmRzRGlzcGxheWVkICsgYmFuZHNQZXJGZXRjaClcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaG93IG1lIG1vcmUuLi5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL0JhZGdlXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9lc20vQ29udGFpbmVyXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2VzbS9UYWJsZVwiO1xyXG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvUm93XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlsaXR5L2dldC10aW1lLXNpbmNlXCI7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VyUHJvZmlsZUFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3VzZXItcHJvZmlsZS1zbGljZVwiO1xyXG5pbXBvcnQgQmFuZFRhYmxlIGZyb20gXCIuL0JhbmRUYWJsZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJQcm9maWxlKHtcclxuICB1c2VySWQsXHJcbn06IHtcclxuICB1c2VySWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbn0pOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgeyBwcm9maWxlIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2VyUHJvZmlsZVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBmdW5jdGlvbiBmZXRjaFByb2ZpbGUoKSB7XHJcbiAgICBkaXNwYXRjaCh1c2VyUHJvZmlsZUFjdGlvbnMucmVxdWVzdEZldGNoVXNlclByb2ZpbGUoeyB0YXJnZXRJZDogdXNlcklkIH0pKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFByb2ZpbGUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17XCJtYi01XCJ9PlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICB7cHJvZmlsZSA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8aDU+e3Byb2ZpbGUubmFtZX08L2g1PlxyXG4gICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIHNjb3JlOiA8Yj57cHJvZmlsZS50b3RhbFNjb3JlfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXZlcmFnZSBzY29yZTogPGI+e3Byb2ZpbGUuYXZlcmFnZVNjb3JlLnRvRml4ZWQoMil9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lcyBjb250cmlidXRlZDogPGI+e3Byb2ZpbGUubmFtZXNDb250cmlidXRlZH08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCYW5kVGFibGUgYmFuZHM9e3Byb2ZpbGUuYmFuZHN9IGRlZmF1bHROdW1Ub0Rpc3BsYXk9ezEwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHA+TG9hZGluZzwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25DaGFubmVsLCBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgdXNlclJlY29yZHNBY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgU2FnYUl0ZXJhdG9yIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZFNvcnRUeXBlcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3Jkc1JlcXVlc3RCb2R5IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9yb3V0ZS1oYW5kbGVycy91c2VyLXJlY29yZHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHdhdGNoRmV0Y2hVc2VyUmVjb3Jkc1NhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICBjb25zdCBmZXRjaFVzZXJSZWNvcmRzQ2hhbm5lbCA9IHlpZWxkIGFjdGlvbkNoYW5uZWwoXHJcbiAgICB1c2VyUmVjb3Jkc0FjdGlvbnMucmVxdWVzdEZldGNoVXNlclJlY29yZHMudHlwZVxyXG4gICk7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShmZXRjaFVzZXJSZWNvcmRzQ2hhbm5lbCk7XHJcbiAgICBjb25zdCB7IG51bU9mUmVjb3Jkcywgc29ydFR5cGUgfSA9IHBheWxvYWQ7XHJcbiAgICB5aWVsZCBjYWxsKGZldGNoVXNlclJlY29yZHMsIG51bU9mUmVjb3Jkcywgc29ydFR5cGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaFVzZXJSZWNvcmRzKFxyXG4gIG1heFJlY29yZHM6IG51bWJlcixcclxuICBzb3J0Qnk6IFVzZXJSZWNvcmRTb3J0VHlwZXNcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuZ2V0VXNlclJlY29yZHMsXHJcbiAgICAgIHsgbnVtT2ZSZWNvcmRzOiBtYXhSZWNvcmRzLCBzb3J0VHlwZTogc29ydEJ5IH1cclxuICAgICk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB5aWVsZCBwdXQodXNlclJlY29yZHNBY3Rpb25zLmZldGNoVXNlclJlY29yZHNTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHVzZXJSZWNvcmRzQWN0aW9ucy5mZXRjaFVzZXJSZWNvcmRzRmFpbHVyZSgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCAqIGFzIHBhdGhzIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvcGF0aHNcIjtcclxuaW1wb3J0IHsgYmFuZEFjdGlvbnMgfSBmcm9tIFwiLi4vc2xpY2VzL2JhbmRzLXNsaWNlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG4vLyBUT0RPOiBUaGlzIGRvZXNuJ3Qgd29yayByaWdodCBvbiB0aGUgZGF0YWJhc2Ugc2lkZSFcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogYmFuZFNjb3JlTW9kaWZpY2F0aW9uU2FnYSgpOiBTYWdhSXRlcmF0b3Ige1xyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IHlpZWxkIHRha2UoYmFuZEFjdGlvbnMucmVxdWVzdE1vZGlmeUJhbmRTY29yZS50eXBlKTtcclxuICAgIGNvbnN0IHsgdGFyZ2V0QmFuZElkLCBtb2RpZnlpbmdVc2VySWQsIG1vZGlmaWNhdGlvblZhbHVlIH0gPSBwYXlsb2FkO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJtb2RpZmljYXRpb24gdmFsdWUgaW4gc2FnYTogXCIsIG1vZGlmaWNhdGlvblZhbHVlKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgICAgIGF4aW9zLnBvc3QsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMubW9kaWZ5QmFuZCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICBtb2RpZnlpbmdVc2VySWQsXHJcbiAgICAgICAgICBtb2RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgaWYgKG1vZGlmaWNhdGlvblZhbHVlID09IDApIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBiYW5kQWN0aW9ucy5tb2RpZnlCYW5kU2NvcmVTdWNjZXNzKHtcclxuICAgICAgICAgICAgdGFyZ2V0QmFuZElkLFxyXG4gICAgICAgICAgICBtb2RpZmljYXRpb25WYWx1ZTogLXBheWxvYWQudW5kb1ZhbHVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgIGJhbmRBY3Rpb25zLm1vZGlmeUJhbmRTY29yZVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICB0YXJnZXRCYW5kSWQsXHJcbiAgICAgICAgICAgIG1vZGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB5aWVsZCBwdXQoYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlRmFpbHVyZSgpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlclVybCA9XHJcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCJodHRwOi8vbG9jYWxob3N0Ojc3NzdcIjtcclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IFwiL2FwaS9hdXRoZW50aWNhdGVcIjtcclxuZXhwb3J0IGNvbnN0IHBvc3RCYW5kcyA9IFwiL2FwaS9iYW5kc1wiO1xyXG5leHBvcnQgY29uc3QgbW9kaWZ5QmFuZCA9IFwiL2FwaS9iYW5kL21vZGlmeVwiO1xyXG5leHBvcnQgY29uc3QgbmV3QmFuZCA9IFwiL2FwaS9iYW5kL25ld1wiO1xyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IFwiL2FwaS9jcmVhdGUtdXNlclwiO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlcm5hbWUgPSBcIi9hcGkvdXNlcm5hbWVzL2dldFwiO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlclJlY29yZHMgPSBcIi9hcGkvdXNlcnMvZ2V0XCI7XHJcbmV4cG9ydCBjb25zdCBzZXNzaW9uRW5kcG9pbnQgPSBcIi9hcGkvc2Vzc2lvblwiO1xyXG5cclxuXHJcbmNvbnN0IGdldFVzZXJQcm9maWxlQmFzZSA9IFwiL2FwaS91c2VyLXByb2ZpbGVcIjtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJQcm9maWxlRW5kcG9pbnQgPSBnZXRVc2VyUHJvZmlsZUJhc2UgKyBcIi86dXNlcklkXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwoXHJcbiAgdGFyZ2V0VXNlcklkIC8qOiBNb25nb29zZVR5cGVzLk9iamVjdElkKi9cclxuKTogc3RyaW5nIHtcclxuICByZXR1cm4gZ2V0VXNlclByb2ZpbGVCYXNlICsgXCIvXCIgKyB0YXJnZXRVc2VySWQgLyoudG9IZXhTdHJpbmcqLztcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFjdGlvbkNoYW5uZWwsIGNhbGwsIHB1dCwgdGFrZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBTYWdhSXRlcmF0b3IgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvc2Vzc2lvbi1zbGljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBjaGVja1Nlc3Npb25TYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIHlpZWxkIHRha2Uoc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENoZWNrU2Vzc2lvbi50eXBlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5nZXQsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuc2Vzc2lvbkVuZHBvaW50LFxyXG4gICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH1cclxuICAgICAgKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlcklkLCB1c2VybmFtZSwgYmFuZHNNb2RpZmllZCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5jaGVja1Nlc3Npb25TdWNjZXNzKHtcclxuICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgYmFuZHNNb2RpZmllZCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5aWVsZCBwdXQoc2Vzc2lvbkFjdGlvbnMuY2hlY2tTZXNzaW9uRmFpbHVyZSgpKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHlpZWxkIHB1dChzZXNzaW9uQWN0aW9ucy5jaGVja1Nlc3Npb25GYWlsdXJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7XHJcbiAgQmFuZENyZWF0aW9uU3RhdHVzZXMsXHJcbiAgQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMsXHJcbiAgQmFuZFNvcnRUeXBlcyxcclxufSBmcm9tIFwiLi4vc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgQmFuZENsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvYmFuZC1tb2RlbFwiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG50eXBlIFNjb3JlTW9kaWZpY2F0aW9uU3RhdGUgPSB7XHJcbiAgc3RhdHVzOiBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcztcclxuICAvLyBUT0RPOiBUaGlzIG5lZWRzIHRvIHJlZmVyIHRvIGEgYmFuZCdzIElEXHJcbiAgdGFyZ2V0PzogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxufTtcclxuXHJcbnR5cGUgQmFuZHNTbGljZVN0YXRlID0ge1xyXG4gIHBlbmRpbmdGZXRjaGVzOiBudW1iZXI7XHJcbiAgY3JlYXRpb25TdGF0dXM6IEJhbmRDcmVhdGlvblN0YXR1c2VzO1xyXG4gIGl0ZW1zOiBCYW5kQ2xhc3NbXTtcclxuICBzY29yZU1vZGlmaWNhdGlvblN0YXRlOiBTY29yZU1vZGlmaWNhdGlvblN0YXRlO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBCYW5kc1NsaWNlU3RhdGUgPSB7XHJcbiAgcGVuZGluZ0ZldGNoZXM6IDAsXHJcbiAgaXRlbXM6IFtdLFxyXG4gIGNyZWF0aW9uU3RhdHVzOiBCYW5kQ3JlYXRpb25TdGF0dXNlcy5OT1RfVFJZSU5HLFxyXG4gIHNjb3JlTW9kaWZpY2F0aW9uU3RhdGU6IHtcclxuICAgIHN0YXR1czogQmFuZFNjb3JlTW9kaWZpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgYmFuZHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImJhbmRzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICAvLyBCYW5kIGZldGNoaW5nXHJcbiAgICByZXF1ZXN0RmV0Y2hCYW5kcyhcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgbWF4QmFuZHM6IG51bWJlcjtcclxuICAgICAgICBzb3J0Qnk6IEJhbmRTb3J0VHlwZXM7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMrKztcclxuICAgIH0sXHJcbiAgICBmZXRjaEJhbmRzU3VjY2VzcyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEJhbmRDbGFzc1tdPikge1xyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKChuZXdCYW5kKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5pdGVtcy5zb21lKChiYW5kKSA9PiBiYW5kLl9pZCA9PSBuZXdCYW5kLl9pZCkpXHJcbiAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKG5ld0JhbmQpO1xyXG4gICAgICB9KTtcclxuICAgICAgc3RhdGUucGVuZGluZ0ZldGNoZXMtLTtcclxuICAgIH0sXHJcbiAgICBmZXRjaEJhbmRzRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBCYW5kIGNyZWF0aW9uXHJcbiAgICByZXF1ZXN0Q3JlYXRlQmFuZChcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgY3JlYXRpbmdVc2VySWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgYmFuZE5hbWU6IHN0cmluZztcclxuICAgICAgICBjcmVhdGluZ1VzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuY3JlYXRpb25TdGF0dXMgPSBCYW5kQ3JlYXRpb25TdGF0dXNlcy5DUkVBVElORztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVCYW5kU3VjY2VzcyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEJhbmRDbGFzcz4pIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJva2F5IHdoYXl0cyB1cFwiKVxyXG4gICAgICBzdGF0ZS5jcmVhdGlvblN0YXR1cyA9IEJhbmRDcmVhdGlvblN0YXR1c2VzLkNSRUFURUQ7XHJcbiAgICAgIHN0YXRlLml0ZW1zLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUJhbmRGYWlsdXJlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QmFuZENyZWF0aW9uU3RhdHVzZXM+KSB7XHJcbiAgICAgIHN0YXRlLmNyZWF0aW9uU3RhdHVzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIE1vZGlmeSBiYW5kIHNjb3JlXHJcbiAgICByZXF1ZXN0TW9kaWZ5QmFuZFNjb3JlKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICB0YXJnZXRCYW5kSWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgICAgICAgbW9kaWZ5aW5nVXNlcklkOiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gICAgICAgIG1vZGlmaWNhdGlvblZhbHVlOiBudW1iZXI7XHJcbiAgICAgICAgdW5kb1ZhbHVlPzogbnVtYmVyO1xyXG4gICAgICB9PlxyXG4gICAgKSB7XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUuc3RhdHVzID1cclxuICAgICAgICBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcy5BVFRFTVBUSU5HO1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnRhcmdldCA9IGFjdGlvbi5wYXlsb2FkLnRhcmdldEJhbmRJZDtcclxuICAgIH0sXHJcbiAgICBtb2RpZnlCYW5kU2NvcmVTdWNjZXNzKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgY29uc3QgdGFyZ2V0QmFuZEluZGV4ID0gc3RhdGUuaXRlbXMuZmluZEluZGV4KFxyXG4gICAgICAgIChiYW5kKSA9PiBiYW5kLl9pZCA9PT0gYWN0aW9uLnBheWxvYWQudGFyZ2V0QmFuZElkXHJcbiAgICAgICk7XHJcbiAgICAgIHN0YXRlLml0ZW1zW3RhcmdldEJhbmRJbmRleF0uc2NvcmUgKz0gYWN0aW9uLnBheWxvYWQubW9kaWZpY2F0aW9uVmFsdWU7XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUuc3RhdHVzID1cclxuICAgICAgICBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcy5TVUNDRVNTO1xyXG4gICAgfSxcclxuICAgIG1vZGlmeUJhbmRTY29yZUZhaWx1cmUoc3RhdGUpIHtcclxuICAgICAgLy8gVE9ETzogU2hvdWxkbid0IHdlIGJlIGdldHRpbmcgYSByZWFzb24gZm9yIHRoZSBmYWlsdXJlIGhlcmU/XHJcbiAgICAgIHN0YXRlLnNjb3JlTW9kaWZpY2F0aW9uU3RhdGUuc3RhdHVzID1cclxuICAgICAgICBCYW5kU2NvcmVNb2RpZmljYXRpb25TdGF0dXNlcy5GQUlMVVJFO1xyXG4gICAgICBzdGF0ZS5zY29yZU1vZGlmaWNhdGlvblN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYmFuZEFjdGlvbnMgPSBiYW5kc1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IGJhbmRzU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgZ2V0RGVmYXVsdE1pZGRsZXdhcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYmFuZHNSZWR1Y2VyIGZyb20gXCIuL3NsaWNlcy9iYW5kcy1zbGljZVwiO1xyXG5pbXBvcnQgc2Vzc2lvblJlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHVzZXJSZWNvcmRzUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvdXNlci1yZWNvcmRzLXNsaWNlXCI7XHJcbmltcG9ydCB1c2VyUHJvZmlsZVJlZHVjZXIgZnJvbSBcIi4vc2xpY2VzL3VzZXItcHJvZmlsZS1zbGljZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgc2FnYXMgZnJvbSBcIi4vc2FnYXNcIjtcclxuaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbLi4uZ2V0RGVmYXVsdE1pZGRsZXdhcmUoeyB0aHVuazogZmFsc2UgfSksIHNhZ2FNaWRkbGV3YXJlXTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBiYW5kczogYmFuZHNSZWR1Y2VyLFxyXG4gIHNlc3Npb246IHNlc3Npb25SZWR1Y2VyLFxyXG4gIHVzZXJSZWNvcmRzOiB1c2VyUmVjb3Jkc1JlZHVjZXIsXHJcbiAgdXNlclByb2ZpbGU6IHVzZXJQcm9maWxlUmVkdWNlcixcclxufSk7XHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VUeXBlZFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3I7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXHJcbiAgbWlkZGxld2FyZTogbWlkZGxld2FyZSxcclxufSk7XHJcblxyXG5mb3IgKGNvbnN0IHNhZ2EgaW4gc2FnYXMpIHtcclxuICBzYWdhTWlkZGxld2FyZS5ydW4oc2FnYXNbc2FnYV0pO1xyXG59XHJcbiIsImltcG9ydCB7IHRha2UsIHB1dCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRocyBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL3BhdGhzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCB7IFVzZXJDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHVzZXJDcmVhdGlvblNhZ2EoKTogU2FnYUl0ZXJhdG9yIHtcclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSB5aWVsZCB0YWtlKHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDcmVhdGVVc2VyLnR5cGUpO1xyXG4gICAgY29uc3QgeyAvKmVtYWlsLCovIHVzZXJuYW1lLCBwYXNzd29yZCwgcmVwZWF0UGFzc3dvcmQgfSA9IHBheWxvYWQ7XHJcblxyXG4gICAgLy8gaWYgKCFlbWFpbElzVmFsaWQoZW1haWwpKSB7XHJcbiAgICAvLyAgIHlpZWxkIHB1dChcclxuICAgIC8vICAgICBzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyRmFpbHVyZSh7XHJcbiAgICAvLyAgICAgICByZWFzb246IFVzZXJDcmVhdGlvblN0YXR1c2VzLklOVkFMSURfRU1BSUwsXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIGlmIChwYXNzd29yZCAhPT0gcmVwZWF0UGFzc3dvcmQpIHtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICBzZXNzaW9uQWN0aW9ucy5jcmVhdGVVc2VyRmFpbHVyZSh7XHJcbiAgICAgICAgICAgIHJlYXNvbjogVXNlckNyZWF0aW9uU3RhdHVzZXMuUEFTU1dPUkRTX0RPTlRfTUFUQ0gsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICAgICAgYXhpb3MucG9zdCxcclxuICAgICAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgcGF0aHMuY3JlYXRlVXNlcixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgIC8vIGVtYWlsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHNlc3Npb25BY3Rpb25zLmNyZWF0ZVVzZXJTdWNjZXNzKCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICAgIHNlc3Npb25BY3Rpb25zLmNyZWF0ZVVzZXJGYWlsdXJlKHtcclxuICAgICAgICAgICAgICByZWFzb246IGVycm9yLnJlc3BvbnNlLmRhdGEucmVhc29uLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVtYWlsSXNWYWxpZChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gIHJldHVybiByZS50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvZXNtL0NvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFib3V0KCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgPGgxPkFib3V0PC9oMT5cclxuICAgICAgPHA+XHJcbiAgICAgICAgWW91J2QgdGhpbmsgdGhhdCB3aGVuIG11c2ljaWFucyBnYXRoZXIgdG9nZXRoZXIgdG8gdGFsayBhYm91dCB0aGVpciB0cmFkZSwgdGhleSBtaWdodCBiZSB0YWxraW5nIGFib3V0IHRoZWlyIGZhdm9yaXRlIHJlY29yZHMsIHNoYXJpbmcgY2hvcmQgdm9pY2luZ3MsIG9yIHRhbGtpbmcgYWJvdXQgdmludGFnZSBlcXVpcG1lbnQuIFlvdSdkIGJlIHdyb25nLiBUaGV5IGFyZSBhbGwgc2l0dGluZyBhcm91bmQgc2F5aW5nIFwid2hhdCBhYm91dCBhIGJhbmQgY2FsbGVkXCIgZm9sbG93ZWQgYnkgYSBob3JyaWJsZSBwdW4uIEkgd291bGQga25vd+KAlEkgaGF2ZSBhIGRlZ3JlZSBpbiBtdXNpYywgYW5kIHRoaXMgaXMgdGhlIG1vc3QgcHJpemVkIHNraWxsIG9mIGFsbC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICBXaGF0IEFib3V0IEEgQmFuZCBDYWxsZWQgd2FzIGNyZWF0ZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmd1c211cnBoeS5jb21wdXRlci9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+R3VzIE11cnBoeTwvYT4sIGFuZCBoYXMgZWFybmVkIHN1Y2ggcHJhaXNlIGFzICZsZHF1bztJIHRoaW5rIGl0IGxvb2tzIGFscmlnaHQuJnJkcXVvOyBhbmQgJmxkcXVvO1RoYXQgbmFtZSBpcyBoYXJkIHRvIHNheS4mcmRxdW87IElmIHlvdSdyZSBoZXJlLCBJJ2QgbG92ZSB0byBrbm93IHdoeSwgc28gcGxlYXNlIHN0b3AgYnkgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmd1c211cnBoeS5jb21wdXRlci9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+bXkgc2l0ZTwvYT4gYW5kIGZpbmQgbXkgY29udGFjdCBpbmZvIHRoZXJlIVxyXG4gICAgICA8L3A+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn0iLCJpbXBvcnQgeyB0YWtlLCBwdXQsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICogYXMgcGF0aHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5pbXBvcnQgeyBUeXBlcyBhcyBNb25nb29zZVR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IFNhZ2FJdGVyYXRvciB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB7IHVzZXJQcm9maWxlQWN0aW9ucyB9IGZyb20gXCIuLi9zbGljZXMvdXNlci1wcm9maWxlLXNsaWNlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUdldFVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9wYXRoc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaFByb2ZpbGVTYWdhKCk6IFNhZ2FJdGVyYXRvciB7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0geWllbGQgdGFrZShcclxuICAgICAgdXNlclByb2ZpbGVBY3Rpb25zLnJlcXVlc3RGZXRjaFVzZXJQcm9maWxlLnR5cGVcclxuICAgICk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuICAgIGNvbnN0IHRhcmdldElkID0gcGF5bG9hZC50YXJnZXRJZDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldElkKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNyZWF0ZUdldFVzZXJQcm9maWxlVXJsKHRhcmdldElkKSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChcclxuICAgICAgICBheGlvcy5nZXQsXHJcbiAgICAgICAgcGF0aHMuc2VydmVyVXJsICsgY3JlYXRlR2V0VXNlclByb2ZpbGVVcmwodGFyZ2V0SWQpXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgdXNlclByb2ZpbGVBY3Rpb25zLmZldGNoVXNlclByb2ZpbGVTdWNjZXNzKHtcclxuICAgICAgICAgICAgcHJvZmlsZTogcmVzcG9uc2UuZGF0YS5wcm9maWxlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHlpZWxkIHB1dCh1c2VyUHJvZmlsZUFjdGlvbnMuZmV0Y2hVc2VyUHJvZmlsZUZhaWx1cmUoKSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB5aWVsZCBwdXQodXNlclByb2ZpbGVBY3Rpb25zLmZldGNoVXNlclByb2ZpbGVGYWlsdXJlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMsIFVzZXJDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IGJhbmRBY3Rpb25zIH0gZnJvbSBcIi4vYmFuZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgVHlwZXMgYXMgTW9uZ29vc2VUeXBlcywgU1RBVEVTIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG50eXBlIFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uID0ge1xyXG4gIHRhcmdldEJhbmRJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICB2YWx1ZTogbnVtYmVyO1xyXG59O1xyXG5cclxudHlwZSBTZXNzaW9uU2xpY2VTdGF0ZSA9IHtcclxuICBhdXRoZW50aWNhdGlvblN0YXR1czogQXV0aGVudGljYXRpb25TdGF0dXNlcztcclxuICB1c2VySWQ/OiBNb25nb29zZVR5cGVzLk9iamVjdElkO1xyXG4gIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gIHVzZXJDcmVhdGlvblN0YXR1czogVXNlckNyZWF0aW9uU3RhdHVzZXM7XHJcbiAgYmFuZHNNb2RpZmllZDogU2Vzc2lvbkJhbmRNb2RpZmljYXRpb25bXTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU2Vzc2lvblNsaWNlU3RhdGUgPSB7XHJcbiAgYXV0aGVudGljYXRpb25TdGF0dXM6IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICB1c2VySWQ6IHVuZGVmaW5lZCxcclxuICB1c2VybmFtZTogdW5kZWZpbmVkLFxyXG4gIHVzZXJDcmVhdGlvblN0YXR1czogVXNlckNyZWF0aW9uU3RhdHVzZXMuTk9UX1RSWUlORyxcclxuICBiYW5kc01vZGlmaWVkOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHNlc3Npb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInNlc3Npb25cIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIFNlc3Npb24gY2hlY2tpbmdcclxuICAgIHJlcXVlc3RDaGVja1Nlc3Npb24oc3RhdGUpIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FUSU5HO1xyXG4gICAgfSxcclxuICAgIGNoZWNrU2Vzc2lvblN1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHVzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGJhbmRzTW9kaWZpZWQ6IFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uW107XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQ7XHJcbiAgICAgIHN0YXRlLnVzZXJJZCA9IGFjdGlvbi5wYXlsb2FkLnVzZXJJZDtcclxuICAgICAgc3RhdGUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZTtcclxuICAgICAgc3RhdGUuYmFuZHNNb2RpZmllZCA9IGFjdGlvbi5wYXlsb2FkLmJhbmRzTW9kaWZpZWQ7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tTZXNzaW9uRmFpbHVyZShzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuTk9UX1RSWUlORztcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlciBhdXRoZW50aWNhdGlvblxyXG4gICAgcmVxdWVzdEF1dGhlbnRpY2F0ZVVzZXIoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRJTkc7XHJcbiAgICB9LFxyXG4gICAgYXV0aGVudGljYXRlVXNlclN1Y2Nlc3MoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIHVzZXJJZDogTW9uZ29vc2VUeXBlcy5PYmplY3RJZDtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGJhbmRzTW9kaWZpZWQ6IFNlc3Npb25CYW5kTW9kaWZpY2F0aW9uW107XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUuYXV0aGVudGljYXRpb25TdGF0dXMgPSBBdXRoZW50aWNhdGlvblN0YXR1c2VzLkFVVEhFTlRJQ0FURUQ7XHJcbiAgICAgIHN0YXRlLnVzZXJJZCA9IGFjdGlvbi5wYXlsb2FkLnVzZXJJZDtcclxuICAgICAgc3RhdGUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZTtcclxuICAgICAgc3RhdGUuYmFuZHNNb2RpZmllZCA9IGFjdGlvbi5wYXlsb2FkLmJhbmRzTW9kaWZpZWQ7XHJcbiAgICB9LFxyXG4gICAgYXV0aGVudGljYXRlVXNlckZhaWx1cmUoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGlvblN0YXR1cyA9IGFjdGlvbi5wYXlsb2FkLnJlYXNvbjtcclxuICAgICAgLy8gVE9ETzogSXMgaXQgbmVjZXNzYXJ5IHRvIHJlc2V0IHRoaXMgdG8gbnVsbCBoZXJlP1xyXG4gICAgICBzdGF0ZS51c2VySWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFVzZXIgbG9nb3V0XHJcbiAgICByZXF1ZXN0TG9nb3V0KHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5MT0dHSU5HX09VVDtcclxuICAgIH0sXHJcbiAgICBsb2dvdXRGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0aW9uU3RhdHVzID0gQXV0aGVudGljYXRpb25TdGF0dXNlcy5TRVJWRVJfRVJST1I7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0U3VjY2VzcyhzdGF0ZSkge1xyXG4gICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVXNlciBjcmVhdGlvblxyXG4gICAgcmVxdWVzdENyZWF0ZVVzZXIoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgIC8vIGVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgIHJlcGVhdFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgIH0+XHJcbiAgICApIHtcclxuICAgICAgc3RhdGUudXNlckNyZWF0aW9uU3RhdHVzID0gVXNlckNyZWF0aW9uU3RhdHVzZXMuUFJPQ0VTU0lORztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVVc2VyU3VjY2VzcyhzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS51c2VyQ3JlYXRpb25TdGF0dXMgPSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZVVzZXJGYWlsdXJlKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUudXNlckNyZWF0aW9uU3RhdHVzID0gYWN0aW9uLnBheWxvYWQucmVhc29uO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IHtcclxuICAgIC8vIEJhbmQgbW9kaWZpY2F0aW9uXHJcbiAgICBbYmFuZEFjdGlvbnMubW9kaWZ5QmFuZFNjb3JlU3VjY2Vzcy50eXBlXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuYmFuZHNNb2RpZmllZC5wdXNoKHtcclxuICAgICAgICB0YXJnZXRCYW5kSWQ6IGFjdGlvbi5wYXlsb2FkLnRhcmdldEJhbmRJZCxcclxuICAgICAgICB2YWx1ZTogYWN0aW9uLnBheWxvYWQubW9kaWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXNzaW9uQWN0aW9ucyA9IHNlc3Npb25TbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBzZXNzaW9uU2xpY2UucmVkdWNlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gXCIuLi9zdG9yZS9oaXN0b3J5XCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZWRCYW5kVGFibGUgfSBmcm9tIFwiLi9Db250cm9sbGVkQmFuZFRhYmxlXCI7XHJcbmltcG9ydCB7IExhbmRpbmcgfSBmcm9tIFwiLi9MYW5kaW5nXCI7XHJcbmltcG9ydCB7IExvZ2luRm9ybSB9IGZyb20gXCIuL0xvZ2luXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiLi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IE5ld1VzZXJGb3JtIH0gZnJvbSBcIi4vTmV3VXNlckZvcm1cIjtcclxuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xyXG5pbXBvcnQgeyBBYm91dCB9IGZyb20gXCIuL0Fib3V0XCI7XHJcblxyXG4vLyBjb25zdCBBdXRoZW50aWNhdGlvbkd1YXJkID0gKENvbXBvbmVudCkgPT4gKHsgbWF0Y2ggfSkgPT4ge1xyXG4vLyAgIGlmIChcclxuLy8gICAgIHN0b3JlLmdldFN0YXRlKCkuc2Vzc2lvbi5hdXRoZW50aWNhdGlvblN0YXR1cyAhPT1cclxuLy8gICAgIEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRFxyXG4vLyAgICkge1xyXG4vLyAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9cIiAvPjtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIDxDb21wb25lbnQgbWF0Y2g9e21hdGNofSAvPjtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluID0gKCkgPT4gKFxyXG4gIC8vIFRPRE86IFdoYXQgaXMgdGhlIFJvdXRlcidzIFwiaGlzdG9yeVwiIGFsbCBhYm91dD9cclxuICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9iYW5kc1wiIGNvbXBvbmVudD17Q29udHJvbGxlZEJhbmRUYWJsZX0gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW5Gb3JtfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL25ldy11c2VyXCIgY29tcG9uZW50PXtOZXdVc2VyRm9ybX0gLz5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9hYm91dFwiIGNvbXBvbmVudD17QWJvdXR9IC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtMYW5kaW5nfSAvPlxyXG4gICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgcGF0aD1cIi91c2Vycy86dXNlcklkXCJcclxuICAgICAgICAgIGNvbXBvbmVudD17KHsgbWF0Y2ggfSkgPT4gPFVzZXJQcm9maWxlIHVzZXJJZD17bWF0Y2gucGFyYW1zLnVzZXJJZH0gLz59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIDwvUm91dGVyPlxyXG4pO1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiZFpaSFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCJpM1hwXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDcmVhdGVCYW5kRm9ybSB9IGZyb20gXCIuL0NyZWF0ZUJhbmRGb3JtXCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZWRCYW5kVGFibGUgfSBmcm9tIFwiLi9Db250cm9sbGVkQmFuZFRhYmxlXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9lc20vQ29udGFpbmVyXCI7XHJcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IHsgVXNlclJlY29yZHNMaXN0IH0gZnJvbSBcIi4vVXNlclJlY29yZHNMaXN0XCI7XHJcbmltcG9ydCB7IFVzZXJSZWNvcmRTb3J0VHlwZXMgfSBmcm9tIFwiLi4vc3RvcmUvc3RhdHVzZXNcIjtcclxuaW1wb3J0IEp1bWJvdHJvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0p1bWJvdHJvblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExhbmRpbmcoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgICAgIDxDb2wgbWQ9ezh9IGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgICA8Q3JlYXRlQmFuZEZvcm0gLz5cclxuICAgICAgICAgICAgPENvbnRyb2xsZWRCYW5kVGFibGUgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBtZD17NH0+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoNT5Nb3N0IE5hbWVzIENvbnRyaWJ1dGVkPC9oNT5cclxuICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8VXNlclJlY29yZHNMaXN0XHJcbiAgICAgICAgICAgICAgICAgIG1heFJlY29yZHM9ezEwfVxyXG4gICAgICAgICAgICAgICAgICBzb3J0VHlwZT17VXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e1wibWItM1wifT5cclxuICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDU+SGlnaGVzdCBBdmVyYWdlIFNjb3JlPC9oNT5cclxuICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8VXNlclJlY29yZHNMaXN0XHJcbiAgICAgICAgICAgICAgICAgIG1heFJlY29yZHM9ezEwfVxyXG4gICAgICAgICAgICAgICAgICBzb3J0VHlwZT17VXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX0FWRVJBR0VfU0NPUkV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17XCJtYi0zXCJ9PlxyXG4gICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoNT5IaWdoZXN0IFNjb3JlPC9oNT5cclxuICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8VXNlclJlY29yZHNMaXN0XHJcbiAgICAgICAgICAgICAgICAgIG1heFJlY29yZHM9ezEwfVxyXG4gICAgICAgICAgICAgICAgICBzb3J0VHlwZT17VXNlclJlY29yZFNvcnRUeXBlcy5ISUdIRVNUX1NDT1JFfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJyZWFjdC1ib290c3RyYXAvQWxlcnRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9TcGlubmVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3Nlc3Npb24tc2xpY2VcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TdGF0dXNlcyB9IGZyb20gXCIuLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luRm9ybSgpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgYXV0aGVudGljYXRpb25TdGF0dXMgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uLmF1dGhlbnRpY2F0aW9uU3RhdHVzXHJcbiAgKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gICAgZGlzcGF0Y2goc2Vzc2lvbkFjdGlvbnMucmVxdWVzdEF1dGhlbnRpY2F0ZVVzZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxDYXJkIHN0eWxlPXt7IG1heFdpZHRoOiBcIjM2cmVtXCIgfX0gY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljVXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Vc2VybmFtZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICBBdXRoZW50aWNhdGlvblN0YXR1c2VzLlVTRVJOQU1FX05PVF9GT1VORFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybS5UZXh0IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIE5ldyB1c2VyPyBDcmVhdGUgYW4gYWNjb3VudCA8YSBocmVmPVwiL25ldy11c2VyXCI+aGVyZTwvYT4uXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLlRleHQ+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgdXNlcm5hbWUuXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25TdGF0dXNlcy5JTlZBTElEX1BBU1NXT1JEXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIEluY29ycmVjdCBwYXNzd29yZC5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRJTkcgfHxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAge2F1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRJTkcgJiYgKFxyXG4gICAgICAgICAgICAgIDxBbGVydCB2YXJpYW50PVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgdmFyaWFudD1cInByaW1hcnlcIiAvPiBQcm9jZXNzaW5nLi4uXHJcbiAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2F1dGhlbnRpY2F0aW9uU3RhdHVzID09IEF1dGhlbnRpY2F0aW9uU3RhdHVzZXMuQVVUSEVOVElDQVRFRCAmJiAoXHJcbiAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJzdWNjZXNzXCI+U3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiE8L0FsZXJ0PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVzZXJQcm9maWxlVXJsKHVzZXJJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gXCIvdXNlcnMvXCIgKyB1c2VySWQ7XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi9jb21wb25lbnRzL01haW5cIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPE1haW4gLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcclxuKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IFR5cGVzIGFzIE1vbmdvb3NlVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJSZWNvcmQgPSB7XHJcbiAgaWQ6IE1vbmdvb3NlVHlwZXMuT2JqZWN0SWQ7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRvdGFsU2NvcmU6IG51bWJlcjtcclxuICBuYW1lc0NvbnRyaWJ1dGVkOiBudW1iZXI7XHJcbiAgYXZlcmFnZVNjb3JlOiBudW1iZXI7XHJcbn07XHJcblxyXG50eXBlIFVzZXJSZWNvcmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogbnVtYmVyO1xyXG4gIGl0ZW1zOiBVc2VyUmVjb3JkW107XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJSZWNvcmRzU2xpY2VTdGF0ZSA9IHtcclxuICBwZW5kaW5nRmV0Y2hlczogMCxcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUmVjb3Jkc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclJlY29yZHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHJlcXVlc3RGZXRjaFVzZXJSZWNvcmRzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICBudW1PZlJlY29yZHM6IG51bWJlcjtcclxuICAgICAgICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxuICAgICAgfT5cclxuICAgICkge1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcysrO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclJlY29yZHNTdWNjZXNzKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFVzZXJSZWNvcmRbXT5cclxuICAgICkge1xyXG4gICAgICBhY3Rpb24ucGF5bG9hZC5mb3JFYWNoKChuZXdSZWNvcmQpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLml0ZW1zLnNvbWUoKHJlY29yZCkgPT4gcmVjb3JkLmlkID09IG5ld1JlY29yZC5pZCkpXHJcbiAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKG5ld1JlY29yZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzdGF0ZS5wZW5kaW5nRmV0Y2hlcy0tO1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlclJlY29yZHNGYWlsdXJlKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnBlbmRpbmdGZXRjaGVzLS07XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclJlY29yZHNBY3Rpb25zID0gdXNlclJlY29yZHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVjb3Jkc1NsaWNlLnJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVjb3JkU29ydFR5cGVzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlclJlY29yZHNBY3Rpb25zLFxyXG4gIFVzZXJSZWNvcmQsXHJcbn0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy91c2VyLXJlY29yZHMtc2xpY2VcIjtcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlL1wiO1xyXG5pbXBvcnQgeyBzb3J0QW5kTGltaXRVc2VyUmVjb3JkcyB9IGZyb20gXCIuL3V0aWxpdHkvbGltaXQtc29ydC11c2VyLXJlY29yZHNcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQmFkZ2VcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVVzZXJQcm9maWxlVXJsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbGl0eS9jcmVhdGUtdXNlci1wcm9maWxlLXVybFwiXHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFJvb3RTdGF0ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhcHBJc0ZldGNoaW5nUmVjb3Jkczogc3RhdGUudXNlclJlY29yZHMucGVuZGluZ0ZldGNoZXMgPiAwLFxyXG4gICAgcmVjb3JkczogWy4uLnN0YXRlLnVzZXJSZWNvcmRzLml0ZW1zXSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVxdWVzdFVzZXJSZWNvcmRzOiAoXHJcbiAgICAgIG51bU9mUmVjb3JkczogbnVtYmVyLFxyXG4gICAgICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlc1xyXG4gICAgKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIHVzZXJSZWNvcmRzQWN0aW9ucy5yZXF1ZXN0RmV0Y2hVc2VyUmVjb3Jkcyh7IG51bU9mUmVjb3Jkcywgc29ydFR5cGUgfSlcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGlzdEVudHJ5QmFkZ2UocHJvcHM6IHtcclxuICBzb3J0VHlwZTogVXNlclJlY29yZFNvcnRUeXBlcztcclxuICByZWNvcmQ6IFVzZXJSZWNvcmQ7XHJcbn0pIHtcclxuICBzd2l0Y2ggKHByb3BzLnNvcnRUeXBlKSB7XHJcbiAgICBjYXNlIFVzZXJSZWNvcmRTb3J0VHlwZXMuSElHSEVTVF9BVkVSQUdFX1NDT1JFOlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57cHJvcHMucmVjb3JkLmF2ZXJhZ2VTY29yZS50b0ZpeGVkKDIpfTwvQmFkZ2U+O1xyXG4gICAgY2FzZSBVc2VyUmVjb3JkU29ydFR5cGVzLkhJR0hFU1RfU0NPUkU6XHJcbiAgICAgIHJldHVybiA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPntwcm9wcy5yZWNvcmQudG90YWxTY29yZX08L0JhZGdlPjtcclxuICAgIGNhc2UgVXNlclJlY29yZFNvcnRUeXBlcy5NT1NUX05BTUVTX0NPTlRSSUJVVEVEOlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj57cHJvcHMucmVjb3JkLm5hbWVzQ29udHJpYnV0ZWR9PC9CYWRnZT47XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gPEJhZGdlIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj4/PC9CYWRnZT47XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG50eXBlIFVzZXJSZWNvcmRzTGlzdFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIHJlZHV4Q29ubmVjdG9yPiAmIHtcclxuICBtYXhSZWNvcmRzOiBudW1iZXI7XHJcbiAgc29ydFR5cGU6IFVzZXJSZWNvcmRTb3J0VHlwZXM7XHJcbn07XHJcblxyXG5jbGFzcyBVbmNvbm5lY3RlZFVzZXJSZWNvcmRzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxVc2VyUmVjb3Jkc0xpc3RQcm9wcz4ge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5yZXF1ZXN0VXNlclJlY29yZHModGhpcy5wcm9wcy5tYXhSZWNvcmRzLCB0aGlzLnByb3BzLnNvcnRUeXBlKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmFwcElzRmV0Y2hpbmdSZWNvcmRzKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgdXNlciByZWNvcmRzLi4uPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlc2lyZWRSZWNvcmRzID0gc29ydEFuZExpbWl0VXNlclJlY29yZHMoXHJcbiAgICAgIHRoaXMucHJvcHMucmVjb3JkcyxcclxuICAgICAgdGhpcy5wcm9wcy5zb3J0VHlwZSxcclxuICAgICAgdGhpcy5wcm9wcy5tYXhSZWNvcmRzXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGJvcmRlcmVkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtkZXNpcmVkUmVjb3Jkcy5tYXAoKHJlY29yZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17U3RyaW5nKHJlY29yZC5pZCl9PlxyXG4gICAgICAgICAgICAgIDx0ZD57aW5kZXggKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2NyZWF0ZVVzZXJQcm9maWxlVXJsKFN0cmluZyhyZWNvcmQuaWQpKX0+e3JlY29yZC5uYW1lfTwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGlzdEVudHJ5QmFkZ2VcclxuICAgICAgICAgICAgICAgICAgc29ydFR5cGU9e3RoaXMucHJvcHMuc29ydFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclJlY29yZHNMaXN0ID0gY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVW5jb25uZWN0ZWRVc2VyUmVjb3Jkc0xpc3QpO1xyXG4iLCJleHBvcnQgeyBiYW5kQ3JlYXRpb25TYWdhIH0gZnJvbSBcIi4vYmFuZC1jcmVhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IGJhbmRTY29yZU1vZGlmaWNhdGlvblNhZ2EgfSBmcm9tIFwiLi9iYW5kLXNjb3JlLW1vZGlmaWNhdGlvbi1zYWdhXCI7XHJcbmV4cG9ydCB7IHVzZXJBdXRoZW50aWNhdGlvblNhZ2EgfSBmcm9tIFwiLi91c2VyLWF1dGhlbnRpY2F0aW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgdXNlckNyZWF0aW9uU2FnYSB9IGZyb20gXCIuL3VzZXItY3JlYXRpb24tc2FnYVwiO1xyXG5leHBvcnQgeyB3YXRjaEZldGNoQmFuZHNTYWdhIH0gZnJvbSBcIi4vd2F0Y2gtZmV0Y2gtYmFuZHMtc2FnYVwiO1xyXG5leHBvcnQgeyB3YXRjaEZldGNoVXNlclJlY29yZHNTYWdhIH0gZnJvbSBcIi4vZmV0Y2gtdXNlci1yZWNvcmRzLXNhZ2FcIjtcclxuZXhwb3J0IHsgZmV0Y2hQcm9maWxlU2FnYSB9IGZyb20gXCIuL2ZldGNoLXVzZXItcHJvZmlsZS1zYWdhXCI7XHJcbmV4cG9ydCB7IGNoZWNrU2Vzc2lvblNhZ2EgfSBmcm9tIFwiLi9jaGVjay1zZXNzaW9uLXNhZ2FcIjtcclxuZXhwb3J0IHsgbG9nb3V0U2FnYSB9IGZyb20gXCIuL2xvZ291dC1zYWdhXCI7IiwiaW1wb3J0IHsgQmFuZFNvcnRUeXBlcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdGF0dXNlc1wiO1xyXG5pbXBvcnQgeyBCYW5kQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL21vZGVscy9iYW5kLW1vZGVsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydEFuZExpbWl0QmFuZHMoXHJcbiAgYmFuZHM6IEJhbmRDbGFzc1tdLFxyXG4gIHNvcnRCeTogQmFuZFNvcnRUeXBlcyxcclxuICBsaW1pdDogbnVtYmVyXHJcbik6IEJhbmRDbGFzc1tdIHtcclxuICBsZXQgZmlsdGVyZWRCYW5kcyA9IFsuLi5iYW5kc107XHJcblxyXG4gIHN3aXRjaCAoc29ydEJ5KSB7XHJcbiAgICBjYXNlIEJhbmRTb3J0VHlwZXMuQkVTVDpcclxuICAgICAgZmlsdGVyZWRCYW5kcy5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLk1PU1RfUkVDRU5UOlxyXG4gICAgICBmaWx0ZXJlZEJhbmRzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAvLyBUT0RPOiBXaGF0IGlzIGhhcHBlbmluZyBoZXJlP1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gRGF0ZS5wYXJzZShiLmNyZWF0ZWRPbikgLSBEYXRlLnBhcnNlKGEuY3JlYXRlZE9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCYW5kU29ydFR5cGVzLldPUlNUOlxyXG4gICAgICBmaWx0ZXJlZEJhbmRzLnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgLSBiLnNjb3JlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGZpbHRlcmVkQmFuZHMgPSBmaWx0ZXJlZEJhbmRzLnNsaWNlKDAsIGxpbWl0KTtcclxuICByZXR1cm4gZmlsdGVyZWRCYW5kcztcclxufVxyXG4iLCIvLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0FsZXJ0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcywgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFVzZXJDcmVhdGlvblN0YXR1c2VzIH0gZnJvbSBcIi4uL3N0b3JlL3N0YXR1c2VzXCI7XHJcbmltcG9ydCB7IHNlc3Npb25BY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL3NsaWNlcy9zZXNzaW9uLXNsaWNlXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbi8vIFVuY29ubmVjdGVkTmV3VXNlckZvcm0ucHJvcFR5cGVzID0ge1xyXG4vLyAgIHN1Ym1pdEZvcm06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbi8vICAgdXNlckNyZWF0aW9uU3RhdHVzOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LnZhbHVlcyhVc2VyQ3JlYXRpb25TdGF0dXNlcykpLFxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2Vzc2lvbiB9KSA9PiAoe1xyXG4vLyAgIHVzZXJDcmVhdGlvblN0YXR1czogc2Vzc2lvbi51c2VyQ3JlYXRpb25TdGF0dXMsXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4vLyAgIHN1Ym1pdEZvcm06ICgvKmVtYWlsLCovIHVzZXJuYW1lLCBwYXNzd29yZCwgcmVwZWF0UGFzc3dvcmQpID0+XHJcbi8vICAgICBkaXNwYXRjaChcclxuLy8gICAgICAgc2Vzc2lvbkFjdGlvbnMucmVxdWVzdENyZWF0ZVVzZXIoe1xyXG4vLyAgICAgICAgIC8vIGVtYWlsLFxyXG4vLyAgICAgICAgIHVzZXJuYW1lLFxyXG4vLyAgICAgICAgIHBhc3N3b3JkLFxyXG4vLyAgICAgICAgIHJlcGVhdFBhc3N3b3JkLFxyXG4vLyAgICAgICB9KVxyXG4vLyAgICAgKSxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCByZWR1eENvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xyXG4vLyB0eXBlIE5ld1VzZXJGb3JtUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgcmVkdXhDb25uZWN0b3I+O1xyXG5cclxuLy8gdHlwZSBOZXdVc2VyRm9ybVN0YXRlID0ge1xyXG4vLyAgIGVtYWlsOiBzdHJpbmc7XHJcbi8vICAgdXNlcm5hbWU6IHN0cmluZztcclxuLy8gICBwYXNzd29yZDogc3RyaW5nO1xyXG4vLyAgIHJlcGVhdFBhc3N3b3JkOiBzdHJpbmc7XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmV3VXNlckZvcm0oKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHVzZXJDcmVhdGlvblN0YXR1cyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNlc3Npb24udXNlckNyZWF0aW9uU3RhdHVzXHJcbiAgKTtcclxuXHJcbiAgLy8gY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlcGVhdFBhc3N3b3JkLCBzZXRSZXBlYXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBmdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIHNlc3Npb25BY3Rpb25zLnJlcXVlc3RDcmVhdGVVc2VyKHtcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICByZXBlYXRQYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wibWItNVwifT5cclxuICAgICAgPENhcmQgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzZyZW1cIiB9fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICB7LyogPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJFbWFpbFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsIEFkZHJlc3M8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuSU5WQUxJRF9FTUFJTFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cclxuICAgICAgICAgICAgICA8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPiAqL31cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJOYW1lXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlcm5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICB1c2VyQ3JlYXRpb25TdGF0dXMgPT0gVXNlckNyZWF0aW9uU3RhdHVzZXMuVVNFUk5BTUVfVEFLRU5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIFVzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW4uXHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbiAgICAgICAgICAgICAgICAgIHVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4gICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJSZXBlYXRQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlJlcGVhdCBQYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXBlYXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e1xyXG4gICAgICAgICAgICAgICAgICB1c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuICAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuUEFTU1dPUkRTX0RPTlRfTUFUQ0hcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgIFBhc3N3b3JkcyBkb24mYXBvczt0IG1hdGNoLlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgdXNlckNyZWF0aW9uU3RhdHVzID09IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgfHxcclxuICAgICAgICAgICAgICAgIHVzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN1Ym1pdEZvcm0oKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAge3VzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5TVUNDRVNTICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIEFjY291bnQgY3JlYXRlZCEgWW91IG1heSBub3cgPGEgaHJlZj1cIi9sb2dpblwiPmxvZyBpbjwvYT4uXHJcbiAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3VzZXJDcmVhdGlvblN0YXR1cyA9PSBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QUk9DRVNTSU5HICYmIChcclxuICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz4gUHJvY2Vzc2luZy4uLlxyXG4gICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBjbGFzcyBVbmNvbm5lY3RlZE5ld1VzZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4vLyAgIE5ld1VzZXJGb3JtUHJvcHMsXHJcbi8vICAgTmV3VXNlckZvcm1TdGF0ZVxyXG4vLyA+IHtcclxuLy8gICBzdGF0ZSA9IHtcclxuLy8gICAgIGVtYWlsOiBcIlwiLFxyXG4vLyAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbi8vICAgICBwYXNzd29yZDogXCJcIixcclxuLy8gICAgIHJlcGVhdFBhc3N3b3JkOiBcIlwiLFxyXG4vLyAgIH07XHJcblxyXG4vLyAgIC8vIFRPRE86IFdvdWxkbid0IGl0IGJlIGVhc3kgdG8gbWFrZSBpdCBzbyB0aGUgZW1haWwgaXMgdmFsaWRhdGVkIGFzIHRoZSB1c2VyIHR5cGVzPyBNYXliZSBvbiBhIHNsaWdodCBkZWxheT8gU2FtZSB3aXRoIHRoZSB1c2VybmFtZSBhbmQgcGFzc3dvcmQ/XHJcblxyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIGNvbnN0IHsgdXNlckNyZWF0aW9uU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e1wibWItNVwifT5cclxuLy8gICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXhXaWR0aDogXCIzNnJlbVwiIH19IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuLy8gICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbi8vICAgICAgICAgICAgIDxGb3JtPlxyXG4vLyAgICAgICAgICAgICAgIHsvKiA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlckVtYWlsXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbCBBZGRyZXNzPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuLy8gICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLklOVkFMSURfRU1BSUxcclxuLy8gICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cclxuLy8gICAgICAgICAgICAgICAgIDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4vLyAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD4gKi99XHJcbi8vICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU5ld1VzZXJOYW1lXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Vc2VybmFtZTwvRm9ybS5MYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuLy8gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbi8vICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuLy8gICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5VU0VSTkFNRV9UQUtFTlxyXG4vLyAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICBVc2VybmFtZSBpcyBhbHJlYWR5IHRha2VuLlxyXG4vLyAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1OZXdVc2VyUGFzc3dvcmRcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4vLyAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbi8vICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT1cclxuLy8gICAgICAgICAgICAgICAgICAgICBVc2VyQ3JlYXRpb25TdGF0dXNlcy5QQVNTV09SRFNfRE9OVF9NQVRDSFxyXG4vLyAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuLy8gICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtTmV3VXNlclJlcGVhdFBhc3N3b3JkXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5SZXBlYXQgUGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbi8vICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbi8vICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVwZWF0UGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbi8vICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlBBU1NXT1JEU19ET05UX01BVENIXHJcbi8vICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkcyBkb24mYXBvczt0IG1hdGNoLlxyXG4vLyAgICAgICAgICAgICAgICAgPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbi8vICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgIDxCdXR0b25cclxuLy8gICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4vLyAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4vLyAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgfHxcclxuLy8gICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyQ3JlYXRpb25TdGF0dXMgPT0gVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTU1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXRGb3JtKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuZW1haWwsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VybmFtZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhc3N3b3JkLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVwZWF0UGFzc3dvcmRcclxuLy8gICAgICAgICAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4vLyAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJDcmVhdGlvblN0YXR1cyA9PVxyXG4vLyAgICAgICAgICAgICAgICAgVXNlckNyZWF0aW9uU3RhdHVzZXMuU1VDQ0VTUyAmJiAoXHJcbi8vICAgICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgQWNjb3VudCBjcmVhdGVkISBZb3UgbWF5IG5vdyA8YSBocmVmPVwiL2xvZ2luXCI+bG9nIGluPC9hPi5cclxuLy8gICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbi8vICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICB7dXNlckNyZWF0aW9uU3RhdHVzID09IFVzZXJDcmVhdGlvblN0YXR1c2VzLlBST0NFU1NJTkcgJiYgKFxyXG4vLyAgICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJpbmZvXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgLz4gUHJvY2Vzc2luZy4uLlxyXG4vLyAgICAgICAgICAgICAgICAgPC9BbGVydD5cclxuLy8gICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICA8L0Zvcm0+XHJcbi8vICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuLy8gICAgICAgICA8L0NhcmQ+XHJcbi8vICAgICAgIDwvQ29udGFpbmVyPlxyXG4vLyAgICAgKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBOZXdVc2VyRm9ybSA9IGNvbm5lY3QoXHJcbi8vICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4vLyAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4vLyApKFVuY29ubmVjdGVkTmV3VXNlckZvcm0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9