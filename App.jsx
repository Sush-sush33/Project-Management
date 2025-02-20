import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext';
import ProjectList from './pages/ProjectList';
import CreateProject from './pages/CreateProject';
import EditProject from './pages/EditProject';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="container">
      <ProjectProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={ProjectList} />
            <Route path="/create" component={CreateProject} />
            <Route path="/edit/:id" component={EditProject} />
          </Switch>
        </Router>
      </ProjectProvider>
    </div>
  );
};

export default App;