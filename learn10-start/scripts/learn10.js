function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs

        const num = 6.54;
        const negativeNum = -3.4;

        document.getElementById("round").innerHTML = Math.round(num);
        document.getElementById("ceil").innerHTML = Math.ceil(num);
        document.getElementById("floor").innerHTML = Math.floor(num);
        document.getElementById("trunc").innerHTML = Math.trunc(num);
        document.getElementById("sign").innerHTML = Math.sign(negativeNum);
    
        document.getElementById("pow").innerHTML = Math.pow(2, 3);
        document.getElementById("min").innerHTML = Math.min(5, 10, -3);
        document.getElementById("random").innerHTML = Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph

    let num2 = Math.random() * 100
    document.getElementById("random2").innerHTML = Math.round(num2).toFixed;

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference

    let bool = Boolean(1 > 0)

    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph

    let num3 = 10;
    let num4 = "10";
    document.getElementById("comparisons").innerHTML = (num3 == num4) + ". returns true == is less struct than ===. === would return false because 10 is not the exact same as '10' ";



    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}