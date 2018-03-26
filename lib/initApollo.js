import { ApolloClient,createNetworkInterface  } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-fetch'
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloLink, split } from 'apollo-client-preset'
import { getMainDefinition } from 'apollo-utilities';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
// Create an http link:
const httpLink = new HttpLink({
  uri: 'http://localhost:4200/graphql'
});

// Create a WebSocket link:
const wsLink = process.browser ? new WebSocketLink({ // if you instantiate in the server, the error will be thrown
  uri: `ws://localhost:4200/subscriptions`,
  options: {
    reconnect: true
  }
}) : null;



// // using the ability to split links, you can send data to each link
// // depending on what kind of operation is being sent
const link = process.browser ? split( //only create the split in the browser
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
) : httpLink;

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create (initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: true,//!process.browser, // Disables forceFetch on the server (so queries are only run once)
    link,
    // link: new HttpLink({
    //   uri: 'http://localhost:4200/graphql',//'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
    //   opts: {
    //     credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    //   }
    // }),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

export default function initApollo (initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
