import TaskItem from '../TaskItem/TaskItem'
import styles from './TaskList.module.css'
import type { Task } from '../../types/Task'

type TasksList = Task[]

function TasksList({ tasks }: { tasks: TasksList }) {

    const tasksList = tasks

    return (
        <div className="container">
            <h2>{tasksList.length > 0 ? 'Tasks to do' : 'Please add first task'}</h2>

            <div className={styles.tasksList}>
                {tasksList.map((item: Task) => (
                    <TaskItem id={item.id} title={item.title} description={item.description} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default TasksList