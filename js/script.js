<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Team Task Tracker</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <h1>Team Task & Project Tracking</h1>

    <!-- Task Form -->
    <div class="task-form">
        <h2>Add New Task</h2>

        <form>
            <label>Task Name:</label><br>
            <input type="text" placeholder="Enter task name"><br><br>

            <label>Assigned To:</label><br>
            <input type="text" placeholder="Team member name"><br><br>

            <label>Deadline:</label><br>
            <input type="date"><br><br>

            <label>Status:</label><br>
            <select>
                <option>To-Do</option>
                <option>In-Progress</option>
                <option>Completed</option>
            </select><br><br>

            <button type="submit">Add Task</button>
        </form>
    </div>

    <!-- Task List -->
    <div class="task-list">
        <h2>Task List</h2>

        <table border="1">
            <tr>
                <th>Task</th>
                <th>Assigned To</th>
                <th>Deadline</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>Website Design</td>
                <td>Alice</td>
                <td>20-12-2025</td>
                <td>In-Progress</td>
            </tr>
        </table>
    </div>

    <script src="js/script.js"></script>

</body>
</html>
