
import './App.css';
import { useInput } from './hooks/useInput';


function App() {
 const name = useInput('', {isEmpty:true})
  return (
    <div className="App">
     <form>
      {(name.isDirty && name.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым...</div>}
        <input onChange={e=>name.onChange(e)} onBlur={name.onBlur} value={name.value}/>
     </form>
    </div>
  );
}

export default App;
