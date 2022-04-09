import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import AppContextProvider from '@context/AppContextProvider'
const queryClient = new QueryClient()

interface Props {
  children: React.ReactNode | null
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>{children}</AppContextProvider>
    </QueryClientProvider>
  )
}
export default Providers
