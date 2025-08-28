import { useState } from 'react'
import './App.css'
import TasksList from './components/TasksList/TasksList'
import Header from './components/Header'
import type { Task } from './types/Task'

function App() {

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasksList, setPostsList] = useState<Task[]>([]);
  const [formError, setFormError] = useState('');

  function toggleInputError(element : HTMLElement,value : string){
    if(value.trim()){
      element.classList.remove('error');
    }else{
      element.classList.add('error');
    }
  }

  function setTitle(e: React.ChangeEvent<HTMLInputElement>) {
    const titleValue = e.target.value;
    setTaskTitle(titleValue);
    toggleInputError(e.target, titleValue);
  }

  function setDescription(e: React.ChangeEvent<HTMLInputElement>) {
    const descriptionValue = e.target.value
    setTaskDescription(descriptionValue);
    toggleInputError(e.target, descriptionValue);
  }

  function addTask(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if(taskTitle && taskDescription){
      const newTask = {
        id: Date.now(),
        title: taskTitle,
        description: taskDescription
      }

      setPostsList([...tasksList, newTask]);
      setTaskTitle('');
      setTaskDescription('');
      setFormError('');
    }else{
      setFormError('All fields are required')
    }
  }

  return (
    <>
      <Header title="Simple ToDo list" />
      <section className="posts">
        <form onSubmit={addTask}>
          <input type="text" placeholder="title" onChange={setTitle} value={taskTitle} />
          <input type="text" placeholder="description" onChange={setDescription} value={taskDescription} />
          <button>Add</button>
          {formError ? <div className='error-block'>All fields are required</div> : ''}
        </form>
        <TasksList tasks={tasksList} />
      </section>
    </>
  )
}

export default App
