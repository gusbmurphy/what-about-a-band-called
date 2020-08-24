import React, { useEffect, useRef, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import {
  BsCaretDown,
  BsCaretDownFill,
  BsCaretUp,
  BsCaretUpFill,
} from "react-icons/bs";

// TODO: Logging out will still show the BsCarrets as 'filled' if the user modified those bands
export function BandModButtonGroup({
  userIsAuthorized,
  modifyBand,
  modPerformed,
}: {
  userIsAuthorized: boolean;
  modifyBand?: (modValue: number, undoValue?: number) => void;
  modPerformed: number;
}): JSX.Element {
  const [modValue, setModValue] = useState(modPerformed);
  const prevModValue = usePrevious(modValue);

  useEffect(() => {
    if (modValue == 0) {
      // TODO: This act of checking if modifyBand exists seems bad, can we do better?
      if (modifyBand) modifyBand(0, prevModValue);
    } else {
      if (modifyBand) modifyBand(modValue);
    }
  }, [modValue]);

  return (
    <ToggleButtonGroup
      name={"modButtons"}
      value={modValue}
      onChange={(val) => setModValue(modValue + val)}
    >
      <ToggleButton
        name={"negativeButton"}
        value={-1}
        disabled={!userIsAuthorized}
        checked={modPerformed == -1}
      >
        {modValue == -1 ? <BsCaretDownFill /> : <BsCaretDown />}
      </ToggleButton>
      <ToggleButton
        name={"positiveButton"}
        value={1}
        disabled={!userIsAuthorized}
        checked={modPerformed == 1}
      >
        {modValue == 1 ? <BsCaretUpFill /> : <BsCaretUp />}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function PlaceholderBandModButtonGroup(): JSX.Element {
  return (
    <ToggleButtonGroup name={"placeHolderModButtons"}>
      <ToggleButton disabled={true} value={1}>
        <BsCaretDown />
      </ToggleButton>
      <ToggleButton disabled={true} value={2}>
        <BsCaretUp />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
