import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {GRAPHQL_URI, GRAPHQL_XAPI_KEY} from '../config';
import {store} from '../store';

const httpLink = createHttpLink({
  uri: GRAPHQL_URI,
});

const authLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = store.getState().authenticationState.token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'X-Api-Key': GRAPHQL_XAPI_KEY,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  uri: GRAPHQL_URI,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
