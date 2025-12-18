// Select form and table
const form = document.querySelector("form");
const table = document.querySelector("table");

// Select inputs safely
const taskInput = document.querySelector('input[placeholder="Enter task name"]');
const assignedInput = document.querySelector('input[placeholder="Team member name"]');
const deadlineInput = document.querySelector('input[type="date"]');
const statusSelect = document.querySelector("select");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page reload

    const taskName = taskInput.value.trim();
    const assignedTo = assignedInput.value.trim();
    const deadline = deadlineInput.value;
    const status = statusSelect.value;

    // Validation
    if (taskName === "" || assignedTo === "" || deadline === "") {
        alert("Please fill all fields");
        return;
    }

    // Insert new row
    const newRow = table.insertRow(-1);
    newRow.insertCell(0).innerText = taskName;
    newRow.insertCell(1).innerText = assignedTo;
    newRow.insertCell(2).innerText = deadline;
    newRow.insertCell(3).innerText = status;

    // Reset form
    form.reset();
});
