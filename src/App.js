import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import "./styles/components.css";
import NavBar from "./components/NavBar";
import List from "./components/List";
import ShoppingCart from "./components/ShoppingCart";
import ErrorPage from "./components/ErrorPage";
import $ from "jquery";
class App extends Component {
  state = {
    shoppingCart: [],
    items: 15,
    dataList: []
  };

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.reasonapps.pl/data.json"
    )
      .then(response => response.json())
      .then(dataList => this.setState({ dataList }));
  }

  handleAdd = itemID => {
    this.setState(prevState => ({
      shoppingCart: [...prevState.shoppingCart, itemID]
    }));
  };
  handleRemove = itemID => {
    this.setState(prevState => ({
      shoppingCart: prevState.shoppingCart.filter(item => item !== itemID)
    }));
  };
  handleLoadMore = () => {
    this.setState(prevState => ({
      items: prevState.items + 10
    }));
  };
  handleInputChange = e => {
    this.setState({
      items: 10
    });
  };

  confirmOrder = () => {
    this.setState({
      shoppingCart: []
    });
  };
  closeAlert = () => {
    $(".alert").alert("close");
  };
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <section className="App">
          <NavBar items={this.state.shoppingCart.length} />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <List
                  handleload={this.handleLoadMore}
                  onClickAdd={this.handleAdd}
                  handleInputChange={this.handleInputChange}
                  {...this.state}
                />
              )}
            />
            <Route
              path="/cart"
              exact
              render={() => (
                <ShoppingCart
                  cartList={this.state.dataList.filter(
                    item => this.state.shoppingCart.indexOf(item.id) !== -1
                  )}
                  onClickRemove={this.handleRemove}
                  onClickConfirm={this.confirmOrder}
                  // onClickCloseAlert={this.closeAlert}
                />
              )}
            />

            <Route component={ErrorPage} />
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
