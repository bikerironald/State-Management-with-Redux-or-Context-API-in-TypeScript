import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;



