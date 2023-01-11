import React, { PropsWithChildren, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Sidebar from 'commons/Sidebar'

export const MainLayout = ({children}:PropsWithChildren) => {
  const router = useRouter()

  return (
      <div className='flex'>
        <Sidebar /> 
        <div className='w-full'>{ children }</div>
      </div>
  )
}
