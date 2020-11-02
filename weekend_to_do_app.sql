CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,  -- incantation for IDs
	"task" VARCHAR(256) NOT NULL,  -- NOT NULL aka "required"
	"priority" VARCHAR(256) NOT NULL,
	"notes" VARCHAR (256)
);   -- semi-colons are NOT optional. Miss one, you will be sad.


INSERT INTO "tasks" ("task", "priority", "notes")
VALUES ('update budget', 'high', 'get ready for Oct');

INSERT INTO "tasks" ("task", "priority", "notes")
VALUES ('do laundry', 'high', 'no more clean clothes!');

INSERT INTO "tasks" ("task", "priority", "notes")
VALUES ('grocery shopping', 'high', 'need food to live');

INSERT INTO "tasks" ("task", "priority")
VALUES ('email John', 'low');

INSERT INTO "tasks" ("task", "priority")
VALUES ('go for a walk', 'medium');

INSERT INTO "tasks" ("task", "priority", "notes")
VALUES ('clean garage', 'low', 'getting messy');


