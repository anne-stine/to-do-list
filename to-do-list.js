const input = document.querySelector("#input")
const addBtn = document.querySelector("#add-btn")
const tasksArea = document.querySelector("#tasks-area")

/* Storage place for all tasks/labels */
let allTasks = []


const addTask = () =>
{
    if (!input.value){alert("Please write something");return}

    /* Add value to allTasks array */
    allTasks.push(input.value)
    console.log(allTasks)
    
    /* Create container */
    let task = document.createElement("div")
    task.setAttribute("class", "task")
    
    /* Create checkbox */
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    
    /* Create label from last element in allTasks array */
    let label = document.createElement("label")
    label.setAttribute("for", "checkbox")
    label.textContent = allTasks.slice(-1)
    
    /* Combine elements */
    tasksArea.append(task)
    task.append(checkbox, label)

    /* Reset input field */
    input.value = ""

    /* Refocus input field once task is added */
    input.focus()

    /* Event listener for checkbox */
    checkbox.addEventListener("change", (e) => changeTaskStatus(e))
}


const changeTaskStatus = (e) =>
{
    if (e.target.checked == true) {
        /* Change class and appearance */
        e.target.parentNode.classList.add("completed")
    } else {
        /* Remove given class and appearance */
        e.target.parentNode.classList.remove("completed")
    }
}


/* Event listeners */
input.addEventListener("keydown", (e) => {if(e.key === "Enter"){addTask()}})
addBtn.addEventListener("click", addTask)