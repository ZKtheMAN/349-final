import './App.css';
import {ToDoList} from './ToDoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        To do list
      </header>
      <p>Add items with the textbox below, and click an item to remove it from the list</p>
      <ToDoList />
    </div>
  );
}

export default App;
