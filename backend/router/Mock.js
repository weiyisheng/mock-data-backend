import express from "express";

import Mock from "mockjs";

import sequelize from "../sequelize";

const router = express.Router();

router.use("*", function(req, res, next) {
  const exec = async function() {
    const path = req.baseUrl;

    const projectKey = path.split("/")[2];
    const mockKey = path.split("/")[3];

    const project = await sequelize.models["Project"].findOne({
      where: { pathKey: projectKey }
    });

    if (project) {
      const mock = await sequelize.models["Mock"].findOne({
        where: { projectId: project.id, pathKey: mockKey }
      });

      if (mock) {
        const { template } = mock;
        const data = Mock.mock(JSON.parse(template));
        res.status(200).send(data);
      } else {
        res.status(400).send(`NO mock with pathKey : ${mockKey} `);
      }
    } else {
      res.status(400).send(`No project with pathKey : ${projectKey} `);
    }
  };

  exec().then(() => null, err => res.send(400, err.message));
});

export default router;
