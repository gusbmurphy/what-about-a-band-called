// import PropTypes from "prop-types";
import { Types as MongooseTypes } from "mongoose";
import React, { SyntheticEvent, useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../store/";
import { bandActions } from "../store/slices/bands-slice";
import { AuthenticationStatuses, BandSortTypes } from "../store/statuses";
import {
  BandModButtonGroup,
  PlaceholderBandModButtonGroup
} from "./BandModButtonGroup";
import { createUserProfileUrl } from "./utility/create-user-profile-url";
import { sortAndLimitBands } from "./utility/limit-sort-bands";

export function BigBandTable(): JSX.Element {
  const appIsFetchingBands = useTypedSelector(
    (state) => state.bands.pendingFetches > 0
  );
  const bands = useTypedSelector((state) => [...state.bands.items]);
  const userIsAuthenticated = useTypedSelector(
    (state) =>
      state.session.authenticationStatus == AuthenticationStatuses.AUTHENTICATED
  );
  const userId = useTypedSelector((state) => state.session.userId);
  const usersModifications = useTypedSelector(
    (state) => state.session.bandsModified
  );

  const [sortType, setSortType] = useState(BandSortTypes.MOST_RECENT);
  const [shouldFetchBands, setShouldFetchBands] = useState(false);
  const bandsPerFetch = 20;
  const [maxBandsDisplayed, setMaxBandsDisplayed] = useState(bandsPerFetch);

  const dispatch = useDispatch();

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

  function requestFetchBands() {
    dispatch(
      bandActions.requestFetchBands({
        maxBands: maxBandsDisplayed,
        sortBy: sortType,
      })
    );
  }

  function getUserModificationToBand(thisBandId: MongooseTypes.ObjectId) {
    const modification = usersModifications.find(
      (modification) => modification.targetBandId === thisBandId
    );
    if (modification) return modification.value;
    else return 0;
  }

  useEffect(() => {
    requestFetchBands();
  }, []);

  useEffect(() => {
    requestFetchBands();
    setShouldFetchBands(false);
  }, [maxBandsDisplayed, shouldFetchBands]);

  useEffect(() => {
    setMaxBandsDisplayed(bandsPerFetch);
    setShouldFetchBands(true);
  }, [sortType]);

  const desiredBands = sortAndLimitBands(bands, sortType, maxBandsDisplayed);

  const sortRadios = [
    { value: BandSortTypes.BEST, name: "Best" },
    { value: BandSortTypes.WORST, name: "Worst" },
    { value: BandSortTypes.MOST_RECENT, name: "Most Recent" },
  ];

  return (
    <Card>
      <Card.Header>
        <ButtonGroup toggle>
          {sortRadios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              value={radio.value}
              name="sortRadio"
              checked={radio.value === sortType}
              onChange={(e: SyntheticEvent) => {
                e.preventDefault();
                const currentTarget = e.currentTarget as typeof e.currentTarget & {
                  value: string;
                };
                const sortTypeAsNumber: number = parseInt(currentTarget.value);
                setSortType(sortTypeAsNumber);
              }}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Card.Header>
      <Card.Body>
        <Table size="sm" striped bordered>
          <tbody>
            {appIsFetchingBands ? (
              <>{getEntryPlaceholders(bandsPerFetch)}</>
            ) : (
              <>
                {desiredBands.map((band) => (
                  <tr key={String(band._id)}>
                    <td>
                      <BandModButtonGroup
                        userIsAuthorized={userIsAuthenticated}
                        modPerformed={getUserModificationToBand(band._id)}
                        modifyBand={(modValue, undoValue) =>
                          addPointsTo(band._id, modValue, userId, undoValue)
                        }
                      />{" "}
                      <Badge variant="secondary">{band.score}</Badge>{" "}
                      {band.name}{" "}
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
        <Button
          variant="secondary"
          block
          onClick={() =>
            setMaxBandsDisplayed(maxBandsDisplayed + bandsPerFetch)
          }
        >
          Show me more...
        </Button>
      </Card.Body>
    </Card>
  );
}

function getEntryPlaceholders(numOfPlaceholders: number): JSX.Element[] {
  const placeholders: JSX.Element[] = [];
  for (let i = 0; i < numOfPlaceholders; i++) {
    placeholders.push(BandTableEntryPlaceholder());
  }
  return placeholders;
}

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
