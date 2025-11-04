import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex w-full h-full'>
      <div className='"w-1/2'>
        <Image 
          src={"/login-banner.png"}
          alt='Login-banner'
          width={100}
          height={100}
           />
      </div>
      <div className='"w-1/2'>
        rights
      </div>
    </div>
  )
}

export default LoginPage
