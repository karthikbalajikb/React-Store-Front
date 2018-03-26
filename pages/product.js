import React, { Component } from 'react';
import Head from 'next/head';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import fetch from 'isomorphic-unfetch';

import AppBar from '../component/AppBar';
import MenuBar from '../component/MenuBar';
import BreadCrumb from '../component/BreadCrumb';
import LeftGallery from '../component/ProductPage/LeftGallery';
import RightContent from '../component/ProductPage/RightContent';

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

class Product extends React.Component {
    constructor(props) {
        super(props);
        console.log("prod page:", props)
    }

    static async getInitialProps({ req, query }) {
        console.log("prod page get ", query, req);
        const { id } = query
        const res = await fetch(`http://localhost:4000/api/products/${id}`)
        const product = await res.json();
        const breadcrumblist = await [{ name: 'home' }, { name: 'women' }, { name: 'leggings' }];
        return { product, breadcrumblist }
    }

    render() {
        return (
            <div>
                <Head>
                    <title>{this.props.product.name}</title>
                </Head>
                <AppBar />
                <MenuBar />
                <p>hello</p>
                <h1>Product Page</h1>
                <BreadCrumb breadcrumblist={this.props.breadcrumblist} />
                <div>
                    <LeftGallery images={this.props.product} />
                    <RightContent product={this.props.product} />
                </div>
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(Product))