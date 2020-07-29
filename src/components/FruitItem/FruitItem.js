import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class FruitItem extends Component {
  removeItem = () => {
    this.props.dispatch({
      type: 'DELETE_FROM_BASKET',
      payload: { id: this.props.basketItem.id },
    });
  };

  render() {
    return (
      <li>
        {' '}
        <Box m={1}>
          <span>{this.props.basketItem.fruit}</span>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={this.removeItem}
          >
            Delete
          </Button>
        </Box>
      </li>
    );
  }
}

export default connect()(FruitItem);
