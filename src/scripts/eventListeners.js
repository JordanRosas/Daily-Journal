const eventListeners = {
  handleButtonClick(){
    let date = document.querySelector("#journalDate").value
    let concept = document.querySelector("#concept").value
    let entry = document.querySelector("#journalContent").value
    let mood = document.querySelector("#moodOfDay").value
    
    const newEntry =  {
      date:date,
      concept:concept,
      entry:entry,
      mood:mood
    }
    API.saveJournalEntry(newEntry)
    .then(response => {
      entryComponent.createAndAppend
    })
  }
}