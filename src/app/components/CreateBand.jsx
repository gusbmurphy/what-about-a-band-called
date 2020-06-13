import React from "react";
import { connect } from "react-redux";

import { requestBandCreation } from "../store/mutations"

const UnconnectedCreateBand = ({ createBand }) => (
    <div>
        What about a band called <input type="text" id="bandName" name="bandName"></input>
        <button onClick={() => createBand(document.getElementById("bandName").value)}>Create Band</button>
    </div>
)

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        createBand: (name) => {
            dispatch(requestBandCreation("U1", name));
        }
    }
}

export const CreateBand = connect(mapStateToProps, mapDispatchToProps)(UnconnectedCreateBand);