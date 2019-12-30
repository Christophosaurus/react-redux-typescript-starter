import React from "react";

// FortAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngry, faEllipsisH, faCog } from '@fortawesome/free-solid-svg-icons'

export const Loading = (): JSX.Element => {
  return (
    <div className="loading">
      <div className="loading__spinner">
        <FontAwesomeIcon icon={faAngry} spin />
      </div>
      <div className="loading__text">
        {/* <FontAwesomeIcon icon={faEllipsisH} spin /> */}
        <p>Loading Abougt Something</p>
        <p><FontAwesomeIcon icon={faEllipsisH} /> &nbsp;Loading&nbsp;<FontAwesomeIcon icon={faEllipsisH} /></p>
        <p>Loading About Something Else</p>
        
        <FontAwesomeIcon icon={faCog} spin />
        {/* <FontAwesomeIcon icon={faEllipsisH} pulse /> */}
      </div>
    </div>
  );
};
