//Write a function called specialMultiply which accepts two parameters.
//If the function is passed both parameters, it should return the product of the two.
//If the function is only passed one parameter - it should return a function which can later be passed another parameter
//to return the product. You will have to use closure and arguments to solve this.

//Examples:
//specialMultiply(3,4); // 12 specialMultiply(3)(4); // 12 specialMultiply(3); // function(){}....

//task1
// function specialMultiply(num1, num2) {
//     if (num1 == undefined) {
//         return function (param) {
//             return param + num2;
//         };
//     } else if (num2 == undefined) {
//         return function (param) {
//             return param + num1;
//         };
//     } else if (num1 != undefined && num2 != undefined) {
//         return num1 + num2;
//     }
// }
//---------------------------------
/*
Write a function called guessingGame which takes in one parameter amount. The function should return another function
 that takes in a parameter called guess. 
 In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10
  as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function)
 - you should return the string "You got it!". If the guess is too high return "Your guess is too high!"
  and if it is too low, return "Your guess is too low!". 
  You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time): 
var game = guessingGame(5) game(1) // "You're too low!" 
game(8) // "You're too high!" 
game(5) // "You're too low!" game(7) // "You got it!"
 game(1) // "You are all done playing!"
  var game2 = guessingGame(3) game2(5) // "You're too low!"
   game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0" 
    game2(1) // "You are all done playing!" */

//task2

// function guessingGame(amount) {
//     let answer = Math.round(Math.random() * 10);
//     var guesses = 1;

//     return function (guess) {
//         if (guesses == amount) {
//             guesses++;
//             return `No more guesses the answer was ${answer}`;
//         } else if (guesses > amount) {
//             return "You are all done playing!";
//         } else {
//             if (guess == answer) {
//                 return "You got it!";
//             } else if (guess > answer) {
//                 guesses++;
//                 return `Your guess is too high!`;
//             } else if (guess < answer) {
//                 guesses++;
//                 return `Your guess is too low!`;
//             }
//         }
//     };
// }

class Tv {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }

    channel = 1;
    volume = 50;

    UpOrDownVolume(number) {
        if (number > 0 && number < 100) {
            this.volume = number;
        }
    }

    changeCnannel(number) {
        if (number > 1 && number <= 50) {
            this.channel = number;
        }
    }

    resetTv() {
        this.channel = 1;
        this.volume = 50;
    }

    TvStatus() {
        return `${this.brand} at channel ${this.channel},volume ${this.volume}`;
    }
}

function logObj(object1) {
    for (const key in object1) {
        console.log(key);
    }
}

// var deepJS = {
// 	currentEnrollment: [],
// 	studentRecords: [],
// 	addStudent(id,name,paid) {
// 		this.studentRecords.push({ id, name, paid, });
// 	},
// 	enrollStudent(id) {
// 		if (!this.currentEnrollment.includes(id)) {
// 			this.currentEnrollment.push(id);
// 		}
// 	},
// 	printCurrentEnrollment() {
// 		this.printRecords(this.currentEnrollment);
// 	},
// 	enrollPaidStudents() {
// 		this.currentEnrollment = this.paidStudentsToEnroll();
// 		this.printCurrentEnrollment();
// 	},
// 	remindUnpaidStudents() {
// 		this.remindUnpaid(this.currentEnrollment);
// 	},
// 	getStudentFromId(studentId) {
// 		return this.studentRecords.find(matchId);

// 		// *************************

// 		function matchId(record) {
// 			return (record.id == studentId);
// 		}
// 	},
// 	printRecords(recordIds) {
// 		var records = recordIds.map(this.getStudentFromId.bind(this));

// 		records.sort(this.sortByNameAsc);

// 		records.forEach(this.printRecord);
// 	},
// 	sortByNameAsc(record1,record2){
// 		if (record1.name < record2.name) return -1;
// 		else if (record1.name > record2.name) return 1;
// 		else return 0;
// 	},
// 	printRecord(record) {
// 		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
// 	},
// 	paidStudentsToEnroll() {
// 		var recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));

// 		var idsToEnroll = recordsToEnroll.map(this.getStudentId);

// 		return [ ...this.currentEnrollment, ...idsToEnroll ];
// 	},
// 	needToEnroll(record) {
// 		return (record.paid && !this.currentEnrollment.includes(record.id));
// 	},
// 	getStudentId(record) {
// 		return record.id;
// 	},
// 	remindUnpaid(recordIds) {
// 		var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));

// 		this.printRecords(unpaidIds);
// 	},
// 	notYetPaid(studentId) {
// 		var record = this.getStudentFromId(studentId);
// 		return !record.paid;
// 	}
// };

// // ********************************

// deepJS.addStudent(311,"Frank",/*paid=*/true);
// deepJS.addStudent(410,"Suzy",/*paid=*/true);
// deepJS.addStudent(709,"Brian",/*paid=*/false);
// deepJS.addStudent(105,"Henry",/*paid=*/false);
// deepJS.addStudent(502,"Mary",/*paid=*/true);
// deepJS.addStudent(664,"Bob",/*paid=*/false);
// deepJS.addStudent(250,"Peter",/*paid=*/true);
// deepJS.addStudent(375,"Sarah",/*paid=*/true);
// deepJS.addStudent(867,"Greg",/*paid=*/false);

// deepJS.enrollStudent(410);
// deepJS.enrollStudent(105);
// deepJS.enrollStudent(664);
// deepJS.enrollStudent(375);

// deepJS.printCurrentEnrollment();
// console.log("----");
// deepJS.enrollPaidStudents();
// console.log("----");
// deepJS.remindUnpaidStudents();

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
