const container = document.querySelector('.container')

let whatWasClicked = []

const containerClickHandler = (e) => {
    const clickedTileReference = e.target
    const clickedTileType = clickedTileReference.getAttribute('data-tileType')
    whatWasClicked.push(clickedTileReference)
    clickedTileReference.classList.add(clickedTileType)
    //if id of the tile clicked twice is the same bringBackTree()
   
    if (whatWasClicked.length === 2 && whatWasClicked[0].getAttribute('id') !== whatWasClicked[1].getAttribute('id')
        && whatWasClicked[0].getAttribute('data-tileType') === whatWasClicked[1].getAttribute('data-tileType')) {
        hideTheTiles(clickedTileType)
        whatWasClicked = []
    } else if (whatWasClicked.length === 2 && whatWasClicked[0] !== whatWasClicked[1]) {
        setTimeout(bringBackTree, 2000, whatWasClicked)
        whatWasClicked = []
    }
    
}



const bringBackTree = (domNodesReferences) => {
    for (let i = 0; i < domNodesReferences.length; i++) {
        const currentElement = domNodesReferences[i]
        const currentElementType = currentElement.getAttribute('data-tileType')
        currentElement.classList.remove(currentElementType)
    }  
}

container.addEventListener('click', containerClickHandler)

const hideTheTiles = (whichType) => {
    const arrayOfTwo = document.querySelectorAll(`div[data-tileType="${whichType}"]`);
    for (let i = 0; i < arrayOfTwo.length; i++) {
        let arrayElement = arrayOfTwo[i];
        arrayElement.classList.add('hidden')
    }
}







// if two clicks in a row has the same data-tileType they should dissapear

// const classRemover = (e) => {
//     const clickedTileReference = e.target
//     const clickedTileType = clickedTileReference.getAttribute('data-tileType')
//     clickedTileReference.classList.remove(clickedTileType)
// }



