import React, {useState} from 'react'
import './App.css'

function App() {
  
    const [tasks, setTasks] = useState([
      { name: "Food Shop", isHighPriority: false },
      { name: "Ironing", isHighPriority: true },
      { name: "Wash car", isHighPriority: false }
    ])

    const [newTask, setNewTask] = useState("I am the new task - I am default")
    const [newTaskPriority, setNewTaskPriority] = useState(false)


    const taskItems = tasks.map((task, index) => {
      return (
        <li key={index} className= {task.isHighPriority ? "high" : "low"}>
        
        <span>{task.name}</span>
        </li>
      )
    })

    const handleTaskInput = (event) => {
      setNewTask(event.target.value)
    }

    const handleRadioInput = (event) => {
      setNewTaskPriority(event.target.value)
    }
    
    const saveNewTask = ((event) => {
      event.preventDefault()
      const copyTask = [... tasks]
      copyTask.push({name: newTask, isHighPriority: newTaskPriority})
      setTasks(copyTask)

      setNewTask("")
    })
    
  
    return (
      <div className="App">

      
      <h1> Fiona's To Do List </h1>
      
      <hr></hr>

      <ul>
        {taskItems}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task"> Add a new task : </label>
        <input id="new-task" type="text" onChange={handleTaskInput} value={newTask} />
        <input type="submit" value="Save New Task" />  

        
        <input onClick={handleRadioInput} type="radio" id="high" name="isHighPriority" value="high" />
        <label for="high"> High Priority </label> 
        <input onClick={handleRadioInput} type="radio" id="low" name="isHighPriority" value=""/>
        <label for="low"> Low Priority </label>
        
        
      </form>
      </div>
    )
}

export default App;


