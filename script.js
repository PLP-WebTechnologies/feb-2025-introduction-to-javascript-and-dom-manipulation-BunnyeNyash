/* Function to change text content of the main title and paragraph */
function changeText() {
    const title = document.getElementById("main-title");
    const text = document.getElementById("main-text");
    title.textContent = "Text Changed!";
    text.textContent = "You just updated the text content dynamically!";
}

/* Function to modify CSS styles of the main section */
function changeStyle() {
    const section = document.querySelector(".interactive");
    section.style.backgroundColor = "#ecf0f1";
    section.style.border = "2px solid #3498db";
    section.style.borderRadius = "10px";
    section.style.padding = "30px";
}

/* Function to add a new list item */
function addElement() {
    const list = document.getElementById("dynamic-list");
    const newItem = document.createElement("li");
    newItem.textContent = `New Item ${list.children.length + 1}`;
    list.appendChild(newItem);
}

/* Function to remove the last list item */
function removeElement() {
    const list = document.getElementById("dynamic-list");
    if (list.children.length > 0) {
        list.removeChild(list.lastChild);
    }
}

/* Add event listeners to buttons */
document.getElementById("change-text").addEventListener("click", changeText);
document.getElementById("change-style").addEventListener("click", changeStyle);
document.getElementById("add-element").addEventListener("click", addElement);
document.getElementById("remove-element").addEventListener("click", removeElement);
