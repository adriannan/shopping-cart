import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import "./styles/components.css";
import NavBar from "./components/NavBar";
import List from "./components/List";
import ShoppingCart from "./components/ShoppingCart";
import SearchInput from "./components/SearchInput";
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
    items: 10
  };

  componentDidMount() {
    // getItems();
  }
  handleAdd = itemID => {
    this.setState(prevState => ({
      shoppingCart: [...prevState.shoppingCart, itemID]
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
  loadLess = () => {
    this.setState({
      items: 10
    });
  };
  confirmOrder = () => {
    this.setState(prevState => ({
      shoppingCart: []
    }));
  };

  render() {
    const allItemsList = data.map(item => item);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <section className="App" onClick={this.getApi}>
          <NavBar items={this.state.shoppingCart.length} />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <List
                  load={this.loadMore}
                  onClickAdd={this.handleAdd}
                  allItemsList={allItemsList}
                  loadItems={this.state.items}
                  shoppingCart={this.state.shoppingCart}
                  handleInputChange={this.loadLess}
                />
              )}
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
                  allItemsList={allItemsList}
                  onClickConfirm={this.confirmOrder}
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
