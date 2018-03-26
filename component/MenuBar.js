import React, { Component } from 'react';
import Link from 'next/link';

const style = {
    menubar: {
        width: '100%',
        position: 'absolute',
        top: '65px',
        backgroundColor: '#eb97af',
        zIndex: '100',
        height: '35px'
    },

    menulist: {
        display: 'inline-block',
        padding: '12px 15px 9px 15px',
        fontWeight: '500',
        cursor: 'pointer',
        fontFamily: 'Roboto, Arial, sans-serif',
        fontSize: '14px',
        textDecoration: 'none',
        color: '#9c27b0'
    }
}
export default class MenuBar extends React.Component {

    render() {
        return (

            <div style={style.menubar}>
                <Link href="/women"><a style={style.menulist}>Womens</a></Link>
                <li style={style.menulist}>Mens</li>

                <li style={style.menulist}>Kids</li>
                <li style={style.menulist}>Party wear</li>
            </div>

        )
    }
}