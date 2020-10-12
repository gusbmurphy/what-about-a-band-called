// import PropTypes from "prop-types";
import React, { useState, Dispatch, useEffect } from "react";
import { connect, ConnectedProps, useDispatch, useSelector } from "react-redux";
import { bandActions } from "../store/slices/bands-slice";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { AuthenticationStatuses } from "../store/statuses";
import { RootState } from "../store";
import { BandCreationStatuses } from "../store/statuses";
import Spinner from "react-bootstrap/Spinner";
import {
  BandCreatedAlert,
  BandExistsAlert,
  ErrorAlert,
  NoNameAlert,
  UserNotLoggedInAlert,
} from "./CreateBandFormAlerts";

enum CreationAlert {
  Error,
  NoName,
  BandExists,
  BandCreated,
  NotLoggedIn,
}

export function CreateBandForm(): JSX.Element {
  const {
    session: { authenticationStatus, userId, username },
    bands: { creationStatus: bandCreationStatus },
  } = useSelector((state: RootState) => state);
  const [bandName, setBandName] = useState("");
  const [createdName, setCreatedName] = useState("");
  const [alert, setAlert] = useState<CreationAlert | undefined>(undefined);

  const dispatch = useDispatch();

  useEffect(() => {
    switch (bandCreationStatus) {
      case BandCreationStatuses.BAND_EXISTS:
        setAlert(CreationAlert.BandExists);
        return;
      case BandCreationStatuses.ERROR:
        setAlert(CreationAlert.Error);
        return;
      case BandCreationStatuses.CREATED:
        setCreatedName(bandName);
        setBandName("");
        setAlert(CreationAlert.BandCreated);
        return;
    }
  }, [bandCreationStatus]);

  function handleSubmit() {
    if (authenticationStatus == AuthenticationStatuses.AUTHENTICATED) {
      if (bandName == "") {
        setAlert(CreationAlert.NoName);
      } else {
        dispatch(
          bandActions.requestCreateBand({
            creatingUserId: userId!,
            bandName,
            creatingUsername: username!,
          })
        );
      }
    } else {
      setAlert(CreationAlert.NotLoggedIn);
    }
  }

  function DisplayAlert({
    alert,
  }: {
    alert: CreationAlert | undefined;
  }): JSX.Element | null {
    switch (alert) {
      case undefined:
        return null;
      case CreationAlert.BandCreated:
        return BandCreatedAlert(createdName);
      case CreationAlert.BandExists:
        return BandExistsAlert();
      case CreationAlert.Error:
        return ErrorAlert();
      case CreationAlert.NoName:
        return NoNameAlert();
      case CreationAlert.NotLoggedIn:
        return UserNotLoggedInAlert();
      default:
        return null;
    }
  }

  function handleNameChange(e) {
    setBandName(e.target.value);
  }

  return (
    <div className={"mb-3"}>
      <InputGroup size="lg">
        <FormControl
          type="text"
          placeholder="What about a band called..."
          onChange={(e) => handleNameChange(e)}
          value={bandName}
        />
        <InputGroup.Append>
          {bandCreationStatus == BandCreationStatuses.CREATING ? (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </Button>
          ) : (
            <Button variant="primary" onClick={() => handleSubmit()}>
              Submit
            </Button>
          )}
        </InputGroup.Append>
      </InputGroup>
      <DisplayAlert alert={alert} />
    </div>
  );
}
