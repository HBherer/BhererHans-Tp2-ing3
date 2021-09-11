import React from "react";
import CardScreen from "./Project/CardScreen";
import HeaderBar from "./Project/Components/HeaderBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar title="The Cat API" />
        <CardScreen></CardScreen>
      </div>
    );
  }
}

export default App;