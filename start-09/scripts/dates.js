/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
var date = new Date();
// display the variable in the basic paragraph

document.getElementById("basic").innerHTML = date


// create a new date variable and load the information for today into it
var date2 = new Date("2024-10-3")
// display the results in the today paragraph (Year, Month, Day)
document.getElementById("today").innerHTML = `${date2.getFullYear() + "-" + date2.getMonth() + "-" + date2.getDay()}`


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph

var date3 = new Date("2004-9-23")
document.getElementById("birthday").innerHTML = date3

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph

document.getElementById("iso").innerHTML = date3.toISOString()

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs

document.getElementById("date1").innerHTML = new Date("09/23/2004").toDateString()
document.getElementById("date2").innerHTML = new Date("09/23/2004").toTimeString()
document.getElementById("date3").innerHTML = new Date("09/23/2004").toLocaleTimeString()

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs

document.getElementById("get1").innerHTML = date3.getDate()
document.getElementById("get2").innerHTML = date3.getMilliseconds()
document.getElementById("get3").innerHTML = date3.getTimezoneOffset()
document.getElementById("get4").innerHTML = date3.getMonth()
    

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
var d4 = new Date("1002, 11, 3")
d4.setDate(12)
document.getElementById("set1").innerHTML = d4.toLocaleDateString()
d4.setTime(99100)
document.getElementById("set2").innerHTML = d4.toTimeString()
d4.setMonth(2)
document.getElementById("set3").innerHTML = d4.getMonth()
d4.setUTCSeconds(100)
document.getElementById("set4").innerHTML = d4.getUTCSeconds()