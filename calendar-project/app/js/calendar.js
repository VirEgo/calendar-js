window.onload = function createCalendar(){
    let calendarBlock = document.getElementById('calendar');
    let monthName = document.getElementById('month-name');
    let yearValue = document.getElementById('year-value');
    var nextMonth = document.getElementById('nextBtn');
    var previousMonth = document.getElementById('previousMonth');

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var currentMonth = date.getMonth();
    let monthText = monthNames[currentMonth];
    var year = date.getFullYear();

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';



    for(let i = 0; i < getDay(date); ){
        i++;
        table += '<td>'+ i +'</td>';
    }

    while (date.getMonth() == currentMonth) {
        table += '<td>' + date.getDate() + '</td>';

        if (getDay(date) % 7 == 6) {
            table += '</tr><tr>';
        }

        date.setDate(date.getDate() + 1);
    }
    if (getDay(date) != 0) {
        for (let i = getDay(date); i < 7; i++) {
            table += '<td></td>';
        }
    }
    monthName.innerHTML = monthText;
    yearValue.innerHTML = year;
    table += '</tr></table>';
    calendarBlock.innerHTML = table;

    if(date.getDay()){
    }


    // Switch to the next month
    nextMonth.onclick = function(){
        if(currentMonth === 11){
            currentMonth = 0;
            yearValue.innerHTML = year+=1;;
            monthName.innerHTML = monthNames[currentMonth];
        } else {
            currentMonth+=1;
            monthName.innerHTML = monthNames[currentMonth];
        }
    };


    // Switch to the previous month
    previousMonth.onclick = function(){

        if(currentMonth == 0){
            currentMonth = 11;
            yearValue.innerHTML = year-=1;
            monthName.innerHTML = monthNames[currentMonth];
        } else {
            currentMonth-=1;
            console.log(currentMonth);
            monthName.innerHTML = monthNames[currentMonth];
        }
    };
}
function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}



// var btnNext = document.getElementById('nextBtn');


