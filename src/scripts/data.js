fetch("http://localhost:3000/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(entries => {
        entries.forEach(function(allEntries){
            let entryDomHtml = createAndAppend(allEntries.concept, allEntries.entry, allEntries.mood, allEntries.date)
            appendingToDOM(entryDomHtml)
            console.table(allEntries) 
        })
        // What should happen when we finally have the array?

    })

    /*this fetches the data form the JSON file once it has been retrieve
    it will convert the JSON into something that JS can use and understands
    then for the forEach loop executes the allEntries function.
    which creates the section element and its contents and is assigned to the 
    entryDomHtml variable. after that the appendingToDom function takes that 
    section element or the entryDomHtml as an argument.*/