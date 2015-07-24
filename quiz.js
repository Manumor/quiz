var read = require('read');


function Questions(err, file){ 
    if (err) {
        throw err;
    };

    var quiz_data = JSON.parse(file);
    console.log("All answers are an object, so type 'a.....'");
    var i = 0;
    var x = 0;
    runLoop();
    var points = 1;
function runLoop() {
    //reading the answer from user
    user_input = { prompt: quiz_data[x][i].question};
    read(user_input, ShowUserInput);
	}
function ShowUserInput (err, answer) {
        if (answer === quiz_data[0][9].answer) {
            var randomNumber = Math.floor(Math.random()*6);
            x += 1;
            i = randomNumber;
            runLoop();
        }
        else if (answer === quiz_data[0][i].answer) {
            console.log("That is correct!");
            console.log("*****You currently have " + points + " points*****");
            points += 1;
            i += 1;
            runLoop();
        }
        else if (answer === "exit"){
            console.log("Thanks for playing");
        }
        
        else if (answer === quiz_data[1][i].answer) {
            console.log(quiz_data[2][0].finale);
        }
        else {
            console.log("I'm afraid that is the wrong answer.");
            runLoop();
        };
      }
}

module.exports = Questions;