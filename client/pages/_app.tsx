import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Base from '../components/Base'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Base>
      <Component {...pageProps} />
    </Base>
  )
}
