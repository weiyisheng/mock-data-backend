const Sequelize = require("sequelize");
import config from "config";

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "app.sqlite",
//   port: 3306
// });

const dbCfg = config.get("db");

const sequelize = new Sequelize(
  dbCfg.schema,
  dbCfg.user,
  dbCfg.password,
  dbCfg.options
);

export default sequelize;
