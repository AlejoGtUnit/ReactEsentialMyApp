import React, { Component } from "react";

import Header from "./components/header";
import Dish from "./components/dish";

class App extends Component {
  
  dish = "tacos";

  render () {
    return (
      <div className="App container">
        <br />
        <Header />
        <Dish />
        Yo como {this.dish}
      </div>
    )
  }
}

export default App;
