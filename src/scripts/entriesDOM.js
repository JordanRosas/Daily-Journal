//reders entry component to the DOMx
const entriesDOM = {
    appendingToDOM(entryHTML){
        let container = document.querySelector('#container');
        container.appendChild(entryHTML);
    }
}
