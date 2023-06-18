import useInput from "../Hooks/use-input";
const SimpleInput = (props) => {

  const {
value: enteredname,
isValid:enterednameValid,
haserror:nameInputhasError,
enteredValueHandler: enteredNameHandler,
InputBlurHandler: NameInputBlurHandler,
resetForm: resetNameInput
  }= useInput(value => value.trim()!=='');

  const {
    value: enteredemail,
    isValid:enteredemailValid,
    haserror:emailInputhasError,
    enteredValueHandler: enteredemailHandler,
    InputBlurHandler: EmailInputBlurHandler,
    resetForm: resetEmailInput
  }=useInput(value =>value.includes('@'))



let formValid=false;

  if(enterednameValid && enteredemailValid)
formValid= true;


 const formSubmitHandler = event =>
 {
  event.preventDefault();

  if(!enterednameValid || !enteredemailValid)
  {
    return;
  }
  console.log(enteredname);
  
resetNameInput();

 resetEmailInput();
  // NameInputRef.current.value = ""; 
  // this useRef() method to empty the input box is not ideal as you cannot directly manipulate the DOM
 }


 
 const nameInputClass = nameInputhasError ? 'form-control invalid': 'form-control'
 const emailInputClass = emailInputhasError ? 'form-control invalid': 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onChange={ enteredNameHandler} 
        onBlur={NameInputBlurHandler}
        value={enteredname}/>
        {nameInputhasError && <p className="error-text">Name must not be invalid</p>}
      </div>
      <div className={emailInputClass}>
      <label htmlFor='name'>Your Email</label>
      <input 
      type="email"
      id="email"
      onChange={enteredemailHandler}
      onBlur={EmailInputBlurHandler}
      value={enteredemail}/>
      {emailInputhasError && <p className="error-text">Please use coorect Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
