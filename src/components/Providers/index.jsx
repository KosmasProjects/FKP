import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'

const queryClient = new QueryClient()

// eslint-disable-next-line react/prop-types
export default function Providers({ children }) {
    return (
        <ChakraProvider theme={theme} >
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ChakraProvider>
    )
}
