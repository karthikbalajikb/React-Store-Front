import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import fetch from 'isomorphic-unfetch';

import AppBar from '../component/AppBar';
import MenuBar from '../component/MenuBar';
import ProductList from '../component/ProductList';
import BreadCrumb from '../component/BreadCrumb';

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

class Women extends React.Component {
    static async getInitialProps({ req, query }) {
        const res = await fetch(`http://localhost:4000/api/products`)
        const show = await res.json();
        const breadcrumblist = [{ name: 'home' }, { name: 'women' }, { name: 'leggings' }];
        return { show, breadcrumblist }
    }

    render() {
        return (
            <div>
                <AppBar />
                <MenuBar />
                <p>hello</p>
                <h1>Product List</h1>
                <BreadCrumb breadcrumblist={this.props.breadcrumblist}/>
                <ProductList show={this.props.show} breadcrumblist={this.props.breadcrumblist} />
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(Women))