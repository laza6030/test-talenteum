export default {
  serverPort: process.env.PORT || 3000,
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "postgres",
  password: process.env.DB_PASSWORD || "password",
  postgresPort: Number(process.env.DB_PORT) || 5432,
};
