import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const {keg} = props;

  return(
    <>
      <div class="container">
        <div className="card">
          <h3>{keg.beer} {keg.style}</h3>
          <h4>{keg.brewery}</h4>
          <p>{keg.description}</p>
          <p>ABV: {keg.abv} %</p>
          <p>Price Per Keg: $ {keg.price}</p>
          <p>Price Per Pint: $ {((keg.price/124)*3).toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;