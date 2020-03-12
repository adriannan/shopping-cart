import React, { Component } from "react";
import "./styles/App.css";
import "./styles/components.css";
import NavBar from "./components/NavBar";
import ListItem from "./components/ListItem";
import data from "./data.json";

// function getItems() {
//   fetch("https://www.reasonapps.pl/data.json").then(
//     // fetch("https://www.reasonapps.pl/data.json", { mode: "no-cors" }).then(
//     response => {
//       console.log(response);
//       // if (response.ok) {
//       //   return response;
//       // }
//     }
//   );
//   // .then(response => {
//   //   console.log(response);

//   // });
// }

class App extends Component {
  state = {
    shoppingCart: []
  };
  componentDidMount() {
    // getItems();
  }
  handleAdd = item => {
    console.log(item);
    console.log(this.state.shoppingCart.length);

    this.setState(prevState => ({
      shoppingCart: [...prevState.shoppingCart, item]
    }));
  };
  render() {
    const itemsList = data.map(item => {
      return <ListItem onClick={this.handleAdd} {...item} />;
    });
    return (
      <section className="App" onClick={this.getApi}>
        <NavBar items={this.state.shoppingCart.length} />
        <div className="container-list container-fluid">
          <ul className="list-group">
            {itemsList.slice(0, 10)}state:{this.state.shoppingCart.length}
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
