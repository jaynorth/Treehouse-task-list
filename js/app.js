

//Variables targeting the elements

var taskInput = document.getElementById('new-task');
console.log(taskInput);

var addButton = document.getElementsByTagName("button")[0]; //in an array for buttons

var incompleteTaskHolder = document.getElementById('incomplete-tasks');

var completedTaskHolder = document.getElementById('completed-tasks');


// Functions required
var addTask = function (){
console.log("Add Task ..");

}
var deleteTask = function(){
console.log("deleting Task ..");

}
var editTask = function(){
console.log("Editing Task ..");
}

var completedTask = function(){
console.log(" Task complete ..");

}

var incompleteTask = function(){
console.log("Task incomplete..");
}


//
var bindTaskEvents = function (taskListItem, checkBoxEventHandler){

};

// Events

addButton.onclick = addTask ;// We don't use addTask() because it's set as a variable, 
//if we did then the function would be triggered the first time without needing to click 


