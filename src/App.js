import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

// import components
import Navbar from './components/Navbar';
import ProjectBoard from './components/ProjectBoard';
import AddProjectTask from './components/projectTask/AddProjectTask';
import EditProjectTask from './components/projectTask/EditProjectTask';

// import states
import ProjectTaskState from './context/ProjectTaskContext/ProjectTaskState';

const App = () => {
  return (
    <Router>
        <ProjectTaskState >
        <Navbar />
        <Switch>
            <Route exact path="/" component={ProjectBoard} />
            <Route path="/add-project-task" component={AddProjectTask}/>
            <Route path="/edit-project-task/:id" component={EditProjectTask} />
        </Switch>

        </ProjectTaskState>
    </Router>
  );
}

export default App;
