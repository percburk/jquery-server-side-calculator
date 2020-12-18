$(onReady);

function onReady() {
  console.log('JQ');
  $('.operator').on('click', assignOperator);
  $('#enter').on('click', sendData);
  $('#clear').on('click', clearInputs);
}

function assignOperator() {
  console.log('clicked an operator!');
  console.log($(this).data('operator'));
}

function sendData() {
  console.log('clicked enter!');
}

function clearInputs() {
  console.log('clicked clear!');
}
