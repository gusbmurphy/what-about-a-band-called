import { shallow } from "enzyme";
import { BandModButtonGroup } from "./BandModButtonGroup";
import sinon from "sinon";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import React from "react";

describe("BandModButtonGroup Presentation", function () {
  it("has two Bootstrap 'ToggleButtons' in a 'ToggleButtonGroup'", function () {
    let wrapper = shallow(<BandModButtonGroup userIsAuthorized={true} />);
    let group = wrapper.find(ToggleButtonGroup);
    let buttons = group.find(ToggleButton);
    group.should.have.lengthOf(1, "there should be a ToggleButtonGroup");
    buttons.should.have.lengthOf(
      2,
      "there should be 2 ToggleButtons in the group"
    );
  });

  it("disables the buttons if the user is not authorized", function () {
    let wrapper = shallow(<BandModButtonGroup userIsAuthorized={false} />);
    let buttons = wrapper.find(ToggleButtonGroup).find(ToggleButton);
    buttons.forEach((button) => {
      button.prop("disabled").should.be.true;
    });
  });

  it("each button should have a value property, and there should be one with '-1', and one with '1'", function () {
    let wrapper = shallow(<BandModButtonGroup userIsAuthorized={false} />);
    let buttons = wrapper.find(ToggleButtonGroup).find(ToggleButton);
    buttons.forEach((button) => {
      button.props().should.have.property("value");
    });
    buttons
      .findWhere((button) => button.prop("value") == 1)
      .should.have.lengthOf(1, "one button should have a value of '1'");
    buttons
      .findWhere((button) => button.prop("value") == -1)
      .should.have.lengthOf(1, "one button should have a value of '-1'");
  });

  it("if there has been a modification, the correct button is toggled", function () {
    let wrapper = shallow(
      <BandModButtonGroup userIsAuthorized={false} modPerformed={-1} />
    );
    let negativeButton = wrapper
      .find(ToggleButtonGroup)
      .find(ToggleButton)
      .findWhere((button) => button.prop("value") == -1);
    negativeButton.prop("checked").should.be.true;
    wrapper = shallow(
      <BandModButtonGroup userIsAuthorized={false} modPerformed={1} />
    );
    let positiveButton = wrapper
      .find(ToggleButtonGroup)
      .find(ToggleButton)
      .findWhere((button) => button.prop("value") == 1);
    positiveButton.prop("checked").should.be.true;
  });

  // TODO: Why is testing forms so hard?
  it.skip("pressing a nontoggled button calls the provided 'modifyBand' function with the correct value", function () {
    let spy = sinon.spy();
    let wrapper = shallow(
      <BandModButtonGroup
        userIsAuthorized={false}
        modPerformed={0}
        modifyBand={spy}
      />
    );

    let positiveButton = wrapper
      .find(ToggleButtonGroup)
      .find(ToggleButton)
      .findWhere((button) => button.prop("value") == 1);
    let negativeButton = wrapper
      .find(ToggleButtonGroup)
      .find(ToggleButton)
      .findWhere((button) => button.prop("value") == -1);

    positiveButton.simulate("click");
    negativeButton.simulate("click");

    spy.calledOnceWith(1).should.be.true;
    spy.calledOnceWith(-1).should.be.true;
  });
});
