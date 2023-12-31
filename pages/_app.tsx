import '@/styles/globals.css'
import '../styles/general.scss'
import type { AppProps } from 'next/app'
import MainLayout from '../src/components/main-layout/layout'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <MainLayout>
    <Component {...pageProps} />
    </MainLayout>
    </>
  )
}
