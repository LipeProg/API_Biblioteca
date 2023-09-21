module.exports = {
    HOST: "localhost",
    USER: "bardozo",
    PASSWORD: "123",
    DB: "estante",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };