import { useState } from "react";

const useInput=(validateValue)=>{
    const [enteredValue,setenteredValue]= useState('');
    const[IsTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const haserror = !valueIsValid && IsTouched;

    const enteredValueHandler= event =>
    {
     setenteredValue(event.target.value);
    }

    const InputBlurHandler = event =>{
        setIsTouched(true);
       }

       const resetForm =()=>{
        setenteredValue('');
        setIsTouched(false);

       }

       return{
        value: enteredValue,
        isValid:valueIsValid,
        haserror,
        enteredValueHandler,
        InputBlurHandler,
        resetForm
       }
}
export default useInput;