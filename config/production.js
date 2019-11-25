console.log(' ---------------- production -----------');


export const db = {
    schema: "MockDB",
    user: "root",
    password: "Welcome1",
    options: {
      host: "db",
      port: "3306",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  };
  
  export const PORT = 3000;
  