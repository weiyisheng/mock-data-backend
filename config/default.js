export const db = {
  schema: "MockDataDB",
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

export const PORT = 5000;
