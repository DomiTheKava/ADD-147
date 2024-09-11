function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Dominik P"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    
    let num = 1.231
    let str = "Hello"
    let addResult = num + str
    console.log(addResult)
    document.getElementById("add").innerHTML = addResult


    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph

    let toString = 101
    console.log(toString.toString())
    document.getElementById("to-string").innerHTML = toString.toString()

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let floatEx = 1.195123
    console.log(floatEx.toExponential(1))
    console.log(floatEx.toExponential(3))
    document.getElementById("exponent").innerHTML = floatEx.toExponential(3)

    // Demonstrate the use of toFixed() and print to the fixed paragraph

    console.log(floatEx.toFixed())
    console.log(floatEx.toFixed(2))
    document.getElementById("fixed").innerHTML = floatEx.toFixed(2)

    // Demonstrate the use of toPrecision() and print to the precision paragraph

    console.log(floatEx.toPrecision(2))
    console.log(floatEx.toPrecision(4))
    document.getElementById("precision").innerHTML = floatEx.toPrecision(4)

    // Demonstrate the use of parseFloat() and print to the float paragraph

    document.getElementById("float").innerHTML = parseFloat(addResult)

    // Demonstrate the use of parseInt() and print to the int paragraph

    document.getElementById("int").innerHTML = parseInt(addResult)

    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    
    document.getElementById("equals").innerHTML = "=== is the strict equals to operator, while == is the equals operator. 1 is == to 'one' but 1 is not === to '1'."

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators

    document.getElementById("logic").innerHTML = "&& has higher precedence over ||, so its read first."


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah

    let number = 3

    switch (number) {
        case 1:
            document.getElementById("switch").innerHTML = "Number is 1"
            break
        case 2:

            document.getElementById("switch").innerHTML = "Number is 2"
            break
        case 3:
            document.getElementById("switch").innerHTML = "Number is 3"
            break
        default:
            document.getElementById("switch").innerHTML = "Number is not 1, 2, or 3"
            break
    }


    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph

    let ternaryNumber = 4
    let ternaryResult = (ternaryNumber === 4)
        ? "Number is 4"
        : "Number is not 4"
    console.log(ternaryResult)
    let ternaryResult2 = (ternaryResult === 4) ? "- its equal" : "- nope, not equal"

    document.getElementById("ternary").innerHTML = ternaryResult + "\n" + ternaryResult2

}