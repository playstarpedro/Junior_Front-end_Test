import "./App.css";
import './main.css'

import Header from './components/Header';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";


// TODO: Create a new component called `TaskList` in the `components` folder
// TODO: Create a new component called `TaskForm` in the `components` folder
// TODO: Create a new component called `TaskListItem` in the `components` folder

// TODO: A user should be able to see a list of tasks
// TODO: A user should be able to add a new task to the list (with a title)
// TODO: A user should be able to delete a task from the list
// TODO: A user should be able to mark a task as complete
// TODO: A user should be able to distinguish between completed and incomplete tasks
// TODO: A user should be able to count the total number of tasks
// TODO: A user should be able to count the number of completed tasks
// TODO: A user should be able to count the number of incomplete tasks

function App() {
  return (
    <>
    <Header />
    <div className="container">
      <TaskForm />
      <TaskList />
    </div>
    </>
  );
}

export default App;
