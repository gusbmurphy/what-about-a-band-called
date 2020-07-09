import React from "react";
import { BandList } from "./BandList";
import { BandSortTypes } from "../store/actions/types";

export const TheLists = () => (
  <>
    <h4>Most Recent Bands</h4>
    <BandList maxBands={10} sortBy={BandSortTypes.MOST_RECENT} />
    <h4>Bottom 10 Bands</h4>
    <BandList maxBands={10} sortBy={BandSortTypes.WORST} />
    <h4>Top 10 Bands</h4>
    <BandList maxBands={10} sortBy={BandSortTypes.BEST} />
  </>
);
