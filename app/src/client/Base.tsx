import React from 'react';
import App from '@shared/App';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';


const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql',
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__ || {}),
})


export default () => (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
)