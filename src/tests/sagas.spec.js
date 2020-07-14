import "chai/register-should";
import { cloneableGenerator } from "@redux-saga/testing-utils";
import { take, put, call, actionChannel } from "redux-saga/effects";
import { channel } from "redux-saga";
import axios from "axios";

import * as sagas from "../app/store/sagas";
import { fetchBands } from "../app/store/sagas/watch-fetch-bands";
import * as actionCreators from "../app/store/actions/creators";
import * as actionTypes from "../app/store/actions/types";
import * as paths from "../server/paths";

// describe("Redux Saga Unit/Component Tests", function () {
//   describe("Band Fetching Saga", function () {
//     let generator = cloneableGenerator(sagas.watchFetchBandsSaga)();

//     it("creates an action channel for band fetch request actions", function () {
//       generator
//         .next()
//         .value.should.deep.equal(
//           actionChannel(actionTypes.REQUEST_FETCH_BANDS)
//         );
//     });

//     it("passes the maximum bands and sort type from a request into the fetch bands generator", function () {
//       let maxBands = 30;
//       let sortBy = "SORTING_TYPE";
//       let mockChannel = channel();
//       generator.next(mockChannel).value.should.deep.equal(take(mockChannel));
//       generator
//         .next({ maxBands, sortBy })
//         .value.should.deep.equal(call(fetchBands, maxBands, sortBy));
//     });

//     describe("Fetch Bands Generator", function () {
//       let maxBands = 30;
//       let sortBy = "SORTING_TYPE";
//       let generator = cloneableGenerator(fetchBands)(maxBands, sortBy);

//       it("yields a call Effect to get bands with the provided requirements", function () {
//         generator.next().value.should.deep.equal(
//           call(axios.post, paths.serverUrl + paths.postBands, {
//             maxBands,
//             sortBy,
//           })
//         );
//       });
//       it("dispatches a fetch bands success action with the retrieved bands if the response status is 200", function () {
//         let clone = generator.clone();
//         let data = "data";
//         clone
//           .next({ status: 200, data })
//           .value.should.deep.equal(put(actionCreators.fetchBandsSuccess(data)));
//       });
//       it("dispatches a fetch bands failure action if the response is not 500", function () {
//         let clone = generator.clone();
//         clone
//           .next({ status: 500 })
//           .value.should.deep.equal(put(actionCreators.fetchBandsFailure()));
//       });
//     });

//     // it("should yield a call Effect to the get bands url", function () {
//     //   generator
//     //     .next()
//     //     .value.should.deep.equal(
//     //       call(axios.get, paths.serverUrl + paths.postBands)
//     //     );
//     // });

//     // it("should dispatch a FETCH_BANDS_FAILURE action if the server response code is not 200", function () {
//     //   let clone = generator.clone();
//     //   clone
//     //     .next({ status: 500 })
//     //     .value.should.deep.equal(put(actionCreators.fetchBandsFailure()));
//     // });

//     // it("should dispatch a fetch bands success action with the retrieved bands if there was no server error", function () {
//     //   let clone = generator.clone();
//     //   let fakeBands = "FAKEBANDS";
//     //   clone
//     //     .next({ status: 200, data: fakeBands })
//     //     .value.should.deep.equal(
//     //       put(actionCreators.fetchBandsSuccess(fakeBands))
//     //     );
//     // });
//   });

//   describe("Band Creation Saga", function () {
//     let generator = cloneableGenerator(sagas.bandCreationSaga)();

//     it("waits for a CREATE_BAND_BEGIN action", function () {
//       generator
//         .next()
//         .value.should.deep.equal(take(actionTypes.CREATE_BAND_BEGIN));
//     });

//     let creatingUserId = "userId1";
//     let bandName = "bandName1";

//     it("yields a call to the new band route with the info from the CREATE_BAND_BEGIN action", function () {
//       generator.next({ creatingUserId, bandName }).value.should.deep.equal(
//         call(axios.post, paths.serverUrl + paths.newBand, {
//           creatingUserId,
//           bandName,
//         })
//       );
//     });

//     let newBandId = "bandId1";

//     it("if the response status is 200, yields a successful band creation action with the new band info and the id returned from the post call", function () {
//       let clone = generator.clone();
//       clone.next({ status: 200, newBandId }).value.should.deep.equal(
//         put(
//           actionCreators.bandCreationSuccess({
//             creatingUserId,
//             bandName,
//             _id: newBandId,
//             score: 0,
//           })
//         )
//       );
//     });

