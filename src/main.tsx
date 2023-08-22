import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/apollo';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
