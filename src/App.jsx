import React from "react";
import CardScreen from "./Project/CardScreen";
import HeaderPage from "./Project/Components/HeaderPage";
import FooterPage from "./Project/Components/FooterPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderPage title="The Cat API" />
        <CardScreen></CardScreen>
        <FooterPage></FooterPage>
      </div>
    );
  }
}

export default App;