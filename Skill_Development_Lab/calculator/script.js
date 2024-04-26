function calculate_exp() {
  var result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}

function clear_screen() {
  document.getElementById("display").value = "";
}

function push_element(value) {
  document.getElementById("display").value += value;
}
