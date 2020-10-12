import React, { SyntheticEvent, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../store";
import { bandActions } from "../store/slices/bands-slice";
import { BandSortTypes } from "../store/statuses";
import BandTable from "./BandTable";
import { sortAndLimitBands } from "./utility/limit-sort-bands";

export function ControlledBandTable(): JSX.Element {
  const bands = useTypedSelector((state) => [...state.bands.items]);

  const [sortType, setSortType] = useState(BandSortTypes.MOST_RECENT);
  const [shouldFetchBands, setShouldFetchBands] = useState(false);
  const bandsPerFetch = 20;
  const [maxBandsDisplayed, setMaxBandsDisplayed] = useState(bandsPerFetch);

  const dispatch = useDispatch();

  function requestFetchBands() {
    dispatch(
      bandActions.requestFetchBands({
        maxBands: maxBandsDisplayed,
        sortBy: sortType,
      })
    );
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
        <BandTable bands={desiredBands} defaultNumToDisplay={bandsPerFetch} />
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
