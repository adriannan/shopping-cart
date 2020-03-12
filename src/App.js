import React, { Component } from "react";
import "./styles/App.css";
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
    shoppingCart: [],
    availableProducts: 1
  };
  componentDidMount() {
    // getItems();
  }

  render() {
    const itemsList = data.map(item => {
      return <ListItem {...item} />;
    });
    return (
      <section className="App" onClick={this.getApi}>
        <NavBar />
        <div className="container-list container-fluid">
          <ul className="list-group">{itemsList.slice(0, 10)}</ul>
        </div>
      </section>
    );
  }
}

export default App;
