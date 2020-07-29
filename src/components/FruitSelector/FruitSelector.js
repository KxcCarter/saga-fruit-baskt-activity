import React, { Component } from 'react';
import { connect } from 'react-redux';

// --- Material-UI ---
import { Button, Box } from '@material-ui/core';

class FruitSelector extends Component {
  addFruit = (fruitName) => (event) => {
    this.props.dispatch({
      type: 'ADD_TO_BASKET',
      payload: { fruit: fruitName },
    });
  };

  // Displays the fruit selection buttons on the DOM
  render() {
    return (
      <div>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={this.addFruit('Apple')}
          >
            Add Apple
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.addFruit('Orange')}
          >
            Add Orange
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.addFruit('Watermelon')}
          >
            Add Watermellon
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.addFruit('Grapefruit')}
          >
            Add Grapefruit
          </Button>
        </Box>
      </div>
    );
  }
}

export default connect()(FruitSelector);
