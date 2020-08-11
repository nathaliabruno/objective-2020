import React from 'react';
import DetailsContent from './DetailsContent';

function Details(props) {

  const {
    details,
    id,
    updateDetails
  } = props

  const isVisible = id > 0


  return (

    <div className={`details ${isVisible && '--active'}`}>
      <div className="details-overlay" onClick={(e) => updateDetails(0)}/>
      <div className="details-modal">
        <button className="details-close" onClick={(e) => updateDetails(0)}>+</button>
        {details && <DetailsContent characterDetails={details} id={id} /> }
      </div>
    </div>
  )
}

export default Details