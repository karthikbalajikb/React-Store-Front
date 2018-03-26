import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// import Pagination from 'docs/src/modules/components/Pagination';
// import SupportTouch from 'docs/src/modules/components/SupportTouch';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'relative',
    top: '100px'
  },
  slide: {
    // padding: 15,
    minHeight: 270,
    color: '#fff',
  },
  slideImg:{
    width: '100%',
    height: '280px',
    transition: 'opacity 0.5s linear',
    opacity: 1
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

class DemoAutoPlay extends Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
    
        <div style={styles.root}>
          <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
            <div style={Object.assign({}, styles.slide)}>
            <img style={styles.slideImg} src="https://rukminim1.flixcart.com/flap/2752/238/image/344eb8.jpg" />
            slide n°1</div>
            <div style={Object.assign({}, styles.slide)}>
            <img style={styles.slideImg} src="https://rukminim1.flixcart.com/flap/3376/560/image/d8a8d0.jpg" />
            slide n°2</div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
          </AutoPlaySwipeableViews>
          {/* <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} /> */}
        </div>
     

    );
  }
}

export default DemoAutoPlay;