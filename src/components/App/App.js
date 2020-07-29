import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import FruitList from '../FruitList/FruitList.js';
import FruitSelector from '../FruitSelector/FruitSelector.js';
import { connect } from 'react-redux';
class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
    this.props.dispatch({
      // calls to a a Saga set to listen for GET_BASKET_DATA
      type: 'GET_BASKET_DATA',
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* FruitSelector dispatches actions to update the Redux store */}
        <FruitSelector />
        {/* FruitList will connect to the store for the list of fruit */}
        <FruitList />
      </div>
    );
  }
}

export default connect()(App);
