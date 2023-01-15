import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return ( 
   <Component {...pageProps} />
  )
}
