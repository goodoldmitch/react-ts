import type { Task } from "../../types/Task"
import styles from './TaskItem.module.css'

type TaskItemProps = Task & {
    deleteItem : ((id : number) => void)
}

function TaskItem(props:TaskItemProps){

 const {id, title , description, deleteItem} = props;

    return(
        <div className={styles.tasksItem}>
            <button onClick={() => deleteItem(id)}>&times;</button>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default TaskItem