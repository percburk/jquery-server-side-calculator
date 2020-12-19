$(onReady);

function onReady() {
  console.log('JQ');
  $('.operator').on('click', assignOperator);
  $('#enter').on('click', sendMathObject);
  $('#clear').on('click', clearInputs);
}

let mathObject = {};

function assignOperator() {
  delete mathObject.operator;
  console.log('clicked', $(this).data('operator'));
  let operator = $(this).data('operator');
  mathObject.operator = operator;
}

function sendMathObject() {
  console.log('clicked enter!');
  delete mathObject.numberOne;
  delete mathObject.numberTwo;
  mathObject.numberOne = $('#numberOne').val();
  mathObject.numberTwo = $('#numberTwo').val();
  console.log(mathObject);

  // send mathObject to server
  $.ajax({
    url: '/data',
    type: 'POST',
    data: mathObject,
  }).then(function (response) {
    console.log(response);
    // renderToDOM goes here
  });
}

function clearInputs() {
  console.log('clicked clear!');
  $('.inputContainer input').val('');
}
