// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim input to avoid empty tasks

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new li element for the task
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Event listener to remove the task when the remove button is clicked
        removeButton.addEventListener("click", function () {
            taskList.removeChild(li); // Remove the li element from the list
        });

        // Append the remove button to the li
        li.appendChild(removeButton);

        // Append the li (task) to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Attach event listener to addButton for the "Add Task" button
    addButton.addEventListener("click", addTask);

    // Allow task addition when pressing the "Enter" key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask(); // Call the addTask function
        }
    });
});
