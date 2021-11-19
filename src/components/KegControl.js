import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage:false,
      mainKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKeg = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
    formVisibleOnPage:false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleSellPint = () => {
    let tappingKeg = this.state.mainKegList.filter(keg => keg.id === this.state.selectedKeg.id)[0];

    if (tappingKeg.pintsLeft === 0) {
      alert("OUT OF STOCK, JERK");
    } else {
      tappingKeg = tappingKeg.pintsLeft --;

      this.setState({
        tappingKeg: tappingKeg
      });
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} 
      onClickingSellPint={this.handleSellPint} />
      buttonText = "Back to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKeg} />
      buttonText = "Back to Keg List";
    } else {
      currentlyVisibleState = 
      <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add a Keg"
    }
    return (
      <>
      {currentlyVisibleState}
      <button id="friendButton" onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;