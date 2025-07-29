import TaskItem from '../TaskItem/TaskItem'
import styles from './TaskList.module.css'
import type { Task } from '../../types/Task'

type TasksList = Task[]

function TasksList({posts}: {posts: TasksList}){
    
    const postsList = posts

    return(
        <div className="container">
            <h2>Tasks to do</h2>
            
            <div className={styles.tasksList}>
                {postsList.map((item) => (
                    <TaskItem id={item.id} title={item.title} description={item.description} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default TasksList