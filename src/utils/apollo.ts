import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  // // 使用mock的数据
  // uri: 'http://localhost:8888/graphql',
  cache: new InMemoryCache(),
});
