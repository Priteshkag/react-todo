import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
var count = 1;
function App() {
  var [toDo, setToDO] = useState([])

  const addToDo = () => {
    const toDoText = document.getElementById("todoInput").value
    console.log("added todo = " + toDoText)

    let TodoObject = {
      id: count++,
      title: toDoText
    }
    if (toDoText != "") {
      toDo.push(TodoObject)
      setToDO([...toDo])
    }

    else {
      alert("please enter the text..")

    }

  }

  console.log("length of Todo", toDo.length)

  const deleteToDo = (id) => {

    toDo = toDo.filter(tempToDo => {
      if (id === tempToDo.id)
        return false
      else
        return true
    })
    setToDO([...toDo])
  }

  return (
    <div>
      <h1>
        ToDO App
      </h1>
      < input id="todoInput" type="text" placeholder='add to do here...' />
      <button onClick={addToDo}>Add</button><br />
      {
        toDo.map(tempToDo => {
          return <div>
            {tempToDo.title}
            <button onClick={() => deleteToDo(tempToDo.id)}>Delete  </button>
          </div>
        }
        )}


    </div>
  );
}

export default App;
