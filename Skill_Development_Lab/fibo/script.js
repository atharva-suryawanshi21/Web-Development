function generate_fibo() {
  const num = document.getElementById("num").value;

  var fib = [];
  fib[0] = 0;
  fib[1] = 1;

  for (var i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  document.getElementById("result").innerText += fib.join(" , ");
}
