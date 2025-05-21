let sc = 0

function ch(id) {
  document.getElementById(id).style.left = `${Math.floor(Math.random() * 1000)}px`;
  document.getElementById(id).style.bottom = `${Math.floor(Math.random() * 750)}px`;
}

let start = false

document.getElementById("sc_bar").onclick = function () {
  start = true

  setInterval(() => {
    ch("1")
  }, 1000);
  setInterval(() => {
    ch("2")
  }, 1000);
  setInterval(() => {
    ch("3")
  }, 1000);
  setInterval(() => {
    ch("4")
  }, 1000);
  setInterval(() => {
    ch("5")
  }, 1000);
  setInterval(() => {
    ch("t")
  }, 500);
}