import React from "react";
import Header from "./Header";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";

function App(){
  return (
    <React.Fragment>
      <Header />
      <KegList />
      <NewKegForm />
    </React.Fragment>
  );
}

export default App;