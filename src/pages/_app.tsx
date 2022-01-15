import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NextNProgress from 'nextjs-progressbar'


import { Header } from '../components/Header'

import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"

import '../styles/slider.css'
import { theme } from '../styles/theme'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress 
        color="#FFBA08"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />

      <Header />

      <Component {...pageProps} />
    </ChakraProvider>
  )
}
