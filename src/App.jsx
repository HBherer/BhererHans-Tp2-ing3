import React from "react";
import CardScreen from "./Project/CardScreen";
import HeaderPage from "./Project/Components/HeaderPage";
import FooterPage from "./Project/Components/FooterPage";

class App extends React.Component {
  render() {
    return (
      <>
        <HeaderPage title="The Cat API" />
        <CardScreen></CardScreen>
        <FooterPage></FooterPage>
      </>
    );
  }
}

export default App;