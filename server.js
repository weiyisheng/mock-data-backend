const express = require("express");
const graphqlHTTP = require("express-graphql");

// routers
import MockRouter from "./backend/router/Mock";

// graphql
import schema from "./backend/schema";
import sequelize from "./backend/sequelize";

// parcel打包
const Bundler = require("parcel-bundler");
const file = "./frontend/index.html";
const options = {};
// 使用 file 和 options 参数，初始化新的 bundler
const bundler = new Bundler(file, options);

async function startServer() {
  // 自动创建数据表
  await sequelize.sync({
    force: false,
    logging: console.log
  });

  const app = express();

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );

  app.use(/\/v1.*/, MockRouter);

  app.use(bundler.middleware());

  console.log("GraphQL Server is now running on http://localhost:4000");
  app.listen(4000);
}

startServer().then(
  () => null,
  err => console.log("Init GraphQL Server Fail", err)
);
