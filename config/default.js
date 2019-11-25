

export const db = {
  schema: "MockDB",
  user: "root",
  password: "Welcome1",
  options: {
    host: "172.19.12.140",
    port: "9411",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
};

export const PORT = 3000;
