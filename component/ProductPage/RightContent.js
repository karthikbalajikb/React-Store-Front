import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../src/withRoot';

const style = {
    content: {
        paddingLeft: '24px',
        width: 'calc(100% - 512px)',
        display: 'inline-block',
        fontFamily: 'Arial, sans-serif',
        letterSpacing: '-0.2px'
    },
    chip: {
        backgroundColor: 'green'
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
        backgroundColor: '#388e3c'
    },
    price: {
        fontSize: '28px',
        verticalAlign: 'sub',
        display: 'inline-block',
        fontWeight: '500',
        color: '#212121',
    },
    regular_price: {
        fontSize: '16px',
        marginLeft: '12px',
        verticalAlign: 'middle',
        color: '#878787',
        textDecoration: 'line-through',
        display: 'inline-block'
    },

    specification: {
        marginTop: '24px',
        borderRadius: '2px',
        fontSize: '12px',
        border: 'solid 1px #f0f0f0'
    },

    specification_head: {
        padding: '24px 30px 24px 24px',
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '1.14',
        color: '#212121'
    },

    specification_desc: {
        borderTop: 'solid 1px #f0f0f0',
        padding: '24px 24px 34px 24px',
        fontSize: '14px'
    }
});

function RightContent(props) {
    const { classes } = props;
    function handleDelete() {

    }
    return (
        <div style={style.content}>
            <div>
                <h1> {props.product.name}</h1>
            </div>
            <div>
                <Chip
                    label={props.product.average_rating}
                    onDelete={handleDelete}
                    deleteIcon={<Icon >starts</Icon>}
                    className={classes.chip}
                />
            </div>
            <div>
                <div className={classes.price}>
                    ₹ {props.product.price}
                </div>
                <div className={classes.regular_price}>
                    ₹ {props.product.regular_price}
                </div>
            </div>

            <div className={classes.specification}>
                <div className={classes.specification_head}>
                    SPECIFICATION
                </div>
                <div className={classes.specification_desc}>
                    <p>{props.product.description}</p>
                </div>
            </div>
        </div>
    )

}

RightContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(RightContent));