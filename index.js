/**
 * @format
 */

import {AppRegistry} from 'react-native';
import RootComponent from './App';
import {name as appName} from './app.json';

const App = () => (
  <ApolloProvider>
    <RootComponent />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => App);
