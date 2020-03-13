import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import "./styles/components.css";
import NavBar from "./components/NavBar";
import List from "./components/List";
import ShoppingCart from "./components/ShoppingCart";
// import SearchInput from "./components/SearchInput";
// import data from "./data.json";
import $ from "jquery";

// function getItems() {
//   // fetch("https://www.reasonapps.pl/data.json").then(
//   fetch("https://www.reasonapps.pl/data.json", {
//     headers: {
//       "Content-Type": "application/json"
//     },
//     credentials: "same-origin"
//   }).then(
//     response => {
//       console.log(response);
//       // if (response.ok) {
//       //   return response;
//       // }
//     }
//     // )
//   );
//   // .then(response => {
//   //   console.log(response);

//   // });
// }

class App extends Component {
  state = {
    shoppingCart: [],
    items: 15,
    visibleItems: 5,
    dataList: [],
    onSearching: false,
    inputValue: "",
    filteredItems: []
  };

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.reasonapps.pl/data.json"
    )
      .then(response => response.json())
      .then(dataList => this.setState({ dataList }));
  }
  // componentDidMount() {
  // getItems();
  // $(window).scroll(function() {
  //   if ($(window).scrollTop() == $(document).height() - $(window).height()) {
  //     // ajax call get data from server and append to the div
  //   }
  // });
  // }

  handleSearch = () => {
    this.setState({
      items: document.querySelector(".list-group").childNodes.length
    });
  };
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
      items: prevState.items + 10
    }));
  };
  handleInputChange = e => {
    let filteredItemsList = [];

    this.setState({
      // items: 10,
      onSearching: true,
      inputValue: e.target.value,
      filteredItems: filteredItemsList
    });
    this.state.dataList.forEach(item => {
      if (
        item.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
      ) {
        filteredItemsList.push(item);
      }
    });
  };
  componentDidUpdate() {
    if (this.state.onSearching && this.state.inputValue === "") {
      this.setState({
        onSearching: false,
        items: 15
      });
    }
  }

  confirmOrder = () => {
    this.setState(prevState => ({
      shoppingCart: []
    }));
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
                  load={this.loadMore}
                  onClickAdd={this.handleAdd}
                  allItemsList={this.state.dataList}
                  loadItems={this.state.items}
                  shoppingCart={this.state.shoppingCart}
                  handleInputChange={this.handleInputChange}
                  onSearching={this.state.onSearching}
                  inputValueState={this.state.inputValue}
                  filteredItems={this.state.filteredItems}
                  // handleSearch={this.handleSearch}
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
