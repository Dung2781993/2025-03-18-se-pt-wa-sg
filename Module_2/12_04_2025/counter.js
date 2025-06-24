let count = 0;
const maxVisitor = 20;

function updateCount() {
  document.getElementById("count").innerText = count;

  if (count >= maxVisitor) {
    document.getElementById("message").innerText =
      "Maximum number of visitors reached!";
  } else {
    document.getElementById("message").innerText = "";
  }
}

function increase() {
  if (count < maxVisitor) {
    count++;
  }
  updateCount();
}

function decrease() {
  if (count > 0) {
    count--;
  }
  updateCount();
}

function reset() {
  count = 0;
  updateCount();
}
