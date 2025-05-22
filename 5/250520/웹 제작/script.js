let sc = 0

function ch(id) {
  document.getElementById(id).style.left = `${Math.floor(Math.random() * 1000)}px`;
  document.getElementById(id).style.bottom = `${Math.floor(Math.random() * 750)}px`;
}

let start = false
let tId
let oId

function moveT() {
  ch("t")
  tId = setInterval(() => {
    ch("t")
    document.getElementById("t").onclick = function () {
      clearInterval(tId)
      moveT()
    }
  }, 500);
}

function moveO(oid) {
  ch(oid)
  oId = setInterval(() => {
    ch(oid)
    document.getElementsByClassName("o").onclick = function (event) {
      clearInterval(oId)
      moveT(`${event.target.id}`)
    }
  }, 2000);
}

document.getElementById("sc_bar").onclick = function () {
  moveT()
  moveO('1')
  moveO('2')
  moveO('3')
  moveO('4')
  moveO('5')
}