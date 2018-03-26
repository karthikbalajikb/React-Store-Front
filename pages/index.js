import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import fetch from 'isomorphic-unfetch'
import ProductList from '../component/ProductList';
import PostList from '../component/product';
import AppBar from '../component/AppBar';
import MenuBar from '../component/MenuBar';
import CarouselBar from '../component/CarouselBar';
import Paper from '../component/paper';

import withData from '../lib/withData';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {

  static async getInitialProps({ req, query }) {
    const res = await fetch(`http://localhost:4000/api/products`)
    const show = await res.json();
    return { show }
  }

  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div >
        <AppBar />
        <MenuBar />
        <CarouselBar />
       {/* <PostList />  */}
        {/* <h1>Product List</h1>
        <ProductList show={this.props.show} />
       */}

      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withData(withRoot(withStyles(styles)(Index)));
