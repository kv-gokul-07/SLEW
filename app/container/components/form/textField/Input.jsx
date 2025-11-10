import React from 'react'
import Select from '../select/Select';

const Input = (props) => {
    const { name, value, setField, placeholder, formType} = props;
  return (
    <div className='mb-5 flex'>
        {name === "phoneNumber" && 
        <div className='w-30 mr-2'>
            <Select placeholder={"+91"} value={"+91"} label={""}
                name={name}
                onChange={(e) => setField(formType, name, e.target.value)}
                options={["+91"]}
                disabled={true}
            />
        </div>
        
        }
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={(e) => setField(formType, name, e.target.value)}
            className="w-full h-full border border-[#2563EB]  rounded-lg px-3 py-2 focus:ring-0 focus:ring-[#2563EB]"
      />
    </div>
  )
}

export default Input
