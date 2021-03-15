
var Today = moment().format('MMMM Do YYYY');
$("#itsToday").text(Today);
console.log(Today)





function displayTasks() {
    // Get list of keys (maybe from the DOM? idk how did we get the key when we saved them?)
    $(".hour").each(function() {
        // Okay I have my $(this). How do get from that to key? "9:00am"
        console.log("ldfjklaskfjs"); // Set a break point here and poke at things
        // Once i get from that to key, read that key out of local storage
        // Then, find the sibling of $(this) into which I need to put the task I just read from local Storage


    });

    // For each key: 
    //      read the value from local storage
    //      then set the right DOM element's innerText to that value
    var currentTasks = JSON.parse(localStorage.getItem("saveTask"));
    if (currentTasks !== null) {
        document.getElementById("taskField").innerHTML = currentTasks;
    }
} 


$( ".saveBtn" ).click(function() {
    // once i'm in here: figure out if the button is actually clicked 
    //if not, return 
    //if yes click, figure out what inner text or whatever you can glean from that 
    //
    // alert( "Handler for .click() called." );
    var time = $(this).siblings(".hour")[0].innerText.trim();
    var task = $(this).siblings(".time-block")[0].innerText.trim();

    localStorage.setItem(time, JSON.stringify(task));

  });

  displayTasks();