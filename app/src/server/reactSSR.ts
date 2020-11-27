import * as React from 'react';
import {renderToString} from 'react-dom/server';
import fetch from 'node-fetch'

import {
    ApolloClient, createHttpLink, HttpOptions,
    InMemoryCache,
    NormalizedCacheObject
} from '@apollo/client';
import {getDataFromTree} from "@apollo/client/react/ssr";

import {BaseApp} from './Base';
import {getHTML} from './template';


declare global {
    interface Window {
        __APOLLO_STATE__: NormalizedCacheObject;
    }
}

export default async (req: any, res: { send: (arg0: string) => void; }) => {

    const client = new ApolloClient({
        ssrMode: true,
        link: createHttpLink({
            uri: 'http://localhost:3005/graphql',
            credentials: 'same-origin',
            fetch,
        } as HttpOptions & {fetch: any}),
        cache: new InMemoryCache(),
    });
    const App = React.createElement(BaseApp, {client})

    await getDataFromTree(App);
    const body = renderToString(App);

    const state = client.extract()

    console.log(state);

    res.send(
        getHTML(
            body,
            state
        )
    );
}

