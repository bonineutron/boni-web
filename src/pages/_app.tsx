import '../../globals.css';
import '../services/i18n';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />;
}

export default MyApp;
