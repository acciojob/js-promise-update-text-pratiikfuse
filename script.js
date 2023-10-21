//your JS code here. If required.
function x() {
  return new Promise((res, rej) => {
    setTimeout(() => res("Hello, world!"), 1000);
  });
}

x().then((res) => {
  document.getElementById("output").innerText = res;
});