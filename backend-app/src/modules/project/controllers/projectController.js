import asyncHandler from 'express-async-handler';
import * as projectService from '../services/projectService.js';

export const createProject = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const owner = req.user.id;
  const project = await projectService.createProject({ title, description, owner });
  res.status(201).json(project);
});

export const listProjects = asyncHandler(async (req, res) => {
  const owner = req.user.id;
  const projects = await projectService.getProjectsByOwner(owner);
  res.json(projects);
});

export const getProject = asyncHandler(async (req, res) => {
  const owner = req.user.id;
  const project = await projectService.getProjectById(req.params.id, owner);
  res.json(project);
});
