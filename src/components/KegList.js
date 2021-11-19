import React from "react";
import Keg from "./Keg";
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
    price: '250'
  }
]

function KegList(props) {
  return (
    <div id="kegGrid">
      {mainKegList.map((keg) =>
      <Keg beer={keg.beer}
      style={keg.style}
      brewery={keg.brewery}
      description={keg.description}
      abv={keg.abv}
      price={keg.price} />
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;