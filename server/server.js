const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));


// PORT route for mathObject
app.post('/data', (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

let solveEquation = (object) => {
  console.log(object);
}



// app listen
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
})