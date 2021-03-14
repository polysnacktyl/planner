
var Today = moment().format('MMMM Do YYYY');
$("#itsToday").text(Today);
console.log(Today)



var taskEntry = document.getElementById("taskField");
function saveTask() {
    var newTask = taskEntry.textContent.trim();
    localStorage.setItem("newTask", JSON.stringify(newTask));
}

function displayTask () {
    var currentTasks = JSON.parse(localStorage.getItem("saveTask"));
    if (currentTasks !== null) {
        document.getElementById("taskField").innerHTML = currentTasks;
    }
} 

function hearButton() {
var taskButton = document.getElementById("taskButton")
taskButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveTask();
    displayTask();
});
}

function init() {
    saveTask();
    displayTask();
}

init();