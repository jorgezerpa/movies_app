import React from 'react'
import { TitleBar } from 'components/TitleBar'
import { Movies } from 'components/Movies'

const index = () => {

  return (
    <div className='bg-gray-700 overflow-y-scroll max-h-screen'>
      <TitleBar />
      <Movies />
    </div>
  )
}

export default index