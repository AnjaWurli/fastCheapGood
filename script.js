const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
let last = null;

function checkbox1() {
  if (fast.checked && cheap.checked && good.checked) {
    last.checked = false;
  }
  last = fast;
}

function checkbox2() {
  if (fast.checked && cheap.checked && good.checked) {
    last.checked = false;
  }
  last = cheap;
}

function checkbox3() {
  if (fast.checked && cheap.checked && good.checked) {
    last.checked = false;
  }
  last = good;
}

fast.addEventListener("change", checkbox1);
cheap.addEventListener("change", checkbox2);
good.addEventListener("change", checkbox3);

console.log(fast.checked);

//Funktion, abfragt, ob alle gechecked sind
//eventListener, die die funktion aufruft
//was wurde zu letzt gechecked?
