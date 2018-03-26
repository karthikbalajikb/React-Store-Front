import React from 'react';

const style = {
  menubar: {
    width: '100%',
    position: 'absolute',
    top: '105px',
    zIndex: '100',
    height: '35px',
  },

  menulist: {
    display: 'inline-block',
    padding: '12px 0px 0px 4px',
    fontSize: 'smaller',
    color: 'darkgrey',
    cursor: 'pointer',
    fontFamily: 'Roboto, Arial, sans-serif',
  },
};

export default class BreadCrumb extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={style.menubar}>
        {this.props.breadcrumblist.map((bread, index) => (
          <li style={style.menulist}>
            {bread.name} <span>></span>
          </li>
        ))}
      </div>
    );
  }
}
