/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {Provider as ReduxProvider} from 'react-redux';
import {client} from './src/graphql';
import {store} from './src/store';
import {Navigation} from './src/navigation';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <Navigation />
      </ReduxProvider>
    </ApolloProvider>
  );
};

export default App;
