const taskInput = document.getElementById("task-input");
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
 

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskTitle = taskInput.value;
    console.log(taskTitle);

    if (taskTitle == "") {
        alert("Please Enter Task");
    } else {
        const listItem = document.createElement("li");
        listItem.innerHTML = taskTitle;
        taskList.append(listItem);
        let span = document.createElement("span");
        span.innerHTML = `&times;`;
        listItem.appendChild(span);
        taskInput.value = "";
        saveListData();
    }
});

taskList.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveListData();
    }

    if (e.target.tagName == "SPAN") {
        const li = e.target.parentElement;
        li.remove();
        saveListData();
    }
});

function showListData() {
    taskList.innerHTML = localStorage.getItem("listItem");
}

function saveListData() {
    localStorage.setItem("listItem", taskList.innerHTML);
}

showListData();

 


 

const tasklist = document.getElementById('task-list');

// Function to show completed tasks
function showCompletedTasks() {
    const taskItems = taskList.querySelectorAll('li');
    taskItems.forEach(item => {
        if (item.classList.contains('checked')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to show incomplete tasks
function showIncompleteTasks() {
    const taskItems = taskList.querySelectorAll('li');
    taskItems.forEach(item => {
        if (!item.classList.contains('checked')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to delete all tasks
function deleteAllTasks() {
    taskList.innerHTML = '';
    saveListData();
}

// Event listeners for filters
const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        const filterType = filter.dataset.filter;
        if (filterType === 'completed') {
            showCompletedTasks();
        } else if (filterType === 'pending') {
            showIncompleteTasks();
        }
    });
});

// Event listener for delete all button
const deleteAllBtn = document.querySelector('.delete-all');

deleteAllBtn.addEventListener('click', () => {
    deleteAllTasks();
});
