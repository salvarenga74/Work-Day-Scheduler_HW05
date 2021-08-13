var today = moment();
var currentHour = moment().hour();
var hour9 = document.querySelector('#hour-9');
var hour10 = document.querySelector('#hour-10');
var hour11 = document.querySelector('#hour-11');
var hour12 = document.querySelector('#hour-12');
var hour1 = document.querySelector('#hour-13');
var hour2 = document.querySelector('#hour-14');
var hour3 = document.querySelector('#hour-15');
var hour4 = document.querySelector('#hour-16');
var hour5 = document.querySelector('#hour-17');
var workHours =[hour9,hour10,hour11,hour12,hour1,hour2,hour3,hour4,hour5];


$('#currentDay').text(today.format("dddd, MMMM Do, YYYY"));

// for( var i=0; i< answerButtons.length; i++){
//     var button= answerButtons[i];
//     button.addEventListener("click",submitAnswer);
// }

console.log(currentHour);

function whatHourIsIt(){
    if (currentHour = 2){
        hour10.setAttribute("class", "present")
    }
    console.log("the hour has changed");
}
whatHourIsIt();