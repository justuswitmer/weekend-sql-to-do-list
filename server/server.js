// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/tasks.router.js');


// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// uses
app.use('/tasks', tasksRouter);

// router spin up
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
}); // end server up