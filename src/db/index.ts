import dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'
// import { drizzle } from 'drizzle-orm/node-postgres'
import postgres from 'postgres'
import * as schema from "./schema"

dotenv.config()

const connectionString = process.env.DATABASE_URL!
// if transaction mode
const client = postgres(connectionString, { prepare: false })

export const db = drizzle(client, {schema})
export { users, sessions } from './schema'
