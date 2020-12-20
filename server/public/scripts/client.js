$(onReady);

function onReady() {
  console.log('JQ');
  $('.operator').on('click', assignOperator);
  $('#enter').on('click', mathObjectToServer);
  $('#clear').on('click', clearInputs);
  $('.number').on('click', makeNumbers);
  $('#clearHistory').on('click', clearHistory);
  $('#history').on('click', '#equation', runEquationAgain);
  renderToDOM();
} // end onReady

let mathString = '';
let operator;

function makeNumbers() {
  // uses click listener to build mathString
  console.log($(this).data('number'));
  let clickedNumber = $(this).data('number');
  mathString += clickedNumber;
  $('#calculatorDisplay').empty();
  $('#calculatorDisplay').text(mathString);
}

function assignOperator() {
  // uses click listener to assign operator in mathString
  // will also reassign operator if new one is clicked
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

function runEquationAgain() {
  // will rerun clicked equation in #history, deletes '=' onward
  mathString = $(this).text();
  equalIndex = mathString.indexOf('=');
  mathString = mathString.slice(0, equalIndex - 1);

  // searches for operator in mathString and assigns it to variable 'operator'
  if (mathString.indexOf('+') !== -1) {
    operator = '+';
  } else if (mathString.indexOf('-') !== -1) {
    operator = '-';
  } else if (mathString.indexOf('x') !== -1) {
    operator = 'x';
  } else if (mathString.indexOf('/') !== -1) {
    operator = '/';
  }

  mathObjectToServer();
}

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

function clearHistory() {
  // deletes equationLog array at server
  $.ajax({
    url: '/data',
    type: 'DELETE',
  }).then(function (response) {
    console.log(response);
    renderToDOM();
  });
}

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
      $('#history').append(
        `<p id="equation" class="equationList">${object.equation}</p>`
      );
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
