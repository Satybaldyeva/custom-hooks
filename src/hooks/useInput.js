import { useState } from 'react'

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false)

    const onChange = (e)=>{
        setValue(e.target.value)
    }

    const onBlur = ()=>{
        setDirty(true)
    }
  return {
    value, 
    onChange,
    onBlur,
    isDirty,
  }
}
