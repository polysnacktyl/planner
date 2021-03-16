
var Today = moment().format('MMMM Do YYYY');
$("#itsToday").text(Today);
console.log(Today)





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

$(".hour").each(function () {
    var key = $(this).text();
    var text = localStorage.getItem(key);
    $(this).siblings(".time-block").innerText = text;

    console.log(key);
    console.log(text);//returning null

});


