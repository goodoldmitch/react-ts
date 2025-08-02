import { useState } from 'react'
import './App.css'
import TasksList from './components/TasksList/TasksList'
import Header from './components/Header'
import type { Task } from './types/Task'

function App() {

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasksList, setPostsList] = useState<Task[]>([]);

  function setTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value);
  }

  function setDescription(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskDescription(e.target.value);
  }

  function addTask(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: '123'
    }

    setPostsList([...tasksList, newTask]);
    setTaskTitle('');
    setTaskDescription('');
  }

  return (
    <>
      <Header title="Simple ToDo list" />
      <section className="posts">
        <form onSubmit={addTask}>
          <input type="text" placeholder="title" onChange={setTitle} value={taskTitle} />
          <input type="text" placeholder="description" onChange={setDescription} value={taskDescription} />
          <button>Add</button>
        </form>
        <TasksList tasks={tasksList} />
      </section>
    </>
  )
}

export default App
