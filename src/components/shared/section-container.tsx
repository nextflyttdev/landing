import React, { ReactNode } from 'react'

const SectionContainer = ({children}:{children:ReactNode}) => {
  return (
    <div className=' max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-14'>
        {children}
    </div>
  )
}

export default SectionContainer