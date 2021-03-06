const API = {
    getJournalEntries(){
        return fetch("http://localhost:8088/entries?_expand=mood") // Fetch from the API
        .then(entries => entries.json())  // Parse as JSON
    },
    saveJournalEntry(entryToSave){
        return fetch("http://localhost:8088/entries", { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryToSave)
        })
    }
}

/*this fetches the data form the JSON file once it has been retrieve
it will convert the JSON into something that JS can use and understands
then for the forEach loop executes the allEntries function.
which creates the section element and its contents and is assigned to the 
entryDomHtml variable. after that the appendingToDom function takes that 
section element or the entryDomHtml as an argument.*/