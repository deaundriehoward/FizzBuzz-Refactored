$(function () {
	var name = prompt("Enter a Number");

		if (name == 0) {
			//Alert: When the user doesn't enter a number
			alert("Please Enter a Number");
			prompt("Enter a Number");
		} else if (name% 3 === 0 && name % 5 === 0) { 
			//FizzBuzz for 'name' divisible by both '3 and 5'
			prompt("FizzBuzz!");
			prompt("You're killing it! Enter A New Number.")
		} else if ( name % 3 === 0) {
			prompt("Fizz!");
			prompt("You're Awesome! Enter A New Number.")
		}
		else if (name % 5 === 0) {
			prompt("Buzz!");
			prompt("Good Job! Enter a New Number.")
		} 	
		else {
			prompt("Sorry, Try Again!");
			prompt("Enter a number");
		}

});