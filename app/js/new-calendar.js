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
    }
    
}

var td = document.querySelectorAll("td");
var taskCount;
var spanCounter = document.createElement('span');
    spanCounter.className = "counter";

var tasksArray = [];
var task = new Task();
var currentTdValue;
var idPart = today.getFullYear();

table.onclick = function(event) {
    var target = event.target;
    currentTdValue = parseInt(target.innerHTML);
    if (target.tagName == 'TD') {
        task = new Task(target.getAttribute("id"), today, prompt("Name"));
        tasksArray.push(task);
        
        if(task.id == target.getAttribute("id")){
            localStorage.setItem( task.id, JSON.stringify(tasksArray));
           
            let currentTasks = []
            // let stringTask = localStorage.getItem();
            for(let i = 0; i <= td.length - 1; i++){
                let currentId = td[i].getAttribute('id');
                currentTasks.push(tasksArray.filter(key => key.id == currentId)); 
            }
            
            let myStorage = window.localStorage;
            console.log(myStorage)
            // if(stringTask != null){
            //     target.classList.add("task-true");
            //     taskCount = currentTasks.length;
            //     spanCounter.innerHTML = taskCount;
            //     target.appendChild(spanCounter);
            // }
        } else {
            // localStorage.setItem( task.id, JSON.stringify(tasksArray));
            console.log("Error");
        }
    } else {
       var nextTable = document.getElementById("calendar");
       console.log("Click");
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

// create task object
function Task(id, date, name) {
    this.id = id;
    this.date = date;
    this.name = name;
}