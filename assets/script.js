var today = moment();
var currentHour = moment().hour();
var message = document.querySelector('.popUpComments');
var saveBtn = document.querySelector('.container');
var inputSpan = document.querySelector('.description');

// formats the current day for the page header
$('#currentDay').text(today.format("dddd, MMMM Do, YYYY"));

// Runs program to color code the workday according to current hour as soon as page loads.
whatHourIsIt();
renderPreviousSavedInfo();
console.log("Current Hour: " + currentHour);

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
    var userInputs = localStorage.getItem("descriptions");
    if (!userInputs){
        return;
    }
    userInputs = JSON.parse(userInputs);
        for (let i = 0; i < userInputs.length; i++ ){
            var currentHour2 = userInput[i];
            var hour = Object.keys(currentHour2)[0]
            var targetBox = document.querySelector(`#hr${hour}`)
            targetBox.textContent = currentHour2[hour];
        }
}

function saveAllInputs(event){
    var element = event.target;

    // specifies that we only care if the click is on a blue save button or the icon.
    if (element.matches(".saveBtn")||(element.matches(".fas"))) {
        message.textContent = ("Successfully Saved ✅")
        message.classList.add("successfullySaved");

        var storedInputArray=[];
        var inputs = document.querySelectorAll('.description');
        for (let i = 0; i < inputs.length; i++) {
            const inputObj = inputs[i];
            const currentHour = i+9;
            console.log("input text: " + inputObj.value);
            const newObject ={
                // cuz this is an object, the [] specifies the value of the variable, as opposed to the name
                [currentHour]:inputObj.value
            };
            console.log("new array object" + newObject);
            storedInputArray.push(newObject);
        }
        console.log("storedInputArray: "+ storedInputArray);
        var localDescriptions = localStorage.getItem("descriptions");
        
        // here we turn the string into an array
        localDescriptions = JSON.parse(localDescriptions);

        // here we push more items into said array. 
        localDescriptions.push(...storedInputArray)

        // spit it back to string for storage.
        localStorage.setItem("descriptions", JSON.stringify(localDescriptions));

        renderPreviousSavedInfo();
    }
}
//  class activity 26 is about local storage too. 




