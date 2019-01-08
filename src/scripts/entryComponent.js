//builds the entry HTML component
const entryComponent = {
    appendInputForm(){
        let inputForm = ` <form action = "">
        <fieldset id = "userEntry">
            <label for="journalDate">Date Of Entry</label>
            <input type = "date" name = "journalDate" id = "journalDate" required autofocus>
        </fieldset>

        <fieldset id = "userEntry">
            <label for="concept">Concept Covered</label>
            <textarea id = "concept" name = "entryConcept" row = "1" cols = "25" required autofocus></textarea>
        </fieldset>

        <fieldset id = "userEntry">
            <label for="journalEntry">Journal Entry</label>
            <textarea id = "journalContent" name = "journalEntry" rows = "4" cols = "25" required autofocus></textarea>
        </fieldset>

        <fieldset id = "userEntry">
            <label for="mood">Mood For The Day</label>
            <select id = "moodOfDay" name = "mood" required autofocus>
                <option value="Sad">Sad</option>
                <option value="Anger">Anger</option>
                <option value="Hopeful">Hopeful</option>
            </select>
        </fieldset>

    <button id = "submitEntry" type = "button">Submit Journal Entry</button> 

        <fieldset>
            <legend>Filter Journal Entries By Mood</legend>
            <input type="radio" id="goodRadio" name="radioFilter" value="Sad">
            <label for="good">Sad</label>
            <input type="radio" id="notSoGoodRadio" name="radioFilter" value="Anger">
            <label for="notSoGood">Anger</label>
            <input type="radio" id="notGoodRadio" name="radioFilter" value="Hopeful">
            <label for="notGood">Hopeful</label>
        </filedset>
    </form> 
    `


    // let formContainer = document.querySelector("#formContainer")
    // formContainer.innerHTML = inputForm
    $("#formContainer").html(inputForm)
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


