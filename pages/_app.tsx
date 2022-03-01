import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../src/components/nav/Nav'
import { Provider } from "urql"
import { client } from '../src/gqlClient'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <Provider value={client}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
    </>
  )
}

export default MyApp
