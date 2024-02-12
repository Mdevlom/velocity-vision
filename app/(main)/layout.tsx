import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
       {children}
       </>
  )
}

export default Layout