import Image from 'next/image'
import './style.css'; 

const LoginPage = () => {
  return (
    <div className='flex w-full h-full'>
      <div className='"w-1/2'>
        <Image 
          src={"/left-banner.png"}
          className='left-banner'
          alt='Login-banner'
          width={100}
          height={100}
           />
      </div>
      <div className='"w-1/2'>
        <Image 
          src={"/left-banner.png"}
          className='left-banner'
          alt='Login-banner'
          width={100}
          height={100}
           />
      </div>
    </div>
  )
}

export default LoginPage
