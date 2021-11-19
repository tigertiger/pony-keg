import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  const kegStyles = {
    width:'500px'
  }

  return (
    <div className="container">
      <div className="card" style={kegStyles} onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.beer} {props.style}</h3>
        <h4>{props.brewery}</h4>
        <p>{props.description}</p>
        <p>ABV: {props.abv} %</p>
        <p>Price Per Keg: $ {props.price}</p>
        <p>Price Per Pint: $ {((props.price/124)*3).toFixed(2)}</p>
      </div>
    </div>
  );
}

Keg.propTypes = {
  beer: PropTypes.string,
  style: PropTypes.string,
  brewery: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;