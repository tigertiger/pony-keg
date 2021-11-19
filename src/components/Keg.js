import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  const kegStyles = {
    className: 'card',
    width:'500px'
  }

  return (
    <div style={kegStyles}>
      <h3>{props.beer} {props.style}</h3>
      <h4>{props.brewery}</h4>
      <p>{props.description}</p>
      <p>ABV: {props.abv} %</p>
      <p>Price Per Keg: $ {props.price}</p>
      <p>Price Per Pint: $ {props.price/124}</p>
    </div>
  );
}

Keg.propTypes = {
  beer: PropTypes.string,
  style: PropTypes.string,
  brewery: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number
}

export default Keg;