// Cache variables
var button = document.getElementById("push");
var userInput = document.querySelector("input");
var ul = document.getElementById("task_list");

//Refactoring
const inputLength = () => {
return userInput.value.length;
};

const createNewList = () => {
var li = document.createElement("li");
li.appendChild(document.createTextNode(userInput.value));
ul.appendChild(li);

li.addEventListener("click", function () {
    var done = li.classList.toggle("task_done");
    var remove = document.createElement("button");

    if (done) {
    remove.appendChild(document.createTextNode("done"));
    remove.classList.add("deleteButton");
    li.appendChild(remove);

    remove.addEventListener("click", function () {
        this.parentElement.remove();
    });
    } else {
    this.getElementsByClassName("deleteButton")[0].remove();
    }
});

userInput.value = "";
};

const addListAfterTouch = () => {
if (inputLength() > 0) {
    createNewList();
} else if (inputLength() === 0) {
    alert("Please enter a to-do item");
}
};

const addListAfterKeypress = (event) => {
if (inputLength() > 0 && event.keyCode === 13) {
    createNewList();
} else if (inputLength() === 0 && event.keyCode === 13) {
    alert("Please enter a to-do item");
}
};

// Events
button.addEventListener("click", addListAfterTouch);
userInput.addEventListener("keypress", addListAfterKeypress);
