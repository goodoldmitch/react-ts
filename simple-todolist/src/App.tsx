import './App.css'
import TasksList from './components/TasksList'
import Header from './components/Header'

const posts = [
  {id: 1, title: 'Post title', description: 'Here\'s a description of the post'},
  {id: 2, title: 'Title title', description: 'Text text text'},
  {id: 3, title: 'Title 333 title', description: 'Text text text 333333333333'}
]

function App() {
  return (
    <>
      <Header title="Simple ToDo list"/>
      <section className="posts">
          <TasksList posts={posts}/>
      </section>
    </>
  )
}

export default App
