import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const editProject = (updatedProject) => {
    setProjects(projects.map(project => project.id === updatedProject.id ? updatedProject : project));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, editProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};