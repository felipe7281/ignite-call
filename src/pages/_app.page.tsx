import '../lib/dayjs'

import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'

globalStyles() // Ele fica aqui fora pq só precisa renderizar uma vez, se colocar dentro da função vai carregar sempre que atualizar.

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
