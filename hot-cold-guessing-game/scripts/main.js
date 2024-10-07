var num = 0

function genNumber() {
    num = Math.round(Math.random() * 1000);
    console.log("Random number:" + num);
    return num;
 }

document.getElementById("btn").addEventListener("click", checkNumber);

function checkNumber() {

    // what would be better is if I had a previous guess and compared the new guess to the previous one and tell a color or dialougue compared to that value

    let guessValue = document.getElementById("input").value;
    let guess = parseInt(guessValue);
    console.log("guess:" + guess);

    const difference = Math.abs(guess - num);
    let backgroundColor = "";
    let message = "";

    if (difference === 0) {
        backgroundColor = "green";
        message = "You Win!";
    } else if (difference <= 10) {
        backgroundColor = "red";
        message = "Burning hot!";
    } else if (difference <= 20) {
        backgroundColor = "orange";
        message = "Hot!";
    } else if (difference <= 50) {
        backgroundColor = "yellow"
        message = "Warm!";
    } else if (difference <= 100) {
        backgroundColor = "lightblue";
        message = "Cold!";
    } else if (difference <= 200) {
        backgroundColor = "blue";
        message = "Colder!";
    } else {
        backgroundColor = "darkblue";
        message = "Coldest!";
    }

    document.getElementById("guessCenter").style.backgroundColor = backgroundColor;
    document.getElementById("dialogue").textContent = message;
}

