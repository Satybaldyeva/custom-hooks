import { useEffect, useState } from 'react'

export const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true)
    const [isEmail, setEmail] = useState(false)
    const [inputValid, setInputValid] = useState(false)
  
    useEffect(()=>{
        for (const validation in validations) {
           switch (validation) {
            case 'isEmpty':
                value ? setEmpty(false) : setEmpty(true)
                break;

            case 'isEmail' :
                const re = /\S+@\S+\.\S+/;
                re.test(String(value)) ? setEmail(false) : setEmail(true);
                break;
            default:

               return value
           }
        }
    }, [value])

    useEffect(()=>{
        if(isEmpty || isEmail){
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, isEmail])
  return {
    isEmpty,
    isEmail,
    inputValid,
  }
}
