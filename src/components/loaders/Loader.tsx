import React from 'react'
import styles from '../../styles/loader.module.css'

export const Loader = () => {
  return (
    <div className='w-full flex justify-center items-center py-40'>
    <div className={styles['lds-hourglass']}></div>
    </div>
  )
}
