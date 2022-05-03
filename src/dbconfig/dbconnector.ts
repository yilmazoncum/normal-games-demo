
import { Pool } from 'pg';
import dotenv from "dotenv";
dotenv.config();

export default new Pool ({
    max: 20,
    connectionString:process.env.DB_CONNECTION_STRING_DOCKER,
    idleTimeoutMillis: 30000
});