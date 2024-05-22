let tasks = [];

function displayMenu() {
    console.log("\n========= To-Do List Menu =========");
    console.log("1. Add a task");
    console.log("2. Remove a task");
    console.log("3. View tasks");
    console.log("4. Quit");
}

function addTask() {
    let newTask = prompt("enter the task you want to add:");
    tasks.push(newTask);
    console.log("task added ");
}

function removeTask() {
    if (tasks.length === 0) {
        console.log("no tasks to remove.");
        return;
    }
    console.log("Current tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
    let taskIndex = parseInt(prompt("enter the number of the task you want to remove:")) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks.splice(taskIndex, 1);
        console.log("task removed ");
    } else {
        console.log("invalid task number.");
    }
}

function viewTasks() {
    if (tasks.length === 0) {
        console.log("no tasks available.");
    } else {
        console.log("current tasks:");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

function main() {
    let choice;
    do {
        displayMenu();
        choice = parseInt(prompt("enter your choice (1-4):"));
        switch (choice) {
            case 1:
                addTask();
                break;
            case 2:
                removeTask();
                break;
            case 3:
                viewTasks();
                break;
            case 4:
                console.log("exiting...");
                break;
            default:
                console.log("invalid choice. Please enter a number  1 and 4.");
        }
    } while (choice !== 4);
}

main();
