import Project from '../models/Project.js';

export const createProject = async ({ title, description, owner }) => {
  if (!title || !owner) {
    const err = new Error('Title and owner are required');
    err.status = 400;
    throw err;
  }

  const project = await Project.create({ title, description, owner });
  return project;
};

export const getProjectsByOwner = async (ownerId) => {
  const projects = await Project.find({ owner: ownerId });
  return projects;
};

export const getProjectById = async (id, ownerId) => {
  const project = await Project.findOne({ _id: id, owner: ownerId });
  if (!project) {
    const err = new Error('Project not found');
    err.status = 404;
    throw err;
  }
  return project;
};
