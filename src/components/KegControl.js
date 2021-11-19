import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage:false
    };
  }

  handleClick = () => {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm />
      buttonText = "Back to Keg List";
    } else {
      currentlyVisibleState = <KegList />
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