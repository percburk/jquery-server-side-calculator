## logic for calculator MUST be done on server!! ##

[x] html
  [x] 2 input elements (numbers)
  [x] 4 mathematical operator buttons 
    [x] +
    [x] -
    [x] /
    [x] *
  [x] '=' button to send info
  [x] 'C' button to clear input fields
  [x] display answer
  [x] display list of history of previous equations


[x] client
  [x] bundle up inputs as objects and send to server
  [x] use jQuery to append to DOM:
    [x] answer to equation that was just sent to server
    [x] list of history of previous equations
    [x] history should exist even if the page is refreshed


[x] server
  [x] set up express
  [x] set up body parser
  [x] take in the object from client with:
    [x] input numbers
    [x] mathematical operator to perform
  [x] do the math!
  [x] send back the answer to the equation at hand
  [x] keep record of the previous equations computed
  [x] send the record of equations to the client

[ ] styling
[ ] stretch goals
  [ ] only allow POST to server if all info is supplied
  [ ] clear history with a button click using DELETE
  [ ] make it possible for user to rerun an equation listed in history
      (may not be worth it on this one)




