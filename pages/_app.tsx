import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const colors = {
  brand:{
    solid:'#08743B',
    light:'#30B44A',
    grey:'#D9D9D8'
  },
  myColor:'#F3FCF7'
}

const theme = extendTheme({colors,
  fonts: {
    body: "Poppins, Prime",
  }
})


function MyApp({ Component, pageProps }: AppProps) {
  const {pathname} = useRouter()
  console.log(pathname)
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
