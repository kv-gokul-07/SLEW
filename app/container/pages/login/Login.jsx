"use client";
import { useMultiFormStore } from "@/app/store/useFormStore.js";

import Image from 'next/image'
import './style.css'; 
import Input from "../../components/form/textField/Input";

const LoginPage = () => {
    
  const { loginForm, setField } = useMultiFormStore();

  return (
    <div className='flex w-full h-full'>
      <div className='w-1/2'>
        <Image 
          src={"/left-banner.png"}
          className='left-banner'
          alt='Login-banner'
          width={100}
          height={100}
           />
      </div>
      <div className='w-1/2 flex items-center justify-center bg-[#1F2937]'>
        <div className='max-w-[500] bg-[#F9FAFB] p-20 rounded-[5]'>
        <div className="h-40px">
          <Input
            name={"phoneNumber"}
            value={loginForm.phoneNumber}
            setField={setField}
            formType={"loginForm"}
            placeholder="Please Enter your PhoneNumber"/>
        </div>
        <div className="h-40px">
          <Input  
              name={"password"}
              value={loginForm.password}
              setField={setField}
              formType={"loginForm"}
              placeholder="Please Enter your Password"
            />
          </div>
    
        </div>
      </div>
    </div>
  )
}

export default LoginPage
