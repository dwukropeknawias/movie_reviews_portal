import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import homePageLogo from "./images/HomePageLogo.png";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Image centered src={homePageLogo} />
      </div>
    );
  }
}

export default HomePage;
