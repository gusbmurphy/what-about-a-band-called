import sinon from "sinon";
import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { AuthenticationStatuses, BandSortTypes } from "../store/statuses";
import { BandList } from "./BandList";
import { bandActions } from "../store/slices/bands-slice";
import { createMockBands } from "../../utility/mock-bands";
import BandListing from "./BandListing";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("Band Components", function () {
  let maxBands = 15;
  let sortBy = BandSortTypes.BEST;
  let store = mockStore({
    bands: { items: createMockBands(30), pendingFetches: 0 },
    session: {
      authenticationStatus: AuthenticationStatuses.NOT_AUTHENTICATED,
      userId: null,
    },
  });
  let storeSpy = sinon.spy(store, "dispatch");
  let wrapper = mount(
    <Provider store={store}>
      <BandList maxBands={maxBands} sortBy={sortBy} />
    </Provider>
  );

  describe("Band List", function () {
    it("dispatches a request to fetch bands with the parameters provided to props on mount", function () {
      storeSpy.calledOnceWith(
        bandActions.requestFetchBands({ maxBands, sortBy })
      ).should.be.true;
    });

    it("renders just a div with the class '.loadingMessage' if the app is still fetching bands", function () {
      let loadingStore = mockStore({
        bands: { items: [], pendingFetches: 2 },
        session: {
          authenticationStatus: AuthenticationStatuses.NOT_AUTHENTICATED,
          userId: null,
        },
      });
      let loadingWrapper = mount(
        <Provider store={loadingStore}>
          <BandList maxBands={maxBands} sortBy={sortBy} />
        </Provider>
      );

      loadingWrapper.find("div.loadingMessage").should.have.lengthOf(1);
      loadingWrapper.find("div.bandList").should.have.lengthOf(0);
    });

    it("renders a div with the class 'bandList' if the app is not fetching bands", function () {
      wrapper.find("div.bandList").should.have.lengthOf(1);
    });

    it("renders one div with the class 'bandListing' for the maximum number of bands", function () {
      wrapper
        .find("div.bandList")
        .find("div.bandListing")
        .should.have.lengthOf(maxBands);
    });

    it("correctly sorts the bands by highest score");
    it("correctly sorts the bands by lowest score");
    it("correctly sorts the bands by latest date");
  });

  describe("Individual Band Listing", function () {
    let bandName = "bandName";
    let bandId = "1234";
    let bandScore = 32;
    let bandCreatorName = "creatorName";

    let wrapper = mount(
      <BandListing
        bandId={bandId}
        bandName={bandName}
        bandScore={bandScore}
        bandCreatorName={bandCreatorName}
        userIsAuthenticated={true}
      />
    );
    let divWrapper = wrapper.find("div.bandListing");

    it("renders a div with the class 'bandListing'", function () {
      divWrapper.should.have.lengthOf(1);
    });

    it("displays the band name", function () {
      divWrapper.text().should.contain(bandName);
    });

    it("displays the points the band has", function () {
      divWrapper.text().should.contain(bandScore);
    });

    it("displays the band's creator", function () {
      divWrapper.text().should.contain(bandCreatorName);
    });

    it("has a button for adding score", function () {
      divWrapper.find("button.incScoreButton").should.have.lengthOf(1);
    });

    it("has a button for adding score", function () {
      divWrapper.find("button.decScoreButton").should.have.lengthOf(1);
    });

    it("has the buttons disabled if the user is not logged in", function () {
      let notAuthenticatedWrapper = mount(
        <BandListing
          bandId={bandId}
          bandName={bandName}
          bandScore={bandScore}
          bandCreatorName={bandCreatorName}
          userIsAuthenticated={false}
        />
      );

      let buttonsWrapper = notAuthenticatedWrapper
        .find("div.bandListing")
        .find("button[disabled]");
      buttonsWrapper.should.have.lengthOf(2);
    });

    it("disables the increment button if the user has added points to the band", function () {
      let posModWrapper = mount(
        <BandListing
          bandId={bandId}
          bandName={bandName}
          bandScore={bandScore}
          bandCreatorName={bandCreatorName}
          userIsAuthenticated={true}
          modificationPerformed={1}
        />
      );
      posModWrapper
        .find("div.bandListing")
        .find("button.incScoreButton[disabled]")
        .should.have.lengthOf(1);
    });

    it("disables the decrement button if the user has subtracted points from the band", function () {
      let posModWrapper = mount(
        <BandListing
          bandId={bandId}
          bandName={bandName}
          bandScore={bandScore}
          bandCreatorName={bandCreatorName}
          userIsAuthenticated={true}
          modificationPerformed={-1}
        />
      );
      posModWrapper
        .find("div.bandListing")
        .find("button.decScoreButton[disabled]")
        .should.have.lengthOf(1);
    });

    it("calls a provided function when the active buttons are clicked with the correct modification values", function () {
      let spy = sinon.spy();
      let modWrapper = mount(
        <BandListing
          bandId={bandId}
          bandName={bandName}
          bandScore={bandScore}
          bandCreatorName={bandCreatorName}
          userIsAuthenticated={true}
          modifyBand={spy}
        />
      );

      let incWrapper = modWrapper
        .find("div.bandListing")
        .find("button.incScoreButton");
      let decWrapper = modWrapper
        .find("div.bandListing")
        .find("button.decScoreButton");

      incWrapper.simulate("click");
      spy.calledWith(1).should.be.true;
      decWrapper.simulate("click");
      spy.calledWith(-1).should.be.true;
    });
  });

  // describe("List/Listing Integration Tests", function () {
  //   let bandId = "12345";
  //   let bandName = "bandName";
  //   let bandOwnerId = "1234";
  //   let bandOwnerName = "ownerName";
  //   let currentUserId = "currentId";
  //   let singleBandStore = mockStore({
  //     bands: {
  //       items: [
  //         {
  //           _id: bandId,
  //           name: bandName,
  //           ownerId: bandOwnerId,
  //           ownerName: bandOwnerName,
  //         },
  //       ],
  //       pendingFetches: 0,
  //     },
  //     session: {
  //       authenticationStatus: AuthenticationStatuses.AUTHENTICATED,
  //       userId: currentUserId,
  //     },
  //   });
  //   let singleBandWrapper = mount(
  //     <Provider store={singleBandStore}>
  //       <BandList maxBands={maxBands} sortBy={sortBy} />
  //     </Provider>
  //   );
  //   let singleBandDispatch = sinon.spy(singleBandStore, "dispatch");
  //   it.skip("dispatches an action to begin the band score modification with the correct band id, user id and modification value when a band listing's modification buttons are clicked", function () {
  //     let listingWrapper = singleBandWrapper
  //       .find("div.bandList")
  //       .find("div.bandListing")
  //       .first();
  //     let incButtonWrapper = listingWrapper.find("button.incScoreButton");
  //     incButtonWrapper.simulate("click");
  //     console.log(singleBandDispatch.firstCall)
  //     singleBandDispatch.calledWith(
  //       beginModifyBandScore(bandId, currentUserId, 1)
  //     ).should.be.true;
  //   });
  // });
});
