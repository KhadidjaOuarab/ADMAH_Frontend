import React from 'react'
import { InputText } from 'primereact/inputtext';
function InputNew({label, val1,mask, setVal1}) {
  return (
    <div>
       <div className="field  flex flex-column ">
        <label htmlFor="basic">{label}</label>
        <InputText
          id="basic"
          value={val1}
          placeholder={mask}
          onChange={setVal1}
          className="w-15rem h-3rem"
        ></InputText>
      </div>
    </div>
  )
}

export default InputNew
