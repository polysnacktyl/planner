
var Today = moment().format('MMMM Do YYYY');
$("#itsToday").text(Today);
console.log(Today)





function displayTasks() {
}
//read localStorage Item (time, task) 

//display .time-block text next to matching .hour div 





//---------------------------------------this works don't futz with it//
$(".saveBtn").click(function () {

var time = $(this).siblings(".hour")[0].innerText.trim();
var task = $(this).siblings(".time-block")[0].innerText.trim();

localStorage.setItem(time, JSON.stringify(task));

}); 
//----------------------------------------but seriously leave it alone//