import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({beer: event.target.beer.value, style: event.target.style.value, brewery: event.target.style.brewery, description: event.target.style.description, abv: event.target.abv.value, price: event.target.price.value, id: v4()});
    alert("it works!");
  }

  return(
    <>
    <div className="container">
      <form id="newKeg" onSubmit={handleNewKegFormSubmission}>
        <input
        type="text"
        name="beer"
        placeholder="Beer Name" /><br />

        <input
        type="text"
        name="style"
        placeholder="Beer Style" /><br />

        <input
        type="text"
        name="brewery"
        placeholder="Brewery Name" /><br />

        <textarea
        name="description"
        placeholder="Description & Notes" /><br />

        <input
        type="number"
        name="abv"
        placeholder="Alcohol By Volume" /><br />

        <input
        type="number"
        name="price"
        placeholder="Price Per Keg" /><br />
        <button type="submit">Add Keg</button>
      </form>
    </div>
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;