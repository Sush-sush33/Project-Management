import React, { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const { projects, deleteProject } = useContext(ProjectContext);

  return (
    <div>
      <h1>Project List</h1>
      <Link to="/create">Create Project</Link>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Deadline: {project.deadline}</p>
            <Link to={`/edit/${project.id}`}>Edit</Link>
            <button onClick={() => deleteProject(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;