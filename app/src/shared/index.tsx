import React from 'react';
import ReactDOM from 'react-dom';
import App from '@shared/App';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';


const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql',
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__ || {}),
})

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
