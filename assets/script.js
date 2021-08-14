var today = moment();
var currentHour = moment().hour();
var message = document.querySelector('.popUpComments');
var saveBtn = document.querySelector('.saveBtn');

// formats the current day for the page header
$('#currentDay').text(today.format("dddd, MMMM Do, YYYY"));

// Runs program to color code the workday according to current hour as soon as page loads.
whatHourIsIt();
renderPreviousSavedInfo();
console.log(currentHour);

saveBtn.addEventListener("click", saveAllInputs);

function whatHourIsIt(){
    if (currentHour >17||currentHour < 9){
        message.textContent = ("Your work day has not started it. Enjoy your time.")
        return;
    }

        // sting interp gives back the value of currentHour
    var relevantHour = document.querySelector(`#hour-${currentHour}`);
    relevantHour.classList.add("present");

    for(i=currentHour+1; i<18; i++){
        var relevantHour = document.querySelector(`#hour-${i}`);
    relevantHour.classList.add("future");
    }
    for(i=currentHour-1; i>8; i--){
        var relevantHour = document.querySelector(`#hour-${i}`);
    relevantHour.classList.add("past");
    }
}

function renderPreviousSavedInfo(){
    var userInputs = localStorage.getItem(".description");
    
    
}

function saveAllInputs(){
    message.textContent = ("Successfully Saved ✅")
    message.classList.add("successfullySaved");
    var 

}





