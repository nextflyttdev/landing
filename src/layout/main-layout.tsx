import Footer from '@/components/shared/footer'
import TopBar from '@/components/shared/topbar'
import React, { ReactNode } from 'react'

const MainLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex min-h-screen flex-col w-full'>
      <TopBar/>
      <main className='flex-1 h-full'>{children}</main>
      <Footer/>
    </div>
  )
}

export default MainLayout