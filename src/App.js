import React, { Component } from "react";
import "./styles/App.css";
import "./styles/components.css";
import NavBar from "./components/NavBar";
import List from "./components/List";
import ListItem from "./components/ListItem";
import data from "./data.json";
// import $ from "jquery";

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
let max = 10;

class App extends Component {
  state = {
    shoppingCart: [],
    items: 10
  };
  componentDidMount() {
    // getItems();
  }
  handleAdd = item => {
    this.setState(prevState => ({
      shoppingCart: [...prevState.shoppingCart, item]
    }));
  };
  loadMore = () => {
    this.setState(prevState => ({
      items: prevState.items + 5
    }));
  };

  render() {
    const itemsList = data.map(item => {
      return <ListItem onClick={this.handleAdd} {...item} />;
    });
    const sliceItemList = itemsList.slice(0, this.state.items);
    return (
      <section className="App" onClick={this.getApi}>
        <NavBar items={this.state.shoppingCart.length} />
        <List load={this.loadMore} list={sliceItemList} />
      </section>
    );
  }
}

export default App;
