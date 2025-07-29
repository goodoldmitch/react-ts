import type { Task } from "../../types/Task"
import styles from './TaskItem.module.css'

function TaskItem(props:Task){

 const {title , description} = props

    return(
        <div className={styles.tasksItem}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default TaskItem