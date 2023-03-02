const project = require('../models/projects');

const getAllProjects = async (req, res) => {
    const projects = await project.find({}).sort({createdAt: -1});

    res.status(200).json(projects);
}

module.exports = { getAllProjects }