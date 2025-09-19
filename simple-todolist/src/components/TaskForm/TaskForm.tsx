import { useState } from "react";
import type { Task } from "../../types/Task";

interface taskFormProps{
    addTask: (task : Task) => void;
}

export default function TaskForm({addTask} : taskFormProps) {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    function setTitle(e: React.ChangeEvent<HTMLInputElement>){
        const inputValue = e.target.value;
        setTaskTitle(inputValue);
    }

    function setDescription(e: React.ChangeEvent<HTMLInputElement>){
        const inputValue = e.target.value;
        setTaskDescription(inputValue);
    }

    function addTaskSubmit(e: React.ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        const newTask:Task = {
            id: Date.now(),
            title: taskTitle,
            description: taskDescription
        } 
        
        addTask(newTask);
        
        setTaskTitle('');
        setTaskDescription('');
    }
    

    return (
        <form onSubmit={addTaskSubmit}>
            <input type="text" placeholder="title" onChange={setTitle} value={taskTitle} />
            <input type="text" placeholder="description" onChange={setDescription} value={taskDescription} />
            <button>Add</button>
            {/* {formError ? <div className='error-block'>All fields are required</div> : ''} */}
        </form>
    )
}