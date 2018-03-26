import React from 'react';
import Link from 'next/link';

import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
// import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '20px'
  },

  imgBig: {
    width: '100% !important',
    height: '100%',
    position: 'absolute',
    opacity: 0,
    transition: 'opacity 5s linear'
  },

  imgSmall: {
    width: '100% !important',
    height: '100%',
    position: 'absolute',
    opacity: 1,
    filter: 'blur(15px)',
    transition: 'opacity 5s linear'
  },

  gridList: {
    // width: 500,
    // height: 450,
  },
  papercontent: {
    margin: '1%',
    padding: '1%',
    width: '100%'
  },
  title: {
    boxShadow: 'rgba(0, 0, 0, 0.12) 3px 1px 6px, rgba(0, 0, 0, 0.12) 2px 1px 4px',

  },

  titleStyle: {
    margin: '1%'
  }
};

const tilesData = [
  {
    img: 'https://assets-auto.rbl.ms/b786782c059766882ca58024bb3d1241c81152d471a7963a8f4fb8af0d9f788c',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'https://assets-auto.rbl.ms/b786782c059766882ca58024bb3d1241c81152d471a7963a8f4fb8af0d9f788c',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://assets-auto.rbl.ms/b786782c059766882ca58024bb3d1241c81152d471a7963a8f4fb8af0d9f788c',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://assets-auto.rbl.ms/b786782c059766882ca58024bb3d1241c81152d471a7963a8f4fb8af0d9f788c',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: 'https://assets-auto.rbl.ms/b786782c059766882ca58024bb3d1241c81152d471a7963a8f4fb8af0d9f788c',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://assets-auto.rbl.ms/b786782c059766882ca58024bb3d1241c81152d471a7963a8f4fb8af0d9f788c',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://assets-auto.rbl.ms/b786782c059766882ca58024bb3d1241c81152d471a7963a8f4fb8af0d9f788c',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://assets-auto.rbl.ms/b786782c059766882ca58024bb3d1241c81152d471a7963a8f4fb8af0d9f788c',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */

export default class GridListExampleComplex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        imgBig: {
          width: '100% !important',
          height: '100%',
          position: 'absolute',
          opacity: 0,
          transition: 'opacity 5s linear'
        },

        imgSmall: {
          width: '100% !important',
          height: '100%',
          position: 'absolute',
          opacity: 1,
          filter: 'blur(15px)',
          transition: 'opacity 5s linear'
        }
      }
    }
  }

  handleImageLoaded() {
    //this.setState({ imageStatus: "loaded" });
    console.log("img loaded");
    this.setState(Object.assign({}, ...this.state, {style: { imgBig: { opacity: 1 , transition: 'opacity 1s linear' }} }));
    //  this.setState(...this.state.style, { imgBig : { opacity: 1} });
    // this.setState(Object.assign({}, ...this.state, {style:{ imgSmall : { opacity: 0, filter: 'blur(15px)',
    // transition: 'opacity 5s linear'} } }));
    //  this.setState(...this.state.style, { imgSmall: { opacity: 0 } });
   console.log("stat:",this.state)
  }

  handleSmallImageLoaded(){
    console.log("small img")
  }

  render() {
    return (
      <div style={styles.root}>
        <Paper style={styles.papercontent} elevation={4}>
     
          <GridList
            cols={4}
            cellHeight={320}
            spacing={24}
            classes={styles.gridList}
          >
            {this.props.show.map((product,index) => (

              <GridListTile
                key={index}
              >
               
               <img onLoad={this.handleImageLoaded.bind(this)} src={product.images[0].src} style={this.state.style.imgBig}  />
                <img  onLoad={this.handleSmallImageLoaded.bind(this)} src='https://rukminim1.flixcart.com/merch/50/50/images/1492053115081.jpg?q=50' style={this.state.style.imgSmall} />
                
              
                <GridListTileBar
                  title={product.name}
                  subtitle={<span><b>Rs.{product.regular_price}</b></span>}
                  actionIcon={
                    <IconButton>
                      <StarBorderIcon />
                      <Link as={`${product.slug}/p/${product.id}`} href={`/product?id=${product.id}`}><a>link</a></Link>
                    </IconButton>
                  }
                />
              </GridListTile>

            ))
            }
            <style jsx global>{`
         img {
           width: 100% !important;height: 100%;
         }
       `}</style>
          </GridList>
        </Paper>
      </div>
    )
  }
}
