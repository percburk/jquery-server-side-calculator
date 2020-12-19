const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));


// POST route for mathObject
app.post('/data', (req, res) => {
  let mathObject = req.body;
  res.sendStatus(201);
  solveEquation(mathObject);
});

let solveEquation = (object) => {
  console.log(object);
  switch (true) {
    case 
  }
}



// app listen
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
})