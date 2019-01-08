const eventListeners = {
  handleButtonClick(){
    let date = $("#journalDate").val()
    let concept = $("#concept").val()
    let entry = $("#journalContent").val()
    let mood = $("#moodOfDay").val()
    
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
    // let container = document.querySelector("#container")
    // container.innerHTML = " "
    $("#container").html(" ")
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