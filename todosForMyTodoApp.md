### ROUTES ###
[x] GET route
    append to DOM
[x] POST route
    add new task to list
[x] PUT route 
    update the task
[x] DELETE route
    remove task

### TASKS ###
[x] input fields that match database + submit button
[x] will append to DOM
[] should also have buttons that append
    [x] complete button
        [x] 'check' it and change background, maybe move to bottom of list
    [x] delete button
        [x] remove task from DOM and database

### STYLING ###
[x] add background color to page
[x] change the fon family and size
[x] show text color and background to show completion

### DATABASE ###
[x] database `weekend-to-do-app`
    [x] add to repo
[x] table `tasks`
| id |      task       | priority |         notes         |
|----|-----------------|----------|-----------------------|
| 1  | update budget   | high     | get ready for Oct     |
| 2  | do laundry      | high     | no more clean clothes!|
| 3  | grocery shopping| high     | need food to live     |
| 4  | email John      | low      |                       |
| 5  | go for a walk   | medium   |                       |
| 6  | clean garage    | low      | getting messy         |

### STRETCH ###

[x] branch `feature-styling-bootstrap`
    [x] add bootstrap to front end
    [x] create button green
    [x] complete button green
    [x] delete button red
    [x] inputs text styled in the bootstrap way
    [x] screen response to different sizes
[x] branch `feature-confirm-delete`
    [x] creat an 'are you sure' alert (bootstrap modal or sweetalerts) see readme
    [x] use CDN option
    
[] branch `feature-ordering-task-query`
    [] reverse order of the returned todos
    [] research Query Params, see readme
[] branch `feature-time-completed`
    [] add ability to show time when task was completed
    [] display on DOM in good format