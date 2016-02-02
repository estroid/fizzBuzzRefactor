
var integer = prompt('Please input a number.'); // user is prompted to supply a number.
integer = +integer

function integerArgument (integer) {

    for (var x = 1; x <= integer; x+=1) { // for loop to count from 1 to argument value by an increment of 1

        if (x % 3 === 0 && x % 5 === 0) { // If a number between 1-100 is divisible by both 3 and 5, print "fizz buzz"
            console.log("fizz buzz");
        }

        else if (x % 3 === 0) { // Else if number between 1-100 is divisible by 3, print "fizz"
            console.log("fizz");
        }

        else if (x % 5 === 0) { // Else if a number between 1-100 is divisible by 5, print "buzz"
            console.log("buzz");
        }
        else { // to print numbers that don't meet the above criteria as well
            console.log(x);
        }
    }
}
integerArgument(integer) // this
