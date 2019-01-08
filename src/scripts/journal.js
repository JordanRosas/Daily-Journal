/*===================CREATING INPUT FORM===================*/
entryComponent.appendInputForm()

/*=====================OBTAINING DATA FROM ENTRIES API=======================*/

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/
API.getJournalEntries().then(allEntries => {
    // What should happen when we finally have the array
    allEntries.forEach(function(entries){
        let entryDomHtml = entryComponent.createAndAppend(entries.concept, entries.entry, entries.mood, entries.date)
        entriesDOM.appendingToDOM(entryDomHtml)
        // console.table(entries) 
    })
})
/*======================EVENT LISTENER=======================*/
// let submitEntry = document.querySelector("#submitEntry")
// submitEntry.addEventListener("click", eventListeners.handleButtonClick)

$("#submitEntry").click(eventListeners.handleButtonClick)


/*==============================RADIO BUTTON EVENT LISTENERS==========================*/
// let goodRadioButton = document.querySelector("#goodRadio")
// goodRadioButton.addEventListener("click", eventListeners.radioButtonClick)
// let notSoGoodRadioButton = document.querySelector("#notSoGoodRadio")
// notSoGoodRadioButton.addEventListener("click", eventListeners.radioButtonClick)
// let notGoodRadioButton = document.querySelector("#notGoodRadio")
// notGoodRadioButton.addEventListener("click", eventListeners.radioButtonClick)
/*================================JQUERY EVENTLISTENER======================================*/
$("#goodRadio").click(eventListeners.radioButtonClick)
$("#notSoGoodRadio").click(eventListeners.radioButtonClick)
$("#notGoodRadio").click(eventListeners.radioButtonClick)