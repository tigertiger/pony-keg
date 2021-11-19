import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  return(
    <>
      <div width="500px" className="card">
        <h3>{props.beer} {props.style}</h3>
        <h4>{props.brewery}</h4>
        <p>{props.description}</p>
        <p>ABV: {props.abv} %</p>
        <p>Price Per Keg: $ {props.price}</p>
        <p>Price Per Pint: $ {((props.price/124)*3).toFixed(2)}</p>
      </div>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;