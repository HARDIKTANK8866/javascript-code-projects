let tasks = [];
function displayMenu() {
    console.log("to do list menu");
    console.log("1.add task");
    console.log("2. remove task");
    console.log("3. view task");
    console.log("4.quit");
}
function addTask() {
    let newTask = prompt("Enter the task to add:")
    tasks.push(newTask)
    console.log("task added");
}
function removeTask() {
    if (tasks.length === 0) {
        console.log("no task to remove");
        return
    }
    let taskIndex = parseInt(prompt("enter the number of task want to remove"))-1
    if (taskIndex >= 0 && taskIndex <tasks.length) 
        {
            tasks.splice(taskIndex,1)
            console.log("task removed");
    }else{
        console.log("invalid task number");
    }
}
function viewTasks() {
    if (tasks.length === 0) {
        console.log("no task available");
    }else{
        console.log("current task");
        tasks.forEach((task,index)=>{
            console.log(`${index}.${task}`);
        })
    }
}
function main() {
    let choice
    do{
        displayMenu()
        choice = parseInt(prompt("enter ther choice 1-4"))
        if(choice===1){
            addTask()
        }else if (choice===2){
            removeTask()
        }else if (choice ===3){
            viewTasks()
        }else if(choice!==4)
            console.log("invalid choice ,enter number 1 to 4");
        } while(choice !==4);
            console.log("exit...");
    }
main()
