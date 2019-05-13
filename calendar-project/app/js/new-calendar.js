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
            }

            else {
                cell = document.createElement("td");
                cellTextCurrent = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellTextCurrent);
                row.appendChild(cell);
                date++;
            }
        }
        table.appendChild(row); // appending each row into calendar body.
    }
}

var td = document.querySelectorAll("td");
var taskCount = 0;
var spanCounter = document.createElement('span');
spanCounter.className = "counter";

var tasksArray = [];
var task = new Task();
var currentTdValue;
var idPart = today.getFullYear();

table.onclick = function(event) {
    var target = event.target;
    currentTdValue = parseInt(target.innerHTML);
    if (target.tagName != 'TD') {
        return;
    } else {
        taskCount++;
        spanCounter.innerHTML = taskCount;
        task = new Task(prompt("Name"), today, (idPart + currentTdValue));
        tasksArray.push(task);

        if((task.id - currentTdValue) == (today.getFullYear())){
            task.id = (idPart + currentTdValue);
            localStorage.setItem(task.name, parseInt(target.innerHTML));
            target.classList.add("task-true");
            target.appendChild(spanCounter);
            console.log(parseInt(target.innerHTML));
            console.log("Success");

        } else {
            localStorage.setItem(task.name, task.id);
            console.log("Error");
        }
        console.log(tasksArray);

    
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
var table = document.getElementById("calendar"); // body of the calendar
function createTask(){

}

function Task(name, date, id) {
    this.name = name;
    this.date = date;
    this.id = id;
}
