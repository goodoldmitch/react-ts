import './App.css'
import { useState } from 'react'
import TasksList from './components/TasksList/TasksList'
import Header from './components/Header'
import TaskForm from './components/TaskForm/TaskForm'
import type { Task } from './types/Task'

function App() {

  const [taskList, setTaskList] = useState<Task[]>([]);

  function deleteItem(id: number){
    setTaskList(prev => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header title="Simple ToDo list" />
      <section className="posts">
        <TaskForm addTask={(task) => setTaskList((prev) => [...prev, task])}  />
        <TasksList tasks={taskList} deleteItem={deleteItem}/>
      </section>
    </>
  )
}

export default App
