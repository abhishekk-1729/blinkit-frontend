import React from 'react'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>

    <div className='m-16'>
      {children}
    </div>
    </>
  )
}
