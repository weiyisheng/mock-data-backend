const Sequelize = require("sequelize");
import config from "config";

const dbCfg = config.get("db");

const sequelize = new Sequelize(
  dbCfg.schema,
  dbCfg.user,
  dbCfg.password,
  dbCfg.options
);

export default sequelize;
