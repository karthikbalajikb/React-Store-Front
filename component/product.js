import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import React, { Component } from 'react'

class PostList extends React.Component {

  componentWillMount() {
    this.subscribeToNewComments()
  }

  render() {
    if (this.props.productFeed.loading) { return (<h1>Loading ...</h1>) }
    if (!this.props.productFeed.loading) {
      return (<div><h2>ssss</h2> <ul>{this.props.productFeed.getAllProducts.map((d, i) =>
        <li key={d.id}>{d.name}</li>
      )} </ul></div>)

      return <div>Loading</div>
    }
  }

  subscribeToNewComments = () => {
    this.props.productFeed.subscribeToMore({
      document: COMMENTS_SUBSCRIPTION,
      updateQuery: (previous, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }
        else {
          console.log("subscribed:",subscriptionData.data);
          console.log("previous:",previous)
          let getAllProducts = [subscriptionData.data.productAdded];
          console.log("getAllProducts:",getAllProducts)
          const result = { getAllProducts : [ ...getAllProducts, ...previous.getAllProducts ] };
          console.log("result:",result)
          return result
        }
      },
      onError: (err) => {
        console.log("subscribeToMore error:", err)
      }
    })
  }

}
export const COMMENTS_SUBSCRIPTION = gql`
    subscription productAdded{
      productAdded{
        id
        on_sale
        name
        images{
          src
          name
        }
        price
        regular_price
      }
    }
`;

export const allProduct = gql`
query getAllProducts{
  getAllProducts{
    id
  on_sale
  name
  images{
    src
    name
  }
  price
  regular_price
}}`


export default graphql(allProduct, { name: 'productFeed' })(PostList)