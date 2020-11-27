import * as React from 'react';

import App from '@shared/App';
import {ApolloProvider, ApolloClient, NormalizedCacheObject} from "@apollo/client";


type AppProps = {
    client: ApolloClient<NormalizedCacheObject>;
}

export function BaseApp({client}: AppProps) {
    return (
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    );
}
