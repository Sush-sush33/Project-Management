import React, { useState, useContext, useEffect } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import { useHistory, useParams } from 'react-router-dom';

const ProjectForm = () => {
  const { addProject, editProject, projects } = useContext(ProjectContext);
  const [project, setProject] = useState({ name: '', description: '', deadline: '' });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const projectToEdit = projects.find(p => p.id === id);
      if (projectToEdit) {
        setProject(projectToEdit);
      }
    }
  }, [id, projects]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editProject(project);
    } else {
      addProject({ ...project, id: Date.now().toString() });
    }
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={project.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Description</label>
        <textarea name="description" value={project.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Deadline</label>
        <input type="date" name="deadline" value={project.deadline} onChange={handleChange} required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ProjectForm;