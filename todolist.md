## logic for calculator MUST be done on server!! ##

[ ] html
  [ ] 2 input elements (numbers)
  [ ] 4 mathematical operator buttons 
    [ ] +
    [ ] -
    [ ] /
    [ ] *
  [ ] '=' button to send info
  [ ] 'C' button to clear input fields
  [ ] display answer
  [ ] display list of history of previous equations


[ ] client
  [ ] bundle up inputs as objects and send to server
  [ ] use jQuery to append to DOM:
    [ ] answer to equation that was just sent to server
    [ ] list of history of previous equations
    [ ] history should exist even if the page is refreshed


[ ] server
  [x] set up express
  [x] set up body parser
  [ ] take in the object from client with:
    [ ] input numbers
    [ ] mathematical operator to perform
  [ ] do the math!
  [ ] send back the answer to the equation at hand
  [ ] keep record of the previous equations computed
  [ ] the the record of equations to the client

[ ] styling
[ ] stretch goals!


