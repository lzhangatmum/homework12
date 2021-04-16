import logo from './logo.svg';
import './App.css';
import TapList from './components/TapList'
import InputTodo from './components/containers/InputTodo'
function App() {
  return (
    <div className="App">
      {/* <div class="chip">
        John Doe
      </div>
      <input /> */}
      <TapList />
      <InputTodo />
    </div>
  );
}

export default App;
