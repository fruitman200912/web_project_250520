let sc = 0

function ch(id) {
  document.getElementById(id).style.left = `${Math.floor(Math.random() * 1000)}px`;
  document.getElementById(id).style.bottom = `${Math.floor(Math.random() * 750)}px`;
  console.log(document.getElementById(id).style.left)
}

let start = false

document.getElementById("sc_bar").onclick = function () {
  start = true
  console.log(start)

  setInterval(() => {
    ch("1")
    ch("2")
    ch("3")
    ch("4")
    ch("5")
    ch("t")
  }, 1000);
}