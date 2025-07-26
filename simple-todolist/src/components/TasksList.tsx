type Task = {
    id: number,
    title: string,
    description: string
}

type TasksList = Task[]

function TasksList({posts}: {posts: TasksList}){
    
    const postsList = posts

    return(
        <div className="container">
            <h2>Tasks to do</h2>
            
            <div className="tasks-list">
                {postsList.map((item) => (
                    <div className="tasks-item" key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TasksList