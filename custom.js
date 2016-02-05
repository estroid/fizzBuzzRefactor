$(document).ready(function() { // html code is completely loaded before running the code here

    var yourNum = prompt('Please input a number.'); // user is prompted to supply a number.
    // integer = +integer // +var and -var are a unary operators that convert strings to a number

    if (yourNum % 1 != 0) { // This should throw error to user if they use a decimel so use modulus like so: when x is divisible by 1 and remainder doesn't equal to 0 means it's a decimel
        alert("Sorry, this doesn't accept decimels."); // user actually sees alerts vs. console.log which is meant more for the developer
    }

    yourNum = parseInt(yourNum); // parseInt() function in JavaScript to convert a string into an integer

    // this is actually calling the function and puts repeated logic in one spot
    generateFizzBuzz(yourNum);

});

function generateFizzBuzz(yourNum) { // function should evoke what it's doing and preferably using verb forms

//it's common to use i for "iterator" as a variable in a loop
    for (var x = 1; x <= yourNum; x++) { // for loop to count from 1 to argument value by an increment of 1
        if (x % 3 === 0 && x % 5 === 0) { // If a number between 1-100 is divisible by both 3 and 5, print "fizz buzz"
            $('.fizz-buzz').append('<li>fizz buzz</li>');
            console.log("fizz buzz");
        }

        else if (x % 3 === 0) { // Else if number between 1-100 is divisible by 3, print "fizz"
            $('.fizz-buzz').append('<li>fizz</li>');
            console.log("fizz");
        }

        else if (x % 5 === 0) { // Else if a number between 1-100 is divisible by 5, print "buzz"
            $('.fizz-buzz').append('<li>buzz</li>'); // this line of code is manipulating html and appending "buzz" when it is divisible by 5
            console.log("buzz");
        }
        else { // to print numbers that don't meet the above criteria as well
            $('.fizz-buzz').append('<li>' + x + '</li>'); // prints the number when none of the above criteria are met; variable x needs to be concantenated and escaped
            console.log(x);
        }
    }
} // lines 17-39 is a function block but doesn't do anything until you call upon that function--or code that's asleep until you activate it--or call the function as in line 17.

