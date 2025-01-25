// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' prevents saving again to Local Storage
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        if (taskText.trim() === "") {
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
        removeButton.addEventListener("click", function() {
            // Remove the task from the DOM
            taskList.removeChild(li);

            // Remove the task from the Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        });

        // Append the remove button to the li
        li.appendChild(removeButton);

        // Append the li (task) to the task list
        taskList.appendChild(li);

        // Save task to Local Storage if required
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Attach event listener to addButton for the "Add Task" button
    addButton.addEventListener("click", function() {
        addTask(taskInput.value); // Call the addTask function
    });

    // Allow task addition when pressing the "Enter" key
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask(taskInput.value); // Call the addTask function
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});