//     it("if the response status is not 200, puts a band creation failure action with the reason", function () {
//       let clone = generator.clone();
//       let reason = "reason";
//       clone
//         .next({
//           status: 500,
//           data: { reason },
//         })
//         .value.should.deep.equal(
//           put(actionCreators.bandCreationFailure(reason))
//         );
//     });
//   });

//   describe("Band Score Modification Saga", function () {
//     let generator = cloneableGenerator(sagas.bandScoreModificationSaga)();

//     it("waits for a MODIFY_BAND_SCORE_BEGIN action", function () {
//       generator
//         .next()
//         .value.should.deep.equal(take(actionTypes.MODIFY_BAND_SCORE_BEGIN));
//     });

//     let targetBandId = "bandId1";
//     let modifyingUserId = "userId1";
//     let modificationValue = 1;

//     it("yields a call effect to post to the band modification route with the info from the begin action", function () {
//       generator
//         .next({
//           targetBandId,
//           modifyingUserId,
//           modificationValue,
//         })
//         .value.should.deep.equal(
//           call(axios.post, paths.serverUrl + paths.modifyBand, {
//             targetBandId,
//             modifyingUserId,
//             modificationValue,
//           })
//         );
//     });
//     it("if the response status is 200, it yields a put effect that the band score modification was successful", function () {
//       let clone = generator.clone();
//       clone
//         .next({ status: 200 })
//         .value.should.deep.equal(
//           put(
//             actionCreators.modifyBandScoreSuccess(
//               targetBandId,
//               modificationValue
//             )
//           )
//         );
//     });
//     it("if the response code was not 200, it puts a failure action", function () {
//       let clone = generator.clone();
//       clone
//         .next({ status: 500 })
//         .value.should.deep.equal(put(actionCreators.modifyBandScoreFailure()));
//     });
//   });

//   describe("User Authentication Saga", function () {
//     let generator = cloneableGenerator(sagas.userAuthenticationSaga)();

//     it("waits for an AUTHENTICATE_USER_BEGIN action", function () {
//       generator
//         .next()
//         .value.should.deep.equal(take(actionTypes.AUTHENTICATE_USER_BEGIN));
//     });

//     let username = "username1";
//     let password = "password1";

//     it("yields a call effect to post to the authentication route with the username and password from the begin action", function () {
//       generator.next({ username, password }).value.should.deep.equal(
//         call(axios.post, paths.serverUrl + paths.authenticate, {
//           username,
//           password,
//         })
//       );
//     });

//     let userId = "userId1";
//     let bandsModified = ["band1", "band2"];

//     it("if the response status is 200, it yields a put effect that the authentication was successful with the user's id, name, and array of modified bands", function () {
//       let clone = generator.clone();
//       clone
//         .next({ status: 200, data: { userId, bandsModified, username } })
//         .value.should.deep.equal(
//           put(
//             actionCreators.authenticateUserSuccess(
//               userId,
//               username,
//               bandsModified
//             )
//           )
//         );
//     });

//     let reason = "reason1";

//     // TODO: This test needs to be rewritten
//     it.skip("if the response code was not 200, it puts a failure action with the reason", function () {
//       let clone = generator.clone();
//       clone
//         .next({ status: 500, data: { reason } })
//         .value.should.deep.equal(
//           put(actionCreators.authenticateUserFailure(reason))
//         );
//     });
//   });

//   describe("User Creation Saga", function () {
//     let generator = cloneableGenerator(sagas.userCreationSaga)();

//     it("waits for a CREATE_USER_BEGIN action", function () {
//       generator
//         .next()
//         .value.should.deep.equal(take(actionTypes.CREATE_USER_BEGIN));
//     });

//     let username = "username1";
//     let password = "password1";

//     it("yields a call effect to post to the user creation route with the username and password provided by the begin action", function () {
//       generator.next({ username, password }).value.should.deep.equal(
//         call(axios.post, paths.serverUrl + paths.createUser, {
//           username,
//           password,
//         })
//       );
//     });

//     it("yields a put effect with a user creation success action if the response status was 200", function () {
//       let clone = generator.clone();
//       clone
//         .next({ status: 200 })
//         .value.should.deep.equal(put(actionCreators.createUserSuccess()));
//     });

//     let reason = "reason1";

//     it("yields a put effect with a user creation failure action with a reason if the response status was not 200", function () {
//       let clone = generator.clone();
//       clone
//         .next({ status: 500, data: { reason } })
//         .value.should.deep.equal(put(actionCreators.createUserFailure(reason)));
//     });
//   });
// });
