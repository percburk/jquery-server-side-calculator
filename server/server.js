const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

let equationLog = [];

// POST route for mathObject
app.post('/data', (req, res) => {
  let mathObject = req.body;
  res.sendStatus(201);
  solveEquation(mathObject);
});


// GET route to send up equationLog
app.get('/data', (req, res) => {
  console.log('sending up equationLog');
  res.send(equationLog);
});

let solveEquation = (object) => {
  console.log(object);

  let operator = object.operator;
  let numberOne = Number(object.numberOne);
  let numberTwo = Number(object.numberTwo);
  let mathAnswer = 0;

  switch (true) {
    case operator === '+':
      mathAnswer = numberOne + numberTwo;
      break;
    case operator === '-':
      mathAnswer = numberOne - numberTwo;
      break;
    case operator === 'x':
      mathAnswer = numberOne * numberTwo;
      break;
    case operator === '/':
      mathAnswer = numberOne / numberTwo;
      break;
  }

  let solvedEquation = {
    answer: mathAnswer,
    equation: `${numberOne} ${operator} ${numberTwo} = ${mathAnswer}`,
  };

  console.log(solvedEquation);
  return equationLog.push(solvedEquation);
};

// app listen
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
