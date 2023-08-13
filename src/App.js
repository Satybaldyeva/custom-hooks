
import './App.css';
import { useInput } from './hooks/useInput';


function App() {
 const name = useInput('')
  return (
    <div className="App">
     <form>
        <input onChange={e=>name.onChange(e)} onBlur={name.onBlur} value={name.value}/>
     </form>
    </div>
  );
}

export default App;
