/* DOM elements */
const input = document.querySelector("#input")
const addBtn = document.querySelector("#add-btn")
const allBtn = document.querySelector("#all-btn")
const completedBtn = document.querySelector("#completed-btn")
const sortBtn = document.querySelector("#sort-btn")
const tasksArea = document.querySelector("#tasks-area")

let allTasks = []
let completedTasks = []



const addTask = () =>
{
    /* Create container */
    let task = document.createElement("div")
    task.setAttribute("class", "task")
    
    /* Create checkbox */
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    
    /* Create label from input value */
    let label = document.createElement("label")
    label.setAttribute("for", "checkbox")
    label.textContent = input.value

    /* Combine elements */
    tasksArea.append(task)
    task.append(checkbox, label)

    /* Reset input field */
    input.value = ""

    /* Event listener for checkbox */
    checkbox.addEventListener("change", changeTaskStatus)
}


const changeTaskStatus = () =>
{
    if (this.checked == true) {
        console.log("checked")
        // this.nextElementSibling.strike() // Strike out text
        // Move task to completedTasks
    } else {
        console.log("unchecked")
        // Remove text strikeout
        // Move task to allTasks
    }
}


/* Event listeners */
input.addEventListener("keydown", (e) => {if(e.key === "Enter"){addTask()}})
addBtn.addEventListener("click", addTask)