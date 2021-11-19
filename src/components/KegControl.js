import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage:false,
      mainKegList: []
    };
  }

  handleClick = () => {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
  }

  handleAddingNewKeg = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
    formVisibleOnPage:false});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKeg} />
      buttonText = "Back to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} />
      buttonText = "Add a Keg"
    }
    return (
      <>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;