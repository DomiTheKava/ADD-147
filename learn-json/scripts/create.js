var persons = [];
var personJSON = "null";

function addme() {
    const person = {};

    person.fname = document.getElementById("fname").value;
    person.lname = document.getElementById("lname").value;
    person.email = document.getElementById("email").value;
    person.phone = document.getElementById("phone").value;

    persons.push(person);

    personJSON = JSON.stringify(persons);

    document.getElementById("json-value").innerHTML = personJSON;
    
    console.log("test")
}


