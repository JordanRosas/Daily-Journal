function createAndAppend(concept, entry, mood, date){
    let postedJournalEntry = document.createElement('section');
    /*Creating the journal entry elements*/
    let dailyConcept = document.createElement('h2');
    let journalEntry = document.createElement('p');
    let journalMood = document.createElement('p');
    let journalDate = document.createElement('p');

    
    postedJournalEntry.appendChild(dailyConcept);
    dailyConcept.innerHTML = (concept);

    postedJournalEntry.appendChild(journalEntry);
    journalEntry.innerHTML = (entry);

    postedJournalEntry.appendChild(journalMood);
    journalMood.innerHTML = (mood);

    postedJournalEntry.appendChild(journalDate);
    journalDate.innerHTML = (date);

    return postedJournalEntry

}

//This returns tht outer most element: the section with the h2 and 3 p tags appended to it.


