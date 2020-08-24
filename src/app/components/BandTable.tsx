import { Types as MongooseTypes } from "mongoose";
import React from "react";
import Badge from "react-bootstrap/esm/Badge";
import Spinner from "react-bootstrap/esm/Spinner";
import Table from "react-bootstrap/esm/Table";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BandClass } from "../../server/models/band-model";
import { useTypedSelector } from "../store";
import { bandActions } from "../store/slices/bands-slice";
import { AuthenticationStatuses } from "../store/statuses";
import {
  BandModButtonGroup,
  PlaceholderBandModButtonGroup
} from "./BandModButtonGroup";
import { createUserProfileUrl } from "./utility/create-user-profile-url";


export default function BandTable({
  bands,
  defaultNumToDisplay,
}: {
  bands: BandClass[];
  defaultNumToDisplay: number;
}): JSX.Element {
  const appIsFetchingBands = useTypedSelector(
    (state) => state.bands.pendingFetches > 0
  );
  const userIsAuthenticated = useTypedSelector(
    (state) =>
      state.session.authenticationStatus == AuthenticationStatuses.AUTHENTICATED
  );
  const userId = useTypedSelector((state) => state.session.userId);
  const usersModifications = useTypedSelector(
    (state) => state.session.bandsModified
  );

  const dispatch = useDispatch();

  function getUserModificationToBand(thisBandId: MongooseTypes.ObjectId) {
    const modification = usersModifications.find(
      (modification) => modification.targetBandId === thisBandId
    );
    if (modification) return modification.value;
    else return 0;
  }

  function addPointsTo(
    targetBandId: MongooseTypes.ObjectId,
    modificationValue: number,
    modifyingUserId?: MongooseTypes.ObjectId,
    undoValue?: number
  ) {
    if (modifyingUserId) {
      dispatch(
        bandActions.requestModifyBandScore({
          targetBandId,
          modifyingUserId,
          modificationValue,
          undoValue,
        })
      );
    }
  }

  return (
    <Table size="sm" striped bordered>
      <tbody>
        {appIsFetchingBands ? (
          <>{getEntryPlaceholders(defaultNumToDisplay)}</>
        ) : (
          <>
            {bands.map((band) => (
              <tr key={String(band._id)}>
                <td>
                  <BandModButtonGroup
                    userIsAuthorized={userIsAuthenticated}
                    modPerformed={getUserModificationToBand(band._id)}
                    modifyBand={(modValue, undoValue) =>
                      addPointsTo(band._id, modValue, userId, undoValue)
                    }
                  />{" "}
                  <Badge variant="secondary">{band.score}</Badge> {band.name}{" "}
                  <span className={"font-weight-lighter"}>
                    from{" "}
                    <Link to={createUserProfileUrl(String(band.ownerId))}>
                      {band.ownerName}
                    </Link>
                  </span>
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </Table>
  );
}

function getEntryPlaceholders(numOfPlaceholders: number): JSX.Element[] {
  function BandTableEntryPlaceholder(): JSX.Element {
    return (
      <tr>
        <td>
          <PlaceholderBandModButtonGroup />{" "}
          <Spinner animation="border" variant="primary" size="sm" />
        </td>
      </tr>
    );
  }

  const placeholders: JSX.Element[] = [];
  for (let i = 0; i < numOfPlaceholders; i++) {
    placeholders.push(BandTableEntryPlaceholder());
  }
  return placeholders;
}