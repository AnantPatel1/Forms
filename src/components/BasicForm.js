import useInput from "../Hooks/use-input";
const BasicForm = (props) => {

  const {
    value:EnteredFirstName,
    isValid:EnteredFirstNameIsValid,
    haserror: EnteredFirstNameHasError,
    enteredValueHandler:EnteredFirstNameHandler,
    InputBlurHandler:InputFirstNameBlurHandler,
    resetForm:resetFirstNameInput
  }=useInput(value => value.trim()!=='');
  const{
    value:EnteredLastName,
    isValid:EnteredLastNameIsValid,
    haserror: EnteredLastNameHasError,
    enteredValueHandler:EnteredLastNameHandler,
    InputBlurHandler:InputLastNameBlurHandler,
    resetForm:resetLastNameInput
  }=useInput(value => value.trim()!=='');
  const{
    value: enteredemail,
    isValid:enteredemailValid,
    haserror:emailInputhasError,
    enteredValueHandler: enteredemailHandler,
    InputBlurHandler: EmailInputBlurHandler,
    resetForm: resetEmailInput

  }=useInput(value =>value.includes('@'));

  let FormisValid= false;
  if(enteredemailValid && EnteredFirstNameIsValid && EnteredLastNameIsValid)
       FormisValid = true;
  const FormSubmitHandler= event =>{
    event.prevent.Default();

    if(!enteredemailValid || !EnteredFirstNameIsValid || !EnteredLastNameIsValid)
    {
      return;
    }

    resetFirstNameInput();
    resetEmailInput();
    resetLastNameInput();
  }

  const FirstNameInputClass = EnteredFirstNameHasError ? 'form-control invalid': 'form-control';
  const LastNameInputClass = EnteredLastNameHasError ? 'form-control invalid': 'form-control';
  const EmailInputClass = emailInputhasError ? 'form-control invalid': 'form-control';

  return (
    <form onSubmit={FormSubmitHandler}>
      <div className='control-group'>
        <div className={FirstNameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text' 
          id='name' 
          onChange={EnteredFirstNameHandler}
          onBlur={InputFirstNameBlurHandler}
          value={EnteredFirstName}/>
          {EnteredFirstNameHasError && <p className="error-text">Enter the valid First name</p>}
        </div>
        <div className={LastNameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='name'
          onChange={EnteredLastNameHandler}
          onBlur={InputLastNameBlurHandler}
          value={EnteredLastName} />
          {EnteredLastNameHasError && <p className="error-text">Enter the valid Last Name</p>}
        </div>
      </div>
      <div className={EmailInputClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='text' 
        id='name'
        onChange={enteredemailHandler}
        onBlur={EmailInputBlurHandler}
        value={enteredemail} />
        {emailInputhasError && <p className="error-text">Enter the Valid email Data</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!FormisValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
