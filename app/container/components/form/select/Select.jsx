
const Select = (props) => {

    const { name, label, value, options, setField, placeholder, formType, disabled} = props;
  return (
    <div >
        <label for={name}>{label}</label>
        <select 
            id={name} 
            value={value}
            placeholder={placeholder}
            onChange={(e) => setField(formType, name, e.target.value)}className="w-full h-full border border-[#2563EB]  rounded-lg px-3 py-2 focus:ring-0 focus:ring-[#2563EB]"
            disabled={disabled}
        >
            <option value="">-- Choose Role --</option>
            {options?.map((r) => (
                <option key={r} value={r} className='#111827'>
                {r}
                </option>
            ))}
        </select>
    </div>
  )
}

export default Select
