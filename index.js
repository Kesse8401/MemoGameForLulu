//Array containing last two clicks
let whatWasClicked = []

//Function handling clicked tiles
const containerClickHandler = (e) => {
    const clickedTileReference = e.target
    const clickedTileType = clickedTileReference.getAttribute('data-tileType')
    whatWasClicked.push(clickedTileReference)
    clickedTileReference.classList.add(clickedTileType)
//Condition ensuring that if there were two clicks on any tiles, and those tiles had different id's but the same data-tileType
//tiles will dissapear from the board
    if (whatWasClicked.length === 2 && whatWasClicked[0].getAttribute('id') !== whatWasClicked[1].getAttribute('id')
        && whatWasClicked[0].getAttribute('data-tileType') === whatWasClicked[1].getAttribute('data-tileType')) {
        hideTheTiles(clickedTileType)
        whatWasClicked = []
        //Otherwise after two second there will be called a function that would cover them
    } else if (whatWasClicked.length === 2) {
        setTimeout(bringBackTree, 2000, whatWasClicked)
        whatWasClicked = []
    }

}

//Function that when called removes class of pictures bringing back tree picture
const bringBackTree = (domNodesReferences) => {
    for (let i = 0; i < domNodesReferences.length; i++) {
        const currentElement = domNodesReferences[i]
        const currentElementType = currentElement.getAttribute('data-tileType')
        currentElement.classList.remove(currentElementType)
    }
}

//Function that gets called when two tiles with the same class and data-type-Tile get's clicked. It hides/removes last two clicked tiles from the board
const hideTheTiles = (whichType) => {
    const arrayOfTwo = document.querySelectorAll(`div[data-tileType="${whichType}"]`);
    for (let i = 0; i < arrayOfTwo.length; i++) {
        let arrayElement = arrayOfTwo[i];
        arrayElement.classList.add('hidden')
    }
}


const container = document.querySelector('.container')
//Event listener that listens for click
container.addEventListener('click', containerClickHandler)


