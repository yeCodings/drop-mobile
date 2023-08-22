/* eslint-disable import/no-extraneous-dependencies */
import ReactDOM from 'react-dom/client';
import enUS from 'antd-mobile/es/locales/en-US';
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd-mobile';
import { client } from './utils/apollo';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={enUS}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ConfigProvider>,
);
