import React from "react";
import PropTypes from "prop-types";

const mainKegList = [
  {
    beer: 'Blind Pig',
    style: 'IPA',
    brewery: 'Russian River',
    description: 'Full-bodied, very hoppy, with citrus, pine, fruity notes, and a nice dry, bitter finish!',
    abv: '6.25',
    price: '319'
  },
  {
    beer: 'Pallet Jack',
    style: 'IPA',
    brewery: 'Barley Brown\'s',
    description: 'Multiple dry hop additions deliver an awesome hop aroma filled with citrus, tropical fruit, and a touch of pine. The light body has just enough malt complexity to balance the hops. Multi time GABF medalist.',
    abv: '7.2',
    price: '150'
  }
]

function Keg(props){
  const kegStyles = {
    className: 'card',
    width:'500px'
  }

  return (
    <div className="card">
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