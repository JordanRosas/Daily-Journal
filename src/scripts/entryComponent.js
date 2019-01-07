//builds the entry HTML component
const entryComponent = {
    appendInputForm(){
        let inputForm = ` <form action = "">
        <fieldset>
            <label for="journalDate">Date Of Entry</label>
            <input type = "date" name = "journalDate" id = "journalDate" required autofocus>
        </fieldset>

        <fieldset>
            <label for="concept">Concept Covered</label>
            <textarea id = "concept" name = "entryConcept" row = "1" cols = "25" required autofocus></textarea>
        </fieldset>

        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea id = "journalContent" name = "journalEntry" rows = "4" cols = "25" required autofocus></textarea>
        </fieldset>

        <fieldset>
            <label for="mood">Mood For The Day</label>
            <select id = "moodOfDay" name = "mood" required autofocus>
                <option value="Sad">Sad</option>
                <option value="Anger">Anger</option>
                <option value="Surprise">Surprise</option>
                <option value="Joy">Joy</option>
                <option value="Hopeful">Hopeful</option>
            </select>
        </fieldset>
    </form>
    <button id = "submitEntry" type = "button">Submit Journal Entry</button> `

    let formContainer = document.querySelector("#formContainer")
    formContainer.innerHTML = inputForm
    },
    
    createAndAppend(concept, entry, mood, date){
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
}
/*Creates individual entry components */


//This returns tht outer most element: the section with the h2 and 3 p tags appended to it.


