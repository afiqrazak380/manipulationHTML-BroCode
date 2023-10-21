// How to add and change HTML elements


//1 == Create a header (h1) and add some text by prompting user input ==

// const nameTag = document.createElement("h1"); // create h1 header
// nameTag.innerHTML = window.prompt("Write something here:"); // promt user to insert text
// document.body.append(nameTag) // location to add text

// const nameTag = document.createElement("h1"); // create h1 header
// nameTag.textContent = window.prompt("Write something here:"); // promt user to insert text
// document.body.append(nameTag) // location to add text

//2 == Add list item,(li) to an unordered list,(ul)  ==

const myList = document.querySelector("#fruit"); // store the list in a variable
const listItem = document.createElement("li");  // create new element in <li>
listItem.textContent = "mango"; // set the content property of the element in <li>
// myList.append(listItem) // add element to the bottom of <li> 
// myList.prepend(listItem) // add element to the top of <li>

// to place somewhere in the middle of <li>
// parentElement.inserstBefore(whatToBeInserted, getAllElements)[indexNo.]
myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]) 