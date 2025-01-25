// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn"); // Add Task button
    const taskInput = document.getElementById("task-input");   // Task input field
    const taskList = document.getElementById("task-list");     // Task list (ul element)

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        // Check if the input field is not empty
        if (taskText === "") {
            alert("Please enter a task!"); // Alert the user if the input is empty
            return;
        }

        // Create a new li element for the task
        const li = document.createElement("li");
        li.textContent = taskText; // Set the text content of the li

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove"; // Set text for the remove button
        removeButton.classList.add("remove-btn"); // Add class for styling

        // Event listener to remove the task when the remove button is clicked
        removeButton.addEventListener("click", function() {
            taskList.removeChild(li); // Remove the li (task) from the list
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
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask(); // Call the addTask function when "Enter" is pressed
        }
    });
});
