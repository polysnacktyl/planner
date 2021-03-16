
var Today = moment().format('MMMM Do YYYY');
$("#itsToday").text(Today);
console.log(Today)






//read localStorage Item (time, task) 

//display .time-block text next to matching .hour div 



//---------------------------------------this works don't futz with it//
$(".saveBtn").click(function () {

    var time = $(this).siblings(".hour")[0].innerText.trim();
    var task = $(this).siblings(".time-block")[0].innerText.trim();

    localStorage.setItem(time, JSON.stringify(task));

});
//----------------------------------------but seriously leave it alone//



//yay i figured out how to at least get it to show up in console log
//call the specific key that shows up in the local storage list of key/val pairs 
// console.log(localStorage.getItem("9:00am"))
// console.log(localStorage.getItem("10:00am"))
// console.log(localStorage.getItem("11:00am"))

$(".hour").each(function () {
    var key = $(this).innerText;
    var text = localStorage.getItem(key);
    $(this).siblings(".time-block")[0].innerText = text;

    console.log(key); //undefined
    console.log(text);//returning null

});


