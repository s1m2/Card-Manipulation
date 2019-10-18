let cardHolder = document.getElementById('cards');
let children = cardHolder.children; // Get all the children of the card placeholder
let nodes = Array.from(children); // Convert the NodeList into an array

document.getElementById('shuffle').addEventListener('click', shuffleItems);
document.getElementById('sort').addEventListener('click', sortElements);

// Fisher-Yates Shuffling Algorithm

function shuffleItems() {

    let array = nodes.slice(); // create a copy of the original array

    let currentIndex = array.length;
    let temporaryValue,randomIndex;

    while (0 != currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    addItemsToDOM(array);
}

// Use the original array to restore after a shuffle

function sortElements () {
    addItemsToDOM(nodes);
}

// This function adds nodeelements to the DOM

function addItemsToDOM (array) {
    let index = 0;

    while (index < array.length) {
        cardHolder.appendChild(array[index]);
        ++index;
    }
}


