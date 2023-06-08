import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { HomePage } from './pages/homepage'

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>

      <HomePage />
    </ChakraProvider>
  )
}