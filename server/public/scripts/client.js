$(onReady);

function onReady() {
  console.log('JQ');
  $('.operator').on('click', assignOperator);
  $('#enter').on('click', mathObjectToServer);
  $('#clear').on('click', clearInputs);
  $('.number').on('click', makeNumbers);
  renderToDOM();
} // end onReady

let mathString = '';
let operator;

function makeNumbers() {
  console.log($(this).data('number'));
  let clickedNumber = $(this).data('number');
  mathString += clickedNumber;
  $('#calculatorDisplay').empty();
  $('#calculatorDisplay').text(mathString);
}

function assignOperator() {
  console.log('clicked', $(this).data('operator'));
  if (!operator) {
    operator = $(this).data('operator');
    mathString += ` ${operator} `;
  } else {
    mathString = mathString.replace(operator, $(this).data('operator'));
    operator = $(this).data('operator');
  }
  $('#calculatorDisplay').empty();
  $('#calculatorDisplay').append(mathString);
} // end assignOperator

function mathObjectToServer() {
  $('#calculatorDisplay').empty();
  console.log(mathString);
  let mathObject = {};
  let operatorIndex = mathString.indexOf(operator);
  if (!operator) {
    $('#answer').text(mathString);
  } else {
    mathObject.numberOne = mathString.slice(0, operatorIndex - 1);
    mathObject.numberTwo = mathString.slice(operatorIndex + 2);
    mathObject.operator = operator;
    // mathObject to server through POST route
    $.ajax({
      url: '/data',
      type: 'POST',
      data: mathObject,
    }).then(function (response) {
      console.log(response);
      renderToDOM();
    });
  }
  mathString = '';
  operator = '';
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
  $('#calculatorDisplay').empty();
  $('#answer').empty();
  mathString = '';
  operator = '';
} // end clearInputs
