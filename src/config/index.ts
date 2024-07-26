export default {
  SERVER_PORT: process.env.PORT || 3000,
  DB_USER: process.env.DB_USER || "postgres",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_NAME: process.env.DB_NAME || "postgres",
  DB_PASSWORD: process.env.DB_PASSWORD || "password",
  DB_PORT: Number(process.env.DB_PORT) || 5432,
};
