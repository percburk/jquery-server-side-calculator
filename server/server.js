const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

// equationLog array holds the objects containing answers and equation strings
const equationLog = [];

// POST route for mathObject from client
app.post('/data', (req, res) => {
  let mathObject = req.body;
  res.sendStatus(201);
  equationSolver(mathObject);
});

// GET route for equationLog to client
app.get('/data', (req, res) => {
  console.log('sending up equationLog');
  res.send(equationLog);
});

let equationSolver = (object) => {
  console.log(object);
  let mathAnswer = 0;

  //break down object into vars for switch statement
  let operator = object.operator;
  let numberOne = Number(object.numberOne);
  let numberTwo = Number(object.numberTwo);

  switch (operator) {
    case '+':
      mathAnswer = numberOne + numberTwo;
      break;
    case '-':
      mathAnswer = numberOne - numberTwo;
      break;
    case '*':
      mathAnswer = numberOne * numberTwo;
      break;
    case '/':
      mathAnswer = numberOne / numberTwo;
      break;
  }

  // solvedEquation contains mathAnswer and the equation as a string
  let solvedEquation = {
    answer: mathAnswer,
    equation: `${numberOne} ${operator} ${numberTwo} = ${mathAnswer}`,
  };

  // push solvedEquation object into equationLog array
  console.log(solvedEquation);
  return equationLog.unshift(solvedEquation);
} // end solveEquation

// app listen
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
