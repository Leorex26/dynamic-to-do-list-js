// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("add-task-btn"); // Add task button
    const taskInput = document.getElementById("task-input");       // Task input field
    const taskList = document.getElementById("task-list");         // Task list (ul element)

    // Function to create and add a task to the list
    function addTask(taskText) {
        // Create a new li element
        const li = document.createElement("li");

        // Create the task text node and append it to the li
        const taskContent = document.createTextNode(taskText);
        li.appendChild(taskContent);

        // Create the remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Append the remove button to the li
        li.appendChild(removeButton);

        // Append the new task to the task list
        taskList.appendChild(li);

        // Add the remove functionality to the remove button
        removeButton.addEventListener("click", function() {
            taskList.removeChild(li); // Remove the task from the list
        });
    }

    // Event listener for the "Add Task" button
    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim(); // Get the input value and trim any extra spaces

        if (taskText) { // Only add the task if the input is not empty
            addTask(taskText); // Add the task to the list
            taskInput.value = ""; // Clear the input field
        } else {
            alert("Please enter a task!"); // Alert if input is empty
        }
    });

    // Optional: Allow pressing "Enter" key to add a task
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click(); // Trigger the add task button click
        }
    });
});
