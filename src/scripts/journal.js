/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/
API.getJournalEntries().then(allEntries => {
    // What should happen when we finally have the array
    allEntries.forEach(function(entries){
        let entryDomHtml = entryComponent.createAndAppend(entries.concept, entries.entry, entries.mood, entries.date)
        entriesDOM.appendingToDOM(entryDomHtml)
        console.table(entries) 
    })
})

// let entryButton = document.querySelector('#submitEntry')

// entryButton.addEventListener('click', function addEntryToDom(){
//     for(let i = 0; i < journalEntries.length; i++){
//         createAndAppend(journalEntries[i].concept, journalEntries[i].entry, journalEntries[i].mood, journalEntries[i].date)
//     }
// })




