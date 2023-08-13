
import './App.css';

import { useInput } from './hooks/useInput';
import styled from 'styled-components'



function App() {
 const email = useInput('', {isEmpty:true, isEmail: false})
  return (
    <div className="App">
     <form>
      {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым...</div>}
      {(email.isDirty && email.isEmail) && <div style={{color: 'red'}}>Не правильный емейл...</div>}
        <StyledInput 
          onChange={e=>email.onChange(e)} 
          onBlur={email.onBlur} 
          value={email.value} 
          type='email' 
          placeholder='Enter your email...'
          />

          <StyledButton disabled={!email.inputValid} type='submit'>Submit</StyledButton>
     </form>
    </div>
  );
}

export default App;

const StyledInput = styled('input')`
  border: 2px solid gray;
  border-radius: 8px;
  box-shadow: 1px 2px 2px black;
  width: 250px;
  height: 40px;
  margin-top: 20px;

 
`

const StyledButton = styled('Button')`
   background-color: blue;
    border-radius: 8px;
    border: none;
    color: white;
    padding: 10px;
    font-weight: 700;
    margin-left: 20px;
    &  :disabled {
      background-color: grey;
    }
`


