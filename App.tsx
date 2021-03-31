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
import {Text, View} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {Provider as ReduxProvider} from 'react-redux';
import {client} from './src/graphql';
import {Sensors} from './src/screens';
import {store} from './src/store';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <View>
          <Sensors />
        </View>
      </ReduxProvider>
    </ApolloProvider>
  );
};

export default App;
