var today = new Date();

var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);

var formattedDate = year + '-' + month + '-' + day;

let userInput = document.getElementById("date");
userInput.max = formattedDate;

let result = document.getElementById('result')

function ageCalculate() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;
    m3 = (m2 >= m1) ? m2 - m1 : (y3--, 12 + m2 - m1);
    d3 = (d2 >= d1) ? d2 - d1 : (m3--, getDaysInMonth(y1, m1) + d2 - d1);
    m3 = (m3 < 0) ? 11 : m3;
    y3 = (m3 < 0) ? y3 - 1 : y3;

    result.innerHTML = `You are <span>${y3}</span> Years <span>${m3} </span>Months  and <span>${d3} </span>Days Old `
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
