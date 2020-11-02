// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/tasks.router.js');


// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//globals
const port = 3000;

// usese
app.use('/tasks', tasksRouter);

// router spin up
app.listen(port, () => {
    console.log('listening on server: ', port);
}) // end server up