// requires
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const tasksRouter = express.Router();

//pool
let pool;
if (process.env.DATABASE_URL) {
    console.log("Gonna connect to a heroku DB");
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL
    });
}
else {
    console.log("Assuming we're running locally");
    pool = new pg.Pool({
        database: "weekend-to-do-app"
    });
}

/*
const Pool = pg.Pool;
const pool = new Pool({
    database: "weekend-to-do-app",
    host: "localhost",
    port: 5432,
    max: 12,
    idleTimeoutMillis: 20000
}); // end pool
*/

tasksRouter.get('/', (req, res) => {
    console.log('in /tasks GET');
    const queryString = `SELECT * FROM "tasks";`;
    pool.query(queryString).then((results) => {
        res.send(results.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    }) // end catch
}); // end tasksRouter GET

tasksRouter.post('/', (req, res) => {
    let tasks = req.body;
    console.log('adding task', tasks);
    let queryString = `INSERT INTO "tasks" ("task", "priority", "notes") 
                        VALUES($1, $2, $3);`;
    pool.query(queryString, [tasks.task, tasks.priority, tasks.notes])
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        }); // end catch
}); // end tasksRouter POST



tasksRouter.put('/:id', (req, res) => {
    let tasks = req.body;
    let id = req.params.id;
    console.log(`completing task ${id}`, tasks);
    let queryString = `UPDATE "tasks" SET "complete" = 'true' WHERE "id" = $1;`;
    pool.query(queryString, [id])
        .then((result) => {
            res.sendStatus(201, result);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        }); // end catch
}); // end tasksRouter PUT

tasksRouter.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log(`completing task ${id}`);
    let queryString = `DELETE FROM "tasks" WHERE "id" = $1;`;
    pool.query(queryString, [id])
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        }); // end catch
}); // end tasksRouter DELETE

module.exports = tasksRouter;