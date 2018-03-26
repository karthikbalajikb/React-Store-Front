import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Link from 'next/link';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import withRoot from '../../src/withRoot';

const style = {
    leftColumn: {
        top: '71px',
        width: '512px',
        position: 'sticky',
        display: 'inline-block',
        verticalAlign: 'top',
        zIndex: 4,
    },
    gallery: {
        display: 'flex'
    },
    gallery_main_img: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
        border: 'solid 1px #f0f0f0'
    },
    gallery_main_img_content: {
        cursor: 'crosshair',
        maxHeight: '416px',
        maxWidth: '416px',
        display: 'inline-block',
        verticalAlign: 'top'
    },
    buyNow: { width: '30%' },
    addToCart: { width: '70%' },
    btns: { display: 'flex', flexWrap: 'wrap' },
    gallery_side_img_main_list: {
        listStyleType: 'none',
        margin: 0,
        padding: 0
    },
    gallery_side_img_list: {
        width: '64px',
        height: '64px',
        borderColor: '#f0f0f0',
        borderRight: 'none'
    },
    gallery_side_img_content: {
        padding: '5px',
        width: '100%',
        height: '100%'
    },
    gallery_side_img: {
        backgroundImage: 'url(https://rukminim1.flixcart.com/image/128/128/jdeu8i80/shirt/5/x/g/m-hlsh009613-white-highlander-original-imaf2bmygyezakwp.jpeg?q=70)',
        padding: '5px',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
    }
}

const styles = theme => ({
    button: {
        width: '100%'
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class LeftGallery extends React.Component {
    constructor(props) {
        super(props);
        const { classes } = props;
    }
    render() {
        return (
            <div style={style.leftColumn}>
                <div style={style.gallery}>
                    <div>
                        <ul style={style.gallery_side_img_main_list}>
                            <li style={style.gallery_side_img_list}>
                                <div style={style.gallery_side_img_content}>
                                    <div style={style.gallery_side_img}>

                                    </div>
                                </div>
                            </li>
                            <li style={style.gallery_side_img_list}>
                                <div style={style.gallery_side_img_content}>
                                    <div style={style.gallery_side_img}>

                                    </div>
                                </div>
                            </li>
                            <li style={style.gallery_side_img_list}>
                                <div style={style.gallery_side_img_content}>
                                    <div style={style.gallery_side_img}>

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div style={style.gallery_main_img}>
                        <img style={style.gallery_main_img_content} src={this.props.images.images[0].src} />
                    </div>
                </div>
                <div className="pdp-fixed">
                    <div style={style.btns}>

                        <div style={style.buyNow}>
                            <Button className={this.props.classes.button} variant="raised" color="primary">
                                BUY NOW    <Icon >trending_up</Icon>
                            </Button>
                        </div>
                        <div style={style.addToCart}>
                            <Button className={this.props.classes.button} variant="raised" color="primary">
                                ADD TO CART
                           <Icon >add_shopping_cart</Icon>
                            </Button>
                        </div>

                    </div>
                </div>

                <style jsx>{`
                       .pdp-fixed {
                        position: fixed;
                        bottom: 0;
                        width: 100%;
                    }

                     @media (min-width: 600px){
                        .pdp-fixed {
                            position: relative;
                        }
                    }
                        `}
                </style>
            </div>

        )
    }
}

export default withRoot(withStyles(styles)(LeftGallery))