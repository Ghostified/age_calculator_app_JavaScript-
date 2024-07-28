let userInput = document.getElementById("date");

//Function to prevent date selection from the current day and date
userInput.max = new Date().toISOString().split("T")[0];

//Function to fetch age results
let result = document.getElementById("result");

//Function to calculate age when the Calculate Age button is clicked 
function calculateAge(){
    let birthdate = new Date(userInput.value);

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let today = new Date ();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    //Variables to store diffrence
    let d3, m3, y3;
    y3 = y2 - y1; //returns year gap

    //month diffrence
    if (m2 >= m1){
        m3 = m2 -m1;
    } else {
        y3--;
        m3 = 12 + m2 -m1;
    }

    //day diffrence
    if (d2 >= d1) {
        d3 = d2 -d1;
    } else {
        m3 --;
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
    } if (m3 < 0){
        m3 = 11;
        y3--;

    }
    result.innerHTML = `You are <span>${y3}</span> years,
                        <span>${m3}</span> months 
                        and  <span>${d3}</span> days old `;
    
}

    //function to get the number of days in the month
    function getDaysInMonth(year , month){
        return new Date(year , month, 0).getDate();
    }
