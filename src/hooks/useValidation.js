import { useEffect, useState } from 'react'

export const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true)
  
    useEffect(()=>{
        for (const validation in validations) {
           switch (validation) {
            case 'isEmpty':
                value ? setEmpty(false) : setEmpty(true)
                break;
           
            default:

               return value
           }
        }
    }, [])
  return {
    isEmpty,

  }
}
