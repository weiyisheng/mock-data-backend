export const db = {
  schema: "MockData",
  user: "root",
  password: "Welcome1",
  options: {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
};
