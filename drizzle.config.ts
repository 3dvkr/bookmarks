import type { Config } from 'drizzle-kit'
import 'dotenv/config'

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

export default {
	out: './src/db/migrations',
	schema: './src/db/schema.ts',
	driver: 'pg',
	breakpoints: true,
	dbCredentials: { connectionString: process.env.DATABASE_URL },
} satisfies Config
