import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../src/components/nav/Nav'
import { Provider } from "urql"
import { client } from '../src/gqlClient'
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <UserProvider>
        <Provider value={client}>
          <Nav />
          <Component {...pageProps} />
        </Provider>
      </UserProvider>
    </>
  )
}

export default MyApp
