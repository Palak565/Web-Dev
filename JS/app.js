let tasks = [];

todo = prompt("What do you wanna do?");

while (todo != "quit") {
    if (todo == "list") {
        console.log("Your to-do list:");
        console.log(tasks.slice(0));
    } else if (todo == "add") {
        let task = prompt("Enter task:");
        tasks.splice(tasks.length, 0, task);
        console.log("Task successfully added!");
    } else if (todo == "delete") {
        let toBeDeleted = prompt("Enter task to be deleted:");
        let idx = tasks.indexOf(toBeDeleted);
        if (idx != -1) {
            tasks.splice(idx, 1);
        } else {
            console.log("Task not in list!");
        }
    } else {
        console.error("Enter valid task");
    }

    todo = prompt("What do you wanna do next?");
}

console.log("To-do app successfully closed!");



