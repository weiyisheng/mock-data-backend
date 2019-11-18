const express = require("express");
const graphqlHTTP = require("express-graphql");
const config = require("config");
const PORT = config.get("PORT");
// routers
import MockRouter from "./src/router/Mock";
import NotFoundRouter from "./src/router/NotFound";

// graphql
import schema from "./src/schema";
import sequelize from "./src/sequelize";

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

  app.use(NotFoundRouter);

  console.log(`GraphQL Server is now running on http://localhost:${PORT}`);
  app.listen(PORT);
}

startServer().then(
  () => null,
  err => console.log("Init GraphQL Server Fail", err)
);
