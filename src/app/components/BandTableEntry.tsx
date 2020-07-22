// import PropTypes from "prop-types";
import React from "react";
import { BandModButtonGroup } from "./BandModButtonGroup";

type BandTableEntryProps = {
  bandName: string;
  bandScore: number;
  bandCreatorName: string;
  userIsAuthenticated: boolean;
  modificationPerformed: number;
  modifyBand: (modValue: number) => void;
};

// BandTableEntry.propTypes = {
//   bandName: PropTypes.string.isRequired,
//   bandScore: PropTypes.number.isRequired,
//   bandCreatorName: PropTypes.string.isRequired,
//   userIsAuthenticated: PropTypes.bool.isRequired,
//   modificationPerformed: PropTypes.number,
//   modifyBand: PropTypes.func.isRequired,
// };

export default class BandTableEntry extends React.Component<
  BandTableEntryProps
> {
  constructor(props) {
    super(props);
    this.handleClick = this.handleModificationClick.bind(this);
  }

  handleModificationClick(modValue): void {
    this.props.modifyBand(modValue);
  }

  render() {
    const {
      bandName,
      bandScore,
      bandCreatorName,
      userIsAuthenticated,
      modificationPerformed,
      modifyBand,
    } = this.props;

    return (
      <tr className="bandListing">
        <td>
          <BandModButtonGroup
            userIsAuthorized={userIsAuthenticated}
            modPerformed={modificationPerformed}
            modifyBand={modifyBand}
          />
        </td>
        <td>{bandScore}</td>
        <td>{bandName}</td>
        <td className="text-muted">from {bandCreatorName}</td>
      </tr>
    );
    // let incButton = (
    //   <Button
    //     className="incScoreButton"
    //     onClick={() => this.handleModificationClick(1)}
    //     size="sm"
    //   >
    //     +
    //   </Button>
    // );
    // let decButton = (
    //   <Button
    //     className="decScoreButton"
    //     onClick={() => this.handleModificationClick(-1)}
    //     size="sm"
    //   >
    //     -
    //   </Button>
    // );
    // let disabledIncButton = (
    //   <Button className="incScoreButton" disabled size="sm">
    //     +
    //   </Button>
    // );
    // let disabledDecButton = (
    //   <Button className="decScoreButton" disabled size="sm">
    //     -
    //   </Button>
    // );

    // const getButtons = () => {
    //   if (!userIsAuthenticated) {
    //     return (
    //       <>
    //         {disabledIncButton}
    //         {disabledDecButton}
    //       </>
    //     );
    //   }

    //   switch (modificationPerformed) {
    //     case 1:
    //       return (
    //         <>
    //           {disabledIncButton}
    //           {decButton}
    //         </>
    //       );
    //     case -1:
    //       return (
    //         <>
    //           {incButton}
    //           {disabledDecButton}
    //         </>
    //       );
    //     default:
    //       break;
    //   }

    //   return (
    //     <>
    //       {incButton}
    //       {decButton}
    //     </>
    //   );
    // };
  }
}
