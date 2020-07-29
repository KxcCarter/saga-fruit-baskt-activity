import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

class Header extends Component {
  render() {
    return (
      <header>
        <Box m={3} p={3} bgcolor="primary.main">
          <Typography variant="h3">Fruit Basket</Typography>
        </Box>
      </header>
    );
  }
}
export default Header;
