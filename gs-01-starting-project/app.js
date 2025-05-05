const buttonEL = document.querySelector("button");
const inputEL = document.querySelector("input");
const listEL = document.querySelector("ul");

function addGoal() {
        const enteredValue = inputEL.value;
        const listItemEL = document.createElement("li");
        listItemEL.textContent = enteredValue;
        listEL.appendChild(listItemEL);
        inputEL.value = ""; // Clear the input field after adding the goal
}

buttonEL.addEventListener("click", addGoal);

