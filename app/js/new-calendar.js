today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

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

// function jump() {
//     currentYear = parseInt(selectYear.value);
//     currentMonth = parseInt(selectMonth.value);
//     showCalendar(currentMonth, currentYear);
// }

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    console.log(firstDay)

    table = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    table.innerHTML = "";


    monthAndYear.innerHTML = months[month] + " " + year;
    // selectYear.value = year;
    // selectMonth.value = month;

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
                cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        table.appendChild(row); // appending each row into calendar body.
    }
    var selectedTd;



    table.onclick = function(event) {
        var target = event.target; // где был клик?

        if (target.tagName != 'TD') {
            selectedTd.classList.remove('highlight');
        } // не на TD? тогда не интересует

        highlight(target); // подсветить TD
    };

    function highlight(node) {
        if (selectedTd) {
            selectedTd.classList.remove('highlight');
        }
        selectedTd = node;
        selectedTd.classList.add('highlight');
    }

}


function daysInMonth(iMonth, iYear) {
    return 33 - new Date(iYear, iMonth, 33).getDate();
}
var table = document.getElementById("calendar"); // body of the calendar
function createTask(){

}
