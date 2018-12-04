// const journalEntries = [
//     {
//         date: "11/20/2018",
//         concept: "Array methods",
//         entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
//         mood: "Ok"
//     }
// ]

/*Creates individual entry components */

function createAndAppend(concept, entry, mood, date){
    let container = document.querySelector('#container');
    let postedJournalEntry = document.createElement('section');
    /*Creating the journal entry elements*/
    let dailyConcept = document.createElement('h2');
    let journalEntry = document.createElement('p');
    let journalMood = document.createElement('p');
    let journalDate = document.createElement('p');

    container.appendChild(postedJournalEntry);
    postedJournalEntry.appendChild(dailyConcept);
    dailyConcept.innerHTML = (concept);

    postedJournalEntry.appendChild(journalEntry);
    journalEntry.innerHTML = (entry);

    postedJournalEntry.appendChild(journalMood);
    journalMood.innerHTML = (mood);

    postedJournalEntry.appendChild(journalDate);
    journalDate.innerHTML = (date);
}

// let entryButton = document.querySelector('#submitEntry')

// entryButton.addEventListener('click', function addEntryToDom(){
//     for(let i = 0; i < journalEntries.length; i++){
//         createAndAppend(journalEntries[i].concept, journalEntries[i].entry, journalEntries[i].mood, journalEntries[i].date)
//     }
// })

fetch("http://localhost:3000/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(entries => {
        entries.forEach(function(allEntries){
            createAndAppend(allEntries.concept, allEntries.entry, allEntries.mood, allEntries.date)
            console.table(allEntries) 
        })
        // What should happen when we finally have the array?

    })






