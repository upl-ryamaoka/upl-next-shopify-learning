import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'urql'
import shopifyClient from '../modules/shopifyClient'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={shopifyClient}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
