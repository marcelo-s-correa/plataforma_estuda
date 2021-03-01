import { createConnection } from "typeorm";

const connection = await createConnection({
    name: "DB_Postgres",
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "admin",
    password: "admin",
    database: "postgres"
});