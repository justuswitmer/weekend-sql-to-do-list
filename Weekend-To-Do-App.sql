CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,  -- incantation for IDs
	"task" VARCHAR(256) NOT NULL,  -- NOT NULL aka "required"
	"priority" VARCHAR(256) NOT NULL,
	"notes" VARCHAR (256),
	"complete" VARCHAR DEFAULT FALSE
);   -- semi-colons are NOT optional. Miss one, you will be sad.

INSERT INTO "tasks" ("task", "priority", "notes")
VALUES ('update budget', 'high', 'get ready for Oct'),
	   ('do laundry', 'high', 'no more clean clothes!'),
	   ('grocery shopping', 'high', 'need food to live'),
	   ('email John', 'low', ''),
	   ('go for a walk', 'medium', ''),
	   ('clean garage', 'low', 'getting messy');
