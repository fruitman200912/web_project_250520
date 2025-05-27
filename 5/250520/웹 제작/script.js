let sc = 0

function ch(id) {
  document.getElementById(id).style.left = `${Math.floor(Math.random() * 1000)}px`;
  document.getElementById(id).style.bottom = `${Math.floor(Math.random() * 750)}px`;
}

let start = false
let tId
let oId = []

document.getElementById("t").onclick = function () {
  sc += 10
  document.getElementById("sc_bar").innerText = `${sc}`
  clearInterval(tId)
  moveT()
}

function moveT() {
  ch("t")
  tId = setInterval(() => {
    ch("t")
  }, 500);
}

document.querySelectorAll(".o").forEach(el => {
  el.addEventListener("click", function () {
    sc++
    document.getElementById("sc_bar").innerText = `${sc}`
    clearInterval(oId[Number(this.id)])
    moveO(this.id)
  })
})

function moveO(oid) {
  ch(oid)
  oId[Number(oid)] = setInterval(() => {
    ch(oid)
  }, 1000);
}

document.getElementById("sc_bar").onclick = function () {
  document.getElementById("sc_bar").innerText = `${sc}`
  moveT()
  moveO('0')
  moveO('1')
  moveO('2')
  moveO('3')
  moveO('4')
}