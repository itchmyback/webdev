// useState is a hook (a function that is programmed to "hook" into React)
import {useState} from 'react';
import './App.css';

export function App() {
  // initial state is created so we have something to display
  // in the final version, app would receive data from the backend API
  // and load it into the state.

  // it is a POJO (plain old javascript object)
  const initialState = {
    todos: [
      {
        id: 302,
        description: "call mom",
        isComplete: false
      }, {
        id: 420,
        description: "Pickup groceries",
        isComplete: true
      }
    ]
  }

  // useState returns an array whose first element
  // is a true copy of the state object.

  // the second element in the array returned is a function
  // that is the sole updater of the state.

  // any number of such state objects are allowed.

  const [state, setState] = useState(initialState) 
  // const[counter,setCounter] = useState(1);

  //Update todo - toggle completion status
  const onclickMarkTodoComplete = id =>{
    // does this function fire? console.log to check
    console.log(id)
    // create a copy of the state object using the "state" handle
    let newstate = {...state}
    // this_t is a reference to the specific todo that the user
    // wishes to toggle.  the reference points to the click'ed
    // todo object within the array within the state
    let this_t = newstate.todos.find(t => t.id === id)
    // flip the status
    this_t.isComplete = !this_t.isComplete;
    // now make a copy of the state and replace the state with
    // the new state.  The spread operator helps to create a new
    // copy of the state
    console.log(newstate)
    setState(newstate)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todomatic</h1>
        <ol>
          {/* loop over the todos array to create the li's */}
          { state.todos.map(t => (
              <li 
                key={t.id}
                className={t.isComplete ? "completed": "not"}
                // with onClick provide a function that will run,
                // instead of actually running the function
                onClick={
                  () => {
                    onclickMarkTodoComplete(t.id)
                  }
                }
              >
                {t.description}
              </li>
            ))
          }
        </ol>
      </header>
    </div>
  );
}

export default App;
