import React, { PropsWithChildren, useEffect } from 'react'
import { useRouter } from 'next/router'
import Sidebar from 'commons/Sidebar'
import TopBar from 'commons/TopBar'

export const MainLayout = ({children}:PropsWithChildren) => {
  const router = useRouter()

  return (
      <div className='flex'>
        {/* <TopBar /> */}
        <Sidebar /> 
        <div className='w-full'>{ children }</div>
      </div>
  )
}
