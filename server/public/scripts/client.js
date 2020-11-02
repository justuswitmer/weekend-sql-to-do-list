$(document).ready(onReady);

function onReady() {
    console.log('in onReady');
    $(document).on('click', '#addTaskIn', addTask);
    $(document).on('click', '#completeBtn', completeTask);
    $(document).on('click', '#deleteBtn', deleteTask);
    getTasks();
} // end onReady

let date = new Date();
let minute = date.getMinutes();
let hour = date.getHours();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

function getTasks() {
    console.log('in getTasks');
    $('#tasksOut').empty();
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log('response of:', response);
        for (let i = 0; i < response.length; i++) {
            let tasks = response[i];
            if (tasks.complete === 'false' || null) {
                $('#tasksOut').append(`<tr>
                <td>${tasks.task}</td>
                <td>${tasks.priority}</td>
                <td>${tasks.notes}</td>
                <td>Not Completed</td>
                <td><button id="completeBtn" class="btn btn-success" data-id="${tasks.id}">Complete</button></td>
                <td><button id="deleteBtn" class="btn btn-danger" data-id="${tasks.id}">Delete</button></td>
            </tr>`);
            } // end if
            else {
                $('#tasksOut').append(`<tr class="completeBackground">
                <td>${tasks.task}</td>
                <td>${tasks.priority}</td>
                <td>${tasks.notes}</td>
                <td>Completed on:</td>
                <td>${hour}:${minute}; ${month}/${day}/${year}</td>
                <td><button id="deleteBtn" class="btn btn-danger" data-id="${tasks.id}">Delete</button></td>
            </tr>`);
            } // end else
        } // end for
    }).catch(function (err) {
        console.log(err);
    }) // end ajax GET /tasks
} // end getTasks

function addTask() {
    console.log('in addTask');
    let task = $('#taskIn').val();
    let priority = $('#priorityIn').val();
    if (!task || !priority) {
        alert('You must enter a task and a priority in order to add a task.');
    } // end if
    else {
        let newTask = {
            task: $('#taskIn').val(),
            priority: $('#priorityIn').val(),
            notes: $('#notesIn').val()
        };
        $.ajax({
            type: 'POST',
            url: '/tasks',
            data: newTask
        }).then(function (response) {
            console.log('this is my reponse:', response);
            getTasks();
            $('#taskIn').val('');
            $('#priorityIn').val('');
            $('#notesIn').val('');
        }).catch(function (err) {
            console.log('error in POST', err);
            alert('there has been an error; please try again later');
        });
    } // end else
} // end addTask

function completeTask() {
    let id = $(this).data('id');
    console.log('completing task id:', id);
    $.ajax({
        type: 'PUT',
        url: `/tasks/${id}`,
        data: { complete: "true" }
    }).then(function (response) {
        console.log('response from complete', response);
        getTasks();
    }).catch(function (err) {
        console.log('we have an error', err);
        alert('error in completing task', err);
    }); // end ajax
} // end completeTask

function deleteTask() {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this task!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            swal("Poof! Your task has been deleted!", {
                icon: "success",
            });
            let id = $(this).data('id');
            console.log('deleting task id:', id);
            $.ajax({
                type: 'DELETE',
                url: `/tasks/${id}`,
            }).then(function (response) {
                console.log('response from delete', response);
                getTasks();
            }).catch(function (err) {
                console.log('we have an error', err);
                alert('error in deleting task', err);
            }); // end ajax
        } else {
            swal("Your imaginary file is safe!");
        }
    }); // end swal 
} // end deleteTask




