import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { bandActions } from "../store/slices/bands-slice";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class UnconnectedCreateBandForm extends React.Component {
  render() {
    let { createBand, session } = this.props;
    return (
      <InputGroup>
        <FormControl type="text" />
        <InputGroup.Append>
          <Button variant="primary">Submit</Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

UnconnectedCreateBandForm.propTypes = {
  createBand: PropTypes.func.isRequired,
  session: PropTypes.shape({
    userId: PropTypes.string,
  }),
};

function mapStateToProps(state) {
  return {
    session: state.session,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createBand: (userId, bandName) => {
      dispatch(bandActions.requestBandCreation({ userId, bandName }));
    },
  };
}

export const CreateBandForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedCreateBandForm);
