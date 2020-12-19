$(onReady);

function onReady() {
  console.log('JQ');
  $('.operator').on('click', assignOperator);
  $('#enter').on('click', mathObjectToServer);
  $('#clear').on('click', clearInputs);
  renderToDOM();
} // end onReady

let mathObject = {};

function assignOperator() {
  // should work like a calculator, clicking new operator will delete previous
  delete mathObject.operator;
  console.log('clicked', $(this).data('operator'));
  let operator = $(this).data('operator');
  mathObject.operator = operator;
} // end assignOperator

function mathObjectToServer() {
  // delete any previous numbers in mathObject, assign new values
  delete mathObject.numberOne;
  delete mathObject.numberTwo;
  mathObject.numberOne = $('#numberOne').val();
  mathObject.numberTwo = $('#numberTwo').val();
  console.log(mathObject);

  // mathObject to server through POST route
  $.ajax({
    url: '/data',
    type: 'POST',
    data: mathObject,
  }).then(function (response) {
    console.log(response);
    renderToDOM();
  });
} // end sendMathObject

function renderToDOM() {
  // equationLog array from server through GET route
  $.ajax({
    url: '/data',
    type: 'GET',
  }).then(function (response) {
    console.log(response);
    $('#answer').empty();
    $('#history').empty();
    // display last answer from equationLog
    $('#answer').text(response[0].answer);
    for (let object of response) {
      $('#history').append(`<li>${object.equation}</li>`);
    }
  });
} // end renderToDOM

function clearInputs() {
  console.log('clicked clear!');
  $('.inputContainer input').val('');
} // end clearInputs
