import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from "react-router-dom";
import "./styles/App.css";
import "./styles/components.css";
import NavBar from "./components/NavBar";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ShoppingCart from "./components/ShoppingCart";
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
  handleRemove = itemID => {
    const newCartList = this.state.shoppingCart.filter(item => item !== itemID);
    this.setState({
      shoppingCart: newCartList
    });
  };
  loadMore = () => {
    this.setState(prevState => ({
      items: prevState.items + 5
    }));
  };

  render() {
    const itemsList = data.map(item => {
      return (
        <ListItem
          key={item.id}
          onClickAdd={this.handleAdd}
          {...item}
          shoppingCart={this.state.shoppingCart}
        />
      );
    });
    const sliceItemList = itemsList.slice(0, this.state.items);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <section className="App" onClick={this.getApi}>
          <NavBar items={this.state.shoppingCart.length} />
          <Switch>
            <Route
              path="/"
              exact
              render={() => <List load={this.loadMore} list={sliceItemList} />}
            />
            <Route
              path="/cart"
              exact
              render={() => (
                <ShoppingCart
                  cartList={data.filter(
                    item => this.state.shoppingCart.indexOf(item.id) !== -1
                  )}
                  onClickRemove={this.handleRemove}
                />
              )}
            />

            <Route component={Error} />
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
