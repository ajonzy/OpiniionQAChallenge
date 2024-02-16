import '@/styles/main.scss'

import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({subsets: ["latin"], weight: "400"})

export default function App({ Component, pageProps }) {

  return (
    <div className={`app-wrapper ${montserrat.className}`}>
      <Component {...pageProps} />
    </div>
  )
}