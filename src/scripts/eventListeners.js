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
  },
  radioButtonClick(){

    let mood = event.target.value.toString()
    let container = document.querySelector("#container")
    container.innerHTML = " "
    API.getJournalEntries().then(allEntries =>{
      const filteredEntries = allEntries.filter(moodEntry => moodEntry.mood.toString() === mood)
      filteredEntries.forEach(entry =>{
        console.log(entry)
        let moodEntryHTML = entryComponent.createAndAppend(entry.concept, entry.entry, entry.mood, entry.date)
        entriesDOM.appendingToDOM(moodEntryHTML)
      })
    })
    console.log(mood)
  }
}