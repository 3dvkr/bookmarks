CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"github_id" integer,
	"user" text,
	CONSTRAINT "users_github_id_unique" UNIQUE("github_id")
);
