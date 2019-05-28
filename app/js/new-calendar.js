today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");
table = document.getElementById("calendar-body");

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}


function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    table.innerHTML = "";
    monthAndYear.innerHTML = months[month] + " " + year;
  
    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // create a table row
        let row = document.createElement("tr");
        
        for (let j = 1; j < 8; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if ( date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cellTextCurrent = document.createTextNode(date);
                
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellTextCurrent);
                row.appendChild(cell);
                date++;
                // Set id attribute for all day in month
                cell.setAttribute("id", (currentYear + "" + currentMonth + "" + date-1));
            }
        }
        table.appendChild(row); // appending each row into calendar body.
        getTasks();
    }
    
}

var td = document.querySelectorAll("td");
var taskCount = 0;
var spanCounter = document.createElement('span');
    spanCounter.className = "counter";

var tasksArray = [];
var task = new Task();
var currentTdValue = 0;
var idPart = today.getFullYear();


// create task object
function Task(id, name) {
    this.id = id;
    this.name = name;
}

function createTask() {
   task = new Task(target.getAttribute("id"), prompt("Name"));
   tasksArray.push(task);
   saveTasks();
   return tasksArray;
}
function removeTask(index) {
    tasksArray.splice(index, 1);
    saveTasks();
    return tasksArray;
}

function getTask(index) {
    return tasksArray[index];
}

function saveTasks(){
    let tasks = JSON.stringify(tasksArray);
    localStorage.setItem("tasks", tasks)
}

// Get all tasks from localstarage
function getTasks(){
    let tasks = localStorage.getItem("tasks");
    tasksArray = JSON.parse(tasks);
    if(!tasksArray){
        tasksArray = [];
    }
    return tasksArray;
}

// Count tasks in tasks array
// function tasksCounter(){
//     taskCount = obj.length;
//     spanCounter.innerHTML = taskCount;
//     element.appendChild(spanCounter);
// }

window.onload = function(){
   let tasks = getTasks();
   var allTd = document.getElementsByTagName("td");
   var dayId = 0;
  
   
   for(let i = 0; i < allTd.length; i++){
        dayId = allTd[i].getAttribute("id");
    
        if(dayId != null) {
            let tasksInThisDay = tasks.filter(key => key.id == dayId);
            debugger
            dayId.innerHTML = tasksInThisDay.length;
        } else {
            
        }
   
}
    console.log(dayId);
    // console.log(tasks.getItem("id", dayId));
    
    
    // allTd[i] = td[i];
    // if(allTd[i].getAttribute("id") != null ) {
    //     allTd[i].spanCounter = tasksInThisDay.length;
    //     allTd[i].appendChild(spanCounter.innerHTML = tasksInThisDay.length);
        // console.log(tasksInThisDay);
        
    
    // if(dayId[i] == tasks.getItem("id") && dayId[i] != 0){
    //     console.log("Success");
    // }
    
//     for(let j = 0; j <= allTd.length; j++){
//         dayId[j] = allTd[j].getAttribute("id");
//         let tasksInThisDay = tasks.filter(key => key.id == dayId[i]);
//        //  allTd[i].spanCounter = tasksInThisDay.length

//        if(dayId[j] != null && tasksInThisDay.length > 0) {
//            allTd[j].appendChild(spanCounter.innerHTML = tasksInThisDay.length);
//        }
//    }
//    }

    
}

table.onclick = function(event) {
    target = event.target;
    currentTdValue = parseInt(target.innerHTML);
    currentId = target.getAttribute("id");
    if (target.tagName == 'TD') {
        getTasks();
        createTask();
        saveTasks();
         
        let currentTasks = tasksArray.filter(key => key.id == currentId);
        // if(stringTask != null){
        //     target.classList.add("task-true");
        //     taskCount = currentTasks.length;
        //     spanCounter.innerHTML = taskCount;
        //     target.appendChild(spanCounter);
        //     console.log(target)
        // }
        
        // if(localStorage.getItem("tasks")){
        //     let parseTasks = JSON.parse(localStorage.getItem("Tasks"));
        //     parseTasks.push(task);
        //     console.log(typeof(parseTasks));
        // } else {
        //     let parseTasks = JSON.parse(localStorage.getItem("Tasks"));
        //     localStorage.setItem( task.id, JSON.stringify(parseTasks));
        //     console.log("else");
        // }
        
        
        // if(task.id == target.getAttribute("id")){
            // localStorage.setItem( task.id, JSON.stringify(tasksArray));
           
            // console.log("Success");

            // for(let i = 0; i <= td.length; i++){
            //     let currentId = td[i].getAttribute('id');
            //     let stringTask = localStorage.getItem(currentId);
            //     let currentTasks = tasksArray.filter(key => key.id == currentId);
            //     if(stringTask != null){
            //         target.classList.add("task-true");
            //         taskCount = currentTasks.length;
            //         spanCounter.innerHTML = taskCount;
            //         target.appendChild(spanCounter);
            //         console.log(target)
            //     }else {
                   
            //     }
            // }

        // } else {
            // localStorage.setItem( task.id, JSON.stringify(tasksArray));
        //     console.log("Error");
        // }
        
    }
};

// function highlight(node) {
    //     if (selectedTd) {
    //         selectedTd.classList.remove('highlight');
    //     } else {
    //         selectedTd = node;
    //         selectedTd.classList.add('highlight');
    //     }
    // }

function daysInMonth(iMonth, iYear) {
    return 33 - new Date(iYear, iMonth, 33).getDate();
}